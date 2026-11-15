import { describe, expect, it } from "vitest";
import { telefoneNacional } from "./telefone";

describe("telefone", () => {
  it("guarda só DDD e número", () => {
    expect(telefoneNacional("(84) 99999-0000")).toBe("84999990000");
    expect(telefoneNacional("84 3222-0000")).toBe("8432220000");
  });

  it("tira o 55 do país", () => {
    expect(telefoneNacional("+55 84 99999-0000")).toBe("84999990000");
    expect(telefoneNacional("5584999990000")).toBe("84999990000");
    expect(telefoneNacional("55 84 3222-0000")).toBe("8432220000");
  });

  it("tira o 0 do DDD", () => {
    expect(telefoneNacional("084 99999-0000")).toBe("84999990000");
    expect(telefoneNacional("+55 (084) 3222-0000")).toBe("8432220000");
  });

  it("não mexe no DDD 55", () => {
    expect(telefoneNacional("(55) 99999-0000")).toBe("55999990000");
    expect(telefoneNacional("55 3222-0000")).toBe("5532220000");
  });

  it("deixa o resto como veio", () => {
    expect(telefoneNacional("")).toBe("");
    expect(telefoneNacional("3222-0000")).toBe("32220000");
  });
});
