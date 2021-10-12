import Vue from 'vue'
import Vuex from 'vuex'
// 导入模块配置信息
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import user from './modules/user'

Vue.use(Vuex)

const store = new Vuex.Store({

  modules: {
    app,
    settings,
    user
  },
  getters
})

export default store
