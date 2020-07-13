<template>
  <div>
    <Carousel />
    <Books />
    <Services />
  </div>
</template>

<script>
import Carousel from "@/components/index/Carousel";
import Books from "@/components/index/Books";
import Services from "@/components/index/Services";

export default {
  components: {
    Carousel,
    Books,
    Services
  }
};
</script>

<style type="text/css" lang="scss">
</style>
