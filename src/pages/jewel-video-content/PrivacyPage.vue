<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Privacy sections - for navigation
const sections = ref([
  { id: 'introduction', title: 'Introduction' },
  { id: 'data-collection', title: 'What Data We Collect' },
  { id: 'data-usage', title: 'How We Use Your Data' },
  { id: 'data-sharing', title: 'How We Share Your Data' },
  { id: 'data-rights', title: 'Your Data Protection Rights' },
  { id: 'data-security', title: 'How We Secure Your Data' },
  { id: 'cookies', title: 'Cookies Policy' },
  { id: 'children', title: 'Children\'s Privacy' },
  { id: 'changes', title: 'Changes to This Policy' },
  { id: 'contact', title: 'Contact Us' }
]);

// Active section for mobile navigation
const activeSection = ref('introduction');

const setActiveSection = (sectionId) => {
  activeSection.value = sectionId;
  
  // Scroll to the section
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// Handle scroll to highlight active section
const handleScroll = () => {
  const scrollPosition = window.scrollY;
  
  // Find which section is currently in view
  for (const section of sections.value) {
    const element = document.getElementById(section.id);
    if (element) {
      const offsetTop = element.offsetTop - 100;
      const offsetBottom = offsetTop + element.offsetHeight;
      
      if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
        activeSection.value = section.id;
        break;
      }
    }
  }
};

// Add scroll event listener on mount
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

