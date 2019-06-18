<template>
  <div class="UserInfo">
    <div class="userMessage">
      <div class="mainList">
        <div class="backMainList">
          <router-link :to="{name:'root'}"><span>主页</span></router-link>
        </div>
        <div class="info">
          <img :src="userinfo.avatar_url" alt="">
          <span>{{userinfo.loginname}}</span>
          <p>{{userinfo.score}} 积分</p>
          <p>注册时间 {{userinfo.create_at | timeFilter}}</p>
          <a href="`https://github.com/${userinfo.githubUsername}`">{{userinfo.githubUsername}}</a>
        </div>
      </div>
    </div>
    <div class="creatTopic">

    </div>
    <div class="joinTopic">

    </div>
  </div>
</template>

<script>
  export default {
    name: 'UserInfo',
    data () {
      return {
        userinfo:{}
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

</style>
