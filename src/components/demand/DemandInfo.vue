<template>
  <div>
    <!--基本信息-->
    <div class="basic-info">
      <table class="info">
        <tbody>
          <tr>
            <td class="title">需求编号:</td>
            <td class="content">{{demand.BillCode}}</td>
            <td class="title">录入时间:</td>
            <td class="content">{{demand.InputDate}}</td>
          </tr>
          <tr>
            <td class="title">客户名称:</td>
            <td colspan="3">{{demand.CustomerName}}</td>
          </tr>
          <tr>
            <td class="title">审核人:</td>
            <td class="content">{{demand.BillCode}}</td>
            <td class="title">审核时间:</td>
            <td class="content">{{demand.InputDate}}</td>
          </tr>
          <tr>
            <td class="title">拒批人:</td>
            <td class="content">{{demand.BillCode}}</td>
            <td class="title">拒批时间:</td>
            <td class="content">{{demand.InputDate}}</td>
          </tr>
          <tr>
            <td class="title">拒批意见:</td>
            <td colspan="3">{{demand.CustomerName}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--需求详细信息-->
    <h3>{{demand.Descrip}}</h3>
    <!--需求图文信息-->
    <h1>需求详情</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      demand: {
        BillCode: "a123456789",
        InputDate: "2019-01-01 12:12:12",
        CustomerName: "测试客户",
        AuditDate: "2019-01-01 12:12:12",
        Descrip:
          "包含页眉页脚的卡片，页眉常用来显示面板标题，包含页眉页脚的卡片，页眉常用来显示面板标题，包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.info {
  margin: 5px;
  .title {
    font-weight: bold;
    width: 65px;
    text-align: right;
  }
  font-size: 14px;
  width: 100%;
  tr {
    height: 21px;
  }
}
</style>