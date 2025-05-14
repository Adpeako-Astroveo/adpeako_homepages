<script setup>
import { ref, computed, watch, inject, nextTick } from 'vue';
import { designs } from '../domain.js';

// Get the site name and designId from the App.vue component
const siteName = inject('siteName');
const designId = inject('designId');

// Get design theme colors for consistent styling
const design = computed(() => {
  return designs[designId.value] || designs['default'];
});

// Format the domain name properly 
const baseDomainName = computed(() => {
  // Use the siteName directly as it's already properly formatted in App.vue
  return siteName.value;
});

const msisdn = ref('');
const country = ref('');
const error = ref('');
const isSubmitting = ref(false);

// Country codes for various countries
const countryCodes = {
  'Afghanistan': '+93',
  'Albania': '+355',
  'Algeria': '+213',
  'Andorra': '+376',
  'Angola': '+244',
  'Antigua and Barbuda': '+1',
  'Argentina': '+54',
  'Armenia': '+374',
  'Australia': '+61',
  'Austria': '+43',
  'Azerbaijan': '+994',
  'Bahamas': '+1',
  'Bahrain': '+973',
  'Bangladesh': '+880',
  'Barbados': '+1',
  'Belarus': '+375',
  'Belgium': '+32',
  'Belize': '+501',
  'Benin': '+229',
  'Bhutan': '+975',
  'Bolivia': '+591',
  'Bosnia and Herzegovina': '+387',
  'Botswana': '+267',
  'Brazil': '+55',
  'Brunei': '+673',
  'Bulgaria': '+359',
  'Burkina Faso': '+226',
  'Burundi': '+257',
  'Cabo Verde': '+238',
  'Cambodia': '+855',
  'Cameroon': '+237',
  'Canada': '+1',
  'Central African Republic': '+236',
  'Chad': '+235',
  'Chile': '+56',
  'China': '+86',
  'Colombia': '+57',
  'Comoros': '+269',
  'Congo': '+242',
  'Costa Rica': '+506',
  'Croatia': '+385',
  'Cuba': '+53',
  'Cyprus': '+357',
  'Czech Republic': '+420',
  'Denmark': '+45',
  'Djibouti': '+253',
  'Dominica': '+1',
  'Dominican Republic': '+1',
  'Ecuador': '+593',
  'Egypt': '+20',
  'El Salvador': '+503',
  'Equatorial Guinea': '+240',
  'Eritrea': '+291',
  'Estonia': '+372',
  'Eswatini': '+268',
  'Ethiopia': '+251',
  'Fiji': '+679',
  'Finland': '+358',
  'France': '+33',
  'Gabon': '+241',
  'Gambia': '+220',
  'Georgia': '+995',
  'Germany': '+49',
  'Ghana': '+233',
  'Greece': '+30',
  'Grenada': '+1',
  'Guatemala': '+502',
  'Guinea': '+224',
  'Guinea-Bissau': '+245',
  'Guyana': '+592',
  'Haiti': '+509',
  'Honduras': '+504',
  'Hungary': '+36',
  'Iceland': '+354',
  'India': '+91',
  'Indonesia': '+62',
  'Iran': '+98',
  'Iraq': '+964',
  'Ireland': '+353',
  'Israel': '+972',
  'Italy': '+39',
  'Jamaica': '+1',
  'Japan': '+81',
  'Jordan': '+962',
  'Kazakhstan': '+7',
  'Kenya': '+254',
  'Kiribati': '+686',
  'Korea, North': '+850',
  'Korea, South': '+82',
  'Kosovo': '+383',
  'Kuwait': '+965',
  'Kyrgyzstan': '+996',
  'Laos': '+856',
  'Latvia': '+371',
  'Lebanon': '+961',
  'Lesotho': '+266',
  'Liberia': '+231',
  'Libya': '+218',
  'Liechtenstein': '+423',
  'Lithuania': '+370',
  'Luxembourg': '+352',
  'Madagascar': '+261',
  'Malawi': '+265',
  'Malaysia': '+60',
  'Maldives': '+960',
  'Mali': '+223',
  'Malta': '+356',
  'Marshall Islands': '+692',
  'Mauritania': '+222',
  'Mauritius': '+230',
  'Mexico': '+52',
  'Micronesia': '+691',
  'Moldova': '+373',
  'Monaco': '+377',
  'Mongolia': '+976',
  'Montenegro': '+382',
  'Morocco': '+212',
  'Mozambique': '+258',
  'Myanmar': '+95',
  'Namibia': '+264',
  'Nauru': '+674',
  'Nepal': '+977',
  'Netherlands': '+31',
  'New Zealand': '+64',
  'Nicaragua': '+505',
  'Niger': '+227',
  'Nigeria': '+234',
  'North Macedonia': '+389',
  'Norway': '+47',
  'Oman': '+968',
  'Pakistan': '+92',
  'Palau': '+680',
  'Palestine': '+970',
  'Panama': '+507',
  'Papua New Guinea': '+675',
  'Paraguay': '+595',
  'Peru': '+51',
  'Philippines': '+63',
  'Poland': '+48',
  'Portugal': '+351',
  'Qatar': '+974',
  'Romania': '+40',
  'Russia': '+7',
  'Rwanda': '+250',
  'Saint Kitts and Nevis': '+1',
  'Saint Lucia': '+1',
  'Saint Vincent and the Grenadines': '+1',
  'Samoa': '+685',
  'San Marino': '+378',
  'Sao Tome and Principe': '+239',
  'Saudi Arabia': '+966',
  'Senegal': '+221',
  'Serbia': '+381',
  'Seychelles': '+248',
  'Sierra Leone': '+232',
  'Singapore': '+65',
  'Slovakia': '+421',
  'Slovenia': '+386',
  'Solomon Islands': '+677',
  'Somalia': '+252',
  'South Africa': '+27',
  'South Sudan': '+211',
  'Spain': '+34',
  'Sri Lanka': '+94',
  'Sudan': '+249',
  'Suriname': '+597',
  'Sweden': '+46',
  'Switzerland': '+41',
  'Syria': '+963',
  'Taiwan': '+886',
  'Tajikistan': '+992',
  'Tanzania': '+255',
  'Thailand': '+66',
  'Timor-Leste': '+670',
  'Togo': '+228',
  'Tonga': '+676',
  'Trinidad and Tobago': '+1',
  'Tunisia': '+216',
  'Turkey': '+90',
  'Turkmenistan': '+993',
  'Tuvalu': '+688',
  'Uganda': '+256',
  'Ukraine': '+380',
  'United Arab Emirates': '+971',
  'United Kingdom': '+44',
  'United States': '+1',
  'Uruguay': '+598',
  'Uzbekistan': '+998',
  'Vanuatu': '+678',
  'Vatican City': '+39',
  'Venezuela': '+58',
  'Vietnam': '+84',
  'Yemen': '+967',
  'Zambia': '+260',
  'Zimbabwe': '+263'
};

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

