<template>
  <div class="briskvideos-privacy">
    <div class="privacy-container">
      <h1>Privacy Policy</h1>
      
      <div class="policy-navigation">
        <button 
          v-for="section in sections" 
          :key="section.id"
          @click="scrollToSection(section.id)"
          class="nav-button"
          :class="{ 'active': activeSection === section.id }"
        >
          {{ section.title }}
        </button>
      </div>
      
      <div class="policy-content">
        <section id="introduction" class="policy-section">
          <h2>Introduction</h2>
          <div class="content-wrapper">
            <p>Welcome to BriskVideos. We are committed to protecting your privacy and handling your data with transparency. This Privacy Policy explains how we collect, use, and safeguard your information when you use our website and services.</p>
            <p>By accessing or using BriskVideos, you agree to the collection and use of information in accordance with this policy. We will not use or share your information with anyone except as described in this Privacy Policy.</p>
          </div>
        </section>
        
        <section id="information-collection" class="policy-section">
          <h2>Information We Collect</h2>
          <div class="content-wrapper">
            <h3>Personal Information</h3>
            <p>We may collect personally identifiable information, including but not limited to:</p>
            <ul>
              <li>Email address</li>
              <li>First and last name</li>
              <li>Phone number</li>
              <li>Address</li>
              <li>Gaming preferences and history</li>
            </ul>
            
            <h3>Usage Data</h3>
            <p>We may also collect information on how the service is accessed and used. This data may include:</p>
            <ul>
              <li>Your computer's IP address</li>
              <li>Browser type and version</li>
              <li>Pages of our service that you visit</li>
              <li>Time and date of your visit</li>
              <li>Time spent on those pages</li>
              <li>Game statistics and preferences</li>
              <li>Other diagnostic data</li>
            </ul>
          </div>
        </section>
        
        <section id="data-usage" class="policy-section">
          <h2>How We Use Your Data</h2>
          <div class="content-wrapper">
            <p>BriskVideos uses the collected data for various purposes:</p>
            <ul>
              <li>To provide and maintain our service</li>
              <li>To notify you about changes to our service</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information so that we can improve our service</li>
              <li>To monitor the usage of our service</li>
              <li>To detect, prevent and address technical issues</li>
              <li>To personalize your gaming experience</li>
              <li>To offer you new games based on your preferences</li>
            </ul>
          </div>
        </section>
        
        <section id="data-sharing" class="policy-section">
          <h2>Sharing of Data</h2>
          <div class="content-wrapper">
            <p>We may share your personal information in the following situations:</p>
            <ul>
              <li><strong>With Service Providers:</strong> We may share your information with third-party service providers to facilitate our service, provide the service on our behalf, perform service-related activities, or assist us in analyzing how our service is used.</li>
              <li><strong>For Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
              <li><strong>With Your Consent:</strong> We may disclose your personal information for any other purpose with your consent.</li>
              <li><strong>With Other Users:</strong> When you share personal information or otherwise interact in public areas with other users, such information may be viewed by all users and may be publicly distributed.</li>
            </ul>
          </div>
        </section>
        
        <section id="cookies" class="policy-section">
          <h2>Cookies and Tracking</h2>
          <div class="content-wrapper">
            <p>We use cookies and similar tracking technologies to track activity on our service and hold certain information.</p>
            <p>Cookies are files with a small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device.</p>
            <p>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.</p>
            <p>Examples of Cookies we use:</p>
            <ul>
              <li><strong>Session Cookies:</strong> We use Session Cookies to operate our service.</li>
              <li><strong>Preference Cookies:</strong> We use Preference Cookies to remember your preferences and various settings.</li>
              <li><strong>Security Cookies:</strong> We use Security Cookies for security purposes.</li>
              <li><strong>Advertising Cookies:</strong> Advertising Cookies are used to serve you with advertisements that may be relevant to you and your interests.</li>
            </ul>
          </div>
        </section>
        
        <section id="security" class="policy-section">
          <h2>Data Security</h2>
          <div class="content-wrapper">
            <p>The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee its absolute security.</p>
            <p>We implement various security measures when a user enters, submits, or accesses their information to maintain the safety of your personal data. All transactions are processed through a secure gateway provider and are not stored or processed on our servers.</p>
          </div>
        </section>
        
        <section id="your-rights" class="policy-section">
          <h2>Your Data Protection Rights</h2>
          <div class="content-wrapper">
            <p>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>
            <ul>
              <li><strong>The right to access:</strong> You have the right to request copies of your personal data from us.</li>
              <li><strong>The right to rectification:</strong> You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.</li>
              <li><strong>The right to erasure:</strong> You have the right to request that we erase your personal data, under certain conditions.</li>
              <li><strong>The right to restrict processing:</strong> You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
              <li><strong>The right to object to processing:</strong> You have the right to object to our processing of your personal data, under certain conditions.</li>
              <li><strong>The right to data portability:</strong> You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
            </ul>
            <p>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>
          </div>
        </section>
        
        <section id="childrens-privacy" class="policy-section">
          <h2>Children's Privacy</h2>
          <div class="content-wrapper">
            <p>Our service is not intended for use by children under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If we discover that a child under 13 has provided us with personal information, we immediately delete this information from our servers.</p>
            <p>If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we can take necessary actions.</p>
          </div>
        </section>
        
        <section id="changes" class="policy-section">
          <h2>Changes to This Privacy Policy</h2>
          <div class="content-wrapper">
            <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.</p>
            <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
            <p>Last Updated: May 15, 2024</p>
          </div>
        </section>
        
        <section id="contact" class="policy-section">
          <h2>Contact Us</h2>
          <div class="content-wrapper">
            <p>If you have any questions about this Privacy Policy, please contact us:</p>
            <ul class="contact-info">
              <li>By email: privacy@briskvideos.com</li>
              <li>By visiting this page on our website: www.briskvideos.com/contact</li>
              <li>By phone: +1 (555) 123-4567</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// Define the policy sections
