<script setup>
import { ref, provide, onMounted } from 'vue';
import { RouterView, RouterLink } from 'vue-router';
import domainMapping from './domain.js';

const designId = ref('unknown_design');

onMounted(() => {
  const hostname = window.location.hostname;
  console.log(hostname);
  designId.value = domainMapping[hostname] || domainMapping['example.com'];
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