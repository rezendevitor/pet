<template>
    <div class="pet-list">
      <h2>Perfis de Pets</h2>
      <div class="cards-container">
        <div v-for="pet in pets" :key="pet._id" class="pet-card">
          <router-link :to="{ name: 'PetProfile', params: { id: pet._id }}">
            <img :src="pet.photoUrl" alt="Foto do Pet" class="thumbnail">
            <p>{{ pet.name }}</p>
          </router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        pets: []
      };
    },
    mounted() {
      axios.get('http://localhost:3000/petform')
        .then(response => {
          this.pets = response.data;
        })
        .catch(error => {
          console.error('Erro ao buscar perfis de pets:', error);
        });
    }
  };
  </script>
  
  <style scoped>
  .pet-list {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .pet-list h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .cards-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }
  
  .pet-card {
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    text-align: center;
    width: 150px;
    cursor: pointer;
  }
  
  .pet-card img {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }
  
  .pet-card p {
    margin: 10px 0;
  }
  </style>
  