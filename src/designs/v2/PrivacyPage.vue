<template>
  <div class="v2-privacy">
    <div class="privacy-container">
      <h1>Privacy Policy</h1>
      
      <section class="privacy-section">
        <div class="section-icon">🔒</div>
        <h2>Data Protection</h2>
        <p>We take your privacy seriously and implement strict measures to protect your information:</p>
        <ul class="protection-list">
          <li>End-to-end encryption for all sensitive data</li>
          <li>Regular security audits and updates</li>
          <li>Strict access controls and authentication</li>
          <li>Compliance with global privacy standards</li>
        </ul>
      </section>

      <section class="privacy-section">
        <div class="section-icon">📱</div>
        <h2>Information We Collect</h2>
        <div class="info-grid">
          <div class="info-card">
            <h3>Account Data</h3>
            <p>Basic information needed for your account</p>
          </div>
          <div class="info-card">
            <h3>Usage Data</h3>
            <p>How you interact with our services</p>
          </div>
          <div class="info-card">
            <h3>Preferences</h3>
            <p>Your choices and settings</p>
          </div>
          <div class="info-card">
            <h3>Technical Data</h3>
            <p>Device and connection information</p>
          </div>
        </div>
      </section>

      <section class="privacy-section">
        <div class="section-icon">⚖️</div>
        <h2>Your Rights</h2>
        <div class="rights-container">
          <div class="right-item">
            <h3>Access</h3>
            <p>Request a copy of your data</p>
          </div>
          <div class="right-item">
            <h3>Rectification</h3>
            <p>Correct inaccurate information</p>
          </div>
          <div class="right-item">
            <h3>Erasure</h3>
            <p>Request data deletion</p>
          </div>
          <div class="right-item">
            <h3>Portability</h3>
            <p>Transfer your data elsewhere</p>
          </div>
        </div>
      </section>

      <section class="privacy-section">
        <div class="section-icon">📞</div>
        <h2>Contact Us</h2>
        <div class="contact-info">
          <p>For privacy-related inquiries:</p>
          <a href="mailto:privacy@example.com" class="contact-link">privacy@example.com</a>
          <p>Response time: Within 48 hours</p>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.v2-privacy {
  background-color: #E8F5E9;
  min-height: 100vh;
  padding: 4rem 2rem;
}

.privacy-container {
  max-width: 1000px;
  margin: 0 auto;
  background: white;
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

h1 {
  color: #2E7D32;
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
}

.privacy-section {
  margin-bottom: 4rem;
  padding: 2rem;
  background: #F5F5F5;
  border-radius: 15px;
  position: relative;
}

.section-icon {
  font-size: 2rem;
  position: absolute;
  top: -1rem;
  left: 2rem;
  background: #4CAF50;
  color: white;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

h2 {
  color: #4CAF50;
  margin: 1rem 0 2rem;
  font-size: 1.8rem;
}

.protection-list {
  list-style: none;
  padding: 0;
}

.protection-list li {
  padding: 1rem;
  margin-bottom: 1rem;
  background: white;
  border-radius: 10px;
  padding-left: 2rem;
  position: relative;
}

.protection-list li::before {
  content: "✓";
  position: absolute;
  left: 0.8rem;
  color: #4CAF50;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.info-card {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
}

.info-card h3 {
  color: #4CAF50;
  margin-bottom: 0.5rem;
}

.rights-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.right-item {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
  transition: transform 0.3s ease;
}

.right-item:hover {
  transform: translateY(-5px);
}

.right-item h3 {
  color: #4CAF50;
  margin-bottom: 0.5rem;
}

.contact-info {
  text-align: center;
  background: white;
  padding: 2rem;
  border-radius: 10px;
}

.contact-link {
  display: inline-block;
  color: #4CAF50;
  text-decoration: none;
  font-weight: bold;
  margin: 1rem 0;
  padding: 0.5rem 1rem;
  border: 2px solid #4CAF50;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.contact-link:hover {
  background: #4CAF50;
  color: white;
}

@media (max-width: 768px) {
  .privacy-container {
    padding: 2rem;
  }

  .info-grid, .rights-container {
    grid-template-columns: 1fr;
  }

  .section-icon {
    position: static;
    margin: 0 auto 1rem;
  }
}
</style>