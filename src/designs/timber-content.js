export default {
  id: 'timber-content.com',
  name: 'Timber Content Design',
  theme: {
    primary: '#3B52A5',
    secondary: '#FF6B6B'
  },
  pages: {
    home: {
      title: 'Timber Content | Premium Mobile Entertainment',
      description: 'Your ultimate destination for premium mobile content. Stream music, watch videos, follow sports, play games, and enjoy audiobooks - all with simple mobile billing.',
      content: 'Premium mobile entertainment at your fingertips.',
      component: () => import('./timber-content/HomePage.vue')
    },
    privacy: {
      title: 'Timber Content | Privacy Policy',
      description: 'Learn about our commitment to protecting your privacy and personal data while using our entertainment services.',
      content: 'Our privacy commitment to you.',
      component: () => import('./timber-content/PrivacyPage.vue')
    },
    notFound: {
      title: 'Timber Content | Page Not Found',
      description: 'The page you are looking for could not be found.',
      content: 'Sorry, this page does not exist'
    }
  }
};