import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Product from '@/components/Product'
import Impressum from '@/components/Impressum'

import Yearly from '@/components/Products/Yearly'
import Monthly from '@/components/Products/Monthly'
import Daily from '@/components/Products/Daily'
import Weekly from '@/components/Products/Weekly'

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
      path: '/impressum',
      name: 'Impressum',
      component: Impressum
    },
    {
      path: '/products/daily',
      name: 'Daily',
      component: Daily
    },
    {
      path: '/products/yearly',
      name: 'Yearly',
      component: Yearly
    },
    {
      path: '/products/monthly',
      name: 'Monthly',
      component: Monthly
    },
    {
      path: '/products/weekly',
      name: 'Weekly',
      component: Weekly
    }

  ]
})
