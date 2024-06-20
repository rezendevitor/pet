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
        <label>Gênero:</label>
        <div class="gender-options">
          <label>
            <input type="radio" v-model="formPet.gender" value="Macho" required />
            <i class="fas fa-mars"></i> Macho
          </label>
          <label>
            <input type="radio" v-model="formPet.gender" value="Fêmea" required />
            <i class="fas fa-venus"></i> Fêmea
          </label>
        </div>
      </div>
      <div class="form-group">
        <label for="type">Tipo de Animal:</label>
        <select id="type" v-model="formPet.type" required>
          <option value="">Selecione o tipo de animal</option>
          <option value="Cachorro">Cachorro</option>
          <option value="Gato">Gato</option>
        </select>
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
        gender: '',
        type: '',
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
            this.$toast.success('Pet cadastrado com sucesso:', response.data);
            this.$router.push({ name: 'PetProfile', params: { id: response.data.pet._id } });
          })
          .catch(error => {
            console.error('Erro ao cadastrar pet:', error);
            this.$toast.error('Erro ao realizar operação.');
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
textarea,
select {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
}

input:focus,
textarea:focus,
select:focus {
  border-color: #007BFF;
  outline: none;
  box-shadow: 0 0 8px rgba(0, 123, 255, 0.2);
}

textarea {
  resize: vertical;
  min-height: 100px;
}

.gender-options {
  display: flex;
  gap: 40px;
  margin-top: 5px;
}

.gender-options label {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.gender-options label i {
  margin-right: 5px;
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

/* Estilos para os radio buttons */
input[type="radio"] {
  appearance: none; /* Remove os estilos padrão do navegador */
  -webkit-appearance: none; /* Para navegadores baseados em WebKit */
  -moz-appearance: none; /* Para navegadores baseados em Mozilla */

  width: 20px; /* Tamanho do círculo do radio button */
  height: 20px;
  border: 2px solid #007BFF; /* Cor da borda quando não selecionado */
  border-radius: 50%; /* Torna o círculo do radio button */

  outline: none; /* Remove o outline padrão */
  cursor: pointer; /* Muda o cursor para indicar que é clicável */

  transition: border-color 0.3s ease; /* Transição suave da cor da borda */
  margin-right: 0.5em;
}

/* Estilos para o radio button selecionado */
input[type="radio"]:checked {
  border-color: #007BFF; /* Cor da borda quando selecionado */
}

/* Estilos para o indicador do radio button */
input[type="radio"]::before {
  content: ""; /* Adiciona um elemento antes do radio button */
  display: block;
  width: 10px; /* Tamanho do indicador */
  height: 10px;
  background-color: #007BFF; /* Cor do indicador */
  border-radius: 50%; /* Torna o indicador redondo */
  position: relative;
  top: -5px; /* Posicionamento do indicador dentro do círculo */
  left: -5px;
  opacity: 0; /* Inicialmente invisível */
  transition: opacity 0.3s ease; /* Transição suave da opacidade */
}

/* Mostra o indicador quando o radio button está selecionado */
input[type="radio"]:checked::before {
  opacity: 1; /* Torna o indicador visível */
}
</style>
