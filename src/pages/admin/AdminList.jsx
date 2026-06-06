import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { usePosts } from '../../hooks/usePosts'
import { deletePost, resetToSeed } from '../../data/postsRepository'
import { formatDate } from '../../components/BlogCard'
import SmartImage from '../../components/SmartImage'
import Button from '../../components/Button'
import Icon from '../../components/Icon'

export default function AdminList() {
  const { posts, loading } = usePosts()

  useEffect(() => {
    document.title = 'Backoffice — Artigos | XelbMinds'
  }, [])

  const onDelete = async (post) => {
    if (window.confirm(`Eliminar o artigo "${post.title}"? Esta ação não pode ser anulada.`)) {
      await deletePost(post.id)
    }
  }

  const onReset = async () => {
    if (
      window.confirm(
        'Repor os artigos iniciais? Isto substitui todos os artigos atuais pelos artigos de exemplo.',
      )
    ) {
      await resetToSeed()
    }
  }

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Artigos do blog</h1>
          <p className="mt-1 text-sm text-muted">
            {posts.length} {posts.length === 1 ? 'artigo' : 'artigos'} · guardados localmente
            (localStorage)
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" size="sm" onClick={onReset}>
            Repor exemplos
          </Button>
          <Button to="/admin/novo" variant="primary" size="sm" icon="plus">
            Novo artigo
          </Button>
        </div>
      </div>

      {/* Aviso sobre persistência */}
      <div className="mt-5 flex gap-3 rounded-2xl border border-blue-100 bg-blue-50 p-4 text-sm text-blue-900">
        <Icon name="spark" className="h-5 w-5 shrink-0 text-blue-700" />
        <p>
          Os artigos são guardados no <strong>localStorage</strong> deste navegador (modo de
          teste). Para os tornar permanentes e partilhados, ligar o repositório ao Firebase —
          a interface de dados já está preparada para essa migração.
        </p>
      </div>

      {loading ? (
        <p className="mt-8 text-muted">A carregar…</p>
      ) : posts.length === 0 ? (
        <div className="mt-8 rounded-2xl border border-dashed border-line bg-white p-10 text-center">
          <p className="text-body">Ainda não há artigos.</p>
          <Button to="/admin/novo" variant="primary" className="mt-4" icon="plus">
            Criar o primeiro artigo
          </Button>
        </div>
      ) : (
        <div className="mt-6 overflow-hidden rounded-2xl border border-line bg-white">
          <ul className="divide-y divide-line">
            {posts.map((post) => (
              <li key={post.id} className="flex items-center gap-4 p-4">
                <div className="hidden h-16 w-24 shrink-0 overflow-hidden rounded-xl sm:block">
                  <SmartImage
                    src={post.cover}
                    alt={post.coverAlt || post.title}
                    label={post.category}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="rounded-full bg-green-50 px-2.5 py-0.5 font-heading font-bold text-blue-700">
                      {post.category}
                    </span>
                    <time className="text-muted" dateTime={post.date}>
                      {formatDate(post.date)}
                    </time>
                  </div>
                  <h3 className="mt-1 truncate font-heading font-bold text-ink">{post.title}</h3>
                  <p className="truncate text-sm text-muted">{post.excerpt}</p>
                </div>
                <div className="flex shrink-0 items-center gap-1">
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-muted transition-colors hover:bg-soft hover:text-blue cursor-pointer"
                    title="Ver no site"
                    target="_blank"
                  >
                    <Icon name="arrow" className="h-5 w-5" />
                  </Link>
                  <Link
                    to={`/admin/editar/${post.id}`}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-muted transition-colors hover:bg-blue-50 hover:text-blue cursor-pointer"
                    title="Editar"
                  >
                    <Icon name="edit" className="h-5 w-5" />
                  </Link>
                  <button
                    type="button"
                    onClick={() => onDelete(post)}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-muted transition-colors hover:bg-red-50 hover:text-red-500 cursor-pointer"
                    title="Eliminar"
                  >
                    <Icon name="trash" className="h-5 w-5" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
