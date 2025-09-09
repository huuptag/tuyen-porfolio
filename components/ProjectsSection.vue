<template>
  <section id="projects" class="section-padding bg-white dark:bg-gray-900">
    <div class="container mx-auto px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-200 mb-6">
            Featured Projects
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p class="text-lg text-gray-600 dark:text-gray-400 mt-6 max-w-2xl mx-auto">
            A showcase of my latest work combining creativity with technical excellence
          </p>
        </div>
        
        <!-- Project Filter -->
        <div class="flex flex-wrap justify-center gap-4 mb-12">
          <button
            v-for="category in categories"
            :key="category"
            @click="activeFilter = category"
            :class="[
              'px-6 py-2 rounded-full font-medium transition-all duration-300',
              activeFilter === category 
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
            ]"
          >
            {{ category }}
          </button>
        </div>
        
        <!-- Projects Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="project in filteredProjects"
            :key="project.id"
            class="group bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
          >
            <!-- Project Image -->
            <div class="relative overflow-hidden aspect-video bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600">
              <div class="absolute inset-0 flex items-center justify-center">
                <!-- Placeholder for project image -->
                <div class="text-center">
                  <div class="text-6xl mb-4">{{ project.icon }}</div>
                  <div class="text-sm text-gray-500 dark:text-gray-400">{{ project.category }}</div>
                </div>
              </div>
              
              <!-- Overlay on hover -->
              <div class="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-purple-600/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <div class="flex space-x-4">
                  <button 
                    @click="viewProject(project)"
                    class="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
                  >
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                    </svg>
                  </button>
                  
                  <a 
                    :href="project.github"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
                  >
                    <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
              
              <!-- Tags -->
              <div class="absolute top-4 left-4">
                <span class="inline-block px-3 py-1 bg-white/90 text-gray-800 text-xs font-medium rounded-full">
                  {{ project.category }}
                </span>
              </div>
            </div>
            
            <!-- Project Info -->
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {{ project.title }}
              </h3>
              
              <p class="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                {{ project.description }}
              </p>
              
              <!-- Technologies -->
              <div class="flex flex-wrap gap-2 mb-4">
                <span 
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs rounded-md"
                >
                  {{ tech }}
                </span>
              </div>
              
              <!-- Project Stats -->
              <div class="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>{{ project.year }}</span>
                <div class="flex items-center space-x-4">
                  <span class="flex items-center">
                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                    </svg>
                    {{ project.views }}
                  </span>
                  <span class="flex items-center">
                    <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    {{ project.stars }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Load More Button -->
        <div class="text-center mt-12">
          <button 
            @click="loadMoreProjects"
            class="btn-3d inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <span class="mr-2">Load More Projects</span>
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </button>
        </div>
        
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeFilter = ref('All')
const categories = ref(['All', '3D Animation', 'Web Development', 'UI/UX Design', 'Mobile App'])

const projects = ref([
  {
    id: 1,
    title: '3D Interactive Portfolio',
    description: 'A stunning 3D portfolio website built with Three.js and Vue.js, featuring immersive animations and interactive elements that showcase creative potential.',
    category: '3D Animation',
    technologies: ['Vue.js', 'Three.js', 'GSAP', 'WebGL'],
    year: '2024',
    views: '1.2k',
    stars: '45',
    icon: '🎲',
    github: 'https://github.com/huuptag/3d-portfolio',
    live: '#'
  },
  {
    id: 2,
    title: 'E-commerce Platform',
    description: 'Modern e-commerce solution with advanced filtering, real-time inventory management, and seamless checkout experience using Nuxt.js.',
    category: 'Web Development',
    technologies: ['Nuxt.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
    year: '2024',
    views: '2.1k',
    stars: '67',
    icon: '🛒',
    github: 'https://github.com/huuptag/ecommerce-platform',
    live: '#'
  },
  {
    id: 3,
    title: 'Motion Graphics Dashboard',
    description: 'Analytics dashboard with beautiful motion graphics and smooth transitions, providing intuitive data visualization for business metrics.',
    category: 'UI/UX Design',
    technologies: ['React', 'D3.js', 'Framer Motion', 'Chart.js'],
    year: '2023',
    views: '856',
    stars: '32',
    icon: '📊',
    github: 'https://github.com/huuptag/analytics-dashboard',
    live: '#'
  },
  {
    id: 4,
    title: '3D Product Visualizer',
    description: 'Interactive 3D product visualization tool allowing customers to explore products in detail with realistic lighting and materials.',
    category: '3D Animation',
    technologies: ['Three.js', 'React', 'WebGL', 'Blender'],
    year: '2023',
    views: '1.8k',
    stars: '89',
    icon: '🎨',
    github: 'https://github.com/huuptag/3d-product-viewer',
    live: '#'
  },
  {
    id: 5,
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates, drag-and-drop interface, and team collaboration features.',
    category: 'Web Development',
    technologies: ['Vue.js', 'Socket.io', 'Node.js', 'MongoDB'],
    year: '2023',
    views: '1.4k',
    stars: '56',
    icon: '✅',
    github: 'https://github.com/huuptag/task-manager',
    live: '#'
  },
  {
    id: 6,
    title: 'Fitness Tracking Mobile App',
    description: 'Cross-platform mobile app for fitness tracking with workout plans, progress monitoring, and social sharing capabilities.',
    category: 'Mobile App',
    technologies: ['React Native', 'Firebase', 'Redux', 'Expo'],
    year: '2023',
    views: '934',
    stars: '41',
    icon: '💪',
    github: 'https://github.com/huuptag/fitness-tracker',
    live: '#'
  },
  {
    id: 7,
    title: 'Weather Visualization Tool',
    description: 'Interactive weather application with 3D globe visualization, real-time data updates, and detailed climate analytics.',
    category: 'Web Development',
    technologies: ['Vue.js', 'Three.js', 'OpenWeather API', 'D3.js'],
    year: '2024',
    views: '1.1k',
    stars: '73',
    icon: '🌍',
    github: 'https://github.com/huuptag/weather-3d',
    live: '#'
  },
  {
    id: 8,
    title: 'AI Chat Interface',
    description: 'Modern chat interface with AI integration, real-time messaging, and advanced natural language processing capabilities.',
    category: 'Web Development',
    technologies: ['Next.js', 'TypeScript', 'OpenAI API', 'Socket.io'],
    year: '2024',
    views: '2.3k',
    stars: '102',
    icon: '🤖',
    github: 'https://github.com/huuptag/ai-chat-app',
    live: '#'
  },
  {
    id: 9,
    title: 'Portfolio Template Engine',
    description: 'Customizable portfolio template generator with drag-and-drop functionality, multiple themes, and responsive design.',
    category: 'Web Development',
    technologies: ['Vue.js', 'Nuxt.js', 'Tailwind CSS', 'Firebase'],
    year: '2024',
    views: '987',
    stars: '64',
    icon: '🎯',
    github: 'https://github.com/huuptag/portfolio-generator',
    live: '#'
  },
  {
    id: 10,
    title: 'VR Experience Gallery',
    description: 'Virtual reality gallery showcasing 3D artworks with immersive navigation and cross-platform VR headset support.',
    category: '3D Animation',
    technologies: ['A-Frame', 'Three.js', 'WebXR', 'Blender'],
    year: '2023',
    views: '1.5k',
    stars: '78',
    icon: '🥽',
    github: 'https://github.com/huuptag/vr-gallery',
    live: '#'
  },
  {
    id: 11,
    title: 'Code Snippet Manager',
    description: 'Developer tool for organizing and sharing code snippets with syntax highlighting, tagging system, and team collaboration.',
    category: 'Web Development',
    technologies: ['React', 'TypeScript', 'Monaco Editor', 'PostgreSQL'],
    year: '2023',
    views: '756',
    stars: '29',
    icon: '💻',
    github: 'https://github.com/huuptag/snippet-manager',
    live: '#'
  },
  {
    id: 12,
    title: 'Music Player Interface',
    description: 'Elegant music streaming interface with playlist management, audio visualization, and social listening features.',
    category: 'UI/UX Design',
    technologies: ['React', 'Web Audio API', 'GSAP', 'Styled Components'],
    year: '2024',
    views: '1.3k',
    stars: '95',
    icon: '🎵',
    github: 'https://github.com/huuptag/music-player-ui',
    live: '#'
  }
])

const filteredProjects = computed(() => {
  if (activeFilter.value === 'All') {
    return projects.value
  }
  return projects.value.filter(project => project.category === activeFilter.value)
})

const viewProject = (project) => {
  console.log('Viewing project:', project.title)
  // TODO: Implement project modal or navigation
}

const loadMoreProjects = () => {
  console.log('Loading more projects...')
  // TODO: Implement pagination or load more functionality
}
</script>

<style scoped>
.btn-3d:hover {
  transform: translateY(-2px);
  box-shadow: 0 20px 40px rgba(59, 130, 246, 0.3);
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Smooth hover transitions */
.group:hover {
  transform: translateY(-8px);
}
</style>