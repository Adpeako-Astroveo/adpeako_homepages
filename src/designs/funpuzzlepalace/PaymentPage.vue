<script setup>
import { ref, computed } from 'vue';

// Payment plan options
const plans = ref([
  {
    id: 'monthly',
    name: 'Monthly',
    price: '$9.99',
    period: 'per month',
    features: [
      'Unlimited access to all games',
      'No ads or in-app purchases',
      'Play on any device',
      'Cancel anytime'
    ],
    popular: false
  },
  {
    id: 'quarterly',
    name: 'Quarterly',
    price: '$24.99',
    period: 'every 3 months',
    discount: 'Save 16%',
    features: [
      'All monthly plan features',
      'Priority customer support',
      'Early access to new games',
      'Cancel anytime'
    ],
    popular: true
  },
  {
    id: 'annual',
    name: 'Annual',
    price: '$89.99',
    period: 'per year',
    discount: 'Save 25%',
    features: [
      'All quarterly plan features',
      'Exclusive premium games',
      'Offline downloads',
      'Cancel anytime'
    ],
    popular: false
  }
]);

// Selected plan
const selectedPlan = ref('quarterly');

// Form state
const phoneNumber = ref('');
const countryCode = ref('+1');
const isAgreed = ref(false);
const isSubmitting = ref(false);
const submitError = ref('');
const verificationStep = ref(false);
const verificationCode = ref('');

// Available country codes
const countryCodes = ref([
  { code: '+1', name: 'United States/Canada (+1)' },
  { code: '+44', name: 'United Kingdom (+44)' },
  { code: '+49', name: 'Germany (+49)' },
  { code: '+33', name: 'France (+33)' },
  { code: '+61', name: 'Australia (+61)' },
  { code: '+81', name: 'Japan (+81)' },
  { code: '+91', name: 'India (+91)' },
  { code: '+55', name: 'Brazil (+55)' },
  { code: '+52', name: 'Mexico (+52)' },
  { code: '+34', name: 'Spain (+34)' },
  { code: '+86', name: 'China (+86)' },
  { code: '+39', name: 'Italy (+39)' },
  { code: '+7', name: 'Russia (+7)' },
  { code: '+82', name: 'South Korea (+82)' }
]);

// FAQ data
const faqs = ref([
  {
    question: 'How does phone billing work?',
    answer: 'Phone billing lets you pay for your subscription directly through your phone bill. After entering your mobile number and confirming via SMS, the subscription fee is automatically added to your monthly phone bill or deducted from your prepaid balance. No credit card or banking information required!',
    isOpen: false
  },
  {
    question: 'Is my phone number secure?',
    answer: 'Yes, absolutely! We use industry-standard encryption to protect your personal information. Your phone number is only used for billing purposes and to send you important account notifications. We never share your phone number with third parties except as required to process payments.',
    isOpen: false
  },
  {
    question: 'Can I change my plan later?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time from your account settings. If you upgrade, the new pricing will be applied immediately with a prorated adjustment. If you downgrade, the change will take effect at the start of your next billing cycle.',
    isOpen: false
  },
  {
    question: 'What happens if I cancel my subscription?',
    answer: 'You can cancel your subscription anytime through your account settings. Your access will continue until the end of your current billing period. After that, you won\'t be charged again and your access to premium content will end. You can resubscribe at any time.',
    isOpen: false
  },
  {
    question: 'Which mobile carriers are supported?',
    answer: 'We support most major mobile carriers worldwide, including AT&T, Verizon, T-Mobile, Vodafone, Orange, Telefónica, Telstra, and many more. During the signup process, we\'ll confirm if your carrier is supported in your region.',
    isOpen: false
  }
]);

const toggleFaq = (index) => {
  faqs.value[index].isOpen = !faqs.value[index].isOpen;
};

// Form validation
const validatePhoneNumber = () => {
  if (!phoneNumber.value) {
    submitError.value = 'Phone number is required';
    return false;
  }
  
  const phoneRegex = /^\d{7,15}$/;
  if (!phoneRegex.test(phoneNumber.value)) {
    submitError.value = 'Please enter a valid phone number';
    return false;
  }
  
  if (!isAgreed.value) {
    submitError.value = 'You must agree to the terms and billing conditions';
    return false;
  }
  
  return true;
};

const validateVerificationCode = () => {
  if (!verificationCode.value) {
    submitError.value = 'Verification code is required';
    return false;
  }
  
  const codeRegex = /^\d{6}$/;
  if (!codeRegex.test(verificationCode.value)) {
    submitError.value = 'Please enter a valid 6-digit code';
    return false;
  }
  
  return true;
};

