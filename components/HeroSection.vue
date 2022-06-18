<template>
  <section id="hero">
    <v-parallax dark src="/img/bgHero.jpg">
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col cols="12" md="6" xl="8">
              <h1 class="display-2 font-weight-bold mb-4">Free developer</h1>
              <h3 class="font-weight-light">
                Node.js, JavaScript, C#, Delphi, Lazarus, Pascal, MathCad,
                Блок-схемы алгоритмов, On-line помощь...
              </h3>
              <v-btn
                rounded
                outlined
                large
                dark
                @click="$vuetify.goTo('#features')"
                class="mt-5"
              >
                Features
                <v-icon class="ml-2">mdi-arrow-down</v-icon>
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

    <v-container fluid id="features" class="mt-15">
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="space-around">
            <v-col
              cols="12"
              sm="4"
              class="text-center"
              v-for="(feature, i) in features"
              :key="i"
            >
              <v-hover v-slot:default="{ hover }">
                <v-card
                  class="card my-4"
                  shaped
                  :elevation="hover ? 10 : 4"
                  :class="{ up: hover }"
                >
                  <v-img
                    :src="feature.img"
                    max-width="100px"
                    class="d-block ml-auto mr-auto"
                    :class="{ 'zoom-efect': hover }"
                  />
                  <h1 class="font-weight-regular">{{ feature.title }}</h1>
                  <h4 class="font-weight-regular subtitle-1">
                    {{ feature.text }}
                  </h4>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <div class="svg-border-waves">
      <img src="/svg/wave-hero.svg" />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      features: [
        {
          img: '/img/icon-bot-dev.png',
          title: 'Bot Development',
          text: 'Создание ботов: VK, Telegram, Viber и для других платформ.'
        },
        {
          img: '/img/icon-standalone-dev.png',
          title: 'Standalone Development',
          text: 'Написание программ на языках программирования: Delphi, Lazarus, CodeTyphon, TurboPascal, PascalABC, PascalABC.NET, FreePascal, C#, Node.js, JavaScript, MathCad.'
        },
        {
          img: '/img/icon-web-dev.png',
          title: 'Web Development',
          text: 'Написание скриптов на JavaScript и микросервисов на Node.js'
        },
        {
          img: '/img/icon-help.png',
          title: 'Справочная документация',
          text: 'Подготовка справочной информации под разработанные нами программные продукты.'
        },
        {
          img: '/img/icon-database.png',
          title: 'Базы данных',
          text: 'Создание баз данных: MySQL, MS Access, MongoDB. Разработка клиентских приложений под созданные нами базы данных.'
        },
        {
          img: '/img/icon-block-img.png',
          title: 'Блок-схемы',
          text: 'Создание блок-схем алгоритмов, при необходимости, для разработанных нами программ.'
        }
      ]
    };
  },
  watch: {
    dialog(value) {
      if (!value) {
        this.pause();
      }
    }
  },
  methods: {}
};
</script>

<style>
.circle {
  stroke: white;
  stroke-dasharray: 650;
  stroke-dashoffset: 650;
  --transition: all 0.5s ease-in-out;
  opacity: 0.3;
}

.v-parallax {
  height: 100vh !important;
}

.svg-border-waves .v-image {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3rem;
  width: 100%;
  overflow: hidden;
}

#hero {
  z-index: 0;
}
.svg-border-waves img {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  margin-bottom: -2px;
  z-index: -1;
}

.card {
  min-height: 300px;
  padding: 10px;
  transition: 0.5s ease-out;
}

.card .v-image {
  margin-bottom: 15px;
  transition: 0.75s;
}

.card h1 {
  margin-bottom: 10px;
}

.zoom-efect {
  transform: scale(1.1);
}

.up {
  transform: translateY(-20px);
  transition: 0.5s ease-out;
}

section {
  position: relative;
}
</style>
