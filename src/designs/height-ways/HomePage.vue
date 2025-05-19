<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const entertainmentSections = ref([
  {
    title: 'Music Streaming',
    description: 'Millions of tracks at your fingertips. Dive into playlists curated by experts or create your own collection of favorites.',
    image: 'https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg',
    features: ['Hi-Fi Audio Quality', 'Offline Listening', 'Personalized Playlists', 'Lyrics Support'],
    action: 'Start Listening',
    route: '/entertainment/music'
  },
  {
    title: 'Video Streaming',
    description: 'Unlimited movies, TV shows, and exclusive content. From blockbusters to independent gems, there\'s something for everyone.',
    image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg',
    features: ['4K Ultra HD', 'Multiple Languages', 'Download & Watch', 'No Ads'],
    action: 'Start Watching',
    route: '/entertainment/video'
  },
  {
    title: 'Live Sports',
    description: 'Never miss a game with comprehensive coverage of major leagues and tournaments from around the world.',
    image: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg',
    features: ['Live HD Streaming', 'Instant Replays', 'Multi-view Options', 'Stats & Analysis'],
    action: 'Watch Sports',
    route: '/entertainment/sports'
  },
  {
    title: 'Mobile Games',
    description: 'Premium gaming without the hassle of in-app purchases or ads. Access a vast library of high-quality games.',
    image: 'https://images.pexels.com/photos/159393/gamepad-video-game-controller-game-controller-controller-159393.jpeg',
    features: ['No In-app Purchases', 'Cloud Saves', 'Multiplayer Support', 'Regular Updates'],
    action: 'Play Games',
    route: '/entertainment/games'
  },
  {
    title: 'Audiobook Library',
    description: 'Listen to bestsellers and classics narrated by top voice actors. Perfect for commutes, workouts, or relaxing at home.',
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
    features: ['Huge Selection', 'Offline Mode', 'Sleep Timer', 'Bookmarks'],
    action: 'Explore Books',
    route: '/entertainment/audiobooks'
  }
]);

const paymentFeatures = ref([
  {
    icon: '📱',
    title: 'Phone Billing Simplicity',
    description: 'No credit card required. Charges are conveniently added directly to your monthly phone bill.'
  },
  {
    icon: '🔒',
    title: 'Secure Transactions',
    description: 'Your information is protected with advanced encryption and security protocols.'
  },
  {
    icon: '⚡',
    title: 'Instant Access',
    description: 'Get immediate access to all premium content after quick mobile verification.'
  },
  {
    icon: '🌐',
    title: 'Universal Compatibility',
    description: 'Works with all major mobile carriers worldwide for seamless billing.'
  }
]);

const howItWorks = ref([
  {
    step: 1,
    title: 'Choose Your Plan',
    description: 'Select from our flexible subscription options to suit your preferences.'
  },
  {
    step: 2,
    title: 'Verify Your Number',
    description: 'Complete a simple one-time verification with your mobile phone.'
  },
  {
    step: 3,
    title: 'Enjoy Premium Content',
    description: 'Instantly access all entertainment services across your devices.'
  }
]);

