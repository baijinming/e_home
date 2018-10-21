// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import xhr from './utils/axios'
import store from './store/store'
import Mint from 'mint-ui';

Vue.use(Mint);
Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$axios = xhr

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
