<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const categories = ref([
  {
    name: 'Movies',
    image: 'https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg',
    count: '10,000+ titles'
  },
  {
    name: 'TV Shows',
    image: 'https://images.pexels.com/photos/704555/pexels-photo-704555.jpeg',
    count: '5,000+ episodes'
  },
  {
    name: 'Documentaries',
    image: 'https://images.pexels.com/photos/3876435/pexels-photo-3876435.jpeg',
    count: '2,000+ films'
  },
  {
    name: 'Animation',
    image: 'https://images.pexels.com/photos/3356608/pexels-photo-3356608.jpeg',
    count: '1,500+ titles'
  }
]);

const trendingShows = ref([
  {
    title: 'Cosmic Horizon',
    genre: 'Sci-Fi',
    rating: 9.3,
    year: '2025',
    image: 'https://images.pexels.com/photos/1938348/pexels-photo-1938348.jpeg',
    episodes: '10 episodes',
    description: 'A crew of elite astronauts embarks on humanity\'s first mission beyond our solar system, discovering wonders and terrors that will challenge their very understanding of reality.'
  },
  {
    title: 'Royal Dynasty',
    genre: 'Historical Drama',
    rating: 9.5,
    year: '2025',
    image: 'https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg',
    episodes: '8 episodes',
    description: 'In medieval Europe, five noble houses engage in a deadly game of politics, betrayal, and unexpected alliances as they vie for the ultimate prize: the crown.'
  },
  {
    title: 'Shadow Detective',
    genre: 'Crime Thriller',
    rating: 9.1,
    year: '2024',
    image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg',
    episodes: '12 episodes',
    description: 'A brilliant but haunted detective solves the city\'s most complex cases while battling personal demons and a web of corruption reaching the highest levels of power.'
  },
  {
    title: 'Silicon Valley Dreams',
    genre: 'Tech Drama',
    rating: 8.9,
    year: '2024',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
    episodes: '10 episodes',
    description: 'Four young tech entrepreneurs navigate the cutthroat world of startups, venture capital, and technological innovation while trying to maintain their integrity and relationships.'
  }
]);

const newReleases = ref([
  {
    title: 'Quantum Effect',
    genre: 'Sci-Fi',
    rating: 8.8,
    image: 'https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg',
    type: 'Movie',
    duration: '2h 15m',
    description: 'A quantum physicist discovers a way to alter reality, but each change ripples across time with unforeseen and increasingly dangerous consequences.'
  },
  {
    title: 'The Last Summit',
    genre: 'Adventure',
    rating: 9.0,
    image: 'https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg',
    type: 'Movie',
    duration: '2h 30m',
    description: 'Four elite mountain climbers face impossible odds as they attempt to scale the world\'s most dangerous peak during the worst storm in decades.'
  },
  {
    title: 'Whispers in Shadow',
    genre: 'Horror',
    rating: 8.9,
    image: 'https://images.pexels.com/photos/2873755/pexels-photo-2873755.jpeg',
    type: 'Movie',
    duration: '2h 05m',
    description: 'A family moves into a remote countryside mansion only to discover they\'re not alone—and whatever lurks within the walls has been waiting for them.'
  },
  {
    title: 'Echoes of Tomorrow',
    genre: 'Drama',
    rating: 9.2,
    image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg',
    type: 'Movie',
    duration: '1h 58m',
    description: 'Three interconnected stories spanning generations show how small decisions ripple through time, changing the lives of people who never meet.'
  }
]);

const continueWatching = ref([
  {
    title: 'The Mystery of Blackwood Manor',
    progress: 65,
    image: 'https://images.pexels.com/photos/2347662/pexels-photo-2347662.jpeg',
    timeLeft: '45 min left',
    episode: 'S2:E5'
  },
  {
    title: 'Galactic Warriors',
    progress: 30,
    image: 'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg',
    timeLeft: '1h 23m left',
    episode: 'S1:E8'
  },
  {
    title: 'Ocean Explorers',
    progress: 80,
    image: 'https://images.pexels.com/photos/3062542/pexels-photo-3062542.jpeg',
    timeLeft: '22 min left',
    episode: 'S3:E1'
  }
]);

