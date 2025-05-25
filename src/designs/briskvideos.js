// BriskVideos design configuration
import HomePage from './briskvideos/HomePage.vue';
import PrivacyPage from './briskvideos/PrivacyPage.vue';

export default {
  name: 'BriskVideos',
  theme: {
    primary: '#ff00ff', // Neon pink
    secondary: '#00ffff', // Neon cyan
    accent: '#ffff00', // Neon yellow
    background: '#0a0a0a', // Very dark background
    text: '#ffffff', // White text
    darkText: '#0a0a0a', // Dark text for light backgrounds
  },
  logo: {
    src: '/briskvideos-logo.svg',
    alt: 'BriskVideos Logo'
  },
  pages: {
    home: {
      title: 'BriskVideos - Ultimate Gaming Experience',
      description: 'Dive into the world of premium online gaming with BriskVideos. Play thousands of high-quality games instantly with no downloads.',
      component: () => Promise.resolve({ default: HomePage }),
      content: 'Welcome to BriskVideos, your ultimate destination for premium online gaming.'
    },
    privacy: {
      title: 'Privacy Policy | BriskVideos',
      description: 'Learn how BriskVideos handles your data and protects your privacy.',
      component: () => Promise.resolve({ default: PrivacyPage }),
      content: 'BriskVideos Privacy Policy'
    },
    notFound: {
      title: 'Page Not Found | BriskVideos',
      description: 'The page you are looking for does not exist.',
      content: 'Page not found. Please check the URL or go back to the homepage.'
    }
  }
};