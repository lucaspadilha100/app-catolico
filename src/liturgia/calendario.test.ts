import { describe, expect, it } from "vitest";
import { dia, paraIso, deIso, dataPorExtenso } from "./datas";
import {
  pascoa,
  primeiroDomingoDoAdvento,
  epifania,
  batismoDoSenhor,
  quartaDeCinzas,
  pentecostes,
  sagradaFamilia,
  diaLiturgico,
} from "./calendario";
import { misteriosDoDia } from "./terco";

const d = (s: string) => deIso(s)!;

describe("datas-base", () => {
  it("Páscoa em anos conhecidos", () => {
    expect(paraIso(pascoa(2024))).toBe("2024-03-31");
    expect(paraIso(pascoa(2025))).toBe("2025-04-20");
    expect(paraIso(pascoa(2026))).toBe("2026-04-05");
    expect(paraIso(pascoa(2027))).toBe("2027-03-28");
    expect(paraIso(pascoa(2028))).toBe("2028-04-16");
    expect(paraIso(pascoa(2038))).toBe("2038-04-25");
  });

  it("1º domingo do Advento", () => {
    expect(paraIso(primeiroDomingoDoAdvento(2024))).toBe("2024-12-01");
    expect(paraIso(primeiroDomingoDoAdvento(2025))).toBe("2025-11-30");
    expect(paraIso(primeiroDomingoDoAdvento(2026))).toBe("2026-11-29");
    expect(paraIso(primeiroDomingoDoAdvento(2022))).toBe("2022-11-27"); // Natal num domingo
  });

  it("Epifania (domingo) e Batismo do Senhor no Brasil", () => {
    expect(paraIso(epifania(2026))).toBe("2026-01-04");
    expect(paraIso(batismoDoSenhor(2026))).toBe("2026-01-11");
    expect(paraIso(epifania(2024))).toBe("2024-01-07");
    expect(paraIso(batismoDoSenhor(2024))).toBe("2024-01-08"); // Epifania em 7 → segunda-feira
    expect(paraIso(epifania(2027))).toBe("2027-01-03");
    expect(paraIso(batismoDoSenhor(2027))).toBe("2027-01-10");
  });

  it("Cinzas, Pentecostes e Sagrada Família", () => {
    expect(paraIso(quartaDeCinzas(2026))).toBe("2026-02-18");
    expect(paraIso(quartaDeCinzas(2027))).toBe("2027-02-10");
    expect(paraIso(pentecostes(2026))).toBe("2026-05-24");
    expect(paraIso(sagradaFamilia(2026))).toBe("2026-12-27");
    expect(paraIso(sagradaFamilia(2022))).toBe("2022-12-30"); // Natal num domingo: sem domingo na oitava
  });

  it("aceita só data válida em ISO", () => {
    expect(deIso("2026-02-30")).toBeNull();
    expect(deIso("10/11/2026")).toBeNull();
    expect(dataPorExtenso(dia(2026, 11, 10))).toBe("Terça-feira, 10 de novembro de 2026");
  });
});

describe("dia litúrgico", () => {
  it("Tempo Comum depois de Pentecostes", () => {
    const l = diaLiturgico(d("2026-11-10"));
    expect(l.tempo).toBe("comum");
    expect(l.semana).toBe(32);
    expect(l.cor).toBe("branco");
    expect(l.titulo).toBe("Terça-feira da 32ª semana do Tempo Comum");
    expect(l.celebracao?.nome).toBe("São Leão Magno, papa e doutor da Igreja");
    expect(l.celebracao?.grau).toBe("memoria");
    expect(l.cicloDominical).toBe("A");
    expect(l.cicloFerial).toBe("II");
  });

  it("Tempo Comum retoma depois de Pentecostes na semana certa", () => {
    expect(diaLiturgico(d("2026-05-25")).semana).toBe(8);
    expect(diaLiturgico(d("2026-11-08")).titulo).toBe("32º Domingo do Tempo Comum");
  });

  it("Tempo Comum antes da Quaresma", () => {
    const l = diaLiturgico(d("2027-01-11"));
    expect(l.tempo).toBe("comum");
    expect(l.semana).toBe(1);
    expect(diaLiturgico(d("2027-01-17")).titulo).toBe("2º Domingo do Tempo Comum");
    expect(diaLiturgico(d("2024-01-09")).semana).toBe(1); // Batismo numa segunda-feira
  });

  it("Cristo Rei e a virada do ano litúrgico", () => {
    expect(diaLiturgico(d("2026-11-22")).celebracao?.nome).toBe("Nosso Senhor Jesus Cristo, Rei do Universo");
    const a1 = diaLiturgico(d("2026-11-29"));
    expect(a1.tempo).toBe("advento");
    expect(a1.titulo).toBe("1º Domingo do Advento");
    expect(a1.cor).toBe("roxo");
    expect(a1.cicloDominical).toBe("B");
    expect(a1.cicloFerial).toBe("I");
  });

  it("Advento: Gaudete é rosa", () => {
    expect(diaLiturgico(d("2026-12-13")).cor).toBe("rosa");
    expect(diaLiturgico(d("2026-12-15")).cor).toBe("roxo");
    expect(diaLiturgico(d("2026-12-24")).tempo).toBe("advento");
  });

  it("Natal até o Batismo do Senhor", () => {
    expect(diaLiturgico(d("2026-12-25")).titulo).toBe("Natal do Senhor");
    expect(diaLiturgico(d("2026-12-25")).cicloDominical).toBe("B");
    expect(diaLiturgico(d("2026-12-29")).titulo).toBe("Terça-feira na Oitava do Natal");
    expect(diaLiturgico(d("2027-01-01")).titulo).toBe("Santa Maria, Mãe de Deus");
    expect(diaLiturgico(d("2027-01-05")).tempo).toBe("natal");
    expect(diaLiturgico(d("2027-01-10")).titulo).toBe("Batismo do Senhor");
    expect(diaLiturgico(d("2027-01-10")).tempo).toBe("natal");
  });

  it("Quaresma, Semana Santa e Tríduo", () => {
    expect(diaLiturgico(d("2027-02-10")).titulo).toBe("Quarta-feira de Cinzas");
    expect(diaLiturgico(d("2027-02-11")).titulo).toBe("Quinta-feira depois das Cinzas");
    expect(diaLiturgico(d("2027-02-14")).titulo).toBe("1º Domingo da Quaresma");
    expect(diaLiturgico(d("2027-03-07")).cor).toBe("rosa"); // Laetare
    expect(diaLiturgico(d("2027-03-21")).cor).toBe("vermelho"); // Ramos
    expect(diaLiturgico(d("2027-03-23")).titulo).toBe("Terça-feira da Semana Santa");
    expect(diaLiturgico(d("2027-03-25")).tempo).toBe("triduo");
    expect(diaLiturgico(d("2027-03-26")).cor).toBe("vermelho");
  });

  it("Tempo Pascal", () => {
    expect(diaLiturgico(d("2027-03-28")).titulo).toBe("Domingo da Páscoa na Ressurreição do Senhor");
    expect(diaLiturgico(d("2027-03-30")).titulo).toBe("Terça-feira na Oitava da Páscoa");
    expect(diaLiturgico(d("2027-04-04")).titulo).toBe("2º Domingo da Páscoa ou da Divina Misericórdia");
    expect(diaLiturgico(d("2026-05-17")).titulo).toBe("Ascensão do Senhor");
    expect(diaLiturgico(d("2026-05-24")).cor).toBe("vermelho");
    expect(diaLiturgico(d("2026-06-04")).titulo).toBe("Santíssimo Corpo e Sangue de Cristo");
  });
});

