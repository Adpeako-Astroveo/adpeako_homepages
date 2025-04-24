<script setup>
import { inject, computed } from 'vue';
import { useRoute } from 'vue-router';
import { designs } from '../domain.js';

const designId = inject('designId');
const route = useRoute();

const design = computed(() => {
  const selectedDesign = designs[designId.value];
  if (!selectedDesign) {
    return designs['default']; // Default to default design
  }
  return selectedDesign;
});
</script>

<template>
  <div>
    <h1>{{ design.pages.notFound.title }}</h1>
    <p>Design ID: {{ designId }}</p>
    <p>Design Name: {{ design.name }}</p>
    <p>Current Path: {{ route.path }}</p>
    <p>Theme Colors:</p>
    <ul>
      <li>Primary: {{ design.theme.primary }}</li>
      <li>Secondary: {{ design.theme.secondary }}</li>
    </ul>
    <p>{{ design.pages.notFound.content }}</p>
  </div>
</template>