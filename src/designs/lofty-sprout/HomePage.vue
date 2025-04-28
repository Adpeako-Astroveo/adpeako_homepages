<script setup>
import { ref } from 'vue';

const entertainmentSections = ref([
  {
    title: 'Music Streaming',
    description: 'Dive into a world of endless music. From chart-topping hits to underground gems, discover your next favorite track with crystal-clear sound quality.',
    image: 'https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg',
    features: ['Premium Audio Quality', 'Offline Mode', 'Personalized Playlists', 'Lyrics Support']
  },
  {
    title: 'Video Streaming',
    description: 'Experience entertainment like never before with our vast collection of movies, TV shows, and exclusive content. Stream in stunning quality on any device.',
    image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg',
    features: ['4K Ultra HD', 'Multiple Languages', 'Download & Watch', 'Smart Recommendations']
  },
  {
    title: 'Live Sports',
    description: 'Never miss a moment of action. Watch live matches, catch highlights, and follow your favorite teams across all major sports leagues worldwide.',
    image: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg',
    features: ['Live Coverage', 'Multi-cam Views', 'Stats & Analysis', 'Instant Replays']
  },
  {
    title: 'Mobile Games',
    description: 'Level up your gaming experience with our selection of premium mobile games. From casual fun to competitive multiplayer, find your perfect match.',
    image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg',
    features: ['Cloud Saves', 'Online Multiplayer', 'Regular Updates', 'No Ads']
  },
  {
    title: 'Audiobook Library',
    description: 'Transform your daily routine with our vast collection of audiobooks. Listen to bestsellers and classics narrated by world-class voice artists.',
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
    features: ['Huge Collection', 'Offline Mode', 'Sleep Timer', 'Bookmarks Sync']
  }
]);

const mobilePaymentFeatures = ref([
  {
    title: 'Easy Mobile Billing',
    description: 'No credit card needed - charges go straight to your phone bill',
    icon: '📱'
  },
  {
    title: 'Instant Access',
    description: 'Start enjoying premium content immediately after confirmation',
    icon: '⚡'
  },
  {
    title: 'Secure & Safe',
    description: 'Protected by advanced encryption and security measures',
    icon: '🔒'
  }
]);

const plans = ref([
  {
    name: 'Basic Plan',
    price: 'Weekly billing',
    billing: 'Added to your phone bill',
    features: [
      'HD streaming quality',
      'Ad-free experience',
      'Basic game features',
      'Cancel anytime'
    ]
  },
  {
    name: 'Premium Plan',
    price: 'Monthly billing',
    billing: 'Added to your phone bill',
    features: [
      'Ultra HD streaming',
      'Multiple devices',
      'Full game features',
      'Priority support',
      'Exclusive content'
    ]
  }
]);

const supportedCarriers = ref([
  'All major mobile carriers supported'
]);
</script>

<template>
  <div class="lofty-sprout-homepage">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Your Complete<br>Mobile Entertainment Hub</h1>
        <p class="subtitle">Stream, Play, and Experience More - All Through Your Phone</p>
        <div class="carrier-logos">
          <p class="supported-text">{{ supportedCarriers[0] }}</p>
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

    <!-- Mobile Payment Section -->
    <section class="payment">
      <h2>Simple Mobile Payment</h2>
      <div class="features-grid">
        <div v-for="feature in mobilePaymentFeatures" :key="feature.title" class="feature-card">
          <span class="feature-icon">{{ feature.icon }}</span>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </div>
      </div>
    </section>

    <!-- Plans Section -->
    <section class="plans">
      <h2>Choose Your Entertainment Plan</h2>
      <div class="plans-grid">
        <div v-for="plan in plans" :key="plan.name" class="plan-card">
          <h3>{{ plan.name }}</h3>
          <div class="price">{{ plan.price }}</div>
          <p class="billing">{{ plan.billing }}</p>
          <ul class="plan-features">
            <li v-for="feature in plan.features" :key="feature">{{ feature }}</li>
          </ul>
          <button class="subscribe-btn">Get Started</button>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section class="how-it-works">
      <h2>Start in 3 Simple Steps</h2>
      <div class="steps">
        <div class="step">
          <div class="step-number">1</div>
          <h3>Choose Plan</h3>
          <p>Select what works for you</p>
        </div>
        <div class="step">
          <div class="step-number">2</div>
          <h3>Quick Verify</h3>
          <p>Confirm your phone number</p>
        </div>
        <div class="step">
          <div class="step-number">3</div>
          <h3>Enjoy</h3>
          <p>Start streaming instantly</p>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta">
      <h2>Ready for Endless Entertainment?</h2>
      <p>Join millions enjoying premium content - no credit card needed</p>
      <button class="cta-button">Start Now</button>
    </section>
  </div>
</template>

<style scoped>
.lofty-sprout-homepage {
  color: #1a202c;
  padding-top: 64px;
}

.hero {
  background: linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%);
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
  color: #FF6B6B;
  margin-bottom: 1rem;
}

.section-content p {
  font-size: 1.1rem;
  color: #4a5568;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.features-list {
  list-style: none;
  padding: 0;
}

.features-list li {
  padding-left: 2rem;
  position: relative;
  margin-bottom: 0.5rem;
  color: #4a5568;
}

.features-list li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #4ECDC4;
}

.payment {
  background: #f7fafc;
  padding: 6rem 2rem;
  text-align: center;
}

.payment h2 {
  font-size: 2.5rem;
  color: #FF6B6B;
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
  color: #FF6B6B;
  margin-bottom: 1rem;
}

.plans {
  padding: 6rem 2rem;
  text-align: center;
}

.plans h2 {
  font-size: 2.5rem;
  color: #FF6B6B;
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
  color: #FF6B6B;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.price {
  font-size: 2rem;
  font-weight: 800;
  color: #FF6B6B;
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
  background: #FF6B6B;
  color: white;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  border: none;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s ease;
}

.subscribe-btn:hover {
  background: #FF5252;
}

.how-it-works {
  background: #f7fafc;
  padding: 6rem 2rem;
  text-align: center;
}

.how-it-works h2 {
  font-size: 2.5rem;
  color: #FF6B6B;
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
  background: #FF6B6B;
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
  color: #FF6B6B;
  margin-bottom: 0.5rem;
}

.cta {
  background: linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%);
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
  color: #FF6B6B;
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