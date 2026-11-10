import { beforeEach, describe, expect, it, vi } from "vitest";
import { CHAVE_DO_COFRE, COFRE_VAZIO, abrirCofre, criarCofre, existeCofre, fuiMeConfessar, selar } from "./cofre";

describe("cofre do exame de consciência", () => {
  beforeEach(() => {
    const dados = new Map<string, string>();
    vi.stubGlobal("localStorage", {
      getItem: (k: string) => dados.get(k) ?? null,
      setItem: (k: string, v: string) => void dados.set(k, v),
      removeItem: (k: string) => void dados.delete(k),
    });
  });

  it("guarda embaralhado e só abre com o PIN certo", async () => {
    const c = await criarCofre("4821");
    await selar(c, { ...COFRE_VAZIO, marcados: ["m3-missa"], anotacoes: "segredo da pessoa" });
    const bruto = localStorage.getItem(CHAVE_DO_COFRE)!;
    expect(bruto).not.toContain("segredo");
    expect(bruto).not.toContain("m3-missa");
    expect(existeCofre()).toBe(true);
    expect(await abrirCofre("0000")).toBeNull();
    const aberto = await abrirCofre("4821");
    expect(aberto?.conteudo.marcados).toEqual(["m3-missa"]);
    expect(aberto?.conteudo.anotacoes).toBe("segredo da pessoa");
  });

  it("fui me confessar apaga os pecados marcados e guarda os propósitos e a data", () => {
    const antes = { ...COFRE_VAZIO, marcados: ["a", "b"], anotacoes: "x", propositos: [{ id: "1", texto: "velho", origem: "livre" as const, criadoEm: "2026-01-01", feito: true }] };
    const depois = fuiMeConfessar(antes, "2026-11-10", ["Rezar o terço em família", " "]);
    expect(depois.marcados).toEqual([]);
    expect(depois.anotacoes).toBe("");
    expect(depois.ultimaConfissao).toBe("2026-11-10");
    expect(depois.propositos.map((p) => p.texto)).toEqual(["Rezar o terço em família"]);
  });
});
