<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入评论内容（最多吐槽120字）" v-model="content" maxlength="120"></textarea>
    <mt-button type="primary" size="large" @click="commentHandle">发表评论</mt-button>
    <div class="cmt-list"> 
      <div class="cmt-item"  v-for="(comment,index) in comments" :key="index">
        <div class="cmt-title">
            第{{index+1}}楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间：2019-01-01 01:01:01
        </div>
        <div class="cmt-body"> 
            {{ comment.Content}}
        </div>
      </div>
      <!-- <div class="cmt-item">
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
      </div> -->
    </div>
    <mt-button type="danger" size="large" plain @click="loadMoreHandle">加载更多</mt-button>
  </div>
</template>

<script>
import { Toast,Indicator } from "mint-ui";
export default {
  data(){
    return{ 
      page:1,
      content:'',
      comments:[]
    }
  },
  props:['id'],
  mounted(){
    this.getComments()
  },
  methods:{
    getComments(){
      this.$api.get('/api/comment',{id:this.id,pageIndex:this.page},res=>{
        if (res) {
          this.comments=this.comments.concat(res)
          this.page = this.page+1
        }
       // console.log(res);
        // comments=comments.concat(res.Data)
      })
    },
    loadMoreHandle(){
      this.getComments()
    },
    commentHandle(){
      // {
      //   "SubordinateID": this.id,
      //   "Content": "string"
      // }
      let comment ={"SubordinateID":this.id,"Content":this.content}
       Indicator.open({
          text: "发不中...",
          spinnerType: "fading-circle"
        });
      this.$api.post('/api/comment',comment,res=>{
        Indicator.close()
        Toast({
          message: res.Data,
          position: 'center',
          duration: 500
        })
        this.comments.push(comment)
        this.content=''
        // if (res.Data) { 
        //   console.log(res.Data);
        // }
        // comments=comments.concat(res.Data)
      })
    }
  }
};
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