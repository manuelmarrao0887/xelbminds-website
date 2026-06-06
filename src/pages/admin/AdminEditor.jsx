import { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { getPost, savePost, bodyToText } from '../../data/postsRepository'
import { categories } from '../../data/seedPosts'
import Button from '../../components/Button'
import SmartImage from '../../components/SmartImage'
import Icon from '../../components/Icon'

const today = () => new Date().toISOString().slice(0, 10)

const empty = {
  title: '',
  category: categories[0],
  date: today(),
  excerpt: '',
  cover: '',
  coverAlt: '',
  bodyText: '',
}

export default function AdminEditor() {
  const { id } = useParams()
  const editing = Boolean(id)
  const navigate = useNavigate()
  const [form, setForm] = useState(empty)
  const [errors, setErrors] = useState({})
  const [loaded, setLoaded] = useState(!editing)

  useEffect(() => {
    document.title = editing ? 'Editar artigo | XelbMinds' : 'Novo artigo | XelbMinds'
    if (editing) {
      getPost(id).then((p) => {
        if (p) {
          setForm({
            title: p.title || '',
            category: p.category || categories[0],
            date: p.date || today(),
            excerpt: p.excerpt || '',
            cover: p.cover || '',
            coverAlt: p.coverAlt || '',
            bodyText: bodyToText(p.body),
          })
        }
        setLoaded(true)
      })
    }
  }, [id, editing])

  const update = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    setErrors((err) => ({ ...err, [name]: undefined }))
  }

  // Upload de imagem de capa -> base64 (guardado no localStorage).
  const onCoverFile = (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => setForm((f) => ({ ...f, cover: reader.result }))
    reader.readAsDataURL(file)
  }

  const validate = () => {
    const e = {}
    if (!form.title.trim()) e.title = 'O título é obrigatório.'
    if (!form.excerpt.trim()) e.excerpt = 'O resumo é obrigatório.'
    if (!form.bodyText.trim()) e.bodyText = 'O corpo do artigo é obrigatório.'
    return e
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const e2 = validate()
    setErrors(e2)
    if (Object.keys(e2).length) return

    await savePost({
      id: editing ? id : undefined,
      title: form.title,
      category: form.category,
      date: form.date,
      excerpt: form.excerpt,
      cover: form.cover,
      coverAlt: form.coverAlt,
      body: form.bodyText, // o repositório converte texto -> blocos
    })
    navigate('/admin')
  }

  if (!loaded) return <p className="text-muted">A carregar…</p>

  const fieldCls = (name) =>
    `w-full rounded-xl border bg-white px-4 py-2.5 text-base text-ink outline-none transition-colors focus:border-blue ${
      errors[name] ? 'border-red-400' : 'border-line'
    }`

  return (
    <div>
      <Link
        to="/admin"
        className="inline-flex items-center gap-1.5 font-heading text-sm font-semibold text-blue hover:text-blue-700"
      >
        <Icon name="arrow" className="h-4 w-4 rotate-180" />
        Voltar aos artigos
      </Link>

      <h1 className="mt-3 text-2xl font-semibold">
        {editing ? 'Editar artigo' : 'Novo artigo'}
      </h1>

      <form onSubmit={onSubmit} noValidate className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[1.4fr_1fr]">
        {/* Coluna principal */}
        <div className="space-y-5 rounded-2xl border border-line bg-white p-6">
          <Field label="Título" required error={errors.title} htmlFor="title">
            <input id="title" name="title" value={form.title} onChange={update} className={fieldCls('title')} />
          </Field>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field label="Categoria" htmlFor="category">
              <select id="category" name="category" value={form.category} onChange={update} className={fieldCls('category')}>
                {categories.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </Field>
            <Field label="Data" htmlFor="date">
              <input id="date" name="date" type="date" value={form.date} onChange={update} className={fieldCls('date')} />
            </Field>
          </div>

          <Field label="Resumo (excerto)" required error={errors.excerpt} htmlFor="excerpt">
            <textarea id="excerpt" name="excerpt" rows={2} value={form.excerpt} onChange={update} className={`${fieldCls('excerpt')} resize-y`} />
          </Field>

          <Field
            label="Corpo do artigo"
            required
            error={errors.bodyText}
            htmlFor="bodyText"
            hint='Separe parágrafos com uma linha em branco. Comece uma linha com "## " para criar um subtítulo.'
          >
            <textarea
              id="bodyText"
              name="bodyText"
              rows={16}
              value={form.bodyText}
              onChange={update}
              className={`${fieldCls('bodyText')} resize-y font-mono text-base leading-relaxed`}
              placeholder={'Introdução do artigo…\n\n## Primeiro subtítulo\n\nTexto do parágrafo…'}
            />
          </Field>
        </div>

        {/* Coluna lateral */}
        <div className="space-y-5">
          <div className="space-y-4 rounded-2xl border border-line bg-white p-6">
            <h2 className="font-heading font-bold text-ink">Imagem de capa</h2>
            <div className="aspect-[16/10] overflow-hidden rounded-xl border border-line bg-soft">
              <SmartImage src={form.cover} alt="Pré-visualização da capa" label={form.category} className="h-full w-full object-cover" />
            </div>
            <Field label="URL da imagem" htmlFor="cover">
              <input id="cover" name="cover" value={form.cover.startsWith('data:') ? '' : form.cover} onChange={update} placeholder="https://…" className={fieldCls('cover')} />
            </Field>
            <div>
              <span className="mb-1.5 block font-heading text-sm font-semibold text-ink">
                Ou carregar ficheiro
              </span>
              <input
                type="file"
                accept="image/*"
                onChange={onCoverFile}
                className="block w-full text-sm text-muted file:mr-3 file:cursor-pointer file:rounded-full file:border-0 file:bg-blue-50 file:px-4 file:py-2 file:font-heading file:text-sm file:font-bold file:text-blue hover:file:bg-blue-100"
              />
            </div>
            <Field label="Texto alternativo da imagem" htmlFor="coverAlt">
              <input id="coverAlt" name="coverAlt" value={form.coverAlt} onChange={update} placeholder="Descrição da imagem" className={fieldCls('coverAlt')} />
            </Field>
          </div>

          <div className="flex flex-col gap-3 rounded-2xl border border-line bg-white p-6">
            <Button type="submit" variant="primary" size="lg" icon="check">
              {editing ? 'Guardar alterações' : 'Publicar artigo'}
            </Button>
            <Button to="/admin" variant="ghost">
              Cancelar
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}

function Field({ label, htmlFor, error, required, hint, children }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block font-heading text-sm font-semibold text-ink">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {hint && <p className="mb-1.5 text-xs text-muted">{hint}</p>}
      {children}
      {error && <p className="mt-1.5 text-sm text-red-500">{error}</p>}
    </div>
  )
}
