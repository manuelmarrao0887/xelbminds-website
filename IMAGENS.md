# Imagens do site XelbMinds — guia de substituição e prompts

O briefing pede **fotografias reais do espaço XelbMinds e da equipa**. Enquanto essas
fotos não existem, o site usa **fotografias de banco (Unsplash)** como pré-visualização.
Cada `<img>` tem ainda um _fallback_ automático: se a foto de banco não carregar, aparece
um placeholder elegante com as cores da marca (nunca há imagens partidas).

Este documento contém, para cada slot, **um prompt em português** pronto a colar no
ChatGPT / DALL·E para gerar a imagem definitiva, mais a indicação de onde a substituir.

## Como substituir uma imagem

1. Gere a imagem com o prompt correspondente (ou use a foto real da equipa).
2. Guarde o ficheiro em `public/img/` (ex.: `public/img/hero-inicio.jpg`).
3. No ficheiro indicado, troque o URL do Unsplash por `/img/hero-inicio.jpg`.
   - Heros e secções: ver `src/pages/*.jsx` (campo `src` do `<SmartImage>`).
   - Serviços: editar o campo `image` em `src/data/services.js`.
   - Artigos do blog: editar o campo `cover` em `src/data/seedPosts.js` (ou pelo backoffice em `/admin`).

## Estilo visual comum a TODAS as imagens

