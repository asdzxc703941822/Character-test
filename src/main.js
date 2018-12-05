import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import rem from './config/rem'
import MintUI from 'mint-ui'
Vue.use(MintUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  rem,
  render: h => h(App)
}).$mount('#app')
