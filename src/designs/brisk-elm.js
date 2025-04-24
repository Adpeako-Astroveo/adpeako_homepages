export default {
  id: 'brisk-elm.com',
  name: 'Brisk Elm Design',
  theme: {
    primary: '#805AD5',
    secondary: '#B794F4'
  },
  pages: {
    home: {
      title: 'Your Domain | Home',
      description: 'Experience premium entertainment with our curated selection of movies, music, games, and more. Stream your favorite content anytime, anywhere.',
      content: 'Your premium entertainment destination.',
      component: () => import('./brisk-elm/HomePage.vue')
    },
    privacy: {
      title: 'Your Domain | Privacy',
      description: 'Learn about our commitment to protecting your privacy and personal data while using our entertainment services.',
      content: 'Our privacy commitment to you.',
      component: () => import('./brisk-elm/PrivacyPage.vue')
    },
    notFound: {
      title: 'Your Domain | Page Not Found',
      description: 'The page you are looking for could not be found.',
      content: 'Sorry, this page does not exist'
    }
  }
};