> Para manter coerência, acrescente sempre a cada prompt: _«Luz natural suave, tons quentes
> e acolhedores, paleta com verde-lima suave (#B5C97A) e azul acinzentado (#5B8FA8),
> ambiente real e humano, estilo fotográfico editorial, foco nítido, sem texto na imagem,
> sem logótipos, formato horizontal.»_ Para retratos da equipa, usar formato vertical/quadrado.

---

## 1. Página Inicial (`src/pages/Home.jsx`)

### 1.1 Hero principal
**Prompt:**
> Fotografia de uma criança ou jovem do ensino básico a estudar concentrada numa
> secretária organizada, num centro de estudos acolhedor com luz natural a entrar pela
> janela. Expressão tranquila e confiante, livros e caderno à frente. Ambiente moderno,
> limpo e humano. Luz natural suave, tons quentes, paleta com verde-lima suave e azul
> acinzentado, estilo fotográfico editorial, sem texto, formato vertical (4:5).

### 1.2 Secção «A nossa missão»
**Prompt:**
> Fotografia de um explicador a apoiar um aluno durante uma sessão de estudo, ambos a
> sorrir de forma natural, sentados a uma mesa com material escolar. Ambiente de centro
> de explicações acolhedor e luminoso. Sensação de proximidade e confiança. Luz natural
> suave, tons quentes, paleta verde-lima e azul acinzentado, estilo editorial, formato 5:4.

---

## 2. Sobre a XelbMinds (`src/pages/Sobre.jsx`)

### 2.1 «A nossa história»
**Prompt:**
> Fotografia interior de uma sala de estudo moderna e acolhedora de um centro de
> explicações, com mesas de trabalho, estantes com livros, plantas e luz natural
> abundante. Espaço organizado, calmo e convidativo, sem pessoas em primeiro plano. Tons
> quentes, paleta verde-lima e azul acinzentado, estilo editorial, formato 4:3.

### 2.2 Equipa (3 retratos) — `src/data/content.js` (array `team`)
**Prompt (repetir para cada membro):**
> Retrato profissional e caloroso de um(a) professor(a) / explicador(a), a sorrir de forma
> natural, em ambiente de centro de estudos desfocado ao fundo. Postura empática e
> competente. Luz natural suave, tons quentes, fundo com toques de verde-lima e azul
> acinzentado, estilo editorial, formato quadrado (1:1).

> Nota: idealmente substituir por fotografias reais da equipa, conforme o briefing.

---

## 3. Serviços (`src/data/services.js` — campo `image` de cada serviço)

### 3.1 Apoio ao Estudo
> Fotografia de um pequeno grupo de alunos do 1.º/2.º ciclo a fazer os trabalhos de casa
> com o apoio de um explicador, numa mesa partilhada e organizada. Ambiente concentrado e
> positivo. Luz natural, tons quentes, paleta verde-lima e azul acinzentado, editorial, 5:4.

### 3.2 Explicações Individuais
> Fotografia de uma sessão individual: explicador e aluno lado a lado a resolver um
> exercício num caderno, atenção total e relação próxima. Centro de estudos luminoso. Luz
> natural suave, tons quentes, paleta da marca, estilo editorial, formato 5:4.

### 3.3 Explicações em Grupo
> Fotografia de quatro alunos adolescentes a estudar em conjunto à volta de uma mesa, a
> debater e a partilhar apontamentos, com um explicador a orientar. Dinâmica colaborativa
> e motivadora. Luz natural, tons quentes, paleta da marca, editorial, 5:4.

### 3.4 Programas de Férias
> Fotografia de crianças e jovens em atividades de aprendizagem descontraídas durante as
> férias — projeto criativo sobre a mesa, ambiente leve e alegre, alguma luz de verão.
> Tons quentes, paleta verde-lima e azul acinzentado, estilo editorial, formato 5:4.

### 3.5 Métodos de Estudo
> Fotografia em grande plano de um caderno muito bem organizado com resumos, mapas mentais
> coloridos, marcadores e um planeamento semanal, mãos de um aluno a escrever. Sensação de
> método e organização. Luz natural suave, tons quentes, paleta da marca, editorial, 5:4.

### 3.6 Preparação para Testes e Exames
> Fotografia de uma aluna do secundário concentrada a rever para um exame, com fichas de
> exercícios, marcadores e um plano de revisões visível. Expressão focada mas tranquila.
> Luz natural, tons quentes, paleta da marca, estilo editorial, formato 5:4.

---

## 4. Blog (`src/data/seedPosts.js` — campo `cover`; ou via backoffice `/admin`)

Cada artigo tem uma imagem de destaque relacionada com o tema. Prompts por artigo:

1. **5 técnicas de estudo que funcionam** — _Caderno organizado com técnicas de estudo,
   marcadores e relógio (Pomodoro) sobre uma secretária luminosa._
2. **Ajudar nos trabalhos de casa sem conflito** — _Mãe/pai e filho a fazer os trabalhos
   de casa juntos em casa, ambiente calmo e cúmplice._
3. **A passagem para o 5.º ano** — _Aluno com mochila a entrar numa escola nova, expressão
   expectante, luz da manhã._
4. **Não quer ir para a escola** — _Criança pensativa junto a uma janela com material
   escolar ao lado, tom emocional sereno._
5. **Plano de estudo para os exames do 9.º ano** — _Aluno a organizar um calendário de
   revisões com post-its e fichas._
6. **O caderno de resumos** — _Grande plano de um caderno de resumos a cores, bem
   estruturado, com canetas e marcadores._
7. **Quanto tempo deve estudar por dia** — _Relógio/ampulheta junto a material escolar
   numa secretária organizada._
8. **Ansiedade nos testes** — _Aluno a respirar fundo e a acalmar-se antes de uma prova,
   tom empático e tranquilizador._
9. **Programa de Verão XelbMinds** — _Crianças em atividades de verão educativas e alegres,
   ao ar livre ou em sala luminosa._
10. **Checklist da mochila do 1.º dia** — _Mochila aberta com material escolar novo
    organizado sobre uma cama/mesa, luz suave._

> Acrescentar a cada um o bloco de estilo comum (ver topo). Formato horizontal 16:9 ou 16:10.

---

## 5. Contactos (`src/pages/Contactos.jsx`)
O briefing sugere uma fotografia da **entrada/fachada do espaço XelbMinds**. Atualmente a
página usa o mapa do Google. Se quiser adicionar uma foto da fachada:
> Fotografia da fachada/entrada de um centro de estudos em Silves, com a placa/identidade
> visível, luz natural de fim de tarde, ambiente acolhedor e convidativo, formato 16:9.

---

## 6. Favicon e logótipo
- O **logótipo horizontal** já é usado no cabeçalho e rodapé (`public/logo-horizontal.png`).
- O **logótipo principal** é usado no backoffice e como favicon (`public/favicon.png`).
- Recomenda-se criar um favicon `.ico`/`.png` quadrado recortado (só o cérebro) para melhor
  legibilidade em separadores pequenos.
