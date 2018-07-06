<script>
export default {
  name: 'AppFooter'
}
</script>

<template>
<footer class="footer">
  <div class="container">
    <div class="content">
      <p class="has-text-centered infoline" v-html="$t('footer.by')"></p>

      <p class="has-text-centered">
          {{ $t('footer.affiliate') }}
      </p>

      <div class="columns is-multiline is-centered links-column">
        <div class="column is-narrow is-2">
            <div class="links">
                <p class="menu-label">
                    {{ $t('footer.general') }}
                </p>
                <ul class="links-list">
                    <li><router-link to="/impressum">{{ $t('footer.general.impressum') }}</router-link></li>
                    <li><a href="https://meiku.se">{{ $t('footer.general.about') }}</a></li>
                    <li><a href="mailto:contact@meiku.se">{{ $t('footer.general.contact') }}</a></li>
                </ul>
            </div>
        </div>
        <div class="column is-narrow">
            <div class="links">
                <p class="menu-label">
                    {{ $t('footer.legal') }}
                </p>
                <ul class="links-list">
                    <li><a>{{ $t('footer.legal.terms') }}</a></li>
                    <li><a>{{ $t('footer.legal.privacy_policy') }}</a></li>
                    <li><a>{{ $t('footer.legal.copyright') }}</a></li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  </div>
</footer>
</template>

<style lang="scss" scoped>
.footer {
    padding:20px;
    border-top:1px solid #ddd;
}

.infoline {
    a {
        color: hsl(0, 0%, 21%);

        &:hover {
            text-decoration: underline;
        }
    }
}

.links-column {
    padding-top:20px;
}

.links ul {
    list-style: none;
    margin-left: 0; padding-left: 0;

    li {
        list-style-type: none;

        a {
        color: hsl(0, 0%, 21%);
        }
    }
}
</style>
