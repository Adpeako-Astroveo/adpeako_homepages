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
  agreeToTerms: false
});

// Form errors
const formErrors = ref({
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  dateOfBirth: '',
  agreeToTerms: ''
});

// Check if any field has an error
const hasError = computed(() => {
  return Object.values(formErrors.value).some(error => error.length > 0);
});

// Password strength checker
const passwordStrength = computed(() => {
  const password = signupForm.value.password;
  if (!password) {
    return { text: '', percentage: 0, class: '' };
  }
  
  let strength = 0;
  
  // Criteria
  if (password.length >= 8) strength += 25;
  if (/[A-Z]/.test(password)) strength += 25;
  if (/[0-9]/.test(password)) strength += 25;
  if (/[^A-Za-z0-9]/.test(password)) strength += 25;
  
  // Get class and text based on strength percentage
  let strengthClass = '';
  let strengthText = '';
  
  if (strength <= 25) {
    strengthClass = 'weak';
    strengthText = 'Weak';
  } else if (strength <= 50) {
    strengthClass = 'fair';
    strengthText = 'Fair';
  } else if (strength <= 75) {
    strengthClass = 'good';
    strengthText = 'Good';
  } else {
    strengthClass = 'strong';
    strengthText = 'Strong';
  }
  
  return {
    text: strengthText,
    percentage: strength,
    class: strengthClass
  };
});

// Validate form field
const validateField = (field) => {
  switch(field) {
    case 'username':
      if (!signupForm.value.username) {
        formErrors.value.username = 'Username is required';
      } else if (signupForm.value.username.length < 3) {
        formErrors.value.username = 'Username must be at least 3 characters';
      } else if (signupForm.value.username.length > 20) {
        formErrors.value.username = 'Username cannot exceed 20 characters';
      } else if (!/^[a-zA-Z0-9_]+$/.test(signupForm.value.username)) {
        formErrors.value.username = 'Username can only contain letters, numbers and underscores';
      } else {
        formErrors.value.username = '';
      }
      break;
    case 'email':
      if (!signupForm.value.email) {
        formErrors.value.email = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(signupForm.value.email)) {
        formErrors.value.email = 'Please enter a valid email address';
      } else {
        formErrors.value.email = '';
      }
      break;
    case 'password':
      if (!signupForm.value.password) {
        formErrors.value.password = 'Password is required';
      } else if (signupForm.value.password.length < 8) {
        formErrors.value.password = 'Password must be at least 8 characters';
      } else if (passwordStrength.value.percentage < 50) {
        formErrors.value.password = 'Password is too weak';
      } else {
        formErrors.value.password = '';
      }
      break;
    case 'confirmPassword':
      if (!signupForm.value.confirmPassword) {
        formErrors.value.confirmPassword = 'Please confirm your password';
      } else if (signupForm.value.confirmPassword !== signupForm.value.password) {
        formErrors.value.confirmPassword = 'Passwords do not match';
      } else {
        formErrors.value.confirmPassword = '';
      }
      break;
    case 'dateOfBirth':
      if (!signupForm.value.dateOfBirth) {
        formErrors.value.dateOfBirth = 'Date of birth is required';
      } else {
        const birthDate = new Date(signupForm.value.dateOfBirth);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
          age--;
        }
        
        if (age < 13) {
          formErrors.value.dateOfBirth = 'You must be at least 13 years old';
        } else {
          formErrors.value.dateOfBirth = '';
        }
      }
      break;
    case 'agreeToTerms':
      formErrors.value.agreeToTerms = signupForm.value.agreeToTerms ? '' : 'You must agree to the terms';
      break;
  }
};

// Validate all form fields
const validateForm = () => {
  validateField('username');
  validateField('email');
  validateField('password');
  validateField('confirmPassword');
  validateField('dateOfBirth');
  validateField('agreeToTerms');
  
  return !hasError.value;
};

