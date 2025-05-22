<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Live events currently streaming
const liveEvents = ref([
  {
    title: 'Premier League',
    match: 'Liverpool vs Chelsea',
    time: 'LIVE NOW',
    score: '2 - 1',
    image: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg',
    progress: '68\''
  },
  {
    title: 'NBA Playoffs',
    match: 'Celtics vs Warriors',
    time: 'LIVE NOW',
    score: '89 - 92',
    image: 'https://images.pexels.com/photos/358042/pexels-photo-358042.jpeg',
    progress: 'Q3 7:22'
  },
  {
    title: 'Grand Prix',
    match: 'Monaco Circuit',
    time: 'LIVE NOW',
    score: 'Lap 42/78',
    image: 'https://images.pexels.com/photos/12795/pexels-photo-12795.jpeg',
    progress: 'VER leads HAM by 3.2s'
  }
]);

// Upcoming events
const upcomingEvents = ref([
  {
    title: 'UEFA Champions League',
    match: 'Real Madrid vs Man City',
    date: 'Tomorrow',
    time: '20:00 GMT',
    image: 'https://images.pexels.com/photos/47343/the-ball-stadion-football-the-pitch-47343.jpeg'
  },
  {
    title: 'Tennis Grand Slam',
    match: 'Quarterfinals',
    date: 'Thursday',
    time: '14:00 GMT',
    image: 'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg'
  },
  {
    title: 'Boxing Championship',
    match: 'Johnson vs Rodriguez',
    date: 'Saturday',
    time: '22:00 GMT',
    image: 'https://images.pexels.com/photos/4761676/pexels-photo-4761676.jpeg'
  },
  {
    title: 'Golf Masters',
    match: 'Final Round',
    date: 'Sunday',
    time: '16:30 GMT',
    image: 'https://images.pexels.com/photos/914682/pexels-photo-914682.jpeg'
  }
]);

// Sports categories
const sportsCategories = ref([
  {
    name: 'Football',
    competitions: 12,
    image: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg'
  },
  {
    name: 'Basketball',
    competitions: 8,
    image: 'https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg'
  },
  {
    name: 'Tennis',
    competitions: 10,
    image: 'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg'
  },
  {
    name: 'Formula 1',
    competitions: 1,
    image: 'https://images.pexels.com/photos/2397414/pexels-photo-2397414.jpeg'
  },
  {
    name: 'Boxing',
    competitions: 6,
    image: 'https://images.pexels.com/photos/4761676/pexels-photo-4761676.jpeg'
  },
  {
    name: 'Golf',
    competitions: 5,
    image: 'https://images.pexels.com/photos/914682/pexels-photo-914682.jpeg'
  }
]);

// Highlights
const highlightsVideos = ref([
  {
    title: 'Top 10 Goals of the Week',
    duration: '5:42',
    views: '2.7M',
    image: 'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg'
  },
  {
    title: 'NBA Playoffs: Best Dunks',
    duration: '6:18',
    views: '1.9M',
    image: 'https://images.pexels.com/photos/2291009/pexels-photo-2291009.jpeg'
  },
  {
    title: 'Formula 1: Race Highlights',
    duration: '8:05',
    views: '3.2M',
    image: 'https://images.pexels.com/photos/144429/pexels-photo-144429.jpeg'
  }
]);

// Premium features
const features = ref([
  {
    title: 'Live HD Streaming',
    description: 'Watch every sporting event in high-definition with minimal delay',
    icon: '📺'
  },
  {
    title: 'Multi-view',
    description: 'Watch multiple games simultaneously with our split-screen feature',
    icon: '🔄'
  },
  {
    title: 'In-depth Stats',
    description: 'Access real-time statistics and in-depth analysis during matches',
    icon: '📊'
  },
  {
    title: 'Expert Commentary',
    description: 'Enjoy insights from expert commentators and sports analysts',
    icon: '🎙️'
  }
]);

const handleSubscribe = () => {
  router.push('/jewel-video-content/payment');
};

const handleWatchLive = (eventTitle) => {
  router.push('/login');
};

const handleSetReminder = (eventTitle) => {
  alert(`Reminder set for ${eventTitle}`);
};
</script>

