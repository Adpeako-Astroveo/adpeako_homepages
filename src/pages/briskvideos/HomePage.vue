<template>
  <div class="briskvideos-home">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <h1>Ultimate Gaming Experience</h1>
        <p class="hero-subtitle">Play thousands of premium games instantly with no downloads</p>
        <div class="hero-buttons">
          <router-link to="/games" class="primary-button">Browse Games</router-link>
          <router-link to="/signup" class="secondary-button">Sign Up Free</router-link>
        </div>
      </div>
      <div class="hero-backdrop"></div>
    </section>

    <!-- Top Categories Section -->
    <section class="categories-section">
      <div class="section-container">
        <h2 class="section-title text-left">Top Categories</h2>
        <div class="categories-grid">
          <div v-for="category in categories" :key="category.id" class="category-card">
            <router-link :to="`/categories/${category.id}`">
              <div class="category-image">
                <img :src="category.image" :alt="category.name">
                <div class="category-overlay">
                  <div class="category-icon">{{ category.icon }}</div>
                  <h3>{{ category.name }}</h3>
                  <p>{{ category.games }}+ Games</p>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Games Section -->
    <section class="featured-section">
      <div class="section-container">
        <h2 class="section-title">Featured Games</h2>
        <div class="featured-grid">
          <div v-for="game in featuredGames" :key="game.id" class="game-card">
            <div class="game-image">
              <img :src="game.image" :alt="game.title">
              <div class="game-overlay">
                <router-link to="/login" class="play-button">Play Now</router-link>
              </div>
              <div v-if="game.featured" class="featured-badge">Featured</div>
            </div>
            <div class="game-info">
              <h3>{{ game.title }}</h3>
              <div class="game-meta">
                <span class="game-genre">{{ game.genre }}</span>
                <span class="game-rating">{{ game.rating }}</span>
              </div>
              <p class="game-description">{{ game.description }}</p>
              <div class="game-stats">
                <span class="game-players">{{ game.players }} Players</span>
                <span class="game-likes">{{ game.likes }} Likes</span>
              </div>
            </div>
          </div>
        </div>
        <div class="view-all-container">
          <router-link to="/games" class="view-all-button">View All Games</router-link>
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="why-section">
      <div class="section-container">
        <h2 class="section-title text-left">Why Choose BriskVideos?</h2>
        <div class="features-grid">
          <div v-for="feature in features" :key="feature.title" class="feature-card">
            <div class="feature-icon">{{ feature.icon }}</div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials-section">
      <div class="section-container">
        <h2 class="section-title">What Gamers Say</h2>
        <div class="testimonials-grid">
          <div v-for="testimonial in testimonials" :key="testimonial.id" class="testimonial-card">
            <div class="testimonial-rating">
              <span v-for="i in 5" :key="i" class="star" :class="{ filled: i <= testimonial.rating }">★</span>
            </div>
            <p class="testimonial-text">{{ testimonial.text }}</p>
            <div class="testimonial-author">
              <div class="author-avatar">
                <img :src="testimonial.avatar" :alt="testimonial.name">
              </div>
              <div class="author-info">
                <h4>{{ testimonial.name }}</h4>
                <p>{{ testimonial.location }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="section-container">
        <h2>Ready to Start Playing?</h2>
        <p>Join millions of gamers worldwide and experience the best gaming platform</p>
        <div class="cta-buttons">
          <router-link to="/signup" class="primary-button">Create Free Account</router-link>
          <router-link to="/login" class="secondary-button">Login</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const categories = ref([
  {
    id: 'action',
    name: 'Action',
    icon: '🔥',
    games: 250,
    image: 'https://images.pexels.com/photos/7915357/pexels-photo-7915357.jpeg'
  },
  {
    id: 'adventure',
    name: 'Adventure',
    icon: '🌄',
    games: 180,
    image: 'https://images.pexels.com/photos/6498311/pexels-photo-6498311.jpeg'
  },
  {
    id: 'puzzle',
    name: 'Puzzle',
    icon: '🧩',
    games: 120,
    image: 'https://images.pexels.com/photos/1314435/pexels-photo-1314435.jpeg'
  },
  {
    id: 'strategy',
    name: 'Strategy',
    icon: '♟️',
    games: 95,
    image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg'
  }
]);

const featuredGames = ref([
  {
    id: 1,
    title: 'Cyber Assault',
    genre: 'Action',
    rating: '★★★★★',
    description: 'Fast-paced cyberpunk action game with futuristic weapons and abilities.',
    players: '1.2M',
    likes: '325K',
    featured: true,
    image: 'https://images.pexels.com/photos/1637439/pexels-photo-1637439.jpeg'
  },
  {
    id: 2,
    title: 'Galaxy Conquest',
    genre: 'Strategy',
    rating: '★★★★☆',
    description: 'Build your galactic empire and conquer the universe in this epic strategy game.',
    players: '950K',
    likes: '210K',
    featured: false,
    image: 'https://images.pexels.com/photos/1257860/pexels-photo-1257860.jpeg'
  },
  {
    id: 3,
    title: 'Mystic Quest',
    genre: 'Adventure',
    rating: '★★★★★',
    description: 'Embark on an epic journey through enchanted realms and battle ancient creatures.',
    players: '880K',
    likes: '240K',
    featured: true,
    image: 'https://images.pexels.com/photos/3617457/pexels-photo-3617457.jpeg'
  }
]);

const features = ref([
  {
    icon: '🎮',
    title: 'Instant Play',
    description: 'No downloads or installations required. Play instantly in your browser.'
  },
  {
    icon: '🌐',
    title: 'Cross-Platform',
    description: 'Play seamlessly across devices - desktop, tablet, and mobile.'
  },
  {
    icon: '🔄',
    title: 'Regular Updates',
    description: 'New games and features added weekly to keep the experience fresh.'
  },
  {
    icon: '🛡️',
    title: 'Secure Gaming',
    description: 'Advanced security measures to protect your data and privacy.'
  }
]);

const testimonials = ref([
  {
    id: 1,
    rating: 5,
    text: "BriskVideos completely changed my gaming experience. The variety of games and smooth performance keeps me coming back every day!",
    name: "Alex Johnson",
    location: "Gaming enthusiast",
    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg"
  },
  {
    id: 2,
    rating: 5,
    text: "As a casual gamer, I love that I can play high-quality games without downloading anything. The interface is intuitive and user-friendly.",
    name: "Sophia Chen",
    location: "Mobile gamer",
    avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg"
  },
  {
    id: 3,
    rating: 4,
    text: "The premium subscription is worth every penny. No ads, exclusive content, and the game variety is impressive. Would highly recommend!",
    name: "Marcus Williams",
    location: "Pro gamer",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
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

/* Text alignment utility class */
.text-left {
  text-align: left !important;
}

/* Hero Section */
.hero-section {
  height: 80vh;
  min-height: 600px;
  max-height: 800px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-backdrop {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.pexels.com/photos/7915357/pexels-photo-7915357.jpeg');
  background-size: cover;
  background-position: center;
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  text-align: center;
  padding: 0 2rem;
}

.hero-content h1 {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  background: linear-gradient(90deg, #ff00ff, #00ffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 10px rgba(255, 0, 255, 0.5);
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 2.5rem;
  color: #cccccc;
}

.hero-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
}

.primary-button {
  background: linear-gradient(90deg, #ff00ff, #00ffff);
  color: #000000;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.primary-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(255, 0, 255, 0.3);
}

.secondary-button {
  background: transparent;
  color: #ffffff;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  border: 1px solid #ffffff;
  transition: all 0.3s ease;
}

.secondary-button:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-3px);
}

/* Section Container */
.section-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Section Title */
.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  color: #ffffff;
  text-align: center;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -1rem;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 4px;
  background: linear-gradient(90deg, #ff00ff, #00ffff);
  border-radius: 2px;
}

.text-left::after {
  left: 0;
  transform: none;
}

/* Categories Section */
.categories-section {
  padding: 5rem 0;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
}

.category-card {
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease;
  height: 200px;
}

.category-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 255, 0.3);
}

.category-image {
  width: 100%;
  height: 100%;
  position: relative;
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
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.3) 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: background 0.3s ease;
}

.category-card:hover .category-overlay {
  background: linear-gradient(to top, rgba(255, 0, 255, 0.8) 0%, rgba(0, 255, 255, 0.6) 100%);
}

.category-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.category-overlay h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.category-overlay p {
  font-size: 0.9rem;
  opacity: 0.9;
}

/* Featured Games Section */
.featured-section {
  padding: 5rem 0;
  background: #151515;
}

.featured-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
}

