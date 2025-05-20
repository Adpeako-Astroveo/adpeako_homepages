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
    title: 'Beyond the Stars',
    author: 'Rebecca Jenkins',
    narrator: 'James Anderson',
    rating: 4.8,
    duration: '14h 27m',
    image: 'https://images.pexels.com/photos/1907785/pexels-photo-1907785.jpeg',
    genre: 'Sci-Fi Thriller',
    description: 'An astronaut returning from a failed mission discovers that time has moved differently on Earth, triggering a series of revelations that question the nature of reality itself.'
  },
  {
    title: 'Mind Architecture',
    author: 'Dr. Alexander Hayes',
    narrator: 'Sarah Mitchell',
    rating: 4.9,
    duration: '11h 45m',
    image: 'https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg',
    genre: 'Self-Development',
    description: 'A groundbreaking approach to cognitive enhancement combining neuroscience with practical techniques for improving focus, memory, and creative thinking.'
  },
  {
    title: 'The Final Summit',
    author: 'Martin Lawrence',
    narrator: 'David Richards',
    rating: 4.7,
    duration: '13h 15m',
    image: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg',
    genre: 'Adventure',
    description: 'Four elite climbers face impossible odds as they attempt to conquer the world\'s most dangerous peak during a catastrophic storm that will test not only their skills but their humanity.'
  }
]);

