import { useMemo, useState } from 'react'
import { usePageMeta } from '../hooks/usePageMeta'
import { usePosts } from '../hooks/usePosts'
import { categories } from '../data/seedPosts'
import PageHero from '../components/PageHero'
import { Section } from '../components/Section'
import BlogCard from '../components/BlogCard'
import CTASection from '../components/CTASection'

export default function Blog() {
  usePageMeta(
    'Blog — Dicas, Educação e Recursos para Pais e Alunos | XelbMinds',
    'Artigos, dicas e recursos sobre educação, métodos de estudo, parentalidade, bem-estar emocional e autonomia escolar. Conteúdo criado pela equipa da XelbMinds para apoiar pais e alunos.',
  )
  const { posts, loading } = usePosts()
  const [active, setActive] = useState('Todos')

  // Apenas mostra categorias que têm artigos.
  const available = useMemo(() => {
    const used = new Set(posts.map((p) => p.category))
    return ['Todos', ...categories.filter((c) => used.has(c))]
  }, [posts])

  const filtered = active === 'Todos' ? posts : posts.filter((p) => p.category === active)

  return (
    <>
      <PageHero
        eyebrow="Blog XelbMinds"
        title="Recursos e informação para pais e alunos"
        subtitle="Artigos práticos sobre educação, organização escolar, métodos de estudo e bem-estar, escritos pela equipa XelbMinds."
      />

      <Section tone="white">
        {/* Filtro por categorias */}
        <div className="flex flex-wrap gap-2.5">
          {available.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              className={`rounded-full px-4 py-2 font-heading text-sm font-semibold transition-colors cursor-pointer ${
                active === c
                  ? 'bg-blue text-white'
                  : 'border border-line bg-white text-ink/80 hover:border-blue hover:text-blue'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grelha de artigos */}
        {loading ? (
          <p className="mt-12 text-muted">A carregar artigos…</p>
        ) : filtered.length === 0 ? (
          <p className="mt-12 text-muted">Ainda não há artigos nesta categoria.</p>
        ) : (
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((post, i) => (
              <BlogCard key={post.id} post={post} delay={(i % 3) * 60} />
            ))}
          </div>
        )}
      </Section>

      <CTASection
        title="Precisa de apoio para o seu filho?"
        subtitle="Na XelbMinds, cada aluno tem um acompanhamento feito à sua medida. Estamos em Silves e temos todo o gosto em conhecer a sua família."
        primary={{ label: 'Entrar em contacto', to: '/contactos', icon: 'chat' }}
        tone="green"
      />
    </>
  )
}
