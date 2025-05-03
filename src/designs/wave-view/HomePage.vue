<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const entertainmentSections = ref([
  {
    title: 'Movies & Series',
    description: 'Dive into a world of cinematic excellence with our curated collection of films and series.',
    image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg',
    features: ['HD Streaming', 'Multiple Languages', 'Offline Downloads']
  },
  {
    title: 'Audiobooks',
    description: 'Listen to bestsellers and classics narrated by world-class voice artists.',
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
    features: ['Huge Library', 'Bookmark Sync', 'Sleep Timer']
  },
  {
    title: 'Games',
    description: 'Experience thrilling gameplay with our selection of premium mobile games.',
    image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg',
    features: ['Cloud Saves', 'Multiplayer', 'Regular Updates']
  },
  {
    title: 'Documentaries',
    description: 'Explore fascinating stories from around the world with our documentary collection.',
    image: 'https://images.pexels.com/photos/3876394/pexels-photo-3876394.jpeg',
    features: ['4K Quality', 'Expert Commentary', 'Exclusive Content']
  }
]);

const faqs = ref([
  {
    question: 'Can I cancel at any time?',
    answer: 'Yes you can cancel at any time'
  },
  {
    question: 'How can I signup?',
    answer: 'Go to the homepage and click Start watching now and follow instructions'
  },
  {
    question: 'In which countries is this available?',
    answer: 'Wave-view is only available in Switzerland at the moment but we are working on expanding soon.'
  },
  {
    question: 'What kind of content can I find?',
    answer: 'A big collection of movies, audiobooks, games and documentaries can be found inside.'
  },
  {
    question: "I've subscribed how do I access my content?",
    answer: 'You should have received an SMS with the link to your portal, if you lost it contact: support@wave-view.com'
  }
]);

const handleNavigation = (section) => {
  router.push(`/${section}`);
};

const handleStartWatching = () => {
  window.location.href = 'https://ch.wave-view.com/offer';
};
</script>

<template>
  <div class="wave-view-homepage">
    <!-- Navigation Buttons -->
    <div class="nav-buttons">
      <button 
        class="nav-button"
        @click="handleNavigation('movies')"
      >
        Movies
      </button>
      <button 
        class="nav-button"
        @click="handleNavigation('tvshows')"
      >
        TV Shows
      </button>
      <button 
        class="nav-button"
        @click="handleNavigation('livetv')"
      >
        Live TV
      </button>
    </div>

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Your Global Entertainment Hub</h1>
        <p class="subtitle">Stream Anywhere, Anytime in Switzerland</p>
        <button class="cta-button" @click="handleStartWatching">Start Watching Now</button>
      </div>
    </section>

    <!-- Entertainment Sections -->
    <section class="entertainment">
      <h2>Premium Entertainment</h2>
      <div class="content-grid">
        <div v-for="section in entertainmentSections" :key="section.title" class="content-card">
          <div class="card-image">
            <img :src="section.image" :alt="section.title" />
          </div>
          <div class="card-content">
            <h3>{{ section.title }}</h3>
            <p>{{ section.description }}</p>
            <ul class="features-list">
              <li v-for="feature in section.features" :key="feature">{{ feature }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq">
      <h2>Frequently Asked Questions</h2>
      <div class="faq-grid">
        <div v-for="faq in faqs" :key="faq.question" class="faq-item">
          <h3>{{ faq.question }}</h3>
          <p>{{ faq.answer }}</p>
        </div>
      </div>
    </section>

    <!-- Support Section -->
    <section class="support">
      <h2>Need Help?</h2>
      <p>Our support team is here to assist you 24/7</p>
      <a href="mailto:support@wave-view.com" class="support-button">Contact Support</a>
    </section>

    <!-- CTA Section -->
    <section class="cta">
      <h2>Ready to Start Streaming?</h2>
      <p>Join thousands of users enjoying premium entertainment</p>
      <button class="cta-button" @click="handleStartWatching">Get Started Now</button>
    </section>
  </div>
</template>

<style scoped>
.wave-view-homepage {
  color: #1a202c;
  padding-top: 64px;
}

.nav-buttons {
  position: fixed;
  top: 64px;
  left: 0;
  right: 0;
  background: #1a202c;
  padding: 1rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  z-index: 100;
}

.nav-button {
  background: transparent;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid rgba(255,255,255,0.2);
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.nav-button:hover {
  background: rgba(255,255,255,0.1);
  transform: translateY(-2px);
  border-color: rgba(255,255,255,0.4);
}

.hero {
  background: linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%);
  color: white;
  padding: 8rem 2rem;
  text-align: center;
  margin-top: 2rem;
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

.entertainment {
  padding: 6rem 2rem;
  background: #f8fafc;
}

.entertainment h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #3B82F6;
  margin-bottom: 3rem;
}

.content-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.content-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.content-card:hover {
  transform: translateY(-5px);
}

.card-image img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-content {
  padding: 2rem;
}

.card-content h3 {
  color: #3B82F6;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.features-list {
  list-style: none;
  padding: 0;
  margin-top: 1rem;
}

.features-list li {
  padding-left: 1.5rem;
  position: relative;
  margin-bottom: 0.5rem;
}

.features-list li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #3B82F6;
}

.faq {
  padding: 6rem 2rem;
  background: white;
}

.faq h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #3B82F6;
  margin-bottom: 3rem;
}

.faq-grid {
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  gap: 2rem;
}

.faq-item {
  background: #f8fafc;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.faq-item h3 {
  color: #3B82F6;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.support {
  padding: 6rem 2rem;
  background: #f8fafc;
  text-align: center;
}

.support h2 {
  font-size: 2.5rem;
  color: #3B82F6;
  margin-bottom: 1rem;
}

.support-button {
  display: inline-block;
  background: #3B82F6;
  color: white;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  text-decoration: none;
  margin-top: 2rem;
  transition: background 0.3s ease;
}

.support-button:hover {
  background: #2563eb;
}

.cta {
  background: linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%);
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
  color: #3B82F6;
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
  .nav-buttons {
    flex-direction: column;
    padding: 0.5rem;
  }

  .nav-button {
    width: 100%;
  }

  .hero {
    margin-top: 8rem;
  }

  .hero h1 {
    font-size: 2.5rem;
  }

  .content-grid {
    grid-template-columns: 1fr;
  }

  .cta h2 {
    font-size: 2rem;
  }
}
</style>