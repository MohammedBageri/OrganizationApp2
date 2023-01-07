import Vue from 'vue'
import store from './store'
import App from './App.vue'
import router from './router'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import "@fontsource/cairo/200.css"
import "@fontsource/cairo/300.css"
import "@fontsource/cairo/400.css"
import "@fontsource/cairo/500.css"
import "@fontsource/cairo/600.css"
import "@fontsource/cairo/700.css"
import "@fontsource/cairo/800.css"
import "@fontsource/cairo/900.css"



import './assets/main.css'

new Vue({
  vuetify,
  store,
  router,
  render: (h) => h(App)
}).$mount('#app')

