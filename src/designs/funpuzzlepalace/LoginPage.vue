<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const loginForm = ref({
  email: '',
  password: '',
  rememberMe: false
});

const isLoading = ref(false);
const showPassword = ref(false);
const loginError = ref('');

const validateEmail = (email) => {
  return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email);
};

const handleLogin = async () => {
  // Reset error
  loginError.value = '';
  
  // Validate form
  if (!loginForm.value.email) {
    loginError.value = 'Email is required';
    return;
  }
  
  if (!validateEmail(loginForm.value.email)) {
    loginError.value = 'Please enter a valid email address';
    return;
  }
  
  if (!loginForm.value.password) {
    loginError.value = 'Password is required';
    return;
  }
  
  // Simulate login process
  try {
    isLoading.value = true;
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // For demo purposes, show an error message
    // In a real app, you would authenticate with your backend
    loginError.value = 'Invalid credentials. Please try again.';
    isLoading.value = false;
  } catch (error) {
    loginError.value = 'An error occurred. Please try again.';
    isLoading.value = false;
  }
};

const handleForgotPassword = () => {
  alert('Password reset functionality would be implemented here');
};

const goToSignUp = () => {
  router.push('/funpuzzlepalace/signup');
};
</script>

<template>
  <div class="login-page">
    <div class="login-container">
      <div class="login-header">
        <h1 class="glowing-text">Sign In</h1>
        <p>Welcome back! Sign in to access your account</p>
      </div>
      
      <form @submit.prevent="handleLogin" class="login-form">
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            v-model="loginForm.email"
            placeholder="Enter your email"
            :class="{ 'error': loginError && !loginForm.email }"
          />
        </div>
        
        <div class="form-group">
          <label for="password">Password</label>
          <div class="password-input">
            <input
              :type="showPassword ? 'text' : 'password'"
              id="password"
              v-model="loginForm.password"
              placeholder="Enter your password"
              :class="{ 'error': loginError && !loginForm.password }"
            />
            <button 
              type="button" 
              @click="showPassword = !showPassword" 
              class="toggle-password-btn"
            >
              {{ showPassword ? '👁️' : '👁️‍🗨️' }}
            </button>
          </div>
        </div>
        
        <div class="form-options">
          <div class="remember-me">
            <input 
              type="checkbox" 
              id="remember-me" 
              v-model="loginForm.rememberMe"
            />
            <label for="remember-me">Remember me</label>
          </div>
          <button 
            type="button" 
            class="forgot-password" 
            @click="handleForgotPassword"
          >
            Forgot password?
          </button>
        </div>
        
        <div v-if="loginError" class="error-message">
          {{ loginError }}
        </div>
        
        <button 
          type="submit" 
          class="login-button" 
          :disabled="isLoading"
        >
          <span v-if="isLoading" class="loading-spinner"></span>
          <span v-else>Sign In</span>
        </button>
      </form>
      
      <div class="social-login">
        <p>Or sign in with</p>
        <div class="social-buttons">
          <button class="social-btn google">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" class="social-icon" />
            Google
          </button>
          <button class="social-btn facebook">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" class="social-icon" />
            Facebook
          </button>
          <button class="social-btn twitter">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg" alt="Twitter" class="social-icon" />
            Twitter
          </button>
        </div>
      </div>
      
      <div class="sign-up-link">
        Don't have an account? 
        <button @click="goToSignUp" class="text-link">Sign Up</button>
      </div>
    </div>
    
    <div class="login-background">
      <div class="grid-lines"></div>
      <div class="glow-circle-1"></div>
      <div class="glow-circle-2"></div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

.login-page {
  min-height: 100vh;
  background-color: #0F172A;
  color: #F8FAFC;
  font-family: 'Inter', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 1.5rem;
  position: relative;
  overflow: hidden;
}

.login-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.grid-lines {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(to right, rgba(139, 92, 246, 0.1) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(139, 92, 246, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  transform: perspective(500px) rotateX(60deg);
  transform-origin: center top;
  opacity: 0.5;
}

.glow-circle-1 {
  position: absolute;
  top: 20%;
  left: 15%;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, rgba(139, 92, 246, 0) 70%);
  filter: blur(30px);
  animation: pulse 8s infinite alternate;
}

.glow-circle-2 {
  position: absolute;
  bottom: 10%;
  right: 10%;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, rgba(236, 72, 153, 0) 70%);
  filter: blur(40px);
  animation: pulse 12s infinite alternate-reverse;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 0.5;
  }
  100% {
    transform: scale(1.3);
    opacity: 0.8;
  }
}

