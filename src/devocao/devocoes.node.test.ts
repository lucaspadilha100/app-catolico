import { readFileSync } from "node:fs";
import { join } from "node:path";
import { beforeAll, describe, expect, it, vi } from "vitest";
import { intervalosDaReferencia, textoDaReferencia } from "@/biblia/texto";
import { livroPorCodigo } from "@/biblia/livros";
import { ORACOES, todosOsTextos, type Linha } from "@/oracao/oracoes";
import { MAIS_ORACOES } from "@/oracao/oracoes-devocoes";
import { CURSOS, DESAFIOS, NOVENAS } from "./catalogo";
import type { Bloco, Etapa } from "./tipos";

const raiz = join(__dirname, "../..");

beforeAll(() => {
  vi.stubGlobal("fetch", async (url: string) => ({
    ok: true,
    json: async () => JSON.parse(readFileSync(join(raiz, "public", url), "utf8")),
  }));
});

const novenas = import.meta.glob<{ default: import("./tipos").ConteudoDaNovena }>("./novenas/*.ts", { eager: true });
const desafios = import.meta.glob<{ default: import("./tipos").ConteudoDoDesafio }>("./desafios/*.ts", { eager: true });
const cursos = import.meta.glob<{ default: import("./tipos").ConteudoDoDesafio }>("./cursos/*.ts", { eager: true });
const avulsos = import.meta.glob<{ default: unknown }>(["./consagracao.ts", "./via-sacra.ts", "./semana-santa.ts", "./oficio.ts"], {
  eager: true,
});

const ROTAS = [
  /^liturgia$/,
  /^\/rezar\/(terco|misericordia|sao-miguel|via-sacra|oficio|semana-santa|consagracao|ladainhas|novenas|desafios)$/,
  /^\/rezar\/oracoes\/[a-z0-9-]+$/,
  /^\/rezar\/novenas\/[a-z0-9-]+$/,
  /^\/rezar\/desafios\/[a-z0-9-]+$/,
  /^\/rezar\/(exame|confissao|missa)$/,
  /^\/cursos\/[a-z0-9-]+$/,
  /^\/biblia\/[1-3]?[A-Z]{2,3}\/\d+$/,
];

const textoDaLinha = (l: Linha): string[] =>
  typeof l === "string" ? [l] : "v" in l ? [l.v, l.r] : "invocacoes" in l ? [...l.invocacoes, l.resposta] : [];

function textosDoBloco(b: Bloco): string[] {
  if ("linhas" in b) return [...(b.titulo ? [b.titulo] : []), ...b.linhas.flatMap(textoDaLinha)];
  if ("leitura" in b) return b.titulo ? [b.titulo] : [];
  if ("ir" in b) return [b.rotulo];
  if ("titulo" in b) return [b.titulo];
  for (const chave of ["texto", "antifona", "rubrica", "pratica"] as const) if (chave in b) return [(b as Record<string, string>)[chave]!];
  return [];
}

const leituras = new Map<string, { inicio?: string; fim?: string }>();

function conferirBlocos(onde: string, blocos: Bloco[], { noturno = false } = {}) {
  for (const b of blocos) {
    const chaves = Object.keys(b);
    if ("leitura" in b) leituras.set(`${b.leitura}|${b.inicio ?? ""}|${b.fim ?? ""}`, { inicio: b.inicio, fim: b.fim });
    else if ("rezar" in b) expect(ORACOES[b.rezar], `${onde}: oração ${b.rezar}`).toBeDefined();
    else if ("linhas" in b) {
      expect(b.linhas.length, onde).toBeGreaterThan(0);
      for (const l of b.linhas) if (typeof l !== "string" && "rezar" in l) expect(ORACOES[l.rezar], `${onde}: ${l.rezar}`).toBeDefined();
    } else if ("ir" in b) {
      expect(ROTAS.some((r) => r.test(b.ir)), `${onde}: rota ${b.ir}`).toBe(true);
      const [, tipo, id] = /^\/rezar\/(oracoes|novenas|desafios)\/(.+)$/.exec(b.ir) ?? [];
      if (tipo === "oracoes") expect(ORACOES[id!], `${onde}: ${b.ir}`).toBeDefined();
      if (tipo === "novenas") expect(NOVENAS.some((n) => n.id === id), `${onde}: ${b.ir}`).toBe(true);
      if (tipo === "desafios") expect(DESAFIOS.some((d) => d.id === id), `${onde}: ${b.ir}`).toBe(true);
    }
    else if ("noturno" in b) expect(noturno, `${onde}: noturno fora das Matinas`).toBe(true);
    else expect(chaves.length, `${onde}: ${JSON.stringify(b)}`).toBe(1);
    for (const t of textosDoBloco(b)) {
      expect(t.trim(), `${onde}: texto vazio`).not.toBe("");
      expect(t, `${onde}: travessão`).not.toMatch(/[—–]/);
      expect(t, `${onde}: emoji`).not.toMatch(/\p{Extended_Pictographic}/u);
      expect(t, `${onde}: espaço duplo`).not.toMatch(/ {2}/);
    }
  }
}

