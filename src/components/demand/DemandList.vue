<template>
  <div>
    <mt-loadmore
      :top-method="loadTop"
      :bottom-method="loadBottom"
      :bottom-all-loaded="allLoaded"
      ref="loadmore"
    >
      <demandCard v-for="demand in demands" :key="demand.ID" :demand="demand"></demandCard>
      <!-- <mt-button 
          type="primary"
          size="large"
          @click="getDemandList()"
        >加载更多</mt-button> -->
    </mt-loadmore> 
  </div>
</template>

<script>
import DemandCard from "@/components/demand/DemandCard.vue";
export default {
  data() {
    return {
      allLoaded: false,
      currentPageIndex:1,
      demands: [ ]
    };
  },
  components: {
    DemandCard
  },
  mounted(){
    this.getDemandList();
  },
  methods: {
    //获取需求列表
    getDemandList(){ 
      var index=this.currentPageIndex
      this.$api.get('/api/demand/list',{pageIndex:index,pageSize:10},res=>{
        this.demands = this.demands.concat(res.Data)
        this.currentPageIndex=index+1
      })
    },
    loadTop() {
      // var index=this.currentPageIndex
      // this.$api.get('/api/demand/list',{pageIndex:index,pageSize:10},res=>{
      //   this.demands = this.demands.concat(res.Data)
      //   this.currentPageIndex=index+1
      //    this.$refs.loadmore.onTopLoaded()
      // })
      // let o = {
      //   BillCode: "zz123456789",
      //   InputDate: "2019-01-01 12:12:12",
      //   CustomerName: "测试追加客户",
      //   Descrip: "这是追加的需求"
      // }
      // this.demands.push(o)      
      // allLoaded = true
      // this.$refs.loadmore.onTopLoaded()
    },
    loadBottom() {
    //   console.log("loadBottom");
    // //  let olddata= this.demands.length
    //  var index=this.currentPageIndex
    //   this.$api.get('/api/demand/list',{pageIndex:index,pageSize:10},res=>{
    //     this.demands = this.demands.concat(res.Data)
    //     this.currentPageIndex=index+1   
    //    // this.$refs.loadmore.onBottomLoaded()  
    //   })
      // this.getDemandList();
    //  let newdata= this.demands.length
     // this.allLoaded = olddata === newdata // 若数据已全部获取完毕   
    }
  }
};
</script>

<style lang="scss" scoped>
</style>