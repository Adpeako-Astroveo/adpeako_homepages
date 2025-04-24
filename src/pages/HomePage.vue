<script setup>
import { inject, computed, shallowRef, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { designs } from '../domain.js';

const designId = inject('designId');
const route = useRoute();
const HomeComponent = shallowRef(null);

const design = computed(() => {
  const selectedDesign = designs[designId.value];
  if (!selectedDesign) {
    return designs['design_v1']; // Default to v1 design
  }
  return selectedDesign;
});

onMounted(async () => {
  if (design.value?.pages?.home?.component) {
    const module = await design.value.pages.home.component();
    HomeComponent.value = module.default;
  }
});
</script>

<template>
  <component :is="HomeComponent" v-if="HomeComponent" />
</template>