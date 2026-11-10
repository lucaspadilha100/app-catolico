import { describe, expect, it } from "vitest";
import { ORACOES } from "@/oracao/oracoes";
import type { Exame, Guia } from "./tipos";

const mods = import.meta.glob<{ default: unknown }>(["./exame.ts", "./guia-confissao.ts", "./guia-missa.ts"], { eager: true });
const exame = mods["./exame.ts"]?.default as Exame | undefined;
const guias = { confissao: mods["./guia-confissao.ts"]?.default as Guia | undefined, missa: mods["./guia-missa.ts"]?.default as Guia | undefined };

const limpo = (t: string, onde: string) => {
  expect(t.trim(), onde).not.toBe("");
  expect(t, onde).not.toMatch(/[—–]/);
  expect(t, onde).not.toMatch(/ {2}/);
  expect(t, onde).not.toMatch(/\p{Extended_Pictographic}/u);
};

describe("exame de consciência", () => {
  it("existe e está marcado para revisão", () => {
    expect(exame, "falta src/confissao/exame.ts").toBeDefined();
    expect(exame?.revisao).toBe("a revisar pelo dono");
  });

  it("os dez mandamentos, os preceitos da Igreja e os pecados capitais", () => {
    const ids = exame?.secoes.map((s) => s.id) ?? [];
    for (let i = 1; i <= 10; i++) expect(ids, `mandamento ${i}`).toContain(`mandamento-${i}`);
    expect(ids).toContain("preceitos");
    expect(ids).toContain("capitais");
  });

  it("todo ponto tem o número do Catecismo, um estado de vida e texto limpo", () => {
    const vistos = new Set<string>();
    for (const s of exame?.secoes ?? []) {
      limpo(s.titulo, s.id);
      expect(s.cic, s.id).toMatch(/^\d{1,4}(-\d{1,4})?([,;] ?\d{1,4}(-\d{1,4})?)*$/);
      expect(s.itens.length, s.id).toBeGreaterThan(0);
      for (const i of s.itens) {
        expect(vistos.has(i.id), `id repetido ${i.id}`).toBe(false);
        vistos.add(i.id);
        limpo(i.texto, i.id);
        expect(i.cic, i.id).toMatch(/^\d{1,4}(-\d{1,4})?([,;] ?\d{1,4}(-\d{1,4})?)*$/);
        for (const n of i.cic.match(/\d+/g) ?? []) expect(Number(n), i.id).toBeLessThanOrEqual(2865);
        expect(i.estados.length, i.id).toBeGreaterThan(0);
      }
    }
  });

  it("cada estado de vida tem um exame completo", () => {
    for (const e of ["crianca", "jovem", "adulto", "casado"] as const) {
      for (const s of exame?.secoes ?? []) expect(s.itens.some((i) => i.estados.includes(e)), `${e} em ${s.id}`).toBe(true);
    }
  });
});

describe.each(["confissao", "missa"] as const)("guia da %s", (qual) => {
  it("existe, marcado para revisão, com texto limpo", () => {
    const g = guias[qual];
    expect(g, `falta src/confissao/guia-${qual}.ts`).toBeDefined();
    expect(g?.revisao).toBe("a revisar pelo dono");
    expect(g?.passos.length).toBeGreaterThan(3);
    for (const p of g?.passos ?? []) {
      limpo(p.titulo, p.titulo);
      for (const b of p.blocos) {
        if ("rezar" in b) expect(ORACOES[b.rezar], b.rezar).toBeDefined();
        for (const v of Object.values(b)) if (typeof v === "string") limpo(v, p.titulo);
      }
    }
  });
});
