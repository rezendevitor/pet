 <!-- Essa página será o feed -->

<template>
  <div class="home">
    <h1 class="title">Bem-vindo à Página Inicial</h1>
    <p class="subtitle">Escolha uma opção:</p>
    <div class="options">
      <router-link to="/petform" class="option-link">
        <button class="option-button">
          <i class="fas fa-paw"></i> Cadastre seu Pet
        </button>
      </router-link>
      <router-link to="/pets" class="option-link">
        <button class="option-button">
          <i class="fas fa-list"></i> Ver Perfis de Pet
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');

.home {
  max-width: 600px;
  margin: 40px auto;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.title {
  font-size: 32px;
  margin-bottom: 20px;
  color: #333;
}

.subtitle {
  font-size: 20px;
  margin-bottom: 30px;
  color: #666;
}

.options {
  display: flex;
  justify-content: space-around;
}

.option-link {
  text-decoration: none;
}

.option-button {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.option-button i {
  margin-right: 10px;
}

.option-button:hover {
  background-color: #0056b3;
}
</style>
