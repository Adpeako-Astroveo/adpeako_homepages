<script setup>
import { ref } from 'vue';

const entertainmentSections = ref([
  {
    title: 'Music Streaming',
    description: 'Dive into millions of tracks across every genre. From chart-topping hits to indie gems, discover your next favorite song with crystal-clear audio quality.',
    image: 'https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg',
    features: ['Hi-Fi Audio Quality', 'Offline Mode', 'Smart Playlists', 'Lyrics Support']
  },
  {
    title: 'Video Streaming',
    description: 'Experience endless entertainment with our vast collection of movies, TV shows, and exclusive series. Stream in stunning quality wherever you are.',
    image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg',
    features: ['4K Ultra HD', 'Multiple Languages', 'Download & Watch', 'Family Profiles']
  },
  {
    title: 'Live Sports',
    description: 'Never miss a moment of action. Watch live matches, catch highlights, and follow your favorite teams across all major sports leagues worldwide.',
    image: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg',
    features: ['Live Coverage', 'Multi-cam Views', 'Stats & Analysis', 'Instant Replays']
  },
  {
    title: 'Mobile Games',
    description: 'Access a world of gaming excitement right from your phone. From casual fun to competitive multiplayer, find your perfect gaming experience.',
    image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg',
    features: ['Cloud Saves', 'Online Multiplayer', 'Regular Updates', 'No Ads']
  },
  {
    title: 'Audiobook Library',
    description: 'Immerse yourself in stories narrated by world-class voice artists. Our extensive collection includes bestsellers, classics, and exclusive productions.',
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
    features: ['Huge Collection', 'Offline Mode', 'Sleep Timer', 'Bookmarks Sync']
  }
]);

const paymentFeatures = ref([
  {
    title: 'Easy Mobile Billing',
    description: 'Simply charge to your phone bill - no credit card needed',
    icon: '📱'
  },
  {
    title: 'Start Instantly',
    description: 'Begin enjoying content right after confirmation',
    icon: '⚡'
  },
  {
    title: 'Secure & Safe',
    description: 'Protected by advanced encryption technology',
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

const stats = ref([
  { number: '10M+', label: 'Active Users' },
  { number: '100K+', label: 'Content Items' },
  { number: '24/7', label: 'Support' }
]);

const handleGetStarted = () => {
  window.location.href = 'https://yellow-racoon.com/subscribe';
};
</script>

<template>
  <div class="yellow-racoon-homepage">
    <!-- Navigation Header -->
    <nav class="nav-header">
      <div class="nav-container">
        <div class="nav-logo">
          <img src="../../../public/yellow-racoon-logo.svg" alt="Yellow Racoon" class="logo" />
          <span class="logo-text">Yellow Racoon</span>
        </div>
        <div class="nav-links">
          <a href="#entertainment" class="nav-link">Entertainment</a>
          <a href="#pricing" class="nav-link">Pricing</a>
          <a href="#support" class="nav-link">Support</a>
          <button class="login-btn" @click="handleGetStarted">Login</button>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Your Ultimate<br>Mobile Entertainment Hub</h1>
        <p class="subtitle">Stream, Play, and Experience More - All Through Your Phone</p>
        <div class="hero-stats">
          <div v-for="stat in stats" :key="stat.number" class="stat-item">
            <span class="stat-number">{{ stat.number }}</span>
            <span class="stat-label">{{ stat.label }}</span>
          </div>
        </div>
        <button class="cta-button" @click="handleGetStarted">Get Started Now</button>
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

    <!-- Payment Section -->
    <section class="payment">
      <h2>Simple Mobile Payment</h2>
      <div class="features-grid">
        <div v-for="feature in paymentFeatures" :key="feature.title" class="feature-card">
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
          <button class="subscribe-btn" @click="handleGetStarted">Get Started</button>
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
          <p>Select your perfect package</p>
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
      <button class="cta-button" @click="handleGetStarted">Start Now</button>
    </section>
  </div>
</template>

<style scoped>
.yellow-racoon-homepage {
  color: #1a202c;
  padding-top: 64px;
}

.nav-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(5px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  padding: 1rem 0;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-logo {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.logo {
  height: 40px;
  width: auto;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  color: #FFB800;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  color: #4a5568;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #FFB800;
}

.login-btn {
  background: #FFB800;
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  border: none;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.login-btn:hover {
  background: #FFA200;
  transform: translateY(-2px);
}

.hero {
  background: linear-gradient(135deg, #FFB800 0%, #FFA200 100%);
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
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
}

.subtitle {
  font-size: 1.5rem;
  opacity: 0.9;
  margin-bottom: 3rem;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 4rem;
  margin: 4rem 0;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: bold;
  color: white;
}

.stat-label {
  font-size: 1.1rem;
  opacity: 0.9;
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
  color: #FFB800;
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
  color: #FFB800;
}

.payment {
  background: #f7fafc;
  padding: 6rem 2rem;
  text-align: center;
}

.payment h2 {
  font-size: 2.5rem;
  color: #FFB800;
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
  color: #FFB800;
  margin-bottom: 1rem;
}

.plans {
  padding: 6rem 2rem;
  text-align: center;
}

.plans h2 {
  font-size: 2.5rem;
  color: #FFB800;
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
  color: #FFB800;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.price {
  font-size: 2rem;
  font-weight: 800;
  color: #FFB800;
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
  background: #FFB800;
  color: white;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  border: none;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s ease;
}

.subscribe-btn:hover {
  background: #FFA200;
}

.how-it-works {
  background: #f7fafc;
  padding: 6rem 2rem;
  text-align: center;
}

.how-it-works h2 {
  font-size: 2.5rem;
  color: #FFB800;
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
  background: #FFB800;
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
  color: #FFB800;
  margin-bottom: 0.5rem;
}

.cta {
  background: linear-gradient(135deg, #FFB800 0%, #FFA200 100%);
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
  color: #FFB800;
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
  .nav-container {
    padding: 0 1rem;
  }

  .nav-links {
    gap: 1rem;
  }

  .logo-text {
    display: none;
  }

  .nav-link {
    font-size: 0.9rem;
  }

  .hero h1 {
    font-size: 2.5rem;
  }

  .hero-stats {
    flex-direction: column;
    gap: 2rem;
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