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
    title: 'The Silent Echo',
    author: 'Rebecca Jenkins',
    narrator: 'James Anderson',
    rating: 4.8,
    duration: '14h 27m',
    image: 'https://images.pexels.com/photos/1907785/pexels-photo-1907785.jpeg',
    genre: 'Mystery Thriller',
    description: 'When a small town detective investigates a series of disappearances, he uncovers secrets that have been buried for decades.'
  },
  {
    title: 'Quantum Dreams',
    author: 'Dr. Alexander Hayes',
    narrator: 'Sarah Mitchell',
    rating: 4.9,
    duration: '11h 45m',
    image: 'https://images.pexels.com/photos/2099691/pexels-photo-2099691.jpeg',
    genre: 'Science Fiction',
    description: 'A groundbreaking physicist discovers a way to access parallel universes through dreams, altering reality as we know it.'
  },
  {
    title: 'The Art of Focus',
    author: 'Martin Lawrence',
    narrator: 'David Richards',
    rating: 4.7,
    duration: '9h 15m',
    image: 'https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg',
    genre: 'Self-Development',
    description: 'Learn powerful techniques to master your attention in a distracted world and achieve extraordinary productivity.'
  }
]);

const newReleases = ref([
  {
    title: 'Beyond The Stars',
    author: 'Emily Chen',
    releaseDate: 'May 12, 2025',
    image: 'https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg',
    genre: 'Sci-Fi Adventure'
  },
  {
    title: 'The Mountain Path',
    author: 'Robert Thompson',
    releaseDate: 'May 10, 2025',
    image: 'https://images.pexels.com/photos/1586298/pexels-photo-1586298.jpeg',
    genre: 'Adventure'
  },
  {
    title: 'Whispers of the Past',
    author: 'Sophia Williams',
    releaseDate: 'May 8, 2025',
    image: 'https://images.pexels.com/photos/3358707/pexels-photo-3358707.png',
    genre: 'Historical Fiction'
  },
  {
    title: 'Financial Freedom',
    author: 'Mark Stevens',
    releaseDate: 'May 5, 2025',
    image: 'https://images.pexels.com/photos/47344/dollar-currency-money-us-dollar-47344.jpeg',
    genre: 'Business & Finance'
  }
]);

const bestSellers = ref([
  {
    title: 'The Hidden Key',
    author: 'Daniel Wright',
    genre: 'Mystery',
    rating: 4.9,
    image: 'https://images.pexels.com/photos/5834/nature-grass-leaf-green.jpg'
  },
  {
    title: 'Mindful Leadership',
    author: 'Christine Parker',
    genre: 'Business',
    rating: 4.8,
    image: 'https://images.pexels.com/photos/6932/woman-girl-teenager-book.jpg'
  },
  {
    title: 'Cosmic Explorers',
    author: 'Neil Richardson',
    genre: 'Science Fiction',
    rating: 4.7,
    image: 'https://images.pexels.com/photos/19670/pexels-photo.jpg'
  },
  {
    title: 'The Last Kingdom',
    author: 'Laura Thompson',
    genre: 'Fantasy',
    rating: 4.8,
    image: 'https://images.pexels.com/photos/2170729/pexels-photo-2170729.jpeg'
  },
  {
    title: 'The Power of Now',
    author: 'Michael Stevens',
    genre: 'Self-Help',
    rating: 4.9,
    image: 'https://images.pexels.com/photos/2099691/pexels-photo-2099691.jpeg'
  },
  {
    title: 'Hidden History',
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
    title: 'Seamless Sync',
    description: 'Continue listening from where you left off across all your devices',
    icon: '🔄'
  },
  {
    title: 'Bookmarks & Notes',
    description: 'Mark important passages and add notes for reference',
    icon: '📝'
  }
]);

const testimonials = ref([
  {
    text: "The audiobook selection is incredible, and the narration quality is superb. I've discovered so many great books during my commute!",
    author: "Emma L.",
    location: "Dublin, Ireland"
  },
  {
    text: "Being able to switch between reading and listening with sync is a game-changer. The offline feature is perfect for my travels.",
    author: "Thomas K.",
    location: "Stockholm, Sweden"
  },
  {
    text: "I love the sleep timer feature! Perfect for winding down at night without worrying about losing my place in the story.",
    author: "Sophia R.",
    location: "Barcelona, Spain"
  }
]);

const currentTestimonialIndex = ref(0);
const selectedAudiobook = ref(null);
const isListening = ref(false);
const currentTime = ref('0:00');
const totalTime = ref('14:27');
const progress = ref(0);

