module.exports = {
  inicio: '/rezar',
  data: '2026-11-20',
  passos: [
    async (p, h) => { await h.espera(2500); await h.ate(p.getByText('Exame de consciência', { exact: true }).first(), 260); },
    async (p, h) => { await h.espera(1000); await p.getByText('Exame de consciência', { exact: true }).first().click(); },
    async (p, h) => {
      await h.espera(1500);
      const ins = p.locator('input');
      await ins.nth(0).click(); await p.keyboard.type('2580', { delay: 300 });
      await h.espera(500); await ins.nth(1).click(); await p.keyboard.type('2580', { delay: 300 });
      await h.espera(1000); await p.getByRole('button', { name: 'Criar PIN' }).click();
    },
    async (p, h) => { await h.espera(2500); await p.getByRole('button', { name: 'Adulto' }).click(); },
    async (p, h) => {
      await h.espera(600);
      const m = p.getByRole('button', { name: /3º Mandamento/ });
      await h.ate(m, 200); await h.espera(800); await m.click(); await h.espera(1200);
      const i1 = p.getByText(/^Faltei à Missa/).first(); await h.ate(i1, 300); await h.espera(700); await i1.click(); await h.espera(800);
      await p.getByText(/^Participei da Missa sem respeito/).first().click();
    },
    async (p, h) => {
      const f = p.getByRole('button', { name: 'Fui me confessar' });
      await h.ate(f, 420); await h.espera(1500); await f.click(); await h.espera(1000);
      await h.ate(p.getByText('Fui me confessar', { exact: true }).last(), 260);
    },
    async (p, h) => { await h.espera(500); const l = p.getByRole('link', { name: 'Como se confessar' }).first(); await h.ate(l, 400); await h.espera(600); await l.click(); await h.espera(2000); await h.rolar(170); },
  ],
};
