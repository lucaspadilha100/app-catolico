import { useEffect, useState } from "react";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import { useDiaLiturgico } from "@/lib/useDiaLiturgico";
import { misteriosDoDia } from "@/liturgia/terco";
import { carregarLecionario, leiturasDoDia } from "@/liturgia/lecionario";
import { textoDaReferencia } from "@/biblia/texto";
import { livroPorCodigo } from "@/biblia/livros";
import { passosDaOracao, type Passo } from "@/oracao/terco";
import { ehTempoPascal, oracao } from "@/oracao/oracoes";
import { NOME_DO_MOMENTO, falasDaOracao, falasDosPassos, momentoDaHora, type Fala, type Momento } from "@/voz/falas";
import { Reza } from "@/components/Reza";
import { Carregando } from "@/components/Devocao";
import { sair } from "@/components/Voltar";
import type { DiaLiturgico } from "@/liturgia/calendario";

const MOMENTOS: Momento[] = ["evangelho", "angelus", "misericordia", "terco", "noite"];

const passoDe = (id: string, secao: string): Passo => ({ chave: id, secao, titulo: oracao(id).nome, oracao: id });

async function montar(m: Momento, dia: DiaLiturgico): Promise<{ passos: Passo[]; falas?: Fala[] }> {
  if (m === "angelus") {
    const id = ehTempoPascal(dia.tempo) ? "regina-caeli" : "angelus";
    return { passos: [...passosDaOracao(id, oracao(id)), passoDe("gloria", "Final")] };
  }
  if (m === "noite") {
    return {
      passos: [passoDe("sinal-da-cruz", "Início"), ...passosDaOracao("noite", oracao("noite")), passoDe("pai-nosso", "Final"), passoDe("ave-maria", "Final"), passoDe("gloria", "Final")],
    };
  }
  const lecionario = await carregarLecionario();
  const ev = leiturasDoDia(dia, lecionario)[0]?.leituras.find((l) => l.tipo === "evangelho");
  if (!ev) return { passos: [passoDe("sinal-da-cruz", "Início"), passoDe("pai-nosso", "Final"), passoDe("gloria", "Final")] };
  const passos: Passo[] = [
    passoDe("sinal-da-cruz", "Início"),
    { chave: "evangelho", secao: "Evangelho do dia", titulo: "Evangelho", leitura: { canonica: ev.canonica, referencia: ev.referencia } },
    passoDe("pai-nosso", "Final"),
    passoDe("gloria", "Final"),
  ];
  const trechos = await textoDaReferencia(ev.canonica).catch(() => []);
  const versos = trechos.flatMap((t) => t.versiculos.map((v) => v.texto));
  const livro = livroPorCodigo(trechos[0]?.livro ?? "");
  const blocos: string[] = [];
  for (let i = 0; i < versos.length; i += 3) blocos.push(versos.slice(i, i + 3).join(" "));
  const falas: Fala[] = [
    ...falasDaOracao("sinal-da-cruz", "Sinal da Cruz"),
    { texto: `Evangelho segundo ${livro ? `São ${livro.nome}` : ""}.`, vez: "app", rotulo: ev.referencia },
    ...blocos.map((b) => ({ texto: b.replace(/[“”‘’]/g, ""), vez: "app" as const, rotulo: ev.referencia })),
    ...falasDosPassos(passos.slice(2)),
  ];
  return { passos, falas };
}

function RezaDoMomento({ momento, dia }: { momento: Momento; dia: DiaLiturgico }) {
  const navegar = useNavigate();
  const [reza, setReza] = useState<{ passos: Passo[]; falas?: Fala[] } | null>(null);
  useEffect(() => {
    let ativo = true;
    setReza(null);
    void montar(momento, dia)
      .then((r) => ativo && setReza(r))
      .catch(() => ativo && setReza({ passos: [passoDe("sinal-da-cruz", "Início"), passoDe("pai-nosso", "Final"), passoDe("gloria", "Final")] }));
    return () => {
      ativo = false;
    };
  }, [momento, dia.data.getTime()]);

  if (!reza) return <Carregando />;
  return (
    <Reza
      key={momento}
      chave={`agora-${momento}`}
      tipo="agora"
      reza="agora"
      terco={false}
      titulo={NOME_DO_MOMENTO[momento]}
      passos={reza.passos}
      falas={reza.falas}
      aoSair={() => sair(navegar, "/rezar")}
    />
  );
}

export default function RezarAgora() {
  const dia = useDiaLiturgico();
  const [params] = useSearchParams();
  const pedido = params.get("m") as Momento | null;
  const [daHora] = useState(() => momentoDaHora(new Date().getHours()));
  const momento: Momento = pedido && MOMENTOS.includes(pedido) ? pedido : daHora;

  if (momento === "terco") return <Navigate to={`/rezar/terco?m=${misteriosDoDia(dia.data).grupo}&rezar=1`} replace />;
  if (momento === "misericordia") return <Navigate to="/rezar/misericordia?rezar=1" replace />;
  return <RezaDoMomento key={momento} momento={momento} dia={dia} />;
}
