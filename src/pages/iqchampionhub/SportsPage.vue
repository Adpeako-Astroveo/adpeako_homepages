<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Live events currently streaming
const liveEvents = ref([
  {
    title: 'Premier League',
    match: 'Arsenal vs. Manchester United',
    time: 'LIVE NOW',
    score: '2 - 1',
    image: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg',
    progress: '75\''
  },
  {
    title: 'NBA Playoffs',
    match: 'Lakers vs. Celtics',
    time: 'LIVE NOW',
    score: '89 - 92',
    image: 'https://images.pexels.com/photos/358042/pexels-photo-358042.jpeg',
    progress: 'Q3 5:22'
  },
  {
    title: 'Tennis Grand Slam',
    match: 'Djokovic vs. Nadal',
    time: 'LIVE NOW',
    score: '6-4, 3-6, 2-1',
    image: 'https://images.pexels.com/photos/8224/pexels-photo.jpg',
    progress: 'Set 3'
  }
]);

// Upcoming events
const upcomingEvents = ref([
  {
    title: 'UEFA Champions League',
    match: 'Bayern Munich vs. PSG',
    date: 'Tomorrow',
    time: '20:45 GMT',
    image: 'https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg'
  },
  {
    title: 'Formula 1',
    match: 'Monaco Grand Prix',
    date: 'Sunday',
    time: '14:00 GMT',
    image: 'https://images.pexels.com/photos/12795/pexels-photo-12795.jpeg'
  },
  {
    title: 'Boxing Championship',
    match: 'Johnson vs. Martinez',
    date: 'Next Saturday',
    time: '22:00 GMT',
    image: 'https://images.pexels.com/photos/4754146/pexels-photo-4754146.jpeg'
  },
  {
    title: 'Cricket World Cup',
    match: 'India vs. Australia',
    date: 'Next Sunday',
    time: '10:30 GMT',
    image: 'https://images.pexels.com/photos/3628912/pexels-photo-3628912.jpeg'
  }
]);

// Sports categories
const sportsCategories = ref([
  {
    name: 'Football',
    leagues: 15,
    image: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg'
  },
  {
    name: 'Basketball',
    leagues: 8,
    image: 'https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg'
  },
  {
    name: 'Tennis',
    leagues: 10,
    image: 'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg'
  },
  {
    name: 'Formula 1',
    leagues: 1,
    image: 'https://images.pexels.com/photos/2397414/pexels-photo-2397414.jpeg'
  },
  {
    name: 'Boxing',
    leagues: 6,
    image: 'https://images.pexels.com/photos/4761352/pexels-photo-4761352.jpeg'
  },
  {
    name: 'Cricket',
    leagues: 7,
    image: 'https://images.pexels.com/photos/1599351/pexels-photo-1599351.jpeg'
  }
]);

// Service features
const features = ref([
  {
    title: 'Live HD Streaming',
    description: 'Watch every moment in stunning high-definition quality',
    icon: '📺'
  },
  {
    title: 'Multi-camera Views',
    description: 'Choose from different camera angles for a personalized experience',
    icon: '🎥'
  },
  {
    title: 'Live Statistics',
    description: 'Access real-time stats and insights during matches',
    icon: '📊'
  },
  {
    title: 'Offline Replays',
    description: 'Download matches to watch later without internet connection',
    icon: '📱'
  }
]);

const handleLogin = () => {
  router.push('/login');
};

const handleWatchLive = () => {
  router.push('/login');
};
</script>

<template>
  <div class="sports-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Live Sports Streaming</h1>
        <p class="subheading">Every game, every match, everywhere you go.</p>
        <button class="cta-button" @click="handleLogin">Start Watching Now</button>
      </div>
    </section>

    <!-- Live Now Section -->
    <section class="live-section">
      <div class="container">
        <div class="section-header">
          <h2>Live Now</h2>
          <span class="live-indicator">● LIVE</span>
        </div>
        <div class="live-grid">
          <div v-for="event in liveEvents" :key="event.title" class="live-card">
            <div class="live-image">
              <img :src="event.image" :alt="event.match">
              <div class="live-badge">LIVE</div>
              <div class="live-overlay">
                <button class="watch-button" @click="handleWatchLive">Watch Now</button>
              </div>
            </div>
            <div class="live-info">
              <div class="match-details">
                <h3>{{ event.title }}</h3>
                <p class="match-teams">{{ event.match }}</p>
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

    <!-- Upcoming Events -->
    <section class="upcoming-section">
      <div class="container">
        <h2>Upcoming Events</h2>
        <div class="upcoming-grid">
          <div v-for="event in upcomingEvents" :key="event.title" class="upcoming-card">
            <div class="upcoming-image">
              <img :src="event.image" :alt="event.match">
              <div class="upcoming-overlay">
                <button class="reminder-button">Set Reminder</button>
              </div>
            </div>
            <div class="upcoming-info">
              <h3>{{ event.title }}</h3>
              <p class="upcoming-match">{{ event.match }}</p>
              <div class="upcoming-time">
                <span class="date">{{ event.date }}</span>
                <span class="time">{{ event.time }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Categories Section -->
    <section class="categories-section">
      <div class="container">
        <h2>Sports Categories</h2>
        <div class="categories-grid">
          <div v-for="category in sportsCategories" :key="category.name" class="category-card">
            <div class="category-image">
              <img :src="category.image" :alt="category.name">
              <div class="category-overlay">
                <h3>{{ category.name }}</h3>
                <p>{{ category.leagues }} leagues</p>
              </div>
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
        <h2>Never Miss the Action</h2>
        <p>Access premium sports content with a simple subscription billed directly to your phone</p>
        <button class="cta-button" @click="handleLogin">Subscribe Now</button>
        <p class="note">No credit card required. Cancel anytime.</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.sports-page {
  min-height: 100vh;
  color: #333;
  padding-top: 65px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #44C7B0 0%, #6C63FF 100%);
  color: white;
  padding: 8rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('https://images.pexels.com/photos/931881/pexels-photo-931881.jpeg') center/cover no-repeat;
  opacity: 0.2;
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
}

.hero h1 {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  text-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

.subheading {
  font-size: 1.5rem;
  margin-bottom: 2.5rem;
  opacity: 0.9;
}

.cta-button {
  background: #FF6584;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 1rem 2rem;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 101, 132, 0.4);
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(255, 101, 132, 0.5);
}

/* Live Section */
.live-section {
  padding: 5rem 0;
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2.5rem;
}

.live-section h2, 
.upcoming-section h2, 
.categories-section h2,
.features-section h2 {
  font-size: 2.2rem;
  color: #6C63FF;
  text-align: center;
}

.live-indicator {
  color: #FF3A3A;
  margin-left: 1rem;
  font-size: 1.2rem;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}

.live-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
}

.live-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.live-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.15);
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

