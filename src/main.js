import Vue from 'vue'
// 引入重置样式
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
// 导入 ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 导入语言包
import locale from 'element-ui/lib/locale/lang/en' // lang i18n
// 自定义全局样式
import '@/styles/index.scss' // global css
// 组件
import App from './App'
// 仓库
import store from './store'
// 路由
import router from './router'

import '@/icons' // icon
import '@/permission' // permission control

/** 模拟数据
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
// if (process.env.NODE_ENV === 'production') {
//   const { mockXHR } = require('../mock')
//   mockXHR()
// }

// set ElementUI lang to EN  配置ElementUI 及语言
Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
