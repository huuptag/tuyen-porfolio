<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-300">
    <NuxtRouteAnnouncer />
    
    <!-- Navigation -->
    <nav class="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-slate-800/90 backdrop-blur-lg shadow-lg transition-colors duration-300">
      <div class="container mx-auto px-6">
        <div class="flex items-center justify-between h-16">
          <div class="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Tuyen
          </div>
          <div class="hidden md:flex space-x-8">
            <a href="#home" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</a>
            <a href="#about" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
            <a href="#skills" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Skills</a>
            <a href="#projects" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a>
            <a href="#contact" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
            <div class="ml-4 pl-4 border-l border-gray-300 dark:border-gray-600">
              <button 
                @click="toggleThemeMode" 
                class="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 min-w-[120px] text-sm font-medium"
                :title="`Current: ${getThemeDisplay()}`"
              >
                {{ getThemeDisplay() }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
    
    <!-- Hero Section -->
    <section id="home" class="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <!-- Animated Background -->
      <div class="absolute inset-0">
        <div class="absolute top-20 left-10 w-20 h-20 bg-blue-200 dark:bg-blue-800/30 rounded-full opacity-30 animate-float"></div>
        <div class="absolute top-40 right-20 w-32 h-32 bg-purple-200 dark:bg-purple-800/30 rounded-full opacity-20 animate-float-delayed"></div>
        <div class="absolute bottom-40 left-1/4 w-16 h-16 bg-pink-200 dark:bg-pink-800/30 rounded-full opacity-25 animate-bounce"></div>
        <div class="absolute top-1/2 right-1/4 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-600 dark:from-blue-600 dark:to-purple-800 rounded-lg opacity-20 animate-spin-3d transform rotate-45"></div>
      </div>
      
      <div class="text-center z-10 space-y-8 max-w-4xl mx-auto px-6">
        <div class="animate-fade-in-up opacity-0" style="animation-delay: 0.2s; animation-fill-mode: forwards;">
          <p class="text-lg text-gray-600 dark:text-gray-300 font-medium">Hello, I'm</p>
        </div>
        
        <div class="animate-fade-in-up opacity-0" style="animation-delay: 0.4s; animation-fill-mode: forwards;">
          <h1 class="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Tuyen
          </h1>
        </div>
        
        <div class="animate-fade-in-up opacity-0" style="animation-delay: 0.6s; animation-fill-mode: forwards;">
          <h2 class="text-3xl md:text-5xl font-bold text-gray-800 dark:text-gray-100">
            Creative Developer & 3D Artist
          </h2>
        </div>
        
        <div class="animate-fade-in-up opacity-0" style="animation-delay: 0.8s; animation-fill-mode: forwards;">
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I craft immersive digital experiences with cutting-edge 3D animations, 
            modern web technologies, and creative storytelling.
          </p>
        </div>
        
        <div class="animate-fade-in-up opacity-0 flex flex-col sm:flex-row gap-4 justify-center items-center" style="animation-delay: 1s; animation-fill-mode: forwards;">
          <button class="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
            View My Work
          </button>
          <button class="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:border-blue-500 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all duration-300 transform hover:-translate-y-1">
            Let's Connect
          </button>
        </div>
      </div>
    </section>
    
    <!-- About Section -->
    <section id="about" class="py-20 bg-white dark:bg-slate-800 transition-colors duration-300">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-6">About Me</h2>
          <div class="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        <div class="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div class="space-y-6">
            <h3 class="text-3xl font-bold text-gray-800 dark:text-gray-100">Creative Developer & 3D Artist</h3>
            <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a passionate developer who specializes in creating immersive digital experiences 
              that blend cutting-edge technology with artistic vision. My work spans across 3D 
              animations, interactive web applications, and modern frontend development.
            </p>
            <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              With expertise in modern frameworks like Vue.js, Nuxt.js, and Three.js, I bring 
              ideas to life through code, creating engaging user experiences that captivate 
              and inspire.
            </p>
            
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
          </div>
          
          <div class="relative">
            <div class="aspect-square max-w-md mx-auto relative">
              <div class="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl transform rotate-6 opacity-20 animate-pulse"></div>
              <div class="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-2xl transform -rotate-6 opacity-30 animate-float"></div>
              <div class="relative bg-gray-200 dark:bg-gray-700 rounded-2xl p-8 shadow-2xl flex items-center justify-center backdrop-blur-sm transition-colors duration-300">
                <svg class="w-32 h-32 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Skills Section -->
    <section id="skills" class="py-20 bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-6">Skills & Expertise</h2>
          <div class="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div class="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
            <div class="text-center">
              <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <h4 class="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">Frontend Development</h4>
              <p class="text-gray-600 dark:text-gray-300 mb-6">Modern web applications with responsive design and optimal performance</p>
              <div class="flex flex-wrap justify-center gap-2">
                <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full">Vue.js</span>
                <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full">Nuxt.js</span>
                <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full">TypeScript</span>
              </div>
            </div>
          </div>
          
          <div class="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
            <div class="text-center">
              <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-12">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                </svg>
              </div>
              <h4 class="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">3D & Animation</h4>
              <p class="text-gray-600 dark:text-gray-300 mb-6">Immersive 3D experiences and smooth animations that captivate users</p>
              <div class="flex flex-wrap justify-center gap-2">
                <span class="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm rounded-full">Three.js</span>
                <span class="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm rounded-full">GSAP</span>
                <span class="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm rounded-full">WebGL</span>
              </div>
            </div>
          </div>
          
          <div class="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
            <div class="text-center">
              <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h4"></path>
                </svg>
              </div>
              <h4 class="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">Tools & Design</h4>
              <p class="text-gray-600 dark:text-gray-300 mb-6">Professional tools and design systems for creating polished products</p>
              <div class="flex flex-wrap justify-center gap-2">
                <span class="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm rounded-full">Figma</span>
                <span class="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm rounded-full">Blender</span>
                <span class="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm rounded-full">Adobe</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Projects Section -->
    <ProjectsSection />
    
    <!-- Contact Section -->
    <section id="contact" class="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-6">Let's Work Together</h2>
          <div class="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p class="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can bring your ideas to life.
          </p>
        </div>
        
        <div class="max-w-4xl mx-auto">
          <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 backdrop-blur-sm transition-colors duration-300">
            <form class="space-y-6">
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
                  <input type="text" class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-slate-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300">
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                  <input type="email" class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-slate-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300">
                </div>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                <select class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-slate-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300">
                  <option>Select a subject</option>
                  <option>Web Development</option>
                  <option>3D Animation</option>
                  <option>UI/UX Design</option>
                  <option>Consultation</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea rows="6" class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-slate-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-300" placeholder="Tell me about your project..."></textarea>
              </div>
              <button type="submit" class="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Footer -->
    <footer class="bg-gray-900 dark:bg-slate-950 text-white py-12 transition-colors duration-300">
      <div class="container mx-auto px-6">
        <div class="text-center">
          <div class="mb-6">
            <h3 class="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Tuyen
            </h3>
            <p class="text-gray-400 mt-2">
              Creative Developer & 3D Artist
            </p>
          </div>
          
          <div class="flex justify-center space-x-6 mb-8">
            <a href="#" class="w-12 h-12 bg-gray-800 dark:bg-slate-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-110">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="#" class="w-12 h-12 bg-gray-800 dark:bg-slate-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-110">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="#" class="w-12 h-12 bg-gray-800 dark:bg-slate-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-110">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
          </div>
          
          <div class="text-gray-400 text-sm">
            © {{ currentYear }} Tuyen. All rights reserved. Crafted with 💜 and Nuxt.js
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import ProjectsSection from '../components/ProjectsSection.vue'

// Theme state
const theme = ref('auto') // 'light' | 'dark' | 'auto'
const isDark = ref(false)

// Apply theme based on current mode
const applyTheme = () => {
  if (!process.client) return

  const root = document.documentElement
  
  if (theme.value === 'auto') {
    // Use system preference
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  } else {
    isDark.value = theme.value === 'dark'
  }

  // Apply dark class to document
  if (isDark.value) {
    root.classList.add('dark')
  } else {
    root.classList.remove('dark')
  }
}

// Set theme and persist to localStorage
const setTheme = (newTheme) => {
  theme.value = newTheme
  
  if (process.client) {
    localStorage.setItem('theme', newTheme)
    applyTheme()
  }
}

// Enhanced toggle function that cycles through all modes
const toggleThemeMode = () => {
  const currentTheme = theme.value
  const nextTheme = currentTheme === 'light' ? 'dark' : currentTheme === 'dark' ? 'auto' : 'light'
  setTheme(nextTheme)
}

// Get current theme display
const getThemeDisplay = () => {
  if (theme.value === 'auto') {
    return isDark.value ? '🌙 Auto (Dark)' : '☀️ Auto (Light)'
  }
  return theme.value === 'dark' ? '🌙 Dark' : '☀️ Light'
}

// Initialize theme on mount
onMounted(() => {
  if (process.client) {
    // Get saved theme or default to auto
    const savedTheme = localStorage.getItem('theme') || 'auto'
    theme.value = savedTheme
    applyTheme()

    // Listen for system theme changes when in auto mode
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    
    const handleChange = () => {
      if (theme.value === 'auto') {
        applyTheme()
      }
    }

    mediaQuery.addEventListener('change', handleChange)
    
    console.log('Portfolio loaded successfully!')
    console.log('Theme system initialized:', { 
      theme: theme.value, 
      isDark: isDark.value,
      systemDark: mediaQuery.matches
    })
  }
})

// Meta tags and SEO
useHead({
  title: 'Tuyen - Professional Portfolio',
  meta: [
    {
      name: 'description',
      content: 'Professional portfolio showcasing 3D animations, web development, and creative projects by Tuyen.'
    }
  ]
})

const currentYear = computed(() => new Date().getFullYear())
</script>

<style>
/* Global app styles */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', sans-serif;
  line-height: 1.6;
}

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

@keyframes spin3d {
  0% {
    transform: rotate(0deg) rotateY(0deg);
  }
  100% {
    transform: rotate(360deg) rotateY(360deg);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float 6s ease-in-out infinite;
  animation-delay: -3s;
}

.animate-spin-3d {
  animation: spin3d 10s linear infinite;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
}

::-webkit-scrollbar-thumb {
  background: #3b82f6;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #1e40af;
}
</style>