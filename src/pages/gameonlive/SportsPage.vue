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
      name: 'Bayern Munich',
      logo: 'https://images.pexels.com/photos/2570139/pexels-photo-2570139.jpeg',
      score: 2
    },
    awayTeam: {
      name: 'Real Madrid',
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
      logo: 'https://images.pexels.com/photos/1432045/pexels-photo-1432045.jpeg',
      score: 2
    },
    awayTeam: {
      name: 'Nadal',
      logo: 'https://images.pexels.com/photos/8224/pexels-photo.jpg',
      score: 1
    },
    time: 'Set 3',
    league: 'Wimbledon',
    status: 'LIVE'
  }
]);

const upcomingEvents = ref([
  {
    title: 'Champions League Final',
    teams: 'Chelsea vs. Barcelona',
    date: 'July 15, 2025',
    time: '20:00 GMT',
    venue: 'Wembley Stadium, London',
    image: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg'
  },
  {
    title: 'NBA Finals Game 1',
    teams: 'Lakers vs. Bucks',
    date: 'July 5, 2025',
    time: '21:30 GMT',
    venue: 'Staples Center, Los Angeles',
    image: 'https://images.pexels.com/photos/358042/pexels-photo-358042.jpeg'
  },
  {
    title: 'Tennis Grand Slam Final',
    teams: 'Williams vs. Osaka',
    date: 'August 10, 2025',
    time: '14:00 GMT',
    venue: 'Arthur Ashe Stadium, New York',
    image: 'https://images.pexels.com/photos/342361/pexels-photo-342361.jpeg'
  },
  {
    title: 'Formula 1 Monaco GP',
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
    description: 'Watch every match in crystal clear HD quality with minimal buffering',
    icon: '📺'
  },
  {
    title: 'Multi-view Mode',
    description: 'Follow up to 4 events simultaneously in split-screen mode',
    icon: '🖵'
  },
  {
    title: 'Advanced Statistics',
    description: 'Access detailed real-time stats, analysis, and visualizations',
    icon: '📊'
  },
  {
    title: 'Instant Replays',
    description: 'Rewatch key moments with our instant replay functionality',
    icon: '⏪'
  },
  {
    title: 'Expert Commentary',
    description: 'Multiple audio tracks with expert commentary in various languages',
    icon: '🎙️'
  },
  {
    title: 'Personalized Alerts',
    description: 'Get notified about games and scores for your favorite teams',
    icon: '🔔'
  }
]);

const highlights = ref([
  {
    title: 'Premier League: Liverpool vs Arsenal Highlights',
    duration: '10:25',
    views: '1.2M',
    image: 'https://images.pexels.com/photos/140511/pexels-photo-140511.jpeg'
  },
  {
    title: 'NBA: Lakers vs. Warriors - Game Highlights',
    duration: '8:45',
    views: '987K',
    image: 'https://images.pexels.com/photos/358042/pexels-photo-358042.jpeg'
  },
  {
    title: 'Roland Garros: Best Moments of the Finals',
    duration: '12:30',
    views: '765K',
    image: 'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg'
  },
  {
    title: 'F1 Monaco GP: Race Highlights and Analysis',
    duration: '15:10',
    views: '1.5M',
    image: 'https://images.pexels.com/photos/39693/motorcycle-racer-racing-race-speed-39693.jpeg'
  },
  {
    title: 'Top 10 Goals of the Week: Football Special',
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
    text: "The multi-view feature is a game-changer for busy sports weekends. Being able to watch four games at once is incredible!",
    name: "James T.",
    location: "Manchester, UK"
  },
  {
    text: "The video quality and real-time stats are outstanding. GameOnLive offers the most comprehensive sports package I've ever used.",
    name: "Sarah L.",
    location: "Toronto, Canada"
  },
  {
    text: "As a sports enthusiast who follows multiple leagues, having everything in one place with mobile billing has simplified my life.",
    name: "Carlos R.",
    location: "Madrid, Spain"
  }
]);

const currentTestimonial = ref(0);

const nextTestimonial = () => {
  currentTestimonial.value = (currentTestimonial.value + 1) % testimonials.value.length;
};

