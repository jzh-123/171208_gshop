import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from "../pages/Msite/Msite";
import Search from "../pages/Search/Search";
import Order from "../pages/Order/Order";
import Profile from "../pages/Profile/Profile";
import Login from "../pages/Login/Login";


Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/msite',
      component:  Msite,
      meta: {
        showFooterr: true
      }
    },
    {
      path: '/search',
      component:  Search,
      meta: {
        showFooterr: true
      }
    },
    {
      path: '/order',
      component:  Order,
      meta: {
        showFooterr: true
      }
    },
    {
      path: '/profile',
      component:  Profile,
      meta: {
        showFooterr: true
      }
    },
    {
      path: '/',
      redirect: '/msite',
    },
    {
      path: '/login',
      component:  Login
    }
  ]
})
