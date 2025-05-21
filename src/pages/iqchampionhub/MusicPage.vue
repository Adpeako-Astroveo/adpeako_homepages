<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Featured playlists
const featuredPlaylists = ref([
  {
    title: 'Today\'s Top Hits',
    description: 'The most popular tracks right now',
    coverImage: 'https://images.pexels.com/photos/1370545/pexels-photo-1370545.jpeg',
    songs: 50
  },
  {
    title: 'Workout Essentials',
    description: 'High-energy tracks to fuel your workout',
    coverImage: 'https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg',
    songs: 45
  },
  {
    title: 'Study Focus',
    description: 'Concentration-enhancing instrumental tracks',
    coverImage: 'https://images.pexels.com/photos/3059750/pexels-photo-3059750.jpeg',
    songs: 40
  }
]);

// Genres categories
const genres = ref([
  { name: 'Pop', icon: '🎵' },
  { name: 'Hip Hop', icon: '🎤' },
  { name: 'Rock', icon: '🎸' },
  { name: 'Electronic', icon: '🎧' },
  { name: 'R&B', icon: '🎷' },
  { name: 'Jazz', icon: '🎺' },
  { name: 'Classical', icon: '🎻' },
  { name: 'Country', icon: '🤠' }
]);

// New releases
const newReleases = ref([
  {
    title: 'Midnight Memories',
    artist: 'Luna Eclipse',
    coverImage: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
    releaseDate: 'Today'
  },
  {
    title: 'Electric Dreams',
    artist: 'Neon Wave',
    coverImage: 'https://images.pexels.com/photos/1936954/pexels-photo-1936954.jpeg',
    releaseDate: 'Yesterday'
  },
  {
    title: 'Sunset Boulevard',
    artist: 'Coastal Drive',
    coverImage: 'https://images.pexels.com/photos/1774389/pexels-photo-1774389.jpeg',
    releaseDate: '3 days ago'
  },
  {
    title: 'Eternal Echo',
    artist: 'Whisper Symphony',
    coverImage: 'https://images.pexels.com/photos/144429/pexels-photo-144429.jpeg',
    releaseDate: '1 week ago'
  }
]);

// Features of music streaming service
const features = ref([
  {
    title: 'High-Quality Streaming',
    description: 'Listen to music in premium HD audio quality',
    icon: '🔊'
  },
  {
    title: 'Offline Playback',
    description: 'Download your favorite songs for offline listening',
    icon: '📱'
  },
  {
    title: 'Personalized Playlists',
    description: 'AI-curated playlists based on your listening habits',
    icon: '🎯'
  },
  {
    title: 'Ad-Free Experience',
    description: 'Enjoy uninterrupted music with no advertisements',
    icon: '🚫'
  }
]);

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
        <p class="subheading">Millions of songs at your fingertips. Premium quality. No ads.</p>
        <button class="cta-button" @click="handleLogin">Start Listening Now</button>
      </div>
    </section>

    <!-- Featured Playlists -->
    <section class="featured-section">
      <div class="container">
        <h2>Featured Playlists</h2>
        <div class="playlist-grid">
          <div v-for="playlist in featuredPlaylists" :key="playlist.title" class="playlist-card">
            <div class="playlist-image">
              <img :src="playlist.coverImage" :alt="playlist.title">
              <div class="play-overlay">
                <span class="play-icon">▶</span>
              </div>
            </div>
            <div class="playlist-info">
              <h3>{{ playlist.title }}</h3>
              <p>{{ playlist.description }}</p>
              <span class="song-count">{{ playlist.songs }} songs</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Genres Section -->
    <section class="genres-section">
      <div class="container">
        <h2>Browse Genres</h2>
        <div class="genres-grid">
          <div v-for="genre in genres" :key="genre.name" class="genre-card">
            <span class="genre-icon">{{ genre.icon }}</span>
            <h3>{{ genre.name }}</h3>
          </div>
        </div>
      </div>
    </section>

    <!-- New Releases -->
    <section class="new-releases-section">
      <div class="container">
        <h2>New Releases</h2>
        <div class="releases-grid">
          <div v-for="release in newReleases" :key="release.title" class="release-card">
            <div class="release-image">
              <img :src="release.coverImage" :alt="release.title">
              <div class="play-overlay">
                <span class="play-icon">▶</span>
              </div>
            </div>
            <div class="release-info">
              <h3>{{ release.title }}</h3>
              <p class="artist-name">{{ release.artist }}</p>
              <span class="release-date">Released: {{ release.releaseDate }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <div class="container">
        <h2>Premium Features</h2>
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

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <h2>Ready to Start Listening?</h2>
        <p>Access unlimited music with a simple subscription billed directly to your phone</p>
        <button class="cta-button" @click="handleLogin">Get Started</button>
        <p class="note">No credit card required. Cancel anytime.</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.music-page {
  min-height: 100vh;
  color: #333;
  padding-top: 65px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
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
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg') center/cover no-repeat;
  opacity: 0.15;
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
}

.hero h1 {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  text-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

.subheading {
  font-size: 1.5rem;
  margin-bottom: 2.5rem;
  opacity: 0.9;
}

.cta-button {
  background: #44C7B0;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 1rem 2rem;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(68, 199, 176, 0.4);
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(68, 199, 176, 0.5);
}

/* Featured Playlists */
.featured-section {
  padding: 5rem 0;
}

.featured-section h2, 
.genres-section h2, 
.new-releases-section h2,
.features-section h2 {
  font-size: 2.2rem;
  margin-bottom: 2.5rem;
  color: #6C63FF;
  text-align: center;
}

.playlist-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.playlist-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.playlist-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.15);
}

