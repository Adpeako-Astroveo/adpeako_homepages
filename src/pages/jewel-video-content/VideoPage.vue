<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Featured content
const featuredContent = ref([
  {
    title: 'Celestial Voyagers',
    genre: 'Sci-Fi Epic',
    director: 'Elena Rodriguez',
    rating: 9.4,
    image: 'https://images.pexels.com/photos/1738721/pexels-photo-1738721.jpeg',
    description: 'A crew of interstellar explorers discovers an ancient alien artifact that could change humanity\'s destiny forever.'
  },
  {
    title: 'Midnight Chronicles',
    genre: 'Mystery Thriller',
    director: 'Marcus Chen',
    rating: 9.1,
    image: 'https://images.pexels.com/photos/3082341/pexels-photo-3082341.jpeg',
    description: 'A detective with a troubled past unravels a conspiracy that threatens to expose dark secrets of an entire city.'
  },
  {
    title: 'Kingdom of Shadows',
    genre: 'Fantasy Series',
    director: 'Sophia Williams',
    rating: 9.6,
    image: 'https://images.pexels.com/photos/413195/pexels-photo-413195.jpeg',
    description: 'In a realm where magic and intrigue collide, five houses battle for control of the eternal throne.'
  }
]);

// Trending shows
const trendingShows = ref([
  {
    title: 'Urban Legends',
    seasons: 3,
    episodes: 28,
    image: 'https://images.pexels.com/photos/2668308/pexels-photo-2668308.jpeg',
    rating: 9.2
  },
  {
    title: 'Medical Frontline',
    seasons: 5,
    episodes: 62,
    image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg',
    rating: 8.9
  },
  {
    title: 'The Agency',
    seasons: 4,
    episodes: 40,
    image: 'https://images.pexels.com/photos/937980/pexels-photo-937980.jpeg',
    rating: 9.0
  },
  {
    title: 'Culinary Masters',
    seasons: 7,
    episodes: 84,
    image: 'https://images.pexels.com/photos/5175610/pexels-photo-5175610.jpeg',
    rating: 9.3
  }
]);

// Popular movies
const popularMovies = ref([
  {
    title: 'The Last Stand',
    year: 2023,
    genre: 'Action',
    image: 'https://images.pexels.com/photos/3945317/pexels-photo-3945317.jpeg',
    rating: 8.7
  },
  {
    title: 'Eternal Memories',
    year: 2023,
    genre: 'Romance',
    image: 'https://images.pexels.com/photos/5077069/pexels-photo-5077069.jpeg',
    rating: 8.5
  },
  {
    title: 'The Quantum Effect',
    year: 2023,
    genre: 'Sci-Fi',
    image: 'https://images.pexels.com/photos/3731256/pexels-photo-3731256.jpeg',
    rating: 9.0
  },
  {
    title: 'Jungle Adventure',
    year: 2023,
    genre: 'Adventure',
    image: 'https://images.pexels.com/photos/2406731/pexels-photo-2406731.jpeg',
    rating: 8.4
  },
  {
    title: 'Mystery of the Lost City',
    year: 2023,
    genre: 'Mystery',
    image: 'https://images.pexels.com/photos/3738071/pexels-photo-3738071.jpeg',
    rating: 8.9
  },
  {
    title: 'The Comedian',
    year: 2023,
    genre: 'Comedy',
    image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg',
    rating: 8.6
  }
]);

// Video categories
const categories = ref([
  {
    name: 'Action',
    count: '250+ titles',
    image: 'https://images.pexels.com/photos/1535162/pexels-photo-1535162.jpeg'
  },
  {
    name: 'Comedy',
    count: '180+ titles',
    image: 'https://images.pexels.com/photos/5474295/pexels-photo-5474295.jpeg'
  },
  {
    name: 'Drama',
    count: '300+ titles',
    image: 'https://images.pexels.com/photos/2531728/pexels-photo-2531728.jpeg'
  },
  {
    name: 'Horror',
    count: '120+ titles',
    image: 'https://images.pexels.com/photos/3328823/pexels-photo-3328823.jpeg'
  },
  {
    name: 'Sci-Fi',
    count: '150+ titles',
    image: 'https://images.pexels.com/photos/4145354/pexels-photo-4145354.jpeg'
  },
  {
    name: 'Documentary',
    count: '200+ titles',
    image: 'https://images.pexels.com/photos/9811796/pexels-photo-9811796.jpeg'
  }
]);

