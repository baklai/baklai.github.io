<template>
  <section id="repository">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col sm="4" class="hidden-xs-only">
              <v-img
                :src="require(`~/assets/img/repository.svg`)"
                class="d-block ml-auto mr-auto"
                max-width="350px"
              />
            </v-col>
            <v-col cols="12" sm="8" class="white--text text-left">
              <h1 class="font-weight-light display-2 mb-2">
                Dmitrii Baklai
              </h1>
              <h3 class="font-weight-light">
                Я занимаюсь разработкой программного обеспечения для клиентов со
                стран СНГ. Специализируюсь на разработке программного
                обеспечения для студентов и частных заказчиков. Моё участие,
                подразумевает высокую степень индивидуальной разработки с
                акцентом на производительность и безопасность.
              </h3>
              <v-btn
                rounded
                outlined
                href="https://github.com/baklai"
                target="_blank"
                large
                color="white"
                class="mt-4"
              >
                <v-icon class="mr-2">
                  mdi-github
                </v-icon>
                Git Hub
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
#repository {
  background-image: url("~assets/img/bgRepository.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 500px;
}

#repository .container,
#repository .row {
  height: 100%;
}
</style>
