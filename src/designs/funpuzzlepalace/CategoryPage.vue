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
const isLoading = ref(true);

// Category data mapping
const categoriesData = {
  puzzle: {
    name: 'Puzzle Games',
    icon: '🧩',
    description: 'Challenge your mind with brain teasers, jigsaw puzzles, and creative problem-solving.',
    background: 'https://images.pexels.com/photos/1314435/pexels-photo-1314435.jpeg'
  },
  action: {
    name: 'Action Games',
    icon: '💥',
    description: 'Fast-paced games full of excitement, combat, and adrenaline-pumping challenges.',
    background: 'https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg'
  },
  adventure: {
    name: 'Adventure Games',
    icon: '🗺️',
    description: 'Embark on epic journeys filled with exploration, puzzles, and storytelling.',
    background: 'https://images.pexels.com/photos/1174746/pexels-photo-1174746.jpeg'
  },
  strategy: {
    name: 'Strategy Games',
    icon: '🧠',
    description: 'Plan, think, and outsmart your opponents with tactical decision-making.',
    background: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg'
  },
  multiplayer: {
    name: 'Multiplayer Games',
    icon: '👥',
    description: 'Connect and compete with players from around the world in real-time gameplay.',
    background: 'https://images.pexels.com/photos/159354/video-game-controller-joystick-game-controller-159354.jpeg'
  }
};

