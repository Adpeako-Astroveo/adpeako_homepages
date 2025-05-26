<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import 'swiper/css';

const router = useRouter();

// Featured game data
const featuredGame = ref({
  id: 'cosmic-quest',
  title: 'Cosmic Quest',
  description: 'Embark on an intergalactic adventure through mysterious planets, solve ancient alien puzzles, and unlock cosmic powers in this mind-bending puzzle game.',
  image: 'https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg',
  rating: 4.9,
  category: 'Puzzle Adventure',
  players: '2.3M+'
});

// Categories data
const categories = ref([
  {
    id: 'action',
    name: 'Action',
    icon: '🔥',
    games: 230,
    image: 'https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg'
  },
  {
    id: 'puzzle',
    name: 'Puzzle',
    icon: '🧩',
    games: 185,
    image: 'https://images.pexels.com/photos/1314435/pexels-photo-1314435.jpeg'
  },
  {
    id: 'adventure',
    name: 'Adventure',
    icon: '🌄',
    games: 156,
    image: 'https://images.pexels.com/photos/1174746/pexels-photo-1174746.jpeg'
  },
  {
    id: 'strategy',
    name: 'Strategy',
    icon: '♟️',
    games: 110,
    image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg'
  },
  {
    id: 'multiplayer',
    name: 'Multiplayer',
    icon: '👥',
    games: 95,
    image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg'
  }
]);

// Trending games data
const trendingGames = ref([
  {
    id: 'neon-drift',
    title: 'Neon Drift',
    category: 'Racing',
    rating: 4.8,
    image: 'https://images.pexels.com/photos/12795/pexels-photo-12795.jpeg',
    description: 'High-speed futuristic racing with mind-bending tracks'
  },
  {
    id: 'mystic-realms',
    title: 'Mystic Realms',
    category: 'RPG',
    rating: 4.7,
    image: 'https://images.pexels.com/photos/7360366/pexels-photo-7360366.jpeg',
    description: 'Explore vast magical worlds filled with quests and treasures'
  },
  {
    id: 'cyber-combat',
    title: 'Cyber Combat',
    category: 'Action',
    rating: 4.9,
    image: 'https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg',
    description: 'Fast-paced cyberpunk battles in a dystopian future'
  },
  {
    id: 'puzzle-dimension',
    title: 'Puzzle Dimension',
    category: 'Puzzle',
    rating: 4.8,
    image: 'https://images.pexels.com/photos/1111597/pexels-photo-1111597.jpeg',
    description: 'Mind-bending 4D puzzles that challenge your perception'
  },
  {
    id: 'space-colonizers',
    title: 'Space Colonizers',
    category: 'Strategy',
    rating: 4.6,
    image: 'https://images.pexels.com/photos/1274260/pexels-photo-1274260.jpeg',
    description: 'Build and manage your own galactic empire'
  },
  {
    id: 'shadow-warriors',
    title: 'Shadow Warriors',
    category: 'Fighting',
    rating: 4.7,
    image: 'https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg',
    description: 'Master ancient martial arts in this competitive fighter'
  }
]);

// New releases data
const newReleases = ref([
  {
    id: 'crystal-caverns',
    title: 'Crystal Caverns',
    category: 'Puzzle',
    rating: 4.7,
    image: 'https://images.pexels.com/photos/5089151/pexels-photo-5089151.jpeg',
    releaseDate: 'New'
  },
  {
    id: 'robot-uprising',
    title: 'Robot Uprising',
    category: 'Action',
    rating: 4.5,
    image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg',
    releaseDate: 'New'
  },
  {
    id: 'city-builder-2025',
    title: 'City Builder 2025',
    category: 'Simulation',
    rating: 4.6,
    image: 'https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg',
    releaseDate: 'New'
  },
  {
    id: 'dragon-legends',
    title: 'Dragon Legends',
    category: 'RPG',
    rating: 4.8,
    image: 'https://images.pexels.com/photos/1210276/pexels-photo-1210276.jpeg',
    releaseDate: 'New'
  }
]);

