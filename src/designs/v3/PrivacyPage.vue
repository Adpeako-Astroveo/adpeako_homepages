<script setup>
import { ref } from 'vue';

const sections = ref([
  {
    title: 'Data Collection',
    icon: '📊',
    items: [
      'Account Information',
      'Usage Statistics',
      'Device Data',
      'Payment Details'
    ]
  },
  {
    title: 'Data Protection',
    icon: '🔒',
    items: [
      'End-to-end Encryption',
      'Regular Security Audits',
      'Access Controls',
      'Data Backups'
    ]
  },
  {
    title: 'Your Rights',
    icon: '⚖️',
    items: [
      'Access Your Data',
      'Request Corrections',
      'Data Portability',
      'Account Deletion'
    ]
  }
]);

const contact = ref({
  email: 'privacy@example.com',
  phone: '+1 (555) 123-4567',
  address: '123 Privacy Street, Security City, 12345'
});
</script>

<template>
  <div class="v3-privacy">
    <div class="privacy-container">
      <h1>Privacy Policy</h1>
      <p class="intro">Your privacy is our top priority. Learn how we protect and manage your data.</p>

      <div class="sections-grid">
        <div v-for="section in sections" :key="section.title" class="privacy-section">
          <div class="section-header">
            <span class="section-icon">{{ section.icon }}</span>
            <h2>{{ section.title }}</h2>
          </div>
          <ul class="section-list">
            <li v-for="item in section.items" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>

      <div class="contact-section">
        <h2>Contact Us</h2>
        <div class="contact-info">
          <div class="contact-item">
            <span class="contact-icon">📧</span>
            <p>{{ contact.email }}</p>
          </div>
          <div class="contact-item">
            <span class="contact-icon">📞</span>
            <p>{{ contact.phone }}</p>
          </div>
          <div class="contact-item">
            <span class="contact-icon">📍</span>
            <p>{{ contact.address }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.v3-privacy {
  background: #1A1A2E;
  min-height: 100vh;
  padding: 8rem 2rem 4rem;
  color: white;
}

.privacy-container {
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  font-size: 3rem;
  text-align: center;
  color: #B794F4;
  margin-bottom: 1.5rem;
}

.intro {
  text-align: center;
  font-size: 1.2rem;
  color: #E9D8FD;
  max-width: 600px;
  margin: 0 auto 4rem;
}

.sections-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.privacy-section {
  background: #1E1E32;
  padding: 2rem;
  border-radius: 1rem;
  transition: transform 0.3s ease;
}

.privacy-section:hover {
  transform: translateY(-5px);
}

.section-header {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
}

.section-icon {
  font-size: 2rem;
  margin-right: 1rem;
}

h2 {
  color: #805AD5;
  font-size: 1.5rem;
}

.section-list {
  list-style: none;
  padding: 0;
}

.section-list li {
  padding: 0.75rem 0;
  color: #E9D8FD;
  position: relative;
  padding-left: 1.5rem;
}

.section-list li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #805AD5;
}

.contact-section {
  background: linear-gradient(135deg, #805AD5 0%, #6B46C1 100%);
  padding: 3rem;
  border-radius: 1rem;
  text-align: center;
}

.contact-section h2 {
  color: white;
  margin-bottom: 2rem;
}

.contact-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.contact-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contact-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.contact-item p {
  color: #E9D8FD;
}

@media (max-width: 768px) {
  .v3-privacy {
    padding: 6rem 1rem 2rem;
  }

  h1 {
    font-size: 2rem;
  }

  .privacy-section {
    padding: 1.5rem;
  }

  .contact-section {
    padding: 2rem;
  }
}
</style>