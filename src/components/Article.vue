<template>
    <div class="article">
      <div class="head">
        <div class="headTitle">
          <span class="titleTag">
            <span
              :class="[{goodStyle:(post.good === true)},{topStyle:(post.top === true)},{tabStyle: post.good !== true && post.top !== true}]">
              {{post | tabFilter}}
            </span>
          </span>
          <div class="title">{{post.title}}</div>
        </div>
        <ul>
          <li>发布于 {{post.create_at | timeFilter}}</li>

          <li>{{post.visit_count}}次浏览</li>
          <li>来自 {{post | tabFilter}}</li>
        </ul>
      </div>
      <div v-html="post.content" class="content"></div>
    </div>
</template>

<script>
export default {
    name: 'Article',
    data(){
        return {post:{}}
    },
    methods:{
      getArticleData:function () {
        this.$http.get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`)
          .then(res => {
            this.post = res.data.data
          })
          .catch(err => {
            console.log(err)
          })
      }
    },
  beforeMount () {
      this.getArticleData()
  }
}
</script>
<style>
  @import "";

</style>
