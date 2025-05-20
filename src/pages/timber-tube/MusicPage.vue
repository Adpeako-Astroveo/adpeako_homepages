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

const featuredPlaylists = ref([
  {
    title: 'Summer Anthems 2025',
    description: 'The hottest tracks to soundtrack your summer',
    image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg',
    tracks: 50,
    duration: '3h 12m'
  },
  {
    title: 'Workout Motivation',
    description: 'High-energy beats to power your fitness routine',
    image: 'https://images.pexels.com/photos/136404/pexels-photo-136404.jpeg',
    tracks: 45,
    duration: '2h 50m'
  },
  {
    title: 'Focus & Concentrate',
    description: 'Instrumental tracks to boost productivity',
    image: 'https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg',
    tracks: 38,
    duration: '2h 40m'
  },
  {
    title: 'Classic Road Trip',
    description: 'Timeless hits perfect for long drives',
    image: 'https://images.pexels.com/photos/1252693/pexels-photo-1252693.jpeg',
    tracks: 65,
    duration: '4h 15m'
  }
]);

const newAlbums = ref([
  {
    title: 'Neon Dreams',
    artist: 'Synthwave Collective',
    image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg',
    releaseDate: 'May 15, 2025',
    genre: 'Electronic'
  },
  {
    title: 'Acoustic Sessions',
    artist: 'Emma Winters',
    image: 'https://images.pexels.com/photos/1644616/pexels-photo-1644616.jpeg',
    releaseDate: 'May 12, 2025',
    genre: 'Folk'
  },
  {
    title: 'Urban Rhythm',
    artist: 'The Metro Crew',
    image: 'https://images.pexels.com/photos/3388088/pexels-photo-3388088.jpeg',
    releaseDate: 'May 10, 2025',
    genre: 'Hip Hop'
  },
  {
    title: 'Electric Skies',
    artist: 'Neon Pulse',
    image: 'https://images.pexels.com/photos/1694900/pexels-photo-1694900.jpeg',
    releaseDate: 'May 8, 2025',
    genre: 'Electronic'
  },
  {
    title: 'Golden Hour',
    artist: 'Sunset Kings',
    image: 'https://images.pexels.com/photos/2258536/pexels-photo-2258536.jpeg',
    releaseDate: 'May 5, 2025',
    genre: 'Pop'
  },
  {
    title: 'Heavy Hearts',
    artist: 'Metal Horizon',
    image: 'https://images.pexels.com/photos/164693/pexels-photo-164693.jpeg',
    releaseDate: 'May 1, 2025',
    genre: 'Metal'
  }
]);

const topArtists = ref([
  {
    name: 'Luna Eclipse',
    genre: 'Pop/Electronic',
    listeners: '12.5M monthly listeners',
    image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg'
  },
  {
    name: 'The Resonants',
    genre: 'Rock',
    listeners: '8.3M monthly listeners',
    image: 'https://images.pexels.com/photos/2747446/pexels-photo-2747446.jpeg'
  },
  {
    name: 'Drake Johnson',
    genre: 'Hip Hop',
    listeners: '15.2M monthly listeners',
    image: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg'
  },
  {
    name: 'Symphony Collective',
    genre: 'Classical',
    listeners: '5.7M monthly listeners',
    image: 'https://images.pexels.com/photos/3944091/pexels-photo-3944091.jpeg'
  }
]);

const features = ref([
  {
    title: 'Hi-Fi Audio Quality',
    description: 'Experience music as the artists intended with superior sound up to 320 kbps',
    icon: '🎵'
  },
  {
    title: 'Personalized Radio',
    description: 'AI-generated stations based on your listening preferences',
    icon: '📻'
  },
  {
    title: 'Offline Mode',
    description: 'Download your favorite tracks to listen offline anywhere, anytime',
    icon: '📥'
  },
  {
    title: 'Synchronized Lyrics',
    description: 'Sing along with real-time lyrics for millions of songs',
    icon: '🎤'
  },
  {
    title: 'Crossfade & Equalizer',
    description: 'Customize your listening experience with professional audio tools',
    icon: '🎚️'
  },
  {
    title: 'Seamless Integration',
    description: 'Connect with your favorite devices, speakers, and car systems',
    icon: '🔄'
  }
]);

