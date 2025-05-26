<script setup>
import { ref, provide, onMounted, watch } from 'vue';
import { RouterView, RouterLink, useRoute } from 'vue-router';
import domainMapping from './domain.js';
import { designs } from './domain.js';

const designId = ref('default');
const route = useRoute();

// Get hostname with mock support
const getHostname = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const mockedDomain = urlParams.get('m');
  return mockedDomain || window.location.hostname;
};

const hostname = getHostname();

const getFormattedDomainName = (domain) => {
  const domainWithoutTLD = domain.replace(/\.com$/, '');
  if (domainWithoutTLD.length > 30) {
    return 'Domain Placeholder';
  }
  return domainWithoutTLD
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const getLogoPath = (hostname) => {
  // Remove .com and create logo path
  const domain = hostname.replace(/\.[a-z]{2,3}$/, '');
  const logoPath = `/${domain}-logo.svg`;
  
  // Create a new Image to check if the logo exists
  const img = new Image();
  img.src = logoPath;
  
  // Return default logo if the domain-specific logo fails to load
  return new Promise((resolve) => {
    img.onload = () => resolve(logoPath);
    img.onerror = () => resolve('/default-logo.svg');
  });
};

const siteName = ref(getFormattedDomainName(hostname));
const logoPath = ref('/default-logo.svg'); // Start with default logo
const isMobileMenuOpen = ref(false);
const isScrolled = ref(false);

onMounted(async () => {
  designId.value = domainMapping[hostname] || 'default';
  // Update logo path after checking existence
  logoPath.value = await getLogoPath(hostname);
  
  // Update favicon
  const favicon = document.querySelector('link[rel="icon"]');
  if (favicon) {
    favicon.href = logoPath.value;
  }
  
  // Add viewport meta tag for better mobile responsiveness if not present
  if (!document.querySelector('meta[name="viewport"]')) {
    const viewportMeta = document.createElement('meta');
    viewportMeta.name = 'viewport';
    viewportMeta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
    document.head.appendChild(viewportMeta);
  }

  // Add scroll event listener
  window.addEventListener('scroll', handleScroll);
});

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

// Close mobile menu when route changes
watch(
  () => route.path,
  () => {
    isMobileMenuOpen.value = false;
  }
);

// Update page title and meta description based on current route and design
watch(
  () => [route.path, designId.value],
  () => {
    const currentDesign = designs[designId.value];
    if (!currentDesign) return;

    let pageConfig;
    switch (route.path) {
      case '/':
        pageConfig = currentDesign.pages.home;
        break;
      case '/privacy':
        pageConfig = currentDesign.pages.privacy;
        break;
      default:
        pageConfig = currentDesign.pages.notFound;
    }

    // Update title
    document.title = pageConfig.title.replace('Your Domain', siteName.value);

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = pageConfig.description;

    // Update favicon
    const favicon = document.querySelector('link[rel="icon"]');
    if (favicon) {
      favicon.href = logoPath.value;
    }
  },
  { immediate: true }
);

provide('designId', designId);
provide('siteName', siteName);
</script>

<template>
  <div class="app-container">
    <header class="app-header" :class="[designId, { 'scrolled': isScrolled }]">
      <div class="header-container">
        <RouterLink to="/" class="logo-link">
          <img 
            :src="logoPath"
            :alt="siteName" 
            class="logo" 
          />
          <span class="logo-text">{{ siteName }}</span>
        </RouterLink>
        
        <!-- Desktop Navigation -->
        <nav class="nav-links desktop-nav">
          <RouterLink to="/" class="nav-link">
            <span class="nav-icon">🏠</span>
            <span>Home</span>
          </RouterLink>
          <RouterLink to="/games" class="nav-link">
            <span class="nav-icon">🎮</span>
            <span>Games</span>
          </RouterLink>
          <div class="dropdown-container">
            <a href="#" class="nav-link dropdown-trigger">
              <span class="nav-icon">🌐</span>
              <span>Categories</span>
              <span class="dropdown-arrow">▼</span>
            </a>
            <div class="dropdown-menu">
              <RouterLink to="/categories/action" class="dropdown-item">
                <span class="dropdown-icon">🔥</span>
                <span>Action</span>
              </RouterLink>
              <RouterLink to="/categories/adventure" class="dropdown-item">
                <span class="dropdown-icon">🌄</span>
                <span>Adventure</span>
              </RouterLink>
              <RouterLink to="/categories/puzzle" class="dropdown-item">
                <span class="dropdown-icon">🧩</span>
                <span>Puzzle</span>
              </RouterLink>
              <RouterLink to="/categories/strategy" class="dropdown-item">
                <span class="dropdown-icon">♟️</span>
                <span>Strategy</span>
              </RouterLink>
            </div>
          </div>
          <RouterLink to="/privacy" class="nav-link">
            <span class="nav-icon">🔒</span>
            <span>Privacy</span>
          </RouterLink>
          <RouterLink to="/login" class="login-btn">
            <span class="login-icon">👤</span>
            <span>Login</span>
          </RouterLink>
        </nav>
        
        <!-- Mobile menu toggle button -->
        <button 
          class="mobile-menu-toggle" 
          @click="toggleMobileMenu" 
          aria-label="Toggle Menu" 
          :class="{ 'open': isMobileMenuOpen }"
        >
          <span class="toggle-line"></span>
          <span class="toggle-line"></span>
          <span class="toggle-line"></span>
        </button>
      </div>
      
      <!-- Mobile Navigation -->
      <div class="mobile-nav" :class="{ 'open': isMobileMenuOpen }">
        <div class="mobile-nav-container">
          <RouterLink to="/" class="mobile-nav-link" @click="toggleMobileMenu">
            <span class="nav-icon">🏠</span>
            <span>Home</span>
          </RouterLink>
          <RouterLink to="/games" class="mobile-nav-link" @click="toggleMobileMenu">
            <span class="nav-icon">🎮</span>
            <span>Games</span>
          </RouterLink>
          
          <div class="mobile-nav-category">
            <div class="category-header">
              <span class="nav-icon">🌐</span>
              <span>Categories</span>
            </div>
            <div class="category-items">
              <RouterLink to="/categories/action" class="mobile-nav-link subcategory" @click="toggleMobileMenu">
                <span class="nav-icon">🔥</span>
                <span>Action</span>
              </RouterLink>
              <RouterLink to="/categories/adventure" class="mobile-nav-link subcategory" @click="toggleMobileMenu">
                <span class="nav-icon">🌄</span>
                <span>Adventure</span>
              </RouterLink>
              <RouterLink to="/categories/puzzle" class="mobile-nav-link subcategory" @click="toggleMobileMenu">
                <span class="nav-icon">🧩</span>
                <span>Puzzle</span>
              </RouterLink>
              <RouterLink to="/categories/strategy" class="mobile-nav-link subcategory" @click="toggleMobileMenu">
                <span class="nav-icon">♟️</span>
                <span>Strategy</span>
              </RouterLink>
            </div>
          </div>
          
          <RouterLink to="/privacy" class="mobile-nav-link" @click="toggleMobileMenu">
            <span class="nav-icon">🔒</span>
            <span>Privacy</span>
          </RouterLink>
          
          <div class="mobile-nav-actions">
            <RouterLink to="/login" class="mobile-login-btn" @click="toggleMobileMenu">
              <span class="login-icon">👤</span>
              <span>Login</span>
            </RouterLink>
            <RouterLink to="/signup" class="mobile-signup-btn" @click="toggleMobileMenu">
              <span class="signup-icon">✨</span>
              <span>Sign Up</span>
            </RouterLink>
          </div>
        </div>
      </div>
    </header>
    
    <RouterView />
    
    <footer>
      <nav class="footer-nav">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/privacy">Privacy</RouterLink>
        <RouterLink to="/games">Games</RouterLink>
        <RouterLink to="/categories/action">Action</RouterLink>
        <RouterLink to="/categories/adventure">Adventure</RouterLink>
      </nav>
    </footer>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body, html {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, 
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
}

.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-header {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  transition: all 0.3s ease;
}

/* Header container for max width */
.header-container {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  width: 100%;
}

/* Logo styling */
.logo-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
  font-weight: bold;
  z-index: 1001; /* Above mobile menu */
  position: relative;
}

