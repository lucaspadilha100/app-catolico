import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { Cloud, CloudOff, LogOut, RefreshCw, Trash2 } from "lucide-react";
import { useConta } from "@/conta/useConta";
import { ATUALIZADO_EM, CONTATO, PRIVACIDADE, TERMOS, type Secao } from "@/conta/textos";
import { Cartao } from "@/components/Cartao";
import { Cabecalho, Carregando, Voltar } from "@/components/Devocao";

const horas = (d: Date) => d.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });

function Entrar() {
  const { entrarComEmail, entrarComGoogle } = useConta();
  const [email, setEmail] = useState("");
  const [estado, setEstado] = useState<"" | "enviando" | "enviado">("");
  const [erro, setErro] = useState("");

  async function enviar(e: FormEvent) {
    e.preventDefault();
    setErro("");
    setEstado("enviando");
    const falha = await entrarComEmail(email.trim());
    setEstado(falha ? "" : "enviado");
    if (falha) setErro("Não foi possível enviar agora. Tente de novo em alguns minutos.");
  }

  async function google() {
    setErro("");
    const falha = await entrarComGoogle();
    if (falha) setErro("Entrar com Google ainda não está disponível.");
  }

  return (
    <div className="flex flex-col gap-4">
      <Cartao className="flex flex-col gap-4">
        <button type="button" onClick={google} className="min-h-12 rounded-xl border border-borda bg-papel font-semibold text-tinta">
          Entrar com Google
        </button>
        <div className="flex items-center gap-3 text-sm text-tinta-suave">
          <span className="h-px flex-1 bg-borda" />
          ou
          <span className="h-px flex-1 bg-borda" />
        </div>
        {estado === "enviado" ? (
          <p className="text-tinta">
            Enviamos um link para <strong>{email}</strong>. Abra o e-mail neste aparelho e toque no link.
          </p>
        ) : (
          <form onSubmit={enviar} className="flex flex-col gap-3">
            <label className="flex flex-col gap-1">
              <span className="text-sm font-medium text-tinta-suave">E-mail</span>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                className="min-h-12 rounded-xl border border-borda bg-papel px-3 text-base"
              />
            </label>
            <button type="submit" disabled={estado === "enviando" || !email.includes("@")} className="min-h-12 rounded-xl bg-destaque font-semibold text-sobre-destaque disabled:opacity-50">
              {estado === "enviando" ? "Enviando" : "Receber link de entrada"}
            </button>
          </form>
        )}
        {erro && <p className="text-sm font-medium text-[#a9271f]">{erro}</p>}
      </Cartao>
      <p className="px-1 text-sm text-tinta-suave">
        Ao entrar, você concorda com os{" "}
        <Link to="/termos" className="font-medium text-destaque-texto underline underline-offset-2">
          termos de uso
        </Link>{" "}
        e a{" "}
        <Link to="/privacidade" className="font-medium text-destaque-texto underline underline-offset-2">
          política de privacidade
        </Link>
        .
      </p>
    </div>
  );
}

function Logado() {
  const { email, estado, ultima, sincronizarAgora, sair, apagarConta } = useConta();
  const [erro, setErro] = useState("");

  async function apagar() {
    if (!window.confirm("Apagar a sua conta e tudo o que está guardado na nuvem? Os dados deste aparelho continuam aqui.")) return;
    const falha = await apagarConta();
    if (falha) setErro("Não foi possível apagar agora. Tente de novo com internet.");
  }

  return (
    <div className="flex flex-col gap-4">
      <Cartao>
        <p className="text-sm text-tinta-suave">Conectado como</p>
        <p className="mt-1 break-all font-semibold text-marca">{email}</p>
        <p className="mt-3 flex items-center gap-2 text-sm text-tinta-suave">
          {estado === "erro" ? <CloudOff className="size-4" aria-hidden /> : <Cloud className="size-4" aria-hidden />}
          {estado === "sincronizando" ? "Sincronizando" : estado === "erro" ? "Sem conexão com a nuvem" : ultima ? `Sincronizado às ${horas(ultima)}` : ""}
        </p>
        <button type="button" onClick={() => void sincronizarAgora()} className="mt-4 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-borda bg-papel font-semibold text-destaque-texto">
          <RefreshCw className="size-4" aria-hidden /> Sincronizar agora
        </button>
      </Cartao>
      <button type="button" onClick={() => void sair()} className="flex min-h-12 items-center justify-center gap-2 rounded-xl border border-borda bg-cartao font-semibold text-tinta">
        <LogOut className="size-4" aria-hidden /> Sair
      </button>
      <button type="button" onClick={() => void apagar()} className="flex min-h-12 items-center justify-center gap-2 rounded-xl font-semibold text-[#a9271f]">
        <Trash2 className="size-4" aria-hidden /> Apagar minha conta
      </button>
      {erro && <p className="text-sm font-medium text-[#a9271f]">{erro}</p>}
    </div>
  );
}

export default function Conta() {
  const { pronto, email } = useConta();
  return (
    <div className="flex flex-col gap-5">
      <Voltar para="/mais">Mais</Voltar>
      <Cabecalho titulo="Conta" />
      {!pronto ? <Carregando /> : email ? <Logado /> : <Entrar />}
      <div className="flex gap-4 px-1 text-sm">
        <Link to="/privacidade" className="font-medium text-destaque-texto">
          Privacidade
        </Link>
        <Link to="/termos" className="font-medium text-destaque-texto">
          Termos de uso
        </Link>
      </div>
    </div>
  );
}

function Documento({ titulo, secoes }: { titulo: string; secoes: Secao[] }) {
  const contato = CONTATO || "pelo contato que será informado aqui";
  return (
    <div className="flex flex-col gap-5">
      <Voltar para="/conta">Conta</Voltar>
      <Cabecalho titulo={titulo} subtitulo={`Atualizado em ${ATUALIZADO_EM}`} />
      {secoes.map((s) => (
        <section key={s.titulo} className="flex flex-col gap-2">
          <h2 className="font-leitura text-xl font-semibold text-marca">{s.titulo}</h2>
          {s.paragrafos.map((p, i) => (
            <p key={i} className="leading-relaxed text-tinta">
              {p.replace("CONTATO", contato)}
            </p>
          ))}
        </section>
      ))}
    </div>
  );
}

export const Privacidade = () => <Documento titulo="Política de privacidade" secoes={PRIVACIDADE} />;
export const Termos = () => <Documento titulo="Termos de uso" secoes={TERMOS} />;
