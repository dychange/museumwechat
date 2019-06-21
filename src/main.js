import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import './assets/styles/reset.css'
import axios from 'axios'
import 'weui'
import weui from 'weui.js'


Vue.config.productionTip = false
Vue.prototype.$axios=axios
Vue.prototype.$weui=weui

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
