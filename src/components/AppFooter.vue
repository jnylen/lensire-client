<script>
export default {
  name: 'AppFooter'
}
</script>

<template>
<footer class="footer">
  <div class="container">
    <div class="content">
      <p class="has-text-centered infoline">
        <strong>Lensire</strong> by <a href="https://meiku.se">Meiku</a><br/>
      </p>

      <p class="has-text-centered">
          Links marked as "Affiliate" are affiliate links and gives us money in return of you buying from there.
      </p>

      <div class="columns is-multiline is-centered links-column">
        <div class="column is-narrow is-2">
            <div class="links">
                <p class="menu-label">
                    General
                </p>
                <ul class="links-list">
                    <li><a href="https://meiku.se">About us</a></li>
                    <li><a href="mailto:contact@meiku.se">Contact us</a></li>
                </ul>
            </div>
        </div>
        <div class="column is-narrow">
            <div class="links">
                <p class="menu-label">
                    Legal
                </p>
                <ul class="links-list">
                    <li><a>Terms and Conditions</a></li>
                    <li><a>Privacy Policy</a></li>
                    <li><a>Copyright</a></li>
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
        color: #000;

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
