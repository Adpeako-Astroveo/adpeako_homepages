<script setup>
import { ref } from 'vue';

const sections = ref([
  {
    id: 'introduction',
    title: 'Introduction',
    content: `
      <p>Welcome to Fun Puzzle Palace's Privacy Policy. This policy describes how we collect, use, and protect your personal information when you use our website and mobile gaming services.</p>
      <p>We respect your privacy and are committed to protecting your personal data. Please read this policy carefully to understand our practices regarding your personal information and how we will treat it.</p>
      <p>By using our services, you acknowledge that you have read and understood this Privacy Policy.</p>
    `
  },
  {
    id: 'information-we-collect',
    title: 'Information We Collect',
    content: `
      <p>We may collect several types of information from and about users of our services, including:</p>
      <ul>
        <li><strong>Personal Information:</strong> This includes information that can be used to identify you, such as your name, email address, and mobile phone number.</li>
        <li><strong>Usage Data:</strong> Information about how you interact with our services, including the games you play, your progress, achievements, and time spent on our platform.</li>
        <li><strong>Device Information:</strong> Data about the devices you use to access our services, such as device type, operating system, unique device identifiers, and mobile network information.</li>
        <li><strong>Location Data:</strong> General location information derived from your IP address or mobile device settings, if you have granted permission.</li>
      </ul>
    `
  },
  {
    id: 'how-we-use-information',
    title: 'How We Use Your Information',
    content: `
      <p>We use the information we collect for various purposes, including:</p>
      <ul>
        <li>Providing and maintaining our services</li>
        <li>Processing transactions and managing your account</li>
        <li>Personalizing your experience and delivering content and game offers tailored to your interests</li>
        <li>Improving our website and services</li>
        <li>Communicating with you, including sending service-related notifications</li>
        <li>Protecting our services and users from fraud and abuse</li>
      </ul>
    `
  },
  {
    id: 'phone-billing',
    title: 'Phone Billing Information',
    content: `
      <p>When you choose to pay through phone billing, we collect and process your mobile phone number to facilitate payment. Here's what you need to know:</p>
      <ul>
        <li>Your phone number is shared with our payment processors and mobile carriers solely for the purpose of processing payments.</li>
        <li>Charges will appear on your mobile phone bill or be deducted from your prepaid balance.</li>
        <li>We implement strict security measures to protect your billing information.</li>
        <li>We do not store complete payment card details on our servers.</li>
      </ul>
      <p>By selecting phone billing as your payment method, you consent to the processing of your information as described above.</p>
    `
  },
  {
    id: 'data-sharing',
    title: 'Sharing Your Information',
    content: `
      <p>We may share your personal information with:</p>
      <ul>
        <li><strong>Service Providers:</strong> Third parties who provide services on our behalf, such as payment processing, data analysis, and customer support.</li>
        <li><strong>Business Partners:</strong> Mobile carriers and payment processors who facilitate phone billing.</li>
        <li><strong>Legal Requirements:</strong> When we believe disclosure is necessary to comply with a legal obligation or protect our rights and safety.</li>
      </ul>
      <p>We do not sell your personal information to third parties.</p>
    `
  },
  {
    id: 'data-security',
    title: 'Data Security',
    content: `
      <p>We have implemented appropriate technical and organizational measures to secure your personal data, including:</p>
      <ul>
        <li>Encrypting sensitive data during transmission</li>
        <li>Using secure servers and storage systems</li>
        <li>Regularly reviewing and updating our security practices</li>
        <li>Limiting access to personal information to authorized personnel</li>
      </ul>
      <p>While we strive to protect your personal information, no method of transmission over the Internet or method of electronic storage is 100% secure. We cannot guarantee absolute security.</p>
    `
  },
  {
    id: 'your-rights',
    title: 'Your Privacy Rights',
    content: `
      <p>Depending on your location, you may have certain rights regarding your personal information, which may include:</p>
      <ul>
        <li><strong>Access:</strong> The right to know what personal information we hold about you.</li>
        <li><strong>Correction:</strong> The right to request correction of your personal information.</li>
        <li><strong>Deletion:</strong> The right to request deletion of your personal information.</li>
        <li><strong>Restriction:</strong> The right to request restriction of processing of your personal information.</li>
        <li><strong>Data Portability:</strong> The right to receive a copy of your personal information in a structured, machine-readable format.</li>
        <li><strong>Objection:</strong> The right to object to our processing of your personal information.</li>
      </ul>
      <p>To exercise any of these rights, please contact us using the information provided in the Contact section below.</p>
    `
  },
  {
    id: 'cookies',
    title: 'Cookies and Similar Technologies',
    content: `
      <p>We use cookies and similar tracking technologies to track activity on our services and hold certain information.</p>
      <p>Cookies are files with a small amount of data that may include an anonymous unique identifier. They are sent to your browser from a website and stored on your device.</p>
      <p>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our services.</p>
      <p>We use cookies for the following purposes:</p>
      <ul>
        <li>To enable certain functions of the service</li>
        <li>To provide analytics</li>
        <li>To store your preferences</li>
        <li>To enable ad delivery and behavioral targeting</li>
      </ul>
    `
  },
  {
    id: 'children',
    title: 'Children\'s Privacy',
    content: `
      <p>Our services are not intended for children under the age of 13 (or the relevant age in your jurisdiction where parental consent is required).</p>
      <p>We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us. If we become aware that we have collected personal information from children without verification of parental consent, we will take steps to remove that information from our servers.</p>
    `
  },
  {
    id: 'policy-changes',
    title: 'Changes to This Policy',
    content: `
      <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.</p>
      <p>We will also notify you via email and/or a prominent notice on our service, prior to the change becoming effective and update the "Last Updated" date at the top of this Privacy Policy.</p>
      <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
    `
  },
  {
    id: 'contact',
    title: 'Contact Us',
    content: `
      <p>If you have any questions about this Privacy Policy, please contact us:</p>
      <ul>
        <li>By email: privacy@funpuzzlepalace.com</li>
        <li>Through our contact form on the website</li>
      </ul>
    `
  },
  {
    id: 'terms-of-use',
    title: 'Terms of Use',
    content: `
      <p>By accessing and using Fun Puzzle Palace, you agree to abide by our Terms of Use:</p>
      <ul>
        <li>You must be at least 13 years old to use our services.</li>
        <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
        <li>You may not use our services for any illegal or unauthorized purpose.</li>
        <li>We reserve the right to modify or terminate the service for any reason without notice.</li>
        <li>We reserve the right to refuse service to anyone for any reason at any time.</li>
        <li>Subscriptions are automatically renewed unless canceled before the renewal date.</li>
        <li>Refunds are provided in accordance with applicable law and our refund policy.</li>
        <li>All content provided through our services is protected by copyright and other intellectual property rights.</li>
      </ul>
    `
  },
  {
    id: 'cookie-policy',
    title: 'Cookie Policy',
    content: `
      <p>Our Cookie Policy explains how we use cookies and similar technologies to recognize you when you visit our website and services. It explains what these technologies are and why we use them, as well as your rights to control our use of them.</p>
      <p><strong>What are cookies?</strong></p>
      <p>Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information.</p>
      <p><strong>Types of cookies we use:</strong></p>
      <ul>
        <li><strong>Essential cookies:</strong> These are cookies that are required for the operation of our website.</li>
        <li><strong>Analytical/performance cookies:</strong> These allow us to recognize and count the number of visitors and see how visitors move around our website.</li>
        <li><strong>Functionality cookies:</strong> These are used to recognize you when you return to our website.</li>
        <li><strong>Targeting cookies:</strong> These record your visit to our website, the pages you have visited, and the links you have followed.</li>
      </ul>
      <p>You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of the site may become inaccessible or not function properly.</p>
    `
  }
]);

