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
    title: 'The Quantum Paradox',
    author: 'Rebecca Jenkins',
    narrator: 'James Anderson',
    rating: 4.8,
    duration: '14h 27m',
    image: 'https://images.pexels.com/photos/1907785/pexels-photo-1907785.jpeg',
    genre: 'Sci-Fi Thriller',
    description: 'When a brilliant physicist discovers a way to manipulate reality, she finds herself caught in a dangerous game of international espionage and moral dilemmas.'
  },
  {
    title: 'Mind Mastery',
    author: 'Dr. Alexander Hayes',
    narrator: 'Sarah Mitchell',
    rating: 4.9,
    duration: '11h 45m',
    image: 'https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg',
    genre: 'Self-Development',
    description: 'A revolutionary approach to cognitive enhancement that combines cutting-edge neuroscience with practical techniques for improving focus, memory, and creative thinking.'
  },
  {
    title: 'The Last Expedition',
    author: 'Martin Lawrence',
    narrator: 'David Richards',
    rating: 4.7,
    duration: '13h 15m',
    image: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg',
    genre: 'Adventure',
    description: 'The thrilling account of an elite team of explorers attempting to reach one of Earth\'s last uncharted regions, facing extreme conditions and unexpected dangers.'
  }
]);

const newReleases = ref([
  {
    title: 'Stellar Origins',
    author: 'Emily Chen',
    releaseDate: 'July 15, 2025',
    image: 'https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg',
    genre: 'Sci-Fi Adventure'
  },
  {
    title: 'The Summit',
    author: 'Robert Thompson',
    releaseDate: 'July 10, 2025',
    image: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg',
    genre: 'Adventure'
  },
  {
    title: 'Whispers of the Past',
    author: 'Sophia Williams',
    releaseDate: 'July 5, 2025',
    image: 'https://images.pexels.com/photos/2099691/pexels-photo-2099691.jpeg',
    genre: 'Historical Fiction'
  },
  {
    title: 'Financial Freedom',
    author: 'Mark Stevens',
    releaseDate: 'July 1, 2025',
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
    image: 'https://images.pexels.com/photos/6373305/pexels-photo-6373305.jpeg'
  },
  {
    title: 'Leadership Principles',
    author: 'Christine Parker',
    genre: 'Business',
    rating: 4.8,
    image: 'https://images.pexels.com/photos/6932/woman-girl-teenager-book.jpg'
  },
  {
    title: 'Galactic Wars',
    author: 'Neil Richardson',
    genre: 'Science Fiction',
    rating: 4.7,
    image: 'https://images.pexels.com/photos/2372982/pexels-photo-2372982.jpeg'
  },
  {
    title: 'The Dragon\'s Crown',
    author: 'Laura Thompson',
    genre: 'Fantasy',
    rating: 4.8,
    image: 'https://images.pexels.com/photos/4170629/pexels-photo-4170629.jpeg'
  },
  {
    title: 'The Present Moment',
    author: 'Michael Stevens',
    genre: 'Self-Help',
    rating: 4.9,
    image: 'https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg'
  },
  {
    title: 'Ancient Civilizations',
    author: 'Sarah Johnson',
    genre: 'History',
    rating: 4.6,
    image: 'https://images.pexels.com/photos/3646105/pexels-photo-3646105.jpeg'
  }
]);

const features = ref([
  {
    title: 'Professional Narration',
    description: 'All titles narrated by professional voice actors and celebrity performers',
    icon: '🎙️'
  },
  {
    title: 'Offline Listening',
    description: 'Download any audiobook to listen without internet connection',
    icon: '📥'
  },
  {
    title: 'Adjustable Playback',
    description: 'Customize narration speed to suit your personal preference',
    icon: '⏩'
  },
  {
    title: 'Sleep Timer',
    description: 'Set a timer to automatically stop playback when you drift off',
    icon: '⏰'
  },
  {
    title: 'Cross-Device Sync',
    description: 'Continue listening from where you left off across all your devices',
    icon: '🔄'
  },
  {
    title: 'Bookmarking & Notes',
    description: 'Mark important passages and add notes for future reference',
    icon: '📝'
  }
]);

