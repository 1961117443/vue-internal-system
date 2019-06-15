<template>
  <div>
    <mt-header fixed title="需求编号:">{{this.id}}
      <router-link to>
        <mt-button icon="back" @click="$router.back(-1)">返回</mt-button>
      </router-link>
    </mt-header>
    <h1>需求详情</h1>
  </div>
</template>

<script>
export default {
  data(){
    return{
      id:this.$route.params.id
    }
  }
};
</script>

<style lang="scss" scoped>
</style>