<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <h1>Premium Mobile Gaming</h1>
        <p class="hero-subtitle">Thousands of games. No ads. No in-app purchases.</p>
        <div class="hero-buttons">
          <router-link to="/funpuzzlepalace/category/puzzle" class="primary-button">Browse Games</router-link>
          <router-link to="/funpuzzlepalace/signup" class="secondary-button">Sign Up Free</router-link>
        </div>
        <div class="hero-features">
          <div class="feature-pill">
            <span class="feature-icon">🎮</span>
            <span>Unlimited Access</span>
          </div>
          <div class="feature-pill">
            <span class="feature-icon">📱</span>
            <span>Phone Billing</span>
          </div>
          <div class="feature-pill">
            <span class="feature-icon">🔄</span>
            <span>Cross-device Sync</span>
          </div>
        </div>
      </div>
      <div class="hero-backdrop"></div>
    </section>

    <!-- Categories Section -->
    <section class="categories-section">
      <div class="section-container">
        <h2>Game Categories</h2>
        <div class="categories-grid">
          <router-link to="/funpuzzlepalace/category/puzzle" class="category-card">
            <div class="category-icon">🧩</div>
            <h3>Puzzle</h3>
            <p>Brain-teasing challenges for all skill levels</p>
          </router-link>
          <router-link to="/funpuzzlepalace/category/action" class="category-card">
            <div class="category-icon">🔥</div>
            <h3>Action</h3>
            <p>Fast-paced games with exciting gameplay</p>
          </router-link>
          <router-link to="/funpuzzlepalace/category/adventure" class="category-card">
            <div class="category-icon">🌄</div>
            <h3>Adventure</h3>
            <p>Explore vast worlds and exciting stories</p>
          </router-link>
          <router-link to="/funpuzzlepalace/category/strategy" class="category-card">
            <div class="category-icon">♟️</div>
            <h3>Strategy</h3>
            <p>Plan, build, and outsmart your opponents</p>
          </router-link>
          <router-link to="/funpuzzlepalace/category/multiplayer" class="category-card">
            <div class="category-icon">👥</div>
            <h3>Multiplayer</h3>
            <p>Play and compete with friends online</p>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Featured Games Section -->
    <section class="featured-section">
      <div class="section-container">
        <h2>Featured Games</h2>
        <div class="games-grid">
          <div v-for="game in featuredGames" :key="game.id" class="game-card">
            <div class="game-image">
              <img :src="game.image" :alt="game.title">
              <div class="game-overlay">
                <div class="game-rating">{{ game.rating }}</div>
                <router-link to="/funpuzzlepalace/login" class="play-button">Play Now</router-link>
              </div>
            </div>
            <div class="game-info">
              <h3>{{ game.title }}</h3>
              <p class="game-category">{{ game.category }}</p>
              <p class="game-description">{{ game.description }}</p>
            </div>
          </div>
        </div>
        <div class="view-all-container">
          <router-link to="/funpuzzlepalace/category/puzzle" class="view-all-button">View All Games</router-link>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section class="how-it-works-section">
      <div class="section-container">
        <h2>How It Works</h2>
        <div class="steps-grid">
          <div class="step-card">
            <div class="step-number">1</div>
            <h3>Sign Up</h3>
            <p>Create your account in seconds with just your phone number</p>
          </div>
          <div class="step-card">
            <div class="step-number">2</div>
            <h3>Choose Plan</h3>
            <p>Select a subscription plan that fits your gaming needs</p>
          </div>
          <div class="step-card">
            <div class="step-number">3</div>
            <h3>Confirm via SMS</h3>
            <p>Verify your subscription with a simple text message</p>
          </div>
          <div class="step-card">
            <div class="step-number">4</div>
            <h3>Start Playing</h3>
            <p>Instantly access our entire library of premium games</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials-section">
      <div class="section-container">
        <h2>What Gamers Say</h2>
        <div class="testimonials-grid">
          <div v-for="testimonial in testimonials" :key="testimonial.id" class="testimonial-card">
            <div class="testimonial-rating">
              <span v-for="i in 5" :key="i" class="star" :class="{ filled: i <= testimonial.rating }">★</span>
            </div>
            <p class="testimonial-text">{{ testimonial.quote }}</p>
            <div class="testimonial-author">
              <img :src="testimonial.image" :alt="testimonial.name" class="author-image">
              <div class="author-info">
                <h4>{{ testimonial.name }}</h4>
                <p>{{ testimonial.title }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section class="pricing-section">
      <div class="section-container">
        <h2>Simple Pricing</h2>
        <p class="pricing-subtitle">No credit card required. All plans billed directly to your phone.</p>
        <div class="pricing-grid">
          <div v-for="plan in pricingPlans" :key="plan.id" class="pricing-card" :class="{ 'recommended': plan.recommended }">
            <div v-if="plan.recommended" class="recommended-badge">Most Popular</div>
            <h3>{{ plan.name }}</h3>
            <div class="price">
              <span class="amount">{{ plan.price }}</span>
              <span class="period">/month</span>
            </div>
            <ul class="features-list">
              <li v-for="(feature, index) in plan.features" :key="index">
                <span class="check-icon">✓</span>
                {{ feature }}
              </li>
            </ul>
            <router-link to="/funpuzzlepalace/payment" class="select-plan-button">Select Plan</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="section-container">
        <h2>Ready to Start Playing?</h2>
        <p>Join millions of gamers and experience the best premium mobile gaming platform</p>
        <div class="cta-buttons">
          <router-link to="/funpuzzlepalace/signup" class="primary-button">Create Free Account</router-link>
          <router-link to="/funpuzzlepalace/login" class="secondary-button">Sign In</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const featuredGames = ref([
  {
    id: 1,
    title: "Crystal Matcher",
    category: "Puzzle",
    rating: "★★★★★",
    description: "Match colorful crystals in this addictive puzzle game with over 500 challenging levels.",
    image: "https://images.pexels.com/photos/1314435/pexels-photo-1314435.jpeg"
  },
  {
    id: 2,
    title: "Space Commander",
    category: "Strategy",
    rating: "★★★★☆",
    description: "Build your galactic empire and conquer the universe in this epic strategy game.",
    image: "https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg"
  },
  {
    id: 3,
    title: "Word Masters",
    category: "Puzzle",
    rating: "★★★★★",
    description: "Test your vocabulary and word skills with thousands of challenging word puzzles.",
    image: "https://images.pexels.com/photos/265072/pexels-photo-265072.jpeg"
  }
]);

const testimonials = ref([
  {
    id: 1,
    name: "Sarah L.",
    quote: "Fun Puzzle Palace has the best selection of puzzle games I've ever seen! The no-ads experience makes it so much more enjoyable.",
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
    rating: 5,
    title: "Puzzle Enthusiast"
  },
  {
    id: 2,
    name: "Michael K.",
    quote: "I love being able to play premium games without any in-app purchases. The phone billing option is super convenient too!",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    rating: 5,
    title: "Mobile Gamer"
  },
  {
    id: 3,
    name: "Jessica T.",
    quote: "The variety of games is amazing! From puzzles to action games, there's something for everyone in my family to enjoy.",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    rating: 4,
    title: "Casual Gamer"
  }
]);

const pricingPlans = ref([
  {
    id: 1,
    name: "Basic",
    price: "$4.99",
    features: [
      "Access to 500+ games",
      "No advertisements",
      "Standard game quality",
      "Mobile-only access",
      "Email support"
    ],
    recommended: false
  },
  {
    id: 2,
    name: "Premium",
    price: "$9.99",
    features: [
      "Access to ALL games (1000+)",
      "No advertisements",
      "HD game quality",
      "Cross-device sync",
      "Cloud saves",
      "Priority support"
    ],
    recommended: true
  },
  {
    id: 3,
    name: "Family",
    price: "$14.99",
    features: [
      "Everything in Premium",
      "Up to 5 user profiles",
      "Parental controls",
      "Family game collection",
      "24/7 premium support"
    ],
    recommended: false
  }
]);
</script>

<style scoped>
.home-page {
  min-height: 100vh;
  font-family: 'Inter', 'Roboto', sans-serif;
  color: #0F172A;
  background-color: #F8FAFC;
}

/* Section Containers */
.section-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Hero Section */
.hero-section {
  position: relative;
  height: 100vh;
  min-height: 700px;
  max-height: 900px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: #0F172A;
  color: white;
}

.hero-backdrop {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), 
              url('https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg') center/cover no-repeat;
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 800px;
  padding: 0 2rem;
}

