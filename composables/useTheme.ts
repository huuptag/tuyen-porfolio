import { ref, readonly, onMounted } from 'vue'

export type ThemeMode = 'light' | 'dark' | 'auto'

// Create a singleton theme state
let themeState: {
  theme: any,
  isDark: any,
  setTheme: (newTheme: ThemeMode) => void,
  toggleTheme: () => void
} | null = null

export const useTheme = () => {
  // Return existing state if already created
  if (themeState) {
    return themeState
  }

  const theme = ref<ThemeMode>('auto')
  const isDark = ref(false)

  // Check if we're in a client-side environment
  const isClient = process.client

  // Apply theme based on current mode
  const applyTheme = () => {
    if (!isClient) return

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

  // Initialize theme from localStorage or default to 'auto'
  const initializeTheme = () => {
    if (!isClient) return

    const savedTheme = (localStorage.getItem('theme') as ThemeMode) || 'auto'
    theme.value = savedTheme
    applyTheme()
  }

  // Set theme and persist to localStorage
  const setTheme = (newTheme: ThemeMode) => {
    theme.value = newTheme
    
    if (isClient) {
      localStorage.setItem('theme', newTheme)
      applyTheme()
    }
  }

  // Toggle between light and dark (skips auto)
  const toggleTheme = () => {
    const newTheme = isDark.value ? 'light' : 'dark'
    setTheme(newTheme)
  }

  // Listen for system theme changes when in auto mode
  const setupSystemThemeListener = () => {
    if (!isClient) return

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    
    const handleChange = () => {
      if (theme.value === 'auto') {
        applyTheme()
      }
    }

    mediaQuery.addEventListener('change', handleChange)
    
    // Cleanup function
    return () => mediaQuery.removeEventListener('change', handleChange)
  }

  // Initialize on mount
  onMounted(() => {
    initializeTheme()
    setupSystemThemeListener()
  })

  // Create the state object
  themeState = {
    theme: readonly(theme),
    isDark: readonly(isDark),
    setTheme,
    toggleTheme
  }

  return themeState
}