// Artigos iniciais do blog (seed). São carregados na primeira visita para o
// localStorage através de postsRepository. O backoffice (/admin) cria, edita e
// elimina artigos a partir daqui.
//
// `body` é uma lista de blocos simples renderizada em pages/Artigo.jsx:
//   { type: 'p',  text }            parágrafo
//   { type: 'h2', text }            subtítulo
//   { type: 'ul', items: [...] }    lista
//   { type: 'tip', text }           caixa de destaque (dica prática)

export const categories = [
  'Métodos de Estudo',
  'Parentalidade',
  'Bem-estar Escolar',
  'Transições de Ciclo',
  'Preparação para Exames',
  'Notícias XelbMinds',
  'Organização Escolar',
]

const cover = (id) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`

export const seedPosts = [
  {
    id: 'tecnicas-de-estudo-que-funcionam',
    title:
      '5 técnicas de estudo que realmente funcionam (e que a maioria dos alunos não conhece)',
    category: 'Métodos de Estudo',
    date: '2026-05-20',
    excerpt:
      'Um guia prático com as técnicas mais eficazes: técnica Pomodoro, mapas mentais, espaçamento de repetições, técnica de Feynman e teste ativo.',
    cover: cover('photo-1456513080510-7bf3a84b82f8'),
    coverAlt: 'Caderno com apontamentos organizados e material de estudo',
    body: [
      {
        type: 'p',
        text: 'Estudar muitas horas nem sempre é sinónimo de estudar bem. Muitos alunos passam tardes inteiras sobre os livros e, ainda assim, chegam ao teste com a sensação de que “não fixaram nada”. A boa notícia é que estudar é uma competência que se aprende — e há técnicas, validadas pela investigação, que fazem toda a diferença.',
      },
      {
        type: 'p',
        text: 'Reunimos cinco das mais eficazes. Não precisa de aplicar todas ao mesmo tempo: comece por uma e veja como o seu filho responde.',
      },
      { type: 'h2', text: '1. Técnica Pomodoro' },
      {
        type: 'p',
        text: 'Consiste em estudar em blocos curtos e concentrados — habitualmente 25 minutos — seguidos de uma pausa de 5 minutos. A cada quatro blocos, faz-se uma pausa maior. Este ritmo combate a fadiga, reduz a procrastinação e torna o estudo muito mais sustentável.',
      },
      { type: 'h2', text: '2. Teste ativo (active recall)' },
      {
        type: 'p',
        text: 'Em vez de reler a matéria vezes sem conta, o aluno fecha o caderno e tenta recordar o que aprendeu. Pode fazê-lo respondendo a perguntas, explicando em voz alta ou escrevendo de memória. Esforçar-se por recuperar a informação fixa-a muito melhor do que a leitura passiva.',
      },
      { type: 'h2', text: '3. Espaçamento de repetições' },
      {
        type: 'p',
        text: 'Rever a matéria em intervalos crescentes — ao fim de um dia, depois de três dias, depois de uma semana — aproveita a forma como a memória funciona. Estudar um pouco todos os dias vale mais do que concentrar tudo na véspera.',
      },
      { type: 'h2', text: '4. Mapas mentais' },
      {
        type: 'p',
        text: 'Organizar a informação visualmente, com ramos que ligam ideias a partir de um conceito central, ajuda a compreender relações e a ter uma visão de conjunto. É especialmente útil para resumir matérias extensas.',
      },
      { type: 'h2', text: '5. Técnica de Feynman' },
      {
        type: 'p',
        text: 'Explicar a matéria com palavras simples, como se ensinasse outra pessoa, revela exatamente o que ainda não está bem compreendido. Se o aluno não consegue explicar, é sinal de que precisa de voltar àquele ponto.',
      },
      {
        type: 'tip',
        text: 'Dica prática: escolha uma técnica e aplique-a esta semana num só dia de estudo. O objetivo não é mudar tudo de uma vez, mas criar pequenos hábitos que se mantêm.',
      },
      {
        type: 'p',
        text: 'Na XelbMinds, ensinamos estas e outras estratégias de forma personalizada, adaptadas ao ano de escolaridade e ao perfil de cada aluno. Aprender a estudar é, muitas vezes, o passo que falta para transformar o esforço em resultados.',
      },
    ],
  },
  {
    id: 'ajudar-nos-trabalhos-de-casa-sem-conflito',
    title: 'Como ajudar o seu filho nos trabalhos de casa sem criar conflito',
    category: 'Parentalidade',
    date: '2026-05-12',
    excerpt:
      'Conselhos práticos para criar um ambiente de estudo positivo em casa, com mais tranquilidade e melhores resultados.',
    cover: cover('photo-1503454537195-1dcabb73ffb9'),
    coverAlt: 'Mãe e filho a fazer trabalhos de casa juntos à secretária',
    body: [
      {
        type: 'p',
        text: 'A hora dos trabalhos de casa é, em muitas famílias, um momento de tensão. O seu papel não é fazer os trabalhos pelo seu filho, mas criar as condições para que ele os faça com autonomia e confiança.',
      },
      { type: 'h2', text: 'Crie uma rotina e um espaço fixos' },
      {
        type: 'p',
        text: 'Um local arrumado, com boa luz e sem distrações, e um horário previsível ajudam o cérebro a entrar em modo de concentração. A previsibilidade reduz a negociação diária e os conflitos.',
      },
      { type: 'h2', text: 'Esteja por perto, sem assumir o controlo' },
      {
        type: 'p',
        text: 'Acompanhe sem corrigir tudo de imediato. Faça perguntas em vez de dar respostas: “por onde achas que devias começar?”. Assim, desenvolve o pensamento autónomo em vez da dependência.',
      },
      {
        type: 'tip',
        text: 'Dica prática: combine que os trabalhos começam sempre à mesma hora. A constância evita a discussão de “quando” todos os dias.',
      },
      {
        type: 'p',
        text: 'Se sente que o conflito se repete e afeta a relação, um apoio externo pode aliviar a pressão de toda a família. Fale connosco — estamos em Silves e teremos todo o gosto em ajudar.',
      },
    ],
  },
  {
    id: 'passagem-para-o-5-ano',
    title: 'A passagem para o 5.º ano: o que muda e como preparar o seu filho',
    category: 'Transições de Ciclo',
    date: '2026-04-28',
    excerpt:
      'A transição do 1.º para o 2.º ciclo é um momento exigente. Saiba o que esperar e como tornar esta mudança mais suave.',
    cover: cover('photo-1580582932707-520aed937b7b'),
    coverAlt: 'Aluno com mochila a caminho de uma nova escola',
    body: [
      {
        type: 'p',
        text: 'A entrada no 5.º ano traz mudanças significativas: vários professores em vez de um, mais disciplinas, mais materiais e uma maior exigência de autonomia. É natural que surjam algumas dificuldades de adaptação.',
      },
      { type: 'h2', text: 'O que muda' },
      {
        type: 'ul',
        items: [
          'Um professor por disciplina, com métodos e exigências diferentes',
          'Mais disciplinas e mais materiais para gerir',
          'Maior responsabilidade na organização e nos prazos',
          'Avaliações mais frequentes e estruturadas',
        ],
      },
      { type: 'h2', text: 'Como preparar' },
      {
        type: 'p',
        text: 'Trabalhar a organização do material, criar uma rotina de estudo e acompanhar de perto as primeiras semanas faz toda a diferença. O objetivo é que o aluno ganhe segurança rapidamente.',
      },
      {
        type: 'tip',
        text: 'Dica prática: ajude o seu filho a montar um horário visual com as disciplinas e os dias de cada uma. Saber o que aí vem reduz a ansiedade.',
      },
    ],
  },
  {
    id: 'nao-quer-ir-para-a-escola',
    title: 'O meu filho não quer ir para a escola. O que posso fazer?',
    category: 'Bem-estar Escolar',
    date: '2026-04-15',
    excerpt:
      'Como identificar os sinais de resistência escolar, perceber as causas emocionais e encontrar formas de reconectar o aluno com a aprendizagem.',
    cover: cover('photo-1577896851231-70ef18881754'),
    coverAlt: 'Criança pensativa em ambiente de aprendizagem',
    body: [
      {
        type: 'p',
        text: 'A recusa em ir à escola raramente é “preguiça”. Por trás, há quase sempre uma causa — dificuldades de aprendizagem, problemas com colegas, ansiedade ou falta de sentido no que se estuda.',
      },
      { type: 'h2', text: 'Comece por escutar' },
      {
        type: 'p',
        text: 'Antes de procurar soluções, procure compreender. Pergunte sem julgar e leve a sério o que o seu filho sente, mesmo que lhe pareça desproporcionado.',
      },
      {
        type: 'tip',
        text: 'Dica prática: evite o confronto logo de manhã. Escolha um momento calmo para conversar sobre o que está a custar tanto.',
      },
      {
        type: 'p',
        text: 'Quando a resistência se prende com dificuldades académicas, recuperar a confiança no estudo costuma reconciliar o aluno com a escola. É um trabalho que fazemos todos os dias na XelbMinds.',
      },
    ],
  },
  {
    id: 'plano-de-estudo-exames-9-ano',
    title: 'Como criar um plano de estudo para os exames nacionais do 9.º ano',
    category: 'Preparação para Exames',
    date: '2026-04-02',
    excerpt:
      'Um guia passo a passo para organizar as revisões com oito semanas de antecedência, gerir o tempo e chegar a junho mais preparado.',
    cover: cover('photo-1434030216411-0b793f4b4173'),
    coverAlt: 'Aluna a organizar um plano de revisões para os exames',
    body: [
      {
        type: 'p',
        text: 'Chegar aos exames com um plano claro faz toda a diferença entre estudar com pânico e estudar com confiança. Oito semanas é um bom horizonte para preparar as provas finais do 9.º ano sem sobrecarga.',
      },
      { type: 'h2', text: 'Passo 1 — Levante as matérias' },
      {
        type: 'p',
        text: 'Liste todos os conteúdos por disciplina e marque o nível de domínio de cada um. As matérias menos seguras merecem mais tempo.',
      },
      { type: 'h2', text: 'Passo 2 — Distribua por semanas' },
      {
        type: 'p',
        text: 'Reserve as primeiras semanas para rever conteúdos e as últimas para resolver provas de anos anteriores e fazer simulacros.',
      },
      {
        type: 'tip',
        text: 'Dica prática: inclua sempre dias de folga no plano. Um plano sem margem desmorona ao primeiro imprevisto.',
      },
    ],
  },
  {
    id: 'caderno-de-resumos',
    title: 'O caderno de resumos que transforma a forma de estudar',
    category: 'Métodos de Estudo',
    date: '2026-03-18',
    excerpt:
      'Como fazer resumos que realmente ajudam: estrutura, linguagem, cores e o que nunca deve constar de um bom resumo.',
    cover: cover('photo-1517842645767-c639042777db'),
    coverAlt: 'Caderno de resumos com apontamentos a cores',
    body: [
      {
        type: 'p',
        text: 'Um bom resumo não é copiar o manual por outras palavras — é transformar a informação em algo mais simples, organizado e fácil de rever. Resumir bem é, em si mesmo, uma forma poderosa de estudar.',
      },
      { type: 'h2', text: 'O que um bom resumo tem' },
      {
        type: 'ul',
        items: [
          'Linguagem própria, não cópia literal do manual',
          'Estrutura clara, com títulos e tópicos',
          'Destaques para as ideias essenciais',
          'Espaço para acrescentar dúvidas e exemplos',
        ],
      },
      {
        type: 'tip',
        text: 'Dica prática: depois de resumir, tape o resumo e tente explicá-lo de memória. Se conseguir, está bem feito.',
      },
    ],
  },
  {
    id: 'quanto-tempo-estudar-2-ciclo',
    title: 'Quanto tempo deve um aluno do 2.º ciclo estudar por dia?',
    category: 'Parentalidade',
    date: '2026-03-05',
    excerpt:
      'Uma referência prática por ciclo e ano de escolaridade, com sugestões sobre como distribuir o tempo de estudo pelas diferentes disciplinas.',
    cover: cover('photo-1427504494785-3a9ca7044f45'),
    coverAlt: 'Relógio e material escolar sobre uma secretária',
    body: [
      {
        type: 'p',
        text: 'Não existe um número mágico, mas há referências úteis. No 2.º ciclo, entre 45 a 60 minutos diários de estudo focado, além dos trabalhos de casa, costumam ser suficientes — desde que o tempo seja bem aproveitado.',
      },
      {
        type: 'p',
        text: 'Mais importante do que a quantidade é a regularidade e a qualidade. Vinte minutos concentrados valem mais do que duas horas distraídas.',
      },
      {
        type: 'tip',
        text: 'Dica prática: prefira sessões curtas e diárias a maratonas de fim de semana. O cérebro aprende melhor com constância.',
      },
    ],
  },
  {
    id: 'ansiedade-nos-testes',
    title: 'Ansiedade nos testes: como apoiar o seu filho',
    category: 'Bem-estar Escolar',
    date: '2026-02-20',
    excerpt:
      'Sinais de alerta, causas comuns e estratégias concretas para pais e alunos lidarem com a pressão das avaliações.',
    cover: cover('photo-1499209974431-9dddcece7f88'),
    coverAlt: 'Aluno a respirar fundo antes de uma avaliação',
    body: [
      {
        type: 'p',
        text: 'Algum nervosismo antes de um teste é normal e até útil. O problema surge quando a ansiedade bloqueia o aluno, mesmo quando ele estudou e sabe a matéria.',
      },
      { type: 'h2', text: 'Sinais a que estar atento' },
      {
        type: 'ul',
        items: [
          'Dores de cabeça ou de barriga antes das avaliações',
          'Dificuldade em dormir na véspera',
          '“Brancas” no teste, apesar de saber a matéria',
          'Evitamento e adiamento do estudo',
        ],
      },
      {
        type: 'tip',
        text: 'Dica prática: ensine técnicas simples de respiração e valorize o esforço, não apenas a nota. A pressão excessiva alimenta a ansiedade.',
      },
    ],
  },
  {
    id: 'programa-de-verao-2026',
    title: 'Programa de Verão XelbMinds: o que preparámos para este verão',
    category: 'Notícias XelbMinds',
    date: '2026-06-01',
    excerpt:
      'Apresentação do programa de férias de verão: objetivos, atividades, horários e como inscrever o seu filho.',
    cover: cover('photo-1509062522246-3755977927d7'),
    coverAlt: 'Crianças em atividades de verão num ambiente educativo',
    body: [
      {
        type: 'p',
        text: 'As férias de verão são longas — e podem ser uma excelente oportunidade para recuperar matérias, preparar o próximo ano e desenvolver competências, sem o peso da rotina escolar.',
      },
      { type: 'h2', text: 'O que inclui o programa' },
      {
        type: 'ul',
        items: [
          'Recuperação de matérias com dificuldades',
          'Preparação para o próximo ano letivo',
          'Atividades de autonomia e organização pessoal',
          'Projetos criativos e horários flexíveis',
        ],
      },
      {
        type: 'p',
        text: 'As inscrições já estão abertas e as vagas são limitadas, para garantir grupos pequenos. Contacte-nos para conhecer horários e condições.',
      },
    ],
  },
  {
    id: 'checklist-mochila-1-dia-de-aulas',
    title: 'Checklist gratuita: a mochila do 1.º dia de aulas está completa?',
    category: 'Organização Escolar',
    date: '2026-01-15',
    excerpt:
      'Um recurso prático para pais de crianças que entram para o 1.º ciclo ou mudam de ciclo escolar.',
    cover: cover('photo-1503676260728-1c00da094a0b'),
    coverAlt: 'Mochila e material escolar preparados para o primeiro dia de aulas',
    body: [
      {
        type: 'p',
        text: 'O primeiro dia de aulas é mais tranquilo quando está tudo preparado na véspera. Use esta lista como ponto de partida e adapte-a às indicações da escola.',
      },
      { type: 'h2', text: 'O essencial' },
      {
        type: 'ul',
        items: [
          'Estojo completo: lápis, borracha, afia, canetas e marcadores',
          'Cadernos e capas identificados',
          'Agenda ou caderneta escolar',
          'Lanche, garrafa de água e uma muda de roupa (1.º ciclo)',
          'Material específico pedido pela escola',
        ],
      },
      {
        type: 'tip',
        text: 'Dica prática: deixe a criança participar na preparação da mochila. Sentir-se responsável pelo seu material aumenta a autonomia.',
      },
    ],
  },
]
