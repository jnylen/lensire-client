import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Product from '@/components/Product'
import Impressum from '@/components/Impressum'
import Products from '@/components/Products'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  linkExactActiveClass: 'is-active',
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
      path: '/impressum',
      name: 'Impressum',
      component: Impressum
    },
    {
      path: '/products/:type',
      name: 'Products',
      component: Products
    }

  ]
})
