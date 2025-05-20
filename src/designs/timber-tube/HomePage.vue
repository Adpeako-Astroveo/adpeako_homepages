<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Features sections
const features = ref([
  {
    title: 'Premium Content Library',
    description: 'Unlimited access to movies, music, games, sports, and audiobooks all in one platform',
    icon: '🌟'
  },
  {
    title: 'HD & 4K Quality',
    description: 'Experience crystal clear video and high-fidelity audio across all content types',
    icon: '📺'
  },
  {
    title: 'Multi-device Access',
    description: 'Seamlessly switch between devices with automatic syncing of your progress',
    icon: '📱'
  }
]);

// Entertainment categories with their respective prices
const entertainmentCategories = ref([
  {
    title: 'Video Entertainment',
    description: 'Thousands of movies, TV shows and documentaries in stunning HD and 4K quality',
    image: 'https://images.pexels.com/photos/8263321/pexels-photo-8263321.jpeg',
    price: '฿15.99',
    period: '/month',
    path: '/timber-tube/video'
  },
  {
    title: 'Music Streaming',
    description: 'Millions of songs with high-fidelity audio quality and personalized playlists',
    image: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg',
    price: '฿9.99',
    period: '/month',
    path: '/timber-tube/music'
  },
  {
    title: 'Premium Games',
    description: 'Over 1,000 premium mobile games with no ads and no in-app purchases',
    image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg',
    price: '฿12.99',
    period: '/month',
    path: '/timber-tube/games'
  },
  {
    title: 'Live Sports',
    description: 'Stream live sporting events, catch highlights, and follow your favorite teams',
    image: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg',
    price: '฿14.99',
    period: '/month',
    path: '/timber-tube/sports'
  },
  {
    title: 'Audiobook Library',
    description: 'Thousands of audiobooks narrated by top voice actors with new titles added weekly',
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
    price: '฿11.99',
    period: '/month',
    path: '/timber-tube/audiobooks'
  }
]);

// Bundle options
const bundles = ref([
  {
    title: 'Basic Entertainment',
    price: '฿19.99',
    period: '/month',
    description: 'Choose any 2 entertainment categories',
    features: [
      'Full access to 2 categories',
      'HD quality streaming',
      'Watch on up to 2 devices',
      'Download favorites for offline',
      'Ad-free experience'
    ],
    highlight: false
  },
  {
    title: 'Premium Bundle',
    price: '฿34.99',
    period: '/month',
    description: 'Complete access to all entertainment',
    features: [
      'Full access to ALL categories',
      '4K Ultra HD where available',
      'Watch on up to 4 devices',
      'Unlimited downloads',
      'Priority customer support',
      'Early access to new content'
    ],
    highlight: true
  }
]);

// Testimonials
const testimonials = ref([
  {
    text: "The all-in-one entertainment bundle is amazing value! I canceled my other subscriptions because Timber Tube has everything I need.",
    name: "Sarah M.",
    location: "Berlin, Germany"
  },
  {
    text: "The mobile billing is so convenient, and the quality across all content types is outstanding. Especially love the audiobooks section!",
    name: "David L.",
    location: "Vienna, Austria"
  },
  {
    text: "Having access to premium games without ads alongside my favorite movies and music makes this the best entertainment service.",
    name: "Emma K.",
    location: "Zurich, Switzerland"
  }
]);

const currentTestimonialIndex = ref(0);

const nextTestimonial = () => {
  currentTestimonialIndex.value = (currentTestimonialIndex.value + 1) % testimonials.value.length;
};

const prevTestimonial = () => {
  currentTestimonialIndex.value = (currentTestimonialIndex.value - 1 + testimonials.value.length) % testimonials.value.length;
};

// How it works steps
const steps = ref([
  {
    title: 'Choose Your Entertainment',
    description: 'Select individual categories or our all-access bundle',
    number: '01'
  },
  {
    title: 'Simple Mobile Payment',
    description: 'Pay directly through your phone bill - no credit card needed',
    number: '02'
  },
  {
    title: 'Enjoy Premium Content',
    description: 'Stream instantly across all your devices',
    number: '03'
  }
]);

const navigateToPage = (path) => {
  router.push(path);
};

const handleGetStarted = () => {
  router.push('/login');
};
</script>

