<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

// Get the category from the route params
const categorySlug = computed(() => {
  return route.params.categoryId || 'action';
});

// Category information
const categoryInfo = computed(() => {
  const categoryData = {
    'action': {
      title: 'Action Games',
      description: 'Fast-paced games with intense gameplay and exciting challenges',
      icon: '🔥',
      bgImage: 'https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg'
    },
    'puzzle': {
      title: 'Puzzle Games',
      description: 'Challenge your mind with brain-teasing puzzles and clever challenges',
      icon: '🧩',
      bgImage: 'https://images.pexels.com/photos/1314435/pexels-photo-1314435.jpeg'
    },
    'adventure': {
      title: 'Adventure Games',
      description: 'Embark on epic journeys and explore fascinating worlds',
      icon: '🌄',
      bgImage: 'https://images.pexels.com/photos/1174746/pexels-photo-1174746.jpeg'
    },
    'strategy': {
      title: 'Strategy Games',
      description: 'Plan, think, and outmaneuver your opponents with tactical gameplay',
      icon: '♟️',
      bgImage: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg'
    },
    'multiplayer': {
      title: 'Multiplayer Games',
      description: 'Connect and compete with players from around the world',
      icon: '👥',
      bgImage: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg'
    }
  };
  
  return categoryData[categorySlug.value] || categoryData['action'];
});

