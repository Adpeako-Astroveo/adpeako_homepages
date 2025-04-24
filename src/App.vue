<script setup>
import { ref, provide, onMounted, watch } from 'vue';
import { RouterView, RouterLink, useRoute } from 'vue-router';
import domainMapping from './domain.js';
import { designs } from './domain.js';

const designId = ref('design_v1');
const route = useRoute();

onMounted(() => {
  const hostname = window.location.hostname;
  designId.value = domainMapping[hostname] || 'design_v1';
});

// Update page title and meta description based on current route and design
watch(
  () => [route.path, designId.value],
  () => {
    const currentDesign = designs[designId.value];
    if (!currentDesign) return;

    let pageConfig;
    switch (route.path) {
      case '/':
        pageConfig = currentDesign.pages.home;
        break;
      case '/privacy':
        pageConfig = currentDesign.pages.privacy;
        break;
      default:
        pageConfig = currentDesign.pages.notFound;
    }

    // Update title
    document.title = pageConfig.title.replace('Your Domain', window.location.hostname);

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = pageConfig.description;
  },
  { immediate: true }
);

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