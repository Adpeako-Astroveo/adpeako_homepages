<script setup>
import { inject, computed, shallowRef, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { designs } from '../domain.js';

const designId = inject('designId');
const route = useRoute();
const PrivacyComponent = shallowRef(null);

const design = computed(() => {
  const selectedDesign = designs[designId.value];
  if (!selectedDesign) {
    return designs['default']; // Default to default design
  }
  return selectedDesign;
});

onMounted(async () => {
  if (design.value?.pages?.privacy?.component) {
    const module = await design.value.pages.privacy.component();
    PrivacyComponent.value = module.default;
  }
});
</script>

<template>
  <div>
    <component :is="PrivacyComponent" v-if="PrivacyComponent" />
    <div v-else>
      <h1>{{ design.value?.pages?.privacy?.title || 'Privacy Policy' }}</h1>
      <p>{{ design.value?.pages?.privacy?.content || 'Privacy policy content not available.' }}</p>
    </div>
  </div>
</template>