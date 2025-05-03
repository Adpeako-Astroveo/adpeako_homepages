<template>
  <div class="movies-page">
    <h1>Popular Movies in Switzerland</h1>
    
    <div class="movies-grid">
      <div v-for="movie in movies" :key="movie.id" class="movie-card">
        <img :src="movie.poster" :alt="movie.title" class="movie-poster" />
        <div class="movie-content">
          <div class="movie-header">
            <h2>{{ movie.title }}</h2>
            <span class="rating">★ {{ movie.rating }}</span>
          </div>
          <div class="genres">
            <span v-for="genre in movie.genres" :key="genre" class="genre-tag">
              {{ genre }}
            </span>
          </div>
          <p class="synopsis">{{ movie.synopsis }}</p>
          <div class="action-buttons">
            <button class="trailer-button" @click="handleTrailer(movie.id)">Watch Trailer</button>
            <button class="watch-button" @click="handleWatch(movie.id)">Start Watching</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const movies = ref([
  {
    id: 1,
    title: "Inception",
    rating: "8.8",
    genres: ["Action", "Sci-Fi"],
    synopsis: "A thief who steals corporate secrets through dream-sharing technology.",
    poster: "https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg"
  },
  {
    id: 2,
    title: "The Shawshank Redemption",
    rating: "9.3",
    genres: ["Drama"],
    synopsis: "Two imprisoned men bond over a number of years.",
    poster: "https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg"
  },
  {
    id: 3,
    title: "Pulp Fiction",
    rating: "8.9",
    genres: ["Crime", "Drama"],
    synopsis: "Various interconnected stories of criminals in Los Angeles.",
    poster: "https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg"
  }
]);

const handleTrailer = (movieId) => {
  window.location.href = 'https://wave-view.com/login';
};

const handleWatch = (movieId) => {
  window.location.href = 'https://wave-view.com/login';
};
</script>

<style scoped>
.movies-page {
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

.movies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.movie-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.movie-card:hover {
  transform: translateY(-5px);
}

.movie-poster {
  width: 100%;
  height: 400px;
  object-fit: cover;
}

.movie-content {
  padding: 1.5rem;
}

.movie-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.movie-header h2 {
  color: #3B82F6;
  font-size: 1.5rem;
}

.rating {
  color: #f59e0b;
  font-weight: bold;
}

.genres {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.genre-tag {
  background: #e5e7eb;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  color: #4b5563;
}

.synopsis {
  color: #4a5568;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.action-buttons {
  display: flex;
  gap: 1rem;
}

.trailer-button, .watch-button {
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  border: none;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  flex: 1;
}

.trailer-button {
  background: #e5e7eb;
  color: #4b5563;
}

.watch-button {
  background: #3B82F6;
  color: white;
}

.trailer-button:hover, .watch-button:hover {
  transform: translateY(-2px);
}

.watch-button:hover {
  background: #2563eb;
}

@media (max-width: 768px) {
  .movies-page {
    padding: 7rem 1rem 2rem;
  }

  h1 {
    font-size: 2rem;
  }

  .action-buttons {
    flex-direction: column;
  }
}
</style>