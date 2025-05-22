<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Hero section content
const heroContent = ref({
  title: 'Premium Mobile Entertainment',
  subtitle: 'Unlimited Music, Video, Sports, Games & Audiobooks',
  description: 'All your favorite entertainment in one place, with simple phone billing.'
});

// Features section
const features = ref([
  {
    title: 'Seamless Streaming',
    description: 'Enjoy your content on any device, anywhere, anytime.',
    icon: '📱'
  },
  {
    title: 'Premium Content',
    description: 'Access exclusive movies, music, and games.',
    icon: '🎬'
  },
  {
    title: 'Phone Billing',
    description: 'Easy payments through your mobile phone bill.',
    icon: '💳'
  },
  {
    title: 'No Contracts',
    description: 'Cancel anytime with no penalties or hidden fees.',
    icon: '📝'
  }
]);

// Entertainment categories
const categories = ref([
  {
    title: 'Music',
    description: 'Millions of songs in HD quality',
    image: 'https://images.pexels.com/photos/3944104/pexels-photo-3944104.jpeg',
    link: '/jewel-video-content/music',
    icon: '🎵'
  },
  {
    title: 'Video',
    description: 'Movies & shows in 4K Ultra HD',
    image: 'https://images.pexels.com/photos/109669/pexels-photo-109669.jpeg',
    link: '/jewel-video-content/video',
    icon: '🎬'
  },
  {
    title: 'Sports',
    description: 'Live events from around the world',
    image: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg',
    link: '/jewel-video-content/sports',
    icon: '⚽'
  },
  {
    title: 'Games',
    description: 'Premium mobile games with no ads',
    image: 'https://images.pexels.com/photos/159393/gamepad-video-game-controller-game-controller-controller-159393.jpeg',
    link: '/jewel-video-content/games',
    icon: '🎮'
  },
  {
    title: 'Audiobooks',
    description: 'Thousands of titles for your listening pleasure',
    image: 'https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg',
    link: '/jewel-video-content/audiobooks',
    icon: '🎧'
  }
]);

// Testimonials
const testimonials = ref([
  {
    quote: "I've tried many entertainment services, but Jewel Video Content offers the best value and convenience by far. I love that everything is in one place.",
    author: "Sarah M.",
    location: "New York, USA"
  },
  {
    quote: "The phone billing feature is a game-changer! No more credit card hassles or forgotten subscription renewals.",
    author: "David L.",
    location: "London, UK"
  },
  {
    quote: "The content library is incredible and constantly updated. There's always something new to discover!",
    author: "Maria G.",
    location: "Madrid, Spain"
  }
]);

// Pricing plans
const pricingPlans = ref([
  {
    name: 'Basic',
    price: '$4.99',
    period: 'monthly',
    features: ['Basic content library', 'Mobile streaming', 'Standard quality'],
    color: '#9333ea'
  },
  {
    name: 'Premium',
    price: '$9.99',
    period: 'monthly',
    features: ['Full content library', 'Multi-device streaming', 'HD quality', 'Offline downloads'],
    color: '#c026d3',
    popular: true
  },
  {
    name: 'Family',
    price: '$14.99',
    period: 'monthly',
    features: ['Everything in Premium', 'Up to 5 profiles', 'Parental controls', '4K quality'],
    color: '#db2777'
  }
]);

const navigateTo = (path) => {
  router.push(path);
};

const handleGetStarted = () => {
  router.push('/jewel-video-content/payment');
};
</script>

