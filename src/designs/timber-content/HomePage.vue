<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Define sections for content types
const contentSections = ref([
  {
    id: 'music',
    title: 'Music Streaming',
    subtitle: 'Millions of songs at your fingertips',
    description: 'Discover new artists, create playlists, and enjoy crystal-clear audio quality. Stream anywhere or download for offline listening.',
    image: 'https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg',
    color: '#3B52A5',
    features: [
      'Unlimited streaming of 70M+ songs',
      'HD audio quality (up to 320kbps)',
      'Personalized playlists & recommendations',
      'Offline downloads for on-the-go listening'
    ],
    ctaText: 'Start Listening',
    path: '/timber-content/music'
  },
  {
    id: 'video',
    title: 'Video Streaming',
    subtitle: 'Movies, TV shows & more',
    description: 'Thousands of titles in stunning HD and 4K quality. From the latest blockbusters to classic TV series and exclusive content.',
    image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg',
    color: '#FF6B6B',
    features: [
      'Extensive library of movies & TV shows',
      'Up to 4K Ultra HD quality',
      'New releases added weekly',
      'Multi-device streaming'
    ],
    ctaText: 'Start Watching',
    path: '/timber-content/video'
  },
  {
    id: 'sports',
    title: 'Live Sports',
    subtitle: 'Never miss a game',
    description: 'Stream live matches from top leagues and tournaments worldwide. Catch up with highlights, analysis, and exclusive sports content.',
    image: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg',
    color: '#38B2AC',
    features: [
      'Live coverage of major sporting events',
      'Multi-view for watching several games',
      'Real-time statistics and commentary',
      'Instant replays & highlights'
    ],
    ctaText: 'Watch Sports',
    path: '/timber-content/sports'
  },
  {
    id: 'games',
    title: 'Mobile Games',
    subtitle: 'Premium gaming without limits',
    description: 'Access a growing library of premium games with no ads or in-app purchases. From casual puzzles to immersive adventures.',
    image: 'https://images.pexels.com/photos/159393/gamepad-video-game-controller-game-controller-controller-159393.jpeg',
    color: '#ED8936',
    features: [
      '1000+ premium games without ads',
      'No in-app purchases needed',
      'New games added monthly',
      'Cloud saves across devices'
    ],
    ctaText: 'Start Playing',
    path: '/timber-content/games'
  },
  {
    id: 'audiobooks',
    title: 'Audiobook Library',
    subtitle: 'Stories brought to life',
    description: 'Thousands of audiobooks narrated by world-class voice actors. From bestsellers to classics, find your next great listen.',
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
    color: '#805AD5',
    features: [
      'Extensive library of audiobooks',
      'Professional narration',
      'Customizable playback speed',
      'Offline listening & bookmarks'
    ],
    ctaText: 'Start Listening',
    path: '/timber-content/audiobooks'
  }
]);

const testimonials = ref([
  {
    quote: "Timber Content has completely transformed how I enjoy entertainment. Having everything in one place with simple phone billing is exactly what I needed!",
    author: "Sophie K.",
    location: "Berlin, Germany"
  },
  {
    quote: "The audio quality for music is fantastic, and being able to switch over to a movie or audiobook seamlessly is incredibly convenient.",
    author: "James T.",
    location: "London, UK"
  },
  {
    quote: "I love the mobile games selection! No ads or in-app purchases means I can just enjoy playing without interruptions.",
    author: "Marco P.",
    location: "Milan, Italy"
  }
]);

const currentTestimonialIndex = ref(0);

const pricingPlans = ref([
  {
    name: "Basic",
    price: "€9.99",
    period: "/month",
    features: [
      "Access to one content category",
      "HD quality streaming",
      "Single device access",
      "Limited downloads"
    ],
    recommended: false
  },
  {
    name: "Premium",
    price: "€14.99",
    period: "/month",
    features: [
      "Access to all content categories",
      "HD & 4K streaming where available",
      "Stream on up to 3 devices",
      "Unlimited downloads",
      "Priority customer support"
    ],
    recommended: true
  },
  {
    name: "Family",
    price: "€19.99",
    period: "/month",
    features: [
      "Everything in Premium",
      "Up to 5 user profiles",
      "Stream on up to 5 devices",
      "Parental controls",
      "Content sharing"
    ],
    recommended: false
  }
]);

