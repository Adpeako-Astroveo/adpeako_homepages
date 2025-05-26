<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const videoId = computed(() => route.params.videoId);

// Video data
const video = ref(null);

// Loading state
const isLoading = ref(true);

// Error state
const error = ref(null);

// Related videos
const relatedVideos = ref([]);

// Comments
const comments = ref([]);

// Comment form
const newComment = ref('');

// Like state
const isLiked = ref(false);
const isSaved = ref(false);

// Video player states
const isPlaying = ref(false);
const isMuted = ref(false);
const volume = ref(80);
const currentTime = ref(0);
const duration = ref(100);
const isFullscreen = ref(false);

// Load video data
onMounted(() => {
  loadVideoData(videoId.value);
});

const loadVideoData = (id) => {
  isLoading.value = true;
  error.value = null;
  
  // In a real app, this would be an API call
  setTimeout(() => {
    try {
      // Simulate fetching a video
      video.value = generateVideo(id);
      
      if (!video.value) {
        error.value = "Video not found";
      } else {
        // Generate related videos based on the current video
        relatedVideos.value = generateRelatedVideos(video.value);
        
        // Generate comments
        comments.value = generateComments(video.value);
      }
    } catch (err) {
      error.value = "Failed to load video";
      console.error(err);
    } finally {
      isLoading.value = false;
    }
  }, 800);
};

