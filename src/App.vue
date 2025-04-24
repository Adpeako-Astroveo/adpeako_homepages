<script setup>
import { ref, provide, onMounted } from 'vue';
import { RouterView, RouterLink } from 'vue-router';
import domainMapping from './domain.js';

const designId = ref('design_v1'); // Default to v1 design

onMounted(() => {
  const hostname = window.location.hostname;
  designId.value = domainMapping[hostname] || 'design_v1';
});

provide('designId', designId);
</script>

<template>
  <div class="app-container">
    <RouterView />
    <footer>
      <nav class="footer-nav">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/privacy">Privacy</RouterLink>
      </nav>
    </footer>
  </div>
</template>

<style>
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

footer {
  margin-top: auto;
  background: #f8fafc;
  border-top: 1px solid #e2e8f0;
  padding: 2rem 0;
}

.footer-nav {
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 1rem;
}

.footer-nav a {
  color: #4a5568;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
}

.footer-nav a:hover {
  color: #2d3748;
}

.footer-nav a.router-link-active {
  color: #48bb78;
}
</style>