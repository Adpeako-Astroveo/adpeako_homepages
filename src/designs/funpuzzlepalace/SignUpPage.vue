<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const signupForm = ref({
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  agreeToTerms: false
});

const isLoading = ref(false);
const showPassword = ref(false);
const showConfirmPassword = ref(false);
const errors = ref({
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  agreeToTerms: '',
  general: ''
});

// Password strength calculator
const passwordStrength = computed(() => {
  const password = signupForm.value.password;
  if (!password) return { score: 0, label: '', class: '' };
  
  let score = 0;
  
  // Check length
  if (password.length >= 8) score += 25;
  
  // Check for lowercase letters
  if (/[a-z]/.test(password)) score += 25;
  
  // Check for uppercase letters
  if (/[A-Z]/.test(password)) score += 25;
  
  // Check for numbers or special characters
  if (/[0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)) score += 25;
  
  let label, className;
  if (score <= 25) {
    label = 'Weak';
    className = 'weak';
  } else if (score <= 50) {
    label = 'Fair';
    className = 'fair';
  } else if (score <= 75) {
    label = 'Good';
    className = 'good';
  } else {
    label = 'Strong';
    className = 'strong';
  }
  
  return { score, label, class: className };
});

const validateForm = () => {
  let isValid = true;
  errors.value = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: '',
    general: ''
  };
  
  // Username validation
  if (!signupForm.value.username.trim()) {
    errors.value.username = 'Username is required';
    isValid = false;
  } else if (signupForm.value.username.length < 3) {
    errors.value.username = 'Username must be at least 3 characters';
    isValid = false;
  }
  
  // Email validation
  const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  if (!signupForm.value.email.trim()) {
    errors.value.email = 'Email is required';
    isValid = false;
  } else if (!emailRegex.test(signupForm.value.email)) {
    errors.value.email = 'Please enter a valid email address';
    isValid = false;
  }
  
  // Password validation
  if (!signupForm.value.password) {
    errors.value.password = 'Password is required';
    isValid = false;
  } else if (signupForm.value.password.length < 8) {
    errors.value.password = 'Password must be at least 8 characters';
    isValid = false;
  } else if (passwordStrength.value.score < 50) {
    errors.value.password = 'Please use a stronger password';
    isValid = false;
  }
  
  // Confirm password validation
  if (!signupForm.value.confirmPassword) {
    errors.value.confirmPassword = 'Please confirm your password';
    isValid = false;
  } else if (signupForm.value.confirmPassword !== signupForm.value.password) {
    errors.value.confirmPassword = 'Passwords do not match';
    isValid = false;
  }
  
  // Terms agreement validation
  if (!signupForm.value.agreeToTerms) {
    errors.value.agreeToTerms = 'You must agree to the terms and conditions';
    isValid = false;
  }
  
  return isValid;
};

const handleSignup = async () => {
  if (!validateForm()) return;
  
  isLoading.value = true;
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // For demo purposes, show a success message and redirect
    alert('Account created successfully! Redirecting to login page...');
    router.push('/funpuzzlepalace/login');
  } catch (error) {
    errors.value.general = 'An error occurred. Please try again.';
    isLoading.value = false;
  }
};

const goToLogin = () => {
  router.push('/funpuzzlepalace/login');
};
</script>

