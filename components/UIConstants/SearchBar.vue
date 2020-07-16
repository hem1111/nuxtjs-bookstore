<template>
  <div class="has-background-white-bis">
    <div class="container py-4">
      <nav class="level">
        <div class="level-left">
          <div class="level-item">
            <img src="https://cdn.discordapp.com/attachments/730070699204411458/732179488250527774/logo.png" />
            <i class="las la-bars is-hidden-desktop is-hidden-tablet" @click="toggle"></i>
          </div>
        </div>
        <div class="level-right">
          <div class="field has-addons">
            <p class="control inputWrapper">
              <input
                class="input is-radiusless"
                type="text"
                v-model="keyword"
                placeholder="Search by Title/Author/ISBN"
                @keyup.enter="search"
              />
            </p>
            <p class="control inputWrapper">
              <span class="select">
                <select class="input is-radiusless">
                  <option>All Categories</option>
                  <option>Fiction</option>
                  <option>Adventure</option>
                  <option>Love story</option>
                </select>
              </span>
            </p>
            <p class="control">
              <button class="button is-info is-radiusless search px-2" @click="search">
                <i class="las la-search"></i>
              </button>
            </p>
            <p class="control">
              <button class="button is-link is-radiusless" @click="$store.commit('show')">
                <i class="las la-book-reader"></i>
                  {{ list }}Add Books 
              </button>
            </p>
          </div>
        </div>
      </nav>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      keyword: "",
    };
  },

  computed: {
    list() {
      return this.$store.getters.books.length;
    }
  },

  methods: {
    search() {
      this.$router.push(`/books?search=${this.keyword}`);
    },

    toggle() {
      this.slide = !this.slide;
    }
  },
};
</script>

<style scoped lang="scss">
img {
  width: 256px;
  height: auto;
  padding-right: 16px;
}
.container {
  i {
    font-size: 24px;
    &:hover {
      cursor: pointer;
    }
  }
  .is-danger {
    margin-left: 16px;
  }
  .inputWrapper {
    width: 100%;
    input {
      border: solid #2c93ea 2px;
    }
  }
}

.level-left {
  .level-item {
    justify-content: space-between;
    i {
      color: #2c93ea;
    }
  }
}

@media screen and(min-width: 992px ) {
  input {
    width: 456px;
  }
}

@media screen and(max-width: 1024px) {
  .container {
    padding-left: 16px;
    padding-right: 16px;
  }
}

.sliderOverlay {
  background-color: rgba(0, 0, 0, 0.7);
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100vw;
  z-index: 1000;
  overflow: hidden;
}

@media screen and (min-width: 769px) {
  .sliderOverlay {
    display: none;
  }
}
</style>