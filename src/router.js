import {createRouter, createWebHistory} from 'vue-router';
// importo i componenti delle pagine
import Home from './pages/Home.vue'
import Progetti from './pages/Progetti.vue'
import Error404 from './pages/Error404.vue'

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
      path: '/progetti',
      name: 'progetti',
      component: Progetti
    },

    {
      path: '/:pathMatch(.*)*',
      component: Error404
    }
  ]
});


// esporto il router per utilizzarlo nel main.js
export { router }