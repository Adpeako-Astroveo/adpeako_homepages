export default {
  id: 'briskvideos.com',
  name: 'BriskVideos Gaming Platform',
  theme: {
    primary: '#ff00ff',
    secondary: '#00ffff',
    background: '#0a0a0a',
    text: '#ffffff'
  },
  pages: {
    home: {
      title: 'BriskVideos - Premium Gaming Platform',
      content: 'Welcome to the ultimate gaming experience',
      component: () => import('../pages/briskvideos/HomePage.vue')
    },
    privacy: {
      title: 'Privacy Policy - BriskVideos',
      content: 'Your privacy is important to us',
      component: () => import('./briskvideos/PrivacyPage.vue')
    },
    notFound: {
      title: 'Page Not Found - BriskVideos',
      content: 'The page you are looking for does not exist.'
    }
  }
};