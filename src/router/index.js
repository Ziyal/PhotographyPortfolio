import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Category from '@/components/Category'
import Albums from '@/components/Albums'
import SingleAlbum from '@/components/SingleAlbum'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Admin from '@/components/Admin'
import AlbumAdmin from '@/components/admin/AlbumAdmin'
import UploadAdmin from '@/components/admin/UploadAdmin'
import EditAdmin from '@/components/admin/EditAdmin'
import DeleteAdmin from '@/components/admin/DeleteAdmin'
import Dashboard from '@/components/admin/Dashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/albums',
      name: 'Albums',
      component: Albums
    },  
    {
      path: '/category/:category',
      name: 'Category',
      component: Category
    },   
    {
      path: '/albums/:id',
      name: 'SingleAlbum',
      component: SingleAlbum
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      props: true
    },
    {
      path: '/album_admin/:id',
      name: 'AlbumAdmin',
      component: AlbumAdmin
    },
    {
      path: '/upload_album/:id/:category',
      name: 'UploadAdmin',
      component: UploadAdmin
    },
    {
      path: '/edit_admin/:id',
      name: 'EditAdmin',
      component: EditAdmin
    },
    {
      path: '/delete_album/:id',
      name: 'DeleteAdmin',
      component: DeleteAdmin,
      props: true
    }
  ]
})

