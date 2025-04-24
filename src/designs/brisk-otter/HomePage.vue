<script setup>
import { ref } from 'vue';

const entertainmentSections = ref([
  {
    title: 'Music Library',
    description: 'Vast collection of premium music tracks across all genres, from chart-toppers to indie gems.',
    image: 'https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg',
    features: ['High-Quality Audio', 'Offline Downloads', 'Curated Playlists']
  },
  {
    title: 'Mobile Games',
    description: 'Exciting mobile games with stunning graphics and engaging gameplay for all ages.',
    image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg',
    features: ['Regular Updates', 'Multiplayer Support', 'Cloud Saves']
  },
  {
    title: 'Video Content',
    description: 'Premium video content including movies, series, and exclusive productions.',
    image: 'https://images.pexels.com/photos/918281/pexels-photo-918281.jpeg',
    features: ['4K Streaming', 'Multiple Languages', 'Download & Watch']
  },
  {
    title: 'Audio Library',
    description: 'Extensive collection of audiobooks and podcasts from top creators and publishers.',
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
    features: ['Professional Narration', 'Bookmark Sync', 'Sleep Timer']
  },
  {
    title: 'Sports Coverage',
    description: 'Live sports streaming, highlights, and exclusive behind-the-scenes content.',
    image: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg',
    features: ['Live Streaming', 'Match Highlights', 'Expert Commentary']
  }
]);

const testimonials = ref([
  {
    text: "The best mobile entertainment platform I've ever used. Amazing content variety!",
    author: "Michael Chang",
    role: "Regular Subscriber"
  },
  {
    text: "Their sports coverage is unmatched. Never miss a game now!",
    author: "Lisa Rodriguez",
    role: "Sports Fan"
  },
  {
    text: "The audio quality and content selection are exceptional.",
    author: "David Wilson",
    role: "Music Enthusiast"
  }
]);

const currentTestimonial = ref(0);

const nextTestimonial = () => {
  currentTestimonial.value = (currentTestimonial.value + 1) % testimonials.value.length;
};

const prevTestimonial = () => {
  currentTestimonial.value = currentTestimonial.value === 0 
    ? testimonials.value.length - 1 
    : currentTestimonial.value - 1;
};
</script>

<template>
  <div class="v2-homepage">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Your World of Entertainment</h1>
        <p class="subtitle">Premium mobile content at your fingertips</p>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="services-grid">
      <div v-for="section in entertainmentSections" :key="section.title" class="service-card">
        <div class="service-image">
          <img :src="section.image" :alt="section.title" />
        </div>
        <div class="service-content">
          <h2>{{ section.title }}</h2>
          <p>{{ section.description }}</p>
          <ul class="feature-list">
            <li v-for="feature in section.features" :key="feature">{{ feature }}</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="testimonials">
      <h2>What Our Users Say</h2>
      <div class="testimonial-slider">
        <button class="nav-button prev" @click="prevTestimonial">←</button>
        <div class="testimonial-content">
          <blockquote>{{ testimonials[currentTestimonial].text }}</blockquote>
          <div class="testimonial-author">
            <strong>{{ testimonials[currentTestimonial].author }}</strong>
            <span>{{ testimonials[currentTestimonial].role }}</span>
          </div>
        </div>
        <button class="nav-button next" @click="nextTestimonial">→</button>
      </div>
    </section>

    <!-- Subscribe -->
    <section class="contact">
      <div class="contact-container">
        <h2>Start Streaming Today</h2>
        <p>Join millions of happy users enjoying premium mobile entertainment</p>
        <form class="contact-form">
          <div class="form-group">
            <input type="email" placeholder="Your Email" class="form-input" />
          </div>
          <button type="submit" class="submit-btn">Get Started</button>
        </form>
      </div>
    </section>
  </div>
</template>

<style scoped>
.v2-homepage {
  background-color: #E8F5E9;
  min-height: 100vh;
  color: #2E7D32;
}

.hero {
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #4CAF50 0%, #81C784 100%);
  color: white;
  text-align: center;
}

.hero-content h1 {
  font-size: 4rem;
  margin-bottom: 1rem;
  font-weight: 800;
}

.subtitle {
  font-size: 1.5rem;
  opacity: 0.9;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.service-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.service-card:hover {
  transform: translateY(-10px);
}

.service-image img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.service-content {
  padding: 2rem;
}

.service-content h2 {
  color: #4CAF50;
  margin-bottom: 1rem;
  font-size: 1.8rem;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin-top: 1rem;
}

.feature-list li {
  padding: 0.5rem 0;
  color: #2E7D32;
  position: relative;
  padding-left: 1.5rem;
}

.feature-list li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: #81C784;
}

.testimonials {
  background: white;
  padding: 6rem 2rem;
  text-align: center;
}

.testimonials h2 {
  color: #4CAF50;
  margin-bottom: 3rem;
  font-size: 2.5rem;
}

.testimonial-slider {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  padding: 2rem;
}

.testimonial-content {
  min-height: 200px;
}

blockquote {
  font-size: 1.5rem;
  font-style: italic;
  color: #2E7D32;
  margin-bottom: 2rem;
}

.testimonial-author {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #4CAF50;
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.3s ease;
}

.nav-button:hover {
  background: #2E7D32;
}

.prev { left: 0; }
.next { right: 0; }

.contact {
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #81C784 0%, #4CAF50 100%);
  color: white;
}

.contact-container {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}

.contact h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.contact-form {
  margin-top: 3rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-input {
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 10px;
  background: rgba(255,255,255,0.9);
  color: #2E7D32;
}

.form-input::placeholder {
  color: #81C784;
}

.submit-btn {
  background: #2E7D32;
  color: white;
  border: none;
  padding: 1rem 3rem;
  border-radius: 10px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background 0.3s ease;
}

.submit-btn:hover {
  background: #1B5E20;
}

@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
  }

  .hero-content h1 {
    font-size: 2.5rem;
  }

  .service-image img {
    height: 200px;
  }
}
</style>