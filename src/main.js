import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import rem from './config/rem'
import MintUI from 'mint-ui'
// import echarts from 'echarts'

Vue.use(MintUI)
// Vue.use(echarts)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  rem,
  render: h => h(App)
}).$mount('#app')
