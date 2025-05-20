<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const heroSection = ref({
  title: "Stream. Play. Experience.",
  subtitle: "The Ultimate Mobile Entertainment Platform",
  description: "Everything you love - music, videos, games, sports, and books - in one place with simple phone billing."
});

const features = ref([
  {
    title: "Premium Content",
    description: "Access the best entertainment content with no compromise on quality",
    icon: "🌟"
  },
  {
    title: "Simple Billing",
    description: "Pay through your mobile carrier - no credit card needed",
    icon: "📱"
  },
  {
    title: "Multi-device",
    description: "Stream across all your devices with seamless synchronization",
    icon: "🔄"
  },
  {
    title: "Offline Mode",
    description: "Download content to enjoy when you're not connected",
    icon: "📥"
  }
]);

const contentSections = ref([
  {
    id: "music",
    title: "Music Streaming",
    description: "Millions of songs across every genre. From chart-topping hits to rare indie tracks, all in crystal-clear sound quality.",
    features: ["Hi-Fi Audio", "Personalized Playlists", "Offline Downloads", "Exclusive Releases"],
    image: "https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg",
    ctaText: "Explore Music",
    ctaLink: "/nextlevelstreams/music",
    bgColor: "#6D28D9",
    textColor: "white"
  },
  {
    id: "video",
    title: "Video Streaming",
    description: "Thousands of movies, TV shows, and documentaries available on demand in stunning HD and 4K quality.",
    features: ["4K Ultra HD", "Exclusive Content", "Multiple Profiles", "Downloads"],
    image: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg",
    ctaText: "Discover Videos",
    ctaLink: "/nextlevelstreams/video",
    bgColor: "#ffffff",
    textColor: "#1F2937"
  },
  {
    id: "sports",
    title: "Live Sports",
    description: "Never miss the action with live coverage of major sporting events from around the world.",
    features: ["Live Streaming", "Multi-camera Views", "Real-time Stats", "Game Highlights"],
    image: "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg",
    ctaText: "Watch Sports",
    ctaLink: "/nextlevelstreams/sports",
    bgColor: "#6D28D9",
    textColor: "white"
  },
  {
    id: "games",
    title: "Mobile Games",
    description: "Premium mobile games with no ads or in-app purchases. From casual puzzles to intense action games.",
    features: ["No Ads", "Cloud Saves", "Multiplayer", "Regular Updates"],
    image: "https://images.pexels.com/photos/159393/gamepad-video-game-controller-game-controller-controller-159393.jpeg",
    ctaText: "Play Games",
    ctaLink: "/nextlevelstreams/games",
    bgColor: "#ffffff",
    textColor: "#1F2937"
  },
  {
    id: "audiobooks",
    title: "Audiobook Library",
    description: "Thousands of audiobooks narrated by professional voice actors, from bestsellers to classics.",
    features: ["Professional Narration", "Sleep Timer", "Bookmarks", "Variable Speed"],
    image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg",
    ctaText: "Listen Now",
    ctaLink: "/nextlevelstreams/audiobooks",
    bgColor: "#6D28D9",
    textColor: "white"
  }
]);

const testimonials = ref([
  {
    text: "NextLevelStreams has completely transformed how I consume entertainment. Having everything in one place with the simplicity of mobile billing is incredible!",
    author: "Sarah M.",
    location: "Berlin"
  },
  {
    text: "The variety of content is amazing and the quality is better than any other streaming service I've tried. Definitely worth every penny!",
    author: "Thomas K.",
    location: "Paris"
  },
  {
    text: "I love that I can switch between listening to music, watching a show, and playing games - all with one subscription. The phone billing makes it so convenient.",
    author: "Elena R.",
    location: "Madrid"
  }
]);

const currentTestimonialIndex = ref(0);

const planOptions = ref([
  {
    name: "Basic",
    price: "€9.99",
    period: "/month",
    features: [
      "Access to music streaming",
      "Standard quality video",
      "Basic games selection",
      "Single device streaming"
    ],
    popular: false
  },
  {
    name: "Premium",
    price: "€14.99",
    period: "/month",
    features: [
      "Full access to all content categories",
      "HD video streaming",
      "Complete games library",
      "Two device streaming",
      "Offline downloads"
    ],
    popular: true
  },
  {
    name: "Family",
    price: "€19.99",
    period: "/month",
    features: [
      "All Premium features",
      "4K Ultra HD where available",
      "Family sharing (up to 5 profiles)",
      "Five device streaming",
      "Priority customer support"
    ],
    popular: false
  }
]);

