<template>
  <div class="has-background-info is-hidden-mobile">
    <div class="container">
      <nav class="navbar is-info" role="navigation" aria-label="dropdown navigation">
        <div class="navbar-menu">
          <div class="navbar-start">
            <nuxt-link to="/" class="navbar-item" exact-active-class="is-active">
              <p>Home</p>
            </nuxt-link>
            <nuxt-link to="/Books" class="navbar-item" active-class="is-active">
              <p>Books</p>
            </nuxt-link>
            <nuxt-link to="/Categories" class="navbar-item" active-class="is-active">
              <p>Categories</p>
            </nuxt-link>
            <nuxt-link to="/about" class="navbar-item" exact-active-class="is-active">
              <p>About Us</p>
            </nuxt-link>
            <nuxt-link to="/contact" class="navbar-item" exact-active-class="is-active">
              <p>Contact Us</p>
            </nuxt-link>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<style scoped lang="scss">
a {
  font-size: 15px;
  width: 100px;
  p {
    margin: auto;
  }
}
</style>