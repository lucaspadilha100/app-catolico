import { Component, type ReactNode } from "react";

export class Falha extends Component<{ children: ReactNode }, { falhou: boolean }> {
  state = { falhou: false };

  static getDerivedStateFromError() {
    return { falhou: true };
  }

  render() {
    if (!this.state.falhou) return this.props.children;
    return (
      <div className="flex flex-col items-center gap-4 py-12 text-center">
        <p className="text-tinta-suave">Não foi possível abrir esta tela.</p>
        <button
          type="button"
          onClick={() => location.reload()}
          className="min-h-11 rounded-full bg-destaque px-5 text-sm font-semibold text-sobre-destaque"
        >
          Tentar de novo
        </button>
      </div>
    );
  }
}
