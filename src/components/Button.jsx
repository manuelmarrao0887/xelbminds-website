import { Link } from 'react-router-dom'
import Icon from './Icon'

// Botão coerente em todo o site. Renderiza <Link> (rota), <a> (href) ou <button>.
// variant: 'primary' (azul) | 'secondary' (verde) | 'outline' | 'ghost' | 'white'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-heading font-bold transition-colors duration-200 cursor-pointer focus-visible:outline-none disabled:opacity-60 disabled:cursor-not-allowed'

const sizes = {
  md: 'px-6 py-3 text-[15px]',
  lg: 'px-7 py-3.5 text-base',
  sm: 'px-4 py-2 text-sm',
}

const variants = {
  primary: 'bg-blue text-white hover:bg-blue-700 shadow-[0_10px_24px_-12px_rgba(91,143,168,0.8)]',
  secondary: 'bg-green text-ink hover:bg-green-600',
  outline: 'border-2 border-blue text-blue hover:bg-blue hover:text-white',
  ghost: 'text-blue hover:bg-blue-50',
  white: 'bg-white text-blue hover:bg-blue-50 shadow-card',
  'white-outline': 'border-2 border-white/80 text-white hover:bg-white hover:text-blue',
}

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  icon,
  className = '',
  ...rest
}) {
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`
  const inner = (
    <>
      <span>{children}</span>
      {icon && <Icon name={icon} className="h-[18px] w-[18px]" />}
    </>
  )

  if (to) return <Link to={to} className={cls} {...rest}>{inner}</Link>
  if (href) return <a href={href} className={cls} {...rest}>{inner}</a>
  return <button className={cls} {...rest}>{inner}</button>
}
