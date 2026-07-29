# Sinal Studio

Website editorial, multipágina e estático para a Sinal Studio — uma empresa portuguesa de estratégia, design e desenvolvimento de websites orientados a credibilidade e conversão.

## Stack

- Astro com TypeScript estrito
- CSS próprio, sem framework visual
- Conteúdos estruturados em `src/data`
- Configuração institucional centralizada em `src/config/site.ts`
- Função serverless Vercel em `api/contact.ts`
- Sitemap, robots.txt, dados estruturados e metadados sociais

## Desenvolvimento local

Requer Node.js 22.12 ou superior e pnpm 11.

```bash
pnpm install
cp .env.example .env
pnpm dev
```

O website fica disponível, por defeito, em `http://localhost:4321`.

Em desenvolvimento local, os formulários validam todos os campos mas terminam num estado de demonstração explícito: nenhum dado é enviado. O envio real só acontece numa função serverless publicada e devidamente configurada.

## Validação

```bash
pnpm validate
```

O comando executa lint, verificação de tipos, testes, build de produção e validação das ligações internas geradas. O resultado estático é criado em `dist`, em correspondência com `vercel.json`.

## Configuração

Copiar `.env.example` para `.env` e preencher apenas os serviços utilizados:

- `PUBLIC_SITE_URL`: domínio público e canónicos.
- `PUBLIC_CONTACT_EMAIL`, `PUBLIC_PHONE_*`, `PUBLIC_BOOKING_URL`: contactos e marcação.
- `PUBLIC_LEGAL_*`: entidade, NIF e morada a publicar nas páginas legais.
- `RESEND_API_KEY`, `FORM_FROM_EMAIL`, `CONTACT_TO_EMAIL`: envio real dos formulários.
- `PUBLIC_TURNSTILE_SITE_KEY`, `TURNSTILE_SECRET_KEY`: proteção anti-spam opcional.
- `PUBLIC_PLAUSIBLE_DOMAIN`: analytics opcional, sujeito à escolha do visitante.

Sem `PUBLIC_PLAUSIBLE_DOMAIN`, o website não carrega analytics e não mostra um banner de cookies desnecessário.

## Conteúdo e manutenção

- `src/config/site.ts`: marca, contactos, navegação e integrações.
- `src/data/services.ts`: serviços e perguntas frequentes.
- `src/data/projects.ts`: portefólio e casos de estudo conceptuais.
- `src/data/articles.ts`: artigos e metadados editoriais.
- `src/styles/global.css`: tokens e sistema visual.
- `public/`: favicon e imagem de partilha.

Todos os projetos publicados nesta versão são identificados como “Projeto conceito”. Não existem clientes, métricas, prémios ou testemunhos inventados.

## Formulários

O endpoint `api/contact.ts` inclui:

- validação do corpo do pedido;
- campo honeypot;
- tempo mínimo de preenchimento;
- validação de origem;
- verificação Turnstile opcional;
- envio por Resend;
- respostas de erro explícitas, sem simular sucesso.

Na Vercel, adicionar as variáveis secretas no projeto e manter `SITE_URL` alinhado com o domínio de produção.

## Publicação na Vercel

1. Importar o repositório.
2. Usar `pnpm install` e `pnpm build`.
3. Confirmar que o diretório de saída é `dist` — já definido em `vercel.json`.
4. Adicionar as variáveis de ambiente necessárias.
5. Fazer um deployment de pré-visualização e testar os formulários antes de promover para produção.

O projeto não deve ser publicado comercialmente antes de preencher a identificação legal e confirmar as políticas de privacidade e cookies de acordo com os fornecedores efetivamente ativados.
