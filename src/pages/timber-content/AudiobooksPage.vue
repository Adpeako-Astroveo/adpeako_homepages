<script setup>
import { ref } from 'vue';

const featuredAudiobooks = ref([
  {
    title: 'The Midnight Library',
    author: 'Matt Haig',
    narrator: 'Carey Mulligan',
    duration: '8h 49m',
    image: 'https://images.pexels.com/photos/5834/nature-grass-leaf-green.jpg',
    description: 'Between life and death there is a library. When Nora Seed finds herself in the Midnight Library, she has a chance to make different choices.'
  },
  {
    title: 'Project Hail Mary',
    author: 'Andy Weir',
    narrator: 'Ray Porter',
    duration: '16h 10m',
    image: 'https://images.pexels.com/photos/532192/pexels-photo-532192.jpeg',
    description: 'Ryland Grace is the sole survivor on a desperate mission—and if he fails, humanity and the Earth itself will perish.'
  },
  {
    title: 'Where the Crawdads Sing',
    author: 'Delia Owens',
    narrator: 'Cassandra Campbell',
    duration: '12h 12m',
    image: 'https://images.pexels.com/photos/1477166/pexels-photo-1477166.jpeg',
    description: 'A painfully beautiful novel about a young girl who grows up alone in the marshes of North Carolina.'
  }
]);

const categories = ref([
  { name: 'Fiction', icon: '📚' },
  { name: 'Non-Fiction', icon: '🧠' },
  { name: 'Mystery', icon: '🔍' },
  { name: 'Science Fiction', icon: '🚀' },
  { name: 'Fantasy', icon: '🧙‍♂️' },
  { name: 'Biography', icon: '👤' },
  { name: 'Self-Help', icon: '🌱' },
  { name: 'Business', icon: '💼' }
]);

const bestSellers = ref([
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
    rating: 4.8
  },
  {
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
    image: 'https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg',
    rating: 4.5
  },
  {
    title: 'Educated',
    author: 'Tara Westover',
    image: 'https://images.pexels.com/photos/1516440/pexels-photo-1516440.jpeg',
    rating: 4.7
  },
  {
    title: 'Dune',
    author: 'Frank Herbert',
    image: 'https://images.pexels.com/photos/3617457/pexels-photo-3617457.jpeg',
    rating: 4.9
  }
]);

const features = ref([
  {
    title: 'Offline Listening',
    description: 'Download audiobooks for offline enjoyment, perfect for commutes or travel.',
    icon: '📱'
  },
  {
    title: 'Adjustable Narration Speed',
    description: 'Listen at your preferred pace with speeds from 0.5x to 3.0x.',
    icon: '⏩'
  },
  {
    title: 'Sleep Timer',
    description: 'Set a timer that automatically stops playback when you drift off.',
    icon: '⏰'
  },
  {
    title: 'Sync Across Devices',
    description: 'Continue listening exactly where you left off on any device.',
    icon: '🔄'
  }
]);

const handleSubscribe = () => {
  window.location.href = '/login';
};

const handleListen = () => {
  window.location.href = '/login';
};
</script>

<template>
  <div class="timber-audiobooks-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Premium Audiobooks</h1>
        <p class="tagline">Thousands of bestsellers and new releases, read by award-winning narrators.</p>
        <button @click="handleSubscribe" class="cta-button">Start Listening</button>
      </div>
    </section>

    <!-- Featured Audiobooks -->
    <section class="featured-audiobooks">
      <h2>Featured Audiobooks</h2>
      <div class="featured-grid">
        <div v-for="book in featuredAudiobooks" :key="book.title" class="featured-card">
          <div class="book-image">
            <img :src="book.image" :alt="book.title">
            <div class="book-overlay">
              <button @click="handleListen" class="listen-button">
                <span class="play-icon">▶</span>
                Listen Now
              </button>
            </div>
          </div>
          <div class="book-details">
            <h3>{{ book.title }}</h3>
            <p class="author">By {{ book.author }}</p>
            <p class="narrator">Narrated by {{ book.narrator }}</p>
            <p class="duration">{{ book.duration }}</p>
            <p class="description">{{ book.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Categories Section -->
    <section class="categories">
      <h2>Browse Categories</h2>
      <div class="categories-grid">
        <div v-for="category in categories" :key="category.name" class="category-card">
          <div class="category-icon">{{ category.icon }}</div>
          <h3>{{ category.name }}</h3>
        </div>
      </div>
    </section>

    <!-- Bestsellers Section -->
    <section class="bestsellers">
      <h2>Bestsellers</h2>
      <div class="bestsellers-grid">
        <div v-for="book in bestSellers" :key="book.title" class="bestseller-card">
          <div class="book-cover">
            <img :src="book.image" :alt="book.title">
            <div class="rating">★ {{ book.rating }}</div>
          </div>
          <div class="book-info">
            <h3>{{ book.title }}</h3>
            <p class="author">{{ book.author }}</p>
            <button @click="handleListen" class="preview-button">Free Preview</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <h2>Premium Features</h2>
      <div class="features-grid">
        <div v-for="feature in features" :key="feature.title" class="feature-card">
          <div class="feature-icon">{{ feature.icon }}</div>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-content">
        <h2>Ready to start listening?</h2>
        <p>Get unlimited access to thousands of audiobooks with a 30-day free trial.</p>
        <button @click="handleSubscribe" class="cta-button">Try Free for 30 Days</button>
      </div>
    </section>
  </div>
</template>

<style scoped>
.timber-audiobooks-page {
  min-height: 100vh;
  color: #f8f9fa;
  font-family: 'Inter', sans-serif;
  background-color: #14151a;
  padding-top: 64px;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #3a1d58 0%, #252b42 100%);
  padding: 10rem 2rem;
  text-align: center;
  position: relative;
}

.hero::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg') center/cover no-repeat;
  opacity: 0.15;
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
}

.hero h1 {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #a78bfa 0%, #ec4899 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 2px 8px rgba(0,0,0,0.3);
}

.tagline {
  font-size: 1.5rem;
  margin-bottom: 2.5rem;
  opacity: 0.9;
}

.cta-button {
  background: linear-gradient(135deg, #a78bfa 0%, #ec4899 100%);
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
  padding: 1rem 3rem;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(167, 139, 250, 0.4);
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(167, 139, 250, 0.5);
}

/* Featured Audiobooks */
.featured-audiobooks {
  padding: 5rem 2rem;
}

.featured-audiobooks h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #a78bfa;
}

.featured-grid {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1400px;
  margin: 0 auto;
}

.featured-card {
  flex: 1;
  min-width: 300px;
  max-width: 400px;
  background: #1c1e26;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
  transition: all 0.3s ease;
}

.featured-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.6);
}