.login-container {
  max-width: 450px;
  width: 100%;
  background: rgba(30, 41, 59, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid #334155;
  padding: 2.5rem;
  box-shadow: 
    0 20px 25px -5px rgba(0, 0, 0, 0.2),
    0 10px 10px -5px rgba(0, 0, 0, 0.1),
    0 0 15px rgba(139, 92, 246, 0.5);
  position: relative;
  z-index: 1;
}

.login-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.glowing-text {
  font-family: 'Orbitron', sans-serif;
  font-weight: 700;
  color: #F8FAFC;
  text-shadow: 
    0 0 5px rgba(139, 92, 246, 0.5),
    0 0 10px rgba(139, 92, 246, 0.3),
    0 0 15px rgba(139, 92, 246, 0.2);
  margin-bottom: 1rem;
}

h1.glowing-text {
  font-size: 2.5rem;
  background: linear-gradient(to right, #8B5CF6, #EC4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.login-header p {
  color: #CBD5E1;
  font-size: 1.1rem;
}

/* Form Styles */
.login-form {
  margin-bottom: 2.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  color: #F8FAFC;
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.form-group input {
  width: 100%;
  padding: 0.75rem 1rem;
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid #334155;
  border-radius: 8px;
  color: #F8FAFC;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-group input:focus {
  outline: none;
  border-color: #8B5CF6;
  box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.3);
}

.form-group input.error {
  border-color: #EF4444;
}

.password-input {
  position: relative;
}

.toggle-password-btn {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  color: #CBD5E1;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 0;
}

.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.remember-me {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #CBD5E1;
  font-size: 0.95rem;
}

.forgot-password {
  background: transparent;
  border: none;
  color: #8B5CF6;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.forgot-password:hover {
  color: #EC4899;
  text-decoration: underline;
}

.error-message {
  color: #EF4444;
  background: rgba(239, 68, 68, 0.1);
  padding: 0.75rem 1rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
}

.login-button {
  width: 100%;
  padding: 0.85rem;
  background: linear-gradient(to right, #8B5CF6, #EC4899);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
}

.login-button:hover:not(:disabled) {
  box-shadow: 0 0 15px rgba(139, 92, 246, 0.5);
  transform: translateY(-2px);
}

.login-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.loading-spinner {
  width: 1.5rem;
  height: 1.5rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top: 2px solid white;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Social Login */
.social-login {
  margin-bottom: 2.5rem;
  text-align: center;
}

.social-login p {
  color: #CBD5E1;
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
  position: relative;
}

.social-login p::before,
.social-login p::after {
  content: '';
  position: absolute;
  top: 50%;
  width: 20%;
  height: 1px;
  background: #334155;
}

.social-login p::before {
  left: 0;
}

.social-login p::after {
  right: 0;
}

.social-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.social-btn {
  padding: 0.75rem 1rem;
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid #334155;
  border-radius: 8px;
  color: #F8FAFC;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  transition: all 0.3s ease;
  flex: 1;
}

.social-btn:hover {
  transform: translateY(-2px);
}

.social-btn.google:hover {
  border-color: #DB4437;
  box-shadow: 0 0 10px rgba(219, 68, 55, 0.3);
}

.social-btn.facebook:hover {
  border-color: #4267B2;
  box-shadow: 0 0 10px rgba(66, 103, 178, 0.3);
}

.social-btn.twitter:hover {
  border-color: #1DA1F2;
  box-shadow: 0 0 10px rgba(29, 161, 242, 0.3);
}

.social-icon {
  width: 20px;
  height: 20px;
}

/* Sign Up Link */
.sign-up-link {
  text-align: center;
  color: #CBD5E1;
  font-size: 1rem;
}

.text-link {
  background: transparent;
  border: none;
  color: #8B5CF6;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
  margin-left: 0.25rem;
}

.text-link:hover {
  color: #EC4899;
  text-decoration: underline;
}

/* Responsive Design */
@media (max-width: 480px) {
  .login-container {
    padding: 2rem 1.5rem;
  }
  
  h1.glowing-text {
    font-size: 2rem;
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