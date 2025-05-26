<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Categories with more details for the categories page
const categories = ref([
  { 
    id: 'nature', 
    name: 'Nature', 
    icon: '🌿', 
    videos: 1240,
    description: 'Stunning landscapes, wildlife, and natural phenomena',
    background: 'https://images.pexels.com/photos/1671324/pexels-photo-1671324.jpeg',
    popularTags: ['wildlife', 'landscapes', 'oceans', 'timelapse', 'forests']
  },
  { 
    id: 'travel', 
    name: 'Travel', 
    icon: '✈️', 
    videos: 856,
    description: 'Explore the world through immersive travel content',
    background: 'https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg',
    popularTags: ['destinations', 'cityguides', 'adventure', 'culture', 'foodtravel']
  },
  { 
    id: 'food', 
    name: 'Food & Cooking', 
    icon: '🍳', 
    videos: 920,
    description: 'Delicious recipes, cooking techniques, and food inspiration',
    background: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg',
    popularTags: ['recipes', 'baking', 'quickmeals', 'desserts', 'healthyfood']
  },
  { 
    id: 'fitness', 
    name: 'Fitness', 
    icon: '💪', 
    videos: 745,
    description: 'Workouts, training tips, and healthy lifestyle content',
    background: 'https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg',
    popularTags: ['workout', 'yoga', 'cardio', 'strength', 'flexibility']
  },
  { 
    id: 'music', 
    name: 'Music', 
    icon: '🎵', 
    videos: 1380,
    description: 'Music performances, covers, and instrumental pieces',
    background: 'https://images.pexels.com/photos/164693/pexels-photo-164693.jpeg',
    popularTags: ['covers', 'instruments', 'vocals', 'original', 'remix']
  },
  { 
    id: 'comedy', 
    name: 'Comedy', 
    icon: '😂', 
    videos: 1050,
    description: 'Funny sketches, stand-up clips, and humorous content',
    background: 'https://images.pexels.com/photos/7955075/pexels-photo-7955075.jpeg',
    popularTags: ['standup', 'sketches', 'pranks', 'satire', 'improv']
  },
  { 
    id: 'dance', 
    name: 'Dance', 
    icon: '💃', 
    videos: 680,
    description: 'Choreography, dance battles, and impressive moves',
    background: 'https://images.pexels.com/photos/1701203/pexels-photo-1701203.jpeg',
    popularTags: ['choreography', 'hiphop', 'ballet', 'contemporary', 'tutorials']
  },
  { 
    id: 'sports', 
    name: 'Sports', 
    icon: '⚽', 
    videos: 890,
    description: 'Sports highlights, tricks, and athletic feats',
    background: 'https://images.pexels.com/photos/248547/pexels-photo-248547.jpeg',
    popularTags: ['soccer', 'basketball', 'extreme', 'highlights', 'skills']
  },
  { 
    id: 'beauty', 
    name: 'Beauty', 
    icon: '💄', 
    videos: 780,
    description: 'Makeup tutorials, skincare routines, and beauty hacks',
    background: 'https://images.pexels.com/photos/2693644/pexels-photo-2693644.jpeg',
    popularTags: ['makeup', 'skincare', 'hairstyles', 'nails', 'tutorials']
  },
  { 
    id: 'pets', 
    name: 'Pets & Animals', 
    icon: '🐶', 
    videos: 950,
    description: 'Cute animal moments and pet care advice',
    background: 'https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg',
    popularTags: ['cats', 'dogs', 'wildlife', 'birds', 'rescue']
  },
  { 
    id: 'diy', 
    name: 'DIY & Crafts', 
    icon: '🔨', 
    videos: 620,
    description: 'Creative projects, home improvement, and craft tutorials',
    background: 'https://images.pexels.com/photos/6069552/pexels-photo-6069552.jpeg',
    popularTags: ['crafts', 'homeprojects', 'upcycling', 'handmade', 'woodworking']
  },
  { 
    id: 'tech', 
    name: 'Technology', 
    icon: '💻', 
    videos: 720,
    description: 'Gadget reviews, tech news, and digital innovation',
    background: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
    popularTags: ['gadgets', 'reviews', 'tutorials', 'coding', 'innovation']
  }
]);