.logo {
  width: 40px;
  height: 40px;
  margin-right: 1rem;
  filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.5));
  transition: all 0.3s ease;
}

.logo-text {
  font-size: 1.5rem;
  background: linear-gradient(90deg, #ff00ff, #00ffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 10px rgba(255, 0, 255, 0.3);
  font-weight: 800;
  transition: all 0.3s ease;
}

/* Desktop Navigation Links */
.desktop-nav {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  position: relative;
  border: 1px solid transparent;
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
  color: #00ffff;
}

.nav-link.router-link-active {
  background: linear-gradient(90deg, rgba(255, 0, 255, 0.2), rgba(0, 255, 255, 0.2));
  border-color: rgba(0, 255, 255, 0.5);
  color: #ffffff;
}

.nav-icon {
  font-size: 1.2rem;
}

.login-btn {
  background: linear-gradient(90deg, #ff00ff, #00ffff);
  color: #000;
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: 0.5rem;
  box-shadow: 0 0 10px rgba(255, 0, 255, 0.5);
}

.login-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(255, 0, 255, 0.7);
}

.login-icon {
  font-size: 1.2rem;
}

/* Dropdown Menu Styles */
.dropdown-container {
  position: relative;
}

.dropdown-trigger {
  cursor: pointer;
}

.dropdown-arrow {
  font-size: 0.7rem;
  margin-left: 0.3rem;
  transition: transform 0.3s ease;
}

.dropdown-container:hover .dropdown-arrow {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background: #1a1a1a;
  border-radius: 10px;
  width: 200px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: all 0.3s ease;
  z-index: 1000;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.dropdown-container:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(5px);
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  color: white;
  text-decoration: none;
  transition: all 0.2s ease;
}

.dropdown-item:hover {
  background: linear-gradient(90deg, rgba(255, 0, 255, 0.2), rgba(0, 255, 255, 0.2));
  color: #00ffff;
}

.dropdown-icon {
  font-size: 1.2rem;
}

/* Header design-specific styles */
.brisk-otter\.com {
  background: #2E7D32;
  background: linear-gradient(135deg, #2E7D32 0%, #4CAF50 100%);
}

.brisk-elm\.com {
  background: #805AD5;
  background: linear-gradient(135deg, #805AD5 0%, #B794F4 100%);
}

.gleaming-fern\.com {
  background: #3B82F6;
}

.lofty-sprout\.com {
  background: #FF6B6B;
}

.wave-view\.com {
  background: #3B82F6;
}

.yellow-racoon\.com {
  background: #FFB800;
  background: linear-gradient(135deg, #FFB800 0%, #FFA200 100%);
}

.switch-runner\.com {
  background: #FF6347;
  background: linear-gradient(135deg, #FF6347 0%, #FFA07A 100%);
}

.confused-eliphant\.com {
  background: #6C63FF;
  background: linear-gradient(135deg, #6C63FF 0%, #FF6584 100%);
}

.height-ways\.com {
  background: #007BFF; /* Static blue color */
}

.timber-content\.com {
  background: #38bdf8;
  background: linear-gradient(135deg, #38bdf8 0%, #818cf8 100%);
}

.iqchampionhub\.com {
  background: #6C63FF;
  background: linear-gradient(135deg, #6C63FF 0%, #FF6584 100%);
}

.jewel-video-content\.com {
  background: #9333ea;
  background: linear-gradient(135deg, #9333ea 0%, #c026d3 100%);
}

.default {
  background: #4CAF50;
  background: linear-gradient(135deg, #4CAF50 0%, #81C784 100%);
}

.briskvideos\.com, .briskvideos {
  background: rgba(10, 10, 10, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease;
}

.briskvideos\.com.scrolled, .briskvideos.scrolled {
  padding: 0.5rem 0;
  background: rgba(0, 0, 0, 0.95);
  border-bottom: 1px solid rgba(255, 0, 255, 0.2);
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.8);
}

.scrolled .logo {
  width: 35px;
  height: 35px;
}

.scrolled .logo-text {
  font-size: 1.3rem;
}

/* Mobile Navigation Toggle Button */
.mobile-menu-toggle {
  display: none;
  background: transparent;
  border: none;
  width: 40px;
  height: 40px;
  position: relative;
  cursor: pointer;
  z-index: 1001;
  padding: 0;
}

.toggle-line {
  display: block;
  width: 30px;
  height: 2px;
  background: linear-gradient(90deg, #ff00ff, #00ffff);
  position: absolute;
  left: 5px;
  transition: all 0.3s ease;
}

.toggle-line:nth-child(1) {
  top: 12px;
}

.toggle-line:nth-child(2) {
  top: 20px;
}

.toggle-line:nth-child(3) {
  top: 28px;
}

.mobile-menu-toggle.open .toggle-line:nth-child(1) {
  transform: rotate(45deg);
  top: 20px;
}

.mobile-menu-toggle.open .toggle-line:nth-child(2) {
  opacity: 0;
}

.mobile-menu-toggle.open .toggle-line:nth-child(3) {
  transform: rotate(-45deg);
  top: 20px;
}

/* Mobile Navigation Menu */
.mobile-nav {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  background: rgba(10, 10, 10, 0.95);
  transform: translateX(100%);
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 999;
  display: none;
  backdrop-filter: blur(10px);
}

.mobile-nav.open {
  transform: translateX(0);
}

.mobile-nav-container {
  padding: 5rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
  overflow-y: auto;
}

.mobile-nav-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: white;
  text-decoration: none;
  padding: 1rem;
  border-radius: 10px;
  font-size: 1.2rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.mobile-nav-link:hover {
  background: linear-gradient(90deg, rgba(255, 0, 255, 0.1), rgba(0, 255, 255, 0.1));
  color: #00ffff;
}

.mobile-nav-link.router-link-active {
  background: linear-gradient(90deg, rgba(255, 0, 255, 0.2), rgba(0, 255, 255, 0.2));
  color: #ffffff;
}

.mobile-nav-category {
  margin: 0.5rem 0;
}

.category-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 0.5rem;
}

.category-items {
  margin-left: 1rem;
}

.mobile-nav-link.subcategory {
  font-size: 1.1rem;
  padding: 0.75rem 1rem;
}

.mobile-nav-actions {
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.mobile-login-btn, .mobile-signup-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.mobile-login-btn {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.mobile-signup-btn {
  background: linear-gradient(90deg, #ff00ff, #00ffff);
  color: black;
}

/* Footer Styles */
footer {
  margin-top: auto;
  background: #0f0f0f;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  padding: 2rem 0;
}

.footer-nav {
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 1rem;
  flex-wrap: wrap;
}

.footer-nav a {
  color: #888888;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
}

.footer-nav a:hover {
  color: #00ffff;
}

.footer-nav a.router-link-active {
  color: #ff00ff;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .header-container {
    padding: 1rem;
  }
  
  .nav-link {
    padding: 0.5rem 0.75rem;
  }
  
  .nav-icon {
    margin-right: 0.3rem;
  }
}

@media (max-width: 768px) {
  .desktop-nav {
    display: none;
  }
  
  .mobile-menu-toggle {
    display: block;
  }
  
  .mobile-nav {
    display: block;
  }
  
  .logo-text {
    font-size: 1.3rem;
  }
  
  .logo {
    width: 35px;
    height: 35px;
    margin-right: 0.7rem;
  }
}

@media (max-width: 480px) {
  .header-container {
    padding: 0.8rem 1rem;
  }
  
  .logo-text {
    font-size: 1.1rem;
  }
  
  .logo {
    width: 30px;
    height: 30px;
    margin-right: 0.5rem;
  }
  
  .mobile-nav-link, .category-header {
    font-size: 1.1rem;
    padding: 0.9rem;
  }
  
  .mobile-nav-link.subcategory {
    font-size: 1rem;
    padding: 0.7rem 0.9rem;
  }
}
</style>