<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

// Mobile menu state
const isMobileMenuOpen = ref(false);

// Navbar scroll state
const isScrolled = ref(false);
const isTransparent = ref(true);

// Dropdown state
const dropdowns = ref({
  categories: false
});

// Check if the current route should have transparent navbar
const checkTransparency = () => {
  // Only homepage has transparent navbar
  const transparentRoutes = ['home'];
  isTransparent.value = transparentRoutes.includes(route.name) && !isScrolled.value;
};

// Toggle mobile menu
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  
  // Prevent scrolling when mobile menu is open
  if (isMobileMenuOpen.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
};

// Toggle dropdown
const toggleDropdown = (dropdown) => {
  // Close all other dropdowns
  Object.keys(dropdowns.value).forEach(key => {
    if (key !== dropdown) {
      dropdowns.value[key] = false;
    }
  });
  
  // Toggle the target dropdown
  dropdowns.value[dropdown] = !dropdowns.value[dropdown];
};

// Close dropdowns when clicking outside
const handleClickOutside = (event) => {
  const dropdownMenus = document.querySelectorAll('.dropdown-menu');
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
  
  let clickedOnDropdown = false;
  
  // Check if the click was within any dropdown menu or toggle
  [...dropdownMenus, ...dropdownToggles].forEach(element => {
    if (element.contains(event.target)) {
      clickedOnDropdown = true;
    }
  });
  
  // If click was outside any dropdown, close all dropdowns
  if (!clickedOnDropdown) {
    Object.keys(dropdowns.value).forEach(key => {
      dropdowns.value[key] = false;
    });
  }
};

// Handle scroll to change navbar appearance
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
  checkTransparency();
};

// Watch for route changes
watch(
  () => route.name,
  () => {
    // Close mobile menu on route change
    isMobileMenuOpen.value = false;
    document.body.style.overflow = '';
    
    // Update navbar transparency
    checkTransparency();
    
    // Close all dropdowns
    Object.keys(dropdowns.value).forEach(key => {
      dropdowns.value[key] = false;
    });
  }
);

// Lifecycle hooks
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  document.addEventListener('click', handleClickOutside);
  checkTransparency();
  handleScroll(); // Initial check
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  document.removeEventListener('click', handleClickOutside);
  document.body.style.overflow = ''; // Restore scrolling just in case
});

// Computed class for navbar
const navbarClass = computed(() => ({
  'navbar-scrolled': isScrolled.value,
  'navbar-transparent': isTransparent.value && !isScrolled.value
}));
</script>

