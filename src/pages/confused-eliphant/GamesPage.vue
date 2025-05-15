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
    title: 'Galaxy Conquest',
    developer: 'Cosmic Studios',
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
    image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg',
    genre: 'Racing',
    premium: true,
    description: 'Race through sprawling cities with high-performance cars in this adrenaline-pumping street racing experience.'
  },
  {
    title: 'Mythic Legends',
    developer: 'Epic Quest Games',
    rating: 4.9,
    downloads: '8M+',
    image: 'https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg',
    genre: 'RPG',
    premium: true,
    description: 'Embark on an epic quest with customizable heroes, magical abilities, and challenging dungeons.'
  }
]);

const topGames = ref([
  {
    title: 'Mind Maze',
    developer: 'Puzzle Masters',
    rating: 4.6,
    image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg',
    genre: 'Puzzle'
  },
  {
    title: 'Ninja Warriors',
    developer: 'Shadow Studios',
    rating: 4.8,
    image: 'https://images.pexels.com/photos/2115367/pexels-photo-2115367.jpeg',
    genre: 'Action'
  },
  {
    title: 'Harvest Valley',
    developer: 'Green Thumb Games',
    rating: 4.5,
    image: 'https://images.pexels.com/photos/681335/pexels-photo-681335.jpeg',
    genre: 'Simulation'
  },
  {
    title: 'Football Heroes',
    developer: 'Champion Games',
    rating: 4.7,
    image: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg',
    genre: 'Sports'
  },
  {
    title: 'Lost Expedition',
    developer: 'Adventure Box',
    rating: 4.6,
    image: 'https://images.pexels.com/photos/278918/pexels-photo-278918.jpeg',
    genre: 'Adventure'
  },
  {
    title: 'Castle Siege',
    developer: 'Royal Games',
    rating: 4.8,
    image: 'https://images.pexels.com/photos/4022463/pexels-photo-4022463.jpeg',
    genre: 'Strategy'
  }
]);

const newReleases = ref([
  {
    title: 'Stellar Odyssey',
    developer: 'Cosmic Games',
    releaseDate: 'June 15, 2025',
    image: 'https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg',
    genre: 'Adventure'
  },
  {
    title: 'Creature Craft',
    developer: 'Creative Pixels',
    releaseDate: 'June 12, 2025',
    image: 'https://images.pexels.com/photos/7360387/pexels-photo-7360387.jpeg',
    genre: 'Puzzle'
  },
  {
    title: 'Combat Masters',
    developer: 'Battle Studios',
    releaseDate: 'June 10, 2025',
    image: 'https://images.pexels.com/photos/7915357/pexels-photo-7915357.jpeg',
    genre: 'Action'
  },
  {
    title: 'Turbo Racing',
    developer: 'Speed Masters',
    releaseDate: 'June 8, 2025',
    image: 'https://images.pexels.com/photos/12670589/pexels-photo-12670589.jpeg',
    genre: 'Racing'
  }
]);

const features = ref([
  {
    title: 'Cloud Gaming',
    description: 'Play high-end games without downloads using our cloud gaming technology',
    icon: '☁️'
  },
  {
    title: 'Cross-device Play',
    description: 'Start on your phone, continue on your tablet or PC with progress synced automatically',
    icon: '📱'
  },
  {
    title: 'Multiplayer Matches',
    description: 'Compete or collaborate with players from around the world in real-time',
    icon: '🌐'
  },
  {
    title: 'Ad-free Experience',
    description: 'Enjoy uninterrupted gaming with no advertisements or interruptions',
    icon: '🚫'
  },
  {
    title: 'Exclusive Content',
    description: 'Access game items, characters, and levels only available to Confused Eliphant subscribers',
    icon: '🎁'
  },
  {
    title: 'Regular Updates',
    description: 'New games and features added every month to keep your experience fresh',
    icon: '🆕'
  }
]);

