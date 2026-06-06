import { Outlet, NavLink, Link } from 'react-router-dom'
import Icon from '../../components/Icon'

// Layout do backoffice. Sem login (demo) — adicionar autenticação antes de
// usar em produção. Visualmente distinto do site público.
export default function AdminLayout() {
  return (
    <div className="min-h-screen bg-soft">
      <header className="sticky top-0 z-40 border-b border-line bg-white">
        <div className="container-x flex items-center justify-between gap-4 py-3">
          <div className="flex items-center gap-3">
            <img src="/logo-principal.png" alt="XelbMinds" className="h-10 w-auto" />
            <span className="rounded-full bg-blue-50 px-3 py-1 font-heading text-xs font-bold uppercase tracking-wide text-blue-700">
              Backoffice
            </span>
          </div>
          <nav className="flex items-center gap-2">
            <NavLink
              to="/admin"
              end
              className={({ isActive }) =>
                `rounded-full px-4 py-2 font-heading text-sm font-semibold transition-colors ${
                  isActive ? 'bg-blue-50 text-blue' : 'text-ink/70 hover:bg-soft'
                }`
              }
            >
              Artigos
            </NavLink>
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 font-heading text-sm font-semibold text-ink/70 transition-colors hover:bg-soft"
            >
              <Icon name="arrow" className="h-4 w-4 rotate-180" />
              Ver site
            </Link>
          </nav>
        </div>
      </header>

      <main className="container-x py-8">
        <Outlet />
      </main>
    </div>
  )
}
