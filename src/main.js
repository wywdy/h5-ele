import Vue from 'vue'
// import App from './App.vue'
import router from './router'
import store from './store'

import Personal from './fangzheng/Personal.vue'

//引入vant ui
import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(Personal)
}).$mount('#app')
