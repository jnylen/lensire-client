<script>
import '@/assets/styles/main.css'

import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  },
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: 'Lensire',
    // all titles will be injected into this template
    titleTemplate: '%s | Lensire',
    noscript: [
      { innerHTML: 'This website requires JavaScript.' }
    ]
  }
}
</script>

<template>
  <div class="min-h-screen flex flex-col" id="whole-app">
    <app-header />
    <div class="flex-grow flex-1 flex flex-col" id="app">
      <router-view />
    </div>
    <app-footer />
  </div>
</template>

<style lang="scss">

</style>
