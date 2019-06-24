<template>
  <div>
    <!--顶部滑动条-->
    <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
            <a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
							未审核
						</a>
            <a class="mui-control-item" href="#item1mobile" data-wid="tab-top-subpage-1.html">
							已审核
						</a>
            <a class="mui-control-item" href="#item1mobile" data-wid="tab-top-subpage-1.html">
							已拒批
						</a>
						<a class="mui-control-item" href="#item1mobile" data-wid="tab-top-subpage-1.html">
							推荐
						</a>
						<a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
							热点
						</a>
						<a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
							北京
						</a>
						<a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
							社会
						</a>
						<a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
							娱乐
						</a>
					</div>
				</div>

			</div>
    <!-- <mt-loadmore
      :top-method="loadTop"
      :bottom-method="loadBottom"
      :bottom-all-loaded="allLoaded"
      ref="loadmore"
    > -->
    <transition-group name="fade">
      <demandCard v-for="demand in demands" :key="demand.ID" :demand="demand"></demandCard>
    </transition-group>
      
      <mt-button v-show="this.demands.length>0 && !this.allLoaded"
          type="primary"
          size="large"
          plain
          @click="getDemandList()"
        >加载更多</mt-button>
    <!-- </mt-loadmore>  -->
  </div>
</template>

<script>
// import mui from "../../lib/mui/js/mui.min.js";
import DemandCard from "@/components/demand/DemandCard.vue";
// import { Indicator } from 'mint-ui'; 
//1、导入mui.js


export default {
  data() {
    return {
      allLoaded: false,
      currentPageIndex:1,
      demands: []
    };
  },
  components: {
    DemandCard
  },
  created(){
    this.getDemandList();
  },
  mounted(){
    // this.getDemandList();
    //2、初始化
    // console.log(mui);
    // mui('.mui-scroll-wrapper').scroll({
    // 	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    // });
  },
  methods: {
    //获取需求列表
    getDemandList(){   
      var index=this.currentPageIndex
      return this.$api.get('/api/demand/list',{pageIndex:index,pageSize:10},
      res=>{
        ///如果没有数据了，不显示加载更多按钮
        if(res.Data.length===0){
            this.allLoaded = true;
        }
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
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.fade-enter-active, .fade-leave-active {
    transition: opacity 2s
}
.fade-enter, .fade-leave-to /* .fade-leave-active, 2.1.8 版本以下 */ {
    opacity: 0
}

// * {
//   touch-action: pan-y;
// }
</style>