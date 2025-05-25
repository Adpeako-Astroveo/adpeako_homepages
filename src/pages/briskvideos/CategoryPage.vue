<template>
  <div class="briskvideos-category">
    <section class="category-banner" :style="{ backgroundImage: `url(${categoryData.background})` }">
      <div class="banner-content">
        <div class="category-icon">{{ categoryData.icon }}</div>
        <h1>{{ categoryData.name }}</h1>
        <p>{{ categoryData.description }}</p>
      </div>
    </section>

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
            placeholder="Search in this category..." 
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
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

// State variables
const viewMode = ref('grid');
const sortBy = ref('popular');
const searchQuery = ref('');
const currentPage = ref(1);
const itemsPerPage = 9;

// Category data based on route param
const categoryData = computed(() => {
  const categoryId = route.params.categoryId || 'action';
  
  // Map of category data
  const categoriesMap = {
    action: {
      name: 'Action Games',
      icon: '🔥',
      description: 'Fast-paced games full of excitement, combat, and adrenaline-pumping challenges.',
      background: 'https://images.pexels.com/photos/7915357/pexels-photo-7915357.jpeg'
    },
    adventure: {
      name: 'Adventure Games',
      icon: '🌄',
      description: 'Embark on epic journeys filled with exploration, puzzles, and storytelling.',
      background: 'https://images.pexels.com/photos/6498311/pexels-photo-6498311.jpeg'
    },
    puzzle: {
      name: 'Puzzle Games',
      icon: '🧩',
      description: 'Challenge your mind with brain-teasers, logic puzzles, and creative problem-solving.',
      background: 'https://images.pexels.com/photos/1314435/pexels-photo-1314435.jpeg'
    },
    strategy: {
      name: 'Strategy Games',
      icon: '♟️',
      description: 'Plan, think, and outsmart your opponents with tactical decision-making.',
      background: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg'
    },
    rpg: {
      name: 'Role-Playing Games',
      icon: '⚔️',
      description: 'Immerse yourself in rich worlds where you can create and develop unique characters.',
      background: 'https://images.pexels.com/photos/7360366/pexels-photo-7360366.jpeg'
    },
    simulation: {
      name: 'Simulation Games',
      icon: '🏙️',
      description: 'Experience realistic simulations of real-world activities, from city building to life simulation.',
      background: 'https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg'
    },
    sports: {
      name: 'Sports Games',
      icon: '⚽',
      description: 'Compete in virtual versions of your favorite sports and athletic competitions.',
      background: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg'
    },
    multiplayer: {
      name: 'Multiplayer Games',
      icon: '👥',
      description: 'Connect and compete with players from around the world in real-time gameplay.',
      background: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg'
    },
  };
  
  return categoriesMap[categoryId] || categoriesMap['action'];
});

