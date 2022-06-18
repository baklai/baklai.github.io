<template>
  <v-app>
    <Navigation />
    <v-main class="pt-0">
      <nuxt />
    </v-main>
    <ScrollToTop />
    <Footer />
  </v-app>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
.v-main {
  background-image: url('/img/bgMain.png');
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}
</style>
