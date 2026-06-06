// Conjunto de ícones SVG (linha, viewBox 24×24) — sem emojis, consistentes.
// Uso: <Icon name="book" className="h-6 w-6" />

const paths = {
  book: (
    <path d="M4 5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v14a1 1 0 0 1-1 1H6a2 2 0 0 0-2 2V5Zm0 0a2 2 0 0 0 2 2h9M9 8h4" />
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5.5 20a6.5 6.5 0 0 1 13 0" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
      <path d="M16 6.2a3 3 0 0 1 0 5.6M17.5 19a5.5 5.5 0 0 0-2.2-4.4" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="0.8" fill="currentColor" stroke="none" />
    </>
  ),
  name: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <circle cx="9" cy="11" r="2" />
      <path d="M5.5 16a3.5 3.5 0 0 1 7 0M15 9h3M15 13h3" />
    </>
  ),
  chat: (
    <path d="M4 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H9l-4 4v-4H5a1 1 0 0 1-1-1V5Z" />
  ),
  spark: (
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M12 8a4 4 0 0 0 4 4 4 4 0 0 0-4 4 4 4 0 0 0-4-4 4 4 0 0 0 4-4Z" />
  ),
  shield: (
    <>
      <path d="M12 3 5 6v5c0 4.2 2.8 7.5 7 9 4.2-1.5 7-4.8 7-9V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  badge: (
    <>
      <circle cx="12" cy="9" r="5" />
      <path d="m9 13-1.5 7L12 18l4.5 2L15 13" />
    </>
  ),
  brain: (
    <path d="M9 4a2.5 2.5 0 0 0-2.5 2.5A2.5 2.5 0 0 0 5 9a2.5 2.5 0 0 0 1 4.5V16a2.5 2.5 0 0 0 3 2.5M9 4a2 2 0 0 1 3 1.7M9 4v14.5M15 4a2.5 2.5 0 0 1 2.5 2.5A2.5 2.5 0 0 1 19 9a2.5 2.5 0 0 1-1 4.5V16a2.5 2.5 0 0 1-3 2.5M15 4a2 2 0 0 0-3 1.7M15 4v14.5" />
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  check: <path d="m5 12 4.5 4.5L19 7" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  phone: (
    <path d="M5 4h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5V18a2 2 0 0 1-2 2A14 14 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21c4-4.5 7-8 7-11a7 7 0 1 0-14 0c0 3 3 6.5 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  whatsapp: (
    <path
      d="M12 2a9.9 9.9 0 0 0-8.5 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2Zm5.5 13.9c-.2.6-1.4 1.2-2 1.2-.5.1-1.1.2-3.5-.8-3-1.3-4.8-4.4-5-4.6-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.4.6c-.2.2-.3.4-.1.7.2.3.9 1.4 1.9 2.3 1.3 1.1 2.3 1.5 2.6 1.6.3.1.5.1.7-.1l.7-.9c.2-.3.4-.2.6-.1l1.9.9c.3.1.5.2.5.4.1.2.1.7-.1 1.3Z"
      fill="currentColor"
      stroke="none"
    />
  ),
  facebook: (
    <path
      d="M14 9h2.5V6H14c-2 0-3 1.3-3 3.2V11H9v3h2v7h3v-7h2.2l.4-3H14V9.6c0-.4.2-.6.6-.6Z"
      fill="currentColor"
      stroke="none"
    />
  ),
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  edit: (
    <path d="M4 20h4l10-10-4-4L4 16v4ZM13.5 6.5l4 4" />
  ),
  trash: (
    <path d="M5 7h14M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2m2 0v12a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V7" />
  ),
  plus: <path d="M12 5v14M5 12h14" />,
  heart: (
    <path d="M12 20s-7-4.3-7-9a3.8 3.8 0 0 1 7-2 3.8 3.8 0 0 1 7 2c0 4.7-7 9-7 9Z" />
  ),
}

export default function Icon({ name, className = 'h-6 w-6', ...rest }) {
  const content = paths[name]
  if (!content) return null
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {content}
    </svg>
  )
}
