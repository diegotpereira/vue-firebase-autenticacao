<template>
    <div>
        <form @submit.prevent="registrar">
            <h2>Registrar</h2>
            <input
                type="email"
                placeholder="Endereço de email..."
                v-model="email"
            />
            <input
                type="password"
                placeholder="senha..."
                v-model="password"
            />
            <button type="submit">Registrar</button>
        </form>
    </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'Registro',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    registrar() {
      firebase
      .auth().createUserWithEmailAndPassword(this.email, this.password)
      .then(() => {
        alert('Successfully registered! Please login.')
        this.$router.push('/')
      })
      .catch(error => {
        alert(error.message);
      });
    }
  }
}
</script>