const testimonials = ref([
  {
    text: "The audiobook selection on GameOnLive is incredible. I've discovered so many great books during my commutes that I would have never otherwise read!",
    name: "Rebecca K.",
    location: "Vancouver, Canada"
  },
  {
    text: "The offline download feature has been perfect for my travels. I can load up my phone with audiobooks before a long flight and listen the entire journey.",
    name: "Thomas J.",
    location: "Copenhagen, Denmark"
  },
  {
    text: "The narration quality is exceptional. Having access to such a vast library with just one subscription has completely transformed how I consume books.",
    name: "Sophia M.",
    location: "Milan, Italy"
  }
]);

const currentTestimonial = ref(0);

const nextTestimonial = () => {
  currentTestimonial.value = (currentTestimonial.value + 1) % testimonials.value.length;
};

const prevTestimonial = () => {
  currentTestimonial.value = (currentTestimonial.value - 1 + testimonials.value.length) % testimonials.value.length;
};

const playingSample = ref({
  active: false,
  title: 'The Quantum Paradox',
  author: 'Rebecca Jenkins',
  image: 'https://images.pexels.com/photos/1907785/pexels-photo-1907785.jpeg',
  progress: 35,
  currentTime: '1:45',
  totalTime: '5:00'
});

const togglePlayingSample = () => {
  playingSample.value.active = !playingSample.value.active;
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
    </section>

    <!-- Featured Audiobooks -->
    <section class="featured-section">
      <div class="section-container">
        <div class="section-header">
          <h2>Editor's Picks</h2>
          <p>Handpicked audiobooks for an exceptional listening experience</p>
        </div>

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
              <button class="sample-button" @click="togglePlayingSample">Play Sample</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Categories -->
    <section class="categories-section">
      <div class="section-container">
        <div class="section-header">
          <h2>Browse Categories</h2>
          <p>Discover audiobooks in your favorite genres</p>
        </div>

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
        <div class="section-header">
          <h2>New Releases</h2>
          <p>The latest additions to our audiobook library</p>
        </div>

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
        <div class="section-header">
          <h2>Best Sellers</h2>
          <p>Our most popular audiobooks loved by listeners</p>
        </div>

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
        <div class="section-header">
          <h2>Premium Features</h2>
          <p>Enhance your listening experience with advanced audiobook capabilities</p>
        </div>

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
        <div class="section-header">
          <h2>What Listeners Say</h2>
        </div>

        <div class="testimonial-carousel">
          <button @click="prevTestimonial" class="testimonial-nav prev">❮</button>
          <div class="testimonial">
            <p class="testimonial-text">"{{ testimonials[currentTestimonial].text }}"</p>
            <div class="testimonial-author">
              <p class="author-name">{{ testimonials[currentTestimonial].name }}</p>
              <p class="author-location">{{ testimonials[currentTestimonial].location }}</p>
            </div>
          </div>
          <button @click="nextTestimonial" class="testimonial-nav next">❯</button>
        </div>

        <div class="testimonial-indicators">
          <span v-for="(_, index) in testimonials" :key="index" 
                class="indicator" :class="{ active: index === currentTestimonial }"
                @click="currentTestimonial = index"></span>
        </div>
      </div>
    </section>

    <!-- Mobile Billing Section -->
    <section class="billing-section">
      <div class="section-container">
        <div class="billing-container">
          <div class="billing-info">
            <h3>Audiobook Unlimited</h3>
            <div class="price-tag">
              <span class="price-amount">$11.99</span>
              <span class="price-period">/month</span>
            </div>
            <ul class="billing-features">
              <li><span class="check">✓</span> Unlimited access to 100,000+ audiobooks</li>
              <li><span class="check">✓</span> New titles added every week</li>
              <li><span class="check">✓</span> Professional narration by top voice actors</li>
              <li><span class="check">✓</span> Download for offline listening</li>
              <li><span class="check">✓</span> Full access to all premium features</li>
              <li><span class="check">✓</span> Cancel anytime</li>
            </ul>
            <p class="billing-note">Billed directly through your mobile carrier - no credit card needed</p>
            <button class="billing-button" @click="navigateToLogin">Subscribe Now</button>
          </div>
          <div class="billing-image">
            <img src="https://images.pexels.com/photos/3756879/pexels-photo-3756879.jpeg" alt="Audiobook listening">
          </div>
        </div>
      </div>
    </section>

    <!-- Audio Player -->
    <div v-if="playingSample.active" class="audio-player">
      <div class="player-content">
        <div class="player-left">
          <img :src="playingSample.image" :alt="playingSample.title" class="player-image">
        </div>
        <div class="player-center">
          <h3 class="player-title">{{ playingSample.title }}</h3>
          <p class="player-author">{{ playingSample.author }}</p>
          <div class="progress-bar-container">
            <div class="progress-bar" :style="{ width: playingSample.progress + '%' }"></div>
          </div>
          <div class="time-display">
            <span class="current-time">{{ playingSample.currentTime }}</span>
            <span class="time-separator">/</span>
            <span class="total-time">{{ playingSample.totalTime }}</span>
          </div>
        </div>
        <div class="player-right">
          <button class="player-control rewind" @click="navigateToLogin">⏪</button>
          <button class="player-control play-pause" @click="togglePlayingSample">
            {{ playingSample.active ? '⏸' : '▶' }}
          </button>
          <button class="player-control forward" @click="navigateToLogin">⏩</button>
          <button class="player-control close" @click="togglePlayingSample">✖</button>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-content">
        <h2>Ready to Dive Into Amazing Stories?</h2>
        <p>Join thousands of listeners enjoying premium audiobooks worldwide</p>
        <button class="cta-button" @click="navigateToLogin">Get Started Now</button>
      </div>
    </section>
  </div>
</template>

<style scoped>
.audiobooks-page {
  color: #333;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  position: relative;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #0055FF 0%, #00CCFF 100%);
  background-image: url('https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg');
  background-size: cover;
  background-position: center;
  background-blend-mode: overlay;
  color: white;
  padding: 10rem 2rem 8rem;
  text-align: center;
  position: relative;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(0, 85, 255, 0.85) 0%, rgba(0, 204, 255, 0.85) 100%);
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
}

