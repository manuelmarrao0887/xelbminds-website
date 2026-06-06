import { useState } from 'react'
import { services } from '../data/services'
import Button from './Button'
import Icon from './Icon'

const SERVICE_OPTIONS = [
  ...services.map((s) => s.title),
  'Outro',
]

const initial = {
  guardian: '',
  email: '',
  phone: '',
  student: '',
  service: '',
  message: '',
  consent: false,
}

// Formulário de contacto com validação no cliente e mensagem de sucesso.
// Nota: não envia para nenhum servidor (demo). Para produção, ligar a um
// serviço de email/formulários (ex.: Formspree, EmailJS) ou a uma API própria.
export default function ContactForm() {
  const [form, setForm] = useState(initial)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const update = (e) => {
    const { name, value, type, checked } = e.target
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }))
    setErrors((err) => ({ ...err, [name]: undefined }))
  }

  const validate = () => {
    const e = {}
    if (!form.guardian.trim()) e.guardian = 'Indique o seu nome.'
    if (!form.email.trim()) e.email = 'Indique o seu email.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Email inválido.'
    if (!form.student.trim()) e.student = 'Indique o nome e ano do aluno.'
    if (!form.message.trim()) e.message = 'Escreva a sua mensagem.'
    if (!form.consent) e.consent = 'É necessário aceitar a política de privacidade.'
    return e
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const e2 = validate()
    setErrors(e2)
    if (Object.keys(e2).length === 0) {
      // Aqui seria feito o envio real para info@xelbminds.pt.
      setSent(true)
    }
  }

  if (sent) {
    return (
      <div className="rounded-[1.75rem] border border-green/50 bg-green-50 p-8 text-center">
        <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-green text-ink">
          <Icon name="check" className="h-8 w-8" />
        </span>
        <h3 className="mt-4 text-xl font-semibold">Obrigada pelo contacto.</h3>
        <p className="mx-auto mt-2 max-w-md text-body">
          Recebemos a sua mensagem e entraremos em contacto nas próximas 24 horas úteis.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => {
            setForm(initial)
            setSent(false)
          }}
        >
          Enviar nova mensagem
        </Button>
      </div>
    )
  }

  const fieldCls = (name) =>
    `w-full rounded-xl border bg-white px-4 py-3 text-base text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-blue ${
      errors[name] ? 'border-red-400' : 'border-line'
    }`

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-[1.75rem] bg-white p-7 shadow-card sm:p-8">
      <h3 className="text-xl font-semibold">Envie-nos uma mensagem</h3>

      <div className="mt-6 grid gap-5">
        <Field label="Nome do encarregado de educação" error={errors.guardian} required htmlFor="guardian">
          <input id="guardian" name="guardian" type="text" value={form.guardian} onChange={update} className={fieldCls('guardian')} autoComplete="name" />
        </Field>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Field label="Email" error={errors.email} required htmlFor="email">
            <input id="email" name="email" type="email" value={form.email} onChange={update} className={fieldCls('email')} autoComplete="email" />
          </Field>
          <Field label="Telemóvel (opcional)" htmlFor="phone">
            <input id="phone" name="phone" type="tel" value={form.phone} onChange={update} className={fieldCls('phone')} autoComplete="tel" />
          </Field>
        </div>

        <Field label="Nome do aluno e ano de escolaridade" error={errors.student} required htmlFor="student">
          <input id="student" name="student" type="text" value={form.student} onChange={update} className={fieldCls('student')} placeholder="Ex.: Maria Silva, 7.º ano" />
        </Field>

        <Field label="Serviço de interesse" htmlFor="service">
          <select id="service" name="service" value={form.service} onChange={update} className={fieldCls('service')}>
            <option value="">Selecione uma opção…</option>
            {SERVICE_OPTIONS.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </Field>

        <Field label="Mensagem" error={errors.message} required htmlFor="message">
          <textarea id="message" name="message" rows={5} value={form.message} onChange={update} className={`${fieldCls('message')} resize-y`} />
        </Field>

        {/* Consentimento RGPD */}
        <div>
          <label className="flex cursor-pointer items-start gap-3 text-sm text-body">
            <input
              type="checkbox"
              name="consent"
              checked={form.consent}
              onChange={update}
              className="mt-1 h-5 w-5 shrink-0 cursor-pointer accent-[#5B8FA8]"
            />
            <span>
              Autorizo o tratamento dos meus dados para efeitos de resposta a este contacto,
              conforme a{' '}
              <a href="/politica-de-privacidade" className="font-semibold text-blue underline">
                Política de Privacidade
              </a>
              . <span className="text-red-500">*</span>
            </span>
          </label>
          {errors.consent && <p className="mt-1.5 text-sm text-red-500">{errors.consent}</p>}
        </div>

        <Button type="submit" variant="primary" size="lg" icon="arrow" className="w-full sm:w-auto">
          Enviar pedido de contacto
        </Button>
      </div>
    </form>
  )
}

function Field({ label, htmlFor, error, required, children }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block font-heading text-sm font-semibold text-ink">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {children}
      {error && <p className="mt-1.5 text-sm text-red-500">{error}</p>}
    </div>
  )
}