// Game data
const allGames = ref([
  // Puzzle games
  {
    id: 101,
    title: 'Puzzle Master 3D',
    description: 'Challenging 3D puzzle game with hundreds of unique levels.',
    longDescription: 'Dive into a world of intricate 3D puzzles that will test your spatial reasoning and problem-solving abilities. With hundreds of unique levels of increasing complexity, Puzzle Master 3D offers endless hours of brain-teasing fun for puzzle enthusiasts of all levels.',
    category: 'puzzle',
    rating: '★★★★★',
    players: '5.2M',
    likes: '980K',
    dateAdded: 'May 15, 2024',
    featured: true,
    tags: ['3D', 'Logic', 'Spatial'],
    image: 'https://images.pexels.com/photos/1314435/pexels-photo-1314435.jpeg'
  },
  {
    id: 102,
    title: 'Word Connect Pro',
    description: 'Find hidden words and solve crossword-style puzzles.',
    longDescription: 'Challenge your vocabulary and word-finding skills with Word Connect Pro. Swipe to connect letters and form words in this addictive word puzzle game. With thousands of levels, daily challenges, and multiple game modes, Word Connect Pro is perfect for word game enthusiasts.',
    category: 'puzzle',
    rating: '★★★★☆',
    players: '3.8M',
    likes: '720K',
    dateAdded: 'May 10, 2024',
    featured: false,
    tags: ['Word', 'Vocabulary', 'Language'],
    image: 'https://images.pexels.com/photos/278887/pexels-photo-278887.jpeg'
  },
  {
    id: 103,
    title: 'Jewel Match Blitz',
    description: 'Fast-paced match-3 puzzle game with special power-ups.',
    longDescription: 'Match colorful jewels in this fast-paced and visually stunning match-3 game. Create powerful combos, unlock special power-ups, and progress through hundreds of increasingly challenging levels. With time-limited events and competitive leaderboards, Jewel Match Blitz offers endless match-3 entertainment.',
    category: 'puzzle',
    rating: '★★★★☆',
    players: '7.5M',
    likes: '1.2M',
    dateAdded: 'April 28, 2024',
    featured: false,
    tags: ['Match-3', 'Casual', 'Colorful'],
    image: 'https://images.pexels.com/photos/1329061/pexels-photo-1329061.jpeg'
  },
  {
    id: 104,
    title: 'Logic Masters',
    description: 'Collection of logic puzzles including sudoku and nonograms.',
    longDescription: 'Logic Masters brings together the best logic puzzles in one premium package. Test your deductive reasoning with sudoku, nonograms, kakuro, slitherlink, and many more classic and innovative logic puzzles. With thousands of hand-crafted puzzles and difficulty levels from beginner to expert, Logic Masters is the ultimate brain training app.',
    category: 'puzzle',
    rating: '★★★★★',
    players: '2.9M',
    likes: '650K',
    dateAdded: 'May 5, 2024',
    featured: true,
    tags: ['Logic', 'Sudoku', 'Brain Training'],
    image: 'https://images.pexels.com/photos/6686103/pexels-photo-6686103.jpeg'
  },
  {
    id: 105,
    title: 'Escape Room Challenge',
    description: 'Virtual escape room puzzles with immersive stories.',
    longDescription: 'Experience the thrill of escape rooms on your mobile device with Escape Room Challenge. Solve intricate puzzles, find hidden objects, and decrypt codes to escape from beautifully designed virtual rooms. Each room features unique themes and storytelling that will immerse you in the experience.',
    category: 'puzzle',
    rating: '★★★★☆',
    players: '1.7M',
    likes: '420K',
    dateAdded: 'April 22, 2024',
    featured: false,
    tags: ['Escape Room', 'Adventure', 'Mystery'],
    image: 'https://images.pexels.com/photos/7931575/pexels-photo-7931575.jpeg'
  },
  
  // Action games
  {
    id: 201,
    title: 'Cyber Combat',
    description: 'Fast-paced action shooter in a futuristic cyberpunk world.',
    longDescription: 'Enter a dystopian future in Cyber Combat, where you\'ll battle through neon-lit streets and corporate megastructures. Featuring fluid movement mechanics, a diverse arsenal of high-tech weapons, and cybernetic augmentations, this fast-paced shooter delivers non-stop action and adrenaline-pumping combat scenarios.',
    category: 'action',
    rating: '★★★★★',
    players: '6.3M',
    likes: '1.5M',
    dateAdded: 'May 12, 2024',
    featured: true,
    tags: ['Shooter', 'Cyberpunk', 'Sci-Fi'],
    image: 'https://images.pexels.com/photos/7915357/pexels-photo-7915357.jpeg'
  },
  {
    id: 202,
    title: 'Ninja Warrior',
    description: 'Stealth-based action game with martial arts combat.',
    longDescription: 'Master the way of the ninja in this stealth-action adventure. Utilize shadows, acrobatic movements, and ancient martial arts techniques to overcome enemies and complete missions. With a deep combat system, upgradable abilities, and challenging boss fights, Ninja Warrior offers a true test of skill and strategy.',
    category: 'action',
    rating: '★★★★☆',
    players: '4.7M',
    likes: '890K',
    dateAdded: 'April 30, 2024',
    featured: false,
    tags: ['Ninja', 'Stealth', 'Martial Arts'],
    image: 'https://images.pexels.com/photos/5625004/pexels-photo-5625004.jpeg'
  },
  
  // Adventure games
  {
    id: 301,
    title: 'Lost Islands',
    description: 'Open-world adventure with treasure hunting and exploration.',
    longDescription: 'Embark on an epic journey across a vast archipelago of mysterious islands in Lost Islands. As a shipwrecked explorer, you\'ll hunt for legendary treasures, solve ancient puzzles, and uncover the secrets of a forgotten civilization. With stunning visuals, dynamic weather systems, and a day-night cycle, this open-world adventure offers complete immersion.',
    category: 'adventure',
    rating: '★★★★★',
    players: '5.8M',
    likes: '1.3M',
    dateAdded: 'May 8, 2024',
    featured: true,
    tags: ['Open World', 'Exploration', 'Treasure Hunting'],
    image: 'https://images.pexels.com/photos/1174746/pexels-photo-1174746.jpeg'
  },
  
  // Strategy games
  {
    id: 401,
    title: 'Kingdom Commander',
    description: 'Build your medieval kingdom and lead armies into battle.',
    longDescription: 'Rule your own medieval realm in Kingdom Commander. Construct and manage your castle, gather resources, train diverse military units, and forge alliances or wage war against neighboring kingdoms. With deep strategic gameplay, diplomatic options, and epic real-time battles, this game offers the complete kingdom management experience.',
    category: 'strategy',
    rating: '★★★★☆',
    players: '3.4M',
    likes: '780K',
    dateAdded: 'May 3, 2024',
    featured: false,
    tags: ['Medieval', 'Kingdom Building', 'RTS'],
    image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg'
  },
  
  // Multiplayer games
  {
    id: 501,
    title: 'Battle Royale Arena',
    description: 'Compete against 100 players in an intense survival game.',
    longDescription: 'Drop into a massive battlefield where only one player can emerge victorious in Battle Royale Arena. Scavenge for weapons and resources, outmaneuver opponents, and survive in an ever-shrinking play area. With various character classes, customizable loadouts, and team-based modes, this multiplayer experience offers endless competitive gameplay.',
    category: 'multiplayer',
    rating: '★★★★★',
    players: '12.5M',
    likes: '3.2M',
    dateAdded: 'April 25, 2024',
    featured: true,
    tags: ['Battle Royale', 'PvP', 'Survival'],
    image: 'https://images.pexels.com/photos/159354/video-game-controller-joystick-game-controller-159354.jpeg'
  }
]);

