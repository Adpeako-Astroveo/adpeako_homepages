<template>
  <div class="privacy-page">
    <div class="content">
      <h1>Privacy Policy</h1>
      
      <section>
        <h2>Who We Are</h2>
        <p>Berg Online Marketing B.V. (hereinafter also referred to as 'we') treats your personal data with great care. This Privacy Statement describes how your personal data is processed when using our streaming entertainment services and visiting our website.</p>
      </section>

      <section>
        <h2>Contact Information</h2>
        <div class="contact-details">
          <p><strong>Organization:</strong> Berg Online Marketing B.V.</p>
          <p><strong>Address:</strong> Willem de Zwijgerlaan 150</p>
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
        <h2>Updates to Privacy Policy</h2>
        <p>We may update this Privacy Policy to reflect changes in our practices or for legal, operational, or regulatory reasons. We will notify you of any material changes through our service or via email.</p>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>For privacy-related inquiries, please contact our Data Protection Officer:</p>
        <div class="contact-section">
          <p><strong>Email:</strong> privacy@bergonlinemarketing.com</p>
          <p><strong>Phone:</strong> +31 (0)20 123 4567</p>
          <p><strong>Address:</strong> Willem de Zwijgerlaan 150, 1056JV Amsterdam</p>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.privacy-page {
  background: #f8fafc;
  min-height: 100vh;
  padding: 4rem 2rem;
}

.content {
  max-width: 800px;
  margin: 0 auto;
  background: white;
  padding: 3rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

h1 {
  font-size: 2.5rem;
  color: #3B82F6;
  margin-bottom: 2rem;
  text-align: center;
}

section {
  margin-bottom: 3rem;
}

h2 {
  color: #3B82F6;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e2e8f0;
}

h3 {
  color: #4a5568;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
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
  margin-bottom: 1rem;
}

.contact-details p {
  margin-bottom: 0.5rem;
}

.data-list, .usage-list, .security-measures {
  list-style: none;
  padding: 0;
}

.data-list li {
  background: #f7fafc;
  padding: 1.5rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
}

.usage-list li, .security-measures li {
  padding: 0.5rem 0 0.5rem 1.5rem;
  position: relative;
}

.usage-list li::before, .security-measures li::before {
  content: "•";
  color: #3B82F6;
  font-weight: bold;
  position: absolute;
  left: 0;
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
  color: #3B82F6;
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
  color: #3B82F6;
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
    padding: 2rem 1rem;
  }

  .content {
    padding: 2rem;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }
}
</style>