import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

// Nota: No se puede usar await en el nivel superior en CommonJS
// Solución: Convertir la configuración en una función asíncrona
export default defineConfig(async () => {
  // Cargar el plugin cartographer condicionalmente
  const dynamicPlugins = process.env.NODE_ENV !== "production" && 
                         process.env.REPL_ID !== undefined
    ? [(await import("@replit/vite-plugin-cartographer")).default()]
    : [];

  return {
    plugins: [
      react(),
      runtimeErrorOverlay(),
      ...dynamicPlugins,
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "client", "src"),
        "@shared": path.resolve(__dirname, "shared"),
        "@assets": path.resolve(__dirname, "attached_assets"),
      },
    },
    root: path.resolve(__dirname, "client"),
    build: {
      outDir: path.resolve(__dirname, "dist/public"),
      emptyOutDir: true,
    },
    server: {
      fs: {
        strict: true,
        deny: ["**/.*"],
      },
    },
  };
});