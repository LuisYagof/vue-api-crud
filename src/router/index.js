import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/omdb',
    name: 'Omdb',
    component: () => import(/* webpackChunkName: "" */ '../views/OMDB.vue')
  },
  {
    path: '/movie/:id',
    name: 'Movie',
    component: () => import(/* webpackChunkName: "" */ '../views/Movie.vue')
  },
  {
    path: '/favourites',
    name: 'Favourites',
    component: () => import(/* webpackChunkName: "" */ '../views/Favourites.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
