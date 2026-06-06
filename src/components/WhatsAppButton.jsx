import { site } from '../data/site'
import Icon from './Icon'

// Botão flutuante de WhatsApp, presente em todo o site público.
export default function WhatsAppButton() {
  const msg = encodeURIComponent(
    'Olá! Gostaria de mais informações sobre os serviços da XelbMinds.',
  )
  return (
    <a
      href={`https://wa.me/${site.whatsapp}?text=${msg}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar connosco no WhatsApp"
      style={{
        right: 'max(1.25rem, env(safe-area-inset-right))',
        bottom: 'max(1.25rem, env(safe-area-inset-bottom))',
      }}
      className="fixed z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_-8px_rgba(37,211,102,0.7)] transition-transform duration-200 hover:scale-105 cursor-pointer"
    >
      <Icon name="whatsapp" className="h-8 w-8" />
    </a>
  )
}
