<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Featured playlists
const featuredPlaylists = ref([
  {
    title: 'Neon Beats',
    curator: 'Jewel Music Team',
    coverImage: 'https://images.pexels.com/photos/1701202/pexels-photo-1701202.jpeg',
    tracks: 45,
    description: 'Electrifying dance tracks to fuel your energy'
  },
  {
    title: 'Chill Vibes',
    curator: 'Melody Masters',
    coverImage: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg',
    tracks: 38,
    description: 'Relaxing tunes for your downtime moments'
  },
  {
    title: 'Acoustic Sessions',
    curator: 'Harmony Hub',
    coverImage: 'https://images.pexels.com/photos/1631181/pexels-photo-1631181.jpeg',
    tracks: 42,
    description: 'Intimate acoustic performances from top artists'
  }
]);

// Music genres
const genres = ref([
  { name: 'Pop', icon: '🎵', color: '#f472b6' },
  { name: 'Hip Hop', icon: '🎤', color: '#38bdf8' },
  { name: 'Rock', icon: '🎸', color: '#fb923c' },
  { name: 'R&B', icon: '🎷', color: '#a855f7' },
  { name: 'Electronic', icon: '🎧', color: '#22d3ee' },
  { name: 'Jazz', icon: '🎺', color: '#fbbf24' },
  { name: 'Classical', icon: '🎻', color: '#84cc16' },
  { name: 'Country', icon: '🤠', color: '#8b5cf6' }
]);

// Top artists
const topArtists = ref([
  {
    name: 'Crystal Nova',
    genre: 'Electronic Pop',
    image: 'https://images.pexels.com/photos/1921168/pexels-photo-1921168.jpeg',
    listeners: '12.5M monthly listeners'
  },
  {
    name: 'Rhythm Collective',
    genre: 'Hip Hop',
    image: 'https://images.pexels.com/photos/1309240/pexels-photo-1309240.jpeg',
    listeners: '9.8M monthly listeners'
  },
  {
    name: 'Aurora Waves',
    genre: 'Indie Rock',
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
    listeners: '8.3M monthly listeners'
  },
  {
    name: 'Melody Echo',
    genre: 'R&B Soul',
    image: 'https://images.pexels.com/photos/2096700/pexels-photo-2096700.jpeg',
    listeners: '7.2M monthly listeners'
  }
]);

// New releases
const newReleases = ref([
  {
    title: 'Midnight Chronicles',
    artist: 'Prism Effect',
    coverImage: 'https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg',
    releaseDate: 'Just released'
  },
  {
    title: 'Neon Dreams',
    artist: 'Electra Pulse',
    coverImage: 'https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg',
    releaseDate: '2 days ago'
  },
  {
    title: 'Summer Haze',
    artist: 'Coastal Drive',
    coverImage: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg',
    releaseDate: '5 days ago'
  },
  {
    title: 'Starlight Echoes',
    artist: 'Luna Drift',
    coverImage: 'https://images.pexels.com/photos/1293391/pexels-photo-1293391.jpeg',
    releaseDate: '1 week ago'
  },
  {
    title: 'Urban Rhythms',
    artist: 'Metro Pulse',
    coverImage: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg',
    releaseDate: '1 week ago'
  },
  {
    title: 'Velvet Horizon',
    artist: 'Sapphire Skies',
    coverImage: 'https://images.pexels.com/photos/811838/pexels-photo-811838.jpeg',
    releaseDate: '2 weeks ago'
  }
]);

// Premium features
const features = ref([
  {
    title: 'Studio Quality Audio',
    description: 'Experience music in lossless audio up to 24-bit/192kHz quality',
    icon: '🎧'
  },
  {
    title: 'Offline Library',
    description: 'Download unlimited songs, albums, and playlists for offline listening',
    icon: '📲'
  },
  {
    title: 'Smart Recommendations',
    description: 'Discover new music tailored to your taste with our AI algorithm',
    icon: '🧠'
  },
  {
    title: 'Seamless Integration',
    description: 'Switch between music and other Jewel services without skipping a beat',
    icon: '🔄'
  }
]);

const handleSubscribe = () => {
  router.push('/jewel-video-content/payment');
};

const handlePlayNow = (contentTitle) => {
  router.push('/login');
};
</script>