// Sample games data
const games = ref([
  {
    id: 101,
    title: 'Neon Warriors',
    shortDescription: 'Fast-paced cyberpunk action game',
    description: 'Battle in the neon-lit streets of a cyberpunk metropolis with futuristic weapons and abilities. Compete in ranked matches or team up with friends in this fast-paced action shooter with RPG elements and character progression.',
    category: 'action',
    rating: '★★★★★',
    players: '1.2M',
    likes: '325K',
    dateAdded: 'May 15, 2024',
    featured: true,
    tags: ['Shooter', 'Cyberpunk', 'PvP'],
    image: 'https://images.pexels.com/photos/1637439/pexels-photo-1637439.jpeg'
  },
  {
    id: 102,
    title: 'Cyber Assault',
    shortDescription: 'Team-based tactical shooter',
    description: 'Team up with other players in this tactical first-person shooter set in a dystopian future. Choose from various specialized agents, each with unique abilities, and compete in objective-based matches requiring strategy and coordination.',
    category: 'action',
    rating: '★★★★☆',
    players: '950K',
    likes: '210K',
    dateAdded: 'May 10, 2024',
    featured: false,
    tags: ['FPS', 'Tactical', 'Team-based'],
    image: 'https://images.pexels.com/photos/7915357/pexels-photo-7915357.jpeg'
  },
  {
    id: 103,
    title: 'Night Runners',
    shortDescription: 'Parkour action with stealth elements',
    description: 'Navigate through a city shrouded in darkness using advanced parkour mechanics. Choose between aggressive combat or stealthy approaches as you complete missions and uncover a conspiracy that threatens the city.',
    category: 'action',
    rating: '★★★★☆',
    players: '780K',
    likes: '195K',
    dateAdded: 'April 28, 2024',
    featured: false,
    tags: ['Parkour', 'Stealth', 'Open World'],
    image: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg'
  },
  {
    id: 104,
    title: 'Velocity Surge',
    shortDescription: 'High-speed racing with combat',
    description: 'Race at breakneck speeds through futuristic tracks while engaging in vehicular combat. Customize your vehicle with weapons and defensive systems, and compete in various race modes and battle arenas.',
    category: 'action',
    rating: '★★★★★',
    players: '1.1M',
    likes: '290K',
    dateAdded: 'May 5, 2024',
    featured: true,
    tags: ['Racing', 'Combat', 'Customization'],
    image: 'https://images.pexels.com/photos/2522923/pexels-photo-2522923.jpeg'
  },
  {
    id: 105,
    title: 'Galactic Defenders',
    shortDescription: 'Space combat with strategic elements',
    description: 'Pilot advanced spacecraft in this space combat simulator with strategic elements. Defend humanity against alien threats, upgrade your fleet, and engage in epic space battles across a vast galaxy.',
    category: 'action',
    rating: '★★★★☆',
    players: '620K',
    likes: '150K',
    dateAdded: 'April 22, 2024',
    featured: false,
    tags: ['Space', 'Sci-Fi', 'Combat'],
    image: 'https://images.pexels.com/photos/1257860/pexels-photo-1257860.jpeg'
  },
  {
    id: 106,
    title: 'Shadow Assassins',
    shortDescription: 'Stealth action with precise combat',
    description: 'Become an elite assassin in feudal Japan, using stealth, strategy, and precise combat to eliminate targets. Navigate through beautifully crafted environments and choose your approach to each mission.',
    category: 'action',
    rating: '★★★★★',
    players: '890K',
    likes: '230K',
    dateAdded: 'May 12, 2024',
    featured: false,
    tags: ['Stealth', 'Historical', 'Combat'],
    image: 'https://images.pexels.com/photos/5625004/pexels-photo-5625004.jpeg'
  },
  {
    id: 107,
    title: 'Zombie Outbreak',
    shortDescription: 'Survival horror action',
    description: 'Survive in a world overrun by zombies, scavenging for resources and weapons. Team up with other survivors or go solo as you fight against the undead and rival human factions in this intense survival horror experience.',
    category: 'action',
    rating: '★★★★☆',
    players: '850K',
    likes: '220K',
    dateAdded: 'April 18, 2024',
    featured: false,
    tags: ['Horror', 'Survival', 'Zombies'],
    image: 'https://images.pexels.com/photos/7534366/pexels-photo-7534366.jpeg'
  },
  {
    id: 108,
    title: 'Mech Warriors',
    shortDescription: 'Giant robot battle arena',
    description: 'Pilot massive mechanized war machines in this action-packed mech combat game. Customize your mech with various weapons, defensive systems, and mobility upgrades to dominate the battlefield.',
    category: 'action',
    rating: '★★★★☆',
    players: '720K',
    likes: '180K',
    dateAdded: 'May 7, 2024',
    featured: false,
    tags: ['Mechs', 'Combat', 'Customization'],
    image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg'
  },
  {
    id: 109,
    title: 'Street Fighters',
    shortDescription: 'Classic arcade fighting game',
    description: 'Master various fighting techniques and special moves in this homage to classic arcade fighting games. Choose from a diverse roster of fighters, each with unique abilities and fighting styles.',
    category: 'action',
    rating: '★★★★★',
    players: '1.4M',
    likes: '350K',
    dateAdded: 'April 30, 2024',
    featured: true,
    tags: ['Fighting', 'Arcade', 'PvP'],
    image: 'https://images.pexels.com/photos/939697/pexels-photo-939697.jpeg'
  },
  {
    id: 110,
    title: 'Urban Chaos',
    shortDescription: 'Open-world action adventure',
    description: 'Explore a vast open world city filled with activities, missions, and side quests. Build your criminal empire or work to take down corruption in this immersive urban playground with endless possibilities.',
    category: 'action',
    rating: '★★★★☆',
    players: '980K',
    likes: '250K',
    dateAdded: 'May 3, 2024',
    featured: false,
    tags: ['Open World', 'Crime', 'Sandbox'],
    image: 'https://images.pexels.com/photos/1634278/pexels-photo-1634278.jpeg'
  },
]);

// Computed properties
const filteredGames = computed(() => {
  let result = games.value.filter(game => game.category === route.params.categoryId);
  
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
      // Assuming dateAdded is in a format that can be compared
      return [...result].sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
    case 'rating':
      // Count the number of full stars
      return [...result].sort((a, b) => {
        const ratingA = a.rating.split('★').length - 1;
        const ratingB = b.rating.split('★').length - 1;
        return ratingB - ratingA;
      });
    case 'popular':
    default:
      // Sort by number of players
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
.briskvideos-category {
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
}

.category-banner::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(10, 10, 10, 0.7);
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
}
</style>