.book-image {
  position: relative;
  height: 250px;
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
  width: 100%;
  height: 100%;
  background: rgba(28, 30, 38, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.featured-card:hover .book-overlay {
  opacity: 1;
}

.listen-button {
  background: linear-gradient(135deg, #a78bfa 0%, #ec4899 100%);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.listen-button:hover {
  transform: scale(1.05);
}

.play-icon {
  font-size: 1.2rem;
}

.book-details {
  padding: 2rem;
}

.book-details h3 {
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
  color: white;
}

.author, .narrator {
  color: #a78bfa;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
}

.duration {
  color: #9ca3af;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.description {
  color: #d1d5db;
  font-size: 0.9rem;
  line-height: 1.6;
}

/* Categories Section */
.categories {
  padding: 5rem 2rem;
  background: #1c1e26;
}

.categories h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #a78bfa;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.category-card {
  background: #14151a;
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

.category-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.3);
  background: linear-gradient(135deg, #3a1d58 0%, #252b42 100%);
}

.category-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.category-card h3 {
  font-size: 1.2rem;
  color: white;
}

/* Bestsellers Section */
.bestsellers {
  padding: 5rem 2rem;
}

.bestsellers h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #a78bfa;
}

.bestsellers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.bestseller-card {
  background: #1c1e26;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  transition: all 0.3s ease;
}

.bestseller-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.4);
}

.book-cover {
  position: relative;
  height: 300px;
}

.book-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.rating {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(167, 139, 250, 0.9);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-weight: bold;
  font-size: 0.9rem;
}

.book-info {
  padding: 1.5rem;
}

.book-info h3 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: white;
}

.book-info .author {
  margin-bottom: 1.5rem;
}

.preview-button {
  width: 100%;
  background: transparent;
  color: #a78bfa;
  border: 1px solid #a78bfa;
  padding: 0.75rem 0;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.preview-button:hover {
  background: rgba(167, 139, 250, 0.1);
}

/* Features Section */
.features {
  padding: 5rem 2rem;
  background: #1c1e26;
}

.features h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #a78bfa;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  background: #14151a;
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.3);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.feature-card h3 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: white;
}

.feature-card p {
  color: #d1d5db;
  font-size: 0.9rem;
  line-height: 1.6;
}

/* CTA Section */
.cta-section {
  background: linear-gradient(135deg, #3a1d58 0%, #252b42 100%);
  padding: 5rem 2rem;
  text-align: center;
}

.cta-content {
  max-width: 800px;
  margin: 0 auto;
}

.cta-section h2 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: white;
}

.cta-section p {
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  color: rgba(255, 255, 255, 0.9);
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero {
    padding: 8rem 1.5rem;
  }
  
  .hero h1 {
    font-size: 2.5rem;
  }
  
  .tagline {
    font-size: 1.2rem;
  }
  
  .featured-card {
    min-width: 100%;
  }
  
  .categories-grid {
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  }
  
  .cta-section h2 {
    font-size: 2rem;
  }
  
  .cta-section p {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 6rem 1rem;
  }
  
  .hero h1 {
    font-size: 2rem;
  }
  
  .featured-audiobooks h2,
  .categories h2,
  .bestsellers h2,
  .features h2 {
    font-size: 2rem;
  }
  
  .cta-button {
    padding: 0.8rem 2rem;
    font-size: 1rem;
  }
  
  .book-details h3 {
    font-size: 1.3rem;
  }
  
  .categories-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .category-card {
    padding: 1.5rem;
  }
  
  .category-icon {
    font-size: 2rem;
  }
}
</style>