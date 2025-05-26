<script setup>
import { ref } from 'vue';

// Form state
const contactForm = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const isSubmitting = ref(false);
const submitSuccess = ref(false);
const submitError = ref('');

// Form validation
const errors = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const validateEmail = (email) => {
  return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email);
};

const validateForm = () => {
  let isValid = true;
  errors.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  
  // Name validation
  if (!contactForm.value.name.trim()) {
    errors.value.name = 'Name is required';
    isValid = false;
  }
  
  // Email validation
  if (!contactForm.value.email.trim()) {
    errors.value.email = 'Email is required';
    isValid = false;
  } else if (!validateEmail(contactForm.value.email)) {
    errors.value.email = 'Please enter a valid email address';
    isValid = false;
  }
  
  // Subject validation
  if (!contactForm.value.subject.trim()) {
    errors.value.subject = 'Subject is required';
    isValid = false;
  }
  
  // Message validation
  if (!contactForm.value.message.trim()) {
    errors.value.message = 'Message is required';
    isValid = false;
  } else if (contactForm.value.message.length < 20) {
    errors.value.message = 'Message should be at least 20 characters';
    isValid = false;
  }
  
  return isValid;
};

// Submit handler
const handleSubmit = async () => {
  if (!validateForm()) return;
  
  isSubmitting.value = true;
  submitSuccess.value = false;
  submitError.value = '';
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Show success message
    submitSuccess.value = true;
    
    // Reset form
    contactForm.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
    
    isSubmitting.value = false;
  } catch (error) {
    submitError.value = 'An error occurred. Please try again.';
    isSubmitting.value = false;
  }
};

// FAQ data
const faqs = ref([
  {
    question: 'How does phone billing work?',
    answer: 'Phone billing allows you to pay for your subscription through your mobile phone bill. When you choose this payment method, the subscription fee will be added to your monthly phone bill or deducted from your prepaid balance, depending on your mobile plan. This provides a convenient way to pay without needing a credit card.',
    isOpen: false
  },
  {
    question: 'Can I play games offline?',
    answer: 'Yes, many of our games can be played offline after you initially download them. However, some features like multiplayer, leaderboards, and cloud saves require an internet connection to function properly.',
    isOpen: false
  },
  {
    question: 'How do I cancel my subscription?',
    answer: 'You can cancel your subscription at any time through your account settings. Go to "My Account" > "Subscription" and click on "Cancel Subscription". Your access will continue until the end of your current billing period, and you won\'t be charged again.',
    isOpen: false
  },
  {
    question: 'Are there parental controls available?',
    answer: 'Yes, we offer robust parental control options. You can set age restrictions, limit playtime, and control in-app purchases. These settings can be configured in the "Family Settings" section of your account.',
    isOpen: false
  },
  {
    question: 'What devices are supported?',
    answer: 'Fun Puzzle Palace works on most modern devices including Android smartphones and tablets, iPhones, iPads, and modern web browsers. We continuously optimize our platform to ensure compatibility with the latest devices and operating systems.',
    isOpen: false
  }
]);

const toggleFaq = (index) => {
  faqs.value[index].isOpen = !faqs.value[index].isOpen;
};
</script>