<template>
  <div class="homepage">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Your Complete Entertainment Universe</h1>
        <p class="subtitle">Movies, Music, Games, Sports, and Audiobooks - All in One Place</p>
        <button class="cta-button" @click="handleGetStarted">Start Now</button>
      </div>
    </section>

    <!-- Key Features -->
    <section class="features-section">
      <div class="container">
        <h2>Why Choose Timber Tube</h2>
        <div class="features-grid">
          <div v-for="feature in features" :key="feature.title" class="feature-card">
            <div class="feature-icon">{{ feature.icon }}</div>
            <div class="feature-content">
              <h3>{{ feature.title }}</h3>
              <p>{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Entertainment Categories -->
    <section class="categories-section">
      <div class="container">
        <h2>Choose Your Entertainment</h2>
        <div class="categories-grid">
          <div v-for="category in entertainmentCategories" :key="category.title" 
               class="category-card">
            <div class="category-image">
              <img :src="category.image" :alt="category.title">
              <div class="category-overlay">
                <button class="explore-button" @click="navigateToPage(category.path)">Explore</button>
              </div>
            </div>
            <div class="category-content">
              <h3>{{ category.title }}</h3>
              <p>{{ category.description }}</p>
              <div class="category-price">
                <span class="price">{{ category.price }}</span>
                <span class="period">{{ category.period }}</span>
              </div>
              <button class="category-button" @click="navigateToPage(category.path)">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Bundles -->
    <section class="bundles-section">
      <div class="container">
        <h2>Value Bundles</h2>
        <p class="section-subtitle">Get more entertainment for less with our specially curated bundles</p>
        
        <div class="bundles-grid">
          <div v-for="bundle in bundles" :key="bundle.title"
               class="bundle-card" :class="{ 'highlight': bundle.highlight }">
            <h3>{{ bundle.title }}</h3>
            <div class="bundle-price">
              <span class="price">{{ bundle.price }}</span>
              <span class="period">{{ bundle.period }}</span>
            </div>
            <p class="bundle-description">{{ bundle.description }}</p>
            <ul class="bundle-features">
              <li v-for="feature in bundle.features" :key="feature">
                <span class="check">✓</span> {{ feature }}
              </li>
            </ul>
            <button class="bundle-button" @click="handleGetStarted">Subscribe Now</button>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section class="steps-section">
      <div class="container">
        <h2>How It Works</h2>
        <div class="steps-grid">
          <div v-for="step in steps" :key="step.title" class="step-card">
            <div class="step-number">{{ step.number }}</div>
            <h3>{{ step.title }}</h3>
            <p>{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="testimonials-section">
      <div class="container">
        <h2>What Our Users Say</h2>
        <div class="testimonials-container">
          <button @click="prevTestimonial" class="testimonial-nav prev">❮</button>
          <div class="testimonial">
            <p class="testimonial-text">"{{ testimonials[currentTestimonialIndex].text }}"</p>
            <div class="testimonial-author">
              <p class="author-name">{{ testimonials[currentTestimonialIndex].name }}</p>
              <p class="author-location">{{ testimonials[currentTestimonialIndex].location }}</p>
            </div>
          </div>
          <button @click="nextTestimonial" class="testimonial-nav next">❯</button>
        </div>
        <div class="testimonial-indicators">
          <span v-for="(_, index) in testimonials" :key="index" 
                class="indicator" :class="{ active: index === currentTestimonialIndex }"
                @click="currentTestimonialIndex = index"></span>
        </div>
      </div>
    </section>

    <!-- Mobile Billing -->
    <section class="billing-section">
      <div class="container">
        <div class="billing-content">
          <div class="billing-text">
            <h2>Simple Mobile Billing</h2>
            <p>Pay directly through your mobile phone bill - no credit card needed, no complicated forms.</p>
            <ul class="billing-features">
              <li><span class="check">✓</span> Secure payment through your mobile carrier</li>
              <li><span class="check">✓</span> Instant setup with no lengthy forms</li>
              <li><span class="check">✓</span> Convenient monthly billing</li>
              <li><span class="check">✓</span> Easy account management</li>
            </ul>
          </div>
          <div class="billing-image">
            <img src="https://images.pexels.com/photos/6347919/pexels-photo-6347919.jpeg" alt="Mobile Billing">
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <h2>Ready for Unlimited Entertainment?</h2>
        <p>Join millions of users enjoying premium content with Timber Tube</p>
        <button class="cta-button large" @click="handleGetStarted">Get Started Now</button>
      </div>
    </section>
  </div>
</template>

<style scoped>
.homepage {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: #333;
  padding-top: 64px;
}

/* Container */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #3B52A5 0%, #5D72D9 100%);
  background-image: url('https://images.pexels.com/photos/8263321/pexels-photo-8263321.jpeg');
  background-size: cover;
  background-position: center;
  background-blend-mode: overlay;
  color: white;
  padding: 10rem 2rem;
  text-align: center;
  position: relative;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(59, 82, 165, 0.8) 0%, rgba(93, 114, 217, 0.8) 100%);
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
}

