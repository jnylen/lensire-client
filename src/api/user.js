import VueCookie from 'vue-cookie'

export default {
  getCountry () {
    return VueCookie.get('country') || 'US'
  },
  getCurrency () {
    return VueCookie.get('currency') || 'USD'
  }
}
