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
  <div>
    <nav>
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/privacy">Privacy</RouterLink> |
      <RouterLink to="/random-page">Random Page</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>

<style>
nav {
  padding: 1rem;
  margin-bottom: 2rem;
}

nav a {
  margin: 0 0.5rem;
}
</style>