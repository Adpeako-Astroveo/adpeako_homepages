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
    title: 'Stellar Origins',
    genre: 'Sci-Fi',
    rating: 9.3,
    year: '2025',
    image: 'https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg',
    episodes: '10 episodes',
    description: 'A group of space explorers discovers an ancient alien artifact that reveals the true origins of human civilization.'
  },
  {
    title: 'Crown & Kingdom',
    genre: 'Historical Drama',
    rating: 9.5,
    year: '2025',
    image: 'https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg',
    episodes: '8 episodes',
    description: 'In medieval Europe, five royal houses compete for power in a dangerous game of politics, alliances, and betrayal.'
  },
  {
    title: 'Metro Noir',
    genre: 'Crime Thriller',
    rating: 9.1,
    year: '2024',
    image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg',
    episodes: '12 episodes',
    description: 'A seasoned detective and a rookie partner navigate the criminal underworld of a city where nothing is as it seems.'
  },
  {
    title: 'Innovation Valley',
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
    title: 'Quantum Effect',
    genre: 'Sci-Fi',
    rating: 8.8,
    image: 'https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg',
    type: 'Movie',
    duration: '2h 15m',
    description: 'When a quantum physics experiment goes wrong, a scientist must navigate multiple realities to find his way home.'
  },
  {
    title: 'Summit Challenge',
    genre: 'Adventure',
    rating: 9.0,
    image: 'https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg',
    type: 'Movie',
    duration: '2h 30m',
    description: 'A team of elite climbers faces impossible odds as they attempt to conquer the world\'s most dangerous mountain.'
  },
  {
    title: 'Shadow Lake',
    genre: 'Mystery',
    rating: 8.9,
    image: 'https://images.pexels.com/photos/1707820/pexels-photo-1707820.jpeg',
    type: 'Movie',
    duration: '2h 05m',
    description: 'When a writer returns to her childhood town, long-buried secrets begin to surface with terrifying consequences.'
  },
  {
    title: 'Family Legacies',
    genre: 'Drama',
    rating: 9.2,
    image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg',
    type: 'Movie',
    duration: '1h 58m',
    description: 'An emotional journey spanning three generations as a family confronts their past to secure their future.'
  },
  {
    title: 'Covert Strike',
    genre: 'Action',
    rating: 8.5,
    image: 'https://images.pexels.com/photos/2418664/pexels-photo-2418664.jpeg',
    type: 'Movie',
    duration: '2h 12m',
    description: 'An elite operative must prevent a terrorist attack while uncovering a conspiracy that reaches the highest levels of government.'
  },
  {
    title: 'Perfect Alibi',
    genre: 'Thriller',
    rating: 8.8,
    image: 'https://images.pexels.com/photos/457072/pexels-photo-457072.jpeg',
    type: 'Movie',
    duration: '2h 08m',
    description: 'A seemingly perfect murder mystery unravels as a detective discovers that nothing about the case is what it appears to be.'
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
    description: 'Seamlessly switch between TV, phone, tablet, and computer with automatic syncing',
    icon: '📱'
  },
  {
    title: 'Offline Viewing',
    description: 'Download titles to watch without internet connection - perfect for travel',
    icon: '📥'
  },
  {
    title: 'Personalized Profiles',
    description: 'Create up to 5 unique profiles with individual recommendations and watchlists',
    icon: '👥'
  },
  {
    title: 'Smart Recommendations',
    description: "Our AI learns your preferences to suggest content you'll love",
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
    title: 'The Lost Chronicles',
    progress: 65,
    image: 'https://images.pexels.com/photos/2347662/pexels-photo-2347662.jpeg',
    timeLeft: '45 min left',
    episode: 'S2:E5'
  },
  {
    title: 'Galactic Warriors',
    progress: 30,
    image: 'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg',
    timeLeft: '1h 23m left',
    episode: 'S1:E8'
  },
  {
    title: 'Ocean Explorers',
    progress: 80,
    image: 'https://images.pexels.com/photos/3062542/pexels-photo-3062542.jpeg',
    timeLeft: '22 min left',
    episode: 'S3:E1'
  }
]);

const handleLogin = () => {
  router.push('/login');
};
</script>

