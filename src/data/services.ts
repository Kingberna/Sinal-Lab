export type FaqItem = {
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  summary: string;
  forWhom: string;
  problem: string;
  includes: string[];
  process: Array<{ title: string; text: string }>;
  outcomes: string[];
  timeframe: string;
  faq: FaqItem[];
};

export const services: Service[] = [
  {
    slug: 'websites-empresariais',
    number: '01',
    title: 'Criação de websites empresariais',
    shortTitle: 'Websites empresariais',
    summary:
      'Uma presença digital clara, credível e preparada para transformar interesse em contactos comerciais.',
    forWhom:
      'PME, profissionais liberais e empresas de serviços que precisam de apresentar melhor o negócio e gerar oportunidades sem depender apenas de recomendações.',
    problem:
      'Quando o website não explica rapidamente o valor da empresa, transmite pouca confiança ou dificulta o contacto, potenciais clientes avançam para outra opção.',
    includes: [
      'Diagnóstico, objetivos e estratégia digital',
      'Arquitetura de informação e apoio aos conteúdos',
      'UX, direção visual e protótipo responsivo',
      'Desenvolvimento otimizado e acessível',
      'SEO técnico, analytics e formulários',
      'Testes, formação e apoio ao lançamento',
    ],
    process: [
      { title: 'Alinhar', text: 'Percebemos o negócio, os públicos e a decisão que o site precisa de facilitar.' },
      { title: 'Estruturar', text: 'Organizamos páginas e mensagens antes de desenhar a interface.' },
      { title: 'Dar forma', text: 'Criamos um sistema visual próprio e protótipos para desktop e mobile.' },
      { title: 'Construir', text: 'Desenvolvemos, testamos e preparamos o lançamento com uma base sustentável.' },
    ],
    outcomes: [
      'Uma apresentação mais credível da empresa',
      'Mensagens comerciais mais fáceis de compreender',
      'Percursos de contacto claros em qualquer dispositivo',
      'Uma base técnica preparada para crescer',
    ],
    timeframe: 'Tipicamente, 6 a 10 semanas, conforme a dimensão e disponibilidade de conteúdos.',
    faq: [
      {
        question: 'O conteúdo está incluído?',
        answer:
          'Incluímos orientação, estrutura e edição dos conteúdos essenciais. A redação integral pode ser acrescentada ao projeto quando necessário.',
      },
      {
        question: 'Vou conseguir atualizar o website?',
        answer:
          'Sim. Definimos consigo o que precisa de autonomia e configuramos uma gestão de conteúdos adequada, sem acrescentar complexidade desnecessária.',
      },
      {
        question: 'O website fica preparado para SEO?',
        answer:
          'Fica com uma fundação técnica sólida: estrutura semântica, metadados, performance, indexação e dados estruturados. O crescimento orgânico contínuo exige também conteúdo e acompanhamento.',
      },
    ],
  },
  {
    slug: 'redesign-websites',
    number: '02',
    title: 'Redesign de websites',
    shortTitle: 'Redesign',
    summary:
      'Repensamos estrutura, mensagem e experiência para que um site antigo volte a representar o valor atual do negócio.',
    forWhom:
      'Empresas com websites desatualizados, lentos, difíceis de gerir ou desalinhados com o posicionamento atual.',
    problem:
      'Um redesign apenas cosmético mantém os mesmos bloqueios. Começamos por perceber onde se perdem confiança, clareza e oportunidades.',
    includes: [
      'Auditoria de conteúdos, UX, SEO e performance',
      'Mapeamento de páginas e redirecionamentos',
      'Nova proposta de estrutura e conversão',
      'Direção visual e sistema de componentes',
      'Migração de conteúdos prioritários',
      'Testes, lançamento e monitorização inicial',
    ],
    process: [
      { title: 'Auditar', text: 'Identificamos o que deve ser preservado, melhorado ou removido.' },
      { title: 'Priorizar', text: 'Ligamos problemas reais a objetivos de negócio e definimos o âmbito.' },
      { title: 'Redesenhar', text: 'Reescrevemos percursos e criamos uma presença visual atual e coerente.' },
      { title: 'Migrar', text: 'Lançamos com cuidado para proteger URLs, conteúdos e indexação existente.' },
    ],
    outcomes: [
      'Perceção de marca mais atual e profissional',
      'Menos fricção nos percursos de contacto',
      'Melhoria da velocidade e experiência mobile',
      'Conteúdo mais fácil de encontrar e manter',
    ],
    timeframe: 'Tipicamente, 7 a 12 semanas, dependendo da migração e integrações.',
    faq: [
      {
        question: 'O website atual fica indisponível durante o redesign?',
        answer:
          'Não. Trabalhamos num ambiente separado e o site atual mantém-se online até ao momento de lançamento.',
      },
      {
        question: 'Podemos aproveitar conteúdos e posicionamento existentes?',
        answer:
          'Sim. A auditoria distingue os ativos que continuam úteis do que está a limitar o desempenho. Não mudamos por mudar.',
      },
      {
        question: 'Como evitam perder posições no Google?',
        answer:
          'Mapeamos URLs, metadados e conteúdos prioritários, criamos redirecionamentos e validamos a indexação. Uma migração não elimina toda a volatilidade, mas reduz riscos evitáveis.',
      },
    ],
  },
  {
    slug: 'lojas-online',
    number: '03',
    title: 'Lojas online',
    shortTitle: 'E-commerce',
    summary:
      'Experiências de compra rápidas e confiáveis, desenhadas em torno do produto, da operação e das dúvidas reais do cliente.',
    forWhom:
      'Marcas que querem iniciar ou profissionalizar a venda online, com uma operação sustentável e margem para evoluir.',
    problem:
      'Uma loja visualmente apelativa não chega se navegação, confiança, pagamentos ou gestão diária forem complicados.',
    includes: [
      'Estratégia de catálogo e arquitetura',
      'UX de pesquisa, produto, carrinho e checkout',
      'Direção visual orientada à marca',
      'Configuração de plataforma e pagamentos',
      'SEO técnico e dados estruturados de produto',
      'Formação e apoio ao lançamento',
    ],
    process: [
      { title: 'Mapear', text: 'Percebemos catálogo, logística, pagamentos, impostos e rotinas internas.' },
      { title: 'Simplificar', text: 'Desenhamos a descoberta e compra em torno das perguntas do cliente.' },
      { title: 'Integrar', text: 'Configuramos a plataforma e as ligações essenciais à operação.' },
      { title: 'Preparar', text: 'Testamos cenários reais antes de abrir a loja ao público.' },
    ],
    outcomes: [
      'Compra mais simples em mobile e desktop',
      'Informação de produto clara e consistente',
      'Operação diária mais previsível',
      'Fundação preparada para medir e otimizar',
    ],
    timeframe: 'Tipicamente, 8 a 14 semanas. Catálogos e integrações complexas podem exigir mais tempo.',
    faq: [
      {
        question: 'Trabalham com Shopify ou WooCommerce?',
        answer:
          'Escolhemos a plataforma em função do catálogo, equipa, integrações e orçamento. Não forçamos a operação a adaptar-se à nossa ferramenta favorita.',
      },
      {
        question: 'Inclui carregamento de produtos?',
        answer:
          'Definimos modelos, importação e uma amostra representativa. O carregamento integral pode ser incluído depois de avaliarmos volume e qualidade dos dados.',
      },
      {
        question: 'Conseguem integrar faturação e transportadoras?',
        answer:
          'Avaliamos cada integração antes da proposta. Sempre que exista uma API estável ou conector compatível, planeamos a ligação e respetivos testes.',
      },
    ],
  },
  {
    slug: 'landing-pages',
    number: '04',
    title: 'Landing pages e campanhas',
    shortTitle: 'Landing pages',
    summary:
      'Páginas focadas numa oferta e numa ação, com mensagem clara, carregamento rápido e medição desde o primeiro dia.',
    forWhom:
      'Equipas comerciais e de marketing que precisam de lançar uma campanha, validar uma oferta ou apoiar captação de leads.',
    problem:
      'Enviar tráfego pago para uma página genérica dispersa a atenção e torna difícil perceber o que está ou não a funcionar.',
    includes: [
      'Clarificação da oferta e público',
      'Wireframe e hierarquia da mensagem',
      'Design responsivo de alta conversão',
      'Desenvolvimento e formulários',
      'Eventos de analytics e integrações essenciais',
      'Variantes ou plano de otimização opcional',
    ],
    process: [
      { title: 'Focar', text: 'Definimos uma audiência, uma proposta e uma ação principal.' },
      { title: 'Escrever', text: 'Organizamos argumentos, objeções e provas disponíveis sem exageros.' },
      { title: 'Lançar', text: 'Construímos uma página rápida e pronta a medir.' },
      { title: 'Aprender', text: 'Usamos dados reais para priorizar melhorias futuras.' },
    ],
    outcomes: [
      'Campanha com mensagem e destino coerentes',
      'Medição mais clara do interesse gerado',
      'Menos distrações no percurso de conversão',
      'Base rápida para aprender e iterar',
    ],
    timeframe: 'Tipicamente, 2 a 4 semanas, com oferta e conteúdos disponíveis.',
    faq: [
      {
        question: 'Podem garantir uma taxa de conversão?',
        answer:
          'Não. A conversão depende também da oferta, tráfego, preço e contexto. Garantimos um processo rigoroso e uma página preparada para medir e melhorar.',
      },
      {
        question: 'A landing page pode ficar no meu domínio?',
        answer:
          'Sim. Planeamos a publicação no domínio ou subdomínio adequado, respeitando a infraestrutura existente.',
      },
      {
        question: 'Fazem também a gestão dos anúncios?',
        answer:
          'O foco do estúdio é a experiência e tecnologia da página. Podemos articular com a sua equipa ou parceiro de media e preparar toda a medição necessária.',
      },
    ],
  },
  {
    slug: 'seo-performance',
    number: '05',
    title: 'SEO técnico e performance',
    shortTitle: 'SEO & performance',
    summary:
      'Removemos bloqueios técnicos que dificultam a descoberta, a navegação e a experiência de quem chega ao website.',
    forWhom:
      'Empresas com sites lentos, problemas de indexação, quebras técnicas ou uma base pouco preparada para crescer organicamente.',
    problem:
      'Conteúdo útil perde impacto quando os motores de pesquisa não o interpretam bem ou quando os visitantes desistem antes da página carregar.',
    includes: [
      'Auditoria técnica e de indexação',
      'Core Web Vitals e análise de front-end',
      'Metadados, canonicals e dados estruturados',
      'Arquitetura, links internos e sitemaps',
      'Correções prioritárias acordadas',
      'Relatório claro e plano de continuidade',
    ],
    process: [
      { title: 'Medir', text: 'Recolhemos evidência técnica e distinguimos sintomas de causas.' },
      { title: 'Ordenar', text: 'Priorizamos impacto, esforço e dependências.' },
      { title: 'Corrigir', text: 'Implementamos o âmbito acordado sem comprometer a experiência.' },
      { title: 'Acompanhar', text: 'Validamos alterações e deixamos indicadores para continuidade.' },
    ],
    outcomes: [
      'Carregamento e interação mais consistentes',
      'Menos obstáculos à indexação',
      'Fundação técnica mais clara para conteúdo',
      'Plano de melhoria baseado em prioridades',
    ],
    timeframe: 'Auditoria em 1 a 2 semanas; implementação definida depois de conhecer a plataforma.',
    faq: [
      {
        question: 'SEO técnico é suficiente para aparecer em primeiro?',
        answer:
          'Não. Remove barreiras, mas relevância, concorrência, autoridade e conteúdo também contam. Não prometemos posições específicas.',
      },
      {
        question: 'Trabalham em websites que não foram desenvolvidos por vocês?',
        answer:
          'Sim, depois de avaliarmos a tecnologia, acessos e riscos. A auditoria pode ser feita sem compromisso de implementação.',
      },
      {
        question: 'Vão instalar muitos plugins de otimização?',
        answer:
          'Não por defeito. Preferimos corrigir a causa e reduzir dependências. Quando uma ferramenta é adequada, explicamos o custo e a manutenção envolvidos.',
      },
    ],
  },
  {
    slug: 'manutencao-evolucao',
    number: '06',
    title: 'Manutenção e evolução contínua',
    shortTitle: 'Evolução contínua',
    summary:
      'Acompanhamento para manter o website seguro, atual e alinhado com o que o negócio aprende depois do lançamento.',
    forWhom:
      'Empresas que precisam de uma equipa digital disponível, sem manter todas as competências internamente.',
    problem:
      'Sem responsáveis, pequenas correções acumulam-se, conteúdos envelhecem e oportunidades de melhoria ficam por testar.',
    includes: [
      'Manutenção técnica e atualizações',
      'Apoio a conteúdos e novas páginas',
      'Monitorização de disponibilidade e erros',
      'Revisões de performance e SEO técnico',
      'Pequenas evoluções mensais priorizadas',
      'Planeamento trimestral opcional',
    ],
    process: [
      { title: 'Integrar', text: 'Conhecemos a plataforma, histórico e responsabilidades atuais.' },
      { title: 'Estabilizar', text: 'Resolvemos riscos e criamos uma rotina de manutenção.' },
      { title: 'Priorizar', text: 'Organizamos pedidos por impacto e urgência.' },
      { title: 'Evoluir', text: 'Entregamos melhorias em ciclos curtos e transparentes.' },
    ],
    outcomes: [
      'Menos surpresas técnicas',
      'Conteúdos e campanhas publicados com mais agilidade',
      'Melhorias contínuas em vez de grandes ruturas',
      'Um interlocutor claro para o website',
    ],
    timeframe: 'Avença mensal com âmbito e capacidade definidos em conjunto.',
    faq: [
      {
        question: 'Existe fidelização?',
        answer:
          'As condições dependem do plano, mas são sempre claras na proposta. Preferimos relações que continuam pelo valor criado, não por cláusulas pouco transparentes.',
      },
      {
        question: 'Inclui pedidos ilimitados?',
        answer:
          'Os pedidos podem ser organizados numa fila, mas a capacidade mensal é definida. Assim conseguimos assumir prazos realistas e manter qualidade.',
      },
      {
        question: 'Podem assumir um site de outro fornecedor?',
        answer:
          'Sim, após uma análise técnica inicial. Se a base tiver riscos importantes, apresentamos primeiro um plano de estabilização.',
      },
    ],
  },
];

export const getService = (slug: string) => services.find((service) => service.slug === slug);
