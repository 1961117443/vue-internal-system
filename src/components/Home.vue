<template>
  <div>
    <!--顶部header 区域-->
    <mt-header fixed title="内部系统">
      <span slot="left" @click="$router.back(-1)" v-show="showBack">
        <mt-button icon="back">返回</mt-button>
      </span>
    </mt-header>
    <!--中间路由 router-view 区域--> 
    <transition>
      <router-view class="home-content"></router-view>
    </transition>
    <!--底部 Tabbar 区域-->
    <nav class="mui-bar mui-bar-tab" v-show="showNav">
      <router-link to="/home/workbench" class="mui-tab-item">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">工作台</span>
      </router-link>
      <router-link to="/home/user" class="mui-tab-item">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">我的</span>
      </router-link>
    </nav>
    <!-- <a class="mui-tab-item" href="#tabbar-with-chat">
                    <span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
                    <span class="mui-tab-label">消息</span>
    </a>-->
    <!-- <a class="mui-tab-item" href="#tabbar-with-map">
                    <span class="mui-icon mui-icon-gear"></span>
                    <span class="mui-tab-label">设置</span>
    </a>-->
  </div>
</template>

<script>
export default {
  data() {
    return { 
      showBack: false,
      showNav:true
    };
  },
  created() { 
    this.showBack = this.$route.path === "/home/workbench" ? false : true;
   // this.showNav = this.$route.path === "/home/workbench" || this.$route.path==="/home/user"? true : false;
  },
  methods: {
   
  },
  watch: {
    "$route.path": function(newVal) {
      this.showBack = newVal === "/home/workbench" ? false : true;
      //this.showNav = newVal === "/home/workbench" || newVal==="/home/user" ? true : false;
    }
  }
};
</script>

<style lang="scss" scoped>
.mint-header {
  z-index: 99;
  font-size: 15px;
  overflow-x:hidden;
}
.home-content{

  padding-top: 40px;
  padding-bottom: 50px; 
  // overflow-x:hidden;
}
.mui-bar-tab {
  z-index: 99;
}

.v-enter{
  opacity: 0;
  transform: translateX(100%)
}
.v-leave-to{
  opacity: 0;
  transform: translateX(-100%);
  position:absolute;
}

.v-enter-active,
.v-leave-active{
  //transition: opacity 2s;
 transition: all 0.5s ease;
}

</style>