const phoneBillingAdvantages = ref([
  {
    title: "No Credit Card Required",
    description: "Simply charge to your phone bill - no need for credit card details",
    icon: "💳"
  },
  {
    title: "Quick & Simple Setup",
    description: "Sign up in seconds with just your phone number",
    icon: "⚡"
  },
  {
    title: "Secure Payments",
    description: "Trusted and secure payment method through your mobile carrier",
    icon: "🔒"
  },
  {
    title: "Convenient Billing",
    description: "All charges appear on your regular phone bill",
    icon: "📱"
  }
]);

const nextTestimonial = () => {
  currentTestimonialIndex.value = (currentTestimonialIndex.value + 1) % testimonials.value.length;
};

const prevTestimonial = () => {
  currentTestimonialIndex.value = (currentTestimonialIndex.value - 1 + testimonials.value.length) % testimonials.value.length;
};

const navigateToSection = (path) => {
  router.push(path);
};

const startSubscription = () => {
  router.push('/login');
};
</script>

<template>
  <div class="homepage">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>All Your Entertainment in One Place</h1>
        <p class="hero-subtitle">Stream music, watch videos, enjoy games, follow sports, and listen to audiobooks - all with one simple subscription</p>
        <div class="hero-buttons">
          <button class="primary-button" @click="startSubscription">Get Started</button>
          <button class="secondary-button" @click="startSubscription">Explore Content</button>
        </div>
      </div>
      <div class="hero-image">
        <div class="hero-gradient-overlay"></div>
        <div class="devices-illustration">
          <div class="device phone"></div>
          <div class="device tablet"></div>
        </div>
      </div>
    </section>

    <!-- Content Sections -->
    <section v-for="(section, index) in contentSections" 
             :key="section.id" 
             :class="['content-section', `bg-${index % 2 === 0 ? 'light' : 'dark'}`]">
      <div class="section-container" :class="{ 'reverse': index % 2 !== 0 }">
        <div class="section-image">
          <img :src="section.image" :alt="section.title">
          <div class="image-overlay" :style="{ background: `linear-gradient(to right, ${section.color}99, ${section.color}22)` }"></div>
        </div>
        <div class="section-content">
          <h2 :style="{ color: section.color }">{{ section.title }}</h2>
          <p class="section-subtitle">{{ section.subtitle }}</p>
          <p class="section-description">{{ section.description }}</p>
          <ul class="features-list">
            <li v-for="feature in section.features" :key="feature">
              <span class="feature-check" :style="{ color: section.color }">✓</span>
              {{ feature }}
            </li>
          </ul>
          <button class="section-cta" 
                  :style="{ background: section.color }"
                  @click="navigateToSection(section.path)">
            {{ section.ctaText }}
          </button>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section class="pricing-section">
      <div class="section-header">
        <h2>Simple Pricing, Incredible Value</h2>
        <p>Choose the plan that's right for you</p>
      </div>
      
      <div class="pricing-container">
        <div v-for="plan in pricingPlans" 
             :key="plan.name" 
             class="pricing-plan"
             :class="{ 'recommended': plan.recommended }">
          <div v-if="plan.recommended" class="recommended-badge">Best Value</div>
          <h3>{{ plan.name }}</h3>
          <div class="price">
            <span class="amount">{{ plan.price }}</span>
            <span class="period">{{ plan.period }}</span>
          </div>
          <ul class="plan-features">
            <li v-for="feature in plan.features" :key="feature">
              <span class="feature-check">✓</span> {{ feature }}
            </li>
          </ul>
          <button class="plan-cta" @click="startSubscription">Subscribe Now</button>
        </div>
      </div>
    </section>

    <!-- Mobile Billing Section -->
    <section class="mobile-billing-section">
      <div class="billing-container">
        <div class="billing-content">
          <h2>Easy Payment with Phone Billing</h2>
          <p>No credit card? No problem. Enjoy hassle-free billing directly to your mobile phone account.</p>
          
          <div class="advantages-grid">
            <div v-for="advantage in phoneBillingAdvantages" :key="advantage.title" class="advantage-card">
              <div class="advantage-icon">{{ advantage.icon }}</div>
              <h3>{{ advantage.title }}</h3>
              <p>{{ advantage.description }}</p>
            </div>
          </div>
          
          <div class="billing-steps">
            <div class="step">
              <div class="step-number">1</div>
              <p>Choose your plan</p>
            </div>
            <div class="step-arrow">→</div>
            <div class="step">
              <div class="step-number">2</div>
              <p>Enter your phone number</p>
            </div>
            <div class="step-arrow">→</div>
            <div class="step">
              <div class="step-number">3</div>
              <p>Confirm with SMS</p>
            </div>
            <div class="step-arrow">→</div>
            <div class="step">
              <div class="step-number">4</div>
              <p>Start enjoying content</p>
            </div>
          </div>
        </div>
        
        <div class="carrier-logos">
          <p>Compatible with all major mobile carriers</p>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials-section">
      <div class="testimonial-container">
        <h2>What Our Users Say</h2>
        
        <div class="testimonial-carousel">
          <button @click="prevTestimonial" class="carousel-arrow prev">&lsaquo;</button>
          
          <div class="testimonial-card">
            <div class="testimonial-quote">{{ testimonials[currentTestimonialIndex].quote }}</div>
            <div class="testimonial-author">
              <div class="author-name">{{ testimonials[currentTestimonialIndex].author }}</div>
              <div class="author-location">{{ testimonials[currentTestimonialIndex].location }}</div>
            </div>
          </div>
          
          <button @click="nextTestimonial" class="carousel-arrow next">&rsaquo;</button>
        </div>
        
        <div class="testimonial-dots">
          <span v-for="(_, index) in testimonials" 
                :key="index" 
                @click="currentTestimonialIndex = index"
                :class="{ active: currentTestimonialIndex === index }"></span>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-container">
        <h2>Ready to Experience Premium Entertainment?</h2>
        <p>Join millions of satisfied users enjoying unlimited content with Timber Content</p>
        <button class="primary-button large" @click="startSubscription">Get Started Today</button>
      </div>
    </section>
  </div>
