export default {
  id: 'design_v2',
  name: 'Version 2 Design',
  theme: {
    primary: '#4CAF50',
    secondary: '#81C784'
  },
  pages: {
    home: {
      title: 'Mobile Entertainment Hub - Stream Music, Games & Sports | Your Domain',
      description: 'Your one-stop destination for premium mobile entertainment. Stream music, play games, watch videos, listen to audiobooks, and follow live sports.',
      content: 'Access premium mobile entertainment content with our comprehensive streaming platform.',
      component: () => import('./v2/HomePage.vue')
    },
    privacy: {
      title: 'Privacy Policy - Mobile Entertainment Platform | Your Domain',
      description: 'Learn how we protect your privacy and secure your data while using our mobile entertainment services.',
      content: 'Our commitment to protecting your privacy while delivering premium entertainment.',
      component: () => import('./v2/PrivacyPage.vue')
    },
    notFound: {
      title: '404 - Page Not Found | Your Domain',
      description: 'The page you are looking for could not be found.',
      content: 'Sorry, this page does not exist'
    }
  }
};