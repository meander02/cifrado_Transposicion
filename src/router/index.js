// import Vue from 'vue';
// import { createRouter, createWebHistory } from 'vue-router'; // Importa las funciones necesarias
// // import VueRouter from 'vue-router';
import EncryptMessage from '../components/EncryptMessage.vue';
import DecryptMessage from '../components/DecryptMessage.vue';
// 
// Vue.use(VueRouter);

// const routes = [
//   { path: '/', component: EncryptMessage },
//   { path: '/decrypt', component: DecryptMessage },
// ];

// const router = new VueRouter({
//   routes,
// });

// export default router;
import { createRouter, createWebHistory } from 'vue-router'; // Importa las funciones necesarias

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: EncryptMessage },
    { path: '/decrypt', component: DecryptMessage },
  ],
});

export default router; // Exporta la instancia del router
