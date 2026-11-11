import { Link } from "react-router-dom";

export function NaoEncontrada() {
  return (
    <div className="py-16 text-center">
      <span className="simbolo mx-auto w-24 text-marca/30" aria-hidden />
      <h1 className="mt-6 text-2xl font-extrabold text-marca tracking-[-0.02em]">Página não encontrada</h1>
      <Link to="/" className="mt-6 inline-flex min-h-11 items-center rounded-xl bg-primario px-5 font-semibold text-sobre-primario">
        Voltar para Hoje
      </Link>
    </div>
  );
}
