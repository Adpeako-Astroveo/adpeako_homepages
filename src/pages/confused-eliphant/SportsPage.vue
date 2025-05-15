<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const categories = ref([
  {
    name: 'Football',
    image: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg',
    popular: true,
    description: 'Live matches from top leagues worldwide'
  },
  {
    name: 'Basketball',
    image: 'https://images.pexels.com/photos/358042/pexels-photo-358042.jpeg',
    popular: true,
    description: 'NBA and international basketball coverage'
  },
  {
    name: 'Tennis',
    image: 'https://images.pexels.com/photos/8224/pexels-photo.jpg',
    popular: true,
    description: 'Grand Slams and ATP/WTA tournaments'
  },
  {
    name: 'Formula 1',
    image: 'https://images.pexels.com/photos/12790109/pexels-photo-12790109.jpeg',
    popular: false,
    description: 'Complete Formula 1 season coverage'
  },
  {
    name: 'Golf',
    image: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg',
    popular: false,
    description: 'Major championships and tournaments'
  },
  {
    name: 'Boxing',
    image: 'https://images.pexels.com/photos/4761792/pexels-photo-4761792.jpeg',
    popular: false,
    description: 'Championship fights and boxing events'
  },
  {
    name: 'Rugby',
    image: 'https://images.pexels.com/photos/264297/pexels-photo-264297.jpeg',
    popular: false,
    description: 'International matches and league competitions'
  },
  {
    name: 'Cricket',
    image: 'https://images.pexels.com/photos/3657154/pexels-photo-3657154.jpeg',
    popular: false,
    description: 'Test matches, ODIs and T20 internationals'
  }
]);

const liveMatches = ref([
  {
    homeTeam: {
      name: 'Manchester United',
      logo: 'https://images.pexels.com/photos/2570139/pexels-photo-2570139.jpeg',
      score: 2
    },
    awayTeam: {
      name: 'Liverpool',
      logo: 'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg',
      score: 1
    },
    time: '72\'',
    league: 'Premier League',
    status: 'LIVE'
  },
  {
    homeTeam: {
      name: 'Lakers',
      logo: 'https://images.pexels.com/photos/841131/pexels-photo-841131.jpeg',
      score: 86
    },
    awayTeam: {
      name: 'Warriors',
      logo: 'https://images.pexels.com/photos/945471/pexels-photo-945471.jpeg',
      score: 82
    },
    time: 'Q3 8:24',
    league: 'NBA',
    status: 'LIVE'
  },
  {
    homeTeam: {
      name: 'Federer',
      logo: 'https://images.pexels.com/photos/8224/pexels-photo.jpg',
      score: 3
    },
    awayTeam: {
      name: 'Nadal',
      logo: 'https://images.pexels.com/photos/6956096/pexels-photo-6956096.jpeg',
      score: 4
    },
    time: 'Set 3',
    league: 'Wimbledon',
    status: 'LIVE'
  }
]);

const upcomingEvents = ref([
  {
    title: 'Champions League Final',
    teams: 'Manchester City vs. PSG',
    date: 'June 10, 2025',
    time: '20:00 GMT',
    venue: 'Wembley Stadium, London',
    image: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg'
  },
  {
    title: 'NBA Finals Game 1',
    teams: 'Lakers vs. Celtics',
    date: 'June 5, 2025',
    time: '21:30 GMT',
    venue: 'Staples Center, LA',
    image: 'https://images.pexels.com/photos/358042/pexels-photo-358042.jpeg'
  },
  {
    title: 'Wimbledon Men\'s Final',
    teams: 'Djokovic vs. Alcaraz',
    date: 'July 16, 2025',
    time: '14:00 GMT',
    venue: 'All England Club, London',
    image: 'https://images.pexels.com/photos/8224/pexels-photo.jpg'
  },
  {
    title: 'Monaco Grand Prix',
    teams: 'Formula 1',
    date: 'May 28, 2025',
    time: '13:00 GMT',
    venue: 'Circuit de Monaco',
    image: 'https://images.pexels.com/photos/12790109/pexels-photo-12790109.jpeg'
  }
]);

