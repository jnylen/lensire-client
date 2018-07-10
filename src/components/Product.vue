<script>
import PricingItem from './PricingItem'
import pricings from '@/api/pricings'
import { mapGetters } from 'vuex'

export default {
  name: 'Product',
  components: {
    PricingItem
  },
  data () {
    return {
      pricings: [],
      loading: true,
      filterParam: 'per_lens'
    }
  },
  metaInfo () {
    return {
      title: this.title
    }
  },
  computed: {
    ...mapGetters([
      'getProductById',
      'getCurrency',
      'getCountry'
    ]),
    sortedPricings () {
      const pric = this.pricings

      return pric.sort((a, b) => {
        return a.pricing_converted.shipping_prices[this.filterParam] > b.pricing_converted.shipping_prices[this.filterParam]
      })
    },
    product () {
      return this.getProductById(this.$route.params.id)
    },
    gC () {
      return this.getCountry
    },
    title () {
      if (this.product) {
        return this.product.name
      } else {
        return 'Product'
      }
    }
  },
  methods: {
    fetchPricings () {
      pricings.getProduct({id: this.$route.params.id}, {currency: this.getCurrency, country: this.getCountry})
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
  watch: {
    gC () {
      this.fetchPricings()
    }
  },
  mounted () {
    if (this.gC) {
      this.fetchPricings()
    }
  }
}
</script>

<template>
<div class="container">
  <div class="notification is-primary" v-if="product">
      <div class="data">
        <div class="image" v-if="product.image">
          <img :src="product.image" />
      </div>
        <h1>{{product.name}}</h1>
        <div class="tags2">
            <span class="tag is-info">{{ $t('product.type.' + product.wear) }}</span>
            <span class="tag is-dark" v-if="product.type">{{ $t('product.type.' + product.type) }}</span>
            <br v-if="product.company" />
            <span class="tag is-primary" v-if="product.company">{{ $t('product.manufacturer', {company: product.company.name}) }}</span>
        </div>
      </div>
  </div>
  <div class="popular items" v-if="product">
    <div class="columns">
      <div class="column is-10">
        <div class="filterbox select is-pulled-right">
          <select v-model="filterParam">
            <option value="per_lens">{{ $t('product.sort_by.per_lens') }}</option>
            <option value="per_box">{{ $t('product.sort_by.per_box') }}</option>
          </select>
        </div>
        <h1 class="has-text-weight-bold">{{ $t('product.cheapest_resellers') }}</h1>
      </div>
    </div>
    <div class="columns">
      <div class="column is-10">
        <div v-if="sortedPricings.length">
          <PricingItem v-for="price in sortedPricings" v-bind:key="price.id" v-bind:data="price" />
        </div>
        <div v-if="!sortedPricings.length">
          {{ $t('product.empty') }}
        </div>
        <div class="shippingprices has-text-centered" v-if="sortedPricings.length">
          {{ $t('product.shipping_prices_included') }}
        </div>
      </div>
      <div class="column has-text-centered">
        <!-- ADS -->
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
