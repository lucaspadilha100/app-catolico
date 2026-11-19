const site = 'https://minhaigrejinha.vercel.app';
const av = (p) => p.getByRole('button', { name: /Avançar|Próxima conta/ });
module.exports = {
  inicio: '/',
  data: '2026-12-08',
  preparar: async (p) => {
    await p.getByText('Terço', { exact: true }).first().click(); await p.waitForTimeout(1500);
    await p.getByRole('tab', { name: /Completo/ }).click(); await p.waitForTimeout(800);
    await p.getByRole('button', { name: 'Começar' }).click(); await p.waitForTimeout(2000);
    await p.evaluate(() => { for (const k of Object.keys(localStorage)) if (/andamento|intencao/i.test(k)) localStorage.removeItem(k); });
    for (let i = 0; i < 4 && new URL(p.url()).pathname !== '/'; i++) { await p.goBack(); await p.waitForTimeout(1000); }
    console.log('preparar terminou em ' + p.url());
    await p.evaluate(() => window.scrollTo(0, 0));
  },
  passos: [
    async (p, h) => { await h.espera(2500); },
    async (p, h) => { await h.espera(900); await p.getByText('Terço', { exact: true }).first().click(); },
    async (p, h) => { await h.espera(1500); await h.rolarMais(220); await h.espera(2500); await h.rolar(0); },
    async (p, h) => { await h.espera(500); for (const n of ['Gozosos', 'Luminosos', 'Gloriosos']) { await p.getByRole('tab', { name: new RegExp('^' + n) }).click(); await h.espera(1100); } },
    async (p, h) => { await h.espera(500); await p.getByRole('tab', { name: /Completo/ }).click(); await h.espera(1500); await h.rolarMais(330); await h.espera(1500); await h.rolarMais(200); },
    async (p, h) => {
      const i = p.getByRole('textbox').last(); await h.ate(i, 420); await h.espera(700);
      await i.click(); await p.keyboard.type('minha família', { delay: 120 }); await h.espera(800);
      await p.getByRole('button', { name: 'Começar' }).click();
    },
    async (p, h) => { await h.espera(1200); for (let k = 0; k < 8; k++) { await av(p).click(); await h.espera(240); } },
    async (p, h) => { await h.espera(600); await av(p).click(); await h.espera(900); await av(p).click(); for (let k = 0; k < 3; k++) { await h.espera(800); await av(p).click(); } },
    async (p, h) => { await h.espera(300); await p.getByRole('button', { name: 'Sair' }).click(); await h.espera(900); await h.rolar(0); await h.espera(700); await h.rolar(0); },
  ],
};