</template>

<style scoped>
.homepage {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: #1F2937;
}

/* Hero Section */
.hero {
  position: relative;
  min-height: 90vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: linear-gradient(135deg, #3B52A5 0%, #4C6EF5 100%);
  color: white;
  overflow: hidden;
}

.hero-content {
  padding: 8rem 3rem;
  z-index: 2;
}

.hero h1 {
  font-size: 3.5rem;
  font-weight: 900;
  margin-bottom: 1.5rem;
  line-height: 1.1;
}

.hero-subtitle {
  font-size: 1.3rem;
  opacity: 0.9;
  margin-bottom: 2.5rem;
  line-height: 1.6;
  max-width: 600px;
}

.hero-buttons {
  display: flex;
  gap: 1.5rem;
}

.primary-button {
  background: white;
  color: #3B52A5;
  font-size: 1.1rem;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.primary-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.primary-button.large {
  padding: 1.2rem 3rem;
  font-size: 1.2rem;
}

.secondary-button {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  font-size: 1.1rem;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  border: 2px solid white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.secondary-button:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-3px);
}

.hero-image {
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.hero-gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, rgba(59, 82, 165, 0.9) 0%, rgba(59, 82, 165, 0) 100%);
  z-index: 1;
}

.devices-illustration {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
}

.device {
  position: absolute;
  background: #1F2937;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
  border: 8px solid #374151;
  border-radius: 20px;
}

.phone {
  width: 180px;
  height: 350px;
  top: 50%;
  left: 30%;
  transform: translate(-50%, -50%) rotate(-15deg);
}

.tablet {
  width: 300px;
  height: 220px;
  top: 60%;
  right: -10%;
  transform: translate(-50%, -50%) rotate(15deg);
}

