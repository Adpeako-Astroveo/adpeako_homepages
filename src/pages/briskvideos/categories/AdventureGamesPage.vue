<template>
  <div class="adventure-games-page">
    <!-- Banner Section -->
    <section class="category-banner">
      <div class="banner-content">
        <div class="category-icon">🌄</div>
        <h1>Adventure Games</h1>
        <p>Embark on epic journeys filled with exploration, puzzles, and storytelling</p>
      </div>
    </section>
    
    <!-- Games List Section -->
    <section class="games-container">
      <div class="filter-bar">
        <div class="filter-controls">
          <select v-model="sortBy" class="sort-select">
            <option value="popular">Most Popular</option>
            <option value="latest">Latest</option>
            <option value="rating">Top Rated</option>
          </select>
          <input 
            type="text" 
            v-model="searchQuery" 
            placeholder="Search adventure games..." 
            class="search-input"
          />
        </div>
        <div class="view-options">
          <button 
            @click="viewMode = 'grid'" 
            :class="{ active: viewMode === 'grid' }" 
            class="view-btn"
          >
            Grid
          </button>
          <button 
            @click="viewMode = 'list'" 
            :class="{ active: viewMode === 'list' }" 
            class="view-btn"
          >
            List
          </button>
        </div>
      </div>

      <div class="games-list" :class="viewMode">
        <!-- Grid View -->
        <template v-if="viewMode === 'grid'">
          <div v-for="game in filteredGames" :key="game.id" class="game-card">
            <div class="game-img-container">
              <img :src="game.image" :alt="game.title" class="game-img">
              <div class="game-overlay">
                <button @click="playGame(game.id)" class="play-now-btn">Play Now</button>
              </div>
              <div class="game-badge" v-if="game.featured">Featured</div>
              <div class="game-rating">{{ game.rating }}</div>
            </div>
            <div class="game-info">
              <h3>{{ game.title }}</h3>
              <p class="game-desc">{{ game.shortDescription }}</p>
              <div class="game-stats">
                <span class="game-players">{{ game.players }} Players</span>
                <span class="game-likes">{{ game.likes }} Likes</span>
              </div>
            </div>
          </div>
        </template>

        <!-- List View -->
        <template v-else>
          <div v-for="game in filteredGames" :key="game.id" class="game-list-item">
            <div class="list-img-container">
              <img :src="game.image" :alt="game.title" class="list-img">
              <div class="game-badge" v-if="game.featured">Featured</div>
            </div>
            <div class="list-info">
              <h3>{{ game.title }}</h3>
              <div class="game-rating">{{ game.rating }}</div>
              <p class="game-desc">{{ game.description }}</p>
              <div class="game-tags">
                <span v-for="tag in game.tags" :key="tag" class="game-tag">{{ tag }}</span>
              </div>
              <div class="game-stats">
                <span class="game-players">{{ game.players }} Players</span>
                <span class="game-likes">{{ game.likes }} Likes</span>
                <span class="game-date">Added: {{ game.dateAdded }}</span>
              </div>
            </div>
            <div class="list-actions">
              <button @click="playGame(game.id)" class="play-now-btn list-play-btn">Play Now</button>
              <button @click="addToFavorites(game.id)" class="fav-btn">❤</button>
            </div>
          </div>
        </template>
      </div>

      <!-- Empty state -->
      <div v-if="filteredGames.length === 0" class="empty-state">
        <div class="empty-icon">🔍</div>
        <h3>No games found</h3>
        <p>Try adjusting your search criteria</p>
      </div>

      <!-- Pagination -->
      <div class="pagination">
        <button 
          v-for="page in totalPages" 
          :key="page" 
          @click="currentPage = page" 
          class="page-btn"
          :class="{ active: currentPage === page }"
        >
          {{ page }}
        </button>
      </div>
    </section>

    <!-- Featured Adventure Games -->
    <section class="featured-section">
      <div class="section-container">
        <h2>Featured Adventure Games</h2>
        <div class="featured-slider">
          <div v-for="game in featuredAdventureGames" :key="game.id" class="featured-slide">
            <img :src="game.image" :alt="game.title" class="slide-img">
            <div class="slide-overlay">
              <h3>{{ game.title }}</h3>
              <p>{{ game.shortDescription }}</p>
              <button @click="playGame(game.id)" class="play-now-btn">Play Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// State variables
