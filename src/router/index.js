import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Admin from '@/components/Admin'
import AlbumAdmin from '@/components/AlbumAdmin'
import DeleteAdmin from '@/components/DeleteAdmin'
import Dashboard from '@/components/Dashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
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
    },
    {
      path: '/album_admin/:id',
      name: 'AlbumAdmin',
      component: AlbumAdmin
    },
    // {
    //   path: '/edit_album',
    //   name: 'Dashboard',
    //   component: Dashboard
    // },
    {
      path: '/delete_album/:id',
      name: 'DeleteAdmin',
      component: DeleteAdmin
    }
  ]
})