/* Content Sections */
.content-section {
  padding: 7rem 2rem;
  overflow: hidden;
}

.bg-light {
  background: white;
}

.bg-dark {
  background: #F9FAFB;
}

.section-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.section-container.reverse {
  direction: rtl;
}

.section-container.reverse .section-content {
  direction: ltr;
}

.section-image {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  height: 100%;
  max-height: 500px;
}

.section-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
}

.section-container:hover .section-image img {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.section-content {
  padding: 2rem 0;
}

.section-content h2 {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.section-subtitle {
  font-size: 1.5rem;
  font-weight: 600;
  color: #4B5563;
  margin-bottom: 1.5rem;
}

.section-description {
  color: #6B7280;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.features-list {
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
}

.features-list li {
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.1rem;
  color: #4B5563;
}

.feature-check {
  font-weight: bold;
  font-size: 1.2rem;
}

.section-cta {
  color: white;
  font-size: 1.1rem;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.section-cta:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

/* Pricing Section */
.pricing-section {
  padding: 7rem 2rem;
  background: linear-gradient(135deg, #F5F9FF 0%, #E6F0FF 100%);
}

.section-header {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;
}

.section-header h2 {
  font-size: 3rem;
  color: #3B52A5;
  margin-bottom: 1rem;
  font-weight: 800;
}

.section-header p {
  color: #6B7280;
  font-size: 1.2rem;
}

.pricing-container {
  display: flex;
  justify-content: center;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.pricing-plan {
  background: white;
  border-radius: 20px;
  padding: 3rem 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  flex: 1;
  max-width: 350px;
  position: relative;
  transition: all 0.3s ease;
}

.pricing-plan:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.pricing-plan.recommended {
  border: 3px solid #3B52A5;
  padding-top: 4rem;
}

.recommended-badge {
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  background: #3B52A5;
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.9rem;
  white-space: nowrap;
}

.pricing-plan h3 {
  font-size: 1.8rem;
  color: #3B52A5;
  margin-bottom: 1rem;
  text-align: center;
}

.price {
  text-align: center;
  margin-bottom: 2rem;
}

.amount {
  font-size: 3.5rem;
  font-weight: 800;
  color: #1F2937;
}

.period {
  color: #6B7280;
  font-size: 1.2rem;
}

.plan-features {
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
}

.plan-features li {
  padding: 0.75rem 0;
  border-bottom: 1px solid #F3F4F6;
  color: #4B5563;
}

.plan-features li:last-child {
  border-bottom: none;
}

.plan-cta {
  width: 100%;
  background: #3B52A5;
  color: white;
  padding: 1rem;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.plan-cta:hover {
  background: #4C6EF5;
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(59, 82, 165, 0.2);
}

/* Mobile Billing Section */
.mobile-billing-section {
  padding: 7rem 2rem;
  background: white;
}

.billing-container {
  max-width: 1200px;
  margin: 0 auto;
}

.billing-content {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.billing-content h2 {
  font-size: 3rem;
  color: #3B52A5;
  margin-bottom: 1.5rem;
  font-weight: 800;
}

.billing-content p {
  color: #6B7280;
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto 3rem;
  line-height: 1.6;
}

.advantages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.advantage-card {
  background: #F9FAFB;
  padding: 2rem;
  border-radius: 20px;
  transition: transform 0.3s ease;
}

.advantage-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
}

.advantage-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.advantage-card h3 {
  color: #3B52A5;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.advantage-card p {
  color: #6B7280;
  font-size: 1rem;
  margin: 0;
}

.billing-steps {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  max-width: 900px;
  margin: 0 auto;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.step-number {
  width: 3rem;
  height: 3rem;
  background: #3B52A5;
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-bottom: 1rem;
}

.step p {
  color: #4B5563;
  font-weight: 500;
  margin: 0;
  max-width: 130px;
}

.step-arrow {
  color: #3B52A5;
  font-size: 2rem;
  margin-top: -1rem;
}

.carrier-logos {
  margin-top: 4rem;
  text-align: center;
  color: #6B7280;
  font-size: 1.1rem;
  font-style: italic;
}

/* Testimonials Section */
.testimonials-section {
  padding: 7rem 2rem;
  background: #F9FAFB;
}

.testimonial-container {
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
}

.testimonial-container h2 {
  font-size: 3rem;
  color: #3B52A5;
  margin-bottom: 3rem;
  font-weight: 800;
}

.testimonial-carousel {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
}

.testimonial-card {
  background: white;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  max-width: 700px;
  position: relative;
}

.testimonial-card::before {
  content: '"';
  position: absolute;
  top: 2rem;
  left: 2rem;
  font-size: 5rem;
  font-family: 'Georgia', serif;
  color: #E5E7EB;
  line-height: 0;
}

.testimonial-quote {
  font-size: 1.3rem;
  font-style: italic;
  color: #4B5563;
  line-height: 1.8;
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
}

.testimonial-author {
  text-align: right;
}

.author-name {
  font-weight: 700;
  color: #3B52A5;
  font-size: 1.1rem;
}

.author-location {
  color: #6B7280;
  font-size: 0.9rem;
}

.carousel-arrow {
  background: #3B52A5;
  color: white;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.carousel-arrow:hover {
  background: #4C6EF5;
  transform: scale(1.1);
}

.testimonial-dots {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
}

.testimonial-dots span {
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  background: #D1D5DB;
  cursor: pointer;
  transition: all 0.3s ease;
}

.testimonial-dots span.active {
  background: #3B52A5;
  transform: scale(1.2);
}

/* CTA Section */
.cta-section {
  background: linear-gradient(135deg, #3B52A5 0%, #4C6EF5 100%);
  color: white;
  text-align: center;
  padding: 7rem 2rem;
}

.cta-container {
  max-width: 800px;
  margin: 0 auto;
}

.cta-section h2 {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  font-weight: 800;
}

.cta-section p {
  font-size: 1.3rem;
  margin-bottom: 2.5rem;
  opacity: 0.9;
}

/* Responsive Styling */
@media (max-width: 1200px) {
  .section-container {
    gap: 3rem;
  }
  
  .pricing-container {
    flex-wrap: wrap;
  }
  
  .pricing-plan {
    flex-basis: calc(50% - 2rem);
    max-width: none;
  }
}

@media (max-width: 1024px) {
  .hero {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .hero-content {
    padding: 5rem 2rem 3rem;
  }
  
  .hero-subtitle {
    margin-left: auto;
    margin-right: auto;
  }
  
  .hero-buttons {
    justify-content: center;
  }
  
  .pricing-plan {
    flex-basis: 100%;
    max-width: 350px;
  }
}

@media (max-width: 768px) {
  .section-container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .section-container.reverse {
    direction: ltr;
  }
  
  .section-content h2 {
    font-size: 2.5rem;
  }
  
  .section-subtitle {
    font-size: 1.3rem;
  }
  
  .advantages-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .billing-steps {
    flex-direction: column;
    gap: 0;
  }
  
  .step-arrow {
    transform: rotate(90deg);
  }
  
  .carousel-arrow {
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1.2rem;
  }
}

@media (max-width: 640px) {
  .hero h1 {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
  
  .hero-buttons {
    flex-direction: column;
    gap: 1rem;
  }
  
  .primary-button, .secondary-button {
    width: 100%;
  }
  
  .section-content h2 {
    font-size: 2rem;
  }
  
  .section-subtitle {
    font-size: 1.2rem;
  }
  
  .section-description {
    font-size: 1rem;
  }
  
  .features-list li {
    font-size: 1rem;
  }
  
  .testimonial-card {
    padding: 2rem;
  }
  
  .testimonial-quote {
    font-size: 1.1rem;
  }
  
  .cta-section h2 {
    font-size: 2.2rem;
  }
  
  .cta-section p {
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .content-section {
    padding: 5rem 1.5rem;
  }
  
  .section-cta {
    width: 100%;
  }
  
  .testimonial-carousel {
    gap: 1rem;
  }
  
  .carousel-arrow {
    width: 2rem;
    height: 2rem;
    font-size: 1rem;
  }
}
</style>