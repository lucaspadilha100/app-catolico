import { describe, expect, it } from "vitest";
import dados from "./dados/lecionario.json";
import { dia, deIso, somaDias, diaDaSemana, paraIso } from "./datas";
import { diaLiturgico } from "./calendario";
import { formatarReferencia, leiturasDoDia, type Lecionario } from "./lecionario";

const lecionario = dados as unknown as Lecionario;
const leituras = (iso: string) => leiturasDoDia(diaLiturgico(deIso(iso)!), lecionario);
const refs = (iso: string, missa = 0) =>
  leituras(iso)[missa]!.leituras.map((l) => `${l.tipo}${l.forma ? `(${l.forma})` : ""}${l.ou ? "(ou)" : ""}: ${l.referencia}`);

describe("formato das referências", () => {
  it("padrão do lecionário brasileiro", () => {
    const sv = lecionario.salmoVulgata;
    expect(formatarReferencia("ISA 2:1-5", sv)).toBe("Is 2,1-5");
    expect(formatarReferencia("PSA 80:2ac.3b.15-16.18-19", sv)).toBe("Sl 79(80),2ac.3b.15-16.18-19");
    expect(formatarReferencia("PSA 23:1-3a.3b-4.5.6", sv)).toBe("Sl 22(23),1-3a.3b-4.5.6");
    expect(formatarReferencia("PSA 8:4-5", sv)).toBe("Sl 8,4-5");
    expect(formatarReferencia("ISA 63:16b-17;ISA 63:19;64:2b-7", sv)).toBe("Is 63,16b-17.19; 64,2b-7");
    expect(formatarReferencia("1TH 3:12-4:2", sv)).toBe("1Ts 3,12-4,2");
    expect(formatarReferencia("cf. LUK 2:19", sv)).toBe("cf. Lc 2,19");
    expect(formatarReferencia("JHN 1:7;LUK 1:17", sv)).toBe("Jo 1,7; Lc 1,17");
  });
});

describe("leituras de dias conhecidos", () => {
  it("1º Domingo do Advento, Ano B", () => {
    expect(refs("2026-11-29")).toEqual([
      "primeira: Is 63,16b-17.19; 64,2b-7",
      "salmo: Sl 79(80),2ac.3b.15-16.18-19",
      "segunda: 1Cor 1,3-9",
      "aclamacao: Sl 84(85),8",
      "evangelho: Mc 13,33-37",
    ]);
  });

  it("dia de semana do Tempo Comum, ano par", () => {
    expect(refs("2026-11-10")).toContain("evangelho: Lc 17,7-10");
    expect(refs("2026-11-10")[0]).toBe("primeira: Tt 2,1-8.11-14");
  });

  it("Domingo de Ramos com evangelho da procissão e Paixão longa e breve", () => {
    const r = refs("2026-03-29");
    expect(r[0]).toBe("procissao: Mt 21,1-11");
    expect(r).toContain("evangelho(longa): Mt 26,14-27,66");
    expect(r).toContain("evangelho(breve): Mt 27,11-54");
  });

  it("Natal tem quatro missas e Pentecostes, a da vigília", () => {
    expect(leituras("2026-12-25").map((m) => m.nome)).toEqual([
      "Missa do dia",
      "Missa da noite",
      "Missa da aurora",
      "Missa da vigília",
    ]);
    expect(leituras("2026-05-24").map((m) => m.nome)).toEqual(["Missa do dia", "Missa da vigília"]);
  });

  it("Aparecida e São Pedro e São Paulo no domingo", () => {
    expect(refs("2026-10-12")).toEqual([
      "primeira: Est 5,1b-2; 7,2b-3",
      "salmo: Sl 44(45),11-12a.12b-13.14-15a.15b-16",
      "segunda: Ap 12,1.5.13a.15-16a",
      "evangelho: Jo 2,1-11",
    ]);
    expect(refs("2026-06-28")).toContain("evangelho: Mt 16,13-19");
  });

  it("memória usa o dia de semana; com leituras próprias obrigatórias, usa as próprias", () => {
    expect(leituras("2026-11-12").length).toBe(1);
    expect(refs("2026-08-29")).toContain("evangelho: Mc 6,17-29");
    expect(leituras("2026-08-29")[1]!.nome).toBe("Leituras do dia de semana");
    expect(refs("2026-10-07")).toContain("evangelho: Lc 1,26-38");
    expect(refs("2026-05-25")).toContain("evangelho: Jo 19,25-34");
    expect(refs("2026-07-29")).toContain("evangelho(ou): Lc 10,38-42");
  });

  it("Susana, Sagrada Família e Guadalupe como no Brasil", () => {
    expect(refs("2026-03-23")[0]).toBe("primeira(longa): Dn 13,1-9.15-17.19-30.33-62");
    expect(refs("2026-12-27")).toEqual([
      "primeira: Eclo 3,3-7.14-17a",
      "salmo: Sl 127(128),1-2.3.4-5",
      "segunda: Cl 3,12-21",
      "aclamacao: Cl 3,15a.16a",
      "evangelho(longa): Lc 2,22-40",
      "evangelho(breve): Lc 2,22.39-40",
    ]);
    expect(refs("2026-12-12")).toEqual([
      "primeira: Gl 4,4-7",
      "salmo: Sl 95(96),1-2a.2b-3.10",
      "evangelho: Lc 1,39-47",
    ]);
  });

  it("Vigília Pascal intercala leituras e salmos", () => {
    const r = refs("2027-03-27");
    expect(r[0]).toBe("primeira(longa): Gn 1,1-2,2");
    expect(r[1]).toBe("primeira(breve): Gn 1,1.26-31b");
    expect(r[2]).toMatch(/^salmo: Sl 103\(104\)/);
    expect(r[3]).toMatch(/^salmo\(ou\): Sl 32\(33\)/);
    expect(r[r.length - 1]).toBe("evangelho: Mc 16,1-7");
  });
});

describe("cobertura", () => {
  it("todo dia de 2024 a 2035 tem primeira leitura, salmo e evangelho", () => {
    const faltando: string[] = [];
    for (let d = dia(2024, 1, 1); d.getUTCFullYear() <= 2035; d = somaDias(d, 1)) {
      const l = diaLiturgico(d);
      const missa = leiturasDoDia(l, lecionario)[0];
      const tipos = new Set(missa?.leituras.map((x) => x.tipo));
      const precisa = ["primeira", "salmo", "evangelho"];
      const solene = diaDaSemana(d) === 0 || l.celebracao?.grau === "solenidade";
      if (solene && l.celebracao?.id !== "sabado-santo") precisa.push("segunda");
      const falta = precisa.filter((t) => !tipos.has(t as never));
      if (falta.length) faltando.push(`${paraIso(d)} ${l.titulo}: ${falta.join(", ")}`);
    }
    expect(faltando).toEqual([]);
  });
});
