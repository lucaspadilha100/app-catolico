const { chromium } = require('playwright');
const [pasta, titulo, nota] = process.argv.slice(2); const app = require('path').resolve(__dirname, '../../..');
const css = `@font-face{font-family:I;src:url(file://${app}/src/assets/fontes/inter-latin-wght-normal.woff2)}@font-face{font-family:L;src:url(file://${app}/src/assets/fontes/literata-latin-wght-normal.woff2)}
*{margin:0;box-sizing:border-box}body{width:1080px;height:1920px;background:transparent;color:#341E0D;font-family:I;text-align:center;position:relative;overflow:hidden}`;
const fundo = `<style>${css}</style>
<div style="position:absolute;z-index:2;top:${nota ? 58 : 96}px;left:0;right:0"><div style="font:600 34px I;letter-spacing:.32em;color:#A9792A">CONHEÇA O APP</div>
<div style="font:600 76px L;margin-top:22px;letter-spacing:-.01em">${titulo}</div>${nota ? `<div style="font:500 italic 27px I;color:rgba(52,30,13,.6);margin-top:4px">${nota}</div>` : ''}</div>
<div style="position:absolute;left:213px;top:318px;width:654px;height:1414px;border-radius:58px;box-shadow:0 0 0 14px #2a1a0c,0 30px 80px 14px rgba(52,30,13,.28),0 0 0 3000px #FBF0DD"></div>
<div style="position:absolute;z-index:2;bottom:58px;left:0;right:0;display:flex;align-items:center;justify-content:center;gap:18px"><img src="file://${app}/public/simbolo.png" style="height:64px"><span style="font:600 44px L">Minha Igrejinha</span></div>`;
const fecho = `<style>${css}body{background:#FBF0DD}</style><div style="position:absolute;top:540px;left:0;right:0"><img src="file://${app}/public/simbolo.png" style="width:220px">
<div style="font:600 84px L;margin-top:70px">Minha Igrejinha</div>
<div style="font:500 50px/70px I;color:rgba(52,30,13,.8);margin-top:60px">Gratuito e sem anúncios.</div>
<div style="font:600 46px I;color:#A9792A;margin-top:90px">Link no perfil: @minhaigrejinhaapp</div></div>`;
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1080, height: 1920 } });
  for (const [n, h] of [['fundo', fundo], ['fecho', fecho]]) { require('fs').writeFileSync(`${pasta}/${n}.html`, h); await p.goto(`file://${pasta}/${n}.html`); await p.waitForTimeout(400); await p.screenshot({ path: `${pasta}/${n}.png`, omitBackground: true }); }
  await b.close();
})();
