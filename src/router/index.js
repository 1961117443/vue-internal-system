import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/home.vue' 
import Workbench from '@/components/Workbench.vue';
import User from '@/components/User.vue';
import DemandList from '@/components/DemandList.vue';
import DemandInfo from '@/components/DemandInfo.vue';

Vue.use(Router)

export default new Router({
  routes: [
    // { path: '/home', 
    //  component: Home, 
    //  children:[ ]
    //  }  ,
    {
      path: '/',
      redirect: '/workbench'
    },
    {
      path: '/workbench',
      component: Workbench,
      children:[
      ]
    },
    {
      path: '/user',
      component: User
    } ,
    {
      path: '/demandlist',
      component: DemandList
    },
    {
      path: '/demandinfo',
      component: DemandInfo
    }
  ],
  linkActiveClass: 'mui-active'
})
