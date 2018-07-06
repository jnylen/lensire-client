import client from './client'

export default {
  getProduct (params) {
    return client.one('product', params.id).all('pricings').get({filter: {country: params.country, currency: params.currency}})
  }
}
