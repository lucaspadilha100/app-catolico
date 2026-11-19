module.exports = {
  inicio: '/mais',
  data: '2026-12-09',
  passos: [
    async (p, h) => { await h.espera(1800); await h.ate(p.getByText('Diário espiritual', { exact: true }).first(), 300); },
    async (p, h) => { await h.espera(1000); await p.getByText('Diário espiritual', { exact: true }).first().click(); },
    async (p, h) => {
      await h.espera(1400);
      const ins = p.locator('input');
      await ins.nth(0).click(); await p.keyboard.type('1234', { delay: 300 });
      await h.espera(500); await ins.nth(1).click(); await p.keyboard.type('1234', { delay: 300 });
      await h.espera(900); await p.getByRole('button', { name: 'Criar PIN' }).click();
    },
    async (p, h) => {
      await h.espera(700);
      await p.getByLabel('Escrever no diário').click();
      await p.keyboard.type('Rezei o terço antes do trabalho. Quero ter mais paciência em casa.', { delay: 85 });
    },
    async (p, h) => { await h.espera(900); await p.getByRole('button', { name: 'Guardar' }).click(); await h.espera(1200); await h.rolarMais(220); },
    async (p, h) => {
      await h.rolar(0); await h.espera(900);
      await p.getByRole('tab', { name: 'Propósitos' }).click(); await h.espera(900);
      await p.getByLabel('Novo propósito').click();
      await p.keyboard.type('Terço em família no domingo', { delay: 85 });
      await h.espera(500); await p.getByRole('button', { name: 'Incluir' }).click();
      await h.espera(1300); await p.getByRole('button', { name: 'Marcar como cumprido' }).first().click();
    },
    async (p, h) => { await h.espera(1500); await p.getByRole('button', { name: 'Trancar' }).click(); },
  ],
};
