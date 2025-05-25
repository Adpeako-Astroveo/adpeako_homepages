<template>
  <div class="briskvideos-signup">
    <div class="signup-container">
      <div class="signup-header">
        <div class="logo">
          <img src="/briskvideos-logo.svg" alt="BriskVideos Logo">
          <h1>BriskVideos</h1>
        </div>
        <p class="subtitle">Create your gaming account today</p>
      </div>
      
      <form @submit.prevent="handleSignup" class="signup-form">
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
              :type="showPassword ? 'text' : 'password'" 
              id="signup-password" 
              v-model="signupForm.password" 
              required 
              placeholder="Create a password"
              :class="{ 'error': signupErrors.password }"
            >
            <button 
              type="button" 
              @click="showPassword = !showPassword" 
              class="toggle-password"
            >
              {{ showPassword ? '🙈' : '👁️' }}
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
        
        <div class="form-group">
          <label for="signup-dob">Date of Birth</label>
          <input 
            type="date" 
            id="signup-dob" 
            v-model="signupForm.dateOfBirth" 
            required
            :class="{ 'error': signupErrors.dateOfBirth }"
          >
          <span v-if="signupErrors.dateOfBirth" class="field-error">{{ signupErrors.dateOfBirth }}</span>
        </div>

        <div class="account-type">
          <label class="account-type-label">Account Type</label>
          <div class="account-type-options">
            <div 
              class="account-option" 
              :class="{ active: signupForm.accountType === 'gamer' }"
              @click="signupForm.accountType = 'gamer'"
            >
              <div class="account-icon">🎮</div>
              <div class="account-text">
                <h3>Gamer</h3>
                <p>Play games and track progress</p>
              </div>
            </div>
            <div 
              class="account-option"
              :class="{ active: signupForm.accountType === 'pro' }"
              @click="signupForm.accountType = 'pro'"
            >
              <div class="account-icon">🏆</div>
              <div class="account-text">
                <h3>Pro Gamer</h3>
                <p>Compete in tournaments</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="terms-agreement">
          <input type="checkbox" id="terms" v-model="signupForm.agreeToTerms">
          <label for="terms">I agree to the <a href="/privacy">Terms of Service and Privacy Policy</a></label>
          <span v-if="signupErrors.agreeToTerms" class="field-error">{{ signupErrors.agreeToTerms }}</span>
        </div>
        
        <div class="newsletter-signup">
          <input type="checkbox" id="newsletter" v-model="signupForm.newsletter">
          <label for="newsletter">Send me game updates and special offers</label>
        </div>
        
        <button type="submit" class="auth-button" :disabled="isLoading || !signupForm.agreeToTerms">
          <span v-if="isLoading" class="loader"></span>
          <span v-else>Create Account</span>
        </button>
      </form>
      
      <div class="social-signup">
        <p>Or sign up with</p>
        <div class="social-buttons">
          <button type="button" class="social-btn google">
            <span class="social-icon">G</span>
            Google
          </button>
          <button type="button" class="social-btn facebook">
            <span class="social-icon">f</span>
            Facebook
          </button>
          <button type="button" class="social-btn discord">
            <span class="social-icon">D</span>
            Discord
          </button>
        </div>
      </div>
      
      <div class="login-link">
        Already have an account? <a href="/login">Log in</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const isLoading = ref(false);
const showPassword = ref(false);
const showConfirmPassword = ref(false);

// Signup form data
const signupForm = ref({
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  dateOfBirth: '',
  accountType: 'gamer',
  agreeToTerms: false,
  newsletter: true
});