const prevTestimonial = () => {
  currentTestimonial.value = (currentTestimonial.value - 1 + testimonials.value.length) % testimonials.value.length;
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
        <p class="subtitle">Never miss a game with our comprehensive sports coverage</p>
        <button class="cta-button" @click="navigateToLogin">Watch Live Now</button>
      </div>
    </section>

    <!-- Live Matches Section -->
    <section class="live-matches">
      <div class="section-container">
        <div class="section-header">
          <h2>Live Now</h2>
          <p>Watch the action as it happens</p>
        </div>

        <div class="matches-grid">
          <div v-for="match in liveMatches" :key="match.homeTeam.name + match.awayTeam.name" 
               class="match-card">
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
      </div>
    </section>

    <!-- Sports Categories -->
    <section class="sports-categories">
      <div class="section-container">
        <div class="section-header">
          <h2>Explore Sports</h2>
          <p>Find your favorite sports and competitions</p>
        </div>

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
              <p class="category-desc">{{ category.description }}</p>
              <span v-if="category.popular" class="popular-tag">Popular</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Upcoming Events -->
    <section class="upcoming-events">
      <div class="section-container">
        <div class="section-header">
          <h2>Upcoming Events</h2>
          <p>Mark your calendar for these major sporting events</p>
        </div>

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
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <div class="section-container">
        <div class="section-header">
          <h2>Premium Sports Features</h2>
          <p>Enhanced viewing experiences for every sports fan</p>
        </div>

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
        <div class="section-header">
          <h2>Top Highlights</h2>
          <p>Catch up on the best moments you might have missed</p>
        </div>

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
        <div class="section-header">
          <h2>What Sports Fans Say</h2>
        </div>

        <div class="testimonial-carousel">
          <button @click="prevTestimonial" class="testimonial-nav prev">❮</button>
          <div class="testimonial">
            <p class="testimonial-text">"{{ testimonials[currentTestimonial].text }}"</p>
            <div class="testimonial-author">
              <p class="author-name">{{ testimonials[currentTestimonial].name }}</p>
              <p class="author-location">{{ testimonials[currentTestimonial].location }}</p>
            </div>
          </div>
          <button @click="nextTestimonial" class="testimonial-nav next">❯</button>
        </div>

        <div class="testimonial-indicators">
          <span v-for="(_, index) in testimonials" :key="index" 
                class="indicator" :class="{ active: index === currentTestimonial }"
                @click="currentTestimonial = index"></span>
        </div>
      </div>
    </section>

    <!-- Mobile Billing Section -->
    <section class="billing-section">
      <div class="section-container">
        <div class="section-header">
          <h2>Sports Premium Package</h2>
          <p>Get unlimited access to all sports content with simple mobile billing</p>
        </div>

        <div class="billing-container">
          <div class="billing-features">
            <div class="feature-item">
              <div class="icon-wrapper">
                <span class="feature-icon">🏆</span>
              </div>
              <div class="feature-content">
                <h3>Every Major Competition</h3>
                <p>Access to all premium leagues and tournaments across football, basketball, tennis, and more</p>
              </div>
            </div>
            <div class="feature-item">
              <div class="icon-wrapper">
                <span class="feature-icon">📱</span>
              </div>
              <div class="feature-content">
                <h3>Easy Mobile Payment</h3>
                <p>Just $14.99/month added directly to your phone bill - no credit card needed</p>
              </div>
            </div>
            <div class="feature-item">
              <div class="icon-wrapper">
                <span class="feature-icon">📊</span>
              </div>
              <div class="feature-content">
                <h3>Enhanced Viewing Experience</h3>
                <p>Multi-view capability, real-time statistics, and expert commentary options</p>
              </div>
            </div>
            <div class="feature-item">
              <div class="icon-wrapper">
                <span class="feature-icon">🏟️</span>
              </div>
              <div class="feature-content">
                <h3>Multiple Devices</h3>
                <p>Stream on your TV, tablet, or phone - at home or on the go</p>
              </div>
            </div>
          </div>
          
          <div class="billing-cta">
            <div class="price-tag">
              <span class="price-amount">$14.99</span>
              <span class="price-period">/month</span>
            </div>
            <p class="billing-note">Billed directly through your mobile carrier - no credit card needed</p>
            <button class="billing-button" @click="navigateToLogin">Subscribe Now</button>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-content">
        <h2>Ready for Non-Stop Sports Action?</h2>
        <p>Join millions of fans enjoying premium sports content worldwide</p>
        <button class="cta-button" @click="navigateToLogin">Get Started Now</button>
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
  background: linear-gradient(135deg, #0055FF 0%, #00CCFF 100%);
  background-image: url('https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg');
  background-size: cover;
  background-position: center;
  background-blend-mode: overlay;
  color: white;
  padding: 10rem 2rem 8rem;
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
  background: linear-gradient(135deg, rgba(0, 85, 255, 0.85) 0%, rgba(0, 204, 255, 0.85) 100%);
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
}

.hero h1 {
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  text-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.subtitle {
  font-size: 1.5rem;
  opacity: 0.9;
  margin-bottom: 2.5rem;
}

.cta-button {
  background: white;
  color: #0055FF;
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

/* Section Container */
.section-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 2rem;
}

.section-header {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;
}

.section-header h2 {
  color: #0055FF;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.section-header p {
  color: #666;
  font-size: 1.2rem;
}

/* Live Matches */
.live-matches {
  background: white;
}

.matches-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.match-card {
  background: #f5f8ff;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 10px 20px rgba(0, 85, 255, 0.07);
  transition: transform 0.3s ease;
}

.match-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 85, 255, 0.15);
}

