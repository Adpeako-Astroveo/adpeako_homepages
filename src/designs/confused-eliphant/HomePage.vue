<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const entertainmentSections = ref([
  {
    title: 'Music Streaming',
    description: 'Dive into millions of tracks across all genres. From chart-topping hits to hidden gems, discover your next favorite song with crystal-clear sound quality.',
    image: 'https://images.pexels.com/photos/3944104/pexels-photo-3944104.jpeg',
    features: ['Hi-Fi Audio Quality', 'Personalized Playlists', 'Offline Mode', 'Lyrics Support']
  },
  {
    title: 'Video Streaming',
    description: 'Experience unlimited entertainment with our vast collection of movies, TV shows, and exclusive series in stunning quality.',
    image: 'https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg',
    features: ['HD & 4K Quality', 'Multiple Languages', 'Download & Watch', 'Smart Recommendations']
  },
  {
    title: 'Live Sports',
    description: 'Never miss a moment of action with comprehensive coverage of your favorite sports events, live matches, and exclusive highlights.',
    image: 'https://images.pexels.com/photos/163398/football-american-football-quarterback-runner-163398.jpeg',
    features: ['Live Coverage', 'Multi-cam Views', 'Real-time Stats', 'Expert Commentary']
  },
  {
    title: 'Mobile Games',
    description: 'Access hundreds of premium mobile games with no ads and no in-app purchases. From casual fun to immersive experiences.',
    image: 'https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg',
    features: ['No Ads', 'Cloud Saves', 'Multiplayer Support', 'Regular Updates']
  },
  {
    title: 'Audiobook Library',
    description: 'Listen to bestsellers and classics narrated by world-class voice artists. Transform your commute, workouts, or downtime.',
    image: 'https://images.pexels.com/photos/762687/pexels-photo-762687.jpeg',
    features: ['Huge Collection', 'Offline Mode', 'Sleep Timer', 'Bookmarks & Notes']
  }
]);

const billingFeatures = ref([
  {
    title: 'Easy Mobile Billing',
    description: 'Pay directly through your phone bill - no credit card or bank details needed',
    icon: '📱'
  },
  {
    title: 'Secure Transactions',
    description: 'Your payment information is protected with industry-leading encryption',
    icon: '🔒'
  },
  {
    title: 'Flexible Plans',
    description: 'Choose daily, weekly, or monthly billing options to fit your needs',
    icon: '📅'
  },
  {
    title: 'Instant Access',
    description: 'Start enjoying premium content immediately after confirming your payment',
    icon: '⚡'
  }
]);

const plans = ref([
  {
    name: 'Daily Pass',
    price: '€1.99',
    period: 'per day',
    features: [
      'Full access to all content',
      'HD streaming quality',
      'Single device access',
      '24-hour validity'
    ],
    popular: false
  },
  {
    name: 'Weekly Premium',
    price: '€9.99',
    period: 'per week',
    features: [
      'Full access to all content',
      'HD streaming quality',
      'Two device access',
      'Offline downloads',
      'Ad-free experience'
    ],
    popular: true
  },
  {
    name: 'Monthly Ultimate',
    price: '€29.99',
    period: 'per month',
    features: [
      'Full access to all content',
      '4K Ultra HD where available',
      'Five device access',
      'Unlimited downloads',
      'Ad-free experience',
      'Priority customer support'
    ],
    popular: false
  }
]);

const testimonials = ref([
  {
    text: "I've tried many entertainment services, but Confused Eliphant offers the best value with its all-in-one package. The phone billing makes it so convenient!",
    author: "Marcus T.",
    location: "Berlin"
  },
  {
    text: "The game selection is amazing, and I love that I can download music and audiobooks for my commute. No more juggling multiple subscriptions!",
    author: "Sophia K.",
    location: "Vienna"
  },
  {
    text: "Being able to watch sports events live while traveling has been a game-changer. The streaming quality is excellent even on mobile data.",
    author: "Leo J.",
    location: "Zurich"
  }
]);