const features = ref([
  {
    title: '4K Ultra HD',
    description: 'Experience stunning visual clarity with our highest quality streaming option',
    icon: '📺'
  },
  {
    title: 'Multi-device Streaming',
    description: 'Start watching on one device and seamlessly continue on another',
    icon: '📱'
  },
  {
    title: 'Offline Downloads',
    description: 'Save your favorite content to watch when you\'re not connected',
    icon: '📥'
  },
  {
    title: 'Smart Recommendations',
    description: 'Discover new content based on your viewing preferences',
    icon: '🤖'
  },
  {
    title: 'Multiple Profiles',
    description: 'Create up to 5 personalized profiles for your household',
    icon: '👥'
  },
  {
    title: 'Ad-free Experience',
    description: 'Enjoy uninterrupted viewing with no commercial breaks',
    icon: '🚫'
  }
]);

const testimonials = ref([
  {
    text: "The streaming quality is phenomenal, even on a modest internet connection. The download feature is perfect for my daily commute!",
    name: "David L.",
    location: "Chicago, USA"
  },
  {
    text: "Having access to such a vast library of movies and shows in one place has completely changed my entertainment experience.",
    name: "Emma J.",
    location: "Melbourne, Australia"
  },
  {
    text: "The personalized recommendations are spot-on! I've discovered so many great shows I would have otherwise missed.",
    name: "Raj P.",
    location: "Mumbai, India"
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
  <div class="video-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Premium Video Streaming</h1>
        <p class="subtitle">Movies, Shows, and Documentaries in stunning 4K quality</p>
        <button class="cta-button" @click="navigateToLogin">Start Watching</button>
      </div>
    </section>

    <!-- Categories Section -->
    <section class="categories-section">
      <div class="section-container">
        <div class="section-header">
          <h2>Explore Categories</h2>
          <p>Discover content across all your favorite genres</p>
        </div>

        <div class="categories-grid">
          <div v-for="category in categories" :key="category.name" class="category-card">
            <div class="category-image">
              <img :src="category.image" :alt="category.name">
              <div class="category-overlay">
                <h3>{{ category.name }}</h3>
                <p class="category-count">{{ category.count }}</p>
                <button class="explore-button" @click="navigateToLogin">Explore</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Continue Watching -->
    <section class="continue-section">
      <div class="section-container">
        <div class="section-header">
          <h2>Continue Watching</h2>
          <p>Pick up right where you left off</p>
        </div>

        <div class="continue-grid">
          <div v-for="item in continueWatching" :key="item.title" class="continue-card">
            <div class="continue-image">
              <img :src="item.image" :alt="item.title">
              <div class="continue-overlay">
                <button class="play-button" @click="navigateToLogin">▶</button>
              </div>
              <div class="episode-badge">{{ item.episode }}</div>
            </div>
            <div class="continue-info">
              <h3>{{ item.title }}</h3>
              <div class="progress-container">
                <div class="progress-bar" :style="{ width: item.progress + '%' }"></div>
              </div>
              <span class="time-left">{{ item.timeLeft }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Trending Shows -->
    <section class="trending-section">
      <div class="section-container">
        <div class="section-header">
          <h2>Trending Shows</h2>
          <p>The most-watched series everyone's talking about</p>
        </div>

        <div class="trending-grid">
          <div v-for="show in trendingShows" :key="show.title" class="trending-card">
            <div class="trending-image">
              <img :src="show.image" :alt="show.title">
              <div class="trending-overlay">
                <div class="rating">★ {{ show.rating }}</div>
                <button class="watch-button" @click="navigateToLogin">Watch Now</button>
              </div>
              <div class="trending-badge">{{ show.episodes }}</div>
            </div>
            <div class="trending-info">
              <h3>{{ show.title }}</h3>
              <div class="trending-meta">
                <span class="trending-genre">{{ show.genre }}</span>
                <span class="trending-year">{{ show.year }}</span>
              </div>
              <p class="trending-desc">{{ show.description }}</p>
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
          <p>The latest additions to our growing library</p>
        </div>

        <div class="releases-grid">
          <div v-for="release in newReleases" :key="release.title" class="release-card">
            <div class="release-image">
              <img :src="release.image" :alt="release.title">
              <div class="release-overlay">
                <div class="rating">★ {{ release.rating }}</div>
                <button class="watch-button" @click="navigateToLogin">Watch Now</button>
              </div>
              <div class="release-badge">{{ release.type }}</div>
            </div>
            <div class="release-info">
              <h3>{{ release.title }}</h3>
              <div class="release-meta">
                <span class="release-genre">{{ release.genre }}</span>
                <span class="release-duration">{{ release.duration }}</span>
              </div>
              <p class="release-desc">{{ release.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <div class="section-container">
        <div class="section-header">
          <h2>Premium Video Features</h2>
          <p>Enhanced viewing experiences for every subscriber</p>
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
          <h2>What Our Viewers Say</h2>
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
        <div class="billing-container">
          <div class="billing-info">
            <h3>Video Premium</h3>
            <div class="price-tag">
              <span class="price-amount">$12.99</span>
              <span class="price-period">/month</span>
            </div>
            <ul class="billing-features">
              <li><span class="check">✓</span> Access to our full library of movies, shows, and documentaries</li>
              <li><span class="check">✓</span> Stream in 4K Ultra HD where available</li>
              <li><span class="check">✓</span> Download content for offline viewing</li>
              <li><span class="check">✓</span> Create up to 5 personalized profiles</li>
              <li><span class="check">✓</span> Ad-free watching experience</li>
              <li><span class="check">✓</span> New content added weekly</li>
            </ul>
            <p class="billing-note">Billed directly through your mobile carrier - no credit card needed</p>
            <button class="billing-button" @click="navigateToLogin">Subscribe Now</button>
          </div>
          <div class="billing-image">
            <img src="https://images.pexels.com/photos/4009402/pexels-photo-4009402.jpeg" alt="Video streaming">
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-content">
        <h2>Ready to Start Streaming?</h2>
        <p>Join millions of viewers enjoying premium content worldwide</p>
        <button class="cta-button" @click="navigateToLogin">Get Started Now</button>
      </div>
    </section>
  </div>
</template>

<style scoped>
.video-page {
  color: #333;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #0055FF 0%, #00CCFF 100%);
  background-image: url('https://images.pexels.com/photos/8263321/pexels-photo-8263321.jpeg');
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

/* Categories */
.categories-section {
  background: white;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.category-card {
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 85, 255, 0.07);
  transition: transform 0.3s ease;
  position: relative;
  aspect-ratio: 4/3;
}

.category-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 85, 255, 0.15);
}

.category-image {
  position: relative;
  height: 100%;
}

.category-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.category-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.2) 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
  color: white;
}

.category-overlay h3 {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

.category-count {
  font-size: 1rem;
  opacity: 0.9;
  margin-bottom: 1.5rem;
}

.explore-button {
  background: #0055FF;
  color: white;
  padding: 0.7rem 2rem;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.explore-button:hover {
  background: #00CCFF;
  transform: scale(1.05);
}

/* Continue Watching */
.continue-section {
  background: #f5f8ff;
}

.continue-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.continue-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 85, 255, 0.07);
  transition: transform 0.3s ease;
}

.continue-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 85, 255, 0.15);
}

.continue-image {
  position: relative;
  height: 180px;
  overflow: hidden;
}

.continue-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.continue-card:hover .continue-image img {
  transform: scale(1.05);
}

.continue-overlay {
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

.continue-card:hover .continue-overlay {
  opacity: 1;
}

.episode-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(0, 85, 255, 0.9);
  color: white;
  padding: 0.3rem 0.6rem;
  border-radius: 5px;
  font-size: 0.8rem;
  font-weight: 600;
}

.play-button {
  background: #0055FF;
  color: white;
  width: 55px;
  height: 55px;
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

.continue-info {
  padding: 1.5rem;
}

.continue-info h3 {
  color: #333;
  font-size: 1.2rem;
  margin-bottom: 0.75rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.progress-container {
  height: 4px;
  background: #e6e6e6;
  border-radius: 2px;
  margin-bottom: 0.5rem;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background: #0055FF;
  border-radius: 2px;
}

.time-left {
  color: #666;
  font-size: 0.9rem;
}

/* Trending Shows Section */
.trending-section {
  background: white;
}

.trending-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.trending-card {
  display: grid;
  grid-template-columns: minmax(200px, 1fr) 2fr;
  background: #f5f8ff;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 85, 255, 0.07);
  transition: transform 0.3s ease;
}

.trending-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 85, 255, 0.15);
}

.trending-image {
  position: relative;
  height: 100%;
  min-height: 250px;
}

.trending-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.trending-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.trending-card:hover .trending-overlay {
  opacity: 1;
}

.rating {
  color: #FFD700;
  font-weight: bold;
  font-size: 1.2rem;
}

.watch-button {
  background: #0055FF;
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.watch-button:hover {
  background: #00CCFF;
  transform: scale(1.05);
}

.trending-badge {
  position: absolute;
  top: 10px;
  left: 10px;
  background: rgba(0,0,0,0.7);
  color: white;
  padding: 0.3rem 0.6rem;
  border-radius: 5px;
  font-size: 0.8rem;
}

.trending-info {
  padding: 2rem;
}

.trending-info h3 {
  color: #0055FF;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.trending-meta {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.trending-genre {
  color: #0055FF;
  font-weight: 600;
}

.trending-year {
  color: #666;
}

.trending-desc {
  color: #444;
  line-height: 1.6;
}

/* New Releases */
.releases-section {
  background: #f5f8ff;
}

.releases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.release-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 85, 255, 0.07);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
}

