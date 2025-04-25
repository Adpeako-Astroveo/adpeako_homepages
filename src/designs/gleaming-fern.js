export default {
  id: 'gleaming-fern.com',
  name: 'Gleaming Fern Design',
  theme: {
    primary: '#3B82F6',
    secondary: '#60A5FA'
  },
  pages: {
    home: {
      title: 'Your Domain | Home',
      description: 'Your ultimate mobile entertainment destination. Stream music, watch videos, follow sports, play games, and listen to audiobooks - all with simple mobile billing.',
      content: 'Premium mobile entertainment at your fingertips.',
      component: () => import('./gleaming-fern/HomePage.vue')
    },
    privacy: {
      title: 'Your Domain | Privacy',
      description: 'Learn about our commitment to protecting your privacy and personal data while using our entertainment services.',
      content: 'Our privacy commitment to you.',
      component: () => import('./gleaming-fern/PrivacyPage.vue')
    },
    notFound: {
      title: 'Your Domain | Page Not Found',
      description: 'The page you are looking for could not be found.',
      content: 'Sorry, this page does not exist'
    }
  }
};