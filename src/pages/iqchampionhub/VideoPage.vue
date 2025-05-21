<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Featured content
const featuredContent = ref([
  {
    title: 'Space Odyssey',
    genre: 'Sci-Fi Thriller',
    director: 'Alexandra Rivera',
    rating: 9.2,
    image: 'https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg',
    description: 'A mind-bending journey through space and time as astronauts discover a mysterious artifact.'
  },
  {
    title: 'Kingdom of Shadows',
    genre: 'Fantasy Epic',
    director: 'Marcus Chen',
    rating: 8.9,
    image: 'https://images.pexels.com/photos/3617457/pexels-photo-3617457.jpeg',
    description: 'In a world where light and darkness battle for dominance, one hero must rise to restore balance.'
  },
  {
    title: 'Urban Legend',
    genre: 'Crime Drama',
    director: 'Jasmine Williams',
    rating: 9.5,
    image: 'https://images.pexels.com/photos/1545505/pexels-photo-1545505.jpeg',
    description: 'A gritty tale of crime and redemption set in the underbelly of a modern metropolis.'
  }
]);

// Content categories
const categories = ref([
  {
    name: 'Action & Adventure',
    count: '250+ titles',
    image: 'https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg'
  },
  {
    name: 'Comedy',
    count: '180+ titles',
    image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg'
  },
  {
    name: 'Drama',
    count: '300+ titles',
    image: 'https://images.pexels.com/photos/3062545/pexels-photo-3062545.jpeg'
  },
  {
    name: 'Horror',
    count: '120+ titles',
    image: 'https://images.pexels.com/photos/3480798/pexels-photo-3480798.jpeg'
  },
  {
    name: 'Documentary',
    count: '150+ titles',
    image: 'https://images.pexels.com/photos/3880179/pexels-photo-3880179.jpeg'
  },
  {
    name: 'Animation',
    count: '100+ titles',
    image: 'https://images.pexels.com/photos/7234213/pexels-photo-7234213.jpeg'
  }
]);

// Trending shows
const trendingShows = ref([
  {
    title: 'Cyber City',
    seasons: 3,
    episodes: 24,
    image: 'https://images.pexels.com/photos/2506905/pexels-photo-2506905.jpeg'
  },
  {
    title: 'The Royal Court',
    seasons: 5,
    episodes: 50,
    image: 'https://images.pexels.com/photos/1561020/pexels-photo-1561020.jpeg'
  },
  {
    title: 'Medical Frontline',
    seasons: 4,
    episodes: 40,
    image: 'https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg'
  },
  {
    title: 'Criminal Minds',
    seasons: 6,
    episodes: 72,
    image: 'https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg'
  }
]);

// Features list
const features = ref([
  {
    title: '4K Ultra HD',
    description: 'Experience crystal-clear visuals with our 4K streaming technology',
    icon: '📺'
  },
  {
    title: 'Offline Viewing',
    description: 'Download your favorite content to watch on the go without internet',
    icon: '📱'
  },
  {
    title: 'Multiple Devices',
    description: 'Seamlessly switch between phone, tablet, and smart TV',
    icon: '📲'
  },
  {
    title: 'Ad-Free Experience',
    description: 'Enjoy uninterrupted entertainment with zero advertisements',
    icon: '🚫'
  }
]);

const handleLogin = () => {
  router.push('/login');
};
</script>

<template>
  <div class="video-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Premium Video Streaming</h1>
        <p class="subheading">Thousands of movies and TV shows. 4K quality. Zero ads.</p>
        <button class="cta-button" @click="handleLogin">Start Watching Now</button>
      </div>
    </section>

    <!-- Featured Content -->
    <section class="featured-section">
      <div class="container">
        <h2>Featured Content</h2>
        <div class="featured-grid">
          <div v-for="content in featuredContent" :key="content.title" class="featured-card">
            <div class="content-image">
              <img :src="content.image" :alt="content.title">
              <div class="content-overlay">
                <div class="overlay-info">
                  <div class="rating">★ {{ content.rating }}</div>
                  <button class="watch-button" @click="handleLogin">Watch Now</button>
                </div>
              </div>
            </div>
            <div class="content-info">
              <h3>{{ content.title }}</h3>
              <div class="content-details">
                <span class="genre">{{ content.genre }}</span>
                <span class="director">Dir. {{ content.director }}</span>
              </div>
              <p class="description">{{ content.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Categories -->
    <section class="categories-section">
      <div class="container">
        <h2>Explore Categories</h2>
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

    <!-- Trending Shows -->
    <section class="trending-section">
      <div class="container">
        <h2>Trending TV Shows</h2>
        <div class="trending-grid">
          <div v-for="show in trendingShows" :key="show.title" class="trending-card">
            <div class="show-image">
              <img :src="show.image" :alt="show.title">
              <div class="show-overlay">
                <button class="watch-button" @click="handleLogin">Watch Now</button>
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

    <!-- Features -->
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
        <h2>Ready to Start Watching?</h2>
        <p>Access unlimited movies and shows with a simple subscription billed directly to your phone</p>
        <button class="cta-button" @click="handleLogin">Get Started</button>
        <p class="note">No credit card required. Cancel anytime.</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.video-page {
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
  background: url('https://images.pexels.com/photos/109669/pexels-photo-109669.jpeg') center/cover no-repeat;
  opacity: 0.2;
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

/* Featured Content */
.featured-section {
  padding: 5rem 0;
}

.featured-section h2, 
.categories-section h2, 
.trending-section h2,
.features-section h2 {
  font-size: 2.2rem;
  margin-bottom: 2.5rem;
  color: #6C63FF;
  text-align: center;
}

.featured-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2.5rem;
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

.content-image {
  position: relative;
  height: 250px;
  overflow: hidden;
}

.content-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.featured-card:hover .content-image img {
  transform: scale(1.1);
}

.content-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0) 100%);
  display: flex;
  align-items: flex-end;
  padding: 1.5rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.featured-card:hover .content-overlay {
  opacity: 1;
}

.overlay-info {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.rating {
  color: #FFD700;
  font-weight: bold;
  font-size: 1.1rem;
}

.watch-button {
  background: #44C7B0;
  color: white;
  padding: 0.6rem 1.2rem;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.watch-button:hover {
  transform: scale(1.05);
  background: #4CD7C0;
}

.content-info {
  padding: 1.5rem;
}

.content-info h3 {
  font-size: 1.4rem;
  margin-bottom: 0.8rem;
  color: #6C63FF;
}

.content-details {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.genre, .director {
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
  background: linear-gradient(to top, rgba(108, 99, 255, 0.8) 0%, rgba(108, 99, 255, 0.6) 60%, rgba(108, 99, 255, 0.4) 100%);
}

.category-overlay h3 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.category-overlay p {
  font-size: 0.9rem;
  opacity: 0.9;
}

/* Trending Shows */
.trending-section {
  padding: 5rem 0;
}

.trending-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 2rem;
}

.trending-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.trending-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.15);
}

.show-image {
  position: relative;
  height: 280px;
  overflow: hidden;
}

.show-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.trending-card:hover .show-image img {
  transform: scale(1.1);
}

.show-overlay {
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

.trending-card:hover .show-overlay {
  opacity: 1;
}

.show-info {
  padding: 1.5rem;
}

.show-info h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #6C63FF;
}

.show-info p {
  color: #666;
  font-size: 0.9rem;
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
  .trending-section h2,
  .features-section h2,
  .cta-section h2 {
    font-size: 1.8rem;
  }
  
  .trending-grid {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
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
  
  .show-image {
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