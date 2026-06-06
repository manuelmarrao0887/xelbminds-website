import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getPost } from '../data/postsRepository'
import { usePosts } from '../hooks/usePosts'
import { usePageMeta } from '../hooks/usePageMeta'
import { formatDate } from '../components/BlogCard'
import { Section } from '../components/Section'
import BlogCard from '../components/BlogCard'
import CTASection from '../components/CTASection'
import SmartImage from '../components/SmartImage'
import Button from '../components/Button'
import Icon from '../components/Icon'

// Renderiza um bloco do corpo do artigo.
function Block({ block }) {
  switch (block.type) {
    case 'h2':
      return <h2 className="mt-10 mb-3 text-2xl font-semibold">{block.text}</h2>
    case 'ul':
      return (
        <ul className="my-4 space-y-2">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-2.5 text-body">
              <Icon name="check" className="mt-1 h-5 w-5 shrink-0 text-green-600" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )
    case 'tip':
      return (
        <div className="my-6 flex gap-4 rounded-2xl border-l-4 border-green bg-green-50 p-5">
          <Icon name="spark" className="h-6 w-6 shrink-0 text-blue-700" />
          <p className="text-[15px] text-ink">{block.text}</p>
        </div>
      )
    default:
      return <p className="my-4 text-body">{block.text}</p>
  }
}

export default function Artigo() {
  const { id } = useParams()
  const [post, setPost] = useState(undefined) // undefined = a carregar, null = não existe
  const { posts } = usePosts()

  useEffect(() => {
    let alive = true
    getPost(id).then((p) => alive && setPost(p))
    return () => {
      alive = false
    }
  }, [id])

  usePageMeta(
    post ? `${post.title} | Blog XelbMinds` : 'Artigo | Blog XelbMinds',
    post?.excerpt,
  )

  if (post === undefined) {
    return (
      <div className="container-x py-24 text-center text-muted">A carregar artigo…</div>
    )
  }

  if (post === null) {
    return (
      <div className="container-x py-24 text-center">
        <h1 className="text-3xl font-semibold">Artigo não encontrado</h1>
        <p className="mt-3 text-body">O artigo que procura pode ter sido movido ou removido.</p>
        <Button to="/blog" variant="primary" className="mt-6" icon="arrow">
          Voltar ao blog
        </Button>
      </div>
    )
  }

  const related = posts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 3)
  const fallback = posts.filter((p) => p.id !== post.id).slice(0, 3)
  const suggestions = (related.length ? related : fallback).slice(0, 3)

  return (
    <>
      {/* Cabeçalho do artigo */}
      <header className="bg-soft">
        <div className="container-x py-12 lg:py-16">
          <div className="mx-auto max-w-3xl">
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 font-heading text-sm font-semibold text-blue hover:text-blue-700"
            >
              <Icon name="arrow" className="h-4 w-4 rotate-180" />
              Blog
            </Link>
            <div className="mt-4 flex items-center gap-3 text-sm font-semibold">
              <span className="rounded-full bg-green-50 px-3 py-1 font-heading text-blue-700">
                {post.category}
              </span>
              <time className="text-muted" dateTime={post.date}>
                {formatDate(post.date)}
              </time>
            </div>
            <h1 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
              {post.title}
            </h1>
            {post.excerpt && <p className="mt-4 text-lg text-body">{post.excerpt}</p>}
          </div>
        </div>
      </header>

      {/* Imagem de destaque */}
      <div className="container-x -mt-2">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-[2rem] shadow-card">
          <SmartImage
            src={post.cover}
            alt={post.coverAlt || post.title}
            label={post.category}
            loading="eager"
            className="aspect-[16/9] w-full object-cover"
          />
        </div>
      </div>

      {/* Corpo */}
      <article className="container-x py-12 lg:py-16">
        <div className="mx-auto max-w-3xl text-[17px] leading-relaxed">
          {(post.body || []).map((block, i) => (
            <Block key={i} block={block} />
          ))}

          {/* CTA final do artigo */}
          <div className="mt-12 rounded-[1.75rem] border border-blue-100 bg-blue-50 p-7">
            <h2 className="text-xl font-semibold">Precisa de apoio para o seu filho?</h2>
            <p className="mt-2 text-body">
              Na XelbMinds, cada aluno tem um acompanhamento feito à sua medida. Se se
              reconheceu nestas linhas, fale connosco. Estamos em Silves e temos todo o gosto
              em conhecer a sua família.
            </p>
            <Button to="/contactos" variant="primary" className="mt-5" icon="chat">
              Entrar em contacto
            </Button>
          </div>
        </div>
      </article>

      {/* Artigos relacionados */}
      {suggestions.length > 0 && (
        <Section tone="soft">
          <h2 className="text-2xl font-semibold">Continue a ler</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {suggestions.map((p, i) => (
              <BlogCard key={p.id} post={p} delay={i * 60} />
            ))}
          </div>
        </Section>
      )}

      <CTASection
        title="Dê o primeiro passo. Estamos aqui para ajudar."
        subtitle="Entre em contacto connosco e vamos perceber juntos qual é o apoio mais adequado para o seu filho."
        tone="blue"
      />
    </>
  )
}