const viewMode = ref('grid');
const sortBy = ref('popular');
const searchQuery = ref('');
const currentPage = ref(1);
const itemsPerPage = 9;

// Adventure games data
const adventureGames = ref([
  {
    id: 201,
    title: 'Mystic Quest',
    shortDescription: 'Epic fantasy adventure with magical elements',
    description: 'Embark on an epic journey through enchanted realms filled with magic, mystery, and danger. Solve complex puzzles, interact with memorable characters, and uncover an ancient prophecy.',
    category: 'adventure',
    rating: '★★★★★',
    players: '980K',
    likes: '260K',
    dateAdded: 'May 10, 2024',
    featured: true,
    tags: ['Fantasy', 'Magic', 'Open World'],
    image: 'https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg'
  },
  {
    id: 202,
    title: 'Island Explorer',
    shortDescription: 'Survival adventure on a mysterious island',
    description: 'After a shipwreck, you find yourself stranded on a mysterious island filled with ancient ruins and strange creatures. Craft tools, build shelter, and unravel the island\'s secrets to find a way home.',
    category: 'adventure',
    rating: '★★★★☆',
    players: '750K',
    likes: '180K',
    dateAdded: 'April 22, 2024',
    featured: false,
    tags: ['Survival', 'Crafting', 'Exploration'],
    image: 'https://images.pexels.com/photos/1998439/pexels-photo-1998439.jpeg'
  },
  {
    id: 203,
    title: 'Lost Civilization',
    shortDescription: 'Archaeological adventure game',
    description: 'As a renowned archaeologist, you\'re on a quest to find a lost civilization. Travel across the globe to exotic locations, solve intricate puzzles based on ancient knowledge, and discover historical artifacts.',
    category: 'adventure',
    rating: '★★★★★',
    players: '820K',
    likes: '220K',
    dateAdded: 'May 5, 2024',
    featured: true,
    tags: ['Puzzle', 'Historical', 'Exploration'],
    image: 'https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg'
  },
  {
    id: 204,
    title: 'Ocean Depths',
    shortDescription: 'Underwater exploration adventure',
    description: 'Dive into the mysterious depths of the ocean in this visually stunning adventure game. Discover colorful marine life, ancient shipwrecks, and perhaps something more sinister lurking in the deepest trenches.',
    category: 'adventure',
    rating: '★★★★☆',
    players: '680K',
    likes: '175K',
    dateAdded: 'April 18, 2024',
    featured: false,
    tags: ['Underwater', 'Exploration', 'Mystery'],
    image: 'https://images.pexels.com/photos/3856635/pexels-photo-3856635.jpeg'
  },
  {
    id: 205,
    title: 'Time Travelers',
    shortDescription: 'Adventure across different time periods',
    description: 'A mysterious device grants you the ability to travel through time. Journey through different historical eras, from ancient Egypt to the far future, solving puzzles that require understanding of each time period.',
    category: 'adventure',
    rating: '★★★★★',
    players: '920K',
    likes: '240K',
    dateAdded: 'May 8, 2024',
    featured: true,
    tags: ['Time Travel', 'Historical', 'Puzzle'],
    image: 'https://images.pexels.com/photos/3617457/pexels-photo-3617457.jpeg'
  },
  {
    id: 206,
    title: 'Mountain Expedition',
    shortDescription: 'High-altitude climbing adventure',
    description: 'Challenge yourself to climb the world\'s most treacherous peaks in this realistic mountaineering simulation. Face harsh weather, equipment failures, and make life-or-death decisions on your journey to the summit.',
    category: 'adventure',
    rating: '★★★★☆',
    players: '590K',
    likes: '150K',
    dateAdded: 'April 25, 2024',
    featured: false,
    tags: ['Climbing', 'Survival', 'Simulation'],
    image: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg'
  },
  {
    id: 207,
    title: 'Desert Nomad',
    shortDescription: 'Journey across vast desert landscapes',
    description: 'Cross endless sand dunes and ancient ruins as a lone nomad in this atmospheric adventure. Navigate using the stars, manage your water supply, and uncover the history of a forgotten desert civilization.',
    category: 'adventure',
    rating: '★★★★☆',
    players: '620K',
    likes: '160K',
    dateAdded: 'April 15, 2024',
    featured: false,
    tags: ['Desert', 'Survival', 'Atmospheric'],
    image: 'https://images.pexels.com/photos/1366957/pexels-photo-1366957.jpeg'
  },
  {
    id: 208,
    title: 'Jungle Expedition',
    shortDescription: 'Tropical rainforest exploration adventure',
    description: 'Lead an expedition into the heart of a mysterious rainforest teeming with exotic wildlife, hidden temples, and natural hazards. Map uncharted territories and document new species in this immersive adventure.',
    category: 'adventure',
    rating: '★★★★★',
    players: '870K',
    likes: '230K',
    dateAdded: 'May 2, 2024',
    featured: false,
    tags: ['Jungle', 'Exploration', 'Wildlife'],
    image: 'https://images.pexels.com/photos/2896252/pexels-photo-2896252.jpeg'
  },
  {
    id: 209,
    title: 'Pirate\'s Legacy',
    shortDescription: 'Swashbuckling pirate adventure',
    description: 'Set sail on the high seas as a notorious pirate captain. Build your crew, engage in naval battles, search for buried treasure, and become a legend of the seven seas in this epic pirate adventure.',
    category: 'adventure',
    rating: '★★★★☆',
    players: '780K',
    likes: '200K',
    dateAdded: 'April 28, 2024',
    featured: true,
    tags: ['Pirates', 'Naval', 'Treasure Hunting'],
    image: 'https://images.pexels.com/photos/6498311/pexels-photo-6498311.jpeg'
  },
  {
    id: 210,
    title: 'Arctic Survivor',
    shortDescription: 'Survival adventure in frozen wastelands',
    description: 'Stranded in the Arctic after a research mission goes wrong, you must brave extreme cold, wildlife encounters, and dwindling supplies to find your way back to civilization.',
    category: 'adventure',
    rating: '★★★★☆',
    players: '650K',
    likes: '170K',
    dateAdded: 'May 1, 2024',
    featured: false,
    tags: ['Arctic', 'Survival', 'Realistic'],
    image: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg'
  },
]);

