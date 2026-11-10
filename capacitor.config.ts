import type { CapacitorConfig } from "@capacitor/cli";
import { NOME_DO_APP } from "./src/marca";

const config: CapacitorConfig = {
  appId: "br.com.minhaigrejinha",
  appName: NOME_DO_APP,
  webDir: "dist",
  backgroundColor: "#FBF0DD",
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      launchAutoHide: false,
      backgroundColor: "#FBF0DD",
      showSpinner: false,
    },
    LocalNotifications: {
      smallIcon: "ic_stat_santinho",
      iconColor: "#8A5A1E",
    },
  },
};

export default config;
