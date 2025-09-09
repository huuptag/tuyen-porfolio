<template>
  <section id="contact" class="section-padding bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
    
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.3) 1px, transparent 0); background-size: 32px 32px;"></div>
    </div>
    
    <div class="container mx-auto px-6 lg:px-8 relative z-10">
      <div class="max-w-6xl mx-auto">
        
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-200 mb-6">
            Let's Work Together
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p class="text-lg text-gray-600 dark:text-gray-400 mt-6 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can bring your ideas to life with creative solutions and technical excellence.
          </p>
        </div>
        
        <div class="grid lg:grid-cols-2 gap-12 items-start">
          
          <!-- Contact Form -->
          <div class="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8">
            <h3 class="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
              Send Me a Message
            </h3>
            
            <form @submit.prevent="submitForm" class="space-y-6">
              <!-- Name -->
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  required
                  class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-gray-200 transition-all duration-300"
                  placeholder="Enter your full name"
                >
              </div>
              
              <!-- Email -->
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-gray-200 transition-all duration-300"
                  placeholder="Enter your email address"
                >
              </div>
              
              <!-- Subject -->
              <div>
                <label for="subject" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  v-model="form.subject"
                  class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-gray-200 transition-all duration-300"
                >
                  <option value="">Select a subject</option>
                  <option value="web-development">Web Development</option>
                  <option value="3d-animation">3D Animation</option>
                  <option value="ui-ux-design">UI/UX Design</option>
                  <option value="consultation">Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <!-- Message -->
              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="6"
                  required
                  class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-gray-200 resize-none transition-all duration-300"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <!-- Submit Button -->
              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full btn-3d px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                <span v-if="!isSubmitting" class="flex items-center">
                  Send Message
                  <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                  </svg>
                </span>
                <span v-else class="flex items-center">
                  <div class="spinner w-5 h-5 mr-2"></div>
                  Sending...
                </span>
              </button>
            </form>
            
            <!-- Success/Error Messages -->
            <div v-if="formStatus.message" :class="[
              'mt-4 p-4 rounded-lg text-sm',
              formStatus.type === 'success' ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' : 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
            ]">
              {{ formStatus.message }}
            </div>
          </div>
          
          <!-- Contact Information -->
          <div class="space-y-8">
            
            <!-- Contact Info Cards -->
            <div class="space-y-6">
              <!-- Email -->
              <div class="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                <div class="flex items-center">
                  <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div class="ml-4">
                    <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200">Email</h4>
                    <p class="text-gray-600 dark:text-gray-400">tuyen@example.com</p>
                  </div>
                </div>
              </div>
              
              <!-- Phone -->
              <div class="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                <div class="flex items-center">
                  <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div class="ml-4">
                    <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200">Phone</h4>
                    <p class="text-gray-600 dark:text-gray-400">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
              
              <!-- Location -->
              <div class="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                <div class="flex items-center">
                  <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div class="ml-4">
                    <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200">Location</h4>
                    <p class="text-gray-600 dark:text-gray-400">New York, USA</p>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Social Links -->
            <div class="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
              <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-6">Follow Me</h4>
              
              <div class="flex flex-wrap gap-4">
                <a
                  v-for="social in socialLinks"
                  :key="social.name"
                  :href="social.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  :class="[
                    'flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg',
                    social.color
                  ]"
                >
                  <span v-html="social.icon" class="mr-2"></span>
                  {{ social.name }}
                </a>
              </div>
            </div>
            
            <!-- Availability -->
            <div class="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 rounded-xl p-6 border border-blue-100 dark:border-gray-700">
              <div class="flex items-center mb-3">
                <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-3"></div>
                <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200">Available for Work</h4>
              </div>
              <p class="text-gray-600 dark:text-gray-400 text-sm">
                I'm currently available for freelance projects and full-time opportunities. 
                Let's discuss how I can help bring your vision to life!
              </p>
            </div>
            
          </div>
          
        </div>
        
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'

const isSubmitting = ref(false)
const formStatus = reactive({
  message: '',
  type: 'success'
})

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const socialLinks = ref([
  {
    name: 'GitHub',
    url: 'https://github.com/tuyen',
    icon: '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>',
    color: 'bg-gray-800 text-white hover:bg-gray-900'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/tuyen',
    icon: '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
    color: 'bg-blue-600 text-white hover:bg-blue-700'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/tuyen',
    icon: '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>',
    color: 'bg-blue-400 text-white hover:bg-blue-500'
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/tuyen',
    icon: '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>',
    color: 'bg-pink-500 text-white hover:bg-pink-600'
  }
])

const submitForm = async () => {
  isSubmitting.value = true
  formStatus.message = ''
  
  try {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Reset form
    Object.keys(form).forEach(key => {
      form[key] = ''
    })
    
    formStatus.message = 'Thank you for your message! I\'ll get back to you soon.'
    formStatus.type = 'success'
    
  } catch (error) {
    formStatus.message = 'Something went wrong. Please try again later.'
    formStatus.type = 'error'
  } finally {
    isSubmitting.value = false
    
    // Clear status after 5 seconds
    setTimeout(() => {
      formStatus.message = ''
    }, 5000)
  }
}
</script>

<style scoped>
.btn-3d:hover {
  transform: translateY(-2px);
  box-shadow: 0 20px 40px rgba(59, 130, 246, 0.3);
}

.spinner {
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-left: 2px solid #ffffff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>