import { readFileSync } from "node:fs";
import { join } from "node:path";
import { beforeAll, describe, expect, it, vi } from "vitest";
import { intervalosDaReferencia, textoDaReferencia } from "@/biblia/texto";
import { livroPorCodigo } from "@/biblia/livros";
import { MISTERIOS, type GrupoDeMisterios } from "@/liturgia/terco";
import { ORACOES, ORACOES_DA_LISTA, buscarOracoes, oracoesDoTempo, todosOsTextos, type Linha } from "./oracoes";
import { MEDITACOES, contarOracoes, passosDaMisericordia, passosDeSaoMiguel, passosDoRosario } from "./terco";

const raiz = join(__dirname, "../..");
const GRUPOS: GrupoDeMisterios[] = ["gozosos", "luminosos", "dolorosos", "gloriosos"];

beforeAll(() => {
  vi.stubGlobal("fetch", async (url: string) => ({
    ok: true,
    json: async () => JSON.parse(readFileSync(join(raiz, "public", url), "utf8")),
  }));
});

const temTexto = (linhas: Linha[] | undefined) => !!linhas?.length && linhas.every((l) => typeof l !== "string" || l.trim());

describe("orações", () => {
  it("toda oração da lista tem português e latim", () => {
    for (const o of ORACOES_DA_LISTA) {
      expect(temTexto(o.pt), `${o.id} em português`).toBe(true);
      expect(temTexto(o.la), `${o.id} em latim`).toBe(true);
      expect(o.latim, `${o.id} nome latino`).not.toBe("");
    }
  });

  it("as orações pedidas estão todas na lista", () => {
    const ids = ORACOES_DA_LISTA.map((o) => o.id);
    for (const id of [
      "sinal-da-cruz", "pai-nosso", "ave-maria", "gloria", "creio", "salve-rainha", "ato-de-contricao", "santo-anjo",
      "vinde-espirito-santo", "lembrai-vos", "sub-tuum", "angelus", "regina-caeli", "manha", "noite",
      "antes-das-refeicoes", "depois-das-refeicoes", "comunhao-espiritual", "pelos-falecidos",
      "ladainha-de-nossa-senhora", "ladainha-do-sagrado-coracao", "ladainha-de-sao-jose",
    ]) {
      expect(ids).toContain(id);
    }
  });

  it("toda referência a outra oração existe", () => {
    for (const o of Object.values(ORACOES)) {
      for (const l of [...o.pt, ...(o.la ?? [])]) {
        if (typeof l !== "string" && "rezar" in l) expect(ORACOES[l.rezar], `${o.id} → ${l.rezar}`).toBeDefined();
      }
    }
  });

  it("ladainhas têm o mesmo número de invocações em português e latim", () => {
    for (const o of ORACOES_DA_LISTA.filter((x) => x.grupo === "ladainhas")) {
      const contar = (ls: Linha[] = []) =>
        ls.reduce((s, l) => s + (typeof l !== "string" && "invocacoes" in l ? l.invocacoes.length : 1), 0);
      expect(contar(o.la), o.id).toBe(contar(o.pt));
    }
  });

  it("no Tempo Pascal o Ângelus dá lugar à Rainha do Céu", () => {
    expect(oracoesDoTempo("pascoa").map((o) => o.id)).not.toContain("angelus");
    expect(oracoesDoTempo("pascoa").map((o) => o.id)).toContain("regina-caeli");
    expect(oracoesDoTempo("comum").map((o) => o.id)).toContain("angelus");
  });

  it("busca sem acento, pelo nome em português ou em latim", () => {
    expect(buscarOracoes(ORACOES_DA_LISTA, "angelus")[0]?.id).toBe("angelus");
    expect(buscarOracoes(ORACOES_DA_LISTA, "memorare")[0]?.id).toBe("lembrai-vos");
    expect(buscarOracoes(ORACOES_DA_LISTA, "contricao")[0]?.id).toBe("ato-de-contricao");
    expect(buscarOracoes(ORACOES_DA_LISTA, "sao jose")[0]?.id).toBe("ladainha-de-sao-jose");
  });
});

