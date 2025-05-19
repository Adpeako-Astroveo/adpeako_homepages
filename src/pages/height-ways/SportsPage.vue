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
      name: 'Chelsea',
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
    teams: 'Manchester City vs. Bayern Munich',
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
    venue: 'Staples Center, Los Angeles',
    image: 'https://images.pexels.com/photos/358042/pexels-photo-358042.jpeg'
  },
  {
    title: 'Wimbledon Men\'s Final',
    teams: 'Djokovic vs. Federer',
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
    title: 'HD Live Streaming',
    description: 'Watch your favorite sports in crystal-clear HD quality from anywhere',
    icon: '📺'
  },
  {
    title: 'Multi-view Experience',
    description: 'Follow up to 4 games simultaneously in a single screen',
    icon: '📱'
  },
  {
    title: 'Live Statistics',
    description: 'Access real-time stats, analysis, and play-by-play commentary',
    icon: '📊'
  },
  {
    title: 'Instant Replays',
    description: 'Rewatch key moments with our instant replay feature',
    icon: '⏪'
  },
  {
    title: 'Expert Commentary',
    description: 'Enjoy insights from renowned sports analysts and former professionals',
    icon: '🎙️'
  },
  {
    title: 'Personalized Alerts',
    description: 'Get notified about your favorite teams, matches, and important moments',
    icon: '🔔'
  }
]);

const highlights = ref([
  {
    title: 'Premier League: Liverpool vs. Arsenal Highlights',
    duration: '10:15',
    views: '1.3M',
    image: 'https://images.pexels.com/photos/140511/pexels-photo-140511.jpeg'
  },
  {
    title: 'NBA Playoffs: Lakers vs. Celtics - Best Plays',
    duration: '8:45',
    views: '987K',
    image: 'https://images.pexels.com/photos/2346/sport-high-united-states-of-america-ball.jpg'
  },
  {
    title: 'Wimbledon: Epic Final Match Highlights',
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
    title: 'Top 10 Goals of the Month: Football Special',
    duration: '7:20',
    views: '2.1M',
    image: 'https://images.pexels.com/photos/3148452/pexels-photo-3148452.jpeg'
  },
  {
    title: 'Championship Boxing: Title Fight Highlights',
    duration: '9:15',
    views: '820K',
    image: 'https://images.pexels.com/photos/9012/pexels-photo.jpg'
  }
]);

const handleLogin = () => {
  router.push('/login');
};
</script>

