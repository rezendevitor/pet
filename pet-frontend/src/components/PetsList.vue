<template>
  <div>
    <h1>Pet Profiles</h1>
    <div v-if="pets.length === 0">Nenhum pet encontrado.</div>
    <div class="pets-list">
      <PetCard v-for="pet in pets" :key="pet._id" :pet="pet" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import PetCard from '@/components/PetCard.vue';

export default {
  name: 'PetsList',
  components: {
    PetCard,
  },
  data() {
    return {
      pets: [], // Inicializar como um array vazio
    };
  },
  created() {
    this.fetchPets();
  },
  methods: {
    async fetchPets() {
      try {
        const response = await axios.get('http://localhost:3000/pets');
        this.pets = response.data;
      } catch (error) {
        console.error('Erro ao buscar lista de pets:', error);
        this.pets = []; // Garantir que `pets` seja um array mesmo em caso de erro
      }
    },
  },
};
</script>

<style scoped>
.pets-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
