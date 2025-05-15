<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const entertainmentSections = ref([
  {
    title: 'Music Streaming',
    description: 'Access millions of songs across all genres. From chart-topping hits to indie gems and exclusive releases, enjoy crystal-clear sound quality wherever you go.',
    image: 'https://images.pexels.com/photos/4090902/pexels-photo-4090902.jpeg',
    features: ['Hi-Fi Audio', 'Personalized Playlists', 'Offline Listening', 'Lyrics Support'],
    link: '/switch-runner/music'
  },
  {
    title: 'Video Streaming',
    description: 'Dive into a vast library of movies, TV shows, and exclusive content. Stream in HD or 4K and enjoy a cinematic experience on any device, anytime.',
    image: 'https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg',
    features: ['HD & 4K Quality', 'Download & Watch', 'Multiple Languages', 'Family Profiles'],
    link: '/switch-runner/video'
  },
  {
    title: 'Live Sports',
    description: 'Never miss a game with our comprehensive sports coverage. Watch live matches, catch highlights, and follow your favorite teams across all major leagues.',
    image: 'https://images.pexels.com/photos/68147/pexels-photo-68147.jpeg',
    features: ['Live Coverage', 'Multi-cam Views', 'Stats & Analysis', 'Instant Replays'],
    link: '/switch-runner/sports'
  },
  {
    title: 'Mobile Games',
    description: 'Experience premium gaming on the go. Our collection includes everything from casual favorites to immersive multiplayer experiences with stunning graphics.',
    image: 'https://images.pexels.com/photos/682933/pexels-photo-682933.jpeg',
    features: ['No Ads', 'Cloud Saves', 'Multiplayer Support', 'Regular Updates'],
    link: '/switch-runner/games'
  },
  {
    title: 'Audiobook Library',
    description: 'Transform your daily commute with our vast audiobook collection. Listen to bestsellers narrated by world-class voice artists wherever you are.',
    image: 'https://images.pexels.com/photos/3776780/pexels-photo-3776780.jpeg',
    features: ['Massive Selection', 'Offline Mode', 'Sleep Timer', 'Adjustable Speed'],
    link: '/switch-runner/audiobooks'
  }
]);

const paymentFeatures = ref([
  {
    title: 'Phone Bill Payments',
    description: 'The simplest way to pay - charges added directly to your monthly phone bill',
    icon: '📱'
  },
  {
    title: 'No Credit Card Needed',
    description: 'Enjoy premium content without the need for credit cards or bank accounts',
    icon: '💳'
  },
  {
    title: 'Secure Transactions',
    description: 'Advanced encryption and security measures to protect your payment information',
    icon: '🔒'
  }
]);

const plans = ref([
  {
    name: 'Free',
    price: '0',
    billing: 'No payment required',
    duration: 'Limited access',
    features: [
      'Basic content access',
      'Ad-supported streaming',
      'Standard quality',
      'Single device'
    ],
    popular: false
  },
  {
    name: 'Basic',
    price: '7.99',
    billing: 'Weekly via phone bill',
    duration: '7 days of premium access',
    features: [
      'Full content library',
      'HD streaming',
      'Offline downloads',
      'Cancel anytime'
    ],
    popular: true
  },
  {
    name: 'Premium',
    price: '19.99',
    billing: 'Monthly via phone bill',
    duration: '30 days of unlimited access',
    features: [
      'Everything in Basic',
      '4K Ultra HD where available',
      'Multiple device support',
      'Priority customer service'
    ],
    popular: false
  }
]);

const testimonials = ref([
  {
    text: "Switch Runner has completely changed how I consume entertainment on the go. The phone billing is so convenient!",
    author: "Sarah K.",
    location: "Berlin"
  },
  {
    text: "I love being able to switch between games, music, and audiobooks all in one app. And no credit card needed!",
    author: "Marco T.",
    location: "Milan"
  },
  {
    text: "The sports coverage is incredible. I never miss a match now, even when I'm traveling.",
    author: "Thomas L.",
    location: "Amsterdam"
  }
]);

