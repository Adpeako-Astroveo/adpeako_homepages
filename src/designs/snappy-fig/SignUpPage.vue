<template>
  <div class="signup-page">
    <div class="signup-container">
      <div class="signup-header">
        <router-link to="/" class="back-link">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
          </svg>
          Back to Home
        </router-link>
      </div>

      <div class="signup-card">
        <div class="logo-section">
          <img src="/logo-video-089-black.png" alt="Snappy Fig" class="logo">
          <h1 class="brand-name">Snappy Fig</h1>
        </div>

        <h2 class="title">Create Your Account</h2>
        <p class="subtitle">Join thousands enjoying unlimited entertainment</p>

        <form @submit.prevent="handleSignup" class="signup-form">
          <div class="form-group">
            <label for="name" class="label">Full Name</label>
            <input
              type="text"
              id="name"
              v-model="fullName"
              placeholder="John Doe"
              class="input"
              required
            >
          </div>

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
            <p class="input-hint">We'll send a verification code to this number</p>
          </div>

          <div class="form-group">
            <label for="email" class="label">Email Address (Optional)</label>
            <input
              type="email"
              id="email"
              v-model="email"
              placeholder="john@example.com"
              class="input"
            >
          </div>

          <div class="form-group">
            <label for="password" class="label">Create Password</label>
            <input
              type="password"
              id="password"
              v-model="password"
              placeholder="Minimum 8 characters"
              class="input"
              required
              minlength="8"
            >
          </div>

          <div class="form-group">
            <label for="confirm-password" class="label">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              v-model="confirmPassword"
              placeholder="Re-enter your password"
              class="input"
              required
            >
          </div>


          <button type="submit" class="btn-submit" :disabled="loading">
            <span v-if="!loading">Create Account</span>
            <span v-else class="loading-spinner"></span>
          </button>
        </form>

        <div class="login-prompt">
          <p>Already have an account? <router-link to="/login" class="login-link">Log In</router-link></p>
        </div>

        <div class="payment-info">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
            <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
          </svg>
          <p>Easy payment through your phone bill</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const fullName = ref('');
const phoneNumber = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');

const loading = ref(false);

const handleSignup = async () => {
  if (password.value !== confirmPassword.value) {
    alert('Passwords do not match!');
    return;
  }

  loading.value = true;

  setTimeout(() => {
    loading.value = false;
    router.push('/login');
  }, 1500);
};
</script>

<style scoped>
.signup-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #004E89 0%, #003d6b 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.signup-container {
  width: 100%;
  max-width: 520px;
}

.signup-header {
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

.signup-card {
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

.signup-form {
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
  border-color: #004E89;
  box-shadow: 0 0 0 3px rgba(0, 78, 137, 0.1);
}

.input-hint {
  font-size: 13px;
  color: #9ca3af;
  margin: 0;
}

.terms-section {
  margin-top: 8px;
}

.checkbox-label {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 14px;
  color: #6b7280;
  cursor: pointer;
  line-height: 1.5;
}

.checkbox-label input[type="checkbox"] {
  width: 18px;
  height: 18px;
  cursor: pointer;
  margin-top: 2px;
  flex-shrink: 0;
}

.link {
  color: #004E89;
  text-decoration: none;
  font-weight: 600;
}

.link:hover {
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
  opacity: 0.5;
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

.login-prompt {
  text-align: center;
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid #e5e7eb;
}

.login-prompt p {
  color: #6b7280;
  font-size: 15px;
}

.login-link {
  color: #004E89;
  text-decoration: none;
  font-weight: 700;
}

.login-link:hover {
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
  .signup-card {
    padding: 32px 24px;
  }

  .title {
    font-size: 28px;
  }
}
</style>
