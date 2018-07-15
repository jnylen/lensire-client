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

      return pric.sort((a, b) => { return a.pricing_converted.shipping_prices[this.filterParam] - b.pricing_converted.shipping_prices[this.filterParam] })
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
<div class="container flex-1 flex flex-col" v-if="product">
  <div class="bg-white flex flex-wrap flex-col justify-center text-center py-6">
    <div class="product-image" v-if="product.image">
      <img :src="product.image" />
    </div>
    <div class="pt-2">
      <h1 class="text-grey-darker font-semibold text-lg">{{product.name}}</h1>
      <h5 class="text-grey-darker text-xs font-medium pt-4">{{ $t('product.manufacturer', {company: product.company.name})}}</h5>
      <div class="pt-8 pb-4">
        <span class="bg-pink px-4 py-2 text-white rounded-full text-sm font-normal tracking-tight">{{ $t('product.type.' + product.wear) }}</span>
        <span class="ml-4 bg-grey-darker px-4 py-2 text-white rounded-full text-sm font-normal tracking-tight" v-if="product.type">{{ $t('product.type.' + product.type) }}</span>
      </div>
    </div>
  </div>

  <div class="bg-old-gray border-b border-t border-solid border-grey-light p-8 flex-1 flex">
    <div class="flex-1 flex flex-col" v-if="sortedPricings.length">
      <div id="sort">
        <div class="relative mx-auto w-1/6">
          <select v-model="filterParam" class="bg-old-gray border-0 p-4 w-full text-grey-darker font-medium text-lg font-inherit">
              <option value="per_lens">{{ $t('product.sort_by.per_lens') }}</option>
              <option value="per_box">{{ $t('product.sort_by.per_box') }}</option>
          </select>
          <div class="absolute pin-r pin-t mt-4 mr-3 text-grey-lighter">
            <svg width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.2121 10.5174L6.46154 14.6347V0.400008C6.46154 0.179204 6.25478 0 6.00001 0C5.74525 0 5.53848 0.179204 5.53848 0.400008V14.6347L0.787948 10.5174C0.60749 10.361 0.315802 10.361 0.135344 10.5174C-0.0451146 10.6738 -0.0451146 10.9266 0.135344 11.083L5.67371 15.8831C5.71617 15.9199 5.7674 15.9491 5.82371 15.9695C5.88001 15.9899 5.94001 16.0003 6.00001 16.0003C6.06001 16.0003 6.12001 15.9895 6.17632 15.9695C6.23262 15.9491 6.28385 15.9199 6.32631 15.8831L11.8647 11.083C12.0451 10.9266 12.0451 10.6738 11.8647 10.5174C11.6842 10.361 11.3925 10.361 11.2121 10.5174Z" transform="translate(0 7.99968)" fill="#606F7B"/>
              <path d="M11.8647 4.9168L6.32632 0.116702C6.28385 0.0799017 6.23262 0.0507011 6.17632 0.0303006C6.06324 -0.0101002 5.93632 -0.0101002 5.82371 0.0303006C5.7674 0.0507011 5.71617 0.0799017 5.67371 0.116702L0.135344 4.9168C-0.0451146 5.07321 -0.0451146 5.32601 0.135344 5.48242C0.225342 5.56042 0.343494 5.59962 0.461646 5.59962C0.579798 5.59962 0.697949 5.56042 0.787948 5.48242L5.53848 1.36513V15.5998C5.53848 15.8206 5.74525 15.9998 6.00001 15.9998C6.25478 15.9998 6.46154 15.8206 6.46154 15.5998V1.36513L11.2121 5.48242C11.3021 5.56042 11.4202 5.59962 11.5384 5.59962C11.6565 5.59962 11.7747 5.56042 11.8647 5.48242C12.0451 5.32601 12.0451 5.07281 11.8647 4.9168Z" transform="translate(6)" fill="#606F7B"/>
            </svg>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap justify-center pt-5 pb-10" v-if="sortedPricings.length">
        <div class="bg-white w-3/4 shadow-md rounded-lg">
          <ul class="list-reset">
            <pricing-item v-for="price in sortedPricings" v-bind:key="price.id" v-bind:data="price" />
          </ul>
        </div>
      </div>
    </div>
    <div class="flex-1 flex flex-col items-center self-center" v-if="!sortedPricings.length">
      <div class="text-grey text-lg font-medium p-40 flex-1 flex flex-col">
        <div class="pb-12 mx-auto">
          <svg class="h-32 w-32 text-grey-light" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M64 1.99458L62.0085 0L32 30.0051L1.99353 0L0 1.99458L30.0065 31.9994L0 62.0046L1.99353 64L32 33.9909L62.0085 64L64 62.0046L33.9935 31.9994L64 1.99458Z" fill="#B8C2CC"/>
          </svg>
        </div>
        {{ $t('pricing.empty') }}
      </div>
    </div>
  </div>

</div>
</template>

<style lang="scss" scoped>

</style>
