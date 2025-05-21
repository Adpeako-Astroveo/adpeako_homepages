<script setup>
import { ref } from 'vue';

const featuredArtists = ref([
  {
    name: 'Melodic Waves',
    genre: 'Alternative Rock',
    image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg',
    followers: '2.3M'
  },
  {
    name: 'Harmony Echo',
    genre: 'Pop',
    image: 'https://images.pexels.com/photos/1644616/pexels-photo-1644616.jpeg',
    followers: '1.8M'
  },
  {
    name: 'Rhythm Pulse',
    genre: 'Electronic',
    image: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg',
    followers: '3.5M'
  }
]);

const playlists = ref([
  {
    title: 'Morning Vibes',
    tracks: 42,
    image: 'https://images.pexels.com/photos/7648484/pexels-photo-7648484.jpeg',
    description: 'Start your day with uplifting tracks'
  },
  {
    title: 'Focus Flow',
    tracks: 65,
    image: 'https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg',
    description: 'Deep concentration music for work and study'
  },
  {
    title: 'Sunset Chill',
    tracks: 38,
    image: 'https://images.pexels.com/photos/1774389/pexels-photo-1774389.jpeg',
    description: 'Relax with ambient sounds as the day ends'
  },
  {
    title: 'Weekend Party',
    tracks: 53,
    image: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg',
    description: 'Upbeat tracks to kick-start your weekend'
  }
]);

const newReleases = ref([
  {
    title: 'Aurora Lights',
    artist: 'Crystal Echoes',
    image: 'https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg',
    duration: '3:45'
  },
  {
    title: 'Midnight Journey',
    artist: 'Electric Dreams',
    image: 'https://images.pexels.com/photos/1616470/pexels-photo-1616470.jpeg',
    duration: '4:12'
  },
  {
    title: 'Oceanic Reverie',
    artist: 'Aqua Serenity',
    image: 'https://images.pexels.com/photos/1619929/pexels-photo-1619929.jpeg',
    duration: '5:07'
  }
]);

const features = ref([
  {
    title: 'HD Audio',
    description: 'Experience crystal clear sound with our high-definition audio streaming.',
    icon: '🎧'
  },
  {
    title: 'Personalized Recommendations',
    description: 'Discover new music based on your listening habits.',
    icon: '🔍'
  },
  {
    title: 'Offline Listening',
    description: 'Download your favorite songs to listen without an internet connection.',
    icon: '⬇️'
  },
  {
    title: 'Cross-Device Sync',
    description: 'Seamlessly switch between devices without missing a beat.',
    icon: '🔄'
  }
]);

const handleSubscribe = () => {
  window.location.href = '/login';
};
</script>

<template>
  <div class="timber-music-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Unlimited Music Streaming</h1>
        <p class="tagline">Millions of songs. Zero ads. Crystal-clear quality.</p>
        <button @click="handleSubscribe" class="cta-button">Start Free Trial</button>
      </div>
    </section>

    <!-- Featured Artists -->
    <section class="featured-artists">
      <h2>Featured Artists</h2>
      <div class="artists-container">
        <div v-for="artist in featuredArtists" :key="artist.name" class="artist-card">
          <div class="artist-image">
            <img :src="artist.image" :alt="artist.name">
          </div>
          <div class="artist-info">
            <h3>{{ artist.name }}</h3>
            <span class="genre">{{ artist.genre }}</span>
            <span class="followers">{{ artist.followers }} followers</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Playlists Section -->
    <section class="playlists">
      <h2>Curated Playlists</h2>
      <div class="playlists-grid">
        <div v-for="playlist in playlists" :key="playlist.title" class="playlist-card">
          <div class="playlist-image">
            <img :src="playlist.image" :alt="playlist.title">
            <div class="overlay">
              <span class="play-icon">▶</span>
            </div>
          </div>
          <div class="playlist-info">
            <h3>{{ playlist.title }}</h3>
            <p>{{ playlist.tracks }} tracks</p>
            <p class="description">{{ playlist.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- New Releases -->
    <section class="new-releases">
      <h2>New Releases</h2>
      <div class="releases-container">
        <div v-for="release in newReleases" :key="release.title" class="release-card">
          <div class="release-image">
            <img :src="release.image" :alt="release.title">
            <div class="play-overlay">
              <span class="play-icon">▶</span>
            </div>
          </div>
          <div class="release-info">
            <h3>{{ release.title }}</h3>
            <p class="artist-name">{{ release.artist }}</p>
            <p class="duration">{{ release.duration }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <h2>Premium Features</h2>
      <div class="features-grid">
        <div v-for="feature in features" :key="feature.title" class="feature-card">
          <div class="feature-icon">{{ feature.icon }}</div>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-content">
        <h2>Ready to start listening?</h2>
        <p>Join millions of music lovers. Get unlimited access to over 70 million songs.</p>
        <button @click="handleSubscribe" class="cta-button">Try Premium Free</button>
      </div>
    </section>
  </div>
</template>

<style scoped>
.timber-music-page {
  min-height: 100vh;
  color: #333;
  font-family: 'Inter', sans-serif;
  padding-top: 64px;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #2c5364 0%, #203a43 50%, #0f2027 100%);
  color: white;
  padding: 10rem 2rem;
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
  background: url('https://images.pexels.com/photos/2886292/pexels-photo-2886292.jpeg') center/cover no-repeat;
  opacity: 0.2;
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
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.tagline {
  font-size: 1.5rem;
  margin-bottom: 2.5rem;
  opacity: 0.9;
}

.cta-button {
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  color: #203a43;
  font-size: 1.2rem;
  font-weight: 600;
  padding: 1rem 3rem;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0,0,0,0.25);
}

/* Featured Artists */
.featured-artists {
  padding: 5rem 2rem;
  background-color: #f9f9f9;
}

.featured-artists h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #2c5364;
}

.artists-container {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
}

.artist-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  width: 300px;
}

.artist-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.15);
}