// Remove scroll event listener on unmount
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div class="privacy-page">
    <section class="hero-section">
      <div class="hero-content">
        <h1>Privacy Policy</h1>
        <p>Last Updated: May 15, 2024</p>
      </div>
      <div class="hero-backdrop"></div>
    </section>

    <div class="privacy-container">
      <!-- Mobile section navigation -->
      <div class="mobile-section-nav">
        <select v-model="activeSection" @change="setActiveSection(activeSection)">
          <option v-for="section in sections" :key="section.id" :value="section.id">
            {{ section.title }}
          </option>
        </select>
      </div>
      
      <div class="privacy-content">
        <!-- Sidebar navigation -->
        <aside class="privacy-nav">
          <ul>
            <li v-for="section in sections" :key="section.id">
              <a 
                :href="`#${section.id}`"
                :class="{ active: activeSection === section.id }"
                @click.prevent="setActiveSection(section.id)"
              >
                {{ section.title }}
              </a>
            </li>
          </ul>
        </aside>
        
        <!-- Privacy content -->
        <main class="privacy-text">
          <section id="introduction" class="privacy-section">
            <h2>Introduction</h2>
            <p>Berg Online Marketing B.V. (hereinafter also referred to as 'we') treats your personal data with great care. This Privacy Statement describes how your personal data is processed when using our streaming entertainment services and visiting our website.</p>
            
            <p>We are responsible for processing your personal data when you visit our website. For any questions you may have about the processing of your personal data, you can reach us at our general postal address or via email:</p>
            
            <address class="contact-info">
              <p><strong>Organization:</strong> Berg Online Marketing B.V.</p>
              <p><strong>Address:</strong> Willem de Zwijgerlaan 150</p>
              <p><strong>Postal Code:</strong> 1056JV</p>
              <p><strong>City:</strong> Amsterdam</p>
              <p><strong>Email:</strong> <a href="mailto:privacy@jewel-video-content.com">privacy@jewel-video-content.com</a></p>
            </address>

            <p>This Privacy Policy applies to all services offered by Jewel Video Content, including our website, mobile applications, and entertainment streaming platforms that link to this policy.</p>
            
            <p>By using our services, you agree to the collection and use of information in accordance with this policy. We will not use or share your information with anyone except as described in this Privacy Policy.</p>
          </section>
          
          <section id="data-collection" class="privacy-section">
            <h2>What Data We Collect</h2>
            
            <h3>Personal Information</h3>
            <p>When you create an account, subscribe to our services, or contact us, we may collect the following types of personal information:</p>
            
            <ul>
              <li>Contact Information: Name, email address, phone number, and billing address</li>
              <li>Account Information: Username, password, and account preferences</li>
              <li>Payment Information: Mobile phone number for carrier billing purposes</li>
              <li>Demographic Information: Age, gender, and location (country/region)</li>
            </ul>
            
            <h3>Usage Data</h3>
            <p>We automatically collect information about how you interact with our services:</p>
            
            <ul>
              <li>Viewing History: Content you watch, listen to, or play</li>
              <li>Device Information: Device type, operating system, browser type, mobile network information, and IP address</li>
              <li>Log Data: Access times, pages viewed, time spent on pages, and other statistics</li>
              <li>Location Data: General location derived from IP address</li>
            </ul>
          </section>
          
          <section id="data-usage" class="privacy-section">
            <h2>How We Use Your Data</h2>
            <p>We use the information we collect for various purposes, including:</p>
            
            <h3>Providing and Improving Our Services</h3>
            <ul>
              <li>Processing transactions and managing your account</li>
              <li>Delivering, maintaining, and improving our content and services</li>
              <li>Personalizing content and recommendations based on your preferences and usage patterns</li>
              <li>Developing new features and functionality</li>
            </ul>
            
            <h3>Communications</h3>
            <ul>
              <li>Sending service-related notifications and updates</li>
              <li>Responding to your inquiries, comments, or concerns</li>
              <li>Sending promotional messages and marketing communications (if you have opted in)</li>
              <li>Conducting surveys and collecting feedback</li>
            </ul>
            
            <h3>Legal and Security Purposes</h3>
            <ul>
              <li>Detecting, preventing, and addressing fraud, security issues, and technical problems</li>
              <li>Protecting our rights, property, and safety, as well as those of our users</li>
              <li>Complying with legal obligations and enforcing our terms of service</li>
            </ul>
            
            <p>We process your data based on the following legal grounds:</p>
            <ul>
              <li>Performance of the contract we have with you (service provision)</li>
              <li>Your consent (for marketing communications and personalization)</li>
              <li>Our legitimate interests (service improvement, security, fraud prevention)</li>
              <li>Compliance with legal obligations</li>
            </ul>
          </section>
          
          <section id="data-sharing" class="privacy-section">
            <h2>How We Share Your Data</h2>
            <p>We do not sell your personal information. However, we may share your data with:</p>
            
            <h3>Service Providers</h3>
            <p>We work with third-party service providers who perform functions on our behalf, such as:</p>
            <ul>
              <li>Payment processors and mobile carriers (for billing purposes)</li>
              <li>Content delivery networks and hosting providers</li>
              <li>Analytics providers and marketing services</li>
              <li>Customer support services</li>
            </ul>
            
            <h3>Business Partners</h3>
            <p>We may share data with content providers, mobile network operators, and other business partners to:</p>
            <ul>
              <li>Provide joint content and services</li>
              <li>Process payments through carrier billing</li>
              <li>Facilitate marketing and promotional activities (with your consent)</li>
            </ul>
            
            <h3>Legal Requirements</h3>
            <p>We may disclose your information if required by law, regulation, legal process, or governmental request, or to protect our rights, property, or safety, or that of our users or the public.</p>
            
            <h3>Corporate Transactions</h3>
            <p>In the event of a merger, acquisition, or sale of all or part of our assets, personal data may be transferred as part of the transaction. We will notify you via email and/or a prominent notice on our website of any change in ownership or uses of your personal information.</p>
            
            <h3>International Data Transfers</h3>
            <p>Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that are different from those in your country. We implement appropriate safeguards to protect your information when it is transferred internationally.</p>
          </section>
          
          <section id="data-rights" class="privacy-section">
            <h2>Your Data Protection Rights</h2>
            <p>Depending on your location, you may have certain rights regarding your personal data, including:</p>
            
            <h3>Access and Portability</h3>
            <p>You have the right to access the personal data we hold about you and to request a copy of your data in a structured, commonly used format.</p>
            
            <h3>Correction</h3>
            <p>You have the right to correct inaccurate or incomplete personal data we hold about you.</p>
            
            <h3>Deletion</h3>
            <p>You have the right to request the deletion of your personal data in certain circumstances.</p>
            
            <h3>Restriction and Objection</h3>
            <p>You have the right to restrict or object to the processing of your personal data in certain circumstances.</p>
            
            <h3>Withdrawal of Consent</h3>
            <p>Where we rely on your consent to process your data, you have the right to withdraw your consent at any time.</p>
            
            <h3>Complaint</h3>
            <p>You have the right to lodge a complaint with a data protection authority if you believe your rights have been violated.</p>
            
            <p>To exercise your rights, please contact us at <a href="mailto:privacy@jewel-video-content.com">privacy@jewel-video-content.com</a>. We will respond to your request within 30 days.</p>
          </section>
          
          <section id="data-security" class="privacy-section">
            <h2>How We Secure Your Data</h2>
            <p>We implement a variety of security measures to protect your personal information:</p>
            <ul>
              <li>Encryption: We use encryption technologies to protect data transmission and storage</li>
              <li>Access Controls: We restrict access to personal data to authorized employees and contractors</li>
              <li>Regular Audits: We conduct regular security assessments and audits</li>
              <li>Incident Response: We have procedures in place to address potential data breaches</li>
            </ul>
            
            <p>While we implement safeguards to protect your information, no security system is impenetrable. We cannot guarantee the security of your data transmitted to our site; any transmission is at your own risk.</p>
            
            <h3>Data Retention</h3>
            <p>We retain your personal data for as long as necessary to provide you with our services and as needed to comply with our legal obligations. When we no longer need to use your data, we will delete it or anonymize it.</p>
          </section>
          
          <section id="cookies" class="privacy-section">
            <h2>Cookies Policy</h2>
            <p>We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and personalize content.</p>
            
            <h3>Types of Cookies We Use</h3>
            <ul>
              <li><strong>Essential Cookies:</strong> Necessary for the website to function properly</li>
              <li><strong>Functional Cookies:</strong> Enable personalized features and remember your preferences</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
              <li><strong>Marketing Cookies:</strong> Track your browsing habits to deliver advertising relevant to your interests</li>
            </ul>
            
            <h3>Your Cookie Choices</h3>
            <p>You can control cookies through your browser settings. Most browsers allow you to refuse or accept cookies and to delete them. Note that if you disable cookies, some features of our service may not function properly.</p>
          </section>
          
          <section id="children" class="privacy-section">
            <h2>Children's Privacy</h2>
            <p>Our services are not directed to children under the age of 16. We do not knowingly collect personal information from children under 16. If you are a parent or guardian and believe we may have collected information about your child, please contact us immediately at <a href="mailto:privacy@jewel-video-content.com">privacy@jewel-video-content.com</a>.</p>
            
            <p>We offer certain content suitable for children, but these are clearly marked within our services and subject to additional protections and limitations on data collection.</p>
          </section>
          
          <section id="changes" class="privacy-section">
            <h2>Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top.</p>
            
            <p>For significant changes, we will provide a more prominent notice, such as an email notification. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.</p>
            
            <p>Your continued use of our services after any changes to this Privacy Policy constitutes your acceptance of the changes.</p>
          </section>
          
          <section id="contact" class="privacy-section">
            <h2>Contact Us</h2>
            <p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:</p>
            
            <address class="contact-info">
              <p><strong>Organization:</strong> Berg Online Marketing B.V.</p>
              <p><strong>Address:</strong> Willem de Zwijgerlaan 150</p>
              <p><strong>Postal Code:</strong> 1056JV</p>
              <p><strong>City:</strong> Amsterdam</p>
              <p><strong>Email:</strong> <a href="mailto:privacy@jewel-video-content.com">privacy@jewel-video-content.com</a></p>
            </address>
            
            <p>We will respond to your inquiry as soon as possible and within 30 days.</p>
          </section>
        </main>
      </div>
    </div>
  </div>
