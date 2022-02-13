import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import babel from "vite-babel-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      process: "process/browser",
      stream: "stream-browserify",
      zlib: "browserify-zlib",
      util: "util",
      https: "https-browserify",
    },
  },
  plugins: [react(), babel()],
});
