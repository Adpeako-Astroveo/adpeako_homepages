export default {
  id: 'brisk-otter.com',
  name: 'Brisk Otter Design',
  theme: {
    primary: '#4CAF50',
    secondary: '#81C784'
  },
  pages: {
    home: {
      title: 'Your Domain | Home',
      description: 'Your one-stop destination for premium mobile entertainment. Stream music, play games, watch videos, listen to audiobooks, and follow live sports.',
      content: 'Access premium mobile entertainment content with our comprehensive streaming platform.',
      component: () => import('./brisk-otter/HomePage.vue')
    },
    privacy: {
      title: 'Your Domain | Privacy',
      description: 'Learn how we protect your privacy and secure your data while using our mobile entertainment services.',
      content: 'Our commitment to protecting your privacy while delivering premium entertainment.',
      component: () => import('./brisk-otter/PrivacyPage.vue')
    },
    notFound: {
      title: 'Your Domain | Page Not Found',
      description: 'The page you are looking for could not be found.',
      content: 'Sorry, this page does not exist'
    }
  }
};