import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
const app=createApp(App)
//app.component('Music',music)注册全局组件，注册后，可以以标签的形式使用,局部变量在组件内部创建
//局部变量创建使用component，与data平级components:{'Music':music}(也要先导入)
app.use(router)
app.mount('#app')