.hero h1 {
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  text-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.subtitle {
  font-size: 1.5rem;
  opacity: 0.9;
  margin-bottom: 2.5rem;
}

.cta-button {
  background: white;
  color: #0055FF;
  font-size: 1.2rem;
  padding: 1rem 3rem;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

/* Section Container */
.section-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 2rem;
}

.section-header {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;
}

.section-header h2 {
  color: #0055FF;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.section-header p {
  color: #666;
  font-size: 1.2rem;
}

/* Featured Section */
.featured-section {
  background: white;
}

.featured-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
}

.featured-card {
  display: grid;
  grid-template-columns: minmax(300px, 1fr) 2fr;
  background: #f5f8ff;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 85, 255, 0.07);
  transition: transform 0.3s ease;
}

.featured-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 85, 255, 0.15);
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
  background: #0055FF;
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.listen-button:hover {
  background: #00CCFF;
  transform: scale(1.05);
}

.listen-button.small {
  padding: 0.6rem 1.5rem;
  font-size: 0.9rem;
}

.new-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #0055FF;
  color: white;
  font-size: 0.8rem;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  font-weight: 600;
}

.book-info {
  padding: 2rem;
}

.book-info h3 {
  color: #0055FF;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.book-author {
  color: #444;
  margin-bottom: 0.3rem;
  font-size: 1rem;
}

.book-narrator {
  color: #666;
  margin-bottom: 1rem;
  font-size: 0.95rem;
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
  color: #666;
}

.book-genre {
  display: inline-block;
  background: #e6f0ff;
  color: #0055FF;
  padding: 0.3rem 0.7rem;
  border-radius: 50px;
  font-size: 0.85rem;
  margin-bottom: 1rem;
  font-weight: 500;
}

