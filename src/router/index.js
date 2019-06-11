import Vue from 'vue'
import Router from 'vue-router' 
import Home from '@/components/home.vue' 
import Workbench from '@/components/Workbench';
import User from '@/components/User';

Vue.use(Router)

export default new Router({
  routes: [ 
    { path: '/', 
     component: Home,
     name :'home',
     children:[
       { path: 'home/workbench',  component: Workbench  }  ,
       { path: 'home/user',  component: User  }  ]
   }   
  ]
})
