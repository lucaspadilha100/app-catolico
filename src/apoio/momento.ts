import { deIso, diferencaEmDias, hoje, paraIso, somaDias, type Dia } from "@/liturgia/datas";

export const CHAVE_PEDIDO_DE_APOIO = "santinho-pedido-apoio";
export const INTERVALO_ENTRE_PEDIDOS = 30;

export function podePedirApoio(p: { ultimo: string | null; hoje: Dia; apoiador: boolean; nativo: boolean }): boolean {
  if (p.nativo || p.apoiador) return false;
  const ultimo = p.ultimo ? deIso(p.ultimo) : null;
  return !ultimo || diferencaEmDias(p.hoje, ultimo) >= INTERVALO_ENTRE_PEDIDOS;
}

export function lerUltimoPedido(): string | null {
  try {
    return localStorage.getItem(CHAVE_PEDIDO_DE_APOIO);
  } catch {
    return null;
  }
}

export function guardarPedido(d: Dia = hoje()) {
  try {
    localStorage.setItem(CHAVE_PEDIDO_DE_APOIO, paraIso(d));
  } catch {}
}

export function diasSeguidos(dias: readonly string[], d: Dia = hoje()): number {
  const feitos = new Set(dias);
  let n = 0;
  while (feitos.has(paraIso(somaDias(d, -n)))) n++;
  return n;
}

export const completouSemana = (seguidos: number) => seguidos > 0 && seguidos % 7 === 0;
