<script setup>
import { ref } from 'vue';

const testimonials = ref([
  {
    text: "Absolutely amazing experience working together. The attention to detail was exceptional.",
    author: "Sarah Johnson",
    role: "Creative Director"
  },
  {
    text: "Transformed our vision into reality. Couldn't be happier with the results.",
    author: "Michael Chen",
    role: "Startup Founder"
  },
  {
    text: "Professional, creative, and incredibly responsive. A true partner in our success.",
    author: "Emma Thompson",
    role: "Marketing Lead"
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
  <div class="homepage">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Creating Digital Experiences</h1>
        <p class="subtitle">Where imagination meets innovation</p>
      </div>
    </section>

    <!-- About Section -->
    <section class="about">
      <div class="about-content">
        <div class="about-image">
          <img src="https://images.pexels.com/photos/3799821/pexels-photo-3799821.jpeg" 
               alt="Profile" 
               class="profile-image" />
        </div>
        <div class="about-text">
          <h2>About Us</h2>
          <p>We're passionate about creating beautiful, functional digital experiences that leave a lasting impression. Our approach combines creativity with technical expertise to deliver solutions that exceed expectations.</p>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="services">
      <h2>What We Do</h2>
      <div class="services-grid">
        <div class="service-card">
          <img src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg" 
               alt="Web Design" 
               class="service-icon" />
          <h3>Web Design</h3>
          <p>Creating beautiful, responsive websites that capture your brand's essence.</p>
        </div>
        <div class="service-card">
          <img src="https://images.pexels.com/photos/935979/pexels-photo-935979.jpeg" 
               alt="Development" 
               class="service-icon" />
          <h3>Development</h3>
          <p>Building robust applications with cutting-edge technologies.</p>
        </div>
        <div class="service-card">
          <img src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg" 
               alt="Strategy" 
               class="service-icon" />
          <h3>Strategy</h3>
          <p>Developing comprehensive digital strategies for your success.</p>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials">
      <h2>What People Say</h2>
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

    <!-- Contact Section -->
    <section class="contact">
      <h2>Get in Touch</h2>
      <p class="contact-intro">Let's discuss how we can bring your vision to life.</p>
      <form class="contact-form">
        <div class="form-group">
          <input type="text" placeholder="Your Name" required />
        </div>
        <div class="form-group">
          <input type="email" placeholder="Your Email" required />
        </div>
        <div class="form-group">
          <textarea placeholder="Your Message" required></textarea>
        </div>
        <button type="submit" class="submit-button">Send Message</button>
      </form>
    </section>
  </div>
</template>

<style scoped>
.homepage {
  font-family: 'Playfair Display', serif;
  color: #333;
}

/* Hero Section */
.hero {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  text-align: center;
}

.hero-content h1 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.subtitle {
  font-size: 1.5rem;
  color: #666;
}

/* About Section */
.about {
  padding: 6rem 2rem;
  background: #fff;
}

.about-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 4rem;
}

.profile-image {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
}

.about-text h2 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}

/* Services Section */
.services {
  padding: 6rem 2rem;
  background: #f8f9fa;
  text-align: center;
}

.services h2 {
  margin-bottom: 3rem;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.service-card {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  transition: transform 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
}

.service-icon {
  width: 80px;
  height: 80px;
  margin-bottom: 1.5rem;
  border-radius: 10px;
}

/* Testimonials Section */
.testimonials {
  padding: 6rem 2rem;
  background: #fff;
  text-align: center;
}

.testimonial-carousel {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  padding: 2rem 0;
}

.testimonial-content {
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.testimonial-text {
  font-size: 1.25rem;
  font-style: italic;
  margin-bottom: 1.5rem;
}

.testimonial-author {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.testimonial-role {
  color: #666;
}

.carousel-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #333;
}

.prev { left: 0; }
.next { right: 0; }

/* Contact Section */
.contact {
  padding: 6rem 2rem;
  background: #f8f9fa;
  text-align: center;
}

.contact-intro {
  max-width: 600px;
  margin: 0 auto 3rem;
  color: #666;
}

.contact-form {
  max-width: 600px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 1.5rem;
}

input, textarea {
  width: 100%;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
}

textarea {
  height: 150px;
  resize: vertical;
}

.submit-button {
  background: #333;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;
}

.submit-button:hover {
  background: #444;
}

@media (max-width: 768px) {
  .about-content {
    flex-direction: column;
    text-align: center;
  }

  .hero-content h1 {
    font-size: 2.5rem;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }
}
</style>