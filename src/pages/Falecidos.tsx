import { useState, type FormEvent } from "react";
import { Trash2 } from "lucide-react";
import { deIso, diaEMes, diferencaEmDias, hoje } from "@/liturgia/datas";
import { NOME_DA_LEMBRANCA, proximaLembranca, useFalecidos } from "@/vida/lembrancas";
import { Cartao } from "@/components/Cartao";
import { Blocos } from "@/components/Blocos";
import { Cabecalho, Voltar } from "@/components/Devocao";

const dataLonga = (iso: string) => {
  const d = deIso(iso);
  return d ? `${diaEMes(d)} de ${d.getUTCFullYear()}` : "";
};

export default function Falecidos() {
  const [lista, incluir, tirar] = useFalecidos();
  const [nome, setNome] = useState("");
  const [data, setData] = useState("");
  const h = hoje();
  const valido = nome.trim() && deIso(data) && diferencaEmDias(deIso(data)!, h) <= 0;

  const enviar = (e: FormEvent) => {
    e.preventDefault();
    if (!valido) return;
    incluir({ nome: nome.trim(), data });
    setNome("");
    setData("");
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
              <li key={f.id} className="flex items-start gap-3 rounded-2xl border border-borda bg-cartao px-4 py-3">
                <span className="min-w-0 flex-1">
                  <span className="block font-leitura text-[1.1rem] font-semibold text-marca">{f.nome}</span>
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
              </li>
            );
          })}
        </ul>
      )}

      <Cartao>
        <form onSubmit={enviar} className="flex flex-col gap-3">
          <h2 className="font-leitura text-xl font-semibold text-marca">Lembrar de alguém</h2>
          <label className="flex flex-col gap-1">
            <span className="text-sm font-medium text-tinta-suave">Nome</span>
            <input value={nome} onChange={(e) => setNome(e.target.value)} className="min-h-12 rounded-xl border border-borda bg-papel px-3 text-base" />
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-sm font-medium text-tinta-suave">Dia do falecimento</span>
            <input type="date" value={data} onChange={(e) => setData(e.target.value)} className="min-h-12 rounded-xl border border-borda bg-papel px-3 text-base" />
          </label>
          <button type="submit" disabled={!valido} className="min-h-12 rounded-xl bg-destaque font-semibold text-sobre-destaque disabled:opacity-50">
            Guardar
          </button>
        </form>
      </Cartao>
    </div>
  );
}