.live-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #FF3A3A;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-weight: bold;
  font-size: 0.8rem;
}

.live-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.live-card:hover .live-overlay {
  opacity: 1;
}

.watch-button {
  background: #FF6584;
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.watch-button:hover {
  transform: scale(1.05);
  background: #FF7A95;
}

.live-info {
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.match-details h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #6C63FF;
}

.match-teams {
  color: #666;
  font-size: 0.95rem;
}

.match-status {
  text-align: right;
}

.score {
  font-size: 1.3rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 0.3rem;
}

.progress {
  color: #FF3A3A;
  font-size: 0.9rem;
  font-weight: 500;
}

/* Upcoming Events */
.upcoming-section {
  padding: 5rem 0;
  background: #f9f9f9;
}

.upcoming-section h2 {
  margin-bottom: 2.5rem;
}

.upcoming-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
}

.upcoming-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.upcoming-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.15);
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
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.upcoming-card:hover .upcoming-overlay {
  opacity: 1;
}

.reminder-button {
  background: #44C7B0;
  color: white;
  padding: 0.7rem 1.3rem;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.reminder-button:hover {
  transform: scale(1.05);
  background: #4ED7C0;
}

.upcoming-info {
  padding: 1.5rem;
}

.upcoming-info h3 {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: #6C63FF;
}

.upcoming-match {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.8rem;
}

.upcoming-time {
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  color: #888;
}

/* Categories */
.categories-section {
  padding: 5rem 0;
}

.categories-section h2 {
  margin-bottom: 2.5rem;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
}

.category-card {
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  height: 180px;
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.category-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.2);
}

.category-image {
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
  right: 0;
  bottom: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.2) 100%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.5rem;
  color: white;
  transition: background 0.3s ease;
}

.category-card:hover .category-overlay {
  background: linear-gradient(to top, rgba(68, 199, 176, 0.8) 0%, rgba(68, 199, 176, 0.6) 60%, rgba(68, 199, 176, 0.4) 100%);
}

.category-overlay h3 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.category-overlay p {
  font-size: 0.9rem;
  opacity: 0.9;
}

/* Features */
.features-section {
  padding: 5rem 0;
  background: #f9f9f9;
}

.features-section h2 {
  margin-bottom: 2.5rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.1);
}

.feature-icon {
  font-size: 2.5rem;
  flex-shrink: 0;
}

.feature-content h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #6C63FF;
}

.feature-content p {
  color: #666;
  line-height: 1.5;
}

/* CTA Section */
.cta-section {
  padding: 7rem 0;
  text-align: center;
  background: linear-gradient(135deg, #44C7B0 0%, #6C63FF 100%);
  color: white;
}

.cta-section h2 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: white;
}

.cta-section p {
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.note {
  font-size: 0.9rem;
  margin-top: 1.5rem;
  opacity: 0.8;
}

/* Responsive Design */
@media (max-width: 992px) {
  .live-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 6rem 1.5rem;
  }
  
  .hero h1 {
    font-size: 2.5rem;
  }
  
  .subheading {
    font-size: 1.2rem;
  }
  
  .live-section h2, 
  .upcoming-section h2, 
  .categories-section h2,
  .features-section h2,
  .cta-section h2 {
    font-size: 1.8rem;
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
  }
}

@media (max-width: 480px) {
  .hero h1 {
    font-size: 2rem;
  }
  
  .container {
    padding: 0 1.5rem;
  }
  
  .upcoming-grid {
    grid-template-columns: 1fr;
  }
  
  .cta-section p {
    font-size: 1rem;
  }
  
  .cta-button {
    padding: 0.8rem 1.8rem;
    font-size: 1rem;
  }
}
</style>