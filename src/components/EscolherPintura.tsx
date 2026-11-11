import { useEffect, useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { buscarSantos, caminhoDaImagem, nomeParaOrdenar, todosOsSantos } from "@/santos/santos";
import type { Santo } from "@/santos/tipos";
import { Cartao } from "@/components/Cartao";

export function CruzLatina({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 20 32" className={className} fill="currentColor" aria-hidden>
      <rect x="8" y="0" width="4" height="32" rx="1" />
      <rect x="0" y="8" width="20" height="4" rx="1" />
    </svg>
  );
}

export function creditoDe(s: Santo): string {
  const a = s.imagem?.artista ?? "";
  return a && a !== "Desconhecido" ? `Pintura: ${a.replace(/, called /, ", chamado ")}` : "";
}

export interface PinturaEscolhida {
  id: string;
  nome: string;
  imagem: string;
}

export const pinturaDe = (s: Santo | null): PinturaEscolhida | null => (s ? { id: s.id, nome: s.nome, imagem: caminhoDaImagem(s) ?? "" } : null);

export function EscolherPintura({ atual, aoEscolher, semCruz }: { atual: PinturaEscolhida | null; aoEscolher: (s: Santo | null) => void; semCruz?: boolean }) {
  const [aberto, setAberto] = useState(false);
  const [lista, setLista] = useState<Santo[]>([]);
  const [termo, setTermo] = useState("");

  useEffect(() => {
    if (!aberto || lista.length) return;
    void todosOsSantos().then((todos) => {
      const vistas = new Set<string>();
      const com = todos.filter((s) => {
        const c = caminhoDaImagem(s);
        if (!c || vistas.has(c)) return false;
        vistas.add(c);
        return true;
      });
      setLista(com.sort((a, b) => nomeParaOrdenar(a.nome).localeCompare(nomeParaOrdenar(b.nome))));
    });
  }, [aberto, lista.length]);

  const mostradas = useMemo(() => (termo.trim() ? buscarSantos(lista, termo) : lista), [lista, termo]);

  if (!aberto)
    return (
      <button type="button" onClick={() => setAberto(true)} className="flex min-h-14 w-full items-center gap-3 rounded-xl border border-borda bg-papel px-3 py-2 text-left">
        {atual ? <img src={atual.imagem} alt="" className="size-10 shrink-0 rounded-lg object-cover" /> : <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-marca-fundo text-destaque-texto"><CruzLatina className="h-6" /></span>}
        <span className="min-w-0 flex-1 text-tinta">{atual ? atual.nome : semCruz ? "Escolher" : "Só a cruz"}</span>
        <span className="text-sm font-medium text-destaque-texto">Trocar</span>
      </button>
    );

  return (
    <Cartao className="flex flex-col gap-3 p-3">
      <div className="flex items-center gap-2">
        <label className="flex min-h-12 min-w-0 flex-1 items-center gap-2 rounded-xl border border-borda bg-papel px-3">
          <Search className="size-5 shrink-0 text-tinta-suave" aria-hidden />
          <input value={termo} onChange={(e) => setTermo(e.target.value)} placeholder="Buscar santo" aria-label="Buscar santo" className="min-w-0 flex-1 bg-transparent text-base outline-none" />
        </label>
        <button type="button" onClick={() => setAberto(false)} aria-label="Fechar" className="grid size-12 shrink-0 place-items-center rounded-xl text-tinta-suave">
          <X className="size-5" aria-hidden />
        </button>
      </div>
      <div className="grid max-h-[60vh] grid-cols-3 gap-2 overflow-y-auto">
        {!termo.trim() && !semCruz && (
          <button
            type="button"
            onClick={() => {
              aoEscolher(null);
              setAberto(false);
            }}
            className={`flex flex-col items-center gap-1 rounded-xl border p-1.5 text-xs ${atual === null ? "border-destaque-texto" : "border-borda"}`}
          >
            <span className="grid aspect-[3/4] w-full place-items-center rounded-lg bg-marca-fundo text-destaque-texto"><CruzLatina className="h-12" /></span>
            <span className="text-tinta">Só a cruz</span>
          </button>
        )}
        {mostradas.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => {
              aoEscolher(s);
              setAberto(false);
            }}
            className={`flex flex-col items-center gap-1 rounded-xl border p-1.5 text-xs ${atual?.id === s.id ? "border-destaque-texto" : "border-borda"}`}
          >
            <img src={caminhoDaImagem(s)!} alt="" loading="lazy" className="aspect-[3/4] w-full rounded-lg object-cover" />
            <span className="line-clamp-2 text-center text-tinta">{s.nome}</span>
          </button>
        ))}
      </div>
    </Cartao>
  );
}
