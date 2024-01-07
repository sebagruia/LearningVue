import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import LogInPage from './pages/LogInPage.vue';
import UsersPage from './pages/UsersPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/login', component: LogInPage },
  { path: '/users', component: UsersPage }
];

export const router = createRouter({
  history: createWebHistory(),
  routes
});