// Get the country code for the selected country
const getCountryCode = (countryName) => {
  return countryCodes[countryName] || '';
};

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

// Handle key press to prevent changing the country code part
const handleKeyDown = (event) => {
  if (!country.value) return;
  
  const countryCode = getCountryCode(country.value);
  if (!msisdn.value.startsWith(countryCode)) {
    msisdn.value = countryCode;
  }
  
  // Get the current cursor position
  const cursorPos = event.target.selectionStart;
  
  // If user is trying to delete or modify the country code, prevent it
  if (cursorPos < countryCode.length) {
    if (event.key === 'Backspace' || event.key === 'Delete' || event.key === 'ArrowLeft') {
      event.preventDefault();
    }
  }
};

// Handle input to ensure country code remains
const handleInput = (event) => {
  if (!country.value) return;
  
  const countryCode = getCountryCode(country.value);
  if (!msisdn.value.startsWith(countryCode)) {
    msisdn.value = countryCode + msisdn.value.replace(countryCode, '');
    
    // Place cursor after country code
    nextTick(() => {
      event.target.setSelectionRange(countryCode.length, countryCode.length);
    });
  }
  
  // Ensure only numbers are entered after country code
  const nonDigitRegex = /[^\d]/g;
  const valueAfterCode = msisdn.value.substring(countryCode.length);
  if (nonDigitRegex.test(valueAfterCode)) {
    msisdn.value = countryCode + valueAfterCode.replace(nonDigitRegex, '');
  }
};

// Handle click to place cursor at end if clicked on country code part
const handleClick = (event) => {
  if (!country.value) return;
  
  const countryCode = getCountryCode(country.value);
  const cursorPos = event.target.selectionStart;
  
  if (cursorPos < countryCode.length) {
    nextTick(() => {
      event.target.setSelectionRange(countryCode.length, countryCode.length);
    });
  }
};

// When country changes, update the mobile number with the country code
watch(country, (newCountry) => {
  if (newCountry) {
    const countryCode = getCountryCode(newCountry);
    msisdn.value = countryCode;
    error.value = '';
  } else {
    msisdn.value = '';
    error.value = '';
  }
});

const validateMsisdn = () => {
  if (!msisdn.value) {
    error.value = 'Mobile number is required';
    return false;
  }
  
  if (!country.value) {
    error.value = 'Please select your country';
    return false;
  }
  
  const countryCode = getCountryCode(country.value);
  if (!msisdn.value.startsWith(countryCode)) {
    error.value = 'Invalid country code';
    return false;
  }
  
  // Make sure the number has enough digits after the country code
  const numberWithoutCode = msisdn.value.substring(countryCode.length);
  if (numberWithoutCode.length < 4) {
    error.value = 'Please enter a valid phone number';
    return false;
  }
  
  return true;
};

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
      <h1>Login to {{ baseDomainName }}</h1>
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
            @keydown="handleKeyDown"
            @input="handleInput"
            @click="handleClick"
          />
          <p class="format-hint">{{ formatHint }}</p>
        </div>

        <button 
          type="button" 
          class="submit-btn" 
          @click="handleLogin"
          :disabled="isSubmitting"
          :style="{ background: design.theme.primary }"
        >
          <span v-if="isSubmitting">Processing...</span>
          <span v-else>Login</span>
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
  margin-bottom: 2rem;
  font-size: 2rem;
  color: v-bind('design.theme.primary');
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
  border-color: v-bind('design.theme.primary');
  box-shadow: 0 0 0 3px v-bind('`rgba(${parseInt(design.theme.primary.slice(1, 3), 16)}, ${parseInt(design.theme.primary.slice(3, 5), 16)}, ${parseInt(design.theme.primary.slice(5, 7), 16)}, 0.1)`');
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
  transform: translateY(-2px);
  filter: brightness(110%);
}

.submit-btn:disabled {
  opacity: 0.7;
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