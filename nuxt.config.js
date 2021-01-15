import colors from "vuetify/es5/util/colors";

export default {
  ssr: process.env.GH_PAGES ? false : true,
  target: process.env.GH_PAGES ? "static" : "server",

  router: {
    base: process.env.GH_PAGES ? `/${process.env.npm_package_name}/` : "/"
  },

  head: {
    titleTemplate: `%s • ${process.env.npm_package_description}`,
    title: process.env.npm_package_author_name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  loading: { color: "#fff" },

  css: [],

  plugins: [],

  components: true,

  buildModules: ["@nuxtjs/vuetify"],

  modules: ["@nuxtjs/pwa"],

  pwa: {
    meta: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      mobileApp: true,
      mobileAppIOS: true,
      appleStatusBarStyle: "black",
      favicon: true,
      name: process.env.npm_package_author_name,
      author: process.env.npm_package_author_name,
      description: process.env.npm_package_description,
      theme_color: "#000",
      lang: "ru",
      ogType: "website",
      ogHost: process.env.BASE_URL,
      ogImage: {
        path: "/icon.png",
        width: "50",
        height: "50",
        type: "image/png"
      }
    },
    manifest: {
      name: process.env.npm_package_name,
      short_name: process.env.npm_package_name,
      description: process.env.npm_package_description,
      lang: "ru",
      display: "standalone",
      background_color: "#000"
    }
  },

  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },
        light: {
          primary: "#119DA4",
          secondary: "#171b34",
          accent: "3D87E4"
        }
      }
    }
  },

  build: {}
};
