<script>
import products from '@/api/products'

export default {
  name: 'Yearly',
  components: {
  },
  data () {
    return {
      products: [],
      loading: true
    }
  },
  metaInfo: {
    title: 'Yearly'
  },
  methods: {
    fetchProducts () {
      products.getAll({wear: 'yearly'})
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
    Here is a list of yearly contact lenses we currently provide pricing for.
  </div>
  <div class="popular items">
    <h1 class="has-text-weight-bold">Yearly contact lenses</h1>
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
