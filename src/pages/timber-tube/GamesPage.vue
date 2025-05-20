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
    title: 'Shadow Legends',
    developer: 'Phoenix Studios',
    rating: 4.8,
    downloads: '15M+',
    image: 'https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg',
    genre: 'Action RPG',
    premium: true,
    description: 'Embark on an epic adventure in a dark fantasy world filled with dangerous creatures, powerful magic, and legendary treasures.'
  },
  {
    title: 'Speed Rivals',
    developer: 'Velocity Games',
    rating: 4.7,
    downloads: '8M+',
    image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg',
    genre: 'Racing',
    premium: true,
    description: 'Race through breathtaking urban environments with stunning graphics, realistic physics, and intense multiplayer competition.'
  },
  {
    title: 'Tactical Command',
    developer: 'Strategy Masters',
    rating: 4.9,
    downloads: '5M+',
    image: 'https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg',
    genre: 'Strategy',
    premium: true,
    description: 'Build your empire, train powerful armies, and outwit opponents in this deep strategy game of conquest and diplomacy.'
  }
]);

const topGames = ref([
  {
    title: 'Crystal Puzzler',
    developer: 'Mind Games',
    rating: 4.6,
    image: 'https://images.pexels.com/photos/1111597/pexels-photo-1111597.jpeg',
    genre: 'Puzzle'
  },
  {
    title: 'Ninja Warriors',
    developer: 'Shadow Studios',
    rating: 4.8,
    image: 'https://images.pexels.com/photos/1462725/pexels-photo-1462725.jpeg',
    genre: 'Action'
  },
  {
    title: 'Farm Life',
    developer: 'Countryside Games',
    rating: 4.5,
    image: 'https://images.pexels.com/photos/681335/pexels-photo-681335.jpeg',
    genre: 'Simulation'
  },
  {
    title: 'Soccer Stars',
    developer: 'Champion Games',
    rating: 4.7,
    image: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg',
    genre: 'Sports'
  },
  {
    title: 'Ancient Quest',
    developer: 'Mystery Box',
    rating: 4.6,
    image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg',
    genre: 'Adventure'
  },
  {
    title: 'Kingdom Conquest',
    developer: 'Royal Games',
    rating: 4.8,
    image: 'https://images.pexels.com/photos/3977908/pexels-photo-3977908.jpeg',
    genre: 'Strategy'
  }
]);

const newReleases = ref([
  {
    title: 'Cosmic Explorer',
    developer: 'Galaxy Games',
    releaseDate: 'May 15, 2025',
    image: 'https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg',
    genre: 'Adventure'
  },
  {
    title: 'Monster Hunter',
    developer: 'Wild Studios',
    releaseDate: 'May 12, 2025',
    image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg',
    genre: 'Action'
  },
  {
    title: 'Drift Kings',
    developer: 'Speed Masters',
    releaseDate: 'May 10, 2025',
    image: 'https://images.pexels.com/photos/12670589/pexels-photo-12670589.jpeg',
    genre: 'Racing'
  },
  {
    title: 'Brain Teasers',
    developer: 'Mind Games',
    releaseDate: 'May 8, 2025',
    image: 'https://images.pexels.com/photos/1111597/pexels-photo-1111597.jpeg',
    genre: 'Puzzle'
  }
]);

const features = ref([
  {
    title: 'Premium Game Library',
    description: 'Access 1,000+ full-featured games without ads or in-app purchases',
    icon: '🎮'
  },
  {
    title: 'Cloud Gaming',
    description: 'Play high-end games without downloads using our cloud gaming technology',
    icon: '☁️'
  },
  {
    title: 'Cross-device Play',
    description: 'Start on your phone, continue on your tablet with progress synced automatically',
    icon: '📱'
  },
  {
    title: 'Multiplayer Gameplay',
    description: 'Compete or collaborate with players from around the world in real-time',
    icon: '🌐'
  },
  {
    title: 'Exclusive Content',
    description: 'Access game items, characters, and levels only available to Timber Tube subscribers',
    icon: '🎁'
  },
  {
    title: 'Weekly New Games',
    description: 'Fresh games and features added every week to keep your experience exciting',
    icon: '🆕'
  }
]);