const billingInfo = ref({
  title: "Simple Phone Billing",
  description: "NextLevelStreams is charged directly to your phone bill or prepaid balance. No credit card, no complicated forms - just easy, secure payments.",
  steps: [
    {
      title: "Choose Your Plan",
      description: "Select the subscription option that suits your needs",
      icon: "📋"
    },
    {
      title: "Verify Number",
      description: "Confirm your mobile number with a simple SMS verification",
      icon: "✉️"
    },
    {
      title: "Start Streaming",
      description: "Enjoy immediate access to all your entertainment",
      icon: "🎉"
    }
  ],
  supportedCarriers: "Works with all major mobile carriers"
});

const nextTestimonial = () => {
  currentTestimonialIndex.value = (currentTestimonialIndex.value + 1) % testimonials.value.length;
};

const prevTestimonial = () => {
  currentTestimonialIndex.value = (currentTestimonialIndex.value - 1 + testimonials.value.length) % testimonials.value.length;
};

const navigateToSection = (path) => {
  router.push(path);
};

const getStarted = () => {
  router.push('/login');
};
</script>

<template>
  <div class="homepage">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>{{ heroSection.title }}</h1>
        <p class="subtitle">{{ heroSection.subtitle }}</p>
        <p class="description">{{ heroSection.description }}</p>
        <button class="primary-button" @click="getStarted">Get Started</button>
      </div>
      <div class="hero-visual">
        <div class="device-mockup">
          <div class="device-screen">
            <div class="content-icon music"></div>
            <div class="content-icon video"></div>
            <div class="content-icon games"></div>
            <div class="content-icon sports"></div>
            <div class="content-icon books"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <div class="container">
        <h2>Why Choose NextLevelStreams?</h2>
        <div class="features-grid">
          <div v-for="feature in features" :key="feature.title" class="feature-card">
            <div class="feature-icon">{{ feature.icon }}</div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Content Sections -->
    <section v-for="(section, index) in contentSections" :key="section.id" 
             class="content-section" 
             :style="{ backgroundColor: section.bgColor, color: section.textColor }">
      <div class="container">
        <div class="content-grid" :class="{ 'reverse': index % 2 !== 0 }">
          <div class="content-info">
            <h2>{{ section.title }}</h2>
            <p class="content-description">{{ section.description }}</p>
            <ul class="content-features">
              <li v-for="feature in section.features" :key="feature">
                <span class="check-icon">✓</span> {{ feature }}
              </li>
            </ul>
            <button class="section-button" @click="navigateToSection(section.ctaLink)">
              {{ section.ctaText }}
            </button>
          </div>
          <div class="content-image">
            <img :src="section.image" :alt="section.title">
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials-section">
      <div class="container">
        <h2>What Our Users Say</h2>
        <div class="testimonials-container">
          <button @click="prevTestimonial" class="nav-button prev">&lt;</button>
          <div class="testimonial">
            <p class="testimonial-text">"{{ testimonials[currentTestimonialIndex].text }}"</p>
            <div class="testimonial-author">
              <p class="author-name">{{ testimonials[currentTestimonialIndex].author }}</p>
              <p class="author-location">{{ testimonials[currentTestimonialIndex].location }}</p>
            </div>
          </div>
          <button @click="nextTestimonial" class="nav-button next">&gt;</button>
        </div>
        <div class="testimonial-dots">
          <span v-for="(_, index) in testimonials" :key="index" 
                class="dot" :class="{ active: index === currentTestimonialIndex }"
                @click="currentTestimonialIndex = index"></span>
        </div>
      </div>
    </section>

    <!-- Plans Section -->
    <section class="plans-section">
      <div class="container">
        <h2>Choose Your Entertainment Plan</h2>
        <p class="section-subtitle">All plans include phone billing for easy payment</p>
        
        <div class="plans-grid">
          <div v-for="plan in planOptions" :key="plan.name" 
               class="plan-card" :class="{ 'popular': plan.popular }">
            <div v-if="plan.popular" class="popular-tag">Most Popular</div>
            <h3>{{ plan.name }}</h3>
            <div class="plan-price">
              <span class="price">{{ plan.price }}</span>
              <span class="period">{{ plan.period }}</span>
            </div>
            <ul class="plan-features">
              <li v-for="feature in plan.features" :key="feature">
                <span class="check-icon">✓</span> {{ feature }}
              </li>
            </ul>
            <button class="plan-button" @click="getStarted">Get Started</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Billing Section -->
    <section class="billing-section">
      <div class="container">
        <div class="billing-grid">
          <div class="billing-info">
            <h2>{{ billingInfo.title }}</h2>
            <p class="billing-description">{{ billingInfo.description }}</p>
            
            <div class="billing-steps">
              <div v-for="(step, index) in billingInfo.steps" :key="index" class="billing-step">
                <div class="step-icon">{{ step.icon }}</div>
                <div class="step-content">
                  <h3>{{ step.title }}</h3>
                  <p>{{ step.description }}</p>
                </div>
              </div>
            </div>
            
            <p class="carriers-note">{{ billingInfo.supportedCarriers }}</p>
            <button class="billing-button" @click="getStarted">Start Your Subscription</button>
          </div>
          <div class="billing-visual">
            <div class="phone-mockup">
              <div class="phone-screen">
                <div class="payment-screen">
                  <div class="payment-logo"></div>
                  <div class="payment-text">
                    <div class="payment-line"></div>
                    <div class="payment-line short"></div>
                  </div>
                  <div class="payment-confirmation">
                    <div class="confirmation-icon"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <h2>Ready to Experience NextLevelStreams?</h2>
        <p>Join millions of satisfied users enjoying premium entertainment with simple billing</p>
        <button class="primary-button large" @click="getStarted">Get Started Now</button>
      </div>
    </section>
  </div>
