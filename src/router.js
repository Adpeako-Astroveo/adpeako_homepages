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

// Height Ways specific pages
import HeightWaysMusicPage from './pages/height-ways/MusicPage.vue';
import HeightWaysVideoPage from './pages/height-ways/VideoPage.vue';
import HeightWaysSportsPage from './pages/height-ways/SportsPage.vue';
import HeightWaysGamesPage from './pages/height-ways/GamesPage.vue';
import HeightWaysAudiobooksPage from './pages/height-ways/AudiobooksPage.vue';

// Timber Tube specific pages
import TimberTubeMusicPage from './pages/timber-tube/MusicPage.vue';
import TimberTubeVideoPage from './pages/timber-tube/VideoPage.vue';
import TimberTubeSportsPage from './pages/timber-tube/SportsPage.vue';
import TimberTubeGamesPage from './pages/timber-tube/GamesPage.vue';
import TimberTubeAudiobooksPage from './pages/timber-tube/AudiobooksPage.vue';

// GameOnLive specific pages
import GameOnLiveMusicPage from './pages/gameonlive/MusicPage.vue';
import GameOnLiveVideoPage from './pages/gameonlive/VideoPage.vue';
import GameOnLiveSportsPage from './pages/gameonlive/SportsPage.vue';
import GameOnLiveGamesPage from './pages/gameonlive/GamesPage.vue';
import GameOnLiveAudiobooksPage from './pages/gameonlive/AudiobooksPage.vue';

// NextLevelStreams specific pages
import NextLevelStreamsMusicPage from './pages/nextlevelstreams/MusicPage.vue';
import NextLevelStreamsVideoPage from './pages/nextlevelstreams/VideoPage.vue';
import NextLevelStreamsSportsPage from './pages/nextlevelstreams/SportsPage.vue';
import NextLevelStreamsGamesPage from './pages/nextlevelstreams/GamesPage.vue';
import NextLevelStreamsAudiobooksPage from './pages/nextlevelstreams/AudiobooksPage.vue';

// Timber Content specific pages
import TimberContentMusicPage from './pages/timber-content/MusicPage.vue';
import TimberContentVideoPage from './pages/timber-content/VideoPage.vue';
import TimberContentSportsPage from './pages/timber-content/SportsPage.vue';
import TimberContentGamesPage from './pages/timber-content/GamesPage.vue';
import TimberContentAudiobooksPage from './pages/timber-content/AudiobooksPage.vue';

// IQ Champion Hub specific pages
import IQChampionHubMusicPage from './pages/iqchampionhub/MusicPage.vue';
import IQChampionHubVideoPage from './pages/iqchampionhub/VideoPage.vue';
import IQChampionHubSportsPage from './pages/iqchampionhub/SportsPage.vue';
import IQChampionHubGamesPage from './pages/iqchampionhub/GamesPage.vue';
import IQChampionHubAudiobooksPage from './pages/iqchampionhub/AudiobooksPage.vue';
import IQChampionHubPaymentPage from './pages/iqchampionhub/PaymentPage.vue';

// Jewel Video Content specific pages
import JewelVideoContentMusicPage from './pages/jewel-video-content/MusicPage.vue';
import JewelVideoContentVideoPage from './pages/jewel-video-content/VideoPage.vue';
import JewelVideoContentSportsPage from './pages/jewel-video-content/SportsPage.vue';
import JewelVideoContentGamesPage from './pages/jewel-video-content/GamesPage.vue';
import JewelVideoContentAudiobooksPage from './pages/jewel-video-content/AudiobooksPage.vue';
import JewelVideoContentPaymentPage from './pages/jewel-video-content/PaymentPage.vue';
import JewelVideoContentPrivacyPage from './designs/jewel-video-content/PrivacyPage.vue';

// BriskVideos specific pages
import BriskVideosHomePage from './pages/briskvideos/HomePage.vue';
import BriskVideosGamesPage from './pages/briskvideos/GamesPage.vue';
import BriskVideosCategoryPage from './pages/briskvideos/CategoryPage.vue';
import BriskVideosLoginPage from './pages/briskvideos/LoginPage.vue';
import BriskVideosSignUpPage from './pages/briskvideos/SignUpPage.vue';

