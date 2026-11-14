import { createHash } from "node:crypto";
import { PARTES, letraDoNome, nomeParaOrdenar, parteDoId } from "../../src/santos/comum.ts";

export const VERSAO = "v1";
export const PASTA_PUBLICA = `/santos/${VERSAO}`;

const OBRIGATORIOS = ["id", "nome", "data", "calendario", "grupo", "nomes", "resumo", "historia"];
const DATA = /^(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])$/;

const resumir = (conteudo) => createHash("sha256").update(conteudo).digest("hex").slice(0, 10);

const porNome = (a, b) => nomeParaOrdenar(a.nome).localeCompare(nomeParaOrdenar(b.nome), "pt-BR") || a.id.localeCompare(b.id);

function conferir(fichas) {
  const ids = new Set();
  const nomes = new Set();
  for (const f of fichas) {
    for (const c of OBRIGATORIOS) if (f[c] === undefined) throw new Error(`${f.id ?? "?"}: falta ${c}`);
    if (!/^[a-z0-9-]+$/.test(f.id)) throw new Error(`${f.id}: id inválido`);
    if (!DATA.test(f.data)) throw new Error(`${f.id}: data inválida ${f.data}`);
    if (ids.has(f.id)) throw new Error(`${f.id}: id repetido`);
    if (nomes.has(f.nome)) throw new Error(`${f.id}: nome repetido`);
    if (f.imagem) for (const c of ["arquivo", "obra", "autor", "licenca", "url"]) if (typeof f.imagem[c] !== "string") throw new Error(`${f.id}: imagem sem ${c}`);
    ids.add(f.id);
    nomes.add(f.nome);
  }
}

function fichaPublica(f) {
  const { fontes: _fontes, revisao: _revisao, ...resto } = f;
  return resto;
}

function itemDoIndice(f) {
  const item = { id: f.id, nome: f.nome, data: f.data, calendario: f.calendario, grupo: f.grupo, nomes: f.nomes };
  if (f.situacao) item.situacao = f.situacao;
  if (f.dataDe) item.dataDe = f.dataDe;
  if (f.pais) item.pais = f.pais;
  if (f.padroeiro?.length) item.padroeiro = f.padroeiro;
  if (f.imagem) item.imagem = f.imagem.foco ? { arquivo: f.imagem.arquivo, foco: f.imagem.foco } : { arquivo: f.imagem.arquivo };
  return item;
}

function creditoDe(f) {
  const i = f.imagem;
  const c = { id: f.id, nome: f.nome, obra: i.obra, autor: i.autor, licenca: i.licenca, url: i.url };
  if (i.data) c.data = i.data;
  if (i.fonte) c.fonte = i.fonte;
  return c;
}

export function montar(fichas) {
  conferir(fichas);
  const arquivos = new Map();
  const guardar = (prefixo, dados) => {
    const conteudo = JSON.stringify(dados);
    const nome = `${prefixo}.${resumir(conteudo)}.json`;
    arquivos.set(nome, conteudo);
    return nome;
  };

  const ordenadas = [...fichas].sort((a, b) => a.data.localeCompare(b.data) || Number(b.calendario) - Number(a.calendario) || porNome(a, b));

  const porDia = new Map();
  for (const f of ordenadas) porDia.set(f.data, [...(porDia.get(f.data) ?? []), fichaPublica(f)]);
  const dias = {};
  for (const [mmdd, lista] of [...porDia].sort(([a], [b]) => a.localeCompare(b))) dias[mmdd] = guardar(mmdd, lista);

  const indice = [...fichas].sort(porNome).map(itemDoIndice);
  const nomeDoIndice = guardar("indice", indice);

  const partes = [];
  for (let p = 0; p < PARTES; p++) partes.push(guardar(`parte-${String(p).padStart(2, "0")}`, indice.filter((s) => parteDoId(s.id) === p)));

  const porLetra = new Map();
  for (const f of [...fichas].sort(porNome)) if (f.imagem) porLetra.set(letraDoNome(f.nome), [...(porLetra.get(letraDoNome(f.nome)) ?? []), creditoDe(f)]);
  const creditos = {};
  for (const [letra, lista] of [...porLetra].sort(([a], [b]) => (a === "#" ? 1 : b === "#" ? -1 : a.localeCompare(b)))) creditos[letra] = { arquivo: guardar(`creditos-${letra === "#" ? "outros" : letra.toLowerCase()}`, lista), total: lista.length };

  const grupos = {};
  for (const f of fichas) grupos[f.grupo] = (grupos[f.grupo] ?? 0) + 1;

  const manifesto = {
    pasta: PASTA_PUBLICA,
    total: fichas.length,
    comFoto: fichas.filter((f) => f.imagem).length,
    grupos: Object.fromEntries(Object.entries(grupos).sort(([a], [b]) => a.localeCompare(b))),
    indice: nomeDoIndice,
    partes,
    dias,
    creditos,
  };
  return { arquivos, manifesto };
}
