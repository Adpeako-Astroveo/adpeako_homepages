<script setup>
import { ref } from 'vue';

const entertainmentSections = ref([
  {
    title: 'Premium Movies',
    description: 'Stream the latest blockbusters and timeless classics in stunning 4K quality.',
    image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg',
    features: ['4K Streaming', 'Dolby Atmos', 'Offline Downloads']
  },
  {
    title: 'Music Collection',
    description: 'Discover millions of tracks and exclusive releases from your favorite artists.',
    image: 'https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg',
    features: ['Hi-Fi Audio', 'Custom Playlists', 'Live Lyrics']
  },
  {
    title: 'Gaming Hub',
    description: 'Access a vast library of mobile games with stunning graphics and multiplayer support.',
    image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg',
    features: ['Cloud Saves', 'Multiplayer', 'Achievements']
  }
]);

const features = ref([
  {
    title: 'Seamless Streaming',
    description: 'Enjoy uninterrupted entertainment across all your devices',
    icon: '🎯'
  },
  {
    title: 'Smart Recommendations',
    description: 'Discover content tailored to your preferences',
    icon: '🎲'
  },
  {
    title: 'Premium Quality',
    description: 'Experience entertainment in the highest quality',
    icon: '⭐'
  }
]);

const testimonials = ref([
  {
    text: "The streaming quality is exceptional. Best service I've used!",
    author: "James Wilson",
    role: "Premium Member"
  },
  {
    text: "Amazing selection of content and great recommendations.",
    author: "Sarah Chen",
    role: "Entertainment Enthusiast"
  },
  {
    text: "The mobile gaming experience is fantastic.",
    author: "Alex Rodriguez",
    role: "Gaming Fan"
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
  <div class="brisk-elm-homepage">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Premium Entertainment<br>Reimagined</h1>
        <p class="subtitle">Stream, Play, and Experience More</p>
        <div class="hero-features">
          <div v-for="feature in features" :key="feature.title" class="feature-card">
            <span class="feature-icon">{{ feature.icon }}</span>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Entertainment Sections -->
    <section class="entertainment-sections">
      <div v-for="section in entertainmentSections" :key="section.title" class="content-section">
        <div class="section-image">
          <img :src="section.image" :alt="section.title" />
        </div>
        <div class="section-content">
          <h2>{{ section.title }}</h2>
          <p>{{ section.description }}</p>
          <ul class="features-list">
            <li v-for="feature in section.features" :key="feature">{{ feature }}</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="testimonials">
      <h2>What Our Members Say</h2>
      <div class="testimonial-carousel">
        <button class="carousel-button prev" @click="prevTestimonial">&lt;</button>
        <div class="testimonial-content">
          <p class="testimonial-text">"{{ testimonials[currentTestimonial].text }}"</p>
          <p class="testimonial-author">{{ testimonials[currentTestimonial].author }}</p>
          <p class="testimonial-role">{{ testimonials[currentTestimonial].role }}</p>
        </div>
        <button class="carousel-button next" @click="nextTestimonial">&gt;</button>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <h2>Start Your Entertainment Journey</h2>
      <p>Join millions of satisfied members today</p>
      <button class="cta-button">Get Started</button>
    </section>
  </div>
</template>

<style scoped>
.brisk-elm-homepage {
  font-family: 'Inter', sans-serif;
  color: #2D3748;
}

.hero {
  min-height: 100vh;
  background: linear-gradient(135deg, #EBF8FF 0%, #BEE3F8 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  margin-top: 60px;
}

.hero-content {
  max-width: 1200px;
  text-align: center;
}

.hero h1 {
  font-size: 4rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #2B6CB0 0%, #4299E1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subtitle {
  font-size: 1.5rem;
  color: #4A5568;
  max-width: 800px;
  margin: 0 auto 3rem;
}

.hero-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  display: block;
}

.entertainment-sections {
  padding: 4rem 2rem;
}

.content-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 0;
  align-items: center;
}

.content-section:nth-child(even) {
  direction: rtl;
}

.content-section:nth-child(even) .section-content {
  direction: ltr;
}

.section-image img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 1rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.section-content {
  padding: 2rem;
}

.section-content h2 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #2B6CB0;
}

.section-content p {
  font-size: 1.2rem;
  color: #4A5568;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.features-list {
  list-style: none;
  padding: 0;
}

.features-list li {
  margin-bottom: 1rem;
  padding-left: 2rem;
  position: relative;
  color: #4A5568;
}

.features-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #4299E1;
  font-weight: bold;
}

.testimonials {
  background: #EBF8FF;
  padding: 6rem 2rem;
  text-align: center;
}

.testimonials h2 {
  font-size: 2.5rem;
  color: #2B6CB0;
  margin-bottom: 3rem;
}

.testimonial-carousel {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  padding: 2rem;
}

.testimonial-content {
  min-height: 200px;
}

.testimonial-text {
  font-size: 1.25rem;
  font-style: italic;
  margin-bottom: 1.5rem;
  color: #2D3748;
}

.testimonial-author {
  font-weight: bold;
  color: #2B6CB0;
  margin-bottom: 0.5rem;
}

.testimonial-role {
  color: #4A5568;
}

.carousel-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #4299E1;
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.3s ease;
}

.carousel-button:hover {
  background: #2B6CB0;
}

.prev { left: 0; }
.next { right: 0; }

.cta-section {
  background: linear-gradient(135deg, #2B6CB0 0%, #4299E1 100%);
  color: white;
  text-align: center;
  padding: 6rem 2rem;
}

.cta-section h2 {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.cta-section p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.cta-button {
  background: white;
  color: #2B6CB0;
  font-size: 1.2rem;
  padding: 1rem 2.5rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.cta-button:hover {
  background: #EBF8FF;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.5rem;
  }

  .content-section {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 2rem 0;
  }

  .content-section:nth-child(even) {
    direction: ltr;
  }

  .section-image img {
    height: 300px;
  }

  .cta-section h2 {
    font-size: 2rem;
  }
}
</style>