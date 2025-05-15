<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const entertainmentSections = ref([
  {
    title: 'Music Streaming',
    description: 'Immerse yourself in millions of tracks across all genres. From chart-topping hits to indie gems, discover your next favorite song with our premium audio quality.',
    image: 'https://images.pexels.com/photos/3944091/pexels-photo-3944091.jpeg',
    features: ['Hi-Fi Audio Quality', 'Offline Downloads', 'Personalized Playlists', 'Lyrics Support'],
    link: '/confused-eliphant/music'
  },
  {
    title: 'Video Streaming',
    description: 'Enjoy endless entertainment with our vast collection of movies, TV shows, and exclusive series. Stream in stunning quality wherever you are.',
    image: 'https://images.pexels.com/photos/8263321/pexels-photo-8263321.jpeg',
    features: ['4K Ultra HD', 'Multiple Languages', 'Download & Watch', 'Family Profiles'],
    link: '/confused-eliphant/video'
  },
  {
    title: 'Live Sports',
    description: 'Never miss a moment of action. Watch live matches, catch highlights, and follow your favorite teams across all major sports leagues worldwide.',
    image: 'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg',
    features: ['Live Coverage', 'Multi-cam Views', 'Stats & Analysis', 'Instant Replays'],
    link: '/confused-eliphant/sports'
  },
  {
    title: 'Mobile Games',
    description: 'Access a world of gaming excitement right from your phone. From casual fun to competitive multiplayer, find your perfect gaming experience.',
    image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg',
    features: ['Cloud Saves', 'Online Multiplayer', 'Regular Updates', 'No Ads'],
    link: '/confused-eliphant/games'
  },
  {
    title: 'Audiobook Library',
    description: 'Immerse yourself in stories narrated by world-class voice artists. Our extensive collection includes bestsellers, classics, and exclusive productions.',
    image: 'https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg',
    features: ['Huge Collection', 'Offline Mode', 'Sleep Timer', 'Bookmarks Sync'],
    link: '/confused-eliphant/audiobooks'
  }
]);

