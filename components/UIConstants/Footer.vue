<template>
  <div class="has-background-black has-text-white">
    <div class="container py-8">
      <div class="columns is-multiline is-variable is-6 is-mobile">
        <div class="column is-one-quarter-fullhd is-full-tablet is-one-quarter-desktop">
          <img src="@/assets/footer-logo.png" />
          <ul class="contact">
            <li class="is-flex">
              <span class="has-text-info">
                <i class="las la-map-marker-alt"></i>
              </span>
              <p>somewhere, Kathmandu</p>
            </li>
            <li class="is-flex">
              <span class="has-text-info">
                <i class="las la-envelope"></i>
              </span>
              <a href="mailto:medmandu@gmail.com">bookstore@gmail.com</a>
            </li>
            <li class="is-flex">
              <span class="has-text-info">
                <i class="las la-phone"></i>
              </span>
              <a href="tel:+977 98654613132">+977 98654613132</a>
            </li>
          </ul>
        </div>
        <div
          class="column is-one-quarter-fullhd is-half-mobile is-half-tablet is-one-quarter-desktop"
        >
          <h4>
            <b>MY ACCOUNT</b>
          </h4>
          <hr />
          <ul>
            <li>
              <a href="#">My Account</a>
            </li>
            <li>
              <a href="#">Order History</a>
            </li>
            <li>
              <a href="#">Returns</a>
            </li>
          </ul>
        </div>
        <div
          class="column is-one-quarter-fullhd is-half-mobile is-half-tablet is-one-quarter-desktop"
        >
          <h4>
            <b>QUICK LINKS</b>
          </h4>
          <hr />
          <ul>
            <li>
              <nuxt-link to="/">Home</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/Books">Books</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/about">About Us</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/contact">Contact Us</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/privacy-policy">Privacy Policy</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/terms-and-conditions">Terms &amp; Conditions</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="column is-one-quarter-fullhd is-half-tablet is-one-quarter-desktop">
          <!-- <h4>
            <b>NEWSLETTER</b>
          </h4>
          <hr />
          <div class="field has-addons">
            <div class="control">
              <input
                class="input is-radiusless has-background-black has-text-white"
                type="text"
                placeholder="Enter you email address"
              />
            </div>
            <div class="control">
              <a class="button is-info is-radiusless">GO</a>
            </div>
          </div>
          <br />-->
          <h4>
            <b>FOLLOW US</b>
          </h4>
          <hr />
          <ul class="social">
            <li class="is-inline-block">
              <a href="https://www.facebook.com/Medmandu" target="_blank">
                <i class="lab la-facebook-f"></i>
              </a>
            </li>
            <li class="is-inline-block">
              <a href="https://www.instagram.com/medmandu_np/" target="_blank">
                <i class="lab la-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <section class="hero is-info">
      <div class="hero-body has-text-centered">
        <p>&copy; 2020 Book Store Nepal, All Rights Reserved.</p>
      </div>
    </section>

   
  </div>
</template>

<script>

</script>

<style scoped lang='scss'>
@import "@/assets/style/colors.scss";
.container {
  .column {
    margin-bottom: 16px;
  }

  img {
    width: 256px;
    margin-bottom: 8px;
  }
  .contact {
    li {
      align-items: center;
      margin-bottom: 16px;
      i {
        font-size: 24px;
        margin-right: 8px;
      }
      p {
        font-size: 14px;
      }
    }
  }

  hr {
    margin-top: 8px;
    margin-bottom: 24px;
    width: 50px;
    background-color: $primary;
  }

  h4 {
    margin-top: 12px;
    b {
      padding-bottom: 8px;
    }
  }

  li {
    a {
      color: #fff;
      font-size: 14px;
      &:hover {
        color: $primary !important;
        transition: color 300ms;
      }
    }
  }
}
.control {
  input {
    border: 2px solid $primary;
    font-size: 14px;
    &::placeholder {
      color: #e3e3e3;
      opacity: 0.5;
    }
  }
  a {
    font-size: 14px;
  }
   
}

.hero-body {
  padding-top: 16px;
  padding-bottom: 16px;
}

.social {
  li {
    margin-right: 4px;
    i {
      font-size: 24px;
      padding: 4px;
      border: solid 1px #fff;
      transition: 200ms;
      &:hover {
        transition: background-color 500ms;
        background-color: $primary;
        cursor: pointer;
        border-color: $primary;
      }
    }
  }
}


@media screen and(max-width: 1024px) {
  .container {
    padding-left: 24px;
    padding-right: 24px;
  }
}
</style>