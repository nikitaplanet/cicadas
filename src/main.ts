import {createApp} from 'vue';
import '@/assets/styles/index.scss';
import {createPinia} from 'pinia';
import router from './router';
import PrimeVue from 'primevue/config';

import App from './App.vue';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia).use(PrimeVue).use(router).mount('#app');
