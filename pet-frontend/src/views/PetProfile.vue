<template>
  <div class="pet-profile">
    <h2>{{ pet.name }}</h2>
    <div class="profile-info">
      <img :src="pet.photoUrl" alt="Foto do Pet" :style="{ maxWidth: '400px', maxHeight: '400px' }">
      <div class="details">
        <p><strong>Raça:</strong> {{ pet.breed }}</p>
        <p><strong>Idade:</strong> {{ pet.age }}</p>
        <p><strong>Descrição:</strong> {{ pet.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      pet: {}
    };
  },
  mounted() {
    const petId = this.$route.params.id;
    axios.get(`http://localhost:3000/petprofile/${petId}`)
      .then(response => {
        this.pet = response.data.pet;
      })
      .catch(error => {
        console.error('Erro ao buscar perfil do pet:', error);
      });
  }
};
</script>

<style scoped>
.pet-profile {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.pet-profile h2 {
  text-align: center;
  margin-bottom: 20px;
}

.profile-info {
  display: flex;
  align-items: flex-start;
}

.profile-info img {
  max-width: 400px;
  max-height: 400px;
  margin-right: 20px;
}

.details {
  flex: 1;
}

.details p {
  margin-bottom: 10px;
}
</style>
