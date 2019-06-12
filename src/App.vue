<template>
  <div id="app">
    <!--顶部header 区域-->
    <mt-header fixed title="内部系统"></mt-header>
    <!--中间路由 router-view 区域-->
    <router-view></router-view>
    <!--底部 Tabbar 区域-->
    <nav class="mui-bar mui-bar-tab">
      <router-link to="workbench" class="mui-tab-item">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">工作台</span>
      </router-link>
      <!-- <a class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">消息</span>
      </a>-->
      <router-link to="user" class="mui-tab-item">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">我的</span>
      </router-link>
      <!-- <a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
      </a>-->
    </nav>
    <h1>123</h1>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
  padding-top: 40px;
}
</style>
