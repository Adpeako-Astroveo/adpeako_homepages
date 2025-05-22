const HomePage = () => import('./jewel-video-content/HomePage.vue');
const PrivacyPage = () => import('../pages/PrivacyPage.vue');

export default {
  name: "Jewel Video Content",
  theme: {
    primary: "#9333ea",
    secondary: "#c026d3"
  },
  pages: {
    home: {
      title: "Jewel Video Content - Premium Mobile Entertainment",
      description: "Unlimited access to music, videos, sports, games and audiobooks - all with simple phone billing.",
      component: HomePage
    },
    privacy: {
      title: "Privacy Policy - Jewel Video Content",
      description: "Learn how Jewel Video Content protects your privacy and personal information.",
      content: `
        # Privacy Policy

        ## Introduction
        
        At Jewel Video Content, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile entertainment platform.

        ## Information We Collect
        
        We collect information that you provide directly to us, such as when you create an account, subscribe to our service, contact customer support, or otherwise communicate with us.

        ## How We Use Your Information
        
        We use the information we collect to provide, maintain, and improve our services, to process your subscription and billing through your phone carrier, to communicate with you, and to protect our services and users.

        ## Sharing Your Information
        
        We may share your information with third parties in limited circumstances, including with your mobile phone carrier for billing purposes, with service providers who perform services on our behalf, or when required by law.

        ## Your Choices
        
        You can access and update certain information about your account through your account settings. You can also unsubscribe from marketing communications.

        ## Security
        
        We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.

        ## Changes to This Privacy Policy
        
        We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.

        ## Contact Us
        
        If you have any questions about this Privacy Policy, please contact us at privacy@jewel-video-content.com.
      `,
      component: PrivacyPage
    },
    notFound: {
      title: "Page Not Found - Jewel Video Content",
      description: "The page you are looking for does not exist.",
      content: "Oops! The page you are looking for could not be found. Please check the URL or navigate back to our homepage."
    }
  }
};