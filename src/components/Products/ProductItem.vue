<template>
<div class="column is-2">
    <router-link :to="{ name: 'Product', params: { id: data.id }}">
    <div class="card">
        <div class="card-image">
            <figure class="image is-4by3">
                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
            </figure>
        </div>
        <div class="card-content">
            <div class="media">
                <div class="media-content">
                    <p class="title is-6">{{data.name}}</p>
                    <p class="subtitle is-6" v-if="data.company">{{data.company.name}}</p>
                </div>
            </div>
        </div>
    </div>
    </router-link>
</div>
</template>

<script>

export default {
  name: 'ProductItem',
  props: ['data']
}
</script>

<style lang="scss" scoped>
    .card {
        height:100%;
        .card-content {
            padding:10px;
        }
    }
</style>