.game-card {
  background: #1a1a1a;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease;
}

.game-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 255, 255, 0.3);
}

.game-image {
  position: relative;
  height: 200px;
}

.game-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.game-card:hover .game-image img {
  transform: scale(1.1);
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

.play-button {
  background: linear-gradient(90deg, #ff00ff, #00ffff);
  color: #000000;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.play-button:hover {
  transform: scale(1.05);
  box-shadow: 0 0 15px rgba(255, 0, 255, 0.7);
}

.featured-badge {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: #ff00ff;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

.game-info {
  padding: 1.5rem;
}

.game-info h3 {
  font-size: 1.3rem;
  margin-bottom: 0.75rem;
}

.game-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.game-genre {
  background: rgba(255, 0, 255, 0.2);
  color: #ff00ff;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
}

.game-rating {
  color: #ffff00;
}

.game-description {
  color: #cccccc;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
  line-height: 1.6;
}

.game-stats {
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  color: #888888;
}

.view-all-container {
  text-align: center;
  margin-top: 3rem;
}

.view-all-button {
  background: transparent;
  color: #ffffff;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  border: 1px solid #ffffff;
  transition: all 0.3s ease;
}

.view-all-button:hover {
  background: rgba(255, 255, 255, 0.1);
}

/* Why Choose Us Section */
.why-section {
  padding: 5rem 0;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: #1a1a1a;
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 255, 255, 0.2);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.feature-card h3 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #ffffff;
}

.feature-card p {
  color: #cccccc;
  font-size: 0.9rem;
  line-height: 1.6;
}

/* Testimonials Section */
.testimonials-section {
  padding: 5rem 0;
  background: #151515;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.testimonial-card {
  background: #1a1a1a;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease;
}

.testimonial-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 255, 255, 0.2);
}

