<script setup>
import { ref } from 'vue';

const sports = ref([
  {
    name: 'Football',
    description: 'Live matches from top leagues worldwide',
    image: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg'
  },
  {
    name: 'Basketball',
    description: 'NBA and international basketball coverage',
    image: 'https://images.pexels.com/photos/358042/pexels-photo-358042.jpeg'
  },
  {
    name: 'Tennis',
    description: 'Grand Slams and ATP/WTA tournaments',
    image: 'https://images.pexels.com/photos/8224/pexels-photo.jpg'
  }
]);

const features = ref([
  {
    title: 'Live Streaming',
    description: 'Watch events as they happen in HD quality',
    icon: '📺'
  },
  {
    title: 'Multi-cam Views',
    description: 'Choose from multiple camera angles',
    icon: '🎥'
  },
  {
    title: 'Stats & Analysis',
    description: 'Real-time statistics and expert commentary',
    icon: '📊'
  },
  {
    title: 'Instant Replays',
    description: 'Never miss a moment of action',
    icon: '⏪'
  }
]);

const upcomingEvents = ref([
  {
    title: 'Champions League Final',
    date: 'June 1, 2024',
    time: '20:00 GMT',
    image: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg'
  },
  {
    title: 'NBA Playoffs',
    date: 'May 15, 2024',
    time: '19:30 GMT',
    image: 'https://images.pexels.com/photos/358042/pexels-photo-358042.jpeg'
  },
  {
    title: 'Wimbledon Finals',
    date: 'July 14, 2024',
    time: '14:00 GMT',
    image: 'https://images.pexels.com/photos/8224/pexels-photo.jpg'
  }
]);

const handleLogin = () => {
  window.location.href = '/login';
};
</script>

<template>
  <div class="sports-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Live Sports Streaming</h1>
        <p class="subtitle">Watch Your Favorite Sports Live in HD</p>
        <button class="cta-button" @click="handleLogin">Start Watching Now</button>
      </div>
    </section>

    <!-- Sports Categories -->
    <section class="sports-categories">
      <h2>Popular Sports</h2>
      <div class="sports-grid">
        <div v-for="sport in sports" :key="sport.name" class="sport-card">
          <img :src="sport.image" :alt="sport.name" />
          <div class="sport-info">
            <h3>{{ sport.name }}</h3>
            <p>{{ sport.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <h2>Premium Features</h2>
      <div class="features-grid">
        <div v-for="feature in features" :key="feature.title" class="feature-card">
          <span class="feature-icon">{{ feature.icon }}</span>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </div>
      </div>
    </section>

    <!-- Upcoming Events -->
    <section class="upcoming-events">
      <h2>Upcoming Events</h2>
      <div class="events-grid">
        <div v-for="event in upcomingEvents" :key="event.title" class="event-card">
          <img :src="event.image" :alt="event.title" />
          <div class="event-info">
            <h3>{{ event.title }}</h3>
            <p class="event-date">{{ event.date }}</p>
            <p class="event-time">{{ event.time }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta">
      <h2>Don't Miss the Action</h2>
      <p>Join millions of sports fans worldwide</p>
      <button class="cta-button" @click="handleLogin">Login Now</button>
    </section>
  </div>
</template>

<style scoped>
.sports-page {
  min-height: 100vh;
  padding-top: 64px;
}

.hero {
  background: linear-gradient(135deg, #FFB800 0%, #FFA200 100%);
  color: white;
  padding: 8rem 2rem;
  text-align: center;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero h1 {
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
}

.subtitle {
  font-size: 1.5rem;
  opacity: 0.9;
  margin-bottom: 2rem;
}

.sports-categories {
  padding: 6rem 2rem;
  background: #f7fafc;
}

.sports-categories h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #FFB800;
  margin-bottom: 3rem;
}

.sports-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.sport-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.sport-card:hover {
  transform: translateY(-5px);
}

.sport-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.sport-info {
  padding: 1.5rem;
}

.sport-info h3 {
  color: #FFB800;
  margin-bottom: 0.5rem;
}

.features {
  padding: 6rem 2rem;
}

.features h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #FFB800;
  margin-bottom: 3rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  display: block;
}

.feature-card h3 {
  color: #FFB800;
  margin-bottom: 1rem;
}

.upcoming-events {
  padding: 6rem 2rem;
  background: #f7fafc;
}

.upcoming-events h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #FFB800;
  margin-bottom: 3rem;
}

.events-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.event-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.event-card:hover {
  transform: translateY(-5px);
}

.event-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.event-info {
  padding: 1.5rem;
}

.event-info h3 {
  color: #FFB800;
  margin-bottom: 0.5rem;
}

.event-date, .event-time {
  color: #4a5568;
  margin-top: 0.5rem;
}

.cta {
  background: linear-gradient(135deg, #FFB800 0%, #FFA200 100%);
  color: white;
  text-align: center;
  padding: 6rem 2rem;
}

.cta h2 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.cta p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.cta-button {
  background: white;
  color: #FFB800;
  font-size: 1.2rem;
  padding: 1rem 3rem;
  border-radius: 0.5rem;
  border: none;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.5rem;
  }

  .cta h2 {
    font-size: 2rem;
  }
}
</style>