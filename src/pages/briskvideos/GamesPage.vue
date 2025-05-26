<template>
  <div class="briskvideos-games">
    <section class="games-hero">
      <div class="hero-content">
        <h1>Explore Games</h1>
        <p>Browse through thousands of games across multiple categories</p>
        <div class="search-filter">
          <input type="text" placeholder="Search games..." v-model="searchQuery" @input="filterGames">
          <div class="sort-options">
            <button 
              v-for="option in sortOptions" 
              :key="option.value"
              @click="sortGames(option.value)"
              :class="{ active: currentSort === option.value }"
            >
              {{ option.label }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="categories-tabs">
      <button 
        v-for="category in categories" 
        :key="category.id"
        @click="filterByCategory(category.id)"
        :class="{ active: selectedCategory === category.id }"
        class="category-btn"
      >
        <span class="category-icon">{{ category.icon }}</span>
        {{ category.name }}
      </button>
    </section>

    <section class="games-grid-section">
      <h2 v-if="selectedCategory === 'all'">All Games</h2>
      <h2 v-else>{{ getCategoryName(selectedCategory) }} Games</h2>
      
      <div v-if="filteredGames.length > 0" class="games-grid">
        <div v-for="game in filteredGames" :key="game.id" class="game-card">
          <div class="game-image-container">
            <img :src="game.image" :alt="game.title" class="game-image">
            <div class="game-overlay">
              <button @click="handlePlayGame(game.id)" class="play-btn">Play Now</button>
              <button @click="handleAddToFavorites(game.id)" class="favorite-btn">
                <span class="heart-icon">♥</span>
              </button>
            </div>
            <div class="game-info-overlay">
              <div class="game-rating">{{ game.rating }}</div>
              <div class="game-genre">{{ game.genre }}</div>
            </div>
          </div>
          <div class="game-details">
            <h3>{{ game.title }}</h3>
            <p class="game-description">{{ game.description }}</p>
            <div class="game-meta">
              <span class="game-plays">{{ game.plays }} Plays</span>
              <span class="game-date">{{ game.releaseDate }}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div v-else class="no-results">
        <div class="no-results-icon">🔍</div>
        <h3>No games found</h3>
        <p>Try adjusting your search or filter criteria</p>
      </div>

      <div class="pagination">
        <button 
          v-for="page in totalPages" 
          :key="page" 
          @click="currentPage = page"
          :class="{ active: currentPage === page }"
          class="page-btn"
        >
          {{ page }}
        </button>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Categories data
const categories = ref([
  { id: 'all', name: 'All Games', icon: '🎮' },
  { id: 'action', name: 'Action', icon: '🔥' },
  { id: 'adventure', name: 'Adventure', icon: '🌄' },
  { id: 'puzzle', name: 'Puzzle', icon: '🧩' },
  { id: 'strategy', name: 'Strategy', icon: '♟️' },
  { id: 'rpg', name: 'RPG', icon: '⚔️' },
  { id: 'simulation', name: 'Simulation', icon: '🏙️' },
  { id: 'sports', name: 'Sports', icon: '⚽' },
  { id: 'multiplayer', name: 'Multiplayer', icon: '👥' }
]);

// Sort options
const sortOptions = [
  { label: 'Popular', value: 'popular' },
  { label: 'Newest', value: 'newest' },
  { label: 'Top Rated', value: 'rated' }
];

// Games data
const allGames = ref([
  {
    id: 1,
    title: 'Cyber Assault',
    description: 'Fast-paced action in a cyberpunk world filled with neon lights and futuristic weapons.',
    genre: 'Action',
    categoryId: 'action',
    rating: '★★★★★',
    plays: '1.2M',
    releaseDate: 'May 2024',
    image: 'https://images.pexels.com/photos/1637439/pexels-photo-1637439.jpeg'
  },
  {
    id: 2,
    title: 'Mystic Quest',
    description: 'Embark on an epic adventure through enchanted realms and battle ancient creatures.',
    genre: 'Adventure',
    categoryId: 'adventure',
    rating: '★★★★☆',
    plays: '950K',
    releaseDate: 'April 2024',
    image: 'https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg'
  },
  {
    id: 3,
    title: 'Mind Blocks',
    description: 'Challenge your brain with increasingly complex puzzles and mind-bending challenges.',
    genre: 'Puzzle',
    categoryId: 'puzzle',
    rating: '★★★★★',
    plays: '2.3M',
    releaseDate: 'March 2024',
    image: 'https://images.pexels.com/photos/1314435/pexels-photo-1314435.jpeg'
  },
  {
    id: 4,
    title: 'Galactic Conquest',
    description: 'Build your empire across the stars and conquer alien civilizations in this strategy epic.',
    genre: 'Strategy',
    categoryId: 'strategy',
    rating: '★★★★☆',
    plays: '780K',
    releaseDate: 'May 2024',
    image: 'https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg'
  },
  {
    id: 5,
    title: 'Shadow Legends',
    description: 'Customize your character and forge your destiny in this immersive role-playing adventure.',
    genre: 'RPG',
    categoryId: 'rpg',
    rating: '★★★★★',
    plays: '1.5M',
    releaseDate: 'February 2024',
    image: 'https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg'
  },
  {
    id: 6,
    title: 'City Builder Pro',
    description: 'Design, build and manage your dream city with realistic simulations and challenges.',
    genre: 'Simulation',
    categoryId: 'simulation',
    rating: '★★★★☆',
    plays: '630K',
    releaseDate: 'April 2024',
    image: 'https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg'
  },
  {
    id: 7,
    title: 'Speed Racers',
    description: 'Race at breakneck speeds through futuristic tracks with gravity-defying stunts.',
    genre: 'Racing',
    categoryId: 'action',
    rating: '★★★★☆',
    plays: '1.1M',
    releaseDate: 'March 2024',
    image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg'
  },
  {
    id: 8,
    title: 'Soccer Champions',
    description: 'Experience the thrill of competitive soccer with realistic physics and controls.',
    genre: 'Sports',
    categoryId: 'sports',
    rating: '★★★★☆',
    plays: '900K',
    releaseDate: 'May 2024',
    image: 'https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg'
  },
  {
    id: 9,
    title: 'Battle Arena',
    description: 'Compete against players worldwide in this fast-paced multiplayer battle game.',
    genre: 'Multiplayer',
    categoryId: 'multiplayer',
    rating: '★★★★★',
    plays: '2.8M',
    releaseDate: 'January 2024',
    image: 'https://images.pexels.com/photos/7915357/pexels-photo-7915357.jpeg'
  },
  {
    id: 10,
    title: 'Treasure Hunt',
    description: 'Explore mysterious islands and ancient temples in search of legendary treasures.',
    genre: 'Adventure',
    categoryId: 'adventure',
    rating: '★★★★☆',
    plays: '750K',
    releaseDate: 'April 2024',
    image: 'https://images.pexels.com/photos/6498311/pexels-photo-6498311.jpeg'
  },
  {
    id: 11,
    title: 'Color Match',
    description: 'A relaxing yet challenging puzzle game about matching colors and patterns.',
    genre: 'Puzzle',
    categoryId: 'puzzle',
    rating: '★★★★☆',
    plays: '1.7M',
    releaseDate: 'February 2024',
    image: 'https://images.pexels.com/photos/1209843/pexels-photo-1209843.jpeg'
  },
  {
    id: 12,
    title: 'Kingdom Defense',
    description: 'Defend your kingdom from waves of enemies with strategic tower placements.',
    genre: 'Strategy',
    categoryId: 'strategy',
    rating: '★★★★★',
    plays: '820K',
    releaseDate: 'March 2024',
    image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg'
  },
]);

// State variables
const searchQuery = ref('');
const selectedCategory = ref('all');
const currentSort = ref('popular');
const currentPage = ref(1);
const gamesPerPage = 8;

// Get category name function
const getCategoryName = (categoryId) => {
  const category = categories.value.find(cat => cat.id === categoryId);
  return category ? category.name : 'All Games';
};

// Filter and sort functions
const filterByCategory = (categoryId) => {
  selectedCategory.value = categoryId;
  currentPage.value = 1; // Reset to first page when category changes
};

const sortGames = (sortValue) => {
  currentSort.value = sortValue;
};

const filterGames = () => {
  currentPage.value = 1; // Reset to first page when search changes
};

// Computed properties
const filteredGames = computed(() => {
  // First filter by category
  let result = allGames.value;
  
  if (selectedCategory.value !== 'all') {
    result = result.filter(game => game.categoryId === selectedCategory.value);
  }
  
  // Then filter by search
  if (searchQuery.value.trim() !== '') {
    const query = searchQuery.value.toLowerCase();
    result = result.filter(game => 
      game.title.toLowerCase().includes(query) ||
      game.description.toLowerCase().includes(query) ||
      game.genre.toLowerCase().includes(query)
    );
  }
  
  // Then sort
  switch(currentSort.value) {
    case 'newest':
      // Sort by release date (most recent first)
      return [...result].sort((a, b) => {
        const dateA = new Date(a.releaseDate);
        const dateB = new Date(b.releaseDate);
        return dateB - dateA;
      });
    case 'rated':
      // Sort by rating (highest first)
      return [...result].sort((a, b) => {
        const ratingA = a.rating.split('★').length - 1;
        const ratingB = b.rating.split('★').length - 1;
        return ratingB - ratingA;
      });
    case 'popular':
    default:
      // Sort by plays (highest first)
      return [...result].sort((a, b) => {
        const playsA = parseFloat(a.plays.replace('M', '000000').replace('K', '000'));
        const playsB = parseFloat(b.plays.replace('M', '000000').replace('K', '000'));
        return playsB - playsA;
      });
  }
});

// Pagination
const totalPages = computed(() => {
  return Math.ceil(filteredGames.value.length / gamesPerPage);
});

const paginatedGames = computed(() => {
  const start = (currentPage.value - 1) * gamesPerPage;
  const end = start + gamesPerPage;
  return filteredGames.value.slice(start, end);
});

// Handle game actions
const handlePlayGame = (gameId) => {
  router.push('/login');
};

const handleAddToFavorites = (gameId) => {
  // In a real app, this would save to user profile
  alert(`Game ${gameId} added to favorites!`);
};

// Lifecycle hooks
onMounted(() => {
  // Reset page when component mounts
  currentPage.value = 1;
});
</script>

<style scoped>
.briskvideos-games {
  background-color: #0a0a0a;
  color: #ffffff;
  min-height: 100vh;
  font-family: 'Inter', 'Roboto', sans-serif;
  padding-top: 64px;
  overflow-x: hidden;
}

/* Hero Section */
.games-hero {
  background: linear-gradient(135deg, rgba(255, 0, 255, 0.3) 0%, rgba(0, 255, 255, 0.3) 100%), url('https://images.pexels.com/photos/7915357/pexels-photo-7915357.jpeg');
  background-size: cover;
  background-position: center;
  padding: 5rem 2rem;
  text-align: center;
  position: relative;
  isolation: isolate;
}

.games-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(10, 10, 10, 0.7);
  z-index: -1;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.games-hero h1 {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #ff00ff, #00ffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 15px rgba(255, 0, 255, 0.5);
}

.games-hero p {
  font-size: 1.2rem;
  color: #cccccc;
  margin-bottom: 2rem;
}

.search-filter {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  max-width: 600px;
  margin: 0 auto;
}

.search-filter input {
  width: 100%;
  padding: 1rem 1.5rem;
  background: rgba(26, 26, 26, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  color: #ffffff;
  font-size: 1rem;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.search-filter input:focus {
  outline: none;
  border-color: #00ffff;
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.3);
}

.search-filter input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.sort-options {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
}

.sort-options button {
  background: rgba(26, 26, 26, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  padding: 0.5rem 1.2rem;
  color: #cccccc;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.sort-options button:hover {
  border-color: #ff00ff;
  color: #ff00ff;
}

.sort-options button.active {
  background: linear-gradient(90deg, rgba(255, 0, 255, 0.2), rgba(0, 255, 255, 0.2));
  border-color: #00ffff;
  color: #00ffff;
}

/* Categories Tabs */
.categories-tabs {
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
  padding: 1.5rem 1rem;
  background: #1a1a1a;
  scrollbar-width: none;
  -ms-overflow-style: none;
  position: sticky;
  top: 64px;
  z-index: 10;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  justify-content: center;
}

.categories-tabs::-webkit-scrollbar {
  display: none;
}

.category-btn {
  background: rgba(26, 26, 26, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  padding: 0.5rem 1.2rem;
  color: #cccccc;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.category-btn:hover {
  border-color: #ff00ff;
  color: #ff00ff;
}

.category-btn.active {
  background: linear-gradient(90deg, rgba(255, 0, 255, 0.2), rgba(0, 255, 255, 0.2));
  border-color: #00ffff;
  color: #00ffff;
}

.category-icon {
  font-size: 1.2rem;
}

/* Games Grid Section */
.games-grid-section {
  padding: 3rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

.games-grid-section h2 {
  font-size: 2.2rem;
  margin-bottom: 2rem;
  color: #ffffff;
  text-align: center;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
}

.games-grid-section h2::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -10px;
  width: 100%;
  height: 3px;
  background: linear-gradient(to right, #ff00ff, #00ffff);
  border-radius: 3px;
}

.games-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.game-card {
  background: #1a1a1a;
  border-radius: 15px;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.05);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.game-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 255, 255, 0.2);
  border-color: rgba(0, 255, 255, 0.3);
}

.game-image-container {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.game-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.game-card:hover .game-image {
  transform: scale(1.05);
}

.game-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.game-card:hover .game-overlay {
  opacity: 1;
}

.play-btn {
  background: linear-gradient(90deg, #ff00ff, #00ffff);
  color: #000000;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.play-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.7);
}

.favorite-btn {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #ffffff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.favorite-btn:hover {
  background: rgba(255, 0, 0, 0.2);
  border-color: #ff0000;
  color: #ff0000;
}

.heart-icon {
  font-size: 1.2rem;
}

.game-info-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%);
  transition: opacity 0.3s ease;
}

.game-card:hover .game-info-overlay {
  opacity: 0;
}

.game-rating {
  color: #ffff00;
}

.game-genre {
  background: rgba(0, 255, 255, 0.2);
  color: #00ffff;
  padding: 0.25rem 0.75rem;
  border-radius: 50px;
  font-size: 0.8rem;
}

.game-details {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.game-details h3 {
  font-size: 1.3rem;
  color: #ffffff;
  margin-bottom: 0.75rem;
}

.game-description {
  color: #aaaaaa;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  line-height: 1.5;
  flex: 1;
}

.game-meta {
  display: flex;
  justify-content: space-between;
  color: #666666;
  font-size: 0.8rem;
}

.game-plays {
  color: #ff00ff;
}

/* Pagination */
.pagination {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 3rem;
}

.page-btn {
  background: rgba(26, 26, 26, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #cccccc;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.page-btn:hover {
  border-color: #ff00ff;
  color: #ff00ff;
}

.page-btn.active {
  background: linear-gradient(90deg, rgba(255, 0, 255, 0.3), rgba(0, 255, 255, 0.3));
  border-color: #00ffff;
  color: #ffffff;
}

/* No results */
.no-results {
  text-align: center;
  padding: 4rem 0;
}

.no-results-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  opacity: 0.5;
}

.no-results h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #ffffff;
}

.no-results p {
  color: #aaaaaa;
}

/* Responsive Design */
@media (max-width: 768px) {
  .games-hero h1 {
    font-size: 2.5rem;
  }
  
  .search-filter {
    width: 100%;
  }
  
  .games-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  
  .categories-tabs {
    justify-content: flex-start;
    padding: 1rem 0.5rem;
  }
}

@media (max-width: 480px) {
  .games-hero h1 {
    font-size: 2rem;
  }
  
  .games-grid {
    grid-template-columns: 1fr;
  }
  
  .games-grid-section {
    padding: 2rem 1rem;
  }
  
  .games-grid-section h2 {
    font-size: 1.8rem;
  }
  
  .category-btn {
    padding: 0.4rem 1rem;
    font-size: 0.8rem;
  }
}
</style>