describe("santos e transferências do Brasil", () => {
  it("próprio do Brasil", () => {
    expect(diaLiturgico(d("2026-10-12")).titulo).toBe("Nossa Senhora da Conceição Aparecida, padroeira do Brasil");
    expect(diaLiturgico(d("2027-10-25")).celebracao?.nome).toBe("Santo Antônio de Sant'Ana Galvão, presbítero");
    expect(diaLiturgico(d("2026-10-06")).facultativas.map((s) => s.nome)).toContain("Santa Faustina Kowalska, virgem");
  });

  it("São Pedro e São Paulo, Assunção e Todos os Santos no domingo", () => {
    expect(diaLiturgico(d("2026-06-28")).titulo).toBe("São Pedro e São Paulo, apóstolos");
    expect(diaLiturgico(d("2026-06-29")).celebracao).toBeNull();
    expect(diaLiturgico(d("2027-07-04")).titulo).toBe("São Pedro e São Paulo, apóstolos");
    expect(diaLiturgico(d("2026-08-16")).titulo).toBe("Assunção de Nossa Senhora");
    expect(diaLiturgico(d("2027-11-07")).titulo).toBe("Todos os Santos");
    expect(diaLiturgico(d("2025-11-01")).titulo).toBe("Todos os Santos");
  });

  it("memória na Quaresma vira facultativa", () => {
    const l = diaLiturgico(d("2026-02-23"));
    expect(l.celebracao).toBeNull();
    expect(l.cor).toBe("roxo");
    expect(l.facultativas[0]?.nome).toBe("São Policarpo, bispo e mártir");
  });
});

describe("terço", () => {
  it("mistérios de cada dia da semana", () => {
    expect(misteriosDoDia(d("2026-11-08")).nome).toBe("Mistérios Gloriosos"); // domingo
    expect(misteriosDoDia(d("2026-11-09")).nome).toBe("Mistérios Gozosos");
    expect(misteriosDoDia(d("2026-11-10")).nome).toBe("Mistérios Dolorosos");
    expect(misteriosDoDia(d("2026-11-12")).nome).toBe("Mistérios Luminosos");
  });
});

describe("calendário próprio da diocese", () => {
  it("em Natal, Nossa Senhora da Apresentação é solenidade no dia 21 de novembro", () => {
    const geral = diaLiturgico(d("2026-11-21"));
    expect(geral.celebracao?.grau).toBe("memoria");
    const natal = diaLiturgico(d("2026-11-21"), "natal");
    expect(natal.celebracao?.grau).toBe("solenidade");
    expect(natal.titulo).toContain("Nossa Senhora da Apresentação");
    expect(natal.santos.map((s) => s.nome)).not.toContain("Apresentação de Nossa Senhora");
  });
});

describe("Arquidiocese de Natal", () => {
  it("Mártires de Cunhaú e Uruaçu: memória no Brasil, solenidade no Rio Grande do Norte", () => {
    expect(diaLiturgico(d("2025-10-03")).celebracao?.grau).toBe("memoria");
    expect(diaLiturgico(d("2025-10-03"), "natal").celebracao?.grau).toBe("solenidade");
  });

  it("Dedicação da Catedral é festa em 15 de novembro e cede ao domingo", () => {
    expect(diaLiturgico(d("2027-11-15"), "natal").titulo).toBe("Dedicação da Catedral Metropolitana de Natal");
    expect(diaLiturgico(d("2026-11-15"), "natal").titulo).not.toContain("Dedicação");
  });
});
