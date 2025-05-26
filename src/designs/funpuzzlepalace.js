// FunPuzzlePalace design configuration
import { defineAsyncComponent } from 'vue';

export default {
  name: 'funpuzzlepalace',
  theme: {
    primary: '#8B5CF6',
    secondary: '#EC4899',
    accent: '#F472B6',
    neutral: '#0F172A',
    background: {
      light: '#F8FAFC',
      dark: '#0F172A'
    }
  },
  fonts: {
    heading: 'Orbitron, sans-serif',
    body: 'Inter, sans-serif'
  },
  pages: {
    home: {
      title: 'Fun Puzzle Palace | Premium Mobile Gaming',
      description: 'Access thousands of premium puzzle games, action games, and more. No ads. No in-app purchases. All through simple phone billing.',
      component: () => import('./funpuzzlepalace/HomePage.vue')
    },
    privacy: {
      title: 'Privacy Policy | Fun Puzzle Palace',
      description: 'Learn how Fun Puzzle Palace protects your data and respects your privacy.',
      component: () => import('./funpuzzlepalace/PrivacyPage.vue')
    },
    login: {
      title: 'Sign In | Fun Puzzle Palace',
      description: 'Sign in to your Fun Puzzle Palace account to access premium games.',
      component: () => import('./funpuzzlepalace/LoginPage.vue')
    },
    signup: {
      title: 'Sign Up | Fun Puzzle Palace',
      description: 'Create an account to access thousands of premium games with no ads.',
      component: () => import('./funpuzzlepalace/SignUpPage.vue')
    },
    category: {
      title: 'Game Categories | Fun Puzzle Palace',
      description: 'Browse our extensive collection of premium mobile games by category.',
      component: () => import('./funpuzzlepalace/CategoryPage.vue')
    },
    payment: {
      title: 'Subscription Plans | Fun Puzzle Palace',
      description: 'Choose a subscription plan and pay easily with phone billing.',
      component: () => import('./funpuzzlepalace/PaymentPage.vue')
    },
    contact: {
      title: 'Contact Us | Fun Puzzle Palace',
      description: 'Get in touch with our support team for any questions or assistance.',
      component: () => import('./funpuzzlepalace/ContactPage.vue')
    },
    notFound: {
      title: 'Page Not Found | Fun Puzzle Palace',
      description: 'The page you are looking for could not be found.',
      content: 'Sorry, the page you are looking for does not exist. Please check the URL or go back to the homepage.'
    }
  }
};