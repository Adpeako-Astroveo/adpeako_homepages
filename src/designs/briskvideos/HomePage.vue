<template>
  <div class="briskvideos-home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>The Ultimate Gaming Experience</h1>
        <p>Play thousands of premium games instantly with no downloads</p>
        <div class="hero-buttons">
          <router-link to="/games" class="primary-btn">Explore Games</router-link>
          <router-link to="/signup" class="secondary-btn">Sign Up Now</router-link>
        </div>
      </div>
      <div class="hero-featured-game">
        <img src="https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg" alt="Featured Game">
        <div class="game-overlay">
          <h2>Cyber Assault</h2>
          <p>The #1 Action Game of 2024</p>
          <router-link to="/login" class="play-now-btn">Play Now</router-link>
        </div>
      </div>
    </section>

    <!-- Categories Section -->
    <section class="categories">
      <h2>Top Categories</h2>
      <div class="categories-grid">
        <router-link to="/categories/action" class="category-card">
          <div class="category-icon">🔥</div>
          <h3>Action</h3>
          <p>124 Games</p>
        </router-link>
        <router-link to="/categories/puzzle" class="category-card">
          <div class="category-icon">🧩</div>
          <h3>Puzzle</h3>
          <p>98 Games</p>
        </router-link>
        <router-link to="/categories/adventure" class="category-card">
          <div class="category-icon">🌄</div>
          <h3>Adventure</h3>
          <p>86 Games</p>
        </router-link>
        <router-link to="/categories/strategy" class="category-card">
          <div class="category-icon">♟️</div>
          <h3>Strategy</h3>
          <p>67 Games</p>
        </router-link>
        <router-link to="/categories/multiplayer" class="category-card">
          <div class="category-icon">👥</div>
          <h3>Multiplayer</h3>
          <p>73 Games</p>
        </router-link>
      </div>
    </section>

    <!-- Trending Games Section -->
    <section class="trending-games">
      <div class="section-header">
        <h2>Trending Games</h2>
        <router-link to="/games" class="view-all">View All</router-link>
      </div>
      <div class="games-carousel">
        <div v-for="game in trendingGames" :key="game.id" class="game-card">
          <div class="game-img-container">
            <img :src="game.image" :alt="game.title" class="game-img">
            <div class="game-overlay">
              <router-link to="/login" class="play-btn">Play Now</router-link>
            </div>
            <div class="game-rating">{{ game.rating }}</div>
          </div>
          <div class="game-info">
            <h3>{{ game.title }}</h3>
            <div class="game-meta">
              <span class="game-genre">{{ game.genre }}</span>
              <span class="game-plays">{{ game.plays }} Plays</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <h2>Why Choose BriskVideos?</h2>
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">🎮</div>
          <h3>Instant Play</h3>
          <p>No downloads or installations required. Start playing immediately.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🔄</div>
          <h3>Cross-Device</h3>
          <p>Play on desktop, tablet, or mobile with progress synced.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🏆</div>
          <h3>Competitions</h3>
          <p>Participate in tournaments and win exciting prizes.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🌐</div>
          <h3>Multiplayer</h3>
          <p>Connect and play with gamers from around the world.</p>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta">
      <div class="cta-content">
        <h2>Ready to Start Playing?</h2>
        <p>Join millions of gamers on the fastest growing gaming platform</p>
        <router-link to="/signup" class="cta-btn">Sign Up Now</router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const trendingGames = ref([
  {
    id: 1,
    title: 'Cyber Assault',
    genre: 'Action',
    rating: '★★★★★',
    plays: '1.2M',
    image: 'https://images.pexels.com/photos/1637439/pexels-photo-1637439.jpeg'
  },
  {
    id: 2,
    title: 'Battle Arena',
    genre: 'Multiplayer',
    rating: '★★★★★',
    plays: '2.8M',
    image: 'https://images.pexels.com/photos/7915357/pexels-photo-7915357.jpeg'
  },
  {
    id: 3,
    title: 'Mind Blocks',
    genre: 'Puzzle',
    rating: '★★★★★',
    plays: '2.3M',
    image: 'https://images.pexels.com/photos/1314435/pexels-photo-1314435.jpeg'
  },
  {
    id: 4,
    title: 'Shadow Legends',
    genre: 'RPG',
    rating: '★★★★★',
    plays: '1.5M',
    image: 'https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg'
  },
  {
    id: 5,
    title: 'Speed Racers',
    genre: 'Racing',
    rating: '★★★★☆',
    plays: '1.1M',
    image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg'
  }
]);
</script>

