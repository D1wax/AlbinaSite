import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Purecss from 'purecss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  Purecss,
  render: h => h(App)
}).$mount('#app')
