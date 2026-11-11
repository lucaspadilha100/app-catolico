import { describe, expect, it } from "vitest";
import { eventoDaAgenda, horariosDaCorrente } from "./api";

describe("relógio de oração", () => {
  it("divide o tempo em horários", () => {
    const h = horariosDaCorrente({ inicio: "2026-11-20T12:00:00Z", horas: 2, intervalo: 30 });
    expect(h.map((d) => d.toISOString())).toEqual(["2026-11-20T12:00:00.000Z", "2026-11-20T12:30:00.000Z", "2026-11-20T13:00:00.000Z", "2026-11-20T13:30:00.000Z"]);
  });

  it("gera o evento da agenda com aviso 10 minutos antes", () => {
    const e = eventoDaAgenda({ titulo: "Pela saúde de Maria", inicio: new Date("2026-11-20T12:00:00Z"), minutos: 60, link: "https://x/c/abc" });
    expect(e).toContain("DTSTART:20261120T120000Z");
    expect(e).toContain("DTEND:20261120T130000Z");
    expect(e).toContain("TRIGGER:-PT10M");
    expect(e).toContain("SUMMARY:Oração: Pela saúde de Maria");
  });
});
