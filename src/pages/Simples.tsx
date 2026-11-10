import { Link } from "react-router-dom";
import { Church, MapPin, Clock, BadgeCheck } from "lucide-react";
import { ItemLista, TituloPagina } from "@/components/Cartao";

export function Missas() {
  return (
    <div>
      <TituloPagina>Missas</TituloPagina>
      <div className="flex flex-col gap-3">
        <ItemLista icone={MapPin} titulo="Missas perto de mim" />
        <ItemLista icone={Clock} titulo="Confissão e adoração" />
        <ItemLista icone={Church} titulo="Minha paróquia" />
        <ItemLista icone={BadgeCheck} titulo="Sugerir paróquia ou horário" />
      </div>
    </div>
  );
}

export function NaoEncontrada() {
  return (
    <div className="py-16 text-center">
      <span className="simbolo mx-auto w-24 text-marca/30" aria-hidden />
      <h1 className="mt-6 font-leitura text-2xl font-semibold text-marca">Página não encontrada</h1>
      <Link to="/" className="mt-6 inline-flex min-h-11 items-center rounded-xl bg-destaque px-5 font-semibold text-sobre-destaque">
        Voltar para Hoje
      </Link>
    </div>
  );
}
