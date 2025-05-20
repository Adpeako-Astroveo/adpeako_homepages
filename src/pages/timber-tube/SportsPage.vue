<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const categories = ref([
  {
    name: 'Football',
    image: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg',
    popular: true,
    description: 'Top leagues, tournaments, and matches from around the world'
  },
  {
    name: 'Basketball',
    image: 'https://images.pexels.com/photos/358042/pexels-photo-358042.jpeg',
    popular: true,
    description: 'NBA, FIBA, and international basketball coverage'
  },
  {
    name: 'Tennis',
    image: 'https://images.pexels.com/photos/8224/pexels-photo.jpg',
    popular: true,
    description: 'Grand Slams, ATP, WTA and international tournaments'
  },
  {
    name: 'Formula 1',
    image: 'https://images.pexels.com/photos/39693/motorcycle-racer-racing-race-speed-39693.jpeg',
    popular: false,
    description: 'Complete Formula 1 season coverage and highlights'
  },
  {
    name: 'Golf',
    image: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg',
    popular: false,
    description: 'Major championships, tournaments, and player profiles'
  },
  {
    name: 'Boxing',
    image: 'https://images.pexels.com/photos/4761792/pexels-photo-4761792.jpeg',
    popular: false,
    description: 'Championship fights and exclusive boxing content'
  },
  {
    name: 'Rugby',
    image: 'https://images.pexels.com/photos/163398/football-american-football-college-football-referee-163398.jpeg',
    popular: false,
    description: 'International matches and league competitions'
  },
  {
    name: 'Cricket',
    image: 'https://images.pexels.com/photos/3659864/pexels-photo-3659864.jpeg',
    popular: false,
    description: 'Test matches, ODIs, and T20 internationals'
  }
]);

const liveMatches = ref([
  {
    homeTeam: {
      name: 'Liverpool FC',
      logo: 'https://images.pexels.com/photos/2570139/pexels-photo-2570139.jpeg',
      score: 2
    },
    awayTeam: {
      name: 'Barcelona FC',
      logo: 'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg',
      score: 1
    },
    time: '72\'',
    league: 'Champions League',
    status: 'LIVE'
  },
  {
    homeTeam: {
      name: 'Lakers',
      logo: 'https://images.pexels.com/photos/841131/pexels-photo-841131.jpeg',
      score: 86
    },
    awayTeam: {
      name: 'Celtics',
      logo: 'https://images.pexels.com/photos/945471/pexels-photo-945471.jpeg',
      score: 82
    },
    time: 'Q3 8:24',
    league: 'NBA Playoffs',
    status: 'LIVE'
  },
  {
    homeTeam: {
      name: 'Djokovic',
      logo: 'https://images.pexels.com/photos/8224/pexels-photo.jpg',
      score: 3
    },
    awayTeam: {
      name: 'Nadal',
      logo: 'https://images.pexels.com/photos/6956096/pexels-photo-6956096.jpeg',
      score: 2
    },
    time: 'Set 4',
    league: 'Roland Garros',
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
    venue: 'Staples Center, Los Angeles',
    image: 'https://images.pexels.com/photos/358042/pexels-photo-358042.jpeg'
  },
  {
    title: 'Wimbledon Men\'s Final',
    teams: 'Top Seeds Showdown',
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
    image: 'https://images.pexels.com/photos/39693/motorcycle-racer-racing-race-speed-39693.jpeg'
  }
]);

const features = ref([
  {
    title: 'Live HD Streaming',
    description: 'Watch every moment of the action in crystal clear HD quality',
    icon: '📺'
  },
  {
    title: 'Multi-view Mode',
    description: 'Follow multiple games simultaneously with our split-screen feature',
    icon: '📱'
  },
  {
    title: 'Real-time Stats',
    description: 'Access comprehensive statistics, analytics, and game information live',
    icon: '📊'
  },
  {
    title: 'Instant Replays',
    description: 'Rewatch key plays and moments with our instant replay function',
    icon: '⏪'
  },
  {
    title: 'Expert Commentary',
    description: 'Enjoy insights from sports professionals and experienced analysts',
    icon: '🎙️'
  },
  {
    title: 'Match Alerts',
    description: 'Get notified about games, scores, and key events from your favorite teams',
    icon: '🔔'
  }
]);

