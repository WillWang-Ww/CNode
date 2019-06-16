<template>
  <div id="app">
    <PageHeader></PageHeader>
    <router-view name="main"></router-view>
  </div>
</template>

<script>
import PageHeader from './components/PageHeader'
import MainList from './components/MainList'
import Article from './components/Article'

export default {
  name: 'App',
  components: {
    PageHeader,MainList,Article
  }
}
</script>

<style>
#app {
}
</style>
