export default {
  id: 'wave-view.com',
  name: 'Wave View Design',
  theme: {
    primary: '#3B82F6',
    secondary: '#60A5FA'
  },
  pages: {
    home: {
      title: 'Wave View | Global Entertainment Platform',
      description: 'Your gateway to premium entertainment. Stream movies, play games, listen to audiobooks, and watch documentaries - available 24/7 in Switzerland.',
      content: 'Premium entertainment at your fingertips.',
      component: () => import('./wave-view/HomePage.vue')
    },
    privacy: {
      title: 'Wave View | Privacy Policy',
      description: 'Learn about our commitment to protecting your privacy and personal data while using our entertainment services.',
      content: 'Our privacy commitment to you.',
      component: () => import('./wave-view/PrivacyPage.vue')
    },
    notFound: {
      title: 'Wave View | Page Not Found',
      description: 'The page you are looking for could not be found.',
      content: 'Sorry, this page does not exist'
    }
  }
};