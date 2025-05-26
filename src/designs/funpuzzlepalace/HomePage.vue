<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Featured games data
const featuredGames = ref([
  {
    id: 1,
    title: 'Puzzle Master 3D',
    category: 'Puzzle',
    description: 'Challenge your spatial reasoning with intricate 3D puzzles that will test your problem-solving skills.',
    image: 'https://images.pexels.com/photos/1314435/pexels-photo-1314435.jpeg',
    rating: 4.8,
    downloads: '5M+'
  },
  {
    id: 2,
    title: 'Jewel Quest: Legends',
    category: 'Match-3',
    description: 'Match gems in this addictive puzzle adventure through ancient temples and hidden kingdoms.',
    image: 'https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg',
    rating: 4.7,
    downloads: '10M+'
  },
  {
    id: 3,
    title: 'Brain Teasers Ultimate',
    category: 'Logic',
    description: 'A collection of mind-bending puzzles designed to challenge your logical thinking and creativity.',
    image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg',
    rating: 4.9,
    downloads: '3M+'
  }
]);

// Game categories
const categories = ref([
  {
    id: 'puzzle',
    name: 'Puzzle',
    count: 250,
    icon: '🧩',
    image: 'https://images.pexels.com/photos/1314435/pexels-photo-1314435.jpeg'
  },
  {
    id: 'action',
    name: 'Action',
    count: 180,
    icon: '💥',
    image: 'https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg'
  },
  {
    id: 'adventure',
    name: 'Adventure',
    count: 120,
    icon: '🗺️',
    image: 'https://images.pexels.com/photos/1174746/pexels-photo-1174746.jpeg'
  },
  {
    id: 'strategy',
    name: 'Strategy',
    count: 95,
    icon: '🧠',
    image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg'
  },
  {
    id: 'multiplayer',
    name: 'Multiplayer',
    count: 75,
    icon: '👥',
    image: 'https://images.pexels.com/photos/159354/video-game-controller-joystick-game-controller-159354.jpeg'
  }
]);

// Popular games
const popularGames = ref([
  {
    id: 101,
    title: 'Cubic Rush',
    category: 'Puzzle',
    image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
    rating: 4.7
  },
  {
    id: 102,
    title: 'Word Wizards',
    category: 'Word',
    image: 'https://images.pexels.com/photos/278887/pexels-photo-278887.jpeg',
    rating: 4.9
  },
  {
    id: 103,
    title: 'Color Match',
    category: 'Match-3',
    image: 'https://images.pexels.com/photos/1329061/pexels-photo-1329061.jpeg',
    rating: 4.6
  },
  {
    id: 104,
    title: 'Logic Masters',
    category: 'Logic',
    image: 'https://images.pexels.com/photos/6686103/pexels-photo-6686103.jpeg',
    rating: 4.8
  }
]);

// User testimonials
const testimonials = ref([
  {
    id: 1,
    name: 'Sarah L.',
    quote: 'Fun Puzzle Palace has the best selection of puzzle games I\'ve ever seen! The no-ads experience makes it so much more enjoyable.',
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg',
    rating: 5
  },
  {
    id: 2,
    name: 'Mike T.',
    quote: 'I love how easy the payment system is. One subscription through my phone bill gives me access to hundreds of premium games.',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    rating: 5
  },
  {
    id: 3,
    name: 'Elena R.',
    quote: 'The puzzle games here are so addictive and challenging. Perfect for keeping my mind sharp during my commute!',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
    rating: 4
  }
]);

// Features
const features = ref([
  {
    title: 'Premium Games Collection',
    description: 'Access over 1,000 high-quality games with no ads or in-app purchases.',
    icon: '🎮'
  },
  {
    title: 'Phone Bill Payments',
    description: 'Simple subscription billed directly through your mobile phone carrier.',
    icon: '📱'
  },
  {
    title: 'Daily Challenges',
    description: 'New puzzles and challenges added daily to keep your mind sharp.',
    icon: '🎯'
  },
  {
    title: 'Cloud Saves',
    description: 'Your progress is automatically saved across all your devices.',
    icon: '☁️'
  }
]);

const navigateToCategory = (categoryId) => {
  router.push(`/funpuzzlepalace/category/${categoryId}`);
};

const navigateToGame = (gameId) => {
  router.push('/funpuzzlepalace/login');
};

const navigateToPricing = () => {
  router.push('/funpuzzlepalace/payment');
};

