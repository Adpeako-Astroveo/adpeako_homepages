<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

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
  { id: 'changes', title: 'Changes to This Policy' },
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
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <h1>Privacy Policy</h1>
        <p class="last-updated">Last Updated: December 10, 2024</p>
        <p class="hero-subtitle">Your privacy is important to us. Learn how we protect and use your data.</p>
      </div>
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
          <div class="nav-title">Table of Contents</div>
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
              <p><strong>Postal Code:</strong> 1053LK</p>
              <p><strong>City:</strong> Amsterdam</p>
              <p><strong>Email:</strong> <a href="mailto:privacy@funpuzzlepalace.com">privacy@funpuzzlepalace.com</a></p>
            </div>

            <p>This Privacy Policy applies to all services offered by Fun Puzzle Palace, including our website, mobile applications, and premium gaming platform that link to this policy.</p>
            
            <p>By using our services, you agree to the collection and use of information in accordance with this policy. We are committed to being transparent about how we collect, use, and share your information.</p>
          </section>
          
          <section id="data-collection" class="privacy-section">
            <h2>What Data We Collect</h2>
            
            <h3>Information You Provide</h3>
            <p>When you register for an account, subscribe to our services, or contact us, we collect information you provide directly, including:</p>
            
            <ul>
              <li><strong>Account Information:</strong> Name, email address, username, password, and date of birth</li>
              <li><strong>Contact Information:</strong> Phone number for account verification and customer support</li>
              <li><strong>Payment Information:</strong> Mobile phone number for carrier billing (we do not store credit card information)</li>
              <li><strong>Profile Information:</strong> Gaming preferences, favorite categories, and account settings</li>
              <li><strong>Communication Data:</strong> Messages you send to us through support channels or feedback forms</li>
            </ul>
            
            <h3>Information We Collect Automatically</h3>
            <p>When you use our services, we automatically collect certain information:</p>
            
            <ul>
              <li><strong>Usage Data:</strong> Games played, time spent playing, scores, achievements, and progress</li>
              <li><strong>Device Information:</strong> Device type, operating system, browser version, mobile network information, and unique device identifiers</li>
              <li><strong>Location Data:</strong> General location information based on IP address (country/region level)</li>
              <li><strong>Log Data:</strong> Server logs including IP addresses, access times, pages viewed, and error reports</li>
              <li><strong>Performance Data:</strong> App performance metrics and crash reports to improve our services</li>
            </ul>

            <h3>Information from Third Parties</h3>
            <p>We may receive information about you from third parties, including:</p>
            <ul>
              <li>Mobile carriers for payment processing and account verification</li>
              <li>Social media platforms if you choose to connect your accounts</li>
              <li>Analytics providers who help us understand how our services are used</li>
            </ul>
          </section>
          
          <section id="data-usage" class="privacy-section">
            <h2>How We Use Your Data</h2>
            <p>We use the information we collect for various legitimate purposes:</p>
            
            <h3>Service Provision and Account Management</h3>
            <ul>
              <li>Creating and managing your user account</li>
              <li>Processing payments and managing subscriptions through mobile carrier billing</li>
              <li>Providing access to our premium gaming library</li>
              <li>Saving your game progress and preferences across devices</li>
              <li>Providing customer support and responding to your inquiries</li>
            </ul>
            
            <h3>Personalization and Recommendations</h3>
            <ul>
              <li>Recommending games based on your playing history and preferences</li>
              <li>Personalizing your gaming experience and interface</li>
              <li>Showing relevant content and promotions</li>
              <li>Creating customized gameplay experiences</li>
            </ul>
            
            <h3>Communication and Marketing</h3>
            <ul>
              <li>Sending service-related notifications and updates</li>
              <li>Informing you about new games, features, and promotions (with your consent)</li>
              <li>Conducting surveys and collecting feedback to improve our services</li>
              <li>Sending newsletters and gaming tips (if you opt in)</li>
            </ul>
            
            <h3>Security and Legal Compliance</h3>
            <ul>
              <li>Detecting and preventing fraud, cheating, and abuse</li>
              <li>Protecting the security and integrity of our services</li>
              <li>Enforcing our terms of service and community guidelines</li>
              <li>Complying with legal obligations and regulatory requirements</li>
            </ul>
            
            <h3>Analytics and Improvement</h3>
            <ul>
              <li>Analyzing usage patterns to improve game design and user experience</li>
              <li>Conducting research and development for new features</li>
              <li>Monitoring service performance and identifying technical issues</li>
              <li>Creating anonymized reports and statistics</li>
            </ul>
          </section>
          
          <section id="data-sharing" class="privacy-section">
            <h2>Data Sharing and Disclosure</h2>
            <p>We do not sell your personal information to third parties. However, we may share your information in the following circumstances:</p>
            
            <h3>Service Providers and Partners</h3>
            <p>We work with trusted third-party service providers who help us operate our business:</p>
            <ul>
              <li><strong>Payment Processors:</strong> Mobile carriers and payment gateways for processing subscriptions</li>
              <li><strong>Cloud Services:</strong> Hosting providers and content delivery networks</li>
              <li><strong>Analytics Providers:</strong> Companies that help us understand user behavior and improve our services</li>
              <li><strong>Customer Support:</strong> Third-party support platforms to provide better customer service</li>
              <li><strong>Game Developers:</strong> Partners who create content for our platform (limited data sharing for game improvement)</li>
            </ul>
            
            <h3>Legal Requirements and Safety</h3>
            <p>We may disclose your information when we have a good faith belief that disclosure is necessary to:</p>
            <ul>
              <li>Comply with applicable laws, regulations, legal processes, or governmental requests</li>
              <li>Protect and defend our rights, property, or safety, or that of our users or the public</li>
              <li>Detect, prevent, or otherwise address fraud, security issues, or technical problems</li>
              <li>Enforce our Terms of Service or investigate potential violations</li>
            </ul>
            
            <h3>Business Transfers</h3>
            <p>In the event of a merger, acquisition, bankruptcy, or sale of all or part of our assets, personal information may be transferred to the successor entity. We will provide notice of such transfer and any changes to this privacy policy.</p>
            
            <h3>Aggregated and Anonymized Data</h3>
            <p>We may share aggregated, anonymized, or de-identified information that cannot reasonably be used to identify you for research, analytics, or business purposes.</p>
          </section>
          
          <section id="security" class="privacy-section">
            <h2>Security Measures</h2>
            <p>We take the security of your personal data seriously and implement comprehensive security measures to protect your information:</p>
            
            <h3>Technical Safeguards</h3>
            <ul>
              <li><strong>Encryption:</strong> We use industry-standard encryption to protect data in transit and at rest</li>
              <li><strong>Secure Infrastructure:</strong> Our systems are hosted on secure, regularly audited cloud platforms</li>
              <li><strong>Access Controls:</strong> We implement strict access controls and authentication measures</li>
              <li><strong>Network Security:</strong> Firewalls and intrusion detection systems protect our networks</li>
              <li><strong>Data Backup:</strong> Regular, encrypted backups ensure data availability and recovery</li>
            </ul>
            
            <h3>Operational Safeguards</h3>
            <ul>
              <li><strong>Employee Training:</strong> All staff receive regular training on data protection and privacy</li>
              <li><strong>Background Checks:</strong> We conduct thorough background checks for employees with data access</li>
              <li><strong>Incident Response:</strong> We have procedures in place to quickly respond to potential security incidents</li>
              <li><strong>Regular Audits:</strong> We conduct regular security assessments and penetration testing</li>
            </ul>
            
            <h3>Data Breach Notification</h3>
            <p>In the unlikely event of a data breach that may affect your personal information, we will notify you and relevant authorities as required by law, typically within 72 hours of becoming aware of the breach.</p>
            
            <p><strong>Important Note:</strong> While we implement robust security measures, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security, but we continuously work to protect your information using industry best practices.</p>
          </section>
          
          <section id="user-rights" class="privacy-section">
            <h2>Your Rights</h2>
            <p>Depending on your location and applicable laws, you may have the following rights regarding your personal data:</p>
            
            <h3>Access and Portability</h3>
            <ul>
              <li><strong>Right to Access:</strong> You can request information about what personal data we hold about you</li>
              <li><strong>Data Portability:</strong> You can request a copy of your data in a structured, machine-readable format</li>
            </ul>
            
            <h3>Correction and Deletion</h3>
            <ul>
              <li><strong>Right to Rectification:</strong> You can ask us to correct inaccurate or incomplete personal data</li>
              <li><strong>Right to Erasure:</strong> You can request deletion of your personal data in certain circumstances</li>
              <li><strong>Right to Be Forgotten:</strong> You can ask us to remove your information from our systems</li>
            </ul>
            
            <h3>Control and Restriction</h3>
            <ul>
              <li><strong>Right to Restrict Processing:</strong> You can ask us to limit how we process your data</li>
              <li><strong>Right to Object:</strong> You can object to processing for direct marketing or legitimate interests</li>
              <li><strong>Right to Withdraw Consent:</strong> You can withdraw consent for data processing at any time</li>
            </ul>
            
            <h3>How to Exercise Your Rights</h3>
            <p>To exercise any of these rights, please contact us at <a href="mailto:privacy@funpuzzlepalace.com">privacy@funpuzzlepalace.com</a> or use the contact information provided below. We will respond to your request within 30 days.</p>
            
            <p>You also have the right to lodge a complaint with a data protection authority if you believe your privacy rights have been violated.</p>
          </section>
          
          <section id="cookies" class="privacy-section">
            <h2>Cookies and Tracking</h2>
            <p>We use cookies and similar tracking technologies to enhance your experience, analyze usage, and provide personalized content.</p>
            
            <h3>Types of Cookies We Use</h3>
            <div class="cookie-types">
              <div class="cookie-type">
                <h4>Essential Cookies</h4>
                <p>Required for basic website functionality, account authentication, and security features. These cannot be disabled.</p>
              </div>
              
              <div class="cookie-type">
                <h4>Functional Cookies</h4>
                <p>Remember your preferences, settings, and enable enhanced features like game saves and personalization.</p>
              </div>
              
              <div class="cookie-type">
                <h4>Analytics Cookies</h4>
                <p>Help us understand how visitors interact with our website and games to improve user experience and performance.</p>
              </div>
              
              <div class="cookie-type">
                <h4>Marketing Cookies</h4>
                <p>Track your browsing habits to deliver relevant advertisements and measure campaign effectiveness (with your consent).</p>
              </div>
            </div>
            
            <h3>Managing Your Cookie Preferences</h3>
            <p>You can control and delete cookies through your browser settings. Most browsers automatically accept cookies, but you can modify your browser settings to decline cookies if you prefer. Please note that disabling certain cookies may limit the functionality of our services.</p>
            
            <h3>Third-Party Tracking</h3>
            <p>We may use third-party analytics services (such as Google Analytics) to help understand how our services are used. These services may use cookies and collect data according to their own privacy policies.</p>
          </section>
          
          <section id="children" class="privacy-section">
            <h2>Children's Privacy</h2>
            <p>We are committed to protecting the privacy of children who use our services. Our approach to children's data is designed with extra care and protection:</p>
            
            <h3>Age Requirements</h3>
            <ul>
              <li>Our services are intended for users 13 years of age and older</li>
              <li>We do not knowingly collect personal information from children under 13</li>
              <li>Users between 13-17 should have parental consent before using our services</li>
            </ul>
            
            <h3>Parental Controls</h3>
            <p>For users under 18, we provide:</p>
            <ul>
              <li>Enhanced privacy settings and data collection limitations</li>
              <li>Parental oversight tools and account controls</li>
              <li>Content filtering and age-appropriate game recommendations</li>
              <li>Restricted communication features with other users</li>
            </ul>
            
            <h3>If We Discover Data from Children Under 13</h3>
            <p>If we become aware that we have collected personal information from a child under 13 without verification of parental consent, we will take steps to remove that information from our servers immediately.</p>
            
            <p>If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately at <a href="mailto:privacy@funpuzzlepalace.com">privacy@funpuzzlepalace.com</a>.</p>
          </section>
          
          <section id="changes" class="privacy-section">
            <h2>Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors.</p>
            
            <h3>How We Notify You of Changes</h3>
            <ul>
              <li><strong>Minor Changes:</strong> We will post the updated policy on our website with a new "Last Updated" date</li>
              <li><strong>Material Changes:</strong> We will provide additional notice through email, in-app notifications, or prominent website notices</li>
              <li><strong>Legal Requirement Changes:</strong> We may implement changes immediately when required by law</li>
            </ul>
            
            <h3>Your Acceptance of Changes</h3>
            <p>Your continued use of our services after any changes to this Privacy Policy constitutes your acceptance of such changes. If you do not agree with the updated policy, you should discontinue use of our services.</p>
            
            <p>We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information and to understand your privacy rights.</p>
            
            <h3>Historical Versions</h3>
            <p>If you would like to review previous versions of this Privacy Policy, please contact us at <a href="mailto:privacy@funpuzzlepalace.com">privacy@funpuzzlepalace.com</a>.</p>
          </section>
          
          <section id="contact" class="privacy-section">
            <h2>Contact Information</h2>
            <p>If you have questions, concerns, or requests related to this Privacy Policy or our data practices, we want to hear from you. You can contact us through the following methods:</p>
            
            <div class="contact-methods">
              <div class="contact-method">
                <h3>Email</h3>
                <p>For privacy-related inquiries:</p>
                <p><strong><a href="mailto:privacy@funpuzzlepalace.com">privacy@funpuzzlepalace.com</a></strong></p>
                
                <p>For general support:</p>
                <p><strong><a href="mailto:support@funpuzzlepalace.com">support@funpuzzlepalace.com</a></strong></p>
              </div>
              
              <div class="contact-method">
                <h3>Postal Address</h3>
                <address class="company-address">
                  <strong>Adgenius B.V.</strong><br>
                  Nassaukade 157H<br>
                  1053LK Amsterdam<br>
                  Netherlands
                </address>
              </div>
              
              <div class="contact-method">
                <h3>Response Timeline</h3>
                <p>We aim to respond to all privacy-related inquiries within <strong>30 days</strong> of receipt. For urgent matters related to data security or children's privacy, we will respond within <strong>5 business days</strong>.</p>
              </div>
            </div>
            
            <h3>Data Protection Officer</h3>
            <p>For complex privacy matters or if you are not satisfied with our response, you can contact our Data Protection Officer directly:</p>
            <p><strong>Email:</strong> <a href="mailto:dpo@adgenius.nl">dpo@adgenius.nl</a></p>
            
            <h3>Regulatory Authorities</h3>
            <p>If you believe we have not addressed your privacy concerns adequately, you have the right to contact your local data protection authority. In the Netherlands, this is the Autoriteit Persoonsgegevens (Dutch DPA).</p>
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
  color: #1f2937;
  background: #f9fafb;
  padding-top: 64px;
}

