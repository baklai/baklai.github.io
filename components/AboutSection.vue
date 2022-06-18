<template>
  <section id="about" class="py-15">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col cols="12" md="7">
              <h1 class="font-weight-light display-1">Оказываемые услуги</h1>
              <h3 class="font-weight-light mb-3">
                Услуги и условия сотрудничества
              </h3>
              <v-row>
                <v-col cols="12" class="d-flex align-center">
                  <v-img
                    src="/img/icon-user-about.png"
                    max-width="60px"
                    class="mr-4"
                  />
                  <p class="text-justify">
                    Занимаюсь написанием программ, подготовкой курсовых,
                    лабораторных, отчетов; Построение блок-схем алгоритмов;
                    On-line помощь.
                  </p>
                </v-col>
                <v-col cols="12" class="d-flex align-center">
                  <v-img
                    src="/img/icon-user-intelligence.png"
                    max-width="60px"
                    class="mr-4"
                  />
                  <p class="text-justify">
                    Работаю с целым рядом ЯП и IDE: Delphi 7 - Delphi XE,
                    Lazarus, CodeTyphon, TurboPascal, PascalABC, PascalABC.NET,
                    FreePascal, C#, Node.js, JavaScript, MathCad 2001 - Mathcad
                    15, Mathcad Prime.
                  </p>
                </v-col>
                <v-col cols="12" class="d-flex align-center">
                  <v-img
                    src="/img/icon-user-wallet.png"
                    max-width="60px"
                    class="mr-4"
                  />
                  <p class="text-justify">
                    Работаю с предоплатой (перед оплатой предоставляем доступ к
                    исполнительному файлу или нарезке скриншотов — как
                    доказательство, что работа выполнена и код работает
                    корректно); Рассматриваю задания без оплаты (не очень
                    объемные по времени).
                  </p>
                </v-col>
                <v-col cols="12" class="d-flex align-center">
                  <v-img
                    src="/img/icon-user-last-24-hours.png"
                    max-width="60px"
                    class="mr-4"
                  />
                  <p class="text-justify">
                    Я постоянно в режиме ожидания, чтобы помочь, ответить на
                    ваши вопросы и помочь решить ваши проблемы.
                  </p>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" md="5" class="d-none d-md-flex">
              <v-img
                src="/svg/about-img.svg"
                class="d-block ml-auto mr-auto"
                max-width="500px"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
#about {
  background-color: #f4f7f5;
}
</style>
