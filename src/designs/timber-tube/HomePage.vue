<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const features = ref([
  {
    title: "One Platform, All Entertainment",
    description: "Access music, videos, games, sports, and audiobooks in a single app",
    icon: "🌟"
  },
  {
    title: "Phone Billing Simplicity",
    description: "No credit card needed - charges go directly to your phone bill",
    icon: "📱"
  },
  {
    title: "Premium Quality Content",
    description: "Enjoy HD streaming and high-fidelity audio across all services",
    icon: "✨"
  }
]);

const entertainmentSections = ref([
  {
    title: 'Music Streaming',
    description: 'Millions of tracks from your favorite artists, with personalized playlists, offline downloads, and crystal-clear audio quality.',
    image: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg',
    link: '/timber-tube/music',
    color: '#1DB954'
  },
  {
    title: 'Video Streaming',
    description: 'Blockbuster movies, addictive series, and exclusive releases in HD and 4K quality, available on all your devices.',
    image: 'https://images.pexels.com/photos/8263321/pexels-photo-8263321.jpeg',
    link: '/timber-tube/video',
    color: '#E50914'
  },
  {
    title: 'Live Sports',
    description: 'Never miss a match with our comprehensive coverage of football, basketball, tennis, and more - with real-time stats and commentary.',
    image: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg',
    link: '/timber-tube/sports',
    color: '#0066CC'
  },
  {
    title: 'Mobile Games',
    description: 'Access hundreds of premium mobile games without ads or in-app purchases - from casual puzzles to immersive multiplayer adventures.',
    image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg',
    link: '/timber-tube/games',
    color: '#9147FF'
  },
  {
    title: 'Audiobook Library',
    description: 'Thousands of audiobooks narrated by professional voice actors, with new titles added weekly and offline listening capability.',
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
    link: '/timber-tube/audiobooks',
    color: '#F9A825'
  }
]);

const testimonials = ref([
  {
    text: "I love having all my entertainment in one place! The mobile billing makes it so convenient - I just signed up instantly without needing a credit card.",
    name: "Sarah M.",
    location: "Berlin"
  },
  {
    text: "The quality of the video streaming is excellent, even on my older phone. And the game selection is amazing - no more annoying ads or paywalls!",
    name: "Thomas K.",
    location: "Amsterdam"
  },
  {
    text: "As a sports fan, having live matches with real-time stats is a game-changer. The pricing is very reasonable for everything you get.",
    name: "Elena R.",
    location: "Madrid"
  }
]);

const pricingPlans = ref([
  {
    name: "Basic",
    price: "€9.99",
    period: "/month",
    features: [
      "Access to all entertainment categories",
      "HD streaming",
      "Mobile-only access",
      "Ad-free experience",
      "Limited downloads"
    ],
    color: "#78909C",
    recommended: false
  },
  {
    name: "Premium",
    price: "€14.99",
    period: "/month",
    features: [
      "Access to all entertainment categories",
      "Full HD & 4K streaming",
      "Multi-device access (3 devices)",
      "Ad-free experience",
      "Unlimited downloads",
      "Priority customer support"
    ],
    color: "#3B52A5",
    recommended: true
  },
  {
    name: "Family",
    price: "€19.99",
    period: "/month",
    features: [
      "Access to all entertainment categories",
      "Full HD & 4K streaming",
      "Multi-device access (5 devices)",
      "Ad-free experience",
      "Unlimited downloads",
      "Family profiles (up to 5)",
      "Priority customer support"
    ],
    color: "#78909C",
    recommended: false
  }
]);

const howItWorks = ref([
  {
    step: 1,
    title: "Choose Your Plan",
    description: "Select a subscription that fits your entertainment needs"
  },
  {
    step: 2,
    title: "Sign Up with Your Phone",
    description: "Enter your mobile number for quick verification"
  },
  {
    step: 3,
    title: "Enjoy Instant Access",
    description: "Start streaming and enjoying premium content immediately"
  }
]);

const currentTestimonialIndex = ref(0);

