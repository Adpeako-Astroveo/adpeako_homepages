<template>
  <div class="min-h-screen flex flex-col items-center justify-center text-center p-4">
    <h1 class="text-4xl font-bold mb-4" :style="{ color: theme.primary }">
      Privacy Policy
    </h1>
    <p class="text-xl mb-8" :style="{ color: theme.secondary }">
      Our privacy commitment to you.
    </p>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import design from '../v3'

export default defineComponent({
  name: 'PrivacyPage',
  data() {
    return {
      theme: design.theme
    }
  }
})
</script>