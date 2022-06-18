<template>
  <v-footer dark padless color="#333333">
    <v-card flat tile color="#333333" class="white--text text-center">
      <v-card-text>
        <v-btn
          v-for="(link, i) in links"
          :key="i"
          class="mx-4 white--text"
          :href="link.href"
          target="_blank"
          icon
        >
          <v-icon size="24px"> {{ link.icon }} </v-icon>
        </v-btn>
      </v-card-text>
      <v-card-text class="white--text pt-0"> </v-card-text>
      <v-divider />
      <v-card-text class="white--text">
        {{ copyright }}
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({}),
  computed: {
    links() {
      return this.$store.state.links;
    },
    copyright() {
      return this.$store.state.copyright;
    },
    author() {
      return this.$store.state.author;
    }
  }
};
</script>

<style scoped>
.v-card {
  width: 100%;
}
</style>
