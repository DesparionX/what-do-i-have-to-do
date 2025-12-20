import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { readFileSync } from "fs";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    https: {
      key: readFileSync("./cert/key.pem"),
      cert: readFileSync("./cert/cert.pem"),
    },
    host: "192.168.0.159",
    port: 5173,
    open: true,
  },
});