const features = ref([
  {
    title: 'Live HD Streaming',
    description: 'Watch all your favorite sports in crystal clear HD quality',
    icon: '📺'
  },
  {
    title: 'Multi-view Experience',
    description: 'Watch up to 4 games simultaneously on a single screen',
    icon: '📱'
  },
  {
    title: 'Real-time Statistics',
    description: 'Access comprehensive stats and analytics during live games',
    icon: '📊'
  },
  {
    title: 'Instant Replays',
    description: 'Rewatch key moments with our instant replay feature',
    icon: '⏪'
  },
  {
    title: 'Expert Commentary',
    description: 'Enjoy insights from sports experts and former professionals',
    icon: '🎙️'
  },
  {
    title: 'Personalized Alerts',
    description: 'Get notifications for your favorite teams and matches',
    icon: '🔔'
  }
]);

const highlights = ref([
  {
    title: 'Manchester United vs. Liverpool: Premier League Highlights',
    duration: '10:25',
    views: '1.2M',
    image: 'https://images.pexels.com/photos/2099369/pexels-photo-2099369.jpeg'
  },
  {
    title: 'Lakers vs. Warriors: NBA Western Conference Thriller',
    duration: '8:45',
    views: '987K',
    image: 'https://images.pexels.com/photos/2346/sport-high-united-states-of-america-ball.jpg'
  },
  {
    title: 'Wimbledon: Best Moments of the Year',
    duration: '12:30',
    views: '765K',
    image: 'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg'
  },
  {
    title: 'F1 Monaco GP: Race Highlights and Analysis',
    duration: '15:10',
    views: '1.5M',
    image: 'https://images.pexels.com/photos/2397652/pexels-photo-2397652.jpeg'
  },
  {
    title: 'Top 10 Goals of the Month: Football Spectacular',
    duration: '7:20',
    views: '2.1M',
    image: 'https://images.pexels.com/photos/3148452/pexels-photo-3148452.jpeg'
  },
  {
    title: 'Boxing Championship: Fight Highlights',
    duration: '9:15',
    views: '820K',
    image: 'https://images.pexels.com/photos/9012/pexels-photo.jpg'
  }
]);

const testimonials = ref([
  {
    text: "I've never missed a game since subscribing to Confused Eliphant's sports package. The multi-view feature is perfect for busy match days!",
    author: "Thomas K.",
    location: "London"
  },
  {
    text: "The video quality and commentary options are outstanding. Plus, being able to watch on my phone with easy billing makes it so convenient.",
    author: "Maria G.",
    location: "Barcelona"
  },
  {
    text: "As a sports fanatic who follows multiple leagues, the comprehensive coverage and real-time statistics are invaluable to me.",
    author: "Jean P.",
    location: "Paris"
  }
]);

const currentTestimonialIndex = ref(0);

const nextTestimonial = () => {
  currentTestimonialIndex.value = (currentTestimonialIndex.value + 1) % testimonials.value.length;
};

const prevTestimonial = () => {
  currentTestimonialIndex.value = (currentTestimonialIndex.value - 1 + testimonials.value.length) % testimonials.value.length;
};

const navigateToLogin = () => {
  router.push('/login');
};
</script>

