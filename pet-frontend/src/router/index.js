import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import PetForm from '@/components/PetForm.vue';
import PetsList from '@/components/PetsList.vue';
import PetProfile from '@/components/PetProfile.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/petform', component: PetForm },
  { path: '/pets', component: PetsList },
  { path: '/petprofile/:id', name: 'PetProfile', component: PetProfile, props: true }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;