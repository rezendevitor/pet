<template>
  <div id="app">
    <header>
      <h1>Pet Profiles</h1>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/petform">Cadastre seu Pet</router-link>
      </nav>
    </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
header {
  background-color: #007bff;
  color: white;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav a {
  color: white;
  text-decoration: none;
  margin-left: 10px;
}

nav a:hover {
  text-decoration: underline;
}
</style>
