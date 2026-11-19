const sec = (p, t) => p.getByRole('heading', { name: t }).first();
module.exports = {
  inicio: '/rezar',
  data: '2026-12-06',
  preparar: async (p) => {
    await p.getByRole('link', { name: /A Missa, parte por parte/ }).click(); await p.waitForTimeout(2500);
    await p.goBack(); await p.waitForTimeout(1200);
    await p.evaluate(() => window.scrollTo(0, 0));
  },
  passos: [
    async (p, h) => { await h.espera(1800); await h.ate(p.getByRole('link', { name: /A Missa, parte por parte/ }), 480); },
    async (p, h) => { await h.espera(1000); await p.getByRole('link', { name: /A Missa, parte por parte/ }).click(); },
    async (p, h) => { await h.espera(1500); await h.rolarMais(260); },
    async (p, h) => { await h.espera(300); await h.ate(p.getByText(/^Chegue alguns minutos antes/), 260); },
    async (p, h) => { await h.espera(300); await h.ate(sec(p, /Ritos iniciais: entrada/), 140); await h.espera(2200); await h.ate(sec(p, /primeira leitura e salmo/), 140); },
    async (p, h) => { await h.espera(400); await h.rolarMais(500); await h.espera(1600); await h.ate(sec(p, /o Evangelho$/), 140); await h.espera(1600); await h.ate(sec(p, /homilia/), 140); },
    async (p, h) => { await h.espera(300); await h.ate(sec(p, /a consagração$/), 140); await h.espera(1800); await h.rolarMais(260); },
    async (p, h) => { await h.espera(300); await h.ate(sec(p, /receber o Senhor/), 140); await h.espera(1500); await h.ate(sec(p, /Como receber/), 200); },
    async (p, h) => { await h.espera(300); await h.ate(sec(p, /bênção e envio/), 140); },
  ],
};
