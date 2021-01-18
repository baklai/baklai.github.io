<template>
  <section class="pb-8 pt-8" id="contact">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row justify="center">
            <v-col cols="12" sm="6">
              <h1 class="font-weight-light display-1">Контакты</h1>
              <h3 class="font-weight-light mt-3"></h3>

              <div class="pt-2 mb-0 d-flex">
                <v-avatar size="72">
                  <v-icon x-large>
                    mdi-map-marker-outline
                  </v-icon>
                </v-avatar>
                <h3 class="font-weight-light mt-3">
                  Liman, Donets'Ka Oblast', Ukraine
                </h3>
              </div>

              <v-divider inset class="my-2" />

              <div class="pt-2 mb-0 d-flex">
                <v-avatar size="72">
                  <v-icon x-large>
                    mdi-telegram
                  </v-icon>
                </v-avatar>
                <h3 class="font-weight-light mt-3">
                  <a href="https://t.me/baklai" target="_blank"
                    >Dmitrii Baklai</a
                  >
                </h3>
              </div>

              <v-divider inset class="my-2" />

              <div class="pt-2 mb-0 d-flex">
                <v-avatar size="72">
                  <v-icon large>
                    mdi-email
                  </v-icon>
                </v-avatar>
                <h3 class="font-weight-light mt-3">
                  d.n.baklai@gmail.com
                </h3>
              </div>
            </v-col>

            <v-col cols="12" sm="6">
              <v-form
                ref="form"
                v-model="valid"
                :lazy-validation="lazy"
                disabled
              >
                <v-text-field
                  v-model="name"
                  :rules="nameRules"
                  label="Имя"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  required
                ></v-text-field>

                <v-textarea
                  v-model="textArea"
                  :rules="textAreaRules"
                  label="Сообщение"
                  required
                />

                <v-btn
                  :disabled="!valid"
                  color="primary"
                  :dark="valid"
                  rounded
                  block
                  class="mt-3"
                  @click="submit"
                >
                  Отправить
                </v-btn>
              </v-form>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <div class="svg-border-waves text-white">
      <v-img :src="require(`@/assets/img/borderWavesBlue.svg`)" />
    </div>
  </section>
</template>

<style scoped>
#contact {
  background-color: #f4f7f5;
}

.svg-border-waves .v-image {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3rem;
  width: 100%;
  overflow: hidden;
}
</style>

<script>
export default {
  data: () => ({
    icons: ["fa-facebook", "fa-twitter", "fa-linkedin", "fa-instagram"],
    valid: true,
    name: "",
    nameRules: [v => !!v || "", v => (v && v.length >= 6) || ""],
    email: "",
    emailRules: [v => !!v || "", v => /.+@.+\..+/.test(v) || ""],
    textArea: "",
    textAreaRules: [v => !!v || "", v => (v && v.length >= 10) || ""],
    lazy: false,
    snackbar: {
      enabled: false,
      text: "",
      color: ""
    }
  }),
  methods: {
    submit() {}
  }
};
</script>
