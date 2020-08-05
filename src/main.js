import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//引入vant ui
import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)

//移动端适配处理
import 'postcss-pxtorem'
import 'lib-flexible'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
