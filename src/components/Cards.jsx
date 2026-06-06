import { Link } from 'react-router-dom'
import Icon from './Icon'
import Reveal from './Reveal'

// Cartão de serviço (usado na página inicial e noutros destaques).
export function ServiceCard({ service, to, delay = 0 }) {
  return (
    <Reveal delay={delay} className="h-full">
      <Link
        to={to || `/servicos#${service.id}`}
        className="group flex h-full flex-col rounded-[1.5rem] border border-line bg-white p-7 shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-green hover:shadow-soft cursor-pointer"
      >
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 text-blue-700 transition-colors duration-200 group-hover:bg-green group-hover:text-ink">
          <Icon name={service.icon} className="h-7 w-7" />
        </span>
        <h3 className="mt-5 text-xl font-semibold">{service.title}</h3>
        <p className="mt-2 flex-1 text-[15px] text-body">{service.short}</p>
        <span className="mt-5 inline-flex items-center gap-1.5 font-heading text-sm font-bold text-blue transition-colors group-hover:text-blue-700">
          Saber mais
          <Icon name="arrow" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </span>
      </Link>
    </Reveal>
  )
}

// Cartão de diferencial / valor (ícone + título + texto).
export function FeatureCard({ icon, title, text, delay = 0 }) {
  return (
    <Reveal delay={delay} className="h-full">
      <div className="flex h-full gap-4 rounded-2xl bg-white p-6 shadow-card">
        <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
          <Icon name={icon || 'check'} className="h-6 w-6" />
        </span>
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="mt-1.5 text-[15px] text-body">{text}</p>
        </div>
      </div>
    </Reveal>
  )
}

// Item de valor simples (sem ícone), para grelhas mais densas.
export function ValueCard({ title, text, delay = 0 }) {
  return (
    <Reveal delay={delay} className="h-full">
      <div className="h-full rounded-2xl border border-line bg-white p-6 shadow-card">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-green text-ink">
            <Icon name="check" className="h-4 w-4" />
          </span>
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <p className="mt-3 text-[15px] text-body">{text}</p>
      </div>
    </Reveal>
  )
}

// Passo numerado (abordagem pedagógica).
export function StepItem({ index, title, text, delay = 0 }) {
  return (
    <Reveal delay={delay} className="h-full">
      <div className="relative h-full rounded-2xl bg-white p-6 shadow-card">
        <span className="font-display text-4xl font-bold text-green">
          {String(index).padStart(2, '0')}
        </span>
        <h3 className="mt-2 text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-[15px] text-body">{text}</p>
      </div>
    </Reveal>
  )
}
