<script>
export default {
  name: 'Home',
  components: {

  },
  props: ['country', 'currency'],
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
    <p>
      {{ $t('homepage.info') }}
    </p>
    <p v-html="$t('homepage.chosen', {country: country, currency: currency})"></p>
  </div>
  <div class="popular items">
    <h1 class="has-text-weight-bold">{{ $t('homepage.popular_header') }}</h1>
    <div class="columns padding-top">
      <div class="column is-four-fifths">
        <p>{{ $t('waiting_on_products') }}</p>
      </div>
      <div class="column has-text-centered">
        <!-- ADS -->
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
