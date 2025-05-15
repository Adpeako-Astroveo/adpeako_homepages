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
    title: 'Summer Vibes 2025',
    description: 'The perfect soundtrack for sunny days and warm nights',
    image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg',
    tracks: 50,
    duration: '3h 15m'
  },
  {
    title: 'Workout Motivation',
    description: 'High-energy tracks to power your fitness routine',
    image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg',
    tracks: 45,
    duration: '2h 50m'
  },
  {
    title: 'Chill & Relax',
    description: 'Mellow tunes to help you unwind and de-stress',
    image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg',
    tracks: 40,
    duration: '2h 30m'
  },
  {
    title: 'Focus & Study',
    description: 'Concentration-enhancing music for productivity',
    image: 'https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg',
    tracks: 35,
    duration: '2h 45m'
  }
]);

const newReleases = ref([
  {
    title: 'Cosmic Journey',
    artist: 'Stellar Waves',
    image: 'https://images.pexels.com/photos/1694900/pexels-photo-1694900.jpeg',
    releaseDate: 'June 15, 2025'
  },
  {
    title: 'Urban Dreams',
    artist: 'Metro Beats',
    image: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg',
    releaseDate: 'June 12, 2025'
  },
  {
    title: 'Neon Nights',
    artist: 'Synth Collective',
    image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg',
    releaseDate: 'June 10, 2025'
  },
  {
    title: 'Acoustic Sessions',
    artist: 'The Harmony Project',
    image: 'https://images.pexels.com/photos/1644616/pexels-photo-1644616.jpeg',
    releaseDate: 'June 8, 2025'
  },
  {
    title: 'Digital Horizons',
    artist: 'Cyber Pulse',
    image: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg',
    releaseDate: 'June 5, 2025'
  },
  {
    title: 'Sunset Memories',
    artist: 'Coastal Waves',
    image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg',
    releaseDate: 'June 1, 2025'
  }
]);

const features = ref([
  {
    title: 'Hi-Fi Audio Quality',
    description: 'Experience music as the artists intended with superior sound quality up to 320kbps',
    icon: '🎵',
    highlight: true
  },
  {
    title: 'Smart Playlists',
    description: 'AI-powered recommendations based on your listening habits and preferences',
    icon: '🤖',
    highlight: true
  },
  {
    title: 'Offline Mode',
    description: 'Download your favorite tracks to listen offline anywhere, anytime',
    icon: '📥',
    highlight: true
  },
  {
    title: 'Synchronized Lyrics',
    description: 'Sing along with real-time lyrics for millions of songs',
    icon: '🎤',
    highlight: false
  },
  {
    title: 'Cross-Device Sync',
    description: 'Seamlessly switch between devices while your music follows',
    icon: '📱',
    highlight: false
  },
  {
    title: 'Audio Equalizer',
    description: 'Fine-tune your listening experience with customizable audio settings',
    icon: '🎚️',
    highlight: false
  }
]);

const testimonials = ref([
  {
    text: "The audio quality is exceptional, even on my basic earbuds. Confused Eliphant has completely transformed how I discover new music!",
    author: "Alex K.",
    location: "Berlin, Germany"
  },
  {
    text: "Being able to download my playlists for offline listening during my commute has been a game-changer. Worth every penny!",
    author: "Sophia L.",
    location: "Madrid, Spain"
  },
  {
    text: "The curated playlists are incredible - I've discovered so many new artists I never would have found otherwise.",
    author: "Michael T.",
    location: "Toronto, Canada"
  }
]);

const currentTestimonialIndex = ref(0);

const nextTestimonial = () => {
  currentTestimonialIndex.value = (currentTestimonialIndex.value + 1) % testimonials.value.length;
};

const prevTestimonial = () => {
  currentTestimonialIndex.value = (currentTestimonialIndex.value - 1 + testimonials.value.length) % testimonials.value.length;
};

