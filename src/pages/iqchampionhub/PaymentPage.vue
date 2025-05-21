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
      'Standard streaming quality',
      'Mobile-only streaming',
      'No offline downloads'
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
      'Unlimited offline downloads',
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
      'Personalized recommendations',
      'Parental controls',
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
    icon: '1️⃣'
  },
  {
    title: 'Enter Your Phone Number',
    description: 'Provide your mobile number for billing purposes.',
    icon: '2️⃣'
  },
  {
    title: 'Confirm via SMS',
    description: 'We\'ll send you a verification code to confirm your subscription.',
    icon: '3️⃣'
  },
  {
    title: 'Start Enjoying',
    description: 'Once confirmed, your subscription is active immediately.',
    icon: '4️⃣'
  }
]);

// FAQ items
const faqs = ref([
  {
    question: 'How does phone billing work?',
    answer: 'Phone billing allows you to pay for your subscription through your mobile phone bill or prepaid balance. When you subscribe, the charges will appear on your next phone bill or be deducted from your prepaid balance immediately, depending on your mobile service provider.',
    isOpen: false
  },
  {
    question: 'Is my payment information secure?',
    answer: 'Yes, your payment information is completely secure. We never store your full payment details. The billing is processed directly through your mobile carrier\'s secure infrastructure, minimizing any potential security risks.',
    isOpen: false
  },
  {
    question: 'Can I cancel my subscription at any time?',
    answer: 'Yes, you can cancel your subscription at any time with no cancellation fees. Your subscription will remain active until the end of your current billing period, after which you will no longer be charged.',
    isOpen: false
  },
  {
    question: 'Which mobile carriers support phone billing?',
    answer: 'We support most major mobile carriers globally, including AT&T, Verizon, T-Mobile, Vodafone, Orange, Telefónica, and many more. During the subscription process, we\'ll let you know if your carrier is supported.',
    isOpen: false
  },
  {
    question: 'Will there be any hidden fees?',
    answer: 'No, there are no hidden fees. The price you see is the price you pay. All taxes and processing fees are included in the displayed subscription price.',
    isOpen: false
  }
]);

const toggleFaq = (index) => {
  faqs.value[index].isOpen = !faqs.value[index].isOpen;
};

const handleSubscribe = (planName) => {
  router.push('/login');
};
</script>

<template>
  <div class="payment-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Simple Phone Billing</h1>
        <p class="subheading">Subscribe with just your phone number. No credit card required.</p>
      </div>
    </section>

    <!-- Pricing Section -->
    <section class="pricing-section">
      <div class="container">
        <h2>Choose Your Plan</h2>
        <div class="pricing-grid">
          <div v-for="plan in plans" :key="plan.name" class="pricing-card" :class="{ 'recommended': plan.recommended }">
            <div v-if="plan.recommended" class="recommended-badge">Most Popular</div>
            <h3>{{ plan.name }}</h3>
            <div class="price">
              <span class="amount">{{ plan.price }}</span>
              <span class="period">per month</span>
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
    <section class="how-it-works">
      <div class="container">
        <h2>How Phone Billing Works</h2>
        <div class="steps-grid">
          <div v-for="step in steps" :key="step.title" class="step-card">
            <div class="step-icon">{{ step.icon }}</div>
            <h3>{{ step.title }}</h3>
            <p>{{ step.description }}</p>
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
        <p>Access premium entertainment with simple phone billing</p>
        <button @click="handleSubscribe('Premium')" class="cta-button">Subscribe Now</button>
      </div>
    </section>
  </div>
</template>

<style scoped>
.payment-page {
  min-height: 100vh;
  color: #333;
  padding-top: 65px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #6C63FF 0%, #FF6584 100%);
  color: white;
  padding: 6rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg') center/cover no-repeat;
  opacity: 0.15;
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
}

.hero h1 {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  text-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

.subheading {
  font-size: 1.5rem;
  opacity: 0.9;
}

/* Pricing Section */
.pricing-section {
  padding: 5rem 0;
}

.pricing-section h2, 
.how-it-works h2, 
.faq-section h2 {
  font-size: 2.2rem;
  margin-bottom: 3rem;
  color: #6C63FF;
  text-align: center;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.pricing-card {
  background: white;
  border-radius: 1rem;
  padding: 2.5rem 2rem;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  position: relative;
  border: 1px solid #e6e6e6;
}

.pricing-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.15);
}