// Featured adventure games for slider
const featuredAdventureGames = ref([
  {
    id: 211,
    title: 'The Lost Kingdom',
    shortDescription: 'Discover a forgotten civilization with ancient magic and mythical creatures',
    image: 'https://images.pexels.com/photos/1670187/pexels-photo-1670187.jpeg'
  },
  {
    id: 212,
    title: 'Treasure Hunters',
    shortDescription: 'Search for legendary treasures across exotic locations around the world',
    image: 'https://images.pexels.com/photos/6498311/pexels-photo-6498311.jpeg'
  },
  {
    id: 213,
    title: 'Spirit Walker',
    shortDescription: 'Journey between realms as you solve the mystery of your ancestral heritage',
    image: 'https://images.pexels.com/photos/4666754/pexels-photo-4666754.jpeg'
  }
]);

// Computed properties
const filteredGames = computed(() => {
  let result = adventureGames.value;
  
  // Filter by search query
  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase();
    result = result.filter(game => 
      game.title.toLowerCase().includes(query) ||
      game.description.toLowerCase().includes(query) ||
      (game.tags && game.tags.some(tag => tag.toLowerCase().includes(query)))
    );
  }
  
  // Sort the results
  switch(sortBy.value) {
    case 'latest':
      return [...result].sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
    case 'rating':
      return [...result].sort((a, b) => {
        const ratingA = a.rating.split('★').length - 1;
        const ratingB = b.rating.split('★').length - 1;
        return ratingB - ratingA;
      });
    case 'popular':
    default:
      return [...result].sort((a, b) => {
        const playersA = parseInt(a.players.replace(/[^0-9]/g, ''));
        const playersB = parseInt(b.players.replace(/[^0-9]/g, ''));
        return playersB - playersA;
      });
  }
});

