<script setup>
import { ref } from 'vue';

const featuredEvents = ref([
  {
    title: 'UEFA Champions League Final',
    date: 'June 1, 2024',
    time: '20:00 GMT',
    teams: 'Manchester City vs Real Madrid',
    image: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg',
    status: 'Upcoming'
  },
  {
    title: 'Formula 1 Monaco Grand Prix',
    date: 'May 26, 2024',
    time: '14:00 GMT',
    teams: 'Monte Carlo',
    image: 'https://images.pexels.com/photos/12795/pexels-photo-12795.jpeg',
    status: 'Upcoming'
  },
  {
    title: 'NBA Finals Game 1',
    date: 'June 6, 2024',
    time: '01:30 GMT',
    teams: 'Boston Celtics vs Denver Nuggets',
    image: 'https://images.pexels.com/photos/2304359/pexels-photo-2304359.jpeg',
    status: 'Upcoming'
  }
]);

const sportsCategories = ref([
  {
    name: 'Football',
    icon: '⚽',
    image: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg',
    tournaments: ['Premier League', 'La Liga', 'Champions League', 'World Cup']
  },
  {
    name: 'Basketball',
    icon: '🏀',
    image: 'https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg',
    tournaments: ['NBA', 'EuroLeague', 'FIBA World Cup', 'NCAA']
  },
  {
    name: 'Tennis',
    icon: '🎾',
    image: 'https://images.pexels.com/photos/8224/pexels-photo.jpg',
    tournaments: ['Wimbledon', 'US Open', 'French Open', 'Australian Open']
  },
  {
    name: 'Formula 1',
    icon: '🏎️',
    image: 'https://images.pexels.com/photos/12795/pexels-photo-12795.jpeg',
    tournaments: ['Monaco Grand Prix', 'British Grand Prix', 'Italian Grand Prix', 'Abu Dhabi Grand Prix']
  }
]);

const liveNow = ref([
  {
    title: 'Premier League',
    match: 'Liverpool vs Arsenal',
    time: '45\'',
    score: '2-1',
    image: 'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg'
  },
  {
    title: 'Tennis - Roland Garros',
    match: 'Nadal vs Djokovic',
    time: 'Set 3',
    score: '6-4, 7-6, 2-3',
    image: 'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg'
  },
  {
    title: 'NBA Regular Season',
    match: 'Lakers vs Bulls',
    time: 'Q3',
    score: '67-72',
    image: 'https://images.pexels.com/photos/1496624/pexels-photo-1496624.jpeg'
  }
]);

const features = ref([
  {
    title: 'Live HD Streaming',
    description: 'Watch every moment in stunning high-definition without delays.',
    icon: '📺'
  },
  {
    title: 'Multi-angle Views',
    description: 'Choose from multiple camera angles for a personalized experience.',
    icon: '🎥'
  },
  {
    title: 'Real-time Stats',
    description: 'Access detailed statistics and analysis as events unfold.',
    icon: '📊'
  },
  {
    title: 'No Ads',
    description: 'Enjoy uninterrupted coverage without commercial breaks.',
    icon: '🚫'
  }
]);

const handleSubscribe = () => {
  window.location.href = '/login';
};

const handleWatchLive = () => {
  window.location.href = '/login';
};
</script>

<template>
  <div class="timber-sports-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Live Sports Streaming</h1>
        <p class="tagline">Never miss a game. Stream live sports from around the world.</p>
        <button @click="handleSubscribe" class="cta-button">Start Watching</button>
      </div>
    </section>

    <!-- Featured Events -->
    <section class="featured-events">
      <h2>Featured Events</h2>
      <div class="events-slider">
        <div v-for="event in featuredEvents" :key="event.title" class="event-card">
          <div class="event-image">
            <img :src="event.image" :alt="event.title">
            <div class="event-status">{{ event.status }}</div>
          </div>
          <div class="event-details">
            <h3>{{ event.title }}</h3>
            <p class="event-teams">{{ event.teams }}</p>
            <div class="event-time">
              <span class="date">{{ event.date }}</span>
              <span class="time">{{ event.time }}</span>
            </div>
            <button class="remind-button">Set Reminder</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Live Now Section -->
    <section class="live-now">
      <div class="section-header">
        <h2>Live Now</h2>
        <span class="live-indicator">● LIVE</span>
      </div>
      <div class="live-grid">
        <div v-for="match in liveNow" :key="match.title" class="live-card">
          <div class="live-image">
            <img :src="match.image" :alt="match.match">
            <div class="live-overlay">
              <button @click="handleWatchLive" class="watch-live-button">Watch Live</button>
            </div>
          </div>
          <div class="live-details">
            <h3>{{ match.title }}</h3>
            <p class="match-teams">{{ match.match }}</p>
            <div class="match-status">
              <span class="match-time">{{ match.time }}</span>
              <span class="match-score">{{ match.score }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Sports Categories -->
    <section class="sports-categories">
      <h2>Browse by Sport</h2>
      <div class="categories-grid">
        <div v-for="category in sportsCategories" :key="category.name" class="category-card">
          <div class="category-image">
            <img :src="category.image" :alt="category.name">
            <div class="category-overlay"></div>
          </div>
          <div class="category-details">
            <span class="category-icon">{{ category.icon }}</span>
            <h3>{{ category.name }}</h3>
            <ul class="tournaments-list">
              <li v-for="tournament in category.tournaments.slice(0, 3)" :key="tournament">
                {{ tournament }}
              </li>
              <li v-if="category.tournaments.length > 3">+ more</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <h2>Premium Features</h2>
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
        <h2>Don't miss the action</h2>
        <p>Subscribe now and watch every moment of your favorite sports.</p>
        <button @click="handleSubscribe" class="cta-button">Get Premium Access</button>
      </div>
    </section>
  </div>
</template>

<style scoped>
.timber-sports-page {
  min-height: 100vh;
  color: #f5f5f5;
  font-family: 'Inter', sans-serif;
  background-color: #0a192f;
  padding-top: 64px;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #0f2b4c 0%, #0a192f 100%);
  padding: 10rem 2rem;
  text-align: center;
  position: relative;
}

.hero::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg') center/cover no-repeat;
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
  background: linear-gradient(135deg, #64ffda 0%, #00bcd4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 2px 8px rgba(0,0,0,0.3);
}

.tagline {
  font-size: 1.5rem;
  margin-bottom: 2.5rem;
  opacity: 0.9;
}

.cta-button {
  background: linear-gradient(135deg, #64ffda 0%, #00bcd4 100%);
  color: #0a192f;
  font-size: 1.2rem;
  font-weight: 600;
  padding: 1rem 3rem;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(100, 255, 218, 0.4);
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(100, 255, 218, 0.5);
}

/* Featured Events */
.featured-events {
  padding: 5rem 2rem;
}

.featured-events h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #64ffda;
}

.events-slider {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1400px;
  margin: 0 auto;
}

.event-card {
  flex: 1;
  min-width: 300px;
  max-width: 400px;
  background: #112240;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
  transition: all 0.3s ease;
}

.event-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.6);
}

