import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MessageCircleHeart } from "lucide-react";
import { reflexaoDoEvangelho } from "@/reflexoes/reflexoes";
import type { Reflexao } from "@/reflexoes/tipos";
import type { Missa } from "@/liturgia/lecionario";
import { Cartao, TituloCartao } from "@/components/Cartao";

export const evangelhoDaMissa = (m: Missa | undefined) =>
  m?.leituras.find((x) => x.tipo === "evangelho" && !x.ou && x.forma !== "breve")?.canonica ?? null;

export function useReflexao(canonica: string | null): Reflexao | null {
  const [r, setR] = useState<{ chave: string; valor: Reflexao | null } | null>(null);
  useEffect(() => {
    if (!canonica) return;
    let ativo = true;
    reflexaoDoEvangelho(canonica)
      .then((valor) => ativo && setR({ chave: canonica, valor }))
      .catch(() => ativo && setR({ chave: canonica, valor: null }));
    return () => {
      ativo = false;
    };
  }, [canonica]);
  return r && r.chave === canonica ? r.valor : null;
}

export function ReflexaoCompleta({ canonica }: { canonica: string | null }) {
  const r = useReflexao(canonica);
  const { hash } = useLocation();
  useEffect(() => {
    if (!r || hash !== "#reflexao") return;
    const ir = () => document.getElementById("reflexao")?.scrollIntoView({ block: "start" });
    ir();
    const t = setTimeout(ir, 700);
    return () => clearTimeout(t);
  }, [r, hash]);
  if (!r) return null;
  return (
    <Cartao>
      <div id="reflexao" className="scroll-mt-20">
        <TituloCartao icone={MessageCircleHeart}>Reflexão do Evangelho</TituloCartao>
      </div>
      <div className="mt-3 flex flex-col gap-4 font-leitura text-[1.1rem] leading-[1.75] text-tinta">
        {r.paragrafos.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      <p className="mt-4 rounded-xl bg-marca-fundo px-4 py-3 font-leitura text-[1.05rem] italic text-tinta">{r.pergunta}</p>
    </Cartao>
  );
}

export function ReflexaoResumo({ canonica, para }: { canonica: string | null; para: string }) {
  const r = useReflexao(canonica);
  if (!r) return null;
  return (
    <Cartao>
      <TituloCartao icone={MessageCircleHeart}>Reflexão do Evangelho</TituloCartao>
      <p className="mt-3 line-clamp-4 font-leitura text-[1.05rem] leading-[1.7] text-tinta">{r.paragrafos[0]}</p>
      <Link
        to={para}
        className="mt-4 flex min-h-12 items-center justify-center rounded-xl border border-borda bg-papel px-4 font-semibold text-destaque-texto"
      >
        Ler a reflexão
      </Link>
    </Cartao>
  );
}