const navigateToCategory = (categoryId) => {
  router.push(`/hastyreels/category/${categoryId}`);
};

const searchQuery = ref('');

const filteredCategories = computed(() => {
  if (!searchQuery.value) {
    return categories.value;
  }
  
  const query = searchQuery.value.toLowerCase();
  return categories.value.filter(category => 
    category.name.toLowerCase().includes(query) || 
    category.description.toLowerCase().includes(query) ||
    category.popularTags.some(tag => tag.includes(query))
  );
});

const featuredCategory = ref({
  id: 'drone',
  name: 'Drone Photography',
  description: 'Experience breathtaking aerial views and cinematic drone footage',
  background: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg',
  videos: 450,
  popularTags: ['aerial', 'cinematic', 'landscapes', 'travel', 'nature']
});
</script>

<template>
  <div class="categories-page">
    <!-- Header Section -->
    <section class="category-header">
      <h1>Explore Categories</h1>
      <div class="search-container">
        <input 
          type="text" 
          v-model="searchQuery" 
          placeholder="Search categories..." 
          class="search-input"
        />
        <span class="search-icon">🔍</span>
      </div>
    </section>
    
    <!-- Featured Category -->
    <section class="featured-category" @click="navigateToCategory(featuredCategory.id)">
      <div class="featured-overlay" :style="{backgroundImage: `url(${featuredCategory.background})`}"></div>
      <div class="featured-content">
        <div class="featured-label">Featured Category</div>
        <h2>{{ featuredCategory.name }}</h2>
        <p>{{ featuredCategory.description }}</p>
        <div class="featured-meta">
          <span class="video-count">{{ featuredCategory.videos }} videos</span>
          <div class="tags-container">
            <span v-for="tag in featuredCategory.popularTags" :key="tag" class="tag">#{{ tag }}</span>
          </div>
        </div>
        <button class="explore-btn">Explore Category</button>
      </div>
    </section>
    
    <!-- All Categories -->
    <section class="all-categories">
      <h2>All Categories</h2>
      
      <div v-if="filteredCategories.length === 0" class="no-results">
        <div class="no-results-icon">🔍</div>
        <h3>No categories found</h3>
        <p>Try adjusting your search query</p>
      </div>
      
      <div v-else class="categories-grid">
        <div 
          v-for="category in filteredCategories" 
          :key="category.id" 
          class="category-card"
          @click="navigateToCategory(category.id)"
        >
          <div class="category-image" :style="{backgroundImage: `url(${category.background})`}">
            <div class="category-overlay"></div>
            <span class="category-icon">{{ category.icon }}</span>
          </div>
          <div class="category-content">
            <h3>{{ category.name }}</h3>
            <p>{{ category.description }}</p>
            <div class="category-meta">
              <span class="video-count">{{ category.videos }} videos</span>
              <div class="tags-container">
                <span v-for="(tag, index) in category.popularTags.slice(0, 3)" :key="tag" class="tag">#{{ tag }}</span>
                <span v-if="category.popularTags.length > 3" class="more-tags">+{{ category.popularTags.length - 3 }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Subscribe Banner -->
    <section class="subscribe-banner">
      <div class="subscribe-content">
        <h2>Get Unlimited Access</h2>
        <p>Subscribe to HastyReels Premium for ad-free viewing, offline downloads, and exclusive content</p>
        <button @click="router.push('/hastyreels/signup')" class="primary-btn">Start Free Trial</button>
      </div>
    </section>
  </div>
</template>

<style scoped>
.categories-page {
  background-color: #000;
  color: #fff;
  min-height: 100vh;
  font-family: 'Montserrat', 'Inter', sans-serif;
  padding-top: 64px;
}

/* Header Section */
.category-header {
  padding: 3rem 2rem;
  text-align: center;
  background-color: #0a0a0a;
}

.category-header h1 {
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
  margin: 0 auto;
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

/* Featured Category */
.featured-category {
  position: relative;
  height: 400px;
  overflow: hidden;
  cursor: pointer;
}

.featured-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  filter: brightness(0.6);
  transition: all 0.5s ease;
}

.featured-category:hover .featured-overlay {
  transform: scale(1.05);
  filter: brightness(0.5);
}

.featured-content {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 15% 0 5%;
  max-width: 1200px;
  margin: 0 auto;
}

.featured-label {
  background: #ff4e50;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.9rem;
  display: inline-block;
  margin-bottom: 1.5rem;
  width: fit-content;
}

.featured-content h2 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: left;
  background: none;
  -webkit-text-fill-color: #fff;
}

