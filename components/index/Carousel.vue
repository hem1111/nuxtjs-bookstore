<template>
  <div>
    <div class="carousel">
      <div class="carousel-items" v-for="(image,index) in images" :key="index">
        <div
          class="carousel-item"
          :class="pointer==index && fade? 'fadeIn': ''"
          :style="{ backgroundImage: `url(${image.src})` }"
          v-show="pointer==index"
        >
          <!-- :style="`background-image: url(${image.src})`" -->
          <section class="hero is-medium is-overlay">
            <div class="hero-body">
              <div class="container has-text-centered">
                <h1 class="title is-size-2 is-size-3-mobile" v-html="image.title"></h1>
                <h2 class="subtitle has-text-white">{{image.content}}</h2>
                <button class="button is-info is-radiusless is-medium" @click="showForm">
                  <b>BUY NOW!</b>
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pointer: 0,
      fade: false,
      show: false,
      // showNotification: false,
      images: [
        {
          src:
            "https://cdn.discordapp.com/attachments/730070699204411458/732186710850666526/carousel.png",
          title: "BOOK STORE : MISSION STATEMENT",
          content: "Click or press the order now button to place your order"
        }
        // ,
        // {
        //   src:
        //     "https://cdn.discordapp.com/attachments/730070699204411458/732186710850666526/carousel.png",
        //   title: "Specific Book : MISSION STATEMENT",
        //   content: "Click or press the order now button to place your order"
        // }
      ]
    };
  },

  created() {
    this.next();
  },

  methods: {
    showForm() {
      this.show = true;
      document.getElementsByTagName("html")[0].className = "overlay";
    },
    closeForm() {
      this.show = false;
      document.getElementsByTagName("html")[0].className = "";
    },

    next() {
      this.fade = false;
      this.pointer = (this.pointer + 1) % this.images.length;
      setTimeout(() => (this.fade = true), 25);
    },

    set(i) {
      this.fade = false;
      // this.out = true;
      this.pointer = i - 1;
      setTimeout(() => (this.fade = true), 25);
    },

    prev() {
      this.fade = false;
      if (this.pointer == 0) this.pointer = this.images.length;
      this.pointer = (this.pointer - 1) % this.images.length;
      setTimeout(() => (this.fade = true), 25);
    }
  }
};
</script>

<style scoped lang="scss">
.carousel {
  position: relative;
  background-color: #000;
  .carousel-item {
    width: 100vw;
    height: 412px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    section {
      background-color: rgba(0, 0, 0, 0.65);
      .hero-body {
        h1 {
          color: #31acdf;
          margin-bottom: 32px;
        }
        padding-top: 100px;
        display: flex;
        align-items: center;
        button {
          position: absolute;
          z-index: 2;
          left: 0;
          right: 0;
          margin: auto;
        }
      }
    }
  }
  .carousel-controls {
    z-index: 0;
    position: absolute;
    display: flex;
    top: calc(50% - 24px);
    align-items: center;
    justify-content: space-between;
    width: 100%;
    i {
      font-size: 48px;
      color: #fff;
      cursor: pointer;
    }
    i:first-child {
      margin-left: 16px;
    }
    i:last-child {
      margin-right: 16px;
    }
  }

  .carousel-indicator {
    position: absolute;
    display: flex;
    bottom: 0;
    justify-content: center;
    width: 100%;
    margin-bottom: 24px;
    i {
      font-size: 24px;
      color: #fff;
      cursor: pointer;
    }
  }
}

.fadeIn {
  opacity: 1 !important;
  transition: opacity 1500ms;
}

@media screen and(max-width: 768px) {
  .carousel-item {
    height: 328px !important;
    section {
      .hero-body {
        padding-top: 0px !important;
      }
    }
  }
}

.notification {
  font-size: 14px;
  position: fixed;
  bottom: 8px;
  right: 8px;
  left: 8px;
  z-index: 1000;
}
</style>