import { createApp, defineComponent } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from 'axios'
import './assets/css/main.css'

import Navbar from './components/Navbar.vue'
import ProductsCard from './components/ProductsCard.vue'

axios.defaults.baseURL = 'http://ec2-3-125-37-33.eu-central-1.compute.amazonaws.com';

const app = createApp(App)

app.component('navbar', Navbar)
app.component('ProductsCard', ProductsCard)


app.use(store).use(router).mount('#app')