<template>
  <div class="signup-page">
    <div class="signup-container">
      <div class="signup-header">
        <h1 class="glowing-text">Create Account</h1>
        <p>Join Fun Puzzle Palace to access premium games</p>
      </div>
      
      <form @submit.prevent="handleSignup" class="signup-form">
        <div class="form-group">
          <label for="username">Username</label>
          <input
            type="text"
            id="username"
            v-model="signupForm.username"
            placeholder="Choose a username"
            :class="{ 'error': errors.username }"
          />
          <span v-if="errors.username" class="error-text">{{ errors.username }}</span>
        </div>
        
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            v-model="signupForm.email"
            placeholder="Enter your email"
            :class="{ 'error': errors.email }"
          />
          <span v-if="errors.email" class="error-text">{{ errors.email }}</span>
        </div>
        
        <div class="form-group">
          <label for="password">Password</label>
          <div class="password-input">
            <input
              :type="showPassword ? 'text' : 'password'"
              id="password"
              v-model="signupForm.password"
              placeholder="Create a password"
              :class="{ 'error': errors.password }"
            />
            <button 
              type="button" 
              @click="showPassword = !showPassword" 
              class="toggle-password-btn"
            >
              {{ showPassword ? '👁️' : '👁️‍🗨️' }}
            </button>
          </div>
          <span v-if="errors.password" class="error-text">{{ errors.password }}</span>
          
          <div v-if="signupForm.password" class="password-strength">
            <div class="strength-bar">
              <div 
                class="strength-progress" 
                :class="passwordStrength.class"
                :style="{ width: `${passwordStrength.score}%` }"
              ></div>
            </div>
            <span class="strength-text" :class="passwordStrength.class">{{ passwordStrength.label }}</span>
          </div>
        </div>
        
        <div class="form-group">
          <label for="confirm-password">Confirm Password</label>
          <div class="password-input">
            <input
              :type="showConfirmPassword ? 'text' : 'password'"
              id="confirm-password"
              v-model="signupForm.confirmPassword"
              placeholder="Confirm your password"
              :class="{ 'error': errors.confirmPassword }"
            />
            <button 
              type="button" 
              @click="showConfirmPassword = !showConfirmPassword" 
              class="toggle-password-btn"
            >
              {{ showConfirmPassword ? '👁️' : '👁️‍🗨️' }}
            </button>
          </div>
          <span v-if="errors.confirmPassword" class="error-text">{{ errors.confirmPassword }}</span>
        </div>
        
        <div class="terms-agreement">
          <input 
            type="checkbox" 
            id="terms" 
            v-model="signupForm.agreeToTerms"
          />
          <div>
            <label for="terms">I agree to the <a href="/funpuzzlepalace/privacy">Terms & Conditions</a> and <a href="/funpuzzlepalace/privacy">Privacy Policy</a></label>
            <span v-if="errors.agreeToTerms" class="error-text block">{{ errors.agreeToTerms }}</span>
          </div>
        </div>
        
        <div v-if="errors.general" class="general-error">
          {{ errors.general }}
        </div>
        
        <button 
          type="submit" 
          class="signup-button" 
          :disabled="isLoading"
        >
          <span v-if="isLoading" class="loading-spinner"></span>
          <span v-else>Create Account</span>
        </button>
      </form>
      
      <div class="social-signup">
        <p>Or sign up with</p>
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
      
      <div class="login-link">
        Already have an account? 
        <button @click="goToLogin" class="text-link">Sign In</button>
      </div>
    </div>
    
    <div class="signup-background">
      <div class="grid-lines"></div>
      <div class="glow-circle-1"></div>
      <div class="glow-circle-2"></div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

.signup-page {
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

.signup-background {
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

.signup-container {
  max-width: 500px;
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

.signup-header {
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

.signup-header p {
  color: #CBD5E1;
  font-size: 1.1rem;
}

/* Form Styles */
.signup-form {
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

.error-text {
  display: block;
  color: #EF4444;
  font-size: 0.85rem;
  margin-top: 0.5rem;
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

/* Password Strength */
.password-strength {
  margin-top: 0.75rem;
}

.strength-bar {
  height: 6px;
  background: rgba(51, 65, 85, 0.5);
  border-radius: 3px;
  margin-bottom: 0.5rem;
  overflow: hidden;
}

.strength-progress {
  height: 100%;
  border-radius: 3px;
  transition: all 0.3s ease;
}

.strength-progress.weak {
  background: #EF4444;
}

.strength-progress.fair {
  background: #F59E0B;
}

.strength-progress.good {
  background: #10B981;
}

.strength-progress.strong {
  background: #059669;
}

.strength-text {
  font-size: 0.85rem;
}

.strength-text.weak {
  color: #EF4444;
}

.strength-text.fair {
  color: #F59E0B;
}

.strength-text.good {
  color: #10B981;
}

.strength-text.strong {
  color: #059669;
}

/* Terms Agreement */
.terms-agreement {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.terms-agreement label {
  color: #CBD5E1;
  font-size: 0.95rem;
  cursor: pointer;
}

.terms-agreement a {
  color: #8B5CF6;
  text-decoration: none;
  transition: all 0.3s ease;
}

.terms-agreement a:hover {
  color: #EC4899;
  text-decoration: underline;
}

.block {
  display: block;
}

/* General Error */
.general-error {
  color: #EF4444;
  background: rgba(239, 68, 68, 0.1);
  padding: 0.75rem 1rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
}

/* Signup Button */
.signup-button {
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

.signup-button:hover:not(:disabled) {
  box-shadow: 0 0 15px rgba(139, 92, 246, 0.5);
  transform: translateY(-2px);
}

.signup-button:disabled {
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

/* Social Signup */
.social-signup {
  margin-bottom: 2.5rem;
  text-align: center;
}

.social-signup p {
  color: #CBD5E1;
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
  position: relative;
}

.social-signup p::before,
.social-signup p::after {
  content: '';
  position: absolute;
  top: 50%;
  width: 20%;
  height: 1px;
  background: #334155;
}

.social-signup p::before {
  left: 0;
}

.social-signup p::after {
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

/* Login Link */
.login-link {
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
  .signup-container {
    padding: 2rem 1.5rem;
  }
  
  h1.glowing-text {
    font-size: 2rem;
  }
  
  .social-buttons {
    flex-direction: column;
  }
  
  .terms-agreement {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }
}
</style>