// Simulate video data fetching
const generateVideo = (id) => {
  // Maps to identify the category and details based on the ID prefix
  const videoPrefix = id.replace(/\d+$/, '');
  
  const categoryMap = {
    'nature': {
      name: 'Nature',
      icon: '🌿',
      creatorOptions: ['NatureLovers', 'EarthCaptures', 'WildlifeWonders'],
    },
    'travel': {
      name: 'Travel',
      icon: '✈️',
      creatorOptions: ['TravelSeeker', 'GlobalExplorer', 'WanderLust'],
    },
    'food': {
      name: 'Food & Cooking',
      icon: '🍳',
      creatorOptions: ['FoodieDelights', 'ChefMaster', 'CookingPro'],
    },
    'fitness': {
      name: 'Fitness',
      icon: '💪',
      creatorOptions: ['FitLife', 'WorkoutPro', 'HealthyRoutine'],
    },
    'music': {
      name: 'Music',
      icon: '🎵',
      creatorOptions: ['MusicMaster', 'MelodyMaker', 'RhythmChannel'],
    },
    'vid': {
      name: 'Featured',
      icon: '🔥',
      creatorOptions: ['VideoCreator', 'ContentMaster', 'ReelsStudio'],
    }
  };
  
  const category = categoryMap[videoPrefix] || categoryMap.vid;
  
  // Generate random video data
  const creator = category.creatorOptions[Math.floor(Math.random() * category.creatorOptions.length)];
  const videoNumber = id.replace(/\D/g, '');
  const title = `${category.name} Experience #${videoNumber} - Premium HastyReels Content`;
  
  const videoUrls = [
    'https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg',
    'https://images.pexels.com/photos/1671324/pexels-photo-1671324.jpeg',
    'https://images.pexels.com/photos/3876434/pexels-photo-3876434.jpeg',
    'https://images.pexels.com/photos/1539225/pexels-photo-1539225.jpeg'
  ];
  
  const thumbnailIndex = parseInt(videoNumber) % videoUrls.length;
  
  return {
    id: id,
    title: title,
    description: `Experience the beauty of ${category.name} in this stunning video. This premium content is available exclusively on HastyReels for subscribers. Join today to access our full library of high-quality videos.`,
    creator: creator,
    creatorAvatar: `https://i.pravatar.cc/150?u=${creator}${videoNumber}`,
    subscribers: `${Math.floor(Math.random() * 10)}M`,
    category: category.name,
    views: `${Math.floor(Math.random() * 10)}M`,
    likes: `${Math.floor(Math.random() * 900) + 100}K`,
    uploadDate: '2 weeks ago',
    duration: `${Math.floor(Math.random() * 10)}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
    thumbnail: videoUrls[thumbnailIndex],
    tags: ['premium', 'hastyreels', category.name.toLowerCase(), 'trending'],
    nextUpVideo: `vid00${Math.floor(Math.random() * 9) + 1}`
  };
};

// Generate related videos
const generateRelatedVideos = (currentVideo) => {
  const results = [];
  
  // Categories to pull from
  const categories = ['nature', 'travel', 'food', 'fitness', 'music', 'vid'];
  
  // Create 8 related videos
  for (let i = 1; i <= 8; i++) {
    const categoryKey = categories[Math.floor(Math.random() * categories.length)];
    const vidNumber = Math.floor(Math.random() * 20) + 1;
    const videoId = `${categoryKey}${vidNumber.toString().padStart(3, '0')}`;
    
    // Don't include the current video
    if (videoId === currentVideo.id) continue;
    
    const thumbnails = [
      'https://images.pexels.com/photos/2406370/pexels-photo-2406370.jpeg',
      'https://images.pexels.com/photos/3494806/pexels-photo-3494806.jpeg',
      'https://images.pexels.com/photos/1671324/pexels-photo-1671324.jpeg',
      'https://images.pexels.com/photos/210764/pexels-photo-210764.jpeg',
      'https://images.pexels.com/photos/4666751/pexels-photo-4666751.jpeg'
    ];
    
    results.push({
      id: videoId,
      title: `Related ${categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1)} Video #${vidNumber}`,
      creator: `${categoryKey}Creator${vidNumber}`,
      views: `${Math.floor(Math.random() * 10)}M`,
      duration: `${Math.floor(Math.random() * 10)}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
      thumbnail: thumbnails[i % thumbnails.length],
      uploadDate: '3 weeks ago'
    });
  }
  
  return results;
};

// Generate comments
const generateComments = (video) => {
  const commenters = [
    { name: 'Alex Johnson', avatar: 'https://i.pravatar.cc/150?u=alex' },
    { name: 'Sarah Wilson', avatar: 'https://i.pravatar.cc/150?u=sarah' },
    { name: 'Mike Brown', avatar: 'https://i.pravatar.cc/150?u=mike' },
    { name: 'Emily Davis', avatar: 'https://i.pravatar.cc/150?u=emily' },
    { name: 'David Lee', avatar: 'https://i.pravatar.cc/150?u=david' }
  ];
  
  const commentTexts = [
    `Amazing ${video.category} content! Keep it up!`,
    'This is exactly what I\'ve been looking for. Thanks for sharing!',
    'The quality of these videos is just exceptional.',
    'I\'ve watched this at least ten times already. Can\'t get enough!',
    `As a ${video.category} enthusiast, I can say this is top-tier content.`,
    'Just subscribed because of this video. Looking forward to more!',
    'The editing on this is so professional. What software do you use?',
    'Your videos always make my day better. Thank you!'
  ];
  
  const results = [];
  
  // Generate 5 random comments
  for (let i = 0; i < 5; i++) {
    const commenter = commenters[Math.floor(Math.random() * commenters.length)];
    const commentText = commentTexts[Math.floor(Math.random() * commentTexts.length)];
    const likes = Math.floor(Math.random() * 500) + 1;
    const timeAgo = `${Math.floor(Math.random() * 10) + 1} days ago`;
    
    results.push({
      id: `comment${i}`,
      user: commenter.name,
      userAvatar: commenter.avatar,
      text: commentText,
      likes: likes,
      timeAgo: timeAgo,
      replies: Math.floor(Math.random() * 5)
    });
  }
  
  return results;
};

// Video player controls - in a real app these would control the actual video
const togglePlay = () => {
  isPlaying.value = !isPlaying.value;
};

const toggleMute = () => {
  isMuted.value = !isMuted.value;
  if (isMuted.value) {
    volume.value = 0;
  } else {
    volume.value = 80;
  }
};

const toggleFullscreen = () => {
  isFullscreen.value = !isFullscreen.value;
};

const updateProgress = (value) => {
  currentTime.value = value;
};

const updateVolume = (value) => {
  volume.value = value;
  isMuted.value = value === 0;
};

const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

const toggleLike = () => {
  isLiked.value = !isLiked.value;
};

const toggleSave = () => {
  isSaved.value = !isSaved.value;
};

const submitComment = () => {
  if (!newComment.value.trim()) return;
  
  // In a real app, this would send the comment to an API
  // Here we'll just add it to the local comments array
  comments.value.unshift({
    id: `comment${Date.now()}`,
    user: 'Current User',
    userAvatar: 'https://i.pravatar.cc/150?u=currentuser',
    text: newComment.value,
    likes: 0,
    timeAgo: 'Just now',
    replies: 0
  });
  
  newComment.value = '';
};

const navigateToWatch = (videoId) => {
  router.push(`/hastyreels/watch/${videoId}`);
  // In a real app, we'd need to scroll to top and reload data
  loadVideoData(videoId);
  window.scrollTo(0, 0);
};
</script>

<template>
  <div class="watch-page">
    <!-- Loading State -->
    <div v-if="isLoading" class="loading-container">
      <div class="loading-spinner"></div>
      <p>Loading video...</p>
    </div>
    
    <!-- Error State -->
    <div v-else-if="error" class="error-container">
      <div class="error-icon">⚠️</div>
      <h2>{{ error }}</h2>
      <p>Sorry, we couldn't load the video you requested.</p>
      <button @click="router.push('/hastyreels')" class="back-btn">Go Back Home</button>
    </div>
    
    <!-- Video Content -->
    <div v-else class="video-content">
      <div class="video-container" :class="{ 'fullscreen': isFullscreen }">
        <!-- Video Player -->
        <div class="video-player">
          <!-- This would be an actual video player in a real app -->
          <img :src="video.thumbnail" :alt="video.title" class="video-placeholder">
          
          <!-- Video Controls Overlay -->
          <div class="video-controls-overlay">
            <div class="top-controls">
              <div v-if="isFullscreen" class="video-title-overlay">{{ video.title }}</div>
              <button @click="toggleFullscreen" class="fullscreen-btn">
                <span v-if="isFullscreen">Exit Fullscreen</span>
                <span v-else>Fullscreen</span>
              </button>
            </div>
            
            <div class="center-controls">
              <button @click="togglePlay" class="play-pause-btn">
                <span v-if="isPlaying">⏸️</span>
                <span v-else>▶️</span>
              </button>
            </div>
            
            <div class="bottom-controls">
              <div class="progress-container">
                <input 
                  type="range" 
                  min="0" 
                  :max="duration" 
                  v-model="currentTime" 
                  @input="updateProgress($event.target.value)"
                  class="progress-slider"
                >
                <div class="time-display">
                  {{ formatTime(currentTime) }} / {{ formatTime(duration) }}
                </div>
              </div>
              
              <div class="additional-controls">
                <div class="volume-control">
                  <button @click="toggleMute" class="mute-btn">
                    <span v-if="isMuted">🔇</span>
                    <span v-else>🔊</span>
                  </button>
                  <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    v-model="volume" 
                    @input="updateVolume($event.target.value)"
                    class="volume-slider"
                  >
                </div>
                
                <div class="quality-control">
                  <select class="quality-selector">
                    <option value="auto">Auto</option>
                    <option value="1080p">1080p</option>
                    <option value="720p">720p</option>
                    <option value="480p">480p</option>
                    <option value="360p">360p</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="content-grid" :class="{ 'hidden': isFullscreen }">
        <div class="main-content">
          <!-- Video Information -->
          <div class="video-info">
            <h1 class="video-title">{{ video.title }}</h1>
            
            <div class="video-meta-stats">
              <div class="views-date">
                <span class="views">{{ video.views }} views</span>
                <span class="upload-date">{{ video.uploadDate }}</span>
              </div>
              
              <div class="video-actions">
                <button @click="toggleLike" :class="{ 'active': isLiked }" class="action-btn like-btn">
                  <span class="action-icon">👍</span>
                  <span class="action-label">{{ video.likes }}</span>
                </button>
                
                <button class="action-btn share-btn">
                  <span class="action-icon">🔗</span>
                  <span class="action-label">Share</span>
                </button>
                
                <button @click="toggleSave" :class="{ 'active': isSaved }" class="action-btn save-btn">
                  <span class="action-icon">{{ isSaved ? '📌' : '📍' }}</span>
                  <span class="action-label">Save</span>
                </button>
              </div>
            </div>
          </div>
          
          <!-- Creator Info -->
          <div class="creator-info">
            <div class="creator-details">
              <div class="creator-avatar">
                <img :src="video.creatorAvatar" :alt="video.creator">
              </div>
              <div class="creator-text">
                <h3 class="creator-name">{{ video.creator }}</h3>
                <span class="creator-subscribers">{{ video.subscribers }} subscribers</span>
              </div>
            </div>
            <button class="subscribe-btn">Subscribe</button>
          </div>
          
          <!-- Video Description -->
          <div class="video-description">
            <p>{{ video.description }}</p>
            <div class="video-tags">
              <span v-for="tag in video.tags" :key="tag" class="video-tag">#{{ tag }}</span>
            </div>
          </div>
          
          <!-- Comments Section -->
          <div class="comments-section">
            <h3 class="comments-title">{{ comments.length }} Comments</h3>
            
            <!-- Comment Form -->
            <div class="comment-form">
              <div class="user-avatar">
                <img src="https://i.pravatar.cc/150?u=currentuser" alt="Your Avatar">
              </div>
              <div class="comment-input-container">
                <input 
                  type="text" 
                  v-model="newComment" 
                  placeholder="Add a comment..." 
                  class="comment-input"
                >
                <button 
                  @click="submitComment" 
                  :disabled="!newComment.trim()" 
                  class="submit-comment-btn"
                >
                  Post
                </button>
              </div>
            </div>
            
            <!-- Comments List -->
            <div class="comments-list">
              <div v-for="comment in comments" :key="comment.id" class="comment">
                <div class="comment-avatar">
                  <img :src="comment.userAvatar" :alt="comment.user">
                </div>
                <div class="comment-content">
                  <div class="comment-header">
                    <span class="comment-user">{{ comment.user }}</span>
                    <span class="comment-time">{{ comment.timeAgo }}</span>
                  </div>
                  <p class="comment-text">{{ comment.text }}</p>
                  <div class="comment-actions">
                    <button class="comment-like">
                      <span>👍</span> {{ comment.likes }}
                    </button>
                    <button class="comment-reply">Reply</button>
                    <span v-if="comment.replies > 0" class="view-replies">
                      View {{ comment.replies }} {{ comment.replies === 1 ? 'reply' : 'replies' }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Related Videos Sidebar -->
        <div class="related-sidebar">
          <div class="related-header">
            <h3>Related Videos</h3>
          </div>
          
          <div class="related-videos-list">
            <div 
              v-for="relatedVideo in relatedVideos" 
              :key="relatedVideo.id" 
              class="related-video-item"
              @click="navigateToWatch(relatedVideo.id)"
            >
              <div class="related-thumbnail">
                <img :src="relatedVideo.thumbnail" :alt="relatedVideo.title">
                <span class="related-duration">{{ relatedVideo.duration }}</span>
              </div>
              <div class="related-info">
                <h4 class="related-title">{{ relatedVideo.title }}</h4>
                <p class="related-creator">{{ relatedVideo.creator }}</p>
                <div class="related-meta">
                  <span>{{ relatedVideo.views }} views</span>
                  <span>{{ relatedVideo.uploadDate }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.watch-page {
  background-color: #000;
  color: #fff;
  min-height: 100vh;
  font-family: 'Montserrat', 'Inter', sans-serif;
  padding-top: 64px;
}

/* Loading and Error States */
.loading-container, .error-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  padding: 2rem;
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

.error-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
  color: #ff4e50;
}

.error-container h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.error-container p {
  color: #ccc;
  margin-bottom: 2rem;
}

.back-btn {
  background: linear-gradient(to right, #ff4e50, #fc913a);
  color: #fff;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.back-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(255, 78, 80, 0.3);
}

/* Video Container */
.video-container {
  background: #000;
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 aspect ratio */
}

.video-container.fullscreen {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  padding-top: 0;
  width: 100vw;
  height: 100vh;
}

.hidden {
  display: none;
}

.video-player {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
}

.video-placeholder {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Video Controls */
.video-controls-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.5) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem;
  box-sizing: border-box;
}

.video-player:hover .video-controls-overlay {
  opacity: 1;
}

.top-controls {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.video-title-overlay {
  margin-right: auto;
  font-size: 1.2rem;
  font-weight: 600;
  max-width: 70%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.fullscreen-btn {
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
}

.center-controls {
  display: flex;
  justify-content: center;
  align-items: center;
}

.play-pause-btn {
  background: rgba(0, 0, 0, 0.5);
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 2rem;
}

.bottom-controls {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.progress-container {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.progress-slider {
  flex: 1;
  height: 5px;
  appearance: none;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 5px;
  outline: none;
  transition: all 0.3s ease;
}

.progress-slider::-webkit-slider-thumb {
  appearance: none;
  width: 15px;
  height: 15px;
  background: #ff4e50;
  border-radius: 50%;
  cursor: pointer;
}

.time-display {
  font-size: 0.9rem;
  min-width: 100px;
  text-align: right;
}

.additional-controls {
  display: flex;
  justify-content: space-between;
}

.volume-control {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.mute-btn {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 1.2rem;
}

.volume-slider {
  width: 80px;
  height: 5px;
  appearance: none;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 5px;
  outline: none;
}

.volume-slider::-webkit-slider-thumb {
  appearance: none;
  width: 12px;
  height: 12px;
  background: #ff4e50;
  border-radius: 50%;
  cursor: pointer;
}

.quality-selector {
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  padding: 0.3rem 0.5rem;
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer;
}

/* Content Grid Layout */
.content-grid {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 2rem;
  max-width: 1600px;
  margin: 0 auto;
  padding: 2rem;
}

/* Main Content */
.main-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.video-title {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.video-meta-stats {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
  border-bottom: 1px solid #333;
}

.views-date {
  font-size: 0.95rem;
  color: #ccc;
}

.views {
  margin-right: 1rem;
}

.video-actions {
  display: flex;
  gap: 1rem;
}

.action-btn {
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 50px;
  padding: 0.5rem 1rem;
  color: white;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.action-btn:hover, .action-btn.active {
  background: rgba(255, 78, 80, 0.3);
}

.action-btn.active .action-icon {
  color: #ff4e50;
}

/* Creator Info */
.creator-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid #333;
}

.creator-details {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.creator-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
}

.creator-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.creator-name {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.2rem;
}

.creator-subscribers {
  font-size: 0.9rem;
  color: #ccc;
}

.subscribe-btn {
  background: linear-gradient(to right, #ff4e50, #fc913a);
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.subscribe-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(255, 78, 80, 0.3);
}

/* Video Description */
.video-description {
  padding: 1rem 0;
  border-bottom: 1px solid #333;
}

.video-description p {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.9);
}

.video-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.video-tag {
  background: rgba(255, 255, 255, 0.1);
  padding: 0.4rem 0.8rem;
  border-radius: 50px;
  font-size: 0.9rem;
  color: #ff4e50;
  cursor: pointer;
  transition: all 0.3s ease;
}

.video-tag:hover {
  background: rgba(255, 78, 80, 0.2);
}

/* Comments Section */
.comments-section {
  padding: 1rem 0;
}

.comments-title {
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.comment-form {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}

.user-avatar, .comment-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
}

.user-avatar img, .comment-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.comment-input-container {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.comment-input {
  background: rgba(255, 255, 255, 0.08);
  border: none;
  border-bottom: 2px solid #333;
  color: white;
  padding: 0.8rem;
  margin-bottom: 0.5rem;
  transition: all 0.3s ease;
}

.comment-input:focus {
  outline: none;
  border-bottom-color: #ff4e50;
}

.submit-comment-btn {
  align-self: flex-end;
  background: #ff4e50;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-comment-btn:disabled {
  background: #444;
  cursor: not-allowed;
}

.submit-comment-btn:not(:disabled):hover {
  background: #fc913a;
}

.comments-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.comment {
  display: flex;
  gap: 1rem;
}

.comment-content {
  flex: 1;
}

.comment-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.comment-user {
  font-weight: 600;
}

.comment-time {
  font-size: 0.85rem;
  color: #999;
}

.comment-text {
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 0.5rem;
  color: rgba(255, 255, 255, 0.9);
}

.comment-actions {
  display: flex;
  gap: 1rem;
  font-size: 0.85rem;
}

.comment-like, .comment-reply {
  background: none;
  border: none;
  color: #ccc;
  cursor: pointer;
  padding: 0.2rem 0;
}

.comment-like:hover, .comment-reply:hover {
  color: #ff4e50;
}

.view-replies {
  color: #999;
  cursor: pointer;
}

.view-replies:hover {
  color: #ff4e50;
  text-decoration: underline;
}

/* Related Videos Sidebar */
.related-sidebar {
  padding-top: 0.5rem;
}

.related-header {
  margin-bottom: 1.5rem;
}

.related-header h3 {
  font-size: 1.3rem;
  font-weight: 600;
}

.related-videos-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.related-video-item {
  display: flex;
  gap: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0.5rem;
  border-radius: 8px;
}

.related-video-item:hover {
  background: rgba(255, 255, 255, 0.05);
}

.related-thumbnail {
  position: relative;
  width: 168px;
  height: 94px;
  flex-shrink: 0;
  border-radius: 8px;
  overflow: hidden;
}

.related-thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.related-duration {
  position: absolute;
  bottom: 5px;
  right: 5px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 0.1rem 0.3rem;
  border-radius: 4px;
  font-size: 0.7rem;
}

.related-info {
  flex: 1;
  min-width: 0; /* Needed for text-overflow to work */
}

.related-title {
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.3rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 1.4;
}

.related-creator {
  font-size: 0.85rem;
  color: #999;
  margin-bottom: 0.3rem;
}

.related-meta {
  font-size: 0.8rem;
  color: #777;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

/* Responsive Styles */
@media (max-width: 1200px) {
  .content-grid {
    grid-template-columns: 2fr 1fr;
  }
}

@media (max-width: 992px) {
  .content-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .related-videos-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1rem;
  }
  
  .related-video-item {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .related-thumbnail {
    width: 100%;
    height: 0;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
  }
}

@media (max-width: 768px) {
  .video-meta-stats {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  
  .creator-info {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  
  .related-videos-list {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  
  .video-actions {
    width: 100%;
    justify-content: space-between;
  }
}

@media (max-width: 480px) {
  .content-grid {
    padding: 1.5rem 1rem;
  }
  
  .video-title {
    font-size: 1.5rem;
  }
  
  .action-btn {
    padding: 0.4rem 0.8rem;
    font-size: 0.85rem;
  }
  
  .comments-title {
    font-size: 1.2rem;
  }
  
  .related-videos-list {
    grid-template-columns: 1fr;
  }
  
  .related-video-item {
    flex-direction: row;
  }
  
  .related-thumbnail {
    width: 120px;
    height: 67px;
    padding-bottom: 0;
  }
  
  .video-tags {
    display: none;
  }
}
</style>