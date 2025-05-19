<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const categories = ref([
  {
    name: 'Fiction',
    icon: '📚',
    count: '5,000+ titles'
  },
  {
    name: 'Non-Fiction',
    icon: '🧠',
    count: '3,200+ titles'
  },
  {
    name: 'Mystery',
    icon: '🔍',
    count: '1,800+ titles'
  },
  {
    name: 'Sci-Fi',
    icon: '🚀',
    count: '1,500+ titles'
  },
  {
    name: 'Romance',
    icon: '❤️',
    count: '2,200+ titles'
  },
  {
    name: 'Biography',
    icon: '👤',
    count: '1,200+ titles'
  },
  {
    name: 'Fantasy',
    icon: '🧙',
    count: '1,700+ titles'
  },
  {
    name: 'Business',
    icon: '💼',
    count: '950+ titles'
  }
]);

const featuredAudiobooks = ref([
  {
    title: 'The Midnight Cipher',
    author: 'Rebecca Jenkins',
    narrator: 'James Anderson',
    rating: 4.8,
    duration: '14h 27m',
    image: 'https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg',
    genre: 'Mystery Thriller',
    description: 'When a cryptographer discovers a hidden code in an ancient manuscript, she becomes the target of a shadowy organization with deadly intentions.'
  },
  {
    title: 'Quantum Realms',
    author: 'Dr. Alexander Hayes',
    narrator: 'Sarah Mitchell',
    rating: 4.9,
    duration: '11h 45m',
    image: 'https://images.pexels.com/photos/2099691/pexels-photo-2099691.jpeg',
    genre: 'Science Fiction',
    description: 'A groundbreaking physicist discovers a way to access parallel universes, but each journey threatens the fabric of reality itself.'
  },
  {
    title: 'The Focused Mind',
    author: 'Martin Lawrence',
    narrator: 'David Richards',
    rating: 4.7,
    duration: '9h 15m',
    image: 'https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg',
    genre: 'Self-Development',
    description: 'Learn powerful techniques to master your attention in a distracted world and achieve extraordinary productivity and fulfillment.'
  }
]);

const newReleases = ref([
  {
    title: 'Stellar Horizons',
    author: 'Emily Chen',
    releaseDate: 'June 15, 2025',
    image: 'https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg',
    genre: 'Sci-Fi Adventure'
  },
  {
    title: 'The Summit',
    author: 'Robert Thompson',
    releaseDate: 'June 12, 2025',
    image: 'https://images.pexels.com/photos/1586298/pexels-photo-1586298.jpeg',
    genre: 'Adventure'
  },
  {
    title: 'Echoes of the Past',
    author: 'Sophia Williams',
    releaseDate: 'June 10, 2025',
    image: 'https://images.pexels.com/photos/3358707/pexels-photo-3358707.png',
    genre: 'Historical Fiction'
  },
  {
    title: 'Wealth Mastery',
    author: 'Mark Stevens',
    releaseDate: 'June 8, 2025',
    image: 'https://images.pexels.com/photos/47344/dollar-currency-money-us-dollar-47344.jpeg',
    genre: 'Business & Finance'
  }
]);

const bestSellers = ref([
  {
    title: 'The Secret Code',
    author: 'Daniel Wright',
    genre: 'Mystery',
    rating: 4.9,
    image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg'
  },
  {
    title: 'Mindful Leadership',
    author: 'Christine Parker',
    genre: 'Business',
    rating: 4.8,
    image: 'https://images.pexels.com/photos/6932/woman-girl-teenager-book.jpg'
  },
  {
    title: 'Galactic Pioneers',
    author: 'Neil Richardson',
    genre: 'Science Fiction',
    rating: 4.7,
    image: 'https://images.pexels.com/photos/19670/pexels-photo.jpg'
  },
  {
    title: 'The Dragon Crown',
    author: 'Laura Thompson',
    genre: 'Fantasy',
    rating: 4.8,
    image: 'https://images.pexels.com/photos/2170729/pexels-photo-2170729.jpeg'
  },
  {
    title: 'Present Moment',
    author: 'Michael Stevens',
    genre: 'Self-Help',
    rating: 4.9,
    image: 'https://images.pexels.com/photos/2099691/pexels-photo-2099691.jpeg'
  },
  {
    title: 'Lost Civilizations',
    author: 'Sarah Johnson',
    genre: 'History',
    rating: 4.6,
    image: 'https://images.pexels.com/photos/2372982/pexels-photo-2372982.jpeg'
  }
]);

