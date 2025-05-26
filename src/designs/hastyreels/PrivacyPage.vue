<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Privacy sections for navigation
const sections = ref([
  { id: 'introduction', title: 'Introduction' },
  { id: 'data-collection', title: 'Information We Collect' },
  { id: 'data-usage', title: 'How We Use Your Information' },
  { id: 'data-sharing', title: 'Information Sharing' },
  { id: 'your-rights', title: 'Your Rights & Choices' },
  { id: 'data-security', title: 'Data Security' },
  { id: 'children', title: 'Children\'s Privacy' },
  { id: 'international', title: 'International Data Transfers' },
  { id: 'changes', title: 'Changes to this Policy' },
  { id: 'contact', title: 'Contact Us' }
]);

// Active section for mobile navigation
const activeSection = ref('introduction');

// Set active section on click
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
  const scrollPosition = window.scrollY + 100; // Offset for fixed header
  
  // Find which section is currently in view
  for (const section of sections.value) {
    const element = document.getElementById(section.id);
    if (element) {
      const offsetTop = element.offsetTop;
      const offsetBottom = offsetTop + element.offsetHeight;
      
      if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
        activeSection.value = section.id;
        break;
      }
    }
  }
};

// Add scroll event listener
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
    <section class="privacy-hero">
      <h1>Privacy Policy</h1>
      <p>Last Updated: May 15, 2024</p>
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
        
        <!-- Privacy policy content -->
        <main class="privacy-text">
          <section id="introduction" class="privacy-section">
            <h2>Introduction</h2>
            <p>Welcome to HastyReels ("we," "our," or "us"). We are committed to protecting your privacy and providing you with a safe and secure experience when using our video streaming platform. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service.</p>
            
            <p>Please read this Privacy Policy carefully. By accessing or using our service, you acknowledge that you have read, understood, and agree to be bound by all the terms of this Privacy Policy. If you do not agree with our policies and practices, please do not use our service.</p>
            
            <p>This Privacy Policy applies to information we collect:</p>
            <ul>
              <li>On our website and mobile application</li>
              <li>Through email, text, and other electronic communications between you and our service</li>
              <li>When you interact with our advertising and applications on third-party websites and services</li>
            </ul>
          </section>
          
          <section id="data-collection" class="privacy-section">
            <h2>Information We Collect</h2>
            
            <h3>Personal Information</h3>
            <p>We collect several types of information from and about users of our service, including:</p>
            
            <ul>
              <li>Identifiers such as name, email address, phone number, and username</li>
              <li>Payment information (processed through secure third-party payment processors)</li>
              <li>User profile information including preferences, favorites, and watch history</li>
              <li>User-generated content such as comments, reviews, and interactions</li>
              <li>Device information and identifiers</li>
              <li>Internet or other network activity information</li>
            </ul>
            
            <h3>Usage Data</h3>
            <p>When you use our service, we may automatically collect certain information, including:</p>
            
            <ul>
              <li>Device information (such as your mobile device ID, model, and manufacturer)</li>
              <li>Operating system type and version</li>
              <li>Browser type and version</li>
              <li>IP address and approximate location derived from IP address</li>
              <li>Service usage data (such as videos watched, time spent, search queries)</li>
              <li>Device event information (such as crashes, system activity, hardware settings)</li>
              <li>Date and time stamps of service usage</li>
            </ul>
            
            <h3>Cookies and Similar Technologies</h3>
            <p>We use cookies and similar tracking technologies to track the activity on our service and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.</p>
            
            <p>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.</p>
            
            <h3>Information from Third Parties</h3>
            <p>We may collect information about you from third parties, including:</p>
            <ul>
              <li>Information from social media accounts when you use them to register or log in</li>
              <li>Information from business partners, advertising networks, and analytics providers</li>
            </ul>
          </section>
          
          <section id="data-usage" class="privacy-section">
            <h2>How We Use Your Information</h2>
            
            <p>We use the information we collect for various purposes, including:</p>
            
            <h3>Providing and Improving Our Services</h3>
            <ul>
              <li>To provide, maintain, and improve our services</li>
              <li>To process transactions and manage your account</li>
              <li>To personalize your experience and deliver content relevant to your interests</li>
              <li>To develop new products, services, features, and functionality</li>
              <li>To provide customer support and respond to your inquiries</li>
            </ul>
            
            <h3>Communications</h3>
            <ul>
              <li>To communicate with you about your account, updates, or other information</li>
              <li>To send you marketing communications (with your consent where required)</li>
              <li>To respond to your comments and questions</li>
            </ul>
            
            <h3>Analytics and Research</h3>
            <ul>
              <li>To understand how users interact with our service</li>
              <li>To monitor and analyze usage patterns and trends</li>
              <li>To measure the effectiveness of our content, advertising, and communications</li>
            </ul>
            
            <h3>Safety and Security</h3>
            <ul>
              <li>To detect, prevent, and address technical issues, security incidents, or illegal activities</li>
              <li>To protect our rights, property, and safety</li>
              <li>To verify your identity and prevent fraud or unauthorized access</li>
            </ul>
            
            <h3>Legal Compliance</h3>
            <ul>
              <li>To comply with applicable laws, regulations, legal processes, or government requests</li>
              <li>To enforce our Terms of Service and other agreements</li>
            </ul>
          </section>
          
          <section id="data-sharing" class="privacy-section">
            <h2>Information Sharing</h2>
            
            <p>We may share your information in the following situations:</p>
            
            <h3>With Your Consent</h3>
            <p>We may share your information when you have given us your consent to do so for a specific purpose.</p>
            
            <h3>With Service Providers</h3>
            <p>We may share your information with third-party vendors, service providers, contractors, or agents who perform services for us or on our behalf, such as:</p>
            <ul>
              <li>Payment processors</li>
              <li>Cloud storage providers</li>
              <li>Analytics providers</li>
              <li>Customer service providers</li>
              <li>Email service providers</li>
            </ul>
            
            <h3>For Legal Reasons</h3>
            <p>We may disclose your information where required to do so by law or in response to valid requests by public authorities (e.g., a court or a government agency).</p>
            
            <h3>Business Transfers</h3>
            <p>In connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business by another company.</p>
            
            <h3>Affiliates</h3>
            <p>We may share your information with our affiliates, in which case we will require those affiliates to honor this Privacy Policy.</p>
            
            <h3>Business Partners</h3>
            <p>We may share your information with our business partners to offer you certain products, services, or promotions.</p>
            
            <h3>With Other Users</h3>
            <p>When you share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed.</p>
            
            <h3>Aggregated or Anonymized Data</h3>
            <p>We may share aggregated or anonymized information that does not directly identify you with third parties for industry analysis, demographic profiling, and other purposes.</p>
          </section>
          
          <section id="your-rights" class="privacy-section">
            <h2>Your Rights & Choices</h2>
            
            <p>Depending on your location, you may have certain rights regarding your personal information, which may include:</p>
            
            <h3>Access and Portability</h3>
            <p>You may have the right to access the personal information we hold about you and request a copy of your data in a structured, machine-readable format.</p>
            
            <h3>Correction</h3>
            <p>You may have the right to request that we correct inaccurate or incomplete information about you.</p>
            
            <h3>Deletion</h3>
            <p>You may have the right to request that we delete your personal information in certain circumstances.</p>
            
            <h3>Restriction and Objection</h3>
            <p>You may have the right to restrict or object to our processing of your personal information in certain circumstances.</p>
            
            <h3>Consent Withdrawal</h3>
            <p>Where we rely on your consent to process your personal information, you may withdraw your consent at any time.</p>
            
            <h3>Opt-Out of Marketing</h3>
            <p>You can opt-out of receiving marketing communications from us by following the unsubscribe instructions included in each email or by contacting us.</p>
            
            <h3>Do Not Track</h3>
            <p>We do not currently respond to "Do Not Track" signals from web browsers.</p>
            
            <p>To exercise these rights, please contact us using the information provided in the "Contact Us" section. Please note that these rights may be limited in some circumstances by applicable law.</p>
          </section>
          
          <section id="data-security" class="privacy-section">
            <h2>Data Security</h2>
            
            <p>We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.</p>
            
            <h3>Data Retention</h3>
            <p>We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When determining how long to retain personal information, we consider the amount, nature, and sensitivity of the information, the potential risk of harm from unauthorized use or disclosure, and applicable legal requirements.</p>
          </section>
          
          <section id="children" class="privacy-section">
            <h2>Children's Privacy</h2>
            
            <p>Our service is not directed to children under the age of 13 (or 16 in certain jurisdictions). We do not knowingly collect personal information from children. If you are a parent or guardian and you believe your child has provided us with personal information, please contact us. If we become aware that we have collected personal information from a child without verification of parental consent, we take steps to remove that information from our servers.</p>
          </section>
          
          <section id="international" class="privacy-section">
            <h2>International Data Transfers</h2>
            
            <p>Your information may be transferred to, and processed in, countries other than the country in which you are resident. These countries may have data protection laws that are different from those in your country.</p>
            
            <p>When we transfer your information to other countries, we will protect that information as described in this Privacy Policy and in accordance with applicable law. We use contractual protections for the transfer of personal information to third countries, including the European Commission's Standard Contractual Clauses.</p>
          </section>
          
          <section id="changes" class="privacy-section">
            <h2>Changes to this Policy</h2>
            
            <p>We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last Updated" date at the top of this page. We encourage you to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
            
            <p>If we make material changes to this policy, we will notify you by email or through a notice on our home page prior to the changes becoming effective.</p>
          </section>
          
          <section id="contact" class="privacy-section">
            <h2>Contact Us</h2>
            
            <p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:</p>
            
            <div class="contact-info">
              <p><strong>Email:</strong> <a href="mailto:privacy@hastyreels.com">privacy@hastyreels.com</a></p>
              <p><strong>Postal Address:</strong><br>
              HastyReels Privacy Team<br>
              123 Media Avenue<br>
              Suite 500<br>
              San Francisco, CA 94103<br>
              United States</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  </div>