// BriskVideos Category specific pages
import BriskVideosActionGamesPage from './pages/briskvideos/categories/ActionGamesPage.vue';
import BriskVideosAdventureGamesPage from './pages/briskvideos/categories/AdventureGamesPage.vue';

// Fun Puzzle Palace specific pages
import FunPuzzlePalaceHomePage from './designs/funpuzzlepalace/HomePage.vue';
import FunPuzzlePalaceCategoryPage from './designs/funpuzzlepalace/CategoryPage.vue';
import FunPuzzlePalaceLoginPage from './designs/funpuzzlepalace/LoginPage.vue';
import FunPuzzlePalaceSignUpPage from './designs/funpuzzlepalace/SignUpPage.vue';
import FunPuzzlePalaceContactPage from './designs/funpuzzlepalace/ContactPage.vue';
import FunPuzzlePalacePaymentPage from './designs/funpuzzlepalace/PaymentPage.vue';
import FunPuzzlePalacePrivacyPage from './designs/funpuzzlepalace/PrivacyPage.vue';

// HastyReels specific pages
import HastyReelsHomePage from './designs/hastyreels/HomePage.vue';
import HastyReelsCategoriesPage from './designs/hastyreels/CategoriesPage.vue';
import HastyReelsCategoryPage from './designs/hastyreels/CategoryPage.vue';
import HastyReelsWatchPage from './designs/hastyreels/WatchPage.vue';
import HastyReelsCreatorsPage from './designs/hastyreels/CreatorsPage.vue';
import HastyReelsTrendingPage from './designs/hastyreels/TrendingPage.vue';
import HastyReelsLoginPage from './designs/hastyreels/LoginPage.vue';
import HastyReelsSignUpPage from './designs/hastyreels/SignUpPage.vue';
import HastyReelsPrivacyPage from './designs/hastyreels/PrivacyPage.vue';

// Snappy Fig specific pages
import SnappyFigHomePage from './designs/snappy-fig/HomePage.vue';
import SnappyFigMusicPage from './designs/snappy-fig/MusicPage.vue';
import SnappyFigVideoPage from './designs/snappy-fig/VideoPage.vue';
import SnappyFigSportsPage from './designs/snappy-fig/SportsPage.vue';
import SnappyFigGamesPage from './designs/snappy-fig/GamesPage.vue';
import SnappyFigAudiobooksPage from './designs/snappy-fig/AudiobooksPage.vue';
import SnappyFigLoginPage from './designs/snappy-fig/LoginPage.vue';
import SnappyFigSignUpPage from './designs/snappy-fig/SignUpPage.vue';
import SnappyFigPrivacyPage from './designs/snappy-fig/PrivacyPage.vue';

