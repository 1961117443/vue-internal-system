import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    //初始化的数据
    state:{
        access_token:''
    },
    //改变state里面的值的方法
    mutations:{
        setToken(state,data){
            state.access_token = data;
        }
    }
})

export default store