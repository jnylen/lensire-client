// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Buefy from 'buefy'
import Meta from 'vue-meta'

import App from './App'
import router from './router'

import vuexI18n from 'vuex-i18n'
import store from './vuex/store'

// Languages
import en from './langs/en'
import sv from './langs/sv'

// Cookie
import VueCookie from 'vue-cookie'

Vue.config.productionTip = false

Vue.use(Buefy)
Vue.use(Meta)
Vue.use(vuexI18n.plugin, store)
Vue.use(VueCookie)

// Languages
Vue.i18n.add('en', en)
Vue.i18n.add('sv', sv)

Vue.i18n.fallback('en')

// Use browser language
Vue.config.lang = VueCookie.get('locale') || navigator.language || navigator.userLanguage
Vue.i18n.set(Vue.config.lang)

// Country
Vue.prototype.$country = 'US'
Vue.prototype.$currency = 'USD'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
