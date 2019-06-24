import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    //初始化的数据
    state:{
        authToken:''
    },
    //改变state里面的值的方法
    mutations:{
        setToken(state,data){
            state.authToken = data
            window.localStorage.setItem("token",data) 
            //滑动刷新的过期时间 30分钟= 30*60秒
            var curTime  = new Date()
            curTime.setSeconds(curTime.getSeconds() + 30*60)  
            window.localStorage.setItem("refreshTime",curTime) 
        }
    }
})

export default store