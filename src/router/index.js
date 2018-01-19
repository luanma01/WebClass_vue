import Vue from 'vue'
import Router from 'vue-router'

import HomeComponent from '@/components/home'
import NoticeComponent from '@/components/notice'
import ForumComponent from '@/components/forum'
import BookComponent from '@/components/book'
import VideoComponent from '@/components/video'
import LoginComponent from '@/components/login'
import RegisterComponent from '@/components/register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeComponent,
      children: [
          { path: '/', component: NoticeComponent},
          { path: '/forum', component: ForumComponent},
          { path: '/book', component: BookComponent},
          { path: '/video', component: VideoComponent},
          { path: '/login', component: LoginComponent},
          { path: '/register', component: RegisterComponent}
      ]
    }
  ]
})
