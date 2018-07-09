<script>
import Item from './Item/Item'
import products from '@/api/products'
import pricings from '@/api/pricings'

export default {
  name: 'Product',
  components: {
    Item
  },
  data () {
    return {
      title: 'Product',
      product: {},
      pricings: [],
      loading: true,
      filterParam: 'per_lens'
    }
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  metaInfo () {
    return {
      title: this.title
    }
  },
  computed: {
    sortedPricings () {
      const pric = this.pricings

      return pric.sort((a, b) => {
        return a.pricing_converted.shipping_prices[this.filterParam] > b.pricing_converted.shipping_prices[this.filterParam]
      })
    }
  },
  methods: {
    fetchProduct () {
      products.getOne({id: this.$route.params.id})
        .then(response => {
          this.product = response.data
          this.title = this.product.name
          console.log(response.data)
        })
        .catch(error => {
          console.log(error)
          this.errored = true
        })
        // .finally(() => this.loading = false)
    },
    fetchPricings () {
      pricings.getProduct({id: this.$route.params.id})
        .then(response => {
          this.pricings = response.data
          console.log(response.data)
        })
        .catch(error => {
          console.log(error)
          this.errored = true
        })
    },
    sortPricings (filterParam) {
      this.filterParam = filterParam
    }
  },
  mounted () {
    this.fetchProduct()
    this.fetchPricings()
  }
}
</script>

<template>
<div class="container">
  <div class="notification is-primary">
      <div class="data">
        <div class="image" v-if="product.image">
          <img :src="product.image" />
      </div>
        <h1>{{product.name}}</h1>
        <div class="tags2">
            <span class="tag is-info">{{ product.wear | capitalize }} contacts</span>
            <span class="tag is-dark" v-if="product.type">{{ product.type | capitalize }}</span>
            <br v-if="product.company" />
            <span class="tag is-primary" v-if="product.company">Manufactured by {{ product.company.name }}</span>
        </div>
      </div>
  </div>
  <div class="popular items">
    <div class="columns">
      <div class="column is-10">
        <div class="filterbox select is-pulled-right">
          <select v-model="filterParam">
            <option value="per_lens">Sort by per lens price</option>
            <option value="per_box">Sort by per box price</option>
          </select>
        </div>
        <h1 class="has-text-weight-bold">Cheapest resellers</h1>
      </div>
    </div>
    <div class="columns">
      <div class="column is-10">
        <div v-if="sortedPricings.length">
          <Item v-for="price in sortedPricings" v-bind:key="price.id" v-bind:data="price" />
        </div>
        <div v-if="!sortedPricings.length">
          Currently we have no prices for this contact lens. Sorry about that.
        </div>
      </div>
      <div class="column has-text-centered">
        <img src="http://cdn.double.net/ads/affiliate-160600-SE.jpg" />
      </div>
    </div>
  </div>
</div>
</template>

<style lang="scss" scoped>
.image {
    display:inline-block;
}

.filterbox {
  display:inline-block;
  margin-top:-10px;
}

.data {
    text-align:center;

    .image {
      img {
        max-height:160px;
        width:auto;
      }
    }

    h1 {
      font-weight:bold;
    }

    .tags2 {
      padding-top:20px;
    }
}
.container {
    padding-top:20px;
}

.padding-top {
   padding-top:20px;
}

.popular.items {
  padding-top:10px;
}
</style>
