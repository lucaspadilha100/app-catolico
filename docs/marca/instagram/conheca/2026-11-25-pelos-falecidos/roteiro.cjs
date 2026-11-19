module.exports = {
  inicio: '/rezar',
  data: '2026-11-25',
  armazenamento: { 'santinho-pedido-apoio': '2026-11-20', 'santinho-falecidos': JSON.stringify([{ id: 'lembranca-maria', nome: 'Maria', data: '2026-11-01' }]) },
  preparar: async (p) => {
    for (const r of [/Novembro, mês dos fiéis defuntos/, /^Pelos falecidos/, /^Ofício dos Defuntos/]) {
      await p.getByRole('link', { name: r }).first().click(); await p.waitForTimeout(2200);
      await p.goBack(); await p.waitForTimeout(1000);
    }
    await p.evaluate(() => scrollTo(0, 0)); await p.waitForTimeout(500);
  },
  passos: [
    async (p, h) => {
      await h.espera(2000);
      await h.ate(p.getByRole('link', { name: /Novembro, mês dos fiéis defuntos/ }).first(), 300);
    },
    async (p, h) => {
      await h.espera(1200);
      await p.getByRole('link', { name: /Novembro, mês dos fiéis defuntos/ }).first().click();
    },
    async (p, h) => { await h.espera(500); await h.rolar(330); await h.espera(2200); await h.rolarMais(380); },
    async (p, h) => {
      const r = p.getByRole('button', { name: 'Rezei hoje' });
      await h.ate(r, 520); await h.espera(2600); await r.click();
    },
    async (p, h) => {
      await h.espera(300);
      await p.getByRole('button', { name: 'Voltar' }).first().click(); await h.espera(700);
      const l = p.getByRole('link', { name: /^Pelos falecidos/ }).first();
      await h.ate(l, 400); await h.espera(900); await l.click(); await h.espera(900);
      const ins = p.locator('main input');
      await h.ate(ins.nth(0), 300); await h.espera(500);
      await ins.nth(0).click(); await p.keyboard.type('João', { delay: 120 });
      const b = await ins.nth(1).boundingBox(); await p.mouse.click(b.x + 18, b.y + b.height / 2);
      await p.keyboard.type('25112025', { delay: 120 });
    },
    async (p, h) => {
      await h.espera(400);
      await p.getByRole('button', { name: 'Guardar' }).click(); await h.espera(300); await h.rolar(150);
    },
    async (p, h) => { await h.espera(1300); await p.getByRole('button', { name: 'Rezei por João' }).click(); },
    async (p, h) => {
      await h.espera(300);
      await p.getByRole('link', { name: 'Rezar', exact: true }).first().click(); await h.espera(600);
      const l = p.getByRole('link', { name: /^Ofício dos Defuntos/ }).first();
      await h.ate(l, 400); await h.espera(700); await l.click();
    },
  ],
};
