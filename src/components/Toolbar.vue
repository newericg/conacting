<template>

  <v-toolbar app dark class="hidden-sm-and-down">
        <router-link to="/">
          <img :src="require('../assets/LOGO2.png')" height="200">
        </router-link>
    <v-spacer></v-spacer>
    <v-btn flat href="#sobre" v-smooth-scroll="{ duration: 1200, offset: -50 }">
      <span class="mr-2">Sobre</span>
    </v-btn>
    <v-btn flat href="" >
      <span class="mr-2">Inscrição</span>
    </v-btn>
    
    <v-btn flat href="#programacao" v-smooth-scroll="{ duration: 1200, offset: -50 }" >
      <span class="mr-2">Programação</span>
    </v-btn>
    <v-btn flat href="" >
      <span class="mr-2">Local</span>
    </v-btn>
    <v-btn flat href="#contato">
      <span class="mr-2">Contato</span>
    </v-btn>
    
  </v-toolbar>
  
</template>

