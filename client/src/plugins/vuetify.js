import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify)

const opts = {
    theme: { rtl: true, dark: false },
};
const icons ={
    icons: {
        iconfont: 'mdi', // default - only for display purposes
      },
}

export default new Vuetify(opts)