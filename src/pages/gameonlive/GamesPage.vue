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
    title: 'Stellar Conquest',
    developer: 'Nova Studios',
    rating: 4.9,
    downloads: '10M+',
    image: 'https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg',
    genre: 'Strategy',
    premium: true,
    description: 'Build your interstellar empire, research advanced technologies, forge alliances, and conquer the galaxy in this epic space strategy game.'
  },
  {
    title: 'Velocity Rush',
    developer: 'Speed Games',
    rating: 4.8,
    downloads: '15M+',
    image: 'https://images.pexels.com/photos/12670589/pexels-photo-12670589.jpeg',
    genre: 'Racing',
    premium: true,
    description: 'Experience heart-pounding street racing with stunning graphics, realistic physics, and a massive collection of customizable high-performance vehicles.'
  },
  {
    title: 'Mythic Heroes',
    developer: 'Epic Quest Studios',
    rating: 4.7,
    downloads: '8M+',
    image: 'https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg',
    genre: 'RPG',
    premium: true,
    description: 'Embark on an epic fantasy adventure with customizable heroes, powerful abilities, challenging dungeons, and an immersive storyline.'
  }
]);

const topGames = ref([
  {
    title: 'Mind Puzzler',
    developer: 'Puzzle Masters',
    rating: 4.6,
    image: 'https://images.pexels.com/photos/1111597/pexels-photo-1111597.jpeg',
    genre: 'Puzzle'
  },
  {
    title: 'Shadow Warriors',
    developer: 'Ninja Games',
    rating: 4.8,
    image: 'https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg',
    genre: 'Action'
  },
  {
    title: 'Farm Life',
    developer: 'Harmony Studios',
    rating: 4.5,
    image: 'https://images.pexels.com/photos/681335/pexels-photo-681335.jpeg',
    genre: 'Simulation'
  },
  {
    title: 'Championship Soccer',
    developer: 'Goal Games',
    rating: 4.7,
    image: 'https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg',
    genre: 'Sports'
  },
  {
    title: 'Lost Expedition',
    developer: 'Wilderness Interactive',
    rating: 4.6,
    image: 'https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg',
    genre: 'Adventure'
  },
  {
    title: 'Kingdom Builder',
    developer: 'Royal Games',
    rating: 4.8,
    image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg',
    genre: 'Strategy'
  }
]);

const newReleases = ref([
  {
    title: 'Cosmic Explorer',
    developer: 'Galaxy Games',
    releaseDate: 'July 15, 2025',
    image: 'https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg',
    genre: 'Adventure'
  },
  {
    title: 'Monster Hunter Pro',
    developer: 'Wild Studios',
    releaseDate: 'July 10, 2025',
    image: 'https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg',
    genre: 'Action'
  },
  {
    title: 'Speed Demons',
    developer: 'Turbo Games',
    releaseDate: 'July 5, 2025',
    image: 'https://images.pexels.com/photos/12670589/pexels-photo-12670589.jpeg',
    genre: 'Racing'
  },
  {
    title: 'Brain Teasers',
    developer: 'Puzzle Masters',
    releaseDate: 'July 1, 2025',
    image: 'https://images.pexels.com/photos/1111597/pexels-photo-1111597.jpeg',
    genre: 'Puzzle'
  }
]);

const features = ref([
  {
    title: 'No Ads or In-App Purchases',
    description: 'Enjoy uninterrupted gaming with no annoying ads or costly in-app purchases',
    icon: '🚫'
  },
  {
    title: 'Cloud Saves',
    description: 'Your game progress syncs across all your devices automatically',
    icon: '☁️'
  },
  {
    title: 'Premium Game Library',
    description: 'Access to 1,000+ high-quality games that are regularly updated',
    icon: '🎮'
  },
  {
    title: 'Multiplayer Gaming',
    description: 'Compete or collaborate with friends and players worldwide',
    icon: '🌐'
  },
  {
    title: 'Offline Play',
    description: 'Download games to play when you\'re not connected to the internet',
    icon: '📲'
  },
  {
    title: 'Exclusive Content',
    description: 'Access to special in-game items and levels available only to subscribers',
    icon: '🎁'
  }
]);

