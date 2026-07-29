import type { VercelRequest, VercelResponse } from '@vercel/node';

type ContactPayload = Record<string, unknown> & {
  formType?: unknown;
  name?: unknown;
  email?: unknown;
  company?: unknown;
  message?: unknown;
  consent?: unknown;
  startedAt?: unknown;
  websiteCompany?: unknown;
};

const MAX_BODY_BYTES = 20_000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const asText = (value: unknown, max = 500) =>
  typeof value === 'string' ? value.trim().slice(0, max) : '';

const escapeHtml = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

const parseBody = (req: VercelRequest): ContactPayload | null => {
  if (typeof req.body === 'string') {
    if (Buffer.byteLength(req.body, 'utf8') > MAX_BODY_BYTES) return null;
    try {
      return JSON.parse(req.body) as ContactPayload;
    } catch {
      return null;
    }
  }
  if (req.body && typeof req.body === 'object') return req.body as ContactPayload;
  return null;
};

const allowedOrigin = (origin: string | undefined) => {
  if (!origin) return true;
  const allowed = [process.env.SITE_URL, process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : ''].filter(Boolean);
  return allowed.length === 0 || allowed.includes(origin);
};

const verifyTurnstile = async (token: string, ip?: string) => {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true;
  if (!token) return false;

  const body = new URLSearchParams({ secret, response: token });
  if (ip) body.set('remoteip', ip);
  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body,
  });
  if (!response.ok) return false;
  const result = (await response.json()) as { success?: boolean };
  return result.success === true;
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ message: 'Método não permitido.' });
  }

  if (!allowedOrigin(req.headers.origin)) {
    return res.status(403).json({ message: 'Origem não autorizada.' });
  }

  const payload = parseBody(req);
  if (!payload) return res.status(400).json({ message: 'Pedido inválido.' });

  if (asText(payload.websiteCompany)) {
    return res.status(400).json({ message: 'Não foi possível validar o pedido.' });
  }

  const startedAt = Number(payload.startedAt);
  const elapsed = Date.now() - startedAt;
  if (!Number.isFinite(startedAt) || elapsed < 3_000 || elapsed > 86_400_000) {
    return res.status(400).json({ message: 'O formulário expirou ou foi enviado demasiado depressa. Atualize a página e tente novamente.' });
  }

  const formType = asText(payload.formType, 20);
  const name = asText(payload.name, 120);
  const email = asText(payload.email, 200).toLowerCase();
  const company = asText(payload.company, 160);
  const message = asText(payload.message, 3_000);
  const consent = asText(payload.consent, 10);

  if (!['contact', 'diagnostic'].includes(formType) || name.length < 2 || company.length < 2 || message.length < 20 || !EMAIL_PATTERN.test(email) || consent !== 'yes') {
    return res.status(422).json({ message: 'Reveja os campos obrigatórios e tente novamente.' });
  }

  const turnstileToken = asText(payload['cf-turnstile-response'], 2_500);
  const clientIp = asText(req.headers['x-forwarded-for'], 100).split(',')[0]?.trim();
  if (!(await verifyTurnstile(turnstileToken, clientIp))) {
    return res.status(422).json({ message: 'Não foi possível concluir a verificação anti-spam. Tente novamente.' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.FORM_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !from || !to) {
    console.error('Contact form email environment variables are not configured.');
    return res.status(503).json({ message: 'O envio por email ainda não está configurado. Contacte-nos diretamente através do endereço apresentado no website.' });
  }

  const ignoredFields = new Set(['websiteCompany', 'startedAt', 'consent', 'cf-turnstile-response']);
  const rows = Object.entries(payload)
    .filter(([key, value]) => !ignoredFields.has(key) && typeof value === 'string' && value.trim())
    .map(([key, value]) => `<tr><th style="text-align:left;padding:8px 12px;border-bottom:1px solid #ddd">${escapeHtml(key)}</th><td style="padding:8px 12px;border-bottom:1px solid #ddd">${escapeHtml(String(value)).replaceAll('\n', '<br>')}</td></tr>`)
    .join('');

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `${formType === 'diagnostic' ? 'Diagnóstico' : 'Contacto'} — ${company}`,
      html: `<div style="font-family:Arial,sans-serif;color:#111318"><h1>Novo pedido Sinal Studio</h1><table style="border-collapse:collapse;width:100%;max-width:720px">${rows}</table><p style="color:#666">Enviado através do formulário do website.</p></div>`,
    }),
  });

  if (!response.ok) {
    const detail = await response.text();
    console.error('Resend error', response.status, detail.slice(0, 500));
    return res.status(502).json({ message: 'O serviço de email não respondeu. Tente novamente dentro de alguns minutos.' });
  }

  return res.status(200).json({ ok: true });
}