.book-description {
  color: #444;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.sample-button {
  background: #0055FF;
  color: white;
  padding: 0.7rem 1.5rem;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
}

.sample-button::before {
  content: '▶';
  margin-right: 0.5rem;
}

.sample-button:hover {
  background: #00CCFF;
  transform: translateY(-3px);
}

/* Categories */
.categories-section {
  background: #f5f8ff;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.category-card {
  background: white;
  display: flex;
  align-items: center;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 10px 20px rgba(0, 85, 255, 0.07);
  transition: transform 0.3s ease;
}

.category-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 85, 255, 0.15);
}

.category-icon {
  font-size: 2.5rem;
  margin-right: 1rem;
}

.category-info h3 {
  color: #0055FF;
  margin-bottom: 0.3rem;
}

.book-count {
  color: #666;
  font-size: 0.85rem;
}

/* New Releases */
.releases-section {
  background: white;
}

.releases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.release-card {
  background: #f5f8ff;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 85, 255, 0.07);
  transition: transform 0.3s ease;
}

.release-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 85, 255, 0.15);
}

.release-card .book-image {
  height: 250px;
}

.release-date {
  color: #666;
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
  background: #f5f8ff;
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
  box-shadow: 0 10px 20px rgba(0, 85, 255, 0.07);
  transition: transform 0.3s ease;
}

.bestseller-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 85, 255, 0.15);
}

.bestseller-card .book-image {
  height: 250px;
}

.bestseller-card .book-info {
  padding: 1.2rem;
}

.bestseller-card .book-genre {
  background: none;
  padding: 0;
  margin: 0;
  color: #0055FF;
}

/* Features */
.features-section {
  background: white;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: #f5f8ff;
  padding: 2.5rem 2rem;
  border-radius: 1rem;
  box-shadow: 0 10px 20px rgba(0, 85, 255, 0.07);
  transition: transform 0.3s ease;
  text-align: center;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 85, 255, 0.15);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  display: block;
}

.feature-card h3 {
  color: #0055FF;
  font-size: 1.4rem;
  margin-bottom: 1rem;
}

.feature-card p {
  color: #444;
  line-height: 1.6;
}

/* Testimonials */
.testimonials-section {
  background: #f5f8ff;
}

.testimonial-carousel {
  display: flex;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
  gap: 2rem;
}

.testimonial {
  background: white;
  padding: 2.5rem;
  border-radius: 1rem;
  box-shadow: 0 10px 20px rgba(0, 85, 255, 0.07);
  flex: 1;
}

.testimonial-text {
  font-size: 1.2rem;
  font-style: italic;
  color: #444;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  position: relative;
}

.testimonial-text::before,
.testimonial-text::after {
  content: '"';
  font-size: 2rem;
  color: #0055FF;
  font-family: Georgia, serif;
}

.testimonial-author {
  text-align: right;
}

.author-name {
  color: #0055FF;
  font-weight: 700;
  margin-bottom: 0.3rem;
}

.author-location {
  color: #666;
  font-size: 0.9rem;
}

.testimonial-nav {
  width: 45px;
  height: 45px;
  background: #0055FF;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 85, 255, 0.2);
}

.testimonial-nav:hover {
  background: #00CCFF;
  transform: scale(1.1);
}

.testimonial-indicators {
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  margin-top: 2rem;
}

.indicator {
  width: 10px;
  height: 10px;
  background: #ddd;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator.active {
  background: #0055FF;
  transform: scale(1.2);
}

/* Audio Player */
.audio-player {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  box-shadow: 0 -5px 20px rgba(0, 85, 255, 0.1);
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
  color: #333;
  margin-bottom: 0.3rem;
}

