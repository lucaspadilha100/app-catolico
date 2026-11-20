let n = 0; let ultimoReel = null;
const chamadas = [];
globalThis.fetch = async (url, op = {}) => {
  const u = String(url);
  const metodo = op.method ?? "GET";
  if (metodo === "HEAD") return new Response(null, { status: 200 });
  if (/graph\.(facebook|instagram)\.com/.test(u)) {
    const corpo = op.body ? Object.fromEntries(new URLSearchParams(String(op.body))) : Object.fromEntries(new URL(u).searchParams);
    chamadas.push(`${metodo} ${new URL(u).pathname.replace(/^\/v[\d.]+/, "")} ${corpo.media_type ?? (corpo.image_url ? "IMAGE" : "")}`);
    if (u.includes("fields=status_code")) return Response.json({ status_code: ultimoReel && u.includes(ultimoReel) ? "ERROR" : "FINISHED" });
    if (u.includes("fields=username")) return Response.json({ username: "teste" });
    const id = `falso-${++n}`; if (corpo.media_type === "REELS") ultimoReel = id; return Response.json({ id });
  }
  throw new Error(`fetch inesperado: ${u}`);
};
process.on("exit", () => console.log("API:", chamadas.filter((c) => !c.startsWith("GET")).join(" | ") || "nenhuma"));
