<script>
import products from '@/api/products'

export default {
  name: 'Monthly',
  components: {
  },
  data () {
    return {
      products: [],
      loading: true
    }
  },
  metaInfo: {
    title: 'Dailies'
  },
  methods: {
    fetchProducts () {
      products.getAll({wear: 'monthly'})
        .then(response => {
          this.products = response.data
          console.log(response.data)
        })
        .catch(error => {
          console.log(error)
          this.errored = true
        })
        // .finally(() => this.loading = false)
    }
  },
  mounted () {
    this.fetchProducts()
  }
}
</script>

<template>
<div class="container">
  <div class="notification is-primary has-text-centered">
    Here is a list of monthly contact lenses we currently provide pricing for.
  </div>
  <div class="popular items">
    <h1 class="has-text-weight-bold">Monthly contact lenses</h1>
    <div class="columns padding-top">
      <p>Waiting on products..</p>
    </div>
  </div>
</div>
</template>

<style scoped>
 .container {
   padding-top:20px;
 }

 .padding-top {
   padding-top:20px;
 }
</style>
