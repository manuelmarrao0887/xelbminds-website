import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Servicos from './pages/Servicos'
import Blog from './pages/Blog'
import Artigo from './pages/Artigo'
import Contactos from './pages/Contactos'
import Privacidade from './pages/Privacidade'
import NotFound from './pages/NotFound'
import AdminLayout from './pages/admin/AdminLayout'
import AdminList from './pages/admin/AdminList'
import AdminEditor from './pages/admin/AdminEditor'

export default function App() {
  return (
    <Routes>
      {/* Site público */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<Artigo />} />
        <Route path="/contactos" element={<Contactos />} />
        <Route path="/politica-de-privacidade" element={<Privacidade />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      {/* Backoffice (sem login — demo) */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminList />} />
        <Route path="novo" element={<AdminEditor />} />
        <Route path="editar/:id" element={<AdminEditor />} />
      </Route>
    </Routes>
  )
}
