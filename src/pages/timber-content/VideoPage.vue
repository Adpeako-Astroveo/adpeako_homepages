<script setup>
import { ref } from 'vue';

const featuredContent = ref([
  {
    title: 'The Lost Kingdom',
    category: 'Fantasy Series',
    rating: '9.3',
    image: 'https://images.pexels.com/photos/3131971/pexels-photo-3131971.jpeg',
    duration: '45m per episode'
  },
  {
    title: 'Beyond Horizons',
    category: 'Sci-Fi Film',
    rating: '8.8',
    image: 'https://images.pexels.com/photos/3952050/pexels-photo-3952050.jpeg',
    duration: '2h 15m'
  },
  {
    title: 'Urban Legends',
    category: 'Documentary',
    rating: '9.5',
    image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg',
    duration: '6 episodes'
  }
]);

const categories = ref([
  {
    name: 'Action & Adventure',
    icon: '🔥',
    count: '250+ titles',
    image: 'https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg'
  },
  {
    name: 'Drama',
    icon: '🎭',
    count: '300+ titles',
    image: 'https://images.pexels.com/photos/7991466/pexels-photo-7991466.jpeg'
  },
  {
    name: 'Comedy',
    icon: '😂',
    count: '200+ titles',
    image: 'https://images.pexels.com/photos/5905885/pexels-photo-5905885.jpeg'
  },
  {
    name: 'Documentary',
    icon: '🌎',
    count: '150+ titles',
    image: 'https://images.pexels.com/photos/6487367/pexels-photo-6487367.jpeg'
  },
  {
    name: 'Sci-Fi & Fantasy',
    icon: '🚀',
    count: '180+ titles',
    image: 'https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg'
  },
  {
    name: 'Horror',
    icon: '👻',
    count: '120+ titles',
    image: 'https://images.pexels.com/photos/5083438/pexels-photo-5083438.jpeg'
  }
]);

const newReleases = ref([
  {
    title: 'Cosmic Odyssey',
    genre: 'Sci-Fi',
    image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg',
    year: '2023'
  },
  {
    title: 'The Hidden Truth',
    genre: 'Thriller',
    image: 'https://images.pexels.com/photos/7232008/pexels-photo-7232008.jpeg',
    year: '2023'
  },
  {
    title: 'Last Summer',
    genre: 'Drama',
    image: 'https://images.pexels.com/photos/1616116/pexels-photo-1616116.jpeg',
    year: '2023'
  },
  {
    title: 'Whispers of the Forest',
    genre: 'Fantasy',
    image: 'https://images.pexels.com/photos/2155775/pexels-photo-2155775.jpeg',
    year: '2023'
  }
]);

const features = ref([
  {
    title: '4K Ultra HD',
    description: 'Crisp, ultra-clear resolution for the ultimate viewing experience.',
    icon: '📺'
  },
  {
    title: 'Offline Downloads',
    description: 'Watch your favorite content anywhere, even without internet.',
    icon: '⬇️'
  },
  {
    title: 'Multiple Profiles',
    description: 'Create up to 6 profiles for everyone in your household.',
    icon: '👨‍👩‍👧‍👦'
  },
  {
    title: 'No Ads',
    description: 'Enjoy uninterrupted viewing with zero advertisements.',
    icon: '🚫'
  }
]);

const handleSubscribe = () => {
  window.location.href = '/login';
};
</script>

<template>
  <div class="timber-video-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Premium Video Streaming</h1>
        <p class="tagline">Unlimited movies, TV shows, and documentaries in stunning 4K.</p>
        <button @click="handleSubscribe" class="cta-button">Start 30-Day Free Trial</button>
      </div>
    </section>

    <!-- Featured Content -->
    <section class="featured">
      <h2>Featured Content</h2>
      <div class="featured-slider">
        <div v-for="content in featuredContent" :key="content.title" class="featured-card">
          <div class="featured-image">
            <img :src="content.image" :alt="content.title">
            <div class="content-overlay">
              <div class="content-details">
                <h3>{{ content.title }}</h3>
                <div class="content-meta">
                  <span class="category">{{ content.category }}</span>
                  <span class="rating">★ {{ content.rating }}</span>
                </div>
                <p class="duration">{{ content.duration }}</p>
                <button class="watch-button">Watch Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Categories Section -->
    <section class="categories">
      <h2>Browse Categories</h2>
      <div class="categories-grid">
        <div v-for="category in categories" :key="category.name" class="category-card">
          <div class="category-image">
            <img :src="category.image" :alt="category.name">
            <div class="category-overlay"></div>
          </div>
          <div class="category-info">
            <span class="category-icon">{{ category.icon }}</span>
            <h3>{{ category.name }}</h3>
            <p>{{ category.count }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- New Releases -->
    <section class="new-releases">
      <h2>New Releases</h2>
      <div class="releases-grid">
        <div v-for="release in newReleases" :key="release.title" class="release-card">
          <div class="release-image">
            <img :src="release.image" :alt="release.title">
            <div class="release-overlay">
              <div class="play-button">
                <span>▶</span>
              </div>
            </div>
          </div>
          <div class="release-info">
            <h3>{{ release.title }}</h3>
            <div class="release-meta">
              <span class="genre">{{ release.genre }}</span>
              <span class="year">{{ release.year }}</span>
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
          <div class="feature-icon">{{ feature.icon }}</div>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-content">
        <h2>Ready to start watching?</h2>
        <p>Join millions of subscribers. Cancel anytime.</p>
        <button @click="handleSubscribe" class="cta-button">Get Started</button>
      </div>
    </section>
  </div>
</template>

<style scoped>
.timber-video-page {
  min-height: 100vh;
  color: #f5f5f5;
  font-family: 'Inter', sans-serif;
  background-color: #0f0f0f;
  padding-top: 64px;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%);
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
  background: url('https://images.pexels.com/photos/109669/pexels-photo-109669.jpeg') center/cover no-repeat;
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
  background: linear-gradient(135deg, #ff7170 0%, #ffe57f 100%);
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
  background: linear-gradient(135deg, #ff7170 0%, #ffe57f 100%);
  color: #1a1a1a;
  font-size: 1.2rem;
  font-weight: 600;
  padding: 1rem 3rem;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 113, 112, 0.4);
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(255, 113, 112, 0.5);
}

/* Featured Content */
.featured {
  padding: 5rem 2rem;
}

.featured h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #f5f5f5;
}