const supportedCarriers = ref([
  'All major mobile carriers supported'
]);

const currentTestimonial = ref(0);
const autoplayInterval = ref(null);

const nextTestimonial = () => {
  currentTestimonial.value = (currentTestimonial.value + 1) % testimonials.value.length;
};

const prevTestimonial = () => {
  currentTestimonial.value = currentTestimonial.value === 0 
    ? testimonials.value.length - 1 
    : currentTestimonial.value - 1;
};

const startAutoplay = () => {
  autoplayInterval.value = setInterval(nextTestimonial, 5000);
};

const stopAutoplay = () => {
  if (autoplayInterval.value) {
    clearInterval(autoplayInterval.value);
  }
};

const navigateToPage = (link) => {
  router.push(link);
};

onMounted(() => {
  startAutoplay();
});
</script>

<template>
  <div class="switch-runner-homepage">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Your Complete Mobile<br>Entertainment Universe</h1>
        <p class="subtitle">One platform for all your entertainment needs - Music, Videos, Games, Sports & Audiobooks</p>
        <button class="cta-button" @click="navigateToPage('/login')">Login Now</button>
        <div class="carrier-logos">
          <p class="supported-text">{{ supportedCarriers[0] }}</p>
        </div>
      </div>
    </section>

    <!-- Entertainment Sections -->
    <section class="entertainment-sections">
      <h2>Discover Premium Entertainment</h2>
      <div v-for="section in entertainmentSections" :key="section.title" class="content-section">
        <div class="section-image">
          <img :src="section.image" :alt="section.title" />
        </div>
        <div class="section-content">
          <h3>{{ section.title }}</h3>
          <p>{{ section.description }}</p>
          <ul class="features-list">
            <li v-for="feature in section.features" :key="feature">{{ feature }}</li>
          </ul>
          <button class="explore-button" @click="navigateToPage(section.link)">Explore {{ section.title }}</button>
        </div>
      </div>
    </section>

    <!-- Payment Section -->
    <section class="payment-section">
      <h2>Mobile Payment - Simple & Secure</h2>
      <p class="section-subtitle">No credit cards, no complicated forms - just fast, secure mobile billing</p>
      
      <div class="payment-features">
        <div v-for="feature in paymentFeatures" :key="feature.title" class="payment-feature">
          <div class="feature-icon">{{ feature.icon }}</div>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </div>
      </div>
      
      <div class="plans-section">
        <h3>Choose Your Plan</h3>
        <div class="plans-grid">
          <div 
            v-for="plan in plans" 
            :key="plan.name" 
            class="plan-card"
            :class="{ 'popular': plan.popular }"
          >
            <div v-if="plan.popular" class="popular-tag">Most Popular</div>
            <h4>{{ plan.name }}</h4>
            <div class="price">€{{ plan.price }}</div>
            <p class="billing">{{ plan.billing }}</p>
            <p class="duration">{{ plan.duration }}</p>
            <ul class="plan-features">
              <li v-for="feature in plan.features" :key="feature">{{ feature }}</li>
            </ul>
            <button class="select-plan" @click="navigateToPage('/login')">Login Now</button>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section class="how-it-works">
      <h2>How It Works</h2>
      <div class="steps">
        <div class="step">
          <div class="step-number">1</div>
          <h3>Choose Your Plan</h3>
          <p>Select the subscription that fits your needs</p>
        </div>
        <div class="step">
          <div class="step-number">2</div>
          <h3>Verify Your Number</h3>
          <p>Quick and easy mobile verification</p>
        </div>
        <div class="step">
          <div class="step-number">3</div>
          <h3>Enjoy Unlimited Content</h3>
          <p>Instant access to all entertainment</p>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials-section" @mouseenter="stopAutoplay" @mouseleave="startAutoplay">
      <h2>What Our Users Say</h2>
      
      <div class="testimonial-carousel">
        <button class="carousel-btn prev" @click="prevTestimonial">❮</button>
        
        <div class="testimonial-container">
          <div class="testimonial">
            <p class="testimonial-text">"{{ testimonials[currentTestimonial].text }}"</p>
            <div class="testimonial-author">
              <p class="author-name">{{ testimonials[currentTestimonial].author }}</p>
              <p class="author-location">{{ testimonials[currentTestimonial].location }}</p>
            </div>
          </div>
        </div>
        
        <button class="carousel-btn next" @click="nextTestimonial">❯</button>
      </div>
      
      <div class="carousel-indicators">
        <span 
          v-for="(_, index) in testimonials" 
          :key="index" 
          class="indicator"
          :class="{ active: currentTestimonial === index }"
          @click="currentTestimonial = index"
        ></span>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <h2>Ready for Endless Entertainment?</h2>
      <p>Join millions of users enjoying premium content with the simplest payment method</p>
      <button class="cta-button" @click="navigateToPage('/login')">Login Now</button>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div class="faq-grid">
        <div class="faq-item">
          <h3>How does phone billing work?</h3>
          <p>Our phone billing system adds the subscription charge directly to your monthly mobile phone bill. No need for credit cards or bank details.</p>
        </div>
        <div class="faq-item">
          <h3>Can I cancel anytime?</h3>
          <p>Yes, all of our plans can be canceled at any time with no cancellation fees or hidden charges.</p>
        </div>
        <div class="faq-item">
          <h3>Which carriers are supported?</h3>
          <p>We support all major mobile carriers. If you can receive this message, your carrier is likely supported.</p>
        </div>
        <div class="faq-item">
          <h3>How many devices can I use?</h3>
          <p>Depending on your plan, you can stream content on 1-5 devices simultaneously.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.switch-runner-homepage {
  color: #1a202c;
  padding-top: 64px;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  overflow-x: hidden;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #FF6347 0%, #FFA07A 100%);
  color: white;
  padding: 8rem 2rem;
  text-align: center;
  position: relative;
  z-index: 1;
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
  margin-bottom: 2.5rem;
  line-height: 1.5;
}

