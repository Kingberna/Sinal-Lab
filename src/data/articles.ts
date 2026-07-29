export type ArticleSection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type Article = {
  slug: string;
  title: string;
  description: string;
  category: 'Estratégia' | 'Redesign' | 'Conversão' | 'SEO';
  cover?: {
    src: string;
    alt: string;
  };
  publishedAt: string;
  updatedAt?: string;
  readingTime: string;
  intro: string;
  sections: ArticleSection[];
};

export const articles: Article[] = [
  {
    slug: 'quanto-custa-website-profissional',
    title: 'Quanto custa criar um website profissional?',
    description:
      'O que influencia o investimento num website para uma PME e como comparar propostas sem olhar apenas para o número final.',
    category: 'Estratégia',
    cover: {
      src: '/images/insights/investimento-website.webp',
      alt: 'Composição editorial com um website modular, telemóvel e uma balança que representa o investimento digital.',
    },
    publishedAt: '2026-07-18',
    readingTime: '7 min',
    intro:
      'A resposta curta é: depende do problema que o website precisa de resolver. Um site institucional simples, uma plataforma multilingue e uma loja online exigem decisões muito diferentes.',
    sections: [
      {
        id: 'o-que-influencia',
        title: 'O que influencia o preço',
        paragraphs: [
          'O número de páginas é apenas uma parte. Estratégia, conteúdos, design, integrações, migração, idiomas e autonomia da equipa têm frequentemente mais impacto.',
          'Uma proposta séria deve explicar o âmbito, o processo e o que fica fora. Sem esse contexto, dois preços aparentemente comparáveis podem representar trabalhos muito diferentes.',
        ],
        bullets: ['Complexidade da informação', 'Qualidade e estado dos conteúdos', 'Integrações necessárias', 'Nível de personalização', 'Acompanhamento depois do lançamento'],
      },
      {
        id: 'custo-ou-investimento',
        title: 'Separar custo de investimento',
        paragraphs: [
          'Um website não deve ser avaliado apenas pelo que custa construir. Considere o tempo que poupa à equipa, a confiança que cria e as oportunidades que ajuda a gerar.',
          'Isto não significa aceitar promessas vagas de retorno. Significa definir objetivos observáveis antes de começar.',
        ],
      },
      {
        id: 'comparar-propostas',
        title: 'Como comparar propostas',
        paragraphs: [
          'Peça clareza sobre entregáveis, número de rondas, responsabilidades, tecnologia, propriedade dos ficheiros e suporte. Confirme também se conteúdos, SEO técnico e testes estão incluídos.',
        ],
        bullets: ['O processo começa por objetivos ou por preferências visuais?', 'Quem escreve e valida os conteúdos?', 'Como são testados mobile e acessibilidade?', 'O que acontece depois do lançamento?'],
      },
      {
        id: 'preparar-orcamento',
        title: 'Preparar um pedido de orçamento útil',
        paragraphs: [
          'Partilhe o contexto do negócio, o que não funciona hoje, os públicos prioritários, a data importante e um intervalo de investimento. Um bom briefing não precisa de especificar tecnologia.',
        ],
      },
    ],
  },
  {
    slug: 'altura-redesenhar-website',
    title: 'Como saber se está na altura de redesenhar o website?',
    description:
      'Sinais práticos de que o website deixou de acompanhar o negócio — e quando uma melhoria pontual ainda é suficiente.',
    category: 'Redesign',
    cover: {
      src: '/images/insights/redesign-website.webp',
      alt: 'Interface antiga e fragmentada a transformar-se num website moderno e organizado.',
    },
    publishedAt: '2026-07-09',
    readingTime: '6 min',
    intro:
      'A idade do website, por si só, não decide um redesign. A pergunta útil é outra: o site ainda ajuda as pessoas a compreender e escolher a empresa?',
    sections: [
      {
        id: 'sinais',
        title: 'Os sinais mais frequentes',
        paragraphs: [
          'Mensagens desatualizadas, navegação confusa, má experiência mobile e dificuldade em editar conteúdos são sinais visíveis. Há outros menos óbvios: contactos pouco qualificados ou dependência total da equipa comercial para explicar o básico.',
        ],
        bullets: ['O negócio mudou, mas o site não', 'As páginas demoram a carregar', 'Os contactos chegam sem contexto', 'A equipa evita atualizar conteúdos', 'A concorrência transmite mais confiança'],
      },
      {
        id: 'nao-redesenhar',
        title: 'Quando não precisa de redesenhar tudo',
        paragraphs: [
          'Se a estrutura continua adequada e o problema está concentrado numa página, formulário ou conteúdo, uma intervenção focada pode ter mais sentido.',
          'Uma auditoria curta ajuda a evitar uma reconstrução desnecessária.',
        ],
      },
      {
        id: 'antes-de-comecar',
        title: 'O que definir antes de começar',
        paragraphs: [
          'Registe problemas concretos, páginas com valor orgânico, tarefas frequentes e dúvidas dos clientes. Isso cria critérios para decidir o que preservar.',
        ],
      },
      {
        id: 'migracao',
        title: 'O redesign também é uma migração',
        paragraphs: [
          'URLs, conteúdos, dados e integrações precisam de um plano. A qualidade do lançamento depende tanto desta preparação como do novo design.',
        ],
      },
    ],
  },
  {
    slug: 'website-ou-redes-sociais',
    title: 'Website ou redes sociais: onde deve investir primeiro?',
    description:
      'Como escolher a prioridade certa e construir uma presença digital que não dependa de um único canal.',
    category: 'Estratégia',
    cover: {
      src: '/images/insights/website-redes-sociais.webp',
      alt: 'Website central ligado a vários canais de conteúdo digital independentes.',
    },
    publishedAt: '2026-06-27',
    readingTime: '5 min',
    intro:
      'Redes sociais e website cumprem papéis diferentes. A melhor escolha depende de onde acontece a descoberta, de quanto precisa de explicar e de quem controla o canal.',
    sections: [
      {
        id: 'papel',
        title: 'Descoberta e decisão não são a mesma coisa',
        paragraphs: [
          'As redes são fortes para alcance e relação frequente. O website é o espaço onde controla a estrutura, apresenta informação duradoura e facilita uma ação comercial.',
        ],
      },
      {
        id: 'dependencia',
        title: 'O risco de depender de uma plataforma',
        paragraphs: [
          'Algoritmos, formatos e regras mudam. Uma audiência social continua valiosa, mas não substitui uma base digital própria e pesquisável.',
        ],
      },
      {
        id: 'prioridade',
        title: 'Como escolher a primeira prioridade',
        paragraphs: ['Comece pelo ponto que mais bloqueia o percurso atual do cliente.'],
        bullets: ['Se ninguém conhece a marca, precisa de distribuição', 'Se há interesse mas falta confiança, precisa de uma boa base', 'Se o serviço exige explicação, o website ganha importância', 'Se a compra é simples e social, valide o canal antes de expandir'],
      },
      {
        id: 'sistema',
        title: 'Pensar num sistema, não numa competição',
        paragraphs: [
          'O cenário mais sólido usa conteúdos sociais para gerar descoberta e páginas próprias para aprofundar, captar procura e converter interesse.',
        ],
      },
    ],
  },
  {
    slug: 'website-pme',
    title: 'O que deve ter o website de uma PME?',
    description:
      'Os elementos essenciais para explicar a empresa, criar confiança e facilitar contactos sem encher o site de páginas.',
    category: 'Estratégia',
    publishedAt: '2026-06-14',
    readingTime: '6 min',
    intro:
      'Um bom website de PME não precisa de parecer grande. Precisa de tornar a empresa compreensível, credível e fácil de contactar.',
    sections: [
      {
        id: 'proposta',
        title: 'Uma proposta clara no primeiro ecrã',
        paragraphs: [
          'Diga o que faz, para quem e com que diferença relevante. Frases genéricas como “soluções de excelência” obrigam o visitante a fazer trabalho desnecessário.',
        ],
      },
      {
        id: 'conteudo',
        title: 'Conteúdo que responde a decisões reais',
        paragraphs: [
          'Serviços, processo, âmbito, localização, perguntas frequentes e próximos passos reduzem incerteza. A prova deve ser proporcional ao que existe de facto.',
        ],
        bullets: ['Serviços explicados por benefício', 'Projetos ou exemplos identificados', 'Informação sobre processo', 'Contactos consistentes', 'Políticas e informação legal'],
      },
      {
        id: 'mobile',
        title: 'Uma experiência mobile que não é uma versão apertada',
        paragraphs: [
          'Textos, menus, formulários e áreas clicáveis devem ser pensados para ecrãs pequenos. É frequentemente aí que acontece o primeiro contacto.',
        ],
      },
      {
        id: 'fundacao',
        title: 'Uma fundação técnica discreta',
        paragraphs: [
          'Velocidade, acessibilidade, segurança básica e SEO técnico não são extras visuais, mas influenciam confiança e descoberta.',
        ],
      },
    ],
  },
  {
    slug: 'transformar-visitantes-em-contactos',
    title: 'Como transformar mais visitantes em contactos?',
    description:
      'Cinco formas de reduzir fricção e tornar o próximo passo mais claro, sem recorrer a truques de conversão.',
    category: 'Conversão',
    publishedAt: '2026-05-30',
    readingTime: '7 min',
    intro:
      'Mais visitas não resolvem uma página que deixa dúvidas. Antes de procurar tráfego adicional, observe onde as pessoas perdem contexto ou confiança.',
    sections: [
      {
        id: 'intencao',
        title: 'Alinhar a página com a intenção',
        paragraphs: [
          'Quem pesquisa um serviço específico espera uma resposta específica. Uma homepage genérica pode ser um destino fraco para uma campanha ou pesquisa de fundo de funil.',
        ],
      },
      {
        id: 'proximo-passo',
        title: 'Tornar o próximo passo explícito',
        paragraphs: [
          'Use chamadas para ação descritivas e diga o que acontece depois. “Pedir diagnóstico” cria uma expectativa mais clara do que “Saber mais”.',
        ],
      },
      {
        id: 'friccao',
        title: 'Pedir apenas a informação necessária',
        paragraphs: [
          'Um formulário comercial pode recolher contexto sem parecer um interrogatório. Explique por que pede dados sensíveis, como orçamento ou prazo, e torne-os opcionais quando possível.',
        ],
      },
      {
        id: 'confianca',
        title: 'Construir confiança sem prova inventada',
        paragraphs: [
          'Processo, clareza de âmbito, exemplos honestamente identificados e informação legal consistente são sinais fortes. Testemunhos falsos fazem o oposto.',
        ],
      },
      {
        id: 'medir',
        title: 'Medir o percurso, não apenas o envio',
        paragraphs: [
          'Acompanhe cliques relevantes, erros no formulário e páginas que antecedem o contacto. Poucos eventos bem definidos são mais úteis do que um painel cheio.',
        ],
      },
    ],
  },
  {
    slug: 'seo-local-empresas-portuguesas',
    title: 'SEO local para empresas portuguesas',
    description:
      'Uma base prática para melhorar a presença local no Google sem repetir nomes de cidades em todas as frases.',
    category: 'SEO',
    publishedAt: '2026-05-16',
    readingTime: '8 min',
    intro:
      'SEO local começa por consistência e utilidade. O objetivo é ajudar motores de pesquisa e pessoas a perceber onde trabalha, o que faz e se é uma escolha relevante.',
    sections: [
      {
        id: 'informacao',
        title: 'Manter informação consistente',
        paragraphs: [
          'Nome, morada, telefone, horários e áreas de serviço devem coincidir entre website, perfil de empresa e diretórios importantes.',
        ],
      },
      {
        id: 'paginas',
        title: 'Criar páginas apenas quando há conteúdo real',
        paragraphs: [
          'Uma página por localização pode fazer sentido se explicar equipa, serviço, acesso ou contexto próprio. Trocar apenas o nome da cidade cria páginas fracas.',
        ],
      },
      {
        id: 'perfil',
        title: 'Cuidar do Perfil de Empresa',
        paragraphs: [
          'Categorias, serviços, fotografias, horários e respostas a avaliações ajudam a decisão. O perfil e o website devem reforçar-se mutuamente.',
        ],
      },
      {
        id: 'tecnico',
        title: 'Dar contexto técnico',
        paragraphs: [
          'Dados estruturados, páginas indexáveis, títulos claros e bom desempenho mobile facilitam interpretação, mas não substituem relevância local.',
        ],
      },
      {
        id: 'medir',
        title: 'Medir ações locais',
        paragraphs: [
          'Pedidos de direção, chamadas e formulários podem ser mais significativos do que tráfego bruto. Defina a medição respeitando privacidade e consentimento.',
        ],
      },
    ],
  },
];

export const getArticle = (slug: string) => articles.find((article) => article.slug === slug);
