import path from "path"
import react from '@vitejs/plugin-react-swc'
import { ConfigEnv, defineConfig } from 'vite'
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'


export default defineConfig(({ mode }: ConfigEnv) => {
  return {
    plugins: [
      react(),
      TanStackRouterVite()
    ],
    envDir: "./src",
    server: {
      port: 5000,
    },
    base: "./",
    resolve: {
      alias: {
        "assets": path.resolve(__dirname, "./src/assets"),
        "components": path.resolve(__dirname, "./src/components"),
        "modules": path.resolve(__dirname, "./src/modules")
      },
    },
  }
});