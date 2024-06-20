<template>
    <div class="pet-card">
      <router-link :to="{ name: 'PetProfile', params: { id: pet._id } }" class="card-link">
        <div class="card-content">
          <img :src="pet.photoUrl" :alt="pet.name" class="pet-photo" />
          <h2>{{ pet.name }}</h2>
        </div>
      </router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PetCard',
    props: {
      pet: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .pet-card {
    width: 200px; /* Ajuste o tamanho conforme necessário */
    margin: 10px;
    border-radius: 8px; /* Cantos arredondados */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra suave */
  }
  
  .card-link {
    text-decoration: none; /* Remove o sublinhado padrão */
    color: inherit; /* Mantém a cor do texto padrão (normalmente preto) */
    cursor: pointer; /* Altera o cursor para indicar que é clicável */
  }
  
  .card-content {
    padding: 10px;
    text-align: center;
  }
  
  .pet-photo {
    width: 100%; /* A foto ocupará todo o espaço disponível */
    height: 200px; /* Altura fixa da foto */
    object-fit: cover; /* Ajusta a foto para cobrir todo o espaço */
    border-top-left-radius: 8px; /* Ajuste os cantos arredondados apenas no topo */
    border-top-right-radius: 8px;
  }
  
  h2 {
    font-size: 16px;
    margin-top: 10px;
  }
  </style>
  