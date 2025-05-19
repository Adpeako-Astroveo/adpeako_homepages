export default {
  id: 'height-ways.com',
  name: 'Height Ways Design',
  theme: {
    primary: '#007BFF',
    secondary: '#6C63FF'
  },
  pages: {
    home: {
      title: 'Height Ways | Premium Mobile Entertainment',
      description: 'Your ultimate mobile entertainment destination. Stream music, watch videos, follow sports, play games, and listen to audiobooks - all with simple mobile billing.',
      content: 'Premium mobile entertainment at your fingertips.',
      component: () => import('./height-ways/HomePage.vue')
    },
    privacy: {
      title: 'Height Ways | Privacy Policy',
      description: 'Learn about our commitment to protecting your privacy and personal data while using our entertainment services.',
      content: 'Our privacy commitment to you.',
      component: () => import('./height-ways/PrivacyPage.vue')
    },
    notFound: {
      title: 'Height Ways | Page Not Found',
      description: 'The page you are looking for could not be found.',
      content: 'Sorry, this page does not exist'
    }
  }
};