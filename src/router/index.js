import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Tasks from '../views/Tasks.vue'
import Working from '../views/Working.vue'

Vue.use(VueRouter)

export default new VueRouter({
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/working',
      name: 'working',
      component: Working
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: Tasks
    },
    { path: '*', redirect: '/' }
  ]
})