const testimonials = ref([
  {
    text: "As a serious gamer, having unlimited access to premium games with no ads has been incredible. The cloud gaming feature means I can play anywhere!",
    author: "Daniel R.",
    location: "Berlin, Germany"
  },
  {
    text: "The game selection is fantastic, and being able to easily switch between my phone and tablet is perfect for my lifestyle.",
    author: "Emma L.",
    location: "Milan, Italy"
  },
  {
    text: "I love that I don't need to worry about in-app purchases. One subscription gives me access to everything without hidden costs.",
    author: "Marcus K.",
    location: "Vienna, Austria"
  }
]);

const currentTestimonialIndex = ref(0);

const nextTestimonial = () => {
  currentTestimonialIndex.value = (currentTestimonialIndex.value + 1) % testimonials.value.length;
};

const prevTestimonial = () => {
  currentTestimonialIndex.value = (currentTestimonialIndex.value - 1 + testimonials.value.length) % testimonials.value.length;
};

const subscriptionPlan = ref({
  name: 'Gaming Premium',
  price: '€12.99',
  period: 'per month',
  features: [
    'Unlimited access to 1,000+ games',
    'Ad-free gaming experience',
    'Cloud saves across all devices',
    'Exclusive in-game content',
    'New games added monthly',
    'Premium multiplayer features'
  ]
});

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
        <p class="subtitle">Unlimited access to 1,000+ high-quality games with no ads</p>
        <button class="cta-button" @click="navigateToLogin">Login Now</button>
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
    <section class="game-categories">
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
    <section class="top-games">
      <h2>Top Rated Games</h2>
      <div class="top-grid">
        <div v-for="game in topGames" :key="game.title" class="top-card">
          <div class="game-image">
            <img :src="game.image" :alt="game.title">
            <div class="game-overlay">
              <button class="play-button" @click="navigateToLogin">Play</button>
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
    <section class="new-releases">
      <h2>New Releases</h2>
      <div class="releases-grid">
        <div v-for="game in newReleases" :key="game.title" class="release-card">
          <div class="game-image">
            <img :src="game.image" :alt="game.title">
            <div class="game-overlay">
              <button class="play-button" @click="navigateToLogin">Play</button>
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
    <section class="features">
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
    <section class="testimonials">
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

    <!-- Subscription Plan -->
    <section class="subscription">
      <h2>Gaming Subscription</h2>
      <div class="plan-card">
        <h3>{{ subscriptionPlan.name }}</h3>
        <div class="plan-price">
          <span class="price">{{ subscriptionPlan.price }}</span>
          <span class="period">{{ subscriptionPlan.period }}</span>
        </div>
        <ul class="plan-features">
          <li v-for="feature in subscriptionPlan.features" :key="feature">
            <span class="check-icon">✓</span> {{ feature }}
          </li>
        </ul>
        <p class="plan-billing">Billed directly to your phone - no credit card needed</p>
        <button class="subscribe-button" @click="navigateToLogin">Login Now</button>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta">
      <h2>Ready to Level Up Your Gaming?</h2>
      <p>Join millions of players enjoying premium mobile games</p>
      <button class="cta-button" @click="navigateToLogin">Login Now</button>
    </section>
  </div>
</template>

<style scoped>
.games-page {
  color: #1a202c;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  padding-top: 64px;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #6C63FF 0%, #FF6584 100%);
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
  line-height: 1.2;
}

.subtitle {
  font-size: 1.5rem;
  opacity: 0.9;
  margin-bottom: 2rem;
}

.cta-button {
  background: white;
  color: #6C63FF;
  font-size: 1.2rem;
  padding: 1rem 3rem;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

/* Featured Games */
.featured-games {
  padding: 5rem 2rem;
  background: white;
}

.featured-games h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #6C63FF;
  margin-bottom: 3rem;
}

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

.play-button {
  background: #6C63FF;
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.play-button:hover {
  background: #5a52e0;
  transform: scale(1.05);
}

.premium-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #FFD700;
  color: #1a202c;
  font-size: 0.7rem;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  font-weight: 600;
}

.new-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #6C63FF;
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
  color: #2d3748;
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
  color: #718096;
}

.game-genre {
  color: #6C63FF;
  font-weight: 500;
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
}

.star {
  color: #FFD700;
  margin-right: 0.3rem;
}

.rating-value {
  font-weight: 600;
}

.game-downloads {
  color: #718096;
}

.game-description {
  color: #4a5568;
  font-size: 0.95rem;
  line-height: 1.6;
}

