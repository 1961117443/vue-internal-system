<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入评论内容（最多吐槽120字）" maxlength="120"></textarea>
    <mt-button type="primary" size="large">发表评论</mt-button>
    <div class="cmt-list">
      <div class="cmt-item">
        <div class="cmt-title">
            第1楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间：2019-01-01 01:01:01
        </div>
        <div class="cmt-body">
            坑爹需求
        </div>
      </div>
      <div class="cmt-item">
        <div class="cmt-title">
            第2楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间：2019-01-01 01:01:01
        </div>
        <div class="cmt-body">
            坑爹需求
        </div>
      </div>
      <div class="cmt-item">
        <div class="cmt-title">
            第3楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间：2019-01-01 01:01:01
        </div>
        <div class="cmt-body">
            坑爹需求
        </div>
      </div>
    </div>
    <mt-button type="danger" size="large" plain>加载更多</mt-button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
 h3{
     font-size: 18px;
 }

 textarea{
     font-size: 14px;
     height: 85px;
     margin: 0px;
 }
 .cmt-list{
     margin: 5px 0;
     .cmt-title{
         background-color: #ccc;
         font-size: 13px;
         line-height: 30px;
     }
     .cmt-body{
         text-indent: 2em;
         line-height: 35px;

     }
 }
</style>