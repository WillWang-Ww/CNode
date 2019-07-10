<template>
  <div id="app">
    <PageHeader></PageHeader>
    <div class="main">
    <router-view name="main"></router-view>
    <router-view name="SlideBar"></router-view>
    </div>
  </div>
</template>

<script>
import PageHeader from './components/PageHeader'
import MainList from './components/MainList'
import Article from './components/Article'
import UserInfo from  './components/UserInfo'
import SlideBar from './components/SlideBar'

export default {
  name: 'App',
  components: {
    PageHeader,MainList,Article,UserInfo,SlideBar
  }
}
</script>

<style>
.main{
  display: flex;
  width: 100vw;
}
</style>
