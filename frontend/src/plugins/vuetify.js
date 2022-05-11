// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    defaultTheme: 'Travelets',
    themes: {
      Travelets: {
        dark: false,
        colors: {
          primary: '#5EA839',
          secondary: '#7A7A7A',
          danger: '#D32F2F'
        }
      }
    }
  }
})