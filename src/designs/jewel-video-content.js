import { defineAsyncComponent } from 'vue';

export default {
  name: 'Jewel Video Content',
  theme: {
    primary: '#9333ea',
    secondary: '#c026d3',
  },
  pages: {
    home: {
      title: 'Jewel Video Content - Premium Mobile Entertainment',
      description: 'Stream premium music, videos, sports, games, and audiobooks on your mobile device with carrier billing.',
      component: () => import('./jewel-video-content/HomePage.vue'),
    },
    privacy: {
      title: 'Privacy Policy - Jewel Video Content',
      description: 'Learn about how Jewel Video Content handles your personal data and protects your privacy.',
      component: () => import('./jewel-video-content/PrivacyPage.vue'),
    },
    notFound: {
      title: 'Page Not Found - Jewel Video Content',
      description: 'The page you are looking for does not exist.',
      content: 'Oops! The page you are looking for cannot be found. Please check the URL or go back to the homepage.',
    },
  },
};