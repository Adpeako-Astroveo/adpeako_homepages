<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';


// Featured videos
const featuredVideos = ref([
  {
    id: 'vid001',
    title: 'Coastal Sunrise',
    creator: 'NatureScapes',
    views: '1.2M',
    duration: '2:34',
    thumbnail: 'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg',
    category: 'Nature',
    featured: true
  },
  {
    id: 'vid002',
    title: 'Urban Dance Battle',
    creator: 'StreetMoves',
    views: '3.4M',
    duration: '1:47',
    thumbnail: 'https://images.pexels.com/photos/1701202/pexels-photo-1701202.jpeg',
    category: 'Dance',
    featured: true
  },
  {
    id: 'vid003',
    title: 'Mountain Bike Extreme',
    creator: 'AdventureSports',
    views: '987K',
    duration: '3:12',
    thumbnail: 'https://images.pexels.com/photos/2433353/pexels-photo-2433353.jpeg',
    category: 'Sports',
    featured: true
  }
]);

// Trending videos
const trendingVideos = ref([
  {
    id: 'vid004',
    title: 'Coffee Art Mastery',
    creator: 'BaristaLife',
    views: '456K',
    duration: '1:35',
    thumbnail: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg',
    category: 'Food'
  },
  {
    id: 'vid005',
    title: 'Sunset Timelapse',
    creator: 'TimeCapture',
    views: '789K',
    duration: '0:45',
    thumbnail: 'https://images.pexels.com/photos/1237119/pexels-photo-1237119.jpeg',
    category: 'Nature'
  },
  {
    id: 'vid006',
    title: 'Street Art Process',
    creator: 'UrbanCanvas',
    views: '567K',
    duration: '2:08',
    thumbnail: 'https://images.pexels.com/photos/1674049/pexels-photo-1674049.jpeg',
    category: 'Art'
  },
  {
    id: 'vid007',
    title: 'Drone Cityscapes',
    creator: 'SkyView',
    views: '1.1M',
    duration: '1:22',
    thumbnail: 'https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg',
    category: 'Travel'
  }
]);

// Categories
const categories = ref([
  { id: 'nature', name: 'Nature', icon: '🌿', videos: 1240 },
  { id: 'travel', name: 'Travel', icon: '✈️', videos: 856 },
  { id: 'food', name: 'Food & Cooking', icon: '🍳', videos: 920 },
  { id: 'fitness', name: 'Fitness', icon: '💪', videos: 745 },
  { id: 'music', name: 'Music', icon: '🎵', videos: 1380 },
  { id: 'comedy', name: 'Comedy', icon: '😂', videos: 1050 },
  { id: 'dance', name: 'Dance', icon: '💃', videos: 680 },
  { id: 'sports', name: 'Sports', icon: '⚽', videos: 890 }
]);

// Popular creators
const popularCreators = ref([
  {
    id: 'creator001',
    name: 'Emily Chen',
    handle: '@emilyshots',
    followers: '2.3M',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
    category: 'Travel'
  },
  {
    id: 'creator002',
    name: 'Mike Rivera',
    handle: '@mikeinthewild',
    followers: '1.8M',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    category: 'Adventure'
  },
  {
    id: 'creator003',
    name: 'Sarah Davis',
    handle: '@saraheats',
    followers: '3.1M',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    category: 'Food'
  }
]);

// Features list
const features = ref([
  {
    title: 'Ultra-HD Streaming',
    description: 'Experience crystal clear videos in stunning 4K quality.',
    icon: '📺'
  },
  {
    title: 'Ad-Free Experience',
    description: 'Enjoy uninterrupted video viewing with zero ads.',
    icon: '🚫'
  },
  {
    title: 'Unlimited Downloads',
    description: 'Save videos to watch offline, anywhere, anytime.',
    icon: '⬇️'
  },
  {
    title: 'Cross-Device Sync',
    description: 'Start watching on one device, continue on another seamlessly.',
    icon: '🔄'
  }
]);