const currentTestimonialIndex = ref(0);

const nextTestimonial = () => {
  currentTestimonialIndex.value = (currentTestimonialIndex.value + 1) % testimonials.value.length;
};

const prevTestimonial = () => {
  currentTestimonialIndex.value = (currentTestimonialIndex.value - 1 + testimonials.value.length) % testimonials.value.length;
};

const supportedCarriers = ref([
  'All major mobile carriers supported'
]);

const faqs = ref([
  {
    question: 'How does phone billing work?',
    answer: 'When you subscribe, the charges are added directly to your monthly phone bill or deducted from your prepaid balance. No credit card or bank details are required.'
  },
  {
    question: 'Can I cancel my subscription anytime?',
    answer: 'Yes, you can cancel your subscription at any time with no cancellation fees. Your access will remain active until the current billing period ends.'
  },
  {
    question: 'Which devices can I use for streaming?',
    answer: 'You can use any mobile device with an internet connection. We support iOS and Android smartphones and tablets, as well as web access on computers.'
  },
  {
    question: 'Is there a limit to how much content I can consume?',
    answer: 'No, all our plans offer unlimited access to our entire content library. Stream as much as you want, whenever you want.'
  },
  {
    question: 'Are there any hidden fees?',
    answer: 'No hidden fees whatsoever. The price you see is what you pay, with all taxes included.'
  }
]);

const navigateToLogin = () => {
  router.push('/login');
};
</script>

<template>
  <div class="confused-eliphant-homepage">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1>Your Complete<br>Mobile Entertainment Hub</h1>
        <p class="subtitle">One subscription, unlimited entertainment - direct to your phone</p>
        <button class="cta-button" @click="navigateToLogin">Login Now</button>
        <div class="carrier-logos">
          <p class="supported-text">{{ supportedCarriers[0] }}</p>
        </div>
      </div>
    </section>

    <!-- Entertainment Sections -->
    <section class="entertainment">
      <h2>Unlimited Entertainment Options</h2>
      <div v-for="section in entertainmentSections" :key="section.title" class="content-section">
        <div class="section-image">
          <div class="image-container">
            <img :src="section.image" :alt="section.title" />
            <div class="image-overlay">
              <div class="overlay-content">
                <span class="explore-icon">🔍</span>
                <span>Explore</span>
              </div>
            </div>
          </div>
        </div>
        <div class="section-content">
          <h3>{{ section.title }}</h3>
          <p>{{ section.description }}</p>
          <ul class="features-list">
            <li v-for="feature in section.features" :key="feature">{{ feature }}</li>
          </ul>
          <button class="section-button" @click="navigateToLogin">Explore {{ section.title }}</button>
        </div>
      </div>
    </section>

    <!-- Mobile Billing Section -->
    <section class="billing">
      <h2>Simple Mobile Payment</h2>
      <p class="section-subtitle">No credit cards, no complicated forms - just fast, secure mobile billing</p>
      
      <div class="billing-features">
        <div v-for="feature in billingFeatures" :key="feature.title" class="billing-feature">
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
            <div class="price">{{ plan.price }}</div>
            <p class="period">{{ plan.period }}</p>
            <ul class="plan-features">
              <li v-for="feature in plan.features" :key="feature">{{ feature }}</li>
            </ul>
            <button class="select-plan" @click="navigateToLogin">Login Now</button>
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
          <p>Select the subscription that fits your entertainment needs</p>
        </div>
        <div class="step">
          <div class="step-number">2</div>
          <h3>Verify Your Number</h3>
          <p>Confirm your mobile number for billing purposes</p>
        </div>
        <div class="step">
          <div class="step-number">3</div>
          <h3>Enjoy Unlimited Access</h3>
          <p>Stream, play, and listen to premium content instantly</p>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="testimonials">
      <h2>What Our Users Say</h2>
      <div class="testimonials-container">
        <button @click="prevTestimonial" class="testimonial-nav prev">❮</button>
        <div class="testimonial">
          <p class="testimonial-text">"{{ testimonials[currentTestimonialIndex].text }}"</p>
          <div class="testimonial-author">
            <p class="author-name">{{ testimonials[currentTestimonialIndex].author }}</p>
            <p class="author-location">{{ testimonials[currentTestimonialIndex].location }}</p>
          </div>
        </div>
        <button @click="nextTestimonial" class="testimonial-nav next">❯</button>
      </div>
      <div class="testimonial-indicators">
        <span 
          v-for="(_, index) in testimonials" 
          :key="index" 
          class="indicator"
          :class="{ active: currentTestimonialIndex === index }"
          @click="currentTestimonialIndex = index"
        ></span>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq">
      <h2>Frequently Asked Questions</h2>
      <div class="faq-grid">
        <div v-for="faq in faqs" :key="faq.question" class="faq-item">
          <h3>{{ faq.question }}</h3>
          <p>{{ faq.answer }}</p>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta">
      <div class="cta-pattern"></div>
      <h2>Ready for Endless Entertainment?</h2>
      <p>Join thousands of satisfied users enjoying premium content with just a few taps</p>
      <button class="cta-button pulse-effect" @click="navigateToLogin">Login Now</button>
    </section>
  </div>
