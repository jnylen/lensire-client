import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Product from '@/components/Product'
import Products from '@/components/Products'
import Impressum from '@/components/Impressum'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/product/:id',
      name: 'Product',
      component: Product
    },
    {
      path: '/products/:type',
      name: 'Products',
      component: Products
    },
    {
      path: '/impressum',
      name: 'Impressum',
      component: Impressum
    }
  ]
})
