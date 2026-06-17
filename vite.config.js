import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Relative base ('./') keeps asset URLs working whether the site is served from
// a custom domain, the repo root, or a GitHub Pages project path (/<repo>/).
export default defineConfig({
  base: "./",
  plugins: [react()],
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});
