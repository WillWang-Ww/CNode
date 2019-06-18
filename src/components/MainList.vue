<template>
  <div class="main">
    <ul class="list">
      <div class="topNav">
        <a href="#">全部</a>
        <a href="#">精华</a>
        <a href="#">分享</a>
        <a href="#">问答</a>
        <a href="#">招聘</a>
        <a href="#">客户端测试</a>
      </div>
      <li v-for="post in posts" class="postCard">
        <router-link :to="{
            name:'user_info',
            params:{
              name:post.author.loginname
            }
          }">
          <img :src="post.author.avatar_url" alt="" class="avatar">
        </router-link>
        <div class="countMessage">
          <span class="reply">{{post.reply_count}}</span><span class="visit">/{{post.visit_count}}</span>
        </div>
        <div class="pingInfo">
          <div
            :class="[{goodStyle:(post.good === true)},{topStyle:(post.top === true)},{tabStyle: post.good !== true && post.top !== true}]">
            {{post | tabFilter}}
          </div>
        </div>
        <router-link :to="{
          name:'post_content',
          params:{id:post.id}
        }" class="link">
          <p class="title">{{post.title}}</p>
        </router-link>

        <div class="time">
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
  .main {
    margin-left: 100px;
    margin-top: 15px;
  }

  .topNav {
    background-color: #f6f6f6;
    height: 50px;
    display: flex;
    align-items: center;
  }
  .topNav > a{
    text-decoration: none;
    font-size: 14px;
    color: #80bd01;
    padding: 3px 4px;
    border-radius: 3px;
    margin: 0px 10px;
  }

  .topNav > a:first-child {
    text-decoration: none;
    font-size: 14px;
    background-color: #80bd01;
    color: #ffffff;
    padding: 3px 4px;
    border-radius: 3px;
    margin: 0px 10px;
  }

  .topNav > a:hover {
    text-decoration: none;
    font-size: 14px;
    background-color: #80bd01;
    color: #ffffff;
    padding: 3px 4px;
    border-radius: 3px;
    margin: 0px 10px;
  }
  .link{
    text-decoration: none;
  }
  .title{
    text-decoration: none;
    color: black;
  }
  .avatar {
    width: 30px;
    height: 30px;
    margin: 0px 15px;
  }

  .list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .countMessage {
    width: 70px;
    text-align: center;
  }

  .reply {
    font-size: 15px;
    color: #a38aa3;
  }

  .visit {
    font-size: 8px;
    color: #c7c7c7;
  }

  .postCard {
    background-color: #ffffff;
    display: flex;
    align-items: center;
    vertical-align: top;
    border-top: 1px solid #f6f6f6;
  }

  .postCard:hover{
    background-color: #f6f6f6;
  }

  .postCard:last-child {
    border-radius: 3px;
  }

  .goodStyle {
    font-size: 12px;
    background-color: #80bd01;
    color: #ffffff;
    padding: 2px 4px;
    border-radius: 3px;
    margin: 0px 3px;
  }

  .topStyle {
    font-size: 12px;
    background-color: #80bd01;
    color: #ffffff;
    padding: 2px 4px;
    border-radius: 3px;
    margin: 0px 3px;
  }

  .tabStyle {
    background-color: #e5e5e5;
    font-size: 12px;
    color: #999999;
    padding: 2px 4px;
    border-radius: 3px;
    margin: 0px 3px;
  }

  .time {
    margin-left: auto;
    margin-right: 12px;
    font-size: 12px;
    color: #778087;
  }
</style>