// Submit handlers
const handleSubmit = async () => {
  submitError.value = '';
  
  if (!validatePhoneNumber()) return;
  
  isSubmitting.value = true;
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Move to verification step
    verificationStep.value = true;
    isSubmitting.value = false;
  } catch (error) {
    submitError.value = 'An error occurred. Please try again.';
    isSubmitting.value = false;
  }
};

const handleVerify = async () => {
  submitError.value = '';
  
  if (!validateVerificationCode()) return;
  
  isSubmitting.value = true;
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Show success message and redirect would happen here in a real app
    alert('Verification successful! Your subscription is now active.');
    isSubmitting.value = false;
  } catch (error) {
    submitError.value = 'Invalid verification code. Please try again.';
    isSubmitting.value = false;
  }
};

// Selected plan details
const selectedPlanDetails = computed(() => {
  return plans.value.find(plan => plan.id === selectedPlan.value);
});

// Format full phone number
const fullPhoneNumber = computed(() => {
  return `${countryCode.value}${phoneNumber.value}`;
});
</script>

<template>
  <div class="payment-page">
    <div class="page-container">
      <!-- Header Section -->
      <section class="payment-header">
        <h1 class="glowing-text">Easy Phone Billing</h1>
        <p>Subscribe with just your phone number. No credit card required.</p>
      </section>
      
      <!-- Plans Section -->
      <section class="plans-section">
        <h2>Choose Your Plan</h2>
        
        <div class="plans-container">
          <div 
            v-for="plan in plans" 
            :key="plan.id" 
            class="plan-card"
            :class="{ 'selected': selectedPlan === plan.id, 'popular': plan.popular }"
            @click="selectedPlan = plan.id"
          >
            <div v-if="plan.popular" class="popular-badge">Most Popular</div>
            <div class="plan-header">
              <h3>{{ plan.name }}</h3>
              <div class="plan-price">
                <span class="price">{{ plan.price }}</span>
                <span class="period">{{ plan.period }}</span>
              </div>
              <div v-if="plan.discount" class="plan-discount">{{ plan.discount }}</div>
            </div>
            
            <div class="plan-features">
              <ul>
                <li v-for="(feature, index) in plan.features" :key="index">
                  <span class="check-icon">✓</span>
                  {{ feature }}
                </li>
              </ul>
            </div>
            
            <div class="plan-action">
              <button class="select-plan-btn">
                {{ selectedPlan === plan.id ? 'Selected' : 'Select Plan' }}
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Payment Form Section -->
      <section class="payment-form-section">
        <h2>{{ verificationStep ? 'Verify Your Number' : 'Enter Your Phone Number' }}</h2>
        
        <div class="payment-form-container">
          <div v-if="submitError" class="error-message">
            {{ submitError }}
          </div>
          
          <div v-if="!verificationStep">
            <form @submit.prevent="handleSubmit" class="payment-form">
              <div class="form-group phone-input-group">
                <label for="phone">Phone Number</label>
                <div class="phone-input">
                  <select v-model="countryCode" class="country-code">
                    <option v-for="country in countryCodes" :key="country.code" :value="country.code">
                      {{ country.name }}
                    </option>
                  </select>
                  <input
                    type="tel"
                    id="phone"
                    v-model="phoneNumber"
                    placeholder="Enter your phone number"
                  />
                </div>
                <p class="phone-hint">We'll send a verification code to confirm your number</p>
              </div>
              
              <div class="terms-checkbox">
                <input type="checkbox" id="terms-agreement" v-model="isAgreed" />
                <label for="terms-agreement">
                  I agree to the <a href="/funpuzzlepalace/privacy">Terms & Conditions</a> and authorize Fun Puzzle Palace to bill my mobile phone for the {{ selectedPlanDetails.name.toLowerCase() }} subscription at {{ selectedPlanDetails.price }} {{ selectedPlanDetails.period }}.
                </label>
              </div>
              
              <div class="selected-plan-summary">
                <h3>Your Subscription</h3>
                <div class="summary-details">
                  <div class="summary-item">
                    <span>Plan:</span>
                    <span>{{ selectedPlanDetails.name }}</span>
                  </div>
                  <div class="summary-item">
                    <span>Price:</span>
                    <span>{{ selectedPlanDetails.price }} {{ selectedPlanDetails.period }}</span>
                  </div>
                  <div class="summary-item">
                    <span>Billing Method:</span>
                    <span>Mobile Phone Billing</span>
                  </div>
                </div>
              </div>
              
              <button 
                type="submit" 
                class="submit-button" 
                :disabled="isSubmitting"
              >
                <span v-if="isSubmitting" class="loading-spinner"></span>
                <span v-else>Continue</span>
              </button>
            </form>
          </div>
          
          <div v-else class="verification-step">
            <p class="verification-info">
              We've sent a 6-digit verification code to <strong>{{ fullPhoneNumber }}</strong>
            </p>
            
            <form @submit.prevent="handleVerify" class="verification-form">
              <div class="form-group">
                <label for="verification-code">Verification Code</label>
                <input
                  type="text"
                  id="verification-code"
                  v-model="verificationCode"
                  placeholder="Enter 6-digit code"
                  maxlength="6"
                  inputmode="numeric"
                  pattern="\d*"
                />
              </div>
              
              <div class="verification-actions">
                <button 
                  type="button" 
                  class="resend-button" 
                  @click="alert('Code resent to your phone')"
                >
                  Resend Code
                </button>
                
                <button 
                  type="button" 
                  class="change-number-button" 
                  @click="verificationStep = false"
                >
                  Change Number
                </button>
              </div>
              
              <button 
                type="submit" 
                class="submit-button" 
                :disabled="isSubmitting"
              >
                <span v-if="isSubmitting" class="loading-spinner"></span>
                <span v-else>Verify & Subscribe</span>
              </button>
            </form>
          </div>
        </div>
      </section>
      
      <!-- Security Notice -->
      <section class="security-notice">
        <div class="security-icon">🔒</div>
        <div class="security-text">
          <h3>Secure Payment</h3>
          <p>Your phone number is securely processed and protected. No credit card or banking information is required.</p>
        </div>
      </section>
      
      <!-- FAQ Section -->
      <section class="faq-section">
        <h2>Frequently Asked Questions</h2>
        
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
      </section>
    </div>
    
    <div class="payment-background">
      <div class="grid-lines"></div>
      <div class="glow-circle-1"></div>
      <div class="glow-circle-2"></div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

