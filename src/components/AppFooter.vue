<script>
export default {
  name: 'AppFooter'
}
</script>

<template>
<div class="p-6">
  <div class="w-full text-center pb-8">
    <router-link to="/impressum" class="text-grey-darkest text-sm font-normal hover:no-underline">
      <span class="font-semibold">Disclaimer:</span><br/>
      Some of the links are "affiliate links", a link with a special tracking code. This means if you click on an affiliate link and purchase the item, we will receive an affiliate commission.
    </router-link>
  </div>
  <div class="flex">
    <div class="justify-start text-left w-1/3 text-grey-dark text-sm font-normal">
      <a class="font-semibold text-grey-dark">Lensire</a> by <a class="font-semibold text-grey-dark">Meiku</a>
    </div>
    <div class="justify-between w-1/3 text-center">
      <nav>
        <router-link to="/impressum" class="mr-24 text-grey-dark text-sm font-semibold">{{ $t('footer.general.impressum') }}</router-link>
        <a href="https://meiku.se" class="mr-24 text-grey-dark text-sm font-semibold" tager="_blank">{{ $t('footer.general.about') }}</a>
        <a class="text-grey-dark text-sm font-semibold" href="mailto:contact@meiku.se">{{ $t('footer.general.contact') }}</a>
      </nav>
    </div>
  </div>
</div>
</template>

<style lang="scss" scoped>

</style>
