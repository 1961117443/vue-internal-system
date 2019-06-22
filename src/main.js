// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store';

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

//导入格式化时间的插件
import moment from 'moment';
//定义全局的过滤器
Vue.filter('dateFormat',function(dateStr,pattern="YYYY-MM-DD HH:mm:ss"){
      return moment(dateStr).format(pattern);
})
//截取字符串的过滤器
Vue.filter('interceptFormat',function(str,length=0){

      if (str && length>0) {
        var sub_length = length ;  
        var temp1 = str.replace(/[^\x00-\xff]/g,"**");
        var temp2 = temp1.substring(0,sub_length);  
        var x_length = temp2.split("\*").length - 1 ;  
        var hanzi_num = x_length /2 ;  
        sub_length = sub_length - hanzi_num ;  
        var res = str.substring(0,sub_length-5);  
        if(sub_length < str.length ){  
          return  res+"。。。" ;  
        }
      } 
      return str ;  


  // if(length>0){ 
  //   if (str) {
  //     let slen=str.replace(/[\u0391-\uFFE5]/g,"aa").length
  //     if (slen>length) {
  //       str= str.substring(0,length)+'...'
  //     }
  //   }
  // }
  // return str;
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