<template>
  <div class="sports-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Live Sports Streaming</h1>
        <p class="subtitle">Never miss a game with premium coverage of all major sporting events</p>
        <button class="primary-btn" @click="handleLogin">Login Now</button>
      </div>
    </section>

    <!-- Live Matches Section -->
    <section class="live-matches-section">
      <h2 class="section-title">Live Now</h2>
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
          <button class="watch-btn" @click="handleLogin">Watch Now</button>
        </div>
      </div>
    </section>

    <!-- Sports Categories -->
    <section class="categories-section">
      <h2 class="section-title">Explore Sports</h2>
      <div class="categories-grid">
        <div v-for="category in categories" :key="category.name" 
             class="category-card" :class="{ 'popular': category.popular }">
          <div class="category-image">
            <img :src="category.image" :alt="category.name">
            <div class="category-overlay">
              <button class="explore-btn" @click="handleLogin">Explore</button>
            </div>
          </div>
          <div class="category-info">
            <h3>{{ category.name }}</h3>
            <p class="category-desc">{{ category.description }}</p>
            <span v-if="category.popular" class="popular-tag">Popular</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Upcoming Events -->
    <section class="upcoming-section">
      <h2 class="section-title">Upcoming Events</h2>
      <div class="events-grid">
        <div v-for="event in upcomingEvents" :key="event.title" class="event-card">
          <div class="event-image">
            <img :src="event.image" :alt="event.title">
            <div class="event-overlay">
              <button class="remind-btn" @click="handleLogin">Set Reminder</button>
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
    <section class="features-section">
      <h2 class="section-title">Premium Features</h2>
      <div class="features-grid">
        <div v-for="feature in features" :key="feature.title" class="feature-card">
          <span class="feature-icon">{{ feature.icon }}</span>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </div>
      </div>
    </section>

    <!-- Highlights Section -->
    <section class="highlights-section">
      <h2 class="section-title">Top Highlights</h2>
      <div class="highlights-grid">
        <div v-for="highlight in highlights" :key="highlight.title" class="highlight-card">
          <div class="highlight-image">
            <img :src="highlight.image" :alt="highlight.title">
            <div class="highlight-overlay">
              <button class="play-btn" @click="handleLogin">▶</button>
            </div>
            <div class="duration-badge">{{ highlight.duration }}</div>
          </div>
          <div class="highlight-info">
            <h3>{{ highlight.title }}</h3>
            <span class="views">{{ highlight.views }} views</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Payment Section -->
    <section class="payment-section">
      <div class="payment-content">
        <div class="payment-info">
          <h2>Simple Mobile Payment</h2>
          <p class="payment-desc">Watch premium sports content with convenient mobile billing - no credit card required</p>
          <ul class="payment-features">
            <li><span class="check">✓</span> Added directly to your monthly phone bill</li>
            <li><span class="check">✓</span> Simple one-click payment process</li>
            <li><span class="check">✓</span> Secure and protected transactions</li>
            <li><span class="check">✓</span> Cancel anytime with no hidden fees</li>
          </ul>
          <div class="price-box">
            <div class="price-content">
              <span class="price-label">Premium Sports Package</span>
              <span class="price-amount">€14.99/month</span>
              <span class="price-billing">Billed to your phone</span>
            </div>
          </div>
          <button class="primary-btn" @click="handleLogin">Login Now</button>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-content">
        <h2>Ready for Non-Stop Sports Action?</h2>
        <p>Join millions of fans watching live sports with Height Ways</p>
        <button class="primary-btn" @click="handleLogin">Login Now</button>
      </div>
    </section>
  </div>
</template>

