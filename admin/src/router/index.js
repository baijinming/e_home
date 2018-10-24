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
        },
        {
          path: 'user',
          component: () => import('@/views/User')
        },
        {
          path: 'addUser',
          component: () => import('@/views/User/addUser')
        },
        {
          path: 'news',
          component: () => import('@/views/News')
        },
        {
          path: 'addNews',
          component: () => import('@/views/News/addNews')
        },
        {
          path: 'swiper',
          component: () => import('@/views/Swiper')
        },
        {
          path: 'addSwiper',
          component: () => import('@/views/Swiper/addSwiper')
        },
        {
          path: 'redactSwiper/:id',
          component: () => import('@/views/Swiper/addSwiper')
        }
      ]
    }
  ]
})