.carrier-logos {
  margin-top: 4rem;
  opacity: 0.8;
}

.supported-text {
  font-size: 1.1rem;
}

.cta-button {
  background: white;
  color: #FF6347;
  font-size: 1.2rem;
  padding: 1rem 3rem;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 15px rgba(0,0,0,0.15);
}

/* Entertainment Sections */
.entertainment-sections {
  padding: 5rem 2rem;
}

.entertainment-sections h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #FF6347;
  margin-bottom: 4rem;
}

.content-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto 5rem;
  align-items: center;
}

.content-section:nth-child(even) {
  direction: rtl;
}

.content-section:nth-child(even) .section-content {
  direction: ltr;
}

.content-section:last-child {
  margin-bottom: 2rem;
}

.section-image img {
  width: 100%;
  border-radius: 1rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  height: 400px;
  object-fit: cover;
}

.section-image:hover img {
  transform: scale(1.03);
}

.section-content h3 {
  font-size: 2rem;
  color: #FF6347;
  margin-bottom: 1rem;
}

.section-content p {
  font-size: 1.1rem;
  color: #4a5568;
  margin-bottom: 1.5rem;
  line-height: 1.7;
}

.features-list {
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
}

.features-list li {
  padding-left: 2rem;
  position: relative;
  margin-bottom: 0.8rem;
  color: #4a5568;
}

.features-list li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #FF6347;
  font-weight: bold;
}

.explore-button {
  background: #FF6347;
  color: white;
  padding: 0.8rem 1.8rem;
  border-radius: 30px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-block;
  margin-top: 1rem;
}

.explore-button:hover {
  background: #ff7e66;
  transform: translateY(-2px);
}

/* Payment Section */
.payment-section {
  background: #f8fafc;
  padding: 5rem 2rem;
  text-align: center;
}

.payment-section h2 {
  font-size: 2.5rem;
  color: #FF6347;
  margin-bottom: 1rem;
}

.section-subtitle {
  font-size: 1.2rem;
  color: #64748b;
  max-width: 700px;
  margin: 0 auto 4rem;
}

.payment-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto 5rem;
}