.hero h1 {
  font-size: 4rem;
  font-weight: 900;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.subtitle {
  font-size: 1.5rem;
  opacity: 0.9;
  margin-bottom: 2.5rem;
}

.cta-button {
  background: white;
  color: #3B52A5;
  font-size: 1.2rem;
  padding: 1rem 3rem;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.cta-button.large {
  padding: 1.2rem 3.5rem;
  font-size: 1.3rem;
}

/* Section styling */
section {
  padding: 5rem 0;
}

section h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #3B52A5;
  margin-bottom: 1.5rem;
  font-weight: 800;
}

.section-subtitle {
  text-align: center;
  color: #666;
  max-width: 700px;
  margin: 0 auto 3rem;
}

/* Features Section */
.features-section {
  background: white;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  margin-top: 3rem;
}

.feature-card {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
}

.feature-icon {
  font-size: 3rem;
  color: #3B52A5;
  flex-shrink: 0;
}

.feature-content h3 {
  color: #333;
  font-size: 1.3rem;
  margin-bottom: 0.8rem;
}

.feature-content p {
  color: #666;
  line-height: 1.6;
}

/* Categories Section */
.categories-section {
  background: #f8f9fa;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
  margin-top: 3rem;
}

.category-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.category-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
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

.category-overlay {
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

.category-card:hover .category-overlay {
  opacity: 1;
}

.explore-button {
  background: #3B52A5;
  color: white;
  padding: 0.8rem 1.8rem;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.explore-button:hover {
  background: #5D72D9;
  transform: scale(1.05);
}

.category-content {
  padding: 2rem;
}

.category-content h3 {
  color: #333;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.category-content p {
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.category-price {
  margin-bottom: 1.5rem;
}

.price {
  font-size: 2rem;
  font-weight: 800;
  color: #3B52A5;
}

.period {
  color: #666;
  font-size: 1rem;
}

.category-button {
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

.category-button:hover {
  background: #5D72D9;
  transform: translateY(-3px);
}

/* Bundles Section */
.bundles-section {
  background: white;
}

.bundles-grid {
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-top: 3rem;
}

.bundle-card {
  background: #f8f9fa;
  padding: 3rem 2.5rem;
  border-radius: 1rem;
  box-shadow: 0 15px 30px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
  transition: transform 0.3s ease;
}

.bundle-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}

.bundle-card.highlight {
  background: white;
  border: 3px solid #3B52A5;
  transform: scale(1.05);
  box-shadow: 0 20px 40px rgba(59, 82, 165, 0.2);
  position: relative;
  z-index: 1;
}

.bundle-card.highlight:hover {
  transform: scale(1.05) translateY(-10px);
}

.bundle-card h3 {
  color: #333;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
}

.bundle-price {
  margin-bottom: 1rem;
}

.bundle-price .price {
  font-size: 3rem;
}

.bundle-description {
  color: #666;
  margin-bottom: 2rem;
}

.bundle-features {
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
  text-align: left;
}

.bundle-features li {
  padding: 0.75rem 0;
  border-bottom: 1px solid #e5e5e5;
  color: #444;
  display: flex;
  align-items: flex-start;
}

.bundle-features li:last-child {
  border-bottom: none;
}

.check {
  color: #3B52A5;
  margin-right: 0.75rem;
  font-weight: bold;
}

.bundle-button {
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

.bundle-button:hover {
  background: #5D72D9;
  transform: translateY(-3px);
}

/* Steps Section */
.steps-section {
  background: #f8f9fa;
  position: relative;
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  margin-top: 3rem;
}

.step-card {
  background: white;
  padding: 3rem 2rem;
  border-radius: 1rem;
  box-shadow: 0 15px 30px rgba(0,0,0,0.1);
  text-align: center;
  position: relative;
  transition: transform 0.3s ease;
}

.step-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}

.step-number {
  color: #3B52A5;
  font-size: 3.5rem;
  font-weight: 900;
  line-height: 1;
  margin-bottom: 1.5rem;
  opacity: 0.2;
}

.step-card h3 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
}

.step-card p {
  color: #666;
}

/* Testimonials */
.testimonials-section {
  background: white;
  text-align: center;
}

.testimonials-container {
  display: flex;
  align-items: center;
  max-width: 900px;
  margin: 3rem auto 0;
}

.testimonial {
  background: #f8f9fa;
  padding: 3rem;
  border-radius: 1rem;
  box-shadow: 0 15px 30px rgba(0,0,0,0.1);
  flex: 1;
}

.testimonial-text {
  font-size: 1.3rem;
  font-style: italic;
  color: #444;
  line-height: 1.7;
  position: relative;
  margin-bottom: 2rem;
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
  margin-bottom: 0.3rem;
}

.author-location {
  color: #666;
}

.testimonial-nav {
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

.testimonial-nav:hover {
  background: #5D72D9;
  transform: scale(1.1);
}

.testimonial-indicators {
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  margin-top: 2rem;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #ddd;
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator.active {
  background: #3B52A5;
  transform: scale(1.2);
}

/* Billing Section */
.billing-section {
  background: #f8f9fa;
}

.billing-content {
  display: flex;
  align-items: center;
  gap: 4rem;
}

.billing-text {
  flex: 1;
}

.billing-image {
  flex: 1;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}

.billing-image img {
  width: 100%;
  display: block;
  height: 100%;
  object-fit: cover;
}

.billing-text h2 {
  text-align: left;
}

.billing-text p {
  color: #666;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.billing-features {
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
}

.billing-features li {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  color: #444;
  font-size: 1.1rem;
}

/* CTA Section */
.cta-section {
  background: linear-gradient(135deg, #3B52A5 0%, #5D72D9 100%);
  color: white;
  text-align: center;
  padding: 6rem 0;
}

.cta-section h2 {
  color: white;
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.cta-section p {
  font-size: 1.3rem;
  margin-bottom: 2.5rem;
  opacity: 0.9;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.cta-section .cta-button {
  background: white;
  color: #3B52A5;
}

.cta-section .cta-button:hover {
  background: #f8f9fa;
}

/* Responsive styles */
@media (max-width: 1024px) {
  .bundles-grid {
    flex-direction: column;
    align-items: center;
  }
  
  .bundle-card.highlight {
    transform: scale(1);
  }
  
  .bundle-card.highlight:hover {
    transform: translateY(-10px);
  }
  
  .bundle-card {
    max-width: 500px;
  }
}

@media (max-width: 992px) {
  .billing-content {
    flex-direction: column;
  }
  
  .billing-text {
    text-align: center;
    margin-bottom: 2rem;
  }
  
  .billing-text h2 {
    text-align: center;
  }
  
  .billing-image {
    max-width: 500px;
    width: 100%;
  }
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 3rem;
  }
  
  .subtitle {
    font-size: 1.3rem;
  }
  
  section {
    padding: 4rem 0;
  }
  
  section h2 {
    font-size: 2rem;
  }
  
  .feature-card {
    flex-direction: column;
    text-align: center;
  }
  
  .feature-icon {
    margin-bottom: 1rem;
  }
  
  .testimonials-container {
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .testimonial-nav {
    margin: 0;
  }
  
  .testimonial {
    padding: 2rem;
  }
  
  .cta-section h2 {
    font-size: 2.5rem;
  }
}

@media (max-width: 576px) {
  .hero {
    padding: 6rem 2rem;
  }
  
  .hero h1 {
    font-size: 2.5rem;
  }
  
  .subtitle {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }
  
  .cta-button {
    padding: 0.8rem 2rem;
    font-size: 1.1rem;
  }
  
  .cta-button.large {
    padding: 1rem 2.5rem;
    font-size: 1.2rem;
  }
  
  .testimonial-text {
    font-size: 1.1rem;
  }
  
  .cta-section h2 {
    font-size: 2rem;
  }
  
  .cta-section p {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }
  
  .categories-grid {
    grid-template-columns: 1fr;
  }
}
</style>