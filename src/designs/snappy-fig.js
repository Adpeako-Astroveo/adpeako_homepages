export default {
  name: 'snappy-fig',
  theme: {
    primary: '#4ade80',
    secondary: '#22c55e',
    accent: '#10b981',
    background: '#f0fdf4',
    text: '#064e3b'
  },
  fonts: {
    heading: "'Poppins', sans-serif",
    body: "'Inter', sans-serif"
  },
  pages: {
    home: {
      title: 'Snappy Fig | Entertainment at Your Fingertips',
      description: 'Stream music, watch videos, follow sports, play games, and listen to audiobooks—all in one place. Pay conveniently through your phone bill.',
      component: () => import('./snappy-fig/HomePage.vue')
    },
    privacy: {
      title: 'Privacy Policy | Snappy Fig',
      description: 'Learn how Snappy Fig protects your data and respects your privacy.',
      component: () => import('./snappy-fig/PrivacyPage.vue')
    },
    login: {
      title: 'Sign In | Snappy Fig',
      description: 'Sign in to your Snappy Fig account to access premium entertainment.',
      component: () => import('./snappy-fig/LoginPage.vue')
    },
    signup: {
      title: 'Sign Up | Snappy Fig',
      description: 'Create an account to access premium entertainment content with easy phone billing.',
      component: () => import('./snappy-fig/SignUpPage.vue')
    },
    music: {
      title: 'Music Streaming | Snappy Fig',
      description: 'Discover the latest hits, timeless classics, and personalized playlists.',
      component: () => import('./snappy-fig/MusicPage.vue')
    },
    video: {
      title: 'Video Content | Snappy Fig',
      description: 'Stream your favorite shows, movies, and video content.',
      component: () => import('./snappy-fig/VideoPage.vue')
    },
    sports: {
      title: 'Sports | Snappy Fig',
      description: 'Follow live sports, highlights, and sports content.',
      component: () => import('./snappy-fig/SportsPage.vue')
    },
    games: {
      title: 'Games | Snappy Fig',
      description: 'Play exciting games and enjoy interactive entertainment.',
      component: () => import('./snappy-fig/GamesPage.vue')
    },
    audiobooks: {
      title: 'Audiobooks | Snappy Fig',
      description: 'Listen to bestselling audiobooks and immersive stories.',
      component: () => import('./snappy-fig/AudiobooksPage.vue')
    },
    notFound: {
      title: 'Page Not Found | Snappy Fig',
      description: 'The page you are looking for could not be found.',
      content: 'Sorry, the page you are looking for does not exist. Please check the URL or go back to the homepage.'
    }
  },
  routes: [
    { path: '/', component: () => import('./snappy-fig/HomePage.vue'), name: 'home' },
    { path: '/music', component: () => import('./snappy-fig/MusicPage.vue'), name: 'music' },
    { path: '/video', component: () => import('./snappy-fig/VideoPage.vue'), name: 'video' },
    { path: '/sports', component: () => import('./snappy-fig/SportsPage.vue'), name: 'sports' },
    { path: '/games', component: () => import('./snappy-fig/GamesPage.vue'), name: 'games' },
    { path: '/audiobooks', component: () => import('./snappy-fig/AudiobooksPage.vue'), name: 'audiobooks' },
    { path: '/login', component: () => import('./snappy-fig/LoginPage.vue'), name: 'login' },
    { path: '/signup', component: () => import('./snappy-fig/SignUpPage.vue'), name: 'signup' },
    { path: '/privacy', component: () => import('./snappy-fig/PrivacyPage.vue'), name: 'privacy' }
  ]
};
