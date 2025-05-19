<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const genres = ref([
  { name: 'Pop', icon: '🎵', popular: true },
  { name: 'Rock', icon: '🎸', popular: true },
  { name: 'Hip Hop', icon: '🎤', popular: true },
  { name: 'Electronic', icon: '🎧', popular: true },
  { name: 'Jazz', icon: '🎷', popular: false },
  { name: 'Classical', icon: '🎻', popular: false },
  { name: 'R&B', icon: '🎹', popular: false },
  { name: 'Country', icon: '🤠', popular: false }
]);

const popularPlaylists = ref([
  {
    title: 'Global Hits 2025',
    description: 'The biggest tracks making waves worldwide',
    image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg',
    tracks: 50,
    duration: '3h 15m'
  },
  {
    title: 'Fitness Motivation',
    description: 'High-energy music to power your workout routine',
    image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg',
    tracks: 45,
    duration: '2h 50m'
  },
  {
    title: 'Focus & Productivity',
    description: 'Concentration-enhancing tracks for work and study',
    image: 'https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg',
    tracks: 40,
    duration: '2h 45m'
  },
  {
    title: 'Chill Vibes',
    description: 'Relaxing sounds to unwind and de-stress',
    image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg',
    tracks: 38,
    duration: '2h 30m'
  }
]);

const newReleases = ref([
  {
    title: 'Digital Horizon',
    artist: 'Synthwave Collective',
    image: 'https://images.pexels.com/photos/1694900/pexels-photo-1694900.jpeg',
    releaseDate: 'June 15, 2025'
  },
  {
    title: 'City Dreams',
    artist: 'Urban Beats',
    image: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg',
    releaseDate: 'June 12, 2025'
  },
  {
    title: 'Midnight Sounds',
    artist: 'Electric Wave',
    image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg',
    releaseDate: 'June 10, 2025'
  },
  {
    title: 'Acoustic Sessions',
    artist: 'The String Project',
    image: 'https://images.pexels.com/photos/1644616/pexels-photo-1644616.jpeg',
    releaseDate: 'June 8, 2025'
  }
]);

const features = ref([
  {
    title: 'Studio-Quality Audio',
    description: 'Experience music as the artists intended with our Hi-Fi streaming up to 320kbps',
    icon: '🎵'
  },
  {
    title: 'Personalized Playlists',
    description: 'AI-powered recommendations based on your listening preferences',
    icon: '🤖'
  },
  {
    title: 'Offline Listening',
    description: 'Download your favorite tracks for offline enjoyment anywhere',
    icon: '📥'
  },
  {
    title: 'Synchronized Lyrics',
    description: 'Sing along with real-time lyrics for millions of songs',
    icon: '🎤'
  }
]);

const plan = ref({
  name: 'Music Premium',
  price: '€9.99',
  period: 'per month',
  features: [
    'Unlimited streaming',
    'Studio-quality audio',
    'Ad-free experience',
    'Offline downloads',
    'Unlimited skips',
    'Lyrics support'
  ],
  billingText: 'Conveniently billed to your phone - no credit card needed'
});

const handleLogin = () => {
  router.push('/login');
};
</script>

