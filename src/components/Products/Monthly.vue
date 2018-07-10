<script>
import { mapGetters } from 'vuex'
import ProductItem from './ProductItem'

export default {
  name: 'Monthly',
  components: {
    ProductItem
  },
  data () {
    return {
      loading: true
    }
  },
  metaInfo: {
    title: 'Monthlies'
  },
  computed: {
    ...mapGetters([
      'getProductsByWear'
    ]),
    sortedProducts: function () {
      function compare (a, b) {
        if (a.name < b.name) {
          return -1
        }
        if (a.name > b.name) {
          return 1
        }
        return 0
      }

      const newprods = this.getProductsByWear('monthly')

      return newprods.sort(compare)
    }
  }
}
</script>

<template>
<div class="container">
  <div class="notification is-primary has-text-centered">
    Here is a list of monthly contact lenses we currently provide pricing for.
  </div>
  <div class="popular items">
    <h1 class="has-text-weight-bold">Monthly contact lenses</h1>
    <div class="columns padding-top" v-if="!sortedProducts.length">
      <p>Currently no products in the database</p>
    </div>
    <div class="columns padding-top is-multiline" v-if="sortedProducts.length">
      <ProductItem v-for="item in sortedProducts" v-bind:key="item.id" v-bind:data="item" />
    </div>
  </div>
</div>
</template>

<style scoped>
 .container {
   padding-top:20px;
 }

 .padding-top {
   padding-top:20px;
 }
</style>
