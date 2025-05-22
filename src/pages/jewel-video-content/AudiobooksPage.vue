<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Featured audiobooks
const featuredAudiobooks = ref([
  {
    title: 'The Quantum Paradox',
    author: 'Dr. Elena Morgan',
    narrator: 'James Anderson',
    duration: '10h 25m',
    genre: 'Science Fiction',
    image: 'https://images.pexels.com/photos/1907785/pexels-photo-1907785.jpeg',
    description: 'A mind-bending journey into the nature of reality, exploring parallel universes and the fabric of existence itself.'
  },
  {
    title: 'The Silent Witness',
    author: 'Michael Hayes',
    narrator: 'Sarah Johnson',
    duration: '8h 17m',
    genre: 'Mystery Thriller',
    image: 'https://images.pexels.com/photos/1766604/pexels-photo-1766604.jpeg',
    description: 'When a prominent attorney is found murdered, a traumatized witness holds the key to solving a case that will shake the city to its core.'
  },
  {
    title: 'Mindful Living',
    author: 'Dr. Sophia Chen',
    narrator: 'Dr. Sophia Chen',
    duration: '6h 45m',
    genre: 'Self Development',
    image: 'https://images.pexels.com/photos/3560044/pexels-photo-3560044.jpeg',
    description: 'Discover practical strategies for living a more mindful, balanced and fulfilled life in our fast-paced modern world.'
  }
]);

// Categories
const categories = ref([
  {
    name: 'Fiction',
    count: '3,200+ titles',
    image: 'https://images.pexels.com/photos/1907785/pexels-photo-1907785.jpeg'
  },
  {
    name: 'Non-Fiction',
    count: '2,500+ titles',
    image: 'https://images.pexels.com/photos/3560044/pexels-photo-3560044.jpeg'
  },
  {
    name: 'Mystery & Thriller',
    count: '1,300+ titles',
    image: 'https://images.pexels.com/photos/1766604/pexels-photo-1766604.jpeg'
  },
  {
    name: 'Science Fiction & Fantasy',
    count: '950+ titles',
    image: 'https://images.pexels.com/photos/3036639/pexels-photo-3036639.jpeg'
  },
  {
    name: 'Business & Career',
    count: '1,100+ titles',
    image: 'https://images.pexels.com/photos/955448/pexels-photo-955448.jpeg'
  },
  {
    name: 'Children & Young Adult',
    count: '1,800+ titles',
    image: 'https://images.pexels.com/photos/968873/pexels-photo-968873.jpeg'
  }
]);

// Bestsellers
const bestsellers = ref([
  {
    title: 'Beneath the Surface',
    author: 'Robert Adams',
    genre: 'Suspense',
    image: 'https://images.pexels.com/photos/694740/pexels-photo-694740.jpeg',
    rating: 4.8
  },
  {
    title: 'Financial Freedom',
    author: 'Jessica Miller',
    genre: 'Finance',
    image: 'https://images.pexels.com/photos/53621/calculator-calculation-insurance-finance-53621.jpeg',
    rating: 4.7
  },
  {
    title: 'The Last Frontier',
    author: 'Thomas Wilson',
    genre: 'Sci-Fi',
    image: 'https://images.pexels.com/photos/733475/pexels-photo-733475.jpeg',
    rating: 4.9
  },
  {
    title: 'Whispers in the Dark',
    author: 'Emily Chang',
    genre: 'Horror',
    image: 'https://images.pexels.com/photos/226243/pexels-photo-226243.jpeg',
    rating: 4.6
  },
  {
    title: 'Leadership Principles',
    author: 'David Roberts',
    genre: 'Business',
    image: 'https://images.pexels.com/photos/716276/pexels-photo-716276.jpeg',
    rating: 4.7
  },
  {
    title: 'The Forgotten Path',
    author: 'Laura Johnson',
    genre: 'Adventure',
    image: 'https://images.pexels.com/photos/772429/pexels-photo-772429.jpeg',
    rating: 4.8
  }
]);

// Premium features
const features = ref([
  {
    title: 'Premium Narration',
    description: 'Listen to books narrated by world-class voice actors and celebrities',
    icon: '🎙️'
  },
  {
    title: 'Offline Listening',
    description: 'Download audiobooks to listen without using data or when offline',
    icon: '📱'
  },
  {
    title: 'Smart Bookmarking',
    description: 'Create and sync bookmarks across all your devices',
    icon: '🔖'
  },
  {
    title: 'Sleep Timer',
    description: 'Set a timer for the perfect bedtime listening experience',
    icon: '⏰'
  }
]);

const handleSubscribe = () => {
  router.push('/jewel-video-content/payment');
};

const handleListenNow = (bookTitle) => {
  router.push('/login');
};
</script>

