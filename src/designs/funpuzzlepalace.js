import HomePage from './funpuzzlepalace/HomePage.vue';
import PrivacyPage from './funpuzzlepalace/PrivacyPage.vue';
import CategoryPage from './funpuzzlepalace/CategoryPage.vue';
import LoginPage from './funpuzzlepalace/LoginPage.vue';
import SignUpPage from './funpuzzlepalace/SignUpPage.vue';
import ContactPage from './funpuzzlepalace/ContactPage.vue';
import PaymentPage from './funpuzzlepalace/PaymentPage.vue';

export default {
  id: 'funpuzzlepalace.com',
  name: 'Fun Puzzle Palace',
  theme: {
    primary: '#8B5CF6',
    secondary: '#EC4899',
    accent: '#10B981',
    background: '#0F172A',
    surface: '#1E293B',
    text: '#F8FAFC',
    border: '#334155',
    hover: '#4338CA'
  },
  fonts: {
    heading: "'Orbitron', sans-serif",
    body: "'Inter', sans-serif"
  },
  pages: {
    home: {
      title: 'Fun Puzzle Palace | Premium Mobile Gaming',
      description: 'Access thousands of premium puzzle games, action games, and more. No ads. No in-app purchases. All through simple phone billing.',
      component: () => Promise.resolve(HomePage)
    },
    privacy: {
      title: 'Privacy Policy | Fun Puzzle Palace',
      description: 'Learn about how we protect your data and what information we collect when you use Fun Puzzle Palace services.',
      component: () => Promise.resolve(PrivacyPage)
    },
    category: {
      title: 'Game Categories | Fun Puzzle Palace',
      description: 'Browse our extensive collection of premium mobile games by category.',
      component: () => Promise.resolve(CategoryPage)
    },
    login: {
      title: 'Sign In | Fun Puzzle Palace',
      description: 'Sign in to your Fun Puzzle Palace account to access premium games and features.',
      component: () => Promise.resolve(LoginPage)
    },
    signup: {
      title: 'Create Account | Fun Puzzle Palace',
      description: 'Create a new account to start playing premium mobile games on Fun Puzzle Palace.',
      component: () => Promise.resolve(SignUpPage)
    },
    contact: {
      title: 'Contact Us | Fun Puzzle Palace',
      description: 'Get in touch with our support team for any questions or assistance.',
      component: () => Promise.resolve(ContactPage)
    },
    payment: {
      title: 'Payment | Fun Puzzle Palace',
      description: 'Learn about our convenient phone billing payment options.',
      component: () => Promise.resolve(PaymentPage)
    },
    notFound: {
      title: 'Page Not Found | Fun Puzzle Palace',
      description: 'The page you are looking for does not exist.',
      content: 'Sorry, the page you are looking for could not be found.'
    }
  }
};