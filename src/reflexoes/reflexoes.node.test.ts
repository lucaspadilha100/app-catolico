import { describe, expect, it } from "vitest";
import lecionario from "@/liturgia/dados/lecionario.json";
import { leiturasDoDia, type Lecionario } from "@/liturgia/lecionario";
import { diaLiturgico } from "@/liturgia/calendario";
import { dia, somaDias } from "@/liturgia/datas";
import type { ParteDasReflexoes } from "./tipos";

const partes = import.meta.glob<{ default: ParteDasReflexoes }>("./dados/*.ts", { eager: true });
const todas = new Map<string, string>();
for (const [arquivo, m] of Object.entries(partes)) for (const k of Object.keys(m.default.reflexoes)) todas.set(k, arquivo);

const usados = new Map<string, string>();
for (let d = dia(2025, 1, 1); d.getUTCFullYear() < 2037; d = somaDias(d, 1)) {
  for (const diocese of ["", "natal"]) {
    const l = diaLiturgico(d, diocese);
    for (const m of leiturasDoDia(l, lecionario as unknown as Lecionario)) {
      const ev = m.leituras.find((x) => x.tipo === "evangelho" && !x.ou && x.forma !== "breve");
      if (ev?.canonica && !usados.has(ev.canonica)) usados.set(ev.canonica, `${d.toISOString().slice(0, 10)} ${l.titulo}`);
    }
  }
}

const PARTES = ["MAT-1", "MAT-2", "MRK-1", "LUK-1", "LUK-2", "LUK-3", "JHN-1", "JHN-2"];

describe.each(PARTES)("reflexões %s", (parte) => {
  const p = partes[`./dados/${parte}.ts`]?.default;
  it("arquivo existe, marcado para revisão", () => {
    expect(p, `falta src/reflexoes/dados/${parte}.ts`).toBeDefined();
    expect(p?.revisao).toBe("a revisar pelo dono");
  });
  it("textos completos, sem travessão", () => {
    for (const [ref, r] of Object.entries(p?.reflexoes ?? {})) {
      expect(ref.slice(0, 3), ref).toBe(parte.slice(0, 3));
      expect(r.paragrafos.length, ref).toBeGreaterThanOrEqual(2);
      expect(r.paragrafos.length, ref).toBeLessThanOrEqual(4);
      const palavras = r.paragrafos.join(" ").split(/\s+/).length;
      expect(palavras, ref).toBeGreaterThanOrEqual(90);
      expect(palavras, ref).toBeLessThanOrEqual(260);
      for (const t of [...r.paragrafos, r.pergunta]) {
        expect(t.trim(), ref).not.toBe("");
        expect(t, ref).not.toMatch(/[—–]/);
        expect(t, ref).not.toMatch(/ {2}/);
        expect(t, ref).not.toMatch(/\p{Extended_Pictographic}/u);
      }
    }
  });
});

it("todo Evangelho que o app mostra de 2025 a 2036 tem reflexão", () => {
  const faltam = [...usados].filter(([ref]) => !todas.has(ref)).map(([ref, onde]) => `${ref} (${onde})`);
  expect(faltam, faltam.slice(0, 20).join("\n")).toEqual([]);
});

it("nenhuma reflexão sobra sem uso", () => {
  const sobram = [...todas.keys()].filter((ref) => !usados.has(ref));
  expect(sobram).toEqual([]);
});
