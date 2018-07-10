import client from './client'
export default {
  getProduct (params, filter) {
    return client.one('product', params.id).all('pricings').get({filter: filter})
  }
}