<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>{{ heroContent.title }}</h1>
        <h2>{{ heroContent.subtitle }}</h2>
        <p>{{ heroContent.description }}</p>
        <button @click="handleGetStarted" class="cta-button">Get Started</button>
      </div>
      <div class="hero-backdrop"></div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <div class="container">
        <h2>Why Choose Jewel Video Content</h2>
        <div class="features-grid">
          <div v-for="feature in features" :key="feature.title" class="feature-card">
            <div class="feature-icon">{{ feature.icon }}</div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Categories Section -->
    <section class="categories-section">
      <div class="container">
        <h2>Explore Our Entertainment</h2>
        <div class="categories-grid">
          <div 
            v-for="category in categories" 
            :key="category.title" 
            class="category-card"
            @click="navigateTo(category.link)"
          >
            <div class="category-image">
              <img :src="category.image" :alt="category.title">
              <div class="category-icon">{{ category.icon }}</div>
            </div>
            <div class="category-content">
              <h3>{{ category.title }}</h3>
              <p>{{ category.description }}</p>
              <button class="explore-button">Explore</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Phone Billing Section -->
    <section class="phone-billing-section">
      <div class="container">
        <div class="phone-billing-content">
          <h2>Simple Phone Billing</h2>
          <p>Pay for your entertainment directly through your monthly phone bill. No credit cards required.</p>
          <ul class="billing-benefits">
            <li><span>✓</span> No credit card required</li>
            <li><span>✓</span> Secure payment processing</li>
            <li><span>✓</span> Easy to manage subscriptions</li>
            <li><span>✓</span> Works with most mobile carriers</li>
          </ul>
          <button @click="navigateTo('/jewel-video-content/payment')" class="learn-more-button">Learn More</button>
        </div>
        <div class="phone-billing-image">
          <img src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg" alt="Phone Billing">
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials-section">
      <div class="container">
        <h2>What Our Users Say</h2>
        <div class="testimonials-grid">
          <div v-for="(testimonial, index) in testimonials" :key="index" class="testimonial-card">
            <div class="quote-icon">"</div>
            <p class="quote">{{ testimonial.quote }}</p>
            <div class="author">{{ testimonial.author }}</div>
            <div class="location">{{ testimonial.location }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section class="pricing-section">
      <div class="container">
        <h2>Choose Your Plan</h2>
        <div class="pricing-grid">
          <div 
            v-for="plan in pricingPlans" 
            :key="plan.name" 
            class="pricing-card"
            :style="{ '--plan-color': plan.color }"
            :class="{ 'popular': plan.popular }"
          >
            <div v-if="plan.popular" class="popular-tag">Most Popular</div>
            <h3>{{ plan.name }}</h3>
            <div class="price">{{ plan.price }} <span>/ {{ plan.period }}</span></div>
            <ul class="plan-features">
              <li v-for="feature in plan.features" :key="feature">
                <span class="check">✓</span> {{ feature }}
              </li>
            </ul>
            <button @click="handleGetStarted" class="select-plan-button">Select Plan</button>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <h2>Ready to Experience Premium Entertainment?</h2>
        <p>Join millions of satisfied users worldwide.</p>
        <button @click="handleGetStarted" class="cta-button">Get Started Now</button>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-page {
  min-height: 100vh;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  color: #1a1a1a;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* Hero Section */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  overflow: hidden;
}

.hero-backdrop {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
    url('https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg');
  background-size: cover;
  background-position: center;
  z-index: -1;
  animation: zoomIn 20s ease-in-out infinite alternate;
}

@keyframes zoomIn {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
}

.hero-content {
  max-width: 900px;
  padding: 2rem;
  margin-top: 2rem;
}

.hero h1 {
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #9333ea, #c026d3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 2px 10px rgba(0,0,0,0.2);
  line-height: 1.2;
}

.hero h2 {
  font-size: 2.2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #f5f5f5;
}

.hero p {
  font-size: 1.4rem;
  margin-bottom: 2.5rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.cta-button {
  background: linear-gradient(to right, #9333ea, #c026d3);
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
  padding: 1.2rem 3rem;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(147, 51, 234, 0.3);
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 25px rgba(147, 51, 234, 0.4);
}

/* Features Section */
.features-section {
  padding: 6rem 0;
  background: #f9fafb;
}

.features-section h2, 
.categories-section h2, 
.phone-billing-section h2,
.testimonials-section h2,
.pricing-section h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  text-align: center;
  color: #581c87;
  position: relative;
}

.features-section h2::after, 
.categories-section h2::after, 
.phone-billing-section h2::after,
.testimonials-section h2::after,
.pricing-section h2::after {
  content: "";
  position: absolute;
  bottom: -0.75rem;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 4px;
  background: linear-gradient(to right, #9333ea, #c026d3);
  border-radius: 2px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: white;
  border-radius: 1.5rem;
  padding: 2.5rem;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.feature-card h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #581c87;
  margin-bottom: 1rem;
}

.feature-card p {
  color: #404040;
  font-size: 1rem;
  line-height: 1.6;
}

/* Categories Section */
.categories-section {
  padding: 6rem 0;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
}

.category-card {
  background: white;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  cursor: pointer;
}

.category-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.category-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.category-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.category-card:hover .category-image img {
  transform: scale(1.1);
}

.category-icon {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(147, 51, 234, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}

.category-content {
  padding: 2rem;
}

.category-content h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #581c87;
  margin-bottom: 0.75rem;
}

.category-content p {
  color: #404040;
  font-size: 1rem;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.explore-button {
  background: transparent;
  color: #9333ea;
  border: 1px solid #9333ea;
  padding: 0.7rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.explore-button:hover {
  background: #9333ea;
  color: white;
}

/* Phone Billing Section */
.phone-billing-section {
  padding: 6rem 0;
  background: #f6f5ff;
}

.phone-billing-section .container {
  display: flex;
  align-items: center;
  gap: 4rem;
}

.phone-billing-content {
  flex: 1;
}

.phone-billing-content h2 {
  text-align: left;
  margin-bottom: 1.5rem;
}

.phone-billing-content h2::after {
  left: 0;
  transform: none;
}

.phone-billing-content p {
  color: #404040;
  font-size: 1.1rem;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.billing-benefits {
  list-style: none;
  padding: 0;
  margin: 0 0 2.5rem;
}

.billing-benefits li {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  color: #404040;
  font-size: 1.05rem;
}

.billing-benefits li span {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #9333ea;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  flex-shrink: 0;
  font-size: 0.8rem;
}

.learn-more-button {
  background: linear-gradient(to right, #9333ea, #c026d3);
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(147, 51, 234, 0.3);
}

.learn-more-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 25px rgba(147, 51, 234, 0.4);
}

.phone-billing-image {
  flex: 1;
}

.phone-billing-image img {
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 1.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

/* Testimonials Section */
.testimonials-section {
  padding: 6rem 0;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
}

.testimonial-card {
  background: white;
  border-radius: 1.5rem;
  padding: 3rem 2rem 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  position: relative;
  transition: all 0.3s ease;
}

.testimonial-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.quote-icon {
  position: absolute;
  top: 1.5rem;
  left: 2rem;
  font-size: 3rem;
  color: #9333ea;
  opacity: 0.2;
  font-weight: bold;
}

.quote {
  font-size: 1.1rem;
  color: #404040;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-style: italic;
}

.author {
  font-weight: 600;
  color: #581c87;
  margin-bottom: 0.25rem;
}

.location {
  color: #71717a;
  font-size: 0.9rem;
}

/* Pricing Section */
.pricing-section {
  padding: 6rem 0;
  background: #f6f5ff;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.pricing-card {
  --plan-color: #9333ea;
  background: white;
  border-radius: 1.5rem;
  padding: 2.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  position: relative;
  border-top: 5px solid var(--plan-color);
}

.pricing-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.pricing-card.popular {
  transform: scale(1.05);
  z-index: 1;
}

.pricing-card.popular:hover {
  transform: scale(1.05) translateY(-10px);
}

.popular-tag {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--plan-color);
  color: white;
  padding: 0.4rem 1.5rem;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 600;
}

.pricing-card h3 {
  font-size: 1.8rem;
  font-weight: 700;
  text-align: center;
  color: var(--plan-color);
  margin-bottom: 1.5rem;
}

.price {
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  color: #1a1a1a;
  margin-bottom: 1.5rem;
}

.price span {
  font-size: 1rem;
  color: #71717a;
}

.plan-features {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem;
}

.plan-features li {
  margin-bottom: 1rem;
  color: #404040;
  display: flex;
  align-items: center;
}

.check {
  width: 20px;
  height: 20px;
  background: var(--plan-color);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.8rem;
  font-size: 0.8rem;
  flex-shrink: 0;
}

.select-plan-button {
  width: 100%;
  background: var(--plan-color);
  color: white;
  border: none;
  padding: 1rem 0;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.select-plan-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.15);
  filter: brightness(1.1);
}

/* CTA Section */
.cta-section {
  padding: 6rem 0;
  background: linear-gradient(135deg, #9333ea, #c026d3);
  color: white;
  text-align: center;
}

.cta-section h2 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: white;
}

.cta-section p {
  font-size: 1.3rem;
  margin-bottom: 2.5rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

/* Responsive Design */
@media (max-width: 992px) {
  .phone-billing-section .container {
    flex-direction: column;
    gap: 3rem;
  }
  
  .phone-billing-content h2 {
    text-align: center;
  }
  
  .phone-billing-content h2::after {
    left: 50%;
    transform: translateX(-50%);
  }
  
  .pricing-card.popular {
    transform: scale(1);
  }
  
  .pricing-card.popular:hover {
    transform: translateY(-10px);
  }
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 3rem;
  }
  
  .hero h2 {
    font-size: 1.8rem;
  }
  
  .hero p {
    font-size: 1.1rem;
  }
  
  .features-section h2, 
  .categories-section h2, 
  .phone-billing-section h2,
  .testimonials-section h2,
  .pricing-section h2 {
    font-size: 2rem;
  }
  
  .phone-billing-content p {
    font-size: 1rem;
  }
  
  .cta-section h2 {
    font-size: 2.2rem;
  }
  
  .cta-section p {
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .hero h1 {
    font-size: 2.5rem;
  }
  
  .hero h2 {
    font-size: 1.5rem;
  }
  
  .hero p {
    font-size: 1rem;
  }
  
  .cta-button,
  .learn-more-button,
  .select-plan-button {
    font-size: 1rem;
    padding: 1rem 2rem;
  }
  
  .feature-card {
    padding: 2rem;
  }
  
  .feature-icon {
    font-size: 2.5rem;
  }
  
  .feature-card h3 {
    font-size: 1.3rem;
  }
  
  .categories-grid {
    grid-template-columns: 1fr;
  }
}
</style>