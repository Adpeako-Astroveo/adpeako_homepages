<template>
  <div class="live-tv-page">
    <h1>Live TV Channels</h1>
    
    <div class="channels-grid">
      <div v-for="channel in channels" :key="channel.id" class="channel-card">
        <div class="channel-logo">
          <img :src="channel.logo" :alt="channel.name" />
          <span class="live-indicator" v-if="channel.isLive">LIVE</span>
        </div>
        <div class="channel-content">
          <h2>{{ channel.name }}</h2>
          <p class="channel-type">{{ channel.type }}</p>
          <p class="now-playing">Now Playing: {{ channel.currentShow }}</p>
          <button class="watch-live-button" @click="handleWatchLive(channel.id)">
            Watch Live
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const channels = ref([
  {
    id: 1,
    name: "SRF 1",
    type: "News & Entertainment",
    currentShow: "Swiss News Today",
    isLive: true,
    logo: "https://images.pexels.com/photos/3945638/pexels-photo-3945638.jpeg"
  },
  {
    id: 2,
    name: "RTS Un",
    type: "Sports & Entertainment",
    currentShow: "Live Football",
    isLive: true,
    logo: "https://images.pexels.com/photos/3945638/pexels-photo-3945638.jpeg"
  },
  {
    id: 3,
    name: "RSI La 1",
    type: "Entertainment & Culture",
    currentShow: "Cultural Documentary",
    isLive: true,
    logo: "https://images.pexels.com/photos/3945638/pexels-photo-3945638.jpeg"
  }
]);

const handleWatchLive = (channelId) => {
  window.location.href = 'https://wave-view.com/login';
};
</script>

<style scoped>
.live-tv-page {
  min-height: 100vh;
  background: #f8fafc;
  padding: 8rem 2rem 4rem;
}

h1 {
  text-align: center;
  color: #3B82F6;
  font-size: 2.5rem;
  margin-bottom: 3rem;
}

.channels-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.channel-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.channel-card:hover {
  transform: translateY(-5px);
}

.channel-logo {
  position: relative;
  height: 200px;
  background: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
}

.channel-logo img {
  max-width: 80%;
  max-height: 80%;
  object-fit: contain;
}

.live-indicator {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #ef4444;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
}

.channel-content {
  padding: 1.5rem;
}

.channel-content h2 {
  color: #3B82F6;
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
}

.channel-type {
  color: #6b7280;
  font-size: 0.875rem;
  margin-bottom: 1rem;
}

.now-playing {
  color: #4a5568;
  margin-bottom: 1.5rem;
  font-weight: 500;
}

.watch-live-button {
  width: 100%;
  background: #3B82F6;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  border: none;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.watch-live-button:hover {
  background: #2563eb;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .live-tv-page {
    padding: 7rem 1rem 2rem;
  }

  h1 {
    font-size: 2rem;
  }
}
</style>