const testimonials = ref([
  {
    text: "Having access to so many premium games without ads or in-app purchases is incredible. It's changed how I game on my phone completely!",
    name: "Mark T.",
    location: "New York, USA"
  },
  {
    text: "The cloud save feature is perfect for switching between my phone and tablet. I can pick up exactly where I left off on any device.",
    name: "Lena K.",
    location: "Stockholm, Sweden"
  },
  {
    text: "I've discovered so many amazing games through GameOnLive that I would have otherwise missed. The curated selection is outstanding.",
    name: "Raj P.",
    location: "Singapore"
  }
]);

const currentTestimonial = ref(0);

const nextTestimonial = () => {
  currentTestimonial.value = (currentTestimonial.value + 1) % testimonials.value.length;
};

const prevTestimonial = () => {
  currentTestimonial.value = (currentTestimonial.value - 1 + testimonials.value.length) % testimonials.value.length;
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
        <p class="subtitle">Access 1,000+ games with no ads or in-app purchases</p>
        <button class="cta-button" @click="navigateToLogin">Start Playing</button>
      </div>
    </section>

    <!-- Game Categories -->
    <section class="categories-section">
      <div class="section-container">
        <div class="section-header">
          <h2>Explore Game Categories</h2>
          <p>Find your perfect game across all genres</p>
        </div>

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
    <section class="featured-section">
      <div class="section-container">
        <div class="section-header">
          <h2>Featured Games</h2>
          <p>Handpicked premium titles you won't want to miss</p>
        </div>

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
        <div class="section-header">
          <h2>Top Rated Games</h2>
          <p>The highest rated games in our collection</p>
        </div>

        <div class="top-grid">
          <div v-for="game in topGames" :key="game.title" class="top-card">
            <div class="game-image">
              <img :src="game.image" :alt="game.title">
              <div class="game-overlay">
                <button class="play-button small" @click="navigateToLogin">Play</button>
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
      </div>
    </section>

    <!-- New Releases -->
    <section class="releases-section">
      <div class="section-container">
        <div class="section-header">
          <h2>New Releases</h2>
          <p>The latest games added to our growing library</p>
        </div>

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
              <h3>{{ game.title }}</h3>
              <span class="game-developer">{{ game.developer }}</span>
              <div class="game-bottom">
                <div class="game-genre">{{ game.genre }}</div>
                <div class="release-date">{{ game.releaseDate }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <div class="section-container">
        <div class="section-header">
          <h2>Premium Gaming Features</h2>
          <p>Experience mobile gaming without limits</p>
        </div>

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
        <div class="section-header">
          <h2>What Gamers Say</h2>
        </div>

        <div class="testimonial-carousel">
          <button @click="prevTestimonial" class="testimonial-nav prev">❮</button>
          <div class="testimonial">
            <p class="testimonial-text">"{{ testimonials[currentTestimonial].text }}"</p>
            <div class="testimonial-author">
              <p class="author-name">{{ testimonials[currentTestimonial].name }}</p>
              <p class="author-location">{{ testimonials[currentTestimonial].location }}</p>
            </div>
          </div>
          <button @click="nextTestimonial" class="testimonial-nav next">❯</button>
        </div>

        <div class="testimonial-indicators">
          <span v-for="(_, index) in testimonials" :key="index" 
                class="indicator" :class="{ active: index === currentTestimonial }"
                @click="currentTestimonial = index"></span>
        </div>
      </div>
    </section>

    <!-- Mobile Billing Section -->
    <section class="billing-section">
      <div class="section-container">
        <div class="billing-container">
          <div class="billing-image">
            <img src="https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg" alt="Mobile Games">
          </div>
          <div class="billing-info">
            <h3>Gaming Premium</h3>
            <div class="price-tag">
              <span class="price-amount">$11.99</span>
              <span class="price-period">/month</span>
            </div>
            <ul class="billing-features">
              <li><span class="check">✓</span> Access to 1,000+ premium games</li>
              <li><span class="check">✓</span> No advertisements</li>
              <li><span class="check">✓</span> No in-app purchases required</li>
              <li><span class="check">✓</span> Cross-device cloud saves</li>
              <li><span class="check">✓</span> Offline play capability</li>
              <li><span class="check">✓</span> New games added weekly</li>
            </ul>
            <p class="billing-note">Billed directly through your mobile carrier - no credit card needed</p>
            <button class="billing-button" @click="navigateToLogin">Subscribe Now</button>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-content">
        <h2>Ready to Level Up Your Gaming?</h2>
        <p>Join millions of players enjoying premium mobile games without limits</p>
        <button class="cta-button" @click="navigateToLogin">Get Started Now</button>
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
  background: linear-gradient(135deg, #0055FF 0%, #00CCFF 100%);
  background-image: url('https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg');
  background-size: cover;
  background-position: center;
  background-blend-mode: overlay;
  color: white;
  padding: 10rem 2rem 8rem;
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
  background: linear-gradient(135deg, rgba(0, 85, 255, 0.85) 0%, rgba(0, 204, 255, 0.85) 100%);
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
}

.hero h1 {
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  text-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.subtitle {
  font-size: 1.5rem;
  opacity: 0.9;
  margin-bottom: 2.5rem;
}

.cta-button {
  background: white;
  color: #0055FF;
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

/* Section Container */
.section-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 2rem;
}

.section-header {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;
}

.section-header h2 {
  color: #0055FF;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.section-header p {
  color: #666;
  font-size: 1.2rem;
}

/* Categories Section */
.categories-section {
  background: white;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.category-card {
  background: #f5f8ff;
  display: flex;
  align-items: center;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 10px 20px rgba(0, 85, 255, 0.07);
  transition: transform 0.3s ease;
}

.category-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 85, 255, 0.15);
}

.category-icon {
  font-size: 3rem;
  margin-right: 1.5rem;
}

.category-info h3 {
  color: #0055FF;
  margin-bottom: 0.3rem;
  font-size: 1.2rem;
}

.category-count {
  color: #666;
  font-size: 0.9rem;
}

/* Featured Games */
.featured-section {
  background: #f5f8ff;
}

.featured-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
}

.featured-card {
  display: grid;
  grid-template-columns: 1fr 2fr;
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 85, 255, 0.07);
  transition: transform 0.3s ease;
}

