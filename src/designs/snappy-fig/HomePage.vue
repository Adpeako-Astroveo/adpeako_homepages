<template>
  <div class="snappy-fig-home">
    <header class="header">
      <div class="container">
        <div class="logo-section">
          <img src="/logo-video-089-black.png" alt="Snappy Fig" class="logo">
          <span class="brand-name">Snappy Fig</span>
        </div>
        <nav class="nav">
          <a href="#features" class="nav-link">Features</a>
          <a href="#how-it-works" class="nav-link">How It Works</a>
          <router-link to="/login" class="btn-login">Login</router-link>
          <router-link to="/signup" class="btn-signup">Sign Up</router-link>
        </nav>
      </div>
    </header>

    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">Entertainment at Your Fingertips</h1>
          <p class="hero-subtitle">Stream music, watch videos, follow sports, play games, and listen to audiobooks—all in one place. Pay conveniently through your phone bill.</p>
          <div class="hero-actions">
            <router-link to="/signup" class="btn-primary">Get Started</router-link>
            <a href="#features" class="btn-secondary">Explore Features</a>
          </div>
        </div>
      </div>
    </section>

    <section id="features" class="features">
      <div class="container">
        <h2 class="section-title">Discover Endless Entertainment</h2>
        <p class="section-subtitle">Everything you love, all in one mobile-friendly platform</p>

        <div class="features-grid">
          <router-link to="/music" class="feature-card">
            <div class="feature-icon music-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
              </svg>
            </div>
            <h3 class="feature-title">Music Streaming</h3>
            <p class="feature-description">Discover the latest hits, timeless classics, and personalized playlists tailored just for you.</p>
          </router-link>

          <router-link to="/video" class="feature-card">
            <div class="feature-icon video-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
              </svg>
            </div>
            <h3 class="feature-title">Video Streaming</h3>
            <p class="feature-description">Watch trending videos, blockbuster movies, original series, and more on demand.</p>
          </router-link>

          <router-link to="/sports" class="feature-card">
            <div class="feature-icon sports-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 3.3l1.35-.95c1.82.56 3.37 1.76 4.38 3.34l-.39 1.34-1.35.46L16 6.7V5.3zm-3.35-.95L11 5.3v1.4L10 9.49l-.96-.32-1.39-.46-.39-1.34c1.01-1.58 2.56-2.78 4.39-3.34zM7.5 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm9 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
              </svg>
            </div>
            <h3 class="feature-title">Sports Central</h3>
            <p class="feature-description">Stay updated with live scores, breaking news, game highlights, and expert analysis.</p>
          </router-link>

          <router-link to="/games" class="feature-card">
            <div class="feature-icon games-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21.58 16.09l-1.09-7.66C20.21 6.46 18.52 5 16.53 5H7.47C5.48 5 3.79 6.46 3.51 8.43l-1.09 7.66C2.2 17.63 3.39 19 4.94 19c.68 0 1.32-.27 1.8-.75L9 16h6l2.25 2.25c.48.48 1.13.75 1.8.75 1.56 0 2.75-1.37 2.53-2.91zM11 11H9v2H8v-2H6v-1h2V8h1v2h2v1zm4-1c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2 3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>
              </svg>
            </div>
            <h3 class="feature-title">Mobile Games</h3>
            <p class="feature-description">Play exciting mobile games from casual puzzles to action-packed adventures.</p>
          </router-link>

          <router-link to="/audiobooks" class="feature-card">
            <div class="feature-icon audiobooks-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 4h2v5l-1-.75L9 9V4zm9 16H6V4h1v9l3-2.25L13 13V4h5v16z"/>
              </svg>
            </div>
            <h3 class="feature-title">Audiobook Library</h3>
            <p class="feature-description">Listen to engaging audiobooks spanning bestsellers, classics, and exclusive content.</p>
          </router-link>

          <div class="feature-card payment-card">
            <div class="feature-icon payment-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
              </svg>
            </div>
            <h3 class="feature-title">Simple Payment</h3>
            <p class="feature-description">Pay conveniently through your phone bill—no credit card needed, no hassle.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="how-it-works" class="how-it-works">
      <div class="container">
        <h2 class="section-title">How It Works</h2>
        <div class="steps">
          <div class="step">
            <div class="step-number">1</div>
            <h3 class="step-title">Sign Up</h3>
            <p class="step-description">Create your account in seconds with just your mobile number.</p>
          </div>
          <div class="step">
            <div class="step-number">2</div>
            <h3 class="step-title">Choose Your Entertainment</h3>
            <p class="step-description">Browse through music, videos, sports, games, and audiobooks.</p>
          </div>
          <div class="step">
            <div class="step-number">3</div>
            <h3 class="step-title">Pay via Phone Bill</h3>
            <p class="step-description">Subscribe easily with charges added directly to your phone bill.</p>
          </div>
          <div class="step">
            <div class="step-number">4</div>
            <h3 class="step-title">Enjoy Unlimited Access</h3>
            <p class="step-description">Stream, play, and listen to unlimited entertainment anytime, anywhere.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="cta">
      <div class="container">
        <h2 class="cta-title">Ready to Start Your Entertainment Journey?</h2>
        <p class="cta-subtitle">Join thousands of satisfied users enjoying premium content at their fingertips</p>
        <router-link to="/signup" class="btn-primary-large">Sign Up Now</router-link>
      </div>
    </section>

    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <div class="footer-logo-section">
              <img src="/logo-video-089-w.png" alt="Snappy Fig" class="footer-logo">
              <h4 class="footer-title">Snappy Fig</h4>
            </div>
            <p class="footer-text">Your mobile entertainment hub. Making quality content accessible to everyone.</p>
          </div>
          <div class="footer-section">
            <h4 class="footer-title">Quick Links</h4>
            <router-link to="/music" class="footer-link">Music</router-link>
            <router-link to="/video" class="footer-link">Video</router-link>
            <router-link to="/sports" class="footer-link">Sports</router-link>
            <router-link to="/games" class="footer-link">Games</router-link>
            <router-link to="/audiobooks" class="footer-link">Audiobooks</router-link>
          </div>
          <div class="footer-section">
            <h4 class="footer-title">Support</h4>
            <router-link to="/privacy" class="footer-link">Privacy Policy</router-link>
            <a href="#" class="footer-link">Terms of Service</a>
            <a href="#" class="footer-link">Contact Us</a>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2025 Snappy Fig. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.snappy-fig-home {
  min-height: 100vh;
  background: linear-gradient(to bottom, #ffffff 0%, #f8f9fa 100%);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.header {
  background: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 16px 0;
}

.header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-section {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo {
  height: 40px;
  width: auto;
}

.brand-name {
  font-size: 24px;
  font-weight: 700;
  color: #1a1a1a;
  letter-spacing: -0.5px;
}

.nav {
  display: flex;
  align-items: center;
  gap: 24px;
}

.nav-link {
  color: #4a5568;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-link:hover {
  color: #FF6B35;
}

.btn-login {
  color: #FF6B35;
  text-decoration: none;
  font-weight: 600;
  padding: 8px 20px;
  border-radius: 6px;
  transition: all 0.3s;
}

.btn-login:hover {
  background: #fff5f2;
}

.btn-signup {
  background: #FF6B35;
  color: white;
  text-decoration: none;
  font-weight: 600;
  padding: 10px 24px;
  border-radius: 8px;
  transition: all 0.3s;
  box-shadow: 0 2px 8px rgba(255, 107, 53, 0.3);
}

.btn-signup:hover {
  background: #e85a2a;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 107, 53, 0.4);
}

.hero {
  padding: 100px 0;
  text-align: center;
  background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%);
  color: white;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-size: 56px;
  font-weight: 800;
  margin-bottom: 20px;
  line-height: 1.2;
  letter-spacing: -1px;
}

.hero-subtitle {
  font-size: 20px;
  margin-bottom: 40px;
  opacity: 0.95;
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
}

.btn-primary {
  background: white;
  color: #FF6B35;
  text-decoration: none;
  font-weight: 700;
  padding: 16px 40px;
  border-radius: 10px;
  transition: all 0.3s;
  font-size: 18px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.15);
  color: white;
  text-decoration: none;
  font-weight: 700;
  padding: 16px 40px;
  border-radius: 10px;
  transition: all 0.3s;
  font-size: 18px;
  border: 2px solid white;
  backdrop-filter: blur(10px);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: translateY(-3px);
}