// Signup form errors
const signupErrors = ref({
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  dateOfBirth: '',
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

// Validate signup form
const validateSignupForm = () => {
  let isValid = true;
  signupErrors.value = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    dateOfBirth: '',
    agreeToTerms: ''
  };
  
  // Username validation
  if (signupForm.value.username.length < 3) {
    signupErrors.value.username = 'Username must be at least 3 characters';
    isValid = false;
  } else if (signupForm.value.username.length > 20) {
    signupErrors.value.username = 'Username cannot exceed 20 characters';
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
  } else if (passwordStrength.value.percent < 50) {
    signupErrors.value.password = 'Please use a stronger password';
    isValid = false;
  }
  
  // Confirm password validation
  if (signupForm.value.password !== signupForm.value.confirmPassword) {
    signupErrors.value.confirmPassword = 'Passwords do not match';
    isValid = false;
  }
  
  // Date of birth validation
  if (!signupForm.value.dateOfBirth) {
    signupErrors.value.dateOfBirth = 'Please enter your date of birth';
    isValid = false;
  } else {
    // Check if user is at least 13 years old
    const dobDate = new Date(signupForm.value.dateOfBirth);
    const today = new Date();
    let age = today.getFullYear() - dobDate.getFullYear();
    const monthDiff = today.getMonth() - dobDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dobDate.getDate())) {
      age--;
    }
    
    if (age < 13) {
      signupErrors.value.dateOfBirth = 'You must be at least 13 years old';
      isValid = false;
    }
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
    alert('Account created successfully! Redirecting to login...');
    
    // Redirect to login page
    router.push('/login');
    
    isLoading.value = false;
  } catch (error) {
    alert('An unexpected error occurred. Please try again.');
    isLoading.value = false;
  }
};
</script>

<style scoped>
.briskvideos-signup {
  background-color: #0a0a0a;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  font-family: 'Inter', 'Roboto', sans-serif;
  color: #ffffff;
  position: relative;
  overflow: hidden;
}

.briskvideos-signup::before {
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

.signup-container {
  background: rgba(26, 26, 26, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  width: 100%;
  max-width: 550px;
  padding: 2.5rem;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  z-index: 1;
  animation: fadeIn 0.5s ease forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Header */
.signup-header {
  text-align: center;
  margin-bottom: 2rem;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
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

.subtitle {
  color: #cccccc;
  font-size: 1.1rem;
}

/* Form Styles */
.signup-form {
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

/* Password Input */
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

/* Account Type */
.account-type {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.account-type-label {
  font-size: 0.9rem;
  color: #cccccc;
}

.account-type-options {
  display: flex;
  gap: 1rem;
}

.account-option {
  flex: 1;
  background: rgba(13, 13, 13, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.account-option:hover {
  border-color: #ff00ff;
}

.account-option.active {
  background: rgba(0, 255, 255, 0.1);
  border-color: #00ffff;
}

.account-icon {
  font-size: 1.5rem;
}

.account-text h3 {
  font-size: 1rem;
  margin: 0 0 0.25rem 0;
}

.account-text p {
  font-size: 0.8rem;
  color: #aaaaaa;
  margin: 0;
}

/* Terms & Newsletter */
.terms-agreement,
.newsletter-signup {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

.terms-agreement input,
.newsletter-signup input {
  margin-top: 0.25rem;
}

.terms-agreement label,
.newsletter-signup label {
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

/* Submit Button */
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

/* Social Signup */
.social-signup {
  margin-top: 2rem;
  text-align: center;
}

.social-signup p {
  font-size: 0.9rem;
  color: #aaaaaa;
  position: relative;
  margin-bottom: 1.5rem;
}

.social-signup p::before,
.social-signup p::after {
  content: '';
  position: absolute;
  top: 50%;
  width: 25%;
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
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
  background: rgba(13, 13, 13, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #ffffff;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.social-btn:hover {
  transform: translateY(-2px);
}

.social-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  font-weight: bold;
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

.social-btn.discord:hover {
  background: rgba(114, 137, 218, 0.1);
  border-color: #7289DA;
  color: #7289DA;
}

/* Login Link */
.login-link {
  text-align: center;
  margin-top: 2rem;
  font-size: 0.9rem;
  color: #aaaaaa;
}

.login-link a {
  color: #00ffff;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.login-link a:hover {
  color: #ff00ff;
  text-decoration: underline;
}

/* Responsive Design */
@media (max-width: 600px) {
  .briskvideos-signup {
    padding: 2rem 1rem;
  }
  
  .signup-container {
    padding: 2rem 1.5rem;
    max-width: 100%;
  }
  
  .logo h1 {
    font-size: 1.8rem;
  }
  
  .social-buttons {
    flex-direction: column;
  }
  
  .account-type-options {
    flex-direction: column;
  }
}

@media (max-width: 400px) {
  .signup-container {
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