const features = ref([
  {
    title: 'Professional Narration',
    description: 'Books narrated by professional voice actors and celebrities',
    icon: '🎙️'
  },
  {
    title: 'Offline Listening',
    description: 'Download audiobooks to listen without internet connection',
    icon: '📥'
  },
  {
    title: 'Adjustable Playback',
    description: 'Change narration speed to suit your listening preferences',
    icon: '⏩'
  },
  {
    title: 'Sleep Timer',
    description: 'Set a timer to automatically stop playback',
    icon: '⏰'
  },
  {
    title: 'Cross-Device Sync',
    description: 'Continue listening from where you left off across all your devices',
    icon: '🔄'
  },
  {
    title: 'Bookmarks & Notes',
    description: 'Mark important passages and add notes for reference',
    icon: '📝'
  }
]);

const subscriptionPlan = ref({
  name: 'Audiobooks Premium',
  price: '€11.99',
  period: 'per month',
  features: [
    'Unlimited access to our entire audiobook library',
    'New titles added weekly',
    'High-quality audio streaming',
    'Offline downloads for listening anywhere',
    'Personalized recommendations',
    'Exclusive content and early releases'
  ],
  billingText: 'Conveniently billed to your phone - no credit card needed'
});

const handleLogin = () => {
  router.push('/login');
};
</script>

