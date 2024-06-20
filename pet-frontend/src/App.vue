<template>
  <div id="app">
    <PetNavbar />
    <router-view/>
  </div>
</template>

<script>
import PetNavbar from './components/PetNavbar.vue';

export default {
  name: 'App',
  components: {
    PetNavbar,
  },
};
</script>

<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Arial', sans-serif;
}
</style>
