<template>

  <v-toolbar app dark class="hidden-sm-and-down">
    
      <img @click.prevent="scrollTo('header')" :src="require('../assets/LOGO2.png')" width="200">
    
    <v-spacer></v-spacer>
    <v-btn @click.prevent="scrollTo('sobre')" href="#sobre" flat>
      <span class="mr-2">Sobre</span>
    </v-btn>
    <v-btn flat>
      <span class="mr-2">Inscrição</span>
    </v-btn>

    <v-btn flat @click.prevent="scrollTo('programacao')" href="#programacao">
      <span class="mr-2">Programação</span>
    </v-btn>
    <v-btn flat href="">
      <span class="mr-2">Local</span>
    </v-btn>
    <v-btn @click="scrollTo('contato')" flat>
      <span class="mr-2">Contato</span>
    </v-btn>

  </v-toolbar>

</template>

<script>
  export default {
    methods: {
      scrollTo: function(id){     
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
</script>

