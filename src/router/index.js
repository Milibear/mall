import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Category from '../views/Category.vue'
import CategoryList from '../views/Categorylist.vue'
import Product from '../views/Product.vue'
import BuyCart from '../views/BuyCart.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path:'/category',
    name:'category',
    component:Category,
  },
  {
    path:'/categorylist/:id',
    name:'categorylist',
    component:CategoryList,
    props:true
  },
  {
    path:'/product/:id',
    name:'product',
    component:Product,
    props:true
  },
  {
    path:'/buycart',
    name:'buycart',
    component:BuyCart,
  }
]

const router = new VueRouter({
  routes
})

export default router
