import type { CapacitorConfig } from "@capacitor/cli";

// ⚠️ appId é PERMANENTE nas lojas (Google Play e App Store): não mudar depois de publicar.
const config: CapacitorConfig = {
  appId: "br.com.appsantinho",
  appName: "Santinho",
  webDir: "dist",
};

export default config;
