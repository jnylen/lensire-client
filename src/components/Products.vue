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
  <div class="p-8 flex flex-wrap justify-center">
    <ProductItem v-for="item in sortedProducts" v-bind:key="item.id" v-bind:data="item" />
  </div>
</div>
</template>

<style scoped>

</style>
