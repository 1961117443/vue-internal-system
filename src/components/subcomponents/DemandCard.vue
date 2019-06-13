<template>
  <div class="demand-container">
    <div class="mui-card">
      <div class="mui-card-header">
        <div class="row2">
          <h1 class="col1">需求编号:{{BillCode}}</h1>
          <h1 class="col2">录入时间:{{InputDate}}</h1>
        </div>
        <!-- <div class="row">
          <h1>客户名称:{{CustomerName}}</h1>
        </div>-->
      </div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">{{Descrip}}</div>
      </div>
      <!-- 工具栏 -->
      <div class="mui-card-footer">
        <mt-button type="primary" size="small">查看详情</mt-button>
      </div>
    </div>
  </div>
</template>

<script> 
export default {
  data() {
    return {
      BillCode: "123456789",
      InputDate: "2019-01-01 12:12:12",
      CustomerName: "测试客户",
      Descrip:
        "包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）"
    }
  } 
};
</script>

<style lang="scss" scoped>
.demand-container {
  background-color: #eee;
  overflow: hidden;
  .mui-card-header {
    padding: 5px 5px;
    min-height: 38px;
    font-size: 13px;
    .row2 {
      display: flex;
      // flex-direction: column;
      justify-content: space-between;
      .col1 .col2 {
        width: 49%;
      }
    }
    h1 {
      font-size: 13px;
    }
  }
  .mui-card-footer {
    min-height: 38px;
    font-size: 13px;
    padding: 5px 5px;
  }
}
</style>