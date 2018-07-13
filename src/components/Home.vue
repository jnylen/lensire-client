<script>
import { mapGetters } from 'vuex'
import ProductItem from './ProductItem'
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
    title: 'Price compare contact lenses - The world\'s cheapest contact lenses on the web!',
    meta: [
      {description: 'Compare prices on contact lenses all over the world. Free shipping. Buy your contact lenses up to 50% cheaper online!'}
    ]
  },
  computed: {
    ...mapGetters([
      'getAllProducts',
      'getPopularProducts'
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
<div class="mt-16 flex content-between flex-wrap">
  <div class="w-full flex-grow">
    <div class="text-center">
      <h1 class="text-lg text-grey-darker font-semibold">{{ $t('homepage.search_header') }}</h1>
    </div>
    <div class="pt-8">
      <typeahead :source="sortedProducts" :onSelect="onSelect" :onChange="onChange" placeholder="Search for your products here" :limit="5"></typeahead>
    </div>
  </div>
  <div class="w-full mt-32">
    <div class="text-center">
      <h1 class="text-lg text-grey-darker font-semibold">{{ $t('homepage.popular_header') }}</h1>
    </div>
    <div class="flex flex-wrap justify-center mt-8">
      <ProductItem v-for="item in getPopularProducts" v-bind:key="item.id" v-bind:data="item" />
    </div>
  </div>
</div>
</template>

<style scoped>

</style>