// Premium features
const premiumFeatures = ref([
  {
    icon: '🎮',
    title: 'Unlimited Access',
    description: 'Play any game in our vast library with no restrictions'
  },
  {
    icon: '🚫',
    title: 'Ad-Free Experience',
    description: 'Enjoy gaming without annoying ads or interruptions'
  },
  {
    icon: '📱',
    title: 'Phone Billing',
    description: 'Convenient payment through your mobile phone bill'
  },
  {
    icon: '⚡',
    title: 'Instant Play',
    description: 'No downloads or waiting - play immediately online'
  }
]);

// Testimonials
const testimonials = ref([
  {
    name: 'Sarah K.',
    quote: 'Fun Puzzle Palace has the best collection of puzzle games I\'ve ever found. The phone billing makes it so easy to subscribe without needing a credit card!',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
    rating: 5
  },
  {
    name: 'Jason M.',
    quote: 'I love the variety of games available. From action to strategy, there\'s always something new to play, and the premium experience is worth every cent.',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
    rating: 5
  },
  {
    name: 'Emma T.',
    quote: 'The multiplayer games are fantastic! I\'ve connected with friends across the country, and the absence of ads makes gameplay so much more enjoyable.',
    avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg',
    rating: 4
  }
]);

const activeTestimonialIndex = ref(0);

// Methods
const navigateToCategory = (categoryId) => {
  router.push(`/funpuzzlepalace/category/${categoryId}`);
};

const playGame = (gameId) => {
  router.push('/funpuzzlepalace/login');
};

const changeTestimonial = (index) => {
  activeTestimonialIndex.value = index;
};

// Parallax effect
let parallaxElements = [];

onMounted(() => {
  parallaxElements = document.querySelectorAll('.parallax-element');
  window.addEventListener('mousemove', handleMouseMove);
  
  // Auto-rotate testimonials
  setInterval(() => {
    activeTestimonialIndex.value = (activeTestimonialIndex.value + 1) % testimonials.value.length;
  }, 5000);
});

const handleMouseMove = (e) => {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const deltaX = e.clientX - centerX;
  const deltaY = e.clientY - centerY;
  
  parallaxElements.forEach(el => {
    const speedX = el.getAttribute('data-speed-x') || 0.01;
    const speedY = el.getAttribute('data-speed-y') || 0.01;
    const moveX = deltaX * speedX;
    const moveY = deltaY * speedY;
    el.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });
};
</script>

