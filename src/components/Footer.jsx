import { Link } from 'react-router-dom'
import { site, footerLinks } from '../data/site'
import Icon from './Icon'

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-blue-100">
      <div className="container-x py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Marca */}
          <div className="lg:col-span-1">
            <img
              src="/logo-horizontal.png"
              alt="XelbMinds — Aprender & Crescer"
              className="h-12 w-auto rounded-lg bg-white/95 p-1.5"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-blue-100/80">
              Centro de explicações e apoio ao estudo personalizado, do 1.º ciclo ao
              secundário, em {site.location}.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook da XelbMinds"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-green hover:text-ink"
              >
                <Icon name="facebook" className="h-5 w-5" />
              </a>
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da XelbMinds"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-green hover:text-ink"
              >
                <Icon name="instagram" className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links rápidos */}
          <nav aria-label="Links rápidos">
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-green">
              Navegação
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {footerLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-blue-100/80 transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contactos */}
          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-green">
              Contactos
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-blue-100/80">
              <li className="flex gap-2.5">
                <Icon name="pin" className="mt-0.5 h-5 w-5 shrink-0 text-green" />
                <span>{site.address}</span>
              </li>
              <li className="flex gap-2.5">
                <Icon name="phone" className="mt-0.5 h-5 w-5 shrink-0 text-green" />
                <a href={`tel:${site.phoneRaw}`} className="hover:text-white">
                  {site.phone}
                </a>
              </li>
              <li className="flex gap-2.5">
                <Icon name="mail" className="mt-0.5 h-5 w-5 shrink-0 text-green" />
                <a href={`mailto:${site.email}`} className="hover:text-white">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Horário */}
          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-green">
              Horário
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-blue-100/80">
              <li>Segunda a sexta</li>
              <li className="text-white">09h00 — 20h00</li>
              <li className="pt-2">Sábado</li>
              <li className="text-white">09h00 — 13h00</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center text-sm text-blue-100/70 sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} XelbMinds · Aprender &amp; Crescer · {site.location}
          </p>
          <Link to="/politica-de-privacidade" className="hover:text-white">
            Política de Privacidade
          </Link>
        </div>
      </div>
    </footer>
  )
}