const testimonials = ref([
  {
    text: "Having access to so many premium games without ads or in-app purchases has completely changed my mobile gaming experience.",
    author: "Alex M.",
    location: "London"
  },
  {
    text: "The cloud gaming feature is incredible - I can play console-quality games on my phone without storage issues or long downloads.",
    author: "Sophia R.",
    location: "Berlin"
  },
  {
    text: "I love being able to switch between my phone and tablet seamlessly. The multiplayer games are fantastic too!",
    author: "David K.",
    location: "Amsterdam"
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
        <p class="subtitle">1,000+ games with no ads or in-app purchases</p>
        <button class="cta-button" @click="navigateToLogin">Start Playing</button>
      </div>
    </section>

    <!-- Featured Games -->
    <section class="featured-section">
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
    </section>

    <!-- Game Categories -->
    <section class="categories-section">
      <h2>Browse by Category</h2>
      <div class="categories-grid">
        <div v-for="category in categories" :key="category.name" class="category-card">
          <div class="category-icon">{{ category.icon }}</div>
          <div class="category-info">
            <h3>{{ category.name }}</h3>
            <span class="game-count">{{ category.count }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Top Games -->
    <section class="top-games-section">
      <h2>Top Rated Games</h2>
      <div class="top-grid">
        <div v-for="game in topGames" :key="game.title" class="top-card">
          <div class="game-image">
            <img :src="game.image" :alt="game.title">
            <div class="game-overlay">
              <button class="play-button small" @click="navigateToLogin">Play Now</button>
            </div>
          </div>
          <div class="game-info">
            <h3>{{ game.title }}</h3>
            <span class="game-developer">{{ game.developer }}</span>
            <div class="game-bottom">
              <div class="game-genre">{{ game.genre }}</div>
              <div class="game-rating">
                <span class="star">★</span>
                <span class="rating-value">{{ game.rating }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- New Releases -->
    <section class="releases-section">
      <h2>New Releases</h2>
      <div class="releases-grid">
        <div v-for="game in newReleases" :key="game.title" class="release-card">
          <div class="game-image">
            <img :src="game.image" :alt="game.title">
            <div class="game-overlay">
              <button class="play-button small" @click="navigateToLogin">Play Now</button>
            </div>
            <div class="new-badge">NEW</div>
          </div>
          <div class="game-info">
            <h3>{{ game.title }}</h3>
            <span class="game-developer">{{ game.developer }}</span>
            <div class="game-bottom">
              <div class="game-genre">{{ game.genre }}</div>
              <div class="release-date">{{ game.releaseDate }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <h2>Premium Gaming Features</h2>
      <div class="features-grid">
        <div v-for="feature in features" :key="feature.title" class="feature-card">
          <span class="feature-icon">{{ feature.icon }}</span>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="testimonials-section">
      <h2>What Gamers Say</h2>
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

    <!-- Mobile Billing Section -->
    <section class="billing-section">
      <h2>Gaming Subscription</h2>
      <div class="billing-container">
        <div class="billing-image">
          <img src="https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg" alt="Mobile Gaming">
        </div>
        <div class="billing-info">
          <h3>Premium Games Package</h3>
          <div class="price-tag">
            <span class="price-amount">€12.99</span>
            <span class="price-period">/month</span>
          </div>
          <ul class="billing-features">
            <li><span class="check-icon">✓</span> Unlimited access to 1,000+ premium games</li>
            <li><span class="check-icon">✓</span> No ads or in-app purchases</li>
            <li><span class="check-icon">✓</span> Cloud gaming capabilities</li>
            <li><span class="check-icon">✓</span> Cross-device synchronization</li>
            <li><span class="check-icon">✓</span> Exclusive in-game content and items</li>
            <li><span class="check-icon">✓</span> New games added weekly</li>
          </ul>
          <p class="billing-note">Billed directly to your phone - no credit card required</p>
          <button class="billing-button" @click="navigateToLogin">Subscribe Now</button>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <h2>Ready to Level Up Your Gaming?</h2>
      <p>Join millions of players enjoying premium mobile games</p>
      <button class="cta-button" @click="navigateToLogin">Start Playing Today</button>
    </section>
  </div>
</template>

<style scoped>
.games-page {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: #333;
  padding-top: 64px;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #3B52A5 0%, #5D72D9 100%);
  background-image: url('https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg');
  background-size: cover;
  background-position: center;
  background-blend-mode: overlay;
  color: white;
  padding: 8rem 2rem;
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
  background: linear-gradient(135deg, rgba(59, 82, 165, 0.8) 0%, rgba(93, 114, 217, 0.8) 100%);
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
}

.hero h1 {
  font-size: 4rem;
  font-weight: 900;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.subtitle {
  font-size: 1.5rem;
  opacity: 0.9;
  margin-bottom: 2.5rem;
}

.cta-button {
  background: white;
  color: #3B52A5;
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

/* Section styling */
section {
  padding: 5rem 2rem;
}

section:nth-child(odd) {
  background: #f8f9fa;
}

section:nth-child(even) {
  background: white;
}

section h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #3B52A5;
  margin-bottom: 3rem;
  font-weight: 800;
}

/* Featured Games */
.featured-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.featured-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.featured-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
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
  transform: scale(1.1);
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

.play-button {
  background: #3B52A5;
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.play-button.small {
  padding: 0.6rem 1.5rem;
  font-size: 0.9rem;
}

.play-button:hover {
  background: #5D72D9;
  transform: scale(1.05);
}

.premium-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #FFD700;
  color: #333;
  font-size: 0.8rem;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  font-weight: 600;
}

.new-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #3B52A5;
  color: white;
  font-size: 0.8rem;
  padding: 0.4rem 0.8rem;
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

.game-developer {
  color: #666;
}

.game-genre {
  color: #3B52A5;
  font-weight: 600;
}

.game-stats {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.game-rating {
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.star {
  color: #FFD700;
}

.rating-value {
  font-weight: 600;
}

.game-downloads {
  color: #666;
}

.game-description {
  color: #444;
  line-height: 1.6;
  font-size: 0.95rem;
}

/* Game Categories */
.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.category-card {
  background: white;
  display: flex;
  align-items: center;
  padding: 1.8rem;
  border-radius: 1rem;
  box-shadow: 0 15px 30px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.category-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
  background: #3B52A5;
  color: white;
}

.category-icon {
  font-size: 3rem;
  margin-right: 1.5rem;
}

.category-info h3 {
  color: #333;
  font-size: 1.3rem;
  margin-bottom: 0.3rem;
}

.category-card:hover .category-info h3 {
  color: white;
}

.game-count {
  color: #666;
  font-size: 0.9rem;
}

.category-card:hover .game-count {
  color: rgba(255, 255, 255, 0.8);
}

/* Top Games */
.top-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.top-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.top-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}

.top-card .game-image {
  height: 150px;
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
  box-shadow: 0 15px 30px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.release-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}

.release-date {
  color: #666;
  font-size: 0.85rem;
}

/* Features Section */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  background: white;
  padding: 2.5rem;
  border-radius: 1rem;
  box-shadow: 0 15px 30px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  text-align: center;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  display: block;
}

.feature-card h3 {
  color: #3B52A5;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.feature-card p {
  color: #666;
  line-height: 1.6;
}

/* Testimonials */
.testimonials-section {
  text-align: center;
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
  box-shadow: 0 15px 30px rgba(0,0,0,0.1);
  flex: 1;
}

.testimonial-text {
  font-size: 1.3rem;
  font-style: italic;
  color: #444;
  line-height: 1.7;
  position: relative;
  margin-bottom: 2rem;
}

.testimonial-text::before,
.testimonial-text::after {
  content: '"';
  font-size: 2rem;
  color: #3B52A5;
  font-family: Georgia, serif;
}

.testimonial-author {
  text-align: right;
}

.author-name {
  font-weight: 700;
  color: #333;
  margin-bottom: 0.3rem;
}

.author-location {
  color: #666;
}

.testimonial-nav {
  background: #3B52A5;
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
  margin: 0 1.5rem;
  transition: all 0.3s ease;
}

.testimonial-nav:hover {
  background: #5D72D9;
  transform: scale(1.1);
}

.testimonial-indicators {
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  margin-top: 2rem;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #ddd;
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator.active {
  background: #3B52A5;
  transform: scale(1.2);
}

/* Billing Section */
.billing-container {
  display: flex;
  align-items: center;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
}

.billing-image {
  flex: 1;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}

.billing-image img {
  width: 100%;
  display: block;
  object-fit: cover;
  height: 100%;
}

.billing-info {
  flex: 1;
}

.billing-info h3 {
  font-size: 2rem;
  color: #3B52A5;
  margin-bottom: 1.5rem;
}

.price-tag {
  margin-bottom: 2rem;
}

.price-amount {
  font-size: 3.5rem;
  font-weight: 800;
  color: #3B52A5;
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
  align-items: center;
  margin-bottom: 1rem;
  color: #444;
  font-size: 1.1rem;
}

.check-icon {
  color: #3B52A5;
  margin-right: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
}

.billing-note {
  font-style: italic;
  color: #666;
  margin-bottom: 2rem;
}

.billing-button {
  background: #3B52A5;
  color: white;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.billing-button:hover {
  background: #5D72D9;
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(59, 82, 165, 0.2);
}

/* CTA Section */
.cta-section {
  background: linear-gradient(135deg, #3B52A5 0%, #5D72D9 100%);
  color: white;
  text-align: center;
  padding: 6rem 2rem;
}

.cta-section h2 {
  color: white;
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.cta-section p {
  font-size: 1.3rem;
  margin-bottom: 2.5rem;
  opacity: 0.9;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.cta-section .cta-button {
  background: white;
  color: #3B52A5;
}

.cta-section .cta-button:hover {
  background: #f8f9fa;
}

/* Responsive Styles */
@media (max-width: 1200px) {
  .featured-grid {
    grid-template-columns: 1fr;
  }
  
  .top-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
}

@media (max-width: 992px) {
  .billing-container {
    flex-direction: column-reverse;
  }
  
  .billing-image {
    width: 100%;
    max-width: 600px;
  }
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 3rem;
  }
  
  .subtitle {
    font-size: 1.3rem;
  }
  
  section {
    padding: 4rem 1.5rem;
  }
  
  section h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  
  .categories-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
  
  .testimonials-container {
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .testimonial-nav {
    margin: 0;
  }
  
  .testimonial {
    padding: 2rem;
  }
  
  .cta-section h2 {
    font-size: 2.5rem;
  }
}

@media (max-width: 576px) {
  .hero {
    padding: 6rem 1rem;
  }
  
  .hero h1 {
    font-size: 2.5rem;
  }
  
  .subtitle {
    font-size: 1.1rem;
  }
  
  .cta-button {
    padding: 0.8rem 2rem;
    font-size: 1.1rem;
  }
  
  .categories-grid {
    grid-template-columns: 1fr 1fr;
  }
  
  .top-grid,
  .releases-grid {
    grid-template-columns: 1fr;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .feature-card {
    padding: 2rem 1.5rem;
  }
  
  .testimonial-text {
    font-size: 1.1rem;
  }
  
  .billing-info h3 {
    font-size: 1.8rem;
  }
  
  .price-amount {
    font-size: 3rem;
  }
  
  .cta-section h2 {
    font-size: 2rem;
  }
  
  .cta-section p {
    font-size: 1.1rem;
  }
}
</style>