const conferirEtapas = (onde: string, etapas: Etapa[]) =>
  etapas.forEach((e, i) => {
    expect(e.titulo.trim(), `${onde} etapa ${i + 1}`).not.toBe("");
    expect(e.titulo, `${onde} etapa ${i + 1}`).not.toMatch(/[—–]/);
    expect(e.blocos.length, `${onde} etapa ${i + 1}`).toBeGreaterThan(0);
    conferirBlocos(`${onde} etapa ${i + 1}`, e.blocos);
  });

describe("novenas", () => {
  it.each(NOVENAS.map((n) => [n.id, n] as const))("%s", (id, n) => {
    const c = novenas[`./novenas/${id}.ts`]?.default;
    expect(c, `falta src/devocao/novenas/${id}.ts`).toBeDefined();
    if (!c) return;
    expect(c.revisao).toBe("a revisar pelo dono");
    expect(c.etapas).toHaveLength(n.dias);
    conferirBlocos(`${id} antes`, c.antes);
    conferirBlocos(`${id} depois`, c.depois);
    conferirEtapas(id, c.etapas);
  });

  it("não há arquivo de novena fora do catálogo", () => {
    for (const arquivo of Object.keys(novenas)) expect(NOVENAS.map((n) => `./novenas/${n.id}.ts`)).toContain(arquivo);
  });
});

describe("desafios", () => {
  it.each(DESAFIOS.map((d) => [d.id, d] as const))("%s", (id, d) => {
    const c = desafios[`./desafios/${id}.ts`]?.default;
    expect(c, `falta src/devocao/desafios/${id}.ts`).toBeDefined();
    if (!c) return;
    expect(c.revisao).toBe("a revisar pelo dono");
    expect(c.etapas).toHaveLength(d.dias);
    conferirEtapas(id, c.etapas);
  });
});

describe("cursos", () => {
  it.each(CURSOS.map((c) => [c.id, c] as const))("%s", (id, curso) => {
    const c = cursos[`./cursos/${id}.ts`]?.default;
    expect(c, `falta src/devocao/cursos/${id}.ts`).toBeDefined();
    if (!c) return;
    expect(c.revisao).toBe("a revisar pelo dono");
    expect(c.etapas).toHaveLength(curso.licoes);
    conferirEtapas(id, c.etapas);
  });

  it("não há arquivo de curso fora do catálogo", () => {
    for (const arquivo of Object.keys(cursos)) expect(CURSOS.map((c) => `./cursos/${c.id}.ts`)).toContain(arquivo);
  });
});