</template>

<style scoped>
.confused-eliphant-homepage {
  color: #1a202c;
  padding-top: 64px;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  overflow-x: hidden;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #9333EA 0%, #C084FC 100%);
  color: white;
  padding: 8rem 2rem;
  text-align: center;
  position: relative;
  z-index: 1;
  overflow: hidden;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('https://images.pexels.com/photos/7130498/pexels-photo-7130498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  background-size: cover;
  background-position: center;
  opacity: 0.15;
  z-index: -1;
}

.hero-content {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  z-index: 2;
}

.hero h1 {
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  text-shadow: 0 2px 4px rgba(0,0,0,0.2);
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
  color: #9333EA;
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
  background: #f8f8f8;
}

.pulse-effect {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
  }
}

/* Entertainment Section */
.entertainment {
  padding: 5rem 2rem;
}

.entertainment h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #9333EA;
  margin-bottom: 4rem;
  position: relative;
}

.entertainment h2:after {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background: linear-gradient(90deg, #9333EA, #C084FC);
  border-radius: 3px;
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

.section-image {
  width: 100%;
  overflow: hidden;
  border-radius: 1rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.image-container {
  position: relative;
  overflow: hidden;
  border-radius: 1rem;
  width: 100%;
  height: 400px;
}

.section-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(147, 51, 234, 0.7);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.overlay-content {
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.explore-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.image-container:hover .image-overlay {
  opacity: 1;
}

.image-container:hover img {
  transform: scale(1.1);
}

.section-content h3 {
  font-size: 2rem;
  color: #9333EA;
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
  color: #9333EA;
  font-weight: bold;
}

.section-button {
  background: #9333EA;
  color: white;
  padding: 0.8rem 1.8rem;
  border-radius: 30px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-block;
}

.section-button:hover {
  background: #A855F7;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(147, 51, 234, 0.3);
}

/* Billing Section */
.billing {
  background: #f8fafc;
  padding: 5rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.billing::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('https://images.pexels.com/photos/7130555/pexels-photo-7130555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  background-size: cover;
  background-position: center;
  opacity: 0.05;
  z-index: 0;
}

.billing h2 {
  font-size: 2.5rem;
  color: #9333EA;
  margin-bottom: 1rem;
  position: relative;
  z-index: 1;
}

.section-subtitle {
  font-size: 1.2rem;
  color: #64748b;
  max-width: 700px;
  margin: 0 auto 4rem;
  position: relative;
  z-index: 1;
}

.billing-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto 5rem;
  position: relative;
  z-index: 1;
}

.billing-feature {
  background: white;
  padding: 2.5rem 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.billing-feature:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.billing-feature h3 {
  font-size: 1.5rem;
  color: #9333EA;
  margin-bottom: 1rem;
}

.billing-feature p {
  color: #4a5568;
  line-height: 1.6;
}

/* Plans Section */
.plans-section {
  margin-top: 4rem;
  position: relative;
  z-index: 1;
}

.plans-section h3 {
  font-size: 2rem;
  color: #9333EA;
  margin-bottom: 3rem;
}

.plans-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
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
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 2px solid transparent;
}

.plan-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.1);
}

.plan-card.popular {
  border-color: #9333EA;
  transform: scale(1.05);
  z-index: 1;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.plan-card.popular:hover {
  transform: scale(1.05) translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
}

.popular-tag {
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  background: #9333EA;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.9rem;
}

.plan-card h4 {
  font-size: 1.8rem;
  color: #9333EA;
  margin-bottom: 1rem;
}

.price {
  font-size: 2.5rem;
  font-weight: 800;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.period {
  color: #64748b;
  margin-bottom: 2rem;
  display: block;
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
  color: #9333EA;
}

.select-plan {
  background: #9333EA;
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
  background: #A855F7;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(147, 51, 234, 0.3);
}

/* How It Works */
.how-it-works {
  padding: 5rem 2rem;
  text-align: center;
  background: linear-gradient(to right, rgba(147, 51, 234, 0.05), rgba(192, 132, 252, 0.05));
}

.how-it-works h2 {
  font-size: 2.5rem;
  color: #9333EA;
  margin-bottom: 3rem;
  position: relative;
}

.how-it-works h2:after {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background: linear-gradient(90deg, #9333EA, #C084FC);
  border-radius: 3px;
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
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.step:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.step-number {
  width: 3.5rem;
  height: 3.5rem;
  background: #9333EA;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 auto 1.5rem;
  box-shadow: 0 4px 10px rgba(147, 51, 234, 0.3);
  position: relative;
}

.step-number::before {
  content: '';
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  border-radius: 50%;
  border: 2px solid rgba(147, 51, 234, 0.3);
  animation: pulse-border 2s infinite;
}

@keyframes pulse-border {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  70% {
    transform: scale(1.1);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}

.step h3 {
  color: #9333EA;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

/* Testimonials */
.testimonials {
  padding: 5rem 2rem;
  background: #f8fafc;
  text-align: center;
}

.testimonials h2 {
  font-size: 2.5rem;
  color: #9333EA;
  margin-bottom: 3rem;
  position: relative;
}

.testimonials h2:after {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background: linear-gradient(90deg, #9333EA, #C084FC);
  border-radius: 3px;
}

.testimonials-container {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  align-items: center;
}

.testimonial {
  background: white;
  padding: 2.5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  flex: 1;
  position: relative;
}

.testimonial::before {
  content: '"';
  position: absolute;
  top: 10px;
  left: 20px;
  font-size: 4rem;
  color: rgba(147, 51, 234, 0.1);
  font-family: Georgia, serif;
}

.testimonial::after {
  content: '"';
  position: absolute;
  bottom: -10px;
  right: 20px;
  font-size: 4rem;
  color: rgba(147, 51, 234, 0.1);
  font-family: Georgia, serif;
}

.testimonial-text {
  font-size: 1.2rem;
  font-style: italic;
  color: #4a5568;
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.testimonial-author {
  text-align: right;
}

.author-name {
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.3rem;
}

.author-location {
  color: #718096;
  font-size: 0.9rem;
}

.testimonial-nav {
  background: #9333EA;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  margin: 0 1rem;
  transition: all 0.3s ease;
}

.testimonial-nav:hover {
  background: #A855F7;
  transform: scale(1.1);
}

.testimonial-indicators {
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
  gap: 0.5rem;
}

.indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #e2e8f0;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.indicator.active {
  background-color: #9333EA;
}

/* FAQ Section */
.faq {
  padding: 5rem 2rem;
  background: linear-gradient(to right, rgba(147, 51, 234, 0.03), rgba(192, 132, 252, 0.03));
}

.faq h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #9333EA;
  margin-bottom: 3rem;
  position: relative;
}

.faq h2:after {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background: linear-gradient(90deg, #9333EA, #C084FC);
  border-radius: 3px;
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.faq-item {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-left: 4px solid #9333EA;
}

.faq-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.faq-item h3 {
  color: #9333EA;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.faq-item p {
  color: #4a5568;
  line-height: 1.6;
}

/* CTA Section */
.cta {
  background: linear-gradient(135deg, #9333EA 0%, #C084FC 100%);
  color: white;
  text-align: center;
  padding: 6rem 2rem;
  position: relative;
  overflow: hidden;
}

.cta-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('https://images.pexels.com/photos/5717411/pexels-photo-5717411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  background-size: cover;
  opacity: 0.1;
  z-index: 0;
}

.cta h2 {
  font-size: 3rem;
  line-height: 1.2;
  max-width: 800px;
  margin: 0 auto 1.5rem;
  position: relative;
  z-index: 1;
}

.cta p {
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto 2.5rem;
  opacity: 0.9;
  position: relative;
  z-index: 1;
}

.cta .cta-button {
  background: white;
  color: #9333EA;
  position: relative;
  z-index: 1;
}

/* Responsive Styles */
@media (max-width: 1024px) {
  .content-section {
    gap: 3rem;
  }
  
  .plans-grid {
    gap: 1.5rem;
  }
  
  .plan-card.popular {
    transform: scale(1.03);
  }
  
  .plan-card.popular:hover {
    transform: scale(1.03) translateY(-5px);
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
  
  .faq-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 7rem 1.5rem 6rem;
    margin-top: 0;
  }
  
  .hero h1 {
    font-size: 2.8rem;
  }
  
  .subtitle {
    font-size: 1.2rem;
  }
  
  .billing-features {
    grid-template-columns: 1fr 1fr;
  }
  
  .image-container {
    height: 300px;
  }
  
  .section-content h3 {
    font-size: 1.8rem;
  }
  
  .steps::after {
    display: none;
  }
  
  .steps {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .testimonials-container {
    flex-direction: column;
  }
  
  .testimonial-nav {
    margin: 1rem 0;
  }
  
  .cta h2 {
    font-size: 2.2rem;
  }
  
  .entertainment h2, .billing h2, .how-it-works h2, .testimonials h2, .faq h2 {
    font-size: 2.2rem;
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
  
  .billing-features {
    grid-template-columns: 1fr;
  }
  
  .image-container {
    height: 250px;
  }
  
  .section-content h3 {
    font-size: 1.7rem;
  }
  
  .entertainment, .billing, .how-it-works, .testimonials, .faq, .cta {
    padding: 4rem 1.5rem;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 6rem 1rem 4rem;
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
  
  .section-button {
    padding: 0.7rem 1.5rem;
    font-size: 0.95rem;
  }
  
  .section-content p {
    font-size: 1rem;
  }
  
  .testimonial {
    padding: 1.5rem;
  }
  
  .testimonial-text {
    font-size: 1rem;
  }
  
  .faq-item {
    padding: 1.5rem;
  }
  
  .faq-item h3 {
    font-size: 1.1rem;
  }
}

@media (max-width: 380px) {
  .hero h1 {
    font-size: 2rem;
  }
  
  .entertainment h2, .billing h2, .how-it-works h2, .testimonials h2, .faq h2 {
    font-size: 1.8rem;
  }
  
  .cta h2 {
    font-size: 1.8rem;
  }
  
  .cta p {
    font-size: 1rem;
  }
}
</style>