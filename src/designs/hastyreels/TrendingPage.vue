<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Time filter options
const timeFilters = ref([
  { id: 'today', label: 'Today', active: true },
  { id: 'week', label: 'This Week', active: false },
  { id: 'month', label: 'This Month', active: false }
]);

// Category filter options
const categoryFilters = ref([
  { id: 'all', label: 'All Categories', active: true },
  { id: 'music', label: 'Music', active: false },
  { id: 'gaming', label: 'Gaming', active: false },
  { id: 'comedy', label: 'Comedy', active: false },
  { id: 'sports', label: 'Sports', active: false }
]);

// Set active time filter
const setTimeFilter = (filterId) => {
  timeFilters.value.forEach(filter => {
    filter.active = filter.id === filterId;
  });
};

// Set active category filter
const setCategoryFilter = (filterId) => {
  categoryFilters.value.forEach(filter => {
    filter.active = filter.id === filterId;
  });
};

// Search query
const searchQuery = ref('');

// Trending videos data
const trendingVideos = ref([
  {
    id: 'trending001',
    title: 'Mountain Biking Extreme Trails',
    creator: 'AdventureSports',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
    views: '2.4M',
    duration: '3:42',
    uploadDate: '2 days ago',
    thumbnail: 'https://images.pexels.com/photos/71104/utah-mountain-biking-bike-biking-71104.jpeg',
    category: 'Sports',
    likes: '158K',
    trending: '#1 on Trending'
  },
  {
    id: 'trending002',
    title: 'Summer Dance Choreography',
    creator: 'DanceStudio',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
    views: '1.7M',
    duration: '2:15',
    uploadDate: '1 day ago',
    thumbnail: 'https://images.pexels.com/photos/1701202/pexels-photo-1701202.jpeg',
    category: 'Dance',
    likes: '132K',
    trending: '#2 on Trending'
  },
  {
    id: 'trending003',
    title: 'Making the Perfect Soufflé',
    creator: 'CulinaryMasters',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    views: '980K',
    duration: '4:58',
    uploadDate: '3 days ago',
    thumbnail: 'https://images.pexels.com/photos/8969237/pexels-photo-8969237.jpeg',
    category: 'Food',
    likes: '89K',
    trending: '#3 on Trending'
  },
  {
    id: 'trending004',
    title: 'Northern Lights Timelapse',
    creator: 'NatureWonders',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    views: '3.2M',
    duration: '1:30',
    uploadDate: '5 days ago',
    thumbnail: 'https://images.pexels.com/photos/1693095/pexels-photo-1693095.jpeg',
    category: 'Nature',
    likes: '245K',
    trending: '#4 on Trending'
  },
  {
    id: 'trending005',
    title: 'DIY Home Office Setup',
    creator: 'HomeDesigner',
    avatar: 'https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg',
    views: '1.1M',
    duration: '8:22',
    uploadDate: '2 days ago',
    thumbnail: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg',
    category: 'Lifestyle',
    likes: '76K',
    trending: '#5 on Trending'
  },
  {
    id: 'trending006',
    title: 'Piano Cover - Popular Hits',
    creator: 'MusicMaster',
    avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg',
    views: '2.8M',
    duration: '5:10',
    uploadDate: '1 day ago',
    thumbnail: 'https://images.pexels.com/photos/1246437/pexels-photo-1246437.jpeg',
    category: 'Music',
    likes: '196K',
    trending: '#6 on Trending'
  },
  {
    id: 'trending007',
    title: 'Morning Yoga Routine',
    creator: 'ZenYogi',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
    views: '1.5M',
    duration: '10:25',
    uploadDate: '4 days ago',
    thumbnail: 'https://images.pexels.com/photos/8436431/pexels-photo-8436431.jpeg',
    category: 'Fitness',
    likes: '123K',
    trending: '#7 on Trending'
  },
  {
    id: 'trending008',
    title: 'Urban Street Art Tour',
    creator: 'CityExplorer',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
    views: '950K',
    duration: '6:18',
    uploadDate: '3 days ago',
    thumbnail: 'https://images.pexels.com/photos/1674049/pexels-photo-1674049.jpeg',
    category: 'Art',
    likes: '67K',
    trending: '#8 on Trending'
  },
  {
    id: 'trending009',
    title: 'Easy 15-Minute Recipes',
    creator: 'QuickMeals',
    avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg',
    views: '1.3M',
    duration: '7:45',
    uploadDate: '2 days ago',
    thumbnail: 'https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg',
    category: 'Food',
    likes: '104K',
    trending: '#9 on Trending'
  },
  {
    id: 'trending010',
    title: 'Drone Footage: Coastal Views',
    creator: 'AerialFilms',
    avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg',
    views: '2.1M',
    duration: '3:35',
    uploadDate: '5 days ago',
    thumbnail: 'https://images.pexels.com/photos/1705254/pexels-photo-1705254.jpeg',
    category: 'Travel',
    likes: '178K',
    trending: '#10 on Trending'
  },
  {
    id: 'trending011',
    title: 'Comedy Sketch: Office Life',
    creator: 'LaughFactory',
    avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
    views: '3.7M',
    duration: '4:12',
    uploadDate: '1 day ago',
    thumbnail: 'https://images.pexels.com/photos/7641835/pexels-photo-7641835.jpeg',
    category: 'Comedy',
    likes: '312K',
    trending: '#11 on Trending'
  },
  {
    id: 'trending012',
    title: 'Speed Painting: Fantasy World',
    creator: 'ArtisticVision',
    avatar: 'https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg',
    views: '1.2M',
    duration: '8:50',
    uploadDate: '4 days ago',
    thumbnail: 'https://images.pexels.com/photos/1292241/pexels-photo-1292241.jpeg',
    category: 'Art',
    likes: '95K',
    trending: '#12 on Trending'
  }
]);

