<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const categoryId = computed(() => route.params.categoryId);

// Category details
const categoryDetails = ref({
  id: '',
  name: '',
  description: '',
  videos: 0,
  background: '',
  icon: ''
});

// Videos in this category
const videos = ref([]);

// Loading state
const isLoading = ref(true);

// Sort options
const sortOptions = ref([
  { value: 'trending', label: 'Trending' },
  { value: 'newest', label: 'Newest' },
  { value: 'popular', label: 'Most Popular' }
]);

const activeSort = ref('trending');

// Filter options
const filterOptions = ref({
  duration: [
    { value: 'all', label: 'All Lengths' },
    { value: 'short', label: 'Short (< 1 min)' },
    { value: 'medium', label: 'Medium (1-5 min)' },
    { value: 'long', label: 'Long (> 5 min)' }
  ],
  date: [
    { value: 'all', label: 'Any Time' },
    { value: 'today', label: 'Today' },
    { value: 'week', label: 'This Week' },
    { value: 'month', label: 'This Month' },
    { value: 'year', label: 'This Year' }
  ]
});

const activeFilters = ref({
  duration: 'all',
  date: 'all'
});

// Search query
const searchQuery = ref('');

// Popular tags for this category
const popularTags = ref([]);

// Load category data based on categoryId
onMounted(() => {
  loadCategoryData(categoryId.value);
});

const loadCategoryData = (id) => {
  isLoading.value = true;
  
  // In a real app, this would be an API call to get category data
  // Here we'll simulate that with setTimeout
  setTimeout(() => {
    // Find category info - in real app this would come from API
    const categoryInfo = {
      'nature': {
        id: 'nature',
        name: 'Nature',
        icon: '🌿',
        videos: 1240,
        description: 'Stunning landscapes, wildlife, and natural phenomena',
        background: 'https://images.pexels.com/photos/1671324/pexels-photo-1671324.jpeg',
        popularTags: ['wildlife', 'landscapes', 'oceans', 'timelapse', 'forests']
      },
      'travel': {
        id: 'travel',
        name: 'Travel',
        icon: '✈️',
        videos: 856,
        description: 'Explore the world through immersive travel content',
        background: 'https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg',
        popularTags: ['destinations', 'cityguides', 'adventure', 'culture', 'foodtravel']
      },
      'food': {
        id: 'food',
        name: 'Food & Cooking',
        icon: '🍳',
        videos: 920,
        description: 'Delicious recipes, cooking techniques, and food inspiration',
        background: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg',
        popularTags: ['recipes', 'baking', 'quickmeals', 'desserts', 'healthyfood']
      },
      'fitness': {
        id: 'fitness',
        name: 'Fitness',
        icon: '💪',
        videos: 745,
        description: 'Workouts, training tips, and healthy lifestyle content',
        background: 'https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg',
        popularTags: ['workout', 'yoga', 'cardio', 'strength', 'flexibility']
      },
      'music': {
        id: 'music',
        name: 'Music',
        icon: '🎵',
        videos: 1380,
        description: 'Music performances, covers, and instrumental pieces',
        background: 'https://images.pexels.com/photos/164693/pexels-photo-164693.jpeg',
        popularTags: ['covers', 'instruments', 'vocals', 'original', 'remix']
      },
      'comedy': {
        id: 'comedy',
        name: 'Comedy',
        icon: '😂',
        videos: 1050,
        description: 'Funny sketches, stand-up clips, and humorous content',
        background: 'https://images.pexels.com/photos/7955075/pexels-photo-7955075.jpeg',
        popularTags: ['standup', 'sketches', 'pranks', 'satire', 'improv']
      },
      'dance': {
        id: 'dance',
        name: 'Dance',
        icon: '💃',
        videos: 680,
        description: 'Choreography, dance battles, and impressive moves',
        background: 'https://images.pexels.com/photos/1701203/pexels-photo-1701203.jpeg',
        popularTags: ['choreography', 'hiphop', 'ballet', 'contemporary', 'tutorials']
      },
      'sports': {
        id: 'sports',
        name: 'Sports',
        icon: '⚽',
        videos: 890,
        description: 'Sports highlights, tricks, and athletic feats',
        background: 'https://images.pexels.com/photos/248547/pexels-photo-248547.jpeg',
        popularTags: ['soccer', 'basketball', 'extreme', 'highlights', 'skills']
      }
    };
    
    // Get category info
    const category = categoryInfo[id];
    
    if (category) {
      categoryDetails.value = category;
      popularTags.value = category.popularTags || [];
      
      // Generate videos for this category - in real app this would be from API
      const generatedVideos = generateCategoryVideos(id, category.name);
      videos.value = generatedVideos;
    } else {
      // Handle category not found
      categoryDetails.value = {
        id: id,
        name: 'Category Not Found',
        description: 'The category you are looking for does not exist',
        videos: 0,
        background: 'https://images.pexels.com/photos/4439425/pexels-photo-4439425.jpeg',
        icon: '❓'
      };
      videos.value = [];
    }
    
    isLoading.value = false;
  }, 500);
};

