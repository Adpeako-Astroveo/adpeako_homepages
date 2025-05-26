<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const isLoading = ref(false);
const showPassword = ref(false);
const loginError = ref('');

// Login form data
const loginForm = ref({
  email: '',
  password: '',
  remember: false
});

// Validate form
const isFormValid = computed(() => {
  return loginForm.value.email && loginForm.value.password;
});

// Handle login submission
const handleLogin = async () => {
  if (!isFormValid.value) return;
  
  isLoading.value = true;
  loginError.value = '';
  
  try {
    // Simulate an API call
    await new Promise(resolve => setTimeout(resolve, 1200));
    
    // In a real app, we would verify credentials with the server
    // For this demo, we'll navigate to the home page
    router.push('/hastyreels');
  } catch (error) {
    console.error('Login error:', error);
    loginError.value = 'Invalid email or password. Please try again.';
  } finally {
    isLoading.value = false;
  }
};

// Social login options
const socialLogin = (provider) => {
  isLoading.value = true;
  
  // Simulate social login process
  setTimeout(() => {
    router.push('/hastyreels');
  }, 1500);
};

// Navigate to signup page
const goToSignup = () => {
  router.push('/hastyreels/signup');
};
</script>

<template>
  <div class="login-page">
    <div class="login-container">
      <div class="login-header">
        <div class="logo">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" fill="url(#paint0_linear)"/>
            <path d="M15 13L28 20L15 27V13Z" fill="white"/>
            <defs>
              <linearGradient id="paint0_linear" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FF4E50"/>
                <stop offset="1" stop-color="#FC913A"/>
              </linearGradient>
            </defs>
          </svg>
          
          <h1>HastyReels</h1>
        </div>
        
        <h2 class="login-title">Sign In</h2>
        <p class="login-subtitle">Welcome back to HastyReels</p>
      </div>
      
      <form @submit.prevent="handleLogin" class="login-form">
        <div class="form-group">
          <label for="email">Email or Username</label>
          <input 
            type="text" 
            id="email" 
            v-model="loginForm.email" 
            placeholder="Enter your email or username"
            :class="{ 'error': loginError }"
          >
        </div>
        
        <div class="form-group">
          <label for="password">Password</label>
          <div class="password-input">
            <input 
              :type="showPassword ? 'text' : 'password'" 
              id="password" 
              v-model="loginForm.password" 
              placeholder="Enter your password"
              :class="{ 'error': loginError }"
            >
            <button 
              type="button" 
              class="toggle-password" 
              @click="showPassword = !showPassword"
            >
              <span v-if="showPassword">👁️</span>
              <span v-else>👁️‍🗨️</span>
            </button>
          </div>
        </div>
        
        <div class="form-options">
          <div class="remember-me">
            <input type="checkbox" id="remember" v-model="loginForm.remember">
            <label for="remember">Remember me</label>
          </div>
          
          <a href="#" class="forgot-password">Forgot password?</a>
        </div>
        
        <div v-if="loginError" class="error-message">
          {{ loginError }}
        </div>
        
        <button 
          type="submit" 
          class="login-button" 
          :disabled="!isFormValid || isLoading"
        >
          <span v-if="isLoading" class="spinner"></span>
          <span v-else>Sign In</span>
        </button>
      </form>
      
      <div class="social-login">
        <div class="divider">
          <span>or continue with</span>
        </div>
        
        <div class="social-buttons">
          <button @click="socialLogin('google')" class="social-button google">
            <span class="social-icon">G</span>
            Google
          </button>
          
          <button @click="socialLogin('facebook')" class="social-button facebook">
            <span class="social-icon">f</span>
            Facebook
          </button>
          
          <button @click="socialLogin('twitter')" class="social-button twitter">
            <span class="social-icon">𝕏</span>
            Twitter
          </button>
        </div>
      </div>
      
      <div class="signup-prompt">
        <p>Don't have an account? <a href="#" @click.prevent="goToSignup">Sign up</a></p>
      </div>
      
      <div class="terms-notice">
        By signing in, you agree to HastyReels' <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
      </div>
    </div>
    
    <div class="login-backdrop"></div>
  </div>
</template>

<style scoped>
.login-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  font-family: 'Montserrat', 'Inter', sans-serif;
  color: #fff;
  position: relative;
}