const sections = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'information-collection', title: 'Information Collection' },
  { id: 'data-usage', title: 'Data Usage' },
  { id: 'data-sharing', title: 'Data Sharing' },
  { id: 'cookies', title: 'Cookies & Tracking' },
  { id: 'security', title: 'Security' },
  { id: 'your-rights', title: 'Your Rights' },
  { id: 'childrens-privacy', title: "Children's Privacy" },
  { id: 'changes', title: 'Changes' },
  { id: 'contact', title: 'Contact Us' }
];

// Track active section
const activeSection = ref('introduction');

// Function to scroll to a specific section
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    activeSection.value = sectionId;
  }
};

// Function to update active section based on scroll position
const handleScroll = () => {
  const sectionElements = sections.map(section => ({
    id: section.id,
    element: document.getElementById(section.id)
  })).filter(section => section.element !== null);
  
  // Find the section that is currently visible
  const currentSection = sectionElements.find(section => {
    const rect = section.element.getBoundingClientRect();
    return rect.top <= 150 && rect.bottom > 150;
  });
  
  if (currentSection) {
    activeSection.value = currentSection.id;
  }
};

// Add scroll event listener when component mounts
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

// Remove scroll event listener when component unmounts
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.briskvideos-privacy {
  background-color: #0a0a0a;
  color: #ffffff;
  min-height: 100vh;
  font-family: 'Inter', 'Roboto', sans-serif;
  padding: 100px 0 60px;
}

.privacy-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

h1 {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 3rem;
  text-align: center;
  background: linear-gradient(to right, #ff00ff, #00ffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 10px rgba(255, 0, 255, 0.3);
}

.policy-navigation {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 3rem;
  justify-content: center;
  position: sticky;
  top: 70px;
  background: rgba(10, 10, 10, 0.95);
  padding: 1rem;
  border-radius: 10px;
  z-index: 10;
  backdrop-filter: blur(10px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.nav-button {
  background: #1a1a1a;
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  padding: 0.5rem 1.2rem;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.nav-button:hover {
  background: #2a2a2a;
  border-color: rgba(0, 255, 255, 0.5);
}

.nav-button.active {
  background: linear-gradient(90deg, rgba(255, 0, 255, 0.2), rgba(0, 255, 255, 0.2));
  border-color: rgba(0, 255, 255, 0.7);
  color: #00ffff;
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
}

.policy-content {
  margin-top: 3rem;
}

.policy-section {
  margin-bottom: 4rem;
  scroll-margin-top: 150px;
}

.policy-section h2 {
  font-size: 2.2rem;
  margin-bottom: 1.5rem;
  color: #00ffff;
  position: relative;
  display: inline-block;
}

.policy-section h2::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -10px;
  width: 100%;
  height: 3px;
  background: linear-gradient(to right, #ff00ff, transparent);
  border-radius: 3px;
}

.content-wrapper {
  background: #1a1a1a;
  padding: 2rem;
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.policy-section h3 {
  font-size: 1.5rem;
  color: #ff00ff;
  margin: 1.5rem 0 1rem;
}

.policy-section p {
  margin-bottom: 1.5rem;
  line-height: 1.7;
  color: #cccccc;
}

.policy-section ul {
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
}

.policy-section li {
  margin-bottom: 0.5rem;
  color: #cccccc;
}

.contact-info {
  list-style-type: none;
  padding-left: 0;
}

.contact-info li {
  margin-bottom: 0.75rem;
  color: #ffffff;
}

/* Responsive design */
@media (max-width: 768px) {
  h1 {
    font-size: 2.5rem;
  }

  .policy-navigation {
    padding: 0.75rem;
  }

  .nav-button {
    padding: 0.4rem 1rem;
    font-size: 0.8rem;
  }

  .policy-section h2 {
    font-size: 1.8rem;
  }

  .policy-section h3 {
    font-size: 1.3rem;
  }

  .content-wrapper {
    padding: 1.5rem;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 2rem;
  }

  .policy-navigation {
    flex-direction: column;
    align-items: stretch;
  }

  .nav-button {
    text-align: left;
    border-radius: 8px;
    margin-bottom: 0.3rem;
  }

  .policy-section h2 {
    font-size: 1.5rem;
  }
  
  .policy-section {
    margin-bottom: 3rem;
  }
}
</style>