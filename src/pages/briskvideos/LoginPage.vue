<template>
  <div class="briskvideos-login">
    <div class="login-container">
      <div class="login-header">
        <div class="logo">
          <img src="/briskvideos-logo.svg" alt="BriskVideos Logo">
          <h1>BriskVideos</h1>
        </div>
        <div class="tabs">
          <button 
            @click="activeTab = 'login'" 
            :class="{ active: activeTab === 'login' }"
            class="tab-btn"
          >
            Login
          </button>
          <button 
            @click="activeTab = 'signup'" 
            :class="{ active: activeTab === 'signup' }"
            class="tab-btn"
          >
            Sign Up
          </button>
        </div>
      </div>
      
      <!-- Login Form -->
      <form v-if="activeTab === 'login'" @submit.prevent="handleLogin" class="auth-form">
        <div class="form-group">
          <label for="login-email">Email</label>
          <input 
            type="email" 
            id="login-email" 
            v-model="loginForm.email" 
            required 
            placeholder="Enter your email"
            :class="{ 'error': loginError }"
          >
        </div>
        
        <div class="form-group">
          <label for="login-password">Password</label>
          <div class="password-input">
            <input 
              :type="showLoginPassword ? 'text' : 'password'" 
              id="login-password" 
              v-model="loginForm.password" 
              required 
              placeholder="Enter your password"
              :class="{ 'error': loginError }"
            >
            <button 
              type="button" 
              @click="showLoginPassword = !showLoginPassword" 
              class="toggle-password"
            >
              {{ showLoginPassword ? '🙈' : '👁️' }}
            </button>
          </div>
        </div>
        
        <div class="remember-forgot">
          <div class="remember-me">
            <input type="checkbox" id="remember" v-model="loginForm.remember">
            <label for="remember">Remember me</label>
          </div>
          <a href="#" class="forgot-link">Forgot Password?</a>
        </div>
        
        <div v-if="loginError" class="error-message">
          {{ loginError }}
        </div>
        
        <button type="submit" class="auth-button" :disabled="isLoading">
          <span v-if="isLoading" class="loader"></span>
          <span v-else>Login</span>
        </button>
        
        <div class="social-login">
          <p>Or login with</p>
          <div class="social-buttons">
            <button type="button" class="social-btn google">
              Google
            </button>
            <button type="button" class="social-btn facebook">
              Facebook
            </button>
            <button type="button" class="social-btn twitter">
              Twitter
            </button>
          </div>
        </div>
      </form>
      
      <!-- Signup Form -->
      <form v-else @submit.prevent="handleSignup" class="auth-form">
        <div class="form-group">
          <label for="signup-username">Username</label>
          <input 
            type="text" 
            id="signup-username" 
            v-model="signupForm.username" 
            required 
            placeholder="Choose a username"
            :class="{ 'error': signupErrors.username }"
          >
          <span v-if="signupErrors.username" class="field-error">{{ signupErrors.username }}</span>
        </div>
        
        <div class="form-group">
          <label for="signup-email">Email</label>
          <input 
            type="email" 
            id="signup-email" 
            v-model="signupForm.email" 
            required 
            placeholder="Enter your email"
            :class="{ 'error': signupErrors.email }"
          >
          <span v-if="signupErrors.email" class="field-error">{{ signupErrors.email }}</span>
        </div>
        
        <div class="form-group">
          <label for="signup-password">Password</label>
          <div class="password-input">
            <input 
              :type="showSignupPassword ? 'text' : 'password'" 
              id="signup-password" 
              v-model="signupForm.password" 
              required 
              placeholder="Create a password"
              :class="{ 'error': signupErrors.password }"
            >
            <button 
              type="button" 
              @click="showSignupPassword = !showSignupPassword" 
              class="toggle-password"
            >
              {{ showSignupPassword ? '🙈' : '👁️' }}
            </button>
          </div>
          <span v-if="signupErrors.password" class="field-error">{{ signupErrors.password }}</span>
          <div class="password-strength" v-if="signupForm.password">
            <div class="strength-bar">
              <div 
                class="strength-progress" 
                :style="{ width: passwordStrength.percent + '%' }"
                :class="passwordStrength.class"
              ></div>
            </div>
            <span class="strength-text">{{ passwordStrength.text }}</span>
          </div>
        </div>
        
        <div class="form-group">
          <label for="signup-confirm">Confirm Password</label>
          <div class="password-input">
            <input 
              :type="showConfirmPassword ? 'text' : 'password'" 
              id="signup-confirm" 
              v-model="signupForm.confirmPassword" 
              required 
              placeholder="Confirm your password"
              :class="{ 'error': signupErrors.confirmPassword }"
            >
            <button 
              type="button" 
              @click="showConfirmPassword = !showConfirmPassword" 
              class="toggle-password"
            >
              {{ showConfirmPassword ? '🙈' : '👁️' }}
            </button>
          </div>
          <span v-if="signupErrors.confirmPassword" class="field-error">{{ signupErrors.confirmPassword }}</span>
        </div>
        
        <div class="terms-agreement">
          <input type="checkbox" id="terms" v-model="signupForm.agreeToTerms">
          <label for="terms">I agree to the <a href="/privacy">Terms of Service and Privacy Policy</a></label>
          <span v-if="signupErrors.agreeToTerms" class="field-error">{{ signupErrors.agreeToTerms }}</span>
        </div>
        
        <button type="submit" class="auth-button" :disabled="isLoading || !signupForm.agreeToTerms">
          <span v-if="isLoading" class="loader"></span>
          <span v-else>Create Account</span>
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const activeTab = ref('login');
const isLoading = ref(false);
const showLoginPassword = ref(false);
const showSignupPassword = ref(false);
const showConfirmPassword = ref(false);
const loginError = ref('');