.featured-content p {
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  max-width: 500px;
}

.featured-meta {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.video-count {
  background: rgba(0, 0, 0, 0.5);
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.9rem;
}

.tags-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background: rgba(255, 255, 255, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.tag:hover {
  background: rgba(255, 78, 80, 0.3);
}

.more-tags {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
}

.explore-btn {
  background: linear-gradient(to right, #ff4e50, #fc913a);
  color: #fff;
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: fit-content;
}

.explore-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(255, 78, 80, 0.3);
}

/* All Categories */
.all-categories {
  padding: 5rem 2rem;
  background-color: #050505;
}

.all-categories h2 {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  background: linear-gradient(to right, #ff4e50, #fc913a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
}

.category-card {
  background: #0f0f0f;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  border: 1px solid #222;
}

.category-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(255, 78, 80, 0.2);
  border-color: #ff4e50;
}

.category-image {
  height: 180px;
  position: relative;
  background-size: cover;
  background-position: center;
}

.category-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
}

.category-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 4rem;
  z-index: 2;
  transition: all 0.3s ease;
}

.category-card:hover .category-icon {
  transform: translate(-50%, -50%) scale(1.2);
}

.category-content {
  padding: 1.5rem;
}

.category-content h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.category-content p {
  color: #ccc;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  min-height: 40px;
}

.category-meta {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
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

/* Subscribe Banner */
.subscribe-banner {
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
              url('https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg') no-repeat center center;
  background-size: cover;
  padding: 5rem 2rem;
  text-align: center;
}

.subscribe-content {
  max-width: 700px;
  margin: 0 auto;
}

.subscribe-banner h2 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: linear-gradient(to right, #ff4e50, #fc913a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subscribe-banner p {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.2rem;
  margin-bottom: 2rem;
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

/* Responsive Styles */
@media (max-width: 992px) {
  .featured-content {
    padding: 0 3rem;
  }
  
  .featured-content h2 {
    font-size: 2.5rem;
  }
  
  .categories-grid {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
}

@media (max-width: 768px) {
  .category-header h1 {
    font-size: 2.8rem;
  }
  
  .featured-category {
    height: 350px;
  }
  
  .featured-content h2 {
    font-size: 2rem;
  }
  
  .featured-content p {
    font-size: 1rem;
  }
  
  .categories-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  
  .subscribe-banner h2 {
    font-size: 2.5rem;
  }
  
  .subscribe-banner p {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .category-header {
    padding: 2rem 1.5rem;
  }
  
  .category-header h1 {
    font-size: 2.2rem;
  }
  
  .featured-category {
    height: 300px;
  }
  
  .featured-content {
    padding: 0 1.5rem;
  }
  
  .featured-content h2 {
    font-size: 1.8rem;
  }
  
  .all-categories {
    padding: 3rem 1.5rem;
  }
  
  .categories-grid {
    grid-template-columns: 1fr;
  }
  
  .subscribe-banner {
    padding: 3rem 1.5rem;
  }
  
  .subscribe-banner h2 {
    font-size: 2rem;
  }
}
</style>