// Premium features
const features = ref([
  {
    title: '4K Ultra HD',
    description: 'Experience stunning visuals with ultra-high definition quality',
    icon: '📺'
  },
  {
    title: 'Offline Viewing',
    description: 'Download content to watch on-the-go without using data',
    icon: '📱'
  },
  {
    title: 'Multiple Profiles',
    description: 'Create up to 6 customized profiles for your household',
    icon: '👨‍👩‍👧‍👦'
  },
  {
    title: 'No Ads',
    description: 'Enjoy uninterrupted entertainment with zero commercials',
    icon: '🚫'
  }
]);

const handleSubscribe = () => {
  router.push('/jewel-video-content/payment');
};

const handleWatchNow = (contentTitle) => {
  router.push('/login');
};
</script>

<template>
  <div class="video-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <span class="badge">PREMIUM VIDEO</span>
        <h1>Unlimited 4K Streaming</h1>
        <p>Movies. Shows. Documentaries. All in one place.</p>
        <div class="hero-actions">
          <button @click="handleSubscribe" class="primary-button">Start Free Trial</button>
          <button @click="handleWatchNow('featured')" class="secondary-button">
            <span class="play-icon">▶</span> Watch Featured
          </button>
        </div>
      </div>
      <div class="hero-backdrop"></div>
    </section>

    <!-- Featured Content Section -->
    <section class="featured-section">
      <div class="container">
        <h2>Featured Content</h2>
        <div class="featured-slider">
          <div v-for="content in featuredContent" :key="content.title" class="featured-card">
            <div class="featured-image">
              <img :src="content.image" :alt="content.title">
              <div class="content-overlay">
                <div class="content-details">
                  <div class="rating">★ {{ content.rating }}</div>
                  <div class="genre-badge">{{ content.genre }}</div>
                  <h3>{{ content.title }}</h3>
                  <p class="director">Directed by {{ content.director }}</p>
                  <p class="description">{{ content.description }}</p>
                  <button @click="handleWatchNow(content.title)" class="watch-button">Watch Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Trending Shows Section -->
    <section class="trending-section">
      <div class="container">
        <h2>Trending Shows</h2>
        <div class="shows-grid">
          <div v-for="show in trendingShows" :key="show.title" class="show-card">
            <div class="show-image">
              <img :src="show.image" :alt="show.title">
              <div class="show-overlay">
                <button @click="handleWatchNow(show.title)" class="play-button">
                  <span>▶</span>
                </button>
                <div class="rating">★ {{ show.rating }}</div>
              </div>
            </div>
            <div class="show-info">
              <h3>{{ show.title }}</h3>
              <p>{{ show.seasons }} Seasons | {{ show.episodes }} Episodes</p>
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

    <!-- Popular Movies Section -->
    <section class="movies-section">
      <div class="container">
        <h2>Popular Movies</h2>
        <div class="movies-grid">
          <div v-for="movie in popularMovies" :key="movie.title" class="movie-card">
            <div class="movie-image">
              <img :src="movie.image" :alt="movie.title">
              <div class="movie-overlay">
                <button @click="handleWatchNow(movie.title)" class="play-button">
                  <span>▶</span>
                </button>
              </div>
              <div class="movie-badge">
                <span class="rating">★ {{ movie.rating }}</span>
              </div>
            </div>
            <div class="movie-info">
              <h3>{{ movie.title }}</h3>
              <div class="movie-meta">
                <span class="year">{{ movie.year }}</span>
                <span class="genre">{{ movie.genre }}</span>
              </div>
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
        <h2>Start Watching Today</h2>
        <p>Get unlimited access to our entire video library with phone billing.</p>
        <button @click="handleSubscribe" class="primary-button">Get Premium</button>
        <p class="cta-note">No credit card needed. Cancel anytime.</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.video-page {
  min-height: 100vh;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  color: #1a1a1a;
  background-color: #0f172a;
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
  background-image: url('https://images.pexels.com/photos/109669/pexels-photo-109669.jpeg');
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
  background: #c026d3;
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

/* Featured Content Section */
.featured-section {
  padding: 5rem 0;
}

.featured-section h2, 
.trending-section h2, 
.categories-section h2,
.movies-section h2,
.features-section h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  text-align: center;
  color: #f8fafc;
  position: relative;
}

.featured-section h2::after,
.trending-section h2::after,
.categories-section h2::after,
.movies-section h2::after,
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

.featured-slider {
  display: flex;
  gap: 2rem;
  overflow-x: auto;
  padding: 1rem 0;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
}

.featured-slider::-webkit-scrollbar {
  display: none;
}

.featured-card {
  flex: 0 0 auto;
  width: 100%;
  max-width: 800px;
  height: 450px;
  border-radius: 1.5rem;
  overflow: hidden;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  scroll-snap-align: center;
}