.features {
  padding: 100px 0;
}

.section-title {
  font-size: 42px;
  font-weight: 800;
  text-align: center;
  margin-bottom: 16px;
  color: #1a1a1a;
  letter-spacing: -0.5px;
}

.section-subtitle {
  font-size: 18px;
  text-align: center;
  color: #6b7280;
  margin-bottom: 60px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
}

.feature-card {
  background: white;
  padding: 40px 32px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s;
  text-decoration: none;
  color: inherit;
  display: block;
  border: 2px solid transparent;
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
  border-color: #FF6B35;
}

.payment-card {
  background: linear-gradient(135deg, #004E89 0%, #1a5f8e 100%);
  color: white;
  cursor: default;
}

.payment-card:hover {
  transform: translateY(-8px);
  border-color: #1a5f8e;
}

.feature-icon {
  width: 64px;
  height: 64px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
}

.feature-icon svg {
  width: 32px;
  height: 32px;
}

.music-icon {
  background: linear-gradient(135deg, #FF6B35 0%, #ff8559 100%);
  color: white;
}

.video-icon {
  background: linear-gradient(135deg, #F7931E 0%, #ffab4d 100%);
  color: white;
}

.sports-icon {
  background: linear-gradient(135deg, #004E89 0%, #0066b3 100%);
  color: white;
}

.games-icon {
  background: linear-gradient(135deg, #9B59B6 0%, #b574d4 100%);
  color: white;
}

.audiobooks-icon {
  background: linear-gradient(135deg, #16A085 0%, #1abc9c 100%);
  color: white;
}

.payment-icon {
  background: rgba(255, 255, 255, 0.2);
  color: white;
}

.feature-title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 12px;
  color: inherit;
}

.feature-description {
  font-size: 16px;
  line-height: 1.6;
  color: #6b7280;
}

.payment-card .feature-description {
  color: rgba(255, 255, 255, 0.9);
}

.how-it-works {
  padding: 100px 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

.steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-top: 60px;
}

.step {
  text-align: center;
}

.step-number {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%);
  color: white;
  font-size: 36px;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
  box-shadow: 0 4px 16px rgba(255, 107, 53, 0.3);
}

.step-title {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 12px;
  color: #1a1a1a;
}

.step-description {
  font-size: 16px;
  color: #6b7280;
  line-height: 1.6;
}

.cta {
  padding: 100px 0;
  text-align: center;
  background: linear-gradient(135deg, #004E89 0%, #003d6b 100%);
  color: white;
}

.cta-title {
  font-size: 42px;
  font-weight: 800;
  margin-bottom: 16px;
  letter-spacing: -0.5px;
}

.cta-subtitle {
  font-size: 20px;
  margin-bottom: 40px;
  opacity: 0.9;
}

.btn-primary-large {
  background: #FF6B35;
  color: white;
  text-decoration: none;
  font-weight: 700;
  padding: 18px 50px;
  border-radius: 12px;
  transition: all 0.3s;
  font-size: 20px;
  display: inline-block;
  box-shadow: 0 4px 20px rgba(255, 107, 53, 0.4);
}

.btn-primary-large:hover {
  background: #e85a2a;
  transform: translateY(-3px);
  box-shadow: 0 6px 24px rgba(255, 107, 53, 0.5);
}

.footer {
  background: #1a1a1a;
  color: white;
  padding: 60px 0 30px;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 40px;
}

.footer-logo-section {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.footer-logo {
  height: 40px;
  width: auto;
}

.footer-title {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 0;
}

.footer-text {
  color: #9ca3af;
  line-height: 1.6;
}

.footer-section {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-link {
  color: #9ca3af;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-link:hover {
  color: #FF6B35;
}

.footer-bottom {
  text-align: center;
  padding-top: 30px;
  border-top: 1px solid #333;
  color: #9ca3af;
}

@media (max-width: 768px) {
  .nav {
    display: none;
  }

  .hero-title {
    font-size: 36px;
  }

  .hero-subtitle {
    font-size: 18px;
  }

  .hero-actions {
    flex-direction: column;
  }

  .section-title {
    font-size: 32px;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .steps {
    grid-template-columns: 1fr;
  }

  .cta-title {
    font-size: 32px;
  }
}
</style>
