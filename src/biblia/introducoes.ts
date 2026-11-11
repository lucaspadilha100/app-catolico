let carga: Promise<Record<string, string[]>> | null = null;

export function carregarIntroducoes(): Promise<Record<string, string[]>> {
  carga ??= Promise.all([import("./dados/introducoes-at"), import("./dados/introducoes-nt")]).then(([at, nt]) => ({ ...at.INTRODUCOES_AT, ...nt.INTRODUCOES_NT }));
  carga.catch(() => (carga = null));
  return carga;
}
