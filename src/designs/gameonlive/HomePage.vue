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
    description: 'Access millions of songs across all genres. Enjoy crystal-clear sound quality, create personalized playlists, and discover new music tailored to your taste.',
    image: 'https://images.pexels.com/photos/4571219/pexels-photo-4571219.jpeg',
    path: '/gameonlive/music',
    features: ['HD Audio Quality', 'Personalized Playlists', 'Offline Mode', 'Lyrics Support']
  },
  {
    title: 'Video Streaming',
    description: 'Watch thousands of movies, TV shows, and exclusive content in stunning HD or 4K. Enjoy the latest releases and timeless classics on any device.',
    image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg',
    path: '/gameonlive/video',
    features: ['4K Ultra HD', 'Multiple Languages', 'Offline Downloads', 'Smart Recommendations']
  },
  {
    title: 'Live Sports',
    description: 'Never miss a game with our comprehensive coverage of major sporting events worldwide. Watch live matches, catch highlights, and follow your favorite teams.',
    image: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg',
    path: '/gameonlive/sports',
    features: ['Live HD Streaming', 'Multi-view Options', 'Real-time Stats', 'Instant Replays']
  },
  {
    title: 'Mobile Games',
    description: 'Access a vast library of premium games without ads or in-app purchases. From casual fun to immersive RPGs, there\'s something for every type of gamer.',
    image: 'https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg',
    path: '/gameonlive/games',
    features: ['No In-app Purchases', 'Cloud Saves', 'Multiplayer Support', 'New Games Monthly']
  },
  {
    title: 'Audiobook Library',
    description: 'Listen to bestsellers and classics narrated by world-class voice artists. Our vast collection spans all genres from fiction to self-improvement.',
    image: 'https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg',
    path: '/gameonlive/audiobooks',
    features: ['Professional Narration', 'Offline Listening', 'Sleep Timer', 'Bookmarks & Notes']
  }
]);