// Login form data
const loginForm = ref({
  email: '',
  password: '',
  remember: false
});

// Signup form data
const signupForm = ref({
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  agreeToTerms: false
});

// Signup form errors
const signupErrors = ref({
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  agreeToTerms: ''
});

// Password strength calculator
const passwordStrength = computed(() => {
  const password = signupForm.value.password;
  
  if (!password) {
    return {
      percent: 0,
      text: '',
      class: ''
    };
  }
  
  let strength = 0;
  let feedback = '';
  
  // Length check
  if (password.length >= 8) {
    strength += 25;
  }
  
  // Contains lowercase
  if (/[a-z]/.test(password)) {
    strength += 25;
  }
  
  // Contains uppercase
  if (/[A-Z]/.test(password)) {
    strength += 25;
  }
  
  // Contains number or special character
  if (/[0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
    strength += 25;
  }
  
  let strengthClass = '';
  if (strength <= 25) {
    feedback = 'Weak';
    strengthClass = 'weak';
  } else if (strength <= 50) {
    feedback = 'Fair';
    strengthClass = 'fair';
  } else if (strength <= 75) {
    feedback = 'Good';
    strengthClass = 'good';
  } else {
    feedback = 'Strong';
    strengthClass = 'strong';
  }
  
  return {
    percent: strength,
    text: feedback,
    class: strengthClass
  };
});

// Login handler
const handleLogin = async () => {
  isLoading.value = true;
  loginError.value = '';
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // For demo purposes, show an error message
    loginError.value = 'Invalid email or password. Please try again.';
    
    // In a real app, you'd handle successful login here
    // router.push('/');
    
    isLoading.value = false;
  } catch (error) {
    loginError.value = 'An unexpected error occurred. Please try again.';
    isLoading.value = false;
  }
};

// Validate signup form
const validateSignupForm = () => {
  let isValid = true;
  signupErrors.value = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: ''
  };
  
  // Username validation
  if (signupForm.value.username.length < 3) {
    signupErrors.value.username = 'Username must be at least 3 characters';
    isValid = false;
  }
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(signupForm.value.email)) {
    signupErrors.value.email = 'Please enter a valid email address';
    isValid = false;
  }
  
  // Password validation
  if (signupForm.value.password.length < 8) {
    signupErrors.value.password = 'Password must be at least 8 characters';
    isValid = false;
  }
  
  // Confirm password validation
  if (signupForm.value.password !== signupForm.value.confirmPassword) {
    signupErrors.value.confirmPassword = 'Passwords do not match';
    isValid = false;
  }
  
  // Terms agreement
  if (!signupForm.value.agreeToTerms) {
    signupErrors.value.agreeToTerms = 'You must agree to the terms';
    isValid = false;
  }
  
  return isValid;
};

// Signup handler
const handleSignup = async () => {
  if (!validateSignupForm()) {
    return;
  }
  
  isLoading.value = true;
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // In a real app, you'd handle successful signup here
    alert('Account created successfully! You can now log in.');
    
    // Reset form and switch to login tab
    signupForm.value = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      agreeToTerms: false
    };
    
    activeTab.value = 'login';
    
    isLoading.value = false;
  } catch (error) {
    alert('An unexpected error occurred. Please try again.');
    isLoading.value = false;
  }
};
</script>

<style scoped>
.briskvideos-login {
  background-color: #0a0a0a;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  font-family: 'Inter', 'Roboto', sans-serif;
  color: #ffffff;
  position: relative;
  overflow: hidden;
}

.briskvideos-login::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 20% 30%, rgba(255, 0, 255, 0.15) 0%, transparent 40%),
    radial-gradient(circle at 80% 70%, rgba(0, 255, 255, 0.15) 0%, transparent 40%);
  z-index: 0;
}