const mobilePaymentFeatures = ref([
  {
    title: 'Pay via Phone Bill',
    description: 'Simply charge to your mobile bill - no credit card needed',
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

const supportedCarriers = ref([
  'All major mobile carriers supported'
]);

const testimonials = ref([
  {
    text: "Confused Eliphant has completely transformed my entertainment experience. The variety of content and ease of payment through my phone bill is unbeatable!",
    author: "Sarah M.",
    location: "London"
  },
  {
    text: "I love being able to access all my entertainment in one place. The audiobook collection is particularly impressive!",
    author: "James T.",
    location: "New York"
  },
  {
    text: "The mobile gaming selection is fantastic, and I never have to worry about ads interrupting my gameplay. Worth every penny!",
    author: "Emma L.",
    location: "Sydney"
  }
]);

const currentTestimonialIndex = ref(0);

const nextTestimonial = () => {
  currentTestimonialIndex.value = (currentTestimonialIndex.value + 1) % testimonials.value.length;
};

const prevTestimonial = () => {
  currentTestimonialIndex.value = (currentTestimonialIndex.value - 1 + testimonials.value.length) % testimonials.value.length;
};

const navigateToSection = (link) => {
  router.push(link);
};

const handleLogin = () => {
  router.push('/login');
};
</script>

<template>
  <div class="confused-eliphant-homepage">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Unlimited Entertainment<br>In Your Pocket</h1>
        <p class="subtitle">One platform for all your entertainment needs - Music, Videos, Games, Sports & Audiobooks</p>
        <button class="cta-button" @click="handleLogin">Login Now</button>
        <div class="carrier-logos">
          <p class="supported-text">{{ supportedCarriers[0] }}</p>
        </div>
      </div>
    </section>

    <!-- Entertainment Sections -->
    <section class="entertainment">
      <h2>Discover Premium Entertainment</h2>
      <div v-for="section in entertainmentSections" :key="section.title" class="content-section">
        <div class="section-image">
          <img :src="section.image" :alt="section.title" />
          <div class="image-overlay">
            <button class="explore-button" @click="navigateToSection(section.link)">Explore Now</button>
          </div>
        </div>
        <div class="section-content">
          <h3>{{ section.title }}</h3>
          <p>{{ section.description }}</p>
          <ul class="features-list">
            <li v-for="feature in section.features" :key="feature">{{ feature }}</li>
          </ul>
          <button class="section-button" @click="navigateToSection(section.link)">Learn More</button>
        </div>
      </div>
    </section>

    <!-- Mobile Payment Section -->
    <section class="payment">
      <h2>Simple Mobile Payment</h2>
      <p class="section-subtitle">No credit cards, no complicated forms - just fast, secure mobile billing</p>
      <div class="features-grid">
        <div v-for="feature in mobilePaymentFeatures" :key="feature.title" class="feature-card">
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
          <button class="login-btn" @click="handleLogin">Login Now</button>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials">
      <h2>What Our Users Say</h2>
      <div class="testimonial-container">
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

    <!-- How It Works -->
    <section class="how-it-works">
      <h2>Start in 3 Simple Steps</h2>
      <div class="steps">
        <div class="step">
          <div class="step-number">1</div>
          <h3>Choose Your Plan</h3>
          <p>Select what suits you best</p>
        </div>
        <div class="step">
          <div class="step-number">2</div>
          <h3>Quick Verification</h3>
          <p>Confirm your mobile number</p>
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
      <h2>Ready for Unlimited Entertainment?</h2>
      <p>Join millions enjoying premium content - no credit card needed</p>
      <button class="cta-button" @click="handleLogin">Login Now</button>
    </section>
  </div>
</template>

<style scoped>
.confused-eliphant-homepage {
  color: #1a202c;
  padding-top: 64px;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #6C63FF 0%, #FF6584 100%);
  color: white;
  padding: 8rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSI3NjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiIGlkPSJhIj48c3RvcCBzdG9wLWNvbG9yPSIjRkZGIiBzdG9wLW9wYWNpdHk9Ii4wNSIgb2Zmc2V0PSIwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiNGRkYiIHN0b3Atb3BhY2l0eT0iLjAyIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPSJNMCAwaDEyMDB2NjAwSDB6IiBmaWxsPSJ1cmwoI2EpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=');
  opacity: 0.3;
  z-index: 0;
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
}

.hero h1 {
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  text-shadow: 0 2px 4px rgba(0,0,0,0.1);
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
  color: #6C63FF;
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
.entertainment {
  padding: 5rem 2rem;
}

.entertainment h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #6C63FF;
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

.section-image {
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.section-image img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.section-image:hover img {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.section-image:hover .image-overlay {
  opacity: 1;
}

.explore-button {
  background: #6C63FF;
  color: white;
  padding: 0.8rem 1.8rem;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.explore-button:hover {
  background: #5a52e0;
  transform: scale(1.05);
}

.section-content h3 {
  font-size: 2rem;
  color: #6C63FF;
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
  color: #6C63FF;
  font-weight: bold;
}

.section-button {
  background: #6C63FF;
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

.section-button:hover {
  background: #5a52e0;
  transform: translateY(-2px);
}

/* Payment Section */
.payment {
  background: #f8fafc;
  padding: 5rem 2rem;
  text-align: center;
}

.payment h2 {
  font-size: 2.5rem;
  color: #6C63FF;
  margin-bottom: 1rem;
}

.section-subtitle {
  font-size: 1.2rem;
  color: #64748b;
  max-width: 700px;
  margin: 0 auto 4rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  background: white;
  padding: 2.5rem 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  display: block;
}

.feature-card h3 {
  font-size: 1.5rem;
  color: #6C63FF;
  margin-bottom: 1rem;
}

.feature-card p {
  color: #4a5568;
  line-height: 1.6;
}

/* Plans Section */
.plans {
  padding: 5rem 2rem;
}

.plans h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #6C63FF;
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
  text-align: center;
}

.plan-card:hover {
  transform: translateY(-5px);
}

.plan-card h3 {
  font-size: 1.8rem;
  color: #6C63FF;
  margin-bottom: 1rem;
}

.price {
  font-size: 2.5rem;
  font-weight: 800;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.billing {
  color: #64748b;
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
  color: #6C63FF;
}

.login-btn {
  background: #6C63FF;
  color: white;
  padding: 1rem 2rem;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
}

.login-btn:hover {
  background: #5a52e0;
  transform: translateY(-2px);
}

/* Testimonials Section */
.testimonials {
  padding: 5rem 2rem;
  background: #f8fafc;
  text-align: center;
}

.testimonials h2 {
  font-size: 2.5rem;
  color: #6C63FF;
  margin-bottom: 3rem;
}

.testimonial-container {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  align-items: center;
}

.testimonial {
  background: white;
  padding: 2.5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  flex: 1;
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
  background: #6C63FF;
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
  background: #5a52e0;
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
  background-color: #6C63FF;
}

/* How It Works */
.how-it-works {
  padding: 5rem 2rem;
  text-align: center;
}

.how-it-works h2 {
  font-size: 2.5rem;
  color: #6C63FF;
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
  background: #6C63FF;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 auto 1.5rem;
  box-shadow: 0 4px 10px rgba(108, 99, 255, 0.3);
}

.step h3 {
  color: #6C63FF;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

/* CTA Section */
.cta {
  background: linear-gradient(135deg, #6C63FF 0%, #FF6584 100%);
  color: white;
  text-align: center;
  padding: 6rem 2rem;
}

.cta h2 {
  font-size: 3rem;
  line-height: 1.2;
  max-width: 800px;
  margin: 0 auto 1.5rem;
}

.cta p {
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto 2.5rem;
  opacity: 0.9;
}

.cta .cta-button {
  background: white;
  color: #6C63FF;
}

/* Responsive Styles */
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
  
  .cta h2 {
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
  
  .plan-card {
    max-width: 400px;
    margin: 0 auto;
  }
  
  .feature-card {
    padding: 2rem 1.5rem;
  }
  
  .section-image img {
    height: 250px;
  }
  
  .testimonial-container {
    flex-direction: column;
  }
  
  .testimonial-nav {
    margin: 1rem 0;
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
  
  .entertainment h2, .payment h2, .plans h2, .testimonials h2, .how-it-works h2, .cta h2 {
    font-size: 2rem;
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
  
  .cta {
    padding: 4rem 1rem;
  }
  
  .cta h2 {
    font-size: 1.8rem;
  }
  
  .cta p {
    font-size: 1rem;
  }
}
</style>