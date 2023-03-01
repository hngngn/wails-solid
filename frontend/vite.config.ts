import unoCSS from "unocss/vite";
import { defineConfig } from "vite";
import pages from "vite-plugin-pages";
import solidPlugin from "vite-plugin-solid";
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    solidPlugin(),
    pages({
      routeStyle: "remix",
    }),
    unoCSS(),
    tsconfigPaths()
  ],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
  },
});
