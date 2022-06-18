<template>
  <v-scale-transition>
    <v-btn
      fab
      dark
      small
      right
      fixed
      bottom
      @click="toTop"
      v-show="fab"
      v-scroll="onScroll"
      color="#71C2FF"
      class="mr-2 mb-2"
    >
      <v-icon> mdi-chevron-up </v-icon>
    </v-btn>
  </v-scale-transition>
</template>

<script>
export default {
  data() {
    return {
      fab: null
    };
  },

  methods: {
    onScroll(e) {
      if (typeof window === 'undefined') return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.$store.commit('flat', top > 60);
      this.fab = top > 60;
    },
    toTop() {
      this.$vuetify.goTo(0);
    }
  }
};
</script>