<template>
  <div class="music-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <span class="badge">PREMIUM MUSIC</span>
        <h1>Unlimited HD Music Streaming</h1>
        <p>Millions of songs. Zero ads. Superior audio quality.</p>
        <div class="hero-actions">
          <button @click="handleSubscribe" class="primary-button">Start Free Trial</button>
          <button @click="handlePlayNow('featured')" class="secondary-button">
            <span class="play-icon">▶</span> Play Featured Tracks
          </button>
        </div>
      </div>
      <div class="hero-backdrop"></div>
    </section>

    <!-- Featured Playlists Section -->
    <section class="playlists-section">
      <div class="container">
        <h2>Featured Playlists</h2>
        <div class="playlists-grid">
          <div v-for="playlist in featuredPlaylists" :key="playlist.title" class="playlist-card">
            <div class="playlist-image">
              <img :src="playlist.coverImage" :alt="playlist.title">
              <div class="playlist-overlay">
                <button @click="handlePlayNow(playlist.title)" class="play-button">
                  <span>▶</span>
                </button>
              </div>
            </div>
            <div class="playlist-info">
              <h3>{{ playlist.title }}</h3>
              <p class="playlist-curator">By {{ playlist.curator }}</p>
              <p class="playlist-tracks">{{ playlist.tracks }} tracks</p>
              <p class="playlist-description">{{ playlist.description }}</p>
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
          <div v-for="genre in genres" :key="genre.name" class="genre-card" :style="{ '--genre-color': genre.color }">
            <div class="genre-icon">{{ genre.icon }}</div>
            <h3>{{ genre.name }}</h3>
          </div>
        </div>
      </div>
    </section>

    <!-- Top Artists Section -->
    <section class="artists-section">
      <div class="container">
        <h2>Top Artists</h2>
        <div class="artists-grid">
          <div v-for="artist in topArtists" :key="artist.name" class="artist-card">
            <div class="artist-image">
              <img :src="artist.image" :alt="artist.name">
              <div class="artist-overlay">
                <button @click="handlePlayNow(artist.name)" class="play-button">
                  <span>▶</span>
                </button>
              </div>
            </div>
            <div class="artist-info">
              <h3>{{ artist.name }}</h3>
              <p class="artist-genre">{{ artist.genre }}</p>
              <p class="artist-listeners">{{ artist.listeners }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- New Releases Section -->
    <section class="releases-section">
      <div class="container">
        <h2>New Releases</h2>
        <div class="releases-grid">
          <div v-for="release in newReleases" :key="release.title" class="release-card">
            <div class="release-image">
              <img :src="release.coverImage" :alt="release.title">
              <div class="release-overlay">
                <button @click="handlePlayNow(release.title)" class="play-button">
                  <span>▶</span>
                </button>
              </div>
            </div>
            <div class="release-info">
              <h3>{{ release.title }}</h3>
              <p class="release-artist">{{ release.artist }}</p>
              <p class="release-date">{{ release.releaseDate }}</p>
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
        <p>Join millions of music lovers. Pay directly through your phone bill.</p>
        <button @click="handleSubscribe" class="primary-button">Get Premium</button>
        <p class="cta-note">No credit card needed. Cancel anytime.</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.music-page {
  min-height: 100vh;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  color: #1a1a1a;
  background-color: #f9fafb;
  padding-top: 64px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* Hero Section */
.hero-section {
  position: relative;
  height: 600px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
}

.hero-backdrop {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('https://images.pexels.com/photos/3944104/pexels-photo-3944104.jpeg');
  background-size: cover;
  background-position: center;
  filter: brightness(0.4);
  z-index: -1;
}

.hero-content {
  max-width: 800px;
  padding: 2rem;
  position: relative;
  z-index: 1;
}

.badge {
  display: inline-block;
  background: #9333ea;
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  letter-spacing: 1px;
}

.hero-section h1 {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  background: linear-gradient(to right, #9333ea, #c026d3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 2px 10px rgba(0,0,0,0.2);
}

.hero-section p {
  font-size: 1.5rem;
  margin-bottom: 2.5rem;
  color: rgba(255, 255, 255, 0.9);
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.primary-button {
  background: linear-gradient(to right, #9333ea, #c026d3);
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(147, 51, 234, 0.3);
}

.primary-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 25px rgba(147, 51, 234, 0.4);
}

.secondary-button {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  color: white;
  font-size: 1.1rem;
  padding: 1rem 2rem;
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.secondary-button:hover {
  background: rgba(255, 255, 255, 0.25);
}

.play-icon {
  font-size: 0.9rem;
}

/* Featured Playlists Section */
.playlists-section {
  padding: 5rem 0;
}

.playlists-section h2, 
.genres-section h2, 
.artists-section h2,
.releases-section h2,
.features-section h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  text-align: center;
  color: #1e293b;
  position: relative;
}

.playlists-section h2::after,
.genres-section h2::after,
.artists-section h2::after,
.releases-section h2::after,
.features-section h2::after {
  content: "";
  position: absolute;
  bottom: -0.75rem;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 4px;
  background: linear-gradient(to right, #9333ea, #c026d3);
  border-radius: 2px;
}

.playlists-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2.5rem;
}

.playlist-card {
  background: white;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.playlist-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
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

.playlist-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.3s ease;
}

.playlist-card:hover .playlist-overlay {
  opacity: 1;
}

.play-button {
  width: 60px;
  height: 60px;
  background: linear-gradient(to right, #9333ea, #c026d3);
  color: white;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(147, 51, 234, 0.3);
}

.play-button:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 20px rgba(147, 51, 234, 0.4);
}

.playlist-info {
  padding: 1.5rem;
}

.playlist-info h3 {
  font-size: 1.4rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.5rem;
}

.playlist-curator {
  color: #9333ea;
  font-weight: 500;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
}

.playlist-tracks {
  color: #64748b;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.playlist-description {
  color: #334155;
  font-size: 0.95rem;
  line-height: 1.6;
}

/* Genres Section */
.genres-section {
  padding: 5rem 0;
  background-color: #f3f4f6;
}

.genres-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1.5rem;
}

.genre-card {
  --genre-color: #9333ea;
  background: white;
  border-radius: 1rem;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  cursor: pointer;
}

.genre-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.1);
  background: linear-gradient(135deg, var(--genre-color) 0%, white 400%);
  color: white;
}

.genre-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  display: block;
}

