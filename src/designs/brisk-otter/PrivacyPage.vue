<template>
  <div class="v2-privacy">
    <div class="privacy-container">
      <h1>Privacy Policy</h1>
      
      <section class="privacy-section">
        <div class="section-icon">🏢</div>
        <h2>Who We Are</h2>
        <p>Berg Online Marketing B.V. (hereinafter also referred to as 'we') treats your personal data with great care. This Privacy Statement describes how your personal data is processed when using our streaming entertainment services and visiting our website.</p>
      </section>

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
        <div class="section-icon">🔍</div>
        <h2>How We Use Your Data</h2>
        <ul class="usage-list">
          <li>Providing and personalizing our entertainment services</li>
          <li>Processing subscriptions and payments</li>
          <li>Improving content recommendations</li>
          <li>Ensuring platform security</li>
          <li>Communicating service updates</li>
          <li>Legal compliance and fraud prevention</li>
        </ul>
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
.v2-privacy {
  background-color: #E8F5E9;
  min-height: 100vh;
  padding: 6rem 2rem 4rem;
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

.contact-info {
  background: white;
  padding: 2rem;
  border-radius: 10px;
}

.info-item {
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #E8F5E9;
}

.info-item:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.info-item strong {
  color: #2E7D32;
  display: block;
  margin-bottom: 0.5rem;
}

.protection-list, .usage-list {
  list-style: none;
  padding: 0;
}

.protection-list li, .usage-list li {
  padding: 1rem;
  margin-bottom: 1rem;
  background: white;
  border-radius: 10px;
  padding-left: 2rem;
  position: relative;
}

.protection-list li::before, .usage-list li::before {
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

.contact-section {
  text-align: center;
  background: white;
  padding: 2rem;
  border-radius: 10px;
}

.contact-details {
  margin: 1.5rem 0;
  padding: 1.5rem;
  background: #F5F5F5;
  border-radius: 10px;
}

.contact-details p {
  margin-bottom: 0.5rem;
}

.response-time {
  color: #4CAF50;
  font-style: italic;
  margin-top: 1rem;
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

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }
}
</style>