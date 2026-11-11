import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import estado from "@/biblia/dados/estado.json";
import { OCASIOES, dataPorExtenso, horaPorExtenso, linhasDoSantinho } from "./modelos";

const raiz = join(__dirname, "../..");
const ARQUIVOS = estado as Record<string, { arquivo: string }>;
const semAspas = (s: string) => s.replace(/[“”‘’"]/g, "").toLowerCase();

describe("santinhos", () => {
  it("cada frase sai da Bíblia do app, sem mudar palavra", () => {
    for (const m of Object.values(OCASIOES)) {
      if (!m.frase) continue;
      const livro = JSON.parse(readFileSync(join(raiz, "public/biblia/f1", ARQUIVOS[m.frase.livro]!.arquivo), "utf8")) as { capitulos: string[][] };
      const capitulo = semAspas(livro.capitulos[m.frase.capitulo - 1]!.join(" "));
      for (const t of m.frase.trechos) expect(capitulo, m.frase.referencia).toContain(semAspas(t));
      for (const t of m.frase.trechos) expect(semAspas(m.frase.texto)).toContain(semAspas(t).replace(/\.$/, ""));
    }
  });

  it("escreve datas e horas por extenso", () => {
    expect(dataPorExtenso("2026-12-13", true)).toBe("Domingo, 13 de dezembro de 2026");
    expect(dataPorExtenso("2027-01-01")).toBe("1º de janeiro de 2027");
    expect(horaPorExtenso("16:00")).toBe("16h");
    expect(horaPorExtenso("09:30")).toBe("9h30");
  });

  it("monta o convite e a lembrança", () => {
    const base = { ocasiao: "batismo" as const, moldura: "simples" as const, nome: " Maria Clara ", data: "2026-12-13", hora: "16:00", local: "Paróquia de São José", frase: "x", referencia: "y", pintura: null, creditoDaPintura: "" };
    expect(linhasDoSantinho({ ...base, formato: "convite" })).toMatchObject({ titulo: "Convite", convite: "para o Batismo de", nome: "Maria Clara", quando: "Domingo, 13 de dezembro de 2026, às 16h" });
    expect(linhasDoSantinho({ ...base, formato: "lembranca" })).toMatchObject({ titulo: "Lembrança do Batismo", convite: "", quando: "13 de dezembro de 2026" });
  });
});
