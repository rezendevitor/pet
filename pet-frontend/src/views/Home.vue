<template>
    <div class="home">
      <h2>Homepage</h2>
      <p>Escolha uma opção:</p>
      <router-link to="/petform">Cadastre seu Pet</router-link>
      <router-link to="/petlist">Ver Perfis de Pet</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage',
  };
  </script>
  
  <style scoped>
  .home {
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
    background-color: #f0f0f0;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  p {
    font-size: 18px;
    margin-bottom: 10px;
  }
  
  router-link {
    display: block;
    font-size: 16px;
    margin-bottom: 8px;
    color: #007bff;
    text-decoration: none;
  }
  
  router-link:hover {
    text-decoration: underline;
  }
  </style>
  