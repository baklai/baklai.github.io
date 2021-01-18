<template>
  <v-footer dark padless>
    <v-card flat tile class="secondary white--text text-center">
      <v-card-text>
        <v-btn
          v-for="(link, i) in links"
          :key="i"
          class="mx-4 white--text"
          :href="link.href"
          target="_blank"
          icon
        >
          <v-icon size="24px">{{ link.icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        ​​Здесь будет ​​одинаково ​интересно людям любого возраста у кого }{обби
        <br />
        по жизни связано с IT, будь то программирование, дизайн, техподдержка…
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        Copyright &copy; {{ new Date().getFullYear() }} {{ copyright }}
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
