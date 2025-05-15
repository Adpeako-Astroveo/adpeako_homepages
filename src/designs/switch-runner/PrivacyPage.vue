<template>
  <div class="privacy-page">
    <div class="privacy-container">
      <h1>Privacy Policy</h1>
      <p class="last-updated">Last updated: 01-06-2025</p>

      <section>
        <h2>Who We Are</h2>
        <p>Switch Runner Entertainment Ltd. (hereinafter also referred to as 'we') treats your personal data with great care. This Privacy Statement describes how your personal data is processed when using our streaming entertainment services and visiting our website.</p>
      </section>

      <section>
        <h2>Contact Information</h2>
        <div class="contact-details">
          <p><strong>Organization:</strong> Switch Runner Entertainment Ltd.</p>
          <p><strong>Address:</strong> Digital Plaza 45</p>
          <p><strong>Postal Code:</strong> 1056JV</p>
          <p><strong>City:</strong> Amsterdam</p>
        </div>
      </section>

      <section>
        <h2>Data We Collect</h2>
        <ul class="data-list">
          <li>
            <h3>Entertainment Preferences</h3>
            <p>Your viewing history, music preferences, gaming activity, and content interactions to provide personalized recommendations</p>
          </li>
          <li>
            <h3>Account Information</h3>
            <p>Basic details needed for account creation and management, including your mobile number for billing</p>
          </li>
          <li>
            <h3>Usage Data</h3>
            <p>Information about how you use our services to improve your experience and our platform</p>
          </li>
          <li>
            <h3>Technical Data</h3>
            <p>Device information and connection details to optimize streaming quality</p>
          </li>
          <li>
            <h3>Billing Information</h3>
            <p>Mobile carrier details for processing payments through phone billing</p>
          </li>
        </ul>
      </section>

      <section>
        <h2>How We Use Your Data</h2>
        <ul class="usage-list">
          <li>Delivering personalized entertainment content</li>
          <li>Processing mobile billing payments</li>
          <li>Improving our content recommendations</li>
          <li>Ensuring optimal streaming performance</li>
          <li>Preventing unauthorized access</li>
          <li>Communicating service updates</li>
        </ul>
      </section>

      <section>
        <h2>Mobile Billing Privacy</h2>
        <div class="mobile-billing-section">
          <p>When using our mobile billing service:</p>
          <ul>
            <li>We process payments through secure carrier integrations</li>
            <li>Your mobile number is encrypted and stored securely</li>
            <li>Billing details appear on your carrier statement</li>
            <li>We maintain strict security standards for payment processing</li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Your Rights</h2>
        <div class="rights-section">
          <p>Under applicable data protection laws, you have the following rights:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Correct inaccurate information</li>
            <li>Request data deletion</li>
            <li>Restrict data processing</li>
            <li>Data portability</li>
            <li>Object to processing</li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Data Security</h2>
        <p>We implement robust security measures to protect your data:</p>
        <ul class="security-measures">
          <li>End-to-end encryption for data transmission</li>
          <li>Regular security audits and updates</li>
          <li>Strict access controls and authentication</li>
          <li>Continuous monitoring and threat detection</li>
          <li>Employee security training</li>
        </ul>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>For privacy-related inquiries, please contact our Data Protection Officer:</p>
        <div class="contact-section">
          <p><strong>Email:</strong> privacy@switch-runner.com</p>
          <p><strong>Address:</strong> Digital Plaza 45, 1056JV Amsterdam</p>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.privacy-page {
  background: #f8fafc;
  min-height: 100vh;
  padding: 8rem 2rem 4rem;
}

.privacy-container {
  max-width: 800px;
  margin: 0 auto;
  background: white;
  padding: 3rem;
  border-radius: 1rem;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
}

h1 {
  font-size: 2.5rem;
  color: #FF6347;
  margin-bottom: 0.5rem;
  text-align: center;
}

.last-updated {
  text-align: center;
  color: #666;
  margin-bottom: 2rem;
}

section {
  margin-bottom: 3rem;
}

h2 {
  color: #FF6347;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #f0f0f0;
}

p {
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.contact-details {
  background: #f7fafc;
  padding: 1.5rem;
  border-radius: 0.5rem;
  margin: 1rem 0;
}

.contact-details p {
  margin-bottom: 0.5rem;
}

.data-list, .usage-list, .security-measures {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
}

.data-list li {
  background: #f7fafc;
  padding: 1.5rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
}

.data-list h3 {
  color: #FF6347;
  margin-bottom: 0.5rem;
}

.usage-list li, .security-measures li {
  padding: 0.5rem 0 0.5rem 1.5rem;
  position: relative;
  color: #4a5568;
}

.usage-list li::before, .security-measures li::before {
  content: "•";
  color: #FF6347;
  position: absolute;
  left: 0;
  font-weight: bold;
}

.mobile-billing-section {
  background: #f7fafc;
  padding: 1.5rem;
  border-radius: 0.5rem;
}

.mobile-billing-section ul {
  list-style: none;
  padding: 0;
  margin-top: 1rem;
}

.mobile-billing-section li {
  padding: 0.5rem 0 0.5rem 1.5rem;
  position: relative;
}

.mobile-billing-section li::before {
  content: "✓";
  color: #FF6347;
  position: absolute;
  left: 0;
}

.rights-section ul {
  list-style: none;
  padding: 0;
}

.rights-section li {
  padding: 0.5rem 0 0.5rem 1.5rem;
  position: relative;
}

.rights-section li::before {
  content: "✓";
  color: #FF6347;
  position: absolute;
  left: 0;
}

.contact-section {
  background: #f7fafc;
  padding: 1.5rem;
  border-radius: 0.5rem;
}

@media (max-width: 768px) {
  .privacy-page {
    padding: 6rem 1rem 2rem;
  }

  .privacy-container {
    padding: 2rem;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.3rem;
  }
}
</style>