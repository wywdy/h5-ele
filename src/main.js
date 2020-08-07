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
import Business from "./views/business/Business";

//添加事件总线
Vue.prototype.$bus = new Vue()

Vue.config.productionTip = false

router.beforeEach((to,from,next)=>{
  document.title = to.meta.title
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
