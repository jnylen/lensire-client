<template>
<li class="p-6 pricingitem">
  <div class="flex">
    <!-- logo -->
    <div class="storelogo w-1/6 pt-2">
      <div>
        <img :src="data.store.logo" />
      </div>
    </div>

    <!-- name + pckage amount -->
    <div class="w-1/3 pl-4 pt-2">
      <h1 class="text-grey-darker font-semibold text-sm">{{data.product.name}}</h1>
      <h5 class="text-grey-darker font-normal text-sm">{{ $t('pricing.pack', {amount: data.package_amount}) }}</h5>
    </div>

    <!-- price per lens -->
    <div class="w-1/5 pt-4 text-grey-darker font-normal text-sm ">
      {{ $t('pricing.per_lens', {text: currencyToHuman(rounded(data.pricing_converted.shipping_prices.per_lens, 2), data.pricing_converted.currency) }) }}
    </div>

    <!-- total amount -->
    <div class="w-1/3 pt-2">
      <div class="float-right mt-2">
        <a class="bg-green-light py-2 px-8 text-white rounded-full text-sm" v-if="data.in_stock" :href="data.link" rel="nofollow" target="_blank">Köp</a>
        <a class="bg-grey py-2 px-8 text-white rounded-full text-sm" v-if="!data.in_stock" :href="data.link" rel="nofollow" target="_blank">Köp</a>
      </div>
      <div class="ml-10">
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

export default {
  name: 'PricingItem',
  props: ['data'],
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
    }
  }
}
</script>

<style lang="scss" scoped>
.box-item {
  margin-bottom:10px;

  .affiliate-ribbon {
    top:0px;
    right:0px;
    border-top-right-radius: 5px;
  }

  .data {
    display: flex;
    justify-content: space-between;

    .reseller {
      border-right:1px solid #ccc;
      flex: none;
      width:130px;
      padding-right:10px;

      .special-ribbon {
        top:-20px;
        left:-20px;
        border-top-left-radius: 5px;
      }

      .logo {
        height:100%;

        img {
          max-width:120px;
          position:absolute;
          top:0;
          bottom:0;
          margin:auto;
        }
      }
    }

    .item {
      flex: none;
      display: flex;
      height:50px;
      width:50%;

      .productimage {
        padding-left:10px;
        flex: none;
        height:100%;
        width:80px;
        text-align:center;

        .image {
          display:inline-block;
          vertical-align: middle;
          height:100%;

          img {
            max-height:50px;
            max-width:80px;
            vertical-align: middle;
          }
        }
      }

      .info {
        padding-left:20px;
        flex: none;

        h5 {
          font-weight:bold;
        }
      }
    }

    .pricing {
      width:40%;

      div.other {
        background: #000;
        width:20%;
        display:inline-block;

        span {
          float:right;
        }
      }

      .container {
        width:100%;
        float:right;
        height:100%;
        padding-top:10px;
        margin-bottom:-10px;

        a.total {
          float:right;
          font-size:24px;
          font-weight:bold;
          color:#000;

          &:hover {
            text-decoration: underline;
          }
        }

        span.perlens {
          line-height:35px;
        }
      }
    }
  }
}
</style>
