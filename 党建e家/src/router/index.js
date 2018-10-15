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
          name: '通知早知道',
          component: () => import('@/views/layout/inform')
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
    }
  ]
})
