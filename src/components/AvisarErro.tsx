import { useEffect, useState, type FormEvent } from "react";
import { Check, Flag, NotebookPen, Share2, X } from "lucide-react";
import { CORES, chaveDoVersiculo, marcar, useMarcas, type Cor } from "@/biblia/marcas";
import { compartilharVersiculo } from "@/lib/imagemDoVersiculo";
import { enviarAviso, NOME_DO_AVISO, type Aviso, type TipoDeAviso } from "@/biblia/avisos";

interface Props {
  referencia: string;
  aviso: Omit<Aviso, "tipo" | "comentario">;
  aoFechar: () => void;
}

export function BarraDoVersiculo({ referencia, aviso, aoFechar }: Props) {
  const [aberto, setAberto] = useState(false);
  const [tipo, setTipo] = useState<TipoDeAviso | null>(null);
  const [comentario, setComentario] = useState("");
  const [estado, setEstado] = useState<"editando" | "enviando" | "enviado">("editando");
  const [imagem, setImagem] = useState<"" | "gerando" | "baixado">("");
  const marcas = useMarcas();
  const chave = chaveDoVersiculo(aviso.livro, aviso.capitulo, aviso.versiculo);
  const marca = marcas[chave];
  const [anotando, setAnotando] = useState(false);
  const [nota, setNota] = useState("");

  useEffect(() => {
    setAberto(false);
    setTipo(null);
    setComentario("");
    setEstado("editando");
    setAnotando(false);
    setNota(marca?.nota ?? "");
  }, [aviso.livro, aviso.capitulo, aviso.versiculo]);

  useEffect(() => {
    const aoTeclar = (e: KeyboardEvent) => e.key === "Escape" && aoFechar();
    window.addEventListener("keydown", aoTeclar);
    return () => window.removeEventListener("keydown", aoTeclar);
  }, [aoFechar]);

  async function enviar(e: FormEvent) {
    e.preventDefault();
    if (!tipo) return;
    setEstado("enviando");
    await enviarAviso({ ...aviso, tipo, comentario: comentario.trim().slice(0, 1000) });
    setEstado("enviado");
  }

  return (
    <div className="fixed inset-x-0 bottom-[calc(4rem+env(safe-area-inset-bottom))] z-20 px-3 pb-3 md:bottom-0 md:left-60 md:pb-6">
      <div
        role="dialog"
        aria-label={`Versículo ${referencia}`}
        className="mx-auto max-w-xl rounded-2xl border border-borda bg-cartao p-4 shadow-lg"
      >
        <div className="flex items-center justify-between gap-3">
          <p className="font-semibold text-tinta">{referencia}</p>
          <button type="button" onClick={aoFechar} aria-label="Fechar" className="-mr-2 flex size-10 items-center justify-center rounded-xl text-tinta-suave">
            <X className="size-5" aria-hidden />
          </button>
        </div>
        {!aberto && !anotando && (
          <div className="mt-1 flex items-center gap-2" role="group" aria-label="Grifar">
            {(Object.keys(CORES) as Cor[]).map((c) => (
              <button
                key={c}
                type="button"
                aria-label={`Grifar de ${CORES[c].nome.toLowerCase()}`}
                aria-pressed={marca?.cor === c}
                onClick={() => marcar(chave, { cor: marca?.cor === c ? null : c, texto: aviso.texto_versiculo })}
                className={`grid size-11 place-items-center rounded-full border-2 ${marca?.cor === c ? "border-tinta" : "border-transparent"}`}
              >
                <span className="size-8 rounded-full border border-borda" style={{ background: CORES[c].fundo }} />
              </button>
            ))}
            <span className="flex-1" />
            <button
              type="button"
              onClick={() => {
                setNota(marca?.nota ?? "");
                setAnotando(true);
              }}
              className={`flex min-h-11 items-center gap-1.5 rounded-xl border px-3 text-sm font-medium ${marca?.nota ? "border-destaque-texto/40 text-destaque-texto" : "border-borda text-tinta-suave"}`}
            >
              <NotebookPen className="size-4" aria-hidden /> {marca?.nota ? "Nota" : "Anotar"}
            </button>
          </div>
        )}

        {anotando && (
          <div className="mt-2 flex flex-col gap-2">
            <textarea
              value={nota}
              onChange={(e) => setNota(e.target.value)}
              maxLength={2000}
              rows={4}
              aria-label="Nota"
              autoFocus
              className="w-full resize-none rounded-xl border border-borda bg-papel px-3 py-2 text-base text-tinta"
            />
            <div className="grid grid-cols-2 gap-2">
              <button type="button" onClick={() => setAnotando(false)} className="min-h-11 rounded-xl border border-borda text-sm font-medium text-tinta">
                Cancelar
              </button>
              <button
                type="button"
                onClick={() => {
                  marcar(chave, { nota, texto: aviso.texto_versiculo });
                  setAnotando(false);
                }}
                className="min-h-11 rounded-xl bg-destaque text-sm font-semibold text-sobre-destaque"
              >
                Salvar nota
              </button>
            </div>
          </div>
        )}

        {!aberto && !anotando && (
          <div className="mt-2 grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => {
                setImagem("gerando");
                void compartilharVersiculo(aviso.texto_versiculo, referencia).then((r) => setImagem(r === "baixado" ? "baixado" : ""));
              }}
              disabled={imagem === "gerando"}
              className="flex min-h-11 items-center justify-center gap-2 rounded-xl bg-destaque px-3 text-sm font-semibold text-sobre-destaque disabled:opacity-60"
            >
              {imagem === "baixado" ? <Check className="size-4" aria-hidden /> : <Share2 className="size-4" aria-hidden />}
              {imagem === "baixado" ? "Imagem salva" : "Compartilhar"}
            </button>
            <button type="button" onClick={() => setAberto(true)} className="flex min-h-11 items-center justify-center gap-2 rounded-xl border border-borda px-3 text-sm font-medium text-tinta-suave">
              <Flag className="size-4" aria-hidden /> Avisar erro
            </button>
          </div>
        )}

        {aberto && estado === "enviado" && (
          <p className="mt-3 flex items-center gap-2 text-tinta">
            <Check className="size-5 text-destaque-texto" aria-hidden /> Obrigado. Vamos conferir.
          </p>
        )}

        {aberto && estado !== "enviado" && (
          <form onSubmit={enviar} className="mt-3 flex flex-col gap-3">
            <div className="grid grid-cols-2 gap-2">
              {(Object.keys(NOME_DO_AVISO) as TipoDeAviso[]).map((t) => (
                <button
                  key={t}
                  type="button"
                  aria-pressed={tipo === t}
                  onClick={() => setTipo(t)}
                  className={`min-h-11 rounded-xl border px-3 text-sm font-medium ${
                    tipo === t ? "border-transparent bg-destaque text-sobre-destaque" : "border-borda text-tinta"
                  }`}
                >
                  {NOME_DO_AVISO[t]}
                </button>
              ))}
            </div>
            <textarea
              value={comentario}
              onChange={(e) => setComentario(e.target.value)}
              maxLength={1000}
              rows={3}
              aria-label="Comentário"
              placeholder="O que está errado?"
              className="w-full resize-none rounded-xl border border-borda bg-papel px-3 py-2 text-base text-tinta"
            />
            <button
              type="submit"
              disabled={!tipo || estado === "enviando"}
              className="min-h-12 rounded-xl bg-destaque font-semibold text-sobre-destaque disabled:opacity-50"
            >
              {estado === "enviando" ? "Enviando" : "Enviar"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
