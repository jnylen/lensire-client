<script>
export default {
  name: 'AppFooter'
}
</script>

<template>
<div class="p-6">
  <div class="flex">
    <div class="justify-start text-left w-1/3 text-grey-dark text-sm font-normal">
      <a class="font-semibold text-grey-dark">Lensire</a> by <a class="font-semibold text-grey-dark">Meiku</a>
    </div>
    <div class="justify-between w-1/3 text-center">
      <nav>
        <router-link to="/impressum" class="mr-24 text-grey-dark text-sm font-semibold">Impressum</router-link>
        <a href="https://meiku.se" class="mr-24 text-grey-dark text-sm font-semibold" tager="_blank">Om oss</a>
        <a class="text-grey-dark text-sm font-semibold" href="mailto:contact@meiku.se">Kontakta oss</a>
      </nav>
    </div>
  </div>
</div>
</template>

<style lang="scss" scoped>

</style>
