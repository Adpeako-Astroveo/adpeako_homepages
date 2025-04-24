<script setup>
import { inject, computed, shallowRef, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { designs } from '../domain.js';

const designId = inject('designId');
const route = useRoute();
const PrivacyComponent = shallowRef(null);

const design = computed(() => designs[designId.value] || designs['design_local001']);

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
      <h1>{{ design.pages.privacy.title }}</h1>
      <p>{{ design.pages.privacy.content }}</p>
    </div>
  </div>
</template>