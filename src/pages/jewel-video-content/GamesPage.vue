<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Featured games
const featuredGames = ref([
  {
    title: 'Cosmic Odyssey',
    genre: 'Adventure RPG',
    rating: 4.9,
    downloads: '15M+',
    image: 'https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg',
    description: 'Embark on an epic journey through a vast universe filled with unique planets, alien species, and ancient mysteries.'
  },
  {
    title: 'Urban Legends',
    genre: 'Action',
    rating: 4.8,
    downloads: '20M+',
    image: 'https://images.pexels.com/photos/1293260/pexels-photo-1293260.jpeg',
    description: 'Navigate through a dystopian cityscape, build your criminal empire, and rise to power in this action-packed adventure.'
  },
  {
    title: 'Mind Puzzle Masters',
    genre: 'Puzzle',
    rating: 4.7,
    downloads: '12M+',
    image: 'https://images.pexels.com/photos/1111597/pexels-photo-1111597.jpeg',
    description: 'Challenge your brain with thousands of increasingly complex puzzles designed to test your logical thinking and creativity.'
  }
]);

// Game categories
const categories = ref([
  {
    name: 'Action',
    games: 120,
    image: 'https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg'
  },
  {
    name: 'Adventure',
    games: 85,
    image: 'https://images.pexels.com/photos/1174746/pexels-photo-1174746.jpeg'
  },
  {
    name: 'Role Playing',
    games: 75,
    image: 'https://images.pexels.com/photos/7360366/pexels-photo-7360366.jpeg'
  },
  {
    name: 'Strategy',
    games: 90,
    image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg'
  },
  {
    name: 'Puzzle',
    games: 110,
    image: 'https://images.pexels.com/photos/1314435/pexels-photo-1314435.jpeg'
  },
  {
    name: 'Sports',
    games: 65,
    image: 'https://images.pexels.com/photos/4254905/pexels-photo-4254905.jpeg'
  }
]);

// New releases
const newGames = ref([
  {
    title: 'Shadow Realm',
    genre: 'RPG',
    rating: 4.6,
    image: 'https://images.pexels.com/photos/7915357/pexels-photo-7915357.jpeg'
  },
  {
    title: 'Race Champions',
    genre: 'Racing',
    rating: 4.7,
    image: 'https://images.pexels.com/photos/1034662/pexels-photo-1034662.jpeg'
  },
  {
    title: 'Block Builder Pro',
    genre: 'Simulation',
    rating: 4.5,
    image: 'https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg'
  },
  {
    title: 'Mystery Manor',
    genre: 'Adventure',
    rating: 4.8,
    image: 'https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg'
  }
]);

// Premium features
const features = ref([
  {
    title: 'Ad-Free Experience',
    description: 'Enjoy uninterrupted gameplay without any advertisements',
    icon: '🚫'
  },
  {
    title: 'Offline Mode',
    description: 'Download and play games without an internet connection',
    icon: '📱'
  },
  {
    title: 'Exclusive Content',
    description: 'Access premium levels, characters, and items not available to free users',
    icon: '🎮'
  },
  {
    title: 'Cloud Saves',
    description: 'Your game progress is automatically synced across all your devices',
    icon: '☁️'
  }
]);

const handleSubscribe = () => {
  router.push('/jewel-video-content/payment');
};

const handlePlayGame = (gameTitle) => {
  router.push('/login');
};
</script>

