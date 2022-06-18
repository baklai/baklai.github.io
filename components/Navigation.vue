<template>
  <div>
    <v-navigation-drawer
      app
      dark
      temporary
      absolute
      src="/img/bgDrawer.jpg"
      v-model="drawer"
    >
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <img src="icon.png" alt="Logo" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="title"> {{ author }} </v-list-item-title>
            <v-list-item-subtitle> Free developer </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider />
      <v-list dense>
        <v-list-item
          link
          v-for="([icon, text, link], i) in items"
          :key="i"
          @click="$vuetify.goTo(link)"
        >
          <v-list-item-icon class="justify-center">
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="subtitile-1">
              {{ text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2 text-center">
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
        </div>
      </template>
    </v-navigation-drawer>

    <v-app-bar
      app
      dark
      :flat="!flat"
      :color="color"
      :class="{ expand: !flat, 'px-2': isXs, 'px-15': !isXs }"
    >
      <v-avatar>
        <v-img src="icon.png" max-width="42px" />
      </v-avatar>
      <v-app-bar-title class="mx-2"> #Free developer </v-app-bar-title>
      <v-spacer />
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="mr-4"
        v-if="isXs"
      />
      <div v-else>
        <v-btn
          text
          :key="i"
          class="mr-2"
          v-for="([icon, text, link], i) in items"
          :rounded="i < items.length - 1 ? false : true"
          :outlined="i < items.length - 1 ? false : true"
          @click="$vuetify.goTo(link)"
        >
          <v-icon small left> {{ icon }} </v-icon>
          <span> {{ text }} </span>
        </v-btn>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data: () => ({
    color: 'transparent',
    drawer: null,
    isXs: false,
    items: [
      ['mdi-home-outline', 'Home', '#hero'],
      ['mdi-information-outline', 'Features', '#features'],
      ['mdi-github', 'Repository', '#repository']
    ]
  }),

  mounted() {
    this.onResize();
    window.addEventListener('resize', this.onResize, { passive: true });
  },

  computed: {
    flat: {
      get() {
        return this.$store.state.flat;
      },
      set(val) {
        this.$store.commit('flat', val);
      }
    },

    author() {
      return this.$store.state.author;
    },

    links() {
      return this.$store.state.links;
    }
  },

  methods: {
    onResize() {
      this.isXs = window.innerWidth < 850;
    }
  },

  watch: {
    isXs(value) {
      if (!value) {
        if (this.drawer) {
          this.drawer = false;
        }
      }
    },

    flat(value) {
      if (value) {
        this.color = 'secondary';
      } else {
        this.color = 'transparent';
      }
    }
  }
};
</script>

<style scoped>
.v-toolbar {
  transition: 0.6s;
}

.expand {
  height: 80px !important;
  padding-top: 10px;
}
</style>
