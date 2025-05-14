<script setup>
import { ref } from 'vue';

const genres = ref([
  { name: 'Pop', icon: '🎵' },
  { name: 'Rock', icon: '🎸' },
  { name: 'Hip Hop', icon: '🎤' },
  { name: 'Jazz', icon: '🎷' },
  { name: 'Classical', icon: '🎻' },
  { name: 'Electronic', icon: '🎹' }
]);

const features = ref([
  {
    title: 'Hi-Fi Audio',
    description: 'Crystal clear sound quality with up to 320kbps streaming',
    icon: '🎧'
  },
  {
    title: 'Offline Mode',
    description: 'Download your favorite tracks for offline listening',
    icon: '⬇️'
  },
  {
    title: 'Smart Playlists',
    description: 'AI-powered playlists based on your listening habits',
    icon: '🤖'
  },
  {
    title: 'Lyrics Support',
    description: 'Real-time synchronized lyrics for supported songs',
    icon: '📝'
  }
]);

const playlists = ref([
  {
    title: 'Top Hits 2024',
    image: 'https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg',
    songs: '50 songs'
  },
  {
    title: 'Workout Essentials',
    image: 'https://images.pexels.com/photos/4473622/pexels-photo-4473622.jpeg',
    songs: '45 songs'
  },
  {
    title: 'Chill Vibes',
    image: 'https://images.pexels.com/photos/1647972/pexels-photo-1647972.jpeg',
    songs: '30 songs'
  }
]);

const handleLogin = () => {
  window.location.href = '/login';
};
</script>

<template>
  <div class="music-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Unlimited Music Streaming</h1>
        <p class="subtitle">Millions of songs. No ads. Superior audio quality.</p>
        <button class="cta-button" @click="handleLogin">Start Listening Now</button>
      </div>
    </section>

    <!-- Genres Section -->
    <section class="genres">
      <h2>Explore Genres</h2>
      <div class="genres-grid">
        <div v-for="genre in genres" :key="genre.name" class="genre-card">
          <span class="genre-icon">{{ genre.icon }}</span>
          <h3>{{ genre.name }}</h3>
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

    <!-- Playlists Section -->
    <section class="playlists">
      <h2>Featured Playlists</h2>
      <div class="playlists-grid">
        <div v-for="playlist in playlists" :key="playlist.title" class="playlist-card">
          <img :src="playlist.image" :alt="playlist.title" />
          <div class="playlist-info">
            <h3>{{ playlist.title }}</h3>
            <p>{{ playlist.songs }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta">
      <h2>Ready to Start Streaming?</h2>
      <p>Join millions of music lovers worldwide</p>
      <button class="cta-button" @click="handleLogin">Login Now</button>
    </section>
  </div>
</template>

<style scoped>
.music-page {
  min-height: 100vh;
  padding-top: 64px;
}

.hero {
  background: linear-gradient(135deg, #FFB800 0%, #FFA200 100%);
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
}

.subtitle {
  font-size: 1.5rem;
  opacity: 0.9;
  margin-bottom: 2rem;
}

.genres {
  padding: 6rem 2rem;
  background: #f7fafc;
}

.genres h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #FFB800;
  margin-bottom: 3rem;
}

.genres-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.genre-card {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.genre-card:hover {
  transform: translateY(-5px);
}

.genre-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  display: block;
}

.features {
  padding: 6rem 2rem;
}

.features h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #FFB800;
  margin-bottom: 3rem;
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
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  display: block;
}

.feature-card h3 {
  color: #FFB800;
  margin-bottom: 1rem;
}

.playlists {
  padding: 6rem 2rem;
  background: #f7fafc;
}

.playlists h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #FFB800;
  margin-bottom: 3rem;
}

.playlists-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.playlist-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.playlist-card:hover {
  transform: translateY(-5px);
}

.playlist-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.playlist-info {
  padding: 1.5rem;
}

.playlist-info h3 {
  color: #FFB800;
  margin-bottom: 0.5rem;
}

.cta {
  background: linear-gradient(135deg, #FFB800 0%, #FFA200 100%);
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

.cta-button {
  background: white;
  color: #FFB800;
  font-size: 1.2rem;
  padding: 1rem 3rem;
  border-radius: 0.5rem;
  border: none;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.5rem;
  }

  .genres-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .cta h2 {
    font-size: 2rem;
  }
}
</style>