// Methods
const navigateToWatch = (videoId) => {
  router.push(`/hastyreels/watch/${videoId}`);
};

const navigateToCategory = (categoryId) => {
  router.push(`/hastyreels/category/${categoryId}`);
};

const navigateToCreator = (creatorId) => {
  // In a real app, this would go to a specific creator profile
  router.push('/hastyreels/creators');
};

const navigateToLogin = () => {
  router.push('/hastyreels/login');
};
</script>

<template>
  <div class="hastyreels-home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-backdrop"></div>
      <div class="hero-content">
        <h1>Watch. Create. Share.</h1>
        <p class="hero-subtitle">Join millions of creators and viewers for the best short-form video experience</p>
        <div class="hero-cta">
          <button @click="navigateToLogin" class="primary-btn">Get Started</button>
          <button @click="router.push('/hastyreels/categories')" class="secondary-btn">Browse Videos</button>
        </div>
        <div class="hero-stats">
          <div class="stat-item">
            <span class="stat-value">10M+</span>
            <span class="stat-label">Videos</span>
          </div>
          <div class="stat-item">
            <span class="stat-value">2M+</span>
            <span class="stat-label">Creators</span>
          </div>
          <div class="stat-item">
            <span class="stat-value">50M+</span>
            <span class="stat-label">Users</span>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Featured Videos Section -->
    <section class="featured-videos">
      <h2>Featured Picks</h2>
      <div class="video-showcase">
        <div v-for="video in featuredVideos" :key="video.id" class="featured-video-card">
          <div class="video-thumbnail" @click="navigateToWatch(video.id)">
            <img :src="video.thumbnail" :alt="video.title">
            <div class="video-duration">{{ video.duration }}</div>
            <div class="video-play-button">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="12" fill="rgba(0, 0, 0, 0.5)"/>
                <path d="M16 12L10 16V8L16 12Z" fill="white"/>
              </svg>
            </div>
          </div>
          <div class="video-details">
            <h3>{{ video.title }}</h3>
            <div class="video-creator" @click="navigateToCreator(video.id)">{{ video.creator }}</div>
            <div class="video-meta">
              <span>{{ video.views }} views</span>
              <span class="video-category" @click="navigateToCategory(video.category.toLowerCase())">{{ video.category }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Categories Section -->
    <section class="categories-section">
      <div class="section-header">
        <h2>Browse Categories</h2>
        <button @click="router.push('/hastyreels/categories')" class="view-all-btn">View All</button>
      </div>
      <div class="categories-grid">
        <div v-for="category in categories" :key="category.id" class="category-card" @click="navigateToCategory(category.id)">
          <span class="category-icon">{{ category.icon }}</span>
          <div class="category-details">
            <h3>{{ category.name }}</h3>
            <span class="category-count">{{ category.videos }} videos</span>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Trending Videos -->
    <section class="trending-videos">
      <div class="section-header">
        <h2>Trending Now</h2>
        <button @click="router.push('/hastyreels/trending')" class="view-all-btn">View All</button>
      </div>
      <div class="trending-grid">
        <div v-for="video in trendingVideos" :key="video.id" class="video-card" @click="navigateToWatch(video.id)">
          <div class="video-thumbnail">
            <img :src="video.thumbnail" :alt="video.title">
            <div class="video-duration">{{ video.duration }}</div>
          </div>
          <div class="video-info">
            <h3 class="video-title">{{ video.title }}</h3>
            <p class="video-creator">{{ video.creator }}</p>
            <div class="video-stats">
              <span class="video-views">{{ video.views }} views</span>
              <span class="video-category">{{ video.category }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Popular Creators Section -->
    <section class="creators-section">
      <div class="section-header">
        <h2>Popular Creators</h2>
        <button @click="router.push('/hastyreels/creators')" class="view-all-btn">View All</button>
      </div>
      <div class="creators-grid">
        <div v-for="creator in popularCreators" :key="creator.id" class="creator-card" @click="navigateToCreator(creator.id)">
          <div class="creator-avatar">
            <img :src="creator.avatar" :alt="creator.name">
          </div>
          <div class="creator-details">
            <h3>{{ creator.name }}</h3>
            <p class="creator-handle">{{ creator.handle }}</p>
            <span class="creator-followers">{{ creator.followers }} followers</span>
            <span class="creator-category">{{ creator.category }}</span>
          </div>
          <button class="follow-btn">Follow</button>
        </div>
      </div>
    </section>
    
    <!-- Features Section -->
    <section class="features-section">
      <h2>Why Choose HastyReels?</h2>
      <div class="features-grid">
        <div v-for="feature in features" :key="feature.title" class="feature-card">
          <div class="feature-icon">{{ feature.icon }}</div>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-content">
        <h2>Ready to start watching?</h2>
        <p>Join our community of creators and viewers today.</p>
        <div class="cta-buttons">
          <button @click="navigateToLogin" class="primary-btn">Create Account</button>
          <button @click="router.push('/hastyreels/trending')" class="secondary-btn">Explore Trending</button>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hastyreels-home {
  background-color: #000;
  color: #fff;
  min-height: 100vh;
  font-family: 'Montserrat', 'Inter', sans-serif;
  padding-top: 64px;
}

/* Hero Section */
.hero {
  position: relative;
  height: 85vh;
  min-height: 600px;
  max-height: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
}

.hero-backdrop {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)),
    url('https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg') no-repeat center center;
  background-size: cover;
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 900px;
  padding: 0 2rem;
}

