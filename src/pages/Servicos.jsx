import { usePageMeta } from '../hooks/usePageMeta'
import { services } from '../data/services'
import PageHero from '../components/PageHero'
import { Section } from '../components/Section'
import CTASection from '../components/CTASection'
import Button from '../components/Button'
import Reveal from '../components/Reveal'
import SmartImage from '../components/SmartImage'
import Icon from '../components/Icon'

function ServiceBlock({ service, index }) {
  const reversed = index % 2 === 1
  return (
    <article id={service.id} className="scroll-mt-28">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        {/* Imagem */}
        <Reveal className={reversed ? 'lg:order-2' : ''}>
          <div className="relative overflow-hidden rounded-[2rem] shadow-card">
            <SmartImage
              src={service.image}
              alt={service.imageAlt}
              label={service.title}
              className="aspect-[5/4] w-full object-cover"
            />
            <span className="absolute left-5 top-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-blue-700 shadow-card">
              <Icon name={service.icon} className="h-7 w-7" />
            </span>
          </div>
        </Reveal>

        {/* Texto */}
        <div className={reversed ? 'lg:order-1' : ''}>
          <h2 className="text-2xl font-semibold sm:text-3xl">{service.title}</h2>
          <p className="mt-2 font-heading text-lg font-semibold italic text-blue">
            {service.tagline}
          </p>
          <div className="mt-4 space-y-3 text-body">
            {service.long.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-6 rounded-2xl bg-soft p-6">
            <p className="font-heading text-sm font-bold uppercase tracking-wide text-blue-700">
              O que inclui
            </p>
            <ul className="mt-3 space-y-2">
              {service.includes.map((item) => (
                <li key={item} className="flex gap-2.5 text-[15px] text-body">
                  <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <dl className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-line bg-white p-4">
              <dt className="font-heading text-xs font-bold uppercase tracking-wide text-muted">
                Para quem
              </dt>
              <dd className="mt-1 text-[15px] text-ink">{service.forWhom}</dd>
            </div>
            <div className="rounded-xl border border-line bg-white p-4">
              <dt className="font-heading text-xs font-bold uppercase tracking-wide text-muted">
                Formato
              </dt>
              <dd className="mt-1 text-[15px] text-ink">{service.format}</dd>
            </div>
          </dl>

          <Button
            to="/contactos"
            variant="primary"
            className="mt-6"
            icon="arrow"
          >
            Pedir informações sobre este serviço
          </Button>
        </div>
      </div>
    </article>
  )
}

export default function Servicos() {
  usePageMeta(
    'Serviços — Explicações, Apoio ao Estudo e Programas | XelbMinds Silves',
    'Descubra todos os serviços da XelbMinds em Silves: apoio ao estudo, explicações individuais e em grupo, programas de férias, métodos de estudo e preparação para exames. Do 1.º ciclo ao secundário.',
  )

  return (
    <>
      <PageHero
        eyebrow="Serviços"
        title="O apoio certo para cada situação."
        subtitle="Cada aluno tem necessidades diferentes. Os nossos serviços adaptam-se ao momento, ao ano de escolaridade e ao que a família procura."
      >
        {/* Índice rápido de serviços (âncoras) */}
        <div className="flex flex-wrap gap-2.5">
          {services.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-4 py-2 font-heading text-sm font-semibold text-ink/80 transition-colors hover:border-blue hover:text-blue cursor-pointer"
            >
              <Icon name={s.icon} className="h-4 w-4 text-blue-700" />
              {s.title}
            </a>
          ))}
        </div>
      </PageHero>

      <Section tone="white">
        <div className="space-y-20 lg:space-y-28">
          {services.map((s, i) => (
            <ServiceBlock key={s.id} service={s} index={i} />
          ))}
        </div>
      </Section>

      <CTASection
        title="Ainda tem dúvidas sobre qual o serviço mais adequado?"
        subtitle="Fale connosco. Estamos disponíveis para perceber qual o acompanhamento mais adequado para o seu filho e para orientar a família nessa escolha."
        tone="blue"
      />
    </>
  )
}
