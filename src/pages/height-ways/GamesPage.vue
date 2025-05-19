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
    title: 'Epic Quest: Legends',
    developer: 'Mystic Studios',
    rating: 4.8,
    downloads: '5M+',
    image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg',
    genre: 'RPG',
    premium: true,
    description: 'Embark on an epic journey through a vast fantasy world filled with mythical creatures, ancient mysteries, and powerful magic.'
  },
  {
    title: 'Velocity Rush',
    developer: 'Turbo Games',
    rating: 4.7,
    downloads: '8M+',
    image: 'https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg',
    genre: 'Racing',
    premium: true,
    description: 'Experience high-octane racing action across stunning environments with cutting-edge graphics and realistic physics.'
  },
  {
    title: 'Strategic Conquest',
    developer: 'Master Mind Games',
    rating: 4.9,
    downloads: '3M+',
    image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg',
    genre: 'Strategy',
    premium: true,
    description: 'Build your empire, train powerful armies, and outwit opponents in this deep strategy game of conquest and diplomacy.'
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
    title: 'Shadow Warrior',
    developer: 'Action Studios',
    rating: 4.8,
    image: 'https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg',
    genre: 'Action'
  },
  {
    title: 'Farm Life',
    developer: 'Green Valley Games',
    rating: 4.5,
    image: 'https://images.pexels.com/photos/681335/pexels-photo-681335.jpeg',
    genre: 'Simulation'
  },
  {
    title: 'Goal Champion',
    developer: 'Sports Interactive',
    rating: 4.7,
    image: 'https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg',
    genre: 'Sports'
  },
  {
    title: "Explorer's Quest",
    developer: 'Horizon Studios',
    rating: 4.6,
    image: 'https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg',
    genre: 'Adventure'
  },
  {
    title: 'Medieval Empire',
    developer: 'Kingdom Games',
    rating: 4.8,
    image: 'https://images.pexels.com/photos/411207/pexels-photo-411207.jpeg',
    genre: 'Strategy'
  }
]);

const newReleases = ref([
  {
    title: 'Space Explorers',
    developer: 'Galaxy Games',
    releaseDate: 'June 15, 2025',
    image: 'https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg',
    genre: 'Adventure'
  },
  {
    title: 'Monster Hunter',
    developer: 'Wild Studios',
    releaseDate: 'June 10, 2025',
    image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg',
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
    title: 'Mind Puzzles',
    developer: 'Brain Teasers Inc',
    releaseDate: 'June 1, 2025',
    image: 'https://images.pexels.com/photos/1111597/pexels-photo-1111597.jpeg',
    genre: 'Puzzle'
  }
]);

const features = ref([
  {
    title: 'Premium Gaming Experience',
    description: 'Enjoy high-quality games with no ads, interruptions, or annoying paywalls',
    icon: '🎲'
  },
  {
    title: 'Cloud Saves',
    description: 'Your game progress syncs across all your devices automatically',
    icon: '☁️'
  },
  {
    title: 'Multiplayer Support',
    description: 'Connect and play with friends and competitors worldwide',
    icon: '🌐'
  },
  {
    title: 'Regular Updates',
    description: 'New games and features added every month keeps your experience fresh',
    icon: '🆕'
  },
  {
    title: 'Exclusive Content',
    description: 'Access special in-game items and levels only available to subscribers',
    icon: '🎁'
  },
  {
    title: 'Offline Play',
    description: 'Download games to play without internet connection',
    icon: '📲'
  }
]);

const paymentInfo = ref({
  title: 'Gaming Premium',
  price: '€12.99',
  period: 'per month',
  features: [
    'Unlimited access to our entire game catalog',
    'No advertisements or in-app purchases',
    'Premium in-game content and bonuses',
    'Priority customer support',
    'New games added every month'
  ],
  billingInfo: 'Conveniently billed directly to your phone - no credit card needed'
});

