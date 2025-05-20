export default {
  id: 'gameonlive.tv',
  name: 'GameOnLive Design',
  theme: {
    primary: '#0055FF',
    secondary: '#00CCFF'
  },
  pages: {
    home: {
      title: 'GameOnLive | Premium Mobile Entertainment',
      description: 'Your ultimate mobile entertainment destination. Stream music, watch videos, follow sports, play games, and listen to audiobooks - all with simple mobile billing.',
      content: 'Mobile entertainment made simple',
      component: () => import('./gameonlive/HomePage.vue')
    },
    privacy: {
      title: 'GameOnLive | Privacy Policy',
      description: 'Learn about our commitment to protecting your privacy and personal data while using our entertainment services.',
      content: 'Our privacy commitment to you.',
      component: () => import('./gameonlive/PrivacyPage.vue')
    },
    notFound: {
      title: 'GameOnLive | Page Not Found',
      description: 'The page you are looking for could not be found.',
      content: 'Sorry, this page does not exist'
    }
  }
};