const testimonials = ref([
  {
    text: "The audio quality on Timber Tube Music is exceptional. I've discovered so many new artists through their personalized playlists!",
    author: "Michael R.",
    location: "Berlin"
  },
  {
    text: "Being able to download my entire library for offline listening has been a game-changer for my commute and travel.",
    author: "Sophia L.",
    location: "Paris"
  },
  {
    text: "The seamless integration with my car and smart speakers makes this my go-to music service. Worth every penny!",
    author: "Alex K.",
    location: "Amsterdam"
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
        <p class="subtitle">Over 70 million songs, ad-free and in HD audio quality</p>
        <button class="cta-button" @click="navigateToLogin">Start Listening</button>
      </div>
    </section>

    <!-- Genres Section -->
    <section class="genres-section">
      <h2>Explore Music Genres</h2>
      <div class="genres-container">
        <div v-for="genre in genres" :key="genre.name" 
             class="genre-tile" :class="{ 'popular': genre.popular }">
          <div class="genre-icon">{{ genre.icon }}</div>
          <span class="genre-name">{{ genre.name }}</span>
          <span v-if="genre.popular" class="popular-tag">Popular</span>
        </div>
      </div>
    </section>

    <!-- Featured Playlists -->
    <section class="playlists-section">
      <h2>Featured Playlists</h2>
      <div class="playlists-container">
        <div v-for="playlist in featuredPlaylists" :key="playlist.title" class="playlist-card">
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
              <span>{{ playlist.tracks }} tracks</span>
              <span>{{ playlist.duration }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- New Albums -->
    <section class="albums-section">
      <h2>New Releases</h2>
      <div class="albums-container">
        <div v-for="album in newAlbums" :key="album.title" class="album-card">
          <div class="album-image">
            <img :src="album.image" :alt="album.title">
            <div class="album-overlay">
              <button class="play-button" @click="navigateToLogin">▶</button>
            </div>
          </div>
          <div class="album-info">
            <h3>{{ album.title }}</h3>
            <p class="artist-name">{{ album.artist }}</p>
            <div class="album-details">
              <span class="album-genre">{{ album.genre }}</span>
              <span class="album-date">{{ album.releaseDate }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Top Artists -->
    <section class="artists-section">
      <h2>Top Artists</h2>
      <div class="artists-container">
        <div v-for="artist in topArtists" :key="artist.name" class="artist-card">
          <div class="artist-image">
            <img :src="artist.image" :alt="artist.name">
            <div class="artist-overlay">
              <button class="explore-artist" @click="navigateToLogin">Explore</button>
            </div>
          </div>
          <div class="artist-info">
            <h3>{{ artist.name }}</h3>
            <p class="artist-genre">{{ artist.genre }}</p>
            <p class="artist-listeners">{{ artist.listeners }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <h2>Premium Music Features</h2>
      <div class="features-container">
        <div v-for="feature in features" :key="feature.title" class="feature-card">
          <span class="feature-icon">{{ feature.icon }}</span>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="testimonials-section">
      <h2>What Our Listeners Say</h2>
      <div class="testimonials-container">
        <button @click="prevTestimonial" class="testimonial-nav prev">❮</button>
        <div class="testimonial">
          <p class="testimonial-text">"{{ testimonials[currentTestimonialIndex].text }}"</p>
          <div class="testimonial-author">
            <p class="author-name">{{ testimonials[currentTestimonialIndex].author }}</p>
            <p class="author-location">{{ testimonials[currentTestimonialIndex].location }}</p>
          </div>
        </div>
        <button @click="nextTestimonial" class="testimonial-nav next">❯</button>
      </div>
      <div class="testimonial-indicators">
        <span v-for="(_, index) in testimonials" :key="index" 
              class="indicator" :class="{ active: index === currentTestimonialIndex }"
              @click="currentTestimonialIndex = index"></span>
      </div>
    </section>

    <!-- Mobile Billing Section -->
    <section class="billing-section">
      <h2>Simple Mobile Billing</h2>
      <div class="billing-container">
        <div class="billing-image">
          <img src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg" alt="Mobile Billing">
        </div>
        <div class="billing-info">
          <h3>Music Premium Subscription</h3>
          <div class="price-tag">
            <span class="price-amount">€9.99</span>
            <span class="price-period">/month</span>
          </div>
          <ul class="billing-features">
            <li><span class="check">✓</span> Unlimited, ad-free streaming</li>
            <li><span class="check">✓</span> HD audio quality (up to 320 kbps)</li>
            <li><span class="check">✓</span> Offline downloads</li>
            <li><span class="check">✓</span> Unlimited skips</li>
            <li><span class="check">✓</span> Cancel anytime</li>
          </ul>
          <p class="billing-note">Charged directly to your phone bill - no credit card needed</p>
          <button class="billing-cta" @click="navigateToLogin">Get Started</button>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <h2>Ready to Dive Into Unlimited Music?</h2>
      <p>Join millions of music lovers enjoying premium streaming with Timber Tube</p>
      <button class="cta-button large" @click="navigateToLogin">Start Listening Now</button>
    </section>
  </div>
</template>

<style scoped>
.music-page {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: #333;
  padding-top: 64px;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #3B52A5 0%, #5D72D9 100%);
  background-image: url('https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg');
  background-size: cover;
  background-position: center;
  background-blend-mode: overlay;
  color: white;
  padding: 8rem 2rem;
  text-align: center;
  position: relative;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(59, 82, 165, 0.8) 0%, rgba(93, 114, 217, 0.8) 100%);
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
}

.hero h1 {
  font-size: 4rem;
  font-weight: 900;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.subtitle {
  font-size: 1.5rem;
  opacity: 0.9;
  margin-bottom: 2.5rem;
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
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.cta-button.large {
  padding: 1.2rem 3.5rem;
  font-size: 1.3rem;
}

/* Section styling */
section {
  padding: 5rem 2rem;
}

section:nth-child(odd) {
  background: #f8f9fa;
}

section:nth-child(even) {
  background: white;
}

section h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #3B52A5;
  margin-bottom: 3rem;
  font-weight: 800;
}

/* Genres Section */
.genres-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

.genre-tile {
  background: white;
  border-radius: 1rem;
  padding: 1.5rem 1rem;
  text-align: center;
  box-shadow: 0 10px 20px rgba(0,0,0,0.05);
  transition: transform 0.3s ease;
  position: relative;
}

.genre-tile:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.1);
}

.genre-tile.popular {
  border: 2px solid #3B52A5;
}

.genre-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.genre-name {
  font-weight: 600;
  color: #444;
}

.popular-tag {
  position: absolute;
  top: -10px;
  right: -10px;
  background: #3B52A5;
  color: white;
  font-size: 0.7rem;
  padding: 0.25rem 0.5rem;
  border-radius: 10px;
  font-weight: 600;
}

/* Playlists Section */
.playlists-container {
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
  box-shadow: 0 10px 20px rgba(0,0,0,0.05);
  transition: transform 0.3s ease;
}

.playlist-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.1);
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
  box-shadow: 0 5px 15px rgba(59, 82, 165, 0.3);
}

.play-button:hover {
  transform: scale(1.1);
  background: #5D72D9;
}

.playlist-info {
  padding: 1.5rem;
}

.playlist-info h3 {
  color: #333;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.playlist-desc {
  color: #666;
  margin-bottom: 1rem;
  line-height: 1.5;
}

.playlist-meta {
  display: flex;
  justify-content: space-between;
  color: #888;
  font-size: 0.9rem;
}

/* Albums Section */
.albums-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.album-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0,0,0,0.05);
  transition: transform 0.3s ease;
}