<template>
  <div class="sports-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Live Sports Streaming</h1>
        <p class="subtitle">Never miss a game with premium coverage of all major sports events</p>
        <button class="cta-button" @click="navigateToLogin">Login Now</button>
      </div>
    </section>

    <!-- Live Matches Section -->
    <section class="live-matches">
      <h2>Live Now</h2>
      <div class="matches-grid">
        <div v-for="match in liveMatches" :key="match.homeTeam.name + match.awayTeam.name" class="match-card">
          <div class="match-status">
            <span class="status-indicator"></span>
            <span class="status-text">{{ match.status }}</span>
          </div>
          <div class="match-info">
            <div class="match-teams">
              <div class="team home-team">
                <img :src="match.homeTeam.logo" alt="Home Team" class="team-logo">
                <span class="team-name">{{ match.homeTeam.name }}</span>
                <span class="team-score">{{ match.homeTeam.score }}</span>
              </div>
              <div class="team-vs">VS</div>
              <div class="team away-team">
                <img :src="match.awayTeam.logo" alt="Away Team" class="team-logo">
                <span class="team-name">{{ match.awayTeam.name }}</span>
                <span class="team-score">{{ match.awayTeam.score }}</span>
              </div>
            </div>
            <div class="match-details">
              <span class="match-time">{{ match.time }}</span>
              <span class="match-league">{{ match.league }}</span>
            </div>
          </div>
          <button class="watch-button" @click="navigateToLogin">Watch Now</button>
        </div>
      </div>
    </section>

    <!-- Sports Categories -->
    <section class="sports-categories">
      <h2>Explore Sports</h2>
      <div class="categories-grid">
        <div v-for="category in categories" :key="category.name" 
             class="category-card" :class="{ 'popular': category.popular }">
          <div class="category-image">
            <img :src="category.image" :alt="category.name">
            <div class="category-overlay">
              <button class="explore-button" @click="navigateToLogin">Explore</button>
            </div>
          </div>
          <div class="category-info">
            <h3>{{ category.name }}</h3>
            <p>{{ category.description }}</p>
            <span v-if="category.popular" class="popular-tag">Popular</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Upcoming Events -->
    <section class="upcoming-events">
      <h2>Upcoming Events</h2>
      <div class="events-grid">
        <div v-for="event in upcomingEvents" :key="event.title" class="event-card">
          <div class="event-image">
            <img :src="event.image" :alt="event.title">
            <div class="event-overlay">
              <button class="reminder-button" @click="navigateToLogin">Set Reminder</button>
            </div>
          </div>
          <div class="event-info">
            <h3>{{ event.title }}</h3>
            <p class="event-teams">{{ event.teams }}</p>
            <div class="event-details">
              <div class="event-detail">
                <span class="detail-icon">📅</span>
                <span class="detail-text">{{ event.date }}</span>
              </div>
              <div class="event-detail">
                <span class="detail-icon">⏰</span>
                <span class="detail-text">{{ event.time }}</span>
              </div>
              <div class="event-detail">
                <span class="detail-icon">📍</span>
                <span class="detail-text">{{ event.venue }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <h2>Premium Sports Features</h2>
      <div class="features-grid">
        <div v-for="feature in features" :key="feature.title" class="feature-card">
          <span class="feature-icon">{{ feature.icon }}</span>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </div>
      </div>
    </section>

    <!-- Highlights Section -->
    <section class="highlights">
      <h2>Top Highlights</h2>
      <div class="highlights-grid">
        <div v-for="highlight in highlights" :key="highlight.title" class="highlight-card">
          <div class="highlight-image">
            <img :src="highlight.image" :alt="highlight.title">
            <div class="highlight-overlay">
              <button class="play-highlight" @click="navigateToLogin">▶</button>
            </div>
            <div class="highlight-duration">{{ highlight.duration }}</div>
          </div>
          <div class="highlight-info">
            <h3>{{ highlight.title }}</h3>
            <span class="highlight-views">{{ highlight.views }} views</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="testimonials">
      <h2>What Sports Fans Say</h2>
      <div class="testimonials-container">
        <button @click="prevTestimonial" class="testimonial-nav prev">❮</button>
        <div class="testimonial">
          <p class="testimonial-text">"{{ testimonials[currentTestimonialIndex].text }}"</p>
          <div class="testimonial-author">
            <p class="author-name">{{ testimonials[currentTestimonialIndex].author }}</p>
            <p class="author-location">{{ testimonials[currentTestimonialIndex].location }}</p>
          </div>
        </div>
        <button @click="nextTestimonial" class="testimonial-nav next">❯</button>
      </div>
      <div class="testimonial-indicators">
        <span v-for="(_, index) in testimonials" :key="index" 
              class="indicator" :class="{ active: index === currentTestimonialIndex }"
              @click="currentTestimonialIndex = index"></span>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta">
      <h2>Ready for Non-Stop Sports Action?</h2>
      <p>Join millions of fans enjoying premium sports content</p>
      <button class="cta-button" @click="navigateToLogin">Login Now</button>
    </section>
  </div>
</template>

<style scoped>
.sports-page {
  color: #1a202c;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  padding-top: 64px;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #6C63FF 0%, #FF6584 100%);
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
  line-height: 1.2;
}

.subtitle {
  font-size: 1.5rem;
  opacity: 0.9;
  margin-bottom: 2rem;
}

.cta-button {
  background: white;
  color: #6C63FF;
  font-size: 1.2rem;
  padding: 1rem 3rem;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

/* Live Matches Section */
.live-matches {
  padding: 5rem 2rem;
  background: white;
}

.live-matches h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #6C63FF;
  margin-bottom: 3rem;
}

.matches-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.match-card {
  background: #f8fafc;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
  transition: transform 0.3s ease;
  padding: 1.5rem;
}

.match-card:hover {
  transform: translateY(-5px);
}

.match-status {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
}

.status-indicator {
  width: 10px;
  height: 10px;
  background: #ff0000;
  border-radius: 50%;
  margin-right: 0.5rem;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(255, 0, 0, 0.7);
  }
  
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(255, 0, 0, 0);
  }
  
  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(255, 0, 0, 0);
  }
}

