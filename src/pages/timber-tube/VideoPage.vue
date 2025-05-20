<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const categories = ref([
  {
    name: 'Movies',
    image: 'https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg',
    count: '10,000+ titles'
  },
  {
    name: 'TV Shows',
    image: 'https://images.pexels.com/photos/704555/pexels-photo-704555.jpeg',
    count: '5,000+ episodes'
  },
  {
    name: 'Documentaries',
    image: 'https://images.pexels.com/photos/3876435/pexels-photo-3876435.jpeg',
    count: '2,000+ films'
  },
  {
    name: 'Animation',
    image: 'https://images.pexels.com/photos/3356608/pexels-photo-3356608.jpeg',
    count: '1,500+ titles'
  }
]);

const trendingContent = ref([
  {
    title: 'Stellar Odyssey',
    genre: 'Sci-Fi',
    rating: 9.3,
    year: '2025',
    image: 'https://images.pexels.com/photos/1938348/pexels-photo-1938348.jpeg',
    episodes: '10 episodes',
    description: 'A crew of astronauts embarks on humanitys first interstellar journey, discovering worlds beyond imagination and confronting the ultimate question of our existence.'
  },
  {
    title: 'Crown of Thorns',
    genre: 'Historical Drama',
    rating: 9.5,
    year: '2025',
    image: 'https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg',
    episodes: '8 episodes',
    description: 'In medieval Europe, five royal houses compete for ultimate power in a dangerous game of politics, betrayal, and unexpected alliances that will change history forever.'
  },
  {
    title: 'Shadow Detective',
    genre: 'Crime Thriller',
    rating: 9.1,
    year: '2024',
    image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg',
    episodes: '12 episodes',
    description: 'A brilliant detective with a troubled past solves the citys most complex cases while battling personal demons and uncovering corruption at the highest levels.'
  },
  {
    title: 'Digital Empire',
    genre: 'Tech Drama',
    rating: 8.9,
    year: '2024',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
    episodes: '10 episodes',
    description: 'Follow the rise of tech visionaries as they revolutionize society with groundbreaking innovations while navigating corporate espionage and ethical dilemmas.'
  }
]);

const newReleases = ref([
  {
    title: 'Quantum Theory',
    genre: 'Sci-Fi',
    rating: 8.8,
    image: 'https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg',
    type: 'Movie',
    duration: '2h 15m',
    description: 'A physicist discovers the ability to jump between parallel universes, but each jump threatens to destabilize the entire multiverse.'
  },
  {
    title: 'The Summit',
    genre: 'Adventure',
    rating: 9.0,
    image: 'https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg',
    type: 'Movie',
    duration: '2h 30m',
    description: 'Four elite climbers face impossible odds as they attempt to conquer the worlds deadliest mountain during a catastrophic storm.'
  },
  {
    title: 'Whispers in the Dark',
    genre: 'Horror',
    rating: 8.9,
    image: 'https://images.pexels.com/photos/2873755/pexels-photo-2873755.jpeg',
    type: 'Movie',
    duration: '2h 05m',
    description: 'A family moves into a remote countryside house only to discover disturbing secrets hidden within its walls and the surrounding forest.'
  },
  {
    title: 'Timeless Echoes',
    genre: 'Drama',
    rating: 9.2,
    image: 'https://images.pexels.com/photos/936722/pexels-photo-936722.jpeg',
    type: 'Movie',
    duration: '1h 58m',
    description: 'A powerful intergenerational story following three women from the same family across different time periods as they face similar challenges.'
  },
  {
    title: 'Operation Nightfall',
    genre: 'Action',
    rating: 8.5,
    image: 'https://images.pexels.com/photos/1547813/pexels-photo-1547813.jpeg',
    type: 'Movie',
    duration: '2h 12m',
    description: 'An elite special forces team must infiltrate enemy territory to prevent a global terrorist attack with only 24 hours to complete their mission.'
  },
  {
    title: 'The Perfect Illusion',
    genre: 'Thriller',
    rating: 8.8,
    image: 'https://images.pexels.com/photos/3062545/pexels-photo-3062545.jpeg',
    type: 'Movie',
    duration: '2h 08m',
    description: 'A master illusionist finds himself caught in a dangerous game of deception when his greatest trick attracts the attention of a mysterious collector.'
  }
]);

