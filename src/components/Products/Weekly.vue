<script>
import products from '@/api/products'

export default {
  name: 'Weekly',
  components: {
  },
  data () {
    return {
      products: [],
      loading: true
    }
  },
  metaInfo: {
    title: 'Weekly'
  },
  methods: {
    fetchProducts () {
      products.getAll({wear: 'weekly'})
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
    Here is a list of weekly contact lenses we currently provide pricing for.
  </div>
  <div class="popular items">
    <h1 class="has-text-weight-bold">Weekly contact lenses</h1>
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