// State for the active section
const activeSection = ref('introduction');

// Handle section click
const scrollToSection = (sectionId) => {
  activeSection.value = sectionId;
  
  // Scroll to the section
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<template>
  <div class="privacy-page">
    <!-- Header Banner -->
    <div class="privacy-banner">
      <div class="banner-content">
        <h1 class="glowing-text">Privacy & Terms</h1>
        <p>Last updated: June 15, 2024</p>
      </div>
    </div>
    
    <div class="privacy-container">
      <!-- Side Navigation -->
      <aside class="side-nav">
        <ul>
          <li 
            v-for="section in sections" 
            :key="section.id"
            :class="{ active: activeSection === section.id }"
          >
            <a 
              href="#" 
              @click.prevent="scrollToSection(section.id)"
            >
              {{ section.title }}
            </a>
          </li>
        </ul>
      </aside>
      
      <!-- Mobile Section Selector -->
      <div class="mobile-section-selector">
        <select v-model="activeSection" @change="scrollToSection(activeSection)">
          <option v-for="section in sections" :key="section.id" :value="section.id">
            {{ section.title }}
          </option>
        </select>
      </div>
      
      <!-- Main Content -->
      <main class="privacy-content">
        <section 
          v-for="section in sections" 
          :key="section.id" 
          :id="section.id"
          class="privacy-section"
        >
          <h2>{{ section.title }}</h2>
          <div v-html="section.content"></div>
        </section>
      </main>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

.privacy-page {
  min-height: 100vh;
  background-color: #0F172A;
  color: #F8FAFC;
  font-family: 'Inter', sans-serif;
}

/* Banner */
.privacy-banner {
  height: 250px;
  background: linear-gradient(135deg, #1E293B 0%, #0F172A 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.privacy-banner::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(to right, rgba(139, 92, 246, 0.1) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(139, 92, 246, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  transform: perspective(500px) rotateX(60deg);
  transform-origin: center top;
  opacity: 0.5;
}

.privacy-banner::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.4) 0%, transparent 50%),
    radial-gradient(circle at 80% 50%, rgba(236, 72, 153, 0.4) 0%, transparent 50%);
  opacity: 0.3;
}

