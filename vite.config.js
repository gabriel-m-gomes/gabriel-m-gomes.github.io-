import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/gabriel-m-gomes.github.io-/", // observe o hífen no final
  plugins: [tailwindcss(), react()],
});
