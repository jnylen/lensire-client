<script>
import user from '@/api/user'

export default {
  name: 'AppHeader',
  data () {
    return {
      country: user.getCountry(),
      currency: user.getCurrency()
    }
  }
}
</script>

<template>
<nav class="navbar is-primary" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <router-link to="/" class="navbar-item"><i class="mdi mdi-24px mdi-eye-outline"></i></router-link>

    <div class="navbar-burger">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
  <div class="navbar-menu">
    <div class="navbar-start">
      <router-link to="/products/daily" class="navbar-item">{{ $t('header.menu.daily') }}</router-link>
      <router-link to="/products/monthly" class="navbar-item">{{ $t('header.menu.monthly') }}</router-link>
      <router-link to="/products/weekly" class="navbar-item">{{ $t('header.menu.weekly') }}</router-link>
      <router-link to="/products/yearly" class="navbar-item">{{ $t('header.menu.yearly') }}</router-link>
    </div>
    <div class="navbar-end">
      <a class="navbar-item" href="/">
        {{ country }}
      </a>
      <a class="navbar-item" href="/">
        {{ currency }}
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
        margin-left: -36px;
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

.navbar-item.is-active {
  font-weight: bold;
}
</style>
