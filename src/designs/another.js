export default {
  id: 'design_xyz456',
  name: 'Another Domain Design',
  theme: {
    primary: '#0000FF',
    secondary: '#FF00FF'
  },
  pages: {
    home: {
      title: 'Another Domain - Home',
      content: 'Welcome to our blue and pink themed website!',
      component: () => import('./another/HomePage.vue')
    },
    privacy: {
      title: 'Privacy Notice - Another Domain',
      content: 'Privacy information specific to Another Domain users.',
      component: () => import('./another/PrivacyPage.vue')
    },
    notFound: {
      title: '404 - Another Domain',
      content: 'Page not found on Another Domain'
    }
  }
};