.hero h1 {
  font-size: 4.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  background: linear-gradient(to right, #ff4e50, #fc913a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  letter-spacing: -1px;
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 2.5rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.hero-cta {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-bottom: 3rem;
}

.primary-btn {
  background: linear-gradient(to right, #ff4e50, #fc913a);
  color: #fff;
  border: none;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 78, 80, 0.4);
}

.primary-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(255, 78, 80, 0.5);
}

.secondary-btn {
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.secondary-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-3px);
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 4rem;
}

.stat-item {
  display: flex;
  flex-direction: column;
}

.stat-value {
  font-size: 2rem;
  font-weight: 700;
  color: #ff4e50;
}

.stat-label {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
}

/* Section common styles */
section {
  padding: 5rem 2rem;
}

section h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2.5rem;
  text-align: center;
  background: linear-gradient(to right, #ff4e50, #fc913a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.5rem;
}

.section-header h2 {
  margin-bottom: 0;
}

.view-all-btn {
  background: transparent;
  color: #ff4e50;
  border: 1px solid #ff4e50;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.view-all-btn:hover {
  background: rgba(255, 78, 80, 0.1);
}

/* Featured Videos Section */
.featured-videos {
  background-color: #0a0a0a;
}

.video-showcase {
  display: flex;
  gap: 2rem;
  overflow-x: auto;
  padding: 1rem 0;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.video-showcase::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}

.featured-video-card {
  flex: 0 0 auto;
  width: calc(33.333% - 1.334rem);
  min-width: 300px;
  background: #151515;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.featured-video-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 30px rgba(255, 78, 80, 0.3);
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

.featured-video-card:hover .video-thumbnail img {
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

.video-play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.8);
  opacity: 0;
  transition: all 0.3s ease;
}

.featured-video-card:hover .video-play-button {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
}

.video-details {
  padding: 1.5rem;
}

.video-details h3 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.video-creator {
  color: #ff4e50;
  font-size: 0.95rem;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.video-creator:hover {
  color: #fc913a;
  text-decoration: underline;
}

.video-meta {
  display: flex;
  justify-content: space-between;
  color: #999;
  font-size: 0.85rem;
}

.video-category {
  background: rgba(252, 145, 58, 0.2);
  color: #fc913a;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.video-category:hover {
  background: rgba(252, 145, 58, 0.3);
}

/* Categories Section */
.categories-section {
  background-color: #050505;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.5rem;
}

.category-card {
  background: linear-gradient(135deg, #1a1a1a 0%, #111 100%);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid #222;
}

.category-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(255, 78, 80, 0.2);
  border-color: #ff4e50;
}

.category-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  display: inline-block;
}