.login-container {
  background: rgba(26, 26, 26, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  width: 100%;
  max-width: 500px;
  padding: 2.5rem;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  z-index: 1;
}

/* Header and Tabs */
.login-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.logo img {
  width: 50px;
  height: 50px;
  margin-right: 1rem;
}

.logo h1 {
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(to right, #ff00ff, #00ffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
}

.tabs {
  display: flex;
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 2rem;
}

.tab-btn {
  flex: 1;
  background: transparent;
  border: none;
  color: #aaaaaa;
  padding: 1rem;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}

.tab-btn.active {
  color: #ffffff;
}

.tab-btn.active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, #ff00ff, #00ffff);
}

/* Form Styles */
.auth-form {
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
  color: #cccccc;
}

.form-group input {
  padding: 1rem;
  background: rgba(13, 13, 13, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: #ffffff;
  transition: all 0.3s ease;
}

.form-group input:focus {
  outline: none;
  border-color: #00ffff;
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.2);
}

.form-group input.error {
  border-color: #ff3333;
}

.field-error {
  color: #ff3333;
  font-size: 0.8rem;
  margin-top: 0.25rem;
}

.password-input {
  position: relative;
  display: flex;
  align-items: center;
}

.toggle-password {
  position: absolute;
  right: 1rem;
  background: transparent;
  border: none;
  color: #aaaaaa;
  cursor: pointer;
  font-size: 1.1rem;
  padding: 0;
}

.remember-forgot {
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

.forgot-link {
  color: #00ffff;
  text-decoration: none;
  transition: all 0.3s ease;
}

.forgot-link:hover {
  text-decoration: underline;
  color: #ff00ff;
}

.error-message {
  background: rgba(255, 51, 51, 0.1);
  border-left: 3px solid #ff3333;
  color: #ff3333;
  padding: 0.75rem;
  border-radius: 5px;
  font-size: 0.9rem;
}

.auth-button {
  background: linear-gradient(90deg, #ff00ff, #00ffff);
  color: #000000;
  font-weight: 600;
  padding: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  font-size: 1rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.auth-button::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 100%);
  transform: rotate(30deg);
  transition: all 0.3s ease;
  opacity: 0;
}

.auth-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(255, 0, 255, 0.3);
}

.auth-button:hover::before {
  animation: shineEffect 1s;
}

@keyframes shineEffect {
  0% {
    left: -50%;
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    left: 120%;
    opacity: 0;
  }
}

.auth-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}

.loader {
  width: 20px;
  height: 20px;
  border: 2px solid rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  border-top-color: #000000;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Social Login */
.social-login {
  text-align: center;
  margin-top: 1.5rem;
}

.social-login p {
  font-size: 0.9rem;
  color: #aaaaaa;
  position: relative;
  margin-bottom: 1.5rem;
}

.social-login p::before,
.social-login p::after {
  content: '';
  position: absolute;
  top: 50%;
  width: 25%;
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
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
  background: rgba(13, 13, 13, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #ffffff;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.social-btn:hover {
  transform: translateY(-2px);
}

.social-btn.google:hover {
  background: rgba(234, 67, 53, 0.1);
  border-color: #EA4335;
  color: #EA4335;
}

.social-btn.facebook:hover {
  background: rgba(66, 103, 178, 0.1);
  border-color: #4267B2;
  color: #4267B2;
}

.social-btn.twitter:hover {
  background: rgba(29, 161, 242, 0.1);
  border-color: #1DA1F2;
  color: #1DA1F2;
}

/* Terms Agreement */
.terms-agreement {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

.terms-agreement input {
  margin-top: 0.25rem;
}

.terms-agreement label {
  font-size: 0.9rem;
  color: #cccccc;
  line-height: 1.5;
}

.terms-agreement a {
  color: #00ffff;
  text-decoration: none;
  transition: all 0.3s ease;
}

.terms-agreement a:hover {
  color: #ff00ff;
  text-decoration: underline;
}

/* Password Strength Indicator */
.password-strength {
  margin-top: 0.5rem;
}

.strength-bar {
  height: 5px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  margin-bottom: 0.5rem;
}

.strength-progress {
  height: 100%;
  border-radius: 5px;
  transition: width 0.3s ease, background-color 0.3s ease;
}

.strength-progress.weak {
  background: #ff3333;
}

.strength-progress.fair {
  background: #ff9900;
}

.strength-progress.good {
  background: #ffff00;
}

.strength-progress.strong {
  background: #00ff00;
}

.strength-text {
  font-size: 0.8rem;
  color: #aaaaaa;
}

/* Responsive Design */
@media (max-width: 600px) {
  .login-container {
    padding: 2rem 1.5rem;
    max-width: 100%;
  }
  
  .logo h1 {
    font-size: 1.8rem;
  }
  
  .social-buttons {
    flex-direction: column;
  }
  
  .remember-forgot {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }
}

@media (max-width: 400px) {
  .login-container {
    padding: 1.5rem 1rem;
  }
  
  .logo img {
    width: 40px;
    height: 40px;
  }
  
  .logo h1 {
    font-size: 1.5rem;
  }
  
  .form-group input {
    padding: 0.8rem;
  }
}
</style>