<template>
  <div class="form-container">
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Nome:</label>
        <input type="text" id="name" v-model="formPet.name" required />
      </div>
      <div class="form-group">
        <label for="breed">Raça:</label>
        <input type="text" id="breed" v-model="formPet.breed" required />
      </div>
      <div class="form-group">
        <label for="age">Idade:</label>
        <input type="number" id="age" v-model="formPet.age" required />
      </div>
      <div class="form-group">
        <label for="description">Descrição:</label>
        <textarea id="description" v-model="formPet.description" required></textarea>
      </div>
      <div class="form-group">
        <label for="photoUrl">URL da Foto:</label>
        <input type="text" id="photoUrl" v-model="formPet.photoUrl" required />
      </div>
      <button type="submit" class="submit-btn">{{ isEdit ? 'Salvar Alterações' : 'Cadastrar Pet' }}</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'PetForm',
  props: {
    pet: {
      type: Object,
      default: () => ({
        name: '',
        breed: '',
        age: '',
        description: '',
        photoUrl: ''
      })
    }
  },
  data() {
    return {
      formPet: { ...this.pet },
      isEdit: !!this.pet._id
    };
  },
  methods: {
    submitForm() {
      if (this.isEdit) {
        this.$emit('update-pet', this.formPet);
      } else {
        axios.post('http://localhost:3000/petform', this.formPet)
          .then(response => {
            console.log('Pet cadastrado com sucesso:', response.data);
            this.$router.push({ name: 'PetProfile', params: { id: response.data.pet._id } });
          })
          .catch(error => {
            console.error('Erro ao cadastrar pet:', error);
          });
      }
    }
  }
};
</script>

<style scoped>
.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: auto;
}

form {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}

label {
  font-weight: bold;
  margin-bottom: 5px;
  color: #333;
}

input,
textarea {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
}

input:focus,
textarea:focus {
  border-color: #007BFF;
  outline: none;
  box-shadow: 0 0 8px rgba(0, 123, 255, 0.2);
}

textarea {
  resize: vertical;
  min-height: 100px;
}

.submit-btn {
  padding: 15px;
  font-size: 18px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-btn:hover {
  background-color: #0056b3;
}
</style>