// Computed properties
const categoryId = computed(() => route.params.categoryId || 'puzzle');

const categoryData = computed(() => {
  return categoriesData[categoryId.value] || categoriesData.puzzle;
});

const filteredGames = computed(() => {
  let result = allGames.value.filter(game => game.category === categoryId.value);
  
  // Filter by search query
  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase();
    result = result.filter(game => 
      game.title.toLowerCase().includes(query) ||
      game.description.toLowerCase().includes(query) ||
      game.longDescription.toLowerCase().includes(query) ||
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

// Featured games for this category
const featuredGamesForCategory = computed(() => {
  return filteredGames.value
    .filter(game => game.featured)
    .slice(0, 3);
});

// Methods
const playGame = (gameId) => {
  router.push('/funpuzzlepalace/login');
};

const addToFavorites = (gameId) => {
  // Would normally send this to an API or store it in user profile
  alert(`Game ${gameId} added to favorites!`);
};

const changePage = (page) => {
  currentPage.value = page;
  // Scroll to top of games section
  const gamesSection = document.querySelector('.games-container');
  if (gamesSection) {
    gamesSection.scrollIntoView({ behavior: 'smooth' });
  }
};

// Life cycle
onMounted(() => {
  // Reset pagination when component mounts
  currentPage.value = 1;
  
  // Simulate loading
  setTimeout(() => {
    isLoading.value = false;
  }, 500);
  
  // Animation on scroll effect
  const observerOptions = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.animate').forEach(el => {
    observer.observe(el);
  });
});
</script>

<template>
  <div class="category-page">
    <!-- Category Banner -->
    <section 
      class="category-banner" 
      :style="{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url(${categoryData.background})` }"
    >
      <div class="banner-content">
        <div class="category-icon">{{ categoryData.icon }}</div>
        <h1>{{ categoryData.name }}</h1>
        <p>{{ categoryData.description }}</p>
      </div>
    </section>

    <!-- Games Container -->
    <section class="games-container animate">
      <div class="container">
        <!-- Loading state -->
        <div v-if="isLoading" class="loading-state">
          <div class="loader"></div>
          <p>Loading games...</p>
        </div>
        
        <template v-else>
          <!-- Filter Bar -->
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
                placeholder="Search games..." 
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

          <!-- Games List -->
          <div class="games-list" :class="viewMode">
            <!-- Grid View -->
            <template v-if="viewMode === 'grid'">
              <div v-for="game in paginatedGames" :key="game.id" class="game-card">
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
                  <p class="game-desc">{{ game.description }}</p>
                  <div class="game-stats">
                    <span class="game-players">{{ game.players }} Players</span>
                    <span class="game-likes">{{ game.likes }} Likes</span>
                  </div>
                </div>
              </div>
            </template>

            <!-- List View -->
            <template v-else>
              <div v-for="game in paginatedGames" :key="game.id" class="game-list-item">
                <div class="list-img-container">
                  <img :src="game.image" :alt="game.title" class="list-img">
                  <div class="game-badge" v-if="game.featured">Featured</div>
                </div>
                <div class="list-info">
                  <h3>{{ game.title }}</h3>
                  <div class="game-rating">{{ game.rating }}</div>
                  <p class="game-desc">{{ game.longDescription }}</p>
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
          <div class="pagination" v-if="totalPages > 1">
            <button 
              v-for="page in totalPages" 
              :key="page" 
              @click="changePage(page)" 
              class="page-btn"
              :class="{ active: currentPage === page }"
            >
              {{ page }}
            </button>
          </div>
        </template>
      </div>
    </section>

    <!-- Featured Games For Category -->
    <section class="featured-section animate" v-if="featuredGamesForCategory.length > 0">
      <div class="container">
        <h2>Featured {{ categoryData.name }}</h2>
        <div class="featured-slider">
          <div v-for="game in featuredGamesForCategory" :key="game.id" class="featured-slide">
            <img :src="game.image" :alt="game.title" class="slide-img">
            <div class="slide-overlay">
              <h3>{{ game.title }}</h3>
              <p>{{ game.description }}</p>
              <button @click="playGame(game.id)" class="play-now-btn">Play Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.category-page {
  background-color: #0f172a;
  color: #e2e8f0;
  font-family: 'Inter', sans-serif;
  min-height: 100vh;
  padding-top: 70px; /* Account for navbar */
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Category Banner */
.category-banner {
  height: 400px;
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.banner-content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 800px;
  padding: 0 2rem;
}

.category-icon {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  display: inline-block;
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.3) 0%, rgba(236, 72, 153, 0.3) 100%);
  padding: 1.5rem;
  border-radius: 50%;
  box-shadow: 0 0 30px rgba(139, 92, 246, 0.5);
}