.pricing-card.recommended {
  border: 2px solid #44C7B0;
  transform: scale(1.05);
  z-index: 10;
}

.pricing-card.recommended:hover {
  transform: scale(1.05) translateY(-10px);
}

.recommended-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: #44C7B0;
  color: white;
  font-size: 0.8rem;
  font-weight: bold;
  padding: 0.4rem 1.2rem;
  border-radius: 20px;
}

.pricing-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #6C63FF;
  text-align: center;
}

.price {
  text-align: center;
  margin-bottom: 2rem;
}

.amount {
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
}

.period {
  font-size: 1rem;
  color: #666;
  margin-left: 0.5rem;
}

.features-list {
  list-style: none;
  margin: 0 0 2rem;
  padding: 0;
}

.features-list li {
  padding: 0.8rem 0;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  align-items: center;
}

.features-list li:last-child {
  border-bottom: none;
}

.check-icon {
  color: #44C7B0;
  margin-right: 0.8rem;
  font-weight: bold;
}

.subscribe-button {
  background: #6C63FF;
  color: white;
  width: 100%;
  padding: 1rem;
  border-radius: 0.5rem;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.pricing-card.recommended .subscribe-button {
  background: #44C7B0;
}

.subscribe-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(108, 99, 255, 0.2);
}

.pricing-card.recommended .subscribe-button:hover {
  box-shadow: 0 6px 20px rgba(68, 199, 176, 0.2);
}

/* How It Works */
.how-it-works {
  padding: 5rem 0;
  background: #f9f9f9;
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.step-card {
  background: white;
  border-radius: 1rem;
  padding: 2.5rem 2rem;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  transition: all 0.3s ease;
}

.step-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.1);
}

.step-icon {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}

.step-card h3 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #6C63FF;
}

.step-card p {
  color: #666;
  line-height: 1.6;
}

/* FAQ Section */
.faq-section {
  padding: 5rem 0;
}

.faq-list {
  max-width: 900px;
  margin: 0 auto;
}

.faq-item {
  background: white;
  border-radius: 0.5rem;
  overflow: hidden;
  margin-bottom: 1.5rem;
  box-shadow: 0 3px 10px rgba(0,0,0,0.05);
  transition: all 0.3s ease;
}

.faq-item:hover {
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.faq-item.open {
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
}

.faq-question {
  padding: 1.5rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.faq-question h3 {
  font-size: 1.1rem;
  color: #333;
  margin: 0;
  transition: color 0.3s ease;
}

.faq-item.open .faq-question h3 {
  color: #6C63FF;
}

.toggle-icon {
  font-size: 1.5rem;
  font-weight: bold;
  color: #6C63FF;
}

.faq-answer {
  padding: 0 1.5rem 1.5rem;
  color: #666;
  line-height: 1.6;
}

/* CTA Section */
.cta-section {
  padding: 7rem 0;
  text-align: center;
  background: linear-gradient(135deg, #6C63FF 0%, #FF6584 100%);
  color: white;
}

.cta-section h2 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: white;
}

.cta-section p {
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
}

.cta-button {
  background: #44C7B0;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(68, 199, 176, 0.4);
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(68, 199, 176, 0.5);
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
  .hero {
    padding: 5rem 1.5rem;
  }
  
  .hero h1 {
    font-size: 2.5rem;
  }
  
  .subheading {
    font-size: 1.2rem;
  }
  
  .pricing-section h2, 
  .how-it-works h2, 
  .faq-section h2,
  .cta-section h2 {
    font-size: 1.8rem;
  }
  
  .amount {
    font-size: 2rem;
  }
  
  .faq-question h3 {
    font-size: 1rem;
  }
  
  .cta-section p {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .hero h1 {
    font-size: 2rem;
  }
  
  .container {
    padding: 0 1.5rem;
  }
  
  .pricing-card {
    padding: 2rem 1.5rem;
  }
  
  .cta-button {
    padding: 0.8rem 2rem;
    font-size: 1rem;
  }
}
</style>