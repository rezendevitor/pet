<template>
  <div class="pet-form">
    <h2>Cadastro de Pet</h2>
    <form @submit.prevent="submitForm">
      <label for="name">Nome:</label>
      <input type="text" id="name" v-model="pet.name" required>

      <label for="age">Idade:</label>
      <input type="number" id="age" v-model.number="pet.age" required>

      <label for="description">Descrição:</label>
      <textarea id="description" v-model="pet.description" required></textarea>

      <label for="breed">Raça:</label>
      <input type="text" id="breed" v-model="pet.breed" required>

      <label for="photoUrl">URL da Foto:</label>
      <input type="url" id="photoUrl" v-model="pet.photoUrl" required>

      <button type="submit">Enviar</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      pet: {
        name: '',
        age: 0,
        description: '',
        breed: '',
        photoUrl: ''
      }
    };
  },
  methods: {
    submitForm() {
      axios.post('http://localhost:3000/petform', this.pet)
  .then(response => {
    console.log('Pet cadastrado com sucesso:', response.data);
    const petId = response.data.pet._id; // Assumindo que o id do pet está em _id
    this.$router.push({ name: 'PetProfile', params: { id: petId } });
  })
  .catch(error => {
    console.error('Erro ao cadastrar pet:', error);
  });
    }
  }
};
</script>


<style scoped>
.pet-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.pet-form h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.pet-form form {
  display: flex;
  flex-direction: column;
}

.pet-form label {
  margin-bottom: 8px;
}

.pet-form input,
.pet-form textarea {
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.pet-form button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.pet-form button:hover {
  background-color: #0056b3;
}
</style>
