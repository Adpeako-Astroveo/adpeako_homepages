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
    title: 'The Midnight Chronicles',
    author: 'Rebecca Jenkins',
    narrator: 'James Anderson',
    rating: 4.8,
    duration: '14h 27m',
    image: 'https://images.pexels.com/photos/1907785/pexels-photo-1907785.jpeg',
    genre: 'Mystery Thriller',
    description: 'When a brilliant detective takes on a cold case that\'s haunted her city for decades, she uncovers a web of secrets that puts her own life in danger.'
  },
  {
    title: 'Beyond the Stars',
    author: 'Dr. Alexander Hayes',
    narrator: 'Sarah Mitchell',
    rating: 4.9,
    duration: '11h 45m',
    image: 'https://images.pexels.com/photos/2832382/pexels-photo-2832382.jpeg',
    genre: 'Science Fiction',
    description: 'A visionary scientist discovers a way to communicate across vast interstellar distances, connecting humanity with an alien civilization that will change our understanding of the universe.'
  },
  {
    title: 'Mind Mastery',
    author: 'Martin Lawrence',
    narrator: 'David Richards',
    rating: 4.7,
    duration: '9h 15m',
    image: 'https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg',
    genre: 'Self-Development',
    description: 'Learn powerful cognitive techniques to overcome mental barriers, enhance productivity, and achieve your fullest potential in both personal and professional life.'
  }
]);

const newReleases = ref([
  {
    title: 'Quantum Legacy',
    author: 'Emily Chen',
    releaseDate: 'May 15, 2025',
    image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg',
    genre: 'Sci-Fi Adventure'
  },
  {
    title: 'The Summit',
    author: 'Robert Thompson',
    releaseDate: 'May 12, 2025',
    image: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg',
    genre: 'Adventure'
  },
  {
    title: 'Whispers of the Past',
    author: 'Sophia Williams',
    releaseDate: 'May 10, 2025',
    image: 'https://images.pexels.com/photos/1831744/pexels-photo-1831744.jpeg',
    genre: 'Historical Fiction'
  },
  {
    title: 'Financial Freedom',
    author: 'Mark Stevens',
    releaseDate: 'May 8, 2025',
    image: 'https://images.pexels.com/photos/47344/dollar-currency-money-us-dollar-47344.jpeg',
    genre: 'Business & Finance'
  }
]);

const bestSellers = ref([
  {
    title: 'The Hidden Code',
    author: 'Daniel Wright',
    genre: 'Mystery',
    rating: 4.9,
    image: 'https://images.pexels.com/photos/169738/pexels-photo-169738.jpeg'
  },
  {
    title: 'Leadership Principles',
    author: 'Christine Parker',
    genre: 'Business',
    rating: 4.8,
    image: 'https://images.pexels.com/photos/6932/woman-girl-teenager-book.jpg'
  },
  {
    title: 'Galactic Empire',
    author: 'Neil Richardson',
    genre: 'Science Fiction',
    rating: 4.7,
    image: 'https://images.pexels.com/photos/1906658/pexels-photo-1906658.jpeg'
  },
  {
    title: 'The Dragon Crown',
    author: 'Laura Thompson',
    genre: 'Fantasy',
    rating: 4.8,
    image: 'https://images.pexels.com/photos/1516440/pexels-photo-1516440.jpeg'
  },
  {
    title: 'Mindful Living',
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
    image: 'https://images.pexels.com/photos/2672130/pexels-photo-2672130.jpeg'
  }
]);

const features = ref([
  {
    title: 'Professional Narration',
    description: 'All titles narrated by award-winning voice actors and celebrities',
    icon: '🎙️'
  },
  {
    title: 'Offline Listening',
    description: 'Download any audiobook to listen without internet connection',
    icon: '📥'
  },
  {
    title: 'Customizable Playback',
    description: 'Adjust narration speed and set bookmarks for important passages',
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
    title: 'Curated Collections',
    description: 'Discover new favorites with personalized recommendations',
    icon: '📚'
  }
]);

const testimonials = ref([
  {
    text: "The narrator quality on Timber Tube is exceptional. I've switched all my reading to listening because of how engaging the performances are.",
    author: "Emma L.",
    location: "Dublin"
  },
  {
    text: "Being able to download audiobooks for my commute has transformed my daily routine. I'm getting through so many more books now!",
    author: "Thomas K.",
    location: "Barcelona"
  },
  {
    text: "The sleep timer feature is perfect for bedtime listening. I love that my place is saved automatically when I fall asleep.",
    author: "Sophia R.",
    location: "Vienna"
  }
]);

const currentTestimonialIndex = ref(0);

const nextTestimonial = () => {
  currentTestimonialIndex.value = (currentTestimonialIndex.value + 1) % testimonials.value.length;
};