describe("consagração, Via-Sacra, Semana Santa e Ofício", () => {
  it("consagração: 33 dias, períodos cobrindo do 1º ao 33º, e o dia do ato", () => {
    const c = avulsos["./consagracao.ts"]?.default as import("./tipos").ConteudoDaConsagracao | undefined;
    expect(c, "falta src/devocao/consagracao.ts").toBeDefined();
    if (!c) return;
    expect(c.revisao).toBe("a revisar pelo dono");
    expect(c.etapas).toHaveLength(33);
    let proximo = 1;
    for (const p of c.periodos) {
      expect(p.de, p.nome).toBe(proximo);
      expect(p.ate, p.nome).toBeGreaterThanOrEqual(p.de);
      proximo = p.ate + 1;
      conferirBlocos(p.nome, p.oracoes);
    }
    expect(proximo).toBe(34);
    conferirEtapas("consagração", [...c.etapas, c.ato]);
  });

  it("Via-Sacra: 14 estações", () => {
    const c = avulsos["./via-sacra.ts"]?.default as import("./tipos").ConteudoDoRoteiro | undefined;
    expect(c, "falta src/devocao/via-sacra.ts").toBeDefined();
    if (!c) return;
    expect(c.revisao).toBe("a revisar pelo dono");
    expect(c.passos).toHaveLength(14);
    for (const [nome, blocos] of [["antes", c.antes], ["início", c.inicioDoPasso], ["fim", c.fimDoPasso], ["depois", c.depois]] as const)
      conferirBlocos(`via-sacra ${nome}`, blocos);
    conferirEtapas("via-sacra", c.passos);
  });

  it("Semana Santa: do Domingo de Ramos ao Domingo de Páscoa", () => {
    const c = avulsos["./semana-santa.ts"]?.default as import("./tipos").ConteudoDoDesafio | undefined;
    expect(c, "falta src/devocao/semana-santa.ts").toBeDefined();
    if (!c) return;
    expect(c.revisao).toBe("a revisar pelo dono");
    expect(c.etapas).toHaveLength(8);
    conferirEtapas("semana-santa", c.etapas);
  });

  it("Pequeno Ofício: as oito horas e os três noturnos", () => {
    const c = avulsos["./oficio.ts"]?.default as import("./tipos").ConteudoDoOficio | undefined;
    expect(c, "falta src/devocao/oficio.ts").toBeDefined();
    if (!c) return;
    expect(c.revisao).toBe("a revisar pelo dono");
    expect(c.horas.map((h) => h.id)).toEqual(["matinas", "laudes", "prima", "terca", "sexta", "noa", "vesperas", "completas"]);
    for (const h of c.horas) conferirBlocos(h.id, h.blocos, { noturno: h.id === "matinas" });
    expect(c.horas[0]!.blocos.some((b) => "noturno" in b)).toBe(true);
    c.noturnos.forEach((n, i) => {
      expect(n.length, `noturno ${i + 1}`).toBeGreaterThan(0);
      conferirBlocos(`noturno ${i + 1}`, n);
    });
  });
});

describe("orações novas", () => {
  it("têm português e latim, sem travessão", () => {
    for (const o of MAIS_ORACOES) {
      expect(o.pt.length, o.id).toBeGreaterThan(0);
      if (!o.semLatim) expect(o.la?.length, `${o.id} em latim`).toBeGreaterThan(0);
      for (const t of todosOsTextos(o)) expect(t, o.id).not.toMatch(/[—–]/);
    }
  });

  it("ladainhas novas têm o mesmo número de invocações nas duas línguas", () => {
    const contar = (ls: Linha[] = []) => ls.reduce((s, l) => s + (typeof l !== "string" && "invocacoes" in l ? l.invocacoes.length : 1), 0);
    for (const o of MAIS_ORACOES.filter((x) => x.grupo === "ladainhas")) expect(contar(o.la), o.id).toBe(contar(o.pt));
  });
});

describe("leituras", () => {
  it("toda leitura citada existe e tem texto", async () => {
    for (const [chave, { inicio, fim }] of leituras) {
      const referencia = chave.split("|")[0]!;
      const intervalos = intervalosDaReferencia(referencia);
      expect(intervalos.length, referencia).toBeGreaterThan(0);
      let esperados = 0;
      for (const { livro, de, ate } of intervalos) {
        expect(livroPorCodigo(livro), referencia).toBeDefined();
        if (de[0] === ate[0]) esperados += ate[1] - de[1] + 1;
      }
      const versiculos = (await textoDaReferencia(referencia)).flatMap((t) => t.versiculos);
      expect(versiculos.length, referencia).toBeGreaterThan(0);
      if (intervalos.every((i) => i.de[0] === i.ate[0])) expect(versiculos.length, referencia).toBe(esperados);
      for (const v of versiculos) expect(v.texto.trim(), referencia).not.toBe("");
      if (inicio) expect(versiculos[0]!.texto, `${referencia}: início "${inicio}"`).toContain(inicio);
      if (fim) expect(versiculos.at(-1)!.texto, `${referencia}: fim "${fim}"`).toContain(fim);
    }
  });
});