// Filter trending videos based on active filters and search
const filteredVideos = computed(() => {
  const activeTime = timeFilters.value.find(f => f.active)?.id;
  const activeCategory = categoryFilters.value.find(f => f.active)?.id;
  
  let result = [...trendingVideos.value];
  
  // Filter by category if not "all"
  if (activeCategory !== 'all') {
    result = result.filter(video => 
      video.category.toLowerCase() === activeCategory.toLowerCase()
    );
  }
  
  // Filter by time period
  switch(activeTime) {
    case 'today':
      result = result.filter(video => video.uploadDate.includes('day ago'));
      break;
    case 'week':
      // All videos in our sample data are within a week
      break;
    case 'month':
      // All videos in our sample data are within a month
      break;
  }
  
  // Filter by search query
  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase();
    result = result.filter(video => 
      video.title.toLowerCase().includes(query) || 
      video.creator.toLowerCase().includes(query) || 
      video.category.toLowerCase().includes(query)
    );
  }
  
  return result;
});

// Navigate to watch page
const navigateToWatch = (videoId) => {
  router.push(`/hastyreels/watch/${videoId}`);
};

// Navigate to creator page
const navigateToCreator = (creatorName) => {
  // In a real app, this would go to a specific creator page
  router.push('/hastyreels/creators');
};
</script>

