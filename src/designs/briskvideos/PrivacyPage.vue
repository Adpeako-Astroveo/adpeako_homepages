<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Privacy sections - for navigation
const sections = ref([
  { id: 'introduction', title: 'Introduction' },
  { id: 'data-collection', title: 'What Data We Collect' },
  { id: 'data-usage', title: 'How We Use Your Data' },
  { id: 'data-sharing', title: 'Data Sharing and Disclosure' },
  { id: 'security', title: 'Security Measures' },
  { id: 'user-rights', title: 'Your Rights' },
  { id: 'cookies', title: 'Cookies and Tracking' },
  { id: 'children', title: 'Children\'s Privacy' },
  { id: 'changes', title: 'Policy Changes' },
  { id: 'contact', title: 'Contact Information' }
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
      const offsetTop = element.offsetTop - 150;
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
  <div class="briskvideos-privacy">
    <!-- Hero Section -->
    <section class="privacy-hero">
      <div class="hero-content">
        <h1>Privacy Policy</h1>
        <p class="last-updated">Last Updated: May 15, 2024</p>
        <p class="tagline">Your privacy is our priority. Learn how we protect your gaming data.</p>
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
            <p>Adgenius B.V. (hereinafter also referred to as 'we') treats your personal data with great care. This Privacy Statement describes how your personal data is processed when using our streaming entertainment services and visiting our website.</p>
            
            <p>We are responsible for processing your personal data when you visit our website. For any questions you may have about the processing of your personal data, you can reach us at our general postal address or via email:</p>
            
            <div class="contact-info">
              <p><strong>Organization:</strong> Adgenius B.V.</p>
              <p><strong>Address:</strong> Nassaukade 157H</p>
              <p><strong>Postal Code:</strong> 1053Lk</p>
              <p><strong>City:</strong> Amsterdam</p>
              <p><strong>Email:</strong> <a href="mailto:privacy@briskvideos.com">privacy@briskvideos.com</a></p>
            </div>

            <p>This Privacy Policy applies to all BriskVideos services, including our gaming platform, mobile applications, and entertainment streaming services. By using our services, you agree to the collection and use of information in accordance with this policy.</p>
            
            <p>We are committed to protecting your privacy and ensuring transparency in how we handle your personal information. This policy explains what data we collect, how we use it, and your rights regarding your personal information.</p>
          </section>
          
          <section id="data-collection" class="privacy-section">
            <h2>What Data We Collect</h2>
            
            <h3>Account Information</h3>
            <p>When you create a BriskVideos account, we collect:</p>
            <ul>
              <li>Username and display name</li>
              <li>Email address</li>
              <li>Password (encrypted and securely stored)</li>
              <li>Date of birth (to verify age requirements)</li>
              <li>Account preferences and settings</li>
            </ul>
            
            <h3>Gaming Data</h3>
            <p>To provide our gaming services, we collect:</p>
            <ul>
              <li>Game progress, achievements, and statistics</li>
              <li>In-game preferences and settings</li>
              <li>Gameplay sessions and duration</li>
              <li>Leaderboard and competitive rankings</li>
              <li>Social interactions within games (chat, friend lists)</li>
            </ul>
            
            <h3>Device and Technical Information</h3>
            <ul>
              <li>Device type, model, and operating system</li>
              <li>Browser type and version</li>
              <li>IP address and general location information</li>
              <li>Network and connection information</li>
              <li>Performance data and crash reports</li>
            </ul>
            
            <h3>Usage Analytics</h3>
            <ul>
              <li>Pages visited and time spent on our platform</li>
              <li>Games played and session durations</li>
              <li>Click patterns and navigation behavior</li>
              <li>Feature usage and engagement metrics</li>
            </ul>
            
            <h3>Payment Information</h3>
            <p>For premium subscriptions, we collect mobile phone numbers for carrier billing purposes. We do not store credit card information on our servers.</p>
          </section>
          
          <section id="data-usage" class="privacy-section">
            <h2>How We Use Your Data</h2>
            
            <h3>Service Provision</h3>
            <ul>
              <li>Creating and managing your gaming account</li>
              <li>Providing access to games and premium features</li>
              <li>Saving game progress and achievements</li>
              <li>Processing subscription payments through mobile carriers</li>
              <li>Enabling multiplayer features and social interactions</li>
            </ul>
            
            <h3>Personalization and Recommendations</h3>
            <ul>
              <li>Recommending games based on your preferences and play history</li>
              <li>Customizing your gaming experience and interface</li>
              <li>Showing relevant content and features</li>
              <li>Creating personalized leaderboards and challenges</li>
            </ul>
            
            <h3>Communication</h3>
            <ul>
              <li>Sending important service updates and notifications</li>
              <li>Responding to support requests and feedback</li>
              <li>Notifying you about new games and features</li>
              <li>Sending promotional materials (only with your consent)</li>
            </ul>
            
            <h3>Platform Improvement</h3>
            <ul>
              <li>Analyzing usage patterns to improve our services</li>
              <li>Identifying and fixing technical issues</li>
              <li>Developing new features and games</li>
              <li>Optimizing performance and user experience</li>
            </ul>
            
            <h3>Security and Fraud Prevention</h3>
            <ul>
              <li>Protecting against unauthorized access and account security breaches</li>
              <li>Detecting and preventing cheating in games</li>
              <li>Monitoring for suspicious or fraudulent activity</li>
              <li>Enforcing our terms of service and community guidelines</li>
            </ul>
          </section>
          
          <section id="data-sharing" class="privacy-section">
            <h2>Data Sharing and Disclosure</h2>
            
            <p>We do not sell your personal data to third parties. However, we may share your information in the following circumstances:</p>
            
            <h3>Service Providers</h3>
            <p>We work with trusted third-party companies that help us provide our services:</p>
            <ul>
              <li>Mobile carriers for processing subscription payments</li>
              <li>Cloud hosting providers for data storage and service delivery</li>
              <li>Analytics providers to understand service usage</li>
              <li>Customer support platforms to assist with your inquiries</li>
              <li>Security services to protect against fraud and abuse</li>
            </ul>
            
            <h3>Legal Requirements</h3>
            <p>We may disclose your information when required by law or to:</p>
            <ul>
              <li>Comply with legal obligations, court orders, or government requests</li>
              <li>Protect our rights, property, or safety, or that of our users</li>
              <li>Investigate potential violations of our terms of service</li>
              <li>Respond to claims of illegal activity or intellectual property infringement</li>
            </ul>
            
            <h3>Business Transfers</h3>
            <p>In the event of a merger, acquisition, or sale of assets, your personal data may be transferred as part of the transaction. We will notify you via email and/or a prominent notice on our platform about any change in ownership.</p>
            
            <h3>With Your Consent</h3>
            <p>We may share your information with third parties when you have given us explicit consent to do so, such as for promotional partnerships or special gaming events.</p>
          </section>
          
          <section id="security" class="privacy-section">
            <h2>Security Measures</h2>
            
            <p>We take the security of your personal data seriously and implement multiple layers of protection:</p>
            
            <h3>Technical Safeguards</h3>
            <ul>
              <li><strong>Encryption:</strong> All data transmission is encrypted using industry-standard TLS protocols</li>
              <li><strong>Secure Storage:</strong> Personal data is stored in encrypted databases with restricted access</li>
              <li><strong>Network Security:</strong> Our servers are protected by firewalls and intrusion detection systems</li>
              <li><strong>Regular Updates:</strong> We maintain up-to-date security patches and software</li>
            </ul>
            
            <h3>Access Controls</h3>
            <ul>
              <li>Employee access to personal data is limited to those who need it for their job functions</li>
              <li>All employees undergo security training and sign confidentiality agreements</li>
              <li>We use multi-factor authentication for administrative access</li>
              <li>Regular audits are conducted to ensure compliance with security protocols</li>
            </ul>
            
            <h3>Incident Response</h3>
            <p>In the unlikely event of a data breach, we have procedures in place to:</p>
            <ul>
              <li>Quickly identify and contain the breach</li>
              <li>Assess the scope and impact of the incident</li>
              <li>Notify affected users and relevant authorities as required by law</li>
              <li>Take corrective measures to prevent future occurrences</li>
            </ul>
            
            <p>While we strive to protect your personal information, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security but are committed to using industry best practices.</p>
          </section>
          
          <section id="user-rights" class="privacy-section">
            <h2>Your Rights</h2>
            
            <p>You have several rights regarding your personal data under applicable data protection laws:</p>
            
            <h3>Access and Portability</h3>
            <ul>
              <li><strong>Right to Access:</strong> Request a copy of the personal data we hold about you</li>
              <li><strong>Data Portability:</strong> Receive your data in a structured, machine-readable format</li>
              <li><strong>Account Dashboard:</strong> View and manage your data through your account settings</li>
            </ul>
            
            <h3>Correction and Deletion</h3>
            <ul>
              <li><strong>Right to Rectification:</strong> Correct inaccurate or incomplete personal data</li>
              <li><strong>Right to Erasure:</strong> Request deletion of your personal data in certain circumstances</li>
              <li><strong>Account Deletion:</strong> Permanently delete your BriskVideos account and associated data</li>
            </ul>
            
            <h3>Control and Restrictions</h3>
            <ul>
              <li><strong>Right to Restrict Processing:</strong> Limit how we process your data in certain situations</li>
              <li><strong>Right to Object:</strong> Object to processing based on legitimate interests</li>
              <li><strong>Marketing Opt-out:</strong> Unsubscribe from promotional communications at any time</li>
            </ul>
            
            <h3>Exercising Your Rights</h3>
            <p>To exercise any of these rights, please contact us at <a href="mailto:privacy@briskvideos.com">privacy@briskvideos.com</a> or through your account settings. We will respond to your request within 30 days and may ask you to verify your identity before processing your request.</p>
            
            <p>If you're not satisfied with our response, you have the right to lodge a complaint with your local data protection authority.</p>
          </section>
          
          <section id="cookies" class="privacy-section">
            <h2>Cookies and Tracking</h2>
            
            <p>We use cookies and similar technologies to enhance your gaming experience and improve our services.</p>
            
            <h3>Types of Cookies We Use</h3>
            
            <h4>Essential Cookies</h4>
            <p>These cookies are necessary for our platform to function properly and cannot be disabled:</p>
            <ul>
              <li>Authentication cookies to keep you logged in</li>
              <li>Security cookies to protect against fraud</li>
              <li>Load balancing cookies for optimal performance</li>
            </ul>
            
            <h4>Performance Cookies</h4>
            <p>These cookies help us understand how users interact with our platform:</p>
            <ul>
              <li>Analytics cookies to measure usage and improve our services</li>
              <li>Error tracking cookies to identify and fix technical issues</li>
              <li>Performance monitoring cookies to optimize loading times</li>
            </ul>
            
            <h4>Functionality Cookies</h4>
            <p>These cookies enable personalized features and remember your preferences:</p>
            <ul>
              <li>Game settings and preferences</li>
              <li>Language and region preferences</li>
              <li>Theme and display customizations</li>
            </ul>
            
            <h4>Marketing Cookies</h4>
            <p>With your consent, these cookies help us deliver relevant content:</p>
            <ul>
              <li>Interest-based advertising cookies</li>
              <li>Social media integration cookies</li>
              <li>Promotional campaign tracking cookies</li>
            </ul>
            
            <h3>Managing Your Cookie Preferences</h3>
            <p>You can control cookie settings through your browser or our cookie preference center. Note that disabling certain cookies may limit the functionality of our gaming platform.</p>
            
            <h3>Third-Party Tracking</h3>
            <p>We may use third-party analytics services like Google Analytics to understand user behavior. These services have their own privacy policies governing their use of data.</p>
          </section>
          
          <section id="children" class="privacy-section">
            <h2>Children's Privacy</h2>
            
            <p>BriskVideos is committed to protecting the privacy of children. Our platform has special considerations for younger users:</p>
            
            <h3>Age Requirements</h3>
            <ul>
              <li>Users must be at least 13 years old to create an account</li>
              <li>Users under 18 require parental consent for subscription services</li>
              <li>We verify age during the registration process</li>
            </ul>
            
            <h3>Parental Controls</h3>
            <ul>
              <li>Parents can monitor their child's gaming activity</li>
              <li>Time limits and content restrictions can be set</li>
              <li>In-game communication can be disabled for minors</li>
              <li>Purchase restrictions prevent unauthorized transactions</li>
            </ul>
            
            <h3>Data Collection for Minors</h3>
            <p>For users under 18, we:</p>
            <ul>
              <li>Collect only the minimum data necessary to provide our services</li>
              <li>Do not use personal data for behavioral advertising</li>
              <li>Obtain parental consent before collecting additional information</li>
              <li>Allow parents to review, update, or delete their child's information</li>
            </ul>
            
            <p>If you believe we have collected information from a child under 13 without proper consent, please contact us immediately at <a href="mailto:privacy@briskvideos.com">privacy@briskvideos.com</a>.</p>
          </section>
          
          <section id="changes" class="privacy-section">
            <h2>Changes to This Policy</h2>
            
            <p>We may update this Privacy Policy periodically to reflect changes in our services, legal requirements, or business practices. When we make changes, we will:</p>
            
            <ul>
              <li>Update the "Last Updated" date at the top of this policy</li>
              <li>Notify you through email or in-platform notifications for significant changes</li>
              <li>Provide advance notice for changes that affect your rights</li>
              <li>Allow you to review changes before they take effect</li>
            </ul>
            
            <p>We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information. Your continued use of BriskVideos after any changes constitutes your acceptance of the updated policy.</p>
            
            <h3>Version History</h3>
            <p>Previous versions of this policy are available upon request. Contact us if you need access to historical versions for legal or compliance purposes.</p>
          </section>
          
          <section id="contact" class="privacy-section">
            <h2>Contact Information</h2>
            
            <p>If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, we're here to help:</p>
            
            <div class="contact-methods">
              <div class="contact-method">
                <h4>📧 Email Support</h4>
                <p>For privacy-related inquiries: <a href="mailto:privacy@briskvideos.com">privacy@briskvideos.com</a></p>
                <p>For general support: <a href="mailto:support@briskvideos.com">support@briskvideos.com</a></p>
              </div>
              
              <div class="contact-method">
                <h4>📮 Postal Address</h4>
                <address>
                  Adgenius B.V.<br>
                  Nassaukade 157H<br>
                  1053Lk Amsterdam<br>
                  Netherlands
                </address>
              </div>
              
              <div class="contact-method">
                <h4>⚡ Response Time</h4>
                <p>We aim to respond to all privacy-related inquiries within 72 hours and resolve requests within 30 days as required by law.</p>
              </div>
            </div>
            
            <h3>Data Protection Officer</h3>
            <p>For complex privacy matters or formal complaints, you can contact our Data Protection Officer directly at <a href="mailto:dpo@briskvideos.com">dpo@briskvideos.com</a>.</p>
            
            <h3>Regulatory Authority</h3>
            <p>If you're not satisfied with our response to your privacy concerns, you have the right to lodge a complaint with the Dutch Data Protection Authority (Autoriteit Persoonsgegevens) or your local data protection authority.</p>
          </section>
        </main>
      </div>
    </div>
  </div>
</template>

<style scoped>
.briskvideos-privacy {
  background-color: #0a0a0a;
  color: #ffffff;
  min-height: 100vh;
  font-family: 'Inter', 'Roboto', sans-serif;
  padding-top: 64px;
}

/* Hero Section */
.privacy-hero {
  position: relative;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
}

.hero-backdrop {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(135deg, rgba(255, 0, 255, 0.3) 0%, rgba(0, 255, 255, 0.3) 100%), url('https://images.pexels.com/photos/5797991/pexels-photo-5797991.jpeg');
  background-size: cover;
  background-position: center;
  z-index: 1;
}

.hero-backdrop::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(10, 10, 10, 0.7);
  z-index: 2;
}

.hero-content {
  position: relative;
  z-index: 3;
  max-width: 800px;
  padding: 2rem;
}

.privacy-hero h1 {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, #ff00ff, #00ffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 20px rgba(255, 0, 255, 0.7);
}

.last-updated {
  color: #cccccc;
  font-size: 1rem;
  margin-bottom: 1rem;
}

.tagline {
  color: #e0e0e0;
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
}

/* Privacy Container */
.privacy-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 3rem 2rem;
}

