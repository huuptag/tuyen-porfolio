<template>
  <div class="theme-toggle">
    <div class="relative inline-flex items-center">
      <!-- Theme Toggle Button -->
      <button
        @click="toggleMenu"
        class="p-2 rounded-lg transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
        :class="{ 'ring-2 ring-blue-500': isMenuOpen }"
        :title="getButtonTitle()"
      >
        <!-- Sun Icon (Light Mode) -->
        <svg 
          v-if="!isDark && theme !== 'auto'"
          class="w-5 h-5 text-yellow-500 transition-transform duration-300 hover:rotate-12"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"/>
        </svg>
        
        <!-- Moon Icon (Dark Mode) -->
        <svg 
          v-else-if="isDark && theme !== 'auto'"
          class="w-5 h-5 text-blue-400 transition-transform duration-300 hover:-rotate-12"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clip-rule="evenodd"/>
        </svg>
        
        <!-- Auto Icon (System Mode) -->
        <svg 
          v-else
          class="w-5 h-5 text-purple-500 transition-transform duration-300 hover:scale-110"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      </button>

      <!-- Dropdown Menu -->
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="scale-95 opacity-0"
        enter-to-class="scale-100 opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="scale-100 opacity-100"
        leave-to-class="scale-95 opacity-0"
      >
        <div
          v-show="isMenuOpen"
          class="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 py-1 z-50"
          @click.stop
        >
          <!-- Light Mode Option -->
          <button
            @click="selectTheme('light')"
            class="w-full px-4 py-3 text-left flex items-center space-x-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
            :class="{ 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400': theme === 'light' }"
          >
            <svg class="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"/>
            </svg>
            <div class="flex-1">
              <div class="font-medium text-gray-900 dark:text-gray-100">Light</div>
              <div class="text-xs text-gray-500 dark:text-gray-400">Bright and clean</div>
            </div>
            <div v-if="theme === 'light'" class="w-2 h-2 bg-blue-500 rounded-full"></div>
          </button>

          <!-- Dark Mode Option -->
          <button
            @click="selectTheme('dark')"
            class="w-full px-4 py-3 text-left flex items-center space-x-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
            :class="{ 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400': theme === 'dark' }"
          >
            <svg class="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clip-rule="evenodd"/>
            </svg>
            <div class="flex-1">
              <div class="font-medium text-gray-900 dark:text-gray-100">Dark</div>
              <div class="text-xs text-gray-500 dark:text-gray-400">Easy on the eyes</div>
            </div>
            <div v-if="theme === 'dark'" class="w-2 h-2 bg-blue-500 rounded-full"></div>
          </button>

          <!-- Auto Mode Option -->
          <button
            @click="selectTheme('auto')"
            class="w-full px-4 py-3 text-left flex items-center space-x-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
            :class="{ 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400': theme === 'auto' }"
          >
            <svg class="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            <div class="flex-1">
              <div class="font-medium text-gray-900 dark:text-gray-100">Auto</div>
              <div class="text-xs text-gray-500 dark:text-gray-400">Matches system</div>
            </div>
            <div v-if="theme === 'auto'" class="w-2 h-2 bg-blue-500 rounded-full"></div>
          </button>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import type { ThemeMode } from '~/composables/useTheme'

const { theme, isDark, setTheme } = useTheme()

const isMenuOpen = ref(false)

// Toggle menu visibility
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

// Select a theme and close menu
const selectTheme = (newTheme: ThemeMode) => {
  setTheme(newTheme)
  isMenuOpen.value = false
}

// Get button title for accessibility
const getButtonTitle = () => {
  const modeNames = {
    light: 'Light Mode',
    dark: 'Dark Mode',
    auto: 'Auto Mode (System)'
  }
  return `Current theme: ${modeNames[theme.value]}`
}

// Close menu when clicking outside
const handleClickOutside = (event: Event) => {
  const target = event.target as HTMLElement
  if (!target.closest('.theme-toggle')) {
    isMenuOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.theme-toggle {
  user-select: none;
}
</style>