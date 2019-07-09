// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'

Vue.prototype.$http = Axios
Vue.config.productionTip = false

/* eslint-disable no-new */

// Post tags in main page filter
Vue.filter('tabFilter', function (post) {
  if (post.good === true) {
    return '精华'
  } else if (post.top === true) {
    return '置顶'
  } else if (post.tab === 'ask') {
    return '问答'
  } else if (post.tab === 'share') {
    return '分享'
  } else if (post.tab === 'job') {
    return '招聘'
  } else {
    return '问答'
  }
})

// the last reply time filter
Vue.filter('timeFilter', function (str) {
  if (!str) return ''
  var date = new Date(str)
  var time = new Date().getTime() - date.getTime()
  if (time < 0) {
    return 0
  } else if (time / 1000 < 30) {
    return '刚刚'
  } else if (time / 1000 < 60) {
    return parseInt(time / 1000) + '秒前'
  } else if (time / 60000 < 60) {
    return parseInt(time / 60000) + '分钟前'
  } else if (time / 3600000 < 60) {
    return parseInt(time / 3600000) + '小时前'
  } else if (time / 86400000 < 60) {
    return parseInt(time / 86400000) + '天前'
  } else if (time / 2592000000 < 60) {
    return parseInt(time / 2592000000) + '月前'
  } else if (time / 31536000000 < 60) {
    return parseInt(time / 31536000000) + '年前'
  }
})

new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