.testimonial-rating {
  margin-bottom: 1.5rem;
}

.star {
  color: #555555;
  font-size: 1.2rem;
}

.star.filled {
  color: #ffff00;
}

.testimonial-text {
  color: #cccccc;
  font-size: 1rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  font-style: italic;
}

.testimonial-author {
  display: flex;
  align-items: center;
}

.author-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 1rem;
}

.author-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.author-info h4 {
  font-size: 1rem;
  margin-bottom: 0.25rem;
}

.author-info p {
  color: #888888;
  font-size: 0.8rem;
}

/* CTA Section */
.cta-section {
  padding: 5rem 0;
  background: linear-gradient(90deg, rgba(255, 0, 255, 0.2), rgba(0, 255, 255, 0.2));
  text-align: center;
}

.cta-section h2 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}

.cta-section p {
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  color: #cccccc;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.cta-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .hero-content h1 {
    font-size: 3rem;
  }
  
  .featured-grid {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
}

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
  }
  
  .hero-buttons {
    flex-direction: column;
    gap: 1rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .featured-grid, 
  .features-grid, 
  .testimonials-grid {
    grid-template-columns: 1fr;
  }
  
  .cta-buttons {
    flex-direction: column;
    gap: 1rem;
    max-width: 300px;
    margin: 0 auto;
  }
}

@media (max-width: 480px) {
  .hero-content h1 {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
  
  .feature-card,
  .testimonial-card {
    padding: 1.5rem;
  }
  
  .categories-grid {
    grid-template-columns: 1fr;
  }
}
</style>