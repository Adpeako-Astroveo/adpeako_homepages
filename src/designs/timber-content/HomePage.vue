<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const featuredContent = ref([
  {
    title: 'Music Streaming',
    description: 'Millions of songs. Zero ads. Crystal-clear quality.',
    image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg',
    link: '/timber-content/music'
  },
  {
    title: 'Video Streaming',
    description: 'Unlimited movies, TV shows, and documentaries in 4K.',
    image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg',
    link: '/timber-content/video'
  },
  {
    title: 'Live Sports',
    description: 'Stream live sports from around the world.',
    image: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg',
    link: '/timber-content/sports'
  }
]);

const entertainmentCategories = ref([
  {
    title: 'Music',
    icon: '🎵',
    description: 'Stream millions of songs with premium audio quality.',
    link: '/timber-content/music',
    color: '#3a1d58'
  },
  {
    title: 'Video',
    icon: '🎬',
    description: 'Watch exclusive movies and TV shows in 4K HDR.',
    link: '/timber-content/video',
    color: '#0f0f0f'
  },
  {
    title: 'Sports',
    icon: '⚽',
    description: 'Never miss a game with live sports coverage.',
    link: '/timber-content/sports',
    color: '#0a192f'
  },
  {
    title: 'Games',
    icon: '🎮',
    description: 'Play hundreds of premium mobile games.',
    link: '/timber-content/games',
    color: '#6d28d9'
  },
  {
    title: 'Audiobooks',
    icon: '🎧',
    description: 'Listen to bestsellers narrated by award-winning voices.',
    link: '/timber-content/audiobooks',
    color: '#3a1d58'
  }
]);

const testimonials = ref([
  {
    quote: "The audio quality on Timber Content's music streaming is unmatched. I hear details in my favorite songs that I never noticed before.",
    author: "Sarah J.",
    role: "Music Enthusiast"
  },
  {
    quote: "Being able to download games and play them offline has been a game-changer for my commute. No more connectivity issues!",
    author: "Michael T.",
    role: "Mobile Gamer"
  },
  {
    quote: "The sports streaming feature has revolutionized how I watch games. Multiple camera angles and real-time stats enhance the experience.",
    author: "David K.",
    role: "Sports Fan"
  }
]);

const navigateTo = (path) => {
  router.push(path);
};

const handleSubscribe = () => {
  router.push('/login');
};
</script>