const plan = ref({
  name: 'Music Premium',
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
  billingText: 'Conveniently billed to your phone'
});

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
        <p class="subtitle">Discover millions of songs with crystal-clear sound quality</p>
        <button class="cta-button" @click="navigateToLogin">Login Now</button>
      </div>
    </section>

    <!-- Genres Section -->
    <section class="genres">
      <h2>Explore Music Genres</h2>
      <div class="genres-grid">
        <div v-for="genre in genres" :key="genre.name" 
             class="genre-item" :class="{ 'popular': genre.popular }">
          <span class="genre-icon">{{ genre.icon }}</span>
          <span class="genre-name">{{ genre.name }}</span>
          <span v-if="genre.popular" class="popular-tag">Popular</span>
        </div>
      </div>
    </section>

    <!-- Featured Playlists -->
    <section class="playlists">
      <h2>Featured Playlists</h2>
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
    </section>

    <!-- New Releases -->
    <section class="new-releases">
      <h2>New Releases</h2>
      <div class="releases-grid">
        <div v-for="release in newReleases" :key="release.title" class="release-card">
          <div class="release-image">
            <img :src="release.image" :alt="release.title">
            <div class="release-overlay">
              <button class="play-button" @click="navigateToLogin">▶</button>
            </div>
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
    <section class="features">
      <h2>Premium Features</h2>
      <div class="features-grid">
        <div v-for="feature in features" :key="feature.title" 
             class="feature-card" :class="{ 'highlight': feature.highlight }">
          <span class="feature-icon">{{ feature.icon }}</span>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="testimonials">
      <h2>What Our Users Say</h2>
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

    <!-- Plan Section -->
    <section class="plan-section">
      <div class="plan-card">
        <h2>{{ plan.name }}</h2>
        <div class="plan-price">
          <span class="price">{{ plan.price }}</span>
          <span class="period">{{ plan.period }}</span>
        </div>
        <ul class="plan-features">
          <li v-for="feature in plan.features" :key="feature">
            <span class="check-icon">✓</span> {{ feature }}
          </li>
        </ul>
        <p class="billing-text">{{ plan.billingText }}</p>
        <button class="subscribe-button" @click="navigateToLogin">Login Now</button>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta">
      <h2>Ready to Elevate Your Music Experience?</h2>
      <p>Join millions of music lovers using Confused Eliphant</p>
      <button class="cta-button" @click="navigateToLogin">Login Now</button>
    </section>
  </div>
</template>

