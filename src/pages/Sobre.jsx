import { usePageMeta } from '../hooks/usePageMeta'
import { values, approachSteps, team } from '../data/content'
import PageHero from '../components/PageHero'
import { Section, SectionHeading } from '../components/Section'
import { ValueCard, StepItem } from '../components/Cards'
import CTASection from '../components/CTASection'
import Reveal from '../components/Reveal'
import SmartImage from '../components/SmartImage'
import Icon from '../components/Icon'

export default function Sobre() {
  usePageMeta(
    'Sobre a XelbMinds — Centro de Explicações em Silves, Algarve',
    'Conheça a XelbMinds: a nossa história, missão, valores e abordagem pedagógica. Um centro de estudos em Silves que acredita no potencial de cada aluno e acompanha as famílias com atenção, competência e cuidado.',
  )

  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────────── */}
      <PageHero
        eyebrow="Sobre a XelbMinds"
        title="Somos a XelbMinds."
        subtitle="Um centro de estudos criado com propósito: acompanhar cada aluno no seu próprio caminho de crescimento."
      />

      {/* ── A Nossa História ────────────────────────────────────────── */}
      <Section tone="white">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="A nossa história"
              title="Como e porquê nasceu a XelbMinds"
            />
            <div className="mt-5 space-y-4 text-body">
              <p>
                A XelbMinds nasceu em Silves com o objetivo de criar um espaço onde crianças
                e jovens possam aprender com acompanhamento, confiança e proximidade.
              </p>
              <p>
                Mais do que um centro de explicações, a XelbMinds é um projeto educativo
                pensado para apoiar cada aluno no seu percurso escolar, respeitando o seu
                ritmo, as suas dificuldades e o seu potencial.
              </p>
              <p>
                Acreditamos que o sucesso académico não depende apenas das notas. Depende
                também da forma como cada aluno se sente, da confiança que desenvolve, da
                organização que conquista e da relação que cria com a aprendizagem.
              </p>
              <p>
                Por isso, trabalhamos lado a lado com as famílias, promovendo uma comunicação
                próxima e um acompanhamento personalizado. O nosso objetivo é ajudar cada
                aluno a ganhar autonomia, método de estudo, motivação e segurança para
                enfrentar os desafios da escola.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <Reveal>
              <div className="overflow-hidden rounded-[2rem] shadow-card">
                <SmartImage
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1100&q=80"
                  alt="Sala de trabalho da XelbMinds com alunos"
                  label="Espaço XelbMinds"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="rounded-[1.75rem] border border-green/40 bg-green-50 p-7">
                <Icon name="brain" className="h-9 w-9 text-blue-700" />
                <h3 className="mt-3 text-xl font-semibold">A origem do nome</h3>
                <p className="mt-2 text-body">
                  O nome <strong>XelbMinds</strong> une a ligação à cidade de Silves,
                  historicamente conhecida como <em>Xelb</em>, à ideia das mentes que crescem,
                  aprendem e se desenvolvem connosco.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ── Missão, Visão e Valores ─────────────────────────────────── */}
      <Section tone="soft">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal className="h-full">
            <div className="flex h-full flex-col rounded-[1.75rem] bg-blue-900 p-8 text-blue-50">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-green text-ink">
                <Icon name="target" className="h-7 w-7" />
              </span>
              <h3 className="mt-4 font-display text-2xl font-semibold text-white">Missão</h3>
              <p className="mt-3 text-blue-100">
                Apoiar crianças e jovens no seu percurso escolar e pessoal, através de um
                acompanhamento especializado, individualizado e emocionalmente consciente,
                que promova a autonomia, a confiança e o gosto por aprender.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100} className="h-full">
            <div className="flex h-full flex-col rounded-[1.75rem] bg-white p-8 shadow-card">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-blue-700">
                <Icon name="spark" className="h-7 w-7" />
              </span>
              <h3 className="mt-4 font-display text-2xl font-semibold">Visão</h3>
              <p className="mt-3 text-body">
                Ser referência no Algarve como centro de apoio ao estudo onde a qualidade
                pedagógica e o bem-estar emocional dos alunos caminham lado a lado.
              </p>
            </div>
          </Reveal>
        </div>

        <SectionHeading
          className="mt-16"
          eyebrow="Os nossos valores"
          title="Aquilo em que acreditamos"
        />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <ValueCard key={v.title} {...v} delay={i * 50} />
          ))}
        </div>
      </Section>

      {/* ── A Nossa Abordagem Pedagógica ────────────────────────────── */}
      <Section tone="white">
        <SectionHeading
          eyebrow="A nossa abordagem pedagógica"
          title="Como trabalhamos com os nossos alunos"
          subtitle="O nosso método de trabalho assenta em quatro etapas."
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {approachSteps.map((s, i) => (
            <StepItem key={s.title} index={i + 1} {...s} delay={i * 70} />
          ))}
        </div>
      </Section>

      {/* ── A Nossa Equipa ──────────────────────────────────────────── */}
      <Section tone="soft">
        <SectionHeading
          eyebrow="A nossa equipa"
          title="Quem está por detrás da XelbMinds"
          subtitle="A XelbMinds é feita de pessoas comprometidas com a educação, não apenas com o conhecimento académico, mas com o desenvolvimento integral de cada aluno. A nossa equipa é formada por profissionais com formação especializada, experiência no acompanhamento de crianças e jovens e uma postura pedagógica empática, exigente e motivadora."
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m, i) => (
            <Reveal key={i} delay={i * 70} className="h-full">
              <div className="flex h-full flex-col items-center rounded-[1.5rem] border border-line bg-white p-8 text-center shadow-card">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-green to-blue-100 font-display text-2xl font-bold text-blue-900">
                  {m.initials}
                </div>
                <h3 className="mt-4 text-lg font-semibold">{m.name}</h3>
                <p className="mt-1 text-sm text-muted">{m.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-muted">
          Espaço reservado para fotografias e perfis reais da equipa, a atualizar em breve.
        </p>
      </Section>

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <CTASection
        title="Quer conhecer-nos melhor?"
        subtitle="Estamos disponíveis para uma conversa sem compromisso. Temos todo o gosto em conhecer a sua família."
        primary={{ label: 'Entrar em contacto', to: '/contactos', icon: 'chat' }}
        tone="green"
      />
    </>
  )
}
