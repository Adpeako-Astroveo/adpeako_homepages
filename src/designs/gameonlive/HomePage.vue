<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Hero section animation
onMounted(() => {
  setTimeout(() => {
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
      heroContent.classList.add('active');
    }
  }, 100);
});

// Entertainment sections
const entertainmentSections = ref([
  {
    title: 'Music Streaming',
    description: 'Access millions of songs across all genres. From chart-topping hits to indie gems, discover your next favorite track.',
    image: 'https://images.pexels.com/photos/4571219/pexels-photo-4571219.jpeg',
    path: '/gameonlive/music',
    features: ['HD Audio Quality', 'Personalized Playlists', 'Offline Mode', 'Lyrics Support']
  },
  {
    title: 'Video Streaming',
    description: 'Enjoy unlimited access to movies, TV shows, and exclusive content in stunning 4K quality. Your personal cinema, anywhere.',
    image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg',
    path: '/gameonlive/video',
    features: ['4K Ultra HD', 'Multiple Languages', 'Download & Watch', 'No Ads']
  },
  {
    title: 'Live Sports',
    description: 'Never miss a moment of action with our comprehensive coverage of major sporting events worldwide. Watch live matches, catch highlights, and follow your favorite teams.',
    image: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg',
    path: '/gameonlive/sports',
    features: ['Live HD Streaming', 'Multi-view Options', 'Real-time Stats', 'Expert Commentary']
  },
  {
    title: 'Mobile Games',
    description: 'Dive into a world of premium gaming without ads or in-app purchases. From casual fun to competitive multiplayer.',
    image: 'https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg',
    path: '/gameonlive/games',
    features: ['No In-app Purchases', 'Cloud Saves', 'Multiplayer Support', 'Regular Updates']
  },
  {
    title: 'Audiobook Library',
    description: 'Transform your commute with our vast audiobook collection. Listen to bestsellers narrated by world-class voice artists wherever you are.',
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
    path: '/gameonlive/audiobooks',
    features: ['Professional Narration', 'Offline Listening', 'Sleep Timer', 'Adjustable Speed']
  }
]);

// Payment features
const paymentFeatures = ref([
  {
    title: 'Easy Phone Billing',
    description: 'No credit card required. Charges are conveniently added directly to your monthly phone bill.',
    icon: '📱'
  },
  {
    title: 'Secure Transactions',
    description: 'Your information is protected with advanced encryption and security protocols.',
    icon: '🔒'
  },
  {
    title: 'Instant Access',
    description: 'Get immediate access to all premium content after quick mobile verification.',
    icon: '⚡'
  },
  {
    title: 'Global Compatibility',
    description: 'Works with all major mobile carriers worldwide for seamless billing.',
    icon: '🌐'
  }
]);

// Subscription plans
const plans = ref([
  {
    name: 'Basic',
    price: '9.99',
    period: '/month',
    features: [
      'Access to all entertainment categories',
      'HD streaming quality',
      'Single device streaming',
      'Ad-free experience'
    ],
    color: '#0055FF'
  },
  {
    name: 'Premium',
    price: '14.99',
    period: '/month',
    features: [
      'Everything in Basic',
      '4K Ultra HD where available',
      'Stream on up to 3 devices',
      'Unlimited downloads',
      'Priority customer support'
    ],
    color: '#00CCFF',
    recommended: true
  },
  {
    name: 'Family',
    price: '19.99',
    period: '/month',
    features: [
      'Everything in Premium',
      'Up to 6 user profiles',
      'Parental controls',
      'Stream on up to 6 devices',
      'Personalized recommendations'
    ],
    color: '#0055FF'
  }
]);

// How it works steps
const howItWorks = ref([
  {
    step: 1,
    title: 'Choose Your Plan',
    description: 'Select the entertainment package that suits your needs from our flexible subscription options.'
  },
  {
    step: 2,
    title: 'Enter Your Number',
    description: 'Provide your mobile number for secure verification and billing integration.'
  },
  {
    step: 3,
    title: 'Enjoy Premium Content',
    description: 'Instantly gain access to our complete entertainment library across all your devices.'
  }
]);