.category-details h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.category-count {
  color: #999;
  font-size: 0.85rem;
}

/* Trending Videos */
.trending-videos {
  background-color: #0a0a0a;
}

.trending-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
}

.video-card {
  background: #151515;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
}

.video-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(255, 78, 80, 0.2);
}

.video-card .video-thumbnail {
  padding-bottom: 100%; /* 1:1 aspect ratio */
}

.video-info {
  padding: 1.2rem;
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
}

.video-creator {
  color: #ff4e50;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.video-stats {
  display: flex;
  justify-content: space-between;
  color: #999;
  font-size: 0.8rem;
}

/* Creators Section */
.creators-section {
  background-color: #050505;
}

.creators-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.creator-card {
  background: #151515;
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.2rem;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  border: 1px solid #222;
}

.creator-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(255, 78, 80, 0.2);
  border-color: #ff4e50;
}

.creator-avatar {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
}

.creator-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.creator-details {
  flex: 1;
  min-width: 0; /* Needed for text-overflow to work */
}

.creator-details h3 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.2rem;
}

.creator-handle {
  color: #999;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.creator-followers {
  color: #ff4e50;
  font-size: 0.85rem;
  margin-right: 0.8rem;
  font-weight: 500;
}

.creator-category {
  background: rgba(252, 145, 58, 0.2);
  color: #fc913a;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
}

.follow-btn {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: transparent;
  color: #ff4e50;
  border: 1px solid #ff4e50;
  padding: 0.3rem 0.8rem;
  border-radius: 50px;
  font-size: 0.8rem;
  transition: all 0.3s ease;
}

.follow-btn:hover {
  background: rgba(255, 78, 80, 0.1);
}

/* Features Section */
.features-section {
  background-color: #0a0a0a;
  text-align: center;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  padding: 2rem;
  background: #151515;
  border-radius: 12px;
  transition: all 0.3s ease;
  border: 1px solid #222;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(255, 78, 80, 0.2);
  border-color: #ff4e50;
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.feature-card h3 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.feature-card p {
  color: #ccc;
  font-size: 0.95rem;
  line-height: 1.6;
}

/* CTA Section */
.cta-section {
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), 
              url('https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg') no-repeat center center;
  background-size: cover;
  text-align: center;
  padding: 6rem 2rem;
}

.cta-content {
  max-width: 700px;
  margin: 0 auto;
}

.cta-section h2 {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.cta-section p {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

/* Responsive Styles */
@media (max-width: 1200px) {
  .featured-video-card {
    width: calc(50% - 1rem);
  }
}

@media (max-width: 992px) {
  .hero h1 {
    font-size: 3.5rem;
  }
  
  .creators-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
}

@media (max-width: 768px) {
  .hero {
    min-height: 500px;
  }
  
  .hero h1 {
    font-size: 2.8rem;
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
  }
  
  .hero-stats {
    gap: 2rem;
  }
  
  .featured-video-card {
    width: calc(100% - 1rem);
    min-width: 250px;
  }
  
  .trending-grid, 
  .categories-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
  
  .creators-grid {
    grid-template-columns: 1fr;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
    max-width: 400px;
  }
  
  .cta-section h2 {
    font-size: 2.5rem;
  }
  
  .cta-buttons {
    flex-direction: column;
    max-width: 250px;
    margin: 0 auto;
  }
}

@media (max-width: 480px) {
  section {
    padding: 3rem 1.5rem;
  }
  
  .hero {
    min-height: 450px;
  }
  
  .hero h1 {
    font-size: 2.2rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
  }
  
  .hero-cta {
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    max-width: 250px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .hero-stats {
    flex-direction: column;
    gap: 1rem;
  }
  
  .section-header {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
  
  section h2, 
  .section-header h2 {
    font-size: 2rem;
  }
  
  .cta-section h2 {
    font-size: 2rem;
  }
  
  .cta-section p {
    font-size: 1rem;
  }
}
</style>