</template>

<style scoped>
.privacy-page {
  background-color: #000;
  color: #fff;
  min-height: 100vh;
  font-family: 'Montserrat', 'Inter', sans-serif;
  padding-top: 64px;
}

/* Hero Section */
.privacy-hero {
  background: linear-gradient(to right, rgba(255, 78, 80, 0.9), rgba(252, 145, 58, 0.9)), 
              url('https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg') center/cover no-repeat;
  padding: 6rem 2rem;
  text-align: center;
  color: white;
}

.privacy-hero h1 {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.privacy-hero p {
  font-size: 1.1rem;
  opacity: 0.9;
}

/* Privacy Container */
.privacy-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem;
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
  background: #111111;
  border-radius: 12px;
  padding: 1.5rem;
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
  color: #e2e8f0;
  text-decoration: none;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  font-size: 0.95rem;
}

.privacy-nav a:hover {
  background: rgba(255, 78, 80, 0.1);
  color: #ff4e50;
}

.privacy-nav a.active {
  background: rgba(255, 78, 80, 0.15);
  color: #ff4e50;
  font-weight: 600;
  border-left: 3px solid #ff4e50;
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
  border: 1px solid #333;
  border-radius: 0.5rem;
  background-color: #111;
  color: #e2e8f0;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23e2e8f0' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1em;
}