// Testimonials
const testimonials = ref([
  {
    text: "GameOnLive has transformed how I enjoy entertainment on the go. Having all my music, movies, games and books in one place is incredibly convenient!",
    name: "Sarah M.",
    location: "London, UK"
  },
  {
    text: "The mobile billing feature is genius - no need for credit cards or complicated payment forms. I just subscribe and everything is charged to my phone bill.",
    name: "Michael T.",
    location: "Berlin, Germany"
  },
  {
    text: "The quality of content is outstanding. From 4K movies to HD audio, everything looks and sounds amazing even on my older phone.",
    name: "Emma L.",
    location: "Paris, France"
  }
]);

const currentTestimonial = ref(0);
const intervalId = ref(null);

const nextTestimonial = () => {
  currentTestimonial.value = (currentTestimonial.value + 1) % testimonials.value.length;
};

const prevTestimonial = () => {
  currentTestimonial.value = (currentTestimonial.value - 1 + testimonials.value.length) % testimonials.value.length;
};

const startAutoRotate = () => {
  intervalId.value = setInterval(() => {
    nextTestimonial();
  }, 5000);
};

const stopAutoRotate = () => {
  if (intervalId.value) {
    clearInterval(intervalId.value);
  }
};

const navigateTo = (path) => {
  router.push(path);
};

const handleGetStarted = () => {
  router.push('/login');
};
</script>

<template>
  <div class="gameonlive-homepage">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-container">
        <div class="hero-content">
          <h1>Your Complete<br>Mobile Entertainment Hub</h1>
          <p>One subscription for all your entertainment needs - pay through your phone bill</p>
          <div class="hero-btns">
            <button class="primary-btn" @click="handleGetStarted">Get Started</button>
          </div>
        </div>
        <div class="hero-shape"></div>
      </div>
      <div class="hero-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fill-opacity="1" d="M0,128L48,138.7C96,149,192,171,288,165.3C384,160,480,128,576,112C672,96,768,96,864,122.7C960,149,1056,203,1152,208C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>

    <!-- Entertainment Categories -->
    <section class="entertainment-categories">
      <div class="section-container">
        <div class="section-header">
          <h2>All Your Entertainment in One Place</h2>
          <p>Access premium content across all categories with a single subscription</p>
        </div>
        
        <div class="categories">
          <div v-for="(category, index) in entertainmentSections" :key="category.title" 
               class="category-card" :class="{'reverse': index % 2 !== 0}">
            <div class="category-image">
              <img :src="category.image" :alt="category.title">
              <div class="category-overlay">
                <button class="explore-btn" @click="navigateTo(category.path)">Explore</button>
              </div>
            </div>
            <div class="category-content">
              <h3>{{ category.title }}</h3>
              <p>{{ category.description }}</p>
              <ul class="features-list">
                <li v-for="feature in category.features" :key="feature">
                  <span class="check-icon">✓</span>{{ feature }}
                </li>
              </ul>
              <button class="category-btn" @click="navigateTo(category.path)">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Phone Billing Section -->
    <section class="phone-billing">
      <div class="section-container">
        <div class="section-header">
          <h2>Simple Mobile Payment</h2>
          <p>No credit cards, no forms - just easy payments through your phone bill</p>
        </div>

        <div class="payment-features">
          <div v-for="feature in paymentFeatures" :key="feature.title" class="payment-feature">
            <div class="icon-wrapper">
              <span class="feature-icon">{{ feature.icon }}</span>
            </div>
            <div class="feature-content">
              <h3>{{ feature.title }}</h3>
              <p>{{ feature.description }}</p>
            </div>
          </div>
        </div>
        
        <div class="payment-process">
          <div class="process-step">
            <div class="step-number">1</div>
            <h4>Choose Your Plan</h4>
            <p>Select the subscription plan that best suits your needs</p>
          </div>
          <div class="process-arrow">→</div>
          <div class="process-step">
            <div class="step-number">2</div>
            <h4>Confirm Mobile Number</h4>
            <p>Verify your phone number through a simple text message</p>
          </div>
          <div class="process-arrow">→</div>
          <div class="process-step">
            <div class="step-number">3</div>
            <h4>Start Enjoying</h4>
            <p>Instantly access all premium content across our platform</p>
          </div>
        </div>
      </div>
      <div class="section-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#f5f8ff" fill-opacity="1" d="M0,224L48,224C96,224,192,224,288,213.3C384,203,480,181,576,181.3C672,181,768,203,864,218.7C960,235,1056,245,1152,229.3C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>

    <!-- Subscription Plans -->
    <section class="subscription-plans">
      <div class="section-container">
        <div class="section-header">
          <h2>Choose Your Plan</h2>
          <p>Find the perfect subscription that fits your entertainment needs</p>
        </div>

        <div class="plans-grid">
          <div v-for="plan in plans" :key="plan.name" 
               class="plan-card" :class="{ 'recommended': plan.recommended }"
               :style="{ borderColor: plan.recommended ? plan.color : 'transparent' }">
            <div v-if="plan.recommended" class="recommended-badge">Most Popular</div>
            <h3>{{ plan.name }}</h3>
            <div class="price">
              <span class="currency">$</span>
              <span class="amount">{{ plan.price }}</span>
              <span class="period">{{ plan.period }}</span>
            </div>
            <ul class="plan-features">
              <li v-for="feature in plan.features" :key="feature">
                <span class="check-icon">✓</span>{{ feature }}
              </li>
            </ul>
            <button class="plan-btn" 
                    :style="{ background: plan.color }"
                    @click="handleGetStarted">
              Get Started
            </button>
            <p class="billing-note">Billed through your mobile carrier</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="testimonials-section">
      <div class="section-container">
        <div class="section-header">
          <h2>What Our Users Say</h2>
        </div>

        <div class="testimonial-carousel">
          <button @click="prevTestimonial" class="carousel-nav prev">❮</button>
          <div class="testimonial-content">
            <div class="quote-marks">"</div>
            <p class="testimonial-text">{{ testimonials[currentTestimonial].text }}</p>
            <div class="testimonial-author">
              <p class="author-name">{{ testimonials[currentTestimonial].name }}</p>
              <p class="author-location">{{ testimonials[currentTestimonial].location }}</p>
            </div>
          </div>
          <button @click="nextTestimonial" class="carousel-nav next">❯</button>
        </div>

        <div class="carousel-indicators">
          <span 
            v-for="(_, index) in testimonials" 
            :key="index" 
            class="indicator"
            :class="{ 'active': currentTestimonial === index }"
            @click="currentTestimonial = index">
          </span>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-content">
        <h2>Ready for Ultimate Entertainment?</h2>
        <p>Join millions of users enjoying premium content with simple mobile billing</p>
        <button class="primary-btn large" @click="handleGetStarted">Get Started Now</button>
      </div>
    </section>
  </div>
