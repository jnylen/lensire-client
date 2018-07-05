<script>
export default {
  name: 'AppHeader'
}
</script>

<template>
<nav class="navbar is-primary" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/"></a>

    <div class="navbar-burger">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
  <div id="navbarExampleTransparentExample" class="navbar-menu">
    <div class="navbar-start">
      <router-link to="/" class="navbar-item">Home</router-link>
      <router-link class="navbar-item" :to="{ name: 'Products', params: { type: 'daily' }}">Dailies</router-link>
      <router-link class="navbar-item" :to="{ name: 'Products', params: { type: 'monthly' }}">Monthlies</router-link>
      <router-link class="navbar-item" :to="{ name: 'Products', params: { type: 'three_months' }}">3 Months</router-link>
      <router-link class="navbar-item" :to="{ name: 'Products', params: { type: 'weekly' }}">Weekly</router-link>
      <router-link class="navbar-item" :to="{ name: 'Products', params: { type: 'biweekly' }}">Bi-Weekly</router-link>
      <router-link class="navbar-item" :to="{ name: 'Products', params: { type: 'yearly' }}">Yearly</router-link>
    </div>
    <div class="navbar-centered">
      <a class="navbar-item" href="/">
        <span class="icon padding-right">
          <i class="mdi mdi-36px mdi-eye-outline"></i>
        </span>

      </a>
    </div>
    <div class="navbar-end">
      <a class="navbar-item" href="/">
        Sweden
      </a>
      <a class="navbar-item" href="/">
        SEK
      </a>
    </div>
  </div>
</nav>
</template>

<style>
.navbar-centered {
        position: absolute;
        margin-top:5px;
        left: 50%;
        margin-left: -36px; // 50% in my case
        height: 100%;
        display: flex;
        align-items: center;
}

.navbar-centered .padding-right {
  padding-right:20px;
}

nav {
  border-bottom: 1px solid #ddd;
}

.navbar-item.active {
  font-weight: bold;
}
</style>
