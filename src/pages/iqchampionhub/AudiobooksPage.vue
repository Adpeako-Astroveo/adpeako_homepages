<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Featured audiobooks
const featuredAudiobooks = ref([
  {
    title: 'The Midnight Library',
    author: 'Matt Haig',
    narrator: 'Carey Mulligan',
    duration: '8h 49m',
    genre: 'Fiction',
    image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg',
    description: 'Between life and death there is a library, and within that library, the shelves go on forever.'
  },
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    narrator: 'James Clear',
    duration: '5h 35m',
    genre: 'Self-Development',
    image: 'https://images.pexels.com/photos/3759114/pexels-photo-3759114.jpeg',
    description: 'An easy and proven way to build good habits and break bad ones.'
  },
  {
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
    narrator: 'Jack Hawkins, Louise Brealey',
    duration: '8h 43m',
    genre: 'Thriller',
    image: 'https://images.pexels.com/photos/1766604/pexels-photo-1766604.jpeg',
    description: 'A shocking psychological thriller of a woman\'s act of violence against her husband.'
  }
]);

// Categories
const categories = ref([
  {
    name: 'Fiction',
    count: '3,500+ titles',
    image: 'https://images.pexels.com/photos/256450/pexels-photo-256450.jpeg'
  },
  {
    name: 'Non-Fiction',
    count: '2,800+ titles',
    image: 'https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg'
  },
  {
    name: 'Mystery & Thriller',
    count: '1,200+ titles',
    image: 'https://images.pexels.com/photos/3112598/pexels-photo-3112598.jpeg'
  },
  {
    name: 'Self-Development',
    count: '950+ titles',
    image: 'https://images.pexels.com/photos/5239665/pexels-photo-5239665.jpeg'
  },
  {
    name: 'Science Fiction',
    count: '850+ titles',
    image: 'https://images.pexels.com/photos/2090807/pexels-photo-2090807.jpeg'
  },
  {
    name: 'Biography',
    count: '780+ titles',
    image: 'https://images.pexels.com/photos/3782143/pexels-photo-3782143.jpeg'
  }
]);

// New releases
const newReleases = ref([
  {
    title: 'The Mountain Within',
    author: 'Sarah Richardson',
    genre: 'Inspiration',
    image: 'https://images.pexels.com/photos/3732491/pexels-photo-3732491.jpeg'
  },
  {
    title: 'Future Forward',
    author: 'Michael Chen',
    genre: 'Business',
    image: 'https://images.pexels.com/photos/4170630/pexels-photo-4170630.jpeg'
  },
  {
    title: 'Whispers in the Dark',
    author: 'Elena Martinez',
    genre: 'Mystery',
    image: 'https://images.pexels.com/photos/5184961/pexels-photo-5184961.jpeg'
  },
  {
    title: 'Beyond the Stars',
    author: 'James Wilson',
    genre: 'Sci-Fi',
    image: 'https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg'
  }
]);

// Features
const features = ref([
  {
    title: 'Professional Narration',
    description: 'All audiobooks are narrated by professional voice actors',
    icon: '🎙️'
  },
  {
    title: 'Offline Listening',
    description: 'Download books to listen without an internet connection',
    icon: '📱'
  },
  {
    title: 'Sleep Timer',
    description: 'Set a timer to automatically stop playback',
    icon: '⏰'
  },
  {
    title: 'Customizable Experience',
    description: 'Adjust playback speed and bookmark important passages',
    icon: '⚙️'
  }
]);

const handleLogin = () => {
  router.push('/login');
};

const handleListenNow = (bookTitle) => {
  router.push('/login');
};
</script>

<template>
  <div class="audiobooks-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Unlimited Audiobooks</h1>
        <p class="subheading">Thousands of bestsellers and new releases, narrated by world-class performers.</p>
        <button class="cta-button" @click="handleLogin">Start Listening Now</button>
      </div>
    </section>

    <!-- Featured Audiobooks -->
    <section class="featured-section">
      <div class="container">
        <h2>Featured Audiobooks</h2>
        <div class="featured-grid">
          <div v-for="book in featuredAudiobooks" :key="book.title" class="featured-card">
            <div class="book-image">
              <img :src="book.image" :alt="book.title">
              <div class="book-overlay">
                <button @click="handleListenNow(book.title)" class="listen-button">
                  <span class="play-icon">▶</span>
                  Listen Now
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
              <div class="category-overlay">
                <h3>{{ category.name }}</h3>
                <p>{{ category.count }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- New Releases -->
    <section class="new-releases-section">
      <div class="container">
        <h2>New Releases</h2>
        <div class="new-releases-grid">
          <div v-for="release in newReleases" :key="release.title" class="release-card">
            <div class="release-image">
              <img :src="release.image" :alt="release.title">
              <div class="new-badge">NEW</div>
              <div class="release-overlay">
                <button @click="handleListenNow(release.title)" class="listen-button">
                  <span class="play-icon">▶</span>
                  Preview
                </button>
              </div>
            </div>
            <div class="release-info">
              <h3>{{ release.title }}</h3>
              <p class="author">By {{ release.author }}</p>
              <p class="genre">{{ release.genre }}</p>
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
        <p>Access thousands of audiobooks with a simple subscription billed directly to your phone</p>
        <button class="cta-button" @click="handleLogin">Get Started</button>
        <p class="note">No credit card required. Cancel anytime.</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.audiobooks-page {
  min-height: 100vh;
  color: #333;
  padding-top: 65px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #FF6584 0%, #6C63FF 100%);
  color: white;
  padding: 8rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
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
  text-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

.subheading {
  font-size: 1.5rem;
  margin-bottom: 2.5rem;
  opacity: 0.9;
}

.cta-button {
  background: #44C7B0;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 1rem 2rem;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(68, 199, 176, 0.4);
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(68, 199, 176, 0.5);
}

/* Featured Audiobooks */
.featured-section {
  padding: 5rem 0;
}

.featured-section h2, 
.categories-section h2, 
.new-releases-section h2,
.features-section h2 {
  font-size: 2.2rem;
  margin-bottom: 2.5rem;
  color: #6C63FF;
  text-align: center;
}

.featured-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
}

.featured-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.featured-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.15);
}

