import { describe, expect, it } from "vitest";
import { agruparDias, descreverSemanas, emQuanto, hhmm, nomeDosDias, proximasOcorrencias, quandoPorExtenso, telefoneLegivel, textoDaGrade } from "./horarios";
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

describe("grade da paróquia", () => {
  it("junta os dias com os mesmos horários, domingo à parte", () => {
    const lista = [
      h({ dia_semana: 0, hora: "07:00" }),
      h({ dia_semana: 0, hora: "19:00" }),
      ...[1, 2, 3, 4, 5, 6].flatMap((d) => [h({ dia_semana: d, hora: "11:00" }), h({ dia_semana: d, hora: "16:30" })]),
    ];
    expect(agruparDias(lista).map((g) => [g.rotulo, g.horarios.map((x) => hhmm(x.hora)).join(" ")])).toEqual([
      ["Domingo", "7h 19h"],
      ["Segunda a sábado", "11h 16h30"],
    ]);
  });
  it("dias soltos e sequências", () => {
    expect(nomeDosDias([2, 4])).toBe("Terça e quinta");
    expect(nomeDosDias([1, 2, 3, 5])).toBe("Segunda a quarta e sexta");
    expect(nomeDosDias([2, 3])).toBe("Terça e quarta");
    expect(nomeDosDias([6])).toBe("Sábado");
  });
  it("observação diferente separa o grupo", () => {
    const lista = [h({ dia_semana: 2, hora: "17:00" }), h({ dia_semana: 3, hora: "17:00", observacao: "Nas ruas" }), h({ dia_semana: 4, hora: "17:00" })];
    expect(agruparDias(lista).map((g) => g.rotulo)).toEqual(["Terça e quinta", "Quarta"]);
  });
  it("texto para compartilhar", () => {
    const lista = [h({ dia_semana: 0, hora: "10:00" }), h({ dia_semana: 0, hora: "17:00" }), h({ dia_semana: 6, hora: "17:00" }), h({ tipo: "confissao", dia_semana: 2, hora: "15:00", hora_fim: "16:50", observacao: "Por ordem de chegada" })];
    expect(textoDaGrade(lista, { missa: "Missa", confissao: "Confissão", adoracao: "Adoração" })).toBe(
      "Missa\nDomingo: 10h e 17h\nSábado: 17h\n\nConfissão\nTerça: 15h às 16h50. Por ordem de chegada",
    );
  });
  it("telefone e tempo até a missa", () => {
    expect(telefoneLegivel("8432014559")).toBe("(84) 3201-4559");
    expect(telefoneLegivel("84998568056")).toBe("(84) 99856-8056");
    const agora = new Date(2026, 10, 15, 16, 0);
    expect(emQuanto(new Date(2026, 10, 15, 16, 30), agora)).toBe("em 30 min");
    expect(emQuanto(new Date(2026, 10, 15, 17, 10), agora)).toBe("em 1h10");
    expect(emQuanto(new Date(2026, 10, 15, 15, 50), agora)).toBe("começou há 10 min");
    expect(emQuanto(new Date(2026, 10, 15, 21, 0), agora)).toBe("");
  });
});
