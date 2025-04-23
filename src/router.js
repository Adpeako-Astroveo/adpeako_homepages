import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import PrivacyPage from './pages/PrivacyPage.vue';
import NotFoundPage from './pages/NotFoundPage.vue';

const routes = [
  {
    path: '/',
    component: HomePage,
    name: 'home'
  },
  {
    path: '/privacy',
    component: PrivacyPage,
    name: 'privacy'
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFoundPage,
    name: 'catch-all'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;