.artist-image {
  height: 200px;
  overflow: hidden;
}

.artist-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.artist-card:hover .artist-image img {
  transform: scale(1.1);
}

.artist-info {
  padding: 1.5rem;
}

.artist-info h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #2c5364;
}

.genre {
  display: inline-block;
  background: #e6f7ff;
  color: #0086c3;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  margin-right: 0.5rem;
}

.followers {
  font-size: 0.9rem;
  color: #666;
}

/* Playlists Section */
.playlists {
  padding: 5rem 2rem;
  background: white;
}

.playlists h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #2c5364;
}

.playlists-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.playlist-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.playlist-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 25px rgba(0,0,0,0.15);
}

.playlist-image {
  height: 180px;
  position: relative;
  overflow: hidden;
}

.playlist-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.playlist-card:hover .overlay {
  opacity: 1;
}

.playlist-card:hover .playlist-image img {
  transform: scale(1.1);
}

.play-icon {
  color: white;
  font-size: 3rem;
  cursor: pointer;
}

.playlist-info {
  padding: 1.5rem;
}

.playlist-info h3 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: #2c5364;
}

.playlist-info p {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.description {
  color: #888;
  font-size: 0.85rem;
  margin-top: 0.5rem;
}

/* New Releases */
.new-releases {
  padding: 5rem 2rem;
  background: #f9f9f9;
}

.new-releases h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #2c5364;
}

.releases-container {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
}

.release-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  width: 300px;
}

.release-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 25px rgba(0,0,0,0.15);
}

.release-image {
  height: 180px;
  position: relative;
  overflow: hidden;
}

.release-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.play-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.release-card:hover .play-overlay {
  opacity: 1;
}

.release-card:hover .release-image img {
  transform: scale(1.1);
}

.release-info {
  padding: 1.5rem;
}

.release-info h3 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: #2c5364;
}

.artist-name {
  color: #0086c3;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.duration {
  color: #888;
  font-size: 0.85rem;
}

/* Features Section */
.features {
  padding: 5rem 2rem;
  background: white;
}

.features h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #2c5364;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  background: #f9f9f9;
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.feature-card h3 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #2c5364;
}

.feature-card p {
  color: #666;
  font-size: 0.9rem;
  line-height: 1.6;
}

/* CTA Section */
.cta-section {
  background: linear-gradient(135deg, #2c5364 0%, #203a43 50%, #0f2027 100%);
  color: white;
  padding: 5rem 2rem;
  text-align: center;
}

.cta-content {
  max-width: 800px;
  margin: 0 auto;
}

.cta-section h2 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}

.cta-section p {
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  opacity: 0.9;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero {
    padding: 8rem 1.5rem;
  }
  
  .hero h1 {
    font-size: 2.5rem;
  }
  
  .tagline {
    font-size: 1.2rem;
  }
  
  .artists-container {
    flex-direction: column;
    align-items: center;
  }
  
  .artist-card {
    width: 100%;
    max-width: 350px;
  }
  
  .releases-container {
    flex-direction: column;
    align-items: center;
  }
  
  .release-card {
    width: 100%;
    max-width: 350px;
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
    padding: 6rem 1rem;
  }
  
  .hero h1 {
    font-size: 2rem;
  }
  
  .featured-artists h2,
  .playlists h2,
  .new-releases h2,
  .features h2 {
    font-size: 2rem;
  }
  
  .cta-button {
    padding: 0.8rem 2rem;
    font-size: 1rem;
  }
}
</style>