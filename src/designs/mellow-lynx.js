export default {
  id: 'mellow-lynx.com',
  name: 'Mellow Lynx Design',
  theme: {
    primary: '#FF6B6B',
    secondary: '#4ECDC4'
  },
  pages: {
    home: {
      title: 'Your Domain | Home',
      description: 'Your ultimate mobile entertainment destination. Stream music, watch videos, follow sports, play games, and listen to audiobooks - all with simple mobile billing.',
      content: 'Premium mobile entertainment at your fingertips.',
      component: () => import('./mellow-lynx/HomePage.vue')
    },
    privacy: {
      title: 'Your Domain | Privacy',
      description: 'Learn about our commitment to protecting your privacy and personal data while using our entertainment services.',
      content: 'Our privacy commitment to you.',
      component: () => import('./mellow-lynx/PrivacyPage.vue')
    },
    notFound: {
      title: 'Your Domain | Page Not Found',
      description: 'The page you are looking for could not be found.',
      content: 'Sorry, this page does not exist'
    }
  }
};