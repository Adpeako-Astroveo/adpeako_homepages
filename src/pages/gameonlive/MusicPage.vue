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
  { name: 'Metal', icon: '🤘', popular: false }
]);

const featuredPlaylists = ref([
  {
    title: 'Summer Vibes 2025',
    description: 'The ultimate soundtrack for your summer adventures',
    image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg',
    tracks: 50,
    duration: '3h 25m'
  },
  {
    title: 'Workout Motivation',
    description: 'High-energy tracks to power your fitness journey',
    image: 'https://images.pexels.com/photos/4498151/pexels-photo-4498151.jpeg',
    tracks: 45,
    duration: '2h 50m'
  },
  {
    title: 'Focus & Productivity',
    description: 'Concentration-enhancing music for work and study',
    image: 'https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg',
    tracks: 40,
    duration: '2h 45m'
  },
  {
    title: 'Chill Evenings',
    description: 'Relaxing melodies to unwind and de-stress',
    image: 'https://images.pexels.com/photos/1021876/pexels-photo-1021876.jpeg',
    tracks: 35,
    duration: '2h 20m'
  }
]);

const newReleases = ref([
  {
    title: 'Cosmic Journey',
    artist: 'Stellar Waves',
    image: 'https://images.pexels.com/photos/1694900/pexels-photo-1694900.jpeg',
    releaseDate: 'July 12, 2025'
  },
  {
    title: 'Urban Dreams',
    artist: 'Metro Beats',
    image: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg',
    releaseDate: 'July 8, 2025'
  },
  {
    title: 'Neon Nights',
    artist: 'Synth Collective',
    image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg',
    releaseDate: 'July 5, 2025'
  },
  {
    title: 'Acoustic Sessions',
    artist: 'The Harmony Project',
    image: 'https://images.pexels.com/photos/1644616/pexels-photo-1644616.jpeg',
    releaseDate: 'July 1, 2025'
  },
  {
    title: 'Digital Horizons',
    artist: 'Cyber Pulse',
    image: 'https://images.pexels.com/photos/2111015/pexels-photo-2111015.jpeg',
    releaseDate: 'June 28, 2025'
  },
  {
    title: 'Sunset Memories',
    artist: 'Coastal Waves',
    image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg',
    releaseDate: 'June 25, 2025'
  }
]);

const popularArtists = ref([
  {
    name: 'Aria Luna',
    genre: 'Pop/Electronic',
    listeners: '15M+ monthly listeners',
    image: 'https://images.pexels.com/photos/11958058/pexels-photo-11958058.jpeg'
  },
  {
    name: 'The Resonance',
    genre: 'Alternative Rock',
    listeners: '12M+ monthly listeners',
    image: 'https://images.pexels.com/photos/5117867/pexels-photo-5117867.jpeg'
  },
  {
    name: 'Rhythm Collective',
    genre: 'Hip Hop',
    listeners: '18M+ monthly listeners',
    image: 'https://images.pexels.com/photos/2747448/pexels-photo-2747448.jpeg'
  },
  {
    name: 'Harmonic Symphony',
    genre: 'Classical',
    listeners: '8M+ monthly listeners',
    image: 'https://images.pexels.com/photos/3944091/pexels-photo-3944091.jpeg'
  }
]);

const features = ref([
  {
    title: 'Hi-Fi Streaming',
    description: 'Experience studio-quality sound with our high-fidelity audio streaming up to 320kbps',
    icon: '🎵'
  },
  {
    title: 'Personalized Mixes',
    description: 'Discover new music with AI-powered recommendations based on your listening habits',
    icon: '🤖'
  },
  {
    title: 'Offline Listening',
    description: 'Download your favorite tracks for offline enjoyment, perfect for travel',
    icon: '📥'
  },
  {
    title: 'Synchronized Lyrics',
    description: 'Follow along with time-synced lyrics for millions of songs in our catalog',
    icon: '🎤'
  },
  {
    title: 'Cross-Device Sync',
    description: 'Seamlessly switch between devices while maintaining your queue and position',
    icon: '🔄'
  },
  {
    title: 'Advanced Audio Settings',
    description: 'Customize your listening experience with equalizer and audio normalization options',
    icon: '🎛️'
  }
]);

const testimonials = ref([
  {
    text: "The audio quality on GameOnLive is exceptional, even with standard earbuds. Their personalized playlists have introduced me to so many great artists!",
    name: "Alex K.",
    location: "Toronto, Canada"
  },
  {
    text: "Being able to download my entire music library for offline listening has been a game-changer for my travels and commute.",
    name: "Sophia L.",
    location: "Sydney, Australia"
  },
  {
    text: "The synchronized lyrics feature is perfect for language learning. I'm improving my English while enjoying my favorite songs!",
    name: "Miguel R.",
    location: "Barcelona, Spain"
  }
]);

