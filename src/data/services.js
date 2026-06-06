// Serviços da XelbMinds — conteúdo conforme o guia da marca.
// `icon` mapeia para um ícone SVG em components/Icon.jsx.
// `image` é uma foto de banco (preview imediato); o prompt definitivo está em IMAGENS.md.

export const services = [
  {
    id: 'apoio-ao-estudo',
    icon: 'book',
    title: 'Apoio ao Estudo',
    tagline: 'Acompanhamento regular para quem precisa de estrutura e organização',
    short:
      'Acompanhamento regular do trabalho escolar diário, com foco na organização, na atenção e na consolidação de conteúdos.',
    long: [
      'O apoio ao estudo é pensado para alunos que beneficiam de um espaço estruturado para realizar os trabalhos de casa, estudar e consolidar os conteúdos trabalhados na escola.',
      'Mais do que fazer os trabalhos, os nossos acompanhantes ensinam o aluno a organizar-se, a gerir o tempo e a desenvolver hábitos de estudo adequados ao seu ano de escolaridade.',
    ],
    includes: [
      'Apoio na realização dos trabalhos de casa',
      'Revisão e consolidação de matérias',
      'Desenvolvimento de hábitos de estudo',
      'Comunicação regular com os encarregados de educação',
    ],
    forWhom: 'Alunos do 1.º ao 3.º ciclo',
    format: 'Individual ou pequenos grupos (máx. 4 alunos)',
    image:
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1100&q=80',
    imageAlt: 'Aluno a estudar com apoio numa secretária organizada',
  },
  {
    id: 'explicacoes-individuais',
    icon: 'user',
    title: 'Explicações Individuais',
    tagline: 'Atenção total ao aluno, focada nas suas dificuldades específicas',
    short:
      'Sessões a dois, adaptadas às dificuldades e ao ritmo de cada aluno, em qualquer disciplina do 1.º ciclo ao secundário.',
    long: [
      'As explicações individuais são sessões a dois, entre professor e aluno, pensadas para trabalhar dificuldades concretas em disciplinas específicas.',
      'Este formato permite um acompanhamento centrado no aluno: o ritmo é o dele, os exemplos são escolhidos a pensar nele e o foco está exatamente onde é mais necessário.',
    ],
    includes: [
      'Conhecimento inicial das dificuldades do aluno',
      'Plano de sessões adaptado ao seu perfil',
      'Trabalho por disciplina: Matemática, Português, Inglês, Ciências, História, Física e Química, Biologia, Economia, entre outras',
      'Preparação para testes e fichas de avaliação',
      'Feedback regular ao encarregado de educação',
    ],
    forWhom: 'Alunos do 1.º ciclo ao ensino secundário',
    format: 'Individual (1 aluno, 1 professor)',
    image:
      'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1100&q=80',
    imageAlt: 'Professor a explicar matéria a um aluno, sessão individual',
  },
  {
    id: 'explicacoes-em-grupo',
    icon: 'users',
    title: 'Explicações em Grupo',
    tagline: 'Aprender com os outros: motivação, partilha e resultados',
    short:
      'Aprender em pequeno grupo, com a dinâmica de quem aprende junto e se motiva mutuamente.',
    long: [
      'As explicações em grupo reúnem até quatro alunos com necessidades semelhantes, numa dinâmica que combina o apoio do professor com a motivação natural de aprender em conjunto.',
      'Este formato é especialmente eficaz quando os alunos têm dificuldades na mesma disciplina e aproveitam a explicação partilhada para consolidar melhor os conhecimentos.',
    ],
    includes: [
      'Grupos pequenos e equilibrados (máx. 4 alunos)',
      'Foco numa disciplina ou num conjunto de disciplinas',
      'Dinâmicas colaborativas de aprendizagem',
      'Preparação para testes em grupo',
    ],
    forWhom: 'Alunos do 2.º e 3.º ciclo e ensino secundário',
    format: 'Pequeno grupo (até 4 alunos)',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1100&q=80',
    imageAlt: 'Pequeno grupo de alunos a estudar em conjunto à volta de uma mesa',
  },
  {
    id: 'programas-de-ferias',
    icon: 'sun',
    title: 'Programas de Férias',
    tagline: 'Férias com propósito: aprender, crescer e preparar o futuro',
    short:
      'Férias produtivas e motivadoras: recuperação de matérias, preparação para o próximo ano letivo e atividades de desenvolvimento pessoal.',
    long: [
      'Os programas de férias são uma oportunidade para os alunos recuperarem matérias em atraso, adiantarem conteúdos para o próximo ano e desenvolverem competências pessoais, num ambiente descontraído e motivador.',
      'São programas pensados para as férias do Verão, Natal e Páscoa, com atividades que combinam trabalho académico e desenvolvimento pessoal.',
    ],
    includes: [
      'Recuperação de matérias e disciplinas com dificuldades',
      'Preparação para o próximo ano letivo',
      'Atividades de desenvolvimento da autonomia e organização pessoal',
      'Projetos criativos e de competências transversais',
      'Horários flexíveis, adaptados às férias da família',
    ],
    forWhom: 'Alunos do 1.º ciclo ao ensino secundário',
    format: 'Individual ou grupo, meio-dia ou dia completo, conforme o programa',
    image:
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1100&q=80',
    imageAlt: 'Crianças em atividade de aprendizagem descontraída durante as férias',
  },
  {
    id: 'metodos-de-estudo',
    icon: 'compass',
    title: 'Métodos de Estudo',
    tagline: 'As ferramentas que o aluno usa para o resto da vida',
    short:
      'Ensinar a estudar: organização do caderno, gestão do tempo, técnicas de memorização e autonomia escolar.',
    long: [
      'Muitos alunos têm dificuldades não porque não sejam capazes, mas porque nunca aprenderam a estudar de forma eficaz. Este programa ensina exatamente isso.',
      'Através de sessões práticas, o aluno aprende a organizar os seus materiais, a criar rotinas de estudo, a gerir o tempo entre disciplinas e a utilizar técnicas de memorização eficazes.',
    ],
    includes: [
      'Organização do caderno e dos materiais escolares',
      'Criação de planos e horários de estudo realistas',
      'Técnicas de memorização e resumo eficaz',
      'Gestão do tempo e das prioridades',
      'Estratégias para ultrapassar a procrastinação e a falta de motivação',
    ],
    forWhom:
      'Alunos do 2.º e 3.º ciclo e ensino secundário (especialmente recomendado em transições de ciclo)',
    format: 'Individual, programa de 4 a 8 sessões',
    image:
      'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1100&q=80',
    imageAlt: 'Caderno organizado com apontamentos e planeamento de estudo',
  },
  {
    id: 'preparacao-para-exames',
    icon: 'target',
    title: 'Preparação para Testes e Exames',
    tagline: 'Um plano de revisão para chegar ao dia da avaliação com mais segurança',
    short:
      'Plano personalizado de revisão, simulacros e treino intensivo para provas e exames nacionais.',
    long: [
      'A preparação para testes e exames é um serviço focado e intensivo para alunos que se aproximam de avaliações importantes e querem chegar bem preparados.',
      'Com um plano de revisão estruturado, simulacros e estratégias adaptadas a cada tipo de prova, ajudamos o aluno a chegar ao dia da avaliação com confiança e tranquilidade.',
    ],
    includes: [
      'Levantamento das matérias prioritárias',
      'Plano de revisão estruturado por semana',
      'Resolução de provas e fichas de anos anteriores',
      'Simulacros com correção e análise de erros',
      'Estratégias de gestão do stress e da ansiedade face às avaliações',
    ],
    forWhom:
      'Todos os alunos, com especial atenção ao 9.º ano (provas finais) e ao ensino secundário (exames nacionais)',
    format: 'Individual ou pequeno grupo, plano de 2 a 8 semanas',
    image:
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1100&q=80',
    imageAlt: 'Aluna a rever apontamentos para um exame',
  },
]

export const getService = (id) => services.find((s) => s.id === id)