// Handle signup submission
const handleSignup = async () => {
  if (!validateForm()) return;
  
  isLoading.value = true;
  
  try {
    // Simulate an API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // In a real app, we would register the user with the server
    // For this demo, we'll navigate to the login page
    router.push('/hastyreels/login');
  } catch (error) {
    console.error('Signup error:', error);
    alert('An error occurred during signup. Please try again.');
  } finally {
    isLoading.value = false;
  }
};

// Navigate to login page
const goToLogin = () => {
  router.push('/hastyreels/login');
};

// Social signup options
const socialSignup = (provider) => {
  isLoading.value = true;
  
  // Simulate social signup process
  setTimeout(() => {
    router.push('/hastyreels');
  }, 1500);
};
</script>

<template>
  <div class="signup-page">
    <div class="signup-container">
      <div class="signup-header">
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
        
        <h2 class="signup-title">Create Account</h2>
        <p class="signup-subtitle">Join the HastyReels community today</p>
      </div>
      
      <form @submit.prevent="handleSignup" class="signup-form">
        <div class="form-group">
          <label for="username">Username</label>
          <input 
            type="text" 
            id="username" 
            v-model="signupForm.username" 
            @blur="validateField('username')"
            placeholder="Choose a username"
            :class="{ 'error': formErrors.username }"
          >
          <span v-if="formErrors.username" class="error-text">{{ formErrors.username }}</span>
        </div>
        
        <div class="form-group">
          <label for="email">Email</label>
          <input 
            type="email" 
            id="email" 
            v-model="signupForm.email"
            @blur="validateField('email')"
            placeholder="Enter your email"
            :class="{ 'error': formErrors.email }"
          >
          <span v-if="formErrors.email" class="error-text">{{ formErrors.email }}</span>
        </div>
        
        <div class="form-group">
          <label for="password">Password</label>
          <div class="password-input">
            <input 
              :type="showPassword ? 'text' : 'password'" 
              id="password" 
              v-model="signupForm.password"
              @blur="validateField('password')"
              placeholder="Create a password"
              :class="{ 'error': formErrors.password }"
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
          <span v-if="formErrors.password" class="error-text">{{ formErrors.password }}</span>
          
          <div v-if="signupForm.password" class="password-strength">
            <div class="strength-bar">
              <div 
                class="strength-progress" 
                :style="{ width: passwordStrength.percentage + '%' }" 
                :class="passwordStrength.class"
              ></div>
            </div>
            <span class="strength-text">{{ passwordStrength.text }}</span>
          </div>
        </div>
        
        <div class="form-group">
          <label for="confirm-password">Confirm Password</label>
          <div class="password-input">
            <input 
              :type="showConfirmPassword ? 'text' : 'password'" 
              id="confirm-password" 
              v-model="signupForm.confirmPassword"
              @blur="validateField('confirmPassword')"
              placeholder="Confirm your password"
              :class="{ 'error': formErrors.confirmPassword }"
            >
            <button 
              type="button" 
              class="toggle-password" 
              @click="showConfirmPassword = !showConfirmPassword"
            >
              <span v-if="showConfirmPassword">👁️</span>
              <span v-else>👁️‍🗨️</span>
            </button>
          </div>
          <span v-if="formErrors.confirmPassword" class="error-text">{{ formErrors.confirmPassword }}</span>
        </div>
        
        <div class="form-group">
          <label for="dob">Date of Birth</label>
          <input 
            type="date" 
            id="dob" 
            v-model="signupForm.dateOfBirth"
            @blur="validateField('dateOfBirth')"
            :class="{ 'error': formErrors.dateOfBirth }"
          >
          <span v-if="formErrors.dateOfBirth" class="error-text">{{ formErrors.dateOfBirth }}</span>
        </div>
        
        <div class="form-checkbox">
          <input 
            type="checkbox" 
            id="terms" 
            v-model="signupForm.agreeToTerms"
            @change="validateField('agreeToTerms')"
          >
          <label for="terms">
            I agree to HastyReels' <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
          </label>
        </div>
        <span v-if="formErrors.agreeToTerms" class="error-text">{{ formErrors.agreeToTerms }}</span>
        
        <button 
          type="submit" 
          class="signup-button" 
          :disabled="isLoading || !signupForm.agreeToTerms"
        >
          <span v-if="isLoading" class="spinner"></span>
          <span v-else>Create Account</span>
        </button>
      </form>
      
      <div class="social-signup">
        <div class="divider">
          <span>or sign up with</span>
        </div>
        
        <div class="social-buttons">
          <button @click="socialSignup('google')" class="social-button google">
            <span class="social-icon">G</span>
            Google
          </button>
          
          <button @click="socialSignup('facebook')" class="social-button facebook">
            <span class="social-icon">f</span>
            Facebook
          </button>
          
          <button @click="socialSignup('twitter')" class="social-button twitter">
            <span class="social-icon">𝕏</span>
            Twitter
          </button>
        </div>
      </div>
      
      <div class="login-prompt">
        <p>Already have an account? <a href="#" @click.prevent="goToLogin">Sign in</a></p>
      </div>
    </div>
    
    <div class="signup-backdrop"></div>
  </div>