// Animation on scroll effect
onMounted(() => {
  const observerOptions = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.animate').forEach(el => {
    observer.observe(el);
  });
});
</script>

<template>
  <div class="funpuzzlepalace-home">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <h1>Premium Mobile <span class="accent">Puzzle Games</span></h1>
        <p class="hero-subtitle">Thousands of games. No ads. No in-app purchases.</p>
        <div class="hero-buttons">
          <button @click="navigateToPricing" class="primary-button">Start Free Trial</button>
          <button @click="() => router.push('/funpuzzlepalace/category/puzzle')" class="secondary-button">Explore Games</button>
        </div>
        
        <div class="hero-features">
          <div class="feature-tag">
            <span class="feature-icon">🎮</span>
            <span>1000+ Games</span>
          </div>
          <div class="feature-tag">
            <span class="feature-icon">🚫</span>
            <span>No Ads</span>
          </div>
          <div class="feature-tag">
            <span class="feature-icon">📱</span>
            <span>Phone Billing</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Games -->
    <section class="featured-section animate">
      <div class="section-container">
        <h2>Featured Games</h2>
        <div class="featured-games">
          <div v-for="game in featuredGames" :key="game.id" class="game-card">
            <div class="game-image-container">
              <img :src="game.image" :alt="game.title" class="game-image">
              <div class="game-overlay">
                <button @click="navigateToGame(game.id)" class="play-button">Play Now</button>
              </div>
            </div>
            <div class="game-info">
              <div class="game-header">
                <h3>{{ game.title }}</h3>
                <div class="game-category">{{ game.category }}</div>
              </div>
              <div class="game-rating">
                <div class="stars">★★★★★</div>
                <div class="rating-value">{{ game.rating }}</div>
              </div>
              <p class="game-description">{{ game.description }}</p>
              <div class="game-stats">
                <span>{{ game.downloads }} Downloads</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Categories Section -->
    <section class="categories-section animate">
      <div class="section-container">
        <h2>Game Categories</h2>
        <div class="categories-grid">
          <div 
            v-for="category in categories" 
            :key="category.id" 
            class="category-card"
            @click="navigateToCategory(category.id)"
          >
            <div class="category-image-container">
              <img :src="category.image" :alt="category.name" class="category-image">
              <div class="category-overlay">
                <span class="category-icon">{{ category.icon }}</span>
                <h3>{{ category.name }}</h3>
                <p>{{ category.count }}+ Games</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Popular Games -->
    <section class="popular-section animate">
      <div class="section-container">
        <h2>Popular Games</h2>
        <div class="popular-games">
          <div v-for="game in popularGames" :key="game.id" class="popular-game-card">
            <div class="popular-game-image">
              <img :src="game.image" :alt="game.title">
              <div class="game-overlay">
                <button @click="navigateToGame(game.id)" class="play-button">Play</button>
              </div>
              <div class="popular-game-rating">★ {{ game.rating }}</div>
            </div>
            <div class="popular-game-info">
              <h3>{{ game.title }}</h3>
              <p>{{ game.category }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section animate">
      <div class="section-container">
        <h2>Why Choose Fun Puzzle Palace?</h2>
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
    <section class="testimonials-section animate">
      <div class="section-container">
        <h2>What Players Say</h2>
        <div class="testimonials-grid">
          <div v-for="testimonial in testimonials" :key="testimonial.id" class="testimonial-card">
            <div class="testimonial-content">
              <div class="quotation-mark">"</div>
              <p class="testimonial-quote">{{ testimonial.quote }}</p>
              <div class="testimonial-rating">
                <span v-for="i in 5" :key="i" class="star" :class="{ filled: i <= testimonial.rating }">★</span>
              </div>
            </div>
            <div class="testimonial-author">
              <img :src="testimonial.image" :alt="testimonial.name" class="author-avatar">
              <div class="author-name">{{ testimonial.name }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section animate">
      <div class="section-container">
        <h2>Ready to Start Playing?</h2>
        <p>Get unlimited access to premium games with a simple subscription.</p>
        <div class="cta-buttons">
          <button @click="navigateToPricing" class="primary-button">Start 7-Day Free Trial</button>
          <button @click="() => router.push('/funpuzzlepalace/signup')" class="secondary-button">Create Account</button>
        </div>
        <p class="cta-note">No credit card required. Cancel anytime.</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.funpuzzlepalace-home {
  background-color: #0f172a;
  color: #e2e8f0;
  font-family: 'Inter', sans-serif;
  overflow-x: hidden;
}

.section-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

h2 {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  color: #f8fafc;
  position: relative;
}

h2::after {
  content: '';
  position: absolute;
  bottom: -1rem;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, #8B5CF6, #EC4899);
  border-radius: 2px;
}

/* Hero Section */
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8rem 2rem;
  background: #0f172a url('https://images.pexels.com/photos/1314435/pexels-photo-1314435.jpeg') no-repeat center center/cover;
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(15, 23, 42, 0.85);
  z-index: 1;
}

.hero-section::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 30% 40%, rgba(139, 92, 246, 0.4) 0%, rgba(15, 23, 42, 0.6) 60%);
  z-index: 2;
}

