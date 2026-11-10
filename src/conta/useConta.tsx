import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import type { SupabaseClient } from "@supabase/supabase-js";
import { esquecerSincronizacao, notarMudancasLocais, sincronizar } from "./sincronizar";

type Estado = "parado" | "sincronizando" | "erro";

interface Contexto {
  pronto: boolean;
  email: string | null;
  estado: Estado;
  ultima: Date | null;
  carregar: () => Promise<SupabaseClient>;
  entrarComGoogle: () => Promise<string | null>;
  entrarComSenha: (email: string, senha: string) => Promise<string | null>;
  criarConta: (email: string, senha: string) => Promise<{ erro: string | null; confirmar: boolean }>;
  sincronizarAgora: () => Promise<void>;
  sair: () => Promise<void>;
  apagarConta: () => Promise<string | null>;
}

const Ctx = createContext<Contexto | null>(null);

const temSessaoGuardada = () => {
  try {
    return !!localStorage.getItem("santinho-auth") || /access_token=|[?&]code=/.test(window.location.href);
  } catch {
    return false;
  }
};

export function traduzir(mensagem: string): string {
  const m = mensagem.toLowerCase();
  if (m.includes("invalid login credentials")) return "E-mail ou senha incorretos.";
  if (m.includes("already registered") || m.includes("already been registered")) return "Já existe uma conta com este e-mail.";
  if (m.includes("password should be") || m.includes("weak password") || m.includes("at least")) return "A senha precisa de pelo menos 8 caracteres, com letras e números.";
  if (m.includes("email not confirmed")) return "Falta confirmar o e-mail desta conta.";
  if (m.includes("invalid") && m.includes("email")) return "Confira o e-mail digitado.";
  if (m.includes("rate limit") || m.includes("too many")) return "Muitas tentativas. Espere alguns minutos e tente de novo.";
  if (m.includes("signups not allowed") || m.includes("signup is disabled")) return "Criar conta está desligado no momento.";
  if (m.includes("provider is not enabled") || m.includes("unsupported provider")) return "Entrar com Google ainda não está disponível.";
  if (m.includes("fetch") || m.includes("network")) return "Sem conexão. Tente de novo com internet.";
  return "Não foi possível agora. Tente de novo em alguns minutos.";
}

const voltarPara = () => `${window.location.origin}/conta`;

export function ContaProvider({ children }: { children: ReactNode }) {
  const [cliente, setCliente] = useState<SupabaseClient | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [pronto, setPronto] = useState(!temSessaoGuardada());
  const [estado, setEstado] = useState<Estado>("parado");
  const [ultima, setUltima] = useState<Date | null>(null);
  const emCurso = useRef(false);

  const carregar = useCallback(async () => {
    const { supabase } = await import("@/lib/supabase");
    setCliente(supabase);
    return supabase;
  }, []);

  useEffect(() => {
    if (temSessaoGuardada()) void carregar();
  }, [carregar]);

  useEffect(() => {
    if (!cliente) return;
    let ativo = true;
    void cliente.auth.getSession().then(({ data }) => {
      if (!ativo) return;
      setEmail(data.session?.user.email ?? null);
      setPronto(true);
    });
    const { data } = cliente.auth.onAuthStateChange((_evento, sessao) => {
      setEmail(sessao?.user.email ?? null);
      setPronto(true);
    });
    return () => {
      ativo = false;
      data.subscription.unsubscribe();
    };
  }, [cliente]);

  const sincronizarAgora = useCallback(async () => {
    if (!cliente || !email || emCurso.current) return;
    emCurso.current = true;
    setEstado("sincronizando");
    try {
      await sincronizar(cliente);
      setUltima(new Date());
      setEstado("parado");
    } catch {
      setEstado("erro");
    } finally {
      emCurso.current = false;
    }
  }, [cliente, email]);

  useEffect(() => {
    if (!email) return;
    void sincronizarAgora();
    const marcar = setInterval(() => notarMudancasLocais(), 5_000);
    const enviar = setInterval(() => void sincronizarAgora(), 60_000);
    const aoMudarVisibilidade = () => void sincronizarAgora();
    document.addEventListener("visibilitychange", aoMudarVisibilidade);
    window.addEventListener("online", aoMudarVisibilidade);
    return () => {
      clearInterval(marcar);
      clearInterval(enviar);
      document.removeEventListener("visibilitychange", aoMudarVisibilidade);
      window.removeEventListener("online", aoMudarVisibilidade);
    };
  }, [email, sincronizarAgora]);

  const entrarComGoogle = useCallback(async () => {
    const c = cliente ?? (await carregar());
    const { error } = await c.auth.signInWithOAuth({ provider: "google", options: { redirectTo: voltarPara() } });
    return error ? traduzir(error.message) : null;
  }, [cliente, carregar]);

  const entrarComSenha = useCallback(
    async (endereco: string, senha: string) => {
      const c = cliente ?? (await carregar());
      const { error } = await c.auth.signInWithPassword({ email: endereco, password: senha });
      return error ? traduzir(error.message) : null;
    },
    [cliente, carregar],
  );

  const criarConta = useCallback(
    async (endereco: string, senha: string) => {
      const c = cliente ?? (await carregar());
      const { data, error } = await c.auth.signUp({ email: endereco, password: senha, options: { emailRedirectTo: voltarPara() } });
      if (error) return { erro: traduzir(error.message), confirmar: false };
      if (data.user && data.user.identities?.length === 0) return { erro: "Já existe uma conta com este e-mail.", confirmar: false };
      return { erro: null, confirmar: !data.session };
    },
    [cliente, carregar],
  );

  const sair = useCallback(async () => {
    await sincronizarAgora();
    await cliente?.auth.signOut();
    esquecerSincronizacao();
    setEmail(null);
  }, [cliente, sincronizarAgora]);

  const apagarConta = useCallback(async () => {
    if (!cliente) return "sem conexão";
    const { error } = await cliente.rpc("apagar_minha_conta");
    if (error) return error.message;
    await cliente.auth.signOut();
    esquecerSincronizacao();
    setEmail(null);
    return null;
  }, [cliente]);

  const valor = useMemo(
    () => ({ pronto, email, estado, ultima, carregar, entrarComGoogle, entrarComSenha, criarConta, sincronizarAgora, sair, apagarConta }),
    [pronto, email, estado, ultima, carregar, entrarComGoogle, entrarComSenha, criarConta, sincronizarAgora, sair, apagarConta],
  );
  return <Ctx.Provider value={valor}>{children}</Ctx.Provider>;
}

export function useConta() {
  const c = useContext(Ctx);
  if (!c) throw new Error("ContaProvider ausente");
  return c;
}
