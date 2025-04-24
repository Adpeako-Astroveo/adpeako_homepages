export default {
  id: 'design_v1',
  name: 'Version 1 Design',
  theme: {
    primary: '#FF0000',
    secondary: '#00FF00'
  },
  pages: {
    home: {
      title: 'Welcome to V1',
      content: 'This is the custom homepage for V1 with its unique red and green theme.',
      component: () => import('./v1/HomePage.vue')
    },
    privacy: {
      title: 'Privacy Policy - V1',
      content: 'This is the V1 privacy policy with our specific terms and conditions.',
      component: () => import('./v1/PrivacyPage.vue')
    },
    notFound: {
      title: '404 - V1',
      content: 'Sorry, this page does not exist on V1'
    }
  }
};