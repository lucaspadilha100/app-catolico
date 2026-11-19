// Demonstração sem servidor: a corrente de exemplo é respondida aqui (nada sai da máquina).
// Sem sessão: é a tela de quem abre o link sem conta.
const HOST = /dknrrvspimmldxmutzdt\.supabase\.co/;
const CODIGO = 'r4t8w2n6';
const INICIO = new Date('2026-12-13T08:00:00-03:00').getTime();
const h = (n) => new Date(INICIO + n * 3600000).toISOString();
const corrente = {
  id: 'd0000000-0000-4000-8000-000000000001', codigo: CODIGO, titulo: 'Pelos doentes da comunidade',
  descricao: 'Escolha um horário e reze um terço pelos doentes da nossa comunidade.',
  inicio: h(0), horas: 24, intervalo: 60, ativa: true, sou_dono: false,
  turnos: [[0, 'Maria'], [1, 'José'], [2, 'Ana'], [4, 'Rita'], [7, 'Pedro'], [8, 'Teresa'], [12, 'João']].map(([n, nome]) => ({ inicio: h(n), nome, meu: false })),
};
const json = (route, corpo, status = 200) => route.fulfill({ status, contentType: 'application/json', body: JSON.stringify(corpo) });
async function servir(route) {
  const r = route.request(); const u = new URL(r.url()); const m = r.method();
  if (u.pathname === '/rest/v1/rpc/corrente_por_codigo') return json(route, r.postDataJSON().p_codigo === CODIGO ? corrente : null);
  if (u.pathname === '/rest/v1/rpc/pegar_turno') { const b = r.postDataJSON(); corrente.turnos.push({ inicio: new Date(b.p_inicio).toISOString(), nome: b.p_nome, meu: true }); return json(route, 'segredo-de-demonstracao'); }
  if (m === 'GET' || m === 'HEAD') return json(route, (r.headers()['accept'] || '').includes('vnd.pgrst.object') ? null : []);
  return json(route, [], m === 'POST' ? 201 : 200);
}
const URL_ = 'https://minhaigrejinha.vercel.app';
module.exports = {
  inicio: '/mais',
  data: '2026-12-13',
  preparar: async (p) => {
    await p.routeWebSocket(HOST, () => {}); await p.route(HOST, servir);
    for (const c of ['/correntes', `/c/${CODIGO}`, '/mais']) await p.goto(URL_ + c, { waitUntil: 'networkidle', timeout: 60000 });
  },
  passos: [
    async (p, h) => { await h.espera(1800); await h.ate(p.getByText('Relógio de oração', { exact: true }).first(), 420); },
    async (p, h) => { await h.espera(1000); await p.getByText('Relógio de oração', { exact: true }).first().click(); },
    async (p, h) => { await h.espera(1000); },
    async (p, h) => { await h.espera(500); await p.goto(URL_ + `/c/${CODIGO}`, { waitUntil: 'networkidle' }); await h.espera(2600); await h.rolarMais(160); },
    async (p, h) => {
      const linha = p.locator('li', { hasText: '11h' }).first();
      await h.ate(linha, 330); await h.espera(1300); await linha.getByRole('button', { name: 'Rezar' }).click();
      await h.espera(700); await p.keyboard.type('Marta', { delay: 160 });
    },
    async (p, h) => { await h.espera(900); await p.getByRole('button', { name: 'Confirmar' }).click(); },
    async (p, h) => { await h.espera(800); await h.rolarMais(-120); },
  ],
};