// Games data
const allGames = ref([
  // Action Games
  {
    id: 'neon-strike',
    title: 'Neon Strike',
    category: 'action',
    tags: ['Shooter', 'Sci-Fi', 'PvP'],
    description: 'Fast-paced futuristic shooter with neon visuals and intense multiplayer battles.',
    image: 'https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg',
    rating: 4.8,
    players: '1.2M',
    releaseDate: '2024-01-15'
  },
  {
    id: 'cyber-ninja',
    title: 'Cyber Ninja',
    category: 'action',
    tags: ['Platformer', 'Cyberpunk', 'Combat'],
    description: 'Run, jump, and slash your way through a neon-lit cyberpunk world as an enhanced ninja warrior.',
    image: 'https://images.pexels.com/photos/7915357/pexels-photo-7915357.jpeg',
    rating: 4.7,
    players: '950K',
    releaseDate: '2024-02-20'
  },
  {
    id: 'mech-assault',
    title: 'Mech Assault',
    category: 'action',
    tags: ['Robots', 'Battle', 'Strategy'],
    description: 'Pilot massive mechanized war machines in epic battles across futuristic landscapes.',
    image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg',
    rating: 4.6,
    players: '780K',
    releaseDate: '2024-03-05'
  },
  {
    id: 'zombie-wasteland',
    title: 'Zombie Wasteland',
    category: 'action',
    tags: ['Survival', 'Horror', 'Open World'],
    description: 'Survive in a post-apocalyptic world overrun by the undead. Scavenge, craft, and fight to stay alive.',
    image: 'https://images.pexels.com/photos/7534366/pexels-photo-7534366.jpeg',
    rating: 4.9,
    players: '1.5M',
    releaseDate: '2023-11-10'
  },
  {
    id: 'street-racer',
    title: 'Street Racer',
    category: 'action',
    tags: ['Racing', 'Urban', 'Customization'],
    description: 'Race through city streets at breakneck speeds, upgrade your cars, and become the ultimate street racing champion.',
    image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg',
    rating: 4.5,
    players: '620K',
    releaseDate: '2024-01-30'
  },
  
  // Puzzle Games
  {
    id: 'cosmic-connection',
    title: 'Cosmic Connection',
    category: 'puzzle',
    tags: ['Match-3', 'Space', 'Casual'],
    description: 'Connect cosmic elements in this addictive match-3 puzzle game with stunning space visuals.',
    image: 'https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg',
    rating: 4.7,
    players: '2.3M',
    releaseDate: '2023-12-05'
  },
  {
    id: 'mind-maze',
    title: 'Mind Maze',
    category: 'puzzle',
    tags: ['Logic', 'Brain Training', 'Casual'],
    description: 'Challenge your brain with increasingly complex mazes and puzzles that test your spatial reasoning.',
    image: 'https://images.pexels.com/photos/2736499/pexels-photo-2736499.jpeg',
    rating: 4.9,
    players: '1.8M',
    releaseDate: '2024-02-10'
  },
  {
    id: 'cube-quest',
    title: 'Cube Quest',
    category: 'puzzle',
    tags: ['3D Puzzle', 'Adventure', 'Physics'],
    description: 'Manipulate 3D cubes through increasingly challenging levels in this mind-bending puzzle adventure.',
    image: 'https://images.pexels.com/photos/1314435/pexels-photo-1314435.jpeg',
    rating: 4.8,
    players: '950K',
    releaseDate: '2023-11-22'
  },
  {
    id: 'word-wizards',
    title: 'Word Wizards',
    category: 'puzzle',
    tags: ['Word', 'Educational', 'Casual'],
    description: 'Cast spells by forming words in this magical word puzzle game that enhances your vocabulary.',
    image: 'https://images.pexels.com/photos/278887/pexels-photo-278887.jpeg',
    rating: 4.6,
    players: '1.1M',
    releaseDate: '2024-01-15'
  },
  {
    id: 'color-connect',
    title: 'Color Connect',
    category: 'puzzle',
    tags: ['Pattern', 'Relaxing', 'Strategy'],
    description: 'Connect matching colors to create pathways in this visually stunning and relaxing puzzle game.',
    image: 'https://images.pexels.com/photos/2860807/pexels-photo-2860807.jpeg',
    rating: 4.7,
    players: '1.4M',
    releaseDate: '2023-10-30'
  },
  
  // Adventure Games
  {
    id: 'lost-expedition',
    title: 'Lost Expedition',
    category: 'adventure',
    tags: ['Exploration', 'Story-Driven', 'Survival'],
    description: 'Embark on a perilous journey through uncharted territories in search of a legendary lost city.',
    image: 'https://images.pexels.com/photos/1174746/pexels-photo-1174746.jpeg',
    rating: 4.9,
    players: '780K',
    releaseDate: '2023-12-15'
  },
  {
    id: 'ocean-depths',
    title: 'Ocean Depths',
    category: 'adventure',
    tags: ['Underwater', 'Mystery', 'Exploration'],
    description: 'Dive into the mysterious depths of the ocean to uncover ancient secrets and hidden treasures.',
    image: 'https://images.pexels.com/photos/3856635/pexels-photo-3856635.jpeg',
    rating: 4.7,
    players: '650K',
    releaseDate: '2024-02-05'
  },
  {
    id: 'space-pioneer',
    title: 'Space Pioneer',
    category: 'adventure',
    tags: ['Sci-Fi', 'Exploration', 'Sandbox'],
    description: 'Explore distant planets, establish colonies, and encounter alien civilizations in this space adventure.',
    image: 'https://images.pexels.com/photos/1274260/pexels-photo-1274260.jpeg',
    rating: 4.8,
    players: '920K',
    releaseDate: '2023-11-10'
  },
  {
    id: 'mystic-realms',
    title: 'Mystic Realms',
    category: 'adventure',
    tags: ['Fantasy', 'RPG', 'Open World'],
    description: 'Journey through magical lands filled with mythical creatures, ancient magic, and epic quests.',
    image: 'https://images.pexels.com/photos/3617457/pexels-photo-3617457.jpeg',
    rating: 4.9,
    players: '1.3M',
    releaseDate: '2024-01-20'
  },
  {
    id: 'desert-wanderer',
    title: 'Desert Wanderer',
    category: 'adventure',
    tags: ['Exploration', 'Survival', 'Mystery'],
    description: 'Survive the harsh desert landscape while uncovering the secrets of an ancient civilization.',
    image: 'https://images.pexels.com/photos/1366957/pexels-photo-1366957.jpeg',
    rating: 4.6,
    players: '580K',
    releaseDate: '2023-10-15'
  },
  
  // Strategy Games
  {
    id: 'galaxy-command',
    title: 'Galaxy Command',
    category: 'strategy',
    tags: ['Space', '4X', 'Resource Management'],
    description: 'Build a galactic empire, research advanced technologies, and conquer star systems in this epic space strategy game.',
    image: 'https://images.pexels.com/photos/1257860/pexels-photo-1257860.jpeg',
    rating: 4.8,
    players: '720K',
    releaseDate: '2023-11-05'
  },
  {
    id: 'medieval-kingdoms',
    title: 'Medieval Kingdoms',
    category: 'strategy',
    tags: ['Historical', 'City Building', 'Warfare'],
    description: 'Rule your medieval kingdom, build impressive castles, and lead armies to victory in epic battles.',
    image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg',
    rating: 4.7,
    players: '850K',
    releaseDate: '2024-01-10'
  },
  {
    id: 'cyber-corporation',
    title: 'Cyber Corporation',
    category: 'strategy',
    tags: ['Business Sim', 'Cyberpunk', 'Economy'],
    description: 'Build and manage your cyberpunk corporation in a dystopian future where technology rules.',
    image: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg',
    rating: 4.6,
    players: '620K',
    releaseDate: '2023-12-20'
  },
  {
    id: 'war-commander',
    title: 'War Commander',
    category: 'strategy',
    tags: ['Military', 'Tactics', 'Real-time'],
    description: 'Command your military forces in real-time tactical battles across diverse battlefields.',
    image: 'https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg',
    rating: 4.9,
    players: '930K',
    releaseDate: '2024-02-15'
  },
  {
    id: 'nature-architect',
    title: 'Nature Architect',
    category: 'strategy',
    tags: ['Eco', 'Building', 'Simulation'],
    description: 'Design and build sustainable ecosystems that balance nature and technology in this unique strategy game.',
    image: 'https://images.pexels.com/photos/262488/pexels-photo-262488.jpeg',
    rating: 4.7,
    players: '740K',
    releaseDate: '2023-10-25'
  },
  
  // Multiplayer Games
  {
    id: 'arena-champions',
    title: 'Arena Champions',
    category: 'multiplayer',
    tags: ['PvP', 'Battle Arena', 'Team-based'],
    description: 'Team up with friends and battle other players in fast-paced arena combat with unique champions.',
    image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg',
    rating: 4.9,
    players: '2.5M',
    releaseDate: '2023-11-15'
  },
  {
    id: 'racing-rivals',
    title: 'Racing Rivals',
    category: 'multiplayer',
    tags: ['Racing', 'Competition', 'Customization'],
    description: 'Race against players worldwide on spectacular tracks with fully customizable vehicles.',
    image: 'https://images.pexels.com/photos/10875109/pexels-photo-10875109.jpeg',
    rating: 4.7,
    players: '1.8M',
    releaseDate: '2024-01-05'
  },
  {
    id: 'build-together',
    title: 'Build Together',
    category: 'multiplayer',
    tags: ['Cooperative', 'Building', 'Creative'],
    description: 'Collaborate with friends to build amazing structures and worlds in this creative multiplayer game.',
    image: 'https://images.pexels.com/photos/7256731/pexels-photo-7256731.jpeg',
    rating: 4.8,
    players: '1.5M',
    releaseDate: '2023-12-10'
  },
  {
    id: 'battle-royale-masters',
    title: 'Battle Royale Masters',
    category: 'multiplayer',
    tags: ['Battle Royale', 'Survival', 'Shooter'],
    description: 'Drop into an ever-shrinking battlefield and be the last player standing in this intense battle royale game.',
    image: 'https://images.pexels.com/photos/7915357/pexels-photo-7915357.jpeg',
    rating: 4.9,
    players: '3.2M',
    releaseDate: '2023-10-20'
  },
  {
    id: 'puzzle-party',
    title: 'Puzzle Party',
    category: 'multiplayer',
    tags: ['Casual', 'Puzzle', 'Party Game'],
    description: 'Solve puzzles together or compete against friends in this fun-filled multiplayer puzzle game.',
    image: 'https://images.pexels.com/photos/4339956/pexels-photo-4339956.jpeg',
    rating: 4.6,
    players: '1.1M',
    releaseDate: '2024-02-25'
  }
]);