<template>
  <div class="video-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Premium Video Streaming</h1>
        <p class="subtitle">Movies, Series, and Documentaries in stunning 4K quality</p>
        <button class="primary-btn" @click="handleLogin">Login Now</button>
      </div>
    </section>

    <!-- Categories Section -->
    <section class="categories-section">
      <h2 class="section-title">Browse Categories</h2>
      <div class="categories-grid">
        <div v-for="category in categories" :key="category.name" class="category-card">
          <div class="category-image">
            <img :src="category.image" :alt="category.name">
            <div class="category-overlay">
              <h3>{{ category.name }}</h3>
              <span class="count">{{ category.count }}</span>
              <button class="explore-btn" @click="handleLogin">Explore</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Continue Watching -->
    <section class="continue-section">
      <h2 class="section-title">Continue Watching</h2>
      <div class="continue-grid">
        <div v-for="item in continueWatching" :key="item.title" class="continue-card">
          <div class="continue-image">
            <img :src="item.image" :alt="item.title">
            <div class="continue-overlay">
              <button class="play-btn" @click="handleLogin">▶</button>
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
    <section class="shows-section">
      <h2 class="section-title">Trending Shows</h2>
      <div class="shows-grid">
        <div v-for="show in trendingShows" :key="show.title" class="show-card">
          <div class="show-image">
            <img :src="show.image" :alt="show.title">
            <div class="show-overlay">
              <div class="rating">★ {{ show.rating }}</div>
              <button class="watch-btn" @click="handleLogin">Watch Now</button>
            </div>
            <div class="show-badge">{{ show.episodes }}</div>
          </div>
          <div class="show-info">
            <h3>{{ show.title }}</h3>
            <div class="show-meta">
              <span class="genre">{{ show.genre }}</span>
              <span class="year">{{ show.year }}</span>
            </div>
            <p class="description">{{ show.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- New Releases -->
    <section class="releases-section">
      <h2 class="section-title">New Releases</h2>
      <div class="releases-grid">
        <div v-for="movie in newReleases" :key="movie.title" class="movie-card">
          <div class="movie-image">
            <img :src="movie.image" :alt="movie.title">
            <div class="movie-overlay">
              <div class="rating">★ {{ movie.rating }}</div>
              <button class="watch-btn" @click="handleLogin">Watch Now</button>
            </div>
            <div class="movie-badge">{{ movie.type }}</div>
          </div>
          <div class="movie-info">
            <h3>{{ movie.title }}</h3>
            <div class="movie-meta">
              <span class="genre">{{ movie.genre }}</span>
              <span class="duration">{{ movie.duration }}</span>
            </div>
            <p class="description">{{ movie.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <h2 class="section-title">Premium Features</h2>
      <div class="features-grid">
        <div v-for="feature in features" :key="feature.title" class="feature-card">
          <span class="feature-icon">{{ feature.icon }}</span>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </div>
      </div>
    </section>

    <!-- Watch Options -->
    <section class="plans-section">
      <h2 class="section-title">Choose Your Plan</h2>
      <div class="plans-grid">
        <div v-for="plan in watchOptions" :key="plan.name" 
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
          <button class="primary-btn full-width" @click="handleLogin">Login Now</button>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-content">
        <h2>Ready for Endless Entertainment?</h2>
        <p>Join millions of viewers enjoying premium content worldwide</p>
        <button class="primary-btn" @click="handleLogin">Login Now</button>
      </div>
    </section>
  </div>
</template>

<style scoped>
.video-page {
  color: #333;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #007BFF 0%, #6C63FF 100%);
  color: white;
  padding: 10rem 2rem 8rem;
  text-align: center;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero h1 {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.subtitle {
  font-size: 1.5rem;
  opacity: 0.9;
  margin-bottom: 2.5rem;
}

.primary-btn {
  background: white;
  color: #007BFF;
  font-size: 1.2rem;
  padding: 1rem 2.5rem;
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

.full-width {
  width: 100%;
}

/* Categories Section */
.categories-section {
  padding: 5rem 2rem;
  background: white;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  color: #007BFF;
  margin-bottom: 3rem;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.category-card {
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  position: relative;
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

.count {
  color: rgba(255,255,255,0.9);
  font-size: 1rem;
  margin-bottom: 1.5rem;
}

.explore-btn {
  background: #007BFF;
  color: white;
  padding: 0.6rem 1.5rem;
  border-radius: 20px;
  border: none;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.explore-btn:hover {
  background: #0069d9;
  transform: translateY(-2px);
}

/* Continue Watching */
.continue-section {
  padding: 5rem 2rem;
  background: #f8fafc;
}

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
  background: rgba(0, 123, 255, 0.9);
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
}

.play-btn {
  background: #007BFF;
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.play-btn:hover {
  transform: scale(1.1);
  background: #0069d9;
}

.continue-info {
  padding: 1.5rem;
}

.continue-info h3 {
  color: #333;
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
  background: #007BFF;
  border-radius: 2px;
}

.time-left {
  color: #718096;
  font-size: 0.8rem;
}

/* Trending Shows */
.shows-section {
  padding: 5rem 2rem;
  background: white;
}

.shows-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.show-card {
  display: flex;
  background: #f8fafc;
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
  height: 100%;
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
  gap: 1rem;
}

.show-card:hover .show-overlay {
  opacity: 1;
}

.rating {
  color: #FFD700;
  font-weight: bold;
}

.watch-btn {
  background: #007BFF;
  color: white;
  padding: 0.5rem 1.25rem;
  border-radius: 20px;
  border: none;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.watch-btn:hover {
  background: #0069d9;
  transform: translateY(-2px);
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
  flex: 1;
}

.show-info h3 {
  color: #333;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.show-meta {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.genre {
  color: #007BFF;
  font-weight: 500;
}

.year {
  color: #718096;
}

.description {
  color: #4a5568;
  line-height: 1.6;
  font-size: 0.95rem;
}

/* New Releases */
.releases-section {
  padding: 5rem 2rem;
  background: #f8fafc;
}

.releases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.movie-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  transition: transform 0.3s ease;
}

.movie-card:hover {
  transform: translateY(-5px);
}

.movie-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.movie-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.movie-overlay {
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
  gap: 1rem;
}

.movie-card:hover .movie-overlay {
  opacity: 1;
}

.movie-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(0, 123, 255, 0.9);
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
}

.movie-info {
  padding: 1.5rem;
}

.movie-info h3 {
  color: #333;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.movie-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.duration {
  color: #718096;
}

/* Features Section */
.features-section {
  padding: 5rem 2rem;
  background: white;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  background: #f8fafc;
  padding: 2.5rem 2rem;
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
  margin-bottom: 1.5rem;
  display: block;
}

.feature-card h3 {
  color: #007BFF;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.feature-card p {
  color: #4a5568;
  line-height: 1.6;
}

/* Plans Section */
.plans-section {
  padding: 5rem 2rem;
  background: #f8fafc;
}

.plans-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.plan-card {
  background: white;
  padding: 2.5rem 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  position: relative;
  transition: transform 0.3s ease;
  text-align: center;
}

.plan-card:hover {
  transform: translateY(-5px);
}

.plan-card.best-value {
  border: 2px solid #007BFF;
  transform: scale(1.05);
  z-index: 1;
}

.plan-card.best-value:hover {
  transform: scale(1.05) translateY(-5px);
}

.best-tag {
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  background: #007BFF;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

.plan-card h3 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1.5rem;
}

.plan-price {
  margin-bottom: 2rem;
}

.price {
  font-size: 2.5rem;
  font-weight: 800;
  color: #007BFF;
}

.period {
  color: #718096;
  font-size: 1rem;
}

.plan-details {
  margin-bottom: 2rem;
}

.plan-feature {
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 0;
  border-bottom: 1px solid #f0f4f8;
}

.plan-feature:last-child {
  border-bottom: none;
}

.feature-name {
  color: #718096;
}

.feature-value {
  color: #333;
  font-weight: 500;
}

.billing-note {
  color: #718096;
  font-style: italic;
  margin-bottom: 2rem;
  font-size: 0.9rem;
}

/* CTA Section */
.cta-section {
  background: linear-gradient(135deg, #007BFF 0%, #6C63FF 100%);
  color: white;
  text-align: center;
  padding: 6rem 2rem;
}

.cta-content {
  max-width: 800px;
  margin: 0 auto;
}

.cta-content h2 {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.cta-content p {
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  opacity: 0.9;
}

.cta-section .primary-btn {
  color: #007BFF;
}

/* Responsive Styles */
@media (max-width: 1024px) {
  .shows-grid {
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  }
  
  .plan-card.best-value {
    transform: scale(1.03);
  }
  
  .plan-card.best-value:hover {
    transform: scale(1.03) translateY(-5px);
  }
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.8rem;
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
  
  .plan-card.best-value {
    transform: none;
  }
  
  .plan-card.best-value:hover {
    transform: translateY(-5px);
  }
  
  .cta-content h2 {
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
  
  .cta-content h2 {
    font-size: 2.2rem;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 8rem 1.5rem 6rem;
  }
  
  .hero h1 {
    font-size: 2.2rem;
  }
  
  .subtitle {
    font-size: 1.1rem;
  }
  
  .section-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  
  .categories-grid {
    gap: 1rem;
  }
  
  .category-overlay h3 {
    font-size: 1.4rem;
  }
  
  .count {
    font-size: 0.9rem;
  }
}
</style>