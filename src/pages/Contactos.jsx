import { usePageMeta } from '../hooks/usePageMeta'
import { site } from '../data/site'
import PageHero from '../components/PageHero'
import { Section } from '../components/Section'
import ContactForm from '../components/ContactForm'
import Button from '../components/Button'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'

const infoItems = [
  { icon: 'pin', label: 'Morada', value: site.address },
  { icon: 'phone', label: 'Telemóvel', value: site.phone, href: `tel:${site.phoneRaw}` },
  { icon: 'whatsapp', label: 'WhatsApp', value: site.phone, href: `https://wa.me/${site.whatsapp}` },
  { icon: 'mail', label: 'Email', value: site.email, href: `mailto:${site.email}` },
  { icon: 'clock', label: 'Horário', value: site.schedule },
]

export default function Contactos() {
  usePageMeta(
    'Contactos — XelbMinds, Centro de Explicações em Silves, Algarve',
    'Entre em contacto com a XelbMinds em Silves, Algarve. Ligue, envie email ou preencha o formulário. Estamos disponíveis para responder a todas as suas questões sobre apoio ao estudo e explicações.',
  )

  return (
    <>
      <PageHero
        eyebrow="Contactos"
        title="Fale connosco. Estamos aqui."
        subtitle="Tem dúvidas sobre os nossos serviços? Quer perceber qual o apoio mais adequado para o seu filho? Contacte-nos sem compromisso. Teremos todo o gosto em ajudar."
      />

      <Section tone="white">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.2fr]">
          {/* Informações de contacto */}
          <div>
            <h2 className="text-2xl font-semibold">Informações de contacto</h2>
            <ul className="mt-6 space-y-4">
              {infoItems.map((item) => (
                <li
                  key={item.label}
                  className="flex items-start gap-4 rounded-2xl border border-line bg-white p-5 shadow-card"
                >
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-50 text-blue-700">
                    <Icon name={item.icon} className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="font-heading text-xs font-bold uppercase tracking-wide text-muted">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a href={item.href} className="text-[15px] font-medium text-ink hover:text-blue">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-[15px] font-medium text-ink">{item.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button href={`tel:${site.phoneRaw}`} variant="primary" icon="phone" className="w-full sm:w-auto">
                Ligar agora
              </Button>
              <Button href={`mailto:${site.email}`} variant="outline" icon="mail" className="w-full sm:w-auto">
                Enviar email
              </Button>
            </div>
          </div>

          {/* Formulário */}
          <Reveal>
            <ContactForm />
          </Reveal>
        </div>
      </Section>

      {/* Mapa */}
      <Section tone="soft">
        <h2 className="text-2xl font-semibold">Onde nos encontrar</h2>
        <p className="mt-2 text-body">{site.address}</p>
        <div className="mt-6 overflow-hidden rounded-[1.75rem] border border-line shadow-card">
          <iframe
            title="Mapa da localização da XelbMinds em Silves"
            src={site.mapsEmbed}
            className="h-[420px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Section>

      {/* CTA final */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-x">
          <div className="rounded-[2rem] bg-gradient-to-br from-green-50 to-blue-50 p-10 text-center sm:p-14">
            <h2 className="text-3xl font-semibold">Pronto para dar o primeiro passo?</h2>
            <p className="mx-auto mt-3 max-w-xl text-lg text-body">
              Não há compromisso. Apenas uma conversa para perceber como podemos ajudar o seu
              filho.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href={`tel:${site.phoneRaw}`} variant="primary" size="lg" icon="phone" className="w-full sm:w-auto">
                Ligar agora: {site.phone}
              </Button>
              <Button href={`mailto:${site.email}`} variant="outline" size="lg" icon="mail" className="w-full sm:w-auto">
                Enviar email
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