const handleLogin = () => {
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
        <button class="primary-btn" @click="handleLogin">Login Now</button>
      </div>
    </section>

    <!-- Featured Games -->
    <section class="featured-games-section">
      <h2 class="section-title">Featured Games</h2>
      <div class="featured-grid">
        <div v-for="game in featuredGames" :key="game.title" class="featured-card">
          <div class="game-image">
            <img :src="game.image" :alt="game.title">
            <div class="game-overlay">
              <button class="play-btn" @click="handleLogin">Play Now</button>
            </div>
            <div v-if="game.premium" class="premium-badge">Premium</div>
          </div>
          <div class="game-info">
            <h3>{{ game.title }}</h3>
            <div class="game-meta">
              <span class="developer">{{ game.developer }}</span>
              <span class="genre">{{ game.genre }}</span>
            </div>
            <div class="game-stats">
              <div class="rating">
                <span class="star">★</span>
                <span class="rating-value">{{ game.rating }}</span>
              </div>
              <span class="downloads">{{ game.downloads }} downloads</span>
            </div>
            <p class="description">{{ game.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Game Categories -->
    <section class="categories-section">
      <h2 class="section-title">Browse by Category</h2>
      <div class="categories-grid">
        <div v-for="category in categories" :key="category.name" class="category-card">
          <div class="category-icon">{{ category.icon }}</div>
          <div class="category-info">
            <h3>{{ category.name }}</h3>
            <span class="count">{{ category.count }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Top Games -->
    <section class="top-games-section">
      <h2 class="section-title">Top Rated Games</h2>
      <div class="top-grid">
        <div v-for="game in topGames" :key="game.title" class="top-card">
          <div class="game-image">
            <img :src="game.image" :alt="game.title">
            <div class="game-overlay">
              <button class="play-btn small" @click="handleLogin">Play</button>
            </div>
          </div>
          <div class="game-info">
            <h3>{{ game.title }}</h3>
            <span class="developer">{{ game.developer }}</span>
            <div class="game-bottom">
              <div class="genre">{{ game.genre }}</div>
              <div class="rating">
                <span class="star">★</span>
                <span class="rating-value">{{ game.rating }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- New Releases -->
    <section class="new-releases-section">
      <h2 class="section-title">New Releases</h2>
      <div class="releases-grid">
        <div v-for="game in newReleases" :key="game.title" class="release-card">
          <div class="game-image">
            <img :src="game.image" :alt="game.title">
            <div class="game-overlay">
              <button class="play-btn small" @click="handleLogin">Play</button>
            </div>
            <div class="new-badge">NEW</div>
          </div>
          <div class="game-info">
            <h3>{{ game.title }}</h3>
            <span class="developer">{{ game.developer }}</span>
            <div class="game-bottom">
              <div class="genre">{{ game.genre }}</div>
              <div class="release-date">{{ game.releaseDate }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <h2 class="section-title">Premium Gaming Features</h2>
      <div class="features-grid">
        <div v-for="feature in features" :key="feature.title" class="feature-card">
          <span class="feature-icon">{{ feature.icon }}</span>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </div>
      </div>
    </section>

    <!-- Payment Section -->
    <section class="payment-section">
      <h2 class="section-title">Gaming Subscription</h2>
      <div class="payment-card">
        <h3>{{ paymentInfo.title }}</h3>
        <div class="payment-price">
          <span class="price">{{ paymentInfo.price }}</span>
          <span class="period">{{ paymentInfo.period }}</span>
        </div>
        <ul class="payment-features">
          <li v-for="feature in paymentInfo.features" :key="feature">
            <span class="check">✓</span> {{ feature }}
          </li>
        </ul>
        <p class="billing-info">{{ paymentInfo.billingInfo }}</p>
        <button class="primary-btn full-width" @click="handleLogin">Login Now</button>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-content">
        <h2>Ready to Level Up Your Gaming?</h2>
        <p>Join millions of players enjoying premium mobile games</p>
        <button class="primary-btn" @click="handleLogin">Login Now</button>
      </div>
    </section>
  </div>
</template>

<style scoped>
.games-page {
  color: #333;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #007BFF 0%, #6C63FF 100%);
  color: white;
  padding: 10rem 2rem 8rem;
  text-align: center;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero h1 {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.subtitle {
  font-size: 1.5rem;
  opacity: 0.9;
  margin-bottom: 2.5rem;
}

.primary-btn {
  background: white;
  color: #007BFF;
  font-size: 1.2rem;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.primary-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.full-width {
  width: 100%;
}

/* Section Title */
.section-title {
  text-align: center;
  font-size: 2.5rem;
  color: #007BFF;
  margin-bottom: 3rem;
}

/* Featured Games */
.featured-games-section {
  padding: 5rem 2rem;
  background: white;
}

.featured-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.featured-card {
  background: #f8fafc;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0,0,0,0.08);
  transition: transform 0.3s ease;
}

.featured-card:hover {
  transform: translateY(-5px);
}

.game-image {
  position: relative;
  height: 200px;
  overflow: hidden;
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
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.featured-card:hover .game-overlay {
  opacity: 1;
}

.play-btn {
  background: #007BFF;
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.play-btn.small {
  padding: 0.6rem 1.5rem;
  font-size: 0.9rem;
}

.play-btn:hover {
  background: #0069d9;
  transform: scale(1.05);
}

.premium-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #FFD700;
  color: #333;
  font-size: 0.7rem;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  font-weight: 600;
}

.new-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #007BFF;
  color: white;
  font-size: 0.7rem;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  font-weight: 600;
}

.game-info {
  padding: 1.5rem;
}

.game-info h3 {
  color: #333;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.game-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.developer {
  color: #718096;
}

.genre {
  color: #007BFF;
  font-weight: 500;
}

.game-stats {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.rating {
  display: flex;
  align-items: center;
}

.star {
  color: #FFD700;
  margin-right: 0.3rem;
}

.rating-value {
  font-weight: 600;
}

.downloads {
  color: #718096;
}

.description {
  color: #4a5568;
  font-size: 0.95rem;
  line-height: 1.6;
}

/* Game Categories */
.categories-section {
  padding: 5rem 2rem;
  background: #f8fafc;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.category-card {
  background: white;
  display: flex;
  align-items: center;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  transition: transform 0.3s ease;
}

.category-card:hover {
  transform: translateY(-5px);
}

.category-icon {
  font-size: 2.5rem;
  margin-right: 1rem;
}

.category-info h3 {
  color: #333;
  margin-bottom: 0.3rem;
  font-size: 1.1rem;
}

.count {
  color: #718096;
  font-size: 0.85rem;
}

/* Top Games */
.top-games-section {
  padding: 5rem 2rem;
  background: white;
}

.top-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.top-card {
  background: #f8fafc;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  transition: transform 0.3s ease;
}

.top-card:hover {
  transform: translateY(-5px);
}

.top-card .game-image {
  height: 160px;
}

.top-card .game-info {
  padding: 1.2rem;
}

.game-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.8rem;
}

/* New Releases */
.new-releases-section {
  padding: 5rem 2rem;
  background: #f8fafc;
}

.releases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
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

.release-date {
  color: #718096;
  font-size: 0.85rem;
}

/* Features Section */
.features-section {
  padding: 5rem 2rem;
  background: white;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  background: #f8fafc;
  padding: 2.5rem 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  transition: transform 0.3s ease;
  text-align: center;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  display: block;
}

.feature-card h3 {
  color: #007BFF;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.feature-card p {
  color: #4a5568;
  line-height: 1.6;
}

/* Payment Section */
.payment-section {
  padding: 5rem 2rem;
  background: #f8fafc;
  display: flex;
  justify-content: center;
}

.payment-card {
  background: white;
  padding: 3rem;
  border-radius: 1rem;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  max-width: 500px;
  width: 100%;
  text-align: center;
}

.payment-card h3 {
  color: #007BFF;
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.payment-price {
  margin-bottom: 2rem;
}

.price {
  font-size: 3rem;
  font-weight: 800;
  color: #007BFF;
}

.period {
  font-size: 1.2rem;
  color: #718096;
}

.payment-features {
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
  text-align: left;
}

.payment-features li {
  padding: 0.75rem 0;
  border-bottom: 1px solid #f0f4f8;
  color: #4a5568;
  display: flex;
  align-items: center;
}

.payment-features li:last-child {
  border-bottom: none;
}

.check {
  color: #007BFF;
  margin-right: 0.75rem;
  font-weight: bold;
}

.billing-info {
  font-style: italic;
  color: #718096;
  margin-bottom: 2rem;
  font-size: 0.95rem;
}

/* CTA Section */
.cta-section {
  background: linear-gradient(135deg, #007BFF 0%, #6C63FF 100%);
  color: white;
  text-align: center;
  padding: 6rem 2rem;
}

.cta-content {
  max-width: 800px;
  margin: 0 auto;
}

.cta-content h2 {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.cta-content p {
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  opacity: 0.9;
}

.cta-section .primary-btn {
  color: #007BFF;
}

/* Responsive Styles */
@media (max-width: 1024px) {
  .featured-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.8rem;
  }
  
  .subtitle {
    font-size: 1.2rem;
  }
  
  .top-grid, .releases-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
  
  .categories-grid {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
  
  .payment-card {
    padding: 2rem;
  }
  
  .cta-content h2 {
    font-size: 2.5rem;
  }
}

@media (max-width: 640px) {
  .hero h1 {
    font-size: 2.5rem;
  }
  
  .top-grid, .releases-grid {
    grid-template-columns: 1fr 1fr;
  }
  
  .categories-grid {
    grid-template-columns: 1fr 1fr;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .cta-content h2 {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 8rem 1.5rem 6rem;
  }
  
  .hero h1 {
    font-size: 2.2rem;
  }
  
  .subtitle {
    font-size: 1.1rem;
  }
  
  .top-grid, .releases-grid {
    grid-template-columns: 1fr;
  }
  
  .payment-card {
    padding: 1.5rem;
  }
  
  .price {
    font-size: 2.5rem;
  }
}
</style>