<style scoped>
.briskvideos-home {
  background-color: #0a0a0a;
  color: #ffffff;
  min-height: 100vh;
  font-family: 'Inter', 'Roboto', sans-serif;
}

/* Hero Section */
.hero {
  display: flex;
  flex-wrap: wrap;
  min-height: 600px;
  padding: 2rem;
  position: relative;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(255, 0, 255, 0.1) 0%, rgba(0, 255, 255, 0.1) 100%);
  z-index: 1;
}

.hero-content {
  flex: 1;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  position: relative;
  z-index: 2;
}

.hero h1 {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  background: linear-gradient(to right, #ff00ff, #00ffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 15px rgba(255, 0, 255, 0.5);
  line-height: 1.2;
}

.hero p {
  font-size: 1.2rem;
  color: #cccccc;
  margin-bottom: 2.5rem;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
}

.primary-btn {
  background: linear-gradient(90deg, #ff00ff, #00ffff);
  color: #000000;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  display: inline-block;
  transition: all 0.3s ease;
  border: none;
  box-shadow: 0 5px 15px rgba(255, 0, 255, 0.3);
  position: relative;
  overflow: hidden;
}

.primary-btn::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 100%);
  transform: rotate(30deg);
  transition: all 0.3s ease;
  opacity: 0;
}

.primary-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(255, 0, 255, 0.4);
}

.primary-btn:hover::before {
  animation: shineEffect 1s;
}

@keyframes shineEffect {
  0% {
    left: -50%;
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    left: 120%;
    opacity: 0;
  }
}

.secondary-btn {
  background: transparent;
  color: #ffffff;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  display: inline-block;
  transition: all 0.3s ease;
  border: 2px solid #00ffff;
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.2);
}

.secondary-btn:hover {
  background: rgba(0, 255, 255, 0.1);
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 255, 255, 0.3);
}

