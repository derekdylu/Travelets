// Styles
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, md } from 'vuetify/iconsets/md'

export default createVuetify({
  theme: {
    themes: {
      dark: false,
      light: {
        colors: {
          primary: '#5EA839',
          secondary: '#7A7A7A',
          danger: '#D32F2F'
        },
      },
    }
  },
  icons: {
    defaultSet: 'md',
    aliases,
    sets: {
      md,
    },
  },
})