</template>

<style scoped>
.homepage {
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  color: #1F2937;
  overflow-x: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

h2 {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #6D28D9 0%, #A78BFA 100%);
  color: white;
  padding: 6rem 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 4rem;
  min-height: 90vh;
}

.hero-content {
  max-width: 600px;
}

.hero h1 {
  font-size: 4rem;
  font-weight: 900;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  background: linear-gradient(to right, #ffffff, #E9D5FF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subtitle {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #E9D5FF;
  font-weight: 600;
}

.description {
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  line-height: 1.6;
  opacity: 0.9;
}

.primary-button {
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

.primary-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.primary-button.large {
  font-size: 1.2rem;
  padding: 1.2rem 3rem;
}

.hero-visual {
  position: relative;
  display: flex;
  justify-content: center;
}

.device-mockup {
  width: 300px;
  height: 600px;
  background: #111;
  border-radius: 30px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
  padding: 10px;
  position: relative;
  border: 10px solid #333;
}

.device-screen {
  width: 100%;
  height: 100%;
  background: #000;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
}

.content-icon {
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  animation: float 6s infinite ease-in-out;
}

.content-icon.music {
  background: #FF0080;
  top: 10%;
  left: 20%;
  animation-delay: 0s;
}

.content-icon.video {
  background: #0070F3;
  top: 30%;
  right: 15%;
  animation-delay: 1s;
}

.content-icon.games {
  background: #00AEEF;
  bottom: 25%;
  left: 10%;
  animation-delay: 2s;
}

.content-icon.sports {
  background: #33CC33;
  bottom: 10%;
  right: 20%;
  animation-delay: 3s;
}

.content-icon.books {
  background: #FC6815;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-delay: 4s;
  width: 70px;
  height: 70px;
}

@keyframes float {
  0% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-15px) rotate(5deg);
  }
  100% {
    transform: translateY(0px) rotate(0deg);
  }
}

/* Features Section */
.features-section {
  padding: 6rem 2rem;
  background: white;
  text-align: center;
}

.features-section h2 {
  margin-bottom: 3rem;
  color: #6D28D9;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
}

.feature-card {
  background: white;
  padding: 2.5rem;
  border-radius: 1rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  position: relative;
  z-index: 1;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #6D28D9 0%, #A78BFA 100%);
  border-radius: 1rem;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-10px);
  color: white;
}

