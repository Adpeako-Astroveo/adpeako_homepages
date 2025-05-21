<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Music genres
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

// Featured playlists
const featuredPlaylists = ref([
  {
    title: 'Summer Vibes 2025',
    description: 'The ultimate soundtrack for sunny days and warm nights',
    image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg',
    tracks: 52,
    duration: '3h 24m'
  },
  {
    title: 'Workout Motivation',
    description: 'High-energy tracks to power your fitness sessions',
    image: 'https://images.pexels.com/photos/28080/pexels-photo.jpg',
    tracks: 45,
    duration: '2h 50m'
  },
  {
    title: 'Chill & Focus',
    description: 'Concentration-enhancing music for work and study',
    image: 'https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg',
    tracks: 38,
    duration: '2h
40m'
  },
  {
    title: 'Throwback Classics',
    description: 'Nostalgic hits from the past decades',
    image: 'https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg',
    tracks: 65,
    duration: '4h 15m'
  }
]);

// New releases
const newReleases = ref([
  {
    title: 'Electric Dreams',
    artist: 'Synthwave Collective',
    image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg',
    releaseDate: 'May 15, 2025',
    genre: 'Electronic'
  },
  {
    title: 'Soul Session',
    artist: 'Harmony Makers',
    image: 'https://images.pexels.com/photos/1644616/pexels-photo-1644616.jpeg',
    releaseDate: 'May 12, 2025',
    genre: 'R&B'
  },
  {
    title: 'Urban Rhythm',
    artist: 'Metro Beats',
    image: 'https://images.pexels.com/photos/3981103/pexels-photo-3981103.jpeg',
    releaseDate: 'May 10, 2025',
    genre: 'Hip Hop'
  },
  {
    title: 'Mountain Echo',
    artist: 'Forest Folk',
    image: 'https://images.pexels.com/photos/5618463/pexels-photo-5618463.jpeg',
    releaseDate: 'May 8, 2025',
    genre: 'Folk'
  },
  {
    title: 'Digital Pulse',
    artist: 'Cyber Wave',
    image: 'https://images.pexels.com/photos/2111015/pexels-photo-2111015.jpeg',
    releaseDate: 'May 5, 2025',
    genre: 'Electronic'
  },
  {
    title: 'Sunset Memories',
    artist: 'Beach Sounds',
    image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg',
    releaseDate: 'May 1, 2025',
    genre: 'Pop'
  }
]);

// Premium music features
const features = ref([
  {
    title: 'Hi-Fi Audio Quality',
    description: 'Crystal clear sound with up to 320kbps streaming quality',
    icon: '🎵',
    highlight: true
  },
  {
    title: 'Offline Listening',
    description: 'Download tracks and playlists to listen without internet',
    icon: '📥',
    highlight: true
  },
  {
    title: 'Personalized Playlists',
    description: 'AI-generated recommendations based on your taste',
    icon: '🤖',
    highlight: true
  },
  {
    title: 'Synchronized Lyrics',
    description: 'Sing along with real-time lyrics for millions of songs',
    icon: '🎤',
    highlight: false
  }
]);

