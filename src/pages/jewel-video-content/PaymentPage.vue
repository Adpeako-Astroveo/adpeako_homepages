<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Pricing plans
const plans = ref([
  {
    name: 'Basic',
    price: '$4.99',
    billingPeriod: 'monthly',
    features: [
      'Access to basic content library',
      'Standard definition streaming',
      'Mobile-only streaming',
      'Limited downloads',
      'Ad-supported experience'
    ],
    recommended: false
  },
  {
    name: 'Premium',
    price: '$9.99',
    billingPeriod: 'monthly',
    features: [
      'Full content library access',
      'HD streaming quality',
      'Stream on any device',
      'Unlimited downloads',
      'Ad-free experience'
    ],
    recommended: true
  },
  {
    name: 'Family',
    price: '$14.99',
    billingPeriod: 'monthly',
    features: [
      'Everything in Premium',
      'Up to 5 user profiles',
      'Parental controls',
      'Premium content access',
      '4K streaming where available'
    ],
    recommended: false
  }
]);

// How it works steps
const steps = ref([
  {
    title: 'Choose Your Plan',
    description: 'Select the subscription plan that best fits your needs.',
    icon: '1'
  },
  {
    title: 'Enter Your Phone Number',
    description: 'Provide your mobile number for billing purposes.',
    icon: '2'
  },
  {
    title: 'Verify via SMS',
    description: 'We\'ll send you a one-time code to confirm your subscription.',
    icon: '3'
  },
  {
    title: 'Enjoy Premium Content',
    description: 'Once confirmed, your subscription is active immediately.',
    icon: '4'
  }
]);

// FAQ items
const faqs = ref([
  {
    question: 'How does phone billing work?',
    answer: 'With phone billing, your subscription fee is automatically added to your monthly mobile phone bill or deducted from your prepaid balance. This eliminates the need for credit cards or other payment methods, making it a simple and secure way to pay for digital services.',
    isOpen: false
  },
  {
    question: 'Which mobile carriers are supported?',
    answer: 'We support most major mobile carriers worldwide, including but not limited to AT&T, Verizon, T-Mobile, Vodafone, Orange, and many others. During the subscription process, we\'ll confirm if your carrier is supported.',
    isOpen: false
  },
  {
    question: 'Is my payment information secure?',
    answer: 'Absolutely. With phone billing, we never store your credit card or banking information. The charges are processed directly through your mobile carrier\'s secure billing system, minimizing any potential security risks.',
    isOpen: false
  },
  {
    question: 'Can I cancel my subscription at any time?',
    answer: 'Yes, you can cancel your subscription at any time with no cancellation fees. Your subscription will remain active until the end of your current billing period, after which you will no longer be charged.',
    isOpen: false
  },
  {
    question: 'Will there be any hidden fees?',
    answer: 'No, there are no hidden fees. The price you see is the price you pay. All taxes and processing fees are included in the displayed subscription price.',
    isOpen: false
  }
]);

const toggleFaq = (index) => {
  faqs.value.forEach((faq, i) => {
    if (i === index) {
      faq.isOpen = !faq.isOpen;
    } else {
      faq.isOpen = false;
    }
  });
};

const handleSubscribe = (planName) => {
  router.push('/login');
};
</script>

