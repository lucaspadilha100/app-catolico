import { beforeEach, describe, expect, it, vi } from "vitest";
import { dia, paraIso, somaDias } from "@/liturgia/datas";
import { DESAFIOS, NOVENAS } from "./catalogo";
import {
  diaDaNovena,
  diaDaSemanaSanta,
  diasDaJanela,
  etapaDaPosicao,
  janelaDoDesafio,
  posicaoNoDesafio,
  proximaNovena,
} from "./calendario";
import { chaveDaNovena, emAndamento } from "./andamento";
import { alternarFeito, diasDeOracaoNaSemana, lerAcompanhamento, registrarOracao } from "./progresso";

const novena = (id: string) => NOVENAS.find((n) => n.id === id)!;
const desafio = (id: string) => DESAFIOS.find((d) => d.id === id)!;
const iso = (d: Date) => paraIso(d);

describe("novenas que começam sozinhas", () => {
  it("Aparecida: de 3 a 11 de outubro", () => {
    const n = novena("aparecida");
    expect(diaDaNovena(n, dia(2026, 10, 2))).toBeNull();
    expect(diaDaNovena(n, dia(2026, 10, 3))).toBe(1);
    expect(diaDaNovena(n, dia(2026, 10, 11))).toBe(9);
    expect(diaDaNovena(n, dia(2026, 10, 12))).toBeNull();
    expect(iso(proximaNovena(n, dia(2026, 10, 13)).inicio)).toBe("2027-10-03");
  });

  it("Natal: de 16 a 24 de dezembro", () => {
    const n = novena("natal");
    expect(diaDaNovena(n, dia(2026, 12, 16))).toBe(1);
    expect(diaDaNovena(n, dia(2026, 12, 24))).toBe(9);
    expect(diaDaNovena(n, dia(2026, 12, 25))).toBeNull();
  });

  it("Trezena de Santo Antônio: de 1º a 13 de junho", () => {
    const n = novena("santo-antonio");
    expect(diaDaNovena(n, dia(2026, 5, 31))).toBeNull();
    expect(diaDaNovena(n, dia(2026, 6, 1))).toBe(1);
    expect(diaDaNovena(n, dia(2026, 6, 13))).toBe(13);
  });

  it("Espírito Santo: da sexta depois da Ascensão ao sábado antes de Pentecostes", () => {
    const n = novena("espirito-santo");
    expect(iso(proximaNovena(n, dia(2026, 1, 1)).inicio)).toBe("2026-05-15");
    expect(iso(proximaNovena(n, dia(2026, 1, 1)).fim)).toBe("2026-05-23");
  });

  it("Divina Misericórdia: da Sexta-feira Santa ao sábado da oitava", () => {
    const n = novena("divina-misericordia");
    expect(iso(proximaNovena(n, dia(2026, 1, 1)).inicio)).toBe("2026-04-03");
    expect(iso(proximaNovena(n, dia(2026, 1, 1)).fim)).toBe("2026-04-11");
    expect(iso(proximaNovena(n, dia(2027, 1, 1)).inicio)).toBe("2027-03-26");
  });

  it("Sagrado Coração: termina na véspera da festa", () => {
    const n = novena("sagrado-coracao");
    expect(iso(proximaNovena(n, dia(2026, 1, 1)).fim)).toBe("2026-06-11");
    expect(iso(proximaNovena(n, dia(2027, 1, 1)).fim)).toBe("2027-06-03");
  });
});

