export type Project = {
  slug: string;
  number: string;
  title: string;
  sector: string;
  type: 'Website' | 'E-commerce' | 'Redesign' | 'Landing Page';
  tag: 'Projeto conceito';
  summary: string;
  palette: 'mint' | 'cobalt' | 'sand' | 'coral' | 'lilac';
  hasCaseStudy: boolean;
  context?: string;
  problem?: string;
  objectives?: string[];
  strategy?: string;
  architecture?: string[];
  visualDirection?: string;
  solution?: string[];
  projections?: string[];
  services?: string[];
};

export const projects: Project[] = [
  {
    slug: 'lumen-clinica',
    number: '01',
    title: 'Lúmen Clínica',
    sector: 'Saúde',
    type: 'Website',
    tag: 'Projeto conceito',
    summary: 'Uma experiência serena e clara para aproximar especialidades, equipa clínica e marcações.',
    palette: 'mint',
    hasCaseStudy: true,
    context:
      'A Lúmen representa uma clínica privada multidisciplinar em crescimento, com várias especialidades e uma relação próxima com famílias.',
    problem:
      'O cenário conceptual parte de uma presença digital fragmentada: informação clínica difícil de percorrer, pouca diferenciação e marcações dependentes de contacto telefónico.',
    objectives: [
      'Tornar especialidades e profissionais fáceis de encontrar',
      'Transmitir rigor sem criar uma experiência fria',
      'Reduzir dúvidas antes do pedido de marcação',
      'Criar uma base preparada para SEO local',
    ],
    strategy:
      'Organizámos a experiência pelas necessidades de quem procura ajuda — sintomas, especialidades e profissionais — e não pela estrutura interna da clínica.',
    architecture: ['Início', 'Especialidades', 'Equipa clínica', 'Preparar a consulta', 'Clínica', 'Marcação'],
    visualDirection:
      'Uma paleta calma, tipografia editorial e composições luminosas equilibram proximidade e precisão clínica.',
    solution: [
      'Pesquisa cruzada entre especialidades e profissionais',
      'Páginas clínicas com respostas práticas antes da marcação',
      'Percurso de contacto curto e acessível',
      'Sistema editorial para conteúdos de saúde',
    ],
    projections: [
      'Objetivo: aumentar a proporção de visitantes que iniciam uma marcação',
      'Objetivo: reduzir contactos motivados apenas por dúvidas básicas',
      'Objetivo: melhorar a descoberta orgânica por especialidade e localização',
    ],
    services: ['Estratégia digital', 'UX/UI', 'Website', 'SEO técnico'],
  },
  {
    slug: 'norte-base',
    number: '02',
    title: 'Norte Base',
    sector: 'Construção',
    type: 'Redesign',
    tag: 'Projeto conceito',
    summary: 'Uma montra digital sólida para uma construtora que quer ser escolhida pela qualidade, não pelo preço mais baixo.',
    palette: 'sand',
    hasCaseStudy: true,
    context:
      'A Norte Base representa uma empresa familiar de construção e reabilitação que pretende subir de segmento e apresentar melhor a qualidade do seu trabalho.',
    problem:
      'O website conceptual existente limita-se a uma galeria desorganizada. Não explica processo, capacidade, áreas de intervenção ou critérios de qualidade.',
    objectives: [
      'Reposicionar a empresa para projetos de maior valor',
      'Transformar obras realizadas em casos de projeto legíveis',
      'Qualificar pedidos antes do orçamento',
      'Facilitar a atualização do portefólio',
    ],
    strategy:
      'Trocámos a lógica de galeria por narrativas de obra: contexto, desafio, solução, materiais e âmbito. O processo torna-se uma prova de confiança.',
    architecture: ['Início', 'Obras', 'Serviços', 'Método', 'Empresa', 'Pedir orçamento'],
    visualDirection:
      'Grelha estrutural, contraste mineral e tipografia de grande escala traduzem rigor sem recorrer aos códigos visuais previsíveis do setor.',
    solution: [
      'Casos de projeto com filtros por tipologia',
      'Explicação simples das fases de uma obra',
      'Formulário de orçamento com contexto útil',
      'Migração preparada com mapa de redirecionamentos',
    ],
    projections: [
      'Objetivo: receber pedidos com informação inicial mais completa',
      'Objetivo: reforçar a perceção de rigor e especialização',
      'Objetivo: aumentar o tempo de exploração das obras relevantes',
    ],
    services: ['Redesign', 'Estratégia de conteúdo', 'Desenvolvimento', 'SEO'],
  },
  {
    slug: 'casa-atlantica',
    number: '03',
    title: 'Casa Atlântica',
    sector: 'Turismo',
    type: 'Website',
    tag: 'Projeto conceito',
    summary: 'Uma casa no litoral contada pelo ritmo do lugar, com um percurso de reserva simples e direto.',
    palette: 'cobalt',
    hasCaseStudy: true,
    context:
      'A Casa Atlântica representa um pequeno hotel independente na costa portuguesa, orientado para estadias tranquilas e experiências locais.',
    problem:
      'O conceito parte de uma dependência excessiva de plataformas de reserva. O website não comunica a experiência nem dá razões para reservar diretamente.',
    objectives: [
      'Diferenciar a experiência para além do quarto',
      'Aumentar a confiança na reserva direta',
      'Apresentar informação prática sem quebrar a atmosfera',
      'Adaptar conteúdos a visitantes internacionais',
    ],
    strategy:
      'Construímos a narrativa em torno de ritmos de estadia — acordar, explorar, regressar — integrando disponibilidade e informação prática nos momentos certos.',
    architecture: ['Casa', 'Quartos', 'Experiências', 'Guia local', 'Informação', 'Reservar'],
    visualDirection:
      'Azul profundo, areia quente e uma tipografia com cadência editorial criam uma identidade contemporânea, sem folclore visual.',
    solution: [
      'Páginas de quarto comparáveis e transparentes',
      'Integração prevista com motor de reservas',
      'Guia local editorial para pesquisa orgânica',
      'Conteúdo bilingue e navegação mobile cuidada',
    ],
    projections: [
      'Objetivo: aumentar a intenção de reserva direta',
      'Objetivo: diminuir dúvidas sobre quartos e condições',
      'Objetivo: criar procura orgânica ligada ao destino',
    ],
    services: ['Estratégia', 'UX/UI', 'Website multilingue', 'Integração de reservas'],
  },
  {
    slug: 'criterio-consultores',
    number: '04',
    title: 'Critério Consultores',
    sector: 'B2B',
    type: 'Landing Page',
    tag: 'Projeto conceito',
    summary: 'Uma campanha B2B que transforma um serviço abstrato numa decisão concreta e fácil de avaliar.',
    palette: 'lilac',
    hasCaseStudy: false,
  },
  {
    slug: 'forma-objetos',
    number: '05',
    title: 'Forma Objetos',
    sector: 'Comércio',
    type: 'E-commerce',
    tag: 'Projeto conceito',
    summary: 'Uma loja de objetos portugueses onde produto, matéria e autoria têm o mesmo espaço.',
    palette: 'coral',
    hasCaseStudy: false,
  },
];

export const caseStudies = projects.filter((project) => project.hasCaseStudy);
export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
