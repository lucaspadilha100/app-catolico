const FALHOU = "Não foi possível agora. Tente de novo.";

let caixa: HTMLDivElement | null = null;
let some: ReturnType<typeof setTimeout> | undefined;

export function avisar(texto = FALHOU) {
  if (typeof document === "undefined") return;
  if (!caixa) {
    caixa = document.createElement("div");
    caixa.setAttribute("role", "status");
    caixa.className =
      "pointer-events-none fixed inset-x-4 bottom-24 z-30 mx-auto max-w-sm rounded-2xl border border-borda bg-cartao px-4 py-3 text-center text-sm text-tinta shadow-lg md:bottom-8";
    document.body.append(caixa);
  }
  caixa.textContent = texto;
  caixa.hidden = false;
  clearTimeout(some);
  some = setTimeout(() => {
    if (caixa) caixa.hidden = true;
  }, 4000);
}

export function executar<T>(acao: Promise<T>, depois?: (valor: T) => unknown) {
  acao.then(depois).catch(() => avisar());
}
