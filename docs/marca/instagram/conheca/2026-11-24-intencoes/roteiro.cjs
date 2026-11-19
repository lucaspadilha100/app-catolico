// Dados de exemplo: toda chamada ao Supabase é respondida aqui (nada sai da máquina). Sem sessão: a tela de quem não tem conta.
const HOST = /dknrrvspimmldxmutzdt\.supabase\.co/;
const HOJE = new Date('2026-11-24T09:00:00-03:00').getTime();
const dias = (n) => new Date(HOJE - n * 86400000 - 3 * 3600000).toISOString();
const base = { grupo_id: null, oculta: false, expira_em: new Date(HOJE + 20 * 86400000).toISOString(), graca_em: null, graca_texto: '' };
const lista = [
  ['saude', 'Francisca', 23, 1], ['trabalho', 'Carlos', 11, 1], ['falecido', 'Sebastião', 31, 2],
  ['estudos', 'Beatriz', 7, 3], ['gestacao', 'Juliana', 18, 4], ['familia', 'Antônio', 9, 6],
].map(([tipo, nome, rezaram, d], i) => ({ ...base, id: `e0000000-0000-4000-8000-00000000000${i + 1}`, autor_id: `x${i}`, tipo, nome, rezaram, criado_em: dias(d) }));
const json = (route, corpo, status = 200) => route.fulfill({ status, contentType: 'application/json', body: JSON.stringify(corpo) });
async function servir(route) {
  const r = route.request(); const u = new URL(r.url()); const m = r.method();
  if (u.pathname === '/rest/v1/rpc/rezei_por') { const i = lista.find((x) => x.id === r.postDataJSON().p_intencao); if (i) i.rezaram++; return json(route, i ? i.rezaram : 0); }
  if (u.pathname === '/rest/v1/intencoes' && m === 'GET') return json(route, lista);
  if (m === 'GET' || m === 'HEAD') return json(route, (r.headers()['accept'] || '').includes('vnd.pgrst.object') ? null : []);
  return json(route, [], m === 'POST' ? 201 : 200);
}
const rezei = (p, nome) => p.locator('li', { hasText: nome }).getByRole('button', { name: 'Rezei por você' });
module.exports = {
  inicio: '/rezar',
  data: '2026-11-24',
  preparar: async (p) => {
    await p.routeWebSocket(HOST, () => {}); await p.route(HOST, servir);
    await p.getByRole('link', { name: /^Intenções/ }).first().click(); await p.waitForTimeout(3000);
    await p.goBack(); await p.waitForTimeout(800);
    await p.getByRole('link', { name: /^Terço/ }).first().click(); await p.waitForTimeout(2000);
    await p.goBack(); await p.waitForTimeout(1500); await p.evaluate(() => scrollTo(0, 0));
  },
  passos: [
    async (p, h) => { await h.espera(2500); },
    async (p, h) => {
      const l = p.getByRole('link', { name: /^Intenções/ }).first();
      await h.ate(l, 380); await h.espera(1800); await l.click();
    },
    async (p, h) => { await h.espera(2200); await h.rolarMais(260); await h.espera(2200); await h.rolarMais(260); },
    async (p, h) => {
      await h.rolar(0); await h.espera(1000);
      const a = rezei(p, 'Francisca'); await h.ate(a, 330); await h.espera(1500); await a.click();
      await h.espera(2200); const b = rezei(p, 'Sebastião'); await h.ate(b, 380); await h.espera(1000); await b.click();
    },
    async (p, h) => {
      await h.rolar(0); await h.espera(1200);
      await p.getByRole('link', { name: 'Entrar para pedir oração' }).click();
      await h.espera(4500);
      await p.getByRole('button', { name: 'Voltar' }).click();
    },
    async (p, h) => {
      await h.espera(600);
      await p.getByRole('link', { name: 'Rezar', exact: true }).first().click();
      await h.espera(1200); await h.rolar(0); await h.espera(600);
      await p.getByRole('link', { name: /^Terço/ }).first().click();
    },
    async (p, h) => {
      const i = p.getByPlaceholder('Rezo este terço por…');
      await h.ate(i, 420); await h.espera(900);
      await i.click(); await p.keyboard.type('os doentes da família', { delay: 110 });
      await h.espera(700);
      await p.getByRole('button', { name: 'Começar' }).click();
    },
  ],
};
