import webpush from "npm:web-push@3.6.7";
import { createClient } from "npm:@supabase/supabase-js@2";
import { agoraNoFuso, avisosDevidos, encontrosDevidos, escalasDevidas, lembrancasDevidas, type Lembretes, type ServicoNaEscala, type TercoAgendado } from "./regras.ts";

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
  usuario_id: string | null;
  endpoint: string;
  p256dh: string;
  auth: string;
  fuso: string;
  lembretes: Lembretes;
  enviados: Record<string, string>;
  falhas: number;
}

interface Publicacao {
  id: string;
  paroquia_id: string;
  titulo: string;
  paroquias: { nome: string; plano: string } | null;
}

async function avisarSeguidores(): Promise<number> {
  const desde = new Date(Date.now() - 2 * 86_400_000).toISOString();
  const { data } = await banco
    .from("publicacoes_paroquia")
    .select("id, paroquia_id, titulo, paroquias(nome, plano)")
    .eq("notificada", false)
    .gt("criado_em", desde)
    .order("criado_em")
    .limit(50);
  let total = 0;
  for (const p of (data ?? []) as Publicacao[]) {
    let alcance = 0;
    if (p.paroquias && p.paroquias.plano !== "gratis") {
      const aviso = { tipo: `igreja-${p.id}`, titulo: p.paroquias.nome, corpo: p.titulo, url: `/missas/paroquia/${p.paroquia_id}` };
      for (let de = 0; ; de += 500) {
        const { data: subs } = await banco
          .from("lembrete_inscricoes")
          .select("endpoint, p256dh, auth, lembretes")
          .contains("lembretes", { igrejas: [p.paroquia_id] })
          .order("endpoint")
          .range(de, de + 499);
        const lista = (subs ?? []) as Pick<Inscricao, "endpoint" | "p256dh" | "auth" | "lembretes">[];
        for (const i of lista) {
          if (i.lembretes.avisos === false) continue;
          try {
            await webpush.sendNotification({ endpoint: i.endpoint, keys: { p256dh: i.p256dh, auth: i.auth } }, JSON.stringify(aviso), { TTL: 86_400, urgency: "normal" });
            alcance++;
          } catch (e) {
            const status = (e as { statusCode?: number }).statusCode;
            if (status === 404 || status === 410) await banco.from("lembrete_inscricoes").delete().eq("endpoint", i.endpoint);
          }
        }
        if (lista.length < 500) break;
      }
    }
    await banco.from("publicacoes_paroquia").update({ notificada: true, alcance }).eq("id", p.id);
    total += alcance;
  }
  return total;
}

interface IntencaoAAvisar {
  id: string;
  autor_id: string;
  nome: string;
  novas: number;
  rezaram: number;
}

async function avisarQuemPediu(): Promise<number> {
  const { data } = await banco.rpc("intencoes_a_avisar");
  let total = 0;
  for (const i of (data ?? []) as IntencaoAAvisar[]) {
    const { data: subs } = await banco.from("lembrete_inscricoes").select("endpoint, p256dh, auth, lembretes").eq("usuario_id", i.autor_id).limit(10);
    const corpo = i.novas === 1 ? `1 pessoa rezou pelo seu pedido por ${i.nome}.` : `${i.novas} pessoas rezaram pelo seu pedido por ${i.nome}.`;
    const aviso = { tipo: `rezaram-${i.id}`, titulo: "Rezaram por você", corpo, url: "/intencoes" };
    for (const s of (subs ?? []) as Pick<Inscricao, "endpoint" | "p256dh" | "auth" | "lembretes">[]) {
      if (s.lembretes.oracoes === false) continue;
      try {
        await webpush.sendNotification({ endpoint: s.endpoint, keys: { p256dh: s.p256dh, auth: s.auth } }, JSON.stringify(aviso), { TTL: 86_400, urgency: "low" });
        total++;
      } catch (e) {
        const status = (e as { statusCode?: number }).statusCode;
        if (status === 404 || status === 410) await banco.from("lembrete_inscricoes").delete().eq("endpoint", s.endpoint);
      }
    }
    await banco.from("intencoes").update({ avisado: i.rezaram, avisado_em: new Date().toISOString() }).eq("id", i.id);
  }
  return total;
}

interface GracaAAvisar {
  id: string;
  nome: string;
  graca_texto: string;
  quem_rezou: string[];
}

