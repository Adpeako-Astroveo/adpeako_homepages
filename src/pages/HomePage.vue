<script setup>
import { inject, computed } from 'vue';
import { useRoute } from 'vue-router';
import { designs } from '../domain.js';

const designId = inject('designId');
const route = useRoute();

const design = computed(() => designs[designId.value] || designs['design_local001']);
</script>

<template>
  <div>
    <h1>{{ design.pages.home.title }}</h1>
    <p>Design ID: {{ designId }}</p>
    <p>Design Name: {{ design.name }}</p>
    <p>Current Path: {{ route.path }}</p>
    <p>Theme Colors:</p>
    <ul>
      <li>Primary: {{ design.theme.primary }}</li>
      <li>Secondary: {{ design.theme.secondary }}</li>
    </ul>
    <component :is="design.pages.home.component" v-if="design.pages.home.component" />
    <p v-else>{{ design.pages.home.content }}</p>
  </div>
</template>