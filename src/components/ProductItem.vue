<template>
<div class="pb-4 shadow-md bg-white w-1/6 m-3 flex flex-col rounded overflow-hidden">
    <div class="product-image flex flex-col items-center  p-4 bg-grey-lighter">
        <router-link :to="{ name: 'Product', params: { id: data.id }}" class="text-center hover:no-underline">
            <img class="mx-auto" src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" v-if="!data.image" />
            <img class="mx-auto" :src="data.image" v-if="data.image" />
        </router-link>
    </div>
    <div class="text-center w-full flex-1 flex flex-col justify-between mb-2 pt-4 px-4">
        <h1 class="text-pink font-semibold text-sm mb-2 tracking-tight">{{data.name}}</h1>
        <h5 class="text-grey-darker font-normal text-xs ">{{data.company.name}}</h5>
    </div>
    
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