.featured-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 85, 255, 0.15);
}

.game-image {
  position: relative;
  height: 100%;
  min-height: 250px;
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
  background: #0055FF;
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.play-button:hover {
  background: #00CCFF;
  transform: scale(1.05);
}

.play-button.small {
  padding: 0.6rem 1.5rem;
  font-size: 0.9rem;
}

.premium-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #FFD700;
  color: #333;
  font-size: 0.8rem;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  font-weight: 600;
}

.new-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #0055FF;
  color: white;
  font-size: 0.8rem;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  font-weight: 600;
}

.game-info {
  padding: 2rem;
}

.game-info h3 {
  color: #0055FF;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.game-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.2rem;
  font-size: 0.95rem;
}

.game-developer {
  color: #666;
}

.game-genre {
  color: #0055FF;
  font-weight: 600;
}

.game-stats {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
}

.game-rating {
  display: flex;
  align-items: center;
}

.star {
  color: #FFD700;
  margin-right: 0.3rem;
  font-size: 1.2rem;
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
}

/* Top Games */
.top-games-section {
  background: white;
}

.top-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.top-card {
  background: #f5f8ff;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 85, 255, 0.07);
  transition: transform 0.3s ease;
}

.top-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 85, 255, 0.15);
}

.top-card .game-image {
  height: 160px;
  min-height: auto;
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
.releases-section {
  background: #f5f8ff;
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
  box-shadow: 0 10px 20px rgba(0, 85, 255, 0.07);
  transition: transform 0.3s ease;
}

.release-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 85, 255, 0.15);
}

.release-date {
  color: #666;
  font-size: 0.85rem;
}

/* Features Section */
.features-section {
  background: white;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: #f5f8ff;
  padding: 2.5rem;
  border-radius: 1rem;
  box-shadow: 0 10px 20px rgba(0, 85, 255, 0.07);
  transition: transform 0.3s ease;
  text-align: center;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 85, 255, 0.15);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  display: block;
}

.feature-card h3 {
  color: #0055FF;
  font-size: 1.4rem;
  margin-bottom: 1rem;
}

.feature-card p {
  color: #444;
  line-height: 1.6;
}

/* Testimonials */
.testimonials-section {
  background: #f5f8ff;
}

