<template>
  <div class="timber-content-home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1>Unlimited Entertainment at Your Fingertips</h1>
          <p>Access premium music, videos, sports, games, and audiobooks all in one subscription.</p>
          <button class="cta-button">Start Your Free Trial</button>
        </div>
      </div>
    </section>

    <!-- Featured Content Section -->
    <section class="featured-content">
      <div class="container">
        <h2>Featured Content</h2>
        <div class="content-grid">
          <div class="content-card">
            <img src="https://images.pexels.com/photos/3944091/pexels-photo-3944091.jpeg" alt="Featured Music">
            <div class="content-info">
              <h3>Top Playlists</h3>
              <p>Curated collections for every mood and moment.</p>
            </div>
          </div>
          <div class="content-card">
            <img src="https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg" alt="Featured Video">
            <div class="content-info">
              <h3>New Releases</h3>
              <p>The latest blockbusters and exclusive series.</p>
            </div>
          </div>
          <div class="content-card">
            <img src="https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg" alt="Featured Sports">
            <div class="content-info">
              <h3>Live Matches</h3>
              <p>Stream major sporting events in real-time.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Entertainment Categories -->
    <section class="categories">
      <div class="container">
        <h2>Entertainment Categories</h2>
        <div class="categories-grid">
          <div class="category-card">
            <div class="icon">🎵</div>
            <h3>Music</h3>
            <p>Millions of songs across all genres.</p>
            <a href="/timber-content/music" class="category-link">Explore Music</a>
          </div>
          <div class="category-card">
            <div class="icon">🎬</div>
            <h3>Video</h3>
            <p>Movies, TV shows, and documentaries.</p>
            <a href="/timber-content/video" class="category-link">Explore Video</a>
          </div>
          <div class="category-card">
            <div class="icon">⚽</div>
            <h3>Sports</h3>
            <p>Live games and exclusive sports content.</p>
            <a href="/timber-content/sports" class="category-link">Explore Sports</a>
          </div>
          <div class="category-card">
            <div class="icon">🎮</div>
            <h3>Games</h3>
            <p>Premium mobile games with no ads.</p>
            <a href="/timber-content/games" class="category-link">Explore Games</a>
          </div>
          <div class="category-card">
            <div class="icon">📚</div>
            <h3>Audiobooks</h3>
            <p>Bestsellers narrated by premium voice talent.</p>
            <a href="/timber-content/audiobooks" class="category-link">Explore Audiobooks</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Subscription Plans -->
    <section class="subscription">
      <div class="container">
        <h2>Choose Your Plan</h2>
        <div class="plans-grid">
          <div class="plan-card">
            <h3>Basic</h3>
            <div class="price">$9.99<span>/month</span></div>
            <ul class="features">
              <li>Access to music streaming</li>
              <li>Limited video content</li>
              <li>Ad-supported experience</li>
              <li>Single device streaming</li>
            </ul>
            <button class="plan-button">Select Plan</button>
          </div>
          <div class="plan-card featured">
            <div class="badge">Popular</div>
            <h3>Premium</h3>
            <div class="price">$14.99<span>/month</span></div>
            <ul class="features">
              <li>Full access to all content</li>
              <li>Ad-free experience</li>
              <li>HD streaming quality</li>
              <li>Two device streaming</li>
            </ul>
            <button class="plan-button">Select Plan</button>
          </div>
          <div class="plan-card">
            <h3>Family</h3>
            <div class="price">$19.99<span>/month</span></div>
            <ul class="features">
              <li>Full access to all content</li>
              <li>Ad-free experience</li>
              <li>4K streaming where available</li>
              <li>Six device streaming</li>
              <li>Family controls</li>
            </ul>
            <button class="plan-button">Select Plan</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="testimonials">
      <div class="container">
        <h2>What Our Users Say</h2>
        <div class="testimonials-grid">
          <div class="testimonial-card">
            <div class="rating">★★★★★</div>
            <p class="quote">"The best all-in-one entertainment platform I've ever used. Worth every penny!"</p>
            <p class="user">- Sarah J.</p>
          </div>
          <div class="testimonial-card">
            <div class="rating">★★★★★</div>
            <p class="quote">"I cancelled all my other subscriptions. This has everything I need in one place."</p>
            <p class="user">- Michael T.</p>
          </div>
          <div class="testimonial-card">
            <div class="rating">★★★★☆</div>
            <p class="quote">"Great selection of content. The audiobook collection is particularly impressive."</p>
            <p class="user">- Emma R.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta">
      <div class="container">
        <h2>Ready to Start Your Entertainment Journey?</h2>
        <p>Join millions of satisfied users today. 30-day free trial available.</p>
        <button class="cta-button">Sign Up Now</button>
      </div>
    </section>
  </div>
</template>

<script setup>
// Component logic goes here
</script>

<style scoped>
.timber-content-home {
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
  color: #f5f5f5;
  background-color: #0f172a;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  padding: 120px 0 80px;
  text-align: center;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero h1 {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #38bdf8 0%, #818cf8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 40px;
  color: #cbd5e1;
}

.cta-button {
  background: linear-gradient(135deg, #38bdf8 0%, #818cf8 100%);
  color: #fff;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 12px 30px;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(56, 189, 248, 0.3);
}

/* Featured Content Section */
.featured-content {
  padding: 80px 0;
}

.featured-content h2, 
.categories h2, 
.subscription h2, 
.testimonials h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 50px;
  color: #38bdf8;
}

.content-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin: 0 auto;
}

