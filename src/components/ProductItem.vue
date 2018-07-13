<template>
<div class="p-6 pb-4 shadow-md bg-grey-lighter w-1/6 m-4">
<router-link :to="{ name: 'Product', params: { id: data.id }}" class="hover:no-underline">
    <div class="product-image text-center flex justify-center items-center">
        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" v-if="!data.image" />
        <img :src="data.image" v-if="data.image" />
    </div>
    <div class="text-center pt-6 w-full">
        <h1 class="text-pink font-semibold text-sm whitespace-normal">{{data.name}}</h1>
        <h5 class="text-grey-darker font-medium text-xs mt-2 tracking-tight">{{data.company.name}}</h5>
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

</style>
