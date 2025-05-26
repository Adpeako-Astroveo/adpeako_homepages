// FunPuzzlePalace design
import CategoryPage from './funpuzzlepalace/CategoryPage.vue';
import HomePage from './funpuzzlepalace/HomePage.vue';
import PrivacyPage from './funpuzzlepalace/PrivacyPage.vue';

export default {
  id: 'funpuzzlepalace.com',
  name: 'FunPuzzlePalace',
  theme: {
    primary: '#8B5CF6',
    secondary: '#EC4899',
    background: '#0f172a',
    textPrimary: '#ffffff',
    textSecondary: '#e2e8f0',
  },
  pages: {
    home: {
      title: 'Fun Puzzle Palace | Premium Mobile Gaming',
      content: 'Access thousands of premium puzzle games and more.',
      component: () => import('./funpuzzlepalace/HomePage.vue')
    },
    privacy: {
      title: 'Privacy Policy | Fun Puzzle Palace',
      content: 'Our privacy policy details how we protect your data.',
      component: () => import('./funpuzzlepalace/PrivacyPage.vue')
    },
    notFound: {
      title: 'Page Not Found | Fun Puzzle Palace',
      content: 'The page you are looking for does not exist.'
    }
  },
  features: [
    'Premium Games',
    'No Ads',
    'Phone Billing',
    'Cross-platform Support',
    'Cloud Saves'
  ]
};