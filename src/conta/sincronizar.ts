import type { SupabaseClient } from "@supabase/supabase-js";
import { mesclarMarcas } from "@/biblia/marcas";
import { mesclarMusicas } from "@/roteiros/musicas";

export const CHAVES_SINCRONIZADAS = [
  "santinho-preferencias",
  "santinho-devocoes",
  "santinho-dias-de-oracao",
  "santinho-falecidos",
  "santinho-santos-de-devocao",
  "santinho-leitura",
  "santinho-tercos-rezados",
  "santinho-dias-do-terco",
  "santinho-cofre",
  "santinho-tercos-seguidos",
  "santinho-igrejas-seguidas",
  "santinho-marcas",
  "santinho-plano",
  "santinho-musicas",
] as const;

const CHAVE_META = "santinho-sinc-meta";
export const EVENTO_SINCRONIZADO = "santinho-sincronizado";

interface Meta {
  enviado: string | null;
  em: string | null;
  mudouEm?: number;
}

type Metas = Record<string, Meta>;

const lerMetas = (): Metas => {
  try {
    return JSON.parse(localStorage.getItem(CHAVE_META) ?? "{}") as Metas;
  } catch {
    return {};
  }
};

const gravarMetas = (m: Metas) => {
  try {
    localStorage.setItem(CHAVE_META, JSON.stringify(m));
  } catch {}
};

export const esquecerSincronizacao = () => {
  try {
    localStorage.removeItem(CHAVE_META);
  } catch {}
};

function json<T>(s: string | null, padrao: T): T {
  try {
    return s === null ? padrao : (JSON.parse(s) as T);
  } catch {
    return padrao;
  }
}

const uniao = (a: unknown[], b: unknown[]) => [...new Set([...a, ...b].map((x) => JSON.stringify(x)))].map((x) => JSON.parse(x) as unknown);

export function mesclar(chave: string, local: string, remoto: string, localMaisNovo: boolean): string {
  const novo = localMaisNovo ? local : remoto;
  switch (chave) {
    case "santinho-dias-de-oracao":
    case "santinho-dias-do-terco":
    case "santinho-santos-de-devocao":
    case "santinho-tercos-seguidos":
    case "santinho-igrejas-seguidas":
      return JSON.stringify((uniao(json(local, []), json(remoto, [])) as string[]).sort());
    case "santinho-musicas":
      return JSON.stringify(mesclarMusicas(json(local, []), json(remoto, [])));
    case "santinho-marcas":
      return JSON.stringify(mesclarMarcas(json(local, {}), json(remoto, {})));
    case "santinho-tercos-rezados": {
      const a = json<Record<string, number>>(local, {});
      const b = json<Record<string, number>>(remoto, {});
      const r: Record<string, number> = { ...b };
      for (const [k, v] of Object.entries(a)) r[k] = Math.max(v, r[k] ?? 0);
      return JSON.stringify(r);
    }
    case "santinho-falecidos": {
      const porId = new Map<string, unknown>();
      for (const f of [...json<{ id: string }[]>(remoto, []), ...json<{ id: string }[]>(local, [])]) porId.set(f.id, f);
      return JSON.stringify([...porId.values()]);
    }
    case "santinho-devocoes": {
      const a = json<Record<string, { feitos: number[] }>>(local, {});
      const b = json<Record<string, { feitos: number[] }>>(remoto, {});
      const r = { ...(localMaisNovo ? b : a), ...(localMaisNovo ? a : b) };
      for (const k of Object.keys(r)) {
        const feitos = [...new Set([...(a[k]?.feitos ?? []), ...(b[k]?.feitos ?? [])])].sort((x, y) => x - y);
        r[k] = { ...r[k]!, feitos };
      }
      return JSON.stringify(r);
    }
    case "santinho-leitura": {
      type Leitura = { lidos: Record<string, number[]>; ultimo: unknown };
      const a = json<Leitura>(local, { lidos: {}, ultimo: null });
      const b = json<Leitura>(remoto, { lidos: {}, ultimo: null });
      const lidos: Record<string, number[]> = {};
      for (const livro of new Set([...Object.keys(a.lidos ?? {}), ...Object.keys(b.lidos ?? {})]))
        lidos[livro] = [...new Set([...(a.lidos?.[livro] ?? []), ...(b.lidos?.[livro] ?? [])])].sort((x, y) => x - y);
      return JSON.stringify({ lidos, ultimo: (localMaisNovo ? a : b).ultimo ?? null });
    }
    case "santinho-preferencias": {
      const a = json<{ apoiadorAte?: string }>(local, {});
      const b = json<{ apoiadorAte?: string }>(remoto, {});
      const apoiadorAte = [a.apoiadorAte ?? "", b.apoiadorAte ?? ""].sort().pop()!;
      return JSON.stringify({ ...(localMaisNovo ? a : b), apoiadorAte });
    }
    default:
      return novo;
  }
}

