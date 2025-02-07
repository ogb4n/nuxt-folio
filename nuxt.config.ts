// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@unocss/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "@nuxt/icon",
    "shadcn-nuxt",
  ],
  i18n: {
    locales: [
      { code: "en", name: "English" },
      { code: "fr", name: "Français" },
    ],
    defaultLocale: "en",
    strategy: "prefix_except_default", // Pour ajouter `/fr` ou `/en` dans l'URL sauf pour la langue par défaut
    vueI18n: "./i18n.config.ts", // Lien vers ton fichier de config i18n
  },
  shadcn: {
    prefix: "shadcn",
    componentDir: "./components/ui",
  },
});
