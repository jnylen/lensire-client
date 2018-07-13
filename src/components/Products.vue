<script>
import { mapGetters } from 'vuex'
import ProductItem from './ProductItem'

export default {
  name: 'Products',
  components: {
    ProductItem
  },
  data () {
    return {
      loading: true
    }
  },
  metaInfo () {
    return {
      title: this.title
    }
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

      const newprods = this.getProductsByWear(this.$route.params.type)

      return newprods.sort(compare)
    },
    title () {
      if (this.$route) {
        return this.$i18n.translate('header.menu.' + this.$route.params.type)
      } else {
        return 'Products'
      }
    }
  }
}
</script>

<template>
<div class="flex flex-wrap flex-col">
  <div class="text-center pt-12">
    <h1 class="text-lg text-grey-darker font-semibold">{{ $t('header.menu.' + this.$route.params.type ) }}</h1>
  </div>
  <div class="p-8 flex flex-wrap justify-center" v-if="sortedProducts.length">
    <ProductItem v-for="item in sortedProducts" v-bind:key="item.id" v-bind:data="item" />
  </div>
  <div v-if="!sortedProducts.length">
    <div class="text-grey text-center text-lg font-medium p-40">
      <div class="pb-12">
        <svg class="h-32 w-32 text-grey-light" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M64 1.99458L62.0085 0L32 30.0051L1.99353 0L0 1.99458L30.0065 31.9994L0 62.0046L1.99353 64L32 33.9909L62.0085 64L64 62.0046L33.9935 31.9994L64 1.99458Z" fill="#B8C2CC"/>
        </svg>
      </div>
      {{ $t('no_data') }}
    </div>
  </div>
</div>
</template>

<style scoped>

</style>
