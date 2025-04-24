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
            <h3>Account Information</h3>
            <p>Name, email address, and password for account creation and management</p>
          </li>
          <li>
            <h3>Usage Data</h3>
            <p>Viewing history, preferences, and interactions with our content to provide personalized recommendations</p>
          </li>
          <li>
            <h3>Technical Data</h3>
            <p>Device information, IP address, and streaming quality preferences to optimize your viewing experience</p>
          </li>
          <li>
            <h3>Payment Information</h3>
            <p>Billing details processed securely through our payment providers</p>
          </li>
        </ul>
      </section>

      <section>
        <h2>How We Use Your Data</h2>
        <ul class="usage-list">
          <li>Providing and personalizing our streaming services</li>
          <li>Processing your subscription and payments</li>
          <li>Improving our content selection and recommendations</li>
          <li>Ensuring technical functionality and security</li>
          <li>Communicating important updates about our service</li>
          <li>Preventing fraud and unauthorized access</li>
        </ul>
      </section>

      <section>
        <h2>Your Rights</h2>
        <div class="rights-section">
          <p>Under applicable data protection laws, you have the following rights:</p>
          <ul>
            <li>Right to access your personal data</li>
            <li>Right to correct inaccurate personal data</li>
            <li>Right to request deletion of your personal data</li>
            <li>Right to restrict processing of your personal data</li>
            <li>Right to data portability</li>
            <li>Right to object to processing of your personal data</li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Data Security</h2>
        <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing, accidental loss, destruction, or damage. These measures include:</p>
        <ul class="security-measures">
          <li>Encryption of data in transit and at rest</li>
          <li>Regular security assessments and updates</li>
          <li>Strict access controls and authentication procedures</li>
          <li>Employee training on data protection and security</li>
        </ul>
      </section>

      <section>
        <h2>Updates to Privacy Policy</h2>
        <p>We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. We will notify you of any material changes through our service or via email.</p>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>If you have any questions about this Privacy Policy or our data practices, please contact our Data Protection Officer at:</p>
        <div class="contact-section">
          <p>Email: privacy@bergonlinemarketing.com</p>
          <p>Phone: +31 (0)20 123 4567</p>
          <p>Address: Willem de Zwijgerlaan 150, 1056JV Amsterdam</p>
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
  color: #2d3748;
  margin-bottom: 2rem;
  text-align: center;
}

section {
  margin-bottom: 3rem;
}

h2 {
  color: #2d3748;
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
  color: #48bb78;
  font-weight: bold;
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
  color: #48bb78;
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