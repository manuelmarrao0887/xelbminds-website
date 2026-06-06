import { usePageMeta } from '../hooks/usePageMeta'
import Button from '../components/Button'

export default function NotFound() {
  usePageMeta('Página não encontrada — XelbMinds')
  return (
    <div className="container-x flex min-h-[60svh] flex-col items-center justify-center py-24 text-center">
      <p className="font-display text-7xl font-bold text-green">404</p>
      <h1 className="mt-4 text-3xl font-semibold">Página não encontrada</h1>
      <p className="mt-3 max-w-md text-body">
        A página que procura pode ter sido movida ou já não existe.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button to="/" variant="primary" icon="arrow">
          Voltar ao início
        </Button>
        <Button to="/contactos" variant="outline" icon="chat">
          Falar connosco
        </Button>
      </div>
    </div>
  )
}