const prevTestimonial = () => {
  currentTestimonialIndex.value = (currentTestimonialIndex.value - 1 + testimonials.value.length) % testimonials.value.length;
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
    <section class="categories-section">
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
    <section class="releases-section">
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
    <section class="bestsellers-section">
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
    <section class="features-section">
      <h2>Premium Audiobook Features</h2>
      <div class="features-grid">
        <div v-for="feature in features" :key="feature.title" class="feature-card">
          <span class="feature-icon">{{ feature.icon }}</span>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="testimonials-section">
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

    <!-- Mobile Billing Section -->
    <section class="billing-section">
      <h2>Audiobook Subscription</h2>
      <div class="billing-container">
        <div class="billing-info">
          <h3>Unlimited Listening</h3>
          <div class="price-tag">
            <span class="price-amount">฿11.99</span>
            <span class="price-period">/month</span>
          </div>
          <ul class="billing-features">
            <li><span class="check">✓</span> Access to 100,000+ premium audiobooks</li>
            <li><span class="check">✓</span> New titles added weekly</li>
            <li><span class="check">✓</span> Unlimited listening on any device</li>
            <li><span class="check">✓</span> Offline downloads for on-the-go listening</li>
            <li><span class="check">✓</span> High-quality audio (up to 320kbps)</li>
            <li><span class="check">✓</span> Cancel anytime with no penalties</li>
          </ul>
          <p class="billing-note">Billed directly to your phone - no credit card required</p>
          <button class="billing-button" @click="navigateToLogin">Subscribe Now</button>
        </div>
        <div class="billing-image">
          <img src="https://images.pexels.com/photos/6794158/pexels-photo-6794158.jpeg" alt="Listening to Audiobooks">
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <h2>Ready to Dive Into Amazing Stories?</h2>
      <p>Join thousands of listeners enjoying premium audiobooks worldwide</p>
      <button class="cta-button" @click="navigateToLogin">Start Listening Today</button>
    </section>
  </div>
</template>

<style scoped>
.audiobooks-page {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: #333;
  padding-top: 64px;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #3B52A5 0%, #5D72D9 100%);
  background-image: url('https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg');
  background-size: cover;
  background-position: center;
  background-blend-mode: overlay;
  color: white;
  padding: 8rem 2rem;
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
  background: linear-gradient(135deg, rgba(59, 82, 165, 0.8) 0%, rgba(93, 114, 217, 0.8) 100%);
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
}

.hero h1 {
  font-size: 4rem;
  font-weight: 900;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.subtitle {
  font-size: 1.5rem;
  opacity: 0.9;
  margin-bottom: 2.5rem;
}

.cta-button {
  background: white;
  color: #3B52A5;
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

/* Section styling */
section {
  padding: 5rem 2rem;
}

section:nth-child(odd) {
  background: #f8f9fa;
}

section:nth-child(even) {
  background: white;
}

section h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #3B52A5;
  margin-bottom: 3rem;
  font-weight: 800;
}

/* Featured Audiobooks */
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
  box-shadow: 0 15px 30px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.featured-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
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
  background: #3B52A5;
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.listen-button.small {
  padding: 0.6rem 1.5rem;
  font-size: 0.9rem;
}

.listen-button:hover {
  background: #5D72D9;
  transform: scale(1.05);
}

.new-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #3B52A5;
  color: white;
  font-size: 0.8rem;
  padding: 0.4rem 0.8rem;
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
  font-weight: 700;
}

.book-author {
  color: #444;
  font-size: 0.95rem;
  margin-bottom: 0.3rem;
}

.book-narrator {
  color: #666;
  font-size: 0.9rem;
  font-style: italic;
  margin-bottom: 1rem;
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
  background: #f0f4f8;
  color: #3B52A5;
  padding: 0.3rem 0.7rem;
  border-radius: 50px;
  font-size: 0.85rem;
  margin-bottom: 1rem;
  font-weight: 500;
}

.book-description {
  color: #444;
  line-height: 1.6;
  font-size: 0.95rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Categories */
.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.category-card {
  background: white;
  display: flex;
  align-items: center;
  padding: 1.8rem;
  border-radius: 1rem;
  box-shadow: 0 15px 30px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.category-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
  background: #3B52A5;
}

.category-icon {
  font-size: 3rem;
  margin-right: 1.5rem;
}

.category-card:hover .category-icon {
  color: white;
}

.category-info h3 {
  color: #333;
  font-size: 1.3rem;
  margin-bottom: 0.3rem;
}

.category-card:hover .category-info h3 {
  color: white;
}

.book-count {
  color: #666;
  font-size: 0.9rem;
}

.category-card:hover .book-count {
  color: rgba(255, 255, 255, 0.8);
}

/* New Releases */
.releases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.release-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.release-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}

.release-card .book-image {
  height: 180px;
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
.bestsellers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.bestseller-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.bestseller-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}

.bestseller-card .book-image {
  height: 230px;
}

.bestseller-card .book-info {
  padding: 1.2rem;
}

/* Features */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  background: white;
  padding: 2.5rem;
  border-radius: 1rem;
  box-shadow: 0 15px 30px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  text-align: center;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  display: block;
}