<template>
  <div class="contact-page">
    <div class="page-container">
      <!-- Contact Section -->
      <section class="contact-section">
        <div class="contact-container">
          <div class="contact-info">
            <h1 class="glowing-text">Contact Us</h1>
            <p>We're here to help! Fill out the form and we'll get back to you as soon as possible.</p>
            
            <div class="info-items">
              <div class="info-item">
                <div class="info-icon">📧</div>
                <div class="info-content">
                  <h3>Email</h3>
                  <p>support@funpuzzlepalace.com</p>
                </div>
              </div>
              
              <div class="info-item">
                <div class="info-icon">🕗</div>
                <div class="info-content">
                  <h3>Support Hours</h3>
                  <p>Monday - Friday: 9am - 8pm<br>Saturday: 10am - 6pm<br>Sunday: Closed</p>
                </div>
              </div>
              
              <div class="info-item">
                <div class="info-icon">💬</div>
                <div class="info-content">
                  <h3>Live Chat</h3>
                  <p>Available during support hours<br>through our mobile app</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="contact-form-container">
            <form @submit.prevent="handleSubmit" class="contact-form">
              <div v-if="submitSuccess" class="success-message">
                Your message has been sent successfully! We'll get back to you soon.
              </div>
              
              <div v-if="submitError" class="error-message">
                {{ submitError }}
              </div>
              
              <div class="form-group">
                <label for="name">Name</label>
                <input
                  type="text"
                  id="name"
                  v-model="contactForm.name"
                  placeholder="Your name"
                  :class="{ 'error': errors.name }"
                />
                <span v-if="errors.name" class="error-text">{{ errors.name }}</span>
              </div>
              
              <div class="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  id="email"
                  v-model="contactForm.email"
                  placeholder="Your email"
                  :class="{ 'error': errors.email }"
                />
                <span v-if="errors.email" class="error-text">{{ errors.email }}</span>
              </div>
              
              <div class="form-group">
                <label for="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  v-model="contactForm.subject"
                  placeholder="What is this regarding?"
                  :class="{ 'error': errors.subject }"
                />
                <span v-if="errors.subject" class="error-text">{{ errors.subject }}</span>
              </div>
              
              <div class="form-group">
                <label for="message">Message</label>
                <textarea
                  id="message"
                  v-model="contactForm.message"
                  placeholder="How can we help you?"
                  rows="5"
                  :class="{ 'error': errors.message }"
                ></textarea>
                <span v-if="errors.message" class="error-text">{{ errors.message }}</span>
              </div>
              
              <button 
                type="submit" 
                class="submit-button" 
                :disabled="isSubmitting"
              >
                <span v-if="isSubmitting" class="loading-spinner"></span>
                <span v-else>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </section>
      
      <!-- FAQ Section -->
      <section class="faq-section">
        <div class="faq-container">
          <h2 class="glowing-text">Frequently Asked Questions</h2>
          
          <div class="faqs">
            <div 
              v-for="(faq, index) in faqs" 
              :key="index" 
              class="faq-item"
              :class="{ 'open': faq.isOpen }"
            >
              <div 
                class="faq-question"
                @click="toggleFaq(index)"
              >
                <h3>{{ faq.question }}</h3>
                <span class="faq-toggle">{{ faq.isOpen ? '−' : '+' }}</span>
              </div>
              
              <div class="faq-answer" v-show="faq.isOpen">
                <p>{{ faq.answer }}</p>
              </div>
            </div>
          </div>
          
          <p class="more-questions">
            Still have questions? <a href="#" @click.prevent="contactForm.subject = 'General Inquiry'">Contact our support team</a>
          </p>
        </div>
      </section>
    </div>
    
    <div class="contact-background">
      <div class="grid-lines"></div>
      <div class="glow-circle-1"></div>
      <div class="glow-circle-2"></div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

.contact-page {
  min-height: 100vh;
  background-color: #0F172A;
  color: #F8FAFC;
  font-family: 'Inter', sans-serif;
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
}

.contact-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.grid-lines {
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

.glow-circle-1 {
  position: absolute;
  top: 20%;
  left: 15%;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, rgba(139, 92, 246, 0) 70%);
  filter: blur(30px);
  animation: pulse 8s infinite alternate;
}

.glow-circle-2 {
  position: absolute;
  bottom: 10%;
  right: 10%;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, rgba(236, 72, 153, 0) 70%);
  filter: blur(40px);
  animation: pulse 12s infinite alternate-reverse;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 0.5;
  }
  100% {
    transform: scale(1.3);
    opacity: 0.8;
  }
}

.page-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
}

/* Contact Section */
.contact-section {
  margin-bottom: 6rem;
}

