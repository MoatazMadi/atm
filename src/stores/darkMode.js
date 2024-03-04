// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { ref ,computed} from 'vue'

export const useDarkModeStore = defineStore('DarkMode', () => {

  const theme = ref(localStorage.getItem("theme") ?? 'light')

  
    // console.log(window.matchMedia('(prefers-color-scheme: dark)').matches)
    // console.log("theme exist : "+('theme' in localStorage))

    let themeToggle = computed(()=>{
        return theme.value === 'dark' ? true : false ;
      })

      if(window.matchMedia('(prefers-color-scheme: dark)').matches){
        theme.value == 'dark'
        themeToggle = true
      }

    if (localStorage.getItem('theme') === 'dark' ||
    (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
        theme.value = 'dark'
        themeToggle = true
    } else {
        document.documentElement.classList.remove('dark')
        themeToggle = false
    }


    // console.log('local-storage'+localStorage.getItem("theme"))
  function toggleDarkMode() {
    // console.log('inside the function')
    // console.log(theme.value)
        if(theme.value === 'dark') {
            localStorage.theme = 'light'
            theme.value = 'light'
        }
        else {
            localStorage.theme = 'dark'
            theme.value = 'dark'
        }
        themeToggle = !themeToggle


        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
  }

  return { theme,  toggleDarkMode ,themeToggle }
})