.login-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.9)), 
              url('https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg') no-repeat center center;
  background-size: cover;
  z-index: -1;
}

.login-container {
  background: rgba(20, 20, 20, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  width: 100%;
  max-width: 460px;
  padding: 3rem;
  box-shadow: 0 10px 30px rgba(0,0,0,0.4);
  border: 1px solid rgba(255, 255, 255, 0.1);
  animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.login-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
}

.logo h1 {
  font-size: 2rem;
  font-weight: 700;
  margin-left: 1rem;
  background: linear-gradient(to right, #ff4e50, #fc913a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.login-title {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.login-subtitle {
  color: #ccc;
  font-size: 1rem;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-size: 0.9rem;
  font-weight: 500;
  color: #ccc;
}

.form-group input {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0.9rem 1rem;
  border-radius: 8px;
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-group input:focus {
  outline: none;
  border-color: #ff4e50;
  background: rgba(255, 255, 255, 0.12);
}

.form-group input.error {
  border-color: #ff4e50;
}

.password-input {
  position: relative;
}

.toggle-password {
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #ccc;
  cursor: pointer;
  padding: 0;
  font-size: 1.2rem;
}

.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
}

.remember-me {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.remember-me input[type="checkbox"] {
  width: 16px;
  height: 16px;
  accent-color: #ff4e50;
}

.forgot-password {
  color: #ff4e50;
  text-decoration: none;
  transition: all 0.2s ease;
}

.forgot-password:hover {
  color: #fc913a;
  text-decoration: underline;
}

.error-message {
  background: rgba(255, 78, 80, 0.1);
  border-left: 4px solid #ff4e50;
  color: #ff4e50;
  padding: 0.8rem 1rem;
  font-size: 0.9rem;
  border-radius: 4px;
}

.login-button {
  background: linear-gradient(to right, #ff4e50, #fc913a);
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  height: 3.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-button:hover:not(:disabled) {
  box-shadow: 0 5px 15px rgba(255, 78, 80, 0.3);
}

.login-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.spinner {
  width: 24px;
  height: 24px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.divider {
  display: flex;
  align-items: center;
  color: #ccc;
  font-size: 0.9rem;
  margin: 2rem 0;
}

.divider::before, .divider::after {
  content: "";
  flex: 1;
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
}

.divider span {
  padding: 0 1rem;
}

.social-buttons {
  display: flex;
  gap: 1rem;
  justify-content: space-between;
}

.social-button {
  flex: 1;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: white;
  padding: 0.8rem 0;
  border-radius: 8px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.social-button:hover {
  background: rgba(255, 255, 255, 0.12);
}

.social-button.google:hover {
  border-color: #4285F4;
}

.social-button.facebook:hover {
  border-color: #1877F2;
}

.social-button.twitter:hover {
  border-color: #1DA1F2;
}

.social-icon {
  font-weight: 700;
  font-size: 1.1rem;
}

.signup-prompt {
  margin-top: 2rem;
  text-align: center;
  font-size: 0.95rem;
}

.signup-prompt a {
  color: #ff4e50;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.2s ease;
}

.signup-prompt a:hover {
  color: #fc913a;
  text-decoration: underline;
}

.terms-notice {
  margin-top: 1.5rem;
  font-size: 0.8rem;
  color: #999;
  text-align: center;
}

.terms-notice a {
  color: #ccc;
  text-decoration: none;
  transition: all 0.2s ease;
}

.terms-notice a:hover {
  color: #ff4e50;
  text-decoration: underline;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .login-container {
    padding: 2.5rem 2rem;
  }
}

@media (max-width: 480px) {
  .login-page {
    padding: 1.5rem;
  }
  
  .login-container {
    padding: 2rem 1.5rem;
  }
  
  .logo h1 {
    font-size: 1.8rem;
  }
  
  .login-title {
    font-size: 1.8rem;
  }
  
  .form-options {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  
  .social-buttons {
    flex-direction: column;
  }
}
</style>