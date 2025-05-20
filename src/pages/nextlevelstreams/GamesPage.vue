<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const categories = ref([
  {
    name: 'Action',
    icon: '🎮',
    count: '250+ games'
  },
  {
    name: 'Adventure',
    icon: '🗺️',
    count: '180+ games'
  },
  {
    name: 'Strategy',
    icon: '♟️',
    count: '120+ games'
  },
  {
    name: 'Puzzle',
    icon: '🧩',
    count: '200+ games'
  },
  {
    name: 'Racing',
    icon: '🏎️',
    count: '90+ games'
  },
  {
    name: 'Sports',
    icon: '⚽',
    count: '110+ games'
  },
  {
    name: 'RPG',
    icon: '⚔️',
    count: '150+ games'
  },
  {
    name: 'Simulation',
    icon: '🏙️',
    count: '80+ games'
  }
]);

const featuredGames = ref([
  {
    title: 'Cosmic Conquest',
    developer: 'Stellar Studios',
    rating: 4.8,
    downloads: '5M+',
    image: 'https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg',
    genre: 'Strategy',
    premium: true,
    description: 'Build your galactic empire, forge alliances, and conquer the universe in this epic space strategy game.'
  },
  {
    title: 'Speed Demons',
    developer: 'Velocity Games',
    rating: 4.7,
    downloads: '10M+',
    image: 'https://images.pexels.com/photos/12670589/pexels-photo-12670589.jpeg',
    genre: 'Racing',
    premium: true,
    description: 'Race through sprawling cities with high-performance cars in this adrenaline-pumping street racing experience.'
  },
  {
    title: 'Quest of Legends',
    developer: 'Mythic Games',
    rating: 4.9,
    downloads: '8M+',
    image: 'https://images.pexels.com/photos/159393/gamepad-video-game-controller-game-controller-controller-159393.jpeg',
    genre: 'RPG',
    premium: true,
    description: 'Embark on an epic quest with customizable heroes, magical abilities, and challenging dungeons.'
  }
]);

const topGames = ref([
  {
    title: 'Puzzle Master',
    developer: 'Brain Games',
    rating: 4.6,
    image: 'https://images.pexels.com/photos/1111597/pexels-photo-1111597.jpeg',
    genre: 'Puzzle'
  },
  {
    title: 'Shadow Warriors',
    developer: 'Ninja Studios',
    rating: 4.8,
    image: 'https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg',
    genre: 'Action'
  },
  {
    title: 'City Builder',
    developer: 'Urban Games',
    rating: 4.5,
    image: 'https://images.pexels.com/photos/681335/pexels-photo-681335.jpeg',
    genre: 'Simulation'
  },
  {
    title: 'World Cup',
    developer: 'Champion Games',
    rating: 4.7,
    image: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg',
    genre: 'Sports'
  },
  {
    title: 'Lost Expedition',
    developer: 'Adventure Box',
    rating: 4.6,
    image: 'https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg',
    genre: 'Adventure'
  },
  {
    title: 'Kingdom Commander',
    developer: 'Royal Games',
    rating: 4.8,
    image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg',
    genre: 'Strategy'
  }
]);

const newReleases = ref([
  {
    title: 'Stellar Odyssey',
    developer: 'Cosmic Games',
    releaseDate: 'June 15, 2025',
    image: 'https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg',
    genre: 'Adventure'
  },
  {
    title: 'Monster Hunter',
    developer: 'Wild Studios',
    releaseDate: 'June 10, 2025',
    image: 'https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg',
    genre: 'Action'
  },
  {
    title: 'Drift Kings',
    developer: 'Speed Masters',
    releaseDate: 'June 5, 2025',
    image: 'https://images.pexels.com/photos/12670589/pexels-photo-12670589.jpeg',
    genre: 'Racing'
  },
  {
    title: 'Brain Challenge',
    developer: 'Mind Games',
    releaseDate: 'June 1, 2025',
    image: 'https://images.pexels.com/photos/1111597/pexels-photo-1111597.jpeg',
    genre: 'Puzzle'
  }
]);

