import { describe, expect, it } from "vitest";
import { lerReferencia } from "./referencia";
import { dataGrande } from "./datas";
import { diaLiturgico } from "@/liturgia/calendario";
import { dia } from "@/liturgia/datas";

describe("referência digitada", () => {
  it("aceita nome, abreviatura e intervalo", () => {
    expect(lerReferencia("Jo 3,16")).toEqual({ canonica: "JHN 3:16", rotulo: "Jo 3,16" });
    expect(lerReferencia("João 3:16")).toEqual({ canonica: "JHN 3:16", rotulo: "Jo 3,16" });
    expect(lerReferencia("gn 1,1-5")).toEqual({ canonica: "GEN 1:1-5", rotulo: "Gn 1,1-5" });
    expect(lerReferencia("1 Cor 13,4-7")).toEqual({ canonica: "1CO 13:4-7", rotulo: "1Cor 13,4-7" });
  });

  it("recusa o que não é referência", () => {
    expect(lerReferencia("")).toBeNull();
    expect(lerReferencia("Jo")).toBeNull();
    expect(lerReferencia("Zzz 3,16")).toBeNull();
    expect(lerReferencia("Gn 99,1")).toBeNull();
    expect(lerReferencia("Gn 1,9-2")).toBeNull();
  });
});

describe("datas grandes", () => {
  const em = (a: number, m: number, d: number) => {
    const dd = dia(a, m, d);
    return dataGrande(dd, diaLiturgico(dd));
  };

  it("acha as fixas e as móveis", () => {
    expect(em(2026, 10, 12)?.nome).toBe("Nossa Senhora Aparecida");
    expect(em(2026, 12, 8)?.nome).toBe("Imaculada Conceição");
    expect(em(2026, 12, 25)?.nome).toBe("Natal do Senhor");
    expect(em(2026, 11, 29)?.nome).toBe("Começa o Advento");
    expect(em(2026, 11, 22)?.nome).toBe("Cristo Rei");
    expect(em(2027, 2, 10)?.nome).toBe("Quarta-feira de Cinzas");
    expect(em(2027, 3, 21)?.nome).toBe("Domingo de Ramos");
    expect(em(2027, 3, 28)?.nome).toBe("Domingo de Páscoa");
    expect(em(2027, 5, 16)?.nome).toBe("Pentecostes");
  });

  it("dia comum não tem", () => {
    expect(em(2026, 11, 13)).toBeNull();
    expect(em(2026, 11, 30)).toBeNull();
  });
});

describe("post de quem é lembrado sem estar no calendário", async () => {
  const { legendaDoSanto, rotuloDoSanto } = await import("./conteudo");
  const base = { id: "x", resumo: "", historia: ["Viveu e morreu em Natal."], calendario: false, data: "1114" };
  it("venerável e servo de Deus levam o título certo e a explicação, sem #santododia", () => {
    const v = { ...base, nome: "Venerável Maria", situacao: "veneravel", dataDe: "falecimento" } as never;
    expect(rotuloDoSanto(v)).toBe("Venerável");
    const l = legendaDoSanto(v, "14 de novembro");
    expect(l).toContain("Faleceu em 14 de novembro.");
    expect(l).toContain("virtudes cristãs em grau heroico");
    expect(l).not.toContain("#santododia");
    const s = { ...base, nome: "Servo de Deus João", situacao: "servo" } as never;
    expect(rotuloDoSanto(s)).toBe("Servo de Deus");
    expect(legendaDoSanto(s, "14 de novembro")).toContain("causa de beatificação aberta");
  });
  it("santo do calendário continua como santo do dia", () => {
    expect(rotuloDoSanto({ ...base, nome: "São Martinho", calendario: true } as never)).toBe("Santo do dia");
  });
});
