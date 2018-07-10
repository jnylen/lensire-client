<script>
import { mapGetters } from 'vuex'
import ProductItem from './Products/ProductItem'
import typeahead from './Typeahead'

export default {
  name: 'Home',
  components: {
    ProductItem,
    typeahead
  },
  data () {
    return {
      value: ''
    }
  },
  metaInfo: {
    title: 'Home'
  },
  computed: {
    ...mapGetters([
      'getAllProducts',
      'getPopularProducts',
      'getCurrency',
      'getCountry'
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

      let newprods = this.getAllProducts

      return newprods.sort(compare)
    }
  },
  methods: {
    onSelect (value) {
      this.$router.push('/product/' + value.id)
    },
    onChange (value) {
      // what should we do here?
    }
  }
}
</script>

<template>
<div class="container">
  <div class="notification is-info has-text-centered">
    <p>
      {{ $t('homepage.info') }}
    </p>
    <p v-html="$t('homepage.chosen', {country: getCountry, currency: getCurrency})"></p>
  </div>
  <typeahead :source="sortedProducts" :onSelect="onSelect" :onChange="onChange" placeholder="Search for your products here" :limit="5"></typeahead>
  <div class="popular items padding-top">
    <h1 class="has-text-weight-bold">{{ $t('homepage.popular_header') }}</h1>
    <div class="columns is-multiline padding-top" v-if="getPopularProducts.length">
      <ProductItem v-for="item in getPopularProducts" v-bind:key="item.id" v-bind:data="item" />
    </div>
    <div class="columns is-multiline padding-top" v-if="!getPopularProducts.length">
      <p>{{ $t('no_data') }}</p>
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
