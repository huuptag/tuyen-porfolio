<template>
  <div class="fixed inset-0 z-0 overflow-hidden pointer-events-none">
    <!-- CSS-only 3D animated background -->
    <div class="relative w-full h-full">
      
      <!-- Animated Grid -->
      <div class="absolute inset-0 opacity-5 dark:opacity-10">
        <div 
          class="absolute inset-0 bg-grid-pattern animate-slide-up"
          style="background-image: linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px); background-size: 50px 50px;"
        ></div>
      </div>
      
      <!-- 3D Geometric Shapes -->
      <div class="absolute top-20 left-20 animate-rotate-3d">
        <div class="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-600 opacity-20 transform rotate-45" style="clip-path: polygon(50% 0%, 0% 100%, 100% 100%);"></div>
      </div>
      
      <div class="absolute top-1/3 right-20 animate-float-3d">
        <div class="w-24 h-24 bg-gradient-to-br from-pink-400 to-red-500 opacity-25 rounded-full transform perspective-1000 rotateX-45"></div>
      </div>
      
      <div class="absolute bottom-1/4 left-1/4 animate-spin-slow">
        <div class="w-28 h-28 border-4 border-purple-400 opacity-20 transform rotate-45" style="border-style: dashed;"></div>
      </div>
      
      <!-- Floating Particles -->
      <div 
        v-for="particle in particles" 
        :key="particle.id"
        class="absolute w-2 h-2 bg-blue-400 rounded-full opacity-40 animate-float"
        :style="{
          left: particle.x + '%',
          top: particle.y + '%',
          animationDelay: particle.delay + 's',
          animationDuration: particle.duration + 's'
        }"
      ></div>
      
      <!-- Wave Animation -->
      <div class="absolute bottom-0 left-0 w-full h-1/3 overflow-hidden">
        <svg 
          class="absolute bottom-0 w-full h-full opacity-10" 
          viewBox="0 0 1200 300" 
          preserveAspectRatio="none"
        >
          <path
            d="M0,100 C150,200 350,0 600,100 C850,200 1050,0 1200,100 L1200,300 L0,300 Z"
            fill="url(#waveGradient)"
            class="animate-wave"
          />
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:0.3" />
              <stop offset="50%" style="stop-color:#8b5cf6;stop-opacity:0.5" />
              <stop offset="100%" style="stop-color:#ec4899;stop-opacity:0.3" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Generate random particles
const particles = ref([])

onMounted(() => {
  // Generate particles
  for (let i = 0; i < 20; i++) {
    particles.value.push({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4
    })
  }
})
</script>

<style scoped>
/* Custom 3D animations */
@keyframes rotate-3d {
  0% {
    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
  }
}

@keyframes float-3d {
  0%, 100% {
    transform: translateY(0px) rotateX(0deg);
  }
  50% {
    transform: translateY(-20px) rotateX(180deg);
  }
}

@keyframes slide-up {
  0% {
    transform: translateY(50px);
  }
  100% {
    transform: translateY(0px);
  }
}

@keyframes spin-slow {
  0% {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(180deg) scale(1.1);
  }
  100% {
    transform: rotate(360deg) scale(1);
  }
}

@keyframes wave {
  0% {
    d: path("M0,100 C150,200 350,0 600,100 C850,200 1050,0 1200,100 L1200,300 L0,300 Z");
  }
  50% {
    d: path("M0,50 C150,150 350,50 600,150 C850,50 1050,150 1200,50 L1200,300 L0,300 Z");
  }
  100% {
    d: path("M0,100 C150,200 350,0 600,100 C850,200 1050,0 1200,100 L1200,300 L0,300 Z");
  }
}

.animate-rotate-3d {
  animation: rotate-3d 20s linear infinite;
}

.animate-float-3d {
  animation: float-3d 6s ease-in-out infinite;
}

.animate-slide-up {
  animation: slide-up 1s ease-out;
}

.animate-spin-slow {
  animation: spin-slow 15s ease-in-out infinite;
}

.animate-wave path {
  animation: wave 8s ease-in-out infinite;
}

/* 3D perspective utilities */
.perspective-1000 {
  perspective: 1000px;
}

.rotateX-45 {
  transform: rotateX(45deg);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  /* Reduce animations on mobile */
  .animate-rotate-3d {
    animation-duration: 30s;
  }
  
  .animate-float-3d {
    animation-duration: 8s;
  }
}
</style>