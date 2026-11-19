// Demonstração sem servidor: toda chamada ao Supabase é respondida aqui (nada sai da máquina),
// e a sessão é de mentira (nenhuma conta criada, nenhum login).
const HOST = /dknrrvspimmldxmutzdt\.supabase\.co/;
const EU = '00000000-0000-4000-8000-000000000001';
const HOJE = new Date('2026-12-10T09:00:00-03:00').getTime();
const dias = (n) => new Date(HOJE - n * 86400000).toISOString();
const b64 = (o) => Buffer.from(JSON.stringify(o)).toString('base64url');
const exp = Math.floor(Date.now() / 1000) + 86400 * 30;
const token = `${b64({ alg: 'HS256', typ: 'JWT' })}.${b64({ sub: EU, role: 'authenticated', exp, email: 'demonstracao@exemplo.com' })}.x`;
const usuario = { id: EU, aud: 'authenticated', role: 'authenticated', email: 'demonstracao@exemplo.com', app_metadata: {}, user_metadata: {}, created_at: dias(60) };
const sessao = { access_token: token, token_type: 'bearer', expires_in: 86400 * 30, expires_at: exp, refresh_token: 'demonstracao', user: usuario };
const base = { grupo_id: null, oculta: false, expira_em: new Date(HOJE + 20 * 86400000).toISOString(), graca_em: null, graca_texto: '' };
const meu = { ...base, id: 'a0000000-0000-4000-8000-000000000001', autor_id: EU, tipo: 'saude', nome: 'Antônia', rezaram: 14, criado_em: dias(9) };
const outros = [
  { ...base, id: 'a0000000-0000-4000-8000-000000000002', autor_id: 'b1', tipo: 'familia', nome: 'Lúcia', rezaram: 21, criado_em: dias(12), graca_em: dias(1), graca_texto: 'A família voltou a se falar. Obrigada pelas orações.' },
  { ...base, id: 'a0000000-0000-4000-8000-000000000003', autor_id: 'b2', tipo: 'trabalho', nome: 'Paulo', rezaram: 9, criado_em: dias(2) },
  { ...base, id: 'a0000000-0000-4000-8000-000000000004', autor_id: 'b3', tipo: 'estudos', nome: 'Clara', rezaram: 6, criado_em: dias(3) },
];
const json = (route, corpo, status = 200) => route.fulfill({ status, contentType: 'application/json', body: JSON.stringify(corpo) });
async function servir(route) {
  const r = route.request(); const u = new URL(r.url()); const m = r.method();
  if (u.pathname.startsWith('/auth/v1/user')) return json(route, usuario);
  if (u.pathname.startsWith('/auth/v1/')) return json(route, sessao);
  if (u.pathname === '/rest/v1/rpc/graca_alcancada') { const b = r.postDataJSON(); meu.graca_em = new Date(HOJE).toISOString(); meu.graca_texto = b.p_texto.trim(); return route.fulfill({ status: 204, body: '' }); }
  if (u.pathname === '/rest/v1/intencoes' && m === 'GET') return json(route, u.searchParams.get('autor_id') ? [meu] : outros);
  if (m === 'GET' || m === 'HEAD') return json(route, (r.headers()['accept'] || '').includes('vnd.pgrst.object') ? null : []);
  return json(route, [], m === 'POST' ? 201 : 200);
}
module.exports = {
  inicio: '/rezar',
  data: '2026-12-10',
  preparar: async (p) => {
    await p.routeWebSocket(HOST, () => {});
    await p.route(HOST, servir);
    await p.evaluate((s) => localStorage.setItem('santinho-auth', JSON.stringify(s)), sessao);
    await p.goto('https://minhaigrejinha.vercel.app/rezar', { waitUntil: 'networkidle', timeout: 60000 });
  },
  passos: [
    async (p, h) => { await h.espera(2200); await h.ate(p.getByText('Intenções', { exact: true }).first(), 330); },
    async (p, h) => { await h.espera(1000); await p.getByText('Intenções', { exact: true }).first().click(); },
    async (p, h) => { await h.espera(2500); await h.ate(p.getByText('Pedidos de oração', { exact: true }), 150); await h.espera(3500); await h.rolar(0); },
    async (p, h) => {
      const b = p.getByRole('button', { name: 'Graça alcançada' });
      await h.ate(p.getByText('Meus pedidos', { exact: true }), 140); await h.espera(2600); await b.click();
    },
    async (p, h) => { await h.espera(500); await p.getByLabel('Testemunho').click(); await p.keyboard.type('Fez a cirurgia e já está em casa.', { delay: 85 }); },
    async (p, h) => { await h.espera(900); await p.getByRole('button', { name: 'Contar a graça' }).click(); },
    async (p, h) => { await h.espera(800); await h.ate(p.getByText('Pedidos de oração', { exact: true }), 120); },
  ],
};
