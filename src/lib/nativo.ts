import { Capacitor } from "@capacitor/core";
import { ENDERECO_DO_SITE } from "@/marca";

export const ehNativo = () => Capacitor.isNativePlatform();

export const enderecoPublico = () => (!ehNativo() && location.protocol.startsWith("http") ? location.origin : ENDERECO_DO_SITE);

export async function vibrar(padrao: number | number[]) {
  if (ehNativo()) {
    try {
      const { Haptics, ImpactStyle } = await import("@capacitor/haptics");
      const forte = Array.isArray(padrao) && padrao.length > 3;
      await Haptics.impact({ style: Array.isArray(padrao) ? (forte ? ImpactStyle.Heavy : ImpactStyle.Medium) : ImpactStyle.Light });
    } catch {}
    return;
  }
  try {
    navigator.vibrate?.(padrao);
  } catch {}
}

const paraBase64 = (blob: Blob) =>
  new Promise<string>((ok, erro) => {
    const r = new FileReader();
    r.onload = () => ok(String(r.result).split(",")[1] ?? "");
    r.onerror = () => erro(r.error);
    r.readAsDataURL(blob);
  });

export async function compartilhar(p: { titulo: string; texto?: string; url?: string; imagem?: { blob: Blob; nome: string } }): Promise<"compartilhado" | "copiado" | "baixado" | "erro"> {
  if (ehNativo()) {
    try {
      const { Share } = await import("@capacitor/share");
      if (p.imagem) {
        const { Filesystem, Directory } = await import("@capacitor/filesystem");
        const salvo = await Filesystem.writeFile({ path: p.imagem.nome, data: await paraBase64(p.imagem.blob), directory: Directory.Cache });
        await Share.share({ title: p.titulo, files: [salvo.uri] });
      } else {
        await Share.share({ title: p.titulo, text: p.texto, url: p.url });
      }
      return "compartilhado";
    } catch {
      return "erro";
    }
  }
  if (p.imagem) {
    const arquivo = new File([p.imagem.blob], p.imagem.nome, { type: p.imagem.blob.type });
    if (navigator.canShare?.({ files: [arquivo] })) {
      try {
        await navigator.share({ files: [arquivo], title: p.titulo });
      } catch {}
      return "compartilhado";
    }
    const url = URL.createObjectURL(p.imagem.blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = p.imagem.nome;
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 5000);
    return "baixado";
  }
  if (navigator.share) {
    try {
      await navigator.share({ title: p.titulo, text: p.texto, url: p.url });
    } catch {}
    return "compartilhado";
  }
  try {
    await navigator.clipboard.writeText([p.texto, p.url].filter(Boolean).join("\n\n"));
    return "copiado";
  } catch {
    return "erro";
  }
}
