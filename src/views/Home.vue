<template>
  <div>   
  <form @submit.prevent="login">     
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
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld,
  },
};
</script>
