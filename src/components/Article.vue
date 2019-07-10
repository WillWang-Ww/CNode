<template>
    <div class="ar_article">
      <div class="content">
        <div class="head">
          <div class="headTitle">
            <div class="titleTag">
            <span
              :class="[{goodStyle:(post.good === true)},{topStyle:(post.top === true)},{tabStyle: post.good !== true && post.top !== true}]">
              {{post | tabFilter}}
            </span>
            </div>
            <div class="title">{{post.title}}</div>
          </div>
          <ul class="contentInfo">
            <li>发布于 {{post.create_at | timeFilter}}</li>
            <li>作者 {{post.author.loginname}}</li>
            <li>{{post.visit_count}} 次浏览</li>
            <li>来自 {{post | tabFilter}}</li>
          </ul>
        </div>
        <div v-html="post.content" class="content"></div>
      </div>
      <div class="reply">
        <div class="topBar">{{post.reply_count}}回复</div>
       <div class="replyCard" v-for="(reply,index) in post.replies">
          <router-link :to="{
            name:'user_info',
            params:{
              name:reply.author.loginname
            }
          }">
            <img :src="reply.author.avatar_url" alt="" class="avatar">
          </router-link>
         <div class="cardInfo">
           <div class="replyTitle">
             <router-link :to="{
            name:'user_info',
            params:{
              name:reply.author.loginname
            }
          }">
               <div class="loginname">{{reply.author.loginname}}</div>
             </router-link>
             <div>{{index}}楼</div>
             <div>{{reply.create_at | timeFilter}}</div>
             <img src="../assets/up.png" alt="" class="upIcon">
             <div class="up">{{reply.ups.length}}</div>
           </div>
           <div class="replyContent" v-html="reply.content"></div>
         </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'Article',
    data(){
        return {post:{}}
    },
    methods:{
      getArticleData:function () {
        this.$http.get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`)
          .then(res => {
            this.post = res.data.data
          })
          .catch(err => {
            console.log(err)
          })
      }
    },
  beforeMount () {
      this.getArticleData()
  }
}
</script>
<style>
  @import url('../assets/markdown-github.css');
  .ar_article{
    width: 70vw;
  }
  .content{
    background-color: white;
    margin-left: 200px;
    margin-top: 20px;
    font-size: 12px;
    padding-bottom: 36px;
    flex-shrink: 1;
  }
  .reply{
    background-color: white;
    margin-left: 200px;
    margin-top: 20px;
    font-size: 12px;
    padding-bottom: 36px;
  }
  .head{
    border-bottom: 1px solid #c7c7c7;
  }
  .headTitle{
    display: flex;
    align-items: center;
    padding: 10px;
  }
  .contentInfo{
    list-style: none;
    color: #838383;
    padding-left: 10px;
    margin: 0;
    display: flex;
    padding-bottom: 10px;
  }
  .contentInfo > li {
    padding-right: 10px;
  }
  .title{
    font-size: 22px;
    font-weight: bold;
    color: #333333;
    margin: 8px 0px;
  }
  .goodStyle {
    font-size: 12px;
    background-color: #80bd01;
    color: #ffffff;
    padding: 2px 4px;
    border-radius: 3px;
    margin-right: 3px;
  }

  .topStyle {
    font-size: 12px;
    background-color: #80bd01;
    color: #ffffff;
    padding: 2px 4px;
    border-radius: 3px;
    margin-right: 3px;
  }
  .tabStyle {
    background-color: #e5e5e5;
    font-size: 12px;
    color: #999999;
    padding: 2px 4px;
    border-radius: 3px;
    margin: 0px 3px;
  }
  .avatar{
    height: 30px;
    width: 30px;
    padding-right: 10px;
  }
  .topBar{
    color: #333333;
    background-color: #f6f6f6;
    padding: 10px;
    font-size: 14px;
  }
  .replyCard{
    padding: 10px;
    border-top: 1px solid #c7c7c7;
    display: flex;
  }
  .replyTitle{
    display: flex;
    align-items: center;
  }
  .replyTitle > div {
    padding-right: 3px;
  }
  .upIcon{
    height: 18px;
    width: 18px;
  }

</style>
