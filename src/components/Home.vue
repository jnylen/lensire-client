<script>
import { mapGetters } from 'vuex'
import ProductItem from './ProductItem'
import typeahead from './Typeahead'

export default {
  name: 'Home',
  components: {
    ProductItem,
    typeahead
  },
  data () {
    return {
      value: ''
    }
  },
  metaInfo: {
    title: 'Price compare contact lenses - The world\'s cheapest contact lenses on the web!',
    meta: [
      {description: 'Compare prices on contact lenses all over the world. Free shipping. Buy your contact lenses up to 50% cheaper online!'}
    ]
  },
  computed: {
    ...mapGetters([
      'getAllProducts',
      'getPopularProducts'
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

      let newprods = this.getAllProducts

      return newprods.sort(compare)
    }
  },
  methods: {
    onSelect (value) {
      this.$router.push('/product/' + value.id)
    },
    onChange (value) {
      // what should we do here?
    }
  }
}
</script>

<template>
<div class="mt-16 flex content-between flex-wrap">
  <div class="w-full flex-grow">
    <div class="text-center">
      <h1 class="text-lg text-grey-darker font-semibold">{{ $t('homepage.search_header') }}</h1>
    </div>
    <div class="pt-8">
      <div class="relative mx-auto w-1/4">
        <input type="search" class="bg-grey-lighter shadow-md rounded-lg border-0 p-4 w-full" :placeholder="$t('homepage.search_placeholder')">
        <div class="absolute pin-r pin-t mt-3 mr-3 text-grey-lighter">
          <svg class="h-6 text-dark" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.625 0C0.28 0 0 0.28 0 0.625C0 0.97 0.28 1.25 0.625 1.25C0.97 1.25 1.25 0.97 1.25 0.625C1.25 0.28 0.97 0 0.625 0Z" transform="translate(18.75 11.875)" fill="#F66D9B"/>
          <path d="M31.2676 27.7324L22.9251 19.3899C24.2841 17.3428 25 14.9722 25 12.5C25 5.6075 19.3925 0 12.5 0C5.6075 0 0 5.6075 0 12.5C0 19.3925 5.6075 25 12.5 25C14.9722 25 17.3429 24.2841 19.3899 22.9251L21.6959 25.2311C21.6962 25.2314 21.6965 25.2317 21.6969 25.2321L27.7324 31.2676C28.2047 31.7399 28.8324 32 29.5 32C30.1676 32 30.7953 31.7399 31.2674 31.2677C31.7398 30.7957 32 30.1679 32 29.5C32 28.8321 31.7398 28.2043 31.2676 27.7324ZM19.096 21.6079C19.096 21.608 19.0959 21.608 19.0959 21.6081C17.1667 23.0093 14.8859 23.75 12.5 23.75C6.29675 23.75 1.25 18.7032 1.25 12.5C1.25 6.29675 6.29675 1.25 12.5 1.25C18.7032 1.25 23.75 6.29675 23.75 12.5C23.75 14.8859 23.0093 17.1667 21.608 19.0959C20.9069 20.0618 20.0618 20.9069 19.096 21.6079ZM20.4072 22.1746C21.0541 21.6454 21.6454 21.0541 22.1746 20.4072L23.9478 22.1804C23.4085 22.8169 22.8169 23.4086 22.1804 23.9478L20.4072 22.1746ZM30.3837 30.3837C30.1474 30.6199 29.8336 30.75 29.5 30.75C29.1664 30.75 28.8526 30.6199 28.6163 30.3837L23.0666 24.834C23.6996 24.2908 24.2908 23.6996 24.8339 23.0667L30.3838 28.6166C30.6199 28.8524 30.75 29.1661 30.75 29.5C30.75 29.8339 30.6199 30.1476 30.3837 30.3837Z" fill="#F66D9B"/>
          <path d="M10 0C4.48594 0 0 4.48594 0 10C0 15.5141 4.48594 20 10 20C15.5141 20 20 15.5141 20 10C20 4.48594 15.5141 0 10 0ZM10 18.75C5.17525 18.75 1.25 14.8247 1.25 10C1.25 5.17525 5.17525 1.25 10 1.25C14.8247 1.25 18.75 5.17525 18.75 10C18.75 14.8247 14.8247 18.75 10 18.75Z" transform="translate(2.5 2.5)" fill="#F66D9B"/>
          <path d="M7.62906 4.81706C7.09088 3.41631 6.15381 2.21869 4.91906 1.35375C3.65494 0.468125 2.17006 0 0.625 0C0.279875 0 0 0.279875 0 0.625C0 0.970125 0.279875 1.25 0.625 1.25C3.19369 1.25 5.53944 2.86362 6.46225 5.26544C6.55775 5.51394 6.79456 5.66644 7.04581 5.66644C7.12031 5.66644 7.19612 5.653 7.26981 5.62469C7.592 5.50087 7.75288 5.13931 7.62906 4.81706Z" transform="translate(11.875 5)" fill="#F66D9B"/>
          </svg>
        </div>
      </div>
    </div>
  </div>
  <div class="w-full mt-32">
    <div class="text-center">
      <h1 class="text-lg text-grey-darker font-semibold">{{ $t('homepage.popular_header') }}</h1>
    </div>
    <div class="flex flex-wrap justify-center mt-8">
      <ProductItem v-for="item in getPopularProducts.slice(2)" v-bind:key="item.id" v-bind:data="item" />
    </div>
  </div>
</div>
</template>

<style scoped>

</style>
