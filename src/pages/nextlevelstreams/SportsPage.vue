<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const categories = ref([
  {
    name: 'Football',
    image: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg',
    popular: true,
    description: 'Premier League, La Liga, Champions League and more'
  },
  {
    name: 'Basketball',
    image: 'https://images.pexels.com/photos/358042/pexels-photo-358042.jpeg',
    popular: true,
    description: 'NBA, EuroLeague and international tournaments'
  },
  {
    name: 'Tennis',
    image: 'https://images.pexels.com/photos/8224/pexels-photo.jpg',
    popular: true,
    description: 'Grand Slams, ATP & WTA tournaments'
  },
  {
    name: 'Formula 1',
    image: 'https://images.pexels.com/photos/12790109/pexels-photo-12790109.jpeg',
    popular: false,
    description: 'Every race of the F1 season plus exclusive content'
  },
  {
    name: 'Golf',
    image: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg',
    popular: false,
    description: 'PGA Tour, European Tour and major championships'
  },
  {
    name: 'Boxing',
    image: 'https://images.pexels.com/photos/4761792/pexels-photo-4761792.jpeg',
    popular: false,
    description: 'Championship fights and exclusive events'
  },
  {
    name: 'Rugby',
    image: 'https://images.pexels.com/photos/264297/pexels-photo-264297.jpeg',
    popular: false,
    description: 'Six Nations, Rugby Championship and World Cup'
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
    image: 'https://images.pexels.com/photos/140039/pexels-photo-140039.jpeg'
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
    description: 'Get notified about your favorite teams and matches',
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
    title: 'Wimbledon: Best Moments from the Finals',
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

const testimonials = ref([
  {
    text: "The multi-view feature is a game-changer. Being able to watch four games simultaneously during busy sports weekends is incredible!",
    author: "James T.",
    location: "London"
  },
  {
    text: "The video quality and real-time statistics have transformed my viewing experience. I feel like I'm right there in the stadium!",
    author: "Maria G.",
    location: "Barcelona"
  },
  {
    text: "As a die-hard sports fan who follows multiple leagues, having everything in one place with mobile billing is exactly what I needed.",
    author: "Marco P.",
    location: "Milan"
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
        <p class="subtitle">Never miss a game with comprehensive coverage of all major sporting events</p>
        <button class="cta-button" @click="navigateToLogin">Watch Live</button>
      </div>
      <div class="hero-visual">
        <div class="stadium-lights light-1"></div>
        <div class="stadium-lights light-2"></div>
        <div class="stadium-lights light-3"></div>
        <div class="stadium-visual">
          <div class="scoreboard">
            <div class="team-score">
              <span>2</span>
            </div>
            <div class="divider"></div>
            <div class="team-score">
              <span>1</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Live Matches Section -->
    <section class="live-matches-section">
      <div class="section-container">
        <h2>Live Right Now</h2>
        <div class="matches-grid">
          <div v-for="match in liveMatches" :key="match.homeTeam.name + match.awayTeam.name" class="match-card">
            <div class="match-status">
              <span class="status-indicator"></span>
              <span class="status-text">{{ match.status }}</span>
            </div>
            <div class="match-content">
              <div class="match-teams">
                <div class="team home-team">
                  <div class="team-logo">
                    <img :src="match.homeTeam.logo" alt="Home Team">
                  </div>
                  <div class="team-info">
                    <span class="team-name">{{ match.homeTeam.name }}</span>
                    <span class="team-score">{{ match.homeTeam.score }}</span>
                  </div>
                </div>
                <div class="vs-divider">VS</div>
                <div class="team away-team">
                  <div class="team-info">
                    <span class="team-score">{{ match.awayTeam.score }}</span>
                    <span class="team-name">{{ match.awayTeam.name }}</span>
                  </div>
                  <div class="team-logo">
                    <img :src="match.awayTeam.logo" alt="Away Team">
                  </div>
                </div>
              </div>
              <div class="match-details">
                <span class="match-time">{{ match.time }}</span>
                <span class="match-league">{{ match.league }}</span>
              </div>
              <button class="watch-button" @click="navigateToLogin">Watch Live</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Sports Categories -->
    <section class="categories-section">
      <div class="section-container">
        <h2>Explore Sports</h2>
        <div class="categories-grid">
          <div v-for="category in categories" :key="category.name" 
               class="category-card" :class="{ 'popular': category.popular }">
            <div class="category-image">
              <img :src="category.image" :alt="category.name">
              <div class="category-overlay">
                <button class="explore-button" @click="navigateToLogin">Explore</button>
              </div>
              <div class="category-info">
                <h3>{{ category.name }}</h3>
                <p>{{ category.description }}</p>
              </div>
              <div v-if="category.popular" class="popular-tag">Popular</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Upcoming Events -->
    <section class="upcoming-section">
      <div class="section-container">
        <h2>Upcoming Events</h2>
        <div class="events-grid">
          <div v-for="event in upcomingEvents" :key="event.title" class="event-card">
            <div class="event-image">
              <img :src="event.image" :alt="event.title">
              <div class="event-overlay">
                <button class="remind-button" @click="navigateToLogin">Set Reminder</button>
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
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <div class="section-container">
        <h2>Premium Sports Features</h2>
        <div class="features-grid">
          <div v-for="feature in features" :key="feature.title" class="feature-card">
            <div class="feature-icon">{{ feature.icon }}</div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Highlights Section -->
    <section class="highlights-section">
      <div class="section-container">
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
      </div>
    </section>

    <!-- Testimonials -->
    <section class="testimonials-section">
      <div class="section-container">
        <h2>What Sports Fans Say</h2>
        <div class="testimonials-container">
          <button @click="prevTestimonial" class="nav-button prev">❮</button>
          <div class="testimonial">
            <p class="testimonial-text">"{{ testimonials[currentTestimonialIndex].text }}"</p>
            <div class="testimonial-author">
              <p class="author-name">{{ testimonials[currentTestimonialIndex].author }}</p>
              <p class="author-location">{{ testimonials[currentTestimonialIndex].location }}</p>
            </div>
          </div>
          <button @click="nextTestimonial" class="nav-button next">❯</button>
        </div>
        <div class="testimonial-dots">
          <span v-for="(_, index) in testimonials" :key="index" 
                class="dot" :class="{ active: index === currentTestimonialIndex }"
                @click="currentTestimonialIndex = index"></span>
        </div>
      </div>
    </section>

    <!-- Billing Section -->
    <section class="billing-section">
      <div class="section-container">
        <div class="billing-grid">
          <div class="billing-content">
            <h2>Sports Premium Package</h2>
            <p class="billing-description">Get unlimited access to live and on-demand sports content from around the world.</p>
            
            <div class="pricing-box">
              <div class="pricing-header">
                <h3>Sports Package</h3>
                <div class="pricing-amount">
                  <span class="price">€14.99</span>
                  <span class="period">/month</span>
                </div>
              </div>
              <ul class="pricing-features">
                <li><span class="check-icon">✓</span> Live streaming of all available sports events</li>
                <li><span class="check-icon">✓</span> Multi-view for watching multiple games</li>
                <li><span class="check-icon">✓</span> Real-time statistics and analytics</li>
                <li><span class="check-icon">✓</span> Expert commentary in multiple languages</li>
                <li><span class="check-icon">✓</span> Full HD and 4K streaming where available</li>
                <li><span class="check-icon">✓</span> Personalized alerts for favorite teams</li>
              </ul>
              <div class="payment-method">
                <span class="payment-icon">📱</span>
                <p>Billed directly to your phone - no credit card needed</p>
              </div>
              <button class="pricing-button" @click="navigateToLogin">Subscribe Now</button>
            </div>
          </div>
          <div class="billing-visual">
            <div class="visual-mockup">
              <div class="tv-graphic">
                <div class="tv-screen">
                  <div class="game-view">
                    <div class="team team-left">
                      <div class="score-display">2</div>
                    </div>
                    <div class="score-divider">:</div>
                    <div class="team team-right">
                      <div class="score-display">1</div>
                    </div>
                  </div>
                  <div class="game-timer">72'</div>
                </div>
                <div class="payment-badge">
                  <span class="payment-check">✓</span>
                  <span>Payment Complete</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-container">
        <h2>Ready for Non-Stop Sports Action?</h2>
        <p>Join millions of fans enjoying premium sports content worldwide</p>
        <button class="cta-button large" @click="navigateToLogin">Get Started Now</button>
      </div>
    </section>
  </div>
</template>

<style scoped>
.sports-page {
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  color: #1F2937;
}

.section-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

h2 {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 2rem;
  color: #6D28D9;
  text-align: center;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #6D28D9 0%, #A78BFA 100%);
  color: white;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 5rem 2rem;
  position: relative;
  overflow: hidden;
  min-height: 80vh;
}

.hero-content {
  max-width: 600px;
  z-index: 2;
}

.hero h1 {
  font-size: 3.5rem;
  font-weight: 900;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  position: relative;
}

.hero h1::after {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 0;
  width: 100px;
  height: 5px;
  background: #A78BFA;
  border-radius: 10px;
}

.subtitle {
  font-size: 1.5rem;
  margin-bottom: 2.5rem;
  opacity: 0.9;
  line-height: 1.5;
}

.cta-button {
  background: white;
  color: #6D28D9;
  font-size: 1.1rem;
  font-weight: 700;
  padding: 1rem 2.5rem;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.cta-button.large {
  font-size: 1.2rem;
  padding: 1.2rem 3rem;
}

.hero-visual {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

.stadium-lights {
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 0 50px 30px rgba(255, 255, 255, 0.4);
  z-index: 0;
}

.light-1 {
  top: -25px;
  left: 20%;
}

.light-2 {
  top: -25px;
  right: 20%;
}

.light-3 {
  top: 50%;
  right: -25px;
}

.stadium-visual {
  width: 350px;
  height: 250px;
  background: #1F2937;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
}

.stadium-visual::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg');
  background-size: cover;
  background-position: center;
  opacity: 0.5;
}

.scoreboard {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.team-score {
  font-size: 3rem;
  font-weight: 700;
  color: white;
}

.divider {
  width: 2px;
  height: 40px;
  background: rgba(255, 255, 255, 0.5);
}

/* Live Matches Section */
.live-matches-section {
  padding: 6rem 0;
  background: white;
}

.matches-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.match-card {
  background: #F9FAFB;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.match-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);
}

.match-status {
  background: #6D28D9;
  padding: 0.75rem 1.5rem;
  display: flex;
  align-items: center;
}

.status-indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #EF4444;
  margin-right: 0.75rem;
  animation: pulse 1.5s infinite;
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

.status-text {
  color: white;
  font-weight: 600;
  font-size: 0.95rem;
}

.match-content {
  padding: 1.5rem;
}

.match-teams {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
}

.team {
  flex: 1;
  display: flex;
  align-items: center;
}

.home-team {
  text-align: left;
}

.away-team {
  text-align: right;
  justify-content: flex-end;
}

.team-logo {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.team-logo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.home-team .team-logo {
  margin-right: 1rem;
}

.away-team .team-logo {
  margin-left: 1rem;
}

.team-info {
  display: flex;
  flex-direction: column;
}

.team-name {
  font-weight: 600;
  color: #1F2937;
  margin-bottom: 0.5rem;
}

.team-score {
  font-size: 1.8rem;
  font-weight: 800;
  color: #6D28D9;
}

.vs-divider {
  margin: 0 1rem;
  color: #6B7280;
  font-weight: 600;
}

.match-details {
  display: flex;
  justify-content: space-between;
  color: #6B7280;
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
}

.watch-button {
  background: #6D28D9;
  color: white;
  padding: 0.8rem 1rem;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  width: 100%;
  cursor: pointer;
  transition: all 0.3s ease;
}

.watch-button:hover {
  background: #5B21B6;
}

/* Categories Section */
.categories-section {
  padding: 6rem 0;
  background: #F9FAFB;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.category-card {
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  position: relative;
}

.category-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);
}

.popular-tag {
  position: absolute;
  top: 15px;
  left: 15px;
  background: #6D28D9;
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 600;
  z-index: 2;
}

.category-image {
  position: relative;
  height: 250px;
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
  background: rgba(0, 0, 0, 0.4);
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
  background: #6D28D9;
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 3;
}

.explore-button:hover {
  background: #5B21B6;
  transform: scale(1.05);
}

.category-info {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%);
  padding: 1.5rem;
  color: white;
}

.category-info h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.category-info p {
  font-size: 0.95rem;
  opacity: 0.9;
}

/* Upcoming Events */
.upcoming-section {
  padding: 6rem 0;
  background: white;
}

.events-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.event-card {
  background: #F9FAFB;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.event-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);
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
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.event-card:hover .event-overlay {
  opacity: 1;
}

.remind-button {
  background: #6D28D9;
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
}

.remind-button::before {
  content: '🔔';
  margin-right: 0.5rem;
}

.remind-button:hover {
  background: #5B21B6;
  transform: scale(1.05);
}

.event-info {
  padding: 1.5rem;
}

.event-info h3 {
  color: #1F2937;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.event-teams {
  color: #4B5563;
  font-weight: 600;
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
}

.detail-text {
  color: #6B7280;
  font-size: 0.95rem;
}

/* Features Section */
.features-section {
  padding: 6rem 0;
  background: #F9FAFB;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: white;
  padding: 2.5rem;
  border-radius: 1rem;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  text-align: center;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);
  background: linear-gradient(135deg, #6D28D9 0%, #A78BFA 100%);
  color: white;
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  display: block;
}

.feature-card h3 {
  color: #1F2937;
  font-size: 1.4rem;
  margin-bottom: 1rem;
  font-weight: 700;
  transition: color 0.3s ease;
}

.feature-card:hover h3 {
  color: white;
}

.feature-card p {
  color: #4B5563;
  line-height: 1.6;
  transition: color 0.3s ease;
}

.feature-card:hover p {
  color: rgba(255, 255, 255, 0.9);
}

/* Highlights Section */
.highlights-section {
  padding: 6rem 0;
  background: white;
}

.highlights-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.highlight-card {
  background: #F9FAFB;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.highlight-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);
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
  background: rgba(0, 0, 0, 0.5);
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
  background: #6D28D9;
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
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.play-highlight:hover {
  transform: scale(1.1);
  background: #5B21B6;
}

.highlight-duration {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.7);
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
  color: #1F2937;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.highlight-views {
  color: #6B7280;
  font-size: 0.9rem;
}

/* Testimonials Section */
.testimonials-section {
  padding: 6rem 0;
  background: #F9FAFB;
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
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.05);
  flex: 1;
}

.testimonial-text {
  font-size: 1.3rem;
  font-style: italic;
  color: #1F2937;
  line-height: 1.7;
  margin-bottom: 2rem;
  position: relative;
}

.testimonial-text::before {
  content: '"';
  position: absolute;
  left: -20px;
  top: -10px;
  font-size: 3rem;
  color: #A78BFA;
  opacity: 0.3;
  font-family: Georgia, serif;
}

.testimonial-author {
  text-align: right;
}

.author-name {
  font-weight: 700;
  color: #6D28D9;
  margin-bottom: 0.2rem;
}

.author-location {
  color: #6B7280;
}

.nav-button {
  background: #6D28D9;
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
  margin: 0 2rem;
  transition: all 0.3s ease;
  box-shadow: 0 10px 25px rgba(109, 40, 217, 0.2);
}

.nav-button:hover {
  background: #5B21B6;
  transform: scale(1.1);
}

.testimonial-dots {
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  margin-top: 2rem;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #E5E7EB;
  cursor: pointer;
  transition: all 0.3s ease;
}

.dot.active {
  background: #6D28D9;
  transform: scale(1.2);
}

/* Billing Section */
.billing-section {
  padding: 6rem 0;
  background: white;
}

.billing-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.billing-content h2 {
  text-align: left;
  margin-bottom: 1.5rem;
}

.billing-description {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #4B5563;
  margin-bottom: 2rem;
}

.pricing-box {
  background: #F9FAFB;
  padding: 2.5rem;
  border-radius: 1.5rem;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.pricing-box:hover {
  transform: translateY(-10px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);
}

.pricing-header {
  text-align: center;
  margin-bottom: 2rem;
}

.pricing-header h3 {
  color: #1F2937;
  font-size: 1.8rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.pricing-amount {
  margin-bottom: 1rem;
}

.price {
  font-size: 3rem;
  font-weight: 800;
  color: #6D28D9;
}

.period {
  font-size: 1.1rem;
  color: #6B7280;
}

.pricing-features {
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
}

.pricing-features li {
  padding: 0.75rem 0;
  border-bottom: 1px solid #E5E7EB;
  display: flex;
  align-items: center;
}

.pricing-features li:last-child {
  border-bottom: none;
}

.check-icon {
  color: #6D28D9;
  margin-right: 1rem;
  font-weight: bold;
}

.payment-method {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 1rem;
  background: rgba(109, 40, 217, 0.05);
  border-radius: 0.5rem;
}

.payment-icon {
  font-size: 1.5rem;
}

.payment-method p {
  margin: 0;
  color: #4B5563;
  font-size: 0.95rem;
}

.pricing-button {
  background: #6D28D9;
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

.pricing-button:hover {
  background: #5B21B6;
  transform: translateY(-3px);
}

.visual-mockup {
  position: relative;
  max-width: 400px;
  margin: 0 auto;
}

.tv-graphic {
  background: #1F2937;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  position: relative;
}

.tv-screen {
  background: linear-gradient(135deg, #6D28D9 0%, #A78BFA 100%);
  aspect-ratio: 16/9;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  margin-bottom: 20px;
}

.game-view {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
}

.score-display {
  font-size: 4rem;
  font-weight: 800;
  color: white;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.score-divider {
  font-size: 3rem;
  color: white;
  opacity: 0.8;
}

.game-timer {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
}

.payment-badge {
  background: #10B981;
  color: white;
  padding: 1rem;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.payment-check {
  width: 30px;
  height: 30px;
  background: white;
  color: #10B981;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
}

/* CTA Section */
.cta-section {
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #6D28D9 0%, #A78BFA 100%);
  color: white;
  text-align: center;
}

.cta-container {
  max-width: 900px;
  margin: 0 auto;
}

.cta-section h2 {
  color: white;
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.cta-section p {
  font-size: 1.3rem;
  margin-bottom: 3rem;
  opacity: 0.9;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.cta-section .cta-button {
  background: white;
  color: #6D28D9;
}

/* Responsive Styles */
@media (max-width: 1200px) {
  .hero {
    grid-template-columns: 1fr;
    min-height: auto;
    padding: 4rem 2rem;
    text-align: center;
  }

  .hero h1::after {
    left: 50%;
    transform: translateX(-50%);
  }

  .hero-content {
    margin: 0 auto 4rem;
  }

  .stadium-visual {
    max-width: 300px;
  }

  .billing-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .billing-content {
    text-align: center;
  }
  
  .billing-content h2 {
    text-align: center;
  }
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.8rem;
  }

  .subtitle {
    font-size: 1.3rem;
  }

  .matches-grid {
    grid-template-columns: 1fr;
  }

  .match-teams {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .vs-divider {
    margin: 0;
  }

  .home-team, .away-team {
    justify-content: center;
    text-align: center;
  }

  .home-team .team-logo, .away-team .team-logo {
    margin: 0 0 0.5rem;
  }

  .team-info {
    align-items: center;
  }

  .categories-grid {
    grid-template-columns: 1fr;
  }

  .events-grid {
    grid-template-columns: 1fr;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .highlights-grid {
    grid-template-columns: 1fr;
  }

  .testimonials-container {
    flex-direction: column;
    gap: 2rem;
  }

  .nav-button {
    margin: 0;
  }

  .testimonial {
    padding: 2rem;
  }

  .cta-section h2 {
    font-size: 2.5rem;
  }
}

@media (max-width: 640px) {
  .hero {
    padding: 3rem 1.5rem;
  }

  .hero h1 {
    font-size: 2.5rem;
  }

  .subtitle {
    font-size: 1.2rem;
  }
  
  h2 {
    font-size: 2rem;
  }

  .section-container {
    padding: 0 1.5rem;
  }

  section {
    padding: 4rem 0;
  }

  .stadium-visual {
    max-width: 250px;
    height: 180px;
  }

  .scoreboard {
    padding: 0.8rem 1.5rem;
  }

  .team-score {
    font-size: 2.5rem;
  }

  .cta-section h2 {
    font-size: 2rem;
  }

  .cta-section p {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }

  .cta-button.large {
    padding: 1rem 2.5rem;
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .hero h1 {
    font-size: 2.2rem;
  }

  .highlight-image {
    height: 180px;
  }

  .pricing-box {
    padding: 1.5rem;
  }

  .price {
    font-size: 2.5rem;
  }

  .cta-section h2 {
    font-size: 1.8rem;
  }

  .payment-badge {
    flex-direction: column;
    padding: 0.8rem;
    gap: 0.5rem;
    align-items: center;
  }
}
</style>