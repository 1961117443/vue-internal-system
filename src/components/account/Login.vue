<template>
  <div>
    <header class="mui-bar mui-bar-nav">
      <h1 class="mui-title">登录</h1>
    </header>
    <div class="mui-content">
      <form id="login-form" class="mui-input-group">
        <div class="mui-input-row">
          <label>账号</label>
          <input
            id="account"
            type="text"
            class="mui-input-clear mui-input"
            v-model="user.account"
            placeholder="请输入账号"
          >
        </div>
        <div class="mui-input-row">
          <label>密码</label>
          <input
            id="password"
            type="password"
            class="mui-input-clear mui-input"
            placeholder="请输入密码"
            v-model="user.password"
          >
        </div>
      </form>
      <form class="mui-input-group">
        <ul class="mui-table-view mui-table-view-chevron">
          <li class="mui-table-view-cell">
            自动登录
            <div id="autoLogin" class="mui-switch">
              <div class="mui-switch-handle"></div>
            </div>
          </li>
        </ul>
      </form>
      <div class="mui-content-padded">
        <button
          id="login"
          type="button"
          class="mui-btn mui-btn-block mui-btn-primary"
          @click="userLogin"
        >登录</button>
        <div class="link-area">
          <router-link to="/reg" id="reg">注册账号</router-link>
          <span class="spliter">|</span>
          <a id="forgetPassword">忘记密码</a>
        </div>
      </div>
      <div class="mui-content-padded oauth-area"></div>
    </div>
  </div>
</template>

<script>
import { Toast, MessageBox, Indicator } from "mint-ui";
export default {
  data() {
    return {
      user: {
        account: "010",
        password: "123"
      }
    };
  },
  methods: {
    userLogin() {
      // console.log(this.$route);
      if (!this.user.account) {
        Toast({ message: "请输入登陆账号！", position: "top", duration: 1000 });
        return;
      }
      if (!this.user.password) {
        Toast({ message: "请输入登陆密码！", position: "top", duration: 1000 });
        return;
      }
      this.$api.get(
        "/api/account/login",
        { userCode: this.user.account, passWord: this.user.password },
        res => {
          console.log(res);
          if (res.Status === 0) {
            this.$store.commit('setToken',res.Data) 
            let instance = Toast({ message: "登陆成功", duration: 1000 }); 
            setTimeout(() => {
              if (this.$route.query.redirect) {
                this.$router.push(this.$route.query.redirect);
              }
              else{
                this.$router.push("/home");
              }
            }, 1000);
          } else {
            if (res.Message) {
              Toast({ message: res.Message, position: "top", duration: 1000 });
            }
          }
          // console.log(res);
        }
      );
      // console.log(this);
      // Toast(JSON.stringify(this.user));
    }
  }
};
</script>

<style lang="scss" scoped>
.area {
  margin: 20px auto 0px auto;
}

.mui-input-group {
  margin-top: 10px;
}

.mui-input-group:first-child {
  margin-top: 20px;
}

.mui-input-group label {
  width: 22%;
}

.mui-input-row label ~ input,
.mui-input-row label ~ select,
.mui-input-row label ~ textarea {
  width: 78%;
}

.mui-checkbox input[type="checkbox"],
.mui-radio input[type="radio"] {
  top: 6px;
}

.mui-content-padded {
  margin-top: 25px;
}

.mui-btn {
  padding: 10px;
}

.link-area {
  display: block;
  margin-top: 25px;
  text-align: center;
}

.spliter {
  color: #bbb;
  padding: 0px 8px;
}

.oauth-area {
  position: absolute;
  bottom: 20px;
  left: 0px;
  text-align: center;
  width: 100%;
  padding: 0px;
  margin: 0px;
}

.oauth-area .oauth-btn {
  display: inline-block;
  width: 50px;
  height: 50px;
  background-size: 30px 30px;
  background-position: center center;
  background-repeat: no-repeat;
  margin: 0px 20px;
  /*-webkit-filter: grayscale(100%); */
  border: solid 1px #ddd;
  border-radius: 25px;
}

.oauth-area .oauth-btn:active {
  border: solid 1px #aaa;
}

.oauth-area .oauth-btn.disabled {
  background-color: #ddd;
}
</style>