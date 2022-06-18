<template>
  <section>
    <v-parallax dark src="/img/bgHero.jpg" height="750">
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col cols="12" md="6" xl="8">
              <h1 v-if="error.statusCode === 404">
                <h1 class="display-2 font-weight-bold mb-4">
                  {{ pageNotFound }}
                </h1>
              </h1>
              <h1 v-else>
                <h1 class="display-2 font-weight-bold mb-4">
                  {{ otherError }}
                </h1>
              </h1>
              <h3 class="font-weight-light">
                Delphi, Lazarus, Pascal, C#, Node.js, JavaScript, MathCad,
                Блок-схемы алгоритмов, On-line помощь...
              </h3>
              <v-btn rounded outlined large dark to="/" huxt class="mt-5">
                GO TO HOME
                <v-icon class="ml-2">mdi-arrow-right</v-icon>
              </v-btn>
            </v-col>
            <v-col cols="12" md="6" xl="4" class="hidden-sm-and-down"> </v-col>
          </v-row>
        </v-col>
      </v-row>
      <div class="svg-border-waves text-white">
        <v-img src="/svg/borderWaves.svg" />
      </div>
    </v-parallax>
    <div class="svg-border-waves">
      <img src="/svg/wave-hero.svg" />
    </div>
  </section>
</template>

<script>
export default {
  layout: 'default',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      pageNotFound: "Oops! That page can't be found",
      otherError: 'Oops! Internal server error'
    };
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title
    };
  }
};
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