// Function to generate sample videos for a category
const generateCategoryVideos = (categoryId, categoryName) => {
  const videoBase = [
    {
      id: `${categoryId}001`,
      title: `Amazing ${categoryName} Compilation`,
      creator: 'NatureLovers',
      views: '1.2M',
      duration: '2:34',
      thumbnail: 'https://images.pexels.com/photos/3876434/pexels-photo-3876434.jpeg',
      uploadDate: '2 weeks ago',
      likes: '45K'
    },
    {
      id: `${categoryId}002`,
      title: `Top 10 ${categoryName} Moments`,
      creator: 'VideoMaster',
      views: '890K',
      duration: '3:45',
      thumbnail: 'https://images.pexels.com/photos/3493777/pexels-photo-3493777.jpeg',
      uploadDate: '3 days ago',
      likes: '32K'
    },
    {
      id: `${categoryId}003`,
      title: `${categoryName} for Beginners`,
      creator: 'LearningChannel',
      views: '567K',
      duration: '4:12',
      thumbnail: 'https://images.pexels.com/photos/2406371/pexels-photo-2406371.jpeg',
      uploadDate: '1 month ago',
      likes: '28K'
    },
    {
      id: `${categoryId}004`,
      title: `${categoryName} Explained`,
      creator: 'ExplainMaster',
      views: '1.5M',
      duration: '2:18',
      thumbnail: 'https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg',
      uploadDate: '5 days ago',
      likes: '50K'
    },
    {
      id: `${categoryId}005`,
      title: `The Best of ${categoryName} 2023`,
      creator: 'YearReview',
      views: '2.3M',
      duration: '5:30',
      thumbnail: 'https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg',
      uploadDate: '1 week ago',
      likes: '75K'
    },
    {
      id: `${categoryId}006`,
      title: `${categoryName} Challenge`,
      creator: 'ChallengeCreator',
      views: '3.1M',
      duration: '1:47',
      thumbnail: 'https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg',
      uploadDate: '4 days ago',
      likes: '120K'
    },
    {
      id: `${categoryId}007`,
      title: `${categoryName} Tips & Tricks`,
      creator: 'TipMaster',
      views: '750K',
      duration: '3:22',
      thumbnail: 'https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg',
      uploadDate: '2 weeks ago',
      likes: '42K'
    },
    {
      id: `${categoryId}008`,
      title: `${categoryName} Secrets Revealed`,
      creator: 'SecretUnveiler',
      views: '980K',
      duration: '4:05',
      thumbnail: 'https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg',
      uploadDate: '3 weeks ago',
      likes: '56K'
    },
    {
      id: `${categoryId}009`,
      title: `${categoryName} Fails Compilation`,
      creator: 'FailMaster',
      views: '4.5M',
      duration: '3:15',
      thumbnail: 'https://images.pexels.com/photos/2406370/pexels-photo-2406370.jpeg',
      uploadDate: '6 days ago',
      likes: '230K'
    },
    {
      id: `${categoryId}010`,
      title: `Ultimate ${categoryName} Guide`,
      creator: 'UltimateGuides',
      views: '1.7M',
      duration: '6:42',
      thumbnail: 'https://images.pexels.com/photos/210764/pexels-photo-210764.jpeg',
      uploadDate: '1 month ago',
      likes: '87K'
    },
    {
      id: `${categoryId}011`,
      title: `${categoryName} Professionals React`,
      creator: 'ReactChannel',
      views: '2.1M',
      duration: '8:30',
      thumbnail: 'https://images.pexels.com/photos/1671324/pexels-photo-1671324.jpeg',
      uploadDate: '2 weeks ago',
      likes: '95K'
    },
    {
      id: `${categoryId}012`,
      title: `5 Minutes of Amazing ${categoryName}`,
      creator: 'AmazingClips',
      views: '3.4M',
      duration: '5:00',
      thumbnail: 'https://images.pexels.com/photos/4666751/pexels-photo-4666751.jpeg',
      uploadDate: '1 week ago',
      likes: '145K'
    }
  ];
  
  // Return videos with some randomization to make them feel different
  return videoBase.map(video => ({
    ...video,
    views: Math.random() > 0.5 ? video.views : `${Math.floor(Math.random() * 10)}M`,
    duration: `${Math.floor(Math.random() * 10)}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
    likes: Math.random() > 0.5 ? video.likes : `${Math.floor(Math.random() * 100)}K`
  }));
};

// Filter videos based on search and filters
const filteredVideos = computed(() => {
  let result = [...videos.value];
  
  // Apply search filter
  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase();
    result = result.filter(video => 
      video.title.toLowerCase().includes(query) || 
      video.creator.toLowerCase().includes(query)
    );
  }
  
  // Apply duration filter
  if (activeFilters.value.duration !== 'all') {
    switch(activeFilters.value.duration) {
      case 'short':
        result = result.filter(video => {
          const [mins, secs] = video.duration.split(':').map(Number);
          return mins === 0 || (mins === 1 && secs === 0);
        });
        break;
      case 'medium':
        result = result.filter(video => {
          const [mins, secs] = video.duration.split(':').map(Number);
          return mins >= 1 && mins <= 5;
        });
        break;
      case 'long':
        result = result.filter(video => {
          const [mins, secs] = video.duration.split(':').map(Number);
          return mins > 5;
        });
        break;
    }
  }
  
  // Apply date filter - in a real app this would be more sophisticated
  // For now we'll just simulate it
  if (activeFilters.value.date !== 'all') {
    switch(activeFilters.value.date) {
      case 'today':
        result = result.filter(video => video.uploadDate.includes('day'));
        break;
      case 'week':
        result = result.filter(video => 
          video.uploadDate.includes('day') || 
          video.uploadDate.includes('week')
        );
        break;
      case 'month':
        result = result.filter(video => !video.uploadDate.includes('month'));
        break;
    }
  }
  
  // Apply sorting
  switch(activeSort.value) {
    case 'newest':
      // Rough simulation of sorting by date
      result.sort((a, b) => {
        if (a.uploadDate.includes('day') && !b.uploadDate.includes('day')) return -1;
        if (!a.uploadDate.includes('day') && b.uploadDate.includes('day')) return 1;
        if (a.uploadDate.includes('week') && b.uploadDate.includes('month')) return -1;
        if (a.uploadDate.includes('month') && b.uploadDate.includes('week')) return 1;
        return 0;
      });
      break;
    case 'popular':
      // Sort by views
      result.sort((a, b) => {
        const aViews = parseInt(a.views.replace(/[MK]/g, '')) * (a.views.includes('M') ? 1000000 : 1000);
        const bViews = parseInt(b.views.replace(/[MK]/g, '')) * (b.views.includes('M') ? 1000000 : 1000);
        return bViews - aViews;
      });
      break;
    case 'trending':
      // Combination of recent and popular
      result.sort((a, b) => {
        const aLikes = parseInt(a.likes.replace(/[MK]/g, '')) * (a.likes.includes('M') ? 1000000 : 1000);
        const bLikes = parseInt(b.likes.replace(/[MK]/g, '')) * (b.likes.includes('M') ? 1000000 : 1000);
        return bLikes - aLikes;
      });
      break;
  }
  
  return result;
});

// Watch for category changes
watch(
  () => route.params.categoryId,
  (newCategoryId) => {
    loadCategoryData(newCategoryId);
    // Reset filters and search when category changes
    activeFilters.value = { duration: 'all', date: 'all' };
    searchQuery.value = '';
    activeSort.value = 'trending';
  }
);

const navigateToWatch = (videoId) => {
  router.push(`/hastyreels/watch/${videoId}`);
};

const setFilter = (type, value) => {
  activeFilters.value[type] = value;
};

const setSort = (value) => {
  activeSort.value = value;
};
</script>

<template>
  <div class="category-page">
    <!-- Category Hero -->
    <section class="category-hero" v-if="!isLoading">
      <div class="category-backdrop" :style="{ backgroundImage: `url(${categoryDetails.background})` }"></div>
      <div class="category-hero-content">
        <span class="category-icon-large">{{ categoryDetails.icon }}</span>
        <h1>{{ categoryDetails.name }}</h1>
        <p class="category-description">{{ categoryDetails.description }}</p>
        <div class="category-stats">
          <span class="videos-count">{{ categoryDetails.videos }} videos</span>
          <div class="popular-tags">
            <span v-for="tag in popularTags" :key="tag" class="tag">#{{ tag }}</span>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Loading State -->
    <div v-if="isLoading" class="loading-container">
      <div class="loading-spinner"></div>
      <p>Loading category...</p>
    </div>
    
    <!-- Videos Section -->
    <section class="videos-section" v-else>
      <!-- Filter and Search Bar -->
      <div class="filter-bar">
        <div class="search-container">
          <input 
            type="text" 
            v-model="searchQuery" 
            :placeholder="`Search in ${categoryDetails.name}...`" 
            class="search-input"
          />
          <span class="search-icon">🔍</span>
        </div>
        
        <div class="filters">
          <div class="sort-filter">
            <label>Sort by:</label>
            <select v-model="activeSort" @change="setSort($event.target.value)">
              <option 
                v-for="option in sortOptions" 
                :key="option.value" 
                :value="option.value"
              >
                {{ option.label }}
              </option>
            </select>
          </div>
          
          <div class="duration-filter">
            <label>Duration:</label>
            <select v-model="activeFilters.duration" @change="setFilter('duration', $event.target.value)">
              <option 
                v-for="option in filterOptions.duration" 
                :key="option.value" 
                :value="option.value"
              >
                {{ option.label }}
              </option>
            </select>
          </div>
          
          <div class="date-filter">
            <label>Upload date:</label>
            <select v-model="activeFilters.date" @change="setFilter('date', $event.target.value)">
              <option 
                v-for="option in filterOptions.date" 
                :key="option.value" 
                :value="option.value"
              >
                {{ option.label }}
              </option>
            </select>
          </div>
        </div>
      </div>
      
      <!-- Videos Grid -->
      <div v-if="filteredVideos.length > 0" class="videos-grid">
        <div 
          v-for="video in filteredVideos" 
          :key="video.id" 
          class="video-card"
          @click="navigateToWatch(video.id)"
        >
          <div class="video-thumbnail">
            <img :src="video.thumbnail" :alt="video.title">
            <div class="video-duration">{{ video.duration }}</div>
            <div class="video-play-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="12" fill="rgba(0, 0, 0, 0.5)"/>
                <path d="M16 12L10 16V8L16 12Z" fill="white"/>
              </svg>
            </div>
          </div>
          <div class="video-details">
            <h3 class="video-title">{{ video.title }}</h3>
            <p class="video-creator">{{ video.creator }}</p>
            <div class="video-meta">
              <span class="video-views">{{ video.views }} views</span>
              <span class="video-date">{{ video.uploadDate }}</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- No Results State -->
      <div v-else class="no-results">
        <div class="no-results-icon">🔍</div>
        <h3>No videos found</h3>
        <p>Try adjusting your search or filters</p>
        <button @click="searchQuery = ''; activeFilters = { duration: 'all', date: 'all' };" class="reset-btn">
          Reset Filters
        </button>
      </div>
    </section>
    
    <!-- Related Categories -->
    <section class="related-categories" v-if="!isLoading">
      <h2>You Might Also Like</h2>
      <div class="related-grid">
        <!-- This would be dynamically generated based on the current category -->
        <div class="related-category" @click="router.push('/hastyreels/category/travel')">
          <div class="related-image" style="background-image: url('https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg')"></div>
          <div class="related-overlay"></div>
          <div class="related-content">
            <span class="related-icon">✈️</span>
            <h3>Travel</h3>
          </div>
        </div>
        
        <div class="related-category" @click="router.push('/hastyreels/category/food')">
          <div class="related-image" style="background-image: url('https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg')"></div>
          <div class="related-overlay"></div>
          <div class="related-content">
            <span class="related-icon">🍳</span>
            <h3>Food & Cooking</h3>
          </div>
        </div>
        
        <div class="related-category" @click="router.push('/hastyreels/category/dance')">
          <div class="related-image" style="background-image: url('https://images.pexels.com/photos/1701203/pexels-photo-1701203.jpeg')"></div>
          <div class="related-overlay"></div>
          <div class="related-content">
            <span class="related-icon">💃</span>
            <h3>Dance</h3>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.category-page {
  background-color: #000;
  color: #fff;
  min-height: 100vh;
  font-family: 'Montserrat', 'Inter', sans-serif;
  padding-top: 64px;
}

/* Category Hero */
.category-hero {
  position: relative;
  height: 350px;
  overflow: hidden;
}

.category-backdrop {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  filter: brightness(0.5);
  transition: all 0.5s ease;
}

.category-hero:hover .category-backdrop {
  transform: scale(1.03);
  filter: brightness(0.4);
}

.category-hero-content {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 5%;
  max-width: 1200px;
  margin: 0 auto;
}

.category-icon-large {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.category-hero-content h1 {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #ff4e50, #fc913a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.category-description {
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  max-width: 600px;
  color: rgba(255, 255, 255, 0.9);
}

.category-stats {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.videos-count {
  font-size: 1rem;
  font-weight: 500;
}

.popular-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background: rgba(255, 255, 255, 0.1);
  padding: 0.4rem 0.8rem;
  border-radius: 50px;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  cursor: pointer;
}

.tag:hover {
  background: rgba(255, 78, 80, 0.3);
}

/* Loading State */
.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
}

.loading-spinner {
  width: 50px;
  height: 50px;
  border: 4px solid rgba(255, 78, 80, 0.1);
  border-left-color: #ff4e50;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Videos Section */
.videos-section {
  padding: 3rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

/* Filter Bar */
.filter-bar {
  margin-bottom: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: center;
}

.search-container {
  position: relative;
  flex: 1;
  min-width: 250px;
}

.search-input {
  width: 100%;
  padding: 0.8rem 2.5rem 0.8rem 1rem;
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
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
}

.filters {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.sort-filter, .duration-filter, .date-filter {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.filters label {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
}

.filters select {
  background: #1a1a1a;
  color: #fff;
  border: 1px solid #333;
  padding: 0.5rem;
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer;
}

.filters select:focus {
  outline: none;
  border-color: #ff4e50;
}

/* Videos Grid */
.videos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.video-card {
  background: #0f0f0f;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  border: 1px solid #222;
}

.video-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(255, 78, 80, 0.2);
  border-color: #ff4e50;
}

.video-thumbnail {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  overflow: hidden;
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

.video-card:hover .video-thumbnail img {
  transform: scale(1.05);
}

.video-duration {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
}

.video-play-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.8);
  opacity: 0;
  transition: all 0.3s ease;
}

.video-card:hover .video-play-icon {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
}

.video-details {
  padding: 1rem;
}

.video-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 1.5;
}

.video-creator {
  color: #ff4e50;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.video-meta {
  display: flex;
  justify-content: space-between;
  color: #999;
  font-size: 0.85rem;
}

/* No Results State */
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

.reset-btn {
  background: linear-gradient(to right, #ff4e50, #fc913a);
  color: #fff;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.reset-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(255, 78, 80, 0.3);
}

/* Related Categories */
.related-categories {
  padding: 4rem 2rem;
  background-color: #0a0a0a;
}

.related-categories h2 {
  text-align: center;
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 2.5rem;
  background: linear-gradient(to right, #ff4e50, #fc913a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.related-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  max-width: 1000px;
  margin: 0 auto;
}

.related-category {
  position: relative;
  height: 150px;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
}

.related-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: all 0.5s ease;
}

.related-category:hover .related-image {
  transform: scale(1.1);
}

.related-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}

.related-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
}

.related-icon {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.related-content h3 {
  font-size: 1.2rem;
  font-weight: 600;
}

/* Responsive Styles */
@media (max-width: 992px) {
  .category-hero-content h1 {
    font-size: 3rem;
  }
  
  .category-description {
    font-size: 1.1rem;
  }
}

@media (max-width: 768px) {
  .filter-bar {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  
  .videos-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  
  .category-hero {
    height: 300px;
  }
  
  .category-hero-content h1 {
    font-size: 2.5rem;
  }
  
  .category-icon-large {
    font-size: 3rem;
  }
  
  .related-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
}

@media (max-width: 480px) {
  .videos-section {
    padding: 2rem 1rem;
  }
  
  .videos-grid {
    grid-template-columns: 1fr;
  }
  
  .category-hero {
    height: 250px;
  }
  
  .category-hero-content h1 {
    font-size: 2rem;
  }
  
  .category-description {
    font-size: 1rem;
  }
  
  .category-stats {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  
  .related-categories {
    padding: 3rem 1rem;
  }
  
  .related-categories h2 {
    font-size: 1.8rem;
  }
}
</style>