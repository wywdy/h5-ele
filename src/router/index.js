import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component:()=>import('@/views/home/home.vue'),
    meta:{
      title:'首页'
    }
  },
  {
    path: '/order',
    name: 'Order',
    component:()=>import('@/views/home/home.vue'),
    meta:{
      title:'订单'
    }
  },
  {
    path: '/watch',
    name: 'Watch',
    component:()=>import('@/views/watch/watch.vue'),
    meta:{
      title:'发现'
    }
  },
  {
    path: '/my',
    name: 'My',
    component:()=>import('@/views/home/home.vue'),
    meta:{
      title:'我的'
    }
  },
  {
    path:'/query',
    name:'Query',
    component:()=>import('@/views/query/query.vue'),
    meta:{
      title:'搜索商品'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
