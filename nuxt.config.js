import colors from 'vuetify/es5/util/colors';

export default {
  telemetry: false,
  ssr: false,

  target: 'static',

  cli: {
    badgeMessages: [
      `Application: ${process.env.npm_package_name.toUpperCase()}`,
      `Version:     ${process.env.npm_package_version}`
    ],
    bannerColor: 'green'
  },

  head: {
    titleTemplate: `%s • Free developer`,
    title: 'Dmitrii Baklai',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  loading: { color: '#fff' },

  css: ['~/assets/variables.css'],

  plugins: [],

  components: true,

  buildModules: ['@nuxtjs/vuetify', '@nuxtjs/pwa'],

  modules: ['@nuxtjs/meta', '@nuxtjs/i18n'],

  pwa: {
    meta: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      mobileApp: true,
      mobileAppIOS: true,
      appleStatusBarStyle: 'black',
      favicon: true,
      name: process.env.npm_package_author_name,
      author: process.env.npm_package_author_name,
      description: process.env.npm_package_description,
      theme_color: '#000',
      lang: 'ru',
      ogType: 'website',
      ogHost: 'baklai.github.io',
      ogImage: {
        path: '/icon.png',
        width: '50',
        height: '50',
        type: 'image/png'
      }
    },
    manifest: {
      name: process.env.npm_package_name,
      short_name: process.env.npm_package_name,
      description: process.env.npm_package_description,
      lang: 'ru',
      display: 'standalone',
      background_color: '#000'
    }
  },

  i18n: {
    lazy: true,
    langDir: 'lang/',
    strategy: 'no_prefix',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en-US.json',
        name: 'English'
      },
      {
        code: 'ru',
        iso: 'ru-RU',
        file: 'ru-RU.json',
        name: 'Русский'
      },
      {
        code: 'uk',
        iso: 'uk-UA',
        file: 'uk-UA.json',
        name: 'Українська'
      }
    ],
    defaultLocale: 'en',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'lang',
      redirectOn: 'root'
    },
    vueI18n: {
      fallbackLocale: 'en'
    }
  },

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          background: '#FFFFFF',
          themecolor: '#FFFFFF',
          scrollbar: '#FFFFFF',
          primary: '#1976D2',
          secondary: '#424242',
          accent: '#82B1FF',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FB8C00',
          thover: '#FAFAFA'
        },
        dark: {
          background: '#333333',
          themecolor: '#333333',
          scrollbar: '#333333',
          primary: '#2196F3',
          secondary: '#424242',
          accent: '#FF4081',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FB8C00',
          thover: '#424242'
        }
      }
    }
  },

  build: {
    extend(config, ctx) {}
  }
};
