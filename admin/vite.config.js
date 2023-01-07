import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";
import vue2 from "@vitejs/plugin-vue2";
import { env } from "node:process";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue2(),
    legacy({
      targets: ["ie >= 11"],
      additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  // server: {
  //   proxy: {
  //     "/api": {
  //       // target: "http://127.0.0.1:3000",
  //       target: env.VITE_API_URL,
  //       changeOrigin: true,
  //     },
  //     "/uploads": {
  //       // target: "http://127.0.0.1:3000",
  //       target: env.VITE_API_URL,
  //       changeOrigin: true,
  //     }
  //   },
  // },
});