// Filtered games based on category
const filteredGames = computed(() => {
  return allGames.value.filter(game => game.category === categorySlug.value);
});

// Sorting and filtering state
const sortBy = ref('popular'); // 'popular', 'newest', 'rating'
const viewMode = ref('grid'); // 'grid' or 'list'
const searchQuery = ref('');

// Sorting function
const sortGames = (games) => {
  const gamesCopy = [...games];
  
  switch (sortBy.value) {
    case 'newest':
      return gamesCopy.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
    case 'rating':
      return gamesCopy.sort((a, b) => b.rating - a.rating);
    case 'popular':
    default:
      // Assuming that players count is a string like "1.2M" or "950K"
      return gamesCopy.sort((a, b) => {
        const getNumericValue = (str) => {
          const num = parseFloat(str.replace('M', '').replace('K', ''));
          return str.includes('M') ? num * 1000000 : (str.includes('K') ? num * 1000 : num);
        };
        return getNumericValue(b.players) - getNumericValue(a.players);
      });
  }
};

// Filtered and sorted games
const displayedGames = computed(() => {
  let games = filteredGames.value;
  
  // Filter by search query
  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase();
    games = games.filter(game => 
      game.title.toLowerCase().includes(query) || 
      game.description.toLowerCase().includes(query) ||
      game.tags.some(tag => tag.toLowerCase().includes(query))
    );
  }
  
  // Sort games
  return sortGames(games);
});

