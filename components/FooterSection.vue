<template>
  <footer class="bg-gray-900 text-white">
    <!-- Main Footer Content -->
    <div class="container mx-auto px-6 lg:px-8 py-12">
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        <!-- Brand Section -->
        <div class="lg:col-span-2">
          <div class="mb-6">
            <h3 class="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Tuyen
            </h3>
            <p class="text-gray-400 mt-2 max-w-md">
              Creative Developer & 3D Artist passionate about crafting immersive digital experiences 
              that blend cutting-edge technology with artistic vision.
            </p>
          </div>
          
          <!-- Social Links -->
          <div class="flex space-x-4">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
              :title="social.name"
            >
              <span v-html="social.icon" class="text-gray-400 hover:text-white"></span>
            </a>
          </div>
        </div>
        
        <!-- Quick Links -->
        <div>
          <h4 class="text-lg font-semibold mb-6">Quick Links</h4>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.name">
              <NuxtLink
                :to="link.href"
                @click="scrollToSection(link.href.slice(1))"
                class="text-gray-400 hover:text-white transition-colors duration-300 hover:underline"
              >
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        
        <!-- Services -->
        <div>
          <h4 class="text-lg font-semibold mb-6">Services</h4>
          <ul class="space-y-3">
            <li v-for="service in services" :key="service">
              <span class="text-gray-400 hover:text-white transition-colors duration-300 cursor-default">
                {{ service }}
              </span>
            </li>
          </ul>
        </div>
        
      </div>
    </div>
    
    <!-- Newsletter Section -->
    <div class="border-t border-gray-800">
      <div class="container mx-auto px-6 lg:px-8 py-8">
        <div class="max-w-2xl mx-auto text-center">
          <h4 class="text-xl font-semibold mb-4">Stay Updated</h4>
          <p class="text-gray-400 mb-6">
            Subscribe to get notified about my latest projects and creative insights.
          </p>
          
          <form @submit.prevent="subscribeNewsletter" class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              v-model="newsletterEmail"
              type="email"
              placeholder="Enter your email"
              class="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
              required
            >
            <button
              type="submit"
              :disabled="isSubscribing"
              class="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span v-if="!isSubscribing">Subscribe</span>
              <span v-else>Subscribing...</span>
            </button>
          </form>
          
          <div v-if="newsletterStatus.message" :class="[
            'mt-4 p-3 rounded-lg text-sm',
            newsletterStatus.type === 'success' ? 'bg-green-900 text-green-300' : 'bg-red-900 text-red-300'
          ]">
            {{ newsletterStatus.message }}
          </div>
        </div>
      </div>
    </div>
    
    <!-- Bottom Footer -->
    <div class="border-t border-gray-800">
      <div class="container mx-auto px-6 lg:px-8 py-6">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          
          <!-- Copyright -->
          <div class="text-gray-400 text-sm">
            © {{ currentYear }} Tuyen. All rights reserved. Crafted with 💜 and Vue.js
          </div>
          
          <!-- Back to Top -->
          <button
            @click="scrollToTop"
            class="group flex items-center space-x-2 text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            <span class="text-sm">Back to Top</span>
            <svg class="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
            </svg>
          </button>
          
        </div>
      </div>
    </div>
    
    <!-- Animated Background -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden opacity-5">
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-blue-600 rounded-full blur-3xl animate-float"></div>
      <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600 rounded-full blur-3xl animate-float" style="animation-delay: -3s;"></div>
    </div>
    
  </footer>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'

const newsletterEmail = ref('')
const isSubscribing = ref(false)

const newsletterStatus = reactive({
  message: '',
  type: 'success'
})

const currentYear = computed(() => new Date().getFullYear())

const socialLinks = ref([
  {
    name: 'GitHub',
    url: 'https://github.com/tuyen',
    icon: '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/tuyen',
    icon: '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/tuyen',
    icon: '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>'
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/tuyen',
    icon: '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>'
  },
  {
    name: 'Dribbble',
    url: 'https://dribbble.com/tuyen',
    icon: '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12 12-5.374 12-12S18.626 0 12 0zm7.568 5.302c1.4 1.5 2.252 3.5 2.273 5.698-.653-.126-1.542-.254-2.763-.254-.2 0-.402.007-.606.018-.055-.126-.11-.252-.165-.377-.31-.702-.657-1.393-1.038-2.06 1.578-.659 2.834-1.543 3.299-2.025zM12 2.138c2.005 0 3.843.682 5.31 1.821-.389.425-1.471 1.253-2.851 1.822-.881-1.617-1.852-2.98-2.459-3.643zm-2.931.693c.607.663 1.578 2.026 2.459 3.643-3.684 1.002-6.901 1.002-7.8 1.002-.126 0-.252-.004-.378-.011C4.318 5.284 6.395 3.467 9.069 2.831zm-6.14 4.97c.151.007.302.011.454.011.798 0 4.064 0 7.942-1.09.347.691.666 1.393.952 2.095-4.064 1.14-7.552 4.342-7.552 4.342s-.007-.007-.007-.014C2.718 10.292 2.718 8.023 2.929 7.601zm.911 4.514s3.515-3.187 7.579-4.327c.798 2.005 1.393 4.154 1.645 6.397-1.645.693-4.342 2.459-6.397 5.005C4.318 17.368 3.203 15.086 3.84 12.115zm3.282 7.579c1.645-2.005 4.064-3.515 5.709-4.208.055.151.11.302.165.454.347 1.002.567 1.645.693 2.146-.798.347-1.645.798-2.459 1.393-1.253.567-2.146 1.14-2.851 1.645-.441-.798-.693-1.645-.693-2.459-.007-.693.055-1.393.165-2.095.151-.378.302-.756.453-1.134zm4.719 3.908c.126-.055.252-.11.378-.165.693-.347 1.393-.798 2.146-1.253.693-.425 1.393-.851 2.005-1.253-.126.441-.302.881-.567 1.253-.567 1.002-1.393 1.822-2.459 2.459-.441.302-.881.567-1.393.798-.11-.252-.11-.567-.11-.839zM12 21.862c-1.645 0-3.187-.441-4.514-1.253.693-.425 1.393-.798 2.005-1.253.693-.425 1.393-.851 2.005-1.253.055.378.126.756.165 1.134.055.567.055 1.134.055 1.645-.055.302-.055.604-.055.906.055-.055.165-.11.252-.165.151-.055.302-.11.454-.165-.165.151-.302.302-.454.454-.302.302-.604.567-.913.85z"/></svg>'
  }
])

const quickLinks = ref([
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
])

const services = ref([
  'Web Development',
  '3D Animation',
  'UI/UX Design',
  'Frontend Development',
  'Creative Consulting'
])

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

const scrollToTop = () => {
  if (process.client) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
}

const subscribeNewsletter = async () => {
  if (!newsletterEmail.value) return
  
  isSubscribing.value = true
  newsletterStatus.message = ''
  
  try {
    // Simulate newsletter subscription
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    newsletterStatus.message = 'Thank you for subscribing! You\'ll receive updates about my latest work.'
    newsletterStatus.type = 'success'
    newsletterEmail.value = ''
    
  } catch (error) {
    newsletterStatus.message = 'Something went wrong. Please try again.'
    newsletterStatus.type = 'error'
  } finally {
    isSubscribing.value = false
    
    // Clear status after 5 seconds
    setTimeout(() => {
      newsletterStatus.message = ''
    }, 5000)
  }
}
</script>

<style scoped>
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

.animate-float {
  animation: float 8s ease-in-out infinite;
}

/* Smooth hover transitions */
footer {
  position: relative;
}
</style>