/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";
import { fileURLToPath, URL } from "node:url";
import { NOME_DO_APP } from "./src/marca";

process.env.VITE_NOME_DO_APP = NOME_DO_APP;

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
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
        background_color: "#FBF0DD",
        theme_color: "#FBF0DD",
        icons: [
          { src: "icone-192.png", sizes: "192x192", type: "image/png" },
          { src: "icone-512.png", sizes: "512x512", type: "image/png" },
          { src: "icone-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,png,svg,woff2,json}"],
        globIgnores: ["biblia/**", "imagens/santos/**"],
        navigateFallback: "/index.html",
        runtimeCaching: [
          {
            urlPattern: ({ url }) => url.pathname.startsWith("/biblia/") && url.pathname.endsWith(".json"),
            handler: "CacheFirst",
            options: { cacheName: "biblia", expiration: { maxEntries: 200 } },
          },
          {
            urlPattern: ({ url }) => url.pathname.startsWith("/imagens/santos/"),
            handler: "CacheFirst",
            options: { cacheName: "santos", expiration: { maxEntries: 120 } },
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
});
