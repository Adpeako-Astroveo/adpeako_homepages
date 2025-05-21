<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Featured games
const featuredGames = ref([
  {
    title: 'Galaxy Conquest',
    genre: 'Strategy',
    rating: 4.8,
    downloads: '5M+',
    image: 'https://images.pexels.com/photos/2694037/pexels-photo-2694037.jpeg',
    description: 'Build your galactic empire and conquer the universe in this epic strategy game.'
  },
  {
    title: 'Shadow Hunters',
    genre: 'Action RPG',
    rating: 4.9,
    downloads: '10M+',
    image: 'https://images.pexels.com/photos/4834891/pexels-photo-4834891.jpeg',
    description: 'Embark on a dark journey through a world of monsters and mysteries.'
  },
  {
    title: 'Puzzle Kingdom',
    genre: 'Puzzle',
    rating: 4.7,
    downloads: '8M+',
    image: 'https://images.pexels.com/photos/1314435/pexels-photo-1314435.jpeg',
    description: 'Challenge your mind with thousands of increasingly difficult puzzles.'
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
    name: 'RPG',
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
    image: 'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg'
  },
  {
    name: 'Racing',
    games: 65,
    image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg'
  }
]);

// New games
const newGames = ref([
  {
    title: 'Robot Quest',
    genre: 'Adventure',
    rating: 4.6,
    image: 'https://images.pexels.com/photos/8566474/pexels-photo-8566474.jpeg'
  },
  {
    title: 'Battle Arena',
    genre: 'Action',
    rating: 4.5,
    image: 'https://images.pexels.com/photos/7031767/pexels-photo-7031767.jpeg'
  },
  {
    title: 'Farm Village',
    genre: 'Simulation',
    rating: 4.7,
    image: 'https://images.pexels.com/photos/371213/pexels-photo-371213.jpeg'
  },
  {
    title: 'Drift Kings',
    genre: 'Racing',
    rating: 4.4,
    image: 'https://images.pexels.com/photos/315938/pexels-photo-315938.jpeg'
  }
]);

// Premium features
const features = ref([
  {
    title: 'Ad-Free Experience',
    description: 'Play without interruptions from advertisements',
    icon: '🚫'
  },
  {
    title: 'Offline Play',
    description: 'Download games and play without an internet connection',
    icon: '📱'
  },
  {
    title: 'Exclusive Content',
    description: 'Access premium levels, characters, and items',
    icon: '🎁'
  },
  {
    title: 'Cross-Device Sync',
    description: 'Continue your progress across multiple devices',
    icon: '🔄'
  }
]);

const handleLogin = () => {
  router.push('/login');
};

const handlePlayGame = (gameTitle) => {
  router.push('/login');
};
</script>

<template>
  <div class="games-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Premium Mobile Gaming</h1>
        <p class="subheading">Hundreds of games. No ads. No in-app purchases.</p>
        <button class="cta-button" @click="handleLogin">Start Playing Now</button>
      </div>
    </section>

    <!-- Featured Games -->
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
              <h3>{{ game.title }}</h3>
              <div class="game-meta">
                <span class="genre">{{ game.genre }}</span>
                <div class="rating">
                  <span class="star">★</span> {{ game.rating }}
                </div>
              </div>
              <p class="downloads">{{ game.downloads }} downloads</p>
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
              <div class="category-overlay">
                <h3>{{ category.name }}</h3>
                <p>{{ category.games }} games</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- New Games -->
    <section class="new-games-section">
      <div class="container">
        <h2>New Games</h2>
        <div class="new-games-grid">
          <div v-for="game in newGames" :key="game.title" class="new-game-card">
            <div class="new-game-image">
              <img :src="game.image" :alt="game.title">
              <div class="new-badge">NEW</div>
              <div class="game-overlay">
                <button @click="handlePlayGame(game.title)" class="play-button">Play Now</button>
              </div>
            </div>
            <div class="new-game-info">
              <h3>{{ game.title }}</h3>
              <div class="game-meta">
                <span class="genre">{{ game.genre }}</span>
                <div class="rating">
                  <span class="star">★</span> {{ game.rating }}
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
        <p>Access premium games with a simple subscription billed directly to your phone</p>
        <button class="cta-button" @click="handleLogin">Get Started</button>
        <p class="note">No credit card required. Cancel anytime.</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.games-page {
  min-height: 100vh;
  color: #333;
  padding-top: 65px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #6C63FF 0%, #FF6584 100%);
  color: white;
  padding: 8rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg') center/cover no-repeat;
  opacity: 0.15;
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
}

