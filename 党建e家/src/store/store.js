import Vue from 'vue'
import Vuex from 'vuex'
import persistedstate from "vuex-persistedstate"

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    title: '',
    needBack: true,
    userInfo: {},
    token: ''
  },
  mutations: {
    'CHANGE_TITLE'(state, text) {
      state.title = text
    },
    'CHANGE_BACK'(state, need) {
      state.needBack = need
    },
    'CHANGE_INFO'(state, info) {
      state.userInfo = info
    },
    'CHANGE_TOKEN'(state, token) {
      state.token = token;
    }
  },
  plugins: [
    persistedstate({
      storage: {
        getItem: key => sessionStorage.getItem(key),
        setItem: (key, value) =>
          sessionStorage.setItem(key, value),
        removeItem: key => sessionStorage.removeItem(key)
      }
    })
  ]
})

export default store