.feature-card:hover::before {
  opacity: 1;
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease;
}

.feature-card:hover .feature-icon {
  transform: scale(1.2);
}

.feature-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #6D28D9;
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
  color: #E9D5FF;
}

/* Content Sections */
.content-section {
  padding: 6rem 2rem;
  position: relative;
  overflow: hidden;
}

.content-section::before {
  content: '';
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  top: -150px;
  right: -150px;
  z-index: 0;
}

.content-section::after {
  content: '';
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  bottom: -100px;
  left: -100px;
  z-index: 0;
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;
}

.content-grid.reverse {
  direction: rtl;
}

.content-grid.reverse .content-info {
  direction: ltr;
}

.content-info h2 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.content-description {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.content-features {
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
}

.content-features li {
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
  font-weight: 500;
}

.check-icon {
  margin-right: 0.8rem;
  font-weight: bold;
  color: currentColor;
}

.section-button {
  background: transparent;
  color: currentColor;
  border: 2px solid currentColor;
  padding: 0.8rem 1.8rem;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.section-button:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-3px);
}

.content-image {
  position: relative;
  height: 400px;
  width: 100%;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
}

.content-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.content-grid:hover .content-image img {
  transform: scale(1.05);
}

/* Testimonials Section */
.testimonials-section {
  padding: 6rem 2rem;
  background: #F9FAFB;
  text-align: center;
}

.testimonials-section h2 {
  margin-bottom: 3rem;
  color: #6D28D9;
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
  border-radius: 1.5rem;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.05);
  flex: 1;
}

.testimonial-text {
  font-size: 1.3rem;
  font-style: italic;
  color: #1F2937;
  line-height: 1.7;
  margin-bottom: 2rem;
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
  cursor: pointer;
  margin: 0 2rem;
  border: none;
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
  margin-top: 2rem;
  gap: 0.8rem;
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

/* Plans Section */
.plans-section {
  padding: 6rem 2rem;
  background: white;
}

.plans-section h2 {
  text-align: center;
  color: #6D28D9;
  margin-bottom: 1rem;
}

.section-subtitle {
  text-align: center;
  color: #6B7280;
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto 3rem;
}

.plans-grid {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.plan-card {
  background: white;
  padding: 3rem 2rem;
  border-radius: 1.5rem;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.05);
  flex: 1;
  min-width: 300px;
  max-width: 350px;
  position: relative;
  transition: all 0.3s ease;
  text-align: center;
}

.plan-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);
}

.plan-card.popular {
  border: 2px solid #6D28D9;
  transform: scale(1.05);
  z-index: 1;
}

.plan-card.popular:hover {
  transform: scale(1.05) translateY(-10px);
}

.popular-tag {
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  background: #6D28D9;
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.9rem;
}

.plan-card h3 {
  color: #1F2937;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
}

.plan-price {
  margin-bottom: 2.5rem;
}

.price {
  color: #6D28D9;
  font-size: 3.5rem;
  font-weight: 800;
}

.period {
  color: #6B7280;
  font-size: 1.2rem;
}

.plan-features {
  list-style: none;
  padding: 0;
  margin-bottom: 2.5rem;
  text-align: left;
}

.plan-features li {
  padding: 0.8rem 0;
  border-bottom: 1px solid #E5E7EB;
  display: flex;
  align-items: center;
}

.plan-features li:last-child {
  border-bottom: none;
}