.mobile-section-nav select:focus {
  outline: none;
  border-color: #ff4e50;
}

/* Privacy Text Content */
.privacy-text {
  flex: 1;
  min-width: 0;
}

.privacy-section {
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #333;
  scroll-margin-top: 100px;
}

.privacy-section:last-child {
  border-bottom: none;
  margin-bottom: 0;
}

.privacy-section h2 {
  font-size: 2rem;
  font-weight: 700;
  color: #ff4e50;
  margin-bottom: 1.5rem;
}

.privacy-section h3 {
  font-size: 1.4rem;
  font-weight: 600;
  color: #fc913a;
  margin: 1.5rem 0 1rem;
}

.privacy-section p {
  margin-bottom: 1rem;
  line-height: 1.7;
  color: #e2e8f0;
}

.privacy-section ul, 
.privacy-section ol {
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
}

.privacy-section li {
  margin-bottom: 0.5rem;
  line-height: 1.6;
  color: #cbd5e0;
}

.privacy-section a {
  color: #ff4e50;
  text-decoration: none;
  transition: all 0.3s ease;
}

.privacy-section a:hover {
  color: #fc913a;
  text-decoration: underline;
}

.contact-info {
  background: #111;
  padding: 1.5rem;
  border-radius: 0.75rem;
  margin: 1.5rem 0;
  border: 1px solid #333;
}

.contact-info p {
  margin-bottom: 0.5rem;
}

.contact-info p:last-child {
  margin-bottom: 0;
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
    display: none;
  }
  
  .mobile-section-nav {
    display: block;
  }
}

@media (max-width: 768px) {
  .privacy-hero {
    padding: 4rem 1.5rem;
  }
  
  .privacy-hero h1 {
    font-size: 2.5rem;
  }
  
  .privacy-container {
    padding: 2rem 1.5rem;
  }
  
  .privacy-section h2 {
    font-size: 1.75rem;
  }
  
  .privacy-section h3 {
    font-size: 1.3rem;
  }
}

@media (max-width: 480px) {
  .privacy-hero {
    padding: 3rem 1rem;
  }
  
  .privacy-hero h1 {
    font-size: 2rem;
  }
  
  .privacy-container {
    padding: 1.5rem 1rem;
  }
  
  .privacy-section h2 {
    font-size: 1.5rem;
  }
  
  .privacy-section h3 {
    font-size: 1.2rem;
  }
}
</style>