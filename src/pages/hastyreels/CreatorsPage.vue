<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Creator categories
const creatorCategories = ref([
  { id: 'trending', label: 'Trending Creators', active: true },
  { id: 'recommended', label: 'Recommended for You', active: false },
  { id: 'rising', label: 'Rising Stars', active: false },
  { id: 'verified', label: 'Verified Creators', active: false }
]);

// Set active category
const setActiveCategory = (categoryId) => {
  creatorCategories.value.forEach(cat => {
    cat.active = cat.id === categoryId;
  });
  
  // In a real app, this would load different creators based on the category
  // For this demo, we'll keep showing the same creators
};

// Search query
const searchQuery = ref('');

// Creators list
const creators = ref([
  {
    id: 'creator001',
    name: 'Emily Chen',
    handle: '@emilyshots',
    followers: '2.3M',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
    category: 'Travel',
    verified: true,
    coverImage: 'https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg',
    bio: 'Capturing breathtaking moments around the world. Travel photographer and content creator based in Los Angeles.',
    videosCount: 124,
    isFollowing: false
  },
  {
    id: 'creator002',
    name: 'Mike Rivera',
    handle: '@mikeinthewild',
    followers: '1.8M',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    category: 'Adventure',
    verified: true,
    coverImage: 'https://images.pexels.com/photos/1482927/pexels-photo-1482927.jpeg',
    bio: 'Adventure enthusiast and outdoor filmmaker. Taking you on epic journeys through the world\'s most stunning landscapes.',
    videosCount: 89,
    isFollowing: true
  },
  {
    id: 'creator003',
    name: 'Sarah Davis',
    handle: '@saraheats',
    followers: '3.1M',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    category: 'Food',
    verified: true,
    coverImage: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg',
    bio: 'Food lover, recipe developer, and culinary explorer. Sharing delicious recipes and food adventures from around the world.',
    videosCount: 156,
    isFollowing: false
  },
  {
    id: 'creator004',
    name: 'Alex Johnson',
    handle: '@alexfitness',
    followers: '1.5M',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
    category: 'Fitness',
    verified: false,
    coverImage: 'https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg',
    bio: 'Certified personal trainer sharing workout tips, fitness routines, and motivation to help you achieve your health goals.',
    videosCount: 78,
    isFollowing: false
  },
  {
    id: 'creator005',
    name: 'Lisa Wong',
    handle: '@lisaplays',
    followers: '4.2M',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
    category: 'Gaming',
    verified: true,
    coverImage: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg',
    bio: 'Professional gamer and content creator. Streaming gameplay, tips, tricks and industry insights.',
    videosCount: 210,
    isFollowing: true
  },
  {
    id: 'creator006',
    name: 'David Kim',
    handle: '@davidsmusic',
    followers: '2.7M',
    avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
    category: 'Music',
    verified: true,
    coverImage: 'https://images.pexels.com/photos/164693/pexels-photo-164693.jpeg',
    bio: 'Musician, composer, and producer sharing original music, covers, and behind-the-scenes content from the studio.',
    videosCount: 143,
    isFollowing: false
  },
  {
    id: 'creator007',
    name: 'Sophia Martinez',
    handle: '@sophiadance',
    followers: '3.5M',
    avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg',
    category: 'Dance',
    verified: false,
    coverImage: 'https://images.pexels.com/photos/1701203/pexels-photo-1701203.jpeg',
    bio: 'Professional dancer and choreographer. Sharing dance tutorials, performances, and choreography breakdowns.',
    videosCount: 98,
    isFollowing: true
  },
  {
    id: 'creator008',
    name: 'James Wilson',
    handle: '@jameswfilms',
    followers: '5.8M',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
    category: 'Filmmaking',
    verified: true,
    coverImage: 'https://images.pexels.com/photos/66134/pexels-photo-66134.jpeg',
    bio: 'Award-winning filmmaker and director. Creating cinematic shorts and sharing filmmaking tips, techniques, and behind-the-scenes content.',
    videosCount: 187,
    isFollowing: false
  }
]);

// Filter creators based on search
const filteredCreators = computed(() => {
  if (!searchQuery.value.trim()) {
    return creators.value;
  }
  
  const query = searchQuery.value.toLowerCase();
  return creators.value.filter(creator => 
    creator.name.toLowerCase().includes(query) || 
    creator.handle.toLowerCase().includes(query) || 
    creator.category.toLowerCase().includes(query) ||
    creator.bio.toLowerCase().includes(query)
  );
});