<style scoped>
.music-page {
  color: #1a202c;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  /* Make sure the content starts below the fixed header */
  padding-top: 64px;
  margin-top: 0;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #6C63FF 0%, #FF6584 100%);
  color: white;
  padding: 8rem 2rem;
  text-align: center;
  position: relative;
  z-index: 1;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero h1 {
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.subtitle {
  font-size: 1.5rem;
  opacity: 0.9;
  margin-bottom: 2rem;
}

.cta-button {
  background: white;
  color: #6C63FF;
  font-size: 1.2rem;
  padding: 1rem 3rem;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

/* Genres Section */
.genres {
  padding: 5rem 2rem;
  background: #f8fafc;
}

.genres h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #6C63FF;
  margin-bottom: 3rem;
}

.genres-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

.genre-item {
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  position: relative;
  transition: transform 0.3s ease;
}

.genre-item:hover {
  transform: translateY(-5px);
}

.genre-item.popular {
  border: 2px solid #6C63FF;
}

.popular-tag {
  position: absolute;
  top: -10px;
  right: -10px;
  background: #6C63FF;
  color: white;
  font-size: 0.7rem;
  padding: 0.25rem 0.5rem;
  border-radius: 10px;
}

.genre-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.genre-name {
  font-weight: 600;
  color: #4a5568;
}

/* Playlists Section */
.playlists {
  padding: 5rem 2rem;
}

.playlists h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #6C63FF;
  margin-bottom: 3rem;
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

.play-button {
  background: #6C63FF;
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.play-button:hover {
  transform: scale(1.1);
  background: #5a52e0;
}

.playlist-info {
  padding: 1.5rem;
}

.playlist-info h3 {
  color: #6C63FF;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.playlist-desc {
  color: #4a5568;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  line-height: 1.5;
}

.playlist-meta {
  display: flex;
  justify-content: space-between;
  color: #718096;
  font-size: 0.8rem;
}

/* New Releases */
.new-releases {
  padding: 5rem 2rem;
  background: #f8fafc;
}

.new-releases h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #6C63FF;
  margin-bottom: 3rem;
}

.releases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.release-card {
  background: white;
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

.release-info {
  padding: 1.2rem;
}

.release-info h3 {
  color: #6C63FF;
  margin-bottom: 0.25rem;
  font-size: 1.1rem;
}

.artist-name {
  color: #4a5568;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.release-date {
  color: #718096;
  font-size: 0.8rem;
}

/* Features */
.features {
  padding: 5rem 2rem;
}

.features h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #6C63FF;
  margin-bottom: 3rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  transition: transform 0.3s ease;
  text-align: center;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-card.highlight {
  border: 2px solid #6C63FF;
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  display: block;
}

.feature-card h3 {
  color: #6C63FF;
  margin-bottom: 0.5rem;
}

.feature-card p {
  color: #4a5568;
  line-height: 1.6;
}

/* Testimonials */
.testimonials {
  padding: 5rem 2rem;
  background: #f8fafc;
  text-align: center;
}

.testimonials h2 {
  font-size: 2.5rem;
  color: #6C63FF;
  margin-bottom: 3rem;
}

.testimonials-container {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  align-items: center;
}

.testimonial {
  background: white;
  padding: 2.5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  flex: 1;
}

.testimonial-text {
  font-size: 1.2rem;
  font-style: italic;
  color: #4a5568;
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.testimonial-author {
  text-align: right;
}

.author-name {
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.3rem;
}

.author-location {
  color: #718096;
  font-size: 0.9rem;
}

.testimonial-nav {
  background: #6C63FF;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  margin: 0 1rem;
  transition: all 0.3s ease;
}

.testimonial-nav:hover {
  background: #5a52e0;
  transform: scale(1.1);
}

.testimonial-indicators {
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
  gap: 0.5rem;
}

.indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #e2e8f0;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.indicator.active {
  background-color: #6C63FF;
}

/* Plan Section */
.plan-section {
  padding: 5rem 2rem;
  display: flex;
  justify-content: center;
}

.plan-card {
  background: white;
  padding: 3rem;
  border-radius: 1rem;
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  max-width: 500px;
  width: 100%;
  text-align: center;
}

.plan-card h2 {
  color: #6C63FF;
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.plan-price {
  margin-bottom: 2rem;
}

.price {
  font-size: 3rem;
  font-weight: 800;
  color: #2d3748;
}

.period {
  font-size: 1.2rem;
  color: #718096;
}

.plan-features {
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
  text-align: left;
}

.plan-features li {
  padding: 0.75rem 0;
  color: #4a5568;
  display: flex;
  align-items: center;
}

.check-icon {
  color: #6C63FF;
  margin-right: 0.75rem;
  font-weight: bold;
}

.billing-text {
  font-size: 0.9rem;
  color: #718096;
  margin-bottom: 2rem;
  font-style: italic;
}

.subscribe-button {
  background: #6C63FF;
  color: white;
  padding: 1rem 2rem;
  border-radius: 50px;
  border: none;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
}

.subscribe-button:hover {
  background: #5a52e0;
  transform: translateY(-2px);
}

/* CTA Section */
.cta {
  background: linear-gradient(135deg, #6C63FF 0%, #FF6584 100%);
  color: white;
  text-align: center;
  padding: 6rem 2rem;
}

.cta h2 {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.cta p {
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  opacity: 0.9;
}

.cta .cta-button {
  background: white;
  color: #6C63FF;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .genres-grid {
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  }
  
  .features-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  
  .releases-grid {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 6rem 1.5rem;
    margin-top: 0;
  }
  
  .hero h1 {
    font-size: 3rem;
  }
  
  .subtitle {
    font-size: 1.2rem;
  }
  
  .playlists-grid {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  }
  
  .genres-grid {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  }
  
  .releases-grid {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
  
  .cta h2 {
    font-size: 2.5rem;
  }
  
  .plan-card {
    padding: 2rem;
  }
}

@media (max-width: 640px) {
  .hero h1 {
    font-size: 2.5rem;
  }
  
  .playlists-grid, .releases-grid {
    grid-template-columns: 1fr;
  }
  
  .genres-grid {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .cta h2 {
    font-size: 2rem;
  }
  
  .testimonials-container {
    flex-direction: column;
  }
  
  .testimonial-nav {
    margin: 1rem 0;
  }
}
</style>