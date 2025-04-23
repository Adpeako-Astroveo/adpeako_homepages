export default {
  id: 'design_abc123',
  name: 'Example.com Design',
  theme: {
    primary: '#FF0000',
    secondary: '#00FF00'
  },
  pages: {
    home: {
      title: 'Welcome to Example.com',
      content: 'This is the custom homepage for Example.com with its unique red and green theme.',
      component: () => import('./example/HomePage.vue')
    },
    privacy: {
      title: 'Privacy Policy - Example.com',
      content: 'This is the Example.com privacy policy with our specific terms and conditions.',
      component: () => import('./example/PrivacyPage.vue')
    },
    notFound: {
      title: '404 - Example.com',
      content: 'Sorry, this page does not exist on Example.com'
    }
  }
};