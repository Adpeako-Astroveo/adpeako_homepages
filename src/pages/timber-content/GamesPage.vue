<script setup>
import { ref } from 'vue';

const featuredGames = ref([
  {
    title: 'Epic Legends',
    genre: 'Action RPG',
    rating: '4.8',
    image: 'https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg',
    tagline: 'Embark on an epic journey through mythical realms'
  },
  {
    title: 'Cosmic Racers',
    genre: 'Racing',
    rating: '4.7',
    image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg',
    tagline: 'High-speed futuristic racing across galactic tracks'
  },
  {
    title: 'Puzzle Masters',
    genre: 'Puzzle',
    rating: '4.9',
    image: 'https://images.pexels.com/photos/1314435/pexels-photo-1314435.jpeg',
    tagline: 'Challenge your mind with brain-bending puzzles'
  }
]);

const categories = ref([
  {
    name: 'Action',
    icon: '💥',
    games: 124,
    image: 'https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg'
  },
  {
    name: 'Adventure',
    icon: '🌄',
    games: 86,
    image: 'https://images.pexels.com/photos/1174746/pexels-photo-1174746.jpeg'
  },
  {
    name: 'Puzzle',
    icon: '🧩',
    games: 98,
    image: 'https://images.pexels.com/photos/1314435/pexels-photo-1314435.jpeg'
  },
  {
    name: 'Strategy',
    icon: '🧠',
    games: 67,
    image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg'
  },
  {
    name: 'Racing',
    icon: '🏎️',
    games: 42,
    image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg'
  },
  {
    name: 'Arcade',
    icon: '👾',
    games: 73,
    image: 'https://images.pexels.com/photos/1293261/pexels-photo-1293261.jpeg'
  }
]);

const popularGames = ref([
  {
    title: 'Shadow Hunters',
    downloads: '10M+',
    rating: 4.8,
    image: 'https://images.pexels.com/photos/6498313/pexels-photo-6498313.jpeg',
    genre: 'Action'
  },
  {
    title: 'Mystic Quest',
    downloads: '8M+',
    rating: 4.7,
    image: 'https://images.pexels.com/photos/7360367/pexels-photo-7360367.jpeg',
    genre: 'Adventure'
  },
  {
    title: 'Cube Crush Saga',
    downloads: '15M+',
    rating: 4.9,
    image: 'https://images.pexels.com/photos/1314435/pexels-photo-1314435.jpeg',
    genre: 'Puzzle'
  },
  {
    title: 'Galactic Empire',
    downloads: '7M+',
    rating: 4.6,
    image: 'https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg',
    genre: 'Strategy'
  }
]);

const features = ref([
  {
    title: 'Offline Play',
    description: 'Enjoy games without internet. Perfect for travel or areas with weak signals.',
    icon: '📱'
  },
  {
    title: 'Cloud Saves',
    description: 'Your progress synced across all your devices automatically.',
    icon: '☁️'
  },
  {
    title: 'No Ads',
    description: 'Ad-free gaming experience with no interruptions.',
    icon: '🚫'
  },
  {
    title: 'Exclusive Content',
    description: 'Access premium levels and items only available to subscribers.',
    icon: '🎁'
  }
]);

const handleSubscribe = () => {
  window.location.href = '/login';
};
</script>

<template>
  <div class="timber-games-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Premium Mobile Gaming</h1>
        <p class="tagline">Unlimited access to hundreds of premium games. No ads. No in-app purchases.</p>
        <button @click="handleSubscribe" class="cta-button">Start Playing</button>
      </div>
    </section>

    <!-- Featured Games -->
    <section class="featured-games">
      <h2>Featured Games</h2>
      <div class="featured-grid">
        <div v-for="game in featuredGames" :key="game.title" class="featured-card">
          <div class="game-image">
            <img :src="game.image" :alt="game.title">
            <div class="game-overlay">
              <div class="rating-badge">★ {{ game.rating }}</div>
              <div class="genre-badge">{{ game.genre }}</div>
            </div>
          </div>
          <div class="game-details">
            <h3>{{ game.title }}</h3>
            <p class="tagline">{{ game.tagline }}</p>
            <button class="play-button">Play Now</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Categories Section -->
    <section class="categories">
      <h2>Browse Categories</h2>
      <div class="categories-grid">
        <div v-for="category in categories" :key="category.name" class="category-card">
          <div class="category-image">
            <img :src="category.image" :alt="category.name">
            <div class="category-overlay"></div>
          </div>
          <div class="category-details">
            <span class="category-icon">{{ category.icon }}</span>
            <h3>{{ category.name }}</h3>
            <p>{{ category.games }} Games</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Popular Games -->
    <section class="popular-games">
      <h2>Top Games</h2>
      <div class="popular-grid">
        <div v-for="game in popularGames" :key="game.title" class="popular-card">
          <div class="game-rank"></div>
          <div class="game-image">
            <img :src="game.image" :alt="game.title">
          </div>
          <div class="game-info">
            <h3>{{ game.title }}</h3>
            <span class="genre">{{ game.genre }}</span>
            <div class="game-stats">
              <div class="downloads">{{ game.downloads }}</div>
              <div class="rating">★ {{ game.rating }}</div>
            </div>
            <button class="download-button">Download</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <h2>Premium Features</h2>
      <div class="features-grid">
        <div v-for="feature in features" :key="feature.title" class="feature-card">
          <div class="feature-icon">{{ feature.icon }}</div>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-content">
        <h2>Ready to play?</h2>
        <p>Join millions of gamers worldwide with unlimited access to premium games.</p>
        <button @click="handleSubscribe" class="cta-button">Subscribe Now</button>
      </div>
    </section>
  </div>
