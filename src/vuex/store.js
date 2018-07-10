import Vue from 'vue'
import Vuex from 'vuex'
import products from '@/api/products'
import clientAxios from '@/api/clientAxios'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const UPDATE_PRODUCTS = 'UPDATE_PRODUCTS'
const UPDATE_USER = 'UPDATE_USER'
const SET_LOADING = 'SET_LOADING'

export default new Vuex.Store({
  state: {
    user: {
      country: null,
      currency: null
    },
    products: [],
    loading: false
  },
  getters: {
    getCountry: state => {
      return state.user.country
    },
    getCurrency: state => {
      return state.user.currency
    },
    getPopularProducts: state => {
      let newprods = state.products

      return newprods.filter(product => product.popular)
    },
    getAllProducts: state => {
      return state.products
    },
    getProductById: (state) => (id) => {
      return state.products.find(product => product.id === id)
    },
    getProductsByWear: (state) => (wear) => {
      return state.products.filter(product => product.wear === wear)
    }
  },
  mutations: {
    [UPDATE_PRODUCTS] (state, payload) {
      state.products = payload.data
    },
    [UPDATE_USER] (state, payload) {
      state.user = payload.data
    },
    [SET_LOADING] (state, loading) {
      state.loading = loading
    }
  },
  actions: {
    getProducts ({commit}) {
      commit(SET_LOADING, true)
      products.getAll().then((prods) => {
        commit(UPDATE_PRODUCTS, prods)
        commit(SET_LOADING, false)
      })
    },
    getUser ({commit}) {
      commit(SET_LOADING, true)
      clientAxios.get('country').then((user) => {
        commit(UPDATE_USER, user)
        commit(SET_LOADING, false)
      })
    }
  },
  modules: {

  },
  strict: debug
})
