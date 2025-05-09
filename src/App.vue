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
  const domain = hostname.replace(/\.com$/, '');
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

onMounted(async () => {
  designId.value = domainMapping[hostname] || 'default';
  // Update logo path after checking existence
  logoPath.value = await getLogoPath(hostname);
  
  // Update favicon
  const favicon = document.querySelector('link[rel="icon"]');
  if (favicon) {
    favicon.href = logoPath.value;
  }
});

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
    <header class="app-header" :class="designId">
      <RouterLink to="/" class="logo-link">
        <img 
          :src="logoPath"
          :alt="siteName" 
          class="logo" 
        />
        <span class="logo-text">{{ siteName }}</span>
      </RouterLink>
      <RouterLink to="/login" class="login-btn">Login</RouterLink>
    </header>
    <RouterView />
    <footer>
      <nav class="footer-nav">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/privacy">Privacy</RouterLink>
      </nav>
    </footer>
  </div>
</template>

<style>
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-header {
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
}

.logo-text {
  font-size: 1.5rem;
}

footer {
  margin-top: auto;
  background: #f8fafc;
  border-top: 1px solid #e2e8f0;
  padding: 2rem 0;
}

.footer-nav {
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 1rem;
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
  color: #48bb78;
}
</style>