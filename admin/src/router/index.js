import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/layout',
      redirect: '/layout/home',
      component: () => import('@/views/Layout'),
      children: [
        {
          path: 'home',
          component:() => import('@/views/Home')
        }
      ]
    }
  ]
})
