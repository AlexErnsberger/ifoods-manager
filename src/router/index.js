import Vue from 'vue'
import Router from 'vue-router'
import MgrHome from '@/views/MgrHome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mgrHome',
      component: MgrHome
    }
  ]
})