// Testimonials
const testimonials = ref([
  {
    text: "The audio quality on Timber Content is exceptional. I've discovered so many new artists through their personalized playlists!",
    author: "Sarah K.",
    location: "London"
  },
  {
    text: "Being able to download music for my commute has been a game-changer. The interface is intuitive and the recommendations are spot on.",
    author: "David L.",
    location: "Paris"
  },
  {
    text: "I love having access to lyrics for all my favorite songs. The seamless integration with my car audio system is another huge plus.",
    author: "Marco R.",
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

// Music subscription plan
const subscriptionPlan = ref({
  title: 'Music Premium',
  price: '€9.99',
  period: 'per month',
  features: [
    'Unlimited streaming',
    'HD audio quality',
    'Ad-free experience',
    'Offline downloads',
    'Unlimited skips',
    'Synchronized lyrics'
  ],
  billingText: 'Conveniently billed to your phone - no credit card needed'
});

const navigateToLogin = () => {
  router.push('/login');
};
</script>

<template>
  <div class="music-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-container">
        <div class="hero-content">
          <h1>Unlimited Music Streaming</h1>
          <p class="hero-subtitle">Over 70 million songs in crystal-clear sound quality</p>
          <button class="cta-button" @click="navigateToLogin">Start Listening</button>
        </div>
        <div class="hero-visuals">
          <div class="music-note note-1">♪</div>
          <div class="music-note note-2">♫</div>
          <div class="music-note note-3">🎵</div>
          <div class="hero-player">
            <div class="player-circle"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Genres Section -->
    <section class="genres-section">
      <div class="section-container">
        <div class="section-header">
          <h2>Explore Music Genres</h2>
          <p>Discover new sounds across every style of music</p>
        </div>
        <div class="genres-grid">
          <div v-for="genre in genres" 
               :key="genre.name" 
               :class="['genre-item', { 'popular': genre.popular }]">
            <div class="genre-icon">{{ genre.icon }}</div>
            <span class="genre-name">{{ genre.name }}</span>
            <span v-if="genre.popular" class="popular-tag">Popular</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Playlists Section -->
    <section class="playlists-section">
      <div class="section-container">
        <div class="section-header">
          <h2>Featured Playlists</h2>
          <p>Curated collections for every mood and moment</p>
        </div>
        <div class="playlists-grid">
          <div v-for="playlist in featuredPlaylists" 
               :key="playlist.title" 
               class="playlist-card">
            <div class="playlist-image">
              <img :src="playlist.image" :alt="playlist.title">
              <div class="playlist-overlay">
                <button class="play-button" @click="navigateToLogin">▶</button>
              </div>
            </div>
            <div class="playlist-info">
              <h3>{{ playlist.title }}</h3>
              <p class="playlist-description">{{ playlist.description }}</p>
              <div class="playlist-meta">
                <span>{{ playlist.tracks }} songs</span>
                <span>{{ playlist.duration }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- New Releases Section -->
    <section class="releases-section">
      <div class="section-container">
        <div class="section-header">
          <h2>New Releases</h2>
          <p>Fresh music added to our library every week</p>
        </div>
        <div class="releases-grid">
          <div v-for="album in newReleases" 
               :key="album.title" 
               class="album-card">
            <div class="album-image">
              <img :src="album.image" :alt="album.title">
              <div class="album-overlay">
                <button class="play-button small" @click="navigateToLogin">▶</button>
              </div>
            </div>
            <div class="album-info">
              <h3>{{ album.title }}</h3>
              <p class="artist">{{ album.artist }}</p>
              <div class="album-meta">
                <span class="genre">{{ album.genre }}</span>
                <span class="release-date">{{ album.releaseDate }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <div class="section-container">
        <div class="section-header">
          <h2>Premium Music Features</h2>
          <p>Elevate your listening experience with advanced features</p>
        </div>
        <div class="features-grid">
          <div v-for="feature in features" 
               :key="feature.title" 
               :class="['feature-card', { 'highlight': feature.highlight }]">
            <div class="feature-icon">{{ feature.icon }}</div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials-section">
      <div class="section-container">
        <div class="section-header">
          <h2>What Our Listeners Say</h2>
        </div>
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
        <div class="testimonial-indicators">
          <span v-for="(_, index) in testimonials" 
                :key="index" 
                class="indicator" 
                :class="{ active: index === currentTestimonialIndex }"
                @click="currentTestimonialIndex = index"></span>
        </div>
      </div>
    </section>

    <!-- Subscription Section -->
    <section class="subscription-section">
      <div class="section-container">
        <div class="subscription-card">
          <h2>{{ subscriptionPlan.title }}</h2>
          <div class="price">
            <span class="amount">{{ subscriptionPlan.price }}</span>
            <span class="period">{{ subscriptionPlan.period }}</span>
          </div>
          <ul class="subscription-features">
            <li v-for="feature in subscriptionPlan.features" 
                :key="feature">
              <span class="check">✓</span> {{ feature }}
            </li>
          </ul>
          <p class="billing-note">{{ subscriptionPlan.billingText }}</p>
          <button class="subscription-button" @click="navigateToLogin">Start Your Trial</button>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-container">
        <h2>Ready to Dive Into Unlimited Music?</h2>
        <p>Join millions of music lovers enjoying premium streaming with Timber Content</p>
        <button class="cta-button" @click="navigateToLogin">Get Started Now</button>
      </div>
    </section>
  </div>
</template>

<style scoped>
.music-page {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: #1F2937;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #3B52A5 0%, #4C6EF5 100%);
  color: white;
  padding: 8rem 0 6rem;
  position: relative;
  overflow: hidden;
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 0 2rem;
}

.hero-content {
  z-index: 2;
}

.hero h1 {
  font-size: 4rem;
  font-weight: 900;
  margin-bottom: 1.5rem;
  line-height: 1.1;
}

.hero-subtitle {
  font-size: 1.5rem;
  opacity: 0.9;
  margin-bottom: 2.5rem;
  line-height: 1.5;
  max-width: 600px;
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
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.hero-visuals {
  position: relative;
  z-index: 1;
  height: 400px;
}

.music-note {
  position: absolute;
  color: rgba(255, 255, 255, 0.7);
  font-size: 5rem;
  animation: float 6s infinite ease-in-out;
}

.note-1 {
  top: 20%;
  right: 30%;
  animation-delay: 0s;
}

.note-2 {
  top: 60%;
  right: 10%;
  animation-delay: 2s;
  font-size: 6rem;
}

.note-3 {
  top: 30%;
  right: 60%;
  animation-delay: 4s;
  font-size: 4rem;
}

@keyframes float {
  0% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(10deg);
  }
  100% {
    transform: translateY(0px) rotate(0deg);
  }
}

.hero-player {
  position: relative;
  width: 300px;
  height: 300px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
  animation: pulse 4s infinite ease-in-out;
}

.player-circle {
  width: 120px;
  height: 120px;
  background: white;
  border-radius: 50%;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

@keyframes pulse {
  0% {
    transform: scale(1);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 30px 70px rgba(0, 0, 0, 0.4);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
  }
}

/* Section Containers */
.section-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 6rem 2rem;
}

.section-header {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;
}

.section-header h2 {
  font-size: 3rem;
  color: #3B52A5;
  margin-bottom: 1rem;
  font-weight: 800;
}

.section-header p {
  font-size: 1.2rem;
  color: #6B7280;
}

/* Genres Section */
.genres-section {
  background: #F9FAFB;
}

.genres-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 2rem;
}

.genre-item {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  position: relative;
  transition: transform 0.3s ease;
}

.genre-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.genre-item.popular {
  border: 2px solid #3B52A5;
}

.genre-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.genre-name {
  font-weight: 600;
  color: #4B5563;
}

.popular-tag {
  position: absolute;
  top: -10px;
  right: -10px;
  background: #3B52A5;
  color: white;
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 20px;
  font-weight: 600;
}

/* Playlists Section */
.playlists-section {
  background: white;
}

.playlists-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
}

.playlist-card {
  background: #F9FAFB;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.playlist-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
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
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.play-button:hover {
  transform: scale(1.1);
  background: #4C6EF5;
}

.play-button.small {
  width: 45px;
  height: 45px;
  font-size: 1.4rem;
}

.playlist-info {
  padding: 1.5rem;
}

.playlist-info h3 {
  font-size: 1.3rem;
  color: #1F2937;
  margin-bottom: 0.5rem;
}

.playlist-description {
  color: #6B7280;
  margin-bottom: 1rem;
  font-size: 0.95rem;
  line-height: 1.5;
}

.playlist-meta {
  display: flex;
  justify-content: space-between;
  color: #9CA3AF;
  font-size: 0.85rem;
}

/* New Releases Section */
.releases-section {
  background: #F3F4F6;
}

.releases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;
}

.album-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.album-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.album-image {
  position: relative;
  aspect-ratio: 1/1;
  overflow: hidden;
}

.album-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.album-card:hover .album-image img {
  transform: scale(1.05);
}

.album-overlay {
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

.album-card:hover .album-overlay {
  opacity: 1;
}

.album-info {
  padding: 1.2rem;
}

.album-info h3 {
  font-size: 1.1rem;
  color: #1F2937;
  margin-bottom: 0.3rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.artist {
  color: #6B7280;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.album-meta {
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
}

.genre {
  color: #3B52A5;
  font-weight: 600;
}

.release-date {
  color: #9CA3AF;
}

/* Features Section */
.features-section {
  background: white;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: #F9FAFB;
  padding: 2.5rem 2rem;
  border-radius: 16px;
  text-align: center;
  transition: transform 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.feature-card.highlight {
  border: 2px solid #3B52A5;
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  display: block;
}

.feature-card h3 {
  font-size: 1.3rem;
  color: #3B52A5;
  margin-bottom: 1rem;
}

.feature-card p {
  color: #6B7280;
  line-height: 1.6;
}

/* Testimonials Section */
.testimonials-section {
  background: #F3F4F6;
}

.testimonials-container {
  display: flex;
  align-items: center;
  max-width: 900px;
  margin: 0 auto;
}

.testimonial {
  background: white;
  padding: 3rem;
  border-radius: 16px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  flex: 1;
}

.testimonial-text {
  font-size: 1.25rem;
  font-style: italic;
  color: #4B5563;
  line-height: 1.7;
  margin-bottom: 2rem;
  position: relative;
}

.testimonial-text::before {
  content: '"';
  position: absolute;
  top: -1.5rem;
  left: -1.5rem;
  color: #E5E7EB;
  font-size: 5rem;
  font-family: Georgia, serif;
  opacity: 0.5;
  line-height: 1;
}

.testimonial-author {
  text-align: right;
}

.author-name {
  font-weight: 700;
  color: #3B52A5;
  margin-bottom: 0.2rem;
}

.author-location {
  color: #9CA3AF;
  font-size: 0.9rem;
}

.nav-button {
  background: #3B52A5;
  color: white;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  cursor: pointer;
  margin: 0 1.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.nav-button:hover {
  background: #4C6EF5;
  transform: scale(1.1);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.testimonial-indicators {
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  margin-top: 2rem;
}

.indicator {
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  background: #D1D5DB;
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator.active {
  background: #3B52A5;
  transform: scale(1.2);
}

/* Subscription Section */
.subscription-section {
  background: white;
  padding: 6rem 2rem;
}

.subscription-card {
  max-width: 500px;
  margin: 0 auto;
  background: #F9FAFB;
  padding: 3rem;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.subscription-card h2 {
  font-size: 2.5rem;
  color: #3B52A5;
  margin-bottom: 2rem;
  font-weight: 800;
}

.price {
  margin-bottom: 2.5rem;
}

.amount {
  font-size: 4rem;
  font-weight: 800;
  color: #1F2937;
}

.period {
  font-size: 1.3rem;
  color: #6B7280;
}

.subscription-features {
  list-style: none;
  padding: 0;
  margin-bottom: 2.5rem;
  text-align: left;
}

.subscription-features li {
  padding: 0.75rem 0;
  color: #4B5563;
  display: flex;
  align-items: flex-start;
  border-bottom: 1px solid #E5E7EB;
}

.subscription-features li:last-child {
  border-bottom: none;
}

.check {
  color: #3B52A5;
  margin-right: 1rem;
  font-weight: bold;
}

.billing-note {
  font-style: italic;
  color: #6B7280;
  margin-bottom: 2.5rem;
}

.subscription-button {
  background: #3B52A5;
  color: white;
  width: 100%;
  padding: 1.2rem;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.subscription-button:hover {
  background: #4C6EF5;
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(59, 82, 165, 0.2);
}

/* CTA Section */
.cta-section {
  background: linear-gradient(135deg, #3B52A5 0%, #4C6EF5 100%);
  color: white;
  text-align: center;
  padding: 6rem 2rem;
}

.cta-container {
  max-width: 800px;
  margin: 0 auto;
}

.cta-section h2 {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  font-weight: 800;
}

.cta-section p {
  font-size: 1.3rem;
  margin-bottom: 2.5rem;
  opacity: 0.9;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.cta-button {
  background: white;
  color: #3B52A5;
}

/* Responsive Styles */
@media (max-width: 1024px) {
  .hero-container {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .hero-content {
    padding-bottom: 3rem;
  }
  
  .hero-subtitle {
    margin: 0 auto 2.5rem;
    max-width: 600px;
  }
  
  .hero-player {
    width: 200px;
    height: 200px;
  }
  
  .player-circle {
    width: 80px;
    height: 80px;
  }
  
  .features-grid {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  }
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 3rem;
  }
  
  .hero-subtitle {
    font-size: 1.3rem;
  }
  
  .section-container {
    padding: 4rem 2rem;
  }
  
  .section-header h2 {
    font-size: 2.5rem;
  }
  
  .playlists-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  
  .genres-grid {
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  }
  
  .testimonials-container {
    flex-direction: column;
  }
  
  .nav-button {
    margin: 1.5rem 0;
  }
  
  .subscription-card {
    padding: 2.5rem 2rem;
  }
}

@media (max-width: 640px) {
  .hero h1 {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
  
  .playlists-grid, .releases-grid {
    grid-template-columns: 1fr;
  }
  
  .genres-grid {
    grid-template-columns: 1fr 1fr;
  }
  
  .section-header h2 {
    font-size: 2rem;
  }
  
  .testimonial {
    padding: 2rem;
  }
  
  .testimonial-text {
    font-size: 1.1rem;
  }
  
  .subscription-card h2 {
    font-size: 2rem;
  }
  
  .subscription-card {
    padding: 2rem 1.5rem;
  }
  
  .amount {
    font-size: 3rem;
  }
  
  .cta-section h2 {
    font-size: 2.2rem;
  }
}
</style>