<template>
  <div class="timber-content-home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Your Ultimate Entertainment Hub</h1>
        <p class="tagline">Music. Videos. Games. Sports. Audiobooks. All in one premium subscription.</p>
        <div class="hero-buttons">
          <button @click="handleSubscribe" class="cta-button primary">Start Free Trial</button>
          <button @click="navigateTo('/timber-content/music')" class="cta-button secondary">Explore Content</button>
        </div>
      </div>
    </section>

    <!-- Featured Content Carousel -->
    <section class="featured-content">
      <h2>Featured Content</h2>
      <div class="content-carousel">
        <div v-for="content in featuredContent" :key="content.title" class="carousel-card">
          <div class="card-image">
            <img :src="content.image" :alt="content.title">
            <div class="card-overlay"></div>
          </div>
          <div class="card-content">
            <h3>{{ content.title }}</h3>
            <p>{{ content.description }}</p>
            <button @click="navigateTo(content.link)" class="explore-button">Explore</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Entertainment Categories -->
    <section class="entertainment-categories">
      <h2>Entertainment Categories</h2>
      <div class="categories-grid">
        <div 
          v-for="category in entertainmentCategories" 
          :key="category.title" 
          class="category-card"
          @click="navigateTo(category.link)"
          :style="{ '--category-color': category.color }"
        >
          <div class="category-icon">{{ category.icon }}</div>
          <h3>{{ category.title }}</h3>
          <p>{{ category.description }}</p>
          <span class="arrow-icon">→</span>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <div class="features-content">
        <h2>One Subscription, Unlimited Entertainment</h2>
        <p class="features-subtitle">Join Timber Content and enjoy all these premium benefits:</p>
        
        <div class="features-list">
          <div class="feature-item">
            <div class="feature-icon">✓</div>
            <div class="feature-text">
              <h3>Ad-Free Experience</h3>
              <p>Enjoy uninterrupted entertainment across all platforms.</p>
            </div>
          </div>
          
          <div class="feature-item">
            <div class="feature-icon">✓</div>
            <div class="feature-text">
              <h3>Offline Access</h3>
              <p>Download content for offline enjoyment anywhere.</p>
            </div>
          </div>
          
          <div class="feature-item">
            <div class="feature-icon">✓</div>
            <div class="feature-text">
              <h3>Premium Quality</h3>
              <p>4K video, HD audio, and high-performance gaming.</p>
            </div>
          </div>
          
          <div class="feature-item">
            <div class="feature-icon">✓</div>
            <div class="feature-text">
              <h3>Family Sharing</h3>
              <p>Share your subscription with up to 6 family members.</p>
            </div>
          </div>
          
          <div class="feature-item">
            <div class="feature-icon">✓</div>
            <div class="feature-text">
              <h3>Cross-Device Sync</h3>
              <p>Seamlessly switch between all your devices.</p>
            </div>
          </div>
        </div>
        
        <button @click="handleSubscribe" class="cta-button primary">Get Started</button>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="testimonials">
      <h2>What Our Users Say</h2>
      <div class="testimonials-grid">
        <div v-for="testimonial in testimonials" :key="testimonial.quote" class="testimonial-card">
          <div class="quote-mark">"</div>
          <p class="quote">{{ testimonial.quote }}</p>
          <div class="author-info">
            <p class="author-name">{{ testimonial.author }}</p>
            <p class="author-role">{{ testimonial.role }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-content">
        <h2>Ready to experience premium entertainment?</h2>
        <p>Join millions of satisfied subscribers. Cancel anytime.</p>
        <button @click="handleSubscribe" class="cta-button primary">Start Your Free Trial</button>
      </div>
    </section>
  </div>
</template>

<style scoped>
.timber-content-home {
  min-height: 100vh;
  color: #f5f5f5;
  font-family: 'Inter', sans-serif;
  background-color: #0f172a;
  overflow-x: hidden;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  padding: 12rem 2rem 8rem;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('https://images.pexels.com/photos/6283213/pexels-photo-6283213.jpeg') center/cover no-repeat;
  opacity: 0.1;
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 900px;
  margin: 0 auto;
}

.hero h1 {
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #38bdf8 0%, #818cf8 50%, #e879f9 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 2px 8px rgba(0,0,0,0.3);
}

.tagline {
  font-size: 1.5rem;
  margin-bottom: 3rem;
  opacity: 0.9;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.cta-button {
  font-size: 1.2rem;
  font-weight: 600;
  padding: 1rem 3rem;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.cta-button.primary {
  background: linear-gradient(135deg, #38bdf8 0%, #818cf8 50%, #e879f9 100%);
  color: white;
  box-shadow: 0 4px 15px rgba(56, 189, 248, 0.4);
}

.cta-button.primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(56, 189, 248, 0.5);
}

.cta-button.secondary {
  background: transparent;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.2);
}

.cta-button.secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.3);
}

/* Featured Content */
.featured-content {
  padding: 6rem 2rem;
  background: #1e293b;
}

.featured-content h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: white;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
}

.featured-content h2::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(135deg, #38bdf8 0%, #818cf8 50%, #e879f9 100%);
  border-radius: 2px;
}

.content-carousel {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1400px;
  margin: 0 auto;
}

.carousel-card {
  flex: 1;
  min-width: 300px;
  max-width: 400px;
  background: #0f172a;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
  transition: all 0.3s ease;
}

.carousel-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.6);
}

.card-image {
  position: relative;
  height: 250px;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.carousel-card:hover .card-image img {
  transform: scale(1.05);
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(15, 23, 42, 0) 0%, rgba(15, 23, 42, 0.8) 100%);
}

.card-content {
  padding: 2rem;
}

.card-content h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: white;
}

.card-content p {
  color: #cbd5e1;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
  line-height: 1.6;
}

.explore-button {
  background: transparent;
  color: #38bdf8;
  border: 1px solid #38bdf8;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.explore-button:hover {
  background: rgba(56, 189, 248, 0.1);
}

/* Entertainment Categories */
.entertainment-categories {
  padding: 6rem 2rem;
  background: #0f172a;
}