</template>

<style scoped>
.gameonlive-homepage {
  color: #333;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  overflow-x: hidden;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #0055FF 0%, #00CCFF 100%);
  color: white;
  padding-top: 6rem;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 85vh;
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem;
  display: flex;
  position: relative;
  z-index: 5;
  justify-content: center;
  text-align: center;
  width: 100%;
}

.hero-content {
  max-width: 800px;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero-content.active {
  opacity: 1;
  transform: translateY(0);
}

.hero h1 {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  text-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.hero p {
  font-size: 1.3rem;
  opacity: 0.9;
  margin-bottom: 2.5rem;
  line-height: 1.5;
}

.hero-btns {
  display: flex;
  gap: 1rem;
}

.primary-btn {
  background: white;
  color: #0055FF;
  font-size: 1rem;
  padding: 0.9rem 2rem;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.primary-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.primary-btn.large {
  font-size: 1.2rem;
  padding: 1.1rem 2.5rem;
}

.hero-wave {
  position: relative;
  margin-top: -10px;
  z-index: 1;
}

/* Section Styling */
.section-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 2rem;
  position: relative;
}

.section-header {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;
}

.section-header h2 {
  color: #0055FF;
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
}

.section-header p {
  color: #666;
  font-size: 1.2rem;
}

/* Entertainment Categories */
.entertainment-categories {
  background: white;
}

.categories {
  display: flex;
  flex-direction: column;
  gap: 5rem;
}

.category-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.category-card.reverse {
  direction: rtl;
}

.category-card.reverse .category-content {
  direction: ltr;
}

.category-image {
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 85, 255, 0.15);
  aspect-ratio: 4/3;
}

.category-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.category-card:hover .category-image img {
  transform: scale(1.05);
}

.category-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.category-card:hover .category-overlay {
  opacity: 1;
}

.explore-btn {
  background: #0055FF;
  color: white;
  padding: 0.8rem 1.8rem;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.explore-btn:hover {
  background: #00CCFF;
  transform: scale(1.05);
}

.category-content h3 {
  font-size: 2rem;
  color: #0055FF;
  margin-bottom: 1rem;
}

.category-content p {
  font-size: 1.1rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 1.5rem;
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
  font-size: 1.05rem;
  color: #444;
}

.check-icon {
  color: #0055FF;
  font-weight: bold;
  margin-right: 0.75rem;
}

.plan-features li .check-icon {
  color: #0055FF;
  position: absolute;
  left: 0;
  top: 0.8rem;
}

.category-btn {
  background: #0055FF;
  color: white;
  padding: 0.8rem 1.8rem;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.category-btn:hover {
  background: #00CCFF;
  transform: translateY(-2px);
}

/* Phone Billing Section */
.phone-billing {
  background: #f5f8ff;
  position: relative;
}

.payment-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.payment-feature {
  background: white;
  padding: 2.5rem 2rem;
  border-radius: 1rem;
  box-shadow: 0 10px 25px rgba(0, 85, 255, 0.07);
  transition: transform 0.3s ease;
}

.payment-feature:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 85, 255, 0.15);
}

.icon-wrapper {
  background: #f0f4f9;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.feature-icon {
  font-size: 2.5rem;
}

.payment-feature h3 {
  color: #0055FF;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.payment-feature p {
  color: #555;
  line-height: 1.5;
}

.payment-process {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 900px;
  margin: 0 auto;
}

.process-step {
  text-align: center;
  flex: 1;
  padding: 0 1rem;
}

.step-number {
  width: 60px;
  height: 60px;
  background: #0055FF;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 auto 1.5rem;
}

.process-step h4 {
  color: #0055FF;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.process-step p {
  color: #666;
  font-size: 0.95rem;
}

.process-arrow {
  color: #0055FF;
  font-size: 2rem;
}

.section-wave {
  position: relative;
  margin-top: -1px;
  z-index: 1;
}

/* Subscription Plans */
.subscription-plans {
  background: #f5f8ff;
  padding-top: 0;
}

.plans-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.plan-card {
  background: white;
  padding: 2.5rem 2rem;
  border-radius: 1rem;
  box-shadow: 0 10px 20px rgba(0, 85, 255, 0.07);
  transition: transform 0.3s ease;
  text-align: center;
  position: relative;
}

.plan-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 85, 255, 0.15);
}