.album-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.1);
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
  background: rgba(0,0,0,0.5);
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
  color: #333;
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.artist-name {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 0.8rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.album-details {
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
}

.album-genre {
  color: #3B52A5;
  font-weight: 500;
}

.album-date {
  color: #888;
}

/* Artists Section */
.artists-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.artist-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0,0,0,0.05);
  transition: transform 0.3s ease;
}

.artist-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.1);
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
  transform: scale(1.05);
}

.artist-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.artist-card:hover .artist-overlay {
  opacity: 1;
}

.explore-artist {
  background: #3B52A5;
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.explore-artist:hover {
  background: #5D72D9;
  transform: scale(1.05);
}

.artist-info {
  padding: 1.5rem;
}

.artist-info h3 {
  color: #333;
  font-size: 1.3rem;
  margin-bottom: 0.3rem;
}

.artist-genre {
  color: #666;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.artist-listeners {
  color: #888;
  font-size: 0.9rem;
}

/* Features Section */
.features-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  background: white;
  padding: 2.5rem 2rem;
  border-radius: 1rem;
  box-shadow: 0 10px 20px rgba(0,0,0,0.05);
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.1);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  display: block;
}

.feature-card h3 {
  color: #3B52A5;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.feature-card p {
  color: #666;
  line-height: 1.6;
}