<template>
  <header class="navbar" :class="navbarClass">
    <div class="navbar-container">
      <!-- Logo -->
      <router-link to="/" class="navbar-logo">
        <img src="/funpuzzlepalace-logo.svg" alt="FunPuzzlePalace Logo" class="logo-image">
        <span class="logo-text">FunPuzzle<span class="accent">Palace</span></span>
      </router-link>
      
      <!-- Navigation Links (Desktop) -->
      <nav class="navbar-nav">
        <ul>
          <li>
            <router-link to="/" exact>Home</router-link>
          </li>
          <li class="dropdown">
            <a 
              href="#" 
              class="dropdown-toggle" 
              @click.prevent="toggleDropdown('categories')"
            >
              Categories <span class="dropdown-arrow">▾</span>
            </a>
            <ul 
              class="dropdown-menu" 
              v-show="dropdowns.categories"
            >
              <li>
                <router-link to="/funpuzzlepalace/category/action">Action</router-link>
              </li>
              <li>
                <router-link to="/funpuzzlepalace/category/puzzle">Puzzle</router-link>
              </li>
              <li>
                <router-link to="/funpuzzlepalace/category/adventure">Adventure</router-link>
              </li>
              <li>
                <router-link to="/funpuzzlepalace/category/strategy">Strategy</router-link>
              </li>
              <li>
                <router-link to="/funpuzzlepalace/category/multiplayer">Multiplayer</router-link>
              </li>
            </ul>
          </li>
          <li>
            <router-link to="/funpuzzlepalace/payment">Pricing</router-link>
          </li>
          <li>
            <router-link to="/funpuzzlepalace/contact">Contact</router-link>
          </li>
        </ul>
      </nav>
      
      <!-- Auth Buttons (Desktop) -->
      <div class="navbar-auth">
        <router-link to="/funpuzzlepalace/login" class="login-button">Sign In</router-link>
        <router-link to="/funpuzzlepalace/signup" class="signup-button">Sign Up</router-link>
      </div>
      
      <!-- Mobile Menu Toggle -->
      <button 
        class="mobile-menu-toggle"
        :class="{ 'active': isMobileMenuOpen }"
        @click="toggleMobileMenu"
        aria-label="Toggle navigation menu"
      >
        <span class="toggle-bar"></span>
        <span class="toggle-bar"></span>
        <span class="toggle-bar"></span>
      </button>
      
      <!-- Mobile Menu -->
      <div class="mobile-menu" :class="{ 'active': isMobileMenuOpen }">
        <div class="mobile-menu-inner">
          <nav class="mobile-nav">
            <ul>
              <li>
                <router-link to="/" @click="toggleMobileMenu">Home</router-link>
              </li>
              <li class="mobile-dropdown">
                <button class="mobile-dropdown-toggle" @click.stop="toggleDropdown('categories')">
                  Categories 
                  <span 
                    class="mobile-dropdown-arrow"
                    :class="{ 'open': dropdowns.categories }"
                  >▾</span>
                </button>
                <ul class="mobile-dropdown-menu" v-show="dropdowns.categories">
                  <li>
                    <router-link to="/funpuzzlepalace/category/action" @click="toggleMobileMenu">Action</router-link>
                  </li>
                  <li>
                    <router-link to="/funpuzzlepalace/category/puzzle" @click="toggleMobileMenu">Puzzle</router-link>
                  </li>
                  <li>
                    <router-link to="/funpuzzlepalace/category/adventure" @click="toggleMobileMenu">Adventure</router-link>
                  </li>
                  <li>
                    <router-link to="/funpuzzlepalace/category/strategy" @click="toggleMobileMenu">Strategy</router-link>
                  </li>
                  <li>
                    <router-link to="/funpuzzlepalace/category/multiplayer" @click="toggleMobileMenu">Multiplayer</router-link>
                  </li>
                </ul>
              </li>
              <li>
                <router-link to="/funpuzzlepalace/payment" @click="toggleMobileMenu">Pricing</router-link>
              </li>
              <li>
                <router-link to="/funpuzzlepalace/contact" @click="toggleMobileMenu">Contact</router-link>
              </li>
            </ul>
          </nav>
          
          <div class="mobile-auth">
            <router-link to="/funpuzzlepalace/login" class="login-button" @click="toggleMobileMenu">Sign In</router-link>
            <router-link to="/funpuzzlepalace/signup" class="signup-button" @click="toggleMobileMenu">Sign Up</router-link>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap');

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  z-index: 1000;
  transition: all 0.3s ease;
  background: rgba(15, 23, 42, 0.95);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
}

.navbar-transparent {
  background: transparent;
  box-shadow: none;
}

.navbar-scrolled {
  height: 70px;
  background: rgba(15, 23, 42, 0.95);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
}

.navbar-container {
  max-width: 1400px;
  height: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Logo */
.navbar-logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  z-index: 1001; /* Above mobile menu */
}

.logo-image {
  height: 40px;
  width: auto;
  margin-right: 12px;
  transition: all 0.3s ease;
}

