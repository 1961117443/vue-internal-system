import store from "../store";
import router from "../router/index";
import {
  Toast,
  Indicator
} from 'mint-ui';

// 配置API接口地址
// var root = "http://localhost:3000"
var root = 'http://exdshd.natappfree.cc'
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
axios.interceptors.request.use(
  config => {
    // console.log(router)
    if (store.state.access_token) {
      config.headers.Authorization = "Bearer " + store.state.access_token;
    }
    // if (storeTemp.state.token) {
    //   // 判断是否存在token，如果存在的话，则每个http header都加上token
    //   config.headers.Authorization ="Bearer "+ storeTemp.state.token;
    // }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
)

/*
  axios 请求返回拦截处理
*/
axios.interceptors.response.use(res => res, error => {
  if (error.response) {
    switch (error.response.status) {
      case 401:
        if (store.state.access_token) {
          let nowTime = new Date()
          let dateStr = window.localStorage.getItem("refreshTime")
          console.log(dateStr);
          let refreshTime = dateStr ? new Date(dateStr) : new Date(-1)
          if (refreshTime >= nowTime) {
            return apiAxios('GET', '/api/account/refreshtoken', {
              access_token: store.state.access_token
            }, res => {
              // console.log('旧token:'+store.state.access_token)
              // console.log(error.config)
              store.commit('setToken', res.Message)
              // console.log('新token:'+store.state.access_token)
              // console.log("token刷新了，正在跳转：" + router.currentRoute.fullPath) 
              console.log(error.config);
              error.config.__isRetryRequest = true;
              error.config.headers.Authorization = 'Bearer ' + store.state.access_token;
              // error.config 包含了当前请求的所有信息
              return axios(error.config);
            })
          }
        }
        // else {
        //console.log(router.currentRoute);
        // Toast({ message: '请先登录。。。', duration: 800, position: 'top' })
        // 返回 401 清除token信息并跳转到登录页面
        //store.commit("saveToken", "");
        router.replace({
          path: "/login",
          query: {
            redirect: router.currentRoute.fullPath
          }
        });
        // }

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

function apiAxios(method, url, params, success, failure) {
  if (params) {
    params = filterNull(params)
  }
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
    })
    .catch(function (err) {
      let res = err.response
      if (err) {
        console.log(err);
        if (res && res.status) {
          window.alert('api error, HTTP CODE: ' + res.status)
        }
      }
    })
  // .finally(function(){
  //   console.log('finally');
  // })

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
