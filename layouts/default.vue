<template>
  <div>
    <TopHeader />
    <SearchBar />
    <Navigation />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import TopHeader from "@/components/UIConstants/TopHeader";
import SearchBar from "@/components/UIConstants/SearchBar";
import Navigation from "@/components/UIConstants/Navigation";
import Footer from "@/components/UIConstants/Footer";
export default {
  components: {
    TopHeader,
    SearchBar,
    Navigation,
    Footer
  }
}
</script>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}


</style>
