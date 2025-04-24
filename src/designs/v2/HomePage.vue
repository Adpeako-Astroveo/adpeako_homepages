<template>
  <div class="v2-homepage">
    <header class="header">
      <h1>Welcome to Version 2</h1>
      <p>A fresh take on digital design</p>
    </header>
    
    <section class="features">
      <div class="feature">
        <h2>Modern Design</h2>
        <p>Clean, contemporary aesthetics for the digital age</p>
      </div>
      <div class="feature">
        <h2>Innovation</h2>
        <p>Pushing boundaries with cutting-edge solutions</p>
      </div>
      <div class="feature">
        <h2>Excellence</h2>
        <p>Committed to delivering outstanding results</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.v2-homepage {
  background-color: #FFD700;
  min-height: 100vh;
  padding: 2rem;
}

.header {
  text-align: center;
  padding: 4rem 0;
  color: #333;
}

.header h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.feature {
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.feature h2 {
  color: #FFA500;
  margin-bottom: 1rem;
}

.feature p {
  color: #666;
}
</style>