import { Link } from "react-router-dom";
import { ChevronRight, HandHeart } from "lucide-react";
import { ORACOES } from "@/oracao/oracoes";
import { Miniatura } from "@/components/Cartao";
import { caminhoDeDevocao, useImagensDeDevocao } from "@/lib/imagens";

function doMomento(hora: number): string[] {
  if (hora >= 5 && hora < 11) return ["manha", "santo-anjo", "vinde-espirito-santo"];
  if (hora >= 11 && hora < 15) return ["angelus", "antes-das-refeicoes", "comunhao-espiritual"];
  if (hora >= 15 && hora < 18) return ["jesus-eu-confio", "salve-rainha", "lembrai-vos"];
  return ["noite", "ato-de-contricao", "salve-rainha"];
}

export function OracoesDoDia({ pascal }: { pascal: boolean }) {
  const imagens = useImagensDeDevocao();
  const lista = doMomento(new Date().getHours())
    .map((id) => (id === "angelus" && pascal ? "regina-caeli" : id))
    .map((id) => ORACOES[id])
    .filter((o) => o !== undefined);
  return (
    <section className="flex flex-col gap-1">
      <h2 className="titulo-secao mb-2 px-1">Orações do dia</h2>
      {lista.map((o) => {
        const c = imagens[`oracao:${o.id}`];
        return (
          <Link key={o.id} to={`/rezar/oracoes/${o.id}`} className="flex min-h-16 items-center gap-3.5 rounded-2xl py-1.5 transition-colors hover:bg-cartao/70">
            <Miniatura imagem={c ? caminhoDeDevocao(c) : null} foco={c?.foco} icone={HandHeart} tamanho="size-[3.75rem]" />
            <span className="min-w-0 flex-1">
              <span className="block font-bold leading-snug text-tinta">{o.nome}</span>
              {o.latim && <span className="block text-[0.9375rem] italic text-tinta-suave">{o.latim}</span>}
            </span>
            <ChevronRight className="size-5 shrink-0 text-tinta-suave" aria-hidden />
          </Link>
        );
      })}
      <Link to="/rezar/oracoes" className="mt-2 flex min-h-12 items-center justify-center rounded-full bg-cartao font-bold text-tinta">
        Ver todas
      </Link>
    </section>
  );
}
