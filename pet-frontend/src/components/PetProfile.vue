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
      <button class="edit-btn" @click="openEditModal">Editar</button>

    <div v-if="showModal" class="modal">
      <div class="modal-content">
        <span class="close" @click="closeEditModal">&times;</span>
        <PetForm :pet="pet" @update-pet="updatePet" />
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import PetForm from '../components/PetForm.vue';

export default {
  name: 'PetProfile',
  components: { PetForm },
  data() {
    return {
      pet: {},
      showModal: false,
    };
  },
  created() {
    const petId = this.$route.params.id;
    this.fetchPet(petId);
  },
  methods: {
    fetchPet(petId) {
      axios.get(`http://localhost:3000/petprofile/${petId}`)
        .then(response => {
          this.pet = response.data.pet;
        })
        .catch(error => {
          console.error('Erro ao buscar perfil do pet:', error);
        });
    },
    openEditModal() {
      this.showModal = true;
    },
    closeEditModal() {
      this.showModal = false;
    },
    updatePet(updatedPet) {
      const petId = this.pet._id;
      axios.put(`http://localhost:3000/petprofile/${petId}`, updatedPet)
        .then(response => {
          this.pet = response.data.pet;
          this.closeEditModal();
        })
        .catch(error => {
          console.error('Erro ao atualizar pet:', error);
        });
    }
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

.modal {
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 40%;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.edit-btn {
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #007BFF;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 20px;
}

.edit-btn:hover {
  background-color: #0056b3;
}

</style>