// Toggle follow state
const toggleFollow = (creatorId) => {
  const creator = creators.value.find(c => c.id === creatorId);
  if (creator) {
    creator.isFollowing = !creator.isFollowing;
    
    // Update follower count - just for demo
    if (creator.isFollowing) {
      creator.followers = (parseInt(creator.followers.replace(/[MK]/g, '')) + 1) + 'M';
    }
  }
};

// Navigate to a creator profile (in a real app)
const viewCreator = (creatorId) => {
  // This would navigate to a detailed creator page
  // For now we'll just stay on this page
  console.log(`View creator: ${creatorId}`);
};
</script>

<template>
  <div class="creators-page">
    <!-- Header Section -->
    <section class="creators-header">
      <h1>Top Creators</h1>
      <div class="search-container">
        <input 
          type="text" 
          v-model="searchQuery" 
          placeholder="Search creators..." 
          class="search-input"
        />
        <span class="search-icon">🔍</span>
      </div>
      
      <div class="creator-categories">
        <button 
          v-for="category in creatorCategories" 
          :key="category.id"
          @click="setActiveCategory(category.id)"
          :class="{ 'active': category.active }"
          class="category-btn"
        >
          {{ category.label }}
        </button>
      </div>
    </section>
    
    <!-- Creators Grid -->
    <section class="creators-grid-section">
      <div v-if="filteredCreators.length === 0" class="no-results">
        <div class="no-results-icon">🔍</div>
        <h3>No creators found</h3>
        <p>Try adjusting your search query</p>
      </div>
      
      <div v-else class="creators-grid">
        <div v-for="creator in filteredCreators" :key="creator.id" class="creator-card">
          <div class="creator-cover">
            <img :src="creator.coverImage" :alt="creator.name">
          </div>
          <div class="creator-profile">
            <div class="creator-avatar" @click="viewCreator(creator.id)">
              <img :src="creator.avatar" :alt="creator.name">
              <span v-if="creator.verified" class="verified-badge">✓</span>
            </div>
            <div class="creator-details">
              <h3 @click="viewCreator(creator.id)">{{ creator.name }}</h3>
              <p class="creator-handle">{{ creator.handle }}</p>
              <div class="creator-stats">
                <span class="followers-count">{{ creator.followers }} followers</span>
                <span class="videos-count">{{ creator.videosCount }} videos</span>
              </div>
            </div>
            <button 
              :class="{ 'following': creator.isFollowing }"
              @click="toggleFollow(creator.id)"
              class="follow-btn"
            >
              {{ creator.isFollowing ? 'Following' : 'Follow' }}
            </button>
          </div>
          <div class="creator-bio">
            <p>{{ creator.bio }}</p>
          </div>
          <div class="creator-category">
            <span>{{ creator.category }}</span>
          </div>
          <div class="creator-actions">
            <button @click="router.push(`/hastyreels/category/${creator.category.toLowerCase()}`)" class="view-videos-btn">
              View Videos
            </button>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Become a Creator CTA -->
    <section class="become-creator-cta">
      <div class="cta-content">
        <h2>Become a Creator</h2>
        <p>Share your passion with millions of viewers and build your audience</p>
        <button @click="router.push('/hastyreels/signup')" class="create-account-btn">
          Create Account
        </button>
      </div>
    </section>
  </div>
</template>

<style scoped>
.creators-page {
  background-color: #000;
  color: #fff;
  min-height: 100vh;
  font-family: 'Montserrat', 'Inter', sans-serif;
  padding-top: 64px;
}

/* Header Section */
.creators-header {
  padding: 3rem 2rem;
  text-align: center;
  background-color: #0a0a0a;
}

