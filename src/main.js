import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import './assets/styles/reset.css'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$axios=axios


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
