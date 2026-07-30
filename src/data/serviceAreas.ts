export type ServiceArea = {
  number: string;
  title: string;
  description: string;
  href: string;
};

export const serviceAreas: ServiceArea[] = [
  {
    number: '01',
    title: 'Criar um website',
    description: 'Criamos de raiz um website profissional, claro e adaptado ao seu negócio.',
    href: '/servicos/websites-empresariais',
  },
  {
    number: '02',
    title: 'Renovar o meu website',
    description: 'Modernizamos o seu website para que seja mais atual, rápido e fácil de utilizar.',
    href: '/servicos/redesign-websites',
  },
  {
    number: '03',
    title: 'Atrair mais clientes',
    description:
      'Melhoramos a presença do seu negócio na internet para gerar mais visitas, contactos e oportunidades.',
    href: '/servicos/seo-performance',
  },
];
