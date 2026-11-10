import { createClient } from "@supabase/supabase-js";

// URL e chave publicável são PÚBLICAS (vão no bundle). A service_role nunca entra no app.
const url = import.meta.env.VITE_SUPABASE_URL as string;
const chave = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string;

export const supabase = createClient(url, chave, {
  auth: {
    storageKey: "santinho-auth",
    persistSession: true,
    autoRefreshToken: true,
  },
});
