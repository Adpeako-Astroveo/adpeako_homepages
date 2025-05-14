<script setup>
import { ref } from 'vue';

const categories = ref([
  {
    title: 'Movies',
    description: 'Latest blockbusters and timeless classics',
    image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg'
  },
  {
    title: 'TV Shows',
    description: 'Binge-worthy series and exclusive content',
    image: 'https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg'
  },
  {
    title: 'Documentaries',
    description: 'Fascinating stories from around the world',
    image: 'https://images.pexels.com/photos/3876394/pexels-photo-3876394.jpeg'
  }
]);

const features = ref([
  {
    title: '4K Streaming',
    description: 'Ultra HD quality on supported devices',
    icon: '📺'
  },
  {
    title: 'Multiple Devices',
    description: 'Watch on your TV, phone, tablet, or laptop',
    icon: '📱'
  },
  {
    title: 'Downloads',
    description: 'Watch offline on the go',
    icon: '⬇️'
  },
  {
    title: 'Family Profiles',
    description: 'Personalized experiences for everyone',
    icon: '👨‍👩‍👧‍👦'
  }
]);

const trending = ref([
  {
    title: 'The Last Journey',
    genre: 'Action/Adventure',
    rating: '4.8',
    image: 'https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg'
  },
  {
    title: 'City Lights',
    genre: 'Drama',
    rating: '4.6',
    image: 'https://images.pexels.com/photos/3131971/pexels-photo-3131971.jpeg'
  },
  {
    title: 'Nature\'s Call',
    genre: 'Documentary',
    rating: '4.9',
    image: 'https://images.pexels.com/photos/3876394/pexels-photo-3876394.jpeg'
  }
]);

const handleLogin = () => {
  window.location.href = '/login';
};
</script>

<template>
  <div class="video-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Premium Video Streaming</h1>
        <p class="subtitle">Movies, Shows, and More in 4K Ultra HD</p>
        <button class="cta-button" @click="handleLogin">Start Watching Now</button>
      </div>
    </section>

    <!-- Categories Section -->
    <section class="categories">
      <h2>Explore Categories</h2>
      <div class="categories-grid">
        <div v-for="category in categories" :key="category.title" class="category-card">
          <img :src="category.image" :alt="category.title" />
          <div class="category-info">
            <h3>{{ category.title }}</h3>
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

    <!-- Trending Section -->
    <section class="trending">
      <h2>Trending Now</h2>
      <div class="trending-grid">
        <div v-for="item in trending" :key="item.title" class="trending-card">
          <img :src="item.image" :alt="item.title" />
          <div class="trending-info">
            <h3>{{ item.title }}</h3>
            <p>{{ item.genre }}</p>
            <div class="rating">★ {{ item.rating }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta">
      <h2>Ready to Start Streaming?</h2>
      <p>Join millions of viewers worldwide</p>
      <button class="cta-button" @click="handleLogin">Login Now</button>
    </section>
  </div>
</template>

<style scoped>
.video-page {
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

.trending {
  padding: 6rem 2rem;
  background: #f7fafc;
}

.trending h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #FFB800;
  margin-bottom: 3rem;
}

.trending-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.trending-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.trending-card:hover {
  transform: translateY(-5px);
}

.trending-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.trending-info {
  padding: 1.5rem;
}

.trending-info h3 {
  color: #FFB800;
  margin-bottom: 0.5rem;
}

.rating {
  color: #FFB800;
  font-weight: bold;
  margin-top: 0.5rem;
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

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.5rem;
  }

  .cta h2 {
    font-size: 2rem;
  }
}
</style>