<template>
  <div class="home-page">
    <!-- Hero Banner -->
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="glowing-text parallax-element" data-speed-x="0.02" data-speed-y="0.01">
          Discover Premium Mobile Gaming
        </h1>
        <p class="hero-subtitle parallax-element" data-speed-x="0.01" data-speed-y="0.005">
          Unlimited access to thousands of premium games with one simple subscription.
          No ads. No in-app purchases. Just pure gaming joy.
        </p>
        
        <div class="featured-game parallax-element" data-speed-x="0.015" data-speed-y="0.01">
          <div class="featured-game-image">
            <img :src="featuredGame.image" :alt="featuredGame.title" />
            <div class="featured-overlay">
              <div class="featured-badge">FEATURED</div>
              <div class="featured-rating">★ {{ featuredGame.rating }}</div>
            </div>
          </div>
          <div class="featured-game-content">
            <h2>{{ featuredGame.title }}</h2>
            <p class="featured-category">{{ featuredGame.category }}</p>
            <p class="featured-players">{{ featuredGame.players }} Players</p>
            <p class="featured-description">{{ featuredGame.description }}</p>
            <button @click="playGame(featuredGame.id)" class="play-button">
              <span class="play-icon">▶</span> Play Now
            </button>
          </div>
        </div>
      </div>
      
      <!-- Cyberpunk grid background -->
      <div class="hero-background">
        <div class="grid-lines"></div>
        <div class="glow-circle-1"></div>
        <div class="glow-circle-2"></div>
      </div>
    </section>
    
    <!-- Categories Section -->
    <section class="categories-section">
      <div class="section-header">
        <h2 class="glowing-text">Top Categories</h2>
        <p>Find your perfect game from our curated collections</p>
      </div>
      
      <div class="categories-grid">
        <div 
          v-for="category in categories" 
          :key="category.id" 
          class="category-card"
          @click="navigateToCategory(category.id)"
        >
          <div class="category-image">
            <img :src="category.image" :alt="category.name" />
            <div class="category-overlay"></div>
          </div>
          <div class="category-content">
            <div class="category-icon">{{ category.icon }}</div>
            <h3>{{ category.name }}</h3>
            <p>{{ category.games }} Games</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Trending Games Section -->
    <section class="trending-section">
      <div class="section-header">
        <h2 class="glowing-text">Trending Games</h2>
        <p>Check out what everyone is playing right now</p>
      </div>
      
      <div class="trending-carousel">
        <div class="trending-games">
          <div 
            v-for="game in trendingGames" 
            :key="game.id" 
            class="game-card"
          >
            <div class="game-image">
              <img :src="game.image" :alt="game.title" />
              <div class="game-overlay">
                <button @click="playGame(game.id)" class="play-button-small">Play</button>
              </div>
              <div class="game-rating">★ {{ game.rating }}</div>
            </div>
            <div class="game-content">
              <h3>{{ game.title }}</h3>
              <p class="game-category">{{ game.category }}</p>
              <p class="game-description">{{ game.description }}</p>
            </div>
          </div>
        </div>
        
        <div class="carousel-nav">
          <button class="carousel-prev">❮</button>
          <button class="carousel-next">❯</button>
        </div>
      </div>
    </section>
    
    <!-- New Releases Section -->
    <section class="new-releases-section">
      <div class="section-header">
        <h2 class="glowing-text">New Releases</h2>
        <p>Be the first to play our latest additions</p>
      </div>
      
      <div class="releases-grid">
        <div 
          v-for="game in newReleases" 
          :key="game.id" 
          class="release-card"
        >
          <div class="release-image">
            <img :src="game.image" :alt="game.title" />
            <div class="release-overlay">
              <button @click="playGame(game.id)" class="play-button-small">Play</button>
            </div>
            <div class="release-badge">{{ game.releaseDate }}</div>
            <div class="release-rating">★ {{ game.rating }}</div>
          </div>
          <div class="release-content">
            <h3>{{ game.title }}</h3>
            <p class="release-category">{{ game.category }}</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Phone Billing Section -->
    <section class="phone-billing-section">
      <div class="phone-billing-content">
        <div class="phone-billing-text">
          <h2 class="glowing-text">Easy Phone Billing</h2>
          <p>Subscribe to Fun Puzzle Palace with just your mobile number. No credit card required!</p>
          
          <div class="billing-steps">
            <div class="billing-step">
              <div class="step-number">1</div>
              <div class="step-text">
                <h3>Choose Your Plan</h3>
                <p>Select monthly or annual premium subscription</p>
              </div>
            </div>
            
            <div class="billing-step">
              <div class="step-number">2</div>
              <div class="step-text">
                <h3>Enter Your Number</h3>
                <p>Provide your mobile phone number</p>
              </div>
            </div>
            
            <div class="billing-step">
              <div class="step-number">3</div>
              <div class="step-text">
                <h3>Confirm via SMS</h3>
                <p>Receive and enter one-time verification code</p>
              </div>
            </div>
            
            <div class="billing-step">
              <div class="step-number">4</div>
              <div class="step-text">
                <h3>Start Gaming</h3>
                <p>Charges appear on your monthly phone bill</p>
              </div>
            </div>
          </div>
          
          <button @click="router.push('/funpuzzlepalace/payment')" class="learn-more-button">
            Learn More
          </button>
        </div>
        
        <div class="phone-billing-image">
          <img src="https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg" alt="Phone Billing" />
        </div>
      </div>
    </section>
    
    <!-- Premium Features -->
    <section class="features-section">
      <div class="section-header">
        <h2 class="glowing-text">Premium Features</h2>
        <p>Why gamers choose Fun Puzzle Palace</p>
      </div>
      
      <div class="features-grid">
        <div 
          v-for="(feature, index) in premiumFeatures" 
          :key="index" 
          class="feature-card"
        >
          <div class="feature-icon">{{ feature.icon }}</div>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </div>
      </div>
    </section>
    
    <!-- Testimonials Section -->
    <section class="testimonials-section">
      <div class="section-header">
        <h2 class="glowing-text">What Gamers Say</h2>
        <p>Don't just take our word for it</p>
      </div>
      
      <div class="testimonials-carousel">
        <div class="testimonial-container">
          <div 
            v-for="(testimonial, index) in testimonials" 
            :key="index" 
            class="testimonial"
            :class="{ active: index === activeTestimonialIndex }"
          >
            <div class="testimonial-avatar">
              <img :src="testimonial.avatar" :alt="testimonial.name" />
            </div>
            <div class="testimonial-content">
              <div class="testimonial-rating">
                <span v-for="star in testimonial.rating" :key="star">★</span>
              </div>
              <p class="testimonial-quote">"{{ testimonial.quote }}"</p>
              <p class="testimonial-name">— {{ testimonial.name }}</p>
            </div>
          </div>
        </div>
        
        <div class="testimonial-dots">
          <button 
            v-for="(_, index) in testimonials" 
            :key="index"
            class="dot"
            :class="{ active: index === activeTestimonialIndex }"
            @click="changeTestimonial(index)"
          ></button>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-content">
        <h2 class="glowing-text">Ready to Start Playing?</h2>
        <p>Join thousands of gamers already enjoying premium content.</p>
        <div class="cta-buttons">
          <button @click="router.push('/funpuzzlepalace/signup')" class="signup-button">
            Create Account
          </button>
          <button @click="router.push('/funpuzzlepalace/login')" class="login-button">
            Sign In
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

