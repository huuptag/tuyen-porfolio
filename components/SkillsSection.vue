<template>
  <section id="skills" class="section-padding bg-gray-50 dark:bg-gray-800">
    <div class="container mx-auto px-6 lg:px-8">
      <div class="max-w-6xl mx-auto">
        
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-200 mb-6">
            Skills & Expertise
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p class="text-lg text-gray-600 dark:text-gray-400 mt-6 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and creative abilities
          </p>
        </div>
        
        <!-- Skills Grid -->
        <div class="grid md:grid-cols-2 gap-12">
          
          <!-- Technical Skills -->
          <div>
            <h3 class="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-8">
              Technical Skills
            </h3>
            
            <div class="space-y-6">
              <div 
                v-for="skill in technicalSkills"
                :key="skill.name"
                class="group"
              >
                <div class="flex justify-between items-center mb-2">
                  <span class="text-lg font-medium text-gray-700 dark:text-gray-300">
                    {{ skill.name }}
                  </span>
                  <span class="text-sm text-gray-500 dark:text-gray-400">
                    {{ skill.level }}%
                  </span>
                </div>
                
                <!-- Progress Bar -->
                <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 relative overflow-hidden">
                  <div 
                    class="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out group-hover:from-blue-600 group-hover:to-purple-700"
                    :style="{ 
                      width: isVisible ? skill.level + '%' : '0%',
                      transition: 'width 1.5s ease-out ' + (skill.delay || 0) + 's'
                    }"
                  ></div>
                  
                  <!-- Shine effect -->
                  <div class="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine"></div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Creative Skills -->
          <div>
            <h3 class="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-8">
              Creative Skills
            </h3>
            
            <div class="space-y-6">
              <div 
                v-for="skill in creativeSkills"
                :key="skill.name"
                class="group"
              >
                <div class="flex justify-between items-center mb-2">
                  <span class="text-lg font-medium text-gray-700 dark:text-gray-300">
                    {{ skill.name }}
                  </span>
                  <span class="text-sm text-gray-500 dark:text-gray-400">
                    {{ skill.level }}%
                  </span>
                </div>
                
                <!-- Progress Bar -->
                <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 relative overflow-hidden">
                  <div 
                    class="h-full bg-gradient-to-r from-pink-500 to-orange-500 rounded-full transition-all duration-1000 ease-out group-hover:from-pink-600 group-hover:to-orange-600"
                    :style="{ 
                      width: isVisible ? skill.level + '%' : '0%',
                      transition: 'width 1.5s ease-out ' + (skill.delay || 0) + 's'
                    }"
                  ></div>
                  
                  <!-- Shine effect -->
                  <div class="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine"></div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        
        <!-- Skill Categories -->
        <div class="mt-20">
          <h3 class="text-3xl font-bold text-gray-800 dark:text-gray-200 text-center mb-12">
            Skill Categories
          </h3>
          
          <div class="grid md:grid-cols-3 gap-8">
            <!-- Frontend Development -->
            <div class="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
              <div class="text-center">
                <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                </div>
                
                <h4 class="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                  Frontend Development
                </h4>
                
                <p class="text-gray-600 dark:text-gray-400 mb-6">
                  Modern web applications with responsive design and optimal performance
                </p>
                
                <div class="flex flex-wrap justify-center gap-2">
                  <span v-for="tech in frontendTechs" :key="tech" class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm rounded-full">
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
            
            <!-- 3D & Animation -->
            <div class="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
              <div class="text-center">
                <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                  </svg>
                </div>
                
                <h4 class="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                  3D & Animation
                </h4>
                
                <p class="text-gray-600 dark:text-gray-400 mb-6">
                  Immersive 3D experiences and smooth animations that captivate users
                </p>
                
                <div class="flex flex-wrap justify-center gap-2">
                  <span v-for="tech in animationTechs" :key="tech" class="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 text-sm rounded-full">
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
            
            <!-- Tools & Design -->
            <div class="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
              <div class="text-center">
                <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h4"></path>
                  </svg>
                </div>
                
                <h4 class="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                  Tools & Design
                </h4>
                
                <p class="text-gray-600 dark:text-gray-400 mb-6">
                  Professional tools and design systems for creating polished products
                </p>
                
                <div class="flex flex-wrap justify-center gap-2">
                  <span v-for="tech in designTechs" :key="tech" class="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-sm rounded-full">
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isVisible = ref(false)

const technicalSkills = ref([
  { name: 'Vue.js / Nuxt.js', level: 92, delay: 0.2 },
  { name: 'JavaScript / TypeScript', level: 88, delay: 0.4 },
  { name: 'Three.js / WebGL', level: 85, delay: 0.6 },
  { name: 'CSS3 / Tailwind CSS', level: 90, delay: 0.8 },
  { name: 'Node.js', level: 78, delay: 1.0 },
  { name: 'Git / GitHub', level: 82, delay: 1.2 }
])

const creativeSkills = ref([
  { name: '3D Modeling', level: 80, delay: 0.2 },
  { name: 'UI/UX Design', level: 85, delay: 0.4 },
  { name: 'Animation', level: 88, delay: 0.6 },
  { name: 'Motion Graphics', level: 75, delay: 0.8 },
  { name: 'Digital Art', level: 70, delay: 1.0 },
  { name: 'Visual Effects', level: 72, delay: 1.2 }
])

const frontendTechs = ref(['Vue.js', 'Nuxt.js', 'React', 'TypeScript', 'Tailwind'])
const animationTechs = ref(['Three.js', 'GSAP', 'Framer Motion', 'Lottie', 'WebGL'])
const designTechs = ref(['Figma', 'Blender', 'After Effects', 'Photoshop', 'Adobe XD'])

onMounted(() => {
  // Intersection Observer to trigger animations when section is visible
  if (process.client) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.value = true
          }
        })
      },
      { threshold: 0.3 }
    )
    
    const skillsSection = document.getElementById('skills')
    if (skillsSection) {
      observer.observe(skillsSection)
    }
  }
})
</script>

<style scoped>
@keyframes shine {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.animate-shine {
  animation: shine 2s infinite;
  animation-delay: 1s;
}

/* Progress bar hover effects */
.group:hover .animate-shine {
  animation-duration: 1s;
}
</style>