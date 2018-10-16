import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout,
      redirect: '/index',
      children: [
        {
          path: 'index',
          component: () => import('@/views/layout/index')
        },
        {
          path: 'inform',
          name: 'inform',
          component: () => import('@/views/layout/inform')
        },
        {
          path: 'party',
          name: 'party',
          component: () => import('@/views/layout/party')
        }
      ]
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: () => import('@/views/detail/detail')
    },
    {
      path: '/login',
      component: () => import('@/views/login/login')
    },
    {
      path: '/list',
      component: () => import('@/views/list/list')
    },
    {
      path: '/organization',
      component: () => import('@/views/organization/organization')
    },
    {
      path: '/map',
      component: () => import('@/views/map/map')
    }
  ]
})