.payment-feature {
  background: white;
  padding: 2.5rem 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.payment-feature:hover {
  transform: translateY(-5px);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.payment-feature h3 {
  font-size: 1.5rem;
  color: #FF6347;
  margin-bottom: 1rem;
}

.payment-feature p {
  color: #4a5568;
  line-height: 1.6;
}

/* Plans Section */
.plans-section {
  margin-top: 4rem;
}

.plans-section h3 {
  font-size: 2rem;
  color: #FF6347;
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
  position: relative;
  transition: transform 0.3s ease;
  border: 2px solid transparent;
}

.plan-card:hover {
  transform: translateY(-5px);
}

.plan-card.popular {
  border-color: #FF6347;
  transform: scale(1.03);
  z-index: 1;
}

.plan-card.popular:hover {
  transform: scale(1.03) translateY(-5px);
}

.popular-tag {
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  background: #FF6347;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.9rem;
}

.plan-card h4 {
  font-size: 1.8rem;
  color: #FF6347;
  margin-bottom: 1.5rem;
}

.price {
  font-size: 2.5rem;
  font-weight: 800;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.billing {
  color: #64748b;
  margin-bottom: 0.5rem;
}

.duration {
  color: #4a5568;
  font-weight: 600;
  margin-bottom: 2rem;
}

.plan-features {
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
  text-align: left;
}

.plan-features li {
  padding: 0.7rem 0;
  padding-left: 2rem;
  position: relative;
  color: #4a5568;
  border-bottom: 1px solid #f0f4f8;
}

.plan-features li:last-child {
  border-bottom: none;
}

.plan-features li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #FF6347;
}

.select-plan {
  background: #FF6347;
  color: white;
  padding: 1rem 2rem;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
}

.select-plan:hover {
  background: #E05D41;
  transform: translateY(-2px);
}

/* How It Works */
.how-it-works {
  padding: 5rem 2rem;
  text-align: center;
}

.how-it-works h2 {
  font-size: 2.5rem;
  color: #FF6347;
  margin-bottom: 3rem;
}

.steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
}

.steps::after {
  content: "";
  position: absolute;
  top: 4rem;
  left: 15%;
  right: 15%;
  height: 2px;
  background: #e2e8f0;
  z-index: 0;
}

.step {
  background: white;
  padding: 3rem 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  position: relative;
  z-index: 1;
}

.step-number {
  width: 3.5rem;
  height: 3.5rem;
  background: #FF6347;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 auto 1.5rem;
  box-shadow: 0 4px 10px rgba(255, 99, 71, 0.3);
}

.step h3 {
  color: #FF6347;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

/* Testimonials Section */
.testimonials-section {
  background: #f0f4f8;
  padding: 5rem 2rem;
  text-align: center;
}

.testimonials-section h2 {
  font-size: 2.5rem;
  color: #FF6347;
  margin-bottom: 3rem;
}

.testimonial-carousel {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  align-items: center;
}

.carousel-btn {
  background: #FF6347;
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  cursor: pointer;
  z-index: 2;
  opacity: 0.8;
  transition: opacity 0.3s ease;
}

.carousel-btn:hover {
  opacity: 1;
}

.testimonial-container {
  flex: 1;
  overflow: hidden;
  padding: 0 2rem;
}

.testimonial {
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.testimonial-text {
  font-size: 1.25rem;
  font-style: italic;
  margin-bottom: 1.5rem;
}

.testimonial-author {
  text-align: right;
}

.author-name {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.author-location {
  color: #666;
}

.carousel-indicators {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
}

.indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #cbd5e0;
  cursor: pointer;
  transition: background 0.3s ease;
}

.indicator.active {
  background: #FF6347;
}

/* CTA Section */
.cta-section {
  background: linear-gradient(135deg, #FF6347 0%, #FFA07A 100%);
  color: white;
  text-align: center;
  padding: 6rem 2rem;
}

.cta-section h2 {
  font-size: 3rem;
  line-height: 1.2;
  max-width: 800px;
  margin: 0 auto 1.5rem;
}

.cta-section p {
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto 2.5rem;
  opacity: 0.9;
}

.cta-section .cta-button {
  background: white;
  color: #FF6347;
}

/* FAQ Section */
.faq-section {
  padding: 5rem 2rem;
  background: white;
}

.faq-section h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #FF6347;
  margin-bottom: 3rem;
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.faq-item {
  padding: 2rem;
  background: #f8fafc;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.03);
}

.faq-item h3 {
  color: #FF6347;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.faq-item p {
  color: #4a5568;
  line-height: 1.6;
}

/* Responsive Styles - Improved for all devices */
@media (max-width: 1200px) {
  .content-section {
    gap: 3rem;
    padding: 0 1rem;
  }
  
  .plans-grid {
    padding: 0 1rem;
  }
}

@media (max-width: 1024px) {
  .hero h1 {
    font-size: 3.5rem;
  }
  
  .content-section {
    gap: 2.5rem;
  }
  
  .section-image img {
    height: 350px;
  }
  
  .plan-card.popular {
    transform: scale(1.02);
  }
  
  .plan-card.popular:hover {
    transform: scale(1.02) translateY(-5px);
  }
  
  .faq-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    padding: 0 1rem;
  }
}

@media (max-width: 900px) {
  .content-section {
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-bottom: 4rem;
  }
  
  .content-section:nth-child(even) {
    direction: ltr;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 6rem 1.5rem;
  }
  
  .hero h1 {
    font-size: 2.8rem;
  }
  
  .subtitle {
    font-size: 1.2rem;
  }
  
  .section-image img {
    height: 300px;
  }
  
  .section-content h3 {
    font-size: 1.8rem;
  }
  
  .payment-features {
    gap: 1.5rem;
  }
  
  .steps::after {
    display: none;
  }
  
  .steps {
    gap: 2rem;
  }
  
  .cta-section h2 {
    font-size: 2.2rem;
  }
  
  .faq-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .hero h1 {
    font-size: 2.5rem;
  }
  
  .plans-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .plan-card, .plan-card.popular {
    transform: none;
    max-width: 400px;
    margin: 0 auto;
  }
  
  .plan-card:hover, .plan-card.popular:hover {
    transform: translateY(-5px);
  }
  
  .payment-feature {
    padding: 2rem 1.5rem;
  }
  
  .section-image img {
    height: 250px;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 5rem 1rem;
  }
  
  .hero h1 {
    font-size: 2.2rem;
  }
  
  .subtitle {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }
  
  .cta-button {
    padding: 0.8rem 2rem;
    font-size: 1.1rem;
  }
  
  .section-content h3 {
    font-size: 1.7rem;
  }
  
  .payment-section h2, .how-it-works h2, .testimonials-section h2, .faq-section h2 {
    font-size: 2rem;
  }
  
  .popular-tag {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
  }
  
  .plan-card {
    padding: 2.5rem 1.5rem;
  }
  
  .testimonial {
    padding: 1.5rem 1rem;
  }
  
  .testimonial-text {
    font-size: 1.1rem;
  }
  
  .cta-section {
    padding: 4rem 1rem;
  }
  
  .cta-section h2 {
    font-size: 1.8rem;
  }
  
  .cta-section p {
    font-size: 1rem;
  }
  
  .faq-item {
    padding: 1.5rem;
  }
  
  .faq-item h3 {
    font-size: 1.2rem;
  }
}

@media (max-width: 380px) {
  .hero h1 {
    font-size: 2rem;
  }
  
  .entertainment-sections h2, .payment-section h2, .how-it-works h2, 
  .testimonials-section h2, .faq-section h2 {
    font-size: 1.8rem;
  }
  
  .section-content h3 {
    font-size: 1.5rem;
  }
  
  .plan-card h4 {
    font-size: 1.6rem;
  }
  
  .price {
    font-size: 2.2rem;
  }
  
  .step-number {
    width: 3rem;
    height: 3rem;
    font-size: 1.3rem;
  }
  
  .carousel-btn {
    width: 35px;
    height: 35px;
  }
}
</style>