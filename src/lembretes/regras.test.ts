import { describe, expect, it } from "vitest";
import { agoraNoFuso, avisosDevidos, encontrosDevidos, escalasDevidas } from "../../supabase/functions/lembretes/regras";

describe("lembretes", () => {
  const as = (hora: string, iso = "2026-11-10") => {
    const [h, m] = hora.split(":").map(Number);
    return { iso, minutos: h! * 60 + m!, diaDaSemana: new Date(`${iso}T12:00:00Z`).getUTCDay() };
  };

  it("hora local pelo fuso da pessoa", () => {
    const a = agoraNoFuso(new Date("2026-11-10T10:05:00Z"), "America/Sao_Paulo");
    expect(a).toEqual({ iso: "2026-11-10", minutos: 7 * 60 + 5, diaDaSemana: 2 });
    expect(agoraNoFuso(new Date("2026-11-11T02:30:00Z"), "America/Manaus").iso).toBe("2026-11-10");
  });

  it("envia na janela de 15 minutos e uma vez por dia", () => {
    const l = { evangelho: "07:00", angelus: true, terco: "20:00" };
    expect(avisosDevidos(l, {}, as("06:55"), "Lc 17,7-10")).toEqual([]);
    expect(avisosDevidos(l, {}, as("07:05"), "Lc 17,7-10").map((a) => a.corpo)).toEqual(["Lc 17,7-10. Leia e reze com a liturgia de hoje."]);
    expect(avisosDevidos(l, { evangelho: "2026-11-10" }, as("07:05"), null)).toEqual([]);
    expect(avisosDevidos(l, { evangelho: "2026-11-09" }, as("07:10"), null)).toHaveLength(1);
    expect(avisosDevidos(l, {}, as("07:20"), null)).toEqual([]);
    expect(avisosDevidos(l, {}, as("12:00"), null).map((a) => a.tipo)).toEqual(["angelus"]);
    expect(avisosDevidos(l, {}, as("20:10"), null)[0]!.corpo).toBe("Hoje: Mistérios Dolorosos.");
    expect(avisosDevidos({}, {}, as("12:00"), null)).toEqual([]);
  });

  it("novena: só nos dias dela", () => {
    const l = { novena: "09:00", novenas: [{ titulo: "Novena de Nossa Senhora das Graças", inicio: "2026-11-18", dias: 9, para: "/rezar/novenas/x" }] };
    expect(avisosDevidos(l, {}, as("09:00", "2026-11-17"), null)).toEqual([]);
    expect(avisosDevidos(l, {}, as("09:00", "2026-11-20"), null)[0]!.corpo).toBe("Dia 3 de 9.");
    expect(avisosDevidos(l, {}, as("09:00", "2026-11-27"), null)).toEqual([]);
  });
});

describe("encontro do terço que a pessoa segue", () => {
  const terco = { id: "t1", nome: "Terço da Juventude de São José", dia_semana: 4, semanas: null, hora: "19:30:00" };
  const quinta = (h: string) => agoraNoFuso(new Date(`2026-11-19T${h}:00-03:00`), "America/Sao_Paulo");

  it("avisa uma hora antes, uma vez, só de quem segue", () => {
    expect(encontrosDevidos([terco], ["t1"], {}, quinta("18:30"))).toEqual([{ tipo: "terco-t1", titulo: terco.nome, corpo: "Hoje, às 19h30.", url: "/tercos/t1" }]);
    expect(encontrosDevidos([terco], ["t1"], { "terco-t1": "2026-11-19" }, quinta("18:35"))).toEqual([]);
    expect(encontrosDevidos([terco], [], {}, quinta("18:30"))).toEqual([]);
    expect(encontrosDevidos([terco], ["t1"], {}, quinta("17:00"))).toEqual([]);
  });

  it("respeita as semanas do mês", () => {
    const so3 = { ...terco, semanas: [3] };
    const ultima = { ...terco, semanas: [6] };
    expect(encontrosDevidos([so3], ["t1"], {}, quinta("18:30"))).toHaveLength(1);
    expect(encontrosDevidos([ultima], ["t1"], {}, quinta("18:30"))).toHaveLength(0);
    expect(encontrosDevidos([ultima], ["t1"], {}, agoraNoFuso(new Date("2026-11-26T18:30:00-03:00"), "America/Sao_Paulo"))).toHaveLength(1);
  });
});

describe("escala da paróquia", () => {
  const servico = { id: "e1", data: "2026-11-22", hora: "07:00:00", funcao: "1ª leitura", celebracao: "Missa das 7h", ministerio: "Leitores" };
  it("avisa às 19h da véspera, uma vez", () => {
    const sabado = agoraNoFuso(new Date("2026-11-21T19:05:00-03:00"), "America/Sao_Paulo");
    expect(escalasDevidas([servico], {}, sabado)).toEqual([{ tipo: "escala-e1", titulo: "Amanhã: 1ª leitura", corpo: "Leitores · Missa das 7h às 7h", url: "/escalas" }]);
    expect(escalasDevidas([servico], { "escala-e1": "2026-11-21" }, sabado)).toEqual([]);
    expect(escalasDevidas([servico], {}, agoraNoFuso(new Date("2026-11-21T12:00:00-03:00"), "America/Sao_Paulo"))).toEqual([]);
  });
});