// Payment features
const paymentFeatures = ref([
  {
    title: 'Easy Phone Billing',
    description: 'Charges added directly to your phone bill with no credit card required',
    icon: '📱'
  },
  {
    title: 'Secure Transactions',
    description: 'Advanced encryption and secure payment processing protect your information',
    icon: '🔒'
  },
  {
    title: 'Simple Management',
    description: 'Easily manage your subscription through your mobile service provider',
    icon: '⚙️'
  },
  {
    title: 'Flexible Plans',
    description: 'Choose from a variety of subscription options to fit your needs',
    icon: '📝'
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

const nextTestimonial = () => {
  currentTestimonial.value = (currentTestimonial.value + 1) % testimonials.value.length;
};

const prevTestimonial = () => {
  currentTestimonial.value = (currentTestimonial.value - 1 + testimonials.value.length) % testimonials.value.length;
};

// FAQ section
const faqs = ref([
  {
    question: "How does phone billing work?",
    answer: "When you subscribe to GameOnLive, the charges are added directly to your monthly mobile phone bill. There's no need for credit cards or bank details - simply confirm your subscription and you'll be billed through your mobile service provider.",
    open: true
  },
  {
    question: "Can I use GameOnLive on multiple devices?",
    answer: "Yes! Depending on your subscription plan, you can use GameOnLive on multiple devices. Our Basic plan supports single device streaming, Premium supports up to 3 devices, and Family allows up to 6 devices simultaneously.",
    open: false
  },
  {
    question: "Is offline content available?",
    answer: "Absolutely. You can download music, videos, games, and audiobooks for offline enjoyment. This is perfect for travel or areas with limited connectivity. Simply look for the download icon on eligible content.",
    open: false
  },
  {
    question: "How do I cancel my subscription?",
    answer: "Cancellation is easy and hassle-free. You can cancel your subscription at any time through your account settings or by contacting your mobile service provider. There are no cancellation fees or lengthy processes.",
    open: false
  },
  {
    question: "Which mobile carriers support GameOnLive billing?",
    answer: "GameOnLive works with all major mobile carriers worldwide. As long as your carrier supports direct carrier billing (most do), you'll be able to subscribe and enjoy our services.",
    open: false
  }
]);

const toggleFaq = (index) => {
  faqs.value[index].open = !faqs.value[index].open;
};

// Navigation
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
            <button class="secondary-btn" @click="navigateTo('/gameonlive/plans')">View Plans</button>
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
              <div class="image-overlay">
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
            <div class="feature-icon">{{ feature.icon }}</div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
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
    <section class="testimonials">
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

    <!-- FAQ Section -->
    <section class="faq-section">
      <div class="section-container">
        <div class="section-header">
          <h2>Frequently Asked Questions</h2>
        </div>

        <div class="faq-container">
          <div v-for="(faq, index) in faqs" :key="index" class="faq-item">
            <div class="faq-question" @click="toggleFaq(index)">
              <h3>{{ faq.question }}</h3>
              <div class="toggle-icon" :class="{ 'open': faq.open }">
                <span></span>
                <span></span>
              </div>
            </div>
            <div class="faq-answer" :class="{ 'open': faq.open }">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="section-container">
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
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem;
  display: flex;
  position: relative;
  z-index: 5;
}

.hero-content {
  max-width: 600px;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s ease;
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

.secondary-btn {
  background: transparent;
  color: white;
  font-size: 1rem;
  padding: 0.9rem 2rem;
  border-radius: 50px;
  border: 2px solid white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.secondary-btn:hover {
  background: rgba(255,255,255,0.1);
  transform: translateY(-3px);
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

.image-overlay {
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

.category-card:hover .image-overlay {
  opacity: 1;
}

.explore-btn {
  background: #0055FF;
  color: white;
  padding: 0.8rem 2rem;
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
  color: #0055FF;
  font-size: 2rem;
  margin-bottom: 1rem;
}

.category-content p {
  color: #444;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.features-list {
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
}

.features-list li {
  padding-left: 2rem;
  position: relative;
  margin-bottom: 0.8rem;
  color: #444;
}

.check-icon {
  position: absolute;
  left: 0;
  color: #0055FF;
  font-weight: bold;
  margin-right: 0.5rem;
}

.category-btn {
  background: #0055FF;
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.category-btn:hover {
  background: #00CCFF;
  transform: translateY(-3px);
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
  margin-bottom: 5rem;
}

.payment-feature {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
  box-shadow: 0 10px 25px rgba(0, 85, 255, 0.07);
  transition: transform 0.3s ease;
}

.payment-feature:hover {
  transform: translateY(-10px);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.payment-feature h3 {
  color: #0055FF;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.payment-feature p {
  color: #666;
  line-height: 1.6;
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
  font-size: 0.9rem;
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
  box-shadow: 0 15px 30px rgba(0, 85, 255, 0.07);
  transition: all 0.3s ease;
  text-align: center;
  position: relative;
  border: 3px solid transparent;
  overflow: hidden;
}

.plan-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 85, 255, 0.12);
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
.testimonials {
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
  width: 12px;
  height: 12px;
  background: #ddd;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.3s ease;
}

.indicator.active {
  background: #0055FF;
  transform: scale(1.2);
}

/* FAQ Section */
.faq-section {
  background: #f5f8ff;
}

.faq-container {
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  margin-bottom: 1.5rem;
  box-shadow: 0 5px 15px rgba(0, 85, 255, 0.05);
}

.faq-question {
  padding: 1.5rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.faq-question h3 {
  color: #333;
  font-size: 1.2rem;
  margin: 0;
}

.toggle-icon {
  position: relative;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}

.toggle-icon span {
  position: absolute;
  width: 100%;
  height: 2px;
  background: #0055FF;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.3s ease;
}

.toggle-icon span:nth-child(2) {
  transform: translateY(-50%) rotate(90deg);
}

.toggle-icon.open span:nth-child(2) {
  transform: translateY(-50%) rotate(0deg);
  opacity: 0;
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.faq-answer.open {
  max-height: 300px;
}

.faq-answer p {
  padding: 0 1.5rem 1.5rem;
  color: #666;
  line-height: 1.6;
}

/* CTA Section */
.cta-section {
  background: linear-gradient(135deg, #0055FF 0%, #00CCFF 100%);
  color: white;
  text-align: center;
  padding: 5rem 2rem;
}

.cta-section h2 {
  font-size: 2.8rem;
  margin-bottom: 1rem;
}

.cta-section p {
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

/* Responsive Styles */
@media (max-width: 1024px) {
  .hero h1 {
    font-size: 3rem;
  }

  .section-header h2 {
    font-size: 2.2rem;
  }
  
  .category-card {
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .hero-container {
    flex-direction: column;
    padding: 2rem;
  }
  
  .hero h1 {
    font-size: 2.5rem;
  }
  
  .hero p {
    font-size: 1.1rem;
  }
  
  .category-card {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .category-card.reverse {
    direction: ltr;
  }
  
  .payment-process {
    flex-direction: column;
    gap: 2rem;
  }
  
  .process-arrow {
    transform: rotate(90deg);
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

@media (max-width: 480px) {
  .hero h1 {
    font-size: 2rem;
  }
  
  .hero-btns {
    flex-direction: column;
    gap: 1rem;
  }
  
  .primary-btn, .secondary-btn {
    width: 100%;
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
}
</style>