</template>

<style scoped>
.privacy-page {
  min-height: 100vh;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  color: #1a1a1a;
  background-color: #f9fafb;
  padding-top: 64px;
}

/* Hero Section */
.hero-section {
  position: relative;
  height: 300px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
}

.hero-backdrop {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(135deg, #9333ea 0%, #c026d3 100%);
  background-size: cover;
  background-position: center;
  z-index: -1;
}

.hero-content {
  max-width: 800px;
  padding: 2rem;
  position: relative;
  z-index: 1;
}

.hero-section h1 {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  text-shadow: 0 2px 10px rgba(0,0,0,0.2);
}

.hero-section p {
  font-size: 1.1rem;
  opacity: 0.9;
}

/* Privacy Container */
.privacy-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
}

.privacy-content {
  display: flex;
  gap: 3rem;
}

/* Sidebar Navigation */
.privacy-nav {
  width: 250px;
  position: sticky;
  top: 100px;
  align-self: flex-start;
}

.privacy-nav ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.privacy-nav li {
  margin-bottom: 0.75rem;
}

.privacy-nav a {
  display: block;
  padding: 0.75rem 1rem;
  color: #404040;
  text-decoration: none;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  font-size: 0.95rem;
}

.privacy-nav a:hover {
  background: #f5f3ff;
  color: #9333ea;
}