const currentTestimonial = ref(0);

const nextTestimonial = () => {
  currentTestimonial.value = (currentTestimonial.value + 1) % testimonials.value.length;
};

const prevTestimonial = () => {
  currentTestimonial.value = (currentTestimonial.value - 1 + testimonials.value.length) % testimonials.value.length;
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
        <p class="subtitle">Over 70 million songs in pristine HD audio quality</p>
        <button class="cta-button" @click="navigateToLogin">Start Listening</button>
      </div>
    </section>

    <!-- Genres Section -->
    <section class="genres-section">
      <div class="section-container">
        <div class="section-header">
          <h2>Explore Music Genres</h2>
          <p>Discover new favorites across all musical styles</p>
        </div>

        <div class="genres-grid">
          <div v-for="genre in genres" :key="genre.name" 
               class="genre-item" :class="{ 'popular': genre.popular }">
            <div class="genre-icon">{{ genre.icon }}</div>
            <span class="genre-name">{{ genre.name }}</span>
            <span v-if="genre.popular" class="popular-badge">Popular</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Playlists -->
    <section class="playlists-section">
      <div class="section-container">
        <div class="section-header">
          <h2>Featured Playlists</h2>
          <p>Curated collections for every mood and activity</p>
        </div>

        <div class="playlists-grid">
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
      </div>
    </section>

    <!-- New Releases -->
    <section class="releases-section">
      <div class="section-container">
        <div class="section-header">
          <h2>New Releases</h2>
          <p>The latest albums and singles, updated weekly</p>
        </div>

        <div class="releases-grid">
          <div v-for="release in newReleases" :key="release.title" class="release-card">
            <div class="release-image">
              <img :src="release.image" :alt="release.title">
              <div class="release-overlay">
                <button class="play-button small" @click="navigateToLogin">▶</button>
              </div>
            </div>
            <div class="release-info">
              <h3>{{ release.title }}</h3>
              <p class="artist-name">{{ release.artist }}</p>
              <p class="release-date">{{ release.releaseDate }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Popular Artists -->
    <section class="artists-section">
      <div class="section-container">
        <div class="section-header">
          <h2>Popular Artists</h2>
          <p>Follow your favorites and discover new talent</p>
        </div>

        <div class="artists-grid">
          <div v-for="artist in popularArtists" :key="artist.name" class="artist-card">
            <div class="artist-image">
              <img :src="artist.image" :alt="artist.name">
              <div class="artist-overlay">
                <button class="follow-button" @click="navigateToLogin">Follow</button>
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

    <!-- Features Section -->
    <section class="features-section">
      <div class="section-container">
        <div class="section-header">
          <h2>Premium Music Features</h2>
          <p>Elevate your listening experience with advanced music tools</p>
        </div>

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
        <div class="section-header">
          <h2>What Music Lovers Say</h2>
        </div>

        <div class="testimonial-carousel">
          <button @click="prevTestimonial" class="testimonial-nav prev">❮</button>
          <div class="testimonial">
            <p class="testimonial-text">"{{ testimonials[currentTestimonial].text }}"</p>
            <div class="testimonial-author">
              <p class="author-name">{{ testimonials[currentTestimonial].name }}</p>
              <p class="author-location">{{ testimonials[currentTestimonial].location }}</p>
            </div>
          </div>
          <button @click="nextTestimonial" class="testimonial-nav next">❯</button>
        </div>

        <div class="testimonial-indicators">
          <span v-for="(_, index) in testimonials" :key="index" 
                class="indicator" :class="{ active: index === currentTestimonial }"
                @click="currentTestimonial = index"></span>
        </div>
      </div>
    </section>

    <!-- Mobile Billing Section -->
    <section class="billing-section">
      <div class="section-container">
        <div class="section-header">
          <h2>Simple Mobile Billing</h2>
          <p>Enjoy premium music with convenient payment through your phone bill</p>
        </div>

        <div class="billing-container">
          <div class="billing-info">
            <h3>Music Premium</h3>
            <div class="price-tag">
              <span class="price-amount">$9.99</span>
              <span class="price-period">/month</span>
            </div>
            <ul class="billing-features">
              <li><span class="check">✓</span> Unlimited, ad-free streaming</li>
              <li><span class="check">✓</span> HD audio quality (up to 320 kbps)</li>
              <li><span class="check">✓</span> Download for offline listening</li>
              <li><span class="check">✓</span> Synchronized lyrics</li>
              <li><span class="check">✓</span> Cancel anytime</li>
            </ul>
            <p class="billing-note">Billed directly through your mobile carrier - no credit card needed</p>
            <button class="billing-button" @click="navigateToLogin">Subscribe Now</button>
          </div>
          <div class="billing-image">
            <img src="https://images.pexels.com/photos/3944104/pexels-photo-3944104.jpeg" alt="Music streaming on mobile">
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-content">
        <h2>Ready to Elevate Your Music Experience?</h2>
        <p>Join millions of music lovers enjoying unlimited streaming with GameOnLive</p>
        <button class="cta-button" @click="navigateToLogin">Start Listening Now</button>
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
  background: linear-gradient(135deg, #0055FF 0%, #00CCFF 100%);
  background-image: url('https://images.pexels.com/photos/4090902/pexels-photo-4090902.jpeg');
  background-size: cover;
  background-position: center;
  background-blend-mode: overlay;
  color: white;
  padding: 10rem 2rem 8rem;
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
  background: linear-gradient(135deg, rgba(0, 85, 255, 0.85) 0%, rgba(0, 204, 255, 0.85) 100%);
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
}

.hero h1 {
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  text-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.subtitle {
  font-size: 1.5rem;
  opacity: 0.9;
  margin-bottom: 2.5rem;
}

.cta-button {
  background: white;
  color: #0055FF;
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

/* Section Container */
.section-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 2rem;
}

.section-header {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;
}

.section-header h2 {
  color: #0055FF;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.section-header p {
  color: #666;
  font-size: 1.2rem;
}

/* Genres Section */
.genres-section {
  background: white;
}

.genres-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 2rem;
}

.genre-item {
  background: #f5f8ff;
  border-radius: 1rem;
  padding: 2rem 1rem;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 85, 255, 0.05);
  transition: transform 0.3s ease;
  position: relative;
}

.genre-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 85, 255, 0.1);
}