const continueWatching = ref([
  {
    title: 'The Lost Kingdom',
    progress: 65,
    image: 'https://images.pexels.com/photos/1461435/pexels-photo-1461435.jpeg',
    timeLeft: '45 min left',
    episode: 'S2:E5'
  },
  {
    title: 'Cosmic Warriors',
    progress: 30,
    image: 'https://images.pexels.com/photos/1572386/pexels-photo-1572386.jpeg',
    timeLeft: '1h 23m left',
    episode: 'S1:E8'
  },
  {
    title: 'Ocean Depths',
    progress: 80,
    image: 'https://images.pexels.com/photos/3380805/pexels-photo-3380805.jpeg',
    timeLeft: '22 min left',
    episode: 'S3:E1'
  }
]);

const features = ref([
  {
    title: '4K Ultra HD',
    description: 'Experience stunning visual clarity with our highest quality streaming option on compatible devices',
    icon: '📺'
  },
  {
    title: 'Offline Downloads',
    description: 'Download your favorite movies and shows to watch when you\'re not connected to the internet',
    icon: '📥'
  },
  {
    title: 'Multiple Profiles',
    description: 'Create up to 5 personalized profiles with individual recommendations and watchlists',
    icon: '👥'
  },
  {
    title: 'Watch Anywhere',
    description: 'Seamlessly switch between your TV, tablet, phone, or computer — pick up right where you left off',
    icon: '🔄'
  },
  {
    title: 'No Ads or Interruptions',
    description: 'Enjoy your content without commercial breaks or annoying pop-ups',
    icon: '🚫'
  },
  {
    title: 'Weekly New Releases',
    description: 'Fresh content added regularly to keep your entertainment library exciting and current',
    icon: '🆕'
  }
]);

const plans = ref([
  {
    name: 'Basic',
    price: '฿7.99',
    period: '/month',
    quality: 'HD',
    devices: '1 device',
    downloads: 'Limited',
    best: false
  },
  {
    name: 'Standard',
    price: '฿11.99',
    period: '/month',
    quality: 'Full HD',
    devices: '2 devices',
    downloads: 'Yes',
    best: true
  },
  {
    name: 'Premium',
    price: '฿15.99',
    period: '/month',
    quality: '4K Ultra HD',
    devices: '4 devices',
    downloads: 'Unlimited',
    best: false
  }
]);

const navigateToLogin = () => {
  router.push('/login');
};
</script>

