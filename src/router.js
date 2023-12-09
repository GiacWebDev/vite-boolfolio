import {createRouter, createWebHistory} from 'vue-router';
// importo i componenti delle pagine
import Home from './pages/Home.vue'
import About from './pages/About.vue'

const router = createRouter({
  history: createWebHistory(),

  // le rotte sono un array di oggetti
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/chi-siamo',
      name: 'about',
      component: About
    }
  ]
});

// esporto il router per utilizzarlo nel main.js
export { router }