<template>
    <div class="UserInfo">
      <div class="userMessage">
        <div class="mainList">
          <router-link :to="{
            name:'root',
          }">
            <span>主页</span>
          </router-link>
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
    name: 'UserInfo'
  }
</script>
<style scoped>

</style>
