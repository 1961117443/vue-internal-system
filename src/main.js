// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引用api文件
import api from './api/http.js'
//讲API方法绑定到全局
Vue.prototype.$api = api

//引入mint-ui
import MintUI from  'mint-ui'
import 'mint-ui/lib/style.css' 
Vue.use(MintUI)
//引入mui样式
import './lib/mui/css/mui.min.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
