<script setup>
import { ref } from 'vue';

const categories = ref([
  {
    name: 'Fiction',
    description: 'Bestselling novels and stories',
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg'
  },
  {
    name: 'Non-Fiction',
    description: 'Self-help, business, and more',
    image: 'https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg'
  },
  {
    name: 'Children',
    description: 'Stories for young listeners',
    image: 'https://images.pexels.com/photos/256450/pexels-photo-256450.jpeg'
  }
]);

const features = ref([
  {
    title: 'Professional Narration',
    description: 'World-class voice artists',
    icon: '🎙️'
  },
  {
    title: 'Offline Mode',
    description: 'Download for offline listening',
    icon: '⬇️'
  },
  {
    title: 'Sleep Timer',
    description: 'Auto-stop when you drift off',
    icon: '⏰'
  },
  {
    title: 'Bookmarks',
    description: 'Save your favorite passages',
    icon: '📑'
  }
]);

const popularBooks = ref([
  {
    title: 'The Great Adventure',
    author: 'John Smith',
    duration: '12h 30m',
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg'
  },
  {
    title: 'Business Success',
    author: 'Sarah Johnson',
    duration: '8h 45m',
    image: 'https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg'
  },
  {
    title: 'Magical Tales',
    author: 'David Brown',
    duration: '6h 15m',
    image: 'https://images.pexels.com/photos/256450/pexels-photo-256450.jpeg'
  }
]);

const handleLogin = () => {
  window.location.href = '/login';
};
</script>

<template>
  <div class="audiobooks-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Premium Audiobooks</h1>
        <p class="subtitle">Listen to Your Favorite Books Anywhere</p>
        <button class="cta-button" @click="handleLogin">Start Listening Now</button>
      </div>
    </section>

    <!-- Categories Section -->
    <section class="categories">
      <h2>Browse Categories</h2>
      <div class="categories-grid">
        <div v-for="category in categories" :key="category.name" class="category-card">
          <img :src="category.image" :alt="category.name" />
          <div class="category-info">
            <h3>{{ category.name }}</h3>
            <p>{{ category.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <h2>Premium Features</h2>
      <div class="features-grid">
        <div v-for="feature in features" :key="feature.title" class="feature-card">
          <span class="feature-icon">{{ feature.icon }}</span>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </div>
      </div>
    </section>

    <!-- Popular Books -->
    <section class="popular-books">
      <h2>Popular Audiobooks</h2>
      <div class="books-grid">
        <div v-for="book in popularBooks" :key="book.title" class="book-card">
          <img :src="book.image" :alt="book.title" />
          <div class="book-info">
            <h3>{{ book.title }}</h3>
            <p class="author">By {{ book.author }}</p>
            <p class="duration">{{ book.duration }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta">
      <h2>Ready to Start Listening?</h2>
      <p>Join millions of audiobook lovers worldwide</p>
      <button class="cta-button" @click="handleLogin">Login Now</button>
    </section>
  </div>
</template>

<style scoped>
.audiobooks-page {
  min-height: 100vh;
  padding-top: 64px;
}

.hero {
  background: linear-gradient(135deg, #FFB800 0%, #FFA200 100%);
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
}

.subtitle {
  font-size: 1.5rem;
  opacity: 0.9;
  margin-bottom: 2rem;
}

.categories {
  padding: 6rem 2rem;
  background: #f7fafc;
}

.categories h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #FFB800;
  margin-bottom: 3rem;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.category-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.category-card:hover {
  transform: translateY(-5px);
}

.category-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.category-info {
  padding: 1.5rem;
}

.category-info h3 {
  color: #FFB800;
  margin-bottom: 0.5rem;
}

.features {
  padding: 6rem 2rem;
}

.features h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #FFB800;
  margin-bottom: 3rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  display: block;
}

.feature-card h3 {
  color: #FFB800;
  margin-bottom: 1rem;
}

.popular-books {
  padding: 6rem 2rem;
  background: #f7fafc;
}

.popular-books h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #FFB800;
  margin-bottom: 3rem;
}

.books-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.book-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.book-card:hover {
  transform: translateY(-5px);
}

.book-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.book-info {
  padding: 1.5rem;
}

.book-info h3 {
  color: #FFB800;
  margin-bottom: 0.5rem;
}

.author {
  color: #4a5568;
  margin-bottom: 0.5rem;
}

.duration {
  color: #718096;
  font-size: 0.9rem;
}

.cta {
  background: linear-gradient(135deg, #FFB800 0%, #FFA200 100%);
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

.cta-button {
  background: white;
  color: #FFB800;
  font-size: 1.2rem;
  padding: 1rem 3rem;
  border-radius: 0.5rem;
  border: none;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

/* Improved Responsive Styles */
@media (max-width: 1024px) {
  .categories-grid, .features-grid, .books-grid {
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 6rem 1.5rem;
  }
  
  .hero h1 {
    font-size: 2.5rem;
  }
  
  .subtitle {
    font-size: 1.2rem;
  }
  
  .categories h2, .features h2, .popular-books h2, .cta h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  
  .categories, .features, .popular-books {
    padding: 4rem 1.5rem;
  }
  
  .cta {
    padding: 4rem 1.5rem;
  }
  
  .cta h2 {
    font-size: 2rem;
  }
  
  .cta p {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
  
  .cta-button {
    padding: 0.75rem 2rem;
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 5rem 1rem;
  }
  
  .hero h1 {
    font-size: 2rem;
  }
  
  .subtitle {
    font-size: 1rem;
  }
  
  .categories h2, .features h2, .popular-books h2 {
    font-size: 1.75rem;
  }
  
  .categories, .features, .popular-books {
    padding: 3rem 1rem;
  }
  
  .feature-card, .category-card, .book-card {
    padding: 1rem;
  }
  
  .feature-icon {
    font-size: 2rem;
  }
  
  .category-info, .book-info {
    padding: 1.25rem;
  }
  
  .category-card img, .book-card img {
    height: 180px;
  }
  
  .feature-card h3, .category-info h3, .book-info h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
  
  .features-grid {
    gap: 1rem;
  }
  
  .cta {
    padding: 3rem 1rem;
  }
  
  .cta h2 {
    font-size: 1.75rem;
  }
  
  .cta-button {
    padding: 0.75rem 2rem;
    font-size: 0.95rem;
  }
}
</style>