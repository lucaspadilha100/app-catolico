import { describe, expect, it } from "vitest";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { santosDaData } from "@/liturgia/santoral";
import { dia, paraIso, somaDias } from "@/liturgia/datas";
import type { ImagemDoSanto, ManifestoDosSantos, Santo } from "./tipos";
import MANIFESTO from "./dados/manifesto.json";
import { NOME_DO_GRUPO, baseDasFotos, buscarSantos, caminhoParaGuardar, fotoDoSanto, fotoGuardada, santosDoNome, urlDaFoto } from "./santos";

type Ficha = Santo & { imagem?: ImagemDoSanto; fontes: string[]; revisao: string };

const RAIZ = join(__dirname, "../..");
const PASTA = join(RAIZ, "fontes/santos/fichas");
const FICHAS: Ficha[] = readdirSync(PASTA)
  .filter((a) => a.endsWith(".json"))
  .map((a) => JSON.parse(readFileSync(join(PASTA, a), "utf8")) as Ficha);
const M = MANIFESTO as ManifestoDosSantos;
const MESES = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];

const datasDoAno = () => {
  const r: string[] = [];
  for (let d = dia(2028, 1, 1); d.getUTCFullYear() === 2028; d = somaDias(d, 1)) r.push(paraIso(d).slice(5).replace("-", ""));
  return r;
};

it("cada ficha tem o nome do arquivo igual ao id", () => {
  for (const a of readdirSync(PASTA).filter((x) => x.endsWith(".json"))) expect(JSON.parse(readFileSync(join(PASTA, a), "utf8")).id, a).toBe(a.replace(".json", ""));
});

describe.each(MESES)("santos do calendário, mês %s", (mes) => {
  const doMes = FICHAS.filter((s) => s.grupo === "calendario" && s.data.startsWith(mes));

  it("toda celebração do calendário do mês tem a sua história", () => {
    for (const mmdd of datasDoAno().filter((d) => d.startsWith(mes))) {
      for (const c of santosDaData(mmdd)) {
        const s = doMes.find((x) => x.data === mmdd && x.nome === c.nome);
        expect(s, `${mmdd} ${c.nome}`).toBeDefined();
        expect(s?.calendario, `${mmdd} ${c.nome}`).toBe(true);
      }
    }
    for (const s of FICHAS.filter((x) => x.calendario && x.data.startsWith(mes)))
      expect(santosDaData(s.data).some((c) => c.nome === s.nome), `${s.id} não está no calendário`).toBe(true);
  });
});

it("fichas marcadas para revisão, com texto limpo", () => {
  for (const s of FICHAS) {
    expect(s.revisao, s.id).toBe("a revisar pelo dono");
    expect(Array.isArray(s.fontes), s.id).toBe(true);
    expect(s.id, s.nome).toMatch(/^[a-z0-9-]+$/);
    expect(s.data, s.id).toMatch(/^(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])$/);
    expect(NOME_DO_GRUPO[s.grupo], s.id).toBeDefined();
    expect(s.resumo.trim(), s.id).not.toBe("");
    expect(s.historia.length, s.id).toBeGreaterThanOrEqual(s.grupo === "mundo" ? 1 : 2);
    expect(s.historia.length, s.id).toBeLessThanOrEqual(5);
    if (s.grupo !== "calendario") {
      expect(s.calendario, s.id).toBe(false);
      expect(s.situacao, s.id).toBeDefined();
    }
    const textos = [s.nome, s.resumo, ...s.historia, ...s.nomes, ...(s.padroeiro ?? []), s.pais ?? ""];
    for (const t of textos) {
      expect(t, s.id).not.toMatch(/[—–]/);
      expect(t, s.id).not.toMatch(/ {2}/);
      expect(t, s.id).not.toMatch(/\p{Extended_Pictographic}/u);
    }
  }
});

it("ids e nomes únicos em todo o acervo", () => {
  const repetidos = (xs: string[]) => xs.filter((x, i) => xs.indexOf(x) !== i);
  expect(repetidos(FICHAS.map((s) => s.id))).toEqual([]);
  expect(repetidos(FICHAS.map((s) => s.nome))).toEqual([]);
});