/* Hero Section */
.hero-section {
  background: linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%);
  color: white;
  padding: 4rem 2rem;
  text-align: center;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero-section h1 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

.last-updated {
  font-size: 1rem;
  opacity: 0.9;
  margin-bottom: 1.5rem;
  font-weight: 500;
}

.hero-subtitle {
  font-size: 1.2rem;
  opacity: 0.95;
  max-width: 600px;
  margin: 0 auto;
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
  width: 280px;
  position: sticky;
  top: 100px;
  align-self: flex-start;
  background: white;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid #e5e7eb;
}

.nav-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #8B5CF6;
  margin-bottom: 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid #f3f4f6;
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
  color: #6b7280;
  text-decoration: none;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  font-size: 0.95rem;
  border-left: 3px solid transparent;
}

.privacy-nav a:hover {
  background: #f9fafb;
  color: #8B5CF6;
  border-left-color: #8B5CF6;
}

.privacy-nav a.active {
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%);
  color: #8B5CF6;
  font-weight: 600;
  border-left-color: #8B5CF6;
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
  border: 2px solid #e5e7eb;
  border-radius: 0.75rem;
  background-color: white;
  color: #374151;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1.5em;
}

.mobile-section-nav select:focus {
  outline: none;
  border-color: #8B5CF6;
  box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);
}

