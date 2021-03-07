export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
mode:'spa',
  head: {
    title: 'proj',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;1,300;1,700&display=swap" },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.15.1/css/all.css' },
    ],
    script: [
      { src: "https://unpkg.com/aframe/dist/aframe-master.min.js" },
      {
        src:
          "https://unpkg.com/aframe-html-shader/dist/aframe-html-shader.min.js",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    {src:"~/static/style.css"}
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/chats', mode: 'client' },
  ],
 script: [
    { src: "https://unpkg.com/aframe/dist/aframe-master.min.js" },
    {
      src:
        "https://unpkg.com/aframe-html-shader/dist/aframe-html-shader.min.js",
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    'vue-sweetalert2/nuxt'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
