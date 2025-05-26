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

// Search bar state
const isSearchVisible = ref(false);
const searchQuery = ref('');

// Check if the current route should have transparent navbar
const checkTransparency = () => {
  // Only certain pages should have transparent navbar (e.g., home)
  const transparentRoutes = ['/hastyreels', '/hastyreels/'];
  isTransparent.value = (transparentRoutes.includes(route.path) && !isScrolled.value);
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

// Toggle search bar visibility
const toggleSearch = () => {
  isSearchVisible.value = !isSearchVisible.value;
  if (isSearchVisible.value) {
    // Focus the search input when it becomes visible
    setTimeout(() => {
      const searchInput = document.getElementById('navbar-search');
      if (searchInput) searchInput.focus();
    }, 100);
  } else {
    // Clear search when hiding
    searchQuery.value = '';
  }
};

// Handle search submission
const handleSearch = (e) => {
  e.preventDefault();
  if (!searchQuery.value.trim()) return;
  
  // Navigate to search results (in a real app)
  router.push(`/hastyreels/search?q=${encodeURIComponent(searchQuery.value)}`);
  
  // Hide search bar after search
  isSearchVisible.value = false;
  searchQuery.value = '';
};

// Handle scroll to change navbar appearance
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
  checkTransparency();
};

// Watch for route changes
watch(
  () => route.path,
  () => {
    // Close mobile menu on route change
    isMobileMenuOpen.value = false;
    document.body.style.overflow = '';
    
    // Hide search on route change
    isSearchVisible.value = false;
    
    // Update navbar transparency
    checkTransparency();
  }
);

// Lifecycle hooks
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  checkTransparency();
  handleScroll(); // Initial check
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  document.body.style.overflow = ''; // Restore scrolling just in case
});

// Computed class for navbar
const navbarClass = computed(() => ({
  'navbar-scrolled': isScrolled.value,
  'navbar-transparent': isTransparent.value && !isScrolled.value
}));
</script>

