<template>
  <div class="demand-container">
    <div class="mui-card">
      <div class="mui-card-header">
        <!-- <div class="info-row">
          <div class="info-column">1</div>
          <div class="info-column">2</div>
        </div>
        <div class="info-row1">
          <div class="info-column1">3</div>
          <div class="info-column1">4</div>
        </div>-->
        <table class="info" border="0">
          <tbody>
            <tr>
              <td class="title">需求编号:</td>
              <td class="content">{{demand.BillCode}}</td>
              <td class="title">录入时间:</td>
              <td class="content">{{demand.InputDate | dateFormat('YYYY-MM-DD') }}</td>
            </tr>
            <tr>
              <td class="title">客户名称:</td>
              <td colspan="3">{{demand.CustomerName}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner" slot="right">{{demand.Describe|interceptFormat}}</div>
      </div>
      <!-- 工具栏 -->
      <div class="mui-card-footer">
        <mt-button type="default" size="small" @click="infoHandler(demand.ID)">详情</mt-button>
        <mt-button
          v-show="!demand.AuditDate"
          type="primary"
          size="small"
          @click="auditHandler(demand.ID)"
        >审核</mt-button>
        <mt-button
          v-show="demand.AuditDate"
          type="primary"
          size="small"
          @click="unauditHandler(demand.ID)"
        >反审</mt-button>
        <mt-button type="danger" size="small" @click="rejectHandler(demand.ID)">拒绝</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast, MessageBox, Indicator } from "mint-ui";
export default {
  data() {
    return { 
      //demand:{}
    };
  },
  props: {
    demand: {
      type: Object,
      default: {
        ID: "",
        BillCode: "",
        InputDate: "",
        CustomerName: "",
        Describe: "",
        AuditDate: ""
      }
    }
  },
  methods: {
    infoHandler(id) {
      this.$router.push("/home/demandinfo/" + id);
    },
    auditHandler(id) {
      MessageBox.confirm("确定执行此操作?").then(action => {
        Indicator.open({
          text: "审核中...",
          spinnerType: "fading-circle"
        });
        this.$api.post("/api/demand/audit/", { id:id  }, res => {
          //this.demand=res.data
          Indicator.close();
          Toast({
            message: "操作成功",
            position: "center",
            duration: 500
          });
        })
        .finally(()=>Indicator.close());
      });
    },
    unauditHandler(id) {
      MessageBox.confirm("确定执行此操作?").then(action => {
        Indicator.open({
          text: "反审中...",
          spinnerType: "fading-circle"
        });
        setTimeout(() => {
          this.demand.AuditDate = "";
          Indicator.close();
        }, 800);
      });
    },
    rejectHandler(id) {
      MessageBox.prompt("拒批原因", "")
        .then(({ value, action }) => {
          Indicator.open({
            text: "拒批中...",
            spinnerType: "fading-circle"
          });
          setTimeout(() => {
            // this.demand.AuditDate = "";
            Indicator.close();
          }, 800);
        })
        .catch(ex => {});
    }
  }
};
</script>

<style lang="scss" scoped>
.demand-container {
  background-color: #eee;
  overflow: hidden;
  .mui-card {
    //font-size: 12px;
    .mui-card-header {
      padding: 5px 5px;
      min-height: 38px;
      // font-size: 12px;
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
      .info-row {
        width: 100%;
        height: 50px;
        border: #000000 1px solid;
        .info-column {
          float: left;
          width: 49%;
          border: 1px solid #f00;
        }
      }
    }
    .mui-card-content {
      .mui-card-content-inner {
        padding: 5px 5px;
        font-size: 12px;
        //height: 80px;
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