<template>
  <div>   
  <form @submit.prevent="entrar">     
    <h2>Entrar</h2>     
    <input       
      type="email"       
      placeholder="Endereço de Email..."       
      v-model="email"     
    />     
    <input       
      type="password"       
      placeholder="senha..."       
      v-model="password"     
    />     
    <button type="submit">
       Entrar
    </button>   
  </form> 
</div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: "Home",
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    entrar() {
      firebase
      .auth().signInWithEmailAndPassword(this.email, this.password)
      .then(() => {
        alert('Logado com sucesso');
        this.$router.push('/painel')
      })
      .catch(error => {
        alert(error.message);
      });
    }
  }
};
</script>
