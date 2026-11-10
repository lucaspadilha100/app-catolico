import { describe, expect, it } from "vitest";
import { santosDaData } from "@/liturgia/santoral";
import { dia, paraIso, somaDias } from "@/liturgia/datas";
import type { MesDeSantos } from "./tipos";

const meses = import.meta.glob<{ default: MesDeSantos }>("./dados/*.ts", { eager: true });
const acervo = import.meta.glob<{ default: MesDeSantos }>("./dados/acervo/*.ts", { eager: true });
const MESES = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];

const datasDoAno = () => {
  const r: string[] = [];
  for (let d = dia(2028, 1, 1); d.getUTCFullYear() === 2028; d = somaDias(d, 1)) r.push(paraIso(d).slice(5).replace("-", ""));
  return r;
};

describe.each(MESES)("santos do mês %s", (mes) => {
  const m = meses[`./dados/${mes}.ts`]?.default;

  it("arquivo existe e está marcado para revisão", () => {
    expect(m, `falta src/santos/dados/${mes}.ts`).toBeDefined();
    expect(m?.revisao).toBe("a revisar pelo dono");
  });

  it("toda celebração do calendário do mês tem a sua história", () => {
    if (!m) return;
    for (const mmdd of datasDoAno().filter((d) => d.startsWith(mes))) {
      for (const c of santosDaData(mmdd)) {
        const s = m.santos.find((x) => x.data === mmdd && x.nome === c.nome);
        expect(s, `${mmdd} ${c.nome}`).toBeDefined();
        expect(s?.calendario, `${mmdd} ${c.nome}`).toBe(true);
      }
    }
    for (const s of m.santos.filter((x) => x.calendario))
      expect(santosDaData(s.data).some((c) => c.nome === s.nome), `${s.id} não está no calendário`).toBe(true);
  });

  it("textos completos, sem travessão", () => {
    if (!m) return;
    for (const s of m.santos) {
      expect(s.id, s.nome).toMatch(/^[a-z0-9-]+$/);
      expect(s.data.startsWith(mes), s.id).toBe(true);
      expect(s.resumo.trim(), s.id).not.toBe("");
      expect(s.historia.length, s.id).toBeGreaterThanOrEqual(2);
      expect(s.historia.length, s.id).toBeLessThanOrEqual(5);
      const textos = [s.nome, s.resumo, ...s.historia, ...s.nomes, ...(s.padroeiro ?? []), s.imagem?.titulo ?? ""];
      for (const t of textos) {
        expect(t, s.id).not.toMatch(/[—–]/);
        expect(t, s.id).not.toMatch(/ {2}/);
        expect(t, s.id).not.toMatch(/\p{Extended_Pictographic}/u);
      }
      if (s.imagem) expect(s.imagem.artic, s.id).toBeGreaterThan(0);
    }
  });
});

it("ids e nomes únicos em todo o acervo", () => {
  const todos = [...Object.values(meses), ...Object.values(acervo)].flatMap((m) => m.default.santos);
  const repetidos = (xs: string[]) => xs.filter((x, i) => xs.indexOf(x) !== i);
  expect(repetidos(todos.map((s) => s.id))).toEqual([]);
  expect(repetidos(todos.map((s) => s.nome))).toEqual([]);
});

describe.each(Object.keys(acervo))("acervo %s", (arquivo) => {
  const a = acervo[arquivo]!.default;
  it("marcado para revisão, fora do calendário, com situação e texto limpo", () => {
    expect(a.revisao).toBe("a revisar pelo dono");
    for (const s of a.santos) {
      expect(s.calendario, s.id).toBe(false);
      expect(s.situacao, s.id).toBeDefined();
      expect(s.id, s.nome).toMatch(/^[a-z0-9-]+$/);
      expect(s.data, s.id).toMatch(/^(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])$/);
      expect(s.resumo.trim(), s.id).not.toBe("");
      expect(s.historia.length, s.id).toBeGreaterThanOrEqual(2);
      expect(s.historia.length, s.id).toBeLessThanOrEqual(5);
      for (const t of [s.nome, s.resumo, ...s.historia, ...s.nomes, ...(s.padroeiro ?? []), s.pais ?? "", s.imagem?.titulo ?? ""]) {
        expect(t, s.id).not.toMatch(/[—–]/);
        expect(t, s.id).not.toMatch(/ {2}/);
      }
    }
  });
});

it("toda imagem citada foi baixada para public/imagens/santos", async () => {
  const { existsSync } = await import("node:fs");
  const { join } = await import("node:path");
  for (const m of [...Object.values(meses), ...Object.values(acervo)])
    for (const s of m.default.santos)
      if (s.imagem) expect(existsSync(join(__dirname, "../../public/imagens/santos", `${s.id}-${s.imagem.artic}.webp`)), s.id).toBe(true);
});
