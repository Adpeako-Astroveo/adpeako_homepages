export default {
  id: 'yellow-racoon.com',
  name: 'Yellow Racoon Design',
  theme: {
    primary: '#FFB800',
    secondary: '#FFA200'
  },
  pages: {
    home: {
      title: 'Yellow Racoon | Premium Mobile Entertainment',
      description: 'Your ultimate mobile entertainment destination. Stream music, watch videos, follow sports, play games, and listen to audiobooks - all with simple mobile billing.',
      content: 'Premium mobile entertainment at your fingertips.',
      component: () => import('./yellow-racoon/HomePage.vue')
    },
    privacy: {
      title: 'Yellow Racoon | Privacy Policy',
      description: 'Learn about our commitment to protecting your privacy and personal data while using our entertainment services.',
      content: 'Our privacy commitment to you.',
      component: () => import('./yellow-racoon/PrivacyPage.vue')
    },
    notFound: {
      title: 'Yellow Racoon | Page Not Found',
      description: 'The page you are looking for could not be found.',
      content: 'Sorry, this page does not exist'
    }
  }
};