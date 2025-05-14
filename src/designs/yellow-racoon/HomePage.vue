<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const entertainmentSections = ref([
  {
    title: 'Music Streaming',
    description: 'Dive into millions of tracks across every genre. From chart-topping hits to indie gems, discover your next favorite song.',
    image: 'https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg',
    link: '/entertainment/music'
  },
  {
    title: 'Video Streaming',
    description: 'Experience endless entertainment with our vast collection of movies, TV shows, and exclusive series.',
    image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg',
    link: '/entertainment/video'
  },
  {
    title: 'Live Sports',
    description: 'Never miss a moment of action. Watch live matches, catch highlights, and follow your favorite teams.',
    image: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg',
    link: '/entertainment/sports'
  },
  {
    title: 'Mobile Games',
    description: 'Access a world of gaming excitement right from your phone. From casual fun to competitive multiplayer.',
    image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg',
    link: '/entertainment/games'
  },
  {
    title: 'Audiobook Library',
    description: 'Immerse yourself in stories narrated by world-class voice artists. Our extensive collection includes bestsellers and classics.',
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
    link: '/entertainment/audiobooks'
  }
]);

const features = ref([
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
    name: 'Free',
    price: '$0',
    features: [
      'Basic content access',
      'Ad-supported streaming',
      'Standard quality',
      'Single device'
    ],
    highlighted: true
  },
  {
    name: 'Basic',
    price: '$4.99',
    features: [
      'Ad-free experience',
      'HD streaming',
      'Download & watch',
      'Two devices'
    ]
  },
  {
    name: 'Premium',
    price: '$9.99',
    features: [
      'All Basic features',
      '4K Ultra HD',
      'Five devices',
      'Exclusive content'
    ]
  }
]);

const handleGetStarted = () => {
  router.push('/login');
};

const navigateToSection = (link) => {
  router.push(link);
};
</script>

<template>
  <div class="yellow-racoon-homepage">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Your Ultimate Entertainment Hub</h1>
        <p class="subtitle">Stream, Play, and Experience More - All Through Your Phone</p>
        <button class="cta-button" @click="handleGetStarted">Login Now</button>
      </div>
    </section>

    <!-- Entertainment Sections -->
    <section class="entertainment">
      <div v-for="section in entertainmentSections" :key="section.title" class="content-section">
        <div class="section-image">
          <img :src="section.image" :alt="section.title" />
        </div>
        <div class="section-content">
          <h2 @click="navigateToSection(section.link)" class="clickable-title">{{ section.title }}</h2>
          <p>{{ section.description }}</p>
          <button class="section-button" @click="navigateToSection(section.link)">Learn More</button>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <h2>Why Choose Us</h2>
      <div class="features-grid">
        <div v-for="feature in features" :key="feature.title" class="feature-card">
          <span class="feature-icon">{{ feature.icon }}</span>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section class="pricing">
      <h2>Choose Your Plan</h2>
      <div class="plans-grid">
        <div 
          v-for="plan in plans" 
          :key="plan.name" 
          class="plan-card"
          :class="{ 'highlighted': plan.highlighted }"
        >
          <h3>{{ plan.name }}</h3>
          <div class="price">{{ plan.price }}</div>
          <ul class="plan-features">
            <li v-for="feature in plan.features" :key="feature">{{ feature }}</li>
          </ul>
          <button class="subscribe-btn" @click="handleGetStarted">Login Now</button>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta">
      <h2>Ready for Endless Entertainment?</h2>
      <p>Join millions enjoying premium content - no credit card needed</p>
      <button class="cta-button" @click="handleGetStarted">Login Now</button>
    </section>
  </div>
</template>

<style scoped>
.yellow-racoon-homepage {
  color: #1a202c;
  padding-top: 64px;
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
}

.subtitle {
  font-size: 1.5rem;
  opacity: 0.9;
  margin-bottom: 2rem;
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
  cursor: pointer;
  transition: color 0.3s ease;
}

.section-content h2:hover {
  color: #FFA200;
}

.clickable-title {
  cursor: pointer;
}

.section-button {
  background: #FFB800;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  border: none;
  font-weight: 500;
  cursor: pointer;
  margin-top: 1.5rem;
  transition: background 0.3s ease;
}

.section-button:hover {
  background: #FFA200;
}

.features {
  padding: 6rem 2rem;
  background: #f7fafc;
}

.features h2 {
  text-align: center;
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
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
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

.pricing {
  padding: 6rem 2rem;
}

.pricing h2 {
  text-align: center;
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
  transition: transform 0.3s ease;
}

.plan-card.highlighted {
  border: 2px solid #FFB800;
  transform: scale(1.05);
}

.plan-card:hover {
  transform: translateY(-5px);
}

.plan-card.highlighted:hover {
  transform: scale(1.05) translateY(-5px);
}

.plan-card h3 {
  color: #FFB800;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.price {
  font-size: 2.5rem;
  font-weight: 800;
  color: #FFB800;
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
  width: 100%;
  padding: 1rem;
  border-radius: 0.5rem;
  border: none;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s ease;
}

.subscribe-btn:hover {
  background: #FFA200;
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

/* Improved Responsive Styles */
@media (max-width: 1024px) {
  .content-section {
    gap: 3rem;
  }
  
  .plan-card.highlighted {
    transform: scale(1.03);
  }
  
  .plan-card.highlighted:hover {
    transform: scale(1.03) translateY(-5px);
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 6rem 1.5rem;
  }
  
  .hero h1 {
    font-size: 2.5rem;
  }
  
  .subtitle {
    font-size: 1.2rem;
  }
  
  .content-section {
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-bottom: 4rem;
  }
  
  .content-section:nth-child(even) {
    direction: ltr;
  }
  
  .section-image img {
    height: 300px;
  }
  
  .section-content h2 {
    font-size: 1.8rem;
  }
  
  .features h2, .pricing h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  
  .cta h2 {
    font-size: 2rem;
  }
  
  .cta p {
    font-size: 1rem;
  }
  
  .entertainment, .features, .pricing {
    padding: 4rem 1.5rem;
  }
  
  .cta {
    padding: 4rem 1.5rem;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 5rem 1rem;
  }
  
  .hero h1 {
    font-size: 2rem;
  }
  
  .subtitle {
    font-size: 1rem;
  }
  
  .section-image img {
    height: 250px;
  }
  
  .section-content h2 {
    font-size: 1.5rem;
  }
  
  .feature-card, .plan-card {
    padding: 1.5rem 1rem;
  }
  
  .feature-icon {
    font-size: 2rem;
  }
  
  .features-grid {
    gap: 1.5rem;
  }
  
  .plans-grid {
    gap: 1.5rem;
  }
  
  .price {
    font-size: 2rem;
  }
  
  .cta-button {
    padding: 0.8rem 2rem;
    font-size: 1rem;
  }
  
  .entertainment, .features, .pricing, .cta {
    padding: 3rem 1rem;
  }
  
  .plan-card {
    margin-bottom: 1rem;
  }
  
  .plan-card.highlighted {
    transform: none;
    border-width: 3px;
  }
  
  .plan-card.highlighted:hover {
    transform: translateY(-5px);
  }
}
</style>