.payment-page {
  min-height: 100vh;
  background-color: #0F172A;
  color: #F8FAFC;
  font-family: 'Inter', sans-serif;
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
}

.payment-background {
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
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
}

/* Payment Header */
.payment-header {
  text-align: center;
  margin-bottom: 3rem;
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
  font-size: 2.8rem;
  background: linear-gradient(to right, #8B5CF6, #EC4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.payment-header p {
  color: #CBD5E1;
  font-size: 1.2rem;
}

/* Plans Section */
.plans-section {
  margin-bottom: 3rem;
}

.plans-section h2 {
  text-align: center;
  font-family: 'Orbitron', sans-serif;
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: #F8FAFC;
}

.plans-container {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
}

.plan-card {
  background: rgba(30, 41, 59, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid #334155;
  padding: 2rem;
  width: 100%;
  max-width: 300px;
  position: relative;
  transition: all 0.3s ease;
  cursor: pointer;
}

.plan-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 20px rgba(139, 92, 246, 0.3);
}

.plan-card.selected {
  border-color: #8B5CF6;
  box-shadow: 0 0 25px rgba(139, 92, 246, 0.5);
}

.plan-card.popular {
  border-color: #EC4899;
  transform: scale(1.05);
}

.plan-card.popular:hover {
  transform: translateY(-5px) scale(1.05);
}

.popular-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: #EC4899;
  color: white;
  font-weight: 600;
  font-size: 0.8rem;
  padding: 0.4rem 1.2rem;
  border-radius: 20px;
  white-space: nowrap;
  box-shadow: 0 4px 6px rgba(236, 72, 153, 0.3);
}

.plan-header {
  text-align: center;
  margin-bottom: 2rem;
}

.plan-header h3 {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.6rem;
  margin-bottom: 0.5rem;
  color: white;
}

.plan-price {
  margin-bottom: 0.5rem;
}

.price {
  font-size: 2.2rem;
  font-weight: 700;
  color: #8B5CF6;
}

.period {
  font-size: 1rem;
  color: #CBD5E1;
  margin-left: 0.25rem;
}

.plan-discount {
  display: inline-block;
  background: rgba(16, 185, 129, 0.2);
  color: #10B981;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
}

.plan-features {
  margin-bottom: 2rem;
}

.plan-features ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.plan-features li {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
  color: #E2E8F0;
  font-size: 0.95rem;
  line-height: 1.5;
}

.check-icon {
  color: #8B5CF6;
  font-weight: bold;
  flex-shrink: 0;
}

.plan-action {
  text-align: center;
}

.select-plan-btn {
  width: 100%;
  padding: 0.85rem 0;
  background: transparent;
  border: 1px solid #8B5CF6;
  color: #8B5CF6;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.select-plan-btn:hover {
  background: rgba(139, 92, 246, 0.1);
}

.plan-card.selected .select-plan-btn {
  background: #8B5CF6;
  color: white;
}

/* Payment Form Section */
.payment-form-section {
  margin-bottom: 3rem;
}

.payment-form-section h2 {
  text-align: center;
  font-family: 'Orbitron', sans-serif;
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: #F8FAFC;
}

.payment-form-container {
  background: rgba(30, 41, 59, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid #334155;
  padding: 2.5rem;
  box-shadow: 
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05),
    0 0 15px rgba(139, 92, 246, 0.3);
}

