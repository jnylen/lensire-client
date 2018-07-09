<template>
<div class="box box-item has-ribbon">
  <div class="ribbon is-small is-warning affiliate-ribbon" v-if="data.store.affiliate">{{ $t('pricing.affiliate') }}</div>
  <div class="data">
    <div class="reseller has-ribbon-left">
      <div class="ribbon is-small is-info special-ribbon">{{ data.store.based_in_country }}</div>
      <div class="logo">
        <img :src="data.store.logo" />
      </div>
    </div>
    <div class="item">
      <div class="productimage">
        <div class="image">
          <a :href="data.product_id"><img v-if="data.image" :src="data.image" /></a>
        </div>
      </div>
      <div class="info">
        <h5>{{ data.product.name }}</h5>
        <div>
          <span class="tag is-success" v-if="!data.pricing_converted.shipping_prices.amount">{{ $t('pricing.shipping.free') }}</span>
          <span class="tag is-dark" v-if="data.pricing_converted.shipping_prices.amount">{{ $t('pricing.shipping.cost', {amount: rounded(data.pricing_converted.shipping_prices.amount), currency: data.pricing_converted.currency}) }}</span>
          <span class="tag is-info">{{ $t('pricing.pack', {amount: data.package_amount}) }}</span>
          <span class="tag is-primary" v-if="data.in_stock">{{ $t('pricing.in_stock') }}</span>
        </div>
      </div>
    </div>
    <div class="pricing is-pulled-right">
        <div class="container">
          <a class="total" :href="data.link" rel="nofollow" v-html="$t('pricing.per_box', {amount: rounded(data.pricing_converted.shipping_prices.per_box), currency: data.pricing_converted.currency})"></a>
          <span class="perlens">{{ $t('pricing.per_lens', {amount: rounded(data.pricing_converted.shipping_prices.per_lens, 2), currency: data.pricing_converted.currency}) }}</span>
        </div>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'PricingItem',
  props: ['data'],
  methods: {
      rounded: function(value, decimals) {
        if (!value) {
            value = 0
        }

        if (!decimals) {
            decimals = 0
        }

        value = Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals)
        return value
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
