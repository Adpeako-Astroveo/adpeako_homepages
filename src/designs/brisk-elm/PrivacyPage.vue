<template>
  <div class="v3-privacy">
    <div class="privacy-container">
      <h1>Privacy Policy</h1>
      <p class="intro">Berg Online Marketing B.V. (hereinafter also referred to as 'we') treats your personal data with great care. This Privacy Statement describes how your personal data is processed when using our streaming entertainment services and visiting our website.</p>

      <section class="privacy-section">
        <div class="section-icon">📍</div>
        <h2>Contact Information</h2>
        <div class="contact-info">
          <div class="info-item">
            <strong>Organization:</strong>
            <p>Berg Online Marketing B.V.</p>
          </div>
          <div class="info-item">
            <strong>Address:</strong>
            <p>Willem de Zwijgerlaan 150</p>
          </div>
          <div class="info-item">
            <strong>Postal Code:</strong>
            <p>1056JV</p>
          </div>
          <div class="info-item">
            <strong>City:</strong>
            <p>Amsterdam</p>
          </div>
        </div>
      </section>

      <section class="privacy-section">
        <div class="section-icon">🔒</div>
        <h2>Data Protection</h2>
        <p>We implement robust security measures to protect your personal information:</p>
        <ul class="protection-list">
          <li>End-to-end encryption for all sensitive data transmission</li>
          <li>Regular security audits and vulnerability assessments</li>
          <li>Multi-factor authentication for internal systems</li>
          <li>Strict access controls and monitoring</li>
          <li>Regular staff training on data protection</li>
        </ul>
      </section>

      <section class="privacy-section">
        <div class="section-icon">📱</div>
        <h2>Information We Collect</h2>
        <div class="info-grid">
          <div class="info-card">
            <h3>Account Information</h3>
            <p>Name, email, and account preferences</p>
          </div>
          <div class="info-card">
            <h3>Usage Data</h3>
            <p>Service interaction and viewing history</p>
          </div>
          <div class="info-card">
            <h3>Technical Data</h3>
            <p>Device info and IP address</p>
          </div>
          <div class="info-card">
            <h3>Payment Data</h3>
            <p>Billing information (processed securely)</p>
          </div>
        </div>
      </section>

      <section class="privacy-section">
        <div class="section-icon">⚖️</div>
        <h2>Your Rights</h2>
        <div class="rights-container">
          <div class="right-item">
            <h3>Access</h3>
            <p>Request a copy of your personal data</p>
          </div>
          <div class="right-item">
            <h3>Rectification</h3>
            <p>Correct any inaccurate information</p>
          </div>
          <div class="right-item">
            <h3>Erasure</h3>
            <p>Request deletion of your data</p>
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
        <div class="contact-section">
          <p>For privacy-related inquiries:</p>
          <div class="contact-details">
            <p><strong>Email:</strong> privacy@bergonlinemarketing.com</p>
            <p><strong>Phone:</strong> +31 (0)20 123 4567</p>
            <p><strong>Address:</strong> Willem de Zwijgerlaan 150, 1056JV Amsterdam</p>
          </div>
          <p class="response-time">We aim to respond within 48 hours</p>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.v3-privacy {
  background: #1A1A2E;
  min-height: 100vh;
  padding: 8rem 2rem 4rem;
  color: white;
}

.privacy-container {
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  font-size: 3rem;
  text-align: center;
  color: #B794F4;
  margin-bottom: 1.5rem;
}

.intro {
  text-align: center;
  font-size: 1.2rem;
  color: #E9D8FD;
  max-width: 600px;
  margin: 0 auto 4rem;
}

.sections-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.privacy-section {
  background: #1E1E32;
  padding: 2rem;
  border-radius: 1rem;
  transition: transform 0.3s ease;
  margin-bottom: 2rem;
}

.privacy-section:hover {
  transform: translateY(-5px);
}

.section-header {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
}

.section-icon {
  font-size: 2rem;
  margin-right: 1rem;
  background: #805AD5;
  color: white;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-bottom: 1rem;
}

h2 {
  color: #805AD5;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.section-list {
  list-style: none;
  padding: 0;
}

.section-list li {
  padding: 0.75rem 0;
  color: #E9D8FD;
  position: relative;
  padding-left: 1.5rem;
}

.section-list li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #805AD5;
}

.contact-info {
  background: #1E1E32;
  padding: 2rem;
  border-radius: 1rem;
}

.info-item {
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #2D2D44;
}

.info-item:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.info-card {
  background: #1E1E32;
  padding: 1.5rem;
  border-radius: 1rem;
  text-align: center;
}

.info-card h3 {
  color: #805AD5;
  margin-bottom: 0.5rem;
}

.protection-list {
  list-style: none;
  padding: 0;
}

.protection-list li {
  padding: 0.75rem 0;
  color: #E9D8FD;
  position: relative;
  padding-left: 1.5rem;
}

.protection-list li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #805AD5;
}

.rights-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.right-item {
  background: #1E1E32;
  padding: 1.5rem;
  border-radius: 1rem;
  text-align: center;
}

.right-item h3 {
  color: #805AD5;
  margin-bottom: 0.5rem;
}

.contact-section {
  background: #1E1E32;
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
}

.contact-details {
  margin: 1.5rem 0;
  padding: 1.5rem;
  background: #2D2D44;
  border-radius: 1rem;
}

.contact-details p {
  margin-bottom: 0.5rem;
}

.response-time {
  color: #805AD5;
  font-style: italic;
  margin-top: 1rem;
}

@media (max-width: 768px) {
  .v3-privacy {
    padding: 6rem 1rem 2rem;
  }

  h1 {
    font-size: 2rem;
  }

  .privacy-section {
    padding: 1.5rem;
  }

  .info-grid, .rights-container {
    grid-template-columns: 1fr;
  }
}
</style>