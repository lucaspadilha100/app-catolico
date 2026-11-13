import { useState, type FormEvent } from "react";
import { Trash2 } from "lucide-react";
import { deIso, diaEMes, diferencaEmDias, hoje } from "@/liturgia/datas";
import { NOME_DA_LEMBRANCA, proximaLembranca, useFalecidos, type Falecido } from "@/vida/lembrancas";
import { Cartao } from "@/components/Cartao";
import { Blocos } from "@/components/Blocos";
import { BotaoRezei, Cabecalho, Voltar } from "@/components/Devocao";
import { registrarOracao } from "@/devocao/progresso";
import { CartaoDeApoio, useMomentoDeApoio } from "@/apoio/MomentoDeApoio";

const dataLonga = (iso: string) => {
  const d = deIso(iso);
  return d ? `${diaEMes(d)} de ${d.getUTCFullYear()}` : "";
};

export default function Falecidos() {
  const [lista, incluir, tirar] = useFalecidos();
  const [nome, setNome] = useState("");
  const [data, setData] = useState("");
  const [rezados, setRezados] = useState<string[]>([]);
  const apoio = useMomentoDeApoio();
  const h = hoje();
  const valido = nome.trim() && deIso(data) && diferencaEmDias(deIso(data)!, h) <= 0;

  const enviar = (e: FormEvent) => {
    e.preventDefault();
    if (!valido) return;
    incluir({ nome: nome.trim(), data });
    setNome("");
    setData("");
  };

  const rezei = (f: Falecido, aniversario: boolean) => {
    setRezados((r) => [...r, f.id]);
    registrarOracao();
    if (aniversario) apoio.oferecer();
  };

  const ordenados = lista
    .map((f) => ({ f, l: proximaLembranca(f, h) }))
    .sort((a, b) => (a.l?.data.getTime() ?? Infinity) - (b.l?.data.getTime() ?? Infinity));

  return (
    <div className="flex flex-col gap-5">
      <Voltar para="/rezar">Rezar</Voltar>
      <Cabecalho titulo="Pelos falecidos" />

      <Cartao>
        <Blocos blocos={[{ rezar: "pelos-falecidos" }]} />
      </Cartao>

      {ordenados.length > 0 && (
        <ul className="flex flex-col gap-2">
          {ordenados.map(({ f, l }) => {
            const faltam = l ? diferencaEmDias(l.data, h) : null;
            return (
              <li key={f.id} className="flex flex-col gap-3 rounded-3xl bg-cartao px-4 py-3">
                <div className="flex items-start gap-3">
                  <span className="min-w-0 flex-1">
                    <span className="block text-[1.1rem] font-bold text-marca tracking-[-0.02em]">{f.nome}</span>
                    <span className="block text-sm text-tinta-suave">Faleceu em {dataLonga(f.data)}</span>
                    {l && (
                      <span className={`mt-1 block text-sm font-medium ${faltam === 0 ? "text-destaque-texto" : "text-tinta"}`}>
                        {faltam === 0 ? "Hoje" : diaEMes(l.data)}: {l.tipo === "aniversario" ? `${l.anos} ${l.anos === 1 ? "ano" : "anos"} de falecimento` : NOME_DA_LEMBRANCA[l.tipo]}
                      </span>
                    )}
                  </span>
                  <button
                    type="button"
                    onClick={() => window.confirm(`Tirar ${f.nome} da lista?`) && tirar(f.id)}
                    aria-label={`Tirar ${f.nome}`}
                    className="grid size-11 shrink-0 place-items-center rounded-xl text-tinta-suave"
                  >
                    <Trash2 className="size-5" aria-hidden />
                  </button>
                </div>
                {l && faltam === 0 && (
                  <BotaoRezei feito={rezados.includes(f.id)} onClick={() => !rezados.includes(f.id) && rezei(f, l.tipo === "aniversario")}>
                    {rezados.includes(f.id) ? "Rezado hoje" : `Rezei por ${f.nome}`}
                  </BotaoRezei>
                )}
              </li>
            );
          })}
        </ul>
      )}

      {apoio.visivel && <CartaoDeApoio aoFechar={apoio.fechar} />}

      <Cartao>
        <form onSubmit={enviar} className="flex flex-col gap-3">
          <h2 className="text-xl font-bold text-marca tracking-[-0.02em]">Lembrar de alguém</h2>
          <label className="flex flex-col gap-1">
            <span className="text-sm font-medium text-tinta-suave">Nome</span>
            <input value={nome} onChange={(e) => setNome(e.target.value)} className="min-h-12 rounded-xl border border-borda bg-papel px-3 text-base" />
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-sm font-medium text-tinta-suave">Dia do falecimento</span>
            <input type="date" value={data} onChange={(e) => setData(e.target.value)} className="min-h-12 rounded-xl border border-borda bg-papel px-3 text-base" />
          </label>
          <button type="submit" disabled={!valido} className="min-h-12 rounded-xl bg-primario font-semibold text-sobre-primario disabled:opacity-50">
            Guardar
          </button>
        </form>
      </Cartao>
    </div>
  );
}