.home-page {
  min-height: 100vh;
  background-color: #0F172A;
  color: #F8FAFC;
  font-family: 'Inter', sans-serif;
  overflow-x: hidden;
}

/* HERO SECTION */
.hero-section {
  height: 100vh;
  min-height: 700px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.grid-lines {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(to right, rgba(139, 92, 246, 0.1) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(139, 92, 246, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  transform: perspective(500px) rotateX(60deg);
  transform-origin: center top;
}

.glow-circle-1 {
  position: absolute;
  top: 20%;
  left: 15%;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, rgba(139, 92, 246, 0) 70%);
  filter: blur(30px);
  animation: pulse 8s infinite alternate;
}

.glow-circle-2 {
  position: absolute;
  bottom: 10%;
  right: 10%;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, rgba(236, 72, 153, 0) 70%);
  filter: blur(40px);
  animation: pulse 12s infinite alternate-reverse;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 0.5;
  }
  100% {
    transform: scale(1.3);
    opacity: 0.8;
  }
}

.hero-content {
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  padding-top: 4rem;
}

.glowing-text {
  font-family: 'Orbitron', sans-serif;
  font-weight: 700;
  color: #F8FAFC;
  text-shadow: 
    0 0 5px rgba(139, 92, 246, 0.5),
    0 0 10px rgba(139, 92, 246, 0.3),
    0 0 15px rgba(139, 92, 246, 0.2);
  margin-bottom: 1rem;
}