.payment-form, .verification-form {
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

.phone-input-group {
  margin-bottom: 2rem;
}

.phone-input {
  display: flex;
  gap: 0.75rem;
}

.country-code {
  width: 40%;
  padding: 0.75rem 1rem;
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid #334155;
  border-radius: 8px;
  color: #F8FAFC;
  font-size: 1rem;
}

.phone-input input {
  width: 60%;
  padding: 0.75rem 1rem;
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid #334155;
  border-radius: 8px;
  color: #F8FAFC;
  font-size: 1rem;
}

.phone-hint {
  margin-top: 0.5rem;
  color: #94A3B8;
  font-size: 0.85rem;
}

.form-group input:focus,
.country-code:focus {
  outline: none;
  border-color: #8B5CF6;
  box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.3);
}

.terms-checkbox {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 2.5rem;
}

.terms-checkbox label {
  color: #CBD5E1;
  font-size: 0.95rem;
  line-height: 1.5;
}

.terms-checkbox a {
  color: #8B5CF6;
  text-decoration: none;
  transition: all 0.3s ease;
}

.terms-checkbox a:hover {
  color: #EC4899;
  text-decoration: underline;
}

.selected-plan-summary {
  background: rgba(15, 23, 42, 0.5);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
}

.selected-plan-summary h3 {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: white;
}

.summary-details {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.summary-item {
  display: flex;
  justify-content: space-between;
  color: #CBD5E1;
  font-size: 0.95rem;
}

.summary-item span:last-child {
  font-weight: 500;
  color: #F8FAFC;
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

.error-message {
  color: #EF4444;
  background: rgba(239, 68, 68, 0.1);
  padding: 0.75rem 1rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
}

/* Verification Step */
.verification-step {
  text-align: center;
}

.verification-info {
  color: #CBD5E1;
  font-size: 1.1rem;
  margin-bottom: 2rem;
  line-height: 1.5;
}

.verification-form {
  max-width: 400px;
  margin: 0 auto;
}

.verification-form input {
  text-align: center;
  letter-spacing: 3px;
  font-size: 1.5rem;
  padding: 0.75rem 1rem;
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid #334155;
  border-radius: 8px;
  color: #F8FAFC;
  width: 100%;
}

.verification-actions {
  display: flex;
  justify-content: space-between;
  margin: 1.5rem 0 2rem;
}

.resend-button,
.change-number-button {
  background: transparent;
  border: none;
  color: #8B5CF6;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: underline;
}

.resend-button:hover,
.change-number-button:hover {
  color: #EC4899;
}

/* Security Notice */
.security-notice {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  background: rgba(16, 185, 129, 0.1);
  padding: 1.5rem;
  border-radius: 12px;
  margin-bottom: 3rem;
}

.security-icon {
  font-size: 2rem;
  color: #10B981;
}

.security-text h3 {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #10B981;
}

.security-text p {
  color: #CBD5E1;
  font-size: 0.95rem;
  line-height: 1.5;
}

/* FAQ Section */
.faq-section {
  margin-bottom: 3rem;
}

.faq-section h2 {
  text-align: center;
  font-family: 'Orbitron', sans-serif;
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: #F8FAFC;
}

.faqs {
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  background: rgba(30, 41, 59, 0.8);
  border-radius: 12px;
  border: 1px solid #334155;
  overflow: hidden;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
}

.faq-item.open {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 10px rgba(139, 92, 246, 0.3);
}

.faq-question {
  padding: 1.25rem;
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
  padding: 0 1.25rem 1.25rem;
  color: #CBD5E1;
  font-size: 0.95rem;
  line-height: 1.6;
  transition: all 0.3s ease;
}

/* Responsive Design */
@media (max-width: 768px) {
  .plans-container {
    flex-direction: column;
    align-items: center;
  }
  
  .plan-card {
    max-width: 100%;
  }
  
  .plan-card.popular {
    transform: none;
    order: -1;
  }
  
  .plan-card.popular:hover {
    transform: translateY(-5px);
  }
  
  .phone-input {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .country-code, .phone-input input {
    width: 100%;
  }
  
  h1.glowing-text {
    font-size: 2.3rem;
  }
  
  .payment-form-section h2,
  .plans-section h2,
  .faq-section h2 {
    font-size: 1.6rem;
  }
}

@media (max-width: 480px) {
  .page-container {
    padding: 0 1rem;
  }
  
  .payment-header p {
    font-size: 1rem;
  }
  
  .plan-header h3 {
    font-size: 1.3rem;
  }
  
  .price {
    font-size: 1.8rem;
  }
  
  .payment-form-container {
    padding: 1.5rem;
  }
  
  .verification-actions {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }
  
  .security-notice {
    flex-direction: column;
    text-align: center;
  }
}
</style>