.hero h1 {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  text-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

.subheading {
  font-size: 1.5rem;
  margin-bottom: 2.5rem;
  opacity: 0.9;
}

.cta-button {
  background: #44C7B0;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 1rem 2rem;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(68, 199, 176, 0.4);
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(68, 199, 176, 0.5);
}

/* Featured Games */
.featured-section {
  padding: 5rem 0;
}

.featured-section h2, 
.categories-section h2, 
.new-games-section h2,
.features-section h2 {
  font-size: 2.2rem;
  margin-bottom: 2.5rem;
  color: #6C63FF;
  text-align: center;
}

.featured-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
}

.featured-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.featured-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.15);
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
.new-game-card:hover .new-game-image img {
  transform: scale(1.1);
}

.game-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.featured-card:hover .game-overlay,
.new-game-card:hover .game-overlay {
  opacity: 1;
}

.play-button {
  background: #44C7B0;
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.play-button:hover {
  transform: scale(1.05);
  background: #4ED7C0;
}

.game-info {
  padding: 1.5rem;
}

.game-info h3 {
  font-size: 1.3rem;
  margin-bottom: 0.8rem;
  color: #6C63FF;
}

.game-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.8rem;
}

.genre {
  background: #f0f0f0;
  color: #6C63FF;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
}

.rating {
  display: flex;
  align-items: center;
  font-weight: 500;
}

.star {
  color: #FFD700;
  margin-right: 0.3rem;
}

.downloads {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.description {
  color: #555;
  line-height: 1.5;
  font-size: 0.95rem;
}

/* Categories */
.categories-section {
  padding: 5rem 0;
  background: #f9f9f9;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
}

.category-card {
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  height: 180px;
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.category-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.2);
}

.category-image {
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
  right: 0;
  bottom: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.2) 100%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.5rem;
  color: white;
  transition: background 0.3s ease;
}

.category-card:hover .category-overlay {
  background: linear-gradient(to top, rgba(108, 99, 255, 0.8) 0%, rgba(108, 99, 255, 0.6) 60%, rgba(108, 99, 255, 0.4) 100%);
}

.category-overlay h3 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.category-overlay p {
  font-size: 0.9rem;
  opacity: 0.9;
}

/* New Games */
.new-games-section {
  padding: 5rem 0;
}

.new-games-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
}

.new-game-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.new-game-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.15);
}

.new-game-image {
  position: relative;
  height: 180px;
  overflow: hidden;
}

.new-game-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.new-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #FF6584;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-weight: bold;
  font-size: 0.8rem;
}

.new-game-info {
  padding: 1.5rem;
}

.new-game-info h3 {
  font-size: 1.2rem;
  margin-bottom: 0.8rem;
  color: #6C63FF;
}

/* Features */
.features-section {
  padding: 5rem 0;
  background: #f9f9f9;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.1);
}

.feature-icon {
  font-size: 2.5rem;
  flex-shrink: 0;
}

.feature-content h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #6C63FF;
}

.feature-content p {
  color: #666;
  line-height: 1.5;
}

/* CTA Section */
.cta-section {
  padding: 7rem 0;
  text-align: center;
  background: linear-gradient(135deg, #6C63FF 0%, #FF6584 100%);
  color: white;
}

.cta-section h2 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: white;
}

.cta-section p {
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.note {
  font-size: 0.9rem;
  margin-top: 1.5rem;
  opacity: 0.8;
}

/* Responsive Design */
@media (max-width: 992px) {
  .featured-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 6rem 1.5rem;
  }
  
  .hero h1 {
    font-size: 2.5rem;
  }
  
  .subheading {
    font-size: 1.2rem;
  }
  
  .featured-section h2, 
  .categories-section h2, 
  .new-games-section h2,
  .features-section h2,
  .cta-section h2 {
    font-size: 1.8rem;
  }
  
  .feature-card {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .hero h1 {
    font-size: 2rem;
  }
  
  .container {
    padding: 0 1.5rem;
  }
  
  .game-meta {
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-start;
  }
  
  .cta-section p {
    font-size: 1rem;
  }
  
  .cta-button {
    padding: 0.8rem 1.8rem;
    font-size: 1rem;
  }
}
</style>