.genre-card h3 {
  font-size: 1.1rem;
  font-weight: 600;
}

/* Artists Section */
.artists-section {
  padding: 5rem 0;
}

.artists-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2.5rem;
}

.artist-card {
  background: white;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.artist-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
}

.artist-image {
  position: relative;
  height: 250px;
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

.artist-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.3s ease;
}

.artist-card:hover .artist-overlay {
  opacity: 1;
}

.artist-info {
  padding: 1.5rem;
}

.artist-info h3 {
  font-size: 1.3rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.5rem;
}

.artist-genre {
  color: #9333ea;
  font-weight: 500;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
}

.artist-listeners {
  color: #64748b;
  font-size: 0.9rem;
}

/* New Releases Section */
.releases-section {
  padding: 5rem 0;
  background-color: #f3f4f6;
}

.releases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;
}

.release-card {
  background: white;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.release-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
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
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.3s ease;
}

.release-card:hover .release-overlay {
  opacity: 1;
}

.release-info {
  padding: 1.5rem;
}

.release-info h3 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.5rem;
}

.release-artist {
  color: #9333ea;
  font-weight: 500;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
}

.release-date {
  color: #64748b;
  font-size: 0.9rem;
}

/* Features Section */
.features-section {
  padding: 5rem 0;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2.5rem;
}

.feature-card {
  background: white;
  border-radius: 1.5rem;
  padding: 2rem;
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  font-size: 2.5rem;
  flex-shrink: 0;
}

.feature-content h3 {
  font-size: 1.3rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.75rem;
}

.feature-content p {
  color: #64748b;
  font-size: 0.95rem;
  line-height: 1.6;
}

/* CTA Section */
.cta-section {
  padding: 6rem 0;
  background: linear-gradient(135deg, #9333ea, #c026d3);
  color: white;
  text-align: center;
}

.cta-section h2 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: white;
}

.cta-section p {
  font-size: 1.3rem;
  margin-bottom: 2.5rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.cta-note {
  font-size: 1rem;
  opacity: 0.8;
  margin-top: 1.5rem;
}

/* Responsive Design */
@media (max-width: 992px) {
  .playlists-grid,
  .artists-grid {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
}

@media (max-width: 768px) {
  .hero-section {
    height: 500px;
  }
  
  .hero-section h1 {
    font-size: 2.5rem;
  }
  
  .hero-section p {
    font-size: 1.2rem;
  }
  
  .playlists-section h2, 
  .genres-section h2, 
  .artists-section h2,
  .releases-section h2,
  .features-section h2 {
    font-size: 2rem;
  }
  
  .hero-actions {
    flex-direction: column;
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }
  
  .feature-card {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 1.5rem;
  }
  
  .cta-section h2 {
    font-size: 2.2rem;
  }
  
  .cta-section p {
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .hero-section h1 {
    font-size: 2rem;
  }
  
  .primary-button,
  .secondary-button {
    font-size: 1rem;
    padding: 0.875rem 1.75rem;
  }
  
  .playlists-section h2, 
  .genres-section h2, 
  .artists-section h2,
  .releases-section h2,
  .features-section h2 {
    font-size: 1.75rem;
  }
  
  .playlist-info h3,
  .artist-info h3 {
    font-size: 1.2rem;
  }
  
  .feature-icon {
    font-size: 2rem;
  }
  
  .feature-content h3 {
    font-size: 1.2rem;
  }
}
</style>