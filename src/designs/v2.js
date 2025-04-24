export default {
  id: 'design_v2',
  name: 'Version 2 Design',
  theme: {
    primary: '#FFD700',
    secondary: '#FFA500'
  },
  pages: {
    home: {
      title: 'Welcome to V2',
      content: 'This is the custom homepage for V2 with its unique yellow and orange theme.',
      component: () => import('./v2/HomePage.vue')
    },
    privacy: {
      title: 'Privacy Policy - V2',
      content: 'This is the V2 privacy policy with our specific terms and conditions.',
      component: () => import('./v2/PrivacyPage.vue')
    },
    notFound: {
      title: '404 - V2',
      content: 'Sorry, this page does not exist on V2'
    }
  }
};