// https://nuxt.com/docs/api/configuration/nuxt-config
import colors from 'vuetify/lib/util/colors'

export default defineNuxtConfig({
    app: {
      pageTransition: { name: 'slide' , mode: 'out-in'},
    },

    modules: [
        '@invictus.codes/nuxt-vuetify',
        '@nuxtjs/color-mode'
    ],
    css: [
      // Load a Node.js module directly (here it's a Sass file).
      // 'bulma',
      // CSS file in the project
      // '@/assets/css/main.css',
      // SCSS file in the project
      // '@/assets/css/main.scss'
      'assets/bgcolor.css'
    ],
    vuetify: {
      /* vuetify options */
      vuetifyOptions: {
        theme: {
          dark: false,
          defaultTheme: 'light',
          themes: {
            light: {
              dark: false,
              // variables: {}, // ✅ this property is required to avoid Vuetify crash         
              colors: {
                background: '#FFFFFF',
                surface: '#FFFFFF',
                primary: '#6200EE',
                'primary-darken-1': '#3700B3',
                secondary: colors.orange.darken1,
                'secondary-darken-1': '#018786',
                error: '#B00020',
                info: '#2196F3',
                success: '#4CAF50',
                warning: '#FB8C00',
              },
            },
            
          }
        }
      },
      moduleOptions: {
        /* nuxt-vuetify module options */
        treeshaking: true,
        useIconCDN: true,
        /* vite-plugin-vuetify options */
        styles: true,
        autoImport: true,
        
      },
      // customVariables: ['~/assets/variables.scss'],
    }    
})
