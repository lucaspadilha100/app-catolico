import { describe, expect, it } from "vitest";
import { descreverSemanas, hhmm, proximasOcorrencias, quandoPorExtenso } from "./horarios";
import type { Horario } from "./tipos";

const h = (p: Partial<Horario>): Horario => ({
  id: Math.random().toString(),
  paroquia_id: "p",
  tipo: "missa",
  dia_semana: null,
  semanas: null,
  data: null,
  hora: "08:00",
  hora_fim: null,
  cancelado: false,
  observacao: "",
  ...p,
});

describe("próximos horários (mesma regra do banco)", () => {
  const domingo = new Date(2026, 10, 15, 7, 30);
  it("semanal, a partir de agora", () => {
    const r = proximasOcorrencias([h({ dia_semana: 0, hora: "08:00" }), h({ dia_semana: 0, hora: "06:00" }), h({ dia_semana: 1, hora: "07:00" })], domingo, 1);
    expect(r.map((o) => quandoPorExtenso(o.quando, domingo))).toEqual(["Hoje, 8h", "Amanhã, 7h"]);
  });
  it("exceção de data troca os horários do dia; cancelado tira", () => {
    const lista = [h({ dia_semana: 0, hora: "08:00" }), h({ data: "2026-11-15", hora: "17:00" }), h({ dia_semana: 1, hora: "07:00" }), h({ data: "2026-11-16", hora: "00:00", cancelado: true })];
    expect(proximasOcorrencias(lista, domingo, 1).map((o) => o.quando.getHours())).toEqual([17]);
  });
  it("só em certas semanas do mês", () => {
    const lista = [h({ dia_semana: 0, hora: "10:00", semanas: [1] })];
    expect(proximasOcorrencias(lista, new Date(2026, 10, 1, 6, 0), 0)).toHaveLength(1);
    expect(proximasOcorrencias(lista, domingo, 0)).toHaveLength(0);
  });
  it("só no último domingo do mês", () => {
    const lista = [h({ dia_semana: 0, hora: "10:00", semanas: [6] })];
    expect(proximasOcorrencias(lista, new Date(2026, 10, 29, 6, 0), 0)).toHaveLength(1);
    expect(proximasOcorrencias(lista, new Date(2026, 10, 22, 6, 0), 0)).toHaveLength(0);
    expect(descreverSemanas([6])).toBe("último do mês");
  });

  it("confissão com fim ainda aparece enquanto não acabou", () => {
    const lista = [h({ tipo: "confissao", dia_semana: 0, hora: "07:00", hora_fim: "09:00" })];
    expect(proximasOcorrencias(lista, domingo, 0)).toHaveLength(1);
  });
  it("textos", () => {
    expect(hhmm("19:00")).toBe("19h");
    expect(hhmm("18:30")).toBe("18h30");
    expect(descreverSemanas([1, 3])).toBe("1º e 3º do mês");
  });
});
