// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Meta from 'vue-meta'
import VueSentry from 'vue2-sentry'

import App from './App'
import router from './router'

import vuexI18n from 'vuex-i18n'
import store from './vuex/store'

// Languages
import en from './langs/en'
import sv from './langs/sv'

Vue.config.productionTip = false

Vue.use(VueSentry, {
  key: 'df995bba90e44c60ba64f71840ba3d47',
  project: '5',
  server: 'sentry.meiku.se:444',
  config: {} // Optional: custom config
})

Vue.use(Meta)
Vue.use(vuexI18n.plugin, store)

// Languages
Vue.i18n.add('en', en)
Vue.i18n.add('sv', sv)

Vue.i18n.fallback('en')

// Use browser language
Vue.config.lang = navigator.language || navigator.userLanguage
Vue.i18n.set(Vue.config.lang)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  created () {
    this.$store.dispatch('getProducts')
    this.$store.dispatch('getUser')
  },
  components: { App },
  template: '<App/>'
})
