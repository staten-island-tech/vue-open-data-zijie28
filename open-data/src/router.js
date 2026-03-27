import { createWebHistory, createRouter } from 'vue-router';

import App from './App.vue';
import StatusPage from './views/StatusPage.vue';
import HomePage from './views/HomePage.vue';
import OpPage from './views/OpPage.vue';


const routes = [
  { name: "status", path: '/status', component: StatusPage },
  { name: "main", path: '/main', component: HomePage },
  { name: "main", path: '/op', component: OpPage },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
})