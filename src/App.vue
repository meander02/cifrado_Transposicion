<template>
  <div id="app">
    <div class="menu">
      <router-link to="/" class="menu-link">Encriptar</router-link>
      <router-link to="/decrypt" class="menu-link">Desencriptar</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.menu {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.menu-link {
  margin: 0 10px;
  text-decoration: none;
  font-size: 1.2em;
  color: #3490dc;
  border-bottom: 2px solid transparent;
  transition: border-color 0.3s;
}

.menu-link:hover {
  border-color: #3490dc;
}
</style>
