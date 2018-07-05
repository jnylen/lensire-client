<script>
import Item from './Item/Item'

export default {
  name: 'Home',
  components: {
    Item
  },
  data () {
    return {
      products: []
    }
  },
  metaInfo: {
    title: 'Home'
  },
  mounted () {

  }
}
</script>

<template>
<div class="container">
  <div class="notification is-info has-text-centered">
    Lensire is a contact lens pricing comparison website that compiles prices all over the world and tries to give you the best pricing for any reseller that can ship to you.
    <br/>
    Your chosen country is <strong>Sweden</strong> and currency is <strong>SEK</strong>
  </div>
  <div class="popular items">
    <h1 class="has-text-weight-bold">Popular contact lenses - Cheapest</h1>
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

<style scoped>
 .container {
   padding-top:20px;
 }

 .padding-top {
   padding-top:20px;
 }
</style>
