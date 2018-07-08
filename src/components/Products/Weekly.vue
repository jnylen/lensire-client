<script>
import products from '@/api/products'
import ProductItem from './ProductItem'

export default {
  name: 'Weekly',
  components: {
    ProductItem
  },
  data () {
    return {
      products: [],
      loading: true
    }
  },
  metaInfo: {
    title: 'Weeklies'
  },
  computed: {
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

      const newprods = this.products

      return newprods.sort(compare)
    }
  },
  methods: {
    fetchProducts () {
      products.getAll({wear: 'weekly'})
        .then(response => {
          this.products = response.data.sort()
          console.log(response.data)
        })
        .catch(error => {
          console.log(error)
          this.errored = true
        })
        // .finally(() => this.loading = false)
    }
  },
  mounted () {
    this.fetchProducts()
  }
}
</script>

<template>
<div class="container">
  <div class="notification is-primary has-text-centered">
    Here is a list of weekly contact lenses we currently provide pricing for.
  </div>
  <div class="popular items">
    <h1 class="has-text-weight-bold">Weekly contact lenses</h1>
    <div class="columns padding-top" v-if="!products.length">
      <p>Currently no products in the database</p>
    </div>
    <div class="columns padding-top is-multiline" v-if="products.length">
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
