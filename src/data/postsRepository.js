// ────────────────────────────────────────────────────────────────────────────
// Repositório de artigos — camada de dados abstraída.
//
// HOJE: implementação em localStorage (sem servidor, ideal para testar).
// AMANHÃ: para migrar para o Firebase, basta reescrever o corpo destas funções
//         (getPosts, getPost, savePost, deletePost) com as chamadas ao Firestore.
//         As páginas e o backoffice NÃO precisam de mudar — usam apenas esta API.
//
// A API é assíncrona (devolve Promises) precisamente para já espelhar o Firebase.
// ────────────────────────────────────────────────────────────────────────────

import { seedPosts } from './seedPosts'

const STORAGE_KEY = 'xelbminds.posts.v1'
const listeners = new Set()

function slugify(str = '') {
  return str
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // remove acentos
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
    .slice(0, 80)
}

function read() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) {
      // Primeira visita: semeia com os artigos iniciais do briefing.
      localStorage.setItem(STORAGE_KEY, JSON.stringify(seedPosts))
      return [...seedPosts]
    }
    return JSON.parse(raw)
  } catch (err) {
    console.error('Falha ao ler artigos do localStorage:', err)
    return [...seedPosts]
  }
}

function write(posts) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts))
  listeners.forEach((fn) => fn())
}

function sortByDateDesc(posts) {
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1))
}

// ── API pública ─────────────────────────────────────────────────────────────

export async function getPosts() {
  return sortByDateDesc(read())
}

export async function getPost(id) {
  return read().find((p) => p.id === id) || null
}

/**
 * Cria ou atualiza um artigo.
 * Se não tiver `id`, gera um a partir do título.
 * Devolve o artigo guardado (com id final).
 */
export async function savePost(input) {
  const posts = read()
  const now = new Date().toISOString().slice(0, 10)

  const post = {
    title: input.title?.trim() || 'Sem título',
    category: input.category || 'Notícias XelbMinds',
    date: input.date || now,
    excerpt: input.excerpt?.trim() || '',
    cover: input.cover?.trim() || '',
    coverAlt: input.coverAlt?.trim() || input.title?.trim() || '',
    body: normalizeBody(input.body),
    id: input.id || ensureUniqueId(slugify(input.title) || `artigo-${Date.now()}`, posts),
  }

  const idx = posts.findIndex((p) => p.id === post.id)
  if (idx >= 0) posts[idx] = post
  else posts.unshift(post)

  write(posts)
  return post
}

export async function deletePost(id) {
  write(read().filter((p) => p.id !== id))
}

/** Repõe os artigos iniciais (útil durante testes). */
export async function resetToSeed() {
  write([...seedPosts])
}

/** Subscrição para atualização em tempo real dentro do separador. */
export function subscribe(listener) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

// ── Utilitários internos ─────────────────────────────────────────────────────

function ensureUniqueId(base, posts) {
  let id = base
  let n = 2
  while (posts.some((p) => p.id === id)) {
    id = `${base}-${n++}`
  }
  return id
}

/**
 * Aceita `body` como array de blocos (formato do site) OU como texto simples
 * vindo do editor — nesse caso converte cada parágrafo num bloco { type: 'p' }.
 */
function normalizeBody(body) {
  if (Array.isArray(body)) return body
  if (typeof body === 'string') {
    return body
      .split(/\n{2,}/)
      .map((chunk) => chunk.trim())
      .filter(Boolean)
      .map((text) =>
        text.startsWith('## ')
          ? { type: 'h2', text: text.replace(/^##\s+/, '') }
          : { type: 'p', text },
      )
  }
  return []
}

/** Converte blocos de volta para texto editável (usado pelo editor). */
export function bodyToText(body = []) {
  return body
    .map((b) => {
      if (b.type === 'h2') return `## ${b.text}`
      if (b.type === 'ul') return (b.items || []).map((i) => `- ${i}`).join('\n')
      if (b.type === 'tip') return b.text
      return b.text
    })
    .join('\n\n')
}
