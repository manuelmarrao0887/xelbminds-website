import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { mainNav } from '../data/site'
import Button from './Button'
import Icon from './Icon'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Fecha o menu móvel ao mudar de página.
  useEffect(() => setOpen(false), [location.pathname])

  const linkCls = ({ isActive }) =>
    `relative py-2 font-heading text-[15px] font-semibold transition-colors duration-200 ${
      isActive ? 'text-blue' : 'text-ink/80 hover:text-blue'
    }`

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-white/90 shadow-[0_6px_24px_-18px_rgba(26,26,26,0.4)] backdrop-blur' : 'bg-white'
      }`}
    >
      <div className="container-x flex items-center justify-between gap-4 py-3">
        <Link to="/" className="flex items-center" aria-label="XelbMinds — página inicial">
          <img
            src="/logo-horizontal.png"
            alt="XelbMinds — Aprender & Crescer"
            className="h-11 w-auto sm:h-12"
          />
        </Link>

        {/* Navegação desktop */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
          {mainNav.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkCls} end={item.to === '/'}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button to="/contactos" variant="primary" size="sm" icon="chat">
            Falar connosco
          </Button>
        </div>

        {/* Botão menu móvel */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink hover:bg-soft lg:hidden cursor-pointer"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
        >
          <Icon name={open ? 'close' : 'menu'} className="h-6 w-6" />
        </button>
      </div>

      {/* Menu móvel */}
      {open && (
        <nav
          className="border-t border-line bg-white lg:hidden"
          aria-label="Navegação principal (móvel)"
        >
          <div className="container-x flex flex-col py-3">
            {mainNav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `rounded-xl px-3 py-3 font-heading font-semibold transition-colors ${
                    isActive ? 'bg-blue-50 text-blue' : 'text-ink/90 hover:bg-soft'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Button to="/contactos" variant="primary" className="mt-3" icon="chat">
              Falar connosco
            </Button>
          </div>
        </nav>
      )}
    </header>
  )
}