.plan-button {
  background: #6D28D9;
  color: white;
  padding: 1rem;
  width: 100%;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.plan-button:hover {
  background: #5B21B6;
  transform: translateY(-3px);
}

/* Billing Section */
.billing-section {
  padding: 6rem 2rem;
  background: #F9FAFB;
}

.billing-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.billing-info h2 {
  color: #6D28D9;
  margin-bottom: 1.5rem;
  text-align: left;
}

.billing-description {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 3rem;
  color: #4B5563;
}

.billing-steps {
  margin-bottom: 3rem;
}

.billing-step {
  display: flex;
  margin-bottom: 2rem;
}

.step-icon {
  width: 60px;
  height: 60px;
  background: #6D28D9;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-right: 1.5rem;
  flex-shrink: 0;
}

.step-content h3 {
  color: #1F2937;
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
}

.step-content p {
  color: #6B7280;
  line-height: 1.6;
}

.carriers-note {
  font-style: italic;
  color: #6B7280;
  margin-bottom: 2rem;
}

.billing-button {
  background: #6D28D9;
  color: white;
  padding: 1rem 2.5rem;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.billing-button:hover {
  background: #5B21B6;
  transform: translateY(-3px);
}

.billing-visual {
  position: relative;
  display: flex;
  justify-content: center;
}

.phone-mockup {
  width: 250px;
  height: 500px;
  background: #111;
  border-radius: 30px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
  padding: 8px;
  position: relative;
  border: 8px solid #333;
}

.phone-screen {
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 22px;
  overflow: hidden;
  position: relative;
}

.payment-screen {
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  height: 100%;
}

.payment-logo {
  width: 60px;
  height: 60px;
  border-radius: 15px;
  background: #6D28D9;
  margin: 0 auto 2rem;
}

.payment-text {
  flex: 1;
}

.payment-line {
  height: 10px;
  background: #E5E7EB;
  border-radius: 5px;
  margin-bottom: 1rem;
}

.payment-line.short {
  width: 70%;
}

.payment-confirmation {
  margin-top: auto;
  padding: 2rem 0;
}

.confirmation-icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #10B981;
  margin: 0 auto;
  position: relative;
}

.confirmation-icon::before,
.confirmation-icon::after {
  content: '';
  position: absolute;
  background: white;
}

.confirmation-icon::before {
  width: 40px;
  height: 8px;
  transform: rotate(45deg);
  left: 15px;
  top: 40px;
}

.confirmation-icon::after {
  width: 20px;
  height: 8px;
  transform: rotate(-45deg);
  left: 25px;
  top: 45px;
}

/* CTA Section */
.cta-section {
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #6D28D9 0%, #A78BFA 100%);
  color: white;
  text-align: center;
}

.cta-section h2 {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: white;
}

.cta-section p {
  font-size: 1.3rem;
  margin-bottom: 3rem;
  opacity: 0.9;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

/* Responsive Styles */
@media (max-width: 1200px) {
  .hero {
    grid-template-columns: 1fr;
    padding: 4rem 2rem;
    text-align: center;
  }

  .hero-content {
    max-width: 800px;
    margin: 0 auto;
  }

  .content-grid {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }

  .content-grid.reverse {
    direction: ltr;
  }

  .content-features {
    display: inline-block;
    text-align: left;
  }

  .billing-grid {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .billing-info h2 {
    text-align: center;
  }

  .billing-step {
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .step-icon {
    margin-right: 0;
    margin-bottom: 1rem;
  }

  .phone-mockup {
    margin-top: 3rem;
  }
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 3rem;
  }

  .subtitle {
    font-size: 1.5rem;
  }

  .description {
    font-size: 1.1rem;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .content-image {
    height: 300px;
  }

  .testimonials-container {
    flex-direction: column;
  }

  .nav-button {
    margin: 1rem 0;
  }

  .plans-grid {
    flex-direction: column;
    align-items: center;
  }

  .plan-card {
    width: 100%;
    max-width: 100%;
  }

  .plan-card.popular {
    transform: none;
  }

  .plan-card.popular:hover {
    transform: translateY(-10px);
  }

  .cta-section h2 {
    font-size: 2.5rem;
  }
}

@media (max-width: 480px) {
  .hero h1 {
    font-size: 2.5rem;
  }

  .hero {
    padding: 3rem 1.5rem;
  }

  section {
    padding: 4rem 1.5rem;
  }

  .testimonial {
    padding: 2rem 1.5rem;
  }

  .testimonial-text {
    font-size: 1.1rem;
  }

  .cta-section h2 {
    font-size: 2rem;
  }

  .cta-section p {
    font-size: 1.1rem;
  }

  .section-button,
  .plan-button,
  .billing-button,
  .primary-button {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }

  .primary-button.large {
    font-size: 1.1rem;
    padding: 1rem 2.5rem;
  }
}
</style>