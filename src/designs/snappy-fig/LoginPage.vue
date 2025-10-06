<template>
  <div class="login-page">
    <div class="login-container">
      <div class="login-header">
        <router-link to="/" class="back-link">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
          </svg>
          Back to Home
        </router-link>
      </div>

      <div class="login-card">
        <div class="logo-section">
          <img src="/snappy-fig-logo.svg" alt="Snappy Fig" class="logo">
          <h1 class="brand-name">Snappy Fig</h1>
        </div>

        <h2 class="title">Welcome Back</h2>
        <p class="subtitle">Log in to access your entertainment hub</p>

        <form @submit.prevent="handleLogin" class="login-form">
          <div class="form-group">
            <label for="phone" class="label">Mobile Number</label>
            <input
              type="tel"
              id="phone"
              v-model="phoneNumber"
              placeholder="+1 (555) 000-0000"
              class="input"
              required
            >
          </div>

          <div class="form-group">
            <label for="password" class="label">Password</label>
            <input
              type="password"
              id="password"
              v-model="password"
              placeholder="Enter your password"
              class="input"
              required
            >
          </div>

          <div class="form-footer">
            <label class="checkbox-label">
              <input type="checkbox" v-model="rememberMe">
              <span>Remember me</span>
            </label>
            <a href="#" class="forgot-link">Forgot password?</a>
          </div>

          <button type="submit" class="btn-submit" :disabled="loading">
            <span v-if="!loading">Log In</span>
            <span v-else class="loading-spinner"></span>
          </button>
        </form>

        <div class="signup-prompt">
          <p>Don't have an account? <router-link to="/signup" class="signup-link">Sign Up</router-link></p>
        </div>

        <div class="payment-info">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
          </svg>
          <p>Secure payment via phone bill</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

const phoneNumber = ref('');
const password = ref('');
const rememberMe = ref(false);
const loading = ref(false);

const handleLogin = async () => {
  loading.value = true;

  setTimeout(() => {
    loading.value = false;
    const redirect = route.query.redirect;
    if (redirect) {
      router.push(`/${redirect}`);
    } else {
      router.push('/');
    }
  }, 1500);
};
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.login-container {
  width: 100%;
  max-width: 480px;
}

.login-header {
  margin-bottom: 24px;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: white;
  text-decoration: none;
  font-weight: 600;
  transition: opacity 0.3s;
}

.back-link:hover {
  opacity: 0.8;
}

.login-card {
  background: white;
  border-radius: 20px;
  padding: 48px 40px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
}

.logo-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;
}

.logo {
  height: 60px;
  width: auto;
  margin-bottom: 12px;
}

.brand-name {
  font-size: 28px;
  font-weight: 800;
  color: #1a1a1a;
  letter-spacing: -0.5px;
}

.title {
  font-size: 32px;
  font-weight: 800;
  color: #1a1a1a;
  margin-bottom: 8px;
  text-align: center;
}

.subtitle {
  font-size: 16px;
  color: #6b7280;
  margin-bottom: 32px;
  text-align: center;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.label {
  font-weight: 600;
  color: #374151;
  font-size: 14px;
}

.input {
  padding: 14px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 10px;
  font-size: 16px;
  transition: all 0.3s;
  outline: none;
}

.input:focus {
  border-color: #FF6B35;
  box-shadow: 0 0 0 3px rgba(255, 107, 53, 0.1);
}

.form-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #6b7280;
  cursor: pointer;
}

.checkbox-label input[type="checkbox"] {
  width: 18px;
  height: 18px;
  cursor: pointer;
}

.forgot-link {
  color: #FF6B35;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
}

.forgot-link:hover {
  text-decoration: underline;
}

.btn-submit {
  background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%);
  color: white;
  border: none;
  padding: 16px;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 4px 16px rgba(255, 107, 53, 0.3);
  margin-top: 8px;
}

.btn-submit:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 107, 53, 0.4);
}

.btn-submit:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.loading-spinner {
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.signup-prompt {
  text-align: center;
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid #e5e7eb;
}

.signup-prompt p {
  color: #6b7280;
  font-size: 15px;
}

.signup-link {
  color: #FF6B35;
  text-decoration: none;
  font-weight: 700;
}

.signup-link:hover {
  text-decoration: underline;
}

.payment-info {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 24px;
  padding: 16px;
  background: #f8f9fa;
  border-radius: 10px;
}

.payment-info svg {
  color: #16A085;
}

.payment-info p {
  font-size: 14px;
  color: #6b7280;
  font-weight: 500;
  margin: 0;
}

@media (max-width: 768px) {
  .login-card {
    padding: 32px 24px;
  }

  .title {
    font-size: 28px;
  }
}
</style>
