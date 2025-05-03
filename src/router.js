import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import PrivacyPage from './pages/PrivacyPage.vue';
import LoginPage from './pages/LoginPage.vue';
import NotFoundPage from './pages/NotFoundPage.vue';
import MoviesPage from './pages/MoviesPage.vue';
import TVShowsPage from './pages/TVShowsPage.vue';
import LiveTVPage from './pages/LiveTVPage.vue';

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
    path: '/login',
    component: LoginPage,
    name: 'login'
  },
  {
    path: '/movies',
    component: MoviesPage,
    name: 'movies'
  },
  {
    path: '/tvshows',
    component: TVShowsPage,
    name: 'tvshows'
  },
  {
    path: '/livetv',
    component: LiveTVPage,
    name: 'livetv'
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