<template>
  <div class="payment-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <span class="badge">EASY PAYMENT</span>
        <h1>Pay With Your Phone Bill</h1>
        <p>No credit card needed. Simple, secure, and convenient.</p>
      </div>
      <div class="hero-backdrop"></div>
    </section>

    <!-- Pricing Section -->
    <section class="pricing-section">
      <div class="container">
        <h2>Choose Your Plan</h2>
        <div class="pricing-grid">
          <div 
            v-for="plan in plans" 
            :key="plan.name" 
            class="pricing-card"
            :class="{ 'recommended': plan.recommended }"
          >
            <div v-if="plan.recommended" class="recommended-badge">Most Popular</div>
            <h3>{{ plan.name }}</h3>
            <div class="price">
              <span class="amount">{{ plan.price }}</span>
              <span class="period">/ {{ plan.billingPeriod }}</span>
            </div>
            <ul class="features-list">
              <li v-for="feature in plan.features" :key="feature">
                <span class="check-icon">✓</span>
                {{ feature }}
              </li>
            </ul>
            <button @click="handleSubscribe(plan.name)" class="subscribe-button">Select Plan</button>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section class="how-it-works-section">
      <div class="container">
        <h2>How Phone Billing Works</h2>
        <div class="steps-grid">
          <div v-for="step in steps" :key="step.title" class="step-card">
            <div class="step-number">{{ step.icon }}</div>
            <div class="step-content">
              <h3>{{ step.title }}</h3>
              <p>{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="benefits-section">
      <div class="container">
        <h2>Why Choose Phone Billing?</h2>
        <div class="benefits-grid">
          <div class="benefit-card">
            <div class="benefit-icon">🔒</div>
            <h3>Secure</h3>
            <p>No need to share credit card or banking information online</p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">⚡</div>
            <h3>Fast</h3>
            <p>Quick setup with just your phone number—no forms to fill out</p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">🌐</div>
            <h3>Convenient</h3>
            <p>One simple bill for all your services</p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">🛡️</div>
            <h3>Protected</h3>
            <p>Carrier-grade security protects your payment information</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section">
      <div class="container">
        <h2>Frequently Asked Questions</h2>
        <div class="faq-list">
          <div 
            v-for="(faq, index) in faqs" 
            :key="index" 
            class="faq-item"
            :class="{ 'open': faq.isOpen }"
          >
            <div class="faq-question" @click="toggleFaq(index)">
              <h3>{{ faq.question }}</h3>
              <span class="toggle-icon">{{ faq.isOpen ? '−' : '+' }}</span>
            </div>
            <div class="faq-answer" v-show="faq.isOpen">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <h2>Ready to Get Started?</h2>
        <p>Join millions of users enjoying premium content billed directly to their phone.</p>
        <button @click="handleSubscribe('Premium')" class="primary-button">Subscribe Now</button>
        <p class="cta-note">No credit card needed. Cancel anytime.</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.payment-page {
  min-height: 100vh;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  color: #1a1a1a;
  background-color: #f9fafb;
  padding-top: 64px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* Hero Section */
.hero-section {
  position: relative;
  height: 400px;
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
  background-image: url('https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg');
  background-size: cover;
  background-position: center;
  filter: brightness(0.4);
  z-index: -1;
}

.hero-content {
  max-width: 800px;
  padding: 2rem;
  position: relative;
  z-index: 1;
}

.badge {
  display: inline-block;
  background: #9333ea;
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  letter-spacing: 1px;
}

.hero-section h1 {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  background: linear-gradient(to right, #9333ea, #c026d3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 2px 10px rgba(0,0,0,0.2);
}

.hero-section p {
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.9);
}

.primary-button {
  background: linear-gradient(to right, #9333ea, #c026d3);
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(147, 51, 234, 0.3);
}

.primary-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 25px rgba(147, 51, 234, 0.4);
}

/* Section Titles */
.pricing-section h2, 
.how-it-works-section h2,
.benefits-section h2, 
.faq-section h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  text-align: center;
  color: #581c87;
  position: relative;
}

.pricing-section h2::after,
.how-it-works-section h2::after,
.benefits-section h2::after,
.faq-section h2::after {
  content: "";
  position: absolute;
  bottom: -0.75rem;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 4px;
  background: linear-gradient(to right, #9333ea, #c026d3);
  border-radius: 2px;
}

/* Pricing Section */
.pricing-section {
  padding: 5rem 0;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.pricing-card {
  background: white;
  border-radius: 1.5rem;
  padding: 2.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  position: relative;
  border: 2px solid #f5f5f5;
}

.pricing-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.pricing-card.recommended {
  border-color: #9333ea;
  transform: scale(1.05);
  z-index: 1;
}

.pricing-card.recommended:hover {
  transform: scale(1.05) translateY(-10px);
}

.recommended-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(to right, #9333ea, #c026d3);
  color: white;
  padding: 0.4rem 1.5rem;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 600;
  white-space: nowrap;
}

.pricing-card h3 {
  font-size: 1.8rem;
  font-weight: 700;
  text-align: center;
  color: #581c87;
  margin-bottom: 1rem;
}

.price {
  text-align: center;
  margin-bottom: 2rem;
}

.amount {
  font-size: 3rem;
  font-weight: 700;
  color: #9333ea;
}

.period {
  font-size: 1.1rem;
  color: #71717a;
}

.features-list {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem;
}

.features-list li {
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;
  color: #404040;
  font-size: 1rem;
}

.check-icon {
  color: #9333ea;
  margin-right: 0.8rem;
  font-weight: bold;
  flex-shrink: 0;
}

.subscribe-button {
  width: 100%;
  background: linear-gradient(to right, #9333ea, #c026d3);
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 1rem 0;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(147, 51, 234, 0.2);
}

.subscribe-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 25px rgba(147, 51, 234, 0.3);
}

/* How It Works Section */
.how-it-works-section {
  padding: 5rem 0;
  background: #f6f5ff;
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.step-card {
  display: flex;
  gap: 1.5rem;
  padding: 2rem;
  background: white;
  border-radius: 1.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.step-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.step-number {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(to right, #9333ea, #c026d3);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 1.3rem;
  flex-shrink: 0;
}

.step-content h3 {
  font-size: 1.3rem;
  font-weight: 600;
  color: #581c87;
  margin-bottom: 0.75rem;
}

.step-content p {
  color: #404040;
  font-size: 0.95rem;
  line-height: 1.6;
}

/* Benefits Section */
.benefits-section {
  padding: 5rem 0;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.benefit-card {
  background: white;
  border-radius: 1.5rem;
  padding: 2.5rem;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.benefit-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.benefit-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.benefit-card h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #581c87;
  margin-bottom: 1rem;
}

.benefit-card p {
  color: #404040;
  font-size: 1rem;
  line-height: 1.6;
}

/* FAQ Section */
.faq-section {
  padding: 5rem 0;
  background: #f6f5ff;
}

.faq-list {
  max-width: 900px;
  margin: 0 auto;
}

.faq-item {
  background: white;
  border-radius: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  overflow: hidden;
}

.faq-item:hover {
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.faq-item.open {
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
}

.faq-question {
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.faq-item.open .faq-question {
  background-color: #f9f5ff;
}

.faq-question h3 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #581c87;
  margin: 0;
}

.toggle-icon {
  font-size: 1.5rem;
  color: #9333ea;
  font-weight: 600;
  transition: all 0.3s ease;
}

.faq-item.open .toggle-icon {
  transform: rotate(180deg);
}

.faq-answer {
  padding: 0 2rem 1.5rem;
  color: #404040;
  font-size: 1rem;
  line-height: 1.6;
}

/* CTA Section */
.cta-section {
  padding: 6rem 0;
  background: linear-gradient(135deg, #9333ea, #c026d3);
  color: white;
  text-align: center;
}

.cta-section h2 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: white;
}

.cta-section p {
  font-size: 1.3rem;
  margin-bottom: 2.5rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  color: rgba(255, 255, 255, 0.9);
}

.cta-note {
  font-size: 1rem;
  opacity: 0.8;
  margin-top: 1.5rem;
}

/* Responsive Design */
@media (max-width: 992px) {
  .pricing-card.recommended {
    transform: scale(1);
  }
  
  .pricing-card.recommended:hover {
    transform: translateY(-10px);
  }
}

@media (max-width: 768px) {
  .hero-section {
    height: 350px;
  }
  
  .hero-section h1 {
    font-size: 2.5rem;
  }
  
  .hero-section p {
    font-size: 1.2rem;
  }
  
  .pricing-section h2, 
  .how-it-works-section h2, 
  .benefits-section h2,
  .faq-section h2,
  .cta-section h2 {
    font-size: 2rem;
  }
  
  .amount {
    font-size: 2.5rem;
  }
  
  .step-card {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .cta-section h2 {
    font-size: 2.2rem;
  }
  
  .cta-section p {
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .hero-section h1 {
    font-size: 2rem;
  }
  
  .hero-section p {
    font-size: 1rem;
  }
  
  .pricing-card {
    padding: 1.5rem;
  }
  
  .amount {
    font-size: 2.2rem;
  }
  
  .primary-button,
  .subscribe-button {
    font-size: 1rem;
    padding: 0.875rem 1.75rem;
  }
  
  .benefit-icon {
    font-size: 2.5rem;
  }
  
  .benefit-card h3 {
    font-size: 1.3rem;
  }
  
  .faq-question h3 {
    font-size: 1rem;
  }
}
</style>