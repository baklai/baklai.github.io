import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createI18n } from 'vue-i18n';

import App from './App.vue';
import router from './router';

import '@/assets/styles.css';

const app = createApp(App);

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: {},
    ua: {}
  }
});

app.use(createPinia());
app.use(router);
app.use(i18n);

app.config.errorHandler = function (err, vm, info) {
  console.error('errorHandler', err);
};

app.config.warnHandler = (msg, instance, trace) => {
  console.error('warnHandler', msg);
};

app.mount('#app');
