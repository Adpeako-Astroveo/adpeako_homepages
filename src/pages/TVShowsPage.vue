<template>
  <div class="tv-shows-page">
    <h1>Top Shows in Switzerland</h1>
    
    <div class="shows-grid">
      <div v-for="show in shows" :key="show.id" class="show-card">
        <img :src="show.image" :alt="show.title" class="show-thumbnail" />
        <div class="show-content">
          <h2>{{ show.title }}</h2>
          <p class="show-description">{{ show.description }}</p>
          <button class="watch-button" @click="handleWatch(show.id)">Watch Now</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const shows = ref([
  {
    id: 1,
    title: "The Crown",
    description: "Follow the political rivalries and romance of Queen Elizabeth II's reign.",
    image: "https://images.pexels.com/photos/2773498/pexels-photo-2773498.jpeg"
  },
  {
    id: 2,
    title: "Stranger Things",
    description: "When a young boy vanishes, a small town uncovers a mystery.",
    image: "https://images.pexels.com/photos/2510428/pexels-photo-2510428.jpeg"
  },
  {
    id: 3,
    title: "Breaking Bad",
    description: "A high school chemistry teacher turned methamphetamine manufacturer.",
    image: "https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg"
  }
]);

const handleWatch = (showId) => {
  window.location.href = 'https://wave-view.com/login';
};
</script>

<style scoped>
.tv-shows-page {
  min-height: 100vh;
  background: #f8fafc;
  padding: 8rem 2rem 4rem;
}

h1 {
  text-align: center;
  color: #3B82F6;
  font-size: 2.5rem;
  margin-bottom: 3rem;
}

.shows-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.show-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.show-card:hover {
  transform: translateY(-5px);
}

.show-thumbnail {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.show-content {
  padding: 1.5rem;
}

.show-content h2 {
  color: #3B82F6;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.show-description {
  color: #4a5568;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.watch-button {
  background: #3B82F6;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  border: none;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.watch-button:hover {
  background: #2563eb;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .tv-shows-page {
    padding: 7rem 1rem 2rem;
  }

  h1 {
    font-size: 2rem;
  }
}
</style>