<template>
  <div class="video-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Premium Video Entertainment</h1>
        <p class="subtitle">Thousands of movies, TV shows, and more in stunning quality</p>
        <button class="cta-button" @click="navigateToLogin">Start Watching</button>
      </div>
    </section>

    <!-- Categories Section -->
    <section class="categories-section">
      <h2>Explore Categories</h2>
      <div class="categories-grid">
        <div v-for="category in categories" :key="category.name" class="category-card">
          <div class="category-image">
            <img :src="category.image" :alt="category.name">
            <div class="category-overlay">
              <h3>{{ category.name }}</h3>
              <span class="category-count">{{ category.count }}</span>
              <button class="explore-button" @click="navigateToLogin">Explore</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Continue Watching -->
    <section class="continue-section">
      <h2>Continue Watching</h2>
      <div class="continue-grid">
        <div v-for="item in continueWatching" :key="item.title" class="continue-card">
          <div class="continue-image">
            <img :src="item.image" :alt="item.title">
            <div class="continue-overlay">
              <button class="play-button" @click="navigateToLogin">▶</button>
            </div>
            <div class="episode-badge">{{ item.episode }}</div>
          </div>
          <div class="continue-info">
            <h3>{{ item.title }}</h3>
            <div class="progress-container">
              <div class="progress-bar" :style="{ width: item.progress + '%' }"></div>
            </div>
            <span class="time-left">{{ item.timeLeft }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Trending Content -->
    <section class="trending-section">
      <h2>Trending Now</h2>
      <div class="trending-grid">
        <div v-for="content in trendingContent" :key="content.title" class="trending-card">
          <div class="trending-image">
            <img :src="content.image" :alt="content.title">
            <div class="trending-overlay">
              <span class="rating">★ {{ content.rating }}</span>
              <button class="watch-button" @click="navigateToLogin">▶ Watch</button>
            </div>
            <div class="trending-badge">{{ content.episodes }}</div>
          </div>
          <div class="trending-info">
            <h3>{{ content.title }}</h3>
            <div class="trending-meta">
              <span class="trending-genre">{{ content.genre }}</span>
              <span class="trending-year">{{ content.year }}</span>
            </div>
            <p class="trending-desc">{{ content.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- New Releases -->
    <section class="releases-section">
      <h2>New Releases</h2>
      <div class="releases-grid">
        <div v-for="release in newReleases" :key="release.title" class="release-card">
          <div class="release-image">
            <img :src="release.image" :alt="release.title">
            <div class="release-overlay">
              <span class="rating">★ {{ release.rating }}</span>
              <button class="watch-button" @click="navigateToLogin">▶ Watch</button>
            </div>
            <div class="release-badge">{{ release.type }}</div>
          </div>
          <div class="release-info">
            <h3>{{ release.title }}</h3>
            <div class="release-meta">
              <span class="release-genre">{{ release.genre }}</span>
              <span class="release-duration">{{ release.duration }}</span>
            </div>
            <p class="release-desc">{{ release.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <h2>Premium Video Features</h2>
      <div class="features-grid">
        <div v-for="feature in features" :key="feature.title" class="feature-card">
          <span class="feature-icon">{{ feature.icon }}</span>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </div>
      </div>
    </section>

    <!-- Plans Section -->
    <section class="plans-section">
      <h2>Choose Your Plan</h2>
      <p class="section-subtitle">All plans include access to our complete video library</p>
      
      <div class="plans-grid">
        <div v-for="plan in plans" :key="plan.name" 
             class="plan-card" :class="{ 'best-value': plan.best }">
          <div v-if="plan.best" class="best-tag">Best Value</div>
          <h3>{{ plan.name }}</h3>
          <div class="plan-price">
            <span class="price">{{ plan.price }}</span>
            <span class="period">{{ plan.period }}</span>
          </div>
          <div class="plan-details">
            <div class="plan-feature">
              <span class="feature-name">Quality</span>
              <span class="feature-value">{{ plan.quality }}</span>
            </div>
            <div class="plan-feature">
              <span class="feature-name">Devices</span>
              <span class="feature-value">{{ plan.devices }}</span>
            </div>
            <div class="plan-feature">
              <span class="feature-name">Downloads</span>
              <span class="feature-value">{{ plan.downloads }}</span>
            </div>
          </div>
          <p class="billing-note">Billed directly to your phone - no credit card needed</p>
          <button class="select-button" @click="navigateToLogin">Get Started</button>
        </div>
      </div>
    </section>

    <!-- Mobile Billing Section -->
    <section class="billing-section">
      <h2>Mobile Payment Made Easy</h2>
      <div class="billing-container">
        <div class="billing-info">
          <h3>Why Choose Mobile Billing?</h3>
          <ul class="billing-benefits">
            <li><span class="benefit-icon">🔒</span> <span>Secure payment through your mobile carrier</span></li>
            <li><span class="benefit-icon">⚡</span> <span>Instant setup with no lengthy forms</span></li>
            <li><span class="benefit-icon">📱</span> <span>No credit card or bank details required</span></li>
            <li><span class="benefit-icon">🔄</span> <span>Convenient automatic monthly renewal</span></li>
            <li><span class="benefit-icon">⏱️</span> <span>Quick cancellation anytime with no fees</span></li>
          </ul>
          <button class="billing-cta" @click="navigateToLogin">Get Started Now</button>
        </div>
        <div class="billing-image">
          <img src="https://images.pexels.com/photos/6347919/pexels-photo-6347919.jpeg" alt="Mobile Billing">
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <h2>Ready to Start Streaming?</h2>
      <p>Join millions of viewers enjoying premium content worldwide</p>
      <button class="cta-button" @click="navigateToLogin">Start Watching Today</button>
    </section>
  </div>
</template>

<style scoped>
.video-page {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: #333;
  padding-top: 64px;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #3B52A5 0%, #5D72D9 100%);
  background-image: url('https://images.pexels.com/photos/8263321/pexels-photo-8263321.jpeg');
  background-size: cover;
  background-position: center;
  background-blend-mode: overlay;
  color: white;
  padding: 8rem 2rem;
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

/* Section styling */
section {
  padding: 5rem 2rem;
}

section:nth-child(odd) {
  background: #f8f9fa;
}

section:nth-child(even) {
  background: white;
}

section h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #3B52A5;
  margin-bottom: 3rem;
  font-weight: 800;
}

.section-subtitle {
  text-align: center;
  font-size: 1.2rem;
  color: #666;
  max-width: 700px;
  margin: -1rem auto 3rem;
}

/* Categories Section */
.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.category-card {
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
  height: 250px;
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
  background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(59,82,165,0.7) 60%, rgba(0,0,0,0.4) 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
}

.category-overlay h3 {
  color: white;
  font-size: 2rem;
  margin-bottom: 0.5rem;
  font-weight: 800;
}

.category-count {
  color: rgba(255,255,255,0.9);
  font-size: 1.1rem;
  margin-bottom: 2rem;
}

.explore-button {
  background: white;
  color: #3B52A5;
  padding: 0.8rem 2rem;
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
  background: #3B52A5;
  color: white;
  transform: translateY(-3px);
}

/* Continue Watching */
.continue-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.continue-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.continue-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}

.continue-image {
  position: relative;
  height: 180px;
  overflow: hidden;
}

.continue-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.continue-card:hover .continue-image img {
  transform: scale(1.05);
}

.continue-overlay {
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

.continue-card:hover .continue-overlay {
  opacity: 1;
}

.episode-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(59, 82, 165, 0.9);
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
}

.play-button {
  background: #3B52A5;
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.play-button:hover {
  transform: scale(1.1);
  background: #5D72D9;
}

.continue-info {
  padding: 1.5rem;
}

.continue-info h3 {
  color: #333;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.progress-container {
  height: 4px;
  background: #e2e8f0;
  border-radius: 2px;
  margin-bottom: 0.5rem;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background: #3B52A5;
  border-radius: 2px;
}

.time-left {
  color: #666;
  font-size: 0.9rem;
}

/* Trending Content */
.trending-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.trending-card {
  display: flex;
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.trending-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}

.trending-image {
  position: relative;
  width: 180px;
  height: 100%;
  flex-shrink: 0;
}

.trending-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.trending-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.trending-card:hover .trending-overlay {
  opacity: 1;
}

.rating {
  color: #FFD700;
  font-weight: bold;
  font-size: 1.1rem;
}

.watch-button {
  background: #3B52A5;
  color: white;
  padding: 0.6rem 1.2rem;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.watch-button:hover {
  background: #5D72D9;
  transform: translateY(-2px);
}

.trending-badge {
  position: absolute;
  top: 10px;
  left: 10px;
  background: rgba(0,0,0,0.7);
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
}

.trending-info {
  padding: 1.5rem;
  flex: 1;
}

.trending-info h3 {
  color: #333;
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.trending-meta {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.trending-genre {
  color: #3B52A5;
  font-weight: 600;
}

.trending-year {
  color: #666;
}

.trending-desc {
  color: #444;
  line-height: 1.6;
  font-size: 0.95rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* New Releases */
.releases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.release-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.release-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}

.release-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.release-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.release-card:hover .release-image img {
  transform: scale(1.05);
}

.release-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.release-card:hover .release-overlay {
  opacity: 1;
}

.release-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(59, 82, 165, 0.9);
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
}

.release-info {
  padding: 1.5rem;
}

.release-info h3 {
  color: #333;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.release-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.release-genre {
  color: #3B52A5;
  font-weight: 600;
}

.release-duration {
  color: #666;
}

.release-desc {
  color: #444;
  line-height: 1.6;
  font-size: 0.95rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Features Section */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  background: white;
  padding: 2.5rem 2rem;
  border-radius: 1rem;
  box-shadow: 0 15px 30px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  text-align: center;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  display: block;
}

.feature-card h3 {
  color: #3B52A5;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.feature-card p {
  color: #666;
  line-height: 1.6;
}

/* Plans Section */
.plans-grid {
  display: flex;
  justify-content: center;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.plan-card {
  background: white;
  padding: 3rem 2rem;
  border-radius: 1rem;
  box-shadow: 0 15px 30px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 350px;
  position: relative;
  transition: all 0.3s ease;
}

.plan-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}

.plan-card.best-value {
  border: 2px solid #3B52A5;
  transform: scale(1.05);
  z-index: 1;
}

.plan-card.best-value:hover {
  transform: scale(1.05) translateY(-10px);
}

.best-tag {
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  background: #3B52A5;
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
}

.plan-card h3 {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 1.5rem;
  text-align: center;
}

.plan-price {
  margin-bottom: 2rem;
  text-align: center;
}

.price {
  font-size: 3rem;
  font-weight: 800;
  color: #3B52A5;
}

.period {
  color: #666;
  font-size: 1.1rem;
}

.plan-details {
  margin-bottom: 2rem;
}

.plan-feature {
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  border-bottom: 1px solid #f0f0f0;
}

.plan-feature:last-child {
  border-bottom: none;
}

.feature-name {
  color: #666;
}

.feature-value {
  color: #333;
  font-weight: 600;
}

.billing-note {
  color: #666;
  font-style: italic;
  margin-bottom: 2rem;
  text-align: center;
  font-size: 0.9rem;
}

.select-button {
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

.select-button:hover {
  background: #5D72D9;
  transform: translateY(-3px);
}

/* Billing Section */
.billing-container {
  display: flex;
  align-items: center;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
}

.billing-info {
  flex: 1;
}

.billing-info h3 {
  font-size: 2rem;
  color: #3B52A5;
  margin-bottom: 2rem;
}

.billing-benefits {
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
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
  min-width: 2.5rem;
  text-align: center;
}

.billing-cta {
  background: #3B52A5;
  color: white;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.billing-cta:hover {
  background: #5D72D9;
  transform: translateY(-3px);
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
  object-fit: cover;
}

/* CTA Section */
.cta-section {
  background: linear-gradient(135deg, #3B52A5 0%, #5D72D9 100%);
  color: white;
  text-align: center;
  padding: 6rem 2rem;
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

/* Responsive Styles */
@media (max-width: 1200px) {
  .trending-grid {
    grid-template-columns: 1fr;
  }
  
  .releases-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
  
  .features-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
  
  .plans-grid {
    flex-direction: column;
    align-items: center;
  }
  
  .plan-card.best-value {
    transform: none;
    order: -1;
    border-width: 3px;
  }
  
  .plan-card.best-value:hover {
    transform: translateY(-10px);
  }
}

@media (max-width: 992px) {
  .billing-container {
    flex-direction: column-reverse;
  }
  
  .billing-image {
    max-width: 500px;
    width: 100%;
    margin-bottom: 2rem;
  }
  
  .trending-image {
    width: 150px;
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
    padding: 4rem 1.5rem;
  }
  
  section h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  
  .section-subtitle {
    font-size: 1rem;
  }
  
  .trending-card {
    flex-direction: column;
  }
  
  .trending-image {
    width: 100%;
    height: 200px;
  }
  
  .trending-badge {
    top: auto;
    bottom: 10px;
    left: 10px;
  }
  
  .categories-grid {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  }
  
  .continue-grid {
    grid-template-columns: 1fr;
  }
  
  .billing-benefits li {
    font-size: 1rem;
  }
  
  .cta-section h2 {
    font-size: 2.5rem;
  }
}

@media (max-width: 576px) {
  .hero {
    padding: 6rem 1rem;
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
  
  .categories-grid {
    grid-template-columns: 1fr;
  }
  
  .feature-card {
    padding: 2rem 1.5rem;
  }
  
  .trending-info h3 {
    font-size: 1.2rem;
  }
  
  .releases-grid {
    grid-template-columns: 1fr;
  }
  
  .cta-section h2 {
    font-size: 2rem;
  }
  
  .cta-section p {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }
}
</style>