.plan-card.recommended {
  transform: scale(1.05);
  z-index: 2;
}

.plan-card.recommended:hover {
  transform: scale(1.05) translateY(-10px);
}

.recommended-badge {
  position: absolute;
  top: 1.2rem;
  right: -3.5rem;
  background: #00CCFF;
  color: white;
  transform: rotate(45deg);
  padding: 0.5rem 3.5rem;
  font-size: 0.9rem;
  font-weight: 600;
}

.plan-card h3 {
  color: #0055FF;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
}

.price {
  margin-bottom: 2rem;
}

.currency {
  font-size: 1.5rem;
  vertical-align: top;
  position: relative;
  top: 0.5rem;
  color: #0055FF;
  font-weight: 600;
}

.amount {
  font-size: 3.5rem;
  font-weight: 800;
  color: #0055FF;
}

.period {
  color: #666;
  font-size: 1.1rem;
}

.plan-features {
  list-style: none;
  padding: 0;
  margin: 0 auto 2rem;
  text-align: left;
  max-width: 250px;
}

.plan-features li {
  padding: 0.8rem 0;
  border-bottom: 1px solid #f0f0f0;
  padding-left: 1.5rem;
  position: relative;
}

.plan-features li:last-child {
  border-bottom: none;
}

.plan-btn {
  background: #0055FF;
  color: white;
  width: 100%;
  padding: 1rem;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.plan-btn:hover {
  filter: brightness(110%);
  transform: translateY(-3px);
}

.billing-note {
  color: #666;
  font-size: 0.9rem;
  margin-top: 1rem;
  font-style: italic;
}

/* Testimonials */
.testimonials-section {
  background: white;
}

.testimonial-carousel {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 2rem;
}

.testimonial-content {
  background: #f8f9fa;
  padding: 3rem;
  border-radius: 1rem;
  position: relative;
  flex: 1;
  box-shadow: 0 10px 25px rgba(0, 85, 255, 0.07);
}

.quote-marks {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  font-size: 5rem;
  color: #00CCFF;
  opacity: 0.2;
  font-family: Georgia, serif;
  line-height: 0;
}

.testimonial-text {
  font-size: 1.2rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  color: #444;
  position: relative;
  z-index: 1;
}

.testimonial-author {
  text-align: right;
}

.author-name {
  color: #0055FF;
  font-weight: 700;
  margin-bottom: 0.2rem;
}

.author-location {
  color: #666;
  font-size: 0.9rem;
}

.carousel-nav {
  width: 50px;
  height: 50px;
  background: #0055FF;
  color: white;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 85, 255, 0.2);
}