describe("mistérios", () => {
  it.each(GRUPOS)("os mistérios %s têm referência válida e meditação curta", async (grupo) => {
    expect(MEDITACOES.misterios[grupo]).toHaveLength(MISTERIOS[grupo].misterios.length);
    for (const { referencia, texto } of MEDITACOES.misterios[grupo]) {
      const intervalos = intervalosDaReferencia(referencia);
      expect(intervalos.length, referencia).toBeGreaterThan(0);
      let esperados = 0;
      for (const { livro, de, ate } of intervalos) {
        expect(livroPorCodigo(livro), referencia).toBeDefined();
        expect(de[0], referencia).toBe(ate[0]);
        esperados += ate[1] - de[1] + 1;
      }
      const trechos = await textoDaReferencia(referencia);
      const versiculos = trechos.flatMap((t) => t.versiculos);
      expect(versiculos.length, referencia).toBe(esperados);
      for (const v of versiculos) expect(v.texto.trim(), referencia).not.toBe("");

      const frases = texto.split(/(?<=[.!?])\s+/).filter(Boolean);
      expect(frases.length, texto).toBeGreaterThanOrEqual(2);
      expect(frases.length, texto).toBeLessThanOrEqual(4);
    }
  });

  it("as meditações estão marcadas para a revisão do dono", () => {
    expect(MEDITACOES.revisao).toBe("a revisar pelo dono");
  });
});

describe("passo a passo", () => {
  it.each(GRUPOS)("terço dos mistérios %s: 1 Creio, 6 Pai-Nossos, 53 Ave-Marias, 6 Glórias", (grupo) => {
    const passos = passosDoRosario(grupo);
    const c = contarOracoes(passos);
    expect(c["creio"]).toBe(1);
    expect(c["pai-nosso"]).toBe(6);
    expect(c["ave-maria"]).toBe(53);
    expect(c["gloria"]).toBe(6);
    expect(c["fatima"]).toBe(5);
    expect(c["salve-rainha"]).toBe(1);
    expect(passos.filter((p) => p.misterio)).toHaveLength(5);
    expect(passos.filter((p) => p.contas === 10)).toHaveLength(5);
  });

  it("terço da Misericórdia: 5 Eterno Pai, 50 Pela sua dolorosa Paixão, 3 Deus Santo", () => {
    const c = contarOracoes(passosDaMisericordia());
    expect(c["pai-nosso"]).toBe(1);
    expect(c["ave-maria"]).toBe(1);
    expect(c["creio"]).toBe(1);
    expect(c["eterno-pai"]).toBe(5);
    expect(c["dolorosa-paixao"]).toBe(50);
    expect(c["deus-santo"]).toBe(3);
  });

  it("terço de São Miguel: 9 saudações, 13 Pai-Nossos, 27 Ave-Marias", () => {
    const passos = passosDeSaoMiguel();
    const c = contarOracoes(passos);
    for (let i = 1; i <= 9; i++) expect(c[`saudacao-${i}`]).toBe(1);
    expect(c["pai-nosso"]).toBe(13);
    expect(c["ave-maria"]).toBe(27);
    expect(c["gloria"]).toBe(1);
  });

  it("todo passo aponta para uma oração que existe e tem chave única", () => {
    for (const passos of [...GRUPOS.map(passosDoRosario), passosDaMisericordia(), passosDeSaoMiguel()]) {
      expect(new Set(passos.map((p) => p.chave)).size).toBe(passos.length);
      for (const p of passos) {
        if (p.oracao) expect(ORACOES[p.oracao], p.chave).toBeDefined();
        else expect(p.misterio, p.chave).toBeDefined();
        if (p.rotulos) expect(p.rotulos).toHaveLength(p.contas ?? 1);
      }
    }
  });
});

describe("acabamento do texto", () => {
  it("nenhum texto tem travessão", () => {
    const textos = [
      ...Object.values(ORACOES).flatMap(todosOsTextos),
      ...GRUPOS.flatMap((g) => MEDITACOES.misterios[g].map((m) => m.texto)),
      ...[...GRUPOS.map(passosDoRosario), passosDaMisericordia(), passosDeSaoMiguel()].flat().flatMap((p) => [p.titulo, p.secao, ...(p.rotulos ?? [])]),
    ];
    for (const t of textos) expect(t, t).not.toMatch(/[—–]/);
  });
});
