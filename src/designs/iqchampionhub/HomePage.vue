<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const sections = ref([
  {
    id: 'music',
    title: 'Premium Music Streaming',
    description: 'Unlimited access to millions of songs, with offline listening and personalized playlists.',
    image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg',
    buttonText: 'Explore Music',
    path: '/iqchampionhub/music'
  },
  {
    id: 'video',
    title: 'HD Video Streaming',
    description: 'Watch thousands of movies and TV shows in stunning high definition, anytime, anywhere.',
    image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg',
    buttonText: 'Discover Videos',
    path: '/iqchampionhub/video'
  },
  {
    id: 'sports',
    title: 'Live Sports Coverage',
    description: 'Never miss a game with our extensive live sports coverage from around the world.',
    image: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg',
    buttonText: 'Watch Sports',
    path: '/iqchampionhub/sports'
  },
  {
    id: 'games',
    title: 'Mobile Gaming Hub',
    description: 'Access hundreds of premium games without ads or in-app purchases.',
    image: 'https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg',
    buttonText: 'Play Games',
    path: '/iqchampionhub/games'
  },
  {
    id: 'audiobooks',
    title: 'Audiobook Library',
    description: 'Listen to bestselling audiobooks narrated by world-class voice artists.',
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
    buttonText: 'Discover Audiobooks',
    path: '/iqchampionhub/audiobooks'
  },
  {
    id: 'payment',
    title: 'Simple Phone Billing',
    description: 'Subscribe to our services with just your phone number. All charges appear directly on your phone bill.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
    buttonText: 'Payment Info',
    path: '/iqchampionhub/payment'
  }
]);

const features = ref([
  {
    title: 'No Credit Card Required',
    description: 'Pay directly through your phone bill with no need for credit cards or bank details',
    icon: '💳'
  },
  {
    title: 'Instant Access',
    description: 'Start enjoying premium content immediately after subscribing',
    icon: '⚡'
  },
  {
    title: 'One Subscription, Multiple Services',
    description: 'Access all our services with a single subscription',
    icon: '🔑'
  },
  {
    title: 'Download for Offline Use',
    description: 'Enjoy your content without an internet connection',
    icon: '📱'
  }
]);

const testimonials = ref([
  {
    name: 'Sarah Johnson',
    text: 'I love being able to access so much content without needing a separate subscription for each service. The phone billing makes it so convenient!',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg'
  },
  {
    name: 'Michael Chen',
    text: 'The quality of both the music and video streaming is exceptional. Being able to download content for my commute has been a game-changer.',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'
  },
  {
    name: 'Aisha Patel',
    text: 'As someone who doesn\'t like sharing my credit card details online, the phone billing option is perfect. Plus the content library is massive!',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg'
  }
]);

const handleNavigate = (path) => {
  router.push(path);
};
</script>

<template>
  <div class="home-container">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Your Ultimate Mobile Entertainment Hub</h1>
        <p>Access premium music, videos, sports, games, and audiobooks with a simple subscription billed directly to your phone.</p>
        <div class="cta-buttons">
          <button @click="handleNavigate('/login')" class="primary-btn">Get Started</button>
          <button @click="handleNavigate('/iqchampionhub/payment')" class="secondary-btn">Learn About Billing</button>
        </div>
      </div>
    </section>

    <!-- Features Grid -->
    <section class="features-section">
      <div class="container">
        <h2>Why Choose IQ Champion Hub?</h2>
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
    <section v-for="section in sections" :key="section.id" :id="section.id" class="content-section">
      <div class="container">
        <div class="content-grid">
          <div class="content-image">
            <img :src="section.image" :alt="section.title">
          </div>
          <div class="content-text">
            <h2>{{ section.title }}</h2>
            <p>{{ section.description }}</p>
            <button @click="handleNavigate(section.path)" class="section-btn">{{ section.buttonText }}</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="testimonials-section">
      <div class="container">
        <h2>What Our Users Say</h2>
        <div class="testimonials-grid">
          <div v-for="testimonial in testimonials" :key="testimonial.name" class="testimonial-card">
            <div class="testimonial-avatar">
              <img :src="testimonial.avatar" :alt="testimonial.name">
            </div>
            <p class="testimonial-text">"{{ testimonial.text }}"</p>
            <p class="testimonial-name">- {{ testimonial.name }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <h2>Ready to Unlock Premium Entertainment?</h2>
        <p>Join millions of satisfied users enjoying unlimited content on their mobile devices</p>
        <button @click="handleNavigate('/login')" class="primary-btn large">Start Your Free Trial Today</button>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-container {
  min-height: 100vh;
  color: #333;
  padding-top: 65px;
}

/* Container */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #6C63FF 0%, #FF6584 100%);
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
  background: url('https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg') center/cover no-repeat;
  opacity: 0.15;
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

.hero p {
  font-size: 1.5rem;
  margin-bottom: 2.5rem;
  opacity: 0.9;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;
}

.primary-btn {
  background: #44C7B0;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 1rem 2rem;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(68, 199, 176, 0.4);
}

.primary-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(68, 199, 176, 0.5);
}

