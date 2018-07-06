// Import
import JsonApi from 'devour-client'

// Bootstrap
const client = new JsonApi({apiUrl: process.env.APIURL})

// Models
client.define('product', {
  name: '',
  image: '',
  wear: '',
  type: ''
})

client.define('pricing', {
  link: '',
  package_amount: null,
  lastupdated: '',
  created: '',
  in_stock: null,
  pricing_converted: {
    shipping_prices: {
      per_lens: '',
      per_box: '',
      amount: ''
    },
    per_lens: '',
    currency: '',
    amount: ''
  },
  pricing: {
    shipping_prices: {
      per_lens: '',
      per_box: '',
      amount: ''
    },
    per_lens: '',
    currency: '',
    amount: ''
  },
  store: {
    jsonApi: 'hasOne',
    type: 'store'
  },
  product: {
    jsonApi: 'hasOne',
    type: 'product'
  }
})

client.define('store', {
  name: '',
  website: '',
  logo: '',
  affiliate: false,
  delivery_countries: [],
  based_in_country: ''
})

export default client
