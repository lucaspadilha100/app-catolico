const { chromium } = require('playwright');
const fs = require('fs');
const pasta = process.argv[2];
const roteiro = require(pasta + '/roteiro.cjs');
const dur = JSON.parse(fs.readFileSync(pasta + '/duracoes.json', 'utf8'));
const PAUSA = 0.4;
const espera = (ms) => new Promise((r) => setTimeout(r, ms));
(async () => {
  const b = await chromium.launch({ args: ['--force-device-scale-factor=2'] });
  const c = await b.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, colorScheme: 'light', locale: 'pt-BR', timezoneId: 'America/Sao_Paulo', geolocation: roteiro.geolocalizacao, permissions: roteiro.geolocalizacao ? ['geolocation'] : [] });
  await c.addInitScript((extra) => {
    localStorage.setItem('santinho-preferencias', JSON.stringify({ boasVindas: true }));
    localStorage.setItem('santinho-cookies', JSON.stringify({ escolha: 'nao', data: new Date().toISOString(), versao: '2026-11-18' }));
    for (const [k, v] of Object.entries(extra || {})) if (localStorage.getItem(k) === null) localStorage.setItem(k, v);
  }, roteiro.armazenamento || {});
  const p = await c.newPage();
  if (roteiro.data) await p.clock.install({ time: new Date(roteiro.data + 'T09:00:00-03:00') });
  await p.goto('https://minhaigrejinha.vercel.app' + roteiro.inicio, { waitUntil: 'networkidle', timeout: 60000 });
  if (roteiro.preparar) await roteiro.preparar(p);
  await espera(1500);
  fs.rmSync(pasta + '/q', { recursive: true, force: true }); fs.mkdirSync(pasta + '/q');
  const quadros = [];
  const cdp = await c.newCDPSession(p);
  cdp.on('Page.screencastFrame', (e) => { const n = `q/${String(quadros.length).padStart(5, '0')}.jpg`; fs.writeFileSync(pasta + '/' + n, Buffer.from(e.data, 'base64')); quadros.push([n, e.metadata.timestamp]); cdp.send('Page.screencastFrameAck', { sessionId: e.sessionId }).catch(() => {}); });
  await cdp.send('Page.startScreencast', { format: 'jpeg', quality: 92, maxWidth: 780, maxHeight: 1688, everyNthFrame: 1 });
  await espera(300);
  const rolar = (y) => p.evaluate((y) => window.scrollTo({ top: y, behavior: 'smooth' }), y);
  const rolarMais = (dy) => p.evaluate((dy) => window.scrollBy({ top: dy, behavior: 'smooth' }), dy);
  const ate = async (loc, margem = 160) => { const bx = await loc.boundingBox(); if (bx) await rolar(Math.max(0, (await p.evaluate(() => scrollY)) + bx.y - margem)); };
  const h = { espera, rolar, rolarMais, ate };
  const inicio = Date.now();
  const n = roteiro.passos.length;
  if (n !== dur.length - 1) throw new Error(`roteiro tem ${n} passos e há ${dur.length} falas (a última é o cartão final)`);
  for (let i = 0; i < n; i++) {
    try { await roteiro.passos[i](p, h); } catch (e) { console.error(`passo ${i}: ${e.message}`); process.exitCode = 1; }
    const fim = (dur.slice(0, i + 1).reduce((a, b) => a + b, 0) + PAUSA * (i + 1)) * 1000;
    const falta = fim - (Date.now() - inicio);
    if (falta > 0) await espera(falta); else console.log(`passo ${i} passou ${(-falta / 1000).toFixed(1)} s da fala`);
  }
  await espera(1000);
  await cdp.send('Page.stopScreencast');
  fs.writeFileSync(pasta + '/quadros.json', JSON.stringify({ inicio: inicio / 1000, fim: Date.now() / 1000, quadros }));
  await b.close();
})();
