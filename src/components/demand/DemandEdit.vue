<template>
  <div>
    <!-- <p>需求录入</p> -->
    <mt-field label="录入日期" placeholder="请输入录入日期" v-model="InputDate"></mt-field>
    <!-- <mt-field label="客户名称" placeholder="请输入邮箱" type="email" v-model="CustomerName"></mt-field> -->
    <!-- <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
    <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
    <mt-field label="网站" placeholder="请输入网址" type="url" v-model="website"></mt-field>
    <mt-field label="数字" placeholder="请输入数字" type="number" v-model="number"></mt-field>
    <mt-field label="生日" placeholder="请输入生日" type="date" v-model="birthday"></mt-field> -->
    <!-- <mt-field label="需求描述" placeholder="需求描述" type="textarea" rows="4" v-modal="Describe"></mt-field> -->
  </div>
</template>

<script>
import { Field } from 'mint-ui'
export default {
  data() {
    return {
      ID: "",
      BillCode: "",
      InputDate: "2019-07-01",
      CustomerName: "",
      Describe: "",
      AuditDate: ""
    }
  }
};
</script>

<style lang="scss" scoped>
</style>