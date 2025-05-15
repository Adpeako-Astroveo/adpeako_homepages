<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const categories = ref([
  {
    name: 'Movies',
    image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg',
    count: '10,000+ titles'
  },
  {
    name: 'TV Shows',
    image: 'https://images.pexels.com/photos/8263321/pexels-photo-8263321.jpeg',
    count: '5,000+ episodes'
  },
  {
    name: 'Documentaries',
    image: 'https://images.pexels.com/photos/3876435/pexels-photo-3876435.jpeg',
    count: '1,500+ films'
  },
  {
    name: 'Animation',
    image: 'https://images.pexels.com/photos/3356608/pexels-photo-3356608.jpeg',
    count: '2,000+ titles'
  }
]);

const trendingShows = ref([
  {
    title: 'Quantum Paradox',
    genre: 'Sci-Fi',
    rating: 9.2,
    year: '2025',
    image: 'https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg',
    episodes: '10 episodes',
    description: 'A brilliant physicist discovers a way to travel between parallel universes, but each journey threatens the fabric of reality itself.'
  },
  {
    title: 'Crown of Thorns',
    genre: 'Historical Drama',
    rating: 9.5,
    year: '2025',
    image: 'https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg',
    episodes: '8 episodes',
    description: 'In medieval Europe, five royal houses compete for power in a dangerous game of politics, betrayal, and unexpected alliances.'
  },
  {
    title: 'Midnight Detective',
    genre: 'Crime Thriller',
    rating: 9.1,
    year: '2024',
    image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg',
    episodes: '12 episodes',
    description: 'A brilliant but troubled detective solves the city\'s most complex cases while battling personal demons and corruption.'
  },
  {
    title: 'Silicon Dreams',
    genre: 'Tech Drama',
    rating: 8.8,
    year: '2024',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
    episodes: '10 episodes',
    description: 'Young tech entrepreneurs navigate the cutthroat world of startups while developing revolutionary AI technology.'
  }
]);

const newReleases = ref([
  {
    title: 'Celestial Odyssey',
    genre: 'Sci-Fi',
    rating: 8.7,
    image: 'https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg',
    type: 'Movie',
    duration: '2h 15m',
    description: 'A space explorer discovers an ancient alien artifact that grants the ability to see possible futures.'
  },
  {
    title: 'Summit',
    genre: 'Adventure',
    rating: 9.0,
    image: 'https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg',
    type: 'Movie',
    duration: '2h 30m',
    description: 'Four elite climbers attempt to conquer the world\'s most dangerous mountain during a deadly storm.'
  },
  {
    title: 'Whispers in Shadow',
    genre: 'Mystery',
    rating: 8.9,
    image: 'https://images.pexels.com/photos/1707820/pexels-photo-1707820.jpeg',
    type: 'Movie',
    duration: '2h 05m',
    description: 'A journalist returns to her hometown to investigate a series of disappearances linked to local legends.'
  },
  {
    title: 'Tomorrow\'s Echo',
    genre: 'Drama',
    rating: 9.2,
    image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg',
    type: 'Movie',
    duration: '1h 58m',
    description: 'Three generations of a family face life-changing decisions that ripple through time.'
  },
  {
    title: 'Covert Operation',
    genre: 'Action',
    rating: 8.5,
    image: 'https://images.pexels.com/photos/2418664/pexels-photo-2418664.jpeg',
    type: 'Movie',
    duration: '2h 12m',
    description: 'An elite special forces team must infiltrate enemy territory to prevent a global catastrophe.'
  },
  {
    title: 'The Perfect Deception',
    genre: 'Thriller',
    rating: 8.8,
    image: 'https://images.pexels.com/photos/457072/pexels-photo-457072.jpeg',
    type: 'Movie',
    duration: '2h 08m',
    description: 'A master con artist meets his match when he targets a mysterious art collector with a dangerous secret.'
  }
]);

const features = ref([
  {
    title: '4K Ultra HD Streaming',
    description: 'Experience crystal clear visuals with our highest quality streaming option',
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
    icon: '🧠'
  },
  {
    title: 'Ad-Free Experience',
    description: 'Enjoy uninterrupted viewing with no commercial breaks',
    icon: '🚫'
  }
]);

const watchOptions = ref([
  {
    name: 'Basic',
    price: '€7.99',
    period: '/month',
    quality: 'HD',
    devices: '1 device',
    downloads: 'Limited',
    best: false
  },
  {
    name: 'Standard',
    price: '€11.99',
    period: '/month',
    quality: 'Full HD',
    devices: '2 devices',
    downloads: 'Yes',
    best: true
  },
  {
    name: 'Premium',
    price: '€15.99',
    period: '/month',
    quality: '4K Ultra HD',
    devices: '4 devices',
    downloads: 'Unlimited',
    best: false
  }
]);