</template>

<style scoped>
.timber-games-page {
  min-height: 100vh;
  color: #f5f5f5;
  font-family: 'Inter', sans-serif;
  background-color: #121212;
  padding-top: 64px;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #6d28d9 0%, #4f46e5 100%);
  padding: 10rem 2rem;
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

.hero::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(109, 40, 217, 0.2) 0%, rgba(79, 70, 229, 0.4) 100%);
  z-index: 2;
}

.hero-content {
  position: relative;
  z-index: 3;
  max-width: 800px;
  margin: 0 auto;
}

.hero h1 {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  color: white;
  text-shadow: 0 2px 8px rgba(0,0,0,0.3);
}

.tagline {
  font-size: 1.5rem;
  margin-bottom: 2.5rem;
  opacity: 0.9;
}

.cta-button {
  background: linear-gradient(135deg, #fb7185 0%, #e879f9 100%);
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
  padding: 1rem 3rem;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(251, 113, 133, 0.4);
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(251, 113, 133, 0.5);
}

/* Featured Games */
.featured-games {
  padding: 5rem 2rem;
  background: #121212;
}

.featured-games h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #e879f9;
}

.featured-grid {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1400px;
  margin: 0 auto;
}

.featured-card {
  flex: 1;
  min-width: 300px;
  max-width: 400px;
  background: #1e1e1e;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
  transition: all 0.3s ease;
}

.featured-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.6);
}

.game-image {
  position: relative;
  height: 250px;
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
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
}

.rating-badge {
  align-self: flex-end;
  background: rgba(232, 121, 249, 0.9);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-weight: bold;
  font-size: 0.9rem;
}

.genre-badge {
  align-self: flex-start;
  background: rgba(79, 70, 229, 0.9);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
}

.game-details {
  padding: 2rem;
}

.game-details h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: white;
}

.tagline {
  color: #a3a3a3;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
}

.play-button {
  background: linear-gradient(135deg, #fb7185 0%, #e879f9 100%);
  color: white;
  width: 100%;
  padding: 0.75rem 0;
  border-radius: 5px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.play-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(251, 113, 133, 0.3);
}

/* Categories Section */
.categories {
  padding: 5rem 2rem;
  background: #1e1e1e;
}

.categories h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #e879f9;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.category-card {
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  transition: all 0.3s ease;
  height: 180px;
}

.category-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.4);
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
  background: linear-gradient(to bottom, rgba(18, 18, 18, 0.5) 0%, rgba(18, 18, 18, 0.8) 100%);
}

.category-details {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem;
  z-index: 2;
}

.category-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  display: block;
}

.category-details h3 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: white;
}

.category-details p {
  color: #a3a3a3;
  font-size: 0.9rem;
}

/* Popular Games */
.popular-games {
  padding: 5rem 2rem;
  background: #121212;
}

.popular-games h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #e879f9;
}

.popular-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.popular-card {
  background: #1e1e1e;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.popular-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.4);
}

.game-image {
  height: 180px;
}

.game-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.game-info {
  padding: 1.5rem;
}

.game-info h3 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: white;
}

.genre {
  display: inline-block;
  background: #4f46e5;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  margin-bottom: 1rem;
}

.game-stats {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

.downloads {
  color: #a3a3a3;
  font-size: 0.9rem;
}

.rating {
  color: #e879f9;
  font-weight: bold;
}

.download-button {
  width: 100%;
  background: transparent;
  color: #fb7185;
  border: 1px solid #fb7185;
  padding: 0.75rem 0;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.download-button:hover {
  background: rgba(251, 113, 133, 0.1);
}

/* Features Section */
.features {
  padding: 5rem 2rem;
  background: #1e1e1e;
}

.features h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #e879f9;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  background: #121212;
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.3);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.feature-card h3 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: white;
}

.feature-card p {
  color: #a3a3a3;
  font-size: 0.9rem;
  line-height: 1.6;
}

/* CTA Section */
.cta-section {
  background: linear-gradient(135deg, #6d28d9 0%, #4f46e5 100%);
  padding: 5rem 2rem;
  text-align: center;
  position: relative;
}

.cta-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg') center/cover no-repeat;
  opacity: 0.05;
  z-index: 1;
}

.cta-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
}

.cta-section h2 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: white;
}

.cta-section p {
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  color: rgba(255, 255, 255, 0.9);
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero {
    padding: 8rem 1.5rem;
  }
  
  .hero h1 {
    font-size: 2.5rem;
  }
  
  .tagline {
    font-size: 1.2rem;
  }
  
  .featured-card {
    min-width: 100%;
  }
  
  .cta-section h2 {
    font-size: 2rem;
  }
  
  .cta-section p {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 6rem 1rem;
  }
  
  .hero h1 {
    font-size: 2rem;
  }
  
  .featured-games h2,
  .categories h2,
  .popular-games h2,
  .features h2 {
    font-size: 2rem;
  }
  
  .cta-button {
    padding: 0.8rem 2rem;
    font-size: 1rem;
  }
  
  .game-details h3,
  .category-details h3,
  .game-info h3 {
    font-size: 1.2rem;
  }
}
</style>