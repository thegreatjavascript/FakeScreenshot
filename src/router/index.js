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
    // {
    //   path: '/zhihu',
    //   name: 'zhihusimple',
    //   component: () => import('@/components/zhihu/simple')
    // },
    {
      path: '/douban/',
      name: 'douban',
      component: () => import('@/components/douban/Index.vue'),
      children: [
        {
          path: '/',
          redirect: 'note'
        },
        {
          path: 'movie',
          name: 'movie',
          component: () => import('@/components/douban/movie/Index.vue')
        },
        {
          path: 'note',
          name: 'note',
          component: () => import('@/components/douban/note/Index.vue')
        }
      ]
    }
  ]
})
