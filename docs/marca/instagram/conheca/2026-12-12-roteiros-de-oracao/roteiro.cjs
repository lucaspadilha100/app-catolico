// Demonstração sem servidor: o roteiro de exemplo é respondido aqui (nada sai da máquina).
// Sem sessão: é a tela de quem abre o link sem conta.
const HOST = /dknrrvspimmldxmutzdt\.supabase\.co/;
const CODIGO = 'a7k3m9q2';
let n = 0;
const b = (x) => ({ id: `b${++n}`, ...x });
const blocos = [
  b({ tipo: 'oracao', oracao: 'sinal-da-cruz', vezes: 1 }),
  b({ tipo: 'texto', rotulo: 'oferecimento', texto: 'Oferecemos este terço pelas nossas famílias e pelos doentes da comunidade.' }),
  b({ tipo: 'leitura', referencia: 'Lc 1,26-33', numeracao: 2 }),
  b({ tipo: 'misterio', grupo: 'gozosos', indice: 0 }),
  b({ tipo: 'oracao', oracao: 'pai-nosso', vezes: 1 }),
  b({ tipo: 'oracao', oracao: 'ave-maria', vezes: 10 }),
  b({ tipo: 'oracao', oracao: 'gloria', vezes: 1 }),
  b({ tipo: 'oracao', oracao: 'fatima', vezes: 1 }),
];
const AVE = blocos.findIndex((x) => x.oracao === 'ave-maria');
const roteiro = { id: 'c0000000-0000-4000-8000-000000000001', codigo: CODIGO, titulo: 'Terço em família', data: '2026-12-12', hora: '19:30:00', local: '', blocos, passo: 0, conta: 0, ao_vivo: false, terco_id: null, terco: null, atualizado_em: '2026-12-11T20:00:00Z' };
const estado = { passo: 0, conta: 0, ao_vivo: false };
const json = (route, corpo, status = 200) => route.fulfill({ status, contentType: 'application/json', body: JSON.stringify(corpo) });
async function servir(route) {
  const r = route.request(); const u = new URL(r.url()); const m = r.method();
  if (u.pathname === '/rest/v1/rpc/roteiro_por_codigo') return json(route, r.postDataJSON().p_codigo === CODIGO ? [roteiro] : []);
  if (u.pathname === '/rest/v1/rpc/roteiro_estado') return json(route, [estado]);
  if (m === 'GET' || m === 'HEAD') return json(route, (r.headers()['accept'] || '').includes('vnd.pgrst.object') ? null : []);
  return json(route, [], m === 'POST' ? 201 : 200);
}
const avisar = (p, e) => (Object.assign(estado, e), p.evaluate(() => document.dispatchEvent(new Event('visibilitychange'))));
module.exports = {
  inicio: '/mais',
  data: '2026-12-12',
  preparar: async (p) => {
    await p.routeWebSocket(HOST, () => {}); await p.route(HOST, servir);
    for (const c of ['/roteiros', `/r/${CODIGO}`, '/mais']) await p.goto('https://minhaigrejinha.vercel.app' + c, { waitUntil: 'networkidle', timeout: 60000 });
  },
  passos: [
    async (p, h) => { await h.espera(1800); await h.ate(p.getByText('Roteiros de oração', { exact: true }).first(), 380); },
    async (p, h) => { await h.espera(1000); await p.getByText('Roteiros de oração', { exact: true }).first().click(); },
    async (p, h) => { await h.espera(1000); },
    async (p, h) => {
      await h.espera(600); await p.getByLabel('Código ou link do roteiro').click();
      await p.keyboard.type(CODIGO, { delay: 150 }); await h.espera(700);
      await p.getByRole('button', { name: 'Abrir' }).click();
    },
    async (p, h) => { await h.espera(1200); await h.rolarMais(330); await h.espera(1500); await h.rolarMais(420); },
    async (p, h) => {
      await h.espera(500); await avisar(p, { passo: AVE, conta: 1, ao_vivo: true });
      for (let c = 2; c <= 4; c++) { await h.espera(1400); await avisar(p, { conta: c }); }
    },
    async (p, h) => { await h.espera(400); const c = p.getByRole('button', { name: 'Compartilhar' }); await h.ate(c, 560); },
  ],
};
