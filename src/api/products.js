import client from './client'

export default {
  getOne (params) {
    return client.find('products', params.id)
  },
  getAll (params) {
    return client.findAll('products', {filter: {wear: params.wear}})
  }
}