.genre-item.popular {
  border-bottom: 3px solid #0055FF;
}

.genre-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  display: block;
}

.genre-name {
  font-weight: 600;
  color: #444;
}

.popular-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #0055FF;
  color: white;
  font-size: 0.7rem;
  padding: 0.25rem 0.5rem;
  border-radius: 50px;
}

/* Playlists Section */
.playlists-section {
  background: #f5f8ff;
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
  box-shadow: 0 5px 15px rgba(0, 85, 255, 0.05);
  transition: transform 0.3s ease;
}

.playlist-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 85, 255, 0.1);
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

.play-button {
  background: #0055FF;
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
  box-shadow: 0 5px 15px rgba(0, 85, 255, 0.3);
}

.play-button:hover {
  background: #00CCFF;
  transform: scale(1.1);
}

.play-button.small {
  width: 45px;
  height: 45px;
  font-size: 1.5rem;
}

.playlist-info {
  padding: 1.5rem;
}

.playlist-info h3 {
  color: #0055FF;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.playlist-desc {
  color: #444;
  margin-bottom: 1rem;
  font-size: 0.95rem;
  line-height: 1.5;
}

.playlist-meta {
  display: flex;
  justify-content: space-between;
  color: #666;
  font-size: 0.9rem;
}

/* Releases Section */
.releases-section {
  background: white;
}

.releases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 2rem;
}

.release-card {
  background: #f5f8ff;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 85, 255, 0.05);
  transition: transform 0.3s ease;
}

.release-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 85, 255, 0.1);
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
  transform: scale(1.05);
}

.release-overlay {
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

.release-card:hover .release-overlay {
  opacity: 1;
}

.release-info {
  padding: 1.2rem;
}

.release-info h3 {
  color: #333;
  font-size: 1rem;
  margin-bottom: 0.3rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.artist-name {
  color: #0055FF;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.release-date {
  color: #666;
  font-size: 0.8rem;
}

/* Artists Section */
.artists-section {
  background: #f5f8ff;
}

.artists-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
}

.artist-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 85, 255, 0.05);
  transition: transform 0.3s ease;
}

.artist-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 85, 255, 0.1);
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

.follow-button {
  background: #0055FF;
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.follow-button:hover {
  background: #00CCFF;
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
  color: #0055FF;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
}

.artist-listeners {
  color: #666;
  font-size: 0.9rem;
}

/* Features Section */
.features-section {
  background: white;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: #f5f8ff;
  padding: 2.5rem 2rem;
  border-radius: 1rem;
  box-shadow: 0 5px 15px rgba(0, 85, 255, 0.05);
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 85, 255, 0.1);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  display: block;
  color: #0055FF;
}

