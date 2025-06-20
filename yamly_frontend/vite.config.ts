import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    /* 이것은 backend랑 연동때만
    outDir: path.resolve(
      __dirname,
      "../yamly_backend/src/main/resources/static"
    ),
    emptyOutDir: true,
    */
  },
});
