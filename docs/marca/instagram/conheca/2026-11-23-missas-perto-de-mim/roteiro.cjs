const b = (p, n) => p.getByRole('button', { name: n, exact: true });
module.exports = {
  inicio: '/missas',
  data: '2026-11-23',
  geolocalizacao: { latitude: -5.7945, longitude: -35.2110 },
  passos: [
    async (p, h) => { await h.espera(2500); },
    async (p, h) => {
      await h.espera(1500);
      await p.getByRole('button', { name: 'Perto de mim' }).click();
    },
    async (p, h) => { await h.espera(1200); await h.rolar(330); await h.espera(2600); await h.rolar(0); },
    async (p, h) => {
      await h.espera(800);
      await b(p, 'Dom').click(); await h.espera(1500);
      await b(p, 'Por igreja').click(); await h.espera(1000); await h.rolar(200);
    },
    async (p, h) => {
      await h.rolar(0); await h.espera(800);
      await b(p, 'Confissão').click(); await h.espera(900);
      await b(p, 'Amanhã').click(); await h.espera(900);
      await b(p, 'Por horário').click(); await h.espera(600); await h.rolar(260);
    },
    async (p, h) => {
      await h.espera(800);
      await p.getByRole('link', { name: /Catedral de Nossa Senhora da Apresentação/ }).first().click();
    },
    async (p, h) => {
      await h.espera(500); await h.rolar(560); await h.espera(2800); await h.rolarMais(420);
    },
    async (p, h) => {
      await h.rolar(330); await h.espera(1600);
      await b(p, 'Minha paróquia').click(); await h.espera(1600);
      await b(p, 'Voltar').click(); await h.espera(600); await h.rolar(0);
    },
  ],
};