</template>

<style scoped>
.signup-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  font-family: 'Montserrat', 'Inter', sans-serif;
  color: #fff;
  position: relative;
}

.signup-backdrop {
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

.signup-container {
  background: rgba(20, 20, 20, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  width: 100%;
  max-width: 500px;
  padding: 3rem;
  box-shadow: 0 10px 30px rgba(0,0,0,0.4);
  border: 1px solid rgba(255, 255, 255, 0.1);
  animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.signup-header {
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

.signup-title {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.signup-subtitle {
  color: #ccc;
  font-size: 1rem;
}

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

.error-text {
  color: #ff4e50;
  font-size: 0.85rem;
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

.password-strength {
  margin-top: 0.8rem;
}

.strength-bar {
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 0.5rem;
}

.strength-progress {
  height: 100%;
  transition: width 0.3s ease, background 0.3s ease;
}

.strength-progress.weak {
  background: #ff4e50;
}

.strength-progress.fair {
  background: #fc913a;
}

.strength-progress.good {
  background: #ffb300;
}

.strength-progress.strong {
  background: #4caf50;
}

.strength-text {
  font-size: 0.85rem;
  color: #ccc;
}

.form-checkbox {
  display: flex;
  gap: 0.8rem;
  align-items: flex-start;
}

.form-checkbox input {
  margin-top: 0.25rem;
  width: 16px;
  height: 16px;
  accent-color: #ff4e50;
}

.form-checkbox label {
  font-size: 0.9rem;
  line-height: 1.5;
  color: #ccc;
}

.form-checkbox label a {
  color: #ff4e50;
  text-decoration: none;
  transition: all 0.2s ease;
}

.form-checkbox label a:hover {
  color: #fc913a;
  text-decoration: underline;
}

.signup-button {
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
  margin-top: 0.5rem;
}

.signup-button:hover:not(:disabled) {
  box-shadow: 0 5px 15px rgba(255, 78, 80, 0.3);
}

.signup-button:disabled {
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

.login-prompt {
  margin-top: 2rem;
  text-align: center;
  font-size: 0.95rem;
}

.login-prompt a {
  color: #ff4e50;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.2s ease;
}

.login-prompt a:hover {
  color: #fc913a;
  text-decoration: underline;
}

/* Date input customization */
input[type="date"] {
  appearance: none;
  -webkit-appearance: none;
  padding-right: 2rem;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23ccc' viewBox='0 0 24 24'%3E%3Cpath d='M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1.2rem;
}

input[type="date"]::-webkit-calendar-picker-indicator {
  opacity: 0;
  width: 2rem;
  height: 100%;
  cursor: pointer;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .signup-container {
    padding: 2.5rem 2rem;
  }
}

@media (max-width: 480px) {
  .signup-page {
    padding: 1.5rem;
  }
  
  .signup-container {
    padding: 2rem 1.5rem;
  }
  
  .logo h1 {
    font-size: 1.8rem;
  }
  
  .signup-title {
    font-size: 1.8rem;
  }
  
  .social-buttons {
    flex-direction: column;
  }
}
</style>