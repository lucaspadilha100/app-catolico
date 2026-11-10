import { describe, expect, it } from "vitest";
import { dia, paraIso } from "@/liturgia/datas";
import { aniversarioDeBatismo, proximaLembranca } from "./lembrancas";

const f = (data: string) => ({ id: "1", nome: "Maria", data });

describe("lembranças dos falecidos", () => {
  it("7º dia contando o dia da morte, depois o 30º, depois o aniversário", () => {
    expect(paraIso(proximaLembranca(f("2026-11-02"), dia(2026, 11, 3))!.data)).toBe("2026-11-08");
    expect(proximaLembranca(f("2026-11-02"), dia(2026, 11, 9))).toMatchObject({ tipo: "trigesimo" });
    expect(paraIso(proximaLembranca(f("2026-11-02"), dia(2026, 11, 9))!.data)).toBe("2026-12-01");
    expect(proximaLembranca(f("2026-11-02"), dia(2026, 12, 2))).toMatchObject({ tipo: "aniversario", anos: 1 });
    expect(proximaLembranca(f("2020-03-15"), dia(2026, 11, 10))).toMatchObject({ tipo: "aniversario", anos: 7 });
  });

  it("29 de fevereiro vira 28 nos anos comuns", () => {
    expect(paraIso(proximaLembranca(f("2024-02-29"), dia(2026, 1, 1))!.data)).toBe("2026-02-28");
  });

  it("aniversário de batismo", () => {
    expect(aniversarioDeBatismo("1990-11-10", dia(2026, 11, 10))).toBe(36);
    expect(aniversarioDeBatismo("1990-11-10", dia(2026, 11, 11))).toBeNull();
  });
});
