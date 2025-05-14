<script setup>
import { ref } from 'vue';

const categories = ref([
  {
    name: 'Action',
    description: 'Fast-paced games with intense gameplay',
    image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg'
  },
  {
    name: 'Strategy',
    description: 'Plan, build, and conquer',
    image: 'https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg'
  
  },
  {
    name: 'Puzzle',
    description: 'Challenge your mind with brain teasers',
    image: 'https://images.pexels.com/photos/1111597/pexels-photo-1111597.jpeg'
  }
]);

const features = ref([
  {
    title: 'Cloud Saves',
    description: 'Your progress synced across devices',
    icon: '☁️'
  },
  {
    title: 'Multiplayer',
    description: 'Play with friends online',
    icon: '🎮'
  },
  {
    title: 'No Ads',
    description: 'Uninterrupted gaming experience',
    icon: '🚫'
  },
  {
    title: 'Regular Updates',
    description: 'New games and features monthly',
    icon: '🆕'
  }
]);

const popularGames = ref([
  {
    title: 'Space Warriors',
    genre: 'Action',
    rating: '4.8',
    image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg'
  },
  {
    title: 'Kingdom Builder',
    genre: 'Strategy',
    rating: '4.7',
    image: 'https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg'
  },
  {
    title: 'Mind Maze',
    genre: 'Puzzle',
    rating: '4.9',
    image: 'https://images.pexels.com/photos/1111597/pexels-photo-1111597.jpeg'
  }
]);

const handleLogin = () => {
  window.location.href = '/login';
};
</script>

<template>
  <div class="games-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Premium Mobile Gaming</h1>
        <p class="subtitle">Play Anywhere, Anytime</p>
        <button class="cta-button" @click="handleLogin">Start Playing Now</button>
      </div>
    </section>

    <!-- Categories Section -->
    <section class="categories">
      <h2>Game Categories</h2>
      <div class="categories-grid">
        <div v-for="category in categories" :key="category.name" class="category-card">
          <img :src="category.image" :alt="category.name" />
          <div class="category-info">
            <h3>{{ category.name }}</h3>
            <p>{{ category.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <h2>Premium Features</h2>
      <div class="features-grid">
        <div v-for="feature in features" :key="feature.title" class="feature-card">
          <span class="feature-icon">{{ feature.icon }}</span>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </div>
      </div>
    </section>

    <!-- Popular Games -->
    <section class="popular-games">
      <h2>Popular Games</h2>
      <div class="games-grid">
        <div v-for="game in popularGames" :key="game.title" class="game-card">
          <img :src="game.image" :alt="game.title" />
          <div class="game-info">
            <h3>{{ game.title }}</h3>
            <p>{{ game.genre }}</p>
            <div class="rating">★ {{ game.rating }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta">
      <h2>Ready to Play?</h2>
      <p>Join millions of gamers worldwide</p>
      <button class="cta-button" @click="handleLogin">Login Now</button>
    </section>
  </div>
</template>

<style scoped>
.games-page {
  min-height: 100vh;
  padding-top: 64px;
}

.hero {
  background: linear-gradient(135deg, #FFB800 0%, #FFA200 100%);
  color: white;
  padding: 8rem 2rem;
  text-align: center;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero h1 {
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
}

.subtitle {
  font-size: 1.5rem;
  opacity: 0.9;
  margin-bottom: 2rem;
}

.categories {
  padding: 6rem 2rem;
  background: #f7fafc;
}

.categories h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #FFB800;
  margin-bottom: 3rem;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.category-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.category-card:hover {
  transform: translateY(-5px);
}

.category-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.category-info {
  padding: 1.5rem;
}

.category-info h3 {
  color: #FFB800;
  margin-bottom: 0.5rem;
}

.features {
  padding: 6rem 2rem;
}

.features h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #FFB800;
  margin-bottom: 3rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  display: block;
}

.feature-card h3 {
  color: #FFB800;
  margin-bottom: 1rem;
}

.popular-games {
  padding: 6rem 2rem;
  background: #f7fafc;
}

.popular-games h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #FFB800;
  margin-bottom: 3rem;
}

.games-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.game-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.game-card:hover {
  transform: translateY(-5px);
}

.game-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.game-info {
  padding: 1.5rem;
}

.game-info h3 {
  color: #FFB800;
  margin-bottom: 0.5rem;
}

.rating {
  color: #FFB800;
  font-weight: bold;
  margin-top: 0.5rem;
}

.cta {
  background: linear-gradient(135deg, #FFB800 0%, #FFA200 100%);
  color: white;
  text-align: center;
  padding: 6rem 2rem;
}

.cta h2 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.cta p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.cta-button {
  background: white;
  color: #FFB800;
  font-size: 1.2rem;
  padding: 1rem 3rem;
  border-radius: 0.5rem;
  border: none;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.5rem;
  }

  .cta h2 {
    font-size: 2rem;
  }
}
</style>