describe("tempos e meses", () => {
  it("Quaresma: da Quarta-feira de Cinzas ao Sábado Santo", () => {
    const j = janelaDoDesafio(desafio("quaresma"), 2026);
    expect(iso(j.inicio)).toBe("2026-02-18");
    expect(iso(j.fim)).toBe("2026-04-04");
    expect(diasDaJanela(j)).toBe(46);
  });

  it.each([2022, 2023, 2024, 2025, 2026, 2027, 2028])("Advento de %i: dia 17 de dezembro cai na etapa 20 e 24 na 27", (ano) => {
    const d = desafio("advento");
    const j = janelaDoDesafio(d, ano);
    const total = diasDaJanela(j);
    expect(total).toBeGreaterThanOrEqual(22);
    expect(total).toBeLessThanOrEqual(28);
    const etapas = Array.from({ length: total }, (_, p) => etapaDaPosicao(d, j, p));
    expect(new Set(etapas).size).toBe(total);
    expect(Math.max(...etapas)).toBe(27);
    expect(etapaDaPosicao(d, j, total - 8)).toBe(20);
    expect(etapas.filter((e) => e < 20).every((e, i) => e === i)).toBe(true);
    expect(etapas.every((e) => e < d.dias)).toBe(true);
  });

  it("meses: do dia 1 ao último dia", () => {
    expect(diasDaJanela(janelaDoDesafio(desafio("maio"), 2026))).toBe(31);
    expect(diasDaJanela(janelaDoDesafio(desafio("junho"), 2026))).toBe(30);
    expect(diasDaJanela(janelaDoDesafio(desafio("novembro"), 2026))).toBe(30);
    for (const x of DESAFIOS) {
      if (typeof x.periodo === "object") expect(diasDaJanela(janelaDoDesafio(x, 2026)), x.id).toBe(x.dias);
    }
  });

  it("posição de hoje", () => {
    expect(posicaoNoDesafio(desafio("novembro"), dia(2026, 11, 10))?.posicao).toBe(9);
    expect(posicaoNoDesafio(desafio("maio"), dia(2026, 11, 10))).toBeNull();
  });

  it("Semana Santa: do Domingo de Ramos ao Domingo de Páscoa", () => {
    expect(diaDaSemanaSanta(dia(2026, 3, 28))).toBeNull();
    expect(diaDaSemanaSanta(dia(2026, 3, 29))).toBe(0);
    expect(diaDaSemanaSanta(dia(2026, 4, 5))).toBe(7);
    expect(diaDaSemanaSanta(dia(2026, 4, 6))).toBeNull();
  });
});

describe("acompanhamento", () => {
  beforeEach(() => {
    const dados = new Map<string, string>();
    vi.stubGlobal("localStorage", {
      getItem: (k: string) => dados.get(k) ?? null,
      setItem: (k: string, v: string) => void dados.set(k, v),
      removeItem: (k: string) => void dados.delete(k),
    });
    vi.stubGlobal("window", new EventTarget());
  });

  it("em outubro, a novena de Aparecida e o mês do Rosário aparecem sozinhos", () => {
    const itens = emAndamento(dia(2026, 10, 5));
    expect(itens.find((i) => i.para === "/rezar/novenas/aparecida")?.detalhe).toBe("3º dia de 9");
    expect(itens.find((i) => i.para === "/rezar/desafios/outubro")?.detalhe).toBe("Dia 5 de 31");
    expect(emAndamento(dia(2026, 10, 3)).find((i) => i.para === "/rezar/novenas/aparecida")?.detalhe).toBe("Começa hoje");
  });

  it("novena começada fora da data segue o próprio início, e some quando termina", () => {
    const n = novena("sao-jose");
    const inicio = dia(2026, 11, 2);
    alternarFeito(chaveDaNovena(n.id), inicio, 1);
    expect(lerAcompanhamento(chaveDaNovena(n.id))?.feitos).toEqual([1]);
    const item = emAndamento(dia(2026, 11, 5)).find((i) => i.para === "/rezar/novenas/sao-jose");
    expect(item).toMatchObject({ detalhe: "4º dia de 9", seguindo: true });
    for (let d = 2; d <= 9; d++) alternarFeito(chaveDaNovena(n.id), inicio, d);
    expect(emAndamento(dia(2026, 11, 10)).find((i) => i.para === "/rezar/novenas/sao-jose")).toBeUndefined();
  });

  it("constância: conta os dias de oração dos últimos 7 dias", () => {
    const d = dia(2026, 11, 10);
    for (const x of [0, 1, 3, 8]) registrarOracao(somaDias(d, -x));
    registrarOracao(d);
    expect(diasDeOracaoNaSemana(d)).toBe(3);
  });
});
