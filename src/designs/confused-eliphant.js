export default {
  id: 'confused-eliphant.com',
  name: 'Confused Eliphant Design',
  theme: {
    primary: '#6C63FF',
    secondary: '#FF6584'
  },
  pages: {
    home: {
      title: 'Confused Eliphant | Premium Mobile Entertainment',
      description: 'Your ultimate mobile entertainment destination. Stream music, watch videos, follow sports, play games, and listen to audiobooks - all with simple mobile billing.',
      content: 'Premium mobile entertainment at your fingertips.',
      component: () => import('./confused-eliphant/HomePage.vue')
    },
    privacy: {
      title: 'Confused Eliphant | Privacy Policy',
      description: 'Learn about our commitment to protecting your privacy and personal data while using our entertainment services.',
      content: 'Our privacy commitment to you.',
      component: () => import('./confused-eliphant/PrivacyPage.vue')
    },
    notFound: {
      title: 'Confused Eliphant | Page Not Found',
      description: 'The page you are looking for could not be found.',
      content: 'Sorry, this page does not exist'
    }
  }
};