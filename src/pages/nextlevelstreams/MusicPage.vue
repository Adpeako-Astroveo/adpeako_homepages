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
  { name: 'Country', icon: '🤠', popular: false },
  { name: 'Latin', icon: '💃', popular: false },
  { name: 'Metal', icon: '🤘', popular: false },
  { name: 'Folk', icon: '🪕', popular: false },
  { name: 'Reggae', icon: '🏝️', popular: false }
]);

const popularPlaylists = ref([
  {
    title: 'Summer Vibes 2025',
    description: 'The perfect soundtrack for sunny days and warm nights',
    image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg',
    tracks: 50,
    duration: '3h 15m',
    curator: 'NextLevelStreams Editorial'
  },
  {
    title: 'Training Mix',
    description: 'High-energy tracks to power your fitness routine',
    image: 'https://images.pexels.com/photos/28080/pexels-photo.jpg',
    tracks: 45,
    duration: '2h 50m',
    curator: 'Fitness Experts'
  },
  {
    title: 'Focus Flow',
    description: 'Concentration-enhancing music for productivity',
    image: 'https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg',
    tracks: 38,
    duration: '2h 40m',
    curator: 'Study Squad'
  },
  {
    title: 'Evening Chill',
    description: 'Relaxing melodies to help you unwind and de-stress',
    image: 'https://images.pexels.com/photos/1021876/pexels-photo-1021876.jpeg',
    tracks: 42,
    duration: '2h 55m',
    curator: 'Mood Masters'
  }
]);

const newReleases = ref([
  {
    title: 'Neon Dreams',
    artist: 'Electric Wave',
    image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg',
    releaseDate: 'June 15, 2025',
    genre: 'Electronic'
  },
  {
    title: 'Soul Searching',
    artist: 'Luna Eclipse',
    image: 'https://images.pexels.com/photos/1644616/pexels-photo-1644616.jpeg',
    releaseDate: 'June 12, 2025',
    genre: 'R&B'
  },
  {
    title: 'Urban Rhythm',
    artist: 'Metro Beat',
    image: 'https://images.pexels.com/photos/3981103/pexels-photo-3981103.jpeg',
    releaseDate: 'June 10, 2025',
    genre: 'Hip Hop'
  },
  {
    title: 'Mountain Echo',
    artist: 'The Wilderness',
    image: 'https://images.pexels.com/photos/5618463/pexels-photo-5618463.jpeg',
    releaseDate: 'June 8, 2025',
    genre: 'Folk'
  },
  {
    title: 'Solar Flare',
    artist: 'Cosmic Pulse',
    image: 'https://images.pexels.com/photos/2111015/pexels-photo-2111015.jpeg',
    releaseDate: 'June 5, 2025',
    genre: 'Electronic'
  },
  {
    title: 'Golden Era',
    artist: 'Retro Kings',
    image: 'https://images.pexels.com/photos/2258536/pexels-photo-2258536.jpeg',
    releaseDate: 'June 1, 2025',
    genre: 'Pop'
  }
]);

const features = ref([
  {
    title: 'Hi-Fi Audio',
    description: 'Crystal clear sound with up to 320kbps streaming quality',
    icon: '🎧'
  },
  {
    title: 'Offline Downloads',
    description: 'Save music to listen when you\'re not connected',
    icon: '📥'
  },
  {
    title: 'Smart Playlists',
    description: 'AI-powered recommendations based on your taste',
    icon: '🤖'
  },
  {
    title: 'Lyrics Support',
    description: 'Real-time synchronized lyrics for your favorite songs',
    icon: '🎤'
  },
  {
    title: 'Audio Equalizer',
    description: 'Fine-tune your sound with professional audio tools',
    icon: '🎛️'
  },
  {
    title: 'Cross-Device Sync',
    description: 'Seamlessly switch between your devices while listening',
    icon: '🔄'
  }
]);

const testimonials = ref([
  {
    text: "The audio quality on NextLevelStreams is exceptional. I've discovered so many new artists through their smart playlists!",
    author: "Alex K.",
    location: "Berlin"
  },
  {
    text: "Being able to download my entire library for offline listening has been a game-changer for my commute and travel.",
    author: "Sophia L.",
    location: "Paris"
  },
  {
    text: "The synchronized lyrics feature is amazing! I finally know what they're saying in my favorite songs.",
    author: "Marco T.",
    location: "Rome"
  }
]);