.banner-content h1 {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  color: white;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.banner-content p {
  color: #e2e8f0;
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Games Container */
.games-container {
  padding: 5rem 0;
}

/* Loading State */
.loading-state {
  text-align: center;
  padding: 5rem 0;
}

.loader {
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 5px solid rgba(139, 92, 246, 0.3);
  border-radius: 50%;
  border-top-color: #8B5CF6;
  animation: spin 1s linear infinite;
  margin-bottom: 1.5rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Filter Bar */
.filter-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.5rem;
  background: #1e293b;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.filter-controls {
  display: flex;
  gap: 1rem;
  flex: 1;
}

.sort-select {
  background: #0f172a;
  border: 1px solid rgba(139, 92, 246, 0.3);
  color: #e2e8f0;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
}

.sort-select:focus {
  outline: none;
  border-color: #8B5CF6;
}

.search-input {
  flex: 1;
  background: #0f172a;
  border: 1px solid rgba(139, 92, 246, 0.3);
  color: #e2e8f0;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
}

.search-input:focus {
  outline: none;
  border-color: #8B5CF6;
}

.search-input::placeholder {
  color: #64748b;
}

.view-options {
  display: flex;
  gap: 0.5rem;
}

.view-btn {
  background: #0f172a;
  border: 1px solid rgba(139, 92, 246, 0.3);
  color: #94a3b8;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.view-btn.active {
  background: linear-gradient(90deg, rgba(139, 92, 246, 0.2), rgba(236, 72, 153, 0.2));
  border-color: #8B5CF6;
  color: #e2e8f0;
}

/* Games List - Grid View */
.games-list.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.game-card {
  background: #1e293b;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.game-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(139, 92, 246, 0.3);
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
  background: rgba(15, 23, 42, 0.7);
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
  background: linear-gradient(90deg, #8B5CF6, #EC4899);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.play-now-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 0 15px rgba(139, 92, 246, 0.7);
}

.game-badge {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: linear-gradient(90deg, #8B5CF6, #EC4899);
  color: white;
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
  color: #fbbf24;
  font-weight: 600;
  z-index: 2;
  background: rgba(15, 23, 42, 0.8);
  padding: 0.25rem 0.5rem;
  border-radius: 5px;
  backdrop-filter: blur(4px);
}

.game-info {
  padding: 1.5rem;
}

.game-info h3 {
  font-size: 1.3rem;
  margin-bottom: 0.75rem;
  color: #f8fafc;
}

.game-desc {
  color: #94a3b8;
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.game-stats {
  display: flex;
  justify-content: space-between;
  color: #64748b;
  font-size: 0.8rem;
}

.game-players {
  color: #8B5CF6;
}

.game-likes {
  color: #EC4899;
}

/* Games List - List View */
.games-list.list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.game-list-item {
  display: flex;
  background: #1e293b;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.game-list-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(139, 92, 246, 0.3);
}

.list-img-container {
  position: relative;
  width: 250px;
  min-width: 250px;
  height: 250px;
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
  margin-bottom: 0.75rem;
  color: #f8fafc;
}

.list-info .game-rating {
  position: static;
  display: inline-block;
  margin-bottom: 1rem;
  background: none;
  padding: 0;
}

.list-info .game-desc {
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
}

.game-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.game-tag {
  background: rgba(139, 92, 246, 0.2);
  color: #a78bfa;
  padding: 0.25rem 0.75rem;
  border-radius: 50px;
  font-size: 0.8rem;
}

.list-info .game-stats {
  margin-top: auto;
  display: flex;
  gap: 1.5rem;
  justify-content: flex-start;
}

.game-date {
  color: #94a3b8;
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
  background: rgba(236, 72, 153, 0.1);
  border: 1px solid rgba(236, 72, 153, 0.3);
  color: #EC4899;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: center;
  font-size: 1.2rem;
}

.fav-btn:hover {
  background: rgba(236, 72, 153, 0.2);
  border-color: #EC4899;
}

/* Empty state */
.empty-state {
  text-align: center;
  padding: 5rem;
  background: #1e293b;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.empty-icon {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  opacity: 0.7;
}

.empty-state h3 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #f8fafc;
}

.empty-state p {
  color: #94a3b8;
  font-size: 1.1rem;
}

/* Pagination */
.pagination {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 3rem;
}

.page-btn {
  background: #1e293b;
  border: 1px solid rgba(139, 92, 246, 0.3);
  color: #e2e8f0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
}

.page-btn:hover {
  border-color: #8B5CF6;
}

.page-btn.active {
  background: linear-gradient(90deg, #8B5CF6, #EC4899);
  border-color: transparent;
  color: white;
}

/* Featured Section */
.featured-section {
  padding: 5rem 0 8rem;
  background: #1e293b;
}

.featured-section h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #f8fafc;
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
}

.featured-section h2::after {
  content: '';
  position: absolute;
  bottom: -1rem;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, #8B5CF6, #EC4899);
  border-radius: 2px;
}

.featured-slider {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
}

.featured-slide {
  position: relative;
  height: 400px;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
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
  right: 0;
  padding: 2.5rem;
  background: linear-gradient(to top, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0) 100%);
  color: white;
}

.slide-overlay h3 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.slide-overlay p {
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  color: #cbd5e1;
}

/* Animation classes */
.animate {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out;
}

.animate-in {
  opacity: 1;
  transform: translateY(0);
}

/* Responsive design */
@media screen and (max-width: 1024px) {
  .list-img-container {
    width: 200px;
    min-width: 200px;
    height: 200px;
  }
  
  .featured-slider {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
}

@media screen and (max-width: 768px) {
  .category-banner {
    height: 300px;
  }
  
  .category-icon {
    font-size: 3rem;
  }
  
  .banner-content h1 {
    font-size: 2.5rem;
  }
  
  .banner-content p {
    font-size: 1rem;
  }
  
  .filter-bar {
    flex-direction: column;
    gap: 1rem;
  }
  
  .filter-controls {
    width: 100%;
  }
  
  .games-list.grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  
  .game-list-item {
    flex-direction: column;
  }
  
  .list-img-container {
    width: 100%;
    height: 220px;
  }
  
  .list-actions {
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem 1.5rem 1.5rem;
  }
  
  .container {
    padding: 0 1rem;
  }
  
  .featured-slider {
    grid-template-columns: 1fr;
  }
  
  .featured-slide {
    height: 350px;
  }
}

@media screen and (max-width: 480px) {
  .category-banner {
    height: 250px;
  }
  
  .category-icon {
    font-size: 2.5rem;
    padding: 1rem;
  }
  
  .banner-content h1 {
    font-size: 2rem;
  }
  
  .filter-controls {
    flex-direction: column;
    gap: 0.75rem;
  }
  
  .view-options {
    width: 100%;
    justify-content: space-between;
  }
  
  .view-btn {
    flex: 1;
    text-align: center;
  }
  
  .game-tags {
    display: none;
  }
  
  .list-info .game-stats {
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-start;
  }
  
  .slide-overlay h3 {
    font-size: 1.5rem;
  }
  
  .slide-overlay p {
    font-size: 0.9rem;
  }
}
</style>