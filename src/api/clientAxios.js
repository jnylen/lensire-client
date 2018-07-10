import axios from 'axios'

const clientAxios = axios.create({
  baseURL: process.env.APIURL
})

export default clientAxios