<template>
  <div class="sports-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <span class="badge">PREMIUM SPORTS</span>
        <h1>Live Sports Streaming</h1>
        <p>Never miss a match. Watch live events from around the world.</p>
        <div class="hero-actions">
          <button @click="handleSubscribe" class="primary-button">Start Free Trial</button>
          <button @click="handleWatchLive('featured')" class="secondary-button">
            <span class="play-icon">▶</span> Watch Live Now
          </button>
        </div>
      </div>
      <div class="hero-backdrop"></div>
    </section>

    <!-- Live Now Section -->
    <section class="live-section">
      <div class="container">
        <div class="section-header">
          <h2>Live Now</h2>
          <span class="pulse-dot"></span>
        </div>
        <div class="live-grid">
          <div v-for="event in liveEvents" :key="event.title" class="live-card">
            <div class="live-image">
              <img :src="event.image" :alt="event.match">
              <div class="live-overlay">
                <button @click="handleWatchLive(event.title)" class="watch-button">
                  <span class="play-icon">▶</span> Watch Live
                </button>
              </div>
              <div class="live-badge">LIVE</div>
            </div>
            <div class="live-info">
              <div class="event-details">
                <h3>{{ event.title }}</h3>
                <p class="match">{{ event.match }}</p>
              </div>
              <div class="match-status">
                <div class="score">{{ event.score }}</div>
                <div class="progress">{{ event.progress }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Upcoming Events Section -->
    <section class="upcoming-section">
      <div class="container">
        <h2>Upcoming Events</h2>
        <div class="upcoming-grid">
          <div v-for="event in upcomingEvents" :key="event.title" class="upcoming-card">
            <div class="upcoming-image">
              <img :src="event.image" :alt="event.match">
              <div class="upcoming-overlay">
                <button @click="handleSetReminder(event.title)" class="reminder-button">
                  Set Reminder
                </button>
              </div>
            </div>
            <div class="upcoming-info">
              <h3>{{ event.title }}</h3>
              <p class="match">{{ event.match }}</p>
              <div class="event-time">
                <span class="date">{{ event.date }}</span>
                <span class="time">{{ event.time }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Sports Categories Section -->
    <section class="categories-section">
      <div class="container">
        <h2>Browse Sports</h2>
        <div class="categories-grid">
          <div v-for="category in sportsCategories" :key="category.name" class="category-card">
            <div class="category-image">
              <img :src="category.image" :alt="category.name">
              <div class="category-overlay"></div>
            </div>
            <div class="category-info">
              <h3>{{ category.name }}</h3>
              <p>{{ category.competitions }} competitions</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Highlights Section -->
    <section class="highlights-section">
      <div class="container">
        <h2>Highlights & Replays</h2>
        <div class="highlights-grid">
          <div v-for="video in highlightsVideos" :key="video.title" class="highlight-card">
            <div class="video-image">
              <img :src="video.image" :alt="video.title">
              <div class="video-overlay">
                <button @click="handleWatchLive(video.title)" class="play-button">
                  <span>▶</span>
                </button>
              </div>
              <div class="video-duration">{{ video.duration }}</div>
            </div>
            <div class="video-info">
              <h3>{{ video.title }}</h3>
              <p class="views">{{ video.views }} views</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <div class="container">
        <h2>Premium Features</h2>
        <div class="features-grid">
          <div v-for="feature in features" :key="feature.title" class="feature-card">
            <div class="feature-icon">{{ feature.icon }}</div>
            <div class="feature-content">
              <h3>{{ feature.title }}</h3>
              <p>{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <h2>Don't Miss the Action</h2>
        <p>Get unlimited access to live sports with phone billing.</p>
        <button @click="handleSubscribe" class="primary-button">Get Premium</button>
        <p class="cta-note">No credit card needed. Cancel anytime.</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.sports-page {
  min-height: 100vh;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  color: #1a1a1a;
  background-color: #0f172a;
  padding-top: 64px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* Hero Section */
.hero-section {
  position: relative;
  height: 600px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
}

.hero-backdrop {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg');
  background-size: cover;
  background-position: center;
  filter: brightness(0.4);
  z-index: -1;
}

.hero-content {
  max-width: 800px;
  padding: 2rem;
  position: relative;
  z-index: 1;
}

.badge {
  display: inline-block;
  background: #9333ea;
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  letter-spacing: 1px;
}

.hero-section h1 {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  background: linear-gradient(to right, #9333ea, #c026d3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 2px 10px rgba(0,0,0,0.2);
}

.hero-section p {
  font-size: 1.5rem;
  margin-bottom: 2.5rem;
  color: rgba(255, 255, 255, 0.9);
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.primary-button {
  background: linear-gradient(to right, #9333ea, #c026d3);
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(147, 51, 234, 0.3);
}

.primary-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 25px rgba(147, 51, 234, 0.4);
}

.secondary-button {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  color: white;
  font-size: 1.1rem;
  padding: 1rem 2rem;
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.secondary-button:hover {
  background: rgba(255, 255, 255, 0.25);
}

.play-icon {
  font-size: 0.9rem;
}

/* Section Headers */
.section-header {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
  gap: 1rem;
}

.pulse-dot {
  width: 12px;
  height: 12px;
  background-color: #ef4444;
  border-radius: 50%;
  display: inline-block;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7);
  }
  
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(239, 68, 68, 0);
  }
  
  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(239, 68, 68, 0);
  }
}

.live-section h2, 
.upcoming-section h2, 
.categories-section h2,
.highlights-section h2,
.features-section h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0;
  text-align: center;
  color: #f8fafc;
  position: relative;
}

.upcoming-section h2::after,
.categories-section h2::after,
.highlights-section h2::after,
.features-section h2::after {
  content: "";
  position: absolute;
  bottom: -0.75rem;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 4px;
  background: linear-gradient(to right, #9333ea, #c026d3);
  border-radius: 2px;
}

/* Live Now Section */
.live-section {
  padding: 5rem 0;
}

.live-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
}

.live-card {
  background: #1e293b;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.live-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
}

.live-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.live-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.live-card:hover .live-image img {
  transform: scale(1.1);
}

.live-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.3s ease;
}

.live-card:hover .live-overlay {
  opacity: 1;
}

.live-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #ef4444;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  box-shadow: 0 2px 10px rgba(239, 68, 68, 0.3);
}