it("toda foto tem crédito completo", () => {
  for (const s of FICHAS)
    if (s.imagem) {
      for (const c of ["arquivo", "obra", "autor", "licenca", "url"] as const) expect(s.imagem[c], `${s.id} ${c}`).toBeTruthy();
      expect(s.imagem.url, s.id).toMatch(/^https:\/\//);
      if (s.imagem.foco) expect(s.imagem.foco, s.id).toMatch(/^\d+% \d+%$/);
    }
});

it("enquanto as fotos moram no app, toda foto citada está na pasta", () => {
  const env = readFileSync(join(RAIZ, ".env"), "utf8");
  const base = baseDasFotos(/^VITE_IMAGENS_URL=(.*)$/m.exec(env)?.[1]);
  if (!base.startsWith("/")) return;
  for (const s of FICHAS) if (s.imagem) expect(existsSync(join(RAIZ, "public", base, s.imagem.arquivo)), s.imagem.arquivo).toBe(true);
});

it("o manifesto e os arquivos publicados estão em dia com as fichas", () => {
  expect(M.total, "rode npm run gerar:santos").toBe(FICHAS.length);
  const pasta = join(RAIZ, "public", M.pasta);
  const nomes = [M.indice, ...M.partes, ...Object.values(M.dias), ...Object.values(M.creditos).map((c) => c.arquivo)];
  for (const n of nomes) expect(existsSync(join(pasta, n)), n).toBe(true);
  expect(readdirSync(pasta).sort()).toEqual([...nomes].sort());
  const doDia = Object.values(M.dias).flatMap((n) => JSON.parse(readFileSync(join(pasta, n), "utf8")) as Santo[]);
  expect(doDia.map((s) => s.id).sort()).toEqual(FICHAS.map((s) => s.id).sort());
});

describe("fotos", () => {
  const santo = { imagem: { arquivo: "commons/beata-nha-chica.webp" } };

  it("a base vem do ambiente, com a pasta do app como padrão", () => {
    expect(baseDasFotos(undefined)).toBe("/imagens/santos");
    expect(baseDasFotos("")).toBe("/imagens/santos");
    expect(baseDasFotos("https://fotos.exemplo.org/santos/")).toBe("https://fotos.exemplo.org/santos");
  });

  it("um só caminho: base + arquivo", () => {
    expect(urlDaFoto("/imagens/santos", "commons/beata-nha-chica.webp")).toBe("/imagens/santos/commons/beata-nha-chica.webp");
    expect(urlDaFoto("https://fotos.exemplo.org/santos", "sao-jose-1.webp")).toBe("https://fotos.exemplo.org/santos/sao-jose-1.webp");
    expect(urlDaFoto("/f", "commons/são josé.webp")).toBe("/f/commons/s%C3%A3o%20jos%C3%A9.webp");
    expect(fotoDoSanto(santo)).toBe("/imagens/santos/commons/beata-nha-chica.webp");
  });

  it("sem foto, nada de endereço (a tela mostra a moldura)", () => {
    expect(fotoDoSanto({})).toBeNull();
    expect(fotoDoSanto(null)).toBeNull();
    expect(caminhoParaGuardar({})).toBeNull();
  });

  it("caminho guardado num roteiro segue a foto quando ela muda de lugar", () => {
    const guardado = caminhoParaGuardar(santo)!;
    expect(guardado).toBe("/imagens/santos/commons/beata-nha-chica.webp");
    expect(fotoGuardada(guardado, "https://fotos.exemplo.org/santos")).toBe("https://fotos.exemplo.org/santos/commons/beata-nha-chica.webp");
    expect(fotoGuardada("/imagens/devocao/x.webp", "https://fotos.exemplo.org/santos")).toBe("/imagens/devocao/x.webp");
  });
});

describe("busca no índice", () => {
  const pasta = join(RAIZ, "public", M.pasta);
  const indice = JSON.parse(readFileSync(join(pasta, M.indice), "utf8")) as Santo[];

  it("acha pelo nome sem acento e pelo padroado", () => {
    expect(buscarSantos(indice, "nha chica").map((s) => s.id)).toContain("beata-nha-chica");
    expect(buscarSantos(indice, "musicos").map((s) => s.id)).toContain("santa-cecilia");
  });

  it("santos do nome", () => {
    expect(santosDoNome(indice, "Cecília Souza").map((s) => s.id)).toContain("santa-cecilia");
  });
});