h1.glowing-text {
  font-size: 3.5rem;
  text-align: center;
  margin-bottom: 1.5rem;
  background: linear-gradient(to right, #8B5CF6, #EC4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  font-size: 1.25rem;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem;
  line-height: 1.6;
  color: rgba(248, 250, 252, 0.9);
}

.featured-game {
  display: flex;
  background: rgba(30, 41, 59, 0.8);
  border: 1px solid #334155;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 
    0 20px 25px -5px rgba(0, 0, 0, 0.2),
    0 10px 10px -5px rgba(0, 0, 0, 0.1),
    0 0 15px rgba(139, 92, 246, 0.5);
  backdrop-filter: blur(10px);
  max-width: 1000px;
  margin: 0 auto;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.featured-game:hover {
  transform: translateY(-5px);
  box-shadow: 
    0 25px 30px -5px rgba(0, 0, 0, 0.3),
    0 10px 15px -5px rgba(0, 0, 0, 0.2),
    0 0 20px rgba(139, 92, 246, 0.7);
}

.featured-game-image {
  position: relative;
  width: 50%;
  overflow: hidden;
}

.featured-game-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.featured-game:hover .featured-game-image img {
  transform: scale(1.05);
}

.featured-overlay {
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

.featured-badge {
  align-self: flex-start;
  background: #8B5CF6;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.9rem;
  letter-spacing: 1px;
  box-shadow: 0 0 10px rgba(139, 92, 246, 0.5);
}

.featured-rating {
  align-self: flex-end;
  background: rgba(0, 0, 0, 0.7);
  color: #FBBF24;
  padding: 0.25rem 0.75rem;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1.1rem;
}

.featured-game-content {
  width: 50%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
}

.featured-game-content h2 {
  font-family: 'Orbitron', sans-serif;
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: white;
}

.featured-category {
  color: #EC4899;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.featured-players {
  color: #94A3B8;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
}

.featured-description {
  color: #E2E8F0;
  line-height: 1.6;
  margin-bottom: 2rem;
  flex-grow: 1;
}

.play-button {
  background: linear-gradient(to right, #8B5CF6, #EC4899);
  color: white;
  font-weight: 600;
  font-size: 1.1rem;
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 0 15px rgba(139, 92, 246, 0.5);
  align-self: flex-start;
}

.play-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 20px rgba(139, 92, 246, 0.7);
}

.play-icon {
  font-size: 0.9rem;
}

/* CATEGORIES SECTION */
.categories-section {
  padding: 6rem 0;
  background: #0F172A;
}

.section-header {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;
}

h2.glowing-text {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.section-header p {
  color: #94A3B8;
  font-size: 1.1rem;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.category-card {
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
  height: 300px;
}

.category-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1), 0 0 15px rgba(139, 92, 246, 0.5);
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
  background: linear-gradient(to bottom, rgba(15, 23, 42, 0.3) 0%, rgba(15, 23, 42, 0.9) 100%);
}

.category-content {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem;
  z-index: 1;
}

.category-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
  display: inline-block;
  background: rgba(139, 92, 246, 0.2);
  padding: 0.75rem;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(139, 92, 246, 0.3);
}

.category-content h3 {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: white;
}

.category-content p {
  color: #94A3B8;
  font-size: 0.9rem;
}

/* TRENDING GAMES SECTION */
.trending-section {
  padding: 6rem 0;
  background: #1E293B;
  position: relative;
  overflow: hidden;
}

.trending-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 10% 20%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 90% 80%, rgba(236, 72, 153, 0.15) 0%, transparent 50%);
  pointer-events: none;
}