const routes = [
  {
    path: '/',
    component: HomePage,
    name: 'home'
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
    path: '/privacy',
    component: PrivacyPage,
    name: 'privacy'
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
  // Height Ways specific routes
  {
    path: '/height-ways/music',
    component: HeightWaysMusicPage,
    name: 'height-ways-music'
  },
  {
    path: '/height-ways/video',
    component: HeightWaysVideoPage,
    name: 'height-ways-video'
  },
  {
    path: '/height-ways/sports',
    component: HeightWaysSportsPage,
    name: 'height-ways-sports'
  },
  {
    path: '/height-ways/games',
    component: HeightWaysGamesPage,
    name: 'height-ways-games'
  },
  {
    path: '/height-ways/audiobooks',
    component: HeightWaysAudiobooksPage,
    name: 'height-ways-audiobooks'
  },
  // Timber Tube specific routes
  {
    path: '/timber-tube/music',
    component: TimberTubeMusicPage,
    name: 'timber-tube-music'
  },
  {
    path: '/timber-tube/video',
    component: TimberTubeVideoPage,
    name: 'timber-tube-video'
  },
  {
    path: '/timber-tube/sports',
    component: TimberTubeSportsPage,
    name: 'timber-tube-sports'
  },
  {
    path: '/timber-tube/games',
    component: TimberTubeGamesPage,
    name: 'timber-tube-games'
  },
  {
    path: '/timber-tube/audiobooks',
    component: TimberTubeAudiobooksPage,
    name: 'timber-tube-audiobooks'
  },
  // GameOnLive specific routes
  {
    path: '/gameonlive/music',
    component: GameOnLiveMusicPage,
    name: 'gameonlive-music'
  },
  {
    path: '/gameonlive/video',
    component: GameOnLiveVideoPage,
    name: 'gameonlive-video'
  },
  {
    path: '/gameonlive/sports',
    component: GameOnLiveSportsPage,
    name: 'gameonlive-sports'
  },
  {
    path: '/gameonlive/games',
    component: GameOnLiveGamesPage,
    name: 'gameonlive-games'
  },
  {
    path: '/gameonlive/audiobooks',
    component: GameOnLiveAudiobooksPage,
    name: 'gameonlive-audiobooks'
  },
  // NextLevelStreams specific routes
  {
    path: '/nextlevelstreams/music',
    component: NextLevelStreamsMusicPage,
    name: 'nextlevelstreams-music'
  },
  {
    path: '/nextlevelstreams/video',
    component: NextLevelStreamsVideoPage,
    name: 'nextlevelstreams-video'
  },
  {
    path: '/nextlevelstreams/sports',
    component: NextLevelStreamsSportsPage,
    name: 'nextlevelstreams-sports'
  },
  {
    path: '/nextlevelstreams/games',
    component: NextLevelStreamsGamesPage,
    name: 'nextlevelstreams-games'
  },
  {
    path: '/nextlevelstreams/audiobooks',
    component: NextLevelStreamsAudiobooksPage,
    name: 'nextlevelstreams-audiobooks'
  },
  // Timber Content specific routes
  {
    path: '/timber-content/music',
    component: TimberContentMusicPage,
    name: 'timber-content-music'
  },
  {
    path: '/timber-content/video',
    component: TimberContentVideoPage,
    name: 'timber-content-video'
  },
  {
    path: '/timber-content/sports',
    component: TimberContentSportsPage,
    name: 'timber-content-sports'
  },
  {
    path: '/timber-content/games',
    component: TimberContentGamesPage,
    name: 'timber-content-games'
  },
  {
    path: '/timber-content/audiobooks',
    component: TimberContentAudiobooksPage,
    name: 'timber-content-audiobooks'
  },
  // IQ Champion Hub specific routes
  {
    path: '/iqchampionhub/music',
    component: IQChampionHubMusicPage,
    name: 'iqchampionhub-music'
  },
  {
    path: '/iqchampionhub/video',
    component: IQChampionHubVideoPage,
    name: 'iqchampionhub-video'
  },
  {
    path: '/iqchampionhub/sports',
    component: IQChampionHubSportsPage,
    name: 'iqchampionhub-sports'
  },
  {
    path: '/iqchampionhub/games',
    component: IQChampionHubGamesPage,
    name: 'iqchampionhub-games'
  },
  {
    path: '/iqchampionhub/audiobooks',
    component: IQChampionHubAudiobooksPage,
    name: 'iqchampionhub-audiobooks'
  },
  {
    path: '/iqchampionhub/payment',
    component: IQChampionHubPaymentPage,
    name: 'iqchampionhub-payment'
  },
  // Jewel Video Content specific routes
  {
    path: '/jewel-video-content/music',
    component: JewelVideoContentMusicPage,
    name: 'jewel-video-content-music'
  },
  {
    path: '/jewel-video-content/video',
    component: JewelVideoContentVideoPage,
    name: 'jewel-video-content-video'
  },
  {
    path: '/jewel-video-content/sports',
    component: JewelVideoContentSportsPage,
    name: 'jewel-video-content-sports'
  },
  {
    path: '/jewel-video-content/games',
    component: JewelVideoContentGamesPage,
    name: 'jewel-video-content-games'
  },
  {
    path: '/jewel-video-content/audiobooks',
    component: JewelVideoContentAudiobooksPage,
    name: 'jewel-video-content-audiobooks'
  },
  {
    path: '/jewel-video-content/payment',
    component: JewelVideoContentPaymentPage,
    name: 'jewel-video-content-payment'
  },
  {
    path: '/jewel-video-content/privacy',
    component: JewelVideoContentPrivacyPage,
    name: 'jewel-video-content-privacy'
  },
  // BriskVideos specific routes
  {
    path: '/briskvideos',
    component: BriskVideosHomePage,
    name: 'briskvideos-home'
  },
  {
    path: '/briskvideos/games',
    component: BriskVideosGamesPage,
    name: 'briskvideos-games'
  },
  {
    path: '/categories/:categoryId',
    component: BriskVideosCategoryPage,
    name: 'briskvideos-category'
  },
  {
    path: '/briskvideos/login',
    component: BriskVideosLoginPage,
    name: 'briskvideos-login'
  },
  {
    path: '/briskvideos/signup',
    component: BriskVideosSignUpPage,
    name: 'briskvideos-signup'
  },
  // BriskVideos Category specific routes
  {
    path: '/categories/action',
    component: BriskVideosActionGamesPage,
    name: 'briskvideos-action-games'
  },
  {
    path: '/categories/adventure',
    component: BriskVideosAdventureGamesPage,
    name: 'briskvideos-adventure-games'
  },
  {
    path: '/briskvideos/privacy',
    component: () => import('./designs/briskvideos/PrivacyPage.vue'),
    name: 'briskvideos-privacy'
  },
  
  // Fun Puzzle Palace specific routes
  {
    path: '/funpuzzlepalace',
    component: FunPuzzlePalaceHomePage,
    name: 'funpuzzlepalace-home'
  },
  {
    path: '/funpuzzlepalace/category/:categoryId',
    component: FunPuzzlePalaceCategoryPage,
    name: 'funpuzzlepalace-category'
  },
  {
    path: '/funpuzzlepalace/login',
    component: FunPuzzlePalaceLoginPage,
    name: 'funpuzzlepalace-login'
  },
  {
    path: '/funpuzzlepalace/signup',
    component: FunPuzzlePalaceSignUpPage,
    name: 'funpuzzlepalace-signup'
  },
  {
    path: '/funpuzzlepalace/contact',
    component: FunPuzzlePalaceContactPage,
    name: 'funpuzzlepalace-contact'
  },
  {
    path: '/funpuzzlepalace/payment',
    component: FunPuzzlePalacePaymentPage,
    name: 'funpuzzlepalace-payment'
  },
  {
    path: '/funpuzzlepalace/privacy',
    component: FunPuzzlePalacePrivacyPage,
    name: 'funpuzzlepalace-privacy'
  },
  
  // HastyReels specific routes
  {
    path: '/hastyreels',
    component: HastyReelsHomePage,
    name: 'hastyreels-home'
  },
  // Add redirect for hastyreels domain to home page
  {
    path: '/hastyreels/hastyreels',
    redirect: '/hastyreels'
  },
  {
    path: '/hastyreels/categories',
    component: HastyReelsCategoriesPage,
    name: 'hastyreels-categories'
  },
  {
    path: '/hastyreels/category/:categoryId',
    component: HastyReelsCategoryPage,
    name: 'hastyreels-category'
  },
  {
    path: '/hastyreels/watch/:videoId',
    component: HastyReelsWatchPage,
    name: 'hastyreels-watch'
  },
  {
    path: '/hastyreels/creators',
    component: HastyReelsCreatorsPage,
    name: 'hastyreels-creators'
  },
  {
    path: '/hastyreels/trending',
    component: HastyReelsTrendingPage,
    name: 'hastyreels-trending'
  },
  {
    path: '/hastyreels/login',
    component: HastyReelsLoginPage,
    name: 'hastyreels-login'
  },
  {
    path: '/hastyreels/signup',
    component: HastyReelsSignUpPage,
    name: 'hastyreels-signup'
  },
  // HastyReels privacy page
  {
    path: '/hastyreels/privacy',
    component: HastyReelsPrivacyPage,
    name: 'hastyreels-privacy'
  },

  // Snappy Fig specific routes (moved before conflicting routes)
  {
    path: '/music',
    component: SnappyFigMusicPage,
    name: 'music'
  },
  {
    path: '/video',
    component: SnappyFigVideoPage,
    name: 'video'
  },
  {
    path: '/sports',
    component: SnappyFigSportsPage,
    name: 'sports'
  },
  {
    path: '/games',
    component: SnappyFigGamesPage,
    name: 'games'
  },
  {
    path: '/audiobooks',
    component: SnappyFigAudiobooksPage,
    name: 'audiobooks'
  },
  {
    path: '/signup',
    component: SnappyFigSignUpPage,
    name: 'signup'
  },

  {
    path: '/:pathMatch(.*)*',
    component: NotFoundPage,
    name: 'catch-all'
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;