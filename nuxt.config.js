// https://nuxt.com/docs/api/configuration/nuxt-config
import colors from 'vuetify/lib/util/colors'

export default defineNuxtConfig({
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
          defaultTheme: 'myCustomTheme',
          themes: {
            myCustomTheme: {
              dark: false,
              variables: {}, // ✅ this property is required to avoid Vuetify crash         
              colors: {
                //green: '#00ff00' // cannot use primary color names here, so use a custom color name (such as 'greenish')
                greenish: '#03DAC5',
                // Workaround: Custom colors seem to erase default colors, so we need to include the default colors (of `light` or `dark` theme)
                background: '#212121',
                surface: '#212121',
                primary: '#fb8c00', 
                'primary-darken-1': '#3700B3',
                secondary: colors.grey.lighten1,
                'secondary-darken-1': '#03DAC5',
                error: '#CF6679',
                info: '#2196F3',
                success: '#4CAF50',
                warning: '#FB8C00'
              },
            }
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
