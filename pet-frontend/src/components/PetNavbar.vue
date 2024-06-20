<template>
  <header class="app-header">
    <div class="container">
      <h1 class="app-title">Pet Profiles</h1>
      <nav class="app-nav">
        <router-link to="/" class="nav-link">
          <button class="nav-button"><i class="fas fa-home"></i> Home</button>
        </router-link>
        <router-link to="/petform" class="nav-link">
          <button class="nav-button"><i class="fas fa-paw"></i> Cadastre seu Pet</button>
        </router-link>
        <router-link to="/pets" class="nav-link">
        <button class="nav-button"><i class="fas fa-list"></i> Ver Perfis de Pet
        </button>
      </router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'PetNavbar',
};
</script>

<style scoped>
.app-header {
  background-color: #007bff;
  color: white;
  padding: 20px 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.app-title {
  font-size: 28px;
  font-weight: bold;
}

.app-nav {
  display: flex;
  gap: 10px;
}

.nav-link {
  text-decoration: none;
}

.nav-button {
  display: flex;
  align-items: center;
  font-size: 16px;
  padding: 10px 15px;
  background-color: #0056b3;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.nav-button i {
  margin-right: 8px;
}

.nav-button:hover {
  background-color: #004085;
}

.router-link-active .nav-button {
  background-color: #004085;
}
</style>
