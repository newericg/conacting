<template>
  <v-flex class="hidden-md-and-up">
    <v-toolbar app dark class="hidden-md-and-up">
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-spacer></v-spacer>
      <router-link to="home">
        <img :src="require('../assets/LOGO2.png')" height="200">
      </router-link>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-navigation-drawer dark app v-model="drawer" temporary>
      <v-layout row mt-4 column>
        <v-flex d-flex @click="drawer = !drawer">
          <v-btn flat @click.prevent="scrollTo('sobre')" href="#sobre">
            <span class="mr-2">Sobre</span>
          </v-btn>
        </v-flex>
        <v-flex>
          <v-flex d-flex>
          <v-btn flat href="" >
            <span class="mr-2">Inscrição</span>
          </v-btn>
          </v-flex>
          <v-flex d-flex @click="drawer = !drawer">
          <v-btn flat @click.prevent="scrollTo('programacao')" href="#programacao">
            <span class="mr-2">Programação</span>
          </v-btn>
          </v-flex>
          <v-flex d-flex>
          <v-btn flat href="">
            <span class="mr-2">Local</span>
          </v-btn>
          </v-flex>
          <v-flex d-flex>
          <v-btn flat href="#contato">
            <span class="mr-2">Contato</span>
          </v-btn>
          </v-flex>
        </v-flex>
      </v-layout>

    </v-navigation-drawer>
  </v-flex>
</template>

<script>
  export default {
    data() {
      return {
        drawer: null,
        
        mini: false,
        right: null
      }
    },
    methods: {
      scrollTo: function(id){     
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
  
</script>