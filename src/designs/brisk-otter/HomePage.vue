<script setup>
import { ref } from 'vue';

const mobilePaymentFeatures = ref([
  {
    title: 'Mobile Billing',
    description: 'Charges added directly to your phone bill',
    icon: '📱'
  },
  {
    title: 'Instant Access',
    description: 'Start streaming immediately after confirmation',
    icon: '⚡'
  },
  {
    title: 'Secure Payments',
    description: 'Protected by advanced security measures',
    icon: '🔒'
  }
]);

const supportedCarriers = ref([
  'Major mobile carriers supported'
]);

const entertainmentSections = ref([
  {
    title: 'Premium Movies',
    description: 'Stream the latest blockbusters and timeless classics.',
    image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg',
    features: ['4K Quality', 'Offline Mode', 'Multiple Languages']
  },
  {
    title: 'Live Sports',
    description: 'Never miss a game with our comprehensive sports coverage.',
    image: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg',
    features: ['Live Streaming', 'Instant Replays', 'Multi-cam Views']
  },
  {
    title: 'Music Collection',
    description: 'Millions of tracks at your fingertips.',
    image: 'https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg',
    features: ['Hi-Fi Audio', 'Offline Mode', 'Lyrics']
  }
]);

const plans = ref([
  {
    name: 'Basic Plan',
    price: 'Weekly billing',
    billing: 'Charged directly to your phone bill',
    features: [
      'HD streaming',
      'Ad-free experience',
      'Cancel anytime'
    ]
  },
  {
    name: 'Premium Plan',
    price: 'Monthly billing',
    billing: 'Charged directly to your phone bill',
    features: [
      'Ultra HD streaming',
      'Multiple devices',
      'Exclusive content',
      'Priority support'
    ]
  }
]);
</script>

<template>
  <div class="brisk-otter-homepage">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Stream Now,<br>Pay with Your Phone</h1>
        <p class="subtitle">The easiest way to access premium entertainment</p>
        <div class="carrier-logos">
          <p class="supported-text">{{ supportedCarriers[0] }}</p>
        </div>
      </div>
    </section>

    <!-- Mobile Payment Features -->
    <section class="mobile-payment">
      <h2>Simple Mobile Payment</h2>
      <div class="features-grid">
        <div v-for="feature in mobilePaymentFeatures" :key="feature.title" class="feature-card">
          <span class="feature-icon">{{ feature.icon }}</span>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </div>
      </div>
    </section>

    <!-- Entertainment Sections -->
    <section class="entertainment">
      <div v-for="section in entertainmentSections" :key="section.title" class="content-section">
        <div class="section-image">
          <img :src="section.image" :alt="section.title" />
        </div>
        <div class="section-content">
          <h2>{{ section.title }}</h2>
          <p>{{ section.description }}</p>
          <ul class="features-list">
            <li v-for="feature in section.features" :key="feature">{{ feature }}</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Pricing Plans -->
    <section class="pricing">
      <h2>Choose Your Plan</h2>
      <div class="plans-grid">
        <div v-for="plan in plans" :key="plan.name" class="plan-card">
          <h3>{{ plan.name }}</h3>
          <div class="price">{{ plan.price }}</div>
          <p class="billing">{{ plan.billing }}</p>
          <ul class="plan-features">
            <li v-for="feature in plan.features" :key="feature">{{ feature }}</li>
          </ul>
          <button class="subscribe-btn">Subscribe Now</button>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section class="how-it-works">
      <h2>How Mobile Billing Works</h2>
      <div class="steps">
        <div class="step">
          <div class="step-number">1</div>
          <h3>Choose Your Plan</h3>
          <p>Select your preferred subscription</p>
        </div>
        <div class="step">
          <div class="step-number">2</div>
          <h3>Verify Number</h3>
          <p>Quick mobile verification</p>
        </div>
        <div class="step">
          <div class="step-number">3</div>
          <h3>Start Streaming</h3>
          <p>Instant access to content</p>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta">
      <h2>Ready to Start?</h2>
      <p>No credit card needed - just your phone number</p>
      <button class="cta-button">Get Started Now</button>
    </section>
  </div>
</template>

<style scoped>
.brisk-otter-homepage {
  color: #1a202c;
  padding-top: 64px;
}

.hero {
  background: linear-gradient(135deg, #2E7D32 0%, #4CAF50 100%);
  color: white;
  padding: 8rem 2rem;
  text-align: center;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero h1 {
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.subtitle {
  font-size: 1.5rem;
  opacity: 0.9;
  margin-bottom: 3rem;
}

.carrier-logos {
  margin-top: 4rem;
}

.supported-text {
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.mobile-payment {
  padding: 6rem 2rem;
  background: #f7fafc;
}

.mobile-payment h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #2E7D32;
  margin-bottom: 3rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  display: block;
}

.feature-card h3 {
  color: #2E7D32;
  margin-bottom: 1rem;
}

.entertainment {
  padding: 6rem 2rem;
}

.content-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto 6rem;
  align-items: center;
}

.content-section:nth-child(even) {
  direction: rtl;
}

.content-section:nth-child(even) .section-content {
  direction: ltr;
}

.section-image img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 1rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.section-content h2 {
  font-size: 2rem;
  color: #2E7D32;
  margin-bottom: 1rem;
}

.features-list {
  list-style: none;
  padding: 0;
  margin-top: 1.5rem;
}

.features-list li {
  padding-left: 2rem;
  position: relative;
  margin-bottom: 0.5rem;
}

.features-list li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #4CAF50;
}

.pricing {
  background: #f7fafc;
  padding: 6rem 2rem;
  text-align: center;
}

.pricing h2 {
  font-size: 2.5rem;
  color: #2E7D32;
  margin-bottom: 3rem;
}

.plans-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.plan-card {
  background: white;
  padding: 3rem 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.plan-card h3 {
  color: #2E7D32;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.price {
  font-size: 2rem;
  font-weight: 800;
  color: #2E7D32;
  margin-bottom: 0.5rem;
}

.billing {
  color: #666;
  margin-bottom: 2rem;
}

.plan-features {
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
}

.plan-features li {
  padding: 0.5rem 0;
  color: #4a5568;
}

.subscribe-btn {
  background: #2E7D32;
  color: white;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  border: none;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s ease;
}

.subscribe-btn:hover {
  background: #1B5E20;
}

.how-it-works {
  padding: 6rem 2rem;
  text-align: center;
}

.how-it-works h2 {
  font-size: 2.5rem;
  color: #2E7D32;
  margin-bottom: 3rem;
}

.steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.step {
  padding: 2rem;
}

.step-number {
  width: 3rem;
  height: 3rem;
  background: #2E7D32;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 auto 1.5rem;
}

.step h3 {
  color: #2E7D32;
  margin-bottom: 0.5rem;
}

.cta {
  background: linear-gradient(135deg, #2E7D32 0%, #4CAF50 100%);
  color: white;
  text-align: center;
  padding: 6rem 2rem;
}

.cta h2 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.cta p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.cta-button {
  background: white;
  color: #2E7D32;
  font-size: 1.2rem;
  padding: 1rem 3rem;
  border-radius: 0.5rem;
  border: none;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.5rem;
  }

  .content-section {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .content-section:nth-child(even) {
    direction: ltr;
  }

  .section-image img {
    height: 300px;
  }

  .cta h2 {
    font-size: 2rem;
  }
}
</style>