<template>
  <div class="UserInfo">
    <div class="userMessage">
      <div class="mainList">
        <div class="backMainList topNav">
          <router-link :to="{name:'root'}" class="aLink"><div class="mainListLink">主页</div></router-link>
        </div>
        <div class="info">
          <img :src="userinfo.avatar_url" alt="">
          <span>{{userinfo.loginname}}</span>
          <p>{{userinfo.score}} 积分</p>
          <p>注册时间 {{userinfo.create_at | timeFilter}}</p>
          <a href="`https://github.com/${userinfo.githubUsername}`" class="aLink listStyle">{{userinfo.githubUsername}}</a>
        </div>
      </div>
    </div>
    <div class="creatTopic">
      <div class="topNav">最近创建的话题</div>
      <ul>
        <li v-for="items in userinfo.recent_topics" class="listStyle postCard">
          <router-link :to="{name:'post_content',params:{id:items.id}}" class="aLink">
            <p class="title listStyle">{{items.title}}</p>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="joinTopic">
      <div class="topNav">最近参与的话题</div>
      <ul>
        <li v-for="items in userinfo.recent_replies" class="listStyle postCard">
          <router-link :to="{name:'post_content',params:{id:items.id}}" class="aLink">
            <p class="title">{{items.title}}</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'UserInfo',
    data () {
      return {
        userinfo: {}
      }
    },
    methods: {
      getUserData () {
        this.$http.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
          .then(res => {
            this.userinfo = res.data.data
          })
          .catch(err => {
            console.log(err)
          })
      }
    },
    beforeMount () {
      this.getUserData()
    }
  }
</script>
<style scoped>
  .userMessage {
      border-radius: 5px;
      background-color: white;
      margin-top: 10px;
      margin-left: 50px;
      margin-right: 50px;
    }
  .creatTopic{
    border-radius: 5px;
    background-color: white;
    margin-top: 10px;
    margin-left: 50px;
    margin-right: 50px;
  }
  .joinTopic{
    border-radius: 5px;
    background-color: white;
    margin-top: 10px;
    margin-left: 50px;
    margin-right: 50px;
  }
  .topNav{
    color: #444444;
    background-color: #f6f6f6;
    padding: 10px;
  }
  .mainListLink{
    font-size: 14px;
    color: #80bd01;
  }
  .aLink{
    text-decoration: none;
  }
  .info > img {
    height: 40px;
    width: 40px;
  }
  .info{
    padding: 10px;
  }
  .info > span,.info > p{
    color: #778087;
    font-size: 14px;
    padding-left: 5px;
  }
  .listStyle{
    list-style: none;
  }
  .postCard {
    background-color: #ffffff;
    display: flex;
    align-items: center;
    vertical-align: top;
    border-top: 1px solid #f6f6f6;
  }
  ul{
    margin: 0;
    padding:0px 25px;
  }
</style>
