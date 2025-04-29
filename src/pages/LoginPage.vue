<script setup>
import { ref } from 'vue';

const msisdn = ref('');
const error = ref('');
const showSignUpButton = ref(false);

const handleSubmit = async (e) => {
  e.preventDefault();
  error.value = '';
  showSignUpButton.value = false;

  if (!msisdn.value) {
    error.value = 'Please enter your phone number';
    return;
  }

  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  error.value = 'This MSISDN is not subscribed';
  showSignUpButton.value = true;
};

const handleSignUp = () => {
  window.location.href = 'https://sa.lofty-sprout.com/offer';
};
</script>

<template>
  <div class="login-page">
    <div class="login-container">
      <h1>Login</h1>
      <form @submit="handleSubmit" class="login-form">
        <div class="form-group">
          <label for="msisdn">Phone Number (MSISDN)</label>
          <input 
            type="tel" 
            id="msisdn" 
            v-model="msisdn"
            placeholder="Enter your phone number"
            pattern="[0-9]+"
            required
          />
        </div>
        <p v-if="error" class="error">{{ error }}</p>
        <button type="submit" class="submit-btn">Login</button>
        <button 
          v-if="showSignUpButton" 
          type="button" 
          class="signup-btn"
          @click="handleSignUp"
        >
          Sign up here
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.login-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: #f7fafc;
}

.login-container {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

h1 {
  text-align: center;
  color: #2d3748;
  margin-bottom: 2rem;
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

label {
  color: #4a5568;
  font-weight: 500;
}

input {
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  font-size: 1rem;
}

input:focus {
  outline: none;
  border-color: #4299e1;
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.1);
}

.error {
  color: #e53e3e;
  font-size: 0.875rem;
  margin-top: -0.5rem;
}

.submit-btn {
  background: #4299e1;
  color: white;
  padding: 0.75rem;
  border: none;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.submit-btn:hover {
  background: #3182ce;
}

.signup-btn {
  background: #48bb78;
  color: white;
  padding: 0.75rem;
  border: none;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
  margin-top: 1rem;
}

.signup-btn:hover {
  background: #38a169;
}
</style>