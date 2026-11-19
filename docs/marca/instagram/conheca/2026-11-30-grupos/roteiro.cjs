const SITE = 'https://minhaigrejinha.vercel.app';
module.exports = {
  inicio: '/rezar',
  data: '2026-11-30',
  preparar: async (p) => {
    for (const c of ['/grupos', '/conta', '/rezar/terco']) {
      await p.goto(SITE + c, { waitUntil: 'networkidle', timeout: 60000 }); await p.waitForTimeout(1500);
    }
    await p.goto(SITE + '/rezar', { waitUntil: 'networkidle', timeout: 60000 });
  },
  passos: [
    async (p, h) => { await h.espera(2000); },
    async (p, h) => { await h.espera(400); await h.ate(p.getByText('Comunidade', { exact: true }).first(), 300); },
    async (p, h) => {
      await h.espera(500); await p.getByRole('link', { name: /^Grupos/ }).click(); await h.espera(2500);
      await p.getByRole('link', { name: 'Entrar para ver os seus grupos' }).click();
    },
    async (p, h) => { await h.espera(2500); await p.goBack(); await h.espera(1500); await p.goBack(); await h.espera(800); await h.ate(p.getByText('Comunidade', { exact: true }).first(), 300); },
    async (p, h) => {
      await h.espera(300); const t = p.getByRole('link', { name: /^Terço/ }).first(); await h.ate(t, 300); await h.espera(900); await t.click();
      await h.espera(2200); await p.getByRole('button', { name: 'Começar' }).click();
    },
    async (p, h) => {
      for (let i = 0; i < 4; i++) { await h.espera(1300); await p.getByRole('button', { name: /^(Avançar|Próxima conta)/ }).click(); }
    },
  ],
};