.creators-header h1 {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  background: linear-gradient(to right, #ff4e50, #fc913a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.search-container {
  position: relative;
  max-width: 600px;
  margin: 0 auto 2rem;
}

.search-input {
  width: 100%;
  padding: 1rem 3rem 1rem 1.5rem;
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
  right: 1.5rem;
  top: 50%;
  transform: translateY(-50%);
}

.creator-categories {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.category-btn {
  background: rgba(255, 255, 255, 0.08);
  border: none;
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.category-btn:hover, .category-btn.active {
  background: rgba(255, 78, 80, 0.3);
}

.category-btn.active {
  background: linear-gradient(to right, rgba(255, 78, 80, 0.7), rgba(252, 145, 58, 0.7));
  box-shadow: 0 4px 15px rgba(255, 78, 80, 0.3);
}

/* Creators Grid Section */
.creators-grid-section {
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
}

.creators-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
}

.creator-card {
  background: #0f0f0f;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid #222;
  position: relative;
}

.creator-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(255, 78, 80, 0.2);
  border-color: #ff4e50;
}

.creator-cover {
  height: 120px;
  overflow: hidden;
}

.creator-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.creator-card:hover .creator-cover img {
  transform: scale(1.05);
}

.creator-profile {
  display: flex;
  padding: 0 1.5rem;
  margin-top: -25px;
  position: relative;
  z-index: 2;
  margin-bottom: 1rem;
}

.creator-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 4px solid #0f0f0f;
  overflow: hidden;
  position: relative;
  cursor: pointer;
}

.creator-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.verified-badge {
  position: absolute;
  bottom: 0;
  right: 0;
  background: #ff4e50;
  color: white;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  border: 2px solid #0f0f0f;
}

.creator-details {
  flex: 1;
  padding-top: 1.5rem;
  padding-left: 1rem;
}

.creator-details h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.2rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.creator-details h3:hover {
  color: #ff4e50;
}

.creator-handle {
  color: #999;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.creator-stats {
  display: flex;
  gap: 1rem;
  font-size: 0.85rem;
  color: #ccc;
}

.follow-btn {
  background: linear-gradient(to right, #ff4e50, #fc913a);
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: flex-start;
  margin-top: 1.5rem;
}

.follow-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(255, 78, 80, 0.3);
}

.follow-btn.following {
  background: transparent;
  border: 2px solid #ff4e50;
}

.creator-bio {
  padding: 0 1.5rem;
  margin-bottom: 1rem;
}

.creator-bio p {
  font-size: 0.9rem;
  line-height: 1.6;
  color: #ccc;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.creator-category {
  padding: 0 1.5rem;
  margin-bottom: 0.5rem;
}

.creator-category span {
  background: rgba(255, 78, 80, 0.2);
  color: #ff4e50;
  padding: 0.4rem 0.8rem;
  border-radius: 50px;
  font-size: 0.85rem;
}

.creator-actions {
  padding: 0 1.5rem 1.5rem;
}

.view-videos-btn {
  width: 100%;
  background: rgba(255, 255, 255, 0.08);
  color: white;
  border: none;
  padding: 0.8rem 0;
  border-radius: 50px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
}

.view-videos-btn:hover {
  background: rgba(255, 78, 80, 0.2);
}

/* Become a Creator CTA */
.become-creator-cta {
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
              url('https://images.pexels.com/photos/3379943/pexels-photo-3379943.jpeg') no-repeat center center;
  background-size: cover;
  padding: 6rem 2rem;
  text-align: center;
  margin-top: 2rem;
}

.cta-content {
  max-width: 700px;
  margin: 0 auto;
}

.become-creator-cta h2 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: linear-gradient(to right, #ff4e50, #fc913a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.become-creator-cta p {
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  color: rgba(255, 255, 255, 0.9);
}

.create-account-btn {
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

.create-account-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(255, 78, 80, 0.5);
}

/* Responsive Styles */
@media (max-width: 992px) {
  .creators-grid {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
}

@media (max-width: 768px) {
  .creators-header h1 {
    font-size: 2.8rem;
  }
  
  .creators-grid {
    grid-template-columns: 1fr;
  }
  
  .creator-categories {
    overflow-x: auto;
    justify-content: flex-start;
    padding-bottom: 1rem;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
  
  .creator-categories::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
  
  .become-creator-cta h2 {
    font-size: 2.5rem;
  }
  
  .become-creator-cta p {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .creators-header {
    padding: 2rem 1.5rem;
  }
  
  .creators-header h1 {
    font-size: 2.2rem;
  }
  
  .creators-grid-section {
    padding: 2rem 1rem;
  }
  
  .category-btn {
    padding: 0.7rem 1.2rem;
    font-size: 0.85rem;
  }
  
  .creator-profile {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .creator-details {
    padding-top: 0.5rem;
    padding-left: 0;
  }
  
  .creator-stats {
    justify-content: center;
  }
  
  .follow-btn {
    margin-top: 1rem;
  }
  
  .become-creator-cta {
    padding: 4rem 1.5rem;
  }
  
  .become-creator-cta h2 {
    font-size: 2rem;
  }
}
</style>