// Handle play game button
const playGame = (gameId) => {
  router.push('/funpuzzlepalace/login');
};

// Handle add to favorites
const addToFavorites = (gameId) => {
  // This would typically interact with a user's account
  // For now, just show a notification
  alert(`Game added to favorites!`);
};
</script>

<template>
  <div class="category-page">
    <!-- Category Banner -->
    <section 
      class="category-banner" 
      :style="{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.9)), url(${categoryInfo.bgImage})` }"
    >
      <div class="banner-content">
        <div class="category-icon">{{ categoryInfo.icon }}</div>
        <h1 class="glowing-text">{{ categoryInfo.title }}</h1>
        <p>{{ categoryInfo.description }}</p>
      </div>
    </section>
    
    <!-- Game Grid -->
    <section class="game-grid-section">
      <div class="filters-container">
        <div class="search-filter">
          <input 
            v-model="searchQuery" 
            type="text" 
            placeholder="Search games..."
            class="search-input"
          />
        </div>
        
        <div class="sort-filter">
          <select v-model="sortBy" class="sort-select">
            <option value="popular">Most Popular</option>
            <option value="newest">Newest</option>
            <option value="rating">Top Rated</option>
          </select>
          
          <div class="view-toggle">
            <button 
              @click="viewMode = 'grid'" 
              class="view-button" 
              :class="{ active: viewMode === 'grid' }"
            >
              Grid
            </button>
            <button 
              @click="viewMode = 'list'" 
              class="view-button" 
              :class="{ active: viewMode === 'list' }"
            >
              List
            </button>
          </div>
        </div>
      </div>
      
      <div class="games-container" :class="viewMode">
        <!-- Grid View -->
        <template v-if="viewMode === 'grid'">
          <div v-for="game in displayedGames" :key="game.id" class="game-card">
            <div class="game-image">
              <img :src="game.image" :alt="game.title" />
              <div class="game-overlay">
                <button @click="playGame(game.id)" class="play-button">
                  <span class="play-icon">▶</span> Play Now
                </button>
                <button @click="addToFavorites(game.id)" class="favorite-button">
                  <span>❤</span>
                </button>
              </div>
              <div class="game-rating">★ {{ game.rating }}</div>
            </div>
            <div class="game-content">
              <h3>{{ game.title }}</h3>
              <div class="game-tags">
                <span v-for="tag in game.tags" :key="tag" class="tag">{{ tag }}</span>
              </div>
              <p class="game-description">{{ game.description }}</p>
              <div class="game-meta">
                <span class="players">{{ game.players }} players</span>
              </div>
            </div>
          </div>
        </template>
        
        <!-- List View -->
        <template v-else>
          <div v-for="game in displayedGames" :key="game.id" class="game-list-item">
            <div class="game-list-image">
              <img :src="game.image" :alt="game.title" />
              <div class="game-rating">★ {{ game.rating }}</div>
            </div>
            <div class="game-list-content">
              <h3>{{ game.title }}</h3>
              <div class="game-tags">
                <span v-for="tag in game.tags" :key="tag" class="tag">{{ tag }}</span>
              </div>
              <p class="game-description">{{ game.description }}</p>
              <div class="game-meta">
                <span class="players">{{ game.players }} players</span>
                <span class="release-date">Released: {{ new Date(game.releaseDate).toLocaleDateString() }}</span>
              </div>
            </div>
            <div class="game-list-actions">
              <button @click="playGame(game.id)" class="play-button">
                <span class="play-icon">▶</span> Play
              </button>
              <button @click="addToFavorites(game.id)" class="favorite-button list-fav">
                <span>❤</span>
              </button>
            </div>
          </div>
        </template>
        
        <!-- Empty State -->
        <div v-if="displayedGames.length === 0" class="empty-state">
          <div class="empty-icon">🔍</div>
          <h3>No games found</h3>
          <p>Try adjusting your search criteria</p>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-content">
        <h2 class="glowing-text">Ready to Play?</h2>
        <p>Unlimited access to all games with a premium subscription.</p>
        <button @click="router.push('/funpuzzlepalace/signup')" class="cta-button">
          Start Your Free Trial
        </button>
      </div>
    </section>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

