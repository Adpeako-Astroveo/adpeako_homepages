<script setup>
import { ref, computed, watch } from 'vue';

const msisdn = ref('');
const country = ref('');
const error = ref('');
const isSubmitting = ref(false);

// Country phone number format examples
const countryPhoneExamples = {
  'Afghanistan': '+93XXXXXXXXX',
  'Albania': '+355XXXXXXXXX',
  'Algeria': '+213XXXXXXXXX',
  'Bangladesh': '+8801XXXXXXXXX',
  'Brazil': '+55XXXXXXXXXXX',
  'Canada': '+1XXXXXXXXXX',
  'China': '+86XXXXXXXXXXX',
  'Egypt': '+20XXXXXXXXXX',
  'France': '+33XXXXXXXXX',
  'Germany': '+49XXXXXXXXXX',
  'India': '+91XXXXXXXXXX',
  'Indonesia': '+62XXXXXXXXXXX',
  'Italy': '+39XXXXXXXXXX',
  'Japan': '+81XXXXXXXXXX',
  'Mexico': '+52XXXXXXXXXX',
  'Nigeria': '+234XXXXXXXXXX',
  'Pakistan': '+92XXXXXXXXXX',
  'Russia': '+7XXXXXXXXXX',
  'Saudi Arabia': '+966XXXXXXXXX',
  'South Africa': '+27XXXXXXXXX',
  'Spain': '+34XXXXXXXXX',
  'Sweden': '+46XXXXXXXXX',
  'Switzerland': '+41XXXXXXXXX',
  'Turkey': '+90XXXXXXXXXX',
  'United Arab Emirates': '+971XXXXXXXXX',
  'United Kingdom': '+44XXXXXXXXXX',
  'United States': '+1XXXXXXXXXX'
};

// Default example for other countries
const defaultExample = '+XXXXXXXXXXXX';

// Computed property for the placeholder text
const phonePlaceholder = computed(() => {
  if (!country.value) return 'Select country first';
  return countryPhoneExamples[country.value] || defaultExample;
});

// Format hint text based on selected country
const formatHint = computed(() => {
  if (!country.value) return 'Format: +CountryCode followed by number';
  return `Format: ${countryPhoneExamples[country.value] || defaultExample}`;
});

const countries = ref([
  'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 
  'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 
  'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 
  'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 
  'Burundi', 'Cabo Verde', 'Cambodia', 'Cameroon', 'Canada', 'Central African Republic', 
  'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo', 'Costa Rica', 'Croatia', 
  'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 
  'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Eswatini', 
  'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 
  'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 
  'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 
  'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Korea, North', 
  'Korea, South', 'Kosovo', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 
  'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Madagascar', 'Malawi', 
  'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 
  'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 
  'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 
  'Nicaragua', 'Niger', 'Nigeria', 'North Macedonia', 'Norway', 'Oman', 'Pakistan', 'Palau', 
  'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 
  'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 
  'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe', 
  'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 
  'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Sudan', 'Spain', 
  'Sri Lanka', 'Sudan', 'Suriname', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 
  'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 
  'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 
  'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 
  'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'
]);

// Clear the mobile number when country changes
watch(country, () => {
  msisdn.value = '';
  error.value = '';
});

const validateMsisdn = () => {
  if (!msisdn.value) {
    error.value = 'Mobile number is required';
    return false;
  } 
  
  if (!/^\+[0-9]{10,15}$/.test(msisdn.value)) {
    error.value = 'Please enter a valid international mobile number';
    return false;
  }
  
  if (!country.value) {
    error.value = 'Please select your country';
    return false;
  }
  
  return true;
};

const handleLogin = async () => {
  error.value = '';
  
  if (!validateMsisdn()) {
    return;
  }
  
  isSubmitting.value = true;
  
  try {
    // Simulate API call verification
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Simulate unregistered number
    error.value = 'This mobile number is not registered.';
    isSubmitting.value = false;
  } catch (err) {
    error.value = 'An unexpected error occurred. Please try again.';
    isSubmitting.value = false;
  }
};
</script>

<template>
  <div class="login-page">
    <div class="login-container">
      <h1>Login to Yellow Racoon</h1>
      <div class="login-form">
        <div class="form-group">
          <label for="country">Country</label>
          <select 
            id="country"
            v-model="country"
            :class="{ 'error': error && !country }"
          >
            <option value="">Select your country</option>
            <option v-for="countryOption in countries" :key="countryOption" :value="countryOption">
              {{ countryOption }}
            </option>
          </select>
        </div>

        <div class="form-group">
          <label for="msisdn">Mobile Number (MSISDN)</label>
          <input 
            type="tel" 
            id="msisdn"
            v-model="msisdn"
            :placeholder="phonePlaceholder"
            :class="{ 'error': error }"
          />
          <p class="format-hint">{{ formatHint }}</p>
        </div>

        <button 
          type="button" 
          class="submit-btn" 
          @click="handleLogin"
          :disabled="isSubmitting"
        >
          <span v-if="isSubmitting">Processing...</span>
          <span v-else>Login Now</span>
        </button>
        
        <div class="error-container" v-if="error">
          <p class="error-message">{{ error }}</p>
        </div>
      </div>
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
  max-width: 500px;
}

h1 {
  text-align: center;
  color: #FFB800;
  margin-bottom: 2rem;
  font-size: 2rem;
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
  font-size: 0.9rem;
}

input, select {
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: all 0.3s ease;
  width: 100%;
  box-sizing: border-box;
}

input:focus, select:focus {
  outline: none;
  border-color: #FFB800;
  box-shadow: 0 0 0 3px rgba(255, 184, 0, 0.1);
}

input.error, select.error {
  border-color: #e53e3e;
}

.format-hint {
  font-size: 0.8rem;
  color: #718096;
  margin-top: 0.25rem;
}

.error-container {
  background: #FEF2F2;
  border: 1px solid #F87171;
  border-radius: 0.5rem;
  padding: 0.75rem;
  margin-top: 0.5rem;
}

.error-message {
  color: #DC2626;
  font-size: 0.875rem;
  margin: 0;
  text-align: center;
}

.submit-btn {
  background: #FFB800;
  color: white;
  padding: 0.75rem;
  border: none;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
  width: 100%;
}

.submit-btn:hover:not(:disabled) {
  background: #FFA200;
  transform: translateY(-2px);
}

.submit-btn:disabled {
  background: #FFC547;
  cursor: not-allowed;
}

/* Improved Responsive Styles */
@media (max-width: 640px) {
  .login-page {
    padding: 1.5rem 1rem;
    align-items: flex-start;
    padding-top: 5rem;
  }

  .login-container {
    padding: 1.5rem;
    border-radius: 0.75rem;
    max-width: 100%;
  }

  h1 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }

  input, select {
    font-size: 0.95rem;
    padding: 0.7rem;
  }
  
  label {
    font-size: 0.85rem;
  }
  
  .error-message {
    font-size: 0.8rem;
  }
  
  .login-form {
    gap: 1.25rem;
  }
  
  .submit-btn {
    padding: 0.7rem;
    font-size: 0.95rem;
  }
}

@media (max-width: 400px) {
  .login-container {
    padding: 1.25rem;
  }
  
  h1 {
    font-size: 1.35rem;
  }
  
  input, select {
    font-size: 0.9rem;
    padding: 0.65rem;
  }
  
  .login-form {
    gap: 1rem;
  }
  
  .form-group {
    gap: 0.35rem;
  }
  
  .error-container {
    padding: 0.5rem;
  }
}
</style>