<template>
  <div id="app">
    <!--顶部header 区域-->
    <!-- <mt-header fixed title="内部系统">
      <router-link to="" slot="left">
        <mt-button icon="back"  @click="$router.back(-1)">返回</mt-button>
      </router-link>
    </mt-header>-->
    <!--中间路由 router-view 区域-->
    <transition>
      <router-view></router-view>
    </transition>
    <!--底部 Tabbar 区域-->
    <!-- <nav class="mui-bar mui-bar-tab">
      <router-link to="workbench" class="mui-tab-item">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">工作台</span>
      </router-link>
      <router-link to="user" class="mui-tab-item">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">我的</span>
    </router-link>-->
    <!-- <a class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">消息</span>
    </a>-->
    <!-- <a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
    </a>-->
    <!-- </nav> -->
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {}
};
</script>

<style lang="scss" scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
  // padding-top: 40px;
  // padding-bottom: 50px;
  /* margin-bottom: 40px; */ 
 overflow-x:hidden;
}

  .v-enter {
    opacity: 0;
    transform: translateX(100%);
  }
  .v-leave-to {
    opacity: 0;
    transform: translateX(-100%);
    position: absolute;
  }

  .v-enter-active,.v-leave-active {
    transition: all 0.5s ease;
  } 
 
</style>
