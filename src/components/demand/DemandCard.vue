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
        <mt-button type="default" size="small" @click="infoHandler(demand.BillCode)">详情</mt-button>
        <mt-button type="primary" size="small" @click="auditHandler(demand.BillCode)">审核</mt-button>
        <mt-button type="primary" size="small" @click="unauditHandler(demand.BillCode)">反审</mt-button>
        <mt-button type="danger" size="small" @click="rejectHandler(demand.BillCode)">拒绝</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import { Indicator  } from 'mint-ui';
export default {
  data() {
    return {
      //demand:{}
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
      this.$router.push('/home/demandinfo/'+id)
    },
    auditHandler(id){
       Indicator.open({
        text: '审核中...',
        spinnerType: 'fading-circle'
      });
     this.demand.BillCode = this.demand.BillCode+"11111"
      setTimeout(() => {
        Indicator.close()
      }, 2000);
    },
    unauditHandler(id){
      Indicator.open({
        text: '反审中...',
        spinnerType: 'fading-circle'
      });
      setTimeout(() => {
        Indicator.close()
      }, 2000);
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