.primary-btn.large {
  padding: 1.2rem 3rem;
  font-size: 1.3rem;
}

.secondary-btn {
  background: transparent;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 1rem 2rem;
  border-radius: 50px;
  border: 2px solid white;
  cursor: pointer;
  transition: all 0.3s ease;
}

.secondary-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-3px);
}

/* Features Section */
.features-section {
  padding: 5rem 2rem;
  background: #f9f9f9;
  text-align: center;
}

.features-section h2 {
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #6C63FF;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.15);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.feature-card h3 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #6C63FF;
}

.feature-card p {
  color: #666;
  font-size: 0.95rem;
  line-height: 1.6;
}

/* Content Sections */
.content-section {
  padding: 5rem 2rem;
}

.content-section:nth-child(odd) {
  background: white;
}

.content-section:nth-child(even) {
  background: #f9f9f9;
}

.content-grid {
  display: flex;
  align-items: center;
  gap: 3rem;
}

.content-section:nth-child(odd) .content-grid {
  flex-direction: row-reverse;
}

.content-image {
  flex: 1;
}

.content-image img {
  width: 100%;
  height: auto;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
  transition: all 0.3s ease;
}

.content-image img:hover {
  transform: scale(1.03);
  box-shadow: 0 15px 40px rgba(0,0,0,0.2);
}

.content-text {
  flex: 1;
}

.content-text h2 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #6C63FF;
}

.content-text p {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #555;
  margin-bottom: 2rem;
}

.section-btn {
  background: #44C7B0;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.8rem 1.8rem;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(68, 199, 176, 0.4);
}

.section-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(68, 199, 176, 0.5);
}

/* Testimonials */
.testimonials-section {
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #6C63FF 0%, #FF6584 100%);
  color: white;
  text-align: center;
}

.testimonials-section h2 {
  font-size: 2.5rem;
  margin-bottom: 3rem;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.testimonial-card {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 2rem;
  transition: all 0.3s ease;
}

.testimonial-card:hover {
  transform: translateY(-10px);
  background: rgba(255, 255, 255, 0.2);
}

.testimonial-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 1.5rem;
  border: 3px solid white;
}

.testimonial-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.testimonial-text {
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  font-style: italic;
}

.testimonial-name {
  font-weight: 600;
}

/* CTA Section */
.cta-section {
  padding: 7rem 2rem;
  text-align: center;
  background: #f9f9f9;
}

.cta-section h2 {
  font-size: 2.8rem;
  margin-bottom: 1.5rem;
  color: #6C63FF;
}

.cta-section p {
  font-size: 1.3rem;
  max-width: 800px;
  margin: 0 auto 2.5rem;
  color: #666;
}

/* Responsive Design */
@media (max-width: 992px) {
  .content-grid {
    flex-direction: column !important;
  }
  
  .content-image, .content-text {
    width: 100%;
  }
  
  .hero h1 {
    font-size: 2.8rem;
  }
  
  .hero p {
    font-size: 1.3rem;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 6rem 1.5rem;
  }
  
  .hero h1 {
    font-size: 2.2rem;
  }
  
  .hero p {
    font-size: 1.1rem;
  }
  
  .cta-buttons {
    flex-direction: column;
    gap: 1rem;
  }
  
  .content-section {
    padding: 4rem 1.5rem;
  }
  
  .content-text h2 {
    font-size: 2rem;
  }
  
  .testimonials-grid {
    grid-template-columns: 1fr;
  }
  
  .cta-section h2 {
    font-size: 2.2rem;
  }
  
  .cta-section p {
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .hero h1 {
    font-size: 1.8rem;
  }
  
  .features-section h2,
  .content-text h2,
  .testimonials-section h2,
  .cta-section h2 {
    font-size: 1.8rem;
  }
  
  .content-text p, 
  .testimonial-text {
    font-size: 1rem;
  }
  
  .primary-btn, .secondary-btn, .section-btn {
    padding: 0.7rem 1.5rem;
    font-size: 0.95rem;
  }
  
  .primary-btn.large {
    padding: 0.9rem 2rem;
    font-size: 1.1rem;
  }
}
</style>