.privacy-nav a.active {
  background: #f5f3ff;
  color: #9333ea;
  font-weight: 600;
  border-left: 3px solid #9333ea;
}

/* Mobile Section Nav */
.mobile-section-nav {
  display: none;
  margin-bottom: 2rem;
}

.mobile-section-nav select {
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  background-color: white;
  color: #404040;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1em;
}

.mobile-section-nav select:focus {
  outline: none;
  border-color: #9333ea;
  box-shadow: 0 0 0 3px rgba(147, 51, 234, 0.1);
}

/* Privacy Text Content */
.privacy-text {
  flex: 1;
  min-width: 0;
}

.privacy-section {
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #e5e7eb;
  scroll-margin-top: 100px;
}

.privacy-section:last-child {
  border-bottom: none;
  margin-bottom: 0;
}

.privacy-section h2 {
  font-size: 2rem;
  font-weight: 700;
  color: #581c87;
  margin-bottom: 1.5rem;
}

.privacy-section h3 {
  font-size: 1.4rem;
  font-weight: 600;
  color: #7e22ce;
  margin: 1.5rem 0 1rem;
}

.privacy-section p {
  margin-bottom: 1rem;
  line-height: 1.7;
  color: #404040;
}

.privacy-section ul, 
.privacy-section ol {
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
}

.privacy-section li {
  margin-bottom: 0.5rem;
  line-height: 1.6;
  color: #404040;
}

.privacy-section a {
  color: #9333ea;
  text-decoration: none;
  transition: all 0.3s ease;
}

.privacy-section a:hover {
  color: #c026d3;
  text-decoration: underline;
}

.contact-info {
  background: #f5f3ff;
  padding: 1.5rem;
  border-radius: 0.75rem;
  margin: 1.5rem 0;
}

.contact-info p {
  margin-bottom: 0.5rem;
}

/* Responsive Design */
@media (max-width: 992px) {
  .privacy-content {
    flex-direction: column;
    gap: 2rem;
  }
  
  .privacy-nav {
    width: 100%;
    position: static;
  }
  
  .privacy-nav ul {
    display: none;
  }
  
  .mobile-section-nav {
    display: block;
  }
}

@media (max-width: 768px) {
  .hero-section {
    height: 250px;
  }
  
  .hero-section h1 {
    font-size: 2.5rem;
  }
  
  .privacy-section h2 {
    font-size: 1.75rem;
  }
  
  .privacy-section h3 {
    font-size: 1.3rem;
  }
}

@media (max-width: 480px) {
  .hero-section h1 {
    font-size: 2rem;
  }
  
  .privacy-container {
    padding: 2rem 1rem;
  }
  
  .privacy-section h2 {
    font-size: 1.5rem;
  }
  
  .privacy-section h3 {
    font-size: 1.2rem;
  }
  
  .contact-info {
    padding: 1rem;
  }
}
</style>