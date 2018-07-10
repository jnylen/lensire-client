<script>
import products from '@/api/products'
import ProductItem from './Products/ProductItem'
import typeahead from './Typeahead'

export default {
  name: 'Home',
  components: {
    ProductItem,
    typeahead
  },
  props: ['country', 'currency'],
  data () {
    return {
      products: [],
      value: ''
    }
  },
  metaInfo: {
    title: 'Home'
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

      let newprods = this.products

      return newprods.sort(compare)
    },
    popularProducts: function () {
      let newprods = this.products
      newprods = newprods.filter((p) => {
        return p.popular === true
      })

      console.log(newprods)

      return newprods
    }
  },
  methods: {
    fetchProducts () {
      products.getAll()
        .then(response => {
          this.products = response.data
          console.log(response.data)
        })
        .catch(error => {
          console.log(error)
          this.errored = true
        })
        // .finally(() => this.loading = false)
    },
    onSelect (value) {
      this.$router.push("/product/" + value.id)
    },
    onChange (value) {
      // what should we do here?
    }
  },
  mounted () {
    this.fetchProducts()
  }
}
</script>

<template>
<div class="container">
  <div class="notification is-info has-text-centered">
    <p>
      {{ $t('homepage.info') }}
    </p>
    <p v-html="$t('homepage.chosen', {country: country, currency: currency})"></p>
  </div>
  <typeahead :source="sortedProducts" :onSelect="onSelect" :onChange="onChange" placeholder="Search for your products here" :limit="5"></typeahead>
  <div class="popular items padding-top">
    <h1 class="has-text-weight-bold">{{ $t('homepage.popular_header') }}</h1>
    <div class="columns is-multiline padding-top" v-if="popularProducts.length">
      <ProductItem v-for="item in popularProducts" v-bind:key="item.id" v-bind:data="item" />
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