// Pagination
const totalPages = computed(() => {
  return Math.ceil(filteredGames.value.length / itemsPerPage);
});

const paginatedGames = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return filteredGames.value.slice(startIndex, endIndex);
});

// Methods
const playGame = (gameId) => {
  router.push('/login');
};

const addToFavorites = (gameId) => {
  // Would normally send this to an API or store it in user profile
  alert(`Game ${gameId} added to favorites!`);
};

// Life cycle
onMounted(() => {
  // Reset pagination when component mounts
  currentPage.value = 1;
});
</script>

<style scoped>
.adventure-games-page {
  background-color: #0a0a0a;
  color: #ffffff;
  min-height: 100vh;
  font-family: 'Inter', 'Roboto', sans-serif;
  padding-top: 64px;
}

/* Category Banner */
.category-banner {
  height: 300px;
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.pexels.com/photos/6498311/pexels-photo-6498311.jpeg');
}

.banner-content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 800px;
  padding: 0 2rem;
}

.category-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  display: inline-block;
  background: linear-gradient(135deg, rgba(255, 0, 255, 0.2) 0%, rgba(0, 255, 255, 0.2) 100%);
  padding: 1rem;
  border-radius: 50%;
  box-shadow: 0 0 20px rgba(255, 0, 255, 0.5);
}

.banner-content h1 {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #ff00ff, #00ffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 15px rgba(255, 0, 255, 0.5);
}

.banner-content p {
  color: #cccccc;
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
}

/* Games Container */
.games-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
}

/* Filter Bar */
.filter-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  background: #1a1a1a;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.filter-controls {
  display: flex;
  gap: 1rem;
  flex: 1;
}

.sort-select {
  background: #2a2a2a;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #ffffff;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
}

.sort-select:focus {
  outline: none;
  border-color: #00ffff;
}

.search-input {
  flex: 1;
  background: #2a2a2a;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #ffffff;
  padding: 0.5rem 1rem;
  border-radius: 5px;
}

.search-input:focus {
  outline: none;
  border-color: #00ffff;
}

.view-options {
  display: flex;
  gap: 0.5rem;
}

.view-btn {
  background: #2a2a2a;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #cccccc;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.view-btn.active {
  background: linear-gradient(90deg, rgba(255, 0, 255, 0.3), rgba(0, 255, 255, 0.3));
  border-color: #00ffff;
  color: #ffffff;
}

/* Games List - Grid View */
.games-list.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.game-card {
  background: #1a1a1a;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.game-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 255, 255, 0.2);
}

.game-img-container {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.game-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.game-card:hover .game-img {
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
  opacity: 0;
  transition: opacity 0.3s ease;
}

.game-card:hover .game-overlay {
  opacity: 1;
}

.play-now-btn {
  background: linear-gradient(90deg, #ff00ff, #00ffff);
  color: #000000;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.play-now-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 0 15px rgba(255, 0, 255, 0.7);
}

.game-badge {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: #ff00ff;
  color: #ffffff;
  padding: 0.25rem 0.75rem;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 600;
  z-index: 2;
}

.game-rating {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  color: #ffff00;
  font-weight: 600;
  z-index: 2;
  background: rgba(0, 0, 0, 0.5);
  padding: 0.25rem 0.5rem;
  border-radius: 5px;
}

.game-info {
  padding: 1.5rem;
}

.game-info h3 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: #ffffff;
}

.game-desc {
  color: #aaaaaa;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.game-stats {
  display: flex;
  justify-content: space-between;
  color: #666666;
  font-size: 0.8rem;
}

.game-players {
  color: #ff00ff;
}

.game-likes {
  color: #00ffff;
}

/* Games List - List View */
.games-list.list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.game-list-item {
  display: flex;
  background: #1a1a1a;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.game-list-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 255, 255, 0.2);
}

.list-img-container {
  position: relative;
  width: 200px;
  min-width: 200px;
}

.list-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.list-info {
  flex: 1;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
}

.list-info h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #ffffff;
}