.release-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 85, 255, 0.15);
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
  transform: scale(1.05);
}

.release-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.release-card:hover .release-overlay {
  opacity: 1;
}

.release-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(0, 85, 255, 0.9);
  color: white;
  padding: 0.3rem 0.6rem;
  border-radius: 5px;
  font-size: 0.8rem;
}

.release-info {
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.release-info h3 {
  color: #333;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.release-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.release-genre {
  color: #0055FF;
  font-weight: 600;
}

.release-duration {
  color: #666;
}

.release-desc {
  color: #444;
  line-height: 1.6;
  margin-top: auto;
}

/* Features Section */
.features-section {
  background: white;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: #f5f8ff;
  padding: 2.5rem;
  border-radius: 1rem;
  box-shadow: 0 10px 20px rgba(0, 85, 255, 0.07);
  transition: transform 0.3s ease;
  text-align: center;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 85, 255, 0.15);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  display: block;
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
  max-width: 800px;
  margin: 0 auto;
  gap: 2rem;
}

.testimonial {
  background: white;
  padding: 2.5rem;
  border-radius: 1rem;
  box-shadow: 0 10px 20px rgba(0, 85, 255, 0.07);
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.billing-info {
  display: flex;
  flex-direction: column;
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
  align-self: flex-start;
}

.billing-button:hover {
  background: #00CCFF;
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 85, 255, 0.2);
}

.billing-image {
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 85, 255, 0.15);
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
  .trending-card {
    grid-template-columns: 1fr;
  }
  
  .trending-image {
    min-height: 200px;
  }
  
  .billing-container {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .billing-image {
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
  }
}

@media (max-width: 992px) {
  .releases-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
  
  .features-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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
  
  .continue-grid {
    grid-template-columns: 1fr;
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
  
  .billing-button {
    align-self: center;
    width: 100%;
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
  
  .categories-grid {
    grid-template-columns: 1fr;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .releases-grid {
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