/* Game Categories */
.game-categories {
  padding: 5rem 2rem;
  background: #f8fafc;
}

.game-categories h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #6C63FF;
  margin-bottom: 3rem;
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
  color: #2d3748;
  margin-bottom: 0.3rem;
}

.game-count {
  color: #718096;
  font-size: 0.85rem;
}

/* Top Games */
.top-games {
  padding: 5rem 2rem;
}

.top-games h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #6C63FF;
  margin-bottom: 3rem;
}

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
.new-releases {
  padding: 5rem 2rem;
  background: #f8fafc;
}

.new-releases h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #6C63FF;
  margin-bottom: 3rem;
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

/* Features */
.features {
  padding: 5rem 2rem;
}

.features h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #6C63FF;
  margin-bottom: 3rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  background: white;
  padding: 2rem;
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
  margin-bottom: 1rem;
  display: block;
}

.feature-card h3 {
  color: #6C63FF;
  margin-bottom: 0.5rem;
}

.feature-card p {
  color: #4a5568;
  line-height: 1.6;
}

/* Testimonials */
.testimonials {
  padding: 5rem 2rem;
  background: #f8fafc;
  text-align: center;
}

.testimonials h2 {
  font-size: 2.5rem;
  color: #6C63FF;
  margin-bottom: 3rem;
}

.testimonials-container {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  align-items: center;
}

.testimonial {
  background: white;
  padding: 2.5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  flex: 1;
}

.testimonial-text {
  font-size: 1.2rem;
  font-style: italic;
  color: #4a5568;
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.testimonial-author {
  text-align: right;
}

.author-name {
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.3rem;
}

.author-location {
  color: #718096;
  font-size: 0.9rem;
}

.testimonial-nav {
  background: #6C63FF;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  margin: 0 1rem;
  transition: all 0.3s ease;
}

.testimonial-nav:hover {
  background: #5a52e0;
  transform: scale(1.1);
}

.testimonial-indicators {
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
  gap: 0.5rem;
}

.indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #e2e8f0;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.indicator.active {
  background-color: #6C63FF;
}

/* Subscription */
.subscription {
  padding: 5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.subscription h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #6C63FF;
  margin-bottom: 3rem;
}

.plan-card {
  background: white;
  padding: 3rem;
  border-radius: 1rem;
  box-shadow: 0 8px 30px rgba(0,0,0,0.1);
  max-width: 500px;
  width: 100%;
  text-align: center;
}

.plan-card h3 {
  color: #6C63FF;
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.plan-price {
  margin-bottom: 2rem;
}

.price {
  font-size: 3rem;
  font-weight: 800;
  color: #2d3748;
}

.period {
  font-size: 1.2rem;
  color: #718096;
}

.plan-features {
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
  text-align: left;
}

.plan-features li {
  padding: 0.75rem 0;
  border-bottom: 1px solid #f0f4f8;
  color: #4a5568;
  display: flex;
  align-items: center;
}

.plan-features li:last-child {
  border-bottom: none;
}

.check-icon {
  color: #6C63FF;
  margin-right: 0.75rem;
  font-weight: bold;
}

.plan-billing {
  font-size: 0.95rem;
  color: #718096;
  margin-bottom: 2rem;
  font-style: italic;
}

.subscribe-button {
  background: #6C63FF;
  color: white;
  padding: 1rem 2rem;
  border-radius: 50px;
  border: none;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
}

.subscribe-button:hover {
  background: #5a52e0;
  transform: translateY(-2px);
}

/* CTA Section */
.cta {
  background: linear-gradient(135deg, #6C63FF 0%, #FF6584 100%);
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

.cta .cta-button {
  background: white;
  color: #6C63FF;
}

/* Responsive Styles */
@media (max-width: 1024px) {
  .featured-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 3rem;
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
  
  .plan-card {
    padding: 2rem;
  }
  
  .cta h2 {
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
  
  .testimonials-container {
    flex-direction: column;
  }
  
  .testimonial-nav {
    margin: 1rem 0;
  }
  
  .cta h2 {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .top-grid, .releases-grid {
    grid-template-columns: 1fr;
  }
}
</style>