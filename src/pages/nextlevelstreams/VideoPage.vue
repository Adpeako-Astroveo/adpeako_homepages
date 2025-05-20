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

const trendingShows = ref([
  {
    title: 'Quantum Horizon',
    genre: 'Sci-Fi Drama',
    rating: 9.3,
    year: '2025',
    image: 'https://images.pexels.com/photos/1938348/pexels-photo-1938348.jpeg',
    episodes: '10 episodes',
    description: 'A brilliant physicist discovers a way to travel between parallel universes, altering the course of humanity forever.'
  },
  {
    title: 'Crown & Kingdom',
    genre: 'Historical Drama',
    rating: 9.5,
    year: '2025',
    image: 'https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg',
    episodes: '12 episodes',
    description: 'In medieval Europe, five royal houses engage in a deadly game of politics, betrayal, and unexpected alliances.'
  },
  {
    title: 'Metropolitan',
    genre: 'Crime Thriller',
    rating: 9.1,
    year: '2024',
    image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg',
    episodes: '8 episodes',
    description: 'A seasoned detective and a brilliant rookie partner navigate the criminal underworld of a city where nothing is as it seems.'
  },
  {
    title: 'Silicon Dreams',
    genre: 'Tech Drama',
    rating: 8.9,
    year: '2024',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
    episodes: '10 episodes',
    description: 'The compelling story of tech visionaries revolutionizing the future while battling corporate espionage and personal demons.'
  }
]);

const newReleases = ref([
  {
    title: 'Beyond Reality',
    genre: 'Sci-Fi',
    rating: 8.8,
    image: 'https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg',
    type: 'Movie',
    duration: '2h 15m',
    description: 'When a quantum physics experiment goes wrong, a scientist finds herself trapped between realities with no way home.'
  },
  {
    title: 'Everest Challenge',
    genre: 'Adventure',
    rating: 9.0,
    image: 'https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg',
    type: 'Movie',
    duration: '2h 30m',
    description: 'Four elite climbers face impossible odds as they attempt to conquer the world\'s most dangerous mountain during a catastrophic storm.'
  },
  {
    title: 'Whispers in the Dark',
    genre: 'Horror',
    rating: 8.9,
    image: 'https://images.pexels.com/photos/2873755/pexels-photo-2873755.jpeg',
    type: 'Movie',
    duration: '2h 05m',
    description: 'A family moves into a remote countryside mansion only to discover that the house has other, more sinister, residents.'
  },
  {
    title: 'Legacy of Time',
    genre: 'Drama',
    rating: 9.2,
    image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg',
    type: 'Movie',
    duration: '2h 12m',
    description: 'Three interconnected stories spanning generations reveal how the decisions of the past ripple through time to affect the future.'
  }
]);

const continueWatching = ref([
  {
    title: 'The Prophecy',
    progress: 65,
    image: 'https://images.pexels.com/photos/2347662/pexels-photo-2347662.jpeg',
    timeLeft: '45 min left',
    episode: 'S2:E5'
  },
  {
    title: 'Space Pioneers',
    progress: 30,
    image: 'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg',
    timeLeft: '1h 23m left',
    episode: 'S1:E8'
  },
  {
    title: 'Ocean Depths',
    progress: 80,
    image: 'https://images.pexels.com/photos/3062542/pexels-photo-3062542.jpeg',
    timeLeft: '22 min left',
    episode: 'S3:E1'
  }
]);

const features = ref([
  {
    title: '4K Ultra HD',
    description: 'Experience stunning visual clarity with our highest quality streaming option',
    icon: '📺'
  },
  {
    title: 'Multi-device Access',
    description: 'Seamlessly switch between your TV, phone, tablet, and laptop',
    icon: '📱'
  },
  {
    title: 'Offline Downloads',
    description: 'Download your favorite content to watch when you\'re not connected',
    icon: '📥'
  },
  {
    title: 'Multiple Profiles',
    description: 'Create up to 5 profiles for personalized recommendations',
    icon: '👥'
  },
  {
    title: 'Smart Recommendations',
    description: 'Discover new content tailored to your viewing preferences',
    icon: '🤖'
  },
  {
    title: 'Ad-free Experience',
    description: 'Enjoy uninterrupted viewing with no commercial breaks',
    icon: '🚫'
  }
]);