.carousel-nav:hover {
  background: #00CCFF;
  transform: scale(1.1);
}

.carousel-indicators {
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  margin-top: 2rem;
}

.indicator {
  width: 10px;
  height: 10px;
  background: #ddd;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator.active {
  background: #0055FF;
  transform: scale(1.2);
}

/* CTA Section */
.cta-section {
  background: linear-gradient(135deg, #0055FF 0%, #00CCFF 100%);
  color: white;
  text-align: center;
  padding: 5rem 2rem;
}

.cta-content {
  max-width: 800px;
  margin: 0 auto;
}

.cta-section h2 {
  font-size: 2.8rem;
  margin-bottom: 1.5rem;
}

.cta-section p {
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  opacity: 0.9;
}

.cta-section .primary-btn {
  background: white;
  color: #0055FF;
}

.cta-section .primary-btn:hover {
  background: #f5f5f5;
}

/* Responsive Styles */
@media (max-width: 1200px) {
  .category-card {
    gap: 3rem;
  }
  
  .plan-card.recommended {
    transform: scale(1.03);
  }
  
  .plan-card.recommended:hover {
    transform: scale(1.03) translateY(-10px);
  }
}

@media (max-width: 1024px) {
  .hero h1 {
    font-size: 3.5rem;
  }
  
  .section-header h2 {
    font-size: 2.2rem;
  }
  
  .category-card {
    gap: 2.5rem;
  }
}

@media (max-width: 900px) {
  .category-card {
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-bottom: 4rem;
  }
  
  .category-card.reverse {
    direction: ltr;
  }
}

@media (max-width: 768px) {
  .hero-container {
    flex-direction: column;
    padding: 2rem;
  }
  
  .hero h1 {
    font-size: 2.8rem;
  }
  
  .hero p {
    font-size: 1.1rem;
  }
  
  .payment-process {
    flex-direction: column;
    gap: 2rem;
  }
  
  .process-arrow {
    transform: rotate(90deg);
    margin: -1rem 0;
  }
  
  .plans-grid {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 0 auto;
  }
  
  .plan-card.recommended {
    transform: none;
  }
  
  .plan-card.recommended:hover {
    transform: translateY(-10px);
  }
  
  .testimonial-carousel {
    flex-direction: column;
  }
  
  .carousel-nav {
    margin: 1rem 0;
  }
  
  .cta-section h2 {
    font-size: 2.2rem;
  }
  
  .section-container {
    padding: 3rem 1.5rem;
  }
}

@media (max-width: 640px) {
  .hero h1 {
    font-size: 2.2rem;
    margin-bottom: 1rem;
  }
  
  .hero p {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
  
  .hero-btns {
    flex-direction: column;
    gap: 1rem;
  }
  
  .primary-btn, .secondary-btn {
    width: 100%;
    padding: 0.8rem 1.5rem;
  }
  
  .payment-features {
    grid-template-columns: 1fr;
  }
  
  .testimonial-content {
    padding: 2rem;
  }
  
  .cta-section h2 {
    font-size: 1.8rem;
  }
  
  .category-content h3 {
    font-size: 1.7rem;
  }
  
  .category-content p {
    font-size: 1rem;
  }
  
  .section-header h2 {
    font-size: 1.8rem;
  }
  
  .section-header p {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .hero h1 {
    font-size: 2rem;
  }
  
  .category-image {
    aspect-ratio: 16/9;
  }
  
  .payment-feature {
    padding: 1.5rem 1rem;
  }
  
  .testimonial-content {
    padding: 1.5rem;
  }
  
  .testimonial-text {
    font-size: 1rem;
  }
  
  .carousel-nav {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }
  
  .plans-grid {
    max-width: 100%;
  }
  
  .primary-btn.large {
    font-size: 1.1rem;
    padding: 1rem 2rem;
  }
  
  .cta-section p {
    font-size: 1rem;
  }
}
</style>