const testimonials = ref([
  {
    text: "Height Ways has transformed my entertainment experience. Everything I need is in one place, and the phone billing is incredibly convenient!",
    author: "Sarah M.",
    location: "London, UK"
  },
  {
    text: "The quality of content is outstanding. From 4K movies to hi-fi music, everything streams perfectly even with average internet.",
    author: "Thomas K.",
    location: "Berlin, Germany"
  },
  {
    text: "No more managing multiple subscriptions! Height Ways gives me access to everything for one simple monthly payment on my phone bill.",
    author: "Maria L.",
    location: "Madrid, Spain"
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

const handleNavigate = (route) => {
  router.push(route);
};

onMounted(() => {
  startAutoRotate();
});

const plans = ref([
  {
    name: 'Basic',
    price: '9.99',
    period: '/month',
    features: [
      'Access to all entertainment categories',
      'Standard quality streaming',
      'Single device use',
      'Basic features only'
    ],
    isPopular: false
  },
  {
    name: 'Premium',
    price: '14.99',
    period: '/month',
    features: [
      'All entertainment categories',
      'HD streaming quality',
      'Use on up to 3 devices',
      'All premium features',
      'Priority customer support'
    ],
    isPopular: true
  },
  {
    name: 'Family',
    price: '19.99',
    period: '/month',
    features: [
      'All entertainment categories',
      '4K Ultra HD where available',
      'Use on up to 6 devices',
      'All premium features',
      'Family profiles',
      '24/7 priority support'
    ],
    isPopular: false
  }
]);

const handleLogin = () => {
  router.push('/login');
};
</script>

<template>
  <div class="height-ways-home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Your Complete Mobile Entertainment Universe</h1>
        <p class="subtitle">Movies, Music, Sports, Games, and Audiobooks - All in One Place</p>
        <div class="hero-cta">
          <button class="primary-btn" @click="handleLogin">Login Now</button>
        </div>
      </div>
    </section>
    
    <!-- Entertainment Sections -->
    <section class="entertainment">
      <h2 class="section-title">Premium Entertainment Services</h2>
      
      <div v-for="(section, index) in entertainmentSections" :key="section.title" 
        class="content-row" :class="{ 'reverse': index % 2 !== 0 }">
        <div class="content-image">
          <img :src="section.image" :alt="section.title">
        </div>
        <div class="content-info">
          <h3>{{ section.title }}</h3>
          <p>{{ section.description }}</p>
          <ul class="features-list">
            <li v-for="feature in section.features" :key="feature">
              <span class="check-icon">✓</span>
              {{ feature }}
            </li>
          </ul>
          <button class="secondary-btn" @click="handleNavigate(section.route)">{{ section.action }}</button>
        </div>
      </div>
    </section>
    
    <!-- Payment Section -->
    <section class="payment-section">
      <div class="section-header">
        <h2 class="section-title">Simple Mobile Payment</h2>
        <p class="section-subtitle">No credit card, no complicated forms - just fast, secure mobile billing</p>
      </div>
      
      <div class="payment-features">
        <div v-for="feature in paymentFeatures" :key="feature.title" class="payment-feature">
          <div class="feature-icon">{{ feature.icon }}</div>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </div>
      </div>
      
      <div class="how-it-works">
        <h3>How It Works:</h3>
        <div class="steps">
          <div v-for="item in howItWorks" :key="item.step" class="step">
            <div class="step-number">{{ item.step }}</div>
            <div class="step-info">
              <h4>{{ item.title }}</h4>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Plans Section -->
    <section class="plans-section">
      <h2 class="section-title">Choose Your Plan</h2>
      <p class="section-subtitle">Select the entertainment package that suits your needs</p>
      
      <div class="plans">
        <div v-for="plan in plans" :key="plan.name" 
          class="plan-card" :class="{ 'popular': plan.isPopular }">
          <div v-if="plan.isPopular" class="popular-badge">Most Popular</div>
          <h3>{{ plan.name }}</h3>
          <div class="price">
            <span class="currency">€</span>
            <span class="amount">{{ plan.price }}</span>
            <span class="period">{{ plan.period }}</span>
          </div>
          <ul class="plan-features">
            <li v-for="feature in plan.features" :key="feature">
              <span class="check-icon">✓</span> {{ feature }}
            </li>
          </ul>
          <button class="primary-btn full-width" @click="handleLogin">Login Now</button>
          <p class="billing-note">Billed directly to your mobile phone account</p>
        </div>
      </div>
    </section>
    
    <!-- Testimonials -->
    <section class="testimonials-section" @mouseenter="stopAutoRotate" @mouseleave="startAutoRotate">
      <h2 class="section-title">What Our Users Say</h2>
      
      <div class="testimonials-container">
        <button class="nav-button prev" @click="prevTestimonial">❮</button>
        
        <div class="testimonial">
          <div class="testimonial-content">
            <div class="quote-mark">"</div>
            <p class="testimonial-text">{{ testimonials[currentTestimonial].text }}</p>
            <div class="testimonial-author">
              <p class="author-name">{{ testimonials[currentTestimonial].author }}</p>
              <p class="author-location">{{ testimonials[currentTestimonial].location }}</p>
            </div>
          </div>
        </div>
        
        <button class="nav-button next" @click="nextTestimonial">❯</button>
      </div>
      
      <div class="indicators">
        <span v-for="(_, index) in testimonials" :key="index"
          class="indicator" 
          :class="{ 'active': currentTestimonial === index }"
          @click="currentTestimonial = index"></span>
      </div>
    </section>
    
    <!-- Final CTA -->
    <section class="cta-section">
      <div class="cta-content">
        <h2>Ready for Unlimited Entertainment?</h2>
        <p>Join millions of users enjoying premium content with simple mobile billing</p>
        <button class="primary-btn" @click="handleLogin">Login Now</button>
      </div>
    </section>
  </div>
</template>

<style scoped>
.height-ways-home {
  color: #333;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #007BFF 0%, #6C63FF 100%);
  color: white;
  padding: 10rem 2rem 8rem;
  text-align: center;
  position: relative;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.hero h1 {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.subtitle {
  font-size: 1.5rem;
  opacity: 0.9;
  margin-bottom: 2.5rem;
}

.hero-cta {
  margin-top: 2rem;
}

.primary-btn {
  background: white;
  color: #007BFF;
  font-size: 1.2rem;
  padding: 1rem 2.5rem;
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

.full-width {
  width: 100%;
}

/* Entertainment Sections */
.entertainment {
  padding: 6rem 2rem;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  color: #007BFF;
  margin-bottom: 3rem;
}

.section-subtitle {
  text-align: center;
  font-size: 1.2rem;
  color: #666;
  max-width: 800px;
  margin: -2rem auto 3rem;
}

.content-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto 6rem;
  align-items: center;
}

.content-row:last-child {
  margin-bottom: 0;
}

.content-row.reverse {
  direction: rtl;
}

.content-row.reverse .content-info {
  direction: ltr;
}

.content-image {
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.content-image img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.content-row:hover .content-image img {
  transform: scale(1.05);
}

.content-info h3 {
  font-size: 2rem;
  color: #007BFF;
  margin-bottom: 1rem;
}

.content-info p {
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
  color: #007BFF;
  font-weight: bold;
  margin-right: 0.75rem;
}

.secondary-btn {
  background: #007BFF;
  color: white;
  padding: 0.8rem 1.8rem;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.secondary-btn:hover {
  background: #0069d9;
  transform: translateY(-2px);
}

/* Payment Section */
.payment-section {
  background: #f8fafc;
  padding: 6rem 2rem;
}

.section-header {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem;
}

.payment-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto 4rem;
}

.payment-feature {
  background: white;
  padding: 2.5rem 2rem;
  border-radius: 1rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  text-align: center;
}

.payment-feature:hover {
  transform: translateY(-10px);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  display: inline-block;
}

.payment-feature h3 {
  color: #007BFF;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.payment-feature p {
  color: #555;
  line-height: 1.5;
}

.how-it-works {
  max-width: 900px;
  margin: 0 auto;
  background: white;
  padding: 3rem;
  border-radius: 1rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
}

.how-it-works h3 {
  text-align: center;
  color: #007BFF;
  margin-bottom: 2rem;
  font-size: 1.8rem;
}

.steps {
  display: flex;
  gap: 1.5rem;
  position: relative;
}

.steps::before {
  content: '';
  position: absolute;
  top: 2rem;
  left: 3rem;
  right: 3rem;
  height: 2px;
  background: #e0e0e0;
  z-index: 1;
}

.step {
  flex: 1;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.step-number {
  background: #007BFF;
  color: white;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 10px rgba(0, 123, 255, 0.3);
}

.step-info h4 {
  color: #007BFF;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.step-info p {
  color: #666;
  font-size: 0.95rem;
}

/* Plans Section */
.plans-section {
  padding: 6rem 2rem;
}

.plans {
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
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  position: relative;
  transition: transform 0.3s ease;
  text-align: center;
}

.plan-card:hover {
  transform: translateY(-10px);
}

.plan-card.popular {
  border: 2px solid #007BFF;
  transform: scale(1.05);
}

.plan-card.popular:hover {
  transform: scale(1.05) translateY(-10px);
}

.popular-badge {
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  background: #007BFF;
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 30px;
  font-weight: 600;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.plan-card h3 {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 1rem;
}

.price {
  margin-bottom: 2rem;
}

.currency {
  font-size: 1.5rem;
  vertical-align: top;
  margin-right: 0.2rem;
  color: #007BFF;
  font-weight: 600;
}

.amount {
  font-size: 3.5rem;
  font-weight: 800;
  color: #007BFF;
  line-height: 1;
}

.period {
  font-size: 1rem;
  color: #777;
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
  color: #555;
  display: flex;
  align-items: flex-start;
}

.plan-features li:last-child {
  border-bottom: none;
}

.billing-note {
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #777;
  font-style: italic;
}

/* Testimonials */
.testimonials-section {
  background: #f8fafc;
  padding: 6rem 2rem;
  text-align: center;
}

.testimonials-container {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
}

.testimonial {
  background: white;
  border-radius: 1rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  flex: 1;
  min-height: 250px;
  display: flex;
  align-items: center;
}

.testimonial-content {
  padding: 3rem;
  position: relative;
}

.quote-mark {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  font-size: 4rem;
  color: #007BFF;
  opacity: 0.2;
  font-family: Georgia, serif;
  line-height: 0;
}

.testimonial-text {
  font-size: 1.2rem;
  font-style: italic;
  color: #444;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  text-align: left;
}

.testimonial-author {
  text-align: right;
}

.author-name {
  font-weight: 700;
  color: #007BFF;
  margin-bottom: 0.2rem;
}

.author-location {
  font-size: 0.9rem;
  color: #777;
}

.nav-button {
  background: #007BFF;
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 0 1rem;
  box-shadow: 0 4px 10px rgba(0, 123, 255, 0.3);
}

.nav-button:hover {
  background: #0069d9;
  transform: scale(1.1);
}

.indicators {
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  margin-top: 2rem;
}

.indicator {
  width: 10px;
  height: 10px;
  background: #d1d5db;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator.active {
  background: #007BFF;
  transform: scale(1.2);
}

/* CTA Section */
.cta-section {
  background: linear-gradient(135deg, #007BFF 0%, #6C63FF 100%);
  color: white;
  text-align: center;
  padding: 6rem 2rem;
}

.cta-content {
  max-width: 900px;
  margin: 0 auto;
}

.cta-content h2 {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.cta-content p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.cta-section .primary-btn {
  color: #007BFF;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .content-row {
    gap: 3rem;
  }
  
  .content-image img {
    height: 350px;
  }
  
  .how-it-works {
    padding: 2.5rem;
  }
  
  .plan-card.popular {
    transform: scale(1.03);
  }
  
  .plan-card.popular:hover {
    transform: scale(1.03) translateY(-10px);
  }
}

@media (max-width: 920px) {
  .hero h1 {
    font-size: 2.8rem;
  }
  
  .content-row {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .content-row.reverse {
    direction: ltr;
  }
  
  .step-number {
    width: 3rem;
    height: 3rem;
    font-size: 1.3rem;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 7rem 2rem 5rem;
  }
  
  .hero h1 {
    font-size: 2.5rem;
  }
  
  .subtitle {
    font-size: 1.2rem;
  }
  
  .content-image img {
    height: 300px;
  }
  
  .how-it-works {
    padding: 2rem 1.5rem;
  }
  
  .steps {
    flex-direction: column;
    gap: 3rem;
  }
  
  .steps::before {
    display: none;
  }
  
  .plans {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 0 auto;
  }
  
  .plan-card.popular {
    transform: none;
  }
  
  .plan-card.popular:hover {
    transform: translateY(-10px);
  }
  
  .testimonials-container {
    flex-direction: column;
    gap: 1rem;
  }
  
  .nav-button {
    margin: 1rem 0;
  }
  
  .cta-content h2 {
    font-size: 2.2rem;
  }
}

@media (max-width: 640px) {
  .hero {
    padding: 6rem 1rem 4rem;
  }
  
  .hero h1 {
    font-size: 2rem;
  }
  
  .subtitle {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .content-info h3 {
    font-size: 1.5rem;
  }
  
  .entertainment, 
  .payment-section,
  .plans-section,
  .testimonials-section,
  .cta-section {
    padding: 4rem 1rem;
  }
  
  .testimonial-content {
    padding: 2rem 1.5rem;
  }
  
  .testimonial-text {
    font-size: 1rem;
  }
  
  .primary-btn, .secondary-btn {
    padding: 0.8rem 1.8rem;
    font-size: 1rem;
  }
  
  .section-subtitle {
    font-size: 1rem;
  }
}
</style>