.hero-featured-game {
  flex: 1;
  min-width: 300px;
  position: relative;
  z-index: 2;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-featured-game img {
  max-width: 100%;
  height: auto;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

.game-overlay {
  position: absolute;
  bottom: 3rem;
  left: 3rem;
  right: 3rem;
  padding: 1.5rem;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.game-overlay h2 {
  margin: 0 0 0.5rem 0;
  font-size: 1.5rem;
  color: #ffffff;
}

.game-overlay p {
  margin: 0 0 1rem 0;
  color: #aaaaaa;
  font-size: 0.9rem;
}

.play-now-btn {
  background: linear-gradient(90deg, #ff00ff, #00ffff);
  color: #000000;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  display: inline-block;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.play-now-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 0 15px rgba(255, 0, 255, 0.4);
}

/* Categories Section */
.categories {
  padding: 5rem 2rem;
  position: relative;
}

.categories h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  background: linear-gradient(to right, #ff00ff, #00ffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
}

.categories h2::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -10px;
  width: 100%;
  height: 3px;
  background: linear-gradient(to right, #ff00ff, #00ffff);
  border-radius: 3px;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.category-card {
  background: #1a1a1a;
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  text-decoration: none;
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.category-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 255, 255, 0.2);
  border-color: rgba(0, 255, 255, 0.3);
}

.category-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.category-card h3 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.category-card p {
  color: #aaaaaa;
  font-size: 0.9rem;
}

/* Trending Games Section */
.trending-games {
  padding: 5rem 2rem;
  background: #0d0d0d;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto 3rem auto;
}

.trending-games h2 {
  font-size: 2.5rem;
  background: linear-gradient(to right, #ff00ff, #00ffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.view-all {
  color: #00ffff;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.view-all:hover {
  color: #ff00ff;
  text-decoration: underline;
}

.games-carousel {
  display: flex;
  gap: 2rem;
  overflow-x: auto;
  padding: 1rem 0 2rem 0;
  max-width: 1200px;
  margin: 0 auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.games-carousel::-webkit-scrollbar {
  display: none;
}

.game-card {
  min-width: 280px;
  background: #1a1a1a;
  border-radius: 15px;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.game-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 255, 255, 0.2);
  border-color: rgba(0, 255, 255, 0.3);
}

.game-img-container {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.game-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.game-card:hover .game-img {
  transform: scale(1.05);
}

.game-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.game-card:hover .game-overlay {
  opacity: 1;
}

.play-btn {
  background: linear-gradient(90deg, #ff00ff, #00ffff);
  color: #000000;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  font-size: 0.9rem;
}

.play-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 0 15px rgba(255, 0, 255, 0.4);
}

.game-rating {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  color: #ffff00;
  background: rgba(0, 0, 0, 0.5);
  padding: 0.25rem 0.5rem;
  border-radius: 5px;
  font-weight: 600;
}

.game-info {
  padding: 1.5rem;
}

.game-info h3 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.game-meta {
  display: flex;
  justify-content: space-between;
  color: #aaaaaa;
  font-size: 0.9rem;
}

.game-plays {
  color: #ff00ff;
}

.game-genre {
  background: rgba(0, 255, 255, 0.1);
  color: #00ffff;
  padding: 0.25rem 0.5rem;
  border-radius: 5px;
  font-size: 0.8rem;
}

/* Features Section */
.features {
  padding: 5rem 2rem;
  background: #0a0a0a;
  position: relative;
}

.features::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 20% 30%, rgba(255, 0, 255, 0.05) 0%, transparent 30%),
    radial-gradient(circle at 80% 70%, rgba(0, 255, 255, 0.05) 0%, transparent 30%);
  z-index: 0;
}

.features h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  background: linear-gradient(to right, #ff00ff, #00ffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  z-index: 1;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
}

.features h2::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -10px;
  width: 100%;
  height: 3px;
  background: linear-gradient(to right, #ff00ff, #00ffff);
  border-radius: 3px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.feature-card {
  background: #1a1a1a;
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 255, 255, 0.2);
  border-color: rgba(0, 255, 255, 0.3);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.feature-card h3 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
}

.feature-card p {
  color: #aaaaaa;
  font-size: 0.9rem;
  line-height: 1.6;
}

/* CTA Section */
.cta {
  padding: 5rem 2rem;
  background: linear-gradient(135deg, rgba(255, 0, 255, 0.2) 0%, rgba(0, 255, 255, 0.2) 100%);
  text-align: center;
  position: relative;
}

.cta::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('https://images.pexels.com/photos/2748716/pexels-photo-2748716.jpeg');
  background-size: cover;
  background-position: center;
  opacity: 0.1;
  z-index: 0;
}

.cta-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
}

.cta h2 {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  background: linear-gradient(to right, #ffffff, #00ffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 800;
}

.cta p {
  font-size: 1.2rem;
  color: #ffffff;
  margin-bottom: 2.5rem;
}

.cta-btn {
  background: linear-gradient(90deg, #ff00ff, #00ffff);
  color: #000000;
  padding: 1rem 3rem;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  display: inline-block;
  transition: all 0.3s ease;
  font-size: 1.2rem;
  box-shadow: 0 5px 15px rgba(255, 0, 255, 0.3);
  position: relative;
  overflow: hidden;
}

.cta-btn::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 100%);
  transform: rotate(30deg);
  transition: all 0.3s ease;
  opacity: 0;
}

.cta-btn:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(255, 0, 255, 0.4);
}

.cta-btn:hover::before {
  animation: shineEffect 1s;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero {
    flex-direction: column;
    padding: 4rem 1.5rem;
  }
  
  .hero h1 {
    font-size: 2.5rem;
  }
  
  .hero-featured-game {
    padding: 1rem 0;
  }
  
  .game-overlay {
    left: 2rem;
    right: 2rem;
    bottom: 2rem;
  }
  
  .categories-grid,
  .features-grid {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  }
  
  .cta h2 {
    font-size: 2.2rem;
  }
}

@media (max-width: 480px) {
  .hero h1 {
    font-size: 2rem;
  }
  
  .hero-buttons {
    flex-direction: column;
    gap: 1rem;
  }
  
  .primary-btn, .secondary-btn {
    width: 100%;
    text-align: center;
  }
  
  .game-overlay {
    left: 1.5rem;
    right: 1.5rem;
    bottom: 1.5rem;
    padding: 1rem;
  }
  
  .game-overlay h2 {
    font-size: 1.2rem;
  }
  
  .categories h2, 
  .trending-games h2, 
  .features h2 {
    font-size: 1.8rem;
  }
  
  .categories-grid {
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  }
  
  .category-icon {
    font-size: 2.5rem;
  }
  
  .cta h2 {
    font-size: 1.8rem;
  }
  
  .cta p {
    font-size: 1rem;
  }
  
  .cta-btn {
    width: 100%;
    text-align: center;
    padding: 1rem;
    font-size: 1.1rem;
  }
}
</style>