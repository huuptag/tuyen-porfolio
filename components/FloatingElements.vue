<template>
  <div class="absolute inset-0 overflow-hidden pointer-events-none">
    <!-- Geometric Shapes -->
    <div 
      v-for="(shape, index) in shapes"
      :key="index"
      :class="[
        'absolute rounded-full opacity-20 blur-sm animate-float',
        shape.color,
        shape.size
      ]"
      :style="{
        left: shape.left + '%',
        top: shape.top + '%',
        animationDelay: shape.delay + 's',
        animationDuration: shape.duration + 's'
      }"
    ></div>
    
    <!-- CSS 3D Transforms -->
    <div class="absolute top-1/4 left-1/4 transform-3d">
      <div 
        class="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-600 transform rotate-45 animate-spin opacity-30"
        style="animation-duration: 10s;"
      ></div>
    </div>
    
    <div class="absolute top-3/4 right-1/4 transform-3d">
      <div 
        class="w-20 h-20 border-4 border-pink-400 rounded-full animate-pulse opacity-25"
        style="animation-duration: 4s;"
      ></div>
    </div>
    
    <!-- Moving Lines -->
    <svg 
      class="absolute inset-0 w-full h-full opacity-10" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#8b5cf6;stop-opacity:0" />
        </linearGradient>
      </defs>
      
      <line
        v-for="(line, index) in lines"
        :key="index"
        :x1="line.x1"
        :y1="line.y1" 
        :x2="line.x2"
        :y2="line.y2"
        stroke="url(#lineGradient)"
        stroke-width="2"
        class="animate-pulse"
        :style="{ animationDelay: line.delay + 's' }"
      >
        <animate
          attributeName="x1"
          :values="line.x1 + ';' + line.x2 + ';' + line.x1"
          :dur="line.duration + 's'"
          repeatCount="indefinite"
        />
      </line>
    </svg>
    
    <!-- Glowing Orbs -->
    <div class="absolute top-1/3 right-1/3">
      <div class="relative">
        <div class="w-12 h-12 bg-blue-500 rounded-full animate-ping opacity-20"></div>
        <div class="w-8 h-8 bg-blue-600 rounded-full absolute top-2 left-2 animate-pulse"></div>
      </div>
    </div>
    
    <div class="absolute bottom-1/3 left-1/5">
      <div class="relative">
        <div class="w-16 h-16 bg-purple-500 rounded-full animate-ping opacity-15" style="animation-delay: -2s;"></div>
        <div class="w-10 h-10 bg-purple-600 rounded-full absolute top-3 left-3 animate-pulse" style="animation-delay: -2s;"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Floating shapes configuration
const shapes = ref([
  {
    color: 'bg-blue-200 dark:bg-blue-800',
    size: 'w-20 h-20',
    left: 10,
    top: 20,
    delay: 0,
    duration: 6
  },
  {
    color: 'bg-purple-200 dark:bg-purple-800',
    size: 'w-16 h-16',
    left: 80,
    top: 15,
    delay: -2,
    duration: 8
  },
  {
    color: 'bg-pink-200 dark:bg-pink-800',
    size: 'w-24 h-24',
    left: 15,
    top: 70,
    delay: -4,
    duration: 7
  },
  {
    color: 'bg-indigo-200 dark:bg-indigo-800',
    size: 'w-12 h-12',
    left: 75,
    top: 75,
    delay: -1,
    duration: 5
  },
  {
    color: 'bg-cyan-200 dark:bg-cyan-800',
    size: 'w-14 h-14',
    left: 40,
    top: 10,
    delay: -3,
    duration: 9
  }
])

// Animated lines
const lines = ref([
  { x1: '10%', y1: '20%', x2: '90%', y2: '80%', delay: 0, duration: 5 },
  { x1: '90%', y1: '20%', x2: '10%', y2: '80%', delay: -2.5, duration: 6 },
  { x1: '50%', y1: '0%', x2: '50%', y2: '100%', delay: -1, duration: 4 }
])

onMounted(() => {
  // Add mouse parallax effect
  if (process.client) {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      
      const xPercent = (clientX / innerWidth) * 100
      const yPercent = (clientY / innerHeight) * 100
      
      // Apply parallax to floating elements
      const floatingElements = document.querySelectorAll('.animate-float')
      floatingElements.forEach((element, index) => {
        const speed = 0.02 + (index * 0.01)
        const xMove = (xPercent - 50) * speed
        const yMove = (yPercent - 50) * speed
        
        element.style.transform = `translate(${xMove}px, ${yMove}px) translateY(var(--float-y, 0px))`
      })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    
    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }
})
</script>

<style scoped>
.transform-3d {
  transform-style: preserve-3d;
}

@keyframes float {
  0%, 100% {
    --float-y: 0px;
  }
  50% {
    --float-y: -20px;
  }
}

.animate-float {
  animation: float var(--duration, 6s) ease-in-out infinite;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  /* Reduce number of elements on mobile */
  .animate-float:nth-child(n+4) {
    display: none;
  }
  
  svg {
    opacity: 0.05;
  }
}
</style>