const continueWatching = ref([
  {
    title: 'The Lost Kingdom',
    progress: 65,
    image: 'https://images.pexels.com/photos/2347662/pexels-photo-2347662.jpeg',
    timeLeft: '45 min left',
    episode: 'S2:E5'
  },
  {
    title: 'Cosmic Warriors',
    progress: 30,
    image: 'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg',
    timeLeft: '1h 23m left',
    episode: 'S1:E8'
  },
  {
    title: 'The Great Discovery',
    progress: 80,
    image: 'https://images.pexels.com/photos/3062542/pexels-photo-3062542.jpeg',
    timeLeft: '22 min left',
    episode: 'S3:E1'
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
        <p class="subtitle">Movies, Shows, and Documentaries in stunning HD and 4K</p>
        <button class="cta-button" @click="navigateToLogin">Login Now</button>
      </div>
    </section>

    <!-- Categories Section -->
    <section class="categories">
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

    <!-- Continue Watching Section -->
    <section class="continue-watching">
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

    <!-- Trending Shows -->
    <section class="trending">
      <h2>Trending Shows</h2>
      <div class="shows-grid">
        <div v-for="show in trendingShows" :key="show.title" class="show-card">
          <div class="show-image">
            <img :src="show.image" :alt="show.title">
            <div class="show-overlay">
              <span class="rating">★ {{ show.rating }}</span>
              <button class="watch-button" @click="navigateToLogin">▶ Watch</button>
            </div>
            <div class="show-badge">{{ show.episodes }}</div>
          </div>
          <div class="show-info">
            <h3>{{ show.title }}</h3>
            <div class="show-meta">
              <span class="show-genre">{{ show.genre }}</span>
              <span class="show-year">{{ show.year }}</span>
            </div>
            <p class="show-desc">{{ show.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- New Releases -->
    <section class="new-releases">
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
    <section class="features">
      <h2>Premium Features</h2>
      <div class="features-grid">
        <div v-for="feature in features" :key="feature.title" class="feature-card">
          <span class="feature-icon">{{ feature.icon }}</span>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </div>
      </div>
    </section>

    <!-- Watch Options -->
    <section class="watch-options">
      <h2>Choose Your Plan</h2>
      <div class="options-grid">
        <div v-for="option in watchOptions" :key="option.name" 
             class="option-card" :class="{ 'best-value': option.best }">
          <div v-if="option.best" class="best-tag">Best Value</div>
          <h3>{{ option.name }}</h3>
          <div class="option-price">
            <span class="price">{{ option.price }}</span>
            <span class="period">{{ option.period }}</span>
          </div>
          <div class="option-features">
            <div class="option-feature">
              <span class="feature-label">Quality</span>
              <span class="feature-value">{{ option.quality }}</span>
            </div>
            <div class="option-feature">
              <span class="feature-label">Devices</span>
              <span class="feature-value">{{ option.devices }}</span>
            </div>
            <div class="option-feature">
              <span class="feature-label">Downloads</span>
              <span class="feature-value">{{ option.downloads }}</span>
            </div>
          </div>
          <button class="select-button" @click="navigateToLogin">Login Now</button>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta">
      <h2>Ready to Start Streaming?</h2>
      <p>Join millions of viewers enjoying unlimited content</p>
      <button class="cta-button" @click="navigateToLogin">Login Now</button>
    </section>
  </div>
</template>

<style scoped>
.video-page {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: #1a202c;
  padding-top: 64px;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #6C63FF 0%, #FF6584 100%);
  color: white;
  padding: 8rem 2rem;
  text-align: center;
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
  margin-bottom: 2rem;
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
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

/* Categories Section */
.categories {
  padding: 5rem 2rem;
  background: white;
}

.categories h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #6C63FF;
  margin-bottom: 3rem;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.category-card {
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.category-card:hover {
  transform: translateY(-5px);
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
  background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.1) 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  text-align: center;
}

.category-overlay h3 {
  color: white;
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
}

.category-count {
  color: rgba(255,255,255,0.9);
  font-size: 1rem;
  margin-bottom: 1.5rem;
}

.explore-button {
  background: #6C63FF;
  color: white;
  padding: 0.6rem 1.5rem;
  border-radius: 20px;
  border: none;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.explore-button:hover {
  background: #5a52e0;
  transform: translateY(-2px);
}

/* Continue Watching */
.continue-watching {
  padding: 5rem 2rem;
  background: #f8fafc;
}

.continue-watching h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #6C63FF;
  margin-bottom: 3rem;
}

.continue-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.continue-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  transition: transform 0.3s ease;
}

.continue-card:hover {
  transform: translateY(-5px);
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
}

.continue-overlay {
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

.continue-card:hover .continue-overlay {
  opacity: 1;
}

.episode-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(108, 99, 255, 0.9);
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
}

.play-button {
  background: #6C63FF;
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.play-button:hover {
  transform: scale(1.1);
}

.continue-info {
  padding: 1.5rem;
}

.continue-info h3 {
  color: #2d3748;
  font-size: 1.2rem;
  margin-bottom: 0.75rem;
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
  background: #6C63FF;
  border-radius: 2px;
}

.time-left {
  color: #718096;
  font-size: 0.8rem;
}

/* Trending Shows */
.trending {
  padding: 5rem 2rem;
}

.trending h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #6C63FF;
  margin-bottom: 3rem;
}

.shows-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.show-card {
  display: flex;
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  transition: transform 0.3s ease;
}

.show-card:hover {
  transform: translateY(-5px);
}

.show-image {
  position: relative;
  width: 180px;
  flex-shrink: 0;
}

.show-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.show-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.show-card:hover .show-overlay {
  opacity: 1;
}

.rating {
  color: #FFD700;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.watch-button {
  background: #6C63FF;
  color: white;
  padding: 0.5rem 1.25rem;
  border-radius: 20px;
  border: none;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.watch-button:hover {
  background: #5a52e0;
}

.show-badge {
  position: absolute;
  top: 10px;
  left: 10px;
  background: rgba(0,0,0,0.7);
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
}

.show-info {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.show-info h3 {
  color: #2d3748;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.show-meta {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.show-genre {
  color: #6C63FF;
}

.show-year {
  color: #718096;
}

.show-desc {
  color: #4a5568;
  line-height: 1.6;
  font-size: 0.95rem;
}

/* New Releases */
.new-releases {
  padding: 5rem 2rem;
  background: #f8fafc;
}

.new-releases h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #6C63FF;
  margin-bottom: 3rem;
}

.releases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.release-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  transition: transform 0.3s ease;
}

.release-card:hover {
  transform: translateY(-5px);
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
}

.release-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  background: rgba(108, 99, 255, 0.9);
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
}

.release-info {
  padding: 1.5rem;
}

.release-info h3 {
  color: #2d3748;
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
  color: #6C63FF;
}

.release-duration {
  color: #718096;
}

.release-desc {
  color: #4a5568;
  line-height: 1.6;
  font-size: 0.95rem;
}

/* Features */
.features {
  padding: 5rem 2rem;
}

.features h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #6C63FF;
  margin-bottom: 3rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  transition: transform 0.3s ease;
  text-align: center;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  display: block;
}

.feature-card h3 {
  color: #6C63FF;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.feature-card p {
  color: #4a5568;
  line-height: 1.6;
}

/* Watch Options */
.watch-options {
  padding: 5rem 2rem;
  background: #f8fafc;
}

.watch-options h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #6C63FF;
  margin-bottom: 3rem;
}

.options-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.option-card {
  background: white;
  padding: 2.5rem 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  position: relative;
  transition: transform 0.3s ease;
  text-align: center;
}

.option-card:hover {
  transform: translateY(-5px);
}

.option-card.best-value {
  border: 2px solid #6C63FF;
  transform: scale(1.05);
}

.option-card.best-value:hover {
  transform: scale(1.05) translateY(-5px);
}

.best-tag {
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  background: #6C63FF;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

.option-card h3 {
  font-size: 1.5rem;
  color: #2d3748;
  margin-bottom: 1.5rem;
}

.option-price {
  margin-bottom: 2rem;
}

.price {
  font-size: 2.5rem;
  font-weight: 800;
  color: #6C63FF;
}

.period {
  color: #718096;
  font-size: 1rem;
}

.option-features {
  margin-bottom: 2rem;
}

.option-feature {
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 0;
  border-bottom: 1px solid #f0f4f8;
}

.option-feature:last-child {
  border-bottom: none;
}

.feature-label {
  color: #718096;
}

.feature-value {
  color: #2d3748;
  font-weight: 500;
}

.select-button {
  background: #6C63FF;
  color: white;
  width: 100%;
  padding: 1rem;
  border-radius: 30px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.select-button:hover {
  background: #5a52e0;
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
  margin-bottom: 1rem;
}

.cta p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.cta .cta-button {
  background: white;
  color: #6C63FF;
}

/* Responsive Styles */
@media (max-width: 1024px) {
  .shows-grid {
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  }
  
  .releases-grid {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
  
  .option-card.best-value {
    transform: scale(1.03);
  }
  
  .option-card.best-value:hover {
    transform: scale(1.03) translateY(-5px);
  }
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 3rem;
  }
  
  .subtitle {
    font-size: 1.2rem;
  }
  
  .shows-grid {
    grid-template-columns: 1fr;
  }
  
  .show-card {
    flex-direction: column;
  }
  
  .show-image {
    width: 100%;
    height: 200px;
  }
  
  .options-grid {
    grid-template-columns: 1fr;
  }
  
  .option-card.best-value {
    transform: none;
  }
  
  .option-card.best-value:hover {
    transform: translateY(-5px);
  }
  
  .cta h2 {
    font-size: 2.5rem;
  }
}

@media (max-width: 640px) {
  .hero h1 {
    font-size: 2.5rem;
  }
  
  .categories-grid {
    grid-template-columns: 1fr 1fr;
  }
  
  .continue-grid {
    grid-template-columns: 1fr;
  }
  
  .releases-grid {
    grid-template-columns: 1fr;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .cta h2 {
    font-size: 2rem;
  }
}
</style>