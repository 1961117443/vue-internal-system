import Vue from 'vue'
import Router from 'vue-router' 
import Home from '@/components/home.vue' 
import Workbench from '@/components/Workbench.vue';
import User from '@/components/User.vue';

Vue.use(Router)

export default new Router({
  routes: [ 
    { path: '/home', 
     component: Home, 
     children:[
       { path: '/home/workbench',  component: Workbench  }  ,
       { path: '/home/user',  component: User  }  ]
     }  
  ],
  linkActiveClass:'mui-active'
})
