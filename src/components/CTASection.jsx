import { site } from '../data/site'
import Button from './Button'
import Reveal from './Reveal'

// Faixa de chamada à ação reutilizável (fundo verde ou azul, dois botões).
// tone: 'blue' | 'green'
export default function CTASection({
  title,
  subtitle,
  primary = { label: 'Falar connosco', to: '/contactos', icon: 'chat' },
  showCall = true,
  tone = 'blue',
}) {
  const bg =
    tone === 'green'
      ? 'bg-gradient-to-br from-green to-green-600 text-ink'
      : 'bg-gradient-to-br from-blue to-blue-700 text-white'

  return (
    <section className="py-16 sm:py-20">
      <div className="container-x">
        <Reveal className={`relative overflow-hidden rounded-[2rem] px-7 py-14 text-center sm:px-12 ${bg}`}>
          {/* Formas orgânicas decorativas */}
          <span className="pointer-events-none absolute -left-10 -top-10 h-44 w-44 rounded-full bg-white/10" />
          <span className="pointer-events-none absolute -bottom-14 -right-8 h-56 w-56 rounded-full bg-white/10" />

          <div className="relative mx-auto max-w-2xl">
            <h2 className={`text-3xl sm:text-4xl font-semibold ${tone === 'blue' ? 'text-white' : 'text-ink'}`}>
              {title}
            </h2>
            {subtitle && (
              <p className={`mt-4 text-lg ${tone === 'blue' ? 'text-blue-100' : 'text-ink/80'}`}>
                {subtitle}
              </p>
            )}
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                to={primary.to}
                href={primary.href}
                icon={primary.icon}
                variant={tone === 'blue' ? 'white' : 'primary'}
                size="lg"
              >
                {primary.label}
              </Button>
              {showCall && (
                <Button
                  href={`tel:${site.phoneRaw}`}
                  icon="phone"
                  variant={tone === 'blue' ? 'white-outline' : 'outline'}
                  size="lg"
                >
                  Ligar agora: {site.phone}
                </Button>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