.entertainment-categories h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: white;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
}

.entertainment-categories h2::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(135deg, #38bdf8 0%, #818cf8 50%, #e879f9 100%);
  border-radius: 2px;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.category-card {
  background: #1e293b;
  border-radius: 1rem;
  padding: 2.5rem 2rem;
  box-shadow: 0 10px 25px rgba(0,0,0,0.3);
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  border-top: 4px solid var(--category-color, #38bdf8);
}

.category-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0,0,0,0.4);
}

.category-icon {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}

.category-card h3 {
  font-size: 1.4rem;
  margin-bottom: 1rem;
  color: white;
}

.category-card p {
  color: #cbd5e1;
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.arrow-icon {
  position: absolute;
  bottom: 1.5rem;
  right: 1.5rem;
  font-size: 1.5rem;
  color: #38bdf8;
  transition: transform 0.3s ease;
}

.category-card:hover .arrow-icon {
  transform: translateX(5px);
}

/* Features Section */
.features {
  padding: 6rem 2rem;
  background: #1e293b;
  text-align: center;
}

.features-content {
  max-width: 1000px;
  margin: 0 auto;
}

.features h2 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: white;
}

.features-subtitle {
  font-size: 1.2rem;
  margin-bottom: 4rem;
  color: #cbd5e1;
}

.features-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  text-align: left;
  gap: 1.5rem;
}

.feature-icon {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #38bdf8 0%, #818cf8 50%, #e879f9 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: white;
  flex-shrink: 0;
}

.feature-text h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: white;
}

.feature-text p {
  color: #cbd5e1;
  font-size: 0.95rem;
  line-height: 1.6;
}

/* Testimonials */
.testimonials {
  padding: 6rem 2rem;
  background: #0f172a;
}

.testimonials h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: white;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
}

.testimonials h2::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(135deg, #38bdf8 0%, #818cf8 50%, #e879f9 100%);
  border-radius: 2px;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.testimonial-card {
  background: #1e293b;
  border-radius: 1rem;
  padding: 3rem 2rem 2rem;
  box-shadow: 0 10px 25px rgba(0,0,0,0.3);
  position: relative;
}

.quote-mark {
  position: absolute;
  top: 1.5rem;
  left: 2rem;
  font-size: 5rem;
  line-height: 0;
  color: rgba(56, 189, 248, 0.2);
}

.quote {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #f8fafc;
  margin-bottom: 2rem;
  position: relative;
  z-index: 2;
}

.author-info {
  border-top: 1px solid rgba(203, 213, 225, 0.1);
  padding-top: 1.5rem;
}

.author-name {
  font-weight: bold;
  color: #38bdf8;
  margin-bottom: 0.25rem;
}

.author-role {
  color: #cbd5e1;
  font-size: 0.9rem;
}

/* CTA Section */
.cta-section {
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  padding: 6rem 2rem;
  text-align: center;
  position: relative;
}

.cta-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('https://images.pexels.com/photos/6283213/pexels-photo-6283213.jpeg') center/cover no-repeat;
  opacity: 0.05;
  z-index: 1;
}

.cta-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
}

.cta-section h2 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: white;
}

.cta-section p {
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  color: #cbd5e1;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .features-list {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 8rem 1.5rem 6rem;
  }
  
  .hero h1 {
    font-size: 2.8rem;
  }
  
  .tagline {
    font-size: 1.2rem;
  }
  
  .carousel-card,
  .testimonial-card {
    min-width: 100%;
  }
  
  .features-list {
    gap: 1.5rem;
  }
  
  .feature-item {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .cta-section h2 {
    font-size: 2rem;
  }
  
  .cta-section p {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 6rem 1rem 4rem;
  }
  
  .hero h1 {
    font-size: 2rem;
  }
  
  .featured-content h2,
  .entertainment-categories h2,
  .features h2,
  .testimonials h2 {
    font-size: 2rem;
  }
  
  .cta-button {
    padding: 0.8rem 2rem;
    font-size: 1rem;
    width: 100%;
  }
  
  .hero-buttons {
    flex-direction: column;
  }
  
  .category-card {
    padding: 2rem 1.5rem;
  }
  
  .feature-icon {
    width: 35px;
    height: 35px;
  }
}
</style>