.match-status {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
}

.status-indicator {
  width: 12px;
  height: 12px;
  background: #ff3b30;
  border-radius: 50%;
  margin-right: 0.5rem;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(255, 59, 48, 0.7);
  }
  
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(255, 59, 48, 0);
  }
  
  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(255, 59, 48, 0);
  }
}

.status-text {
  color: #ff3b30;
  font-weight: 600;
  font-size: 0.9rem;
}

.match-teams {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
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
  border: 2px solid #f0f0f0;
}

.team-name {
  font-weight: 600;
  color: #333;
  margin-bottom: 0.3rem;
  text-align: center;
  font-size: 1rem;
}

.team-score {
  font-size: 2rem;
  font-weight: 800;
  color: #0055FF;
}

.team-vs {
  margin: 0 1rem;
  color: #666;
  font-weight: 500;
}

.match-details {
  display: flex;
  justify-content: space-between;
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
}

.match-time {
  font-weight: 600;
}

.watch-button {
  background: #0055FF;
  color: white;
  width: 100%;
  padding: 0.9rem 0;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
}

.watch-button:hover {
  background: #00CCFF;
}

/* Sports Categories */
.sports-categories {
  background: #f5f8ff;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  gap: 2rem;
}

.category-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 85, 255, 0.07);
  transition: transform 0.3s ease;
  position: relative;
}

.category-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 85, 255, 0.15);
}

.category-card.popular {
  border-top: 4px solid #0055FF;
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
  background: #0055FF;
  color: white;
  padding: 0.8rem 1.8rem;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.explore-button:hover {
  background: #00CCFF;
  transform: scale(1.05);
}

.category-info {
  padding: 1.5rem;
}

.category-info h3 {
  color: #0055FF;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.category-desc {
  color: #666;
  font-size: 0.95rem;
  line-height: 1.5;
}

.popular-tag {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #0055FF;
  color: white;
  font-size: 0.7rem;
  padding: 0.25rem 0.5rem;
  border-radius: 50px;
}

/* Upcoming Events */
.upcoming-events {
  background: white;
}

.events-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 2rem;
}

.event-card {
  display: grid;
  grid-template-columns: 1fr 2fr;
  background: #f5f8ff;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 85, 255, 0.07);
  transition: transform 0.3s ease;
}

.event-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 85, 255, 0.15);
}

.event-image {
  position: relative;
  width: 100%;
  height: 100%;
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
  background: #0055FF;
  color: white;
  padding: 0.8rem 1.8rem;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
}

.reminder-button::before {
  content: '🔔';
  margin-right: 0.5rem;
}

.reminder-button:hover {
  background: #00CCFF;
  transform: scale(1.05);
}

.event-info {
  padding: 1.5rem 2rem;
}

.event-info h3 {
  color: #0055FF;
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
}

.event-teams {
  color: #333;
  font-weight: 600;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
}

.event-details {
  display: grid;
  gap: 0.8rem;
}

.detail {
  display: flex;
  align-items: center;
}

.detail-icon {
  margin-right: 0.8rem;
  color: #0055FF;
  font-size: 1.1rem;
}

.detail-text {
  color: #444;
}

/* Features Section */
.features-section {
  background: #f5f8ff;
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
  box-shadow: 0 10px 20px rgba(0, 85, 255, 0.07);
  transition: transform 0.3s ease;
  text-align: center;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 85, 255, 0.15);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  display: block;
}

.feature-card h3 {
  color: #0055FF;
  font-size: 1.4rem;
  margin-bottom: 1rem;
}

.feature-card p {
  color: #444;
  line-height: 1.6;
}

/* Highlights Section */
.highlights-section {
  background: white;
}

.highlights-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  gap: 2rem;
}

.highlight-card {
  background: #f5f8ff;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 85, 255, 0.07);
  transition: transform 0.3s ease;
}

.highlight-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 85, 255, 0.15);
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
  background: #0055FF;
  color: white;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 85, 255, 0.3);
}

