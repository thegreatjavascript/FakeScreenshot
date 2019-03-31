import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/sina'
    },
    {
      path: '/sina',
      name: 'sina',
      component: () => import('@/components/sina/index.vue'),
      children: [
        {
          path: '/',
          redirect: 'simple'
        },
        {
          path: 'simple',
          name: 'simple',
          component: () => import('@/components/sina/simple/index.vue')
        },
        {
          path: 'hot',
          name: 'hot',
          component: () => import('@/components/sina/hot/index.vue')
        }
      ]
    },
    {
      path: '/zhihu',
      name: 'zhihusimple',
      component: () => import('@/components/zhihu/simple/index.vue')
    },
    {
      path: '/douban/',
      name: 'douban',
      component: () => import('@/components/douban/index.vue'),
      children: [
        {
          path: '/',
          redirect: 'note'
        },
        {
          path: 'movie',
          name: 'movie',
          component: () => import('@/components/douban/movie/index.vue')
        },
        {
          path: 'note',
          name: 'note',
          component: () => import('@/components/douban/note/index.vue')
        }
      ]
    },
    {
      path: '/v2ex',
      name: 'v2exsimple',
      component: () => import('@/components/v2ex/simple/index.vue')
    },
    {
      path: '/jianshu',
      name: 'jianshusimple',
      component: () => import('@/components/jianshu/simple/index.vue')
    },
    {
      path: '/acfun',
      name: 'acfunsimple',
      component: () => import('@/components/acfun/simple/index.vue')
    },
    {
      path: '/twitter',
      name: 'twittersimple',
      component: () => import('@/components/twitter/simple/index.vue')
    }
  ]
})
