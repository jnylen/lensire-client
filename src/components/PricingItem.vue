<template>
<li class="p-3 lg:p-6 pricingitem">
  <div class="flex justify-between">
    <!-- logo -->
    <div class="storelogo w-1/6 pt-2 hidden lg:block">
      <div>
        <img :src="data.store.logo" />
      </div>
    </div>

    <!-- name + pckage amount -->
    <div class="w-2/5 sm:w-2/5 pl-4 pt-2 pr-4 sm:pr-0">
      <h1 class="hidden w-full  lg:block text-grey-darker font-semibold text-sm truncate">{{data.product.name}}</h1>
      <h1 class="lg:hidden text-grey-darker font-semibold text-sm truncate">{{data.store.name}}</h1>
      <h5 class="text-grey-darker font-normal text-sm">{{ $t('pricing.pack', {amount: data.package_amount}) }}</h5>
    </div>

    <!-- price per lens -->
    <div class="w-2/5 sm:w-1/5 pt-4 text-grey-darker font-normal text-sm ">
      {{ $t('pricing.per_lens', {text: currencyToHuman(rounded(data.pricing_converted.shipping_prices.per_lens, 2), data.pricing_converted.currency) }) }}
    </div>

    <!-- total amount -->
    <div class="w-1/5 sm:w-3/5 lg:w-3/5 xl:w-2/5 pt-2 pb-2 sm:pb-1">
      <div class="float-right mt-1">
        <a class="hidden sm:inline bg-green-light py-2 px-8 text-white rounded-full text-sm hover:no-underline hover:bg-green-lighter" v-if="data.in_stock" :href="data.link" rel="nofollow" target="_blank">{{ $t('pricing.buy_button') }}</a>
        <a class="hidden sm:inline bg-grey py-2 px-8 text-white rounded-full text-sm hover:no-underline hover:bg-grey-light" v-if="!data.in_stock" :href="data.link" rel="nofollow" target="_blank">{{ $t('pricing.buy_button') }}</a>
        <a class="sm:hidden bg-green-light py-2 px-4 text-white rounded-full text-sm hover:no-underline hover:bg-green-lighter" v-if="data.in_stock" :href="data.link" rel="nofollow" target="_blank">{{ currencyToHuman(rounded(data.pricing_converted.shipping_prices.per_box, 2), data.pricing_converted.currency) }}</a>
        <a class="sm:hidden bg-grey py-2 px-4 text-white rounded-full text-sm hover:no-underline hover:bg-grey-light" v-if="!data.in_stock" :href="data.link" rel="nofollow" target="_blank">{{ currencyToHuman(rounded(data.pricing_converted.shipping_prices.per_box, 2), data.pricing_converted.currency) }}</a>
      </div>
      <div class="hidden sm:block ml-10">
        <div class="float-right mr-4" v-if="data.store.based_in_country !== getCountry">
          <img class="h-6 w-6" :src="countryFlag(data.store.based_in_country)" />
        </div>
        <h1 class="text-grey-darker font-semibold text-sm">{{ currencyToHuman(rounded(data.pricing_converted.shipping_prices.per_box, 2), data.pricing_converted.currency) }}</h1>
        <h5 class="text-grey-darker font-normal text-sm" v-if="data.pricing_converted.shipping_prices.per_box == data.pricing_converted.amount">{{ $t('pricing.shipping.free') }}</h5>
        <h5 class="text-grey-darker font-normal text-sm" v-if="data.pricing_converted.shipping_prices.per_box != data.pricing_converted.amount">{{ $t('pricing.shipping.cost', {text: currencyToHuman(rounded(data.pricing_converted.shipping_prices.amount, 2), data.pricing_converted.currency) }) }}</h5>
      </div>
    </div>
  </div>
</li>
</template>

<script>

import { format } from 'currency-formatter'
import { mapGetters } from 'vuex'

export default {
  name: 'PricingItem',
  props: ['data'],
  computed: {
    ...mapGetters([
      'getCountry'
    ])
  },
  methods: {
    rounded: function (value, decimals) {
      if (!value) {
        value = 0
      }

      if (!decimals) {
        decimals = 0
      }

      value = Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals)
      return value
    },
    currencyToHuman: function (value, currency) {
      return format(value, { code: currency })
    },
    countryFlag (value) {
      return require('@/assets/flags/' + value.toLowerCase() + '.svg')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