.content-card {
  background: #1e293b;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
}

.content-card:hover {
  transform: translateY(-10px);
}

.content-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.content-info {
  padding: 20px;
}

.content-info h3 {
  color: #38bdf8;
  margin-bottom: 10px;
  font-size: 1.4rem;
}

.content-info p {
  color: #cbd5e1;
  font-size: 1rem;
}

/* Categories Section */
.categories {
  padding: 80px 0;
  background: #0f172a;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 30px;
  margin: 0 auto;
}

.category-card {
  background: #1e293b;
  border-radius: 16px;
  padding: 30px 20px;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.category-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
}

.icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.category-card h3 {
  color: #38bdf8;
  margin-bottom: 10px;
  font-size: 1.4rem;
}

.category-card p {
  color: #cbd5e1;
  margin-bottom: 20px;
  font-size: 0.95rem;
}

.category-link {
  display: inline-block;
  color: #38bdf8;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.category-link:hover {
  color: #818cf8;
}

/* Subscription Plans */
.subscription {
  padding: 80px 0;
  background: #1e293b;
}

.plans-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin: 0 auto;
}

.plan-card {
  background: #0f172a;
  border-radius: 16px;
  padding: 40px 30px;
  text-align: center;
  position: relative;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.plan-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
}

.plan-card.featured {
  border: 2px solid #38bdf8;
  transform: scale(1.05);
}

.plan-card.featured:hover {
  transform: scale(1.05) translateY(-10px);
}

.badge {
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  background: #38bdf8;
  color: #0f172a;
  font-weight: 600;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
}

.plan-card h3 {
  color: #38bdf8;
  font-size: 1.6rem;
  margin-bottom: 15px;
}

.price {
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 25px;
}

.price span {
  font-size: 1rem;
  font-weight: 400;
  color: #64748b;
}

.features {
  list-style: none;
  padding: 0;
  margin: 0 0 30px;
  text-align: left;
}

.features li {
  color: #cbd5e1;
  padding: 10px 0;
  border-bottom: 1px solid #334155;
  position: relative;
  padding-left: 25px;
  font-size: 0.95rem;
}

.features li::before {
  content: "✓";
  color: #38bdf8;
  position: absolute;
  left: 0;
}

.plan-button {
  background: transparent;
  color: #38bdf8;
  border: 1px solid #38bdf8;
  padding: 10px 20px;
  width: 100%;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.plan-button:hover {
  background: #38bdf8;
  color: #0f172a;
}

.plan-card.featured .plan-button {
  background: #38bdf8;
  color: #0f172a;
}

.plan-card.featured .plan-button:hover {
  background: #0c4a6e;
  color: white;
  border-color: #0c4a6e;
}

/* Testimonials */
.testimonials {
  padding: 80px 0;
  background: #0f172a;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin: 0 auto;
}

.testimonial-card {
  background: #1e293b;
  border-radius: 16px;
  padding: 30px;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.testimonial-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
}

.rating {
  color: #facc15;
  font-size: 1.5rem;
  margin-bottom: 20px;
}

.quote {
  color: #e2e8f0;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 20px;
  font-style: italic;
}

.user {
  color: #38bdf8;
  font-weight: 600;
  text-align: right;
}

/* CTA Section */
.cta {
  padding: 100px 0;
  text-align: center;
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
}

.cta h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: white;
}

.cta p {
  font-size: 1.2rem;
  margin-bottom: 40px;
  color: #cbd5e1;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

/* Responsive Adjustments */
@media (max-width: 1024px) {
  .hero h1 {
    font-size: 2.5rem;
  }
  
  .featured-content h2, 
  .categories h2, 
  .subscription h2, 
  .testimonials h2,
  .cta h2 {
    font-size: 2.2rem;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 100px 0 60px;
  }
  
  .hero h1 {
    font-size: 2rem;
  }
  
  .hero p {
    font-size: 1rem;
  }
  
  .featured-content h2, 
  .categories h2, 
  .subscription h2, 
  .testimonials h2,
  .cta h2 {
    font-size: 1.8rem;
  }
  
  .cta p {
    font-size: 1rem;
  }
  
  .featured-content, 
  .categories, 
  .subscription, 
  .testimonials {
    padding: 60px 0;
  }
  
  .container {
    padding: 0 15px;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 80px 0 50px;
  }
  
  .hero h1 {
    font-size: 1.8rem;
  }
  
  .content-grid,
  .categories-grid,
  .plans-grid,
  .testimonials-grid {
    grid-template-columns: 1fr;
  }
  
  .plan-card.featured {
    transform: scale(1);
  }
  
  .plan-card.featured:hover {
    transform: translateY(-10px);
  }
  
  .featured-content, 
  .categories, 
  .subscription, 
  .testimonials {
    padding: 50px 0;
  }
  
  .category-card,
  .testimonial-card {
    padding: 20px;
  }
  
  .cta {
    padding: 60px 0;
  }
}
</style>