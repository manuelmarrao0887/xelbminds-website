import { Link } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'
import { usePosts } from '../hooks/usePosts'
import { services } from '../data/services'
import { differentiators, autonomyPillars } from '../data/content'
import { site } from '../data/site'
import { Section, SectionHeading } from '../components/Section'
import { ServiceCard, FeatureCard } from '../components/Cards'
import BlogCard from '../components/BlogCard'
import CTASection from '../components/CTASection'
import Button from '../components/Button'
import Reveal from '../components/Reveal'
import SmartImage from '../components/SmartImage'
import Icon from '../components/Icon'

export default function Home() {
  usePageMeta(
    'XelbMinds — Centro de Explicações e Apoio ao Estudo em Silves',
    'Centro de explicações e apoio ao estudo personalizado em Silves, Algarve. Acompanhamos crianças e jovens do 1.º ciclo ao secundário com apoio individual, em grupo e programas de férias. Conheça a XelbMinds.',
  )
  const { posts } = usePosts()
  const latest = posts.slice(0, 3)

  return (
    <>
      {/* ── Secção 1 — Hero ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-green-50 to-white">
        <span className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-green-100 blur-3xl" />
        <span className="pointer-events-none absolute -left-24 top-40 h-80 w-80 rounded-full bg-blue-100 blur-3xl" />

        <div className="container-x relative grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-green/50 bg-white/70 px-4 py-1.5 font-heading text-sm font-bold text-blue-700">
              <Icon name="pin" className="h-4 w-4 text-green-600" />
              Centro de estudos em {site.location}
            </span>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.1] sm:text-5xl lg:text-[3.4rem]">
              O lugar onde o seu filho{' '}
              <span className="text-blue">aprende a gostar de aprender.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-body">
              Centro de explicações e apoio ao estudo em Silves, Algarve. Acompanhamento
              personalizado do 1.º ciclo ao secundário, com atenção ao percurso académico,
              emocional e pessoal de cada aluno.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button to="/servicos" variant="primary" size="lg" icon="arrow">
                Ver os nossos serviços
              </Button>
              <Button to="/contactos" variant="outline" size="lg" icon="chat">
                Falar connosco
              </Button>
            </div>
          </Reveal>

          <Reveal delay={120} className="relative">
            <div className="relative overflow-hidden rounded-[2rem] shadow-soft">
              <SmartImage
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1100&q=80"
                alt="Aluno a estudar num ambiente acolhedor com luz natural"
                label="Espaço XelbMinds"
                loading="eager"
                className="aspect-[4/5] w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]"
              />
            </div>
            {/* Cartão flutuante */}
            <div className="absolute -bottom-5 -left-3 hidden rounded-2xl bg-white p-4 shadow-soft sm:block">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-green text-ink">
                  <Icon name="heart" className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-heading text-sm font-bold text-ink">Acompanhamento</p>
                  <p className="text-xs text-muted">pensado para cada aluno</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Secção 2 — Apresentação e Missão ────────────────────────── */}
      <Section tone="soft">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="order-2 lg:order-1">
            <div className="overflow-hidden rounded-[2rem] shadow-card">
              <SmartImage
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1100&q=80"
                alt="Sessão de apoio ao estudo na XelbMinds"
                label="A nossa missão"
                className="aspect-[5/4] w-full object-cover"
              />
            </div>
          </Reveal>
          <div className="order-1 lg:order-2">
            <SectionHeading
              align="left"
              eyebrow="A nossa missão"
              title="Cada criança tem o seu ritmo e o seu potencial"
            />
            <div className="mt-5 space-y-4 text-body">
              <p>
                Na XelbMinds acreditamos que cada criança tem o seu ritmo e o seu potencial.
                O nosso centro de estudos, em Silves, foi criado para oferecer um
                acompanhamento verdadeiramente personalizado, onde o aluno é visto como
                pessoa e não apenas como nota.
              </p>
              <p>
                Trabalhamos lado a lado com alunos do 1.º ciclo ao ensino secundário,
                ajudando-os a construir confiança, autonomia e métodos de estudo que ficam
                para a vida.
              </p>
            </div>
            <Button to="/sobre" variant="ghost" className="mt-6" icon="arrow">
              Conhecer a XelbMinds
            </Button>
          </div>
        </div>
      </Section>

      {/* ── Secção 3 — Serviços em Destaque ─────────────────────────── */}
      <Section tone="white">
        <SectionHeading
          eyebrow="Apoio especializado, pensado para cada aluno"
          title="O que fazemos na XelbMinds"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={s.id} service={s} delay={i * 60} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button to="/servicos" variant="primary" size="lg" icon="arrow">
            Ver todos os serviços
          </Button>
        </div>
      </Section>

      {/* ── Secção 4 — Porquê a XelbMinds ───────────────────────────── */}
      <Section tone="blue">
        <SectionHeading
          eyebrow="Porquê a XelbMinds?"
          title="O que as famílias encontram na XelbMinds"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((d, i) => (
            <FeatureCard key={d.title} {...d} delay={i * 60} />
          ))}
          {/* Cartão final de convite, a fechar a grelha de 5 + 1 */}
          <Reveal delay={360} className="h-full">
            <Link
              to="/sobre"
              className="flex h-full flex-col justify-center gap-3 rounded-2xl bg-gradient-to-br from-blue to-blue-700 p-6 text-white shadow-card transition-transform duration-200 hover:-translate-y-1 cursor-pointer"
            >
              <h3 className="text-lg font-semibold text-white">Quer conhecer-nos melhor?</h3>
              <p className="text-[15px] text-blue-100">
                Descubra a nossa história, missão e a forma como trabalhamos com cada aluno.
              </p>
              <span className="mt-1 inline-flex items-center gap-1.5 font-heading text-sm font-bold text-green">
                Sobre a XelbMinds
                <Icon name="arrow" className="h-4 w-4" />
              </span>
            </Link>
          </Reveal>
        </div>
      </Section>

      {/* ── Secção 5 — Autonomia e Métodos de Estudo (faixa escura) ─── */}
      <section className="relative overflow-hidden bg-blue-900 py-16 text-blue-50 sm:py-24">
        <span className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-blue-700/40 blur-3xl" />
        <span className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-green-700/20 blur-3xl" />
        <div className="container-x relative">
          <SectionHeading
            light
            eyebrow="Autonomia e métodos de estudo"
            title="Aprender a aprender, para a vida inteira."
            subtitle="Acreditamos que o maior apoio que podemos dar a um aluno é ensiná-lo a estudar por si próprio. Trabalhamos competências de organização, planeamento, memorização e gestão do tempo, que fazem a diferença não apenas nos testes, mas em toda a vida académica e pessoal."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {autonomyPillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 80} className="h-full">
                <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-green text-ink">
                    <Icon name={p.icon} className="h-7 w-7" />
                  </span>
                  <h3 className="mt-4 text-xl font-semibold text-white">{p.title}</h3>
                  <p className="mt-2 text-blue-100">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Secção 6 — Últimas do Blog ──────────────────────────────── */}
      <Section tone="soft">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            eyebrow="Blog XelbMinds"
            title="Dicas, recursos e novidades para pais e alunos"
            className="max-w-xl"
          />
          <Button to="/blog" variant="outline" icon="arrow" className="shrink-0">
            Ver todos os artigos
          </Button>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {latest.map((post, i) => (
            <BlogCard key={post.id} post={post} delay={i * 60} />
          ))}
        </div>
      </Section>

      {/* ── Secção 7 — CTA Final ────────────────────────────────────── */}
      <CTASection
        title="Dê o primeiro passo. Estamos aqui para ajudar."
        subtitle="Entre em contacto connosco e vamos perceber juntos qual é o apoio mais adequado para o seu filho."
        tone="blue"
      />
    </>
  )
}