.player-author {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.progress-bar-container {
  height: 4px;
  background: #e6e6e6;
  border-radius: 2px;
  margin-bottom: 0.3rem;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background: #0055FF;
  border-radius: 2px;
}

.time-display {
  display: flex;
  justify-content: flex-start;
  color: #666;
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
  color: #444;
  transition: color 0.3s ease;
}

.player-control:hover {
  color: #0055FF;
}

.player-control.play-pause {
  width: 40px;
  height: 40px;
  background: #0055FF;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
}

.player-control.play-pause:hover {
  background: #00CCFF;
}

.player-control.close {
  font-size: 1.2rem;
  color: #666;
  margin-left: 1rem;
}

/* Billing Section */
.billing-section {
  background: white;
}

.billing-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.billing-info {
  display: flex;
  flex-direction: column;
}

.billing-info h3 {
  font-size: 2rem;
  color: #0055FF;
  margin-bottom: 1.5rem;
}

.price-tag {
  margin-bottom: 2rem;
}

.price-amount {
  font-size: 3.5rem;
  font-weight: 800;
  color: #0055FF;
}

.price-period {
  font-size: 1.2rem;
  color: #666;
}

.billing-features {
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
}

.billing-features li {
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;
  color: #444;
  font-size: 1.1rem;
  line-height: 1.4;
}

.check {
  color: #0055FF;
  font-weight: bold;
  margin-right: 0.8rem;
  flex-shrink: 0;
}

.billing-note {
  font-style: italic;
  color: #666;
  margin-bottom: 2rem;
}

.billing-button {
  background: #0055FF;
  color: white;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: flex-start;
}

.billing-button:hover {
  background: #00CCFF;
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 85, 255, 0.2);
}

.billing-image {
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 85, 255, 0.15);
  aspect-ratio: 4/3;
}

.billing-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* CTA Section */
.cta-section {
  background: linear-gradient(135deg, #0055FF 0%, #00CCFF 100%);
  color: white;
  text-align: center;
  padding: 5rem 2rem;
}

.cta-content {
  max-width: 800px;
  margin: 0 auto;
}

.cta-section h2 {
  font-size: 2.8rem;
  margin-bottom: 1.5rem;
}

.cta-section p {
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  opacity: 0.9;
}

.cta-section .cta-button {
  background: white;
  color: #0055FF;
}

.cta-section .cta-button:hover {
  background: #f5f5f5;
}

/* Responsive Styles */
@media (max-width: 1200px) {
  .featured-card {
    grid-template-columns: 1fr;
  }
  
  .featured-card .book-image {
    height: 300px;
  }
  
  .billing-container {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .billing-image {
    order: -1;
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
  }
  
  .player-content {
    padding: 0 1rem;
  }
}

@media (max-width: 992px) {
  .bestsellers-grid {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  }
  
  .releases-grid {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 8rem 1.5rem 6rem;
  }
  
  .hero h1 {
    font-size: 3rem;
  }
  
  .section-container {
    padding: 4rem 1.5rem;
  }
  
  .section-header h2 {
    font-size: 2rem;
  }
  
  .player-content {
    flex-direction: column;
    align-items: center;
  }
  
  .player-left {
    margin-right: 0;
    margin-bottom: 1rem;
  }
  
  .player-center {
    width: 100%;
    margin-bottom: 1rem;
    text-align: center;
  }
  
  .player-right {
    margin-top: 1rem;
  }
  
  .testimonial-carousel {
    flex-direction: column;
  }
  
  .testimonial-nav {
    margin: 1rem 0;
  }
  
  .cta-section h2 {
    font-size: 2.2rem;
  }
  
  .billing-button {
    align-self: center;
    width: 100%;
  }
}

@media (max-width: 576px) {
  .hero h1 {
    font-size: 2.5rem;
  }
  
  .cta-button {
    padding: 0.8rem 2rem;
    font-size: 1rem;
  }
  
  .categories-grid {
    grid-template-columns: 1fr;
  }
  
  .bestsellers-grid, .releases-grid {
    grid-template-columns: 1fr;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .billing-info h3 {
    font-size: 1.8rem;
  }
  
  .price-amount {
    font-size: 3rem;
  }
  
  .cta-section h2 {
    font-size: 1.8rem;
  }
  
  .audio-player {
    padding: 0.8rem 0.5rem;
  }
  
  .player-control {
    font-size: 1.2rem;
    margin: 0 0.3rem;
  }
}
</style>