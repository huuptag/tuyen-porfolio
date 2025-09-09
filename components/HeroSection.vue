<template>
  <section id="home" class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
    
    <!-- 3D Background Container -->
    <div class="absolute inset-0 z-0">
      <Canvas3D />
    </div>
    
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 z-10">
      <div class="animate-float absolute top-20 left-10 w-20 h-20 bg-blue-200 dark:bg-blue-900 rounded-full opacity-30 blur-sm"></div>
      <div class="animate-float absolute top-40 right-20 w-32 h-32 bg-purple-200 dark:bg-purple-900 rounded-full opacity-20 blur-md" style="animation-delay: -2s;"></div>
      <div class="animate-float absolute bottom-40 left-1/4 w-16 h-16 bg-pink-200 dark:bg-pink-900 rounded-full opacity-25 blur-sm" style="animation-delay: -4s;"></div>
    </div>
    
    <!-- Main Content -->
    <div class="relative z-20 text-center px-6 lg:px-8 max-w-5xl mx-auto">
      <div class="space-y-8">
        
        <!-- Greeting -->
        <div class="animate-fade-in-up opacity-0" style="animation-delay: 0.2s; animation-fill-mode: forwards;">
          <p class="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-medium">
            Hello, I'm
          </p>
        </div>
        
        <!-- Name with Gradient -->
        <div class="animate-fade-in-up opacity-0" style="animation-delay: 0.4s; animation-fill-mode: forwards;">
          <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
            Tuyen
          </h1>
        </div>
        
        <!-- Title -->
        <div class="animate-fade-in-up opacity-0" style="animation-delay: 0.6s; animation-fill-mode: forwards;">
          <h2 class="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-gray-200 leading-tight">
            Creative Developer & 3D Artist
          </h2>
        </div>
        
        <!-- Description -->
        <div class="animate-fade-in-up opacity-0" style="animation-delay: 0.8s; animation-fill-mode: forwards;">
          <p class="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            I craft immersive digital experiences with cutting-edge 3D animations, 
            modern web technologies, and creative storytelling.
          </p>
        </div>
        
        <!-- CTA Buttons -->
        <div class="animate-fade-in-up opacity-0 flex flex-col sm:flex-row gap-4 justify-center items-center" style="animation-delay: 1s; animation-fill-mode: forwards;">
          <button 
            @click="scrollToSection('projects')"
            class="btn-3d px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group"
          >
            <span class="flex items-center gap-2">
              View My Work
              <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </span>
          </button>
          
          <button 
            @click="scrollToSection('contact')"
            class="btn-3d px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:-translate-y-1"
          >
            Let's Connect
          </button>
        </div>
        
        <!-- Scroll Indicator -->
        <div class="animate-fade-in-up opacity-0 mt-16" style="animation-delay: 1.2s; animation-fill-mode: forwards;">
          <div class="flex flex-col items-center space-y-2">
            <p class="text-sm text-gray-500 dark:text-gray-400">Scroll to explore</p>
            <div class="w-6 h-10 border-2 border-gray-300 dark:border-gray-600 rounded-full flex justify-center">
              <div class="w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce mt-2"></div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    
    <!-- Floating Elements -->
    <FloatingElements />
    
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

const scrollToSection = (sectionId) => {
  if (process.client) {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }
}

onMounted(() => {
  // Add any hero-specific animations or interactions
  if (process.client) {
    // Parallax effect for background elements
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset
      const parallaxElements = document.querySelectorAll('.animate-float')
      
      parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1)
        element.style.transform = `translateY(${scrolled * speed}px)`
      })
    })
  }
})
</script>

<style scoped>
/* Ensure smooth animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

/* Gradient text animation */
.bg-clip-text {
  background-size: 200% 200%;
  animation: gradientShift 3s ease-in-out infinite;
}

@keyframes gradientShift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

/* Button hover effects */
.btn-3d:hover {
  transform: translateY(-2px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .animate-float {
    display: none; /* Hide floating elements on mobile for better performance */
  }
}
</style>