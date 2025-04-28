<template>
  <div class="privacy-page">
    <h1>Privacy Policy</h1>
    <div class="content">
      <p>Our commitment to protecting your privacy and personal data while using our entertainment services.</p>
      
      <section>
        <h2>Data Collection</h2>
        <p>We collect only the necessary information required to provide you with our mobile entertainment services.</p>
      </section>

      <section>
        <h2>Data Usage</h2>
        <p>Your data is used solely for service delivery and billing purposes.</p>
      </section>

      <section>
        <h2>Data Protection</h2>
        <p>We implement industry-standard security measures to protect your personal information.</p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PrivacyPage'
}
</script>

<style scoped>
.privacy-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.content {
  margin-top: 2rem;
}

h1 {
  color: var(--primary-color);
  margin-bottom: 2rem;
}

h2 {
  color: var(--secondary-color);
  margin: 1.5rem 0 1rem;
}

section {
  margin-bottom: 2rem;
}
</style>