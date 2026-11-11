import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { BadgeCheck, Cloud, CloudOff, LogOut, RefreshCw, Trash2 } from "lucide-react";
import { useApoiador } from "@/apoio/api";
import { ehApoiador } from "@/lib/preferencias";
import { dataCurta } from "@/paroquias/plano";
import { useConta } from "@/conta/useConta";
import { ATUALIZADO_EM, CONTATO, PRIVACIDADE, TERMOS, type Secao } from "@/conta/textos";
import { Cartao } from "@/components/Cartao";
import { Cabecalho, Carregando, Voltar } from "@/components/Devocao";

const horas = (d: Date) => d.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });

function Entrar() {
  const { entrarComSenha, criarConta, entrarComGoogle } = useConta();
  const [modo, setModo] = useState<"entrar" | "criar">("entrar");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [repetir, setRepetir] = useState("");
  const [ocupado, setOcupado] = useState(false);
  const [erro, setErro] = useState("");
  const [confirmar, setConfirmar] = useState(false);

  const senhaBoa = senha.length >= 8 && /\d/.test(senha) && /\p{L}/u.test(senha);
  const pode = email.includes("@") && (modo === "entrar" ? senha.length > 0 : senhaBoa && senha === repetir);

  async function enviar(e: FormEvent) {
    e.preventDefault();
    if (!pode) return;
    setErro("");
    setOcupado(true);
    if (modo === "entrar") {
      const falha = await entrarComSenha(email.trim(), senha);
      if (falha) setErro(falha);
    } else {
      const r = await criarConta(email.trim(), senha);
      if (r.erro) setErro(r.erro);
      else if (r.confirmar) setConfirmar(true);
    }
    setOcupado(false);
  }

  async function google() {
    setErro("");
    const falha = await entrarComGoogle();
    if (falha) setErro(falha);
  }

  const trocar = (m: "entrar" | "criar") => {
    setModo(m);
    setErro("");
    setRepetir("");
  };

  if (confirmar)
    return (
      <Cartao>
        <p className="text-tinta">
          Conta criada. Falta confirmar o endereço <strong>{email}</strong> pelo link que enviamos por e-mail.
        </p>
      </Cartao>
    );

  return (
    <div className="flex flex-col gap-4">
      <Cartao className="flex flex-col gap-4">
        <div className="grid grid-cols-2 rounded-xl border border-borda bg-papel p-1" role="tablist">
          {(
            [
              ["entrar", "Entrar"],
              ["criar", "Criar conta"],
            ] as const
          ).map(([v, nome]) => (
            <button
              key={v}
              type="button"
              role="tab"
              aria-selected={modo === v}
              onClick={() => trocar(v)}
              className={`min-h-10 rounded-lg text-sm font-semibold ${modo === v ? "bg-destaque text-sobre-destaque" : "text-tinta-suave"}`}
            >
              {nome}
            </button>
          ))}
        </div>
        <form onSubmit={enviar} className="flex flex-col gap-3">
          <label className="flex flex-col gap-1">
            <span className="text-sm font-medium text-tinta-suave">E-mail</span>
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" className="min-h-12 rounded-xl border border-borda bg-papel px-3 text-base" />
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-sm font-medium text-tinta-suave">Senha</span>
            <input
              type="password"
              required
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              autoComplete={modo === "entrar" ? "current-password" : "new-password"}
              className="min-h-12 rounded-xl border border-borda bg-papel px-3 text-base"
            />
          </label>
          {modo === "criar" && (
            <>
              <label className="flex flex-col gap-1">
                <span className="text-sm font-medium text-tinta-suave">Repita a senha</span>
                <input type="password" required value={repetir} onChange={(e) => setRepetir(e.target.value)} autoComplete="new-password" className="min-h-12 rounded-xl border border-borda bg-papel px-3 text-base" />
              </label>
              <ul className="flex flex-col gap-0.5 text-sm">
                <li className={senha.length >= 8 ? "text-destaque-texto" : "text-tinta-suave"}>Pelo menos 8 caracteres</li>
                <li className={/\d/.test(senha) && /\p{L}/u.test(senha) ? "text-destaque-texto" : "text-tinta-suave"}>Letras e números</li>
                {repetir && senha !== repetir && <li className="text-[#a9271f]">As duas senhas não são iguais</li>}
              </ul>
            </>
          )}
          <button type="submit" disabled={!pode || ocupado} className="min-h-12 rounded-xl bg-destaque font-semibold text-sobre-destaque disabled:opacity-50">
            {ocupado ? "Aguarde" : modo === "entrar" ? "Entrar" : "Criar conta"}
          </button>
        </form>
        {erro && <p className="text-sm font-medium text-[#a9271f]">{erro}</p>}
        <div className="flex items-center gap-3 text-sm text-tinta-suave">
          <span className="h-px flex-1 bg-borda" />
          ou
          <span className="h-px flex-1 bg-borda" />
        </div>
        <button type="button" onClick={google} className="min-h-12 rounded-xl border border-borda bg-papel font-semibold text-tinta">
          Continuar com Google
        </button>
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
  const apoiadorAte = useApoiador();
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
        {ehApoiador({ apoiadorAte }) && (
          <Link to="/apoie" className="mt-3 flex w-fit items-center gap-1.5 rounded-full bg-marca-fundo px-3 py-1 text-sm font-medium text-destaque-texto">
            <BadgeCheck className="size-4" aria-hidden /> Apoiador até {dataCurta(apoiadorAte)}
          </Link>
        )}
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
