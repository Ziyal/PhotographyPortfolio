import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Admin from '@/components/Admin'
import Dashboard from '@/components/Dashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    }
  ]
})