.testimonial-carousel {
  display: flex;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
  gap: 2rem;
}

.testimonial {
  background: white;
  padding: 2.5rem;
  border-radius: 1rem;
  box-shadow: 0 10px 20px rgba(0, 85, 255, 0.07);
  flex: 1;
}

.testimonial-text {
  font-size: 1.2rem;
  font-style: italic;
  color: #444;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  position: relative;
}

.testimonial-text::before,
.testimonial-text::after {
  content: '"';
  font-size: 2rem;
  color: #0055FF;
  font-family: Georgia, serif;
}

.testimonial-author {
  text-align: right;
}

.author-name {
  color: #0055FF;
  font-weight: 700;
  margin-bottom: 0.3rem;
}

.author-location {
  color: #666;
  font-size: 0.9rem;
}

.testimonial-nav {
  width: 45px;
  height: 45px;
  background: #0055FF;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 85, 255, 0.2);
}

.testimonial-nav:hover {
  background: #00CCFF;
  transform: scale(1.1);
}

.testimonial-indicators {
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  margin-top: 2rem;
}

.indicator {
  width: 10px;
  height: 10px;
  background: #ddd;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator.active {
  background: #0055FF;
  transform: scale(1.2);
}

/* Billing Section */
.billing-section {
  background: white;
}

.billing-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.billing-image {
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 85, 255, 0.15);
  aspect-ratio: 4/3;
}

.billing-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.billing-info {
  display: flex;
  flex-direction: column;
}

.billing-info h3 {
  font-size: 2rem;
  color: #0055FF;
  margin-bottom: 1.5rem;
}

.price-tag {
  margin-bottom: 2rem;
}

.price-amount {
  font-size: 3.5rem;
  font-weight: 800;
  color: #0055FF;
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
  align-items: flex-start;
  margin-bottom: 1rem;
  color: #444;
  font-size: 1.1rem;
}

.check {
  color: #0055FF;
  font-weight: bold;
  margin-right: 0.8rem;
  flex-shrink: 0;
}

.billing-note {
  font-style: italic;
  color: #666;
  margin-bottom: 2rem;
}

.billing-button {
  background: #0055FF;
  color: white;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: flex-start;
}

.billing-button:hover {
  background: #00CCFF;
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 85, 255, 0.2);
}

/* CTA Section */
.cta-section {
  background: linear-gradient(135deg, #0055FF 0%, #00CCFF 100%);
  color: white;
  text-align: center;
  padding: 5rem 2rem;
}

.cta-content {
  max-width: 800px;
  margin: 0 auto;
}

.cta-section h2 {
  font-size: 2.8rem;
  margin-bottom: 1.5rem;
}

.cta-section p {
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  opacity: 0.9;
}

.cta-section .cta-button {
  background: white;
  color: #0055FF;
}

.cta-section .cta-button:hover {
  background: #f5f5f5;
}

/* Responsive Styles */
@media (max-width: 1200px) {
  .featured-card {
    grid-template-columns: 1fr;
  }
  
  .featured-card .game-image {
    min-height: 300px;
  }
  
  .billing-container {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .billing-image {
    order: -1;
  }
  
  .billing-button {
    align-self: center;
  }
}

@media (max-width: 992px) {
  .top-grid, 
  .releases-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
  
  .features-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 8rem 1.5rem 6rem;
  }
  
  .hero h1 {
    font-size: 3rem;
  }
  
  .section-container {
    padding: 4rem 1.5rem;
  }
  
  .section-header h2 {
    font-size: 2rem;
  }
  
  .testimonial-carousel {
    flex-direction: column;
  }
  
  .testimonial-nav {
    margin: 1rem 0;
  }
  
  .cta-section h2 {
    font-size: 2.2rem;
  }
  
  .billing-button {
    width: 100%;
  }
}

@media (max-width: 576px) {
  .hero h1 {
    font-size: 2.5rem;
  }
  
  .cta-button {
    padding: 0.8rem 2rem;
    font-size: 1rem;
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
  
  .billing-info h3 {
    font-size: 1.8rem;
  }
  
  .price-amount {
    font-size: 3rem;
  }
  
  .cta-section h2 {
    font-size: 1.8rem;
  }
  
  .featured-card .game-image {
    min-height: 200px;
  }
}
</style>