const currentTestimonialIndex = ref(0);

const nextTestimonial = () => {
  currentTestimonialIndex.value = (currentTestimonialIndex.value + 1) % testimonials.value.length;
};

const prevTestimonial = () => {
  currentTestimonialIndex.value = (currentTestimonialIndex.value - 1 + testimonials.value.length) % testimonials.value.length;
};

const navigateToLogin = () => {
  router.push('/login');
};
</script>

<template>
  <div class="music-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Unlimited Music Streaming</h1>
        <p class="subtitle">Over 70 million songs in crystal-clear sound quality</p>
        <button class="cta-button" @click="navigateToLogin">Start Listening</button>
      </div>
      <div class="hero-visual">
        <div class="music-notes note-1">♪</div>
        <div class="music-notes note-2">♫</div>
        <div class="music-notes note-3">♬</div>
        <div class="hero-device">
          <div class="device-screen">
            <div class="album-art"></div>
            <div class="player-controls">
              <div class="control-dot"></div>
              <div class="control-line"></div>
              <div class="control-dot"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Genres Section -->
    <section class="genres-section">
      <div class="section-container">
        <h2>Explore Music Genres</h2>
        <div class="genres-grid">
          <div v-for="genre in genres" :key="genre.name" 
               class="genre-item" :class="{ 'popular': genre.popular }">
            <span class="genre-icon">{{ genre.icon }}</span>
            <span class="genre-name">{{ genre.name }}</span>
            <span v-if="genre.popular" class="popular-tag">Popular</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Playlists Section -->
    <section class="playlists-section">
      <div class="section-container">
        <h2>Featured Playlists</h2>
        <div class="playlists-grid">
          <div v-for="playlist in popularPlaylists" :key="playlist.title" class="playlist-card">
            <div class="playlist-image">
              <img :src="playlist.image" :alt="playlist.title">
              <div class="playlist-overlay">
                <button class="play-button" @click="navigateToLogin">▶</button>
              </div>
            </div>
            <div class="playlist-info">
              <h3>{{ playlist.title }}</h3>
              <p class="playlist-desc">{{ playlist.description }}</p>
              <div class="playlist-meta">
                <span>{{ playlist.tracks }} tracks · {{ playlist.duration }}</span>
                <span class="playlist-curator">By {{ playlist.curator }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- New Releases -->
    <section class="releases-section">
      <div class="section-container">
        <h2>New Releases</h2>
        <div class="releases-grid">
          <div v-for="release in newReleases" :key="release.title" class="release-card">
            <div class="release-image">
              <img :src="release.image" :alt="release.title">
              <div class="release-overlay">
                <button class="play-button small" @click="navigateToLogin">▶</button>
              </div>
              <div class="new-badge">NEW</div>
            </div>
            <div class="release-info">
              <h3>{{ release.title }}</h3>
              <p class="artist-name">{{ release.artist }}</p>
              <div class="release-bottom">
                <span class="release-genre">{{ release.genre }}</span>
                <span class="release-date">{{ release.releaseDate }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <div class="section-container">
        <h2>Premium Music Features</h2>
        <div class="features-grid">
          <div v-for="feature in features" :key="feature.title" class="feature-card">
            <div class="feature-icon">{{ feature.icon }}</div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="testimonials-section">
      <div class="section-container">
        <h2>What Music Lovers Say</h2>
        <div class="testimonials-container">
          <button @click="prevTestimonial" class="nav-button prev">❮</button>
          <div class="testimonial">
            <p class="testimonial-text">"{{ testimonials[currentTestimonialIndex].text }}"</p>
            <div class="testimonial-author">
              <p class="author-name">{{ testimonials[currentTestimonialIndex].author }}</p>
              <p class="author-location">{{ testimonials[currentTestimonialIndex].location }}</p>
            </div>
          </div>
          <button @click="nextTestimonial" class="nav-button next">❯</button>
        </div>
        <div class="testimonial-dots">
          <span v-for="(_, index) in testimonials" :key="index" 
                class="dot" :class="{ active: index === currentTestimonialIndex }"
                @click="currentTestimonialIndex = index"></span>
        </div>
      </div>
    </section>

    <!-- Phone Billing Section -->
    <section class="billing-section">
      <div class="section-container">
        <div class="billing-grid">
          <div class="billing-content">
            <h2>Simple Phone Billing</h2>
            <p>Enjoy premium music with convenient payment through your mobile phone bill - no credit card required.</p>
            
            <div class="pricing-box">
              <div class="pricing-header">
                <h3>Music Premium</h3>
                <div class="pricing-amount">
                  <span class="price">€9.99</span>
                  <span class="period">/month</span>
                </div>
              </div>
              <ul class="pricing-features">
                <li><span class="check-icon">✓</span> Unlimited, ad-free streaming</li>
                <li><span class="check-icon">✓</span> HD audio quality (up to 320 kbps)</li>
                <li><span class="check-icon">✓</span> Download music for offline listening</li>
                <li><span class="check-icon">✓</span> Synchronized lyrics</li>
                <li><span class="check-icon">✓</span> Cancel anytime</li>
              </ul>
              <button class="pricing-button" @click="navigateToLogin">Subscribe Now</button>
            </div>
          </div>
          <div class="billing-visual">
            <div class="phone-visual">
              <div class="phone-screen">
                <div class="payment-confirmation">Payment Confirmed</div>
                <div class="payment-details">
                  <div class="payment-logo"></div>
                  <div class="payment-info">
                    <div class="payment-service">NextLevelStreams Music</div>
                    <div class="payment-amount">€9.99 / month</div>
                    <div class="payment-method">Charged to your phone bill</div>
                  </div>
                </div>
                <div class="confirmation-icon">✓</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-container">
        <h2>Ready to Elevate Your Music Experience?</h2>
        <p>Join millions enjoying unlimited music with NextLevelStreams</p>
        <button class="cta-button large" @click="navigateToLogin">Start Listening Now</button>
      </div>
    </section>
  </div>
</template>

<style scoped>
.music-page {
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  color: #1F2937;
  overflow-x: hidden;
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
  color: white;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 5rem 2rem;
  position: relative;
  overflow: hidden;
  min-height: 80vh;
}

.hero-content {
  max-width: 600px;
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

.music-notes {
  position: absolute;
  color: rgba(255, 255, 255, 0.6);
  font-size: 5rem;
  animation: float 6s infinite ease-in-out;
  z-index: 0;
}

.note-1 {
  top: 30%;
  left: 10%;
  animation-delay: 0s;
}

.note-2 {
  top: 60%;
  left: 25%;
  animation-delay: 1s;
  font-size: 6rem;
}

.note-3 {
  top: 40%;
  right: 20%;
  animation-delay: 2s;
  font-size: 4.5rem;
}

@keyframes float {
  0% {
    transform: translateY(0px) rotate(0deg) scale(1);
  }
  50% {
    transform: translateY(-15px) rotate(5deg) scale(1.1);
  }
  100% {
    transform: translateY(0px) rotate(0deg) scale(1);
  }
}

.hero-device {
  width: 250px;
  height: 400px;
  background: #2D3748;
  border-radius: 30px;
  padding: 10px;
  position: relative;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
  z-index: 2;
}

.device-screen {
  width: 100%;
  height: 100%;
  background: #1A202C;
  border-radius: 25px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.album-art {
  width: 100%;
  flex: 1;
  background: linear-gradient(45deg, #A78BFA, #C4B5FD);
  border-radius: 15px;
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.album-art::before {
  content: '';
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  top: 20px;
  left: 20px;
}

.album-art::after {
  content: '';
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  bottom: -30px;
  right: -30px;
}

.player-controls {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.control-dot {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #A78BFA;
}

.control-line {
  flex: 1;
  height: 5px;
  background: #4B5563;
  margin: 0 15px;
  border-radius: 5px;
  position: relative;
}

.control-line::before {
  content: '';
  position: absolute;
  width: 40%;
  height: 100%;
  background: #A78BFA;
  border-radius: 5px;
}

/* Genres Section */
.genres-section {
  padding: 6rem 0;
  background: white;
}

.genres-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1.5rem;
}

.genre-item {
  background: #F9FAFB;
  border-radius: 1rem;
  padding: 1.5rem 1rem;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.genre-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #6D28D9 0%, #A78BFA 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 0;
}

.genre-item:hover::before {
  opacity: 1;
}

.genre-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.genre-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  display: block;
  position: relative;
  z-index: 1;
}

.genre-name {
  font-weight: 600;
  position: relative;
  z-index: 1;
  transition: color 0.3s ease;
}

.genre-item:hover .genre-name {
  color: white;
}

.genre-item.popular {
  border: 2px solid #6D28D9;
}

.popular-tag {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #6D28D9;
  color: white;
  font-size: 0.7rem;
  padding: 0.25rem 0.5rem;
  border-radius: 10px;
  font-weight: 600;
  z-index: 1;
}

/* Playlists Section */
.playlists-section {
  padding: 6rem 0;
  background: #F9FAFB;
}

.playlists-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
}

.playlist-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.playlist-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
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
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.playlist-card:hover .playlist-overlay {
  opacity: 1;
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

.play-button.small {
  width: 50px;
  height: 50px;
  font-size: 1.5rem;
}

.playlist-info {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.playlist-info h3 {
  color: #1F2937;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.playlist-desc {
  color: #4B5563;
  margin-bottom: 1.5rem;
  line-height: 1.5;
  flex: 1;
}

.playlist-meta {
  color: #6B7280;
  font-size: 0.9rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.playlist-curator {
  font-style: italic;
}

/* New Releases */
.releases-section {
  padding: 6rem 0;
  background: white;
}

.releases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;
}

.release-card {
  background: #F9FAFB;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.release-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.release-image {
  position: relative;
  aspect-ratio: 1;
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
  background: rgba(0, 0, 0, 0.4);
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
  background: #6D28D9;
  color: white;
  font-size: 0.7rem;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  font-weight: 600;
}

.release-info {
  padding: 1.2rem;
}

.release-info h3 {
  color: #1F2937;
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.artist-name {
  color: #4B5563;
  margin-bottom: 0.8rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.release-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
}

.release-genre {
  color: #6D28D9;
  font-weight: 500;
}

.release-date {
  color: #6B7280;
}

/* Features Section */
.features-section {
  padding: 6rem 0;
  background: #F9FAFB;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: white;
  padding: 2.5rem;
  border-radius: 1rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  text-align: center;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  display: block;
}

.feature-card h3 {
  color: #6D28D9;
  font-size: 1.4rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.feature-card p {
  color: #4B5563;
  line-height: 1.6;
}

/* Testimonials Section */
.testimonials-section {
  padding: 6rem 0;
  background: white;
}

.testimonials-container {
  display: flex;
  align-items: center;
  max-width: 900px;
  margin: 0 auto;
}

.testimonial {
  background: #F9FAFB;
  padding: 3rem;
  border-radius: 1rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  flex: 1;
}

.testimonial-text {
  font-size: 1.3rem;
  font-style: italic;
  color: #1F2937;
  line-height: 1.7;
  margin-bottom: 2rem;
  position: relative;
}

.testimonial-text::before {
  content: '"';
  position: absolute;
  left: -20px;
  top: -10px;
  font-size: 3rem;
  color: #A78BFA;
  opacity: 0.3;
  font-family: Georgia, serif;
}

.testimonial-author {
  text-align: right;
}

.author-name {
  font-weight: 700;
  color: #6D28D9;
  margin-bottom: 0.2rem;
}

.author-location {
  color: #6B7280;
}

.nav-button {
  background: #6D28D9;
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  cursor: pointer;
  margin: 0 2rem;
  border: none;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.nav-button:hover {
  background: #5B21B6;
  transform: scale(1.1);
}

.testimonial-dots {
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  margin-top: 2rem;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #E5E7EB;
  cursor: pointer;
  transition: all 0.3s ease;
}

.dot.active {
  background: #6D28D9;
  transform: scale(1.2);
}

/* Billing Section */
.billing-section {
  padding: 6rem 0;
  background: #F9FAFB;
  position: relative;
  overflow: hidden;
}

.billing-section::before {
  content: '';
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: rgba(167, 139, 250, 0.05);
  top: -250px;
  left: -250px;
}

.billing-section::after {
  content: '';
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: rgba(167, 139, 250, 0.05);
  bottom: -150px;
  right: -150px;
}

.billing-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;
}

.billing-content h2 {
  text-align: left;
  margin-bottom: 1.5rem;
}

.billing-content p {
  margin-bottom: 2.5rem;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #4B5563;
}

.pricing-box {
  background: white;
  padding: 2.5rem;
  border-radius: 1.5rem;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.05);
}

.pricing-header {
  margin-bottom: 2rem;
  text-align: center;
}

.pricing-header h3 {
  color: #6D28D9;
  font-size: 1.8rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.pricing-amount {
  margin-bottom: 0.5rem;
}

.price {
  font-size: 3rem;
  font-weight: 800;
  color: #1F2937;
}

.period {
  font-size: 1.2rem;
  color: #6B7280;
}

.pricing-features {
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
}

.pricing-features li {
  padding: 0.75rem 0;
  border-bottom: 1px solid #E5E7EB;
  display: flex;
  align-items: center;
}

.pricing-features li:last-child {
  border-bottom: none;
}

.check-icon {
  color: #6D28D9;
  margin-right: 1rem;
  font-weight: bold;
}

.pricing-button {
  background: #6D28D9;
  color: white;
  padding: 1rem;
  width: 100%;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.pricing-button:hover {
  background: #5B21B6;
  transform: translateY(-3px);
}

.phone-visual {
  width: 280px;
  height: 550px;
  background: #1F2937;
  border-radius: 40px;
  padding: 15px;
  margin: 0 auto;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2);
  position: relative;
}

.phone-visual::before {
  content: '';
  position: absolute;
  width: 150px;
  height: 30px;
  background: #1F2937;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  z-index: 2;
}

.phone-screen {
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 30px;
  overflow: hidden;
  padding: 2rem;
  display: flex;
  flex-direction: column;
}

.payment-confirmation {
  font-size: 1.5rem;
  font-weight: 700;
  color: #6D28D9;
  text-align: center;
  margin-bottom: 2rem;
}

.payment-details {
  display: flex;
  background: #F9FAFB;
  padding: 1.5rem;
  border-radius: 1rem;
  margin-bottom: 2rem;
}

.payment-logo {
  width: 60px;
  height: 60px;
  background: #6D28D9;
  border-radius: 15px;
  margin-right: 1rem;
  flex-shrink: 0;
}

.payment-info {
  flex: 1;
}

.payment-service {
  font-weight: 700;
  color: #1F2937;
  margin-bottom: 0.5rem;
}

.payment-amount {
  color: #6D28D9;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.payment-method {
  color: #6B7280;
  font-size: 0.9rem;
}

.confirmation-icon {
  width: 80px;
  height: 80px;
  background: #10B981;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  margin: auto auto 0;
  box-shadow: 0 10px 20px rgba(16, 185, 129, 0.2);
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
@media (max-width: 1024px) {
  .hero {
    grid-template-columns: 1fr;
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

  .billing-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .billing-content {
    text-align: center;
  }

  .billing-content h2 {
    text-align: center;
  }

  .pricing-box {
    max-width: 500px;
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.8rem;
  }

  .subtitle {
    font-size: 1.3rem;
  }

  .playlists-grid, .features-grid {
    grid-template-columns: 1fr;
  }

  .testimonials-container {
    flex-direction: column;
    gap: 2rem;
  }

  .nav-button {
    margin: 0;
  }

  .testimonial {
    padding: 2rem;
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

  .genres-grid {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }

  .releases-grid {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
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

  .testimonial-text {
    font-size: 1.1rem;
  }

  .phone-visual {
    width: 240px;
    height: 480px;
  }

  .payment-details {
    padding: 1rem;
  }

  .payment-logo {
    width: 50px;
    height: 50px;
  }

  .confirmation-icon {
    width: 60px;
    height: 60px;
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .hero h1 {
    font-size: 2.2rem;
  }

  .hero-device {
    width: 220px;
    height: 320px;
  }

  .genres-grid {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  }

  .playlist-image {
    height: 150px;
  }

  .pricing-box {
    padding: 1.5rem;
  }

  .price {
    font-size: 2.5rem;
  }

  .cta-section h2 {
    font-size: 1.8rem;
  }
}
</style>