.hero-content {
  max-width: 800px;
  text-align: center;
  position: relative;
  z-index: 3;
}

.hero-section h1 {
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  color: #f8fafc;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.accent {
  background: linear-gradient(to right, #8B5CF6, #EC4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 2.5rem;
  color: #e2e8f0;
}

.hero-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-bottom: 3rem;
}

.primary-button {
  background: linear-gradient(to right, #8B5CF6, #EC4899);
  color: white;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(139, 92, 246, 0.5);
}

.primary-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 25px rgba(139, 92, 246, 0.7);
}

.secondary-button {
  background: transparent;
  color: white;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  border: 2px solid rgba(139, 92, 246, 0.7);
  cursor: pointer;
  transition: all 0.3s ease;
}

.secondary-button:hover {
  background: rgba(139, 92, 246, 0.1);
  transform: translateY(-3px);
}

.hero-features {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.feature-tag {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(30, 41, 59, 0.8);
  border: 1px solid rgba(139, 92, 246, 0.3);
  padding: 0.5rem 1rem;
  border-radius: 50px;
  backdrop-filter: blur(10px);
}

.feature-icon {
  font-size: 1.2rem;
}

/* Featured Games */
.featured-section {
  padding: 8rem 0;
}

.featured-games {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.game-card {
  background: #1e293b;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.game-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(139, 92, 246, 0.3);
}

.game-image-container {
  position: relative;
  height: 220px;
  overflow: hidden;
}

.game-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.game-card:hover .game-image {
  transform: scale(1.05);
}

.game-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(15, 23, 42, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.3s ease;
}

.game-card:hover .game-overlay {
  opacity: 1;
}

.play-button {
  background: linear-gradient(to right, #8B5CF6, #EC4899);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.play-button:hover {
  transform: scale(1.1);
  box-shadow: 0 0 20px rgba(139, 92, 246, 0.5);
}

.game-info {
  padding: 1.5rem;
}

.game-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.game-header h3 {
  font-size: 1.5rem;
  color: #f8fafc;
  margin: 0;
}

.game-category {
  background: rgba(139, 92, 246, 0.2);
  color: #a78bfa;
  padding: 0.3rem 0.75rem;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 600;
}

.game-rating {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.stars {
  color: #fbbf24;
  margin-right: 0.5rem;
}

.rating-value {
  color: #f8fafc;
  font-weight: 600;
}

.game-description {
  color: #cbd5e1;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.game-stats {
  color: #94a3b8;
  font-size: 0.85rem;
}

/* Categories Section */
.categories-section {
  padding: 8rem 0;
  background: #1e293b;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
}

.category-card {
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  height: 220px;
  cursor: pointer;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.category-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(139, 92, 246, 0.3);
}

.category-image-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.category-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.category-card:hover .category-image {
  transform: scale(1.1);
}

.category-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to top, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 0.6) 50%, rgba(15, 23, 42, 0.3) 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  transition: background 0.3s ease;
}

.category-card:hover .category-overlay {
  background: linear-gradient(to top, rgba(139, 92, 246, 0.9) 0%, rgba(139, 92, 246, 0.6) 50%, rgba(139, 92, 246, 0.3) 100%);
}

.category-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.category-overlay h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #f8fafc;
  margin-bottom: 0.5rem;
  text-align: center;
}

.category-overlay p {
  color: #e2e8f0;
  font-size: 0.9rem;
  text-align: center;
}

/* Popular Games */
.popular-section {
  padding: 8rem 0;
}

.popular-games {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 2rem;
}

.popular-game-card {
  background: #1e293b;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.popular-game-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(139, 92, 246, 0.3);
}

.popular-game-image {
  position: relative;
  height: 250px;
  overflow: hidden;
}

.popular-game-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.popular-game-card:hover .popular-game-image img {
  transform: scale(1.05);
}

.popular-game-rating {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  background: rgba(15, 23, 42, 0.8);
  color: #fbbf24;
  padding: 0.25rem 0.6rem;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
  backdrop-filter: blur(4px);
}

.popular-game-info {
  padding: 1.2rem;
}

.popular-game-info h3 {
  font-size: 1.2rem;
  color: #f8fafc;
  margin-bottom: 0.5rem;
}

.popular-game-info p {
  color: #94a3b8;
  font-size: 0.9rem;
}

/* Features Section */
.features-section {
  padding: 8rem 0;
  background: #1e293b;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: #0f172a;
  padding: 2.5rem;
  border-radius: 1rem;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(139, 92, 246, 0.3);
}

.feature-card .feature-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.feature-card h3 {
  font-size: 1.5rem;
  color: #f8fafc;
  margin-bottom: 1rem;
}

.feature-card p {
  color: #cbd5e1;
  font-size: 1rem;
  line-height: 1.6;
}

/* Testimonials Section */
.testimonials-section {
  padding: 8rem 0;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.testimonial-card {
  background: #1e293b;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.testimonial-content {
  padding: 2rem;
  position: relative;
}

.quotation-mark {
  position: absolute;
  top: 1rem;
  left: 1.5rem;
  font-size: 4rem;
  color: rgba(139, 92, 246, 0.2);
  font-family: serif;
  line-height: 1;
}

.testimonial-quote {
  position: relative;
  z-index: 1;
  color: #e2e8f0;
  font-size: 1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
}

.testimonial-rating {
  margin-bottom: 1rem;
}

.star {
  color: #64748b;
  margin-right: 2px;
}

.star.filled {
  color: #fbbf24;
}

.testimonial-author {
  padding: 1.5rem;
  background: #0f172a;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.author-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}

.author-name {
  color: #f8fafc;
  font-weight: 600;
}

/* CTA Section */
.cta-section {
  padding: 8rem 0;
  background: linear-gradient(135deg, #8B5CF6, #EC4899);
  text-align: center;
}

.cta-section h2 {
  color: white;
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.cta-section h2::after {
  background: white;
}

.cta-section p {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.25rem;
  max-width: 700px;
  margin: 0 auto 2.5rem;
}

.cta-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.cta-section .primary-button {
  background: white;
  color: #8B5CF6;
  box-shadow: 0 4px 20px rgba(255, 255, 255, 0.3);
}

.cta-section .primary-button:hover {
  box-shadow: 0 6px 25px rgba(255, 255, 255, 0.5);
}

.cta-section .secondary-button {
  border-color: white;
}

.cta-note {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
}

/* Animation classes */
.animate {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out;
}

.animate-in {
  opacity: 1;
  transform: translateY(0);
}

/* Responsive styles */
@media screen and (max-width: 1024px) {
  .hero-section h1 {
    font-size: 3.5rem;
  }
  
  .featured-games,
  .categories-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
  
  .popular-games {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
}

@media screen and (max-width: 768px) {
  .hero-section {
    padding: 6rem 2rem;
  }
  
  .hero-section h1 {
    font-size: 3rem;
  }
  
  .hero-subtitle {
    font-size: 1.3rem;
  }
  
  .hero-buttons {
    flex-direction: column;
    gap: 1rem;
  }
  
  .hero-features {
    flex-direction: column;
    align-items: center;
  }
  
  .featured-games,
  .categories-grid,
  .testimonials-grid {
    grid-template-columns: 1fr;
  }
  
  .popular-games {
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  }
  
  .cta-buttons {
    flex-direction: column;
    gap: 1rem;
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .section-container {
    padding: 0 1rem;
  }
  
  h2 {
    font-size: 2.2rem;
  }
}

@media screen and (max-width: 480px) {
  .hero-section h1 {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
  
  .primary-button,
  .secondary-button {
    font-size: 1rem;
    padding: 0.875rem 2rem;
  }
  
  .popular-games {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .feature-card {
    padding: 2rem 1.5rem;
  }
  
  h2 {
    font-size: 2rem;
  }
  
  .cta-section h2 {
    font-size: 2.5rem;
  }
  
  .cta-section p {
    font-size: 1.1rem;
  }
}
</style>