const CHAVE = "santinho-uso-contado";

export function contarAbertura() {
  const hoje = new Date().toLocaleDateString("sv-SE");
  try {
    if (localStorage.getItem(CHAVE) === hoje) return;
  } catch {
    return;
  }
  const url = import.meta.env.VITE_SUPABASE_URL as string;
  const chave = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string;
  if (!url || !chave || !navigator.onLine) return;
  fetch(`${url}/rest/v1/rpc/contar_uso`, {
    method: "POST",
    headers: { apikey: chave, "Content-Type": "application/json" },
    body: JSON.stringify({ p_evento: "abertura" }),
    keepalive: true,
  })
    .then((r) => {
      if (r.ok) localStorage.setItem(CHAVE, hoje);
    })
    .catch(() => {});
}