export function notarMudancasLocais(agora = Date.now()) {
  const metas = lerMetas();
  let mudou = false;
  for (const chave of CHAVES_SINCRONIZADAS) {
    const local = localStorage.getItem(chave);
    const m = metas[chave];
    if (local !== null && local !== (m?.enviado ?? null) && !m?.mudouEm) {
      metas[chave] = { enviado: m?.enviado ?? null, em: m?.em ?? null, mudouEm: agora };
      mudou = true;
    }
  }
  if (mudou) gravarMetas(metas);
}

export async function sincronizar(cliente: SupabaseClient): Promise<{ recebidas: number; enviadas: number }> {
  notarMudancasLocais();
  const { data, error } = await cliente.from("sincronizacao").select("chave, valor, atualizado_em");
  if (error) throw error;
  const remotos = new Map((data ?? []).map((r) => [r.chave as string, r as { chave: string; valor: string; atualizado_em: string }]));
  const metas = lerMetas();
  const enviar: { chave: string; valor: string }[] = [];
  const recebidas: string[] = [];

  for (const chave of CHAVES_SINCRONIZADAS) {
    const local = localStorage.getItem(chave);
    const remoto = remotos.get(chave);
    const m = metas[chave] ?? { enviado: null, em: null };
    const localMudou = local !== null && local !== m.enviado;
    const remotoMudou = !!remoto && remoto.atualizado_em !== m.em;

    if (remotoMudou && !localMudou) {
      localStorage.setItem(chave, remoto.valor);
      metas[chave] = { enviado: remoto.valor, em: remoto.atualizado_em };
      recebidas.push(chave);
    } else if (localMudou && !remotoMudou) {
      enviar.push({ chave, valor: local });
    } else if (localMudou && remotoMudou) {
      const localMaisNovo = (m.mudouEm ?? 0) > Date.parse(remoto.atualizado_em);
      const valor = mesclar(chave, local, remoto.valor, localMaisNovo);
      if (valor !== local) {
        localStorage.setItem(chave, valor);
        recebidas.push(chave);
      }
      if (valor !== remoto.valor) enviar.push({ chave, valor });
      else metas[chave] = { enviado: valor, em: remoto.atualizado_em };
    }
  }

  if (enviar.length) {
    const agora = new Date().toISOString();
    const { data: gravadas, error: erro } = await cliente
      .from("sincronizacao")
      .upsert(enviar.map((e) => ({ ...e, atualizado_em: agora })), { onConflict: "usuario_id,chave" })
      .select("chave, valor, atualizado_em");
    if (erro) throw erro;
    for (const g of gravadas ?? []) metas[g.chave as string] = { enviado: g.valor as string, em: g.atualizado_em as string };
  }

  gravarMetas(metas);
  if (recebidas.length) {
    for (const chave of recebidas) window.dispatchEvent(new StorageEvent("storage", { key: chave }));
    for (const evento of ["santinho-devocoes", "santinho-falecidos", "santinho-santos-de-devocao", "santinho-tercos-seguidos", "santinho-igrejas-seguidas", "santinho-marcas", "santinho-musicas"]) window.dispatchEvent(new Event(evento));
  }
  window.dispatchEvent(new Event(EVENTO_SINCRONIZADO));
  return { recebidas: recebidas.length, enviadas: enviar.length };
}