const nextTestimonial = () => {
  currentTestimonialIndex.value = (currentTestimonialIndex.value + 1) % testimonials.value.length;
};

const prevTestimonial = () => {
  currentTestimonialIndex.value = (currentTestimonialIndex.value - 1 + testimonials.value.length) % testimonials.value.length;
};

const navigateToSection = (path) => {
  router.push(path);
};

const navigateToLogin = () => {
  router.push('/login');
};
</script>

<template>
  <div class="timber-tube-home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Your Complete Mobile Entertainment Hub</h1>
        <p>One platform for all your entertainment needs - billed directly to your phone</p>
        <div class="hero-buttons">
          <button class="primary-btn" @click="navigateToLogin">Login Now</button>
        </div>
      </div>
      <div class="hero-overlay"></div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <div class="features-container">
        <div v-for="feature in features" :key="feature.title" class="feature-card">
          <div class="feature-icon">{{ feature.icon }}</div>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </div>
      </div>
    </section>

    <!-- Entertainment Sections -->
    <section class="entertainment-section">
      <h2 class="section-title">Premium Entertainment Services</h2>
      <div v-for="(section, index) in entertainmentSections" :key="section.title" 
           class="content-row" :class="{ 'reverse': index % 2 !== 0 }">
        <div class="content-image">
          <img :src="section.image" :alt="section.title">
          <div class="image-overlay" :style="{ background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7), ${section.color})` }">
            <button class="explore-btn" @click="navigateToSection(section.link)">Explore</button>
          </div>
        </div>
        <div class="content-details">
          <h3 :style="{ color: section.color }">{{ section.title }}</h3>
          <p>{{ section.description }}</p>
          <button class="content-btn" :style="{ background: section.color }" @click="navigateToSection(section.link)">
            Learn More
          </button>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section class="how-it-works-section">
      <h2 class="section-title">How It Works</h2>
      <div class="steps-container">
        <div v-for="item in howItWorks" :key="item.step" class="step-card">
          <div class="step-number">{{ item.step }}</div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </div>
      </div>
      <div class="steps-connector"></div>
    </section>

    <!-- Pricing Section -->
    <section class="pricing-section">
      <h2 class="section-title">Choose Your Plan</h2>
      <p class="section-subtitle">All plans include access to our complete entertainment library</p>
      
      <div class="pricing-container">
        <div v-for="plan in pricingPlans" :key="plan.name" 
             class="pricing-card" :class="{ 'recommended': plan.recommended }"
             :style="plan.recommended ? { borderColor: plan.color } : {}">
          <div v-if="plan.recommended" class="recommended-badge" :style="{ background: plan.color }">
            Most Popular
          </div>
          <h3>{{ plan.name }}</h3>
          <div class="price-container">
            <span class="price">{{ plan.price }}</span>
            <span class="period">{{ plan.period }}</span>
          </div>
          <ul class="features-list">
            <li v-for="feature in plan.features" :key="feature">
              <span class="check-icon">✓</span> {{ feature }}
            </li>
          </ul>
          <button class="plan-btn" :style="{ background: plan.color }" @click="navigateToLogin">
            Select Plan
          </button>
          <p class="billing-note">Billed directly to your phone - no credit card needed</p>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="testimonials-section">
      <h2 class="section-title">What Our Customers Say</h2>
      
      <div class="testimonial-slider">
        <button @click="prevTestimonial" class="slider-nav prev">❮</button>
        
        <div class="testimonial-card">
          <p class="testimonial-text">"{{ testimonials[currentTestimonialIndex].text }}"</p>
          <div class="testimonial-author">
            <p class="author-name">{{ testimonials[currentTestimonialIndex].name }}</p>
            <p class="author-location">{{ testimonials[currentTestimonialIndex].location }}</p>
          </div>
        </div>
        
        <button @click="nextTestimonial" class="slider-nav next">❯</button>
      </div>
      
      <div class="testimonial-dots">
        <span v-for="(_, index) in testimonials" :key="index" 
              class="dot" :class="{ active: index === currentTestimonialIndex }"
              @click="currentTestimonialIndex = index"></span>
      </div>
    </section>

    <!-- Phone Billing Section -->
    <section class="phone-billing-section">
      <h2 class="section-title">Mobile Payment Made Simple</h2>
      <div class="billing-content">
        <div class="billing-info">
          <h3>Why Choose Phone Billing?</h3>
          <ul class="billing-benefits">
            <li><span class="benefit-icon">🔒</span> <span>Secure and safe payment method</span></li>
            <li><span class="benefit-icon">⚡</span> <span>Instant setup with no waiting</span></li>
            <li><span class="benefit-icon">📱</span> <span>No credit card or bank details needed</span></li>
            <li><span class="benefit-icon">💼</span> <span>Full transparency with itemized billing</span></li>
            <li><span class="benefit-icon">🛡️</span> <span>Built-in spending control and limits</span></li>
          </ul>
        </div>
        <div class="billing-image">
          <img src="https://images.pexels.com/photos/7567464/pexels-photo-7567464.jpeg" alt="Mobile Billing">
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section">
      <h2 class="section-title">Frequently Asked Questions</h2>
      <div class="faq-container">
        <div class="faq-item">
          <h3>How does phone billing work?</h3>
          <p>When you subscribe to Timber Tube, the charges are added directly to your monthly phone bill. There's no need to enter credit card details or set up additional payment methods. It's secure, instant, and convenient.</p>
        </div>
        <div class="faq-item">
          <h3>Can I cancel my subscription anytime?</h3>
          <p>Absolutely! You can cancel your subscription at any time with no cancellation fees. Your service will continue until the end of your current billing period.</p>
        </div>
        <div class="faq-item">
          <h3>Which mobile carriers support Timber Tube billing?</h3>
          <p>We support all major mobile carriers worldwide. If you can receive this message, your carrier is most likely supported. During signup, we'll confirm compatibility with your specific carrier.</p>
        </div>
        <div class="faq-item">
          <h3>How many devices can I use with my account?</h3>
          <p>The number of devices depends on your subscription plan. Basic allows 1 device, Premium allows 3 devices, and Family allows up to 5 devices to be used simultaneously.</p>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <h2>Ready For Unlimited Entertainment?</h2>
      <p>Join millions of users enjoying premium content with phone billing simplicity</p>
      <button class="primary-btn large" @click="navigateToLogin">Get Started Today</button>
    </section>
  </div>
