<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const handleLogin = () => {
  router.push('/login');
};

const features = ref([
  {
    title: 'Ultra HD Streaming',
    description: 'Enjoy crystal clear video quality with 4K resolution and HDR support.',
    icon: '🎬'
  },
  {
    title: 'Ad-Free Experience',
    description: 'No interruptions. Just pure, uninterrupted entertainment.',
    icon: '🚫'
  },
  {
    title: 'Unlimited Downloads',
    description: 'Save your favorite content for offline viewing anytime, anywhere.',
    icon: '📱'
  },
  {
    title: 'Multi-Device Access',
    description: 'Seamlessly switch between your TV, phone, tablet, and computer.',
    icon: '💻'
  }
]);

const categories = ref([
  {
    title: 'Movies',
    icon: '🎬',
    description: 'Blockbusters, indies, classics and more',
    image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg'
  },
  {
    title: 'TV Shows',
    icon: '📺',
    description: 'Binge-worthy series from around the world',
    image: 'https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg'
  },
  {
    title: 'Music',
    icon: '🎵',
    description: 'Millions of songs and exclusive albums',
    image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg'
  },
  {
    title: 'Sports',
    icon: '⚽',
    description: 'Live games, highlights, and documentaries',
    image: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg'
  },
  {
    title: 'Games',
    icon: '🎮',
    description: 'Premium mobile games with no ads or in-app purchases',
    image: 'https://images.pexels.com/photos/159393/game-controller-joystick-joypad-gamepad-159393.jpeg'
  },
  {
    title: 'Audiobooks',
    icon: '🎧',
    description: 'Best-selling titles read by award-winning narrators',
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg'
  }
]);

const featuredContent = ref([
  {
    title: 'The Lost Kingdom',
    type: 'Exclusive Series',
    image: 'https://images.pexels.com/photos/3131971/pexels-photo-3131971.jpeg',
    description: 'An epic tale of adventure, betrayal, and redemption in a mythical world.'
  },
  {
    title: 'Cosmic Journey',
    type: 'Documentary',
    image: 'https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg',
    description: 'Explore the mysteries of the universe with groundbreaking visuals and expert insights.'
  },
  {
    title: 'Harmony',
    type: 'Album',
    image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg',
    description: 'The latest album from Grammy-winning artist Luna featuring chart-topping hits.'
  }
]);

const testimonials = ref([
  {
    name: 'Sarah Johnson',
    location: 'New York, USA',
    comment: 'Timber Content has completely transformed how I enjoy entertainment. The variety and quality are unmatched!',
    avatar: 'https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg'
  },
  {
    name: 'David Chen',
    location: 'London, UK',
    comment: 'I\'ve tried many streaming platforms, but Timber Content stands out for its exclusive content and user-friendly interface.',
    avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg'
  },
  {
    name: 'Maria Rodriguez',
    location: 'Madrid, Spain',
    comment: 'The multiple entertainment options in one subscription is what keeps me loyal to Timber Content. Absolutely worth it!',
    avatar: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg'
  }
]);
</script>

<template>
  <div class="timber-content-homepage">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1>Your Ultimate Entertainment Hub</h1>
          <p class="subtitle">Movies, TV Shows, Music, Games, and Audiobooks — all in one subscription.</p>
          <button @click="handleLogin" class="cta-button">Login Now</button>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <div class="container">
        <h2>Premium Features</h2>
        <div class="features-grid">
          <div v-for="feature in features" :key="feature.title" class="feature-card">
            <div class="feature-icon">{{ feature.icon }}</div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Content Section -->
    <section class="featured-content">
      <div class="container">
        <h2>Featured Content</h2>
        <div class="content-grid">
          <div v-for="content in featuredContent" :key="content.title" class="content-card">
            <div class="content-image">
              <img :src="content.image" :alt="content.title">
              <div class="content-tag">{{ content.type }}</div>
            </div>
            <div class="content-info">
              <h3>{{ content.title }}</h3>
              <p>{{ content.description }}</p>
              <button @click="handleLogin" class="watch-button">Watch Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Categories Section -->
    <section class="categories">
      <div class="container">
        <h2>Entertainment Categories</h2>
        <div class="categories-grid">
          <div v-for="category in categories" :key="category.title" class="category-card">
            <div class="category-image">
              <img :src="category.image" :alt="category.title">
            </div>
            <div class="category-info">
              <span class="category-icon">{{ category.icon }}</span>
              <h3>{{ category.title }}</h3>
              <p>{{ category.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials">
      <div class="container">
        <h2>What Our Users Say</h2>
        <div class="testimonials-grid">
          <div v-for="testimonial in testimonials" :key="testimonial.name" class="testimonial-card">
            <div class="testimonial-content">
              <p>"{{ testimonial.comment }}"</p>
            </div>
            <div class="testimonial-author">
              <img :src="testimonial.avatar" :alt="testimonial.name" class="author-avatar">
              <div class="author-info">
                <h4>{{ testimonial.name }}</h4>
                <p>{{ testimonial.location }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta">
      <div class="container">
        <h2>Ready to start streaming?</h2>
        <p>All your favorite entertainment in one place. Anytime, anywhere.</p>
        <button @click="handleLogin" class="cta-button">Login Now</button>
      </div>
    </section>
  </div>
</template>

<style scoped>
.timber-content-homepage {
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
  color: #f8fafc;
  background-color: #0f172a;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Hero Section */
.hero {
  padding: 10rem 0 8rem;
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  text-align: center;
  position: relative;
}

.hero::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg') center/cover no-repeat;
  opacity: 0.1;
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
  background: linear-gradient(135deg, #38bdf8 0%, #818cf8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subtitle {
  font-size: 1.5rem;
  margin-bottom: 2.5rem;
  color: #cbd5e1;
}

.cta-button {
  background: linear-gradient(135deg, #38bdf8 0%, #818cf8 100%);
  color: #0f172a;
  font-size: 1.2rem;
  font-weight: 600;
  padding: 1rem 3rem;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(56, 189, 248, 0.4);
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(56, 189, 248, 0.5);
}

/* Features Section */
.features {
  padding: 6rem 0;
  background: #1e293b;
}

.features h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #f8fafc;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: #0f172a;
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  height: 100%;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.3);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.feature-card h3 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #f8fafc;
}

.feature-card p {
  color: #cbd5e1;
  font-size: 0.9rem;
  line-height: 1.6;
}

/* Featured Content Section */
.featured-content {
  padding: 6rem 0;
  background: #0f172a;
}

.featured-content h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #f8fafc;
}

.content-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
}

.content-card {
  background: #1e293b;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  transition: all 0.3s ease;
  height: 100%;
}

.content-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.4);
}