.status-text {
  color: #ff0000;
  font-weight: 600;
  font-size: 0.9rem;
}

.match-info {
  margin-bottom: 1.5rem;
}

.match-teams {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.team {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
}

.team-logo {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 0.5rem;
}

.team-name {
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.3rem;
  text-align: center;
}

.team-score {
  font-size: 1.8rem;
  font-weight: 800;
  color: #6C63FF;
}

.team-vs {
  margin: 0 1rem;
  color: #718096;
  font-weight: 500;
}

.match-details {
  display: flex;
  justify-content: space-between;
  color: #718096;
  font-size: 0.9rem;
}

.watch-button {
  background: #6C63FF;
  color: white;
  width: 100%;
  padding: 0.8rem;
  border: none;
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
}

.watch-button:hover {
  background: #5a52e0;
}

/* Sports Categories */
.sports-categories {
  padding: 5rem 2rem;
  background: #f8fafc;
}

.sports-categories h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #6C63FF;
  margin-bottom: 3rem;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.category-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  transition: transform 0.3s ease;
  position: relative;
}

.category-card:hover {
  transform: translateY(-5px);
}

.category-card.popular {
  border: 2px solid #6C63FF;
}

.popular-tag {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #6C63FF;
  color: white;
  font-size: 0.7rem;
  padding: 0.25rem 0.5rem;
  border-radius: 10px;
}

.category-image {
  position: relative;
  height: 160px;
  overflow: hidden;
}

.category-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.category-card:hover .category-image img {
  transform: scale(1.05);
}

.category-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.category-card:hover .category-overlay {
  opacity: 1;
}

.explore-button {
  background: #6C63FF;
  color: white;
  padding: 0.6rem 1.2rem;
  border-radius: 20px;
  border: none;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.explore-button:hover {
  background: #5a52e0;
  transform: scale(1.05);
}

.category-info {
  padding: 1.5rem;
}

.category-info h3 {
  color: #2d3748;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.category-info p {
  color: #718096;
  font-size: 0.9rem;
  line-height: 1.5;
}

/* Upcoming Events */
.upcoming-events {
  padding: 5rem 2rem;
}

.upcoming-events h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #6C63FF;
  margin-bottom: 3rem;
}

.events-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.event-card {
  display: flex;
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  transition: transform 0.3s ease;
}

.event-card:hover {
  transform: translateY(-5px);
}

.event-image {
  position: relative;
  width: 200px;
  flex-shrink: 0;
}

.event-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.event-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.event-card:hover .event-overlay {
  opacity: 1;
}