const highlights = ref([
  {
    title: 'Champions League: Bayern vs. Real Madrid Highlights',
    duration: '10:25',
    views: '1.2M',
    image: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg'
  },
  {
    title: 'NBA Playoffs: Lakers vs. Warriors - Best Moments',
    duration: '8:45',
    views: '987K',
    image: 'https://images.pexels.com/photos/2346/sport-high-united-states-of-america-ball.jpg'
  },
  {
    title: 'Wimbledon 2024: Epic Final Match Highlights',
    duration: '12:30',
    views: '765K',
    image: 'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg'
  },
  {
    title: 'F1 Monaco GP: Race Highlights and Analysis',
    duration: '15:10',
    views: '1.5M',
    image: 'https://images.pexels.com/photos/12473899/pexels-photo-12473899.jpeg'
  },
  {
    title: 'Premier League: Top 10 Goals of the Month',
    duration: '7:20',
    views: '2.1M',
    image: 'https://images.pexels.com/photos/3148452/pexels-photo-3148452.jpeg'
  },
  {
    title: 'UFC 300: Championship Fight Highlights',
    duration: '9:15',
    views: '820K',
    image: 'https://images.pexels.com/photos/9012/pexels-photo.jpg'
  }
]);

const testimonials = ref([
  {
    text: "The multi-view feature is amazing for busy game days. I can watch all my favorite teams at once without missing any action!",
    author: "Thomas K.",
    location: "London"
  },
  {
    text: "The video quality is incredible even on my phone. Having real-time stats alongside the stream adds a whole new dimension to watching sports.",
    author: "Maria G.",
    location: "Berlin"
  },
  {
    text: "Being able to catch up with highlights when I miss a game is fantastic. The commentary team is also top-notch!",
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
        <p class="subtitle">Never miss a game with premium coverage of all major sporting events</p>
        <button class="cta-button" @click="navigateToLogin">Watch Live Now</button>
      </div>
    </section>

    <!-- Live Matches Section -->
    <section class="live-matches-section">
      <h2>Live Right Now</h2>
      <div class="matches-grid">
        <div v-for="match in liveMatches" :key="match.homeTeam.name + match.awayTeam.name" class="match-card">
          <div class="match-status">
            <span class="status-indicator"></span>
            <span class="status-text">{{ match.status }}</span>
          </div>
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
          <button class="watch-button" @click="navigateToLogin">Watch Live</button>
        </div>
      </div>
    </section>

    <!-- Sports Categories -->
    <section class="categories-section">
      <h2>Browse by Sport</h2>
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
    <section class="upcoming-section">
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
              <div class="detail">
                <span class="detail-icon">📅</span>
                <span class="detail-text">{{ event.date }}</span>
              </div>
              <div class="detail">
                <span class="detail-icon">⏰</span>
                <span class="detail-text">{{ event.time }}</span>
              </div>
              <div class="detail">
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
    <section class="highlights-section">
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
    <section class="testimonials-section">
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

    <!-- Mobile Billing Section -->
    <section class="billing-section">
      <h2>Sports Package</h2>
      <div class="billing-container">
        <div class="billing-info">
          <h3>Premium Sports Access</h3>
          <div class="price-box">
            <span class="price-amount">฿14.99</span>
            <span class="price-period">/month</span>
          </div>
          <ul class="billing-features">
            <li><span class="check-icon">✓</span> Live streaming of all major sporting events</li>
            <li><span class="check-icon">✓</span> Full HD and 4K quality where available</li>
            <li><span class="check-icon">✓</span> Multi-view functionality for simultaneous games</li>
            <li><span class="check-icon">✓</span> Unlimited access to highlights and replays</li>
            <li><span class="check-icon">✓</span> Expert commentary and analysis</li>
            <li><span class="check-icon">✓</span> Personalized notifications for your teams</li>
          </ul>
          <p class="billing-note">Charged directly to your mobile phone bill - no credit card required</p>
          <button class="billing-button" @click="navigateToLogin">Subscribe Now</button>
        </div>
        <div class="billing-image">
          <img src="https://images.pexels.com/photos/8721342/pexels-photo-8721342.jpeg" alt="Mobile Sports Streaming">
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <h2>Ready for Non-Stop Sports Action?</h2>
      <p>Join millions of fans enjoying premium sports content worldwide</p>
      <button class="cta-button" @click="navigateToLogin">Start Watching Today</button>
    </section>
  </div>
</template>

<style scoped>
.sports-page {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: #333;
  padding-top: 64px;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #3B52A5 0%, #5D72D9 100%);
  background-image: url('https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg');
  background-size: cover;
  background-position: center;
  background-blend-mode: overlay;
  color: white;
  padding: 8rem 2rem;
  text-align: center;
  position: relative;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(59, 82, 165, 0.8) 0%, rgba(93, 114, 217, 0.8) 100%);
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
}

.hero h1 {
  font-size: 4rem;
  font-weight: 900;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.subtitle {
  font-size: 1.5rem;
  opacity: 0.9;
  margin-bottom: 2.5rem;
}

.cta-button {
  background: white;
  color: #3B52A5;
  font-size: 1.2rem;
  padding: 1rem 3rem;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

/* Section styling */
section {
  padding: 5rem 2rem;
}

section:nth-child(odd) {
  background: #f8f9fa;
}

section:nth-child(even) {
  background: white;
}

section h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #3B52A5;
  margin-bottom: 3rem;
  font-weight: 800;
}

/* Live Matches Section */
.matches-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.match-card {
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 15px 30px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.match-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}

.match-status {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
}

.status-indicator {
  width: 12px;
  height: 12px;
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

.match-teams {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
}

.team {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
}

.team-logo {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 0.8rem;
  border: 3px solid #f8f9fa;
}

.team-name {
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
  text-align: center;
  font-size: 1.1rem;
}

.team-score {
  font-size: 2rem;
  font-weight: 800;
  color: #3B52A5;
}

.team-vs {
  margin: 0 1.5rem;
  color: #888;
  font-weight: 500;
  font-size: 1.2rem;
}

.match-details {
  display: flex;
  justify-content: space-between;
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 2rem;
}

.watch-button {
  background: #3B52A5;
  color: white;
  width: 100%;
  padding: 1rem;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.watch-button:hover {
  background: #5D72D9;
  transform: translateY(-3px);
}

/* Categories Section */
.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.category-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  position: relative;
}

.category-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}

.category-card.popular {
  border: 2px solid #3B52A5;
}

.category-image {
  position: relative;
  height: 180px;
  overflow: hidden;
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
  background: #3B52A5;
  color: white;
  padding: 0.8rem 1.8rem;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
}

.explore-button:hover {
  background: #5D72D9;
  transform: scale(1.05);
}

.category-info {
  padding: 1.5rem;
}

.category-info h3 {
  color: #333;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.category-info p {
  color: #666;
  font-size: 0.9rem;
  line-height: 1.5;
}

.popular-tag {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #3B52A5;
  color: white;
  font-size: 0.8rem;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-weight: 600;
}

/* Upcoming Events */
.events-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.event-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.event-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}

.event-image {
  position: relative;
  height: 180px;
  overflow: hidden;
}

.event-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.event-card:hover .event-image img {
  transform: scale(1.1);
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
  background: #3B52A5;
  color: white;
  padding: 0.8rem 1.8rem;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.reminder-button:hover {
  background: #5D72D9;
  transform: scale(1.05);
}

.event-info {
  padding: 1.5rem;
}

.event-info h3 {
  color: #333;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.event-teams {
  color: #444;
  font-weight: 600;
  margin-bottom: 1.2rem;
}

.event-details {
  display: grid;
  gap: 0.8rem;
}

.detail {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.detail-icon {
  color: #3B52A5;
  font-size: 1.2rem;
}

.detail-text {
  color: #666;
  font-size: 0.95rem;
}

/* Features Section */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  background: white;
  padding: 2.5rem;
  border-radius: 1rem;
  box-shadow: 0 15px 30px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  text-align: center;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  display: block;
}

.feature-card h3 {
  color: #3B52A5;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.feature-card p {
  color: #666;
  line-height: 1.6;
}

/* Highlights Section */
.highlights-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.highlight-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.highlight-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}

.highlight-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.highlight-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.highlight-card:hover .highlight-image img {
  transform: scale(1.1);
}

.highlight-overlay {
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

.highlight-card:hover .highlight-overlay {
  opacity: 1;
}

.play-highlight {
  background: #3B52A5;
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.play-highlight:hover {
  transform: scale(1.1);
  background: #5D72D9;
}

.highlight-duration {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: rgba(0,0,0,0.7);
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  font-size: 0.85rem;
  font-weight: 600;
}

.highlight-info {
  padding: 1.5rem;
}

.highlight-info h3 {
  color: #333;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.highlight-views {
  color: #666;
  font-size: 0.9rem;
}

/* Testimonials Section */
.testimonials-section {
  text-align: center;
}

.testimonials-container {
  display: flex;
  align-items: center;
  max-width: 900px;
  margin: 0 auto;
}

.testimonial {
  background: white;
  padding: 3rem;
  border-radius: 1rem;
  box-shadow: 0 15px 30px rgba(0,0,0,0.1);
  flex: 1;
}

.testimonial-text {
  font-size: 1.3rem;
  font-style: italic;
  color: #444;
  line-height: 1.7;
  position: relative;
  margin-bottom: 2rem;
}

.testimonial-text::before,
.testimonial-text::after {
  content: '"';
  font-size: 2rem;
  color: #3B52A5;
  font-family: Georgia, serif;
}

.testimonial-author {
  text-align: right;
}

.author-name {
  font-weight: 700;
  color: #333;
  margin-bottom: 0.3rem;
}

.author-location {
  color: #666;
}

.testimonial-nav {
  background: #3B52A5;
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  border: none;
  cursor: pointer;
  margin: 0 1.5rem;
  transition: all 0.3s ease;
}

.testimonial-nav:hover {
  background: #5D72D9;
  transform: scale(1.1);
}

.testimonial-indicators {
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  margin-top: 2rem;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #ddd;
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator.active {
  background: #3B52A5;
  transform: scale(1.2);
}

/* Billing Section */
.billing-container {
  display: flex;
  align-items: center;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
}

.billing-info {
  flex: 1;
}

.billing-info h3 {
  font-size: 2rem;
  color: #3B52A5;
  margin-bottom: 1.5rem;
}

.price-box {
  margin-bottom: 2rem;
}

.price-amount {
  font-size: 3.5rem;
  font-weight: 800;
  color: #3B52A5;
}

.price-period {
  font-size: 1.2rem;
  color: #666;
}

.billing-features {
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
}

.billing-features li {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  color: #444;
  font-size: 1.1rem;
}

.check-icon {
  color: #3B52A5;
  margin-right: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
}

.billing-note {
  font-style: italic;
  color: #666;
  margin-bottom: 2rem;
}

.billing-button {
  background: #3B52A5;
  color: white;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.billing-button:hover {
  background: #5D72D9;
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(59, 82, 165, 0.2);
}

.billing-image {
  flex: 1;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}

.billing-image img {
  width: 100%;
  display: block;
  object-fit: cover;
}

/* CTA Section */
.cta-section {
  background: linear-gradient(135deg, #3B52A5 0%, #5D72D9 100%);
  color: white;
  text-align: center;
  padding: 6rem 2rem;
}

.cta-section h2 {
  color: white;
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.cta-section p {
  font-size: 1.3rem;
  margin-bottom: 2.5rem;
  opacity: 0.9;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.cta-section .cta-button {
  background: white;
  color: #3B52A5;
}

.cta-section .cta-button:hover {
  background: #f8f9fa;
}

/* Responsive Styles */
@media (max-width: 1200px) {
  .matches-grid {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  }
  
  .highlights-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
}

@media (max-width: 992px) {
  .billing-container {
    flex-direction: column-reverse;
    gap: 2rem;
  }
  
  .billing-image {
    width: 100%;
    max-width: 600px;
  }
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 3rem;
  }
  
  .subtitle {
    font-size: 1.3rem;
  }
  
  section {
    padding: 4rem 1.5rem;
  }
  
  section h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  
  .match-card {
    padding: 1.5rem;
  }
  
  .team-logo {
    width: 60px;
    height: 60px;
  }
  
  .testimonials-container {
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .testimonial-nav {
    margin: 0;
  }
  
  .testimonial {
    padding: 2rem;
  }
  
  .cta-section h2 {
    font-size: 2.5rem;
  }
}

@media (max-width: 576px) {
  .hero {
    padding: 6rem 1rem;
  }
  
  .hero h1 {
    font-size: 2.5rem;
  }
  
  .subtitle {
    font-size: 1.1rem;
  }
  
  .cta-button {
    padding: 0.8rem 2rem;
    font-size: 1.1rem;
  }
  
  .match-teams {
    flex-direction: column;
    gap: 1rem;
  }
  
  .team-vs {
    margin: 0.5rem 0;
  }
  
  .categories-grid,
  .events-grid {
    grid-template-columns: 1fr;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .highlights-grid {
    grid-template-columns: 1fr;
  }
  
  .testimonial-text {
    font-size: 1.1rem;
  }
  
  .billing-info h3 {
    font-size: 1.8rem;
  }
  
  .price-amount {
    font-size: 3rem;
  }
  
  .cta-section h2 {
    font-size: 2rem;
  }
  
  .cta-section p {
    font-size: 1.1rem;
  }
}
</style>