<template>
  <div class="trending-page">
    <!-- Header Section -->
    <section class="trending-header">
      <h1>Trending on HastyReels</h1>
      <p class="header-subtitle">See what's capturing the world's attention right now</p>
      
      <!-- Filters Bar -->
      <div class="filters-bar">
        <div class="time-filters">
          <button 
            v-for="filter in timeFilters" 
            :key="filter.id"
            @click="setTimeFilter(filter.id)"
            :class="{ 'active': filter.active }"
            class="filter-btn"
          >
            {{ filter.label }}
          </button>
        </div>
        
        <div class="search-container">
          <input 
            type="text" 
            v-model="searchQuery" 
            placeholder="Search trending videos..." 
            class="search-input"
          />
          <span class="search-icon">🔍</span>
        </div>
        
        <div class="category-filters">
          <button 
            v-for="filter in categoryFilters" 
            :key="filter.id"
            @click="setCategoryFilter(filter.id)"
            :class="{ 'active': filter.active }"
            class="filter-btn"
          >
            {{ filter.label }}
          </button>
        </div>
      </div>
    </section>
    
    <!-- Trending Videos Grid -->
    <section class="videos-grid-section">
      <div v-if="filteredVideos.length === 0" class="no-results">
        <div class="no-results-icon">🔍</div>
        <h3>No trending videos found</h3>
        <p>Try adjusting your filters or search query</p>
        <button 
          @click="setTimeFilter('today'); setCategoryFilter('all'); searchQuery = '';" 
          class="reset-filters-btn"
        >
          Reset Filters
        </button>
      </div>
      
      <div v-else class="trending-videos-grid">
        <div 
          v-for="video in filteredVideos" 
          :key="video.id" 
          class="trending-video-card"
        >
          <div class="trending-rank">{{ video.trending }}</div>
          <div class="video-thumbnail" @click="navigateToWatch(video.id)">
            <img :src="video.thumbnail" :alt="video.title">
            <div class="video-duration">{{ video.duration }}</div>
            <div class="play-overlay">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="12" fill="rgba(0, 0, 0, 0.5)"/>
                <path d="M16 12L10 16V8L16 12Z" fill="white"/>
              </svg>
            </div>
          </div>
          <div class="video-content">
            <div class="video-title" @click="navigateToWatch(video.id)">
              {{ video.title }}
            </div>
            <div class="video-details">
              <div class="creator-info" @click="navigateToCreator(video.creator)">
                <img :src="video.avatar" :alt="video.creator" class="creator-thumbnail">
                <span class="creator-name">{{ video.creator }}</span>
              </div>
              <div class="video-stats">
                <span>{{ video.views }} views</span>
                <span>{{ video.uploadDate }}</span>
                <span class="likes">{{ video.likes }} likes</span>
              </div>
              <span class="video-category">{{ video.category }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Banner -->
    <section class="trending-cta">
      <div class="cta-content">
        <h2>Get More from HastyReels</h2>
        <p>Sign up to save videos to watch later, follow your favorite creators, and more</p>
        <button @click="router.push('/hastyreels/signup')" class="signup-btn">Create Account</button>
      </div>
    </section>
  </div>
</template>

<style scoped>
.trending-page {
  background-color: #000;
  color: #fff;
  min-height: 100vh;
  font-family: 'Montserrat', 'Inter', sans-serif;
  padding-top: 64px;
}

/* Header Section */
.trending-header {
  padding: 3rem 2rem;
  text-align: center;
  background-color: #0a0a0a;
}

.trending-header h1 {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #ff4e50, #fc913a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.header-subtitle {
  color: #ccc;
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
}

/* Filters Bar */
.filters-bar {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 1000px;
  margin: 0 auto;
}

.time-filters, .category-filters {
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  flex-wrap: wrap;
}

.filter-btn {
  background: rgba(255, 255, 255, 0.08);
  border: none;
  color: white;
  padding: 0.7rem 1.2rem;
  border-radius: 50px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-btn:hover, .filter-btn.active {
  background: rgba(255, 78, 80, 0.3);
}

.filter-btn.active {
  background: linear-gradient(to right, rgba(255, 78, 80, 0.7), rgba(252, 145, 58, 0.7));
  box-shadow: 0 4px 15px rgba(255, 78, 80, 0.3);
}

.search-container {
  position: relative;
  max-width: 600px;
  margin: 0 auto;
}

.search-input {
  width: 100%;
  padding: 0.8rem 2.5rem 0.8rem 1.2rem;
  border-radius: 50px;
  border: none;
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.search-input:focus {
  background: rgba(255, 255, 255, 0.12);
  outline: none;
  box-shadow: 0 0 0 2px rgba(255, 78, 80, 0.5);
}

.search-input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.search-icon {
  position: absolute;
  right: 1.2rem;
  top: 50%;
  transform: translateY(-50%);
}

/* Videos Grid Section */
.videos-grid-section {
  padding: 3rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

.no-results {
  text-align: center;
  padding: 4rem 0;
}

.no-results-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
  opacity: 0.5;
}

.no-results h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.no-results p {
  color: #999;
  margin-bottom: 2rem;
}

.reset-filters-btn {
  background: linear-gradient(to right, #ff4e50, #fc913a);
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.reset-filters-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(255, 78, 80, 0.3);
}

.trending-videos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
}

.trending-video-card {
  background: #0f0f0f;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid #222;
  position: relative;
}

.trending-video-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(255, 78, 80, 0.2);
  border-color: #ff4e50;
}

.trending-rank {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: linear-gradient(to right, #ff4e50, #fc913a);
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 600;
  z-index: 2;
}

.video-thumbnail {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  overflow: hidden;
  cursor: pointer;
}

.video-thumbnail img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.trending-video-card:hover .video-thumbnail img {
  transform: scale(1.05);
}

.video-duration {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  z-index: 2;
}

.play-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 1;
}

.trending-video-card:hover .play-overlay {
  opacity: 1;
}

.video-content {
  padding: 1.5rem;
}

.video-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.video-title:hover {
  color: #ff4e50;
}

.video-details {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.creator-info {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;
}

.creator-thumbnail {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
}

.creator-name {
  color: #ff4e50;
  transition: all 0.2s ease;
}

.creator-info:hover .creator-name {
  text-decoration: underline;
}

.video-stats {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  font-size: 0.9rem;
  color: #999;
}

.likes {
  color: #ff4e50;
}

.video-category {
  background: rgba(255, 78, 80, 0.2);
  color: #ff4e50;
  padding: 0.3rem 0.7rem;
  border-radius: 50px;
  font-size: 0.85rem;
  width: fit-content;
}

/* CTA Banner */
.trending-cta {
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
              url('https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg') no-repeat center center;
  background-size: cover;
  padding: 6rem 2rem;
  text-align: center;
  margin-top: 2rem;
}

.cta-content {
  max-width: 700px;
  margin: 0 auto;
}

.trending-cta h2 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: linear-gradient(to right, #ff4e50, #fc913a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.trending-cta p {
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  color: rgba(255, 255, 255, 0.9);
}

.signup-btn {
  background: linear-gradient(to right, #ff4e50, #fc913a);
  color: white;
  border: none;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 78, 80, 0.4);
}

.signup-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(255, 78, 80, 0.5);
}

/* Responsive Styles */
@media (max-width: 992px) {
  .trending-videos-grid {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
}

@media (max-width: 768px) {
  .trending-header h1 {
    font-size: 2.8rem;
  }
  
  .header-subtitle {
    font-size: 1rem;
  }
  
  .trending-videos-grid {
    grid-template-columns: 1fr;
  }
  
  .category-filters {
    overflow-x: auto;
    justify-content: flex-start;
    padding-bottom: 0.5rem;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
  
  .category-filters::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
  
  .trending-cta h2 {
    font-size: 2.5rem;
  }
  
  .trending-cta p {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .trending-header {
    padding: 2rem 1.5rem;
  }
  
  .trending-header h1 {
    font-size: 2.2rem;
  }
  
  .filters-bar {
    gap: 1rem;
  }
  
  .videos-grid-section {
    padding: 2rem 1rem;
  }
  
  .filter-btn {
    padding: 0.6rem 1rem;
    font-size: 0.85rem;
  }
  
  .trending-cta {
    padding: 4rem 1.5rem;
  }
  
  .trending-cta h2 {
    font-size: 2rem;
  }
}
</style>