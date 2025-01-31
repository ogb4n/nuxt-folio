export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: {
        en: {
          welcome: 'Welcome',
          contact: 'Get in touch',
          work: "My past missions"
          
        },
        fr: {
          welcome: 'Bienvenue',
          contact: 'Contactez-nous',
          work: "Mes missions passées"

        }
      }
  }))