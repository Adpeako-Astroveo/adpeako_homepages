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
  isScrolled.value = window.scrollY > 50;
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
    <header class="app-header" :class="[designId, {'scrolled': isScrolled}]">
      <RouterLink to="/" class="logo-link">
        <img 
          :src="logoPath"
          :alt="siteName" 
          class="logo" 
        />
        <span class="logo-text">{{ siteName }}</span>
      </RouterLink>
      
      <!-- Mobile menu toggle button -->
      <button class="mobile-menu-toggle" @click="toggleMobileMenu" aria-label="Toggle Menu" :class="{ 'open': isMobileMenuOpen }">
        <span class="menu-icon"></span>
      </button>
      
      <!-- Navigation links (desktop and mobile) -->
      <nav class="nav-links" :class="{ 'open': isMobileMenuOpen }">
        <RouterLink to="/" class="nav-link">Home</RouterLink>
        <RouterLink to="/privacy" class="nav-link">Privacy</RouterLink>
        
        <!-- Domain-specific links -->
        <template v-if="designId === 'timber-content.com'">
          <RouterLink to="/timber-content/music" class="nav-link">Music</RouterLink>
          <RouterLink to="/timber-content/video" class="nav-link">Video</RouterLink>
          <RouterLink to="/timber-content/sports" class="nav-link">Sports</RouterLink>
          <RouterLink to="/timber-content/games" class="nav-link">Games</RouterLink>
          <RouterLink to="/timber-content/audiobooks" class="nav-link">Audiobooks</RouterLink>
        </template>
        
        <!-- IQ Champion Hub specific links -->
        <template v-if="designId === 'iqchampionhub.com'">
          <RouterLink to="/iqchampionhub/music" class="nav-link">Music</RouterLink>
          <RouterLink to="/iqchampionhub/video" class="nav-link">Video</RouterLink>
          <RouterLink to="/iqchampionhub/sports" class="nav-link">Sports</RouterLink>
          <RouterLink to="/iqchampionhub/games" class="nav-link">Games</RouterLink>
          <RouterLink to="/iqchampionhub/audiobooks" class="nav-link">Audiobooks</RouterLink>
          <RouterLink to="/iqchampionhub/payment" class="nav-link">Payment</RouterLink>
        </template>
        
        <!-- Jewel Video Content specific links -->
        <template v-if="designId === 'jewel-video-content.com'">
          <RouterLink to="/jewel-video-content/music" class="nav-link">Music</RouterLink>
          <RouterLink to="/jewel-video-content/video" class="nav-link">Video</RouterLink>
          <RouterLink to="/jewel-video-content/sports" class="nav-link">Sports</RouterLink>
          <RouterLink to="/jewel-video-content/games" class="nav-link">Games</RouterLink>
          <RouterLink to="/jewel-video-content/audiobooks" class="nav-link">Audiobooks</RouterLink>
          <RouterLink to="/jewel-video-content/payment" class="nav-link">Payment</RouterLink>
        </template>
        
        <!-- BriskVideos specific links -->
        <template v-if="designId === 'briskvideos.com'">
          <RouterLink to="/games" class="nav-link">Games</RouterLink>
          <RouterLink to="/categories/action" class="nav-link">Action</RouterLink>
          <RouterLink to="/categories/adventure" class="nav-link">Adventure</RouterLink>
          <RouterLink to="/categories/puzzle" class="nav-link">Puzzle</RouterLink>
          <RouterLink to="/categories/strategy" class="nav-link">Strategy</RouterLink>
        </template>
        
        <RouterLink to="/login" class="login-btn">Login</RouterLink>
      </nav>
    </header>
    <RouterView />
    <footer>
      <nav class="footer-nav">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/privacy">Privacy</RouterLink>
        
        <!-- Domain-specific links in footer -->
        <template v-if="designId === 'timber-content.com'">
          <RouterLink to="/timber-content/music">Music</RouterLink>
          <RouterLink to="/timber-content/video">Video</RouterLink>
          <RouterLink to="/timber-content/sports">Sports</RouterLink>
          <RouterLink to="/timber-content/games">Games</RouterLink>
          <RouterLink to="/timber-content/audiobooks">Audiobooks</RouterLink>
        </template>
        
        <!-- IQ Champion Hub specific links in footer -->
        <template v-if="designId === 'iqchampionhub.com'">
          <RouterLink to="/iqchampionhub/music">Music</RouterLink>
          <RouterLink to="/iqchampionhub/video">Video</RouterLink>
          <RouterLink to="/iqchampionhub/sports">Sports</RouterLink>
          <RouterLink to="/iqchampionhub/games">Games</RouterLink>
          <RouterLink to="/iqchampionhub/audiobooks">Audiobooks</RouterLink>
          <RouterLink to="/iqchampionhub/payment">Payment</RouterLink>
        </template>
        
        <!-- Jewel Video Content specific links in footer -->
        <template v-if="designId === 'jewel-video-content.com'">
          <RouterLink to="/jewel-video-content/music">Music</RouterLink>
          <RouterLink to="/jewel-video-content/video">Video</RouterLink>
          <RouterLink to="/jewel-video-content/sports">Sports</RouterLink>
          <RouterLink to="/jewel-video-content/games">Games</RouterLink>
          <RouterLink to="/jewel-video-content/audiobooks">Audiobooks</RouterLink>
          <RouterLink to="/jewel-video-content/payment">Payment</RouterLink>
        </template>
        
        <!-- BriskVideos specific links in footer -->
        <template v-if="designId === 'briskvideos.com'">
          <RouterLink to="/games">Games</RouterLink>
          <RouterLink to="/categories/action">Action</RouterLink>
          <RouterLink to="/categories/adventure">Adventure</RouterLink>
          <RouterLink to="/briskvideos/privacy">Privacy Policy</RouterLink>
        </template>
      </nav>
      <div class="copyright">
        © {{ new Date().getFullYear() }} {{ siteName }}. All Rights Reserved.
      </div>
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
  padding: 1rem 2rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
}