.banner-content {
  position: relative;
  z-index: 2;
  text-align: center;
}

.glowing-text {
  font-family: 'Orbitron', sans-serif;
  font-weight: 700;
  color: #F8FAFC;
  text-shadow: 
    0 0 5px rgba(139, 92, 246, 0.5),
    0 0 10px rgba(139, 92, 246, 0.3),
    0 0 15px rgba(139, 92, 246, 0.2);
  margin-bottom: 1rem;
}

h1.glowing-text {
  font-size: 3rem;
  background: linear-gradient(to right, #8B5CF6, #EC4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.banner-content p {
  color: #CBD5E1;
  font-size: 1.1rem;
}

/* Container */
.privacy-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem;
  display: flex;
  gap: 3rem;
}

/* Side Navigation */
.side-nav {
  width: 250px;
  flex-shrink: 0;
  position: sticky;
  top: 6rem;
  height: fit-content;
  align-self: flex-start;
}

.side-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  background: rgba(30, 41, 59, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  border: 1px solid #334155;
  overflow: hidden;
}

.side-nav li {
  border-bottom: 1px solid #334155;
}

.side-nav li:last-child {
  border-bottom: none;
}

.side-nav a {
  display: block;
  padding: 1rem 1.5rem;
  color: #CBD5E1;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 0.95rem;
}

.side-nav li.active a {
  background: rgba(139, 92, 246, 0.2);
  color: #8B5CF6;
  font-weight: 500;
  border-left: 3px solid #8B5CF6;
}

.side-nav a:hover {
  background: rgba(139, 92, 246, 0.1);
}

/* Mobile Section Selector */
.mobile-section-selector {
  display: none;
  margin-bottom: 2rem;
}

.mobile-section-selector select {
  width: 100%;
  padding: 0.75rem 1rem;
  background: rgba(30, 41, 59, 0.8);
  border: 1px solid #334155;
  border-radius: 8px;
  color: #F8FAFC;
  font-size: 1rem;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%238B5CF6' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1em;
}

/* Main Content */
.privacy-content {
  flex: 1;
}

.privacy-section {
  background: rgba(30, 41, 59, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  border: 1px solid #334155;
  padding: 2.5rem;
  margin-bottom: 2rem;
  scroll-margin-top: 2rem;
}

.privacy-section:last-child {
  margin-bottom: 0;
}

.privacy-section h2 {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #8B5CF6;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid #334155;
}

/* Content Styling */
.privacy-section p {
  color: #CBD5E1;
  font-size: 1rem;
  line-height: 1.7;
  margin-bottom: 1.25rem;
}

.privacy-section ul {
  color: #CBD5E1;
  font-size: 1rem;
  line-height: 1.7;
  padding-left: 1.5rem;
  margin-bottom: 1.25rem;
}

.privacy-section li {
  margin-bottom: 0.75rem;
}

.privacy-section strong {
  color: #F8FAFC;
  font-weight: 600;
}

.privacy-section a {
  color: #8B5CF6;
  text-decoration: none;
  transition: all 0.3s ease;
}

.privacy-section a:hover {
  color: #EC4899;
  text-decoration: underline;
}

/* Responsive Design */
@media (max-width: 992px) {
  .privacy-container {
    flex-direction: column;
    padding: 2rem 1.5rem;
  }
  
  .side-nav {
    display: none;
  }
  
  .mobile-section-selector {
    display: block;
  }
}

@media (max-width: 768px) {
  .privacy-banner {
    height: 200px;
  }
  
  h1.glowing-text {
    font-size: 2.5rem;
  }
  
  .privacy-section {
    padding: 2rem 1.5rem;
  }
  
  .privacy-section h2 {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  h1.glowing-text {
    font-size: 2rem;
  }
  
  .privacy-section {
    padding: 1.5rem 1.25rem;
  }
  
  .privacy-section h2 {
    font-size: 1.3rem;
  }
  
  .privacy-section p, .privacy-section ul {
    font-size: 0.95rem;
  }
}
</style>