/* Privacy Text Content */
.privacy-text {
  flex: 1;
  min-width: 0;
  background: white;
  border-radius: 1rem;
  padding: 2.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid #e5e7eb;
}

.privacy-section {
  margin-bottom: 3rem;
  scroll-margin-top: 100px;
}

.privacy-section:last-child {
  margin-bottom: 0;
}

.privacy-section h2 {
  font-size: 2rem;
  font-weight: 700;
  color: #8B5CF6;
  margin-bottom: 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 3px solid #f3f4f6;
}

.privacy-section h3 {
  font-size: 1.4rem;
  font-weight: 600;
  color: #EC4899;
  margin: 2rem 0 1rem;
}

.privacy-section h4 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #4b5563;
  margin: 1.5rem 0 0.75rem;
}

.privacy-section p {
  margin-bottom: 1.25rem;
  line-height: 1.7;
  color: #374151;
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
  color: #374151;
}

.privacy-section a {
  color: #8B5CF6;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.privacy-section a:hover {
  color: #EC4899;
  text-decoration: underline;
}

/* Contact Information Styling */
.contact-info {
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%);
  padding: 1.5rem;
  border-radius: 0.75rem;
  margin: 1.5rem 0;
  border-left: 4px solid #8B5CF6;
}

.contact-info p {
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.contact-methods {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.contact-method {
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
}

.contact-method h3 {
  color: #8B5CF6;
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.company-address {
  font-style: normal;
  line-height: 1.6;
}

/* Cookie Types Grid */
.cookie-types {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.cookie-type {
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
}

.cookie-type:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.cookie-type h4 {
  color: #8B5CF6;
  margin-bottom: 0.75rem;
}

.cookie-type p {
  margin-bottom: 0;
  font-size: 0.95rem;
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
    order: 1;
  }
  
  .privacy-text {
    order: 2;
  }
  
  .mobile-section-nav {
    display: block;
  }
}

@media (max-width: 768px) {
  .hero-section {
    padding: 3rem 1.5rem;
  }
  
  .hero-section h1 {
    font-size: 2.5rem;
  }
  
  .privacy-nav {
    display: none;
  }
  
  .privacy-container {
    padding: 2rem 1rem;
  }
  
  .privacy-text {
    padding: 1.5rem;
  }
  
  .privacy-section h2 {
    font-size: 1.75rem;
  }
  
  .privacy-section h3 {
    font-size: 1.3rem;
  }
  
  .contact-methods {
    grid-template-columns: 1fr;
  }
  
  .cookie-types {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .hero-section h1 {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
  }
  
  .privacy-section h2 {
    font-size: 1.5rem;
  }
  
  .privacy-section h3 {
    font-size: 1.2rem;
  }
  
  .privacy-text {
    padding: 1.25rem;
  }
  
  .contact-info,
  .contact-method,
  .cookie-type {
    padding: 1rem;
  }
}
</style>