.list-info .game-rating {
  position: static;
  display: inline-block;
  margin-bottom: 1rem;
}

.list-info .game-desc {
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.game-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.game-tag {
  background: rgba(0, 255, 255, 0.1);
  color: #00ffff;
  padding: 0.25rem 0.75rem;
  border-radius: 50px;
  font-size: 0.8rem;
}

.list-info .game-stats {
  margin-top: auto;
  display: flex;
  gap: 1.5rem;
}

.game-date {
  color: #aaaaaa;
}

.list-actions {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.5rem;
  gap: 1rem;
}

.list-play-btn {
  white-space: nowrap;
}

.fav-btn {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #ff0000;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: center;
}

.fav-btn:hover {
  background: rgba(255, 0, 0, 0.1);
  border-color: #ff0000;
}

/* Empty state */
.empty-state {
  text-align: center;
  padding: 4rem;
}

.empty-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  opacity: 0.5;
}

.empty-state h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.empty-state p {
  color: #aaaaaa;
}

/* Pagination */
.pagination {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 3rem;
}

.page-btn {
  background: #2a2a2a;
  border: 1px solid rgba(255, 255, 255, 0.1);
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

.page-btn:hover {
  border-color: #ff00ff;
}

.page-btn.active {
  background: linear-gradient(90deg, rgba(255, 0, 255, 0.3), rgba(0, 255, 255, 0.3));
  border-color: #00ffff;
}

/* Featured Section */
.featured-section {
  padding: 5rem 0;
  background: #151515;
}

.section-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.featured-section h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  color: #ffffff;
  text-align: center;
  position: relative;
}

.featured-section h2::after {
  content: '';
  position: absolute;
  bottom: -1rem;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 4px;
  background: linear-gradient(90deg, #ff00ff, #00ffff);
  border-radius: 2px;
}

.featured-slider {
  display: flex;
  overflow-x: auto;
  gap: 2rem;
  padding: 1rem 0;
  scroll-snap-type: x mandatory;
}

.featured-slider::-webkit-scrollbar {
  height: 8px;
}

.featured-slider::-webkit-scrollbar-track {
  background: #2a2a2a;
  border-radius: 4px;
}

.featured-slider::-webkit-scrollbar-thumb {
  background: linear-gradient(90deg, #ff00ff, #00ffff);
  border-radius: 4px;
}

.featured-slide {
  flex: 0 0 80%;
  min-width: 300px;
  height: 400px;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  scroll-snap-align: start;
}

.slide-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slide-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 2rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 100%);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.slide-overlay h3 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #ffffff;
}

.slide-overlay p {
  color: #cccccc;
  margin-bottom: 1.5rem;
  font-size: 1rem;
  max-width: 600px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .banner-content h1 {
    font-size: 2.2rem;
  }
  
  .filter-bar {
    flex-direction: column;
    gap: 1rem;
  }
  
  .filter-controls {
    width: 100%;
  }
  
  .game-list-item {
    flex-direction: column;
  }
  
  .list-img-container {
    width: 100%;
    height: 200px;
  }
  
  .list-actions {
    flex-direction: row;
    padding: 1rem;
  }
  
  .featured-slide {
    flex: 0 0 90%;
  }
  
  .slide-overlay h3 {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .category-banner {
    height: 250px;
  }
  
  .banner-content h1 {
    font-size: 1.8rem;
  }
  
  .category-icon {
    font-size: 2.5rem;
  }
  
  .games-container {
    padding: 1rem;
  }
  
  .filter-controls {
    flex-direction: column;
  }
  
  .featured-slide {
    flex: 0 0 100%;
    height: 300px;
  }
}
</style>