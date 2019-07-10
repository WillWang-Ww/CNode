<template>
    <div class="slidebar">
        <div class="authorInfo">
            <div class="topBar">作者</div>
            <router-link :to="{
            name:'user_info',
            params:{
              name:userinfo.loginname
            }
            }">
            <img :src="userinfo.avatar_url" alt="" class="avatar">
            </router-link>
        </div>
        <div class="recentTopic">
            <div class="topBar">作者其他话题</div>
        </div>
        <div class="recentReply">
            <div class="topBar">作者最近回复</div>
        </div>
    </div>
</template>
<script>
export default {
    name:"SlideBar",
    data() {
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
.slidebar{
    width:16vw;
    margin-right: 200px;
    margin-left: 25px;
    margin-top: 20px;
    flex-shrink: 0;
}
.topBar{
    color: #333333;
    background-color: #f6f6f6;
    padding: 10px;
    font-size: 14px;
}
.avatar{
    width: 60px;
    height: 60px;
}
</style>