const nextTestimonial = () => {
  currentTestimonialIndex.value = (currentTestimonialIndex.value + 1) % testimonials.value.length;
};

const prevTestimonial = () => {
  currentTestimonialIndex.value = (currentTestimonialIndex.value - 1 + testimonials.value.length) % testimonials.value.length;
};

const startListening = (audiobook) => {
  selectedAudiobook.value = audiobook;
  isListening.value = true;
  // For demo purposes, just setting a random progress
  progress.value = Math.random() * 20;
  // In a real app, we would navigate to login
  router.push('/login');
};

const togglePlayback = () => {
  isListening.value = !isListening.value;
  // In a real app, we would navigate to login
  router.push('/login');
};

const closePlayer = () => {
  selectedAudiobook.value = null;
  isListening.value = false;
};

const navigateToLogin = () => {
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
        <button class="cta-button" @click="navigateToLogin">Login Now</button>
      </div>
    </section>

    <!-- Featured Audiobooks -->
    <section class="featured-audiobooks">
      <h2>Editor's Picks</h2>
      <div class="featured-grid">
        <div v-for="book in featuredAudiobooks" :key="book.title" class="featured-card">
          <div class="book-image">
            <img :src="book.image" :alt="book.title">
            <div class="book-overlay">
              <button class="listen-button" @click="navigateToLogin">Listen Now</button>
            </div>
          </div>
          <div class="book-info">
            <h3>{{ book.title }}</h3>
            <p class="book-author">By {{ book.author }}</p>
            <p class="book-narrator">Narrated by {{ book.narrator }}</p>
            <div class="book-meta">
              <div class="book-rating">
                <span class="star">★</span>
                <span class="rating-value">{{ book.rating }}</span>
              </div>
              <span class="book-duration">{{ book.duration }}</span>
            </div>
            <span class="book-genre">{{ book.genre }}</span>
            <p class="book-description">{{ book.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Categories -->
    <section class="audiobook-categories">
      <h2>Browse Categories</h2>
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
    <section class="new-releases">
      <h2>New Releases</h2>
      <div class="releases-grid">
        <div v-for="book in newReleases" :key="book.title" class="release-card">
          <div class="book-image">
            <img :src="book.image" :alt="book.title">
            <div class="book-overlay">
              <button class="listen-button" @click="navigateToLogin">Listen</button>
            </div>
            <div class="new-badge">NEW</div>
          </div>
          <div class="book-info">
            <h3>{{ book.title }}</h3>
            <p class="book-author">By {{ book.author }}</p>
            <div class="book-bottom">
              <span class="book-genre">{{ book.genre }}</span>
              <span class="release-date">{{ book.releaseDate }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Best Sellers -->
    <section class="best-sellers">
      <h2>Best Sellers</h2>
      <div class="bestsellers-grid">
        <div v-for="book in bestSellers" :key="book.title" class="bestseller-card">
          <div class="book-image">
            <img :src="book.image" :alt="book.title">
            <div class="book-overlay">
              <button class="listen-button" @click="navigateToLogin">Listen</button>
            </div>
          </div>
          <div class="book-info">
            <h3>{{ book.title }}</h3>
            <p class="book-author">By {{ book.author }}</p>
            <div class="book-bottom">
              <span class="book-genre">{{ book.genre }}</span>
              <div class="book-rating">
                <span class="star">★</span>
                <span class="rating-value">{{ book.rating }}</span>
              </div>
            </div>
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

    <!-- Testimonials -->
    <section class="testimonials">
      <h2>What Listeners Say</h2>
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

    <!-- Audio Player (shows when a book is selected) -->
    <div v-if="selectedAudiobook" class="audio-player">
      <div class="player-content">
        <div class="player-left">
          <img :src="selectedAudiobook.image" :alt="selectedAudiobook.title" class="player-image">
        </div>
        <div class="player-center">
          <h3 class="player-title">{{ selectedAudiobook.title }}</h3>
          <p class="player-author">{{ selectedAudiobook.author }}</p>
          <div class="progress-bar-container">
            <div class="progress-bar" :style="{ width: progress + '%' }"></div>
          </div>
          <div class="time-display">
            <span class="current-time">{{ currentTime }}</span>
            <span class="time-separator">/</span>
            <span class="total-time">{{ totalTime }}</span>
          </div>
        </div>
        <div class="player-right">
          <button class="player-control rewind" @click="navigateToLogin">⏪</button>
          <button class="player-control play-pause" @click="navigateToLogin">
            {{ isListening ? '⏸' : '▶' }}
          </button>
          <button class="player-control forward" @click="navigateToLogin">⏩</button>
          <button class="player-control close" @click="closePlayer">✖</button>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <section class="cta">
      <h2>Ready to Dive Into Amazing Stories?</h2>
      <p>Join thousands of listeners enjoying premium audiobooks</p>
      <button class="cta-button" @click="navigateToLogin">Login Now</button>
    </section>
  </div>
</template>

<style scoped>
.audiobooks-page {
  color: #1a202c;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  position: relative;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #FF6347 0%, #FFA07A 100%);
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
  color: #FF6347;
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

/* Featured Audiobooks */
.featured-audiobooks {
  padding: 5rem 2rem;
  background: white;
}

.featured-audiobooks h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #FF6347;
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

.listen-button {
  background: #FF6347;
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.listen-button:hover {
  background: #ff7e66;
  transform: scale(1.05);
}

.new-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #FF6347;
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
  color: #2d3748;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.book-author {
  color: #4a5568;
  margin-bottom: 0.3rem;
  font-size: 0.95rem;
}

.book-narrator {
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

.book-rating {
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

.book-duration {
  color: #718096;
}

.book-genre {
  display: inline-block;
  background: #f7fafc;
  color: #FF6347;
  padding: 0.3rem 0.7rem;
  border-radius: 15px;
  font-size: 0.85rem;
  margin-bottom: 1rem;
  font-weight: 500;
}

.book-description {
  color: #4a5568;
  font-size: 0.95rem;
  line-height: 1.6;
}

/* Categories */
.audiobook-categories {
  padding: 5rem 2rem;
  background: #f8fafc;
}

.audiobook-categories h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #FF6347;
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

.book-count {
  color: #718096;
  font-size: 0.85rem;
}

/* New Releases */
.new-releases {
  padding: 5rem 2rem;
}

.new-releases h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #FF6347;
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
.best-sellers {
  padding: 5rem 2rem;
  background: #f8fafc;
}

.best-sellers h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #FF6347;
  margin-bottom: 3rem;
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

/* Features */
.features {
  padding: 5rem 2rem;
}

.features h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #FF6347;
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
  color: #FF6347;
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
  color: #FF6347;
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
  background: #FF6347;
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
  background: #ff7e66;
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
  background-color: #FF6347;
}

/* Audio Player */
.audio-player {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  box-shadow: 0 -4px 10px rgba(0,0,0,0.1);
  padding: 1rem;
  z-index: 100;
}

.player-content {
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.player-left {
  margin-right: 1.5rem;
}

.player-image {
  width: 60px;
  height: 60px;
  border-radius: 8px;
  object-fit: cover;
}

.player-center {
  flex: 1;
}

.player-title {
  font-size: 1.1rem;
  color: #2d3748;
  margin-bottom: 0.3rem;
}

.player-author {
  color: #718096;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.progress-bar-container {
  height: 4px;
  background: #e2e8f0;
  border-radius: 2px;
  margin-bottom: 0.3rem;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background: #FF6347;
  border-radius: 2px;
}

.time-display {
  display: flex;
  justify-content: flex-start;
  color: #718096;
  font-size: 0.8rem;
}

.time-separator {
  margin: 0 0.3rem;
}

.player-right {
  display: flex;
  align-items: center;
}

.player-control {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  margin: 0 0.5rem;
  color: #4a5568;
  transition: color 0.3s ease;
}

.player-control:hover {
  color: #FF6347;
}

.player-control.play-pause {
  width: 40px;
  height: 40px;
  background: #FF6347;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
}

.player-control.close {
  font-size: 1.2rem;
  color: #718096;
  margin-left: 1rem;
}

/* CTA Section */
.cta {
  background: linear-gradient(135deg, #FF6347 0%, #FFA07A 100%);
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
  color: #FF6347;
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
  
  .bestsellers-grid {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
  
  .releases-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
  
  .categories-grid {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
  
  .player-content {
    flex-direction: column;
    align-items: center;
  }
  
  .player-left {
    margin-right: 0;
    margin-bottom: 1rem;
  }
  
  .player-right {
    margin-top: 1rem;
  }
  
  .cta h2 {
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
  .bestsellers-grid, .releases-grid {
    grid-template-columns: 1fr;
  }
  
  .audio-player {
    padding: 0.8rem;
  }
  
  .player-control {
    font-size: 1.2rem;
    margin: 0 0.3rem;
  }
  
  .player-title {
    font-size: 1rem;
  }
}
</style>