// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: true,
  vite: {
    plugins: [],
    server: {
      hmr: {
        protocol: process.env.CODESPACES ? 'wss' : 'ws',
        host: process.env.CODESPACE_NAME ? `${process.env.CODESPACE_NAME}-3000.githubpreview.dev` : 'localhost',
        port: 3000
      }
      //middlewareMode: true,
    },
  },
})