<template>
  <div class="games-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <span class="badge">PREMIUM GAMES</span>
        <h1>Unlimited Mobile Gaming</h1>
        <p>Hundreds of premium games. No ads. No in-app purchases.</p>
        <div class="hero-actions">
          <button @click="handleSubscribe" class="primary-button">Start Free Trial</button>
          <button @click="handlePlayGame('featured')" class="secondary-button">
            <span class="play-icon">▶</span> Play Featured Games
          </button>
        </div>
      </div>
      <div class="hero-backdrop"></div>
    </section>

    <!-- Featured Games Section -->
    <section class="featured-section">
      <div class="container">
        <h2>Featured Games</h2>
        <div class="featured-grid">
          <div v-for="game in featuredGames" :key="game.title" class="featured-card">
            <div class="game-image">
              <img :src="game.image" :alt="game.title">
              <div class="game-overlay">
                <button @click="handlePlayGame(game.title)" class="play-button">Play Now</button>
              </div>
            </div>
            <div class="game-info">
              <div class="game-header">
                <h3>{{ game.title }}</h3>
                <div class="rating">
                  <span class="star">★</span>
                  {{ game.rating }}
                </div>
              </div>
              <div class="game-meta">
                <span class="genre">{{ game.genre }}</span>
                <span class="downloads">{{ game.downloads }} downloads</span>
              </div>
              <p class="description">{{ game.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Categories Section -->
    <section class="categories-section">
      <div class="container">
        <h2>Game Categories</h2>
        <div class="categories-grid">
          <div v-for="category in categories" :key="category.name" class="category-card">
            <div class="category-image">
              <img :src="category.image" :alt="category.name">
              <div class="category-overlay"></div>
            </div>
            <div class="category-info">
              <h3>{{ category.name }}</h3>
              <p>{{ category.games }} games</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- New Releases Section -->
    <section class="new-releases-section">
      <div class="container">
        <h2>New Releases</h2>
        <div class="new-games-grid">
          <div v-for="game in newGames" :key="game.title" class="new-game-card">
            <div class="game-image">
              <img :src="game.image" :alt="game.title">
              <div class="game-overlay">
                <button @click="handlePlayGame(game.title)" class="play-button">Play Now</button>
              </div>
              <div class="new-badge">NEW</div>
            </div>
            <div class="game-info">
              <h3>{{ game.title }}</h3>
              <div class="game-meta">
                <span class="genre">{{ game.genre }}</span>
                <div class="rating">
                  <span class="star">★</span>
                  {{ game.rating }}
                </div>
              </div>
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
        <h2>Ready to Play?</h2>
        <p>Get unlimited access to premium games with phone billing.</p>
        <button @click="handleSubscribe" class="primary-button">Get Premium</button>
        <p class="cta-note">No credit card needed. Cancel anytime.</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.games-page {
  min-height: 100vh;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  color: #1a1a1a;
  background-color: #18181b;
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
  background-image: url('https://images.pexels.com/photos/159393/gamepad-video-game-controller-game-controller-controller-159393.jpeg');
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
  background: #c026d3;
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

/* Featured Games Section */
.featured-section {
  padding: 5rem 0;
}

.featured-section h2, 
.categories-section h2, 
.new-releases-section h2,
.features-section h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  text-align: center;
  color: #f8fafc;
  position: relative;
}

.featured-section h2::after,
.categories-section h2::after,
.new-releases-section h2::after,
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

.featured-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2.5rem;
}

.featured-card {
  background: #27272a;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.featured-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
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

.featured-card:hover .game-image img,
.new-game-card:hover .game-image img {
  transform: scale(1.1);
}

.game-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.3s ease;
}

.featured-card:hover .game-overlay,
.new-game-card:hover .game-overlay {
  opacity: 1;
}

.play-button {
  background: linear-gradient(to right, #9333ea, #c026d3);
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.play-button:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 20px rgba(147, 51, 234, 0.3);
}

.game-info {
  padding: 1.5rem;
}

.game-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.game-header h3 {
  font-size: 1.3rem;
  font-weight: 600;
  color: white;
}

.rating {
  color: #fbbf24;
  font-weight: 600;
}

.star {
  margin-right: 0.25rem;
}

.game-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.genre {
  background: #4f46e5;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
}

.downloads {
  color: #a1a1aa;
  font-size: 0.9rem;
}

.description {
  color: #d4d4d8;
  font-size: 0.95rem;
  line-height: 1.6;
}

/* Categories Section */
.categories-section {
  padding: 5rem 0;
  background: #0f0f11;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
}

.category-card {
  position: relative;
  border-radius: 1.5rem;
  overflow: hidden;
  height: 180px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

.category-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
}

.category-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.category-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.category-card:hover .category-image img {
  transform: scale(1.1);
}

.category-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 100%);
}

.category-info {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem;
  box-sizing: border-box;
}

.category-info h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
  margin-bottom: 0.5rem;
}

.category-info p {
  color: #a1a1aa;
  font-size: 0.9rem;
}

/* New Releases Section */
.new-releases-section {
  padding: 5rem 0;
}

.new-games-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
}

.new-game-card {
  background: #27272a;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.new-game-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
}

.new-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #c026d3;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  z-index: 2;
}

/* Features Section */
.features-section {
  padding: 5rem 0;
  background: #0f0f11;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2.5rem;
}

.feature-card {
  background: #27272a;
  border-radius: 1.5rem;
  padding: 2rem;
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
}

.feature-icon {
  font-size: 2.5rem;
  flex-shrink: 0;
}

.feature-content h3 {
  font-size: 1.3rem;
  font-weight: 600;
  color: white;
  margin-bottom: 0.75rem;
}

.feature-content p {
  color: #a1a1aa;
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
}

.cta-section p {
  font-size: 1.3rem;
  margin-bottom: 2.5rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  color: rgba(255, 255, 255, 0.9);
}

.cta-note {
  font-size: 1rem;
  opacity: 0.8;
  margin-top: 1.5rem;
}

/* Responsive Design */
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
  
  .featured-section h2, 
  .categories-section h2, 
  .new-releases-section h2,
  .features-section h2 {
    font-size: 2rem;
  }
  
  .hero-actions {
    flex-direction: column;
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }
  
  .game-header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .rating {
    margin-top: 0.5rem;
  }
  
  .game-meta {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
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
  .secondary-button,
  .play-button {
    font-size: 1rem;
    padding: 0.875rem 1.75rem;
  }
  
  .featured-card,
  .new-game-card {
    min-width: 100%;
  }
  
  .feature-icon {
    font-size: 2rem;
  }
  
  .feature-content h3 {
    font-size: 1.2rem;
  }
}
</style>