.trending-carousel {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.trending-games {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.game-card {
  background: #0F172A;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.game-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1), 0 0 15px rgba(139, 92, 246, 0.5);
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

.game-card:hover .game-image img {
  transform: scale(1.1);
}

.game-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(15, 23, 42, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.game-card:hover .game-overlay {
  opacity: 1;
}

.play-button-small {
  background: #8B5CF6;
  color: white;
  font-weight: 600;
  font-size: 1rem;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 0 15px rgba(139, 92, 246, 0.5);
}

.play-button-small:hover {
  background: #EC4899;
  transform: scale(1.05);
}

.game-rating {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(0, 0, 0, 0.7);
  color: #FBBF24;
  padding: 0.25rem 0.75rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.9rem;
  z-index: 1;
}

.game-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.game-content h3 {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: white;
}

.game-category {
  color: #EC4899;
  font-size: 0.9rem;
  margin-bottom: 0.75rem;
  font-weight: 500;
}

.game-description {
  color: #94A3B8;
  font-size: 0.9rem;
  line-height: 1.5;
  flex-grow: 1;
}

.carousel-nav {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.carousel-prev, .carousel-next {
  background: rgba(139, 92, 246, 0.2);
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #8B5CF6;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1.2rem;
  box-shadow: 0 0 10px rgba(139, 92, 246, 0.3);
}

.carousel-prev:hover, .carousel-next:hover {
  background: rgba(139, 92, 246, 0.5);
}

/* NEW RELEASES SECTION */
.new-releases-section {
  padding: 6rem 0;
  background: #0F172A;
  position: relative;
}

.releases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.release-card {
  background: #1E293B;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.release-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1), 0 0 15px rgba(139, 92, 246, 0.5);
}

.release-image {
  position: relative;
  height: 300px;
  overflow: hidden;
}

.release-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.release-card:hover .release-image img {
  transform: scale(1.1);
}

.release-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(15, 23, 42, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.release-card:hover .release-overlay {
  opacity: 1;
}

.release-badge {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: #EC4899;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.9rem;
  z-index: 1;
}

.release-rating {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  background: rgba(0, 0, 0, 0.7);
  color: #FBBF24;
  padding: 0.25rem 0.75rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.9rem;
  z-index: 1;
}

.release-content {
  padding: 1.5rem;
}

.release-content h3 {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: white;
}

.release-category {
  color: #94A3B8;
  font-size: 0.9rem;
}

/* PHONE BILLING SECTION */
.phone-billing-section {
  padding: 6rem 0;
  background: #1E293B;
  position: relative;
}

.phone-billing-content {
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  gap: 4rem;
}

.phone-billing-text {
  flex: 1;
}

.phone-billing-text h2 {
  font-family: 'Orbitron', sans-serif;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: white;
}

.phone-billing-text > p {
  color: #E2E8F0;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2.5rem;
}

.billing-steps {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

.billing-step {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
}

.step-number {
  width: 40px;
  height: 40px;
  background: #8B5CF6;
  color: white;
  font-weight: 700;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 0 10px rgba(139, 92, 246, 0.5);
}

.step-text h3 {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: white;
}

.step-text p {
  color: #94A3B8;
  font-size: 0.95rem;
}

.learn-more-button {
  background: transparent;
  color: #8B5CF6;
  border: 2px solid #8B5CF6;
  font-weight: 600;
  font-size: 1rem;
  padding: 0.75rem 2rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.learn-more-button:hover {
  background: rgba(139, 92, 246, 0.1);
  box-shadow: 0 0 15px rgba(139, 92, 246, 0.3);
}

.phone-billing-image {
  flex: 1;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 
    0 20px 25px -5px rgba(0, 0, 0, 0.2),
    0 10px 10px -5px rgba(0, 0, 0, 0.1),
    0 0 15px rgba(139, 92, 246, 0.5);
}

.phone-billing-image img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

/* PREMIUM FEATURES SECTION */
.features-section {
  padding: 6rem 0;
  background: #0F172A;
  position: relative;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.feature-card {
  background: #1E293B;
  border-radius: 15px;
  padding: 2.5rem 2rem;
  text-align: center;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  height: 100%;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1), 0 0 15px rgba(139, 92, 246, 0.5);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.feature-card h3 {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: white;
}

.feature-card p {
  color: #94A3B8;
  font-size: 0.95rem;
  line-height: 1.6;
}

/* TESTIMONIALS SECTION */
.testimonials-section {
  padding: 6rem 0;
  background: #1E293B;
  position: relative;
}

.testimonials-carousel {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
}

.testimonial-container {
  position: relative;
  height: 300px;
}

.testimonial {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  transform: translateX(50px);
  transition: all 0.5s ease;
}

.testimonial.active {
  opacity: 1;
  transform: translateX(0);
}

.testimonial-avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #8B5CF6;
  box-shadow: 0 0 15px rgba(139, 92, 246, 0.5);
  margin-bottom: 2rem;
}

.testimonial-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.testimonial-content {
  text-align: center;
}

.testimonial-rating {
  color: #FBBF24;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.testimonial-quote {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #E2E8F0;
  margin-bottom: 1.5rem;
}

.testimonial-name {
  color: #8B5CF6;
  font-weight: 600;
  font-size: 1rem;
}

.testimonial-dots {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 2rem;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #334155;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.dot.active {
  background: #8B5CF6;
  transform: scale(1.2);
  box-shadow: 0 0 5px rgba(139, 92, 246, 0.5);
}

/* CTA SECTION */
.cta-section {
  padding: 6rem 0;
  background: linear-gradient(135deg, #1E293B 0%, #0F172A 100%);
  position: relative;
}

.cta-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 20% 20%, rgba(139, 92, 246, 0.2) 0%, transparent 40%),
    radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.2) 0%, transparent 40%);
  pointer-events: none;
}

.cta-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
  padding: 0 2rem;
}

.cta-content h2 {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.cta-content p {
  color: #CBD5E1;
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2.5rem;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

.signup-button {
  background: linear-gradient(to right, #8B5CF6, #EC4899);
  color: white;
  font-weight: 600;
  font-size: 1.1rem;
  padding: 1rem 2.5rem;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 0 15px rgba(139, 92, 246, 0.5);
}

.signup-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 20px rgba(139, 92, 246, 0.7);
}

.login-button {
  background: transparent;
  color: white;
  font-weight: 600;
  font-size: 1.1rem;
  padding: 1rem 2.5rem;
  border: 2px solid #8B5CF6;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.login-button:hover {
  background: rgba(139, 92, 246, 0.1);
  box-shadow: 0 0 15px rgba(139, 92, 246, 0.3);
}

/* RESPONSIVE DESIGN */
@media (max-width: 1200px) {
  h1.glowing-text {
    font-size: 3rem;
  }
  
  .featured-game {
    flex-direction: column;
  }
  
  .featured-game-image, .featured-game-content {
    width: 100%;
  }
  
  .featured-game-image {
    height: 300px;
  }
  
  .phone-billing-content {
    flex-direction: column;
  }
  
  .phone-billing-image {
    width: 100%;
    max-width: 500px;
  }
  
  .game-card {
    height: auto;
  }
}

@media (max-width: 768px) {
  h1.glowing-text {
    font-size: 2.5rem;
  }
  
  h2.glowing-text {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
  
  .featured-game-content h2 {
    font-size: 1.8rem;
  }
  
  .categories-grid {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  }
  
  .category-card {
    height: 250px;
  }
  
  .cta-buttons {
    flex-direction: column;
    gap: 1rem;
  }
  
  .signup-button, .login-button {
    width: 100%;
  }
}

@media (max-width: 480px) {
  h1.glowing-text {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
  }
  
  .featured-game-content {
    padding: 1.5rem;
  }
  
  .featured-game-content h2 {
    font-size: 1.5rem;
  }
  
  .featured-description {
    font-size: 0.95rem;
  }
  
  .categories-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .trending-games, .releases-grid, .features-grid {
    grid-template-columns: 1fr;
  }
  
  .testimonial-quote {
    font-size: 1rem;
  }
}
</style>