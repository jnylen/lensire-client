<script>
import { mapGetters, mapState } from 'vuex'
import {DoubleBounce} from 'vue-loading-spinner'

export default {
  name: 'AppHeader',
  components: {
    DoubleBounce
  },
  computed: {
    ...mapGetters([
      'getCountry',
      'getCurrency'
    ]),
    ...mapState(['loading'])
  },
  methods: {
    countryFlag (value) {
      if (value) {
        return require('@/assets/flags/' + value.toLowerCase() + '.svg')
      } else {
        return undefined
      }
      
    }
  }
}
</script>

<template>
<div class="bg-old-gray border-b border-solid border-grey-light">
  <div class="container mx-auto flex flex-col lg:flex-row items-center py-4">
    <nav class="w-full lg:w-2/5 pl-6">
      <router-link to="/products/daily" class="navbar-item">{{ $t('header.menu.daily') }}</router-link>
      <router-link to="/products/monthly" class="navbar-item">{{ $t('header.menu.monthly') }}</router-link>
      <router-link to="/products/weekly" class="navbar-item">{{ $t('header.menu.weekly') }}</router-link>
      <router-link to="/products/yearly" class="navbar-item">{{ $t('header.menu.yearly') }}</router-link>
    </nav>
    <div class="w-full lg:w-1/5 text-center my-4 lg:my-0">
      <router-link class="logo" to="/">
        <svg class="w-12 h-10" v-if="['Home'].indexOf($route.name) > -1" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25.5709 2.47788C15.2937 3.7317 1.96331 2.46168 0 0C2.77538 7.67228 9.27085 13.0564 16.8427 13.0564C21.5693 13.0564 25.9731 10.9583 29.2178 7.51531C27.8677 6.10155 26.6228 4.41309 25.5709 2.47788Z" transform="translate(0.231995 18.9436)" fill="#DCEFF9"/>
        <path d="M5.80397 2.12264C2.79 1.59115 0.674813 0.846112 0 0C2.77538 7.67228 9.27084 13.0564 16.8427 13.0564C17.6732 13.0564 18.4935 12.9902 19.2996 12.8647C13.4944 11.9526 8.55319 7.85354 5.80397 2.12264Z" transform="translate(0.231995 18.9435)" fill="#C8E9FC"/>
        <path d="M23.3515 0.245274C12.1357 -0.660729 0 1.05511 0 3.55443C0 6.31294 14.4845 7.99763 25.8029 6.61695C24.7141 4.61364 23.8962 2.46134 23.3515 0.245274Z" transform="translate(0 14.8044)" fill="#F66D9B"/>
        <path d="M24.3146 30.4426C23.2076 31.8285 16.9046 26.184 10.2365 17.8353C3.56844 9.48682 -0.939715 1.59529 0.167098 0.209251C1.2741 -1.17668 7.5771 4.46787 14.2452 12.8164C20.9134 21.165 25.4216 29.0567 24.3146 30.4426Z" transform="translate(23.5183)" fill="#6EBEFF"/>
        <path d="M24.3146 30.4426C23.2076 31.8285 16.9046 26.184 10.2365 17.8353C3.56844 9.48682 -0.939715 1.59529 0.167098 0.209251C1.2741 -1.17668 7.5771 4.46787 14.2452 12.8164C20.9134 21.165 25.4216 29.0567 24.3146 30.4426Z" transform="translate(23.5183)" fill="#F66D9B"/>
        <path d="M11.3133 17.0073C5.32282 9.5071 1.07641 2.3768 1.07773 0C-1.29274 7.88229 0.259382 17.4399 5.61354 24.1435C10.9677 30.8471 18.6014 32.7904 24.897 29.8226C22.9986 29.8243 17.3039 24.5077 11.3133 17.0073Z" transform="translate(22.4415 0.828003)" fill="#DCEFF9"/>
        <path d="M3.86887 6.448C2.10777 3.49488 1.07746 1.17066 1.07812 0C-1.5976 8.89724 0.769209 19.6992 7.48846 26.211C3.78927 20.3926 2.56152 13.0175 3.86887 6.448Z" transform="translate(22.4411 0.828003)" fill="#C8E9FC"/>
        </svg>

        <svg class="w-12 h-10" v-if="['Home'].indexOf($route.name) < 0" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25.5709 2.47788C15.2937 3.7317 1.96331 2.46168 0 0C2.77538 7.67228 9.27085 13.0564 16.8427 13.0564C21.5693 13.0564 25.9731 10.9583 29.2178 7.51531C27.8677 6.10155 26.6228 4.41309 25.5709 2.47788Z" transform="translate(0.231934 18.9436)" fill="#DCEFF9"/>
        <path d="M5.80397 2.12264C2.79 1.59115 0.674813 0.846112 0 0C2.77538 7.67228 9.27084 13.0564 16.8427 13.0564C17.6732 13.0564 18.4935 12.9902 19.2996 12.8647C13.4944 11.9526 8.55319 7.85354 5.80397 2.12264Z" transform="translate(0.231934 18.9435)" fill="#C8E9FC"/>
        <path d="M23.3515 0.245274C12.1358 -0.660729 0 1.05511 0 3.55443C0 6.31294 14.4845 7.99763 25.8029 6.61695C24.7141 4.61364 23.8962 2.46134 23.3515 0.245274Z" transform="translate(0 14.8044)" fill="#6EBEFF"/>
        <path d="M24.3146 30.4426C23.2076 31.8285 16.9046 26.184 10.2365 17.8353C3.56844 9.48682 -0.939715 1.59529 0.167098 0.209251C1.2741 -1.17668 7.5771 4.46787 14.2452 12.8164C20.9134 21.165 25.4216 29.0567 24.3146 30.4426Z" transform="translate(23.5183)" fill="#6EBEFF"/>
        <path d="M24.3146 30.4426C23.2076 31.8285 16.9046 26.184 10.2365 17.8353C3.56844 9.48682 -0.939715 1.59529 0.167098 0.209251C1.2741 -1.17668 7.5771 4.46787 14.2452 12.8164C20.9134 21.165 25.4216 29.0567 24.3146 30.4426Z" transform="translate(23.5183)" fill="#6EBEFF"/>
        <path d="M11.3133 17.0073C5.32282 9.5071 1.07641 2.3768 1.07773 0C-1.29274 7.88229 0.259382 17.4399 5.61354 24.1435C10.9677 30.8471 18.6014 32.7904 24.897 29.8226C22.9986 29.8243 17.3039 24.5077 11.3133 17.0073Z" transform="translate(22.4414 0.828003)" fill="#DCEFF9"/>
        <path d="M3.86887 6.448C2.10777 3.49488 1.07746 1.17066 1.07812 0C-1.5976 8.89724 0.769209 19.6992 7.48846 26.211C3.78927 20.3926 2.56152 13.0175 3.86887 6.448Z" transform="translate(22.4412 0.828003)" fill="#C8E9FC"/>
        </svg>
      </router-link>
    </div>
    <div class="w-full lg:w-2/5 flex lg:justify-end h-full">
      <nav class="flex items-center h-8 pt-6">
          <a href="#" class="right-menu-item mr-10">
            <img class="h-8 w-8" :src="countryFlag(getCountry)" />
          </a>
          <a href="#" class="right-menu-item mr-10">
            {{ getCurrency }}
          </a>
        </nav>
    </div>
  </div> <!-- end container -->
</div>
</template>

<style>

</style>