.playlist-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.playlist-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.playlist-card:hover .playlist-image img {
  transform: scale(1.1);
}

.play-overlay {
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

.playlist-card:hover .play-overlay,
.release-card:hover .play-overlay {
  opacity: 1;
}

.play-icon {
  width: 60px;
  height: 60px;
  background: rgba(68, 199, 176, 0.8);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
}

.play-icon:hover {
  transform: scale(1.1);
  background: rgba(68, 199, 176, 1);
}

.playlist-info {
  padding: 1.5rem;
}

.playlist-info h3 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: #6C63FF;
}

.playlist-info p {
  color: #666;
  margin-bottom: 1rem;
  line-height: 1.5;
}

.song-count {
  color: #888;
  font-size: 0.9rem;
}

/* Genres Section */
.genres-section {
  padding: 5rem 0;
  background: #f9f9f9;
}

.genres-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1.5rem;
}

.genre-card {
  background: white;
  border-radius: 1rem;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  transition: all 0.3s ease;
  cursor: pointer;
}

.genre-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  background: linear-gradient(135deg, #6C63FF 0%, #FF6584 100%);
  color: white;
}

.genre-icon {
  font-size: 2.5rem;
  display: block;
  margin-bottom: 1rem;
}

.genre-card h3 {
  font-size: 1.1rem;
}

/* New Releases */
.new-releases-section {
  padding: 5rem 0;
}

.releases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
}

.release-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.release-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.15);
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
  transform: scale(1.1);
}

.release-info {
  padding: 1.5rem;
}

.release-info h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #6C63FF;
}

.artist-name {
  color: #666;
  margin-bottom: 0.5rem;
}

.release-date {
  color: #888;
  font-size: 0.9rem;
  font-style: italic;
}

/* Features Section */
.features-section {
  padding: 5rem 0;
  background: #f9f9f9;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.1);
}

.feature-icon {
  font-size: 2.5rem;
  flex-shrink: 0;
}

.feature-content h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #6C63FF;
}

.feature-content p {
  color: #666;
  line-height: 1.5;
}

/* CTA Section */
.cta-section {
  padding: 7rem 0;
  text-align: center;
  background: linear-gradient(135deg, #6C63FF 0%, #FF6584 100%);
  color: white;
}

.cta-section h2 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: white;
}

.cta-section p {
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.note {
  font-size: 0.9rem;
  margin-top: 1.5rem;
  opacity: 0.8;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero {
    padding: 6rem 1.5rem;
  }
  
  .hero h1 {
    font-size: 2.5rem;
  }
  
  .subheading {
    font-size: 1.2rem;
  }
  
  .featured-section h2, 
  .genres-section h2, 
  .new-releases-section h2,
  .features-section h2,
  .cta-section h2 {
    font-size: 1.8rem;
  }
  
  .playlist-grid,
  .releases-grid {
    grid-template-columns: 1fr;
  }
  
  .genres-grid {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }
  
  .feature-card {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .hero h1 {
    font-size: 2rem;
  }
  
  .container {
    padding: 0 1.5rem;
  }
  
  .cta-section p {
    font-size: 1rem;
  }
  
  .cta-button {
    padding: 0.8rem 1.8rem;
    font-size: 1rem;
  }
}
</style>