.reminder-button {
  background: #6C63FF;
  color: white;
  padding: 0.7rem 1.2rem;
  border-radius: 20px;
  border: none;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
}

.reminder-button:hover {
  background: #5a52e0;
}

.event-info {
  padding: 1.5rem;
  flex: 1;
}

.event-info h3 {
  color: #2d3748;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.event-teams {
  color: #4a5568;
  font-weight: 500;
  margin-bottom: 1rem;
}

.event-details {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
}

.event-detail {
  display: flex;
  align-items: center;
}

.detail-icon {
  margin-right: 0.5rem;
  font-size: 0.9rem;
}

.detail-text {
  color: #718096;
  font-size: 0.9rem;
}

/* Features */
.features {
  padding: 5rem 2rem;
  background: #f8fafc;
}

.features h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #6C63FF;
  margin-bottom: 3rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  transition: transform 0.3s ease;
  text-align: center;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  display: block;
}

.feature-card h3 {
  color: #6C63FF;
  margin-bottom: 0.5rem;
}

.feature-card p {
  color: #4a5568;
  line-height: 1.6;
}

/* Highlights */
.highlights {
  padding: 5rem 2rem;
}

.highlights h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #6C63FF;
  margin-bottom: 3rem;
}

.highlights-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.highlight-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  transition: transform 0.3s ease;
}

.highlight-card:hover {
  transform: translateY(-5px);
}

.highlight-image {
  position: relative;
  height: 180px;
  overflow: hidden;
}

.highlight-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.highlight-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.highlight-card:hover .highlight-overlay {
  opacity: 1;
}

.play-highlight {
  background: #6C63FF;
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.play-highlight:hover {
  transform: scale(1.1);
}

.highlight-duration {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: rgba(0,0,0,0.7);
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
}

.highlight-info {
  padding: 1.2rem;
}

.highlight-info h3 {
  color: #2d3748;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.highlight-views {
  color: #718096;
  font-size: 0.85rem;
}

/* Testimonials */
.testimonials {
  padding: 5rem 2rem;
  background: #f8fafc;
  text-align: center;
}

.testimonials h2 {
  font-size: 2.5rem;
  color: #6C63FF;
  margin-bottom: 3rem;
}

.testimonials-container {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  align-items: center;
}

.testimonial {
  background: white;
  padding: 2.5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  flex: 1;
}

.testimonial-text {
  font-size: 1.2rem;
  font-style: italic;
  color: #4a5568;
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.testimonial-author {
  text-align: right;
}

.author-name {
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.3rem;
}

.author-location {
  color: #718096;
  font-size: 0.9rem;
}

.testimonial-nav {
  background: #6C63FF;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  margin: 0 1rem;
  transition: all 0.3s ease;
}

.testimonial-nav:hover {
  background: #5a52e0;
  transform: scale(1.1);
}

.testimonial-indicators {
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
  gap: 0.5rem;
}

.indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #e2e8f0;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.indicator.active {
  background-color: #6C63FF;
}

/* CTA Section */
.cta {
  background: linear-gradient(135deg, #6C63FF 0%, #FF6584 100%);
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

.cta .cta-button {
  background: white;
  color: #6C63FF;
}

/* Responsive Styles */
@media (max-width: 1024px) {
  .events-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 3rem;
  }
  
  .subtitle {
    font-size: 1.2rem;
  }
  
  .matches-grid {
    grid-template-columns: 1fr;
  }
  
  .event-card {
    flex-direction: column;
  }
  
  .event-image {
    width: 100%;
    height: 200px;
  }
  
  .cta h2 {
    font-size: 2.5rem;
  }
}

@media (max-width: 640px) {
  .hero h1 {
    font-size: 2.5rem;
  }
  
  .categories-grid {
    grid-template-columns: 1fr 1fr;
  }
  
  .highlights-grid {
    grid-template-columns: 1fr;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .cta h2 {
    font-size: 2rem;
  }
  
  .testimonials-container {
    flex-direction: column;
  }
  
  .testimonial-nav {
    margin: 1rem 0;
  }
}
</style>