<template>
  <div class="music-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Unlimited Music Streaming</h1>
        <p class="subtitle">Millions of songs in HD audio quality, available anytime</p>
        <button class="primary-btn" @click="handleLogin">Login Now</button>
      </div>
    </section>

    <!-- Genres Section -->
    <section class="genres-section">
      <h2 class="section-title">Explore Genres</h2>
      <div class="genres-grid">
        <div v-for="genre in genres" :key="genre.name" 
             class="genre-card" :class="{ 'popular': genre.popular }">
          <div class="genre-icon">{{ genre.icon }}</div>
          <div class="genre-name">{{ genre.name }}</div>
          <div v-if="genre.popular" class="popular-badge">Popular</div>
        </div>
      </div>
    </section>

    <!-- Playlists Section -->
    <section class="playlists-section">
      <h2 class="section-title">Featured Playlists</h2>
      <div class="playlists-grid">
        <div v-for="playlist in popularPlaylists" :key="playlist.title" class="playlist-card">
          <div class="playlist-image">
            <img :src="playlist.image" :alt="playlist.title">
            <div class="playlist-overlay">
              <button class="play-btn" @click="handleLogin">▶</button>
            </div>
          </div>
          <div class="playlist-info">
            <h3>{{ playlist.title }}</h3>
            <p class="playlist-desc">{{ playlist.description }}</p>
            <div class="playlist-meta">
              <span>{{ playlist.tracks }} tracks</span>
              <span>{{ playlist.duration }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- New Releases -->
    <section class="releases-section">
      <h2 class="section-title">New Releases</h2>
      <div class="releases-grid">
        <div v-for="release in newReleases" :key="release.title" class="release-card">
          <div class="release-image">
            <img :src="release.image" :alt="release.title">
            <div class="release-overlay">
              <button class="play-btn" @click="handleLogin">▶</button>
            </div>
            <div class="new-badge">NEW</div>
          </div>
          <div class="release-info">
            <h3>{{ release.title }}</h3>
            <p class="artist-name">{{ release.artist }}</p>
            <p class="release-date">Released: {{ release.releaseDate }}</p>
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

    <!-- Plan Section -->
    <section class="plan-section">
      <div class="plan-card">
        <h2>{{ plan.name }}</h2>
        <div class="price">
          <span class="amount">{{ plan.price }}</span>
          <span class="period">{{ plan.period }}</span>
        </div>
        <ul class="plan-features">
          <li v-for="feature in plan.features" :key="feature">
            <span class="check-icon">✓</span> {{ feature }}
          </li>
        </ul>
        <p class="billing-info">{{ plan.billingText }}</p>
        <button class="primary-btn full-width" @click="handleLogin">Login Now</button>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-content">
        <h2>Ready to Elevate Your Music Experience?</h2>
        <p>Join millions enjoying unlimited music with Height Ways</p>
        <button class="primary-btn" @click="handleLogin">Login Now</button>
      </div>
    </section>
  </div>
</template>

<style scoped>
.music-page {
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

/* Genres Section */
.genres-section {
  padding: 5rem 2rem;
  background: white;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  color: #007BFF;
  margin-bottom: 3rem;
}

.genres-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

.genre-card {
  background: #f8fafc;
  border-radius: 1rem;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  position: relative;
  transition: transform 0.3s ease;
}

.genre-card:hover {
  transform: translateY(-5px);
}

.genre-card.popular {
  border: 2px solid #007BFF;
}

.genre-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.genre-name {
  font-weight: 600;
  color: #333;
}

.popular-badge {
  position: absolute;
  top: -10px;
  right: -10px;
  background: #007BFF;
  color: white;
  font-size: 0.7rem;
  padding: 0.25rem 0.5rem;
  border-radius: 10px;
  font-weight: 600;
}

/* Playlists Section */
.playlists-section {
  padding: 5rem 2rem;
  background: #f8fafc;
}

.playlists-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.playlist-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  transition: transform 0.3s ease;
}

.playlist-card:hover {
  transform: translateY(-5px);
}

.playlist-image {
  position: relative;
  height: 180px;
  overflow: hidden;
}

.playlist-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.playlist-card:hover .playlist-image img {
  transform: scale(1.05);
}

.playlist-overlay {
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

.playlist-card:hover .playlist-overlay {
  opacity: 1;
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

.playlist-info {
  padding: 1.5rem;
}

.playlist-info h3 {
  color: #333;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.playlist-desc {
  color: #666;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  line-height: 1.5;
}

.playlist-meta {
  display: flex;
  justify-content: space-between;
  color: #888;
  font-size: 0.8rem;
}

/* New Releases */
.releases-section {
  padding: 5rem 2rem;
  background: white;
}

.releases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.release-card {
  background: #f8fafc;
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
  height: 180px;
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
  background: rgba(0,0,0,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.release-card:hover .release-overlay {
  opacity: 1;
}

.new-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #007BFF;
  color: white;
  font-size: 0.75rem;
  font-weight: bold;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
}

.release-info {
  padding: 1.2rem;
}

.release-info h3 {
  color: #333;
  margin-bottom: 0.25rem;
  font-size: 1.1rem;
}

.artist-name {
  color: #555;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.release-date {
  color: #888;
  font-size: 0.8rem;
}

/* Features Section */
.features-section {
  padding: 5rem 2rem;
  background: #f8fafc;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  background: white;
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
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  display: block;
}

.feature-card h3 {
  color: #007BFF;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.feature-card p {
  color: #555;
  line-height: 1.6;
}

/* Plan Section */
.plan-section {
  padding: 5rem 2rem;
  background: white;
  display: flex;
  justify-content: center;
}

.plan-card {
  background: #f8fafc;
  padding: 3rem;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  max-width: 500px;
  width: 100%;
  text-align: center;
}

.plan-card h2 {
  color: #007BFF;
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.price {
  margin-bottom: 2rem;
}

.amount {
  font-size: 3.5rem;
  font-weight: 800;
  color: #007BFF;
}

.period {
  font-size: 1.2rem;
  color: #666;
  margin-left: 0.5rem;
}

.plan-features {
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
  text-align: left;
}

.plan-features li {
  padding: 0.75rem 0;
  border-bottom: 1px solid #e0e0e0;
  color: #444;
  display: flex;
  align-items: center;
}

.plan-features li:last-child {
  border-bottom: none;
}

.check-icon {
  color: #007BFF;
  margin-right: 0.75rem;
  font-weight: bold;
}

.billing-info {
  font-style: italic;
  color: #666;
  margin-bottom: 2rem;
}

/* CTA Section */
.cta-section {
  background: linear-gradient(135deg, #007BFF 0%, #6C63FF 100%);
  color: white;
  padding: 6rem 2rem;
  text-align: center;
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

/* Responsive Design */
@media (max-width: 1024px) {
  .features-grid {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  }
  
  .plan-card {
    padding: 2.5rem;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 8rem 1.5rem 6rem;
  }
  
  .hero h1 {
    font-size: 2.8rem;
  }
  
  .section-title {
    font-size: 2.2rem;
  }
  
  .genres-grid {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }
  
  .playlists-grid {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  }
  
  .cta-content h2 {
    font-size: 2.5rem;
  }
}

@media (max-width: 640px) {
  .hero h1 {
    font-size: 2.5rem;
  }
  
  .subtitle {
    font-size: 1.2rem;
  }
  
  .genres-grid {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .plan-card {
    padding: 2rem;
  }
  
  .amount {
    font-size: 3rem;
  }
  
  .cta-content h2 {
    font-size: 2rem;
  }
  
  .primary-btn {
    padding: 0.9rem 2rem;
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .hero h1 {
    font-size: 2.2rem;
  }
  
  .subtitle {
    font-size: 1.1rem;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
  
  .plan-card {
    padding: 1.5rem;
  }
  
  .amount {
    font-size: 2.5rem;
  }
}
</style>