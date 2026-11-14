/// <reference types="vitest/config" />
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";
import { fileURLToPath, URL } from "node:url";
import { NOME_DO_APP } from "./src/marca";

process.env.VITE_NOME_DO_APP = NOME_DO_APP;

const escapar = (t: string) => t.replace(/[.*+?^${}()|[\]\\/]/g, "\\$&");

function rotaDasFotos(base: string): RegExp {
  const limpa = (base.trim() || "/imagens/santos").replace(/\/+$/, "");
  return /^https?:\/\//.test(limpa) ? new RegExp(`^${escapar(limpa)}/`) : new RegExp(`^[^?#]*?//[^/]+${escapar(limpa)}/`);
}

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: false,
      includeAssets: ["favicon-santinho-32.png", "apple-touch-icon.png"],
      manifest: {
        name: NOME_DO_APP,
        short_name: NOME_DO_APP,
        description: "Liturgia diária, terço, Bíblia e orações. Gratuito e sem anúncios.",
        lang: "pt-BR",
        start_url: "/",
        scope: "/",
        display: "standalone",
        orientation: "portrait",
        background_color: "#FFFFFF",
        theme_color: "#FFFFFF",
        icons: [
          { src: "icone-192.png", sizes: "192x192", type: "image/png" },
          { src: "icone-512.png", sizes: "512x512", type: "image/png" },
          { src: "icone-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,png,svg,woff2,json}"],
        globIgnores: ["biblia/**", "imagens/santos/**", "santos/**"],
        navigateFallback: "/index.html",
        importScripts: ["sw-lembretes.js"],
        runtimeCaching: [
          {
            urlPattern: ({ url }) => url.pathname.startsWith("/biblia/") && url.pathname.endsWith(".json"),
            handler: "CacheFirst",
            options: { cacheName: "biblia", expiration: { maxEntries: 200 } },
          },
          {
            urlPattern: ({ url }) => url.pathname.startsWith("/santos/") && url.pathname.endsWith(".json"),
            handler: "CacheFirst",
            options: { cacheName: "santos-dados", expiration: { maxEntries: 800 } },
          },
          {
            urlPattern: rotaDasFotos(loadEnv(mode, process.cwd(), "VITE_").VITE_IMAGENS_URL ?? ""),
            handler: "CacheFirst",
            options: {
              cacheName: "fotos-dos-santos",
              expiration: { maxEntries: 1500, maxAgeSeconds: 60 * 60 * 24 * 365, purgeOnQuotaError: true },
              cacheableResponse: { statuses: [200] },
            },
          },
          {
            urlPattern: ({ url }) => url.pathname.startsWith("/imagens/"),
            handler: "CacheFirst",
            options: { cacheName: "santos", expiration: { maxEntries: 600 } },
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) },
  },
  test: {
    environment: "node",
  },
}));