const watchPlans = ref([
  {
    name: 'Basic',
    price: '€8.99',
    period: '/month',
    quality: 'HD',
    devices: '1 device',
    downloads: 'Limited',
    best: false
  },
  {
    name: 'Standard',
    price: '€12.99',
    period: '/month',
    quality: 'Full HD',
    devices: '2 devices',
    downloads: 'Yes',
    best: true
  },
  {
    name: 'Premium',
    price: '€16.99',
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
        <h1>Premium Video Streaming</h1>
        <p class="subtitle">Movies, TV Shows, and Documentaries in stunning 4K quality</p>
        <button class="cta-button" @click="navigateToLogin">Start Watching</button>
      </div>
      <div class="hero-visual">
        <div class="tv-frame">
          <div class="tv-screen">
            <div class="video-content">
              <div class="video-play-button">▶</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Categories Section -->
    <section class="categories-section">
      <div class="section-container">
        <h2>Explore Categories</h2>
        <div class="categories-grid">
          <div v-for="category in categories" :key="category.name" class="category-card">
            <div class="category-image">
              <img :src="category.image" :alt="category.name">
              <div class="category-overlay">
                <div class="category-details">
                  <h3>{{ category.name }}</h3>
                  <p>{{ category.count }}</p>
                </div>
                <button class="explore-button" @click="navigateToLogin">Explore</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Continue Watching -->
    <section class="continue-section">
      <div class="section-container">
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
      </div>
    </section>

    <!-- Trending Shows -->
    <section class="trending-section">
      <div class="section-container">
        <h2>Trending Series</h2>
        <div class="trending-grid">
          <div v-for="show in trendingShows" :key="show.title" class="trending-card">
            <div class="trending-image">
              <img :src="show.image" :alt="show.title">
              <div class="trending-overlay">
                <div class="trending-rating">
                  <span class="star">★</span>
                  <span>{{ show.rating }}</span>
                </div>
                <button class="watch-button" @click="navigateToLogin">Watch Now</button>
              </div>
              <div class="trending-badge">{{ show.episodes }}</div>
            </div>
            <div class="trending-info">
              <h3>{{ show.title }}</h3>
              <div class="trending-meta">
                <span>{{ show.genre }}</span>
                <span>{{ show.year }}</span>
              </div>
              <p>{{ show.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- New Movies -->
    <section class="releases-section">
      <div class="section-container">
        <h2>New Movies</h2>
        <div class="releases-grid">
          <div v-for="movie in newReleases" :key="movie.title" class="release-card">
            <div class="release-image">
              <img :src="movie.image" :alt="movie.title">
              <div class="release-overlay">
                <div class="release-rating">
                  <span class="star">★</span>
                  <span>{{ movie.rating }}</span>
                </div>
                <button class="watch-button" @click="navigateToLogin">Watch Now</button>
              </div>
              <div class="release-badge">{{ movie.type }}</div>
            </div>
            <div class="release-info">
              <div class="release-header">
                <h3>{{ movie.title }}</h3>
                <div class="release-meta">
                  <span class="genre">{{ movie.genre }}</span>
                  <span class="duration">{{ movie.duration }}</span>
                </div>
              </div>
              <p class="release-desc">{{ movie.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <div class="section-container">
        <h2>Premium Video Features</h2>
        <div class="features-grid">
          <div v-for="feature in features" :key="feature.title" class="feature-card">
            <div class="feature-icon">{{ feature.icon }}</div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Plans Section -->
    <section class="plans-section">
      <div class="section-container">
        <h2>Choose Your Streaming Plan</h2>
        <p class="section-subtitle">All plans include access to our full content library</p>
        
        <div class="plans-grid">
          <div v-for="plan in watchPlans" :key="plan.name" 
               class="plan-card" :class="{ 'best-value': plan.best }">
            <div v-if="plan.best" class="best-tag">Most Popular</div>
            <h3>{{ plan.name }}</h3>
            <div class="plan-price">
              <span class="price">{{ plan.price }}</span>
              <span class="period">{{ plan.period }}</span>
            </div>
            <div class="plan-features">
              <div class="plan-feature">
                <span class="feature-name">Video Quality</span>
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
            <p class="billing-note">Billed directly to your phone bill - no credit card needed</p>
            <button class="plan-button" @click="navigateToLogin">Get Started</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Mobile Billing Section -->
    <section class="billing-section">
      <div class="section-container">
        <div class="billing-grid">
          <div class="billing-visual">
            <div class="phone-mockup">
              <div class="phone-screen">
                <div class="video-preview">
                  <div class="video-placeholder"></div>
                  <div class="video-controls">
                    <div class="progress-line">
                      <div class="progress-indicator"></div>
                    </div>
                    <div class="control-buttons">
                      <div class="control-button">⏪</div>
                      <div class="control-button play">▶</div>
                      <div class="control-button">⏩</div>
                    </div>
                  </div>
                </div>
                <div class="payment-badge">
                  <div class="badge-icon">✓</div>
                  <div class="badge-text">Payment complete</div>
                </div>
              </div>
            </div>
          </div>
          <div class="billing-content">
            <h2>Simple Mobile Billing</h2>
            <p class="billing-description">Enjoy premium video streaming with the convenience of mobile phone billing - no credit cards, no complicated forms.</p>
            
            <div class="billing-steps">
              <div class="billing-step">
                <div class="step-number">1</div>
                <div class="step-info">
                  <h3>Select Your Plan</h3>
                  <p>Choose from our Basic, Standard, or Premium subscription options</p>
                </div>
              </div>
              <div class="billing-step">
                <div class="step-number">2</div>
                <div class="step-info">
                  <h3>Verify Your Number</h3>
                  <p>Quick and simple mobile number verification process</p>
                </div>
              </div>
              <div class="billing-step">
                <div class="step-number">3</div>
                <div class="step-info">
                  <h3>Start Streaming</h3>
                  <p>Enjoy immediate access to thousands of titles across all devices</p>
                </div>
              </div>
            </div>
            
            <p class="carriers-note">Compatible with all major mobile carriers worldwide</p>
            <button class="billing-button" @click="navigateToLogin">Subscribe Now</button>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-container">
        <h2>Ready to Start Streaming?</h2>
        <p>Join millions of viewers enjoying premium content worldwide</p>
        <button class="cta-button large" @click="navigateToLogin">Get Started Now</button>
      </div>
    </section>
  </div>
</template>

<style scoped>
.video-page {
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  color: #1F2937;
}

.section-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

h2 {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 2rem;
  color: #6D28D9;
  text-align: center;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #6D28D9 0%, #A78BFA 100%);
  background-image: url('https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  background-size: cover;
  background-position: center;
  background-blend-mode: overlay;
  color: white;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 5rem 2rem;
  position: relative;
  overflow: hidden;
  min-height: 80vh;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(109, 40, 217, 0.85) 0%, rgba(167, 139, 250, 0.85) 100%);
}

.hero-content {
  max-width: 600px;
  position: relative;
  z-index: 2;
}

.hero h1 {
  font-size: 3.5rem;
  font-weight: 900;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  position: relative;
}

.hero h1::after {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 0;
  width: 100px;
  height: 5px;
  background: #A78BFA;
  border-radius: 10px;
}

.subtitle {
  font-size: 1.5rem;
  margin-bottom: 2.5rem;
  opacity: 0.9;
  line-height: 1.5;
}

.cta-button {
  background: white;
  color: #6D28D9;
  font-size: 1.1rem;
  font-weight: 700;
  padding: 1rem 2.5rem;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.cta-button.large {
  font-size: 1.2rem;
  padding: 1.2rem 3rem;
}

.hero-visual {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

.tv-frame {
  width: 400px;
  height: 300px;
  background: #1F2937;
  border-radius: 20px;
  padding: 10px;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3), inset 0 0 0 5px rgba(255, 255, 255, 0.1);
  position: relative;
}

.tv-screen {
  width: 100%;
  height: 100%;
  background: #000;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
}

.video-content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, #A78BFA, #6D28D9);
  display: flex;
  align-items: center;
  justify-content: center;
}

.video-play-button {
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
}

.video-play-button:hover {
  transform: scale(1.1);
  background: rgba(255, 255, 255, 0.3);
}

/* Categories Section */
.categories-section {
  padding: 6rem 0;
  background: white;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.category-card {
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  height: 100%;
}

.category-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
}

.category-image {
  position: relative;
  height: 0;
  padding-bottom: 75%;
  overflow: hidden;
}

.category-image img {
  position: absolute;
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
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 60%, rgba(0, 0, 0, 0.1) 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 2rem;
  text-align: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.category-card:hover .category-overlay {
  opacity: 1;
}

.category-details {
  margin-bottom: 1.5rem;
}

.category-overlay h3 {
  color: white;
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.category-overlay p {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  margin-bottom: 0;
}

.explore-button {
  background: #6D28D9;
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.explore-button:hover {
  background: #5B21B6;
  transform: scale(1.05);
}

/* Continue Watching */
.continue-section {
  padding: 6rem 0;
  background: #F9FAFB;
}

.continue-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.continue-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.continue-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);
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
  transform: scale(1.1);
}

.continue-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
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
  background: #6D28D9;
  color: white;
  padding: 0.3rem 0.7rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
}

.play-button {
  background: #6D28D9;
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
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.play-button:hover {
  transform: scale(1.1);
  background: #5B21B6;
}

.continue-info {
  padding: 1.5rem;
}

.continue-info h3 {
  color: #1F2937;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.progress-container {
  height: 4px;
  background: #E5E7EB;
  border-radius: 2px;
  margin-bottom: 0.5rem;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background: #6D28D9;
  border-radius: 2px;
}

.time-left {
  color: #6B7280;
  font-size: 0.9rem;
}

/* Trending Section */
.trending-section {
  padding: 6rem 0;
  background: white;
}

.trending-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.trending-card {
  display: grid;
  grid-template-columns: 1fr 2fr;
  background: #F9FAFB;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.trending-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);
}

.trending-image {
  position: relative;
  height: 100%;
}

.trending-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.trending-card:hover .trending-image img {
  transform: scale(1.1);
}

.trending-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.trending-card:hover .trending-overlay {
  opacity: 1;
}

.trending-badge {
  position: absolute;
  top: 15px;
  right: 15px;
  background: #6D28D9;
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
}

.trending-rating {
  color: white;
  background: rgba(0, 0, 0, 0.5);
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.star {
  color: #FBBF24;
}

.watch-button {
  background: #6D28D9;
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.watch-button:hover {
  background: #5B21B6;
  transform: scale(1.05);
}

.trending-info {
  padding: 2rem;
}

.trending-info h3 {
  color: #1F2937;
  font-size: 1.5rem;
  margin-bottom: 0.8rem;
  font-weight: 700;
}

.trending-meta {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
}

.trending-meta span:first-child {
  color: #6D28D9;
  font-weight: 600;
}

.trending-meta span:last-child {
  color: #6B7280;
}

.trending-info p {
  color: #4B5563;
  line-height: 1.6;
}

/* Releases Section */
.releases-section {
  padding: 6rem 0;
  background: #F9FAFB;
}

.releases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.release-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.release-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);
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
  transform: scale(1.1);
}

.release-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.release-card:hover .release-overlay {
  opacity: 1;
}

.release-badge {
  position: absolute;
  top: 15px;
  right: 15px;
  background: #6D28D9;
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
}

.release-info {
  padding: 1.5rem;
}

.release-header {
  margin-bottom: 1rem;
}

.release-info h3 {
  color: #1F2937;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.release-meta {
  display: flex;
  justify-content: space-between;
  font-size: 0.95rem;
}

.release-meta .genre {
  color: #6D28D9;
  font-weight: 600;
}

.release-meta .duration {
  color: #6B7280;
}

.release-desc {
  color: #4B5563;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Features Section */
.features-section {
  padding: 6rem 0;
  background: white;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: #F9FAFB;
  padding: 2.5rem 2rem;
  border-radius: 1rem;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  text-align: center;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);
  background: linear-gradient(135deg, #6D28D9 0%, #A78BFA 100%);
  color: white;
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  display: block;
}

.feature-card h3 {
  color: #1F2937;
  font-size: 1.4rem;
  margin-bottom: 1rem;
  font-weight: 700;
  transition: color 0.3s ease;
}

.feature-card:hover h3 {
  color: white;
}

.feature-card p {
  color: #4B5563;
  line-height: 1.6;
  transition: color 0.3s ease;
}

.feature-card:hover p {
  color: rgba(255, 255, 255, 0.9);
}

/* Plans Section */
.plans-section {
  padding: 6rem 0;
  background: #F9FAFB;
}

.section-subtitle {
  text-align: center;
  font-size: 1.2rem;
  color: #6B7280;
  margin: -1rem auto 3rem;
  max-width: 700px;
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
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.05);
  position: relative;
  transition: all 0.3s ease;
  text-align: center;
}

.plan-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);
}

.plan-card.best-value {
  border: 2px solid #6D28D9;
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
  background: #6D28D9;
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.9rem;
}

.plan-card h3 {
  font-size: 1.8rem;
  color: #1F2937;
  margin-bottom: 1.5rem;
  font-weight: 700;
}

.plan-price {
  margin-bottom: 2rem;
}

.price {
  font-size: 3rem;
  font-weight: 800;
  color: #6D28D9;
}

.period {
  font-size: 1.1rem;
  color: #6B7280;
}

.plan-features {
  margin-bottom: 2rem;
}

.plan-feature {
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 0;
  border-bottom: 1px solid #E5E7EB;
}

.plan-feature:last-child {
  border-bottom: none;
}

.feature-name {
  color: #6B7280;
}

.feature-value {
  color: #1F2937;
  font-weight: 600;
}

.billing-note {
  font-style: italic;
  color: #6B7280;
  margin-bottom: 2rem;
  font-size: 0.9rem;
}

.plan-button {
  background: #6D28D9;
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

.plan-button:hover {
  background: #5B21B6;
  transform: translateY(-3px);
}

/* Billing Section */
.billing-section {
  padding: 6rem 0;
  background: white;
}

.billing-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.billing-visual {
  position: relative;
}

.phone-mockup {
  width: 280px;
  height: 550px;
  background: #1F2937;
  border-radius: 40px;
  padding: 15px;
  margin: 0 auto;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2);
}

.phone-screen {
  width: 100%;
  height: 100%;
  background: #1F2937;
  border-radius: 30px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
}

.video-preview {
  flex: 1;
  padding: 1rem;
  display: flex;
  flex-direction: column;
}

.video-placeholder {
  flex: 1;
  background: linear-gradient(135deg, #6D28D9 0%, #A78BFA 100%);
  border-radius: 20px;
  margin-bottom: 1rem;
  position: relative;
}

.video-placeholder::after {
  content: '▶';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 3rem;
  opacity: 0.7;
}

.video-controls {
  height: 80px;
}

.progress-line {
  height: 4px;
  background: rgba(255, 255, 255, 0.2);
  margin-bottom: 1rem;
  position: relative;
  border-radius: 2px;
}

.progress-indicator {
  position: absolute;
  width: 40%;
  height: 100%;
  background: #A78BFA;
  border-radius: 2px;
}

.control-buttons {
  display: flex;
  justify-content: center;
  gap: 2rem;
  align-items: center;
}

.control-button {
  color: white;
  font-size: 1.5rem;
  opacity: 0.7;
}

.control-button.play {
  font-size: 2.5rem;
  opacity: 1;
}

.payment-badge {
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 15px;
  padding: 1rem;
  display: flex;
  align-items: center;
  color: white;
}

.badge-icon {
  width: 30px;
  height: 30px;
  background: #10B981;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
}

.badge-text {
  font-weight: 600;
  font-size: 0.9rem;
}

.billing-content h2 {
  text-align: left;
}

.billing-description {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #4B5563;
  margin-bottom: 3rem;
}

.billing-steps {
  margin-bottom: 3rem;
}

.billing-step {
  display: flex;
  margin-bottom: 2rem;
}

.step-number {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #6D28D9;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.3rem;
  margin-right: 1.5rem;
  flex-shrink: 0;
}

.step-info h3 {
  color: #1F2937;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.step-info p {
  color: #6B7280;
  line-height: 1.6;
}

.carriers-note {
  font-style: italic;
  color: #6B7280;
  margin-bottom: 2rem;
}

.billing-button {
  background: #6D28D9;
  color: white;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  border: none;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.billing-button:hover {
  background: #5B21B6;
  transform: translateY(-3px);
}

/* CTA Section */
.cta-section {
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #6D28D9 0%, #A78BFA 100%);
  color: white;
  text-align: center;
}

.cta-container {
  max-width: 900px;
  margin: 0 auto;
}

.cta-section h2 {
  color: white;
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.cta-section p {
  font-size: 1.3rem;
  margin-bottom: 3rem;
  opacity: 0.9;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.cta-section .cta-button {
  background: white;
  color: #6D28D9;
}

/* Responsive Styles */
@media (max-width: 1200px) {
  .hero {
    grid-template-columns: 1fr;
    min-height: auto;
    padding: 4rem 2rem;
    text-align: center;
  }

  .hero h1::after {
    left: 50%;
    transform: translateX(-50%);
  }

  .hero-content {
    margin: 0 auto 4rem;
  }

  .trending-card {
    grid-template-columns: 1fr;
  }

  .trending-image {
    height: 250px;
  }

  .trending-badge {
    bottom: 15px;
    top: unset;
    right: 15px;
  }

  .billing-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .billing-content {
    order: 1;
    text-align: center;
  }

  .billing-content h2 {
    text-align: center;
  }

  .billing-step {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .step-number {
    margin-right: 0;
    margin-bottom: 1rem;
  }
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.8rem;
  }

  .subtitle {
    font-size: 1.3rem;
  }

  .tv-frame {
    width: 300px;
    height: 220px;
  }

  .continue-grid, .features-grid {
    grid-template-columns: 1fr;
  }

  .plans-grid {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 0 auto;
  }

  .plan-card.best-value {
    transform: none;
    border-width: 3px;
    order: -1;
  }

  .plan-card.best-value:hover {
    transform: translateY(-10px);
  }

  .cta-section h2 {
    font-size: 2.5rem;
  }
}

@media (max-width: 640px) {
  .hero {
    padding: 3rem 1.5rem;
  }

  .hero h1 {
    font-size: 2.5rem;
  }

  .subtitle {
    font-size: 1.2rem;
  }
  
  h2 {
    font-size: 2rem;
  }

  .section-container {
    padding: 0 1.5rem;
  }

  section {
    padding: 4rem 0;
  }

  .categories-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
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

  .cta-button.large {
    padding: 1rem 2.5rem;
    font-size: 1.1rem;
  }

  .phone-mockup {
    width: 250px;
    height: 500px;
  }
}

@media (max-width: 480px) {
  .hero h1 {
    font-size: 2.2rem;
  }

  .tv-frame {
    width: 250px;
    height: 180px;
  }

  .categories-grid {
    grid-template-columns: 1fr;
  }

  .continue-image {
    height: 150px;
  }

  .release-image {
    height: 180px;
  }

  .cta-section h2 {
    font-size: 1.8rem;
  }
}
</style>