.app-header.scrolled {
  padding: 0.8rem 2rem;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  backdrop-filter: blur(10px);
}

.login-btn {
  background: white;
  color: inherit;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.login-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

/* Design-specific header styles */
.jazzy-mango\.com {
  background: #4CAF50;
  background: linear-gradient(135deg, #4CAF50 0%, #81C784 100%);
}

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

.briskvideos\.com {
  background: linear-gradient(135deg, rgba(255, 0, 255, 0.9) 0%, rgba(0, 255, 255, 0.9) 100%);
}

.default {
  background: #4CAF50;
  background: linear-gradient(135deg, #4CAF50 0%, #81C784 100%);
}

.logo-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
}

.logo {
  width: 40px;
  height: 40px;
  margin-right: 1rem;
  transition: all 0.3s ease;
}

.logo-text {
  font-size: 1.5rem;
  transition: all 0.3s ease;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  letter-spacing: 0.5px;
}

.app-header.scrolled .logo {
  width: 35px;
  height: 35px;
}

.app-header.scrolled .logo-text {
  font-size: 1.3rem;
}

/* Nav links */
.nav-links {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: 500;
  position: relative;
  transition: all 0.3s ease;
}

.nav-link:after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: white;
  transition: width 0.3s ease;
}

.nav-link:hover:after, 
.nav-link.router-link-active:after {
  width: 100%;
}

.nav-link:hover {
  opacity: 0.9;
}

.nav-link.router-link-active {
  font-weight: 600;
}

/* Mobile Menu Toggle */
.mobile-menu-toggle {
  display: none;
  background: transparent;
  border: none;
  width: 30px;
  height: 30px;
  position: relative;
  cursor: pointer;
  padding: 0;
  z-index: 1010;
  transition: all 0.3s ease;
}

.menu-icon {
  display: block;
  width: 30px;
  height: 3px;
  background-color: white;
  position: relative;
  transition: background-color 0.3s;
}

.menu-icon:before,
.menu-icon:after {
  content: '';
  position: absolute;
  width: 30px;
  height: 3px;
  background-color: white;
  transition: transform 0.3s, top 0.3s;
}

.menu-icon:before {
  top: -8px;
}

.menu-icon:after {
  top: 8px;
}

.mobile-menu-toggle.open .menu-icon {
  background-color: transparent;
}

.mobile-menu-toggle.open .menu-icon:before {
  transform: rotate(45deg);
  top: 0;
}

.mobile-menu-toggle.open .menu-icon:after {
  transform: rotate(-45deg);
  top: 0;
}

footer {
  margin-top: auto;
  background: #f8fafc;
  border-top: 1px solid #e2e8f0;
  padding: 2rem 0;
  text-align: center;
}

.footer-nav {
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 1rem;
  flex-wrap: wrap;
}

.footer-nav a {
  color: #4a5568;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
}

.footer-nav a:hover {
  color: #2d3748;
}

.footer-nav a.router-link-active {
  color: #007BFF;
}

.copyright {
  color: #718096;
  font-size: 0.9rem;
  margin-top: 1rem;
}

/* Improved Responsive Styles */
@media (max-width: 992px) {
  .nav-links {
    gap: 1.5rem;
  }
  
  .logo-text {
    font-size: 1.3rem;
  }
}

@media (max-width: 768px) {
  .app-header {
    padding: 1rem;
  }
  
  .mobile-menu-toggle {
    display: block;
  }
  
  .nav-links {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 280px;
    background: #007BFF; /* Default background */
    flex-direction: column;
    padding: 6rem 2rem 2rem;
    transform: translateX(100%);
    transition: transform 0.4s ease, background 0.3s ease;
    z-index: 1005;
    box-shadow: -5px 0 25px rgba(0, 0, 0, 0.2);
    gap: 1.8rem;
    align-items: flex-start;
  }
  
  .nav-links.open {
    transform: translateX(0);
  }
  
  .nav-link:after {
    bottom: -3px;
  }
  
  .login-btn {
    margin-top: 1rem;
    width: 100%;
    text-align: center;
  }
  
  .logo-text {
    font-size: 1.2rem;
  }
  
  .logo {
    width: 35px;
    height: 35px;
    margin-right: 0.7rem;
  }
  
  .footer-nav {
    gap: 1.5rem;
  }

  /* Match mobile nav background to header design for briskvideos.com */
  .briskvideos\.com .nav-links {
    background: linear-gradient(135deg, rgba(255, 0, 255, 0.9) 0%, rgba(0, 255, 255, 0.9) 100%);
  }
  
  /* Match mobile nav background to header design for other domains */
  .timber-content\.com .nav-links {
    background: linear-gradient(135deg, #38bdf8 0%, #818cf8 100%);
  }
  
  .iqchampionhub\.com .nav-links {
    background: linear-gradient(135deg, #6C63FF 0%, #FF6584 100%);
  }
  
  .jewel-video-content\.com .nav-links {
    background: linear-gradient(135deg, #9333ea 0%, #c026d3 100%);
  }
}

@media (max-width: 480px) {
  .app-header {
    padding: 0.8rem 1rem;
  }
  
  .login-btn {
    padding: 0.4rem 1rem;
    font-size: 0.9rem;
  }
  
  .logo-text {
    font-size: 1.1rem;
  }
  
  .logo {
    width: 30px;
    height: 30px;
    margin-right: 0.5rem;
  }
  
  .nav-links {
    width: 100%;
    padding: 5rem 1.5rem 1.5rem;
  }
  
  .footer-nav {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>