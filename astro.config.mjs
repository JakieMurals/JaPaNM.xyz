import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // The URL of your deployed site
  site: "https://JakieMurals.github.io/JaPaNM.xyz/",
  // The base path for your GitHub Pages repository
  base: "/JaPaNM.xyz/",
  // Output type for static site generation
  output: "static",
  // Server configuration for local development
  server: { port: 3000 },
  // Integrations for Astro
integrations: [
    tailwind({
      config: { applyBaseStyles: false },
    })
  ],
})