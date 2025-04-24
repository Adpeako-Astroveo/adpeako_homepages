<script setup>
// Privacy page component
</script>

<template>
  <div class="brisk-elm-privacy">
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
        <div class="contact-details">
          <p><strong>Organization:</strong> Berg Online Marketing B.V.</p>
          <p><strong>Address:</strong> Willem de Zwijgerlaan 150</p>
          <p><strong>Postal Code:</strong> 1056JV</p>
          <p><strong>City:</strong> Amsterdam</p>
        </div>
      </section>

      <section class="privacy-section">
        <div class="section-icon">🔒</div>
        <h2>Data Protection</h2>
        <ul class="protection-list">
          <li>Advanced encryption for all data transmission</li>
          <li>Regular security audits and updates</li>
          <li>Strict access controls and authentication</li>
          <li>Continuous monitoring and threat detection</li>
        </ul>
      </section>

      <section class="privacy-section">
        <div class="section-icon">📱</div>
        <h2>Data Collection</h2>
        <div class="data-grid">
          <div class="data-card">
            <h3>Account Data</h3>
            <p>Basic information for account management</p>
          </div>
          <div class="data-card">
            <h3>Usage Information</h3>
            <p>Service interaction and preferences</p>
          </div>
          <div class="data-card">
            <h3>Technical Details</h3>
            <p>Device and connection information</p>
          </div>
          <div class="data-card">
            <h3>Payment Data</h3>
            <p>Secure payment processing details</p>
          </div>
        </div>
      </section>

      <section class="privacy-section">
        <div class="section-icon">⚖️</div>
        <h2>Your Rights</h2>
        <div class="rights-grid">
          <div class="right-card">
            <h3>Access Rights</h3>
            <p>Request your personal data</p>
          </div>
          <div class="right-card">
            <h3>Correction</h3>
            <p>Update incorrect information</p>
          </div>
          <div class="right-card">
            <h3>Deletion</h3>
            <p>Request data removal</p>
          </div>
          <div class="right-card">
            <h3>Portability</h3>
            <p>Transfer your data</p>
          </div>
        </div>
      </section>

      <section class="privacy-section">
        <div class="section-icon">📞</div>
        <h2>Contact Us</h2>
        <div class="contact-info">
          <p>For privacy-related inquiries:</p>
          <div class="contact-methods">
            <p><strong>Email:</strong> privacy@bergonlinemarketing.com</p>
            <p><strong>Phone:</strong> +31 (0)20 123 4567</p>
            <p><strong>Address:</strong> Willem de Zwijgerlaan 150, 1056JV Amsterdam</p>
          </div>
          <p class="response-note">We aim to respond within 48 hours</p>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.brisk-elm-privacy {
  background: #EBF8FF;
  min-height: 100vh;
  padding: 6rem 2rem 4rem;
}

.privacy-container {
  max-width: 1000px;
  margin: 0 auto;
  background: white;
  border-radius: 1rem;
  padding: 3rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

h1 {
  color: #2B6CB0;
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
}

.privacy-section {
  margin-bottom: 4rem;
  padding: 2rem;
  background: #F7FAFC;
  border-radius: 1rem;
  position: relative;
}

.section-icon {
  font-size: 2rem;
  position: absolute;
  top: -1rem;
  left: 2rem;
  background: #4299E1;
  color: white;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

h2 {
  color: #2B6CB0;
  margin: 1rem 0 2rem;
  font-size: 1.8rem;
}

.contact-details {
  background: white;
  padding: 2rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
}

.contact-details p {
  margin-bottom: 0.5rem;
}

.protection-list {
  list-style: none;
  padding: 0;
}

.protection-list li {
  padding: 1rem;
  margin-bottom: 1rem;
  background: white;
  border-radius: 0.5rem;
  padding-left: 2rem;
  position: relative;
}

.protection-list li::before {
  content: "✓";
  position: absolute;
  left: 0.8rem;
  color: #4299E1;
}

.data-grid, .rights-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.data-card, .right-card {
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  text-align: center;
  transition: transform 0.3s ease;
}

.data-card:hover, .right-card:hover {
  transform: translateY(-5px);
}

.data-card h3, .right-card h3 {
  color: #2B6CB0;
  margin-bottom: 0.5rem;
}

.contact-info {
  text-align: center;
  background: white;
  padding: 2rem;
  border-radius: 0.5rem;
}

.contact-methods {
  margin: 1.5rem 0;
  padding: 1.5rem;
  background: #F7FAFC;
  border-radius: 0.5rem;
}

.contact-methods p {
  margin-bottom: 0.5rem;
}

.response-note {
  color: #4299E1;
  font-style: italic;
  margin-top: 1rem;
}

@media (max-width: 768px) {
  .privacy-container {
    padding: 2rem;
  }

  .data-grid, .rights-grid {
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