.watch-button {
  background: linear-gradient(to right, #9333ea, #c026d3);
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.watch-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(147, 51, 234, 0.3);
}

.live-info {
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.event-details h3 {
  font-size: 1.3rem;
  font-weight: 600;
  color: white;
  margin-bottom: 0.5rem;
}

.match {
  color: #cbd5e1;
  font-size: 0.95rem;
}

.match-status {
  text-align: right;
}

.score {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.5rem;
}

.progress {
  color: #ef4444;
  font-size: 0.9rem;
  font-weight: 500;
}

/* Upcoming Events Section */
.upcoming-section {
  padding: 5rem 0;
  background: #0f172a;
}

.upcoming-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.upcoming-card {
  background: #1e293b;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.upcoming-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
}

.upcoming-image {
  position: relative;
  height: 180px;
  overflow: hidden;
}

.upcoming-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.upcoming-card:hover .upcoming-image img {
  transform: scale(1.1);
}

.upcoming-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.3s ease;
}

.upcoming-card:hover .upcoming-overlay {
  opacity: 1;
}

.reminder-button {
  background: #9333ea;
  color: white;
  border: none;
  padding: 0.7rem 1.2rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.reminder-button:hover {
  background: #a855f7;
  transform: scale(1.05);
}

.upcoming-info {
  padding: 1.5rem;
}

.upcoming-info h3 {
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
  margin-bottom: 0.5rem;
}

.event-time {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
}

.date, .time {
  color: #cbd5e1;
  font-size: 0.9rem;
}

/* Categories Section */
.categories-section {
  padding: 5rem 0;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.category-card {
  position: relative;
  border-radius: 1.5rem;
  overflow: hidden;
  height: 180px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

.category-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
}

.category-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.category-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.category-card:hover .category-image img {
  transform: scale(1.1);
}

.category-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 100%);
}

.category-info {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem;
  box-sizing: border-box;
}

.category-info h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
  margin-bottom: 0.5rem;
}

.category-info p {
  color: #cbd5e1;
  font-size: 0.9rem;
}

/* Highlights Section */
.highlights-section {
  padding: 5rem 0;
  background: #0f172a;
}

.highlights-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.highlight-card {
  background: #1e293b;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.highlight-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
}

.video-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.video-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.highlight-card:hover .video-image img {
  transform: scale(1.1);
}

.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.3s ease;
}

.highlight-card:hover .video-overlay {
  opacity: 1;
}

.video-duration {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
}

.video-info {
  padding: 1.5rem;
}

.video-info h3 {
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
  margin-bottom: 0.5rem;
}

.views {
  color: #cbd5e1;
  font-size: 0.9rem;
}

/* Features Section */
.features-section {
  padding: 5rem 0;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2.5rem;
  margin-top: 3rem;
}

.feature-card {
  background: #1e293b;
  border-radius: 1.5rem;
  padding: 2rem;
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
}

.feature-icon {
  font-size: 2.5rem;
  flex-shrink: 0;
}

.feature-content h3 {
  font-size: 1.3rem;
  font-weight: 600;
  color: white;
  margin-bottom: 0.75rem;
}

.feature-content p {
  color: #cbd5e1;
  font-size: 0.95rem;
  line-height: 1.6;
}

/* CTA Section */
.cta-section {
  padding: 6rem 0;
  background: linear-gradient(135deg, #9333ea, #c026d3);
  color: white;
  text-align: center;
}

.cta-section h2 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.cta-section p {
  font-size: 1.3rem;
  margin-bottom: 2.5rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  color: rgba(255, 255, 255, 0.9);
}

.cta-note {
  font-size: 1rem;
  opacity: 0.8;
  margin-top: 1.5rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-section {
    height: 500px;
  }
  
  .hero-section h1 {
    font-size: 2.5rem;
  }
  
  .hero-section p {
    font-size: 1.2rem;
  }
  
  .live-section h2, 
  .upcoming-section h2, 
  .categories-section h2,
  .highlights-section h2,
  .features-section h2 {
    font-size: 2rem;
  }
  
  .hero-actions {
    flex-direction: column;
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }
  
  .live-info {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .match-status {
    text-align: left;
    margin-top: 1rem;
  }
  
  .feature-card {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 1.5rem;
  }
  
  .cta-section h2 {
    font-size: 2.2rem;
  }
  
  .cta-section p {
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .hero-section h1 {
    font-size: 2rem;
  }
  
  .primary-button,
  .secondary-button,
  .watch-button {
    font-size: 1rem;
    padding: 0.875rem 1.75rem;
  }
  
  .live-card,
  .highlight-card {
    min-width: 100%;
  }
  
  .score {
    font-size: 1.3rem;
  }
  
  .progress {
    font-size: 0.8rem;
  }
  
  .feature-icon {
    font-size: 2rem;
  }
  
  .feature-content h3 {
    font-size: 1.2rem;
  }
}
</style>