<template>
  <div>
      <demandCard v-for="demand in demands" :key="demand.BillCode"> 
      </demandCard>
    <!-- <demandCard></demandCard>
    <demandCard></demandCard>
    <demandCard></demandCard> -->
    <h1>这是需求列表页面</h1>
  </div>
</template>

<script>
import DemandCard from "@/components/subcomponents/DemandCard.vue";
export default {
  data() {
    return {
        demands:[
            { BillCode: "a123456789", InputDate: "2019-01-01 12:12:12",  CustomerName: "测试客户", Descrip: "包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）"},
            { BillCode: "b123456789", InputDate: "2019-01-01 12:12:12",  CustomerName: "测试客户", Descrip: "包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）"},
            { BillCode: "c123456789", InputDate: "2019-01-01 12:12:12",  CustomerName: "测试客户", Descrip: "包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）"},
            { BillCode: "d123456789", InputDate: "2019-01-01 12:12:12",  CustomerName: "测试客户", Descrip: "包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）"},
            { BillCode: "e123456789", InputDate: "2019-01-01 12:12:12",  CustomerName: "测试客户", Descrip: "包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）"},
            { BillCode: "f123456789", InputDate: "2019-01-01 12:12:12",  CustomerName: "测试客户", Descrip: "包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）"},
            { BillCode: "g123456789", InputDate: "2019-01-01 12:12:12",  CustomerName: "测试客户", Descrip: "包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）"},
            { BillCode: "h123456789", InputDate: "2019-01-01 12:12:12",  CustomerName: "测试客户", Descrip: "包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）"},
            { BillCode: "i123456789", InputDate: "2019-01-01 12:12:12",  CustomerName: "测试客户", Descrip: "包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）"},
            { BillCode: "j123456789", InputDate: "2019-01-01 12:12:12",  CustomerName: "测试客户", Descrip: "包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）"},
            { BillCode: "k123456789", InputDate: "2019-01-01 12:12:12",  CustomerName: "测试客户", Descrip: "包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）"},
            { BillCode: "l123456789", InputDate: "2019-01-01 12:12:12",  CustomerName: "测试客户", Descrip: "包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）"},
            { BillCode: "m123456789", InputDate: "2019-01-01 12:12:12",  CustomerName: "测试客户", Descrip: "包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）"},
            { BillCode: "n123456789", InputDate: "2019-01-01 12:12:12",  CustomerName: "测试客户", Descrip: "包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）"},
            { BillCode: "o123456789", InputDate: "2019-01-01 12:12:12",  CustomerName: "测试客户", Descrip: "包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）"}
        ]
    };
  },
  components: {
    DemandCard
  }
};
</script>

<style lang="scss" scoped>
</style>