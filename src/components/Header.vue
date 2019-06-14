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
  name: 'header'
}
</script>
<style scoped>
  #Header{
    background-color: #333;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
  }
  .logo{
    margin-left: 30px;
   }
  a{
    text-decoration: none;
    color:#999;
    margin: 0px 10px;
    word-break: keep-all;
  }
  ul{
    list-style-type: none;
    display: flex;
    flex-wrap: nowrap;
    margin-left: auto;
    margin-right: 30px;
  }
</style>
