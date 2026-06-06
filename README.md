# XelbMinds — Website

Site do **XelbMinds · Aprender & Crescer**, centro de explicações e apoio ao estudo em
Silves, Algarve. Construído em **React + Vite + Tailwind CSS v4 + React Router**, com um
**backoffice** para gerir os artigos do blog.

## Arrancar o projeto

```bash
npm install      # instalar dependências
npm run dev      # servidor de desenvolvimento (http://localhost:5173)
npm run build    # build de produção (pasta dist/)
npm run preview  # pré-visualizar o build
```

## Estrutura

```
src/
├─ components/      Componentes reutilizáveis (Navbar, Footer, cartões, CTA, ícones…)
├─ pages/           Páginas do site público + admin/ (backoffice)
├─ data/            Conteúdo e configuração
│  ├─ site.js              Contactos, navegação, redes sociais
│  ├─ services.js          Os 6 serviços
│  ├─ content.js           Valores, diferenciais, etapas, equipa
│  ├─ seedPosts.js         Artigos iniciais do blog
│  └─ postsRepository.js   Camada de dados (localStorage → Firebase)
├─ hooks/           usePosts, usePageMeta
└─ index.css        Tokens da marca (cores, tipografia) em Tailwind v4
```

## Páginas

| Rota | Página |
|------|--------|
| `/` | Início (7 secções) |
| `/sobre` | Sobre a XelbMinds |
| `/servicos` | Serviços (6 serviços detalhados, com âncoras) |
| `/blog` | Blog (listagem + filtro por categoria) |
| `/blog/:id` | Artigo |
| `/contactos` | Contactos (formulário com RGPD + mapa) |
| `/politica-de-privacidade` | Política de Privacidade |
| `/admin` | Backoffice — lista de artigos |
| `/admin/novo` · `/admin/editar/:id` | Editor de artigos |

## Backoffice (`/admin`)

- **Sem login** (modo de demonstração) — adicionar autenticação antes de produção.
- Criar, editar e eliminar artigos. Imagem de capa por URL ou upload (ficheiro → base64).
- Corpo do artigo em texto simples: linha em branco separa parágrafos; `## ` cria subtítulo.

### Persistência: localStorage hoje, Firebase amanhã

Todos os artigos são guardados no **localStorage** do navegador (`xelbminds.posts.v1`).
A leitura/escrita está isolada em [`src/data/postsRepository.js`](src/data/postsRepository.js)
com uma API assíncrona (`getPosts`, `getPost`, `savePost`, `deletePost`). **Para migrar
para o Firebase**, basta reescrever o corpo dessas funções com chamadas ao Firestore — as
páginas e o backoffice não precisam de alterações.

## Imagens

As imagens são, para já, fotografias de banco (Unsplash) com _fallback_ automático para um
placeholder na marca. Para gerar/colocar as fotografias definitivas, ver
[`IMAGENS.md`](IMAGENS.md) — contém um prompt em português por cada slot.

## Identidade

- **Cores:** verde `#B5C97A`, azul `#5B8FA8`, fundo alternado `#F5F7F2`.
- **Tipografia:** Playfair Display (títulos), Nunito (subtítulos), Open Sans (corpo).
- **Contactos:** 924 844 704 · info@xelbminds.pt · Rua da Horta da Caixa de Água, Lote 23A, Silves.
  Centralizados em [`src/data/site.js`](src/data/site.js).

## Notas para produção

- Ligar o formulário de contacto a um serviço de envio (Formspree, EmailJS ou API própria)
  para `info@xelbminds.pt`.
- Substituir o embed do mapa pelo pin exato da morada.
- Adicionar autenticação ao `/admin` e migrar os artigos para o Firebase.
- Acrescentar banner de cookies (RGPD) e Google Analytics.
```
