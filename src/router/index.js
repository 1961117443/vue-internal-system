import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/home.vue' 
import Workbench from '@/components/Workbench.vue';
import User from '@/components/User.vue';
import DemandList from '@/components/DemandList.vue';
import DemandInfo from '@/components/DemandInfo.vue';
import Home from '@/components/Home.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home/workbench'
    },
    {
      path: '/home',
      component: Home,
      children:[
        {
          path: 'user',
          component: User
        },
        {
          path: 'workbench',
          component: Workbench 
        }, {
          path: 'demandlist',
          component: DemandList
        }
      ]
    },

    // {
    //   path: '/workbench',
    //   component: Workbench,
    //   children: [
    //   ]
    // },
    // {
    //   path: '/user',
    //   component: User
    // },
    // {
    //   path: '/demandlist',
    //   component: DemandList
    // },
    {
      path: '/demandinfo/:id',
      component: DemandInfo
    }
  ],
  linkActiveClass: 'mui-active'
})
