import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

  const routes = [
    {
      path:'/',
      redirect:'/my',
    },
    {
      path: '/my',
      name: 'My',
      component:()=>import('@/views/userInfo/Personal.vue')
    },
    {
      path: '/userCenter',
      name: 'userCenter',
      component:()=>import('@/views/UserCenter/userCenter/userCenter.vue')
    },
    {
      path: '/remindOrder',
      name: 'remindOrder',
      component:()=>import('@/views/UserCenter/remindOrder/remindOrder.vue')
    },    
    {
      path: '/address',
      name: 'address',
      component:()=>import('@/views/UserCenter/address/address.vue')
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
