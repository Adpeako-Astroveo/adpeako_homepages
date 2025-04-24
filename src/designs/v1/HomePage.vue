<script setup>
import { ref } from 'vue';

const entertainmentSections = ref([
  {
    title: 'Movies',
    description: 'Immerse yourself in a vast collection of blockbusters, indie gems, and exclusive releases.',
    image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg',
    features: ['4K Ultra HD', 'Multiple Languages', 'Offline Downloads']
  },
  {
    title: 'Music',
    description: 'Experience crystal-clear sound with our curated playlists and millions of tracks.',
    image: 'https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg',
    features: ['Hi-Fi Quality', 'Personalized Playlists', 'Lyrics Support']
  },
  {
    title: 'Games',
    description: 'Play the latest mobile games with stunning graphics and seamless gameplay.',
    image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg',
    features: ['Cloud Gaming', 'Multiplayer Support', 'Regular Updates']
  },
  {
    title: 'Audiobooks',
    description: 'Listen to bestsellers narrated by world-class voice artists.',
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
    features: ['Huge Library', 'Bookmark Sync', 'Sleep Timer']
  },
  {
    title: 'Sports',
    description: 'Never miss a game with live sports streaming and highlights.',
    image: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg',
    features: ['Live Streaming', 'Multi-cam Views', 'Stats & Analysis']
  }
]);

const features = ref([
  {
    title: 'Ad-free Experience',
    description: 'Uninterrupted entertainment without any advertisements',
    icon: '🎯'
  },
  {
    title: 'Mobile Freedom',
    description: 'Take your entertainment anywhere, anytime',
    icon: '🌎'
  },
  {
    title: 'All-in-One Platform',
    description: 'Everything you love, in one place',
    icon: '✨'
  }
]);
</script>

<template>
  <div class="homepage">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Endless Entertainment<br>For Everyone</h1>
        <p class="subtitle">
          Elevate your entertainment experience with Plucky Sparrow where entertainment meets variety.
          Dive into a world of movies, music, games, audiobooks & sports.
        </p>
        <div class="hero-features">
          <div v-for="feature in features" :key="feature.title" class="feature-card">
            <span class="feature-icon">{{ feature.icon }}</span>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Entertainment Sections -->
    <section class="entertainment-sections">
      <div v-for="section in entertainmentSections" :key="section.title" class="content-section">
        <div class="section-image">
          <img :src="section.image" :alt="section.title" />
        </div>
        <div class="section-content">
          <h2>{{ section.title }}</h2>
          <p>{{ section.description }}</p>
          <ul class="features-list">
            <li v-for="feature in section.features" :key="feature">{{ feature }}</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <h2>Ready to Start Your Journey?</h2>
      <p>Join millions of happy users experiencing premium entertainment</p>
      <button class="cta-button">Get Started Now</button>
    </section>
  </div>
</template>

<style scoped>
.homepage {
  font-family: 'Inter', sans-serif;
  color: #1a1a1a;
}

.hero {
  min-height: 100vh;
  background: linear-gradient(135deg, #f6f8fd 0%, #e9eeff 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.hero-content {
  max-width: 1200px;
  text-align: center;
}

.hero h1 {
  font-size: 4rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #2d3748 0%, #1a202c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subtitle {
  font-size: 1.5rem;
  color: #4a5568;
  max-width: 800px;
  margin: 0 auto 3rem;
  line-height: 1.6;
}

.hero-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  display: block;
}

.entertainment-sections {
  padding: 4rem 2rem;
}

.content-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 0;
  align-items: center;
}

.content-section:nth-child(even) {
  direction: rtl;
}

.content-section:nth-child(even) .section-content {
  direction: ltr;
}

.section-image img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 1rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.section-content {
  padding: 2rem;
}

.section-content h2 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #2d3748;
}

.section-content p {
  font-size: 1.2rem;
  color: #4a5568;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.features-list {
  list-style: none;
  padding: 0;
}

.features-list li {
  margin-bottom: 1rem;
  padding-left: 2rem;
  position: relative;
  color: #4a5568;
}

.features-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #48bb78;
  font-weight: bold;
}

.cta-section {
  background: linear-gradient(135deg, #2d3748 0%, #1a202c 100%);
  color: white;
  text-align: center;
  padding: 6rem 2rem;
}

.cta-section h2 {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.cta-section p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.cta-button {
  background: #48bb78;
  color: white;
  font-size: 1.2rem;
  padding: 1rem 2.5rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease;
}

.cta-button:hover {
  background: #38a169;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.5rem;
  }

  .content-section {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 2rem 0;
  }

  .content-section:nth-child(even) {
    direction: ltr;
  }

  .section-image img {
    height: 300px;
  }
}
</style>