.book-image {
  position: relative;
  height: 220px;
  overflow: hidden;
}

.book-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.featured-card:hover .book-image img,
.release-card:hover .release-image img {
  transform: scale(1.1);
}

.book-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.featured-card:hover .book-overlay,
.release-card:hover .release-overlay {
  opacity: 1;
}

.listen-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #44C7B0;
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.listen-button:hover {
  transform: scale(1.05);
  background: #4ED7C0;
}

.play-icon {
  font-size: 0.9rem;
}

.book-info {
  padding: 1.5rem;
}

.book-info h3 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: #6C63FF;
}

.author, .narrator {
  color: #666;
  margin-bottom: 0.5rem;
}

.book-meta {
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
}

.genre {
  background: #f0f0f0;
  color: #6C63FF;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
}

.duration {
  color: #666;
  font-size: 0.9rem;
}

.description {
  color: #555;
  line-height: 1.5;
  font-size: 0.95rem;
}

/* Categories */
.categories-section {
  padding: 5rem 0;
  background: #f9f9f9;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
}

.category-card {
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  height: 180px;
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.category-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.2);
}

.category-image {
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
  right: 0;
  bottom: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.2) 100%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.5rem;
  color: white;
  transition: background 0.3s ease;
}

.category-card:hover .category-overlay {
  background: linear-gradient(to top, rgba(255, 101, 132, 0.8) 0%, rgba(255, 101, 132, 0.6) 60%, rgba(255, 101, 132, 0.4) 100%);
}

.category-overlay h3 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.category-overlay p {
  font-size: 0.9rem;
  opacity: 0.9;
}

/* New Releases */
.new-releases-section {
  padding: 5rem 0;
}

.new-releases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 2rem;
}

.release-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.release-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.15);
}

.release-image {
  position: relative;
  height: 280px;
  overflow: hidden;
}

.release-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.new-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #FF6584;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-weight: bold;
  font-size: 0.8rem;
}

.release-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.release-info {
  padding: 1.5rem;
}

.release-info h3 {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: #6C63FF;
}

.release-info .author,
.release-info .genre {
  font-size: 0.9rem;
  margin-bottom: 0.3rem;
  background: none;
  padding: 0;
  color: #666;
}

/* Features */
.features-section {
  padding: 5rem 0;
  background: #f9f9f9;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.1);
}

.feature-icon {
  font-size: 2.5rem;
  flex-shrink: 0;
}

.feature-content h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #6C63FF;
}

.feature-content p {
  color: #666;
  line-height: 1.5;
}

/* CTA Section */
.cta-section {
  padding: 7rem 0;
  text-align: center;
  background: linear-gradient(135deg, #FF6584 0%, #6C63FF 100%);
  color: white;
}

.cta-section h2 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: white;
}

.cta-section p {
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.note {
  font-size: 0.9rem;
  margin-top: 1.5rem;
  opacity: 0.8;
}

/* Responsive Design */
@media (max-width: 992px) {
  .featured-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 6rem 1.5rem;
  }
  
  .hero h1 {
    font-size: 2.5rem;
  }
  
  .subheading {
    font-size: 1.2rem;
  }
  
  .featured-section h2, 
  .categories-section h2, 
  .new-releases-section h2,
  .features-section h2,
  .cta-section h2 {
    font-size: 1.8rem;
  }
  
  .book-meta {
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-start;
  }
  
  .feature-card {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .hero h1 {
    font-size: 2rem;
  }
  
  .container {
    padding: 0 1.5rem;
  }
  
  .release-image {
    height: 220px;
  }
  
  .cta-section p {
    font-size: 1rem;
  }
  
  .cta-button {
    padding: 0.8rem 1.8rem;
    font-size: 1rem;
  }
}
</style>