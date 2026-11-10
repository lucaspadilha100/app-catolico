import { mkdirSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), "../..");
const DIST = join(RAIZ, "dist");
const fetchOriginal = globalThis.fetch;
globalThis.fetch = async (url, opcoes) => {
  const u = String(url);
  if (u.startsWith("/")) {
    const arquivo = join(DIST, u.split("?")[0]);
    if (!existsSync(arquivo)) return new Response("", { status: 404 });
    return new Response(readFileSync(arquivo), { status: 200, headers: { "Content-Type": "application/json" } });
  }
  return fetchOriginal(u, opcoes);
};

const m = await import(pathToFileURL(join(RAIZ, "dist-paginas/entrada.js")).href);
const SITE = m.ENDERECO_DO_SITE;
const modelo = readFileSync(join(DIST, "index.html"), "utf8");
const urls = [];

const esc = (t) => String(t ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const curto = (t, n = 155) => {
  const s = String(t).replace(/\s+/g, " ").trim();
  return s.length > n ? `${s.slice(0, n - 1).replace(/\s+\S*$/, "")}…` : s;
};

function escrever(caminho, titulo, descricao, corpo) {
  const url = `${SITE}${caminho}`;
  const html = modelo
    .replace(/<title>[^<]*<\/title>/, `<title>${esc(titulo)}</title>`)
    .replace(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${esc(descricao)}" />`)
    .replace("</head>", `<link rel="canonical" href="${esc(url)}" />\n<meta property="og:title" content="${esc(titulo)}" />\n<meta property="og:description" content="${esc(descricao)}" />\n<meta property="og:type" content="article" />\n<meta property="og:url" content="${esc(url)}" />\n</head>`)
    .replace('<div id="root"></div>', `<div id="root"><div style="max-width:42rem;margin:0 auto;padding:1.25rem 1rem 6rem;line-height:1.7;font-family:Georgia,serif">${corpo}</div></div>`);
  const pasta = join(DIST, caminho);
  mkdirSync(pasta, { recursive: true });
  writeFileSync(join(pasta, "index.html"), html);
  urls.push(url);
}

const p = (t) => `<p>${esc(t)}</p>`;
const h1 = (t) => `<h1>${esc(t)}</h1>`;
const h2 = (t) => `<h2>${esc(t)}</h2>`;
const a = (href, t) => `<a href="${esc(href)}">${esc(t)}</a>`;

async function liturgia() {
  const lecionario = await m.carregarLecionario();
  const hoje = m.hoje();
  let n = 0;
  for (let i = -7; i <= 400; i++) {
    const d = m.somaDias(hoje, i);
    const iso = m.paraIso(d);
    const l = m.diaLiturgico(d);
    const missa = m.leiturasDoDia(l, lecionario)[0];
    if (!missa) continue;
    const partes = [h1(`Liturgia de ${m.dataPorExtenso(d).toLowerCase()}`), p(l.titulo)];
    if (l.celebracao) partes.push(p(`${l.celebracao.nome} · ${m.NOME_DO_GRAU[l.celebracao.grau]}`));
    partes.push(p(`Cor litúrgica: ${m.NOME_DA_COR[l.cor]}`));
    let evangelho = "";
    for (const x of missa.leituras.filter((x) => !x.ou && x.forma !== "breve")) {
      partes.push(h2(`${m.NOME_DA_LEITURA[x.tipo]}: ${x.referencia}`));
      const trechos = await m.textoDaReferencia(x.canonica).catch(() => []);
      const texto = trechos.flatMap((t) => t.versiculos.map((v) => v.texto)).join(" ");
      if (texto) partes.push(p(texto));
      if (x.tipo === "evangelho") evangelho = x.canonica;
    }
    const r = evangelho ? await m.reflexaoDoEvangelho(evangelho).catch(() => null) : null;
    if (r) partes.push(h2("Reflexão do Evangelho"), ...r.paragrafos.map(p), p(r.pergunta));
    const antes = m.paraIso(m.somaDias(d, -1));
    const depois = m.paraIso(m.somaDias(d, 1));
    partes.push(`<nav>${a(`/liturgia/${antes}`, "Dia anterior")} · ${a(`/liturgia/${depois}`, "Dia seguinte")}</nav>`);
    const ev = missa.leituras.find((x) => x.tipo === "evangelho");
    escrever(`/liturgia/${iso}`, `Liturgia diária de ${m.dataPorExtenso(d).toLowerCase()} | ${m.NOME_DO_APP}`, curto(`${l.titulo}. Leituras, salmo e Evangelho do dia${ev ? ` (${ev.referencia})` : ""}, com reflexão.`), partes.join("\n"));
    n++;
  }
  return n;
}

async function biblia() {
  let n = 0;
  for (const livro of m.LIVROS) {
    const dados = await m.carregarLivro(livro.codigo).catch(() => null);
    if (!dados) continue;
    for (let c = 1; c <= livro.capitulos; c++) {
      const versos = dados.capitulos[c - 1] ?? [];
      const nome = livro.codigo === "PSA" ? `Salmo ${c}` : `${livro.nome} ${c}`;
      const corpo = [h1(nome), ...versos.map((t, i) => (t ? `<p><sup>${i + 1}</sup> ${esc(t)}</p>` : ""))];
      const nav = [];
      if (c > 1) nav.push(a(`/biblia/${livro.slug}/${c - 1}`, livro.codigo === "PSA" ? `Salmo ${c - 1}` : `${livro.nome} ${c - 1}`));
      if (c < livro.capitulos) nav.push(a(`/biblia/${livro.slug}/${c + 1}`, livro.codigo === "PSA" ? `Salmo ${c + 1}` : `${livro.nome} ${c + 1}`));
      corpo.push(`<nav>${nav.join(" · ")}</nav>`);
      escrever(`/biblia/${livro.slug}/${c}`, `${nome} | Bíblia | ${m.NOME_DO_APP}`, curto(`${nome}: ${versos.filter(Boolean).slice(0, 3).join(" ")}`), corpo.join("\n"));
      n++;
    }
  }
  return n;
}

async function santos() {
  const lista = await m.todosOsSantos();
  for (const s of lista) {
    const corpo = [h1(s.nome), p(s.resumo), ...s.historia.map(p)];
    if (s.padroeiro?.length) corpo.push(p(`Padroeiro ${s.padroeiro.join(", ")}.`));
    escrever(`/santos/${s.id}`, `${s.nome} | Santos | ${m.NOME_DO_APP}`, curto(s.resumo), corpo.join("\n"));
  }
  return lista.length;
}

const NOME_DO_TIPO = { missa: "Missa", confissao: "Confissão", adoracao: "Adoração" };

async function paroquias() {
  const env = readFileSync(join(RAIZ, ".env"), "utf8");
  const url = env.match(/VITE_SUPABASE_URL=(.*)/)?.[1]?.trim();
  const chave = env.match(/VITE_SUPABASE_PUBLISHABLE_KEY=(.*)/)?.[1]?.trim();
  if (!url || !chave) return 0;
  const lista = [];
  for (let de = 0; ; de += 1000) {
    const r = await fetchOriginal(`${url}/rest/v1/paroquias?select=*,horarios(*)&order=id&limit=1000&offset=${de}`, { headers: { apikey: chave } }).catch(() => null);
    if (!r?.ok) break;
    const parte = await r.json();
    lista.push(...parte);
    if (parte.length < 1000) break;
  }
  for (const q of lista) {
    const endereco = [q.endereco, q.bairro, `${q.cidade} - ${q.uf}`].filter(Boolean).join(", ");
    const corpo = [h1(q.nome), p(endereco)];
    if (q.padroeiro) corpo.push(p(`Padroeiro: ${q.padroeiro}`));
    for (const tipo of ["missa", "confissao", "adoracao"]) {
      const grupos = m.agruparDias((q.horarios ?? []).filter((h) => h.tipo === tipo));
      if (!grupos.length) continue;
      corpo.push(h2(NOME_DO_TIPO[tipo]), ...grupos.map((g) => p(`${g.rotulo}: ${g.horarios.map(m.descreverHorario).join(", ")}`)));
    }
    if (q.telefone) corpo.push(p(`Secretaria: ${m.telefoneLegivel(q.telefone)}`));
    const missas = (q.horarios ?? []).some((h) => h.tipo === "missa");
    escrever(`/missas/paroquia/${q.id}`, `${q.nome}, ${q.cidade}${missas ? ": horários de missa" : ""} | ${m.NOME_DO_APP}`, curto(`${q.nome}. ${endereco}.${missas ? " Horários de missa, confissão e contato da secretaria." : ""}`), corpo.join("\n"));
  }
  return lista.length;
}

const totais = { liturgia: await liturgia(), biblia: await biblia(), santos: await santos(), paroquias: await paroquias() };
writeFileSync(
  join(DIST, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[SITE + "/", ...urls].map((u) => `  <url><loc>${esc(u)}</loc></url>`).join("\n")}\n</urlset>\n`,
);
writeFileSync(join(DIST, "robots.txt"), `User-agent: *\nAllow: /\nDisallow: /painel\nDisallow: /conta\n\nSitemap: ${SITE}/sitemap.xml\n`);
console.log("páginas:", JSON.stringify(totais));
