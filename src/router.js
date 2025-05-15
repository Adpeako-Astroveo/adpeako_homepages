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

// Switch Runner specific pages
import SwitchRunnerMusicPage from './pages/switch-runner/MusicPage.vue';
import SwitchRunnerVideoPage from './pages/switch-runner/VideoPage.vue';
import SwitchRunnerSportsPage from './pages/switch-runner/SportsPage.vue';
import SwitchRunnerGamesPage from './pages/switch-runner/GamesPage.vue';
import SwitchRunnerAudiobooksPage from './pages/switch-runner/AudiobooksPage.vue';

// Confused Eliphant specific pages
import ConfusedEliphantMusicPage from './pages/confused-eliphant/MusicPage.vue';
import ConfusedEliphantVideoPage from './pages/confused-eliphant/VideoPage.vue';
import ConfusedEliphantSportsPage from './pages/confused-eliphant/SportsPage.vue';
import ConfusedEliphantGamesPage from './pages/confused-eliphant/GamesPage.vue';
import ConfusedEliphantAudiobooksPage from './pages/confused-eliphant/AudiobooksPage.vue';

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
  // Switch Runner specific routes
  {
    path: '/switch-runner/music',
    component: SwitchRunnerMusicPage,
    name: 'switch-runner-music'
  },
  {
    path: '/switch-runner/video',
    component: SwitchRunnerVideoPage,
    name: 'switch-runner-video'
  },
  {
    path: '/switch-runner/sports',
    component: SwitchRunnerSportsPage,
    name: 'switch-runner-sports'
  },
  {
    path: '/switch-runner/games',
    component: SwitchRunnerGamesPage,
    name: 'switch-runner-games'
  },
  {
    path: '/switch-runner/audiobooks',
    component: SwitchRunnerAudiobooksPage,
    name: 'switch-runner-audiobooks'
  },
  // Confused Eliphant specific routes
  {
    path: '/confused-eliphant/music',
    component: ConfusedEliphantMusicPage,
    name: 'confused-eliphant-music'
  },
  {
    path: '/confused-eliphant/video',
    component: ConfusedEliphantVideoPage,
    name: 'confused-eliphant-video'
  },
  {
    path: '/confused-eliphant/sports',
    component: ConfusedEliphantSportsPage,
    name: 'confused-eliphant-sports'
  },
  {
    path: '/confused-eliphant/games',
    component: ConfusedEliphantGamesPage,
    name: 'confused-eliphant-games'
  },
  {
    path: '/confused-eliphant/audiobooks',
    component: ConfusedEliphantAudiobooksPage,
    name: 'confused-eliphant-audiobooks'
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