.privacy-content {
  display: flex;
  gap: 3rem;
}

/* Sidebar Navigation */
.privacy-nav {
  width: 280px;
  position: sticky;
  top: 120px;
  align-self: flex-start;
  background: #1a1a1a;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.privacy-nav ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.privacy-nav li {
  margin-bottom: 0.5rem;
}

.privacy-nav a {
  display: block;
  padding: 0.75rem 1rem;
  color: #cccccc;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.3s ease;
  font-size: 0.95rem;
  border-left: 3px solid transparent;
}

.privacy-nav a:hover {
  background: rgba(255, 0, 255, 0.1);
  color: #ffffff;
  border-left-color: #ff00ff;
}

.privacy-nav a.active {
  background: linear-gradient(90deg, rgba(255, 0, 255, 0.2), rgba(0, 255, 255, 0.2));
  color: #ffffff;
  font-weight: 600;
  border-left-color: #00ffff;
}

/* Mobile Section Nav */
.mobile-section-nav {
  display: none;
  margin-bottom: 2rem;
}

.mobile-section-nav select {
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  background-color: #1a1a1a;
  color: #ffffff;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1em;
}

.mobile-section-nav select:focus {
  outline: none;
  border-color: #00ffff;
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
}

/* Privacy Text Content */
.privacy-text {
  flex: 1;
  min-width: 0;
  background: #1a1a1a;
  border-radius: 10px;
  padding: 2.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.privacy-section {
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  scroll-margin-top: 120px;
}

.privacy-section:last-child {
  border-bottom: none;
  margin-bottom: 0;
}

.privacy-section h2 {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: linear-gradient(90deg, #ff00ff, #00ffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
}

.privacy-section h2::after {
  content: '';
  position: absolute;
  bottom: -0.5rem;
  left: 0;
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #ff00ff, #00ffff);
  border-radius: 2px;
}

.privacy-section h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #00ffff;
  margin: 2rem 0 1rem;
}

.privacy-section h4 {
  font-size: 1.2rem;
  font-weight: 600;
  color: #ff00ff;
  margin: 1.5rem 0 0.75rem;
}

.privacy-section p {
  margin-bottom: 1.25rem;
  line-height: 1.7;
  color: #e0e0e0;
  font-size: 1rem;
}

.privacy-section ul, 
.privacy-section ol {
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
}

.privacy-section li {
  margin-bottom: 0.75rem;
  line-height: 1.6;
  color: #cccccc;
}

.privacy-section li strong {
  color: #00ffff;
}

.privacy-section a {
  color: #00ffff;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.privacy-section a:hover {
  color: #ff00ff;
  text-decoration: underline;
  text-shadow: 0 0 5px rgba(255, 0, 255, 0.5);
}

/* Contact Info Box */
.contact-info {
  background: rgba(255, 0, 255, 0.1);
  border: 1px solid rgba(255, 0, 255, 0.3);
  border-radius: 10px;
  padding: 1.5rem;
  margin: 1.5rem 0;
}

.contact-info p {
  margin-bottom: 0.5rem;
  color: #ffffff;
}

/* Contact Methods */
.contact-methods {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.contact-method {
  background: #0f0f0f;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.contact-method:hover {
  border-color: rgba(0, 255, 255, 0.5);
  box-shadow: 0 5px 15px rgba(0, 255, 255, 0.1);
  transform: translateY(-3px);
}

.contact-method h4 {
  color: #00ffff;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.contact-method p, 
.contact-method address {
  color: #cccccc;
  line-height: 1.6;
  font-style: normal;
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
    order: 2;
  }
  
  .privacy-nav ul {
    display: none;
  }
  
  .mobile-section-nav {
    display: block;
  }
  
  .privacy-text {
    order: 1;
  }
}

@media (max-width: 768px) {
  .privacy-hero {
    height: 300px;
  }
  
  .privacy-hero h1 {
    font-size: 2.5rem;
  }
  
  .tagline {
    font-size: 1rem;
  }
  
  .privacy-container {
    padding: 2rem 1.5rem;
  }
  
  .privacy-text {
    padding: 2rem;
  }
  
  .privacy-section h2 {
    font-size: 1.8rem;
  }
  
  .privacy-section h3 {
    font-size: 1.3rem;
  }
  
  .contact-methods {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .privacy-hero h1 {
    font-size: 2rem;
  }
  
  .privacy-container {
    padding: 1.5rem 1rem;
  }
  
  .privacy-text {
    padding: 1.5rem;
  }
  
  .privacy-section h2 {
    font-size: 1.6rem;
  }
  
  .privacy-section h3 {
    font-size: 1.2rem;
  }
  
  .privacy-section h4 {
    font-size: 1.1rem;
  }
  
  .contact-info {
    padding: 1rem;
  }
  
  .contact-method {
    padding: 1rem;
  }
}
</style>