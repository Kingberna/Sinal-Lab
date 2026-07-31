const env = import.meta.env;

export const siteConfig = {
  name: 'Sinal Studio',
  legalName: env.PUBLIC_LEGAL_NAME || 'Sinal Studio',
  legalTaxId: env.PUBLIC_LEGAL_NIF || '',
  legalAddress: env.PUBLIC_LEGAL_ADDRESS || '',
  tagline: 'Websites com sinal para crescer.',
  valueProposition: 'Criamos websites rápidos, claros e feitos para transformar visitas em oportunidades.',
  description:
    'Estúdio português de estratégia, design e desenvolvimento de websites para PME e empresas de serviços.',
  url: env.PUBLIC_SITE_URL || 'https://sinal.studio',
  locale: 'pt_PT',
  language: 'pt-PT',
  country: 'Portugal',
  email: env.PUBLIC_CONTACT_EMAIL || 'hello@sinal.studio',
  phone: {
    display: env.PUBLIC_PHONE_DISPLAY || '',
    href: env.PUBLIC_PHONE_HREF || '',
  },
  bookingUrl: env.PUBLIC_BOOKING_URL || '',
  responseTime: 'Normalmente, respondemos no prazo de 2 dias úteis.',
  navigation: [
    { label: 'Serviços', href: '/servicos' },
    { label: 'Projetos', href: '/projetos' },
    { label: 'Processo', href: '/processo' },
    { label: 'Sobre', href: '/sobre' },
  ],
  social: [] as Array<{ label: string; href: string }>,
  analytics: {
    plausibleDomain: env.PUBLIC_PLAUSIBLE_DOMAIN || '',
  },
} as const;

export const absoluteUrl = (path = '/') => new URL(path, siteConfig.url).toString();
