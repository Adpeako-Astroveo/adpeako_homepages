import { defineAsyncComponent } from 'vue';

export default {
  name: "BriskVideos",
  theme: {
    primary: "#ff00ff",
    secondary: "#00ffff"
  },
  pages: {
    home: {
      title: "BriskVideos - Ultimate Gaming Experience",
      description: "Dive into the world of premium online gaming with BriskVideos. Play thousands of high-quality games instantly with no downloads.",
      component: () => import('../pages/briskvideos/HomePage.vue')
    },
    privacy: {
      title: "Privacy Policy | BriskVideos",
      description: "Learn about how we handle your data and protect your privacy at BriskVideos.",
      component: () => import('../designs/briskvideos/PrivacyPage.vue')
    },
    notFound: {
      title: "Page Not Found | BriskVideos",
      description: "The page you're looking for doesn't exist or has been moved.",
      content: "Sorry, the page you're looking for doesn't exist or has been moved."
    }
  }
};