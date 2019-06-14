<template>
  <div class="demand-container">
    <div class="mui-card">
      <div class="mui-card-header">
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
          </tbody>
        </table>
      </div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner" slot="right">
         {{demand.Descrip}}
         </div>
      </div>
      <!-- 工具栏 -->
      <div class="mui-card-footer">
        <mt-button type="primary" size="small" @click="infoHandler(demand.BillCode)">详情</mt-button>
        <mt-button type="primary" v-show="false" size="small" @click="auditHandler(demand.BillCode)">审核</mt-button>
        <mt-button type="primary" size="small" @click="rejectHandler(demand.BillCode)">拒绝</mt-button>
        <mt-button type="primary" size="small" @click="unauditHandler(demand.BillCode)">反审</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    } 
  }, 
  props: {
    demand: {
      type: Object,
      default: {
        BillCode: "",
        InputDate: "",
        CustomerName: "",
        Descrip: ""
      }
    }
  },
  methods:{
    infoHandler(id){ 
      this.$router.push('/demandinfo/'+id)
    },
    auditHandler(id){

    },
    unauditHandler(id){
      
    },
    rejectHandler(id){
      
    }
  }
};
</script>

<style lang="scss" scoped>
.demand-container {
  background-color: #eee;
  overflow: hidden;
  .mui-card {
    font-size: 12px;
    .mui-card-header {
      padding: 5px 5px;
      min-height: 38px;
      font-size: 12px;
      .info {
        .title {
          font-weight: bold;
          width: 55px;
        }
        font-size: 12px;
        width: 100%;
        tr {
          height: 21px;
        }
      }
      h1 {
        font-size: 12px;
      }
    }
    .mui-card-content {
      .mui-card-content-inner {
        padding: 5px 5px; 
        font-size: 12px;
      }
    }
    .mui-card-footer {
      min-height: 38px;
      font-size: 12px;
      padding: 5px 5px; 
      display: -webkit-box;
    }
  }
}
</style>