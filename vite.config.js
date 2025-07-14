import { defineConfig } from "vite";

import path from "path";

import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/NFC-4.0",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
