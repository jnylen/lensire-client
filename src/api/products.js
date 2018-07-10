import client from './client'

export default {
  getOne (params) {
    return client.find('products', params.id, {include: 'company'})
  },
  getAll (params) {
    return client.findAll('products', {include: 'company', filter: params})
  }
}
