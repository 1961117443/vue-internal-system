import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/home.vue' 

//引入自己的组件
import Home from '@/components/Home.vue';
import Workbench from '@/components/Workbench.vue';
import User from '@/components/account/User.vue';
import Login from '@/components/account/Login.vue';
import Reg from '@/components/account/Register.vue';
import DemandList from '@/components/demand/DemandList.vue';
import DemandInfo from '@/components/demand/DemandInfo.vue';
import DemandEdit from '@/components/demand/DemandEdit.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home/workbench'
    },
    {
      path: '/login',
      component: Login,props: { name: 'world' }
    },
    {
      path: '/reg',
      component: Reg
    },
    {
      path: '/home',
      redirect: '/home/workbench',
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
        },
        {
          path: 'demandinfo/:id',
          component: DemandInfo
        },
        {
          path:'demand/edit',
          component:DemandEdit
        }
      ]
    }

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
    // {
    //   path: '/demandinfo/:id',
    //   component: DemandInfo
    // }
  ],
  linkActiveClass: 'mui-active'
})
