export default {
  id: 'timber-tube.com',
  name: 'Timber Tube Design',
  theme: {
    primary: '#3B52A5',
    secondary: '#5D72D9'
  },
  pages: {
    home: {
      title: 'Timber Tube | Premium Mobile Entertainment',
      description: 'Your ultimate mobile entertainment destination. Stream music, watch videos, follow sports, play games, and listen to audiobooks - all with simple mobile billing.',
      content: 'Premium mobile entertainment at your fingertips.',
      component: () => import('./timber-tube/HomePage.vue')
    },
    privacy: {
      title: 'Timber Tube | Privacy Policy',
      description: 'Learn about our commitment to protecting your privacy and personal data while using our entertainment services.',
      content: 'Our privacy commitment to you.',
      component: () => import('./timber-tube/PrivacyPage.vue')
    },
    notFound: {
      title: 'Timber Tube | Page Not Found',
      description: 'The page you are looking for could not be found.',
      content: 'Sorry, this page does not exist'
    }
  }
};