const features = ref([
  {
    title: 'Premium Gaming Library',
    description: 'Access to 1,000+ high-quality games with no ads or in-app purchases',
    icon: '🎮'
  },
  {
    title: 'Cloud Saves',
    description: 'Your game progress syncs across all your devices automatically',
    icon: '☁️'
  },
  {
    title: 'Multiplayer Support',
    description: 'Connect with players worldwide for competitive or cooperative play',
    icon: '🌐'
  },
  {
    title: 'Offline Play',
    description: 'Download games to play without internet connection',
    icon: '📲'
  },
  {
    title: 'Exclusive Content',
    description: 'Access game items, characters, and levels only available to subscribers',
    icon: '🎁'
  },
  {
    title: 'Regular Updates',
    description: 'New games and features added every week to keep your experience fresh',
    icon: '🔄'
  }
]);

const testimonials = ref([
  {
    text: "Having access to so many premium games without ads has completely transformed my gaming experience. The cloud save feature lets me play anywhere!",
    author: "Michael K.",
    location: "Berlin"
  },
  {
    text: "The game selection is fantastic and being able to play without constant interruptions from ads or in-app purchase prompts makes it worth every penny.",
    author: "Sophia J.",
    location: "Paris"
  },
  {
    text: "I love that I can download games for offline play during my commute. Plus, the multiplayer features are excellent for connecting with friends.",
    author: "David L.",
    location: "Madrid"
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
  <div class="games-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Premium Mobile Gaming</h1>
        <p class="subtitle">Unlimited access to 1,000+ high-quality games with no ads or in-app purchases</p>
        <button class="cta-button" @click="navigateToLogin">Start Playing</button>
      </div>
      <div class="hero-visual">
        <div class="game-console">
          <div class="console-screen">
            <div class="game-character"></div>
            <div class="game-elements elem-1"></div>
            <div class="game-elements elem-2"></div>
            <div class="game-elements elem-3"></div>
          </div>
          <div class="console-buttons">
            <div class="button button-1"></div>
            <div class="button button-2"></div>
          </div>
          <div class="console-dpad">
            <div class="dpad-button up"></div>
            <div class="dpad-button right"></div>
            <div class="dpad-button down"></div>
            <div class="dpad-button left"></div>
            <div class="dpad-center"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Categories Section -->
    <section class="categories-section">
      <div class="section-container">
        <h2>Game Categories</h2>
        <div class="categories-grid">
          <div v-for="category in categories" :key="category.name" class="category-card">
            <div class="category-icon">{{ category.icon }}</div>
            <div class="category-info">
              <h3>{{ category.name }}</h3>
              <span class="category-count">{{ category.count }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Games -->
    <section class="featured-games-section">
      <div class="section-container">
        <h2>Featured Games</h2>
        <div class="featured-grid">
          <div v-for="game in featuredGames" :key="game.title" class="featured-card">
            <div class="game-image">
              <img :src="game.image" :alt="game.title">
              <div class="game-overlay">
                <button class="play-button" @click="navigateToLogin">Play Now</button>
              </div>
              <div v-if="game.premium" class="premium-badge">Premium</div>
            </div>
            <div class="game-info">
              <h3>{{ game.title }}</h3>
              <div class="game-meta">
                <span class="game-developer">{{ game.developer }}</span>
                <span class="game-genre">{{ game.genre }}</span>
              </div>
              <div class="game-stats">
                <div class="game-rating">
                  <span class="star">★</span>
                  <span class="rating-value">{{ game.rating }}</span>
                </div>
                <span class="game-downloads">{{ game.downloads }} downloads</span>
              </div>
              <p class="game-description">{{ game.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Top Games -->
    <section class="top-games-section">
      <div class="section-container">
        <h2>Top Rated Games</h2>
        <div class="top-grid">
          <div v-for="game in topGames" :key="game.title" class="top-card">
            <div class="game-image">
              <img :src="game.image" :alt="game.title">
              <div class="game-overlay">
                <button class="play-button small" @click="navigateToLogin">Play</button>
              </div>
            </div>
            <div class="game-info">
              <div class="info-header">
                <h3>{{ game.title }}</h3>
                <div class="game-rating">
                  <span class="star">★</span>
                  <span class="rating-value">{{ game.rating }}</span>
                </div>
              </div>
              <span class="game-developer">{{ game.developer }}</span>
              <span class="game-genre">{{ game.genre }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- New Releases -->
    <section class="new-releases-section">
      <div class="section-container">
        <h2>New Releases</h2>
        <div class="releases-grid">
          <div v-for="game in newReleases" :key="game.title" class="release-card">
            <div class="game-image">
              <img :src="game.image" :alt="game.title">
              <div class="game-overlay">
                <button class="play-button small" @click="navigateToLogin">Play</button>
              </div>
              <div class="new-badge">NEW</div>
            </div>
            <div class="game-info">
              <div class="info-header">
                <h3>{{ game.title }}</h3>
                <span class="release-date">{{ game.releaseDate }}</span>
              </div>
              <span class="game-developer">{{ game.developer }}</span>
              <span class="game-genre">{{ game.genre }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <div class="section-container">
        <h2>Premium Gaming Features</h2>
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
        <h2>What Gamers Say</h2>
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

    <!-- Subscription Plan -->
    <section class="subscription-section">
      <div class="section-container">
        <div class="subscription-grid">
          <div class="subscription-content">
            <h2>Gaming Subscription</h2>
            <p class="subscription-description">Unlock the ultimate mobile gaming experience with our premium subscription.</p>
            
            <div class="pricing-box">
              <div class="pricing-header">
                <h3>Games Premium</h3>
                <div class="pricing-amount">
                  <span class="price">€12.99</span>
                  <span class="period">/month</span>
                </div>
              </div>
              <ul class="pricing-features">
                <li><span class="check-icon">✓</span> Unlimited access to 1,000+ premium games</li>
                <li><span class="check-icon">✓</span> No ads or in-app purchases</li>
                <li><span class="check-icon">✓</span> Cross-device cloud saves</li>
                <li><span class="check-icon">✓</span> Multiplayer capabilities</li>
                <li><span class="check-icon">✓</span> Exclusive game content</li>
                <li><span class="check-icon">✓</span> New games added weekly</li>
              </ul>
              <div class="payment-method">
                <span class="payment-icon">📱</span>
                <p>Billed directly to your phone - no credit card needed</p>
              </div>
              <button class="pricing-button" @click="navigateToLogin">Subscribe Now</button>
            </div>
          </div>
          <div class="subscription-visual">
            <div class="phone-mockup">
              <div class="phone-screen">
                <div class="game-interface">
                  <div class="game-preview">
                    <div class="preview-character"></div>
                  </div>
                  <div class="game-ui">
                    <div class="ui-element"></div>
                    <div class="ui-element"></div>
                    <div class="ui-element"></div>
                  </div>
                </div>
                <div class="game-library">
                  <div class="library-header">Your Game Library</div>
                  <div class="library-items">
                    <div class="game-item"></div>
                    <div class="game-item"></div>
                    <div class="game-item"></div>
                  </div>
                  <div class="payment-badge">
                    <div class="badge-icon">✓</div>
                    <div class="badge-text">Premium Activated</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-container">
        <h2>Ready to Level Up Your Gaming?</h2>
        <p>Join millions of players enjoying premium mobile games</p>
        <button class="cta-button large" @click="navigateToLogin">Get Started Now</button>
      </div>
    </section>
  </div>
</template>

<style scoped>
.games-page {
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  color: #1F2937;
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

.game-console {
  width: 300px;
  height: 400px;
  background: #1F2937;
  border-radius: 20px;
  padding: 20px;
  position: relative;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
}

.console-screen {
  width: 100%;
  height: 60%;
  background: #111827;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  margin-bottom: 20px;
}

.game-character {
  width: 30px;
  height: 30px;
  background: #A78BFA;
  border-radius: 50%;
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  animation: jump 1.5s infinite ease-in-out;
}

@keyframes jump {
  0%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(-30px);
  }
}

.game-elements {
  position: absolute;
  width: 20px;
  height: 10px;
  background: #6D28D9;
  border-radius: 5px;
}

.elem-1 {
  bottom: 0;
  left: 20%;
  width: 60px;
}

.elem-2 {
  bottom: 0;
  left: 50%;
  width: 40px;
}

.elem-3 {
  bottom: 0;
  right: 20%;
  width: 30px;
}

.console-buttons {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
}

.button {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #6D28D9;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

.console-dpad {
  position: relative;
  width: 100px;
  height: 100px;
  margin: 0 auto;
}

.dpad-button {
  position: absolute;
  width: 30px;
  height: 30px;
  background: #4B5563;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

.up {
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 5px 5px 0 0;
}

.right {
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  border-radius: 0 5px 5px 0;
}

.down {
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 0 0 5px 5px;
}

.left {
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  border-radius: 5px 0 0 5px;
}

.dpad-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  background: #6B7280;
  border-radius: 5px;
}

/* Categories Section */
.categories-section {
  padding: 6rem 0;
  background: white;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.category-card {
  background: #F9FAFB;
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.category-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);
  background: #6D28D9;
  color: white;
}

.category-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  display: block;
}

.category-info h3 {
  color: #1F2937;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
  transition: color 0.3s ease;
}

.category-card:hover .category-info h3 {
  color: white;
}

.category-count {
  color: #6B7280;
  font-size: 0.95rem;
  transition: color 0.3s ease;
}

.category-card:hover .category-count {
  color: rgba(255, 255, 255, 0.8);
}

/* Featured Games */
.featured-games-section {
  padding: 6rem 0;
  background: #F9FAFB;
}

.featured-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.featured-card {
  display: grid;
  grid-template-columns: 1fr 2fr;
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.featured-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);
}

.game-image {
  position: relative;
  height: 100%;
}

.game-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.featured-card:hover .game-image img {
  transform: scale(1.05);
}

.game-overlay {
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

.featured-card:hover .game-overlay {
  opacity: 1;
}

.premium-badge {
  position: absolute;
  top: 15px;
  right: 15px;
  background: #F59E0B;
  color: white;
  font-size: 0.8rem;
  padding: 0.3rem 0.7rem;
  border-radius: 50px;
  font-weight: 600;
  z-index: 2;
}

.play-button {
  background: #6D28D9;
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.play-button:hover {
  background: #5B21B6;
  transform: scale(1.05);
}

.play-button.small {
  padding: 0.6rem 1.5rem;
  font-size: 0.9rem;
}

.game-info {
  padding: 2rem;
}

.game-info h3 {
  color: #1F2937;
  font-size: 1.5rem;
  margin-bottom: 0.8rem;
  font-weight: 700;
}

.game-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.2rem;
  font-size: 0.95rem;
}

.game-developer {
  color: #6B7280;
}

.game-genre {
  color: #6D28D9;
  font-weight: 600;
}

.game-stats {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.2rem;
  font-size: 0.95rem;
}

.game-rating {
  display: flex;
  align-items: center;
}

.star {
  color: #F59E0B;
  margin-right: 0.3rem;
  font-size: 1.1rem;
}

.rating-value {
  font-weight: 600;
  color: #1F2937;
}

.game-downloads {
  color: #6B7280;
}

.game-description {
  color: #4B5563;
  line-height: 1.6;
}

/* Top Games */
.top-games-section {
  padding: 6rem 0;
  background: white;
}

.top-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.top-card {
  background: #F9FAFB;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.top-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);
}

.top-card .game-image {
  height: 180px;
}

.top-card .game-info {
  padding: 1.5rem;
}

.info-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.info-header h3 {
  font-size: 1.2rem;
  margin: 0;
}

.top-card .game-developer {
  margin-bottom: 0.5rem;
  display: block;
}

.new-badge {
  position: absolute;
  top: 15px;
  right: 15px;
  background: #6D28D9;
  color: white;
  font-size: 0.8rem;
  padding: 0.3rem 0.7rem;
  border-radius: 50px;
  font-weight: 600;
  z-index: 2;
}

/* New Releases */
.new-releases-section {
  padding: 6rem 0;
  background: #F9FAFB;
}

.releases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.release-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.release-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);
}

.release-date {
  color: #6B7280;
  font-size: 0.85rem;
}

/* Features Section */
.features-section {
  padding: 6rem 0;
  background: white;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: #F9FAFB;
  padding: 2.5rem 2rem;
  border-radius: 1rem;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  text-align: center;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);
  background: linear-gradient(135deg, #6D28D9 0%, #A78BFA 100%);
  color: white;
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  display: block;
}

.feature-card h3 {
  color: #1F2937;
  font-size: 1.4rem;
  margin-bottom: 1rem;
  font-weight: 700;
  transition: color 0.3s ease;
}

.feature-card:hover h3 {
  color: white;
}

.feature-card p {
  color: #4B5563;
  line-height: 1.6;
  transition: color 0.3s ease;
}

.feature-card:hover p {
  color: rgba(255, 255, 255, 0.9);
}

/* Testimonials */
.testimonials-section {
  padding: 6rem 0;
  background: #F9FAFB;
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
  border-radius: 1rem;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.05);
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
  border: none;
  cursor: pointer;
  margin: 0 2rem;
  transition: all 0.3s ease;
  box-shadow: 0 10px 25px rgba(109, 40, 217, 0.2);
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

/* Subscription Section */
.subscription-section {
  padding: 6rem 0;
  background: white;
}

.subscription-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.subscription-content h2 {
  text-align: left;
  margin-bottom: 1.5rem;
}

.subscription-description {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #4B5563;
  margin-bottom: 2rem;
}

.pricing-box {
  background: #F9FAFB;
  padding: 2.5rem;
  border-radius: 1.5rem;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.pricing-box:hover {
  transform: translateY(-10px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);
}

.pricing-header {
  text-align: center;
  margin-bottom: 2rem;
}

.pricing-header h3 {
  color: #1F2937;
  font-size: 1.8rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.pricing-amount {
  margin-bottom: 1rem;
}

.price {
  font-size: 3rem;
  font-weight: 800;
  color: #6D28D9;
}

.period {
  font-size: 1.1rem;
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

.payment-method {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 1rem;
  background: rgba(109, 40, 217, 0.05);
  border-radius: 0.5rem;
}

.payment-icon {
  font-size: 1.5rem;
}

.payment-method p {
  margin: 0;
  color: #4B5563;
  font-size: 0.95rem;
}

.pricing-button {
  background: #6D28D9;
  color: white;
  width: 100%;
  padding: 1rem;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.pricing-button:hover {
  background: #5B21B6;
  transform: translateY(-3px);
}

.phone-mockup {
  width: 280px;
  height: 550px;
  background: #1F2937;
  border-radius: 40px;
  padding: 15px;
  margin: 0 auto;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2);
  position: relative;
}

.phone-screen {
  width: 100%;
  height: 100%;
  background: #111827;
  border-radius: 30px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.game-interface {
  flex: 1;
  background: linear-gradient(135deg, #6D28D9 0%, #A78BFA 100%);
  position: relative;
  overflow: hidden;
}

.game-preview {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.preview-character {
  width: 30px;
  height: 30px;
  background: white;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: float 3s infinite ease-in-out;
}

@keyframes float {
  0%, 100% {
    transform: translate(-50%, -50%);
  }
  50% {
    transform: translate(-50%, -60%);
  }
}

.game-ui {
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  display: flex;
  justify-content: space-between;
}

.ui-element {
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
}

.game-library {
  height: 200px;
  background: #1F2937;
  padding: 20px;
  position: relative;
}

.library-header {
  color: white;
  margin-bottom: 15px;
  font-weight: 600;
}

.library-items {
  display: flex;
  gap: 10px;
  overflow-x: auto;
  padding-bottom: 10px;
  margin-bottom: 10px;
}

.game-item {
  width: 80px;
  height: 80px;
  background: #374151;
  border-radius: 10px;
  flex-shrink: 0;
}

.payment-badge {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: #10B981;
  border-radius: 50px;
  padding: 0.5rem 1rem;
  color: white;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
}

.badge-icon {
  width: 18px;
  height: 18px;
  background: white;
  color: #10B981;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.7rem;
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
@media (max-width: 1200px) {
  .hero {
    grid-template-columns: 1fr;
    min-height: auto;
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

  .featured-card {
    grid-template-columns: 1fr;
  }

  .featured-card .game-image {
    height: 300px;
  }

  .subscription-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .subscription-content {
    text-align: center;
  }

  .subscription-content h2 {
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

  .game-console {
    width: 250px;
    height: 350px;
  }

  .top-grid, .releases-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  .features-grid {
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

  .game-console {
    width: 220px;
    height: 300px;
    padding: 15px;
  }

  .console-dpad {
    width: 80px;
    height: 80px;
  }

  .dpad-button {
    width: 25px;
    height: 25px;
  }

  .button {
    width: 35px;
    height: 35px;
  }

  .top-grid, .releases-grid, .categories-grid {
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }

  .top-card .game-image, .release-card .game-image {
    height: 150px;
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

  .pricing-box {
    padding: 1.5rem;
  }

  .price {
    font-size: 2.5rem;
  }

  .pricing-header h3 {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .hero h1 {
    font-size: 2.2rem;
  }

  .top-grid, .releases-grid, .categories-grid {
    grid-template-columns: 1fr;
  }

  .top-card .game-image, .release-card .game-image {
    height: 180px;
  }

  .cta-section h2 {
    font-size: 1.8rem;
  }

  .phone-mockup {
    width: 250px;
    height: 480px;
  }
}
</style>