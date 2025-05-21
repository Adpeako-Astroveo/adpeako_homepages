const iqchampionhubDesign = {
  name: "IQ Champion Hub",
  theme: {
    primary: "#6C63FF",
    secondary: "#FF6584",
    accent: "#44C7B0",
    background: "#FFFFFF",
    text: "#333333"
  },
  pages: {
    home: {
      title: "IQ Champion Hub - Mobile Entertainment Destination",
      description: "Access premium music, videos, sports, games, and audiobooks on your mobile. Pay directly through your phone bill.",
      component: () => import('../designs/iqchampionhub/HomePage.vue')
    },
    privacy: {
      title: "Privacy Policy - IQ Champion Hub",
      description: "How we handle your data and protect your privacy at IQ Champion Hub.",
      content: "Our Privacy Policy will be available soon.",
      component: () => import('../designs/iqchampionhub/PrivacyPage.vue')
    },
    notFound: {
      title: "Page Not Found - IQ Champion Hub",
      description: "The page you're looking for doesn't exist.",
      content: "Sorry, the page you're looking for cannot be found. Please check the URL or go back to the homepage."
    }
  }
};

export default iqchampionhubDesign;