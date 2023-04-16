import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import TeamPage from '../pages/TeamPage.vue'
import UserPage from '../pages/UserPage.vue'
import SearchPage from '../pages/SearchPage.vue'
import SearchResultPage from '../pages/SearchResultPage.vue'
import UserEditPage from '../pages/UserEditPage.vue.vue'
import HomeView from '../views/HomeView.vue'


const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/team',
      name: 'team',
      component: TeamPage
    },
    {
      path: '/user',
      name: 'user',
      component: UserPage
    },
    {
      path: '/search',
      name: 'search',
      component: SearchPage
    },
    {
      path: '/user/list',
      name: 'searchResult',
      component: SearchResultPage
    },
    {
      path: '/user/edit',
      name: 'userEdit',
      component: UserEditPage
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