.contact-container {
  display: flex;
  gap: 4rem;
  background: rgba(30, 41, 59, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid #334155;
  overflow: hidden;
  box-shadow: 
    0 20px 25px -5px rgba(0, 0, 0, 0.2),
    0 10px 10px -5px rgba(0, 0, 0, 0.1),
    0 0 15px rgba(139, 92, 246, 0.5);
}

.contact-info {
  flex: 1;
  padding: 3rem;
  background: rgba(15, 23, 42, 0.5);
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
  font-size: 2.5rem;
  background: linear-gradient(to right, #8B5CF6, #EC4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.contact-info > p {
  color: #CBD5E1;
  font-size: 1.1rem;
  margin-bottom: 3rem;
  line-height: 1.6;
}

.info-items {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.info-item {
  display: flex;
  gap: 1.5rem;
}

.info-icon {
  font-size: 2rem;
  background: rgba(139, 92, 246, 0.2);
  border-radius: 12px;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 15px rgba(139, 92, 246, 0.3);
}

.info-content h3 {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: white;
}

.info-content p {
  color: #94A3B8;
  font-size: 0.95rem;
  line-height: 1.6;
}

.contact-form-container {
  flex: 1.5;
  padding: 3rem;
}

/* Form Styles */
.contact-form {
  width: 100%;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  color: #F8FAFC;
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid #334155;
  border-radius: 8px;
  color: #F8FAFC;
  font-size: 1rem;
  transition: all 0.3s ease;
  font-family: 'Inter', sans-serif;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #8B5CF6;
  box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.3);
}

.form-group input.error,
.form-group textarea.error {
  border-color: #EF4444;
}

.error-text {
  display: block;
  color: #EF4444;
  font-size: 0.85rem;
  margin-top: 0.5rem;
}

.submit-button {
  width: 100%;
  padding: 0.85rem;
  background: linear-gradient(to right, #8B5CF6, #EC4899);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
}

.submit-button:hover:not(:disabled) {
  box-shadow: 0 0 15px rgba(139, 92, 246, 0.5);
  transform: translateY(-2px);
}

.submit-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.loading-spinner {
  width: 1.5rem;
  height: 1.5rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top: 2px solid white;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.success-message {
  color: #10B981;
  background: rgba(16, 185, 129, 0.1);
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
}

.error-message {
  color: #EF4444;
  background: rgba(239, 68, 68, 0.1);
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
}

/* FAQ Section */
.faq-section {
  margin-bottom: 3rem;
}

.faq-container {
  background: rgba(30, 41, 59, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid #334155;
  padding: 3rem;
  box-shadow: 
    0 20px 25px -5px rgba(0, 0, 0, 0.2),
    0 10px 10px -5px rgba(0, 0, 0, 0.1),
    0 0 15px rgba(139, 92, 246, 0.5);
}

h2.glowing-text {
  font-size: 2.2rem;
  text-align: center;
  margin-bottom: 3rem;
}

.faqs {
  margin-bottom: 3rem;
}

.faq-item {
  background: rgba(15, 23, 42, 0.8);
  border-radius: 12px;
  border: 1px solid #334155;
  overflow: hidden;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
}

.faq-item.open {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 10px rgba(139, 92, 246, 0.3);
}

.faq-question {
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.faq-question h3 {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.1rem;
  color: #F8FAFC;
  margin: 0;
  font-weight: 500;
}

.faq-toggle {
  font-size: 1.5rem;
  font-weight: 300;
  color: #8B5CF6;
}

.faq-answer {
  padding: 0 1.5rem 1.5rem;
  color: #CBD5E1;
  font-size: 0.95rem;
  line-height: 1.6;
  transition: all 0.3s ease;
}

.more-questions {
  text-align: center;
  color: #CBD5E1;
  font-size: 1rem;
}

.more-questions a {
  color: #8B5CF6;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.more-questions a:hover {
  color: #EC4899;
  text-decoration: underline;
}

/* Responsive Design */
@media (max-width: 992px) {
  .contact-container {
    flex-direction: column;
  }
  
  .contact-info,
  .contact-form-container {
    padding: 2.5rem;
  }
}

@media (max-width: 768px) {
  .contact-container,
  .faq-container {
    padding: 2rem;
  }
  
  h1.glowing-text,
  h2.glowing-text {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .contact-container,
  .faq-container {
    padding: 1.5rem;
  }
  
  .contact-info > p {
    font-size: 1rem;
  }
  
  .info-icon {
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
  }
  
  .faq-question h3 {
    font-size: 1rem;
  }
}
</style>