import type { CapacitorConfig } from "@capacitor/cli";
import { NOME_DO_APP } from "./src/marca";

const config: CapacitorConfig = {
  appId: "br.com.appsantinho",
  appName: NOME_DO_APP,
  webDir: "dist",
};

export default config;
