<template>
  <div id="app">
    <PageHeader></PageHeader>
    <MainList></MainList>
  </div>
</template>

<script>
import PageHeader from './components/PageHeader'
import MainList from './components/MainList'
export default {
  name: 'App',
  components: {
    PageHeader,MainList
  }
}
</script>

<style>
#app {
}
</style>
