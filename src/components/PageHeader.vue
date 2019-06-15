<template>
    <div id="Header">
      <div class="logo">
        <img class="logo" src="../assets/cnodejs_light.png" alt="Logo">
      </div>
      <ul>
        <li><a href="#">首页</a></li>
        <li><a href="#">新手入门</a></li>
        <li><a href="#">API</a></li>
        <li><a href="#">关于</a></li>
        <li><a href="#">注册</a></li>
        <li><a href="#">登录</a></li>
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
  a{
    text-decoration: none;
    color:#b4b6ab;
    margin: 0px 10px;
    word-break: keep-all;
    font-size: 13px;
  }
  ul{
    list-style-type: none;
    display: flex;
    flex-wrap: nowrap;
    margin-left: auto;
    margin-right: 100px;
  }
</style>
