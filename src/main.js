import Vue from 'vue'
import App from './App.vue'

import lmcustombar from './lib/index'
Vue.use(lmcustombar)

new Vue({
  el: '#app',
  render: h => h(App)
})
