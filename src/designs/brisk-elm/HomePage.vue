<script setup>
import { ref } from 'vue';

const categories = ref([
  {
    title: 'Movies & Shows',
    description: 'Stream the latest blockbusters and binge-worthy series',
    icon: '🎬',
    features: ['4K Ultra HD', 'Dolby Atmos', 'Offline Downloads']
  },
  {
    title: 'Music Library',
    description: 'Millions of tracks and exclusive artist content',
    icon: '🎵',
    features: ['HiFi Audio', 'Lyrics', 'Custom Playlists']
  },
  {
    title: 'Gaming Zone',
    description: 'Cloud gaming and premium mobile titles',
    icon: '🎮',
    features: ['Cloud Saves', 'Multiplayer', 'No Ads']
  }
]);

const highlights = ref([
  {
    title: 'New Releases',
    items: ['Blockbuster Movies', 'Chart-Topping Albums', 'Latest Games']
  },
  {
    title: 'Coming Soon',
    items: ['Exclusive Series', 'Live Concerts', 'Game Premieres']
  },
  {
    title: 'Popular Now',
    items: ['Top 10 Movies', 'Trending Music', 'Featured Games']
  }
]);

const stats = ref([
  { number: '10M+', label: 'Active Users' },
  { number: '100K+', label: 'Content Items' },
  { number: '99.9%', label: 'Uptime' }
]);
</script>

<template>
  <div class="v3-homepage">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Your Ultimate<br>Entertainment Hub</h1>
        <p class="hero-subtitle">Movies, Music, and Games in One Place</p>
        <div class="hero-stats">
          <div v-for="stat in stats" :key="stat.number" class="stat-item">
            <span class="stat-number">{{ stat.number }}</span>
            <span class="stat-label">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Categories Section -->
    <section class="categories">
      <h2>Entertainment Categories</h2>
      <div class="categories-grid">
        <div v-for="category in categories" :key="category.title" class="category-card">
          <span class="category-icon">{{ category.icon }}</span>
          <h3>{{ category.title }}</h3>
          <p>{{ category.description }}</p>
          <ul class="feature-list">
            <li v-for="feature in category.features" :key="feature">{{ feature }}</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Highlights Section -->
    <section class="highlights">
      <div class="highlights-grid">
        <div v-for="highlight in highlights" :key="highlight.title" class="highlight-card">
          <h3>{{ highlight.title }}</h3>
          <ul>
            <li v-for="item in highlight.items" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta">
      <h2>Start Streaming Today</h2>
      <p>Join millions of users enjoying premium entertainment</p>
      <button class="cta-button">Get Started</button>
    </section>
  </div>
</template>

<style scoped>
.v3-homepage {
  background: #1A1A2E;
  color: white;
  min-height: 100vh;
  padding-top: 64px;
}

.hero {
  background: linear-gradient(135deg, #805AD5 0%, #B794F4 100%);
  padding: 8rem 2rem;
  text-align: center;
}

.hero-content {
  max-width: 1200px;
  margin: 0 auto;
}

.hero h1 {
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 3rem;
  opacity: 0.9;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 4rem;
  margin-top: 4rem;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: bold;
  color: white;
}

.stat-label {
  font-size: 1.1rem;
  opacity: 0.9;
}

.categories {
  padding: 6rem 2rem;
  background: #16162A;
}

.categories h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #B794F4;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.category-card {
  background: #1E1E32;
  padding: 2rem;
  border-radius: 1rem;
  transition: transform 0.3s ease;
}

.category-card:hover {
  transform: translateY(-5px);
}

.category-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  display: block;
}

.category-card h3 {
  font-size: 1.5rem;
  color: #805AD5;
  margin-bottom: 1rem;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin-top: 1.5rem;
}

.feature-list li {
  padding: 0.5rem 0;
  color: #B794F4;
  position: relative;
  padding-left: 1.5rem;
}

.feature-list li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: #805AD5;
}

.highlights {
  padding: 6rem 2rem;
  background: #1A1A2E;
}

.highlights-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.highlight-card {
  background: linear-gradient(135deg, #805AD5 0%, #6B46C1 100%);
  padding: 2rem;
  border-radius: 1rem;
  color: white;
}

.highlight-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: white;
}

.highlight-card ul {
  list-style: none;
  padding: 0;
}

.highlight-card li {
  padding: 0.5rem 0;
  opacity: 0.9;
}

.cta {
  padding: 6rem 2rem;
  text-align: center;
  background: linear-gradient(135deg, #6B46C1 0%, #805AD5 100%);
}

.cta h2 {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.cta p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.cta-button {
  background: white;
  color: #805AD5;
  font-size: 1.2rem;
  padding: 1rem 3rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.5rem;
  }

  .hero-stats {
    flex-direction: column;
    gap: 2rem;
  }

  .categories h2 {
    font-size: 2rem;
  }

  .cta h2 {
    font-size: 2rem;
  }
}
</style>