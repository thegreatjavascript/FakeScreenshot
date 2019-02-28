import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'sinasimple',
      component: () => import('@/components/sina/simple')
    },
    {
      path: '/zhihu',
      name: 'zhihusimple',
      component: () => import('@/components/zhihu/simple')
    }
  ]
})
