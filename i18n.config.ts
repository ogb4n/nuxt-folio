export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: {
        en: {
          welcome: 'Welcome',
          contact: 'Get in touch'
        },
        fr: {
          welcome: 'Bienvenue',
          contact: 'Contactez-nous'
        }
      }
  }))