.featured-image {
  width: 100%;
  height: 100%;
  position: relative;
}

.featured-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.content-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.2) 100%);
  display: flex;
  align-items: flex-end;
  padding: 2.5rem;
  box-sizing: border-box;
}

.content-details {
  max-width: 600px;
}

.rating {
  display: inline-block;
  color: #fcd34d;
  font-weight: bold;
  font-size: 1.1rem;
  margin-bottom: 0.75rem;
}

.genre-badge {
  display: inline-block;
  background: #c026d3;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  margin-left: 1rem;
}

.content-details h3 {
  font-size: 2rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.75rem;
}

.director {
  color: #cbd5e1;
  margin-bottom: 1rem;
  font-size: 1rem;
}

.description {
  color: #e2e8f0;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.watch-button {
  background: linear-gradient(to right, #9333ea, #c026d3);
  color: white;
  border: none;
  padding: 0.8rem 1.8rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.watch-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(147, 51, 234, 0.3);
}

/* Trending Shows Section */
.trending-section {
  padding: 5rem 0;
}

.shows-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
}

.show-card {
  background: #1e293b;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.show-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
}

.show-image {
  position: relative;
  height: 320px;
  overflow: hidden;
}

.show-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.show-card:hover .show-image img {
  transform: scale(1.1);
}

.show-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem;
  box-sizing: border-box;
  opacity: 0;
  transition: all 0.3s ease;
}

.show-card:hover .show-overlay {
  opacity: 1;
}

.play-button {
  width: 60px;
  height: 60px;
  background: linear-gradient(to right, #9333ea, #c026d3);
  color: white;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: center;
  margin: auto;
  box-shadow: 0 4px 15px rgba(147, 51, 234, 0.3);
}

.play-button:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 20px rgba(147, 51, 234, 0.4);
}

.show-info {
  padding: 1.5rem;
}

.show-info h3 {
  font-size: 1.3rem;
  font-weight: 600;
  color: white;
  margin-bottom: 0.75rem;
}

.show-info p {
  color: #cbd5e1;
  font-size: 0.95rem;
}

/* Categories Section */
.categories-section {
  padding: 5rem 0;
  background: #0f172a;
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
  height: 200px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

.category-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
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
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
  margin-bottom: 0.5rem;
}

.category-info p {
  color: #cbd5e1;
  font-size: 0.9rem;
}

/* Popular Movies Section */
.movies-section {
  padding: 5rem 0;
}

.movies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;
}

.movie-card {
  background: #1e293b;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.movie-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
}

.movie-image {
  position: relative;
  height: 280px;
  overflow: hidden;
}

.movie-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.movie-card:hover .movie-image img {
  transform: scale(1.1);
}

.movie-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.3s ease;
}

.movie-card:hover .movie-overlay {
  opacity: 1;
}

.movie-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 2;
}

.movie-info {
  padding: 1.5rem;
}

.movie-info h3 {
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
  margin-bottom: 0.75rem;
}

.movie-meta {
  display: flex;
  justify-content: space-between;
}

.year {
  color: #cbd5e1;
  font-size: 0.9rem;
}

.genre {
  color: #c026d3;
  font-weight: 500;
  font-size: 0.9rem;
}

/* Features Section */
.features-section {
  padding: 5rem 0;
  background: #0f172a;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2.5rem;
}

.feature-card {
  background: #1e293b;
  border-radius: 1.5rem;
  padding: 2rem;
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
}

.feature-icon {
  font-size: 2.5rem;
  flex-shrink: 0;
}

.feature-content h3 {
  font-size: 1.3rem;
  font-weight: 600;
  color: white;
  margin-bottom: 0.75rem;
}

.feature-content p {
  color: #cbd5e1;
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
@media (max-width: 992px) {
  .featured-card {
    max-width: 600px;
  }
}

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
  .trending-section h2, 
  .categories-section h2,
  .movies-section h2,
  .features-section h2 {
    font-size: 2rem;
  }
  
  .hero-actions {
    flex-direction: column;
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }
  
  .content-details h3 {
    font-size: 1.7rem;
  }
  
  .description {
    font-size: 1rem;
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
  
  .featured-card {
    height: 400px;
  }
  
  .content-details h3 {
    font-size: 1.5rem;
  }
  
  .director {
    font-size: 0.9rem;
  }
  
  .description {
    font-size: 0.9rem;
  }
  
  .primary-button,
  .secondary-button,
  .watch-button {
    font-size: 1rem;
    padding: 0.875rem 1.75rem;
  }
  
  .feature-icon {
    font-size: 2rem;
  }
  
  .feature-content h3 {
    font-size: 1.2rem;
  }
}
</style>