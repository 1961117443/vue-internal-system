import store from "../store";
import router from "../router/index";
import msg from '../utils/messageBox';
import {
  Toast,
  Indicator
} from 'mint-ui';

// 配置API接口地址
// var root = "http://localhost:3000"
var root = 'http://khd3uc.natappfree.cc'
// 引用axios
var axios = require('axios')
// 自定义判断元素类型JS
function toType(obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}
// 参数过滤函数
function filterNull(o) {
  for (var key in o) {
    if (o[key] === null) {
      delete o[key]
    }
    if (toType(o[key]) === 'string') {
      o[key] = o[key].trim()
    } else if (toType(o[key]) === 'object') {
      o[key] = filterNull(o[key])
    } else if (toType(o[key]) === 'array') {
      o[key] = filterNull(o[key])
    }
  }
  return o
}
 
/*
  axios 请求发送拦截处理
*/
//var loadingInstance; //加载中动画
axios.interceptors.request.use(
  config => { 
    // console.log(router)
    if (store.state.authToken) {
      config.headers.Authorization = "Bearer " + store.state.authToken;
    } 
   // console.log(config);
    //1、弹出动画 
    msg.showLoading()
    return config;
  },
  err => {
    //出现异常 关闭动画
    msg.closeLoading()
    return Promise.reject(err);
  }
)

/*
  axios 请求返回拦截处理
*/
axios.interceptors.response.use(res => {
  //2、关闭动画
  msg.closeLoading()
  return res
}, error => {
  msg.closeLoading()
  if (error.response) {
    switch (error.response.status) {
      case 401:
        if (store.state.authToken) {
          let nowTime = new Date()
          let dateStr = window.localStorage.getItem("refreshTime")
          let refreshTime = dateStr ? new Date(dateStr) : new Date(-1)
          if (refreshTime >= nowTime) {
           // console.log(error); 
            return axios({
              method: 'get',
              url: '/api/account/refreshtoken', 
              params: {
                access_token: store.state.authToken
              }, 
              baseURL: root,
              withCredentials: false,
              headers:{"Authorization" : "Bearer " + store.state.authToken}
            })
            .then(function (res) {  
              console.log(res);
              store.commit('setToken', res.data.Message) 
              error.config.__isRetryRequest = true
              error.config.headers.Authorization = 'Bearer ' + store.state.authToken
              
             // Toast({message:'authToken已刷新，重新发起请求',duration:2000})
             // console.log(error.config);
              // error.config 包含了当前请求的所有信息
              return axios(error.config)
            })
            .catch(function (error) {
              console.log(error);
            }); 
          }
        } 
        router.replace({
          path: "/login",
          query: {
            redirect: router.currentRoute.fullPath
          }
        });
      break;
    }
  }
  return Promise.reject(error.response.data); // 返回接口返回的错误信息
})
/*
  接口处理函数
  这个函数每个项目都是不一样的，我现在调整的是适用于
  https://cnodejs.org/api/v1 的接口，如果是其他接口
  需要根据接口的参数进行调整。参考说明文档地址：
  https://cnodejs.org/topic/5378720ed6e2d16149fa16bd
  主要是，不同的接口的成功标识和失败提示是不一致的。
  另外，不同的项目的处理方法也是不一致的，这里出错就是简单的alert
*/
let s=null
function apiAxios(method, url, params, success, failure) {
  if (params) {
    params = filterNull(params)
  }
  s = success
  return axios({
      method: method,
      url: url,
      data: method === 'POST' || method === 'PUT' ? params : null,
      params: method === 'GET' || method === 'DELETE' ? params : null,
      //headers 是即将被发送的自定义请求头，还记得我们的jwt验证么，可以封装进来，注意!这里如果要添加 headers ，一定要是正确的值
      // headers:{"Authorization":"Bearer ******"},
      baseURL: root,
      withCredentials: false
    })
    .then(function (res) {
      if (res) {
        if (res.status === 200) {
          if (success) {
            success(res.data)
          }
        } else {
          if (failure) {
            failure(res.data)
          } else {
            window.alert('error: ' + JSON.stringify(res.data))
          }
        }
      }
    })
    .catch(function (err) {
      console.log(err);
      // let res = err.response
      // if (err) {        
      //   if (res && res.status) {
      //     window.alert('api error, HTTP CODE: ' + res.status)
      //   }
      // }
    })  
}

// 返回在vue模板中的调用接口
export default {
  get: function (url, params, success, failure) {
    return apiAxios('GET', url, params, success, failure)
  },
  post: function (url, params, success, failure) {
    return apiAxios('POST', url, params, success, failure)
  },
  put: function (url, params, success, failure) {
    return apiAxios('PUT', url, params, success, failure)
  },
  delete: function (url, params, success, failure) {
    return apiAxios('DELETE', url, params, success, failure)
  }
}