.feature-card h3 {
  color: #3B52A5;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.feature-card p {
  color: #666;
  line-height: 1.6;
}

/* Testimonials */
.testimonials-section {
  text-align: center;
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
  box-shadow: 0 15px 30px rgba(0,0,0,0.1);
  flex: 1;
}

.testimonial-text {
  font-size: 1.3rem;
  font-style: italic;
  color: #444;
  line-height: 1.7;
  position: relative;
  margin-bottom: 2rem;
}

.testimonial-text::before,
.testimonial-text::after {
  content: '"';
  font-size: 2rem;
  color: #3B52A5;
  font-family: Georgia, serif;
}

.testimonial-author {
  text-align: right;
}

.author-name {
  font-weight: 700;
  color: #333;
  margin-bottom: 0.3rem;
}

.author-location {
  color: #666;
}

.testimonial-nav {
  background: #3B52A5;
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
  margin: 0 1.5rem;
  transition: all 0.3s ease;
}

.testimonial-nav:hover {
  background: #5D72D9;
  transform: scale(1.1);
}

.testimonial-indicators {
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  margin-top: 2rem;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #ddd;
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator.active {
  background: #3B52A5;
  transform: scale(1.2);
}

/* Billing Section */
.billing-container {
  display: flex;
  align-items: center;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
}

.billing-info {
  flex: 1;
}

.billing-info h3 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #3B52A5;
}

.price-tag {
  margin-bottom: 2rem;
}

.price-amount {
  font-size: 3.5rem;
  font-weight: 800;
  color: #3B52A5;
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
  align-items: center;
  margin-bottom: 1rem;
  color: #444;
  font-size: 1.1rem;
}

.check {
  color: #3B52A5;
  font-weight: bold;
  margin-right: 0.8rem;
}

.billing-note {
  font-style: italic;
  color: #666;
  margin-bottom: 2rem;
}

.billing-button {
  background: #3B52A5;
  color: white;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.billing-button:hover {
  background: #5D72D9;
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(59, 82, 165, 0.3);
}

.billing-image {
  flex: 1;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}

.billing-image img {
  width: 100%;
  display: block;
  object-fit: cover;
}

/* CTA Section */
.cta-section {
  background: linear-gradient(135deg, #3B52A5 0%, #5D72D9 100%);
  color: white;
  text-align: center;
  padding: 6rem 2rem;
}

.cta-section h2 {
  color: white;
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.cta-section p {
  font-size: 1.3rem;
  margin-bottom: 2.5rem;
  opacity: 0.9;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.cta-section .cta-button {
  background: white;
  color: #3B52A5;
}

.cta-section .cta-button:hover {
  background: #f8f9fa;
}

/* Responsive Styles */
@media (max-width: 1200px) {
  .featured-grid {
    grid-template-columns: 1fr;
  }
  
  .bestsellers-grid {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  }
}

@media (max-width: 992px) {
  .billing-container {
    flex-direction: column-reverse;
    gap: 2rem;
  }
  
  .billing-image {
    width: 100%;
    max-width: 600px;
  }
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 3rem;
  }
  
  .subtitle {
    font-size: 1.3rem;
  }
  
  section {
    padding: 4rem 1.5rem;
  }
  
  section h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  
  .categories-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
  
  .releases-grid {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  }
  
  .testimonials-container {
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .testimonial-nav {
    margin: 0;
  }
  
  .testimonial {
    padding: 2rem;
  }
  
  .cta-section h2 {
    font-size: 2.5rem;
  }
}

@media (max-width: 576px) {
  .hero {
    padding: 6rem 1rem;
  }
  
  .hero h1 {
    font-size: 2.5rem;
  }
  
  .subtitle {
    font-size: 1.1rem;
  }
  
  .cta-button {
    padding: 0.8rem 2rem;
    font-size: 1.1rem;
  }
  
  .categories-grid {
    grid-template-columns: 1fr 1fr;
  }
  
  .releases-grid,
  .bestsellers-grid {
    grid-template-columns: 1fr;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .feature-card {
    padding: 2rem 1.5rem;
  }
  
  .testimonial-text {
    font-size: 1.1rem;
  }
  
  .billing-info h3 {
    font-size: 1.8rem;
  }
  
  .price-amount {
    font-size: 3rem;
  }
  
  .cta-section h2 {
    font-size: 2rem;
  }
  
  .cta-section p {
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .categories-grid,
  .releases-grid,
  .bestsellers-grid {
    grid-template-columns: 1fr;
  }
  
  .category-card {
    padding: 1.5rem;
  }
  
  .category-icon {
    font-size: 2.5rem;
    margin-right: 1rem;
  }
  
  .category-info h3 {
    font-size: 1.1rem;
  }
  
  .book-count {
    font-size: 0.8rem;
  }
}
</style>