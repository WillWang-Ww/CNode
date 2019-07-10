<template>
  <div class="ml_main">
    <ul class="ml_list">
      <div class="ml_topNav">
        <a href="#">全部</a>
        <a href="#">精华</a>
        <a href="#">分享</a>
        <a href="#">问答</a>
        <a href="#">招聘</a>
        <a href="#">客户端测试</a>
      </div>
      <li v-for="post in posts" class="ml_postCard" :key="post">
        <router-link :to="{
            name:'user_info',
            params:{
              name:post.author.loginname
            }
          }">
          <img :src="post.author.avatar_url" alt="" class="ml_avatar">
        </router-link>
        <div class="ml_countMessage">
          <span class="ml_reply">{{post.reply_count}}</span><span class="ml_visit">/{{post.visit_count}}</span>
        </div>
        <div class="ml_pingInfo">
          <div
            :class="[{goodStyle:(post.good === true)},{topStyle:(post.top === true)},{tabStyle: post.good !== true && post.top !== true}]">
            {{post | tabFilter}}
          </div>
        </div>
        <router-link :to="{
          name:'post_content',
          params:{id:post.id,name:post.author.loginname}
        }" class="link">
          <p class="ml_title">{{post.title}}</p>
        </router-link>

        <div class="ml_time">
          {{post.last_reply_at | timeFilter}}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'MainList',
    data () {
      return {
        posts: []
      }
    },
    methods: {
      getData: function () {
        this.$http.get('https://cnodejs.org/api/v1/topics', {
          page: 1,
          limit: 20
        }).then(res => {
          this.posts = res.data.data
        }).catch(function (err) {

        })
      }
    },
    beforeMount () {
      this.getData()
    }
  }
</script>
<style scoped>
  .ml_main {
    margin-left: 100px;
    margin-top: 15px;
  }

  .ml_topNav {
    background-color: #f6f6f6;
    height: 50px;
    display: flex;
    align-items: center;
  }
  .ml_topNav > a{
    text-decoration: none;
    font-size: 14px;
    color: #80bd01;
    padding: 3px 4px;
    border-radius: 3px;
    margin: 0px 10px;
  }

  .ml_topNav > a:first-child {
    text-decoration: none;
    font-size: 14px;
    background-color: #80bd01;
    color: #ffffff;
    padding: 3px 4px;
    border-radius: 3px;
    margin: 0px 10px;
  }

  .ml_topNav > a:hover {
    text-decoration: none;
    font-size: 14px;
    background-color: #80bd01;
    color: #ffffff;
    padding: 3px 4px;
    border-radius: 3px;
    margin: 0px 10px;
  }
  .ml_link{
    text-decoration: none;
  }
  .ml_title{
    text-decoration: none;
    color: black;
  }
  .ml_avatar {
    width: 30px;
    height: 30px;
    margin: 0px 15px;
  }

  .ml_list {
    list-style: none;
    margin: 0;
    padding: 0;
    width: 90vw;
  }

  .ml_countMessage {
    width: 70px;
    text-align: center;
  }

  .ml_reply {
    font-size: 15px;
    color: #a38aa3;
  }

  .ml_visit {
    font-size: 8px;
    color: #c7c7c7;
  }

  .ml_postCard {
    background-color: #ffffff;
    display: flex;
    align-items: center;
    vertical-align: top;
    border-top: 1px solid #f6f6f6;
  }

  .ml_postCard > a{
    text-decoration: none;
  }

  .ml_postCard:hover{
    background-color: #f6f6f6;
  }

  .ml_postCard:last-child {
    border-radius: 3px;
  }

  .ml_goodStyle {
    font-size: 12px;
    background-color: #80bd01;
    color: #ffffff;
    padding: 2px 4px;
    border-radius: 3px;
    margin: 0px 3px;
  }

  .ml_topStyle {
    font-size: 12px;
    background-color: #80bd01;
    color: #ffffff;
    padding: 2px 4px;
    border-radius: 3px;
    margin: 0px 3px;
  }

  .ml_tabStyle {
    background-color: #e5e5e5;
    font-size: 12px;
    color: #999999;
    padding: 2px 4px;
    border-radius: 3px;
    margin: 0px 3px;
  }

  .ml_time {
    margin-left: auto;
    margin-right: 12px;
    font-size: 12px;
    color: #778087;
  }
</style>
