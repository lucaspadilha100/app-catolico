import { createClient } from "npm:@supabase/supabase-js@2";
import { classificar, confere, diaEmBrasilia, lerFeed, leiturasDaPagina, type Leitura, type Regra } from "./regras.ts";

const SITE = Deno.env.get("SITE") ?? "https://app-catolico-five.vercel.app";
const DIAS_PARA_TRAS = 3;

const banco = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!, { auth: { persistSession: false } });

const leituras = new Map<string, Promise<Leitura[]>>();

function leiturasDe(dia: string): Promise<Leitura[]> {
  let p = leituras.get(dia);
  if (!p) {
    p = fetch(`${SITE}/liturgia/${dia}`)
      .then((r) => (r.ok ? r.text() : ""))
      .then(leiturasDaPagina)
      .catch(() => []);
    leituras.set(dia, p);
  }
  return p;
}

interface Canal {
  id: string;
  youtube_id: string;
  regras: Regra[];
}

Deno.serve(async () => {
  const { data: canais, error } = await banco.from("canais_video").select("id, youtube_id, regras").eq("ativo", true);
  if (error) return new Response(JSON.stringify({ erro: error.message }), { status: 500 });
  const limite = diaEmBrasilia(new Date(Date.now() - DIAS_PARA_TRAS * 86400000).toISOString());
  const novos: Record<string, unknown>[] = [];
  const falhas: string[] = [];
  for (const canal of (canais ?? []) as Canal[]) {
    const xml = await fetch(`https://www.youtube.com/feeds/videos.xml?channel_id=${canal.youtube_id}`)
      .then((r) => (r.ok ? r.text() : ""))
      .catch(() => "");
    if (!xml) {
      falhas.push(canal.id);
      continue;
    }
    for (const e of lerFeed(xml)) {
      const v = classificar(e, canal.regras);
      if (!v || v.dia < limite) continue;
      if (v.referencia) {
        const doDia = await leiturasDe(v.dia);
        if (doDia.length > 0 && !confere(v.referencia, doDia)) continue;
      }
      const embutivel = await fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${e.id}&format=json`)
        .then((r) => r.status !== 401 && r.status !== 403)
        .catch(() => true);
      novos.push({
        id: e.id,
        canal_id: canal.id,
        tipo: v.tipo,
        titulo: e.titulo.slice(0, 300),
        dia: v.dia,
        referencia: v.referencia?.texto ?? "",
        publicado_em: e.publicado,
        embutivel,
      });
    }
  }
  if (novos.length > 0) {
    const { error: e } = await banco.from("videos").upsert(novos, { onConflict: "id", ignoreDuplicates: true });
    if (e) return new Response(JSON.stringify({ erro: e.message }), { status: 500 });
  }
  return new Response(JSON.stringify({ encontrados: novos.length, falhas }), { headers: { "Content-Type": "application/json" } });
});
