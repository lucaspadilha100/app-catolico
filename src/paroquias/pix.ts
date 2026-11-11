export type TipoDeChave = "cnpj" | "cpf" | "email" | "telefone" | "aleatoria";

export function normalizarChave(tipo: TipoDeChave, valor: string): string {
  const v = valor.trim();
  if (tipo === "cnpj" || tipo === "cpf") return v.replace(/\D/g, "");
  if (tipo === "telefone") return `+55${v.replace(/\D/g, "").replace(/^55(?=\d{10,11}$)/, "")}`;
  return v.toLowerCase();
}

export function tipoDaChave(chave: string): TipoDeChave {
  if (/^\d{14}$/.test(chave)) return "cnpj";
  if (/^\d{11}$/.test(chave)) return "cpf";
  if (chave.startsWith("+55")) return "telefone";
  if (chave.includes("@")) return "email";
  return "aleatoria";
}

export function chaveValida(chave: string): boolean {
  return chave.length <= 77 && /^(\d{11}|\d{14}|\+55\d{10,11}|[^@\s]+@[^@\s]+\.[^@\s]+|[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})$/.test(chave);
}

export function textoDoPix(s: string, max: number): string {
  return s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^A-Za-z0-9 ]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toUpperCase()
    .slice(0, max)
    .trim();
}

const campo = (id: string, valor: string) => `${id}${String(valor.length).padStart(2, "0")}${valor}`;

export function crc16(texto: string): string {
  let crc = 0xffff;
  for (const byte of new TextEncoder().encode(texto)) {
    crc ^= byte << 8;
    for (let i = 0; i < 8; i++) crc = crc & 0x8000 ? ((crc << 1) ^ 0x1021) & 0xffff : (crc << 1) & 0xffff;
  }
  return crc.toString(16).toUpperCase().padStart(4, "0");
}

export function codigoPix(p: { chave: string; nome: string; cidade: string; valor?: number | null; nomeCru?: boolean }): string {
  const nome = p.nomeCru ? p.nome : textoDoPix(p.nome, 25);
  const cidade = p.nomeCru ? p.cidade : textoDoPix(p.cidade, 15);
  const corpo =
    campo("00", "01") +
    campo("26", campo("00", "br.gov.bcb.pix") + campo("01", p.chave)) +
    campo("52", "0000") +
    campo("53", "986") +
    (p.valor && p.valor > 0 ? campo("54", p.valor.toFixed(2)) : "") +
    campo("58", "BR") +
    campo("59", nome) +
    campo("60", cidade) +
    campo("62", campo("05", "***")) +
    "6304";
  return corpo + crc16(corpo);
}