</template>

<style scoped>
/* Main Styles */
.timber-tube-home {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: #333;
  line-height: 1.6;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 2.5rem;
  color: #3B52A5;
}

.section-subtitle {
  text-align: center;
  font-size: 1.2rem;
  color: #666;
  max-width: 700px;
  margin: -1rem auto 3rem;
}

/* Hero Section */
.hero {
  position: relative;
  min-height: 90vh;
  background-image: url('https://images.pexels.com/photos/3226728/pexels-photo-3226728.jpeg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  padding: 2rem;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(59,82,165,0.7) 100%);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 900px;
}

.hero h1 {
  font-size: 4rem;
  font-weight: 900;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.hero p {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.hero-buttons {
  display: flex;
  justify-content: center;
}

.primary-btn {
  background: #3B52A5;
  color: white;
  font-size: 1.2rem;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

.primary-btn:hover {
  background: #5D72D9;
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

.primary-btn.large {
  padding: 1.2rem 3rem;
  font-size: 1.3rem;
}

/* Features Section */
.features-section {
  padding: 5rem 2rem;
  background: white;
}

.features-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  text-align: center;
  padding: 2.5rem;
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(0,0,0,0.1);
}

.feature-icon {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
}

.feature-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #3B52A5;
}

.feature-card p {
  color: #666;
}

/* Entertainment Sections */
.entertainment-section {
  padding: 5rem 2rem;
  background: #f9f9f9;
}

.content-row {
  display: flex;
  align-items: center;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto 5rem;
}

.content-row:last-child {
  margin-bottom: 0;
}

.content-row.reverse {
  flex-direction: row-reverse;
}

.content-image {
  flex: 1;
  position: relative;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  aspect-ratio: 4/3;
}

.content-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.content-row:hover .content-image img {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content-row:hover .image-overlay {
  opacity: 1;
}

.explore-btn {
  background: white;
  color: #3B52A5;
  font-weight: 600;
  padding: 1rem 2rem;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.explore-btn:hover {
  transform: scale(1.1);
}

.content-details {
  flex: 1;
}

.content-details h3 {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
}

.content-details p {
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 2rem;
  line-height: 1.7;
}

.content-btn {
  color: white;
  padding: 1rem 2rem;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.content-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

/* How It Works Section */
.how-it-works-section {
  padding: 5rem 2rem;
  background: white;
  position: relative;
}

.steps-container {
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.steps-connector {
  position: absolute;
  top: 50%;
  left: 20%;
  right: 20%;
  height: 4px;
  background: #f0f0f0;
  transform: translateY(-50%);
  z-index: 1;
}

.step-card {
  background: white;
  padding: 3rem 2rem;
  border-radius: 1rem;
  box-shadow: 0 15px 30px rgba(0,0,0,0.08);
  text-align: center;
  width: 30%;
  position: relative;
  z-index: 3;
}

.step-number {
  width: 60px;
  height: 60px;
  background: #3B52A5;
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  box-shadow: 0 10px 20px rgba(59, 82, 165, 0.3);
}

.step-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #3B52A5;
}

.step-card p {
  color: #666;
}

/* Pricing Section */
.pricing-section {
  padding: 5rem 2rem;
  background: #f9f9f9;
}

.pricing-container {
  display: flex;
  justify-content: center;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.pricing-card {
  background: white;
  padding: 3rem 2rem;
  border-radius: 1rem;
  box-shadow: 0 15px 30px rgba(0,0,0,0.08);
  width: 100%;
  max-width: 350px;
  text-align: center;
  position: relative;
  border: 2px solid transparent;
  transition: all 0.3s ease;
}

.pricing-card:hover {
  transform: translateY(-10px);
}

.pricing-card.recommended {
  transform: scale(1.05);
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}

.pricing-card.recommended:hover {
  transform: scale(1.05) translateY(-10px);
}

.recommended-badge {
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.9rem;
  color: white;
}

.pricing-card h3 {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #333;
}

.price-container {
  margin-bottom: 2rem;
}

.price {
  font-size: 3.5rem;
  font-weight: 800;
  color: #3B52A5;
}

.period {
  font-size: 1.2rem;
  color: #777;
}

.features-list {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem;
  text-align: left;
}

.features-list li {
  padding: 0.8rem 0;
  border-bottom: 1px solid #f0f0f0;
  color: #555;
  display: flex;
}

.features-list li:last-child {
  border-bottom: none;
}

.check-icon {
  color: #3B52A5;
  margin-right: 0.8rem;
  font-weight: bold;
}

.plan-btn {
  background: #3B52A5;
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
  transform: translateY(-3px);
}

.billing-note {
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: #777;
  font-style: italic;
}

/* Testimonials Section */
.testimonials-section {
  padding: 5rem 2rem;
  background: white;
}

.testimonial-slider {
  display: flex;
  align-items: center;
  max-width: 900px;
  margin: 0 auto;
}

.testimonial-card {
  background: #f9f9f9;
  padding: 3rem;
  border-radius: 1rem;
  box-shadow: 0 10px 25px rgba(0,0,0,0.05);
  flex: 1;
}

.testimonial-text {
  font-size: 1.3rem;
  line-height: 1.8;
  color: #444;
  margin-bottom: 2rem;
  font-style: italic;
  position: relative;
}

.testimonial-text::before,
.testimonial-text::after {
  content: '"';
  font-size: 2rem;
  color: #3B52A5;
  font-family: Georgia, serif;
}

.testimonial-author {
  text-align: right;
}

.author-name {
  font-weight: 700;
  color: #333;
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
}

.author-location {
  color: #777;
}

.slider-nav {
  background: #3B52A5;
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  border: none;
  cursor: pointer;
  margin: 0 1.5rem;
  transition: all 0.3s ease;
}

.slider-nav:hover {
  background: #5D72D9;
  transform: scale(1.1);
}

.testimonial-dots {
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  margin-top: 2.5rem;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #ddd;
  cursor: pointer;
  transition: all 0.3s ease;
}

.dot.active {
  background: #3B52A5;
  transform: scale(1.2);
}

/* Phone Billing Section */
.phone-billing-section {
  padding: 5rem 2rem;
  background: #f9f9f9;
}

.billing-content {
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  gap: 4rem;
}

.billing-info {
  flex: 1;
}

.billing-info h3 {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #3B52A5;
}

.billing-benefits {
  list-style: none;
  padding: 0;
}

.billing-benefits li {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  color: #444;
}

.benefit-icon {
  font-size: 1.8rem;
  margin-right: 1.5rem;
  min-width: 2rem;
  text-align: center;
}

.billing-image {
  flex: 1;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}

.billing-image img {
  width: 100%;
  display: block;
  object-fit: cover;
  aspect-ratio: 3/4;
}

/* FAQ Section */
.faq-section {
  padding: 5rem 2rem;
  background: white;
}

.faq-container {
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  margin-bottom: 2rem;
  padding: 2rem;
  background: #f9f9f9;
  border-radius: 1rem;
  border-left: 4px solid #3B52A5;
}

.faq-item h3 {
  color: #3B52A5;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.faq-item p {
  color: #555;
}

/* CTA Section */
.cta-section {
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #3B52A5, #5D72D9);
  color: white;
  text-align: center;
}

.cta-section h2 {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.cta-section p {
  font-size: 1.3rem;
  margin-bottom: 2.5rem;
  opacity: 0.9;
}

.cta-section .primary-btn {
  background: white;
  color: #3B52A5;
}

.cta-section .primary-btn:hover {
  background: #f0f0f0;
}

/* Responsive Styles */
@media (max-width: 1200px) {
  .pricing-container {
    flex-direction: column;
    align-items: center;
  }
  
  .pricing-card {
    width: 100%;
    max-width: 400px;
  }
  
  .pricing-card.recommended {
    transform: none;
    order: -1;
    margin-bottom: 1rem;
  }
  
  .pricing-card.recommended:hover {
    transform: translateY(-10px);
  }
  
  .steps-container {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
  
  .step-card {
    width: 80%;
    max-width: 400px;
  }
  
  .steps-connector {
    display: none;
  }
}

@media (max-width: 992px) {
  .content-row {
    flex-direction: column;
    gap: 2rem;
  }
  
  .content-row.reverse {
    flex-direction: column;
  }
  
  .content-image {
    width: 100%;
  }
  
  .billing-content {
    flex-direction: column;
  }
  
  .billing-image {
    width: 100%;
    max-width: 500px;
  }
  
  .hero h1 {
    font-size: 3rem;
  }
}

@media (max-width: 768px) {
  .features-container {
    grid-template-columns: 1fr;
  }
  
  .hero h1 {
    font-size: 2.5rem;
  }
  
  .hero p {
    font-size: 1.2rem;
  }
  
  .testimonial-slider {
    flex-direction: column;
    gap: 1rem;
  }
  
  .slider-nav {
    margin: 1rem 0;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .cta-section h2 {
    font-size: 2.2rem;
  }
  
  .cta-section p {
    font-size: 1.1rem;
  }
}

@media (max-width: 576px) {
  .hero {
    padding: 1rem;
  }
  
  .hero h1 {
    font-size: 2rem;
  }
  
  .primary-btn {
    width: 100%;
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }
  
  .testimonial-card {
    padding: 2rem 1rem;
  }
  
  .testimonial-text {
    font-size: 1.1rem;
  }
  
  .content-details h3 {
    font-size: 1.8rem;
  }
  
  .content-details p {
    font-size: 1rem;
  }
  
  .faq-item {
    padding: 1.5rem;
  }
  
  .faq-item h3 {
    font-size: 1.1rem;
  }
  
  .step-card {
    width: 100%;
  }
}
</style>