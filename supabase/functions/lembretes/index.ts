import webpush from "npm:web-push@3.6.7";
import { createClient } from "npm:@supabase/supabase-js@2";
import { agoraNoFuso, avisosDevidos, type Lembretes } from "./regras.ts";

const SITE = Deno.env.get("SITE") ?? "https://app-catolico-five.vercel.app";

webpush.setVapidDetails(SITE, Deno.env.get("VAPID_PUBLICA")!, Deno.env.get("VAPID_PRIVADA")!);

const banco = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!, { auth: { persistSession: false } });

const evangelhos = new Map<string, Promise<string | null>>();

function evangelhoDe(iso: string): Promise<string | null> {
  let p = evangelhos.get(iso);
  if (!p) {
    p = fetch(`${SITE}/liturgia/${iso}`)
      .then((r) => (r.ok ? r.text() : ""))
      .then((html) => /<h2>Evangelho: ([^<]+)<\/h2>/.exec(html)?.[1] ?? null)
      .catch(() => null);
    evangelhos.set(iso, p);
  }
  return p;
}

interface Inscricao {
  endpoint: string;
  p256dh: string;
  auth: string;
  fuso: string;
  lembretes: Lembretes;
  enviados: Record<string, string>;
  falhas: number;
}

Deno.serve(async () => {
  const agora = new Date();
  let enviados = 0;
  let removidos = 0;
  for (let de = 0; ; de += 500) {
    const { data, error } = await banco.from("lembrete_inscricoes").select("*").order("endpoint").range(de, de + 499);
    if (error) return new Response(JSON.stringify({ erro: error.message }), { status: 500 });
    const lista = (data ?? []) as Inscricao[];
    for (const i of lista) {
      const local = agoraNoFuso(agora, i.fuso);
      const precisaDoEvangelho = Boolean(i.lembretes.evangelho) && i.enviados.evangelho !== local.iso;
      const avisos = avisosDevidos(i.lembretes, i.enviados ?? {}, local, precisaDoEvangelho ? await evangelhoDe(local.iso) : null);
      if (!avisos.length) continue;
      const marcados = { ...(i.enviados ?? {}) };
      let falhou = false;
      for (const aviso of avisos) {
        try {
          await webpush.sendNotification({ endpoint: i.endpoint, keys: { p256dh: i.p256dh, auth: i.auth } }, JSON.stringify(aviso), { TTL: 3600, urgency: "normal" });
          marcados[aviso.tipo] = local.iso;
          enviados++;
        } catch (e) {
          const status = (e as { statusCode?: number }).statusCode;
          if (status === 404 || status === 410) {
            await banco.from("lembrete_inscricoes").delete().eq("endpoint", i.endpoint);
            removidos++;
            falhou = true;
            break;
          }
          marcados[aviso.tipo] = local.iso;
        }
      }
      if (!falhou) await banco.from("lembrete_inscricoes").update({ enviados: marcados }).eq("endpoint", i.endpoint);
    }
    if (lista.length < 500) break;
  }
  return new Response(JSON.stringify({ enviados, removidos }), { headers: { "Content-Type": "application/json" } });
});
