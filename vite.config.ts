import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

const pathResolve = (dir: string) => resolve(__dirname, ".", dir);

/**
 * @type {import('vite').UserConfig}
 */
export default defineConfig({
   base: process.env.ELECTRON === "true" ? "./" : ".",
   plugins: [vue()],
   resolve: {
      alias: {
         "@": pathResolve("src"),
         "~": pathResolve("node_modules"),
         
      },
   },
});