<template>
  <div class="audiobooks-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Premium Audiobook Experience</h1>
        <p class="subtitle">Over 100,000 titles narrated by world-class voice actors</p>
        <button class="primary-btn" @click="handleLogin">Login Now</button>
      </div>
    </section>

    <!-- Featured Audiobooks -->
    <section class="featured-books-section">
      <h2 class="section-title">Editor's Picks</h2>
      <div class="featured-grid">
        <div v-for="book in featuredAudiobooks" :key="book.title" class="featured-card">
          <div class="book-image">
            <img :src="book.image" :alt="book.title">
            <div class="book-overlay">
              <button class="listen-btn" @click="handleLogin">Listen Now</button>
            </div>
          </div>
          <div class="book-info">
            <h3>{{ book.title }}</h3>
            <p class="author">By {{ book.author }}</p>
            <p class="narrator">Narrated by {{ book.narrator }}</p>
            <div class="book-meta">
              <div class="rating">
                <span class="star">★</span>
                <span class="rating-value">{{ book.rating }}</span>
              </div>
              <span class="duration">{{ book.duration }}</span>
            </div>
            <span class="genre">{{ book.genre }}</span>
            <p class="description">{{ book.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Categories -->
    <section class="categories-section">
      <h2 class="section-title">Browse Categories</h2>
      <div class="categories-grid">
        <div v-for="category in categories" :key="category.name" class="category-card">
          <div class="category-icon">{{ category.icon }}</div>
          <div class="category-info">
            <h3>{{ category.name }}</h3>
            <span class="book-count">{{ category.count }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- New Releases -->
    <section class="new-releases-section">
      <h2 class="section-title">New Releases</h2>
      <div class="releases-grid">
        <div v-for="book in newReleases" :key="book.title" class="release-card">
          <div class="book-image">
            <img :src="book.image" :alt="book.title">
            <div class="book-overlay">
              <button class="listen-btn" @click="handleLogin">Listen</button>
            </div>
            <div class="new-badge">NEW</div>
          </div>
          <div class="book-info">
            <h3>{{ book.title }}</h3>
            <p class="author">By {{ book.author }}</p>
            <div class="book-bottom">
              <span class="genre">{{ book.genre }}</span>
              <span class="release-date">{{ book.releaseDate }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Best Sellers -->
    <section class="bestsellers-section">
      <h2 class="section-title">Best Sellers</h2>
      <div class="bestsellers-grid">
        <div v-for="book in bestSellers" :key="book.title" class="bestseller-card">
          <div class="book-image">
            <img :src="book.image" :alt="book.title">
            <div class="book-overlay">
              <button class="listen-btn" @click="handleLogin">Listen</button>
            </div>
          </div>
          <div class="book-info">
            <h3>{{ book.title }}</h3>
            <p class="author">By {{ book.author }}</p>
            <div class="book-bottom">
              <span class="genre">{{ book.genre }}</span>
              <div class="rating">
                <span class="star">★</span>
                <span class="rating-value">{{ book.rating }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <h2 class="section-title">Premium Features</h2>
      <div class="features-grid">
        <div v-for="feature in features" :key="feature.title" class="feature-card">
          <span class="feature-icon">{{ feature.icon }}</span>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </div>
      </div>
    </section>

    <!-- Subscription Plan -->
    <section class="subscription-section">
      <h2 class="section-title">Audiobook Subscription</h2>
      <div class="subscription-card">
        <h3>{{ subscriptionPlan.name }}</h3>
        <div class="subscription-price">
          <span class="price">{{ subscriptionPlan.price }}</span>
          <span class="period">{{ subscriptionPlan.period }}</span>
        </div>
        <ul class="subscription-features">
          <li v-for="feature in subscriptionPlan.features" :key="feature">
            <span class="check">✓</span> {{ feature }}
          </li>
        </ul>
        <p class="billing-note">{{ subscriptionPlan.billingText }}</p>
        <button class="primary-btn full-width" @click="handleLogin">Login Now</button>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-content">
        <h2>Ready to Dive Into Amazing Stories?</h2>
        <p>Join thousands of listeners enjoying premium audiobooks</p>
        <button class="primary-btn" @click="handleLogin">Login Now</button>
      </div>
    </section>
  </div>
</template>

<style scoped>
.audiobooks-page {
  color: #333;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #007BFF 0%, #6C63FF 100%);
  color: white;
  padding: 10rem 2rem 8rem;
  text-align: center;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero h1 {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.subtitle {
  font-size: 1.5rem;
  opacity: 0.9;
  margin-bottom: 2.5rem;
}

.primary-btn {
  background: white;
  color: #007BFF;
  font-size: 1.2rem;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.primary-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.full-width {
  width: 100%;
}

/* Section Title */
.section-title {
  text-align: center;
  font-size: 2.5rem;
  color: #007BFF;
  margin-bottom: 3rem;
}

/* Featured Audiobooks */
.featured-books-section {
  padding: 5rem 2rem;
  background: white;
}

.featured-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.featured-card {
  background: #f8fafc;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0,0,0,0.08);
  transition: transform 0.3s ease;
}

.featured-card:hover {
  transform: translateY(-5px);
}

.book-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.book-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.featured-card:hover .book-image img {
  transform: scale(1.05);
}

.book-overlay {
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

.featured-card:hover .book-overlay {
  opacity: 1;
}

.listen-btn {
  background: #007BFF;
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.listen-btn:hover {
  background: #0069d9;
  transform: scale(1.05);
}

.new-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #007BFF;
  color: white;
  font-size: 0.7rem;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  font-weight: 600;
}

.book-info {
  padding: 1.5rem;
}

.book-info h3 {
  color: #333;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.author {
  color: #4a5568;
  margin-bottom: 0.3rem;
  font-size: 0.95rem;
}

.narrator {
  color: #718096;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  font-style: italic;
}

.book-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.rating {
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

.duration {
  color: #718096;
}

.genre {
  display: inline-block;
  background: #f1f5f9;
  color: #007BFF;
  padding: 0.3rem 0.7rem;
  border-radius: 15px;
  font-size: 0.85rem;
  margin-bottom: 1rem;
  font-weight: 500;
}

.description {
  color: #4a5568;
  font-size: 0.95rem;
  line-height: 1.6;
}

/* Categories */
.categories-section {
  padding: 5rem 2rem;
  background: #f8fafc;
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
  color: #333;
  margin-bottom: 0.3rem;
}

.book-count {
  color: #718096;
  font-size: 0.85rem;
}

/* New Releases */
.new-releases-section {
  padding: 5rem 2rem;
  background: white;
}

.releases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.release-card {
  background: #f8fafc;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  transition: transform 0.3s ease;
}

.release-card:hover {
  transform: translateY(-5px);
}

.release-card .book-image {
  height: 180px;
}

.release-date {
  color: #718096;
  font-size: 0.85rem;
}

.book-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.8rem;
}

/* Best Sellers */
.bestsellers-section {
  padding: 5rem 2rem;
  background: #f8fafc;
}

.bestsellers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.bestseller-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  transition: transform 0.3s ease;
}

.bestseller-card:hover {
  transform: translateY(-5px);
}

.bestseller-card .book-image {
  height: 180px;
}

.bestseller-card .book-info {
  padding: 1.2rem;
}

.bestseller-card .genre {
  margin-bottom: 0;
  display: inline;
  background: none;
  padding: 0;
  font-weight: normal;
}

/* Features */
.features-section {
  padding: 5rem 2rem;
  background: white;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  background: #f8fafc;
  padding: 2.5rem 2rem;
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
  margin-bottom: 1.5rem;
  display: block;
}

.feature-card h3 {
  color: #007BFF;
  margin-bottom: 1rem;
}

.feature-card p {
  color: #4a5568;
  line-height: 1.6;
}

/* Subscription */
.subscription-section {
  padding: 5rem 2rem;
  background: #f8fafc;
  display: flex;
  justify-content: center;
}

.subscription-card {
  background: white;
  padding: 3rem;
  border-radius: 1rem;
  box-shadow: 0 8px 30px rgba(0,0,0,0.08);
  max-width: 500px;
  width: 100%;
  text-align: center;
}

.subscription-card h3 {
  color: #007BFF;
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.subscription-price {
  margin-bottom: 2rem;
}

.price {
  font-size: 3rem;
  font-weight: 800;
  color: #007BFF;
}

.period {
  font-size: 1.2rem;
  color: #718096;
}

.subscription-features {
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
  text-align: left;
}

.subscription-features li {
  padding: 0.75rem 0;
  border-bottom: 1px solid #f0f4f8;
  color: #4a5568;
  display: flex;
  align-items: center;
}

.subscription-features li:last-child {
  border-bottom: none;
}

.check {
  color: #007BFF;
  margin-right: 0.75rem;
  font-weight: bold;
}

.billing-note {
  font-style: italic;
  color: #718096;
  margin-bottom: 2rem;
  font-size: 0.95rem;
}

/* CTA Section */
.cta-section {
  background: linear-gradient(135deg, #007BFF 0%, #6C63FF 100%);
  color: white;
  text-align: center;
  padding: 6rem 2rem;
}

.cta-content {
  max-width: 800px;
  margin: 0 auto;
}

.cta-content h2 {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.cta-content p {
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  opacity: 0.9;
}

.cta-section .primary-btn {
  color: #007BFF;
}

/* Responsive Styles */
@media (max-width: 1024px) {
  .featured-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.8rem;
  }
  
  .subtitle {
    font-size: 1.2rem;
  }
  
  .bestsellers-grid {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
  
  .releases-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
  
  .categories-grid {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
  
  .subscription-card {
    padding: 2rem;
  }
  
  .cta-content h2 {
    font-size: 2.5rem;
  }
}

@media (max-width: 640px) {
  .hero h1 {
    font-size: 2.5rem;
  }
  
  .bestsellers-grid, .releases-grid {
    grid-template-columns: 1fr 1fr;
  }
  
  .categories-grid {
    grid-template-columns: 1fr 1fr;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .cta-content h2 {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 8rem 1.5rem 6rem;
  }
  
  .hero h1 {
    font-size: 2.2rem;
  }
  
  .subtitle {
    font-size: 1.1rem;
  }
  
  .bestsellers-grid, .releases-grid {
    grid-template-columns: 1fr;
  }
  
  .subscription-card {
    padding: 1.5rem;
  }
  
  .price {
    font-size: 2.5rem;
  }
}
</style>