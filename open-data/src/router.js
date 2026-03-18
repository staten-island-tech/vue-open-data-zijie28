import { createWebHistory, createRouter } from 'vue-router';

import App from './App.vue';
import Status from './routes/status.vue';

const routes = [
  { path: '/', component: App },
  { path: '/status', component: Status }
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
})