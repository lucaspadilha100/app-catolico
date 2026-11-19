const vozFalsa = () => {
  const s = window.speechSynthesis; let ate = 0, t = null;
  Object.defineProperty(s, 'speaking', { configurable: true, get: () => Date.now() < ate });
  s.speak = (u) => { const ms = Math.max(1200, (u.text || '').length * 55); ate = Date.now() + ms; clearTimeout(t); t = setTimeout(() => { ate = 0; u.onend && u.onend(); }, ms); };
  s.cancel = () => { clearTimeout(t); ate = 0; };
};
const aba = (p, t) => p.locator('main button').filter({ hasText: new RegExp('^' + t + '$') });
module.exports = {
  inicio: '/',
  data: '2026-11-22',
  preparar: async (p) => {
    await p.getByRole('link', { name: /^Liturgia/ }).first().click(); await p.waitForTimeout(2000);
    for (const t of ['Salmo', '2ª leitura', 'Evangelho', 'Reflexão', '1ª leitura']) { await aba(p, t).click(); await p.waitForTimeout(t === 'Evangelho' ? 5000 : 1200); }
    await p.goBack(); await p.waitForTimeout(1500);
    await p.evaluate(() => scrollTo(0, 0));
    await p.evaluate(vozFalsa);
  },
  passos: [
    async (p, h) => { await h.espera(2500); },
    async (p, h) => {
      await h.espera(1200);
      await p.getByRole('link', { name: /^Liturgia/ }).first().click();
    },
    async (p, h) => { await h.espera(900); await h.rolar(380); },
    async (p, h) => {
      await h.rolar(0); await h.espera(900);
      await aba(p, 'Salmo').click(); await h.espera(1300);
      await aba(p, '2ª leitura').click(); await h.espera(1300);
      await aba(p, 'Evangelho').click(); await h.espera(600); await h.rolar(330);
    },
    async (p, h) => {
      await h.rolar(0); await h.espera(700);
      await aba(p, 'Reflexão').click(); await h.espera(1200); await h.rolar(300);
    },
    async (p, h) => {
      await h.rolar(0); await h.espera(900);
      await p.getByRole('button', { name: 'Ouvir' }).first().click();
    },
    async (p, h) => {
      await h.espera(400);
      await p.getByRole('button', { name: 'Parar' }).first().click().catch(() => {});
      await h.espera(1400);
      await p.locator('main a[href="/liturgia/2026-11-23"]').click();
    },
    async (p, h) => {
      await h.espera(600);
      await p.locator('main a[href="/calendario"]').click(); await h.espera(2000);
      await p.locator('main button').filter({ hasText: /^29$/ }).click();
    },
  ],
};
