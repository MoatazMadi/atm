import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { createI18n } from 'vue-i18n'
import AR from './locales/ar.json'
import EN from './locales/en.json'

// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)

const i18n = createI18n({
    // something vue-i18n options here ...
    locale : 'ar' ,
    legacy: false,
    messages : {
        ar : AR ,
        en : EN
    }
  })

// app.use(setupI18n)
app.use(i18n)

app.use(createPinia())
app.use(router)

// app.use(ElementPlus)

app.mount('#app')
