import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { semTituloDoSalmo } from "./texto";

const pasta = join(__dirname, "../../public/biblia/f1");
const salmos = JSON.parse(readFileSync(join(pasta, readdirSync(pasta).find((f) => f.startsWith("PSA."))!), "utf8")).capitulos as string[][];

describe("título do salmo fora da liturgia", () => {
  it("tira o título e deixa o texto", () => {
    expect(semTituloDoSalmo(salmos[126]![0]!)).toMatch(/^Bem-aventurados todos os que temem o Senhor/);
    expect(semTituloDoSalmo(salmos[21]![0]!)).toMatch(/^O Senhor me conduz/);
    expect(semTituloDoSalmo(salmos[0]![0]!)).toBe(salmos[0]![0]);
  });
  it("versículo só de título some", () => {
    expect(semTituloDoSalmo(salmos[18]![0]!)).toBe("");
    expect(semTituloDoSalmo(salmos[16]![0]!)).toBe("");
  });
  it("nenhum salmo começa por título depois da limpeza", () => {
    for (const c of salmos) expect(semTituloDoSalmo(c[0]!)).not.toMatch(/^(Ao regente|Salmo de|Cântico gradual|Aleluia\.)/);
  });
});
