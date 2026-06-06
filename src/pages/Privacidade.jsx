import { usePageMeta } from '../hooks/usePageMeta'
import { site } from '../data/site'
import PageHero from '../components/PageHero'
import { Section } from '../components/Section'

export default function Privacidade() {
  usePageMeta(
    'Política de Privacidade — XelbMinds',
    'Política de privacidade e tratamento de dados pessoais da XelbMinds, em conformidade com o RGPD.',
  )

  return (
    <>
      <PageHero
        eyebrow="RGPD"
        title="Política de Privacidade"
        subtitle="Como a XelbMinds recolhe, utiliza e protege os seus dados pessoais."
      />

      <Section tone="white">
        <div className="mx-auto max-w-3xl space-y-8 text-body">
          <p className="text-sm text-muted">
            Este é um texto-modelo e deve ser revisto por um responsável antes da publicação.
          </p>

          <Block title="1. Responsável pelo tratamento">
            A XelbMinds, com morada em {site.address}, é a entidade responsável pelo
            tratamento dos dados pessoais recolhidos através deste site. Para qualquer questão
            relacionada com privacidade, contacte-nos através de{' '}
            <a className="font-semibold text-blue underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            .
          </Block>

          <Block title="2. Dados que recolhemos">
            Recolhemos os dados que nos fornece voluntariamente através do formulário de
            contacto — nomeadamente nome do encarregado de educação, email, telemóvel (quando
            indicado), nome e ano de escolaridade do aluno, serviço de interesse e a mensagem
            enviada.
          </Block>

          <Block title="3. Finalidade do tratamento">
            Os dados são utilizados exclusivamente para responder ao seu contacto, prestar
            informações sobre os nossos serviços e dar seguimento ao seu pedido. Não utilizamos
            os seus dados para outros fins sem o seu consentimento.
          </Block>

          <Block title="4. Conservação dos dados">
            Conservamos os dados apenas durante o tempo necessário para as finalidades
            descritas ou para cumprimento de obrigações legais.
          </Block>

          <Block title="5. Partilha de dados">
            Os seus dados não são vendidos nem partilhados com terceiros, exceto quando
            necessário para o funcionamento do serviço (por exemplo, fornecedor de email) ou
            por imposição legal.
          </Block>

          <Block title="6. Os seus direitos">
            Tem o direito de aceder, retificar, apagar ou limitar o tratamento dos seus dados,
            bem como o direito de oposição e de portabilidade. Para exercer estes direitos,
            contacte-nos através do email indicado.
          </Block>

          <Block title="7. Cookies">
            Este site pode utilizar cookies essenciais ao seu funcionamento e, mediante
            consentimento, cookies de análise. Pode gerir as suas preferências no banner de
            cookies.
          </Block>
        </div>
      </Section>
    </>
  )
}

function Block({ title, children }) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-ink">{title}</h2>
      <p className="mt-2">{children}</p>
    </section>
  )
}
