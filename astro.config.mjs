// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://mohsenmosleh.com",
  base: "/",
  trailingSlash: "ignore",
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    format: "directory",
  },
});