async function avisarGracas(): Promise<number> {
  const { data } = await banco.rpc("gracas_a_avisar");
  let total = 0;
  for (const g of (data ?? []) as GracaAAvisar[]) {
    for (let de = 0; de < g.quem_rezou.length; de += 200) {
      const ids = g.quem_rezou.slice(de, de + 200);
      const { data: subs } = await banco.from("lembrete_inscricoes").select("endpoint, p256dh, auth, lembretes").in("usuario_id", ids);
      const aviso = { tipo: `graca-${g.id}`, titulo: "Graça alcançada", corpo: g.graca_texto ? `Pelo pedido por ${g.nome}: ${g.graca_texto}` : `O pedido por ${g.nome} foi atendido. Obrigado por rezar.`, url: "/intencoes" };
      for (const s of (subs ?? []) as Pick<Inscricao, "endpoint" | "p256dh" | "auth" | "lembretes">[]) {
        if (s.lembretes.oracoes === false) continue;
        try {
          await webpush.sendNotification({ endpoint: s.endpoint, keys: { p256dh: s.p256dh, auth: s.auth } }, JSON.stringify(aviso), { TTL: 86_400, urgency: "low" });
          total++;
        } catch (e) {
          const status = (e as { statusCode?: number }).statusCode;
          if (status === 404 || status === 410) await banco.from("lembrete_inscricoes").delete().eq("endpoint", s.endpoint);
        }
      }
    }
    await banco.from("intencoes").update({ graca_avisada: true }).eq("id", g.id);
  }
  return total;
}

Deno.serve(async () => {
  const agora = new Date();
  let enviados = 0;
  let removidos = 0;
  for (let de = 0; ; de += 500) {
    const { data, error } = await banco.from("lembrete_inscricoes").select("*").order("endpoint").range(de, de + 499);
    if (error) return new Response(JSON.stringify({ erro: error.message }), { status: 500 });
    const lista = (data ?? []) as Inscricao[];
    const ids = [...new Set(lista.flatMap((i) => i.lembretes.tercos ?? []))].slice(0, 1000);
    const tercos = ids.length
      ? (((await banco.from("tercos").select("id, nome, dia_semana, semanas, hora").in("id", ids).eq("situacao", "aprovado").eq("ativo", true)).data ?? []) as TercoAgendado[])
      : [];
    const usuarios = [...new Set(lista.map((i) => i.usuario_id).filter((u): u is string => !!u))];
    const hojeSP = agoraNoFuso(agora, "America/Sao_Paulo").iso;
    const servicos = new Map<string, ServicoNaEscala[]>();
    if (usuarios.length) {
      const { data: esc } = await banco
        .from("escala")
        .select("id, data, hora, funcao, celebracao, membro_id, ministerios(nome)")
        .in("membro_id", usuarios)
        .gte("data", hojeSP)
        .lte("data", new Date(Date.parse(`${hojeSP}T00:00:00Z`) + 2 * 86_400_000).toISOString().slice(0, 10));
      for (const e of (esc ?? []) as { id: string; data: string; hora: string | null; funcao: string; celebracao: string; membro_id: string; ministerios: { nome: string } | null }[])
        servicos.set(e.membro_id, [...(servicos.get(e.membro_id) ?? []), { id: e.id, data: e.data, hora: e.hora, funcao: e.funcao, celebracao: e.celebracao, ministerio: e.ministerios?.nome ?? "" }]);
    }
    for (const i of lista) {
      const local = agoraNoFuso(agora, i.fuso);
      const precisaDoEvangelho = Boolean(i.lembretes.evangelho) && i.enviados.evangelho !== local.iso;
      const avisos = [
        ...avisosDevidos(i.lembretes, i.enviados ?? {}, local, precisaDoEvangelho ? await evangelhoDe(local.iso) : null),
        ...lembrancasDevidas(i.lembretes, i.enviados ?? {}, local),
        ...encontrosDevidos(tercos, i.lembretes.tercos ?? [], i.enviados ?? {}, local),
        ...(i.usuario_id && i.lembretes.escalas !== false ? escalasDevidas(servicos.get(i.usuario_id) ?? [], i.enviados ?? {}, local) : []),
      ];
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
  const avisos = await avisarSeguidores();
  const oracoes = await avisarQuemPediu();
  const gracas = await avisarGracas();
  return new Response(JSON.stringify({ enviados, removidos, avisos, oracoes, gracas }), { headers: { "Content-Type": "application/json" } });
});