const newReleases = ref([
  {
    title: 'Quantum Echoes',
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
    description: 'All titles narrated by professional voice actors and celebrities',
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

const testimonials = ref([
  {
    text: "The audiobook selection is incredible, and the narration quality is superb. I've discovered so many great books during my commute!",
    author: "Jessica L.",
    location: "London"
  },
  {
    text: "The sleep timer and bookmarking features are perfect for bedtime listening. I never lose my place even when I fall asleep!",
    author: "Thomas K.",
    location: "Berlin"
  },
  {
    text: "Being able to download audiobooks for my travels has been a game-changer. The offline listening feature is exceptional.",
    author: "Sophie M.",
    location: "Paris"
  }
]);

const currentTestimonialIndex = ref(0);
const currentTime = ref('0:00');
const totalTime = ref('14:27');
const progress = ref(0);
const isPlaying = ref(false);

const nextTestimonial = () => {
  currentTestimonialIndex.value = (currentTestimonialIndex.value + 1) % testimonials.value.length;
};

const prevTestimonial = () => {
  currentTestimonialIndex.value = (currentTestimonialIndex.value - 1 + testimonials.value.length) % testimonials.value.length;
};

const togglePlayback = () => {
  isPlaying.value = !isPlaying.value;
  // This would actually start or pause the audio in a real implementation
  navigateToLogin();
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
        <button class="cta-button" @click="navigateToLogin">Start Listening</button>
      </div>
      <div class="hero-visual">
        <div class="headphones"></div>
        <div class="sound-wave">
          <div class="wave wave-1"></div>
          <div class="wave wave-2"></div>
          <div class="wave wave-3"></div>
          <div class="wave wave-4"></div>
        </div>
      </div>
    </section>

    <!-- Featured Audiobooks -->
    <section class="featured-section">
      <div class="section-container">
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
              <div class="book-meta">
                <p class="book-author">By {{ book.author }}</p>
                <p class="book-narrator">Narrated by {{ book.narrator }}</p>
              </div>
              <div class="book-stats">
                <div class="book-rating">
                  <span class="star">★</span>
                  <span class="rating-value">{{ book.rating }}</span>
                </div>
                <span class="book-duration">{{ book.duration }}</span>
              </div>
              <span class="book-genre">{{ book.genre }}</span>
              <p class="book-description">{{ book.description }}</p>
              <div class="book-actions">
                <button class="sample-button" @click="togglePlayback">
                  {{ isPlaying ? 'Pause Sample' : 'Play Sample' }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Categories -->
    <section class="categories-section">
      <div class="section-container">
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
      </div>
    </section>

    <!-- New Releases -->
    <section class="releases-section">
      <div class="section-container">
        <h2>New Releases</h2>
        <div class="releases-grid">
          <div v-for="book in newReleases" :key="book.title" class="release-card">
            <div class="book-image">
              <img :src="book.image" :alt="book.title">
              <div class="book-overlay">
                <button class="listen-button small" @click="navigateToLogin">Listen</button>
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
      </div>
    </section>

    <!-- Best Sellers -->
    <section class="bestsellers-section">
      <div class="section-container">
        <h2>Best Sellers</h2>
        <div class="bestsellers-grid">
          <div v-for="book in bestSellers" :key="book.title" class="bestseller-card">
            <div class="book-image">
              <img :src="book.image" :alt="book.title">
              <div class="book-overlay">
                <button class="listen-button small" @click="navigateToLogin">Listen</button>
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
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <div class="section-container">
        <h2>Premium Features</h2>
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
        <h2>What Listeners Say</h2>
        <div class="testimonials-container">
          <button @click="prevTestimonial" class="nav-button prev">❮</button>
          <div class="testimonial">
            <p class="testimonial-text">"{{ testimonials[currentTestimonialIndex].text }}"</p>
            <div class="testimonial-author">
              <p class="author-name">{{ testimonials[currentTestimonialIndex].author }}</p>
              <p class="author-location">{{ testimonials[currentTestimonialIndex].location }}</p>
            </div>
          </div>
          <button @click="nextTestimonial" class="nav-button next">❯</button>
        </div>
        <div class="testimonial-dots">
          <span v-for="(_, index) in testimonials" :key="index" 
                class="dot" :class="{ active: index === currentTestimonialIndex }"
                @click="currentTestimonialIndex = index"></span>
        </div>
      </div>
    </section>

    <!-- Mobile Billing Section -->
    <section class="billing-section">
      <div class="section-container">
        <div class="billing-grid">
          <div class="billing-content">
            <h2>Audiobook Subscription</h2>
            <p class="billing-description">Unlimited access to over 100,000 premium audiobooks with simple phone billing.</p>
            
            <div class="pricing-box">
              <div class="pricing-header">
                <h3>Premium Listening</h3>
                <div class="pricing-amount">
                  <span class="price">€11.99</span>
                  <span class="period">/month</span>
                </div>
              </div>
              <ul class="pricing-features">
                <li><span class="check-icon">✓</span> Unlimited access to our entire audiobook library</li>
                <li><span class="check-icon">✓</span> New titles added every week</li>
                <li><span class="check-icon">✓</span> Download for offline listening</li>
                <li><span class="check-icon">✓</span> HD audio quality</li>
                <li><span class="check-icon">✓</span> Customizable listening experience</li>
                <li><span class="check-icon">✓</span> Cancel anytime</li>
              </ul>
              <div class="payment-method">
                <span class="payment-icon">📱</span>
                <p>Billed directly to your phone - no credit card needed</p>
              </div>
              <button class="pricing-button" @click="navigateToLogin">Subscribe Now</button>
            </div>
          </div>
          <div class="billing-visual">
            <div class="phone-mockup">
              <div class="phone-screen">
                <div class="player-interface">
                  <div class="book-cover"></div>
                  <div class="player-info">
                    <h4>Beyond the Stars</h4>
                    <p>Rebecca Jenkins</p>
                  </div>
                  <div class="player-progress">
                    <div class="progress-bar">
                      <div class="progress-filled" :style="{ width: `${progress}%` }"></div>
                    </div>
                    <div class="time-display">
                      <span>{{ currentTime }}</span>
                      <span>{{ totalTime }}</span>
                    </div>
                  </div>
                  <div class="player-controls">
                    <div class="control-button">⏮</div>
                    <div class="control-button play-pause">{{ isPlaying ? '⏸' : '▶' }}</div>
                    <div class="control-button">⏭</div>
                  </div>
                  <div class="payment-badge">
                    <div class="badge-icon">✓</div>
                    <div class="badge-text">Premium Active</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-container">
        <h2>Ready to Dive Into Amazing Stories?</h2>
        <p>Join thousands of listeners enjoying premium audiobooks</p>
        <button class="cta-button large" @click="navigateToLogin">Start Listening Now</button>
      </div>
    </section>
  </div>
</template>

<style scoped>
.audiobooks-page {
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  color: #1F2937;
  overflow-x: hidden;
}

.section-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

h2 {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 2rem;
  color: #6D28D9;
  text-align: center;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #6D28D9 0%, #A78BFA 100%);
  color: white;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 5rem 2rem;
  position: relative;
  overflow: hidden;
  min-height: 80vh;
}

.hero-content {
  max-width: 600px;
  z-index: 2;
}

.hero h1 {
  font-size: 3.5rem;
  font-weight: 900;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  position: relative;
}

.hero h1::after {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 0;
  width: 100px;
  height: 5px;
  background: #A78BFA;
  border-radius: 10px;
}

.subtitle {
  font-size: 1.5rem;
  margin-bottom: 2.5rem;
  opacity: 0.9;
  line-height: 1.5;
}

.cta-button {
  background: white;
  color: #6D28D9;
  font-size: 1.1rem;
  font-weight: 700;
  padding: 1rem 2.5rem;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.cta-button.large {
  font-size: 1.2rem;
  padding: 1.2rem 3rem;
}

.hero-visual {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

.headphones {
  width: 200px;
  height: 200px;
  border: 15px solid white;
  border-radius: 50%;
  position: relative;
}

.headphones:before, .headphones:after {
  content: '';
  position: absolute;
  width: 15px;
  height: 100px;
  background: white;
  top: -50px;
  border-radius: 10px;
}

.headphones:before {
  left: 20px;
  transform: rotate(-20deg);
}

.headphones:after {
  right: 20px;
  transform: rotate(20deg);
}

.sound-wave {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  gap: 8px;
}

.wave {
  width: 6px;
  height: 40px;
  background: white;
  border-radius: 3px;
  animation: wave 1.2s infinite ease-in-out;
}

.wave-1 {
  animation-delay: 0s;
}

.wave-2 {
  animation-delay: 0.3s;
  height: 60px;
}

.wave-3 {
  animation-delay: 0.6s;
  height: 80px;
}

.wave-4 {
  animation-delay: 0.9s;
  height: 60px;
}

@keyframes wave {
  0%, 100% {
    height: 40px;
  }
  50% {
    height: 100px;
  }
}

/* Featured Section */
.featured-section {
  padding: 6rem 0;
  background: white;
}

.featured-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
}

.featured-card {
  display: grid;
  grid-template-columns: 1fr 2fr;
  background: #F9FAFB;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.featured-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);
}

.book-image {
  position: relative;
  height: 100%;
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
  background: rgba(0, 0, 0, 0.5);
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
  background: #6D28D9;
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.listen-button:hover {
  background: #5B21B6;
  transform: scale(1.05);
}

.listen-button.small {
  padding: 0.6rem 1.5rem;
  font-size: 0.9rem;
}

.book-info {
  padding: 2rem;
}

.book-info h3 {
  color: #1F2937;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.book-meta {
  margin-bottom: 1.2rem;
}

.book-author {
  color: #4B5563;
  margin-bottom: 0.3rem;
}

.book-narrator {
  color: #6B7280;
  font-style: italic;
}

.book-stats {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-size: 0.95rem;
}

.book-rating {
  display: flex;
  align-items: center;
}

.star {
  color: #F59E0B;
  margin-right: 0.3rem;
}

.rating-value {
  font-weight: 600;
}

.book-duration {
  color: #6B7280;
}

.book-genre {
  display: inline-block;
  background: rgba(167, 139, 250, 0.1);
  color: #6D28D9;
  padding: 0.3rem 0.8rem;
  border-radius: 50px;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  font-weight: 500;
}

.book-description {
  color: #4B5563;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.book-actions {
  display: flex;
  gap: 1rem;
}

.sample-button {
  background: #6D28D9;
  color: white;
  padding: 0.7rem 1.5rem;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.sample-button::before {
  content: '';
  width: 0;
  height: 0;
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  border-left: 10px solid white;
  display: inline-block;
}

.sample-button:hover {
  background: #5B21B6;
}

/* Categories */
.categories-section {
  padding: 6rem 0;
  background: #F9FAFB;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.category-card {
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.category-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);
  background: #6D28D9;
}

.category-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  display: block;
}

.category-info h3 {
  color: #1F2937;
  font-size: 1.3rem;
  margin-bottom: 0.3rem;
  font-weight: 700;
  transition: color 0.3s ease;
}

.category-card:hover .category-info h3 {
  color: white;
}

.book-count {
  color: #6B7280;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.category-card:hover .book-count {
  color: rgba(255, 255, 255, 0.8);
}

/* New Releases */
.releases-section {
  padding: 6rem 0;
  background: white;
}

.releases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.release-card {
  background: #F9FAFB;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.release-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);
}

.release-card .book-image {
  height: 280px;
}

.new-badge {
  position: absolute;
  top: 15px;
  right: 15px;
  background: #6D28D9;
  color: white;
  font-size: 0.8rem;
  padding: 0.3rem 0.7rem;
  border-radius: 50px;
  font-weight: 600;
  z-index: 2;
}

.release-card .book-info {
  padding: 1.5rem;
}

.release-date {
  color: #6B7280;
  font-size: 0.9rem;
}

.book-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
}

/* Best Sellers */
.bestsellers-section {
  padding: 6rem 0;
  background: #F9FAFB;
}

.bestsellers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.bestseller-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.bestseller-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);
}

.bestseller-card .book-image {
  height: 280px;
}

.bestseller-card .book-info {
  padding: 1.2rem;
}

/* Features Section */
.features-section {
  padding: 6rem 0;
  background: white;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: #F9FAFB;
  padding: 2.5rem 2rem;
  border-radius: 1rem;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  text-align: center;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);
  background: linear-gradient(135deg, #6D28D9 0%, #A78BFA 100%);
  color: white;
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  display: block;
}

.feature-card h3 {
  color: #1F2937;
  font-size: 1.4rem;
  margin-bottom: 1rem;
  font-weight: 700;
  transition: color 0.3s ease;
}

.feature-card:hover h3 {
  color: white;
}

.feature-card p {
  color: #4B5563;
  line-height: 1.6;
  transition: color 0.3s ease;
}

.feature-card:hover p {
  color: rgba(255, 255, 255, 0.9);
}

/* Testimonials */
.testimonials-section {
  padding: 6rem 0;
  background: #F9FAFB;
}

.testimonials-container {
  display: flex;
  align-items: center;
  max-width: 900px;
  margin: 0 auto;
}

.testimonial {
  background: white;
  padding: 3rem;
  border-radius: 1rem;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.05);
  flex: 1;
}

.testimonial-text {
  font-size: 1.3rem;
  font-style: italic;
  color: #1F2937;
  line-height: 1.7;
  margin-bottom: 2rem;
  position: relative;
}

.testimonial-text::before {
  content: '"';
  position: absolute;
  left: -20px;
  top: -10px;
  font-size: 3rem;
  color: #A78BFA;
  opacity: 0.3;
  font-family: Georgia, serif;
}

.testimonial-author {
  text-align: right;
}

.author-name {
  font-weight: 700;
  color: #6D28D9;
  margin-bottom: 0.2rem;
}

.author-location {
  color: #6B7280;
}

.nav-button {
  background: #6D28D9;
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  border: none;
  cursor: pointer;
  margin: 0 2rem;
  transition: all 0.3s ease;
  box-shadow: 0 10px 25px rgba(109, 40, 217, 0.2);
}

.nav-button:hover {
  background: #5B21B6;
  transform: scale(1.1);
}

.testimonial-dots {
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  margin-top: 2rem;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #E5E7EB;
  cursor: pointer;
  transition: all 0.3s ease;
}

.dot.active {
  background: #6D28D9;
  transform: scale(1.2);
}

/* Billing Section */
.billing-section {
  padding: 6rem 0;
  background: white;
}

.billing-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.billing-content h2 {
  text-align: left;
  margin-bottom: 1.5rem;
}

.billing-description {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #4B5563;
  margin-bottom: 2rem;
}

.pricing-box {
  background: #F9FAFB;
  padding: 2.5rem;
  border-radius: 1.5rem;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.pricing-box:hover {
  transform: translateY(-10px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);
}

.pricing-header {
  text-align: center;
  margin-bottom: 2rem;
}

.pricing-header h3 {
  color: #1F2937;
  font-size: 1.8rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.pricing-amount {
  margin-bottom: 1rem;
}

.price {
  font-size: 3rem;
  font-weight: 800;
  color: #6D28D9;
}

.period {
  font-size: 1.1rem;
  color: #6B7280;
}

.pricing-features {
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
}

.pricing-features li {
  padding: 0.75rem 0;
  border-bottom: 1px solid #E5E7EB;
  display: flex;
  align-items: center;
}

.pricing-features li:last-child {
  border-bottom: none;
}

.check-icon {
  color: #6D28D9;
  margin-right: 1rem;
  font-weight: bold;
}

.payment-method {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 1rem;
  background: rgba(109, 40, 217, 0.05);
  border-radius: 0.5rem;
}

.payment-icon {
  font-size: 1.5rem;
}

.payment-method p {
  margin: 0;
  color: #4B5563;
  font-size: 0.95rem;
}

.pricing-button {
  background: #6D28D9;
  color: white;
  width: 100%;
  padding: 1rem;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.pricing-button:hover {
  background: #5B21B6;
  transform: translateY(-3px);
}

.phone-mockup {
  width: 280px;
  height: 550px;
  background: #1F2937;
  border-radius: 40px;
  padding: 15px;
  margin: 0 auto;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2);
  position: relative;
}

.phone-screen {
  width: 100%;
  height: 100%;
  background: #111827;
  border-radius: 30px;
  overflow: hidden;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
}

.player-interface {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.book-cover {
  width: 100%;
  aspect-ratio: 1/1;
  background: linear-gradient(135deg, #6D28D9 0%, #A78BFA 100%);
  border-radius: 20px;
  margin-bottom: 2rem;
  position: relative;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.player-info {
  margin-bottom: 2rem;
}

.player-info h4 {
  color: white;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.player-info p {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
}

.player-progress {
  margin-bottom: 2rem;
}

.progress-bar {
  height: 4px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
  margin-bottom: 0.5rem;
  position: relative;
}

.progress-filled {
  position: absolute;
  height: 100%;
  background: #A78BFA;
  border-radius: 2px;
  width: 35%;
}

.time-display {
  display: flex;
  justify-content: space-between;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.8rem;
}

.player-controls {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 2rem;
}

.control-button {
  color: white;
  font-size: 1.5rem;
  opacity: 0.7;
  cursor: pointer;
  transition: opacity 0.3s ease;
}

.control-button:hover {
  opacity: 1;
}

.control-button.play-pause {
  width: 60px;
  height: 60px;
  background: #6D28D9;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  opacity: 1;
  box-shadow: 0 5px 15px rgba(109, 40, 217, 0.3);
}

.payment-badge {
  background: #10B981;
  color: white;
  border-radius: 50px;
  padding: 0.7rem 1.2rem;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  margin-top: auto;
  align-self: center;
}

.badge-icon {
  width: 20px;
  height: 20px;
  background: white;
  color: #10B981;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.8rem;
}

.badge-text {
  font-weight: 600;
  font-size: 0.9rem;
}

/* CTA Section */
.cta-section {
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #6D28D9 0%, #A78BFA 100%);
  color: white;
  text-align: center;
}

.cta-container {
  max-width: 900px;
  margin: 0 auto;
}

.cta-section h2 {
  color: white;
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.cta-section p {
  font-size: 1.3rem;
  margin-bottom: 3rem;
  opacity: 0.9;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.cta-section .cta-button {
  background: white;
  color: #6D28D9;
}

/* Responsive Styles */
@media (max-width: 1200px) {
  .hero {
    grid-template-columns: 1fr;
    min-height: auto;
    padding: 4rem 2rem;
    text-align: center;
  }

  .hero h1::after {
    left: 50%;
    transform: translateX(-50%);
  }

  .hero-content {
    margin: 0 auto 4rem;
  }

  .featured-card {
    grid-template-columns: 1fr;
  }

  .featured-card .book-image {
    height: 300px;
  }

  .billing-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .billing-content {
    text-align: center;
    order: 1;
  }

  .billing-content h2 {
    text-align: center;
  }

  .pricing-box {
    max-width: 500px;
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.8rem;
  }

  .subtitle {
    font-size: 1.3rem;
  }

  .headphones {
    width: 180px;
    height: 180px;
    border-width: 12px;
  }

  .headphones:before, .headphones:after {
    width: 12px;
    height: 80px;
    top: -40px;
  }

  .wave {
    height: 30px;
    width: 5px;
  }

  .categories-grid, .releases-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }

  .bestsellers-grid {
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .testimonials-container {
    flex-direction: column;
    gap: 2rem;
  }

  .nav-button {
    margin: 0;
  }

  .testimonial {
    padding: 2rem;
  }

  .cta-section h2 {
    font-size: 2.5rem;
  }
}

@media (max-width: 640px) {
  .hero {
    padding: 3rem 1.5rem;
  }

  .hero h1 {
    font-size: 2.5rem;
  }

  .subtitle {
    font-size: 1.2rem;
  }
  
  h2 {
    font-size: 2rem;
  }

  .section-container {
    padding: 0 1.5rem;
  }

  section {
    padding: 4rem 0;
  }

  .headphones {
    width: 150px;
    height: 150px;
    border-width: 10px;
  }

  .headphones:before, .headphones:after {
    width: 10px;
    height: 70px;
    top: -35px;
  }

  .categories-grid {
    grid-template-columns: 1fr 1fr;
  }

  .bestsellers-grid, .releases-grid {
    grid-template-columns: 1fr;
  }

  .cta-section h2 {
    font-size: 2rem;
  }

  .cta-section p {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }

  .cta-button.large {
    padding: 1rem 2.5rem;
    font-size: 1.1rem;
  }

  .pricing-box {
    padding: 1.5rem;
  }

  .price {
    font-size: 2.5rem;
  }

  .phone-mockup {
    width: 250px;
    height: 480px;
  }

  .book-cover {
    margin-bottom: 1rem;
  }

  .player-info h4 {
    font-size: 1rem;
  }

  .player-controls {
    margin-bottom: 1rem;
  }

  .control-button.play-pause {
    width: 50px;
    height: 50px;
  }
}

@media (max-width: 480px) {
  .hero h1 {
    font-size: 2.2rem;
  }

  .categories-grid {
    grid-template-columns: 1fr;
  }

  .bestseller-card .book-image, .release-card .book-image {
    height: 220px;
  }

  .control-button {
    font-size: 1.2rem;
  }

  .control-button.play-pause {
    width: 45px;
    height: 45px;
    font-size: 1.5rem;
  }

  .cta-section h2 {
    font-size: 1.8rem;
  }

  .pricing-header h3 {
    font-size: 1.5rem;
  }
}
</style>