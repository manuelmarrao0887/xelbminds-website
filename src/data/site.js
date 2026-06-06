// Configuração central da XelbMinds — contactos reais, navegação e redes sociais.
// Alterar aqui reflete-se em todo o site.

export const site = {
  name: 'XelbMinds',
  tagline: 'Aprender & Crescer',
  location: 'Silves, Algarve',
  phone: '924 844 704',
  phoneRaw: '924844704',
  whatsapp: '351924844704',
  email: 'info@xelbminds.pt',
  address: 'Rua da Horta da Caixa de Água, Lote 23A, Silves, Algarve',
  schedule: 'Segunda a sexta: 09h00 às 20h00 · Sábado: 09h00 às 13h00',
  social: {
    facebook: 'https://facebook.com/XelbMinds',
    instagram: 'https://instagram.com/xelbminds',
  },
  // Embed do Google Maps centrado em Silves (substituir pelo pin exato da morada).
  mapsEmbed:
    'https://www.google.com/maps?q=Silves,+Algarve,+Portugal&output=embed',
}

export const mainNav = [
  { label: 'Início', to: '/' },
  { label: 'Sobre a XelbMinds', to: '/sobre' },
  { label: 'Serviços', to: '/servicos' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contactos', to: '/contactos' },
]

export const footerLinks = [
  { label: 'Início', to: '/' },
  { label: 'Serviços', to: '/servicos' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contactos', to: '/contactos' },
  { label: 'Política de Privacidade', to: '/politica-de-privacidade' },
]
