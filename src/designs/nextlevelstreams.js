export default {
  id: 'nextlevelstreams.com',
  name: 'NextLevelStreams Design',
  theme: {
    primary: '#6D28D9',
    secondary: '#A78BFA'
  },
  pages: {
    home: {
      title: 'NextLevelStreams | Premium Mobile Entertainment',
      description: 'Your ultimate mobile entertainment destination. Stream music, watch videos, follow sports, play games, and listen to audiobooks - all with simple mobile billing.',
      content: 'Premium mobile entertainment at your fingertips.',
      component: () => import('./nextlevelstreams/HomePage.vue')
    },
    privacy: {
      title: 'NextLevelStreams | Privacy Policy',
      description: 'Learn about our commitment to protecting your privacy and personal data while using our entertainment services.',
      content: 'Our privacy commitment to you.',
      component: () => import('./nextlevelstreams/PrivacyPage.vue')
    },
    notFound: {
      title: 'NextLevelStreams | Page Not Found',
      description: 'The page you are looking for could not be found.',
      content: 'Sorry, this page does not exist'
    }
  }
};