<template>
  <header class="hasty-navbar" :class="navbarClass">
    <div class="navbar-container">
      <!-- Logo -->
      <router-link to="/hastyreels" class="navbar-logo">
        <div class="logo-icon">
          <svg width="36" height="36" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" fill="url(#paint0_linear)"/>
            <path d="M15 13L28 20L15 27V13Z" fill="white"/>
            <defs>
              <linearGradient id="paint0_linear" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FF4E50"/>
                <stop offset="1" stop-color="#FC913A"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <span class="logo-text">HastyReels</span>
      </router-link>
      
      <!-- Navigation Links (Desktop) -->
      <nav class="navbar-nav">
        <ul>
          <li>
            <router-link to="/hastyreels">Home</router-link>
          </li>
          <li>
            <router-link to="/hastyreels/categories">Categories</router-link>
          </li>
          <li>
            <router-link to="/hastyreels/trending">Trending</router-link>
          </li>
          <li>
            <router-link to="/hastyreels/creators">Creators</router-link>
          </li>
          <li>
            <router-link to="/hastyreels/privacy">Privacy</router-link>
          </li>
        </ul>
      </nav>
      
      <!-- Search and Auth (Desktop) -->
      <div class="navbar-actions">
        <div class="search-container" :class="{ 'active': isSearchVisible }">
          <button @click="toggleSearch" class="search-toggle">
            <span v-if="!isSearchVisible" class="search-icon">🔍</span>
            <span v-else class="close-icon">✕</span>
          </button>
          
          <form @submit="handleSearch" class="search-form" v-show="isSearchVisible">
            <input 
              type="text" 
              id="navbar-search" 
              v-model="searchQuery" 
              placeholder="Search videos..."
              class="search-input"
            >
          </form>
        </div>
        
        <div class="auth-buttons">
          <router-link to="/hastyreels/login" class="login-button">Sign In</router-link>
          <router-link to="/hastyreels/signup" class="signup-button">Sign Up</router-link>
        </div>
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
          <!-- Mobile Search -->
          <div class="mobile-search">
            <form @submit="handleSearch" class="mobile-search-form">
              <input 
                type="text" 
                v-model="searchQuery" 
                placeholder="Search videos..."
                class="mobile-search-input"
              >
              <button type="submit" class="mobile-search-btn">🔍</button>
            </form>
          </div>
          
          <nav class="mobile-nav">
            <ul>
              <li>
                <router-link to="/hastyreels" @click="toggleMobileMenu">Home</router-link>
              </li>
              <li>
                <router-link to="/hastyreels/categories" @click="toggleMobileMenu">Categories</router-link>
              </li>
              <li>
                <router-link to="/hastyreels/trending" @click="toggleMobileMenu">Trending</router-link>
              </li>
              <li>
                <router-link to="/hastyreels/creators" @click="toggleMobileMenu">Creators</router-link>
              </li>
              <li>
                <router-link to="/hastyreels/privacy" @click="toggleMobileMenu">Privacy</router-link>
              </li>
            </ul>
          </nav>
          
          <div class="mobile-auth">
            <router-link to="/hastyreels/login" class="login-button" @click="toggleMobileMenu">Sign In</router-link>
            <router-link to="/hastyreels/signup" class="signup-button" @click="toggleMobileMenu">Sign Up</router-link>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.hasty-navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  z-index: 1000;
  transition: all 0.3s ease;
  background: linear-gradient(135deg, #ff4e50 0%, #fc913a 100%);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.navbar-transparent {
  background: transparent;
  box-shadow: none;
}

.navbar-scrolled {
  height: 70px;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
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

.logo-icon {
  margin-right: 0.8rem;
  transition: all 0.3s ease;
}

.logo-text {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  color: white;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
}

.navbar-scrolled .logo-text {
  font-size: 1.3rem;
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
  color: white;
  text-decoration: none;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  display: block;
}

.navbar-nav a:hover,
.navbar-nav a.router-link-active {
  color: rgba(255, 255, 255, 0.8);
}

.navbar-nav a.router-link-active::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 3px;
  background: white;
  border-radius: 2px;
}

/* Search Container */
.navbar-actions {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.search-container {
  position: relative;
  transition: all 0.3s ease;
}

.search-toggle {
  background: transparent;
  border: none;
  color: white;
  font-size: 1.1rem;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.search-form {
  position: absolute;
  top: 0;
  right: 0;
  opacity: 0;
  transform: scaleX(0);
  transform-origin: right;
  transition: all 0.3s ease;
}

.search-container.active .search-form {
  opacity: 1;
  transform: scaleX(1);
}

.search-input {
  background: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 50px;
  padding: 0.5rem 1rem;
  width: 250px;
  color: white;
  font-size: 0.9rem;
}

.search-input::placeholder {
  color: rgba(255, 255, 255, 0.7);
}

.search-input:focus {
  outline: none;
  background: rgba(255, 255, 255, 0.25);
}

/* Auth Buttons */
.auth-buttons {
  display: flex;
  gap: 1rem;
}

.login-button {
  color: white;
  background: transparent;
  border: 1px solid white;
  padding: 0.5rem 1.25rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  display: inline-block;
}

.login-button:hover {
  background: rgba(255, 255, 255, 0.1);
}

.signup-button {
  color: #ff4e50;
  background: white;
  padding: 0.5rem 1.25rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  display: inline-block;
}

.signup-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* Mobile Menu Toggle */
.mobile-menu-toggle {
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1002;
  width: 30px;
  height: 24px;
  position: relative;
}

.toggle-bar {
  display: block;
  width: 100%;
  height: 3px;
  background-color: white;
  position: absolute;
  left: 0;
  border-radius: 3px;
  transition: all 0.3s ease;
}

.toggle-bar:nth-child(1) {
  top: 0;
}

.toggle-bar:nth-child(2) {
  top: 50%;
  transform: translateY(-50%);
}

.toggle-bar:nth-child(3) {
  bottom: 0;
}

.mobile-menu-toggle.active .toggle-bar:nth-child(1) {
  transform: translateY(10px) rotate(45deg);
}

.mobile-menu-toggle.active .toggle-bar:nth-child(2) {
  opacity: 0;
}

.mobile-menu-toggle.active .toggle-bar:nth-child(3) {
  transform: translateY(-10px) rotate(-45deg);
}

/* Mobile Menu */
.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.95);
  z-index: 1001;
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
  height: 100%;
  padding: 6rem 2rem 2rem;
  display: flex;
  flex-direction: column;
}

.mobile-search {
  margin-bottom: 2rem;
}

.mobile-search-form {
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  overflow: hidden;
}

.mobile-search-input {
  flex: 1;
  background: transparent;
  border: none;
  padding: 1rem 1.5rem;
  color: white;
  font-size: 1rem;
}

.mobile-search-input:focus {
  outline: none;
}

.mobile-search-input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.mobile-search-btn {
  background: transparent;
  border: none;
  color: white;
  padding: 1rem;
  cursor: pointer;
  font-size: 1.1rem;
}

.mobile-nav {
  margin-bottom: 2rem;
}

.mobile-nav ul {
  list-style: none;
  padding: 0;
}

.mobile-nav li {
  margin-bottom: 1.5rem;
}

.mobile-nav a {
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 600;
  transition: all 0.3s ease;
  display: block;
  padding: 0.5rem 0;
}

.mobile-nav a:hover,
.mobile-nav a.router-link-active {
  color: #ff4e50;
}

.mobile-auth {
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.mobile-auth .login-button,
.mobile-auth .signup-button {
  width: 100%;
  text-align: center;
  padding: 1rem;
}

.mobile-auth .signup-button {
  color: #ff4e50;
}

/* Responsive Styles */
@media (max-width: 992px) {
  .navbar-nav, .search-container {
    display: none;
  }
  
  .mobile-menu-toggle {
    display: block;
  }
  
  .navbar-actions {
    gap: 1rem;
  }
}

@media (max-width: 768px) {
  .navbar-container {
    padding: 0 1.5rem;
  }
  
  .auth-buttons {
    display: none;
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
  
  .mobile-menu-inner {
    padding: 5rem 1.5rem 1.5rem;
  }
  
  .mobile-nav a {
    font-size: 1.3rem;
  }
}
</style>