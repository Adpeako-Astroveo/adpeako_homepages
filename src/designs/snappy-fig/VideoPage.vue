<template>
  <div class="category-page">
    <div class="loading-container">
      <div class="spinner"></div>
      <p>Redirecting to login...</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

onMounted(() => {
  setTimeout(() => {
    router.push('/login?redirect=video');
  }, 1000);
});
</script>

<style scoped>
.category-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

.loading-container {
  text-align: center;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 4px solid #e5e7eb;
  border-top-color: #FF6B35;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  margin: 0 auto 20px;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

p {
  color: #6b7280;
  font-size: 16px;
  font-weight: 500;
}
</style>
