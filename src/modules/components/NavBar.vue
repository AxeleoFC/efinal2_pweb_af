<template>
  <div class="navbar">
    <router-link to="/generarToken" class="nav-link">Token</router-link>
    <router-link to="/ingresarEstudiantes" class="nav-link">Estudiantes</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.navbar {
  background-color: #27dbd5;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px 0;
  border-bottom: 2px solid #00afa9;
  display: flex;
  justify-content: space-evenly;
}

.nav-link {
  text-decoration: none;
  color: #000;
  font-size: 18px;
  font-weight: bold;
  padding: 10px 20px;
  transition: background-color 0.3s, color 0.3s;
}

.nav-link:hover {
  background-color: #00afa9;
  color: #fff;
}
</style>