.play-highlight:hover {
  background: #00CCFF;
  transform: scale(1.1);
}

.highlight-duration {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: rgba(0,0,0,0.7);
  color: white;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  font-size: 0.8rem;
}

.highlight-info {
  padding: 1.5rem;
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

.highlight-views {
  color: #666;
  font-size: 0.9rem;
}

/* Testimonials */
.testimonials-section {
  background: #f5f8ff;
}

.testimonial-carousel {
  display: flex;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
  gap: 2rem;
}

.testimonial {
  background: white;
  padding: 2.5rem;
  border-radius: 1rem;
  box-shadow: 0 10px 20px rgba(0, 85, 255, 0.07);
  flex: 1;
}

.testimonial-text {
  font-size: 1.2rem;
  font-style: italic;
  color: #444;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  position: relative;
}

.testimonial-text::before,
.testimonial-text::after {
  content: '"';
  font-size: 2rem;
  color: #0055FF;
  font-family: Georgia, serif;
}

.testimonial-author {
  text-align: right;
}

.author-name {
  color: #0055FF;
  font-weight: 700;
  margin-bottom: 0.3rem;
}

.author-location {
  color: #666;
  font-size: 0.9rem;
}

.testimonial-nav {
  width: 45px;
  height: 45px;
  background: #0055FF;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 85, 255, 0.2);
}

.testimonial-nav:hover {
  background: #00CCFF;
  transform: scale(1.1);
}

.testimonial-indicators {
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  margin-top: 2rem;
}

.indicator {
  width: 10px;
  height: 10px;
  background: #ddd;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator.active {
  background: #0055FF;
  transform: scale(1.2);
}

/* Billing Section */
.billing-section {
  background: white;
}

.billing-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.billing-features {
  display: grid;
  gap: 2rem;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
}

.icon-wrapper {
  background: #f5f8ff;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.icon-wrapper .feature-icon {
  font-size: 2.5rem;
}

.feature-content h3 {
  color: #0055FF;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.feature-content p {
  color: #444;
  line-height: 1.5;
  font-size: 1rem;
}

.billing-cta {
  background: #f5f8ff;
  padding: 3rem;
  border-radius: 1rem;
  text-align: center;
  box-shadow: 0 10px 20px rgba(0, 85, 255, 0.07);
}

.price-tag {
  margin-bottom: 2rem;
}

.price-amount {
  font-size: 3.5rem;
  font-weight: 800;
  color: #0055FF;
}

.price-period {
  font-size: 1.2rem;
  color: #666;
}

.billing-note {
  color: #666;
  margin-bottom: 2rem;
  font-style: italic;
}

.billing-button {
  background: #0055FF;
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
  background: #00CCFF;
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 85, 255, 0.2);
}

/* CTA Section */
.cta-section {
  background: linear-gradient(135deg, #0055FF 0%, #00CCFF 100%);
  color: white;
  text-align: center;
  padding: 5rem 2rem;
}

.cta-content {
  max-width: 800px;
  margin: 0 auto;
}

.cta-section h2 {
  font-size: 2.8rem;
  margin-bottom: 1.5rem;
}

.cta-section p {
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  opacity: 0.9;
}

.cta-section .cta-button {
  background: white;
  color: #0055FF;
}

.cta-section .cta-button:hover {
  background: #f5f5f5;
}

/* Responsive Styles */
@media (max-width: 1200px) {
  .events-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 992px) {
  .billing-container {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .event-card {
    grid-template-columns: 1fr;
  }
  
  .event-image {
    height: 200px;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 8rem 1.5rem 6rem;
  }
  
  .hero h1 {
    font-size: 3rem;
  }
  
  .section-container {
    padding: 4rem 1.5rem;
  }
  
  .section-header h2 {
    font-size: 2rem;
  }
  
  .matches-grid {
    grid-template-columns: 1fr;
  }
  
  .highlights-grid {
    grid-template-columns: 1fr;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .testimonial-carousel {
    flex-direction: column;
  }
  
  .testimonial-nav {
    margin: 1rem 0;
  }
  
  .cta-section h2 {
    font-size: 2.2rem;
  }
  
  .feature-item {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .icon-wrapper {
    margin-bottom: 1rem;
  }
}

@media (max-width: 576px) {
  .hero h1 {
    font-size: 2.5rem;
  }
  
  .cta-button {
    padding: 0.8rem 2rem;
    font-size: 1rem;
  }
  
  .price-amount {
    font-size: 3rem;
  }
  
  .billing-cta {
    padding: 2rem 1.5rem;
  }
  
  .cta-section h2 {
    font-size: 1.8rem;
  }
}
</style>