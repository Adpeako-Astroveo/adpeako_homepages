<script setup>
import { ref } from 'vue';

const entertainmentSections = ref([
  {
    title: 'Movies',
    description: 'Immerse yourself in a vast collection of blockbusters, indie gems, and exclusive releases.',
    image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg',
    features: ['4K Ultra HD', 'Multiple Languages', 'Offline Downloads']
  },
  {
    title: 'Music',
    description: 'Experience crystal-clear sound with our curated playlists and millions of tracks.',
    image: 'https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg',
    features: ['Hi-Fi Quality', 'Personalized Playlists', 'Lyrics Support']
  },
  {
    title: 'Games',
    description: 'Play the latest mobile games with stunning graphics and seamless gameplay.',
    image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg',
    features: ['Cloud Gaming', 'Multiplayer Support', 'Regular Updates']
  },
  {
    title: 'Audiobooks',
    description: 'Listen to bestsellers narrated by world-class voice artists.',
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
    features: ['Huge Library', 'Bookmark Sync', 'Sleep Timer']
  },
  {
    title: 'Sports',
    description: 'Never miss a game with live sports streaming and highlights.',
    image: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg',
    features: ['Live Streaming', 'Multi-cam Views', 'Stats & Analysis']
  }
]);

const features = ref([
  {
    title: 'Premium Content',
    description: 'Access to exclusive shows, movies, and original productions',
    icon: '🎬'
  },
  {
    title: 'Multi-device Access',
    description: 'Watch on your TV, phone, tablet, or laptop',
    icon: '📱'
  },
  {
    title: 'Family Sharing',
    description: 'Share your subscription with up to 6 family members',
    icon: '👨‍👩‍👧‍👦'
  },
  {
    title: 'Offline Downloads',
    description: 'Download your favorite content to watch offline',
    icon: '⬇️'
  }
]);

const subscriptionFeatures = ref([
  {
    title: 'Automatic Renewal',
    description: 'Uninterrupted service with hassle-free automatic renewals',
    icon: '🔄'
  },
  {
    title: 'All-Inclusive Pricing',
    description: 'All taxes included with no surprise fees',
    icon: '💰'
  },
  {
    title: 'Full Refund Guarantee',
    description: 'Not satisfied? Get a full refund, no questions asked',
    icon: '✅'
  }
]);

const cancellationSteps = ref([
  'Contact our customer care team for assistance',
  'Request subscription cancellation',
  'Verify account details',
  'Receive confirmation email'
]);
</script>

<template>
  <div class="homepage">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Endless Entertainment<br>For Everyone</h1>
        <p class="subtitle">
          Elevate your entertainment experience with Plucky Sparrow where entertainment meets variety.
          Dive into a world of movies, music, games, audiobooks & sports.
        </p>
        <div class="hero-features">
          <div v-for="feature in features" :key="feature.title" class="feature-card">
            <span class="feature-icon">{{ feature.icon }}</span>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Entertainment Sections -->
    <section class="entertainment-sections">
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
    <section class="payment-section">
      <h2>Simple & Transparent Pricing</h2>
      <div class="subscription-features">
        <div v-for="feature in subscriptionFeatures" :key="feature.title" class="subscription-feature">
          <span class="feature-icon">{{ feature.icon }}</span>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </div>
      </div>

      <div class="cancellation-process">
        <h3>Easy Cancellation Process</h3>
        <div class="steps">
          <div v-for="(step, index) in cancellationSteps" :key="index" class="step">
            <span class="step-number">{{ index + 1 }}</span>
            <p>{{ step }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <h2>Ready to Start Your Journey?</h2>
      <p>Join millions of happy users experiencing premium entertainment</p>
      <button class="cta-button">Get Started Now</button>
    </section>
  </div>
</template>

<style scoped>
.homepage {
  font-family: 'Inter', sans-serif;
  color: #1a1a1a;
}

.hero {
  min-height: 100vh;
  background: linear-gradient(135deg, #f6f8fd 0%, #e9eeff 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.hero-content {
  max-width: 1200px;
  text-align: center;
}

.hero h1 {
  font-size: 4rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #2d3748 0%, #1a202c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subtitle {
  font-size: 1.5rem;
  color: #4a5568;
  max-width: 800px;
  margin: 0 auto 3rem;
  line-height: 1.6;
}

.hero-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
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

.entertainment-sections {
  padding: 4rem 2rem;
}

.content-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 0;
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

.section-content {
  padding: 2rem;
}

.section-content h2 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #2d3748;
}

.section-content p {
  font-size: 1.2rem;
  color: #4a5568;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.features-list {
  list-style: none;
  padding: 0;
}

.features-list li {
  margin-bottom: 1rem;
  padding-left: 2rem;
  position: relative;
  color: #4a5568;
}

.features-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #48bb78;
  font-weight: bold;
}

/* Payment Section Styles */
.payment-section {
  background: linear-gradient(135deg, #f8fafc 0%, #edf2f7 100%);
  padding: 6rem 2rem;
  text-align: center;
}

.payment-section h2 {
  font-size: 3rem;
  color: #2d3748;
  margin-bottom: 3rem;
}

.subscription-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto 4rem;
}

.subscription-feature {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.subscription-feature h3 {
  font-size: 1.5rem;
  color: #2d3748;
  margin: 1rem 0;
}

.subscription-feature p {
  color: #4a5568;
  line-height: 1.6;
}

.cancellation-process {
  max-width: 800px;
  margin: 4rem auto 0;
  background: white;
  padding: 3rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.cancellation-process h3 {
  font-size: 2rem;
  color: #2d3748;
  margin-bottom: 2rem;
}

.steps {
  display: grid;
  gap: 1.5rem;
}

.step {
  display: flex;
  align-items: center;
  gap: 1rem;
  text-align: left;
}

.step-number {
  background: #48bb78;
  color: white;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  flex-shrink: 0;
}

.step p {
  color: #4a5568;
  margin: 0;
}

.cta-section {
  background: linear-gradient(135deg, #2d3748 0%, #1a202c 100%);
  color: white;
  text-align: center;
  padding: 6rem 2rem;
}

.cta-section h2 {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.cta-section p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.cta-button {
  background: #48bb78;
  color: white;
  font-size: 1.2rem;
  padding: 1rem 2.5rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease;
}

.cta-button:hover {
  background: #38a169;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.5rem;
  }

  .content-section {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 2rem 0;
  }

  .content-section:nth-child(even) {
    direction: ltr;
  }

  .section-image img {
    height: 300px;
  }

  .subscription-features {
    grid-template-columns: 1fr;
  }

  .cancellation-process {
    padding: 2rem;
  }
}
</style>