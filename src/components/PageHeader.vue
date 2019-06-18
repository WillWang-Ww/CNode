<template>
    <div id="Header">
      <div class="logo">
        <router-link :to="{
            name:'root',
          }">
          <img class="logo" src="../assets/cnodejs_light.png" alt="Logo">
        </router-link>
      </div>
      <ul>
        <router-link :to="{
            name:'root',
          }">
          <li><a href="#" class="aTags">首页</a></li>
        </router-link>
        <router-link :to="{
            name:'root',
          }">
          <li><a href="#" class="aTags">新手入门</a></li>
        </router-link><router-link :to="{
            name:'root',
          }">
        <li><a href="#" class="aTags">API</a></li>
      </router-link><router-link :to="{
            name:'root',
          }">
        <li><a href="#" class="aTags">关于</a></li>
      </router-link><router-link :to="{
            name:'root',
          }">
        <li><a href="#" class="aTags">注册</a></li>
      </router-link><router-link :to="{
            name:'root',
          }">
        <li><a href="#" class="aTags">登录</a></li>
      </router-link>
      </ul>
    </div>
</template>

<script>
export default{
  name: 'PageHeader'
}
</script>
<style scoped>
  #Header{
    background-color: #444444;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
  }
  .logo{
    margin-left: 50px;
   }
  .aTags{
    text-decoration: none;
    color:#b4b6ab;
    margin: 0px 10px;
    word-break: keep-all;
    font-size: 13px;
  }

  li{
    text-decoration: none;
  }
  ul{
    list-style-type: none;
    display: flex;
    flex-wrap: nowrap;
    margin-left: auto;
    margin-right: 100px;
  }
</style>
