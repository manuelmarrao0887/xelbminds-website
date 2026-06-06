import Reveal from './Reveal'

// Hero das páginas internas (Sobre, Serviços, Blog, Contactos).
// Fundo claro com formas orgânicas suaves inspiradas no logótipo.
export default function PageHero({ eyebrow, title, subtitle, children }) {
  return (
    <section className="relative overflow-hidden bg-soft">
      {/* Formas orgânicas decorativas */}
      <span className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full bg-green-100 blur-2xl" />
      <span className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-blue-100 blur-2xl" />

      <div className="container-x relative py-16 sm:py-20 lg:py-24">
        <Reveal className="max-w-3xl">
          {eyebrow && (
            <p className="mb-3 font-heading text-sm font-bold uppercase tracking-[0.14em] text-blue">
              {eyebrow}
            </p>
          )}
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">{title}</h1>
          {subtitle && <p className="mt-5 max-w-2xl text-lg text-body">{subtitle}</p>}
          {children && <div className="mt-8">{children}</div>}
        </Reveal>
      </div>
    </section>
  )
}
