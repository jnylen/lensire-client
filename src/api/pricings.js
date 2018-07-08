import client from './client'
import user from '@/api/user'

export default {
  getProduct (params) {
    return client.one('product', params.id).all('pricings').get({filter: {country: user.getCountry(), currency: user.getCurrency()}})
  }
}
