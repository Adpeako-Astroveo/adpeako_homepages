import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import PrivacyPage from './pages/PrivacyPage.vue';
import LoginPage from './pages/LoginPage.vue';
import NotFoundPage from './pages/NotFoundPage.vue';
import MoviesPage from './pages/MoviesPage.vue';
import TVShowsPage from './pages/TVShowsPage.vue';
import LiveTVPage from './pages/LiveTVPage.vue';
import MusicPage from './pages/entertainment/MusicPage.vue';
import VideoPage from './pages/entertainment/VideoPage.vue';
import SportsPage from './pages/entertainment/SportsPage.vue';
import GamesPage from './pages/entertainment/GamesPage.vue';
import AudiobooksPage from './pages/entertainment/AudiobooksPage.vue';

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
    path: '/entertainment/music',
    component: MusicPage,
    name: 'music'
  },
  {
    path: '/entertainment/video',
    component: VideoPage,
    name: 'video'
  },
  {
    path: '/entertainment/sports',
    component: SportsPage,
    name: 'sports'
  },
  {
    path: '/entertainment/games',
    component: GamesPage,
    name: 'games'
  },
  {
    path: '/entertainment/audiobooks',
    component: AudiobooksPage,
    name: 'audiobooks'
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