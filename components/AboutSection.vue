<template>
  <section id="about" class="section-padding bg-white dark:bg-gray-900">
    <div class="container mx-auto px-6 lg:px-8">
      <div class="max-w-6xl mx-auto">
        
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-200 mb-6">
            About Me
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        <!-- Main Content -->
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <!-- Text Content -->
          <div class="space-y-6">
            <div class="space-y-4">
              <h3 class="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200">
                Creative Developer & 3D Artist
              </h3>
              <p class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                I'm a passionate developer who specializes in creating immersive digital experiences 
                that blend cutting-edge technology with artistic vision. My work spans across 3D 
                animations, interactive web applications, and modern frontend development.
              </p>
              <p class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                With expertise in modern frameworks like Vue.js, Nuxt.js, and Three.js, I bring 
                ideas to life through code, creating engaging user experiences that captivate 
                and inspire.
              </p>
            </div>
            
            <!-- Stats -->
            <div class="grid grid-cols-3 gap-6 pt-8">
              <div class="text-center">
                <div class="text-3xl font-bold text-blue-600 dark:text-blue-400">3+</div>
                <div class="text-sm text-gray-600 dark:text-gray-400 mt-1">Years Experience</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-purple-600 dark:text-purple-400">50+</div>
                <div class="text-sm text-gray-600 dark:text-gray-400 mt-1">Projects Completed</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-pink-600 dark:text-pink-400">10+</div>
                <div class="text-sm text-gray-600 dark:text-gray-400 mt-1">Technologies</div>
              </div>
            </div>
            
            <!-- CTA Button -->
            <div class="pt-6">
              <button 
                @click="downloadCV"
                class="btn-3d inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                Download CV
              </button>
            </div>
          </div>
          
          <!-- Image/3D Area -->
          <div class="relative">
            <div class="relative z-10">
              <!-- Profile Image Placeholder -->
              <div class="aspect-square max-w-md mx-auto relative">
                <div class="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl transform rotate-6 opacity-20"></div>
                <div class="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-2xl transform -rotate-6 opacity-30"></div>
                <div class="relative bg-gray-200 dark:bg-gray-700 rounded-2xl p-8 shadow-2xl">
                  <!-- Profile Image -->
                  <div class="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700 rounded-xl flex items-center justify-center">
                    <svg class="w-24 h-24 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Decorative Elements -->
            <div class="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20 animate-float"></div>
            <div class="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-200 dark:bg-purple-800 rounded-full opacity-20 animate-float" style="animation-delay: -2s;"></div>
          </div>
          
        </div>
        
        <!-- Skills Preview -->
        <div class="mt-20">
          <div class="text-center mb-12">
            <h3 class="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              What I Work With
            </h3>
            <p class="text-lg text-gray-600 dark:text-gray-400">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>
          
          <!-- Technology Icons -->
          <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            <div 
              v-for="tech in technologies"
              :key="tech.name"
              class="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
            >
              <div class="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {{ tech.icon }}
              </div>
              <span class="text-sm font-medium text-gray-700 dark:text-gray-300">
                {{ tech.name }}
              </span>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const technologies = ref([
  { name: 'Vue.js', icon: '💚' },
  { name: 'Nuxt.js', icon: '🚀' },
  { name: 'Three.js', icon: '🎲' },
  { name: 'JavaScript', icon: '⚡' },
  { name: 'TypeScript', icon: '🔷' },
  { name: 'CSS3', icon: '🎨' },
  { name: 'HTML5', icon: '🌐' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Git', icon: '📚' },
  { name: 'Figma', icon: '🎭' },
  { name: 'Blender', icon: '🎬' },
  { name: 'GSAP', icon: '⚡' }
])

const downloadCV = () => {
  // TODO: Implement CV download functionality
  console.log('Download CV clicked')
  // For now, just show a message
  alert('CV download feature will be implemented soon!')
}
</script>

<style scoped>
.btn-3d:hover {
  transform: translateY(-2px);
  box-shadow: 0 20px 40px rgba(59, 130, 246, 0.3);
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}
</style>