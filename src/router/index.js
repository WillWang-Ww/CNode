import Vue from 'vue'
import Router from 'vue-router'
import Article from '../components/Article'
import MainList from '../components/MainList'
import UserInfo from '../components/UserInfo'
import SlideBar from '../components/SlideBar.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'root',
      path: '/',
      components: {
        main: MainList
      }
    },
    {
      name: 'post_content',
      path: '/topic/:id&author=:name',
      components: {
        main: Article,
        SlideBar: SlideBar
      }
    },
    {
      name: 'user_info',
      path: '/userinfo/:name',
      components: {
        main: UserInfo
      }
    }
  ]
})