/* Testimonials */
.testimonials-container {
  display: flex;
  align-items: center;
  max-width: 900px;
  margin: 0 auto;
}

.testimonial {
  background: white;
  padding: 3rem;
  border-radius: 1rem;
  box-shadow: 0 10px 20px rgba(0,0,0,0.05);
  flex: 1;
}

.testimonial-text {
  font-size: 1.3rem;
  font-style: italic;
  color: #444;
  line-height: 1.7;
  position: relative;
  margin-bottom: 2rem;
}

.testimonial-text::before,
.testimonial-text::after {
  content: '"';
  font-size: 2rem;
  color: #3B52A5;
  font-family: Georgia, serif;
}

.testimonial-author {
  text-align: right;
}

.author-name {
  font-weight: 700;
  color: #333;
  margin-bottom: 0.3rem;
}

.author-location {
  color: #666;
}

.testimonial-nav {
  background: #3B52A5;
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  border: none;
  cursor: pointer;
  margin: 0 1.5rem;
  transition: all 0.3s ease;
}

.testimonial-nav:hover {
  background: #5D72D9;
  transform: scale(1.1);
}

.testimonial-indicators {
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  margin-top: 2rem;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #ddd;
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator.active {
  background: #3B52A5;
  transform: scale(1.2);
}

/* Billing Section */
.billing-container {
  display: flex;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
  gap: 4rem;
}

.billing-image {
  flex: 1;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0,0,0,0.1);
}

.billing-image img {
  width: 100%;
  display: block;
  aspect-ratio: 1/1;
  object-fit: cover;
}

.billing-info {
  flex: 1;
}

.billing-info h3 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #3B52A5;
}

.price-tag {
  margin-bottom: 2rem;
}

.price-amount {
  font-size: 3.5rem;
  font-weight: 800;
  color: #3B52A5;
}

.price-period {
  font-size: 1.2rem;
  color: #666;
}

.billing-features {
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
}

.billing-features li {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  color: #444;
  font-size: 1.1rem;
}

.check {
  color: #3B52A5;
  font-weight: bold;
  margin-right: 0.8rem;
}

.billing-note {
  font-style: italic;
  color: #666;
  margin-bottom: 2rem;
}

.billing-cta {
  background: #3B52A5;
  color: white;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.billing-cta:hover {
  background: #5D72D9;
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(59, 82, 165, 0.3);
}

/* CTA Section */
.cta-section {
  background: linear-gradient(135deg, #3B52A5 0%, #5D72D9 100%);
  color: white;
  text-align: center;
  padding: 6rem 2rem;
}

.cta-section h2 {
  color: white;
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.cta-section p {
  font-size: 1.3rem;
  margin-bottom: 2.5rem;
  opacity: 0.9;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

/* Responsive Styles */
@media (max-width: 1200px) {
  .features-container {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
  
  .albums-container {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  }
}

@media (max-width: 992px) {
  .billing-container {
    flex-direction: column-reverse;
  }
  
  .billing-image {
    max-width: 500px;
    width: 100%;
  }
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 3rem;
  }
  
  .subtitle {
    font-size: 1.3rem;
  }
  
  section {
    padding: 4rem 1.5rem;
  }
  
  section h2 {
    font-size: 2rem;
  }
  
  .genres-container {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }
  
  .playlists-container {
    grid-template-columns: 1fr;
  }
  
  .artists-container {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
  
  .testimonials-container {
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .testimonial-nav {
    margin: 0;
  }
  
  .cta-section h2 {
    font-size: 2.5rem;
  }
}

@media (max-width: 576px) {
  .hero {
    padding: 6rem 1rem;
  }
  
  .hero h1 {
    font-size: 2.5rem;
  }
  
  .subtitle {
    font-size: 1.1rem;
  }
  
  .cta-button {
    padding: 0.8rem 2rem;
    font-size: 1.1rem;
  }
  
  .testimonial {
    padding: 2rem 1.5rem;
  }
  
  .testimonial-text {
    font-size: 1.1rem;
  }
  
  .price-amount {
    font-size: 3rem;
  }
  
  .cta-section h2 {
    font-size: 2rem;
  }
  
  .cta-section p {
    font-size: 1.1rem;
  }
}
</style>