.featured-slider {
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
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
  transition: all 0.3s ease;
}

.featured-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.6);
}

.featured-image {
  position: relative;
  height: 550px;
  overflow: hidden;
}

.featured-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.featured-card:hover .featured-image img {
  transform: scale(1.05);
}

.content-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%);
  padding: 2rem;
  transition: all 0.3s ease;
}

.content-details {
  transform: translateY(20px);
  opacity: 0.9;
  transition: all 0.3s ease;
}

.featured-card:hover .content-details {
  transform: translateY(0);
  opacity: 1;
}

.content-details h3 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: white;
}

.content-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.category {
  background: rgba(255, 113, 112, 0.8);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
}

.rating {
  color: #ffe57f;
  font-weight: bold;
}

.duration {
  color: #ccc;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
}

.watch-button {
  background: #ff7170;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.watch-button:hover {
  background: #ffe57f;
  color: #1a1a1a;
}

/* Categories Section */
.categories {
  padding: 5rem 2rem;
  background: #1a1a1a;
}

.categories h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #f5f5f5;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.category-card {
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  transition: all 0.3s ease;
  height: 200px;
}

.category-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.4);
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
  background: linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.8) 100%);
}

.category-info {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem;
  z-index: 2;
}

.category-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  display: block;
}

.category-info h3 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: white;
}

.category-info p {
  color: #ccc;
  font-size: 0.9rem;
}

/* New Releases */
.new-releases {
  padding: 5rem 2rem;
  background: #0f0f0f;
}

.new-releases h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #f5f5f5;
}

.releases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.release-card {
  background: #1a1a1a;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  transition: all 0.3s ease;
}

.release-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.4);
}

.release-image {
  position: relative;
  height: 350px;
  overflow: hidden;
}

.release-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.release-card:hover .release-image img {
  transform: scale(1.1);
}

.release-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.release-card:hover .release-overlay {
  opacity: 1;
}

.play-button {
  width: 60px;
  height: 60px;
  background: rgba(255, 113, 112, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.play-button span {
  font-size: 1.5rem;
  color: white;
}

.play-button:hover {
  transform: scale(1.1);
  background: #ffe57f;
}

.play-button:hover span {
  color: #1a1a1a;
}

.release-info {
  padding: 1.5rem;
}

.release-info h3 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: white;
}

.release-meta {
  display: flex;
  justify-content: space-between;
}

.genre {
  color: #ff7170;
  font-size: 0.9rem;
}

.year {
  color: #ccc;
  font-size: 0.9rem;
}

/* Features Section */
.features {
  padding: 5rem 2rem;
  background: #1a1a1a;
}

.features h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #f5f5f5;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  background: #0f0f0f;
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
  color: #f5f5f5;
}

.feature-card p {
  color: #ccc;
  font-size: 0.9rem;
  line-height: 1.6;
}

/* CTA Section */
.cta-section {
  background: linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%);
  padding: 5rem 2rem;
  text-align: center;
  position: relative;
}

.cta-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg') center/cover no-repeat;
  opacity: 0.05;
  z-index: 1;
}

.cta-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
}

.cta-section h2 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #f5f5f5;
}

.cta-section p {
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  color: #ccc;
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
  
  .featured-image {
    height: 400px;
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
  
  .featured h2,
  .categories h2,
  .new-releases h2,
  .features h2 {
    font-size: 2rem;
  }
  
  .cta-button {
    padding: 0.8rem 2rem;
    font-size: 1rem;
  }
  
  .featured-image {
    height: 350px;
  }
  
  .content-details h3 {
    font-size: 1.5rem;
  }
}
</style>