.feature-card h3 {
  color: #0055FF;
  font-size: 1.4rem;
  margin-bottom: 1rem;
}

.feature-card p {
  color: #444;
  line-height: 1.6;
}

/* Testimonials */
.testimonials-section {
  background: #f5f8ff;
}

.testimonial-carousel {
  display: flex;
  align-items: center;
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.testimonial {
  background: white;
  padding: 2.5rem;
  border-radius: 1rem;
  box-shadow: 0 5px 15px rgba(0, 85, 255, 0.05);
  flex: 1;
}

.testimonial-text {
  font-size: 1.2rem;
  font-style: italic;
  color: #444;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  position: relative;
}

.testimonial-text::before,
.testimonial-text::after {
  content: '"';
  font-size: 2rem;
  color: #0055FF;
  font-family: Georgia, serif;
}

.testimonial-author {
  text-align: right;
}

.author-name {
  color: #0055FF;
  font-weight: 700;
  margin-bottom: 0.3rem;
}

.author-location {
  color: #666;
  font-size: 0.9rem;
}

.testimonial-nav {
  width: 45px;
  height: 45px;
  background: #0055FF;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 85, 255, 0.2);
}

.testimonial-nav:hover {
  background: #00CCFF;
  transform: scale(1.1);
}

.testimonial-indicators {
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  margin-top: 2rem;
}

.indicator {
  width: 10px;
  height: 10px;
  background: #ddd;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator.active {
  background: #0055FF;
  transform: scale(1.2);
}

/* Billing Section */
.billing-section {
  background: white;
}

.billing-container {
  display: flex;
  align-items: center;
  gap: 4rem;
}

.billing-info {
  flex: 1;
}

.billing-info h3 {
  font-size: 2rem;
  color: #0055FF;
  margin-bottom: 1.5rem;
}

.price-tag {
  margin-bottom: 2rem;
}

.price-amount {
  font-size: 3.5rem;
  font-weight: 800;
  color: #0055FF;
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
  align-items: flex-start;
  margin-bottom: 1rem;
  color: #444;
  font-size: 1.1rem;
  line-height: 1.4;
}

.check {
  color: #0055FF;
  font-weight: bold;
  margin-right: 0.8rem;
  flex-shrink: 0;
}

.billing-note {
  font-style: italic;
  color: #666;
  margin-bottom: 2rem;
}

.billing-button {
  background: #0055FF;
  color: white;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.billing-button:hover {
  background: #00CCFF;
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 85, 255, 0.2);
}

.billing-image {
  flex: 1;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 85, 255, 0.1);
  aspect-ratio: 4/3;
}

.billing-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* CTA Section */
.cta-section {
  background: linear-gradient(135deg, #0055FF 0%, #00CCFF 100%);
  color: white;
  text-align: center;
  padding: 5rem 2rem;
}

.cta-content {
  max-width: 800px;
  margin: 0 auto;
}

.cta-section h2 {
  font-size: 2.8rem;
  margin-bottom: 1.5rem;
}

.cta-section p {
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  opacity: 0.9;
}

.cta-section .cta-button {
  background: white;
  color: #0055FF;
}

.cta-section .cta-button:hover {
  background: #f5f5f5;
}

/* Responsive Styles */
@media (max-width: 1200px) {
  .billing-container {
    flex-direction: column;
    gap: 3rem;
  }
  
  .billing-image {
    max-width: 600px;
    width: 100%;
  }
}

@media (max-width: 992px) {
  .features-grid {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 8rem 1.5rem 6rem;
  }
  
  .hero h1 {
    font-size: 3rem;
  }
  
  .section-container {
    padding: 4rem 1.5rem;
  }
  
  .section-header h2 {
    font-size: 2rem;
  }
  
  .playlists-grid {
    grid-template-columns: 1fr;
  }
  
  .releases-grid {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
  
  .artists-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
  
  .testimonial-carousel {
    flex-direction: column;
  }
  
  .testimonial-nav {
    margin: 1rem 0;
  }
  
  .cta-section h2 {
    font-size: 2.2rem;
  }
}

@media (max-width: 576px) {
  .hero h1 {
    font-size: 2.5rem;
  }
  
  .cta-button {
    padding: 0.8rem 2rem;
    font-size: 1rem;
  }
  
  .genres-grid {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .billing-info h3 {
    font-size: 1.8rem;
  }
  
  .price-amount {
    font-size: 3rem;
  }
  
  .cta-section h2 {
    font-size: 1.8rem;
  }
}
</style>