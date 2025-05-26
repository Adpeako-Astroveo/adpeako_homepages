<template>
  <div class="category-page">
    <!-- Category Header -->
    <section class="category-header" :style="{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url(${getCategoryBackground()})` }">
      <div class="container">
        <div class="category-icon">{{ getCategoryIcon() }}</div>
        <h1>{{ getCategoryName() }}</h1>
        <p>{{ getCategoryDescription() }}</p>
      </div>
    </section>

    <!-- Games Grid -->
    <section class="games-section">
      <div class="container">
        <div class="filters-bar">
          <div class="search-container">
            <input 
              type="text" 
              v-model="searchQuery" 
              placeholder="Search games..." 
              class="search-input"
            />
          </div>
          <div class="sorting">
            <select v-model="sortBy" class="sort-select">
              <option value="popular">Most Popular</option>
              <option value="newest">Newest First</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        <div class="games-grid">
          <div v-for="game in filteredGames" :key="game.id" class="game-card">
            <div class="game-image">
              <img :src="game.image" :alt="game.title">
              <div class="game-overlay">
                <div class="game-rating">{{ game.rating }}</div>
                <router-link to="/funpuzzlepalace/login" class="play-button">Play Now</router-link>
              </div>
            </div>
            <div class="game-info">
              <h3>{{ game.title }}</h3>
              <p class="game-description">{{ game.description }}</p>
              <div class="game-meta">
                <span class="game-downloads">{{ game.downloads }} downloads</span>
                <span class="game-rating-small">{{ game.rating }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- No results message -->
        <div v-if="filteredGames.length === 0" class="no-results">
          <div class="no-results-icon">🔍</div>
          <h3>No games found</h3>
          <p>Try adjusting your search or browse another category</p>
        </div>

        <!-- Pagination -->
        <div class="pagination">
          <button 
            v-for="page in totalPages" 
            :key="page" 
            @click="currentPage = page" 
            :class="{ 'active': currentPage === page }" 
            class="page-button"
          >
            {{ page }}
          </button>
        </div>
      </div>
    </section>

    <!-- Related Categories -->
    <section class="related-categories">
      <div class="container">
        <h2>Explore Other Categories</h2>
        <div class="categories-grid">
          <router-link 
            v-for="category in getRelatedCategories()" 
            :key="category.id" 
            :to="`/funpuzzlepalace/category/${category.id}`" 
            class="category-card"
          >
            <div class="category-card-icon">{{ category.icon }}</div>
            <h3>{{ category.name }}</h3>
            <p>{{ category.description }}</p>
          </router-link>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <h2>Ready to Play?</h2>
        <p>Access all games with a subscription plan that fits your needs</p>
        <div class="cta-buttons">
          <router-link to="/funpuzzlepalace/payment" class="primary-button">View Plans</router-link>
          <router-link to="/funpuzzlepalace/signup" class="secondary-button">Sign Up Free</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const currentPage = ref(1);
const searchQuery = ref('');
const sortBy = ref('popular');
const gamesPerPage = 6;

// Define categories data
const categories = [
  {
    id: 'puzzle',
    name: 'Puzzle Games',
    icon: '🧩',
    description: 'Challenge your mind with brain-teasing puzzles and strategic challenges',
    background: 'https://images.pexels.com/photos/1314435/pexels-photo-1314435.jpeg'
  },
  {
    id: 'action',
    name: 'Action Games',
    icon: '🔥',
    description: 'Fast-paced gameplay with exciting challenges and adventures',
    background: 'https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg'
  },
  {
    id: 'adventure',
    name: 'Adventure Games',
    icon: '🌄',
    description: 'Embark on epic journeys and explore fascinating worlds',
    background: 'https://images.pexels.com/photos/1174746/pexels-photo-1174746.jpeg'
  },
  {
    id: 'strategy',
    name: 'Strategy Games',
    icon: '♟️',
    description: 'Test your tactical thinking and planning skills',
    background: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg'
  },
  {
    id: 'multiplayer',
    name: 'Multiplayer Games',
    icon: '👥',
    description: 'Play and compete with friends and gamers worldwide',
    background: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg'
  }
];

// Mock games data
const allGames = [
  // Puzzle games
  {
    id: 101,
    title: "Crystal Matcher",
    description: "Match colorful crystals in this addictive puzzle game with over 500 challenging levels.",
    longDescription: "Crystal Matcher is a captivating match-3 puzzle game featuring vibrant gems and crystals. With 500+ levels of increasing difficulty, special power-ups, and daily challenges, this game offers endless puzzle-solving fun. The satisfying matching mechanics and strategic depth will keep you engaged for hours.",
    category: "puzzle",
    rating: "★★★★★",
    downloads: "5M+",
    image: "https://images.pexels.com/photos/1314435/pexels-photo-1314435.jpeg"
  },
  {
    id: 102,
    title: "Word Masters",
    description: "Test your vocabulary and word skills with thousands of challenging word puzzles.",
    longDescription: "Word Masters is the ultimate word puzzle game for language enthusiasts. Featuring crosswords, word searches, anagrams, and unique word challenges, it tests and expands your vocabulary across multiple difficulty levels. With daily puzzles and offline play, it's the perfect brain training for word lovers.",
    category: "puzzle",
    rating: "★★★★★",
    downloads: "3.8M+",
    image: "https://images.pexels.com/photos/265072/pexels-photo-265072.jpeg"
  },
  {
    id: 103,
    title: "Brain Teaser Pro",
    description: "A collection of mind-bending puzzles to challenge your logical thinking.",
    longDescription: "Brain Teaser Pro offers an extensive collection of logic puzzles, riddles, mathematical challenges, and visual brainteasers designed to stimulate your cognitive abilities. From classic Sudoku and nonograms to innovative new puzzle types, this game provides the ultimate mental workout with adaptive difficulty that grows with your skills.",
    category: "puzzle",
    rating: "★★★★☆",
    downloads: "2.5M+",
    image: "https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg"
  },
  {
    id: 104,
    title: "Cube Solver",
    description: "Master the art of solving colorful 3D cubes with intuitive controls.",
    longDescription: "Cube Solver brings the classic 3D puzzle cube to your mobile device with intuitive touch controls and helpful tutorials. Perfect for beginners and speed-cubing experts alike, it features multiple cube sizes (2x2, 3x3, 4x4, and more), customizable color schemes, and time tracking for those looking to improve their solving speed.",
    category: "puzzle",
    rating: "★★★★☆",
    downloads: "1.2M+",
    image: "https://images.pexels.com/photos/1253092/pexels-photo-1253092.jpeg"
  },
  
  // Action games
  {
    id: 201,
    title: "Cyber Combat",
    description: "Fast-paced action shooter in a futuristic cyberpunk world.",
    longDescription: "Enter a dystopian future in Cyber Combat, where you'll battle through neon-lit streets and corporate megastructures. Featuring fluid movement mechanics, a diverse arsenal of high-tech weapons, and cybernetic augmentations, this fast-paced shooter delivers non-stop action and adrenaline-pumping combat scenarios.",
    category: "action",
    rating: "★★★★★",
    downloads: "7.2M+",
    image: "https://images.pexels.com/photos/1637439/pexels-photo-1637439.jpeg"
  },
  {
    id: 202,
    title: "Ninja Warrior",
    description: "Master the arts of stealth and combat as an elite ninja assassin.",
    longDescription: "Ninja Warrior combines fluid parkour movement with precise combat mechanics as you take on the role of an elite ninja assassin. Traverse intricate environments using wall-running, grappling hooks, and acrobatic maneuvers while eliminating targets with a variety of traditional and modern ninja weapons in this action-packed stealth adventure.",
    category: "action",
    rating: "★★★★★",
    downloads: "4.5M+",
    image: "https://images.pexels.com/photos/5625004/pexels-photo-5625004.jpeg"
  },
  {
    id: 203,
    title: "Zombie Outbreak",
    description: "Survive the zombie apocalypse in this intense action survival game.",
    longDescription: "Zombie Outbreak throws you into a world overrun by the undead. Scavenge for weapons, ammunition, and supplies as you fight to survive increasingly difficult waves of zombies. Build and fortify safe houses, team up with other survivors, and make difficult moral choices in this immersive apocalyptic experience.",
    category: "action",
    rating: "★★★★☆",
    downloads: "3.8M+",
    image: "https://images.pexels.com/photos/7534366/pexels-photo-7534366.jpeg"
  },
  
  // Adventure games
  {
    id: 301,
    title: "Lost Temple",
    description: "Embark on an archaeological adventure to discover ancient treasures.",
    longDescription: "Lost Temple is an immersive adventure game where you play as an archaeologist searching for legendary artifacts in remote locations around the world. Solve intricate puzzles based on ancient civilizations, navigate treacherous ruins, and uncover a story spanning thousands of years of human history while competing against rival treasure hunters.",
    category: "adventure",
    rating: "★★★★★",
    downloads: "3.1M+",
    image: "https://images.pexels.com/photos/1174746/pexels-photo-1174746.jpeg"
  },
  {
    id: 302,
    title: "Space Explorer",
    description: "Navigate through the cosmos and discover new alien worlds.",
    longDescription: "Space Explorer takes you on an interstellar journey across a procedurally generated universe. Command your own spacecraft, discover and catalog alien species, mine resources from asteroids, engage in space diplomacy or combat, and unravel the mysteries of ancient cosmic civilizations in this vast open-world space adventure.",
    category: "adventure",
    rating: "★★★★☆",
    downloads: "2.7M+",
    image: "https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg"
  },
  
  // Strategy games
  {
    id: 401,
    title: "Empire Builder",
    description: "Build and expand your civilization from a small settlement to a global empire.",
    longDescription: "Empire Builder is a comprehensive strategy game where you guide a civilization from the ancient era through modern times and into the future. Manage resources, research technologies, build wonders, engage in diplomacy and warfare, and adapt to changing world conditions across different epochs of human history.",
    category: "strategy",
    rating: "★★★★★",
    downloads: "2.3M+",
    image: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg"
  },
  {
    id: 402,
    title: "Space Commander",
    description: "Build your galactic empire and conquer the universe in this epic strategy game.",
    longDescription: "Space Commander is a grand strategy game set in a vast galaxy where you lead an interstellar civilization. Colonize planets, design spacecraft, research advanced technologies, form alliances, and wage war across multiple star systems. With deep economic mechanics and tactical space combat, your decisions will shape the fate of the galaxy.",
    category: "strategy",
    rating: "★★★★☆",
    downloads: "1.9M+",
    image: "https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg"
  },
  
  // Multiplayer games
  {
    id: 501,
    title: "Battle Royale Arena",
    description: "Compete against 100 other players to be the last one standing.",
    longDescription: "Battle Royale Arena drops 100 players onto a massive island where they must scavenge for weapons and equipment while fighting to be the last player standing. With a constantly shrinking play zone, intense firefights, and a variety of terrain and weather conditions, every match offers a unique and adrenaline-filled experience.",
    category: "multiplayer",
    rating: "★★★★★",
    downloads: "12M+",
    image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg"
  },
  {
    id: 502,
    title: "Soccer Stars",
    description: "Play soccer with friends in this fun, physics-based multiplayer game.",
    longDescription: "Soccer Stars combines the excitement of soccer with unique physics-based gameplay. Challenge friends or random opponents to fast-paced matches where precision and strategy are key. Customize your team, compete in tournaments, climb the global leaderboards, and unlock special teams and stadiums as you become a soccer legend.",
    category: "multiplayer",
    rating: "★★★★☆",
    downloads: "8.5M+",
    image: "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg"
  }
];

// Get current category from route params
const currentCategory = computed(() => route.params.categoryId || 'puzzle');

// Get category details
const getCategoryName = () => {
  const category = categories.find(c => c.id === currentCategory.value);
  return category ? category.name : 'All Games';
};

const getCategoryDescription = () => {
  const category = categories.find(c => c.id === currentCategory.value);
  return category ? category.description : 'Browse all our premium mobile games';
};

const getCategoryIcon = () => {
  const category = categories.find(c => c.id === currentCategory.value);
  return category ? category.icon : '🎮';
};

const getCategoryBackground = () => {
  const category = categories.find(c => c.id === currentCategory.value);
  return category ? category.background : 'https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg';
};

// Get related categories (excluding current one)
const getRelatedCategories = () => {
  return categories.filter(c => c.id !== currentCategory.value);
};

// Filter games by category and search query
const filteredGames = computed(() => {
  let result = allGames.filter(game => game.category === currentCategory.value);
  
  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase();
    result = result.filter(game => {
      return game.title.toLowerCase().includes(query) || 
             game.description.toLowerCase().includes(query);
    });
  }
  
  // Apply sorting
  switch(sortBy.value) {
    case 'newest':
      // In a real app, we'd sort by release date
      return [...result].sort((a, b) => b.id - a.id);
    case 'rating':
      // Sort by rating (count the stars)
      return [...result].sort((a, b) => {
        return b.rating.length - a.rating.length;
      });
    case 'popular':
    default:
      // Sort by downloads (simple string comparison for this example)
      return [...result].sort((a, b) => {
        return b.downloads.localeCompare(a.downloads);
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

// Reset page when category or search changes
onMounted(() => {
  currentPage.value = 1;
});

</script>

<style scoped>
.category-page {
  min-height: 100vh;
  font-family: 'Inter', 'Roboto', sans-serif;
  color: #0F172A;
  background-color: #F8FAFC;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Category Header */
.category-header {
  padding: 8rem 0 4rem;
  text-align: center;
  background-size: cover;
  background-position: center;
  color: white;
  position: relative;
}

.category-icon {
  font-size: 5rem;
  margin-bottom: 2rem;
  display: inline-block;
}

.category-header h1 {
  font-family: 'Orbitron', sans-serif;
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.category-header p {
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto;
  opacity: 0.9;
}

/* Games Section */
.games-section {
  padding: 4rem 0;
}

.filters-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  background: white;
  padding: 1rem 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.search-container {
  flex: 1;
  max-width: 500px;
}

.search-input {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #E2E8F0;
  border-radius: 0.5rem;
  font-size: 0.95rem;
  transition: all 0.3s ease;
}

.search-input:focus {
  outline: none;
  border-color: #8B5CF6;
  box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);
}

.sort-select {
  padding: 0.75rem 1rem;
  border: 1px solid #E2E8F0;
  border-radius: 0.5rem;
  font-size: 0.95rem;
  background: white;
  color: #0F172A;
  cursor: pointer;
  transition: all 0.3s ease;
}

.sort-select:focus {
  outline: none;
  border-color: #8B5CF6;
  box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);
}

.games-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.game-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.game-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.15);
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: all 0.3s ease;
}

.game-card:hover .game-overlay {
  opacity: 1;
}

.game-rating {
  color: #FCD34D;
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.play-button {
  background: linear-gradient(90deg, #8B5CF6, #EC4899);
  color: white;
  font-weight: 600;
  padding: 0.75rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.play-button:hover {
  transform: scale(1.05);
  box-shadow: 0 5px 15px rgba(139, 92, 246, 0.4);
}

.game-info {
  padding: 1.5rem;
}

.game-info h3 {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: #0F172A;
}

.game-description {
  color: #64748B;
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.game-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.game-downloads {
  color: #64748B;
  font-size: 0.85rem;
}

.game-rating-small {
  color: #FCD34D;
  font-size: 0.95rem;
}

/* No results */
.no-results {
  text-align: center;
  padding: 4rem 0;
}

.no-results-icon {
  font-size: 4rem;
  margin-bottom: 1.5rem;
  opacity: 0.5;
}

.no-results h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #0F172A;
}

.no-results p {
  color: #64748B;
}

/* Pagination */
.pagination {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
}

.page-button {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  color: #0F172A;
  border: 1px solid #E2E8F0;
  cursor: pointer;
  transition: all 0.3s ease;
}

.page-button:hover {
  border-color: #8B5CF6;
  color: #8B5CF6;
}

.page-button.active {
  background: #8B5CF6;
  color: white;
  border-color: #8B5CF6;
}

/* Related Categories */
.related-categories {
  padding: 4rem 0;
  background-color: #F1F5F9;
}

.related-categories h2 {
  font-family: 'Orbitron', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  color: #0F172A;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.category-card {
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  text-decoration: none;
  color: #0F172A;
}

.category-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.15);
}

.category-card-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  display: inline-block;
}

.category-card h3 {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.3rem;
  margin-bottom: 0.75rem;
  color: #0F172A;
}

.category-card p {
  color: #64748B;
  font-size: 0.85rem;
}

/* CTA Section */
.cta-section {
  padding: 4rem 0;
  background: linear-gradient(90deg, #8B5CF6, #EC4899);
  color: white;
  text-align: center;
}

.cta-section h2 {
  font-family: 'Orbitron', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.cta-section p {
  font-size: 1.1rem;
  margin-bottom: 2rem;
}

.cta-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
}

.primary-button {
  background: white;
  color: #8B5CF6;
  font-weight: 600;
  padding: 0.75rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.primary-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(255, 255, 255, 0.3);
}

.secondary-button {
  background: transparent;
  color: white;
  font-weight: 600;
  padding: 0.75rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  border: 2px solid white;
  transition: all 0.3s ease;
}

.secondary-button:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-3px);
}

/* Responsive Design */
@media (max-width: 768px) {
  .category-header {
    padding: 6rem 0 3rem;
  }
  
  .category-header h1 {
    font-size: 2.5rem;
  }
  
  .category-icon {
    font-size: 4rem;
  }
  
  .filters-bar {
    flex-direction: column;
    gap: 1rem;
    align-items: stretch;
  }
  
  .search-container {
    max-width: none;
  }
  
  .cta-buttons {
    flex-direction: column;
    max-width: 300px;
    margin: 0 auto;
  }
}

@media (max-width: 480px) {
  .category-header {
    padding: 5rem 0 2.5rem;
  }
  
  .category-header h1 {
    font-size: 2rem;
  }
  
  .category-icon {
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
  }
  
  .container {
    padding: 0 1rem;
  }
  
  .related-categories h2,
  .cta-section h2 {
    font-size: 1.75rem;
  }
}
</style>