.hero-content h1 {
  font-family: 'Orbitron', sans-serif;
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  background: linear-gradient(90deg, #8B5CF6, #EC4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 20px rgba(139, 92, 246, 0.5);
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 2.5rem;
  color: #E2E8F0;
}

.hero-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-bottom: 3rem;
}

.primary-button {
  background: linear-gradient(90deg, #8B5CF6, #EC4899);
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(139, 92, 246, 0.4);
  border: none;
  cursor: pointer;
}

.primary-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(139, 92, 246, 0.5);
}

.secondary-button {
  background: transparent;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 2px solid white;
}

.secondary-button:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-3px);
}

.hero-features {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.feature-pill {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 500;
}

.feature-icon {
  font-size: 1.2rem;
}

/* Categories Section */
.categories-section {
  padding: 5rem 0;
}

.categories-section h2 {
  font-family: 'Orbitron', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  color: #0F172A;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.category-card {
  background: white;
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  text-decoration: none;
  color: #0F172A;
}

.category-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.1);
}

.category-card .category-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  display: inline-block;
}

.category-card h3 {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #0F172A;
}

.category-card p {
  color: #64748B;
  font-size: 0.9rem;
}

/* Featured Games Section */
.featured-section {
  padding: 5rem 0;
  background-color: #F1F5F9;
}

