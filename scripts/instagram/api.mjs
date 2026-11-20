const VERSAO = "v23.0";
const loginDoInstagram = () => (process.env.IG_TOKEN ?? "").trim().startsWith("IG");
const base = () => `https://graph.${loginDoInstagram() ? "instagram" : "facebook"}.com/${VERSAO}`;

const esperar = (ms) => new Promise((ok) => setTimeout(ok, ms));

export function credenciais() {
  const token = process.env.IG_TOKEN?.trim();
  const id = process.env.IG_USER_ID?.trim();
  if (!token || !id) throw new Error("Faltam os segredos IG_TOKEN e IG_USER_ID.");
  return { token, id };
}

async function chamar(caminho, parametros, metodo = "POST") {
  const { token } = credenciais();
  const corpo = new URLSearchParams({ ...parametros, access_token: token });
  const url = metodo === "GET" ? `${base()}${caminho}?${corpo}` : `${base()}${caminho}`;
  const r = await fetch(url, metodo === "GET" ? {} : { method: "POST", body: corpo });
  const json = await r.json().catch(() => ({}));
  if (!r.ok || json.error) throw new Error(`Instagram ${caminho}: ${json.error?.message ?? r.status}`);
  return json;
}

async function aguardarPronto(container, tentativas = 40) {
  for (let i = 0; i < tentativas; i++) {
    const { status_code } = await chamar(`/${container}`, { fields: "status_code" }, "GET");
    if (status_code === "FINISHED") return;
    if (status_code === "ERROR" || status_code === "EXPIRED") throw new Error(`Container ${container}: ${status_code}`);
    await esperar(3000);
  }
  throw new Error(`Container ${container} não ficou pronto.`);
}

async function publicarContainer(container, tentativas) {
  await aguardarPronto(container, tentativas);
  const { id } = credenciais();
  const r = await chamar(`/${id}/media_publish`, { creation_id: container });
  return r.id;
}

export async function publicarFeed(urls, legenda) {
  const { id } = credenciais();
  const texto = legenda.slice(0, 2200);
  if (urls.length === 1) {
    const c = await chamar(`/${id}/media`, { image_url: urls[0], caption: texto });
    return publicarContainer(c.id);
  }
  const filhos = [];
  for (const url of urls.slice(0, 10)) {
    const c = await chamar(`/${id}/media`, { image_url: url, is_carousel_item: "true" });
    await aguardarPronto(c.id);
    filhos.push(c.id);
  }
  const c = await chamar(`/${id}/media`, { media_type: "CAROUSEL", children: filhos.join(","), caption: texto });
  return publicarContainer(c.id);
}

export async function publicarReel(url, legenda) {
  const { id } = credenciais();
  const c = await chamar(`/${id}/media`, { media_type: "REELS", video_url: url, caption: legenda.slice(0, 2200), share_to_feed: "true" });
  return publicarContainer(c.id, 120);
}

export async function publicarStory(url) {
  const { id } = credenciais();
  const video = /\.mp4$/i.test(url);
  const c = await chamar(`/${id}/media`, { media_type: "STORIES", [video ? "video_url" : "image_url"]: url });
  return publicarContainer(c.id, video ? 120 : 40);
}

export async function contaConectada() {
  const { id } = credenciais();
  const r = await chamar(`/${id}`, { fields: "username" }, "GET");
  return r.username;
}

export const tokenRenovavel = () => loginDoInstagram();

export async function renovarToken() {
  const { token } = credenciais();
  const r = await fetch(`https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${encodeURIComponent(token)}`);
  const json = await r.json().catch(() => ({}));
  if (!r.ok || !json.access_token) throw new Error(`Renovar token: ${json.error?.message ?? r.status}`);
  return { token: json.access_token, dias: Math.round((json.expires_in ?? 0) / 86400) };
}