<template>
  <div class="audiobooks-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <span class="badge">PREMIUM AUDIOBOOKS</span>
        <h1>Unlimited Audiobook Library</h1>
        <p>Thousands of titles narrated by world-class performers.</p>
        <div class="hero-actions">
          <button @click="handleSubscribe" class="primary-button">Start Free Trial</button>
          <button @click="handleListenNow('featured')" class="secondary-button">
            <span class="play-icon">▶</span> Sample Audiobooks
          </button>
        </div>
      </div>
      <div class="hero-backdrop"></div>
    </section>

    <!-- Featured Audiobooks Section -->
    <section class="featured-section">
      <div class="container">
        <h2>Featured Audiobooks</h2>
        <div class="featured-grid">
          <div v-for="book in featuredAudiobooks" :key="book.title" class="featured-card">
            <div class="book-image">
              <img :src="book.image" :alt="book.title">
              <div class="book-overlay">
                <button @click="handleListenNow(book.title)" class="listen-button">
                  <span class="play-icon">▶</span> Listen Now
                </button>
              </div>
            </div>
            <div class="book-info">
              <h3>{{ book.title }}</h3>
              <p class="author">By {{ book.author }}</p>
              <p class="narrator">Narrated by {{ book.narrator }}</p>
              <div class="book-meta">
                <span class="genre">{{ book.genre }}</span>
                <span class="duration">{{ book.duration }}</span>
              </div>
              <p class="description">{{ book.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Categories Section -->
    <section class="categories-section">
      <div class="container">
        <h2>Browse Categories</h2>
        <div class="categories-grid">
          <div v-for="category in categories" :key="category.name" class="category-card">
            <div class="category-image">
              <img :src="category.image" :alt="category.name">
              <div class="category-overlay"></div>
            </div>
            <div class="category-info">
              <h3>{{ category.name }}</h3>
              <p>{{ category.count }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Bestsellers Section -->
    <section class="bestsellers-section">
      <div class="container">
        <h2>Bestsellers</h2>
        <div class="bestsellers-grid">
          <div v-for="book in bestsellers" :key="book.title" class="bestseller-card">
            <div class="book-cover">
              <img :src="book.image" :alt="book.title">
              <div class="book-overlay">
                <button @click="handleListenNow(book.title)" class="preview-button">Preview</button>
              </div>
              <div class="rating-badge">
                <span class="star">★</span> {{ book.rating }}
              </div>
            </div>
            <div class="book-details">
              <h3>{{ book.title }}</h3>
              <p class="author">{{ book.author }}</p>
              <span class="genre">{{ book.genre }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <div class="container">
        <h2>Premium Features</h2>
        <div class="features-grid">
          <div v-for="feature in features" :key="feature.title" class="feature-card">
            <div class="feature-icon">{{ feature.icon }}</div>
            <div class="feature-content">
              <h3>{{ feature.title }}</h3>
              <p>{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <h2>Ready to Start Listening?</h2>
        <p>Get unlimited access to thousands of audiobooks with phone billing.</p>
        <button @click="handleSubscribe" class="primary-button">Get Premium</button>
        <p class="cta-note">No credit card needed. Cancel anytime.</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.audiobooks-page {
  min-height: 100vh;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  color: #1a1a1a;
  background-color: #fff8f9;
  padding-top: 64px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* Hero Section */
.hero-section {
  position: relative;
  height: 600px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
}

.hero-backdrop {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg');
  background-size: cover;
  background-position: center;
  filter: brightness(0.4);
  z-index: -1;
}

.hero-content {
  max-width: 800px;
  padding: 2rem;
  position: relative;
  z-index: 1;
}

.badge {
  display: inline-block;
  background: #9333ea;
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  letter-spacing: 1px;
}

.hero-section h1 {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  background: linear-gradient(to right, #9333ea, #c026d3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 2px 10px rgba(0,0,0,0.2);
}

.hero-section p {
  font-size: 1.5rem;
  margin-bottom: 2.5rem;
  color: rgba(255, 255, 255, 0.9);
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.primary-button {
  background: linear-gradient(to right, #9333ea, #c026d3);
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(147, 51, 234, 0.3);
}

.primary-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 25px rgba(147, 51, 234, 0.4);
}

.secondary-button {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  color: white;
  font-size: 1.1rem;
  padding: 1rem 2rem;
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.secondary-button:hover {
  background: rgba(255, 255, 255, 0.25);
}

.play-icon {
  font-size: 0.9rem;
}

/* Featured Section */
.featured-section {
  padding: 5rem 0;
}

.featured-section h2, 
.categories-section h2, 
.bestsellers-section h2,
.features-section h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  text-align: center;
  color: #581c87;
  position: relative;
}

.featured-section h2::after,
.categories-section h2::after,
.bestsellers-section h2::after,
.features-section h2::after {
  content: "";
  position: absolute;
  bottom: -0.75rem;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 4px;
  background: linear-gradient(to right, #9333ea, #c026d3);
  border-radius: 2px;
}

.featured-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2.5rem;
}

.featured-card {
  background: white;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.featured-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
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
  transform: scale(1.1);
}

.book-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.3s ease;
}

.featured-card:hover .book-overlay,
.bestseller-card:hover .book-overlay {
  opacity: 1;
}

.listen-button, .preview-button {
  background: linear-gradient(to right, #9333ea, #c026d3);
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.listen-button:hover, .preview-button:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 20px rgba(147, 51, 234, 0.3);
}

.book-info {
  padding: 1.5rem;
}

.book-info h3 {
  font-size: 1.3rem;
  font-weight: 600;
  color: #581c87;
  margin-bottom: 0.5rem;
}

.author, .narrator {
  color: #9333ea;
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
}

.book-meta {
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
}

.genre {
  background: #f3e8ff;
  color: #9333ea;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
}

.duration {
  color: #71717a;
  font-size: 0.9rem;
}

.description {
  color: #404040;
  font-size: 0.95rem;
  line-height: 1.6;
}

/* Categories Section */
.categories-section {
  padding: 5rem 0;
  background: #f6f5ff;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
}

.category-card {
  position: relative;
  border-radius: 1.5rem;
  overflow: hidden;
  height: 180px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.category-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
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
  background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 100%);
}

.category-info {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem;
  box-sizing: border-box;
}

.category-info h3 {
  font-size: 1.3rem;
  font-weight: 600;
  color: white;
  margin-bottom: 0.5rem;
}

.category-info p {
  color: #e5e5e5;
  font-size: 0.9rem;
}

/* Bestsellers Section */
.bestsellers-section {
  padding: 5rem 0;
}

.bestsellers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;
}

.bestseller-card {
  background: white;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.bestseller-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.book-cover {
  position: relative;
  height: 280px;
  overflow: hidden;
}

.book-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.bestseller-card:hover .book-cover img {
  transform: scale(1.1);
}

.rating-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(147, 51, 234, 0.8);
  color: white;
  padding: 0.3rem 0.6rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 0.2rem;
}

.star {
  color: #fbbf24;
}

.book-details {
  padding: 1.5rem;
}

.book-details h3 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #581c87;
  margin-bottom: 0.5rem;
  line-height: 1.4;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.book-details .author {
  margin-bottom: 0.8rem;
}

.book-details .genre {
  display: inline-block;
  margin-top: 0.5rem;
}

/* Features Section */
.features-section {
  padding: 5rem 0;
  background: #f6f5ff;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2.5rem;
}

.feature-card {
  background: white;
  border-radius: 1.5rem;
  padding: 2rem;
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.feature-icon {
  font-size: 2.5rem;
  flex-shrink: 0;
}

.feature-content h3 {
  font-size: 1.3rem;
  font-weight: 600;
  color: #581c87;
  margin-bottom: 0.75rem;
}

.feature-content p {
  color: #404040;
  font-size: 0.95rem;
  line-height: 1.6;
}

/* CTA Section */
.cta-section {
  padding: 6rem 0;
  background: linear-gradient(135deg, #9333ea, #c026d3);
  color: white;
  text-align: center;
}

.cta-section h2 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.cta-section p {
  font-size: 1.3rem;
  margin-bottom: 2.5rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  color: rgba(255, 255, 255, 0.9);
}

.cta-note {
  font-size: 1rem;
  opacity: 0.8;
  margin-top: 1.5rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-section {
    height: 500px;
  }
  
  .hero-section h1 {
    font-size: 2.5rem;
  }
  
  .hero-section p {
    font-size: 1.2rem;
  }
  
  .featured-section h2, 
  .categories-section h2, 
  .bestsellers-section h2,
  .features-section h2 {
    font-size: 2rem;
  }
  
  .hero-actions {
    flex-direction: column;
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }
  
  .book-meta {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .feature-card {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 1.5rem;
  }
  
  .cta-section h2 {
    font-size: 2.2rem;
  }
  
  .cta-section p {
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .hero-section h1 {
    font-size: 2rem;
  }
  
  .primary-button,
  .secondary-button,
  .listen-button,
  .preview-button {
    font-size: 1rem;
    padding: 0.875rem 1.75rem;
  }
  
  .featured-card {
    min-width: 100%;
  }
  
  .feature-icon {
    font-size: 2rem;
  }
  
  .feature-content h3 {
    font-size: 1.2rem;
  }
}
</style>