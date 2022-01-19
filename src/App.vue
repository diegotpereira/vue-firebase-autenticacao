<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/registrar">Cadastrar</router-link> |
      <router-link to="/painel">Painel</router-link> |
      <router-link to="/sobre">Sobre</router-link> |
      <button @click="sair">Sair</button>
    </div>
    <router-view />
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  methods: {
    sair() {
      firebase
      .auth()
      .signOut()
      .then(() => {
        alert('Desconectado com sucesso.')
        this.$router.push('/')
      })
      .catch(error => {
        alert(error.messsage)
        this.$router.push('/')
      })
    }
  }
}
</script>

<style>

input {   
  margin-right: 20px; 
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
