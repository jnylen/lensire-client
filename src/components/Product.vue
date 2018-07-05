<script>
import Item from './Item/Item'
import { jsonApi } from '../api'

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
      loading: true
    }
  },
  metaInfo: {
    title: this.title
  },
  methods: {
    fetchProduct () {
      jsonApi.find('product', this.$route.params.id)
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
      jsonApi.one('product', this.$route.params.id).all('pricings').get({filter: {country: 'SE', currency: 'SEK'}})
        .then(response => {
          this.pricings = response.data
          console.log(response.data)
        })
        .catch(error => {
          console.log(error)
          this.errored = true
        })
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
      <div class="image">
          <img :src="product.image" />
      </div>
      <div class="data">
        <h1>{{product.name}}</h1>
        <p>
            Focus Dailies från Ciba Vision är en av världens mest sålda endagslinser. De här linserna är kända för sin komfort och sina återfuktande egenskaper. Linserna är tillverkade i ett högteknologiskt material som innehåller ett så kallat biokompatibelt ämne, vilket fungerar som ett tår-substitut. Detta ämne gör att varje gång du blinkar återfuktas dina ögon på ett naturligt sätt. Det tunna materialet förhindrar även effektivt att det bildas proteinbeläggningar på linsen.
        </p>
        <div class="padding-top">
            <span class="tag is-info">Daily contacts</span>
            <span class="tag is-primary">Manufacutured by Alcon</span>
        </div>
      </div>
  </div>
  <div class="popular items">
    <h1 class="has-text-weight-bold">Cheapest resellers</h1>
    <div class="columns padding-top">
      <div class="column is-four-fifths">
        <Item/><Item/><Item/><Item/>
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

.data {

    h1 {
      font-weight:bold;
    }
}
.container {
    padding-top:20px;
}

.padding-top {
   padding-top:20px;
}
</style>