.event-image {
  position: relative;
  height: 250px;
}

.event-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.event-status {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #64ffda;
  color: #0a192f;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: bold;
  font-size: 0.8rem;
}

.event-details {
  padding: 2rem;
}

.event-details h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #e6f1ff;
}

.event-teams {
  color: #a8b2d1;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
}

.event-time {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  color: #8892b0;
  font-size: 0.9rem;
}

.remind-button {
  background: transparent;
  color: #64ffda;
  border: 1px solid #64ffda;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  width: 100%;
  cursor: pointer;
  transition: all 0.3s ease;
}

.remind-button:hover {
  background: rgba(100, 255, 218, 0.1);
}

/* Live Now Section */
.live-now {
  padding: 5rem 2rem;
  background: #0f2b4c;
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
}

.live-now h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #64ffda;
  margin-right: 1rem;
}

.live-indicator {
  color: #ff3d4d;
  font-size: 1rem;
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
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.live-card {
  background: #112240;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  transition: all 0.3s ease;
}

.live-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.4);
}

.live-image {
  position: relative;
  height: 200px;
}

.live-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.live-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(10, 25, 47, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.live-card:hover .live-overlay {
  opacity: 1;
}

.watch-live-button {
  background: #ff3d4d;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.watch-live-button:hover {
  transform: scale(1.05);
  background: #ff5c69;
}

.live-details {
  padding: 1.5rem;
}

.live-details h3 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: #e6f1ff;
}

.match-teams {
  color: #a8b2d1;
  margin-bottom: 1rem;
}

.match-status {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.match-time {
  background: #1a3a66;
  color: #64ffda;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
}

.match-score {
  font-size: 1.2rem;
  font-weight: bold;
  color: #ff3d4d;
}

/* Sports Categories */
.sports-categories {
  padding: 5rem 2rem;
}

.sports-categories h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #64ffda;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.category-card {
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  transition: all 0.3s ease;
  height: 300px;
}

.category-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.4);
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
  background: linear-gradient(to bottom, rgba(10, 25, 47, 0.5) 0%, rgba(10, 25, 47, 0.9) 100%);
}

.category-details {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 2rem;
  z-index: 2;
}

.category-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
  display: block;
}

.category-details h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #e6f1ff;
}

.tournaments-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.tournaments-list li {
  color: #a8b2d1;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

/* Features Section */
.features {
  padding: 5rem 2rem;
  background: #0f2b4c;
}

.features h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #64ffda;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  background: #112240;
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.3);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.feature-card h3 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #e6f1ff;
}

.feature-card p {
  color: #a8b2d1;
  font-size: 0.9rem;
  line-height: 1.6;
}

/* CTA Section */
.cta-section {
  background: linear-gradient(135deg, #0f2b4c 0%, #0a192f 100%);
  padding: 5rem 2rem;
  text-align: center;
  position: relative;
}

.cta-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg') center/cover no-repeat;
  opacity: 0.1;
  z-index: 1;
}

.cta-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
}

.cta-section h2 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #e6f1ff;
}

.cta-section p {
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  color: #a8b2d1;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero {
    padding: 8rem 1.5rem;
  }
  
  .hero h1 {
    font-size: 2.5rem;
  }
  
  .tagline {
    font-size: 1.2rem;
  }
  
  .event-card {
    min-width: 100%;
  }
  
  .cta-section h2 {
    font-size: 2rem;
  }
  
  .cta-section p {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 6rem 1rem;
  }
  
  .hero h1 {
    font-size: 2rem;
  }
  
  .featured-events h2,
  .live-now h2,
  .sports-categories h2,
  .features h2 {
    font-size: 2rem;
  }
  
  .cta-button {
    padding: 0.8rem 2rem;
    font-size: 1rem;
  }
  
  .event-details h3,
  .live-details h3,
  .category-details h3 {
    font-size: 1.2rem;
  }
  
  .event-teams,
  .match-teams {
    font-size: 0.9rem;
  }
}
</style>