.featured-section h2 {
  font-family: 'Orbitron', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  color: #0F172A;
}

.games-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.game-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.game-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.15);
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
  background: rgba(15, 23, 42, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: all 0.3s ease;
}

.game-card:hover .game-overlay {
  opacity: 1;
}

.game-rating {
  color: #FCD34D;
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.play-button {
  background: linear-gradient(90deg, #8B5CF6, #EC4899);
  color: white;
  font-weight: 600;
  padding: 0.75rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.play-button:hover {
  transform: scale(1.05);
  box-shadow: 0 5px 15px rgba(139, 92, 246, 0.4);
}

.game-info {
  padding: 1.5rem;
}

.game-info h3 {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #0F172A;
}

.game-category {
  color: #8B5CF6;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.game-description {
  color: #64748B;
  font-size: 0.9rem;
  line-height: 1.6;
}

.view-all-container {
  text-align: center;
  margin-top: 3rem;
}

.view-all-button {
  background: transparent;
  color: #8B5CF6;
  font-weight: 600;
  padding: 0.75rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 2px solid #8B5CF6;
  display: inline-block;
}

.view-all-button:hover {
  background: rgba(139, 92, 246, 0.1);
  transform: translateY(-3px);
}

/* How It Works Section */
.how-it-works-section {
  padding: 5rem 0;
}

.how-it-works-section h2 {
  font-family: 'Orbitron', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  color: #0F172A;
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.step-card {
  background: white;
  border-radius: 20px;
  padding: 2.5rem 2rem;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.step-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.15);
}

.step-number {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(90deg, #8B5CF6, #EC4899);
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
}

.step-card h3 {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #0F172A;
}

.step-card p {
  color: #64748B;
  font-size: 0.9rem;
  line-height: 1.6;
}

/* Testimonials Section */
.testimonials-section {
  padding: 5rem 0;
  background-color: #F1F5F9;
}

.testimonials-section h2 {
  font-family: 'Orbitron', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  color: #0F172A;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.testimonial-card {
  background: white;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.testimonial-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.15);
}

.testimonial-rating {
  margin-bottom: 1.5rem;
}

.star {
  color: #CBD5E1;
  font-size: 1.2rem;
}

.star.filled {
  color: #FCD34D;
}

.testimonial-text {
  font-size: 1rem;
  color: #0F172A;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  font-style: italic;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.author-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}

.author-info h4 {
  font-weight: 600;
  color: #0F172A;
  margin: 0 0 0.25rem;
}

.author-info p {
  color: #64748B;
  font-size: 0.9rem;
  margin: 0;
}

/* Pricing Section */
.pricing-section {
  padding: 5rem 0;
}

.pricing-section h2 {
  font-family: 'Orbitron', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  color: #0F172A;
}

.pricing-subtitle {
  text-align: center;
  color: #64748B;
  margin-bottom: 3rem;
  font-size: 1.1rem;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.pricing-card {
  background: white;
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;
  border: 2px solid transparent;
}

.pricing-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.15);
}

.pricing-card.recommended {
  border-color: #8B5CF6;
  transform: scale(1.05);
  z-index: 1;
}

.recommended-badge {
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(90deg, #8B5CF6, #EC4899);
  color: white;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
}

.pricing-card h3 {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.8rem;
  text-align: center;
  color: #0F172A;
  margin-bottom: 1rem;
}

.price {
  text-align: center;
  margin-bottom: 2rem;
}

.amount {
  font-size: 3rem;
  font-weight: 700;
  color: #8B5CF6;
}

.period {
  font-size: 1.1rem;
  color: #64748B;
}

.features-list {
  list-style: none;
  margin: 0 0 2rem;
  padding: 0;
}

.features-list li {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  color: #0F172A;
  font-size: 0.95rem;
}

.check-icon {
  color: #8B5CF6;
  margin-right: 0.8rem;
  flex-shrink: 0;
  font-weight: bold;
}

.select-plan-button {
  background: linear-gradient(90deg, #8B5CF6, #EC4899);
  color: white;
  font-weight: 600;
  padding: 1rem 0;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;
  text-align: center;
  display: block;
  width: 100%;
}

.select-plan-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(139, 92, 246, 0.4);
}

/* CTA Section */
.cta-section {
  padding: 5rem 0;
  background: linear-gradient(90deg, #8B5CF6, #EC4899);
  color: white;
  text-align: center;
}

.cta-section h2 {
  font-family: 'Orbitron', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.cta-section p {
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.cta-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
}

.cta-section .primary-button {
  background: white;
  color: #8B5CF6;
}

.cta-section .secondary-button {
  border-color: white;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .hero-content h1 {
    font-size: 3rem;
  }
  
  .hero-subtitle {
    font-size: 1.3rem;
  }
}

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
  
  .hero-buttons {
    flex-direction: column;
    width: 100%;
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .hero-features {
    flex-direction: column;
    align-items: center;
  }
  
  .categories-section h2,
  .featured-section h2,
  .how-it-works-section h2,
  .testimonials-section h2,
  .pricing-section h2,
  .cta-section h2 {
    font-size: 2rem;
  }
  
  .pricing-card.recommended {
    transform: scale(1);
  }
  
  .cta-buttons {
    flex-direction: column;
    max-width: 300px;
    margin: 0 auto;
  }
}

@media (max-width: 480px) {
  .hero-section {
    min-height: 600px;
  }
  
  .hero-content h1 {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
  }
  
  .section-container {
    padding: 0 1rem;
  }
  
  .categories-section h2,
  .featured-section h2,
  .how-it-works-section h2,
  .testimonials-section h2,
  .pricing-section h2,
  .cta-section h2 {
    font-size: 1.75rem;
  }
  
  .pricing-card {
    padding: 1.5rem;
  }
  
  .amount {
    font-size: 2.5rem;
  }
}
</style>