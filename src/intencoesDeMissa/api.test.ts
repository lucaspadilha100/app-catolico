import { describe, expect, it } from "vitest";
import { listaParaLer, type IntencaoDeMissa } from "./api";

const i = (tipo: IntencaoDeMissa["tipo"], nome: string, situacao: IntencaoDeMissa["situacao"] = "recebida", texto = ""): IntencaoDeMissa => ({ id: nome, paroquia_id: "p", tipo, nome, texto, data: "2026-11-22", hora: "19:00", pedido_por: "", situacao, criado_em: "" });

describe("lista de intenções para ler na missa", () => {
  it("junta por tipo e deixa de fora as recusadas e canceladas", () => {
    expect(listaParaLer("Missa de domingo, 22/11, às 19h", [i("falecido", "João"), i("falecido", "Maria", "confirmada", "7º dia"), i("saude", "Pedro", "recusada"), i("acao_de_gracas", "Família Souza")])).toBe(
      "Missa de domingo, 22/11, às 19h\n\nPela alma de: João; Maria (7º dia).\nEm ação de graças por: Família Souza.",
    );
  });
});
