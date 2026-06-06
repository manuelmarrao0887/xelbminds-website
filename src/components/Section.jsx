import Reveal from './Reveal'

// Wrapper de secção com largura controlada e fundos alternados.
// tone: 'white' | 'soft' (cinzento-verde) | 'green' | 'blue' | 'dark'

const tones = {
  white: 'bg-white',
  soft: 'bg-soft',
  green: 'bg-green-50',
  blue: 'bg-blue-50',
  dark: 'bg-blue-900 text-blue-50',
}

export function Section({ tone = 'white', className = '', children, id }) {
  return (
    <section id={id} className={`${tones[tone]} py-16 sm:py-20 lg:py-24 ${className}`}>
      <div className="container-x">{children}</div>
    </section>
  )
}

// Cabeçalho de secção (eyebrow + título + subtítulo), centrado ou à esquerda.
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
  className = '',
}) {
  const alignCls = align === 'center' ? 'text-center mx-auto' : 'text-left'
  return (
    <Reveal className={`max-w-2xl ${alignCls} ${className}`}>
      {eyebrow && (
        <p
          className={`mb-3 font-heading text-sm font-bold uppercase tracking-[0.14em] ${
            light ? 'text-green' : 'text-blue'
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2 className={`text-3xl sm:text-4xl font-semibold ${light ? 'text-white' : ''}`}>
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg ${
            light ? 'text-blue-100' : 'text-body'
          } ${align === 'center' ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  )
}
