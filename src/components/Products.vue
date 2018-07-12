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
<div class="container">
  <div class="notification is-primary has-text-centered">
    Here is a list of {{ this.$route.params.type }} contact lenses we currently provide pricing for.
  </div>
  <div class="popular items">
    <div class="columns padding-top" v-if="!sortedProducts.length">
      <p>{{ $t('no_data') }}</p>
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
