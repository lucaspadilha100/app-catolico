import { readFileSync } from "node:fs";
import { join } from "node:path";
import { beforeAll, describe, expect, it, vi } from "vitest";
import dados from "../liturgia/dados/lecionario.json";
import { diaLiturgico } from "../liturgia/calendario";
import { deIso } from "../liturgia/datas";
import { leiturasDoDia, type Lecionario } from "../liturgia/lecionario";
import { textoDaReferencia } from "./texto";

const raiz = join(__dirname, "../..");

beforeAll(() => {
  vi.stubGlobal("fetch", async (url: string) => ({
    ok: true,
    json: async () => JSON.parse(readFileSync(join(raiz, "public", url), "utf8")),
  }));
});

const leitura = (data: string, missa: string | null, livro: string) => {
  const missas = leiturasDoDia(diaLiturgico(deIso(data)!), dados as unknown as Lecionario);
  const escolhida = missa ? missas.find((m) => m.nome === missa) : missas[0];
  return escolhida?.leituras.find((l) => l.canonica?.startsWith(livro))?.canonica;
};

async function versiculos(referencia: string) {
  const trechos = await textoDaReferencia(referencia);
  return trechos.flatMap((t) => t.versiculos);
}

describe("leituras na numeração das Bíblias de hoje", () => {
  it("Noite de Natal: Is 9,1-6 começa no povo que andava em trevas", async () => {
    const ref = leitura("2025-12-25", "Missa da noite", "ISA");
    expect(ref).toBe("ISA 9:1-3.5-6");
    const v = await versiculos(ref!);
    expect([v[0]!.capitulo, v[0]!.versiculo]).toEqual([9, 1]);
    expect(v[0]!.texto).toMatch(/^Este povo, que andava em trevas, viu uma grande luz/);
    expect(v.find((x) => x.versiculo === 5)!.texto).toMatch(/um pequenino já nasceu para nós/);
    expect(v.map((x) => x.versiculo)).toEqual([1, 2, 3, 5, 6]);
  });

  it("33º domingo do ano C: Ml 3,19-20a", async () => {
    const ref = leitura("2025-11-16", null, "MAL");
    expect(ref).toBe("MAL 3:19-20a");
    const v = await versiculos(ref!);
    expect(v.map((x) => `${x.capitulo},${x.versiculo}`)).toEqual(["3,19", "3,20"]);
    expect(v[0]!.texto).toMatch(/^Porque eis que virá um dia ardente como uma fornalha/);
    expect(v[1]!.texto).toMatch(/nascerá o sol da justiça/);
  });

  it("4º domingo do Advento, ano C: Mq 5,1-4a", async () => {
    const ref = leitura("2024-12-22", null, "MIC");
    expect(ref).toBe("MIC 5:1-4a");
    const v = await versiculos(ref!);
    expect(v[0]!.texto).toMatch(/^E tu, Belém Efrata/);
    expect(v.at(-1)!.texto).toMatch(/^Ele mesmo será a paz/);
  });

  it("Jl 3,1-5: o espírito derramado sobre toda a carne", async () => {
    const v = await versiculos("JOL 3:1-5");
    expect(v).toHaveLength(5);
    expect(v[0]!.texto).toMatch(/^Depois disto acontecerá que derramarei o meu espírito/);
    expect(v[4]!.texto).toMatch(/todo aquele que invocar o nome do Senhor será salvo/);
  });

  it("1º domingo do Advento, ano B: Is 63,19b e 64,2b-7", async () => {
    const ref = leitura("2023-12-03", null, "ISA");
    expect(ref).toBe("ISA 63:16b-17;ISA 63:19;64:2b-7");
    const v = await versiculos(ref!);
    expect(v.find((x) => x.capitulo === 63 && x.versiculo === 19)!.texto).toMatch(/Oxalá rompesses os céus e descesses/);
    expect(v.find((x) => x.capitulo === 64 && x.versiculo === 7)!.texto).toMatch(/tu és o nosso Pai, e nós não somos mais que barro/);
  });

  it("Gn 32,23-33, Ex 22,20-26, Dn 6,12-28 e Jn 2,1", async () => {
    expect(leitura("2025-07-08", null, "GEN")).toBe("GEN 32:23-33");
    const luta = await versiculos("GEN 32:23-33");
    expect(luta[0]!.texto).toMatch(/atravessou o vau do Jaboc/);
    expect(luta.at(-1)!.texto).toMatch(/não comem o nervo/);
    expect(leitura("2023-10-29", null, "EXO")).toBe("EXO 22:20-26");
    const estrangeiro = await versiculos("EXO 22:20-26");
    expect(estrangeiro[0]!.texto).toMatch(/^Não magoarás nem oprimirás o estrangeiro/);
    expect(estrangeiro.at(-1)!.texto).toMatch(/porque sou misericordioso/);
    const leoes = await versiculos("DAN 6:12-28");
    expect(leoes[0]!.texto).toMatch(/encontraram Daniel orando/);
    expect(leoes.at(-1)!.texto).toMatch(/livrou Daniel da cova dos leões/);
    const peixe = await versiculos("JON 2:1");
    expect(peixe[0]!.texto).toMatch(/^O Senhor preparou um grande peixe/);
  });
});