.category-page {
  min-height: 100vh;
  background-color: #0F172A;
  color: #F8FAFC;
  font-family: 'Inter', sans-serif;
  padding-top: 64px; /* Account for navigation bar */
}

/* Category Banner */
.category-banner {
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
  text-align: center;
}

.banner-content {
  max-width: 800px;
  padding: 0 2rem;
}

.category-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  display: inline-block;
  width: 80px;
  height: 80px;
  background: rgba(139, 92, 246, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 20px rgba(139, 92, 246, 0.5);
  margin: 0 auto 1.5rem;
}

.glowing-text {
  font-family: 'Orbitron', sans-serif;
  font-weight: 700;
  color: #F8FAFC;
  text-shadow: 
    0 0 5px rgba(139, 92, 246, 0.5),
    0 0 10px rgba(139, 92, 246, 0.3),
    0 0 15px rgba(139, 92, 246, 0.2);
  margin-bottom: 1rem;
}

h1.glowing-text {
  font-size: 3rem;
  background: linear-gradient(to right, #8B5CF6, #EC4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.banner-content p {
  color: #E2E8F0;
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
}

/* Game Grid Section */
.game-grid-section {
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

/* Filters */
.filters-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
  padding: 1.5rem;
  background: rgba(30, 41, 59, 0.7);
  border: 1px solid #334155;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
}

.search-filter {
  flex: 1;
  margin-right: 1.5rem;
}

.search-input {
  width: 100%;
  padding: 0.75rem 1.25rem;
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid #334155;
  border-radius: 8px;
  color: #F8FAFC;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.search-input:focus {
  outline: none;
  border-color: #8B5CF6;
  box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.3);
}

.search-input::placeholder {
  color: #94A3B8;
}

.sort-filter {
  display: flex;
  align-items: center;
}

.sort-select {
  padding: 0.75rem 1.25rem;
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid #334155;
  border-radius: 8px;
  color: #F8FAFC;
  font-size: 1rem;
  cursor: pointer;
  margin-right: 1.5rem;
  transition: all 0.3s ease;
}

.sort-select:focus {
  outline: none;
  border-color: #8B5CF6;
  box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.3);
}

.view-toggle {
  display: flex;
}

.view-button {
  padding: 0.5rem 1rem;
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid #334155;
  color: #94A3B8;
  cursor: pointer;
  transition: all 0.3s ease;
}

.view-button:first-child {
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}

.view-button:last-child {
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
}

.view-button.active {
  background: rgba(139, 92, 246, 0.2);
  color: #8B5CF6;
  border-color: #8B5CF6;
}

/* Games Container - Grid View */
.games-container.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.game-card {
  background: #1E293B;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.game-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1), 0 0 15px rgba(139, 92, 246, 0.5);
}