.logo-text {
  font-family: 'Orbitron', sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  background: linear-gradient(90deg, #8B5CF6, #EC4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 1px;
  text-shadow: 
    0 0 5px rgba(139, 92, 246, 0.5),
    0 0 10px rgba(139, 92, 246, 0.3);
  transition: all 0.3s ease;
}

.accent {
  background: linear-gradient(90deg, #EC4899, #8B5CF6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.navbar-scrolled .logo-text {
  font-size: 1.3rem;
}

.navbar-scrolled .logo-image {
  height: 35px;
}

/* Navigation Links */
.navbar-nav ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.navbar-nav li {
  position: relative;
  margin: 0 0.75rem;
}

.navbar-nav a {
  color: #E2E8F0;
  text-decoration: none;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  display: block;
}

.navbar-nav a:hover,
.navbar-nav a.router-link-active {
  color: #8B5CF6;
}

.navbar-nav a.router-link-active::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 3px;
  background: linear-gradient(90deg, #8B5CF6, #EC4899);
  border-radius: 2px;
}

/* Dropdown Menu */
.dropdown {
  position: relative;
}

.dropdown-toggle {
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.dropdown-arrow {
  font-size: 0.8rem;
  transition: transform 0.3s ease;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: -1rem;
  background: rgba(30, 41, 59, 0.95);
  min-width: 180px;
  border-radius: 12px;
  padding: 0.75rem 0;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  z-index: 1000;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s ease;
  border: 1px solid #334155;
  backdrop-filter: blur(10px);
  visibility: hidden;
}

.dropdown-menu[style*="display: block"] {
  opacity: 1;
  transform: translateY(0);
  visibility: visible;
}

.dropdown-menu li {
  margin: 0;
}

.dropdown-menu a {
  padding: 0.75rem 1.5rem;
  color: #E2E8F0;
}

.dropdown-menu a:hover {
  background: rgba(139, 92, 246, 0.1);
}

/* Auth Buttons */
.navbar-auth {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.login-button {
  color: #8B5CF6;
  font-weight: 600;
  padding: 0.6rem 1.25rem;
  border: 1px solid #8B5CF6;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
  background: transparent;
  display: inline-block;
}

.login-button:hover {
  background: rgba(139, 92, 246, 0.1);
  box-shadow: 0 0 10px rgba(139, 92, 246, 0.3);
}

.signup-button {
  background: linear-gradient(90deg, #8B5CF6, #EC4899);
  color: white;
  font-weight: 600;
  padding: 0.6rem 1.25rem;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
  border: none;
  display: inline-block;
}

.signup-button:hover {
  box-shadow: 0 0 15px rgba(139, 92, 246, 0.5);
  transform: translateY(-2px);
}

/* Mobile Menu Toggle */
.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;
}

.toggle-bar {
  display: block;
  width: 30px;
  height: 3px;
  background: #E2E8F0;
  border-radius: 3px;
  transition: all 0.3s ease;
}

.mobile-menu-toggle.active .toggle-bar:nth-child(1) {
  transform: translateY(9px) rotate(45deg);
}

.mobile-menu-toggle.active .toggle-bar:nth-child(2) {
  opacity: 0;
}

.mobile-menu-toggle.active .toggle-bar:nth-child(3) {
  transform: translateY(-9px) rotate(-45deg);
}

/* Mobile Menu */
.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(15, 23, 42, 0.97);
  backdrop-filter: blur(10px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s ease;
  transform: translateX(-100%);
}

.mobile-menu.active {
  visibility: visible;
  opacity: 1;
  transform: translateX(0);
}

.mobile-menu-inner {
  width: 100%;
  max-width: 400px;
  padding: 2rem;
}

.mobile-nav ul {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem;
}

.mobile-nav li {
  margin-bottom: 1.25rem;
}

.mobile-nav a {
  color: #E2E8F0;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 600;
  display: block;
  padding: 0.5rem 0;
  transition: color 0.3s ease;
}

.mobile-nav a:hover,
.mobile-nav a.router-link-active {
  color: #8B5CF6;
}

/* Mobile Dropdowns */
.mobile-dropdown {
  margin-bottom: 0.25rem;
}

.mobile-dropdown-toggle {
  background: transparent;
  border: none;
  color: #E2E8F0;
  font-size: 1.2rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.5rem 0;
  cursor: pointer;
  text-align: left;
}

.mobile-dropdown-toggle:hover {
  color: #8B5CF6;
}

.mobile-dropdown-arrow {
  transition: transform 0.3s ease;
}

.mobile-dropdown-arrow.open {
  transform: rotate(180deg);
}

.mobile-dropdown-menu {
  list-style: none;
  padding: 0 0 0 1.5rem;
  margin: 0.5rem 0 1rem;
}

.mobile-dropdown-menu a {
  font-size: 1.1rem;
  padding: 0.5rem 0;
}

.mobile-auth {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.mobile-auth .login-button,
.mobile-auth .signup-button {
  width: 100%;
  text-align: center;
}

/* Responsive Styles */
@media (max-width: 992px) {
  .navbar-nav, .navbar-auth {
    display: none;
  }
  
  .mobile-menu-toggle {
    display: flex;
  }
}

@media (max-width: 480px) {
  .navbar-container {
    padding: 0 1rem;
  }
  
  .logo-text {
    font-size: 1.3rem;
  }
  
  .navbar-scrolled .logo-text {
    font-size: 1.1rem;
  }
  
  .logo-image {
    height: 35px;
  }
  
  .navbar-scrolled .logo-image {
    height: 30px;
  }
}
</style>