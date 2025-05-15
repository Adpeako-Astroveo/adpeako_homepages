export default {
  id: 'switch-runner.com',
  name: 'Switch Runner Design',
  theme: {
    primary: '#FF6347',
    secondary: '#FFA07A'
  },
  pages: {
    home: {
      title: 'Switch Runner | Premium Mobile Entertainment',
      description: 'Your ultimate mobile entertainment destination. Stream music, watch videos, follow sports, play games, and listen to audiobooks - all with simple mobile billing.',
      content: 'Premium mobile entertainment at your fingertips.',
      component: () => import('./switch-runner/HomePage.vue')
    },
    privacy: {
      title: 'Switch Runner | Privacy Policy',
      description: 'Learn about our commitment to protecting your privacy and personal data while using our entertainment services.',
      content: 'Our privacy commitment to you.',
      component: () => import('./switch-runner/PrivacyPage.vue')
    },
    notFound: {
      title: 'Switch Runner | Page Not Found',
      description: 'The page you are looking for could not be found.',
      content: 'Sorry, this page does not exist'
    }
  }
};