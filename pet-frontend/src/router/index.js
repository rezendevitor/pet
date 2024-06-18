import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import PetForm from '../views/PetForm.vue';
import PetProfile from '../views/PetProfile.vue';
import PetList from '../views/PetList.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/petform',
    name: 'PetForm',
    component: PetForm
  },
  {
    path: '/petprofile/:id',
    name: 'PetProfile',
    component: PetProfile,
    props: true // Permitir que o parâmetro id seja passado como prop
  },
  {
    path: '/petlist',
    name: 'PetList',
    component: PetList
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