<style scoped>
.sports-page {
  color: #333;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #007BFF 0%, #6C63FF 100%);
  color: white;
  padding: 10rem 2rem 8rem;
  text-align: center;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero h1 {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.subtitle {
  font-size: 1.5rem;
  opacity: 0.9;
  margin-bottom: 2.5rem;
}

.primary-btn {
  background: white;
  color: #007BFF;
  font-size: 1.2rem;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.primary-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

/* Section Title */
.section-title {
  text-align: center;
  font-size: 2.5rem;
  color: #007BFF;
  margin-bottom: 3rem;
}

/* Live Matches Section */
.live-matches-section {
  padding: 5rem 2rem;
  background: white;
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
  color: #333;
  margin-bottom: 0.3rem;
  text-align: center;
}

.team-score {
  font-size: 1.8rem;
  font-weight: 800;
  color: #007BFF;
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

.watch-btn {
  background: #007BFF;
  color: white;
  width: 100%;
  padding: 0.8rem;
  border-radius: 30px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.watch-btn:hover {
  background: #0069d9;
  transform: translateY(-2px);
}

/* Sports Categories */
.categories-section {
  padding: 5rem 2rem;
  background: #f8fafc;
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
  border: 2px solid #007BFF;
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

.explore-btn {
  background: #007BFF;
  color: white;
  padding: 0.6rem 1.2rem;
  border-radius: 20px;
  border: none;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.explore-btn:hover {
  background: #0069d9;
  transform: scale(1.05);
}

.category-info {
  padding: 1.5rem;
}

.category-info h3 {
  color: #333;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.category-desc {
  color: #718096;
  font-size: 0.9rem;
  line-height: 1.5;
}

.popular-tag {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #007BFF;
  color: white;
  font-size: 0.7rem;
  padding: 0.25rem 0.5rem;
  border-radius: 10px;
  font-weight: 600;
}

/* Upcoming Events */
.upcoming-section {
  padding: 5rem 2rem;
  background: white;
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
  background: #f8fafc;
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

.remind-btn {
  background: #007BFF;
  color: white;
  padding: 0.7rem 1.2rem;
  border-radius: 20px;
  border: none;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.remind-btn:hover {
  background: #0069d9;
  transform: scale(1.05);
}

.event-info {
  padding: 1.5rem;
  flex: 1;
}

.event-info h3 {
  color: #333;
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
.features-section {
  padding: 5rem 2rem;
  background: #f8fafc;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  background: white;
  padding: 2.5rem 2rem;
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
  margin-bottom: 1.5rem;
  display: block;
}

.feature-card h3 {
  color: #007BFF;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.feature-card p {
  color: #4a5568;
  line-height: 1.6;
}

/* Highlights */
.highlights-section {
  padding: 5rem 2rem;
  background: white;
}

.highlights-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.highlight-card {
  background: #f8fafc;
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

.duration-badge {
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
  color: #333;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.views {
  color: #718096;
  font-size: 0.85rem;
}

/* Payment Section */
.payment-section {
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #f8fafc 0%, #edf2f7 100%);
}

.payment-content {
  max-width: 800px;
  margin: 0 auto;
  background: white;
  border-radius: 1rem;
  padding: 3rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  text-align: center;
}

.payment-info h2 {
  font-size: 2.5rem;
  color: #007BFF;
  margin-bottom: 1rem;
}

.payment-desc {
  font-size: 1.2rem;
  color: #4a5568;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.payment-features {
  list-style: none;
  padding: 0;
  margin-bottom: 2.5rem;
  text-align: left;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.payment-features li {
  padding: 0.75rem 0;
  color: #4a5568;
  display: flex;
  align-items: center;
  font-size: 1.1rem;
}

.check {
  color: #007BFF;
  margin-right: 0.75rem;
  font-weight: bold;
  font-size: 1.2rem;
}

.price-box {
  background: #f1f5f9;
  padding: 1.5rem;
  border-radius: 1rem;
  margin-bottom: 2rem;
  display: inline-block;
  min-width: 300px;
}

.price-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.price-label {
  color: #4a5568;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.price-amount {
  font-size: 2.5rem;
  font-weight: 800;
  color: #007BFF;
  margin-bottom: 0.5rem;
}

.price-billing {
  color: #718096;
  font-style: italic;
}

/* CTA Section */
.cta-section {
  background: linear-gradient(135deg, #007BFF 0%, #6C63FF 100%);
  color: white;
  text-align: center;
  padding: 6rem 2rem;
}

.cta-content {
  max-width: 800px;
  margin: 0 auto;
}

.cta-content h2 {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.cta-content p {
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  opacity: 0.9;
}

.cta-section .primary-btn {
  color: #007BFF;
}

/* Responsive Styles */
@media (max-width: 1024px) {
  .events-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.8rem;
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
  
  .payment-content {
    padding: 2rem;
  }
  
  .payment-info h2 {
    font-size: 2.2rem;
  }
  
  .cta-content h2 {
    font-size: 2.5rem;
  }
}

@media (max-width: 640px) {
  .hero h1 {
    font-size: 2.5rem;
  }
  
  .section-title {
    font-size: 2rem;
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
  
  .payment-desc {
    font-size: 1.1rem;
  }
  
  .price-box {
    min-width: auto;
    width: 100%;
  }
  
  .cta-content h2 {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 8rem 1.5rem 6rem;
  }
  
  .hero h1 {
    font-size: 2.2rem;
  }
  
  .subtitle {
    font-size: 1.1rem;
  }
  
  .event-teams {
    font-size: 0.9rem;
  }
  
  .payment-features li {
    font-size: 1rem;
  }
  
  .price-amount {
    font-size: 2.2rem;
  }
  
  .cta-content p {
    font-size: 1.1rem;
  }
}
</style>