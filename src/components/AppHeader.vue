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
      <router-link to="/" class="navbar-item">{{ $t('header.menu.home') }}</router-link>
      <router-link to="/products/daily" class="navbar-item">{{ $t('header.menu.daily') }}</router-link>
      <router-link to="/products/monthly" class="navbar-item">{{ $t('header.menu.monthly') }}</router-link>
      <router-link to="/products/three_months" class="navbar-item">{{ $t('header.menu.three_months') }}</router-link>
      <router-link to="/products/weekly" class="navbar-item">{{ $t('header.menu.weekly') }}</router-link>
      <router-link to="/products/biweekly" class="navbar-item">{{ $t('header.menu.biweekly') }}</router-link>
      <router-link to="/products/yearly" class="navbar-item">{{ $t('header.menu.yearly') }}</router-link>
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