.content-image {
  position: relative;
  height: 200px;
}

.content-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.content-tag {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: linear-gradient(135deg, #38bdf8 0%, #818cf8 100%);
  color: #0f172a;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

.content-info {
  padding: 1.5rem;
}

.content-info h3 {
  font-size: 1.3rem;
  margin-bottom: 0.75rem;
  color: #f8fafc;
}

.content-info p {
  color: #cbd5e1;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.watch-button {
  background: transparent;
  color: #38bdf8;
  border: 1px solid #38bdf8;
  padding: 0.6rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.watch-button:hover {
  background: rgba(56, 189, 248, 0.1);
}

/* Categories Section */
.categories {
  padding: 6rem 0;
  background: #1e293b;
}

.categories h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #f8fafc;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
}

.category-card {
  background: #0f172a;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  transition: all 0.3s ease;
  height: 100%;
}

.category-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.4);
}

.category-image {
  height: 150px;
}

.category-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.category-info {
  padding: 1.5rem;
}

.category-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  display: block;
}

.category-info h3 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: #f8fafc;
}

.category-info p {
  color: #cbd5e1;
  font-size: 0.9rem;
}

/* Testimonials Section */
.testimonials {
  padding: 6rem 0;
  background: #0f172a;
}

.testimonials h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #f8fafc;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
}

.testimonial-card {
  background: #1e293b;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  transition: all 0.3s ease;
  height: 100%;
}

.testimonial-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.4);
}

.testimonial-content {
  margin-bottom: 1.5rem;
}

.testimonial-content p {
  color: #f8fafc;
  font-style: italic;
  line-height: 1.7;
  font-size: 1rem;
}

.testimonial-author {
  display: flex;
  align-items: center;
}

.author-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
}

.author-info h4 {
  color: #f8fafc;
  margin-bottom: 0.25rem;
  font-size: 1.1rem;
}

.author-info p {
  color: #cbd5e1;
  font-size: 0.9rem;
}

/* CTA Section */
.cta {
  padding: 6rem 0;
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  text-align: center;
}

.cta h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #f8fafc;
}

.cta p {
  color: #cbd5e1;
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

/* Responsive Styles */
@media (max-width: 1024px) {
  .container {
    padding: 0 1.5rem;
  }
  
  .hero h1 {
    font-size: 3rem;
  }
  
  .subtitle {
    font-size: 1.3rem;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 8rem 0 6rem;
  }
  
  .hero h1 {
    font-size: 2.5rem;
  }
  
  .subtitle {
    font-size: 1.1rem;
  }
  
  .cta-button {
    padding: 0.8rem 2.5rem;
  }
  
  .features-grid, 
  .content-grid, 
  .categories-grid, 
  .testimonials-grid {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
  
  section {
    padding: 4rem 0;
  }
  
  section h2 {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 6rem 0 4rem;
  }
  
  .hero h1 {
    font-size: 2rem;
  }
  
  .subtitle {
    font-size: 1rem;
  }
  
  .cta-button {
    padding: 0.8rem 2rem;
    font-size: 1rem;
  }
  
  .features-grid, 
  .content-grid, 
  .categories-grid, 
  .testimonials-grid {
    grid-template-columns: 1fr;
  }
  
  section {
    padding: 3rem 0;
  }
  
  section h2 {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }
  
  .feature-card,
  .content-card,
  .category-card,
  .testimonial-card {
    padding: 1.5rem;
  }
}
</style>