.game-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.game-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.game-card:hover .game-image img {
  transform: scale(1.1);
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
  gap: 1rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.game-card:hover .game-overlay {
  opacity: 1;
}

.play-button {
  background: #8B5CF6;
  color: white;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 0 10px rgba(139, 92, 246, 0.5);
}

.play-button:hover {
  background: #7C3AED;
  transform: scale(1.05);
}

.play-icon {
  font-size: 0.8rem;
}

.favorite-button {
  background: rgba(236, 72, 153, 0.2);
  color: #EC4899;
  width: 40px;
  height: 40px;
  border: 1px solid #EC4899;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1.2rem;
}

.favorite-button:hover {
  background: rgba(236, 72, 153, 0.4);
}

.game-rating {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(0, 0, 0, 0.7);
  color: #FBBF24;
  padding: 0.25rem 0.75rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
}

.game-content {
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.game-content h3 {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: white;
}

.game-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tag {
  background: rgba(139, 92, 246, 0.2);
  color: #8B5CF6;
  padding: 0.3rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
}

.game-description {
  color: #CBD5E1;
  font-size: 0.95rem;
  line-height: 1.6;
  flex-grow: 1;
  margin-bottom: 1.5rem;
}

.game-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #94A3B8;
  font-size: 0.9rem;
}

.players {
  color: #EC4899;
  font-weight: 500;
}

/* Games Container - List View */
.games-container.list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.game-list-item {
  background: #1E293B;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  display: flex;
}

.game-list-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1), 0 0 15px rgba(139, 92, 246, 0.5);
}

.game-list-image {
  width: 200px;
  min-width: 200px;
  position: relative;
  overflow: hidden;
}

.game-list-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.game-list-item:hover .game-list-image img {
  transform: scale(1.1);
}

.game-list-content {
  padding: 1.5rem;
  flex-grow: 1;
}

.game-list-content h3 {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: white;
}

.game-list-actions {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.5rem;
  gap: 1rem;
}

.list-fav {
  align-self: center;
}

.release-date {
  color: #94A3B8;
}

/* Empty State */
.empty-state {
  text-align: center;
  padding: 4rem 2rem;
  background: rgba(30, 41, 59, 0.7);
  border-radius: 12px;
  border: 1px solid #334155;
}

.empty-icon {
  font-size: 4rem;
  margin-bottom: 1.5rem;
  opacity: 0.5;
}

.empty-state h3 {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: white;
}

.empty-state p {
  color: #94A3B8;
}

/* CTA Section */
.cta-section {
  background: linear-gradient(135deg, #1E293B 0%, #0F172A 100%);
  padding: 5rem 2rem;
  text-align: center;
}

.cta-content {
  max-width: 800px;
  margin: 0 auto;
}

.cta-content h2 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}

.cta-content p {
  color: #CBD5E1;
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
}

.cta-button {
  background: linear-gradient(to right, #8B5CF6, #EC4899);
  color: white;
  font-weight: 600;
  font-size: 1.1rem;
  padding: 1rem 2.5rem;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 0 15px rgba(139, 92, 246, 0.5);
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 20px rgba(139, 92, 246, 0.7);
}

/* Responsive Design */
@media (max-width: 768px) {
  .filters-container {
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .search-filter {
    width: 100%;
    margin-right: 0;
  }
  
  .sort-filter {
    width: 100%;
    justify-content: space-between;
  }
  
  .sort-select {
    margin-right: 1rem;
  }
  
  .game-list-item {
    flex-direction: column;
  }
  
  .game-list-image {
    width: 100%;
    height: 200px;
  }
  
  .game-list-actions {
    flex-direction: row;
    padding: 1rem 1.5rem;
  }
  
  .play-button {
    flex: 1;
  }
}

@media (max-width: 480px) {
  .category-banner {
    height: 250px;
  }
  
  h1.glowing-text {
    font-size: 2.2rem;
  }
  
  .banner-content p {
    font-size: 1rem;
  }
  
  .game-grid-section {
    padding: 3rem 1rem;
  }
  
  .games-container.grid {
    grid-template-columns: 1fr;
  }
  
  .cta-content h2 {
    font-size: 2rem;
  }
  
  .cta-content p {
    font-size: 1rem;
  }
}
</style>