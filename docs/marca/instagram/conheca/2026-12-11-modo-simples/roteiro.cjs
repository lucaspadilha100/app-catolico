const pref = (p, nome) => p.locator('fieldset', { hasText: nome });
module.exports = {
  inicio: '/',
  data: '2026-12-11',
  passos: [
    async (p, h) => { await h.espera(3000); },
    async (p, h) => {
      await h.espera(700); await p.getByRole('link', { name: 'Mais' }).last().click(); await h.espera(1000);
      await h.ate(p.getByText('Preferências', { exact: true }), 90);
    },
    async (p, h) => {
      await h.espera(1200); await pref(p, 'Tamanho da letra').getByRole('button', { name: 'Grande' }).click();
      await h.espera(1800); await pref(p, 'Tamanho da letra').getByRole('button', { name: 'Maior' }).click();
      await h.espera(600); await h.ate(pref(p, 'Aparência'), 120);
    },
    async (p, h) => { await h.espera(2600); await pref(p, 'Aparência').getByRole('button', { name: 'Escura' }).click(); },
    async (p, h) => {
      const s = p.getByRole('switch').first(); await h.ate(s, 380); await h.espera(1000); await s.click();
    },
    async (p, h) => {
      await h.espera(400); await p.getByRole('link', { name: 'Hoje' }).last().click(); await h.espera(1800);
      await h.rolarMais(500);
    },
    async (p, h) => { await h.espera(500); await h.rolarMais(700); await h.espera(2200); await h.rolarMais(700); },
  ],
};
