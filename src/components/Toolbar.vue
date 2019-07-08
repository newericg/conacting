<template>

  <v-toolbar app dark class="hidden-sm-and-down">
        <router-link to="/">
          <img :src="require('../assets/LOGO2.png')" height="200">
        </router-link>
    <v-spacer></v-spacer>
    <v-btn flat href="#sobre">
      <span class="mr-2">Sobre</span>
    </v-btn>
    <v-btn flat href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank">
      <span class="mr-2">Inscrição</span>
    </v-btn>
    
    <v-btn flat href="#programacao">
      <span class="mr-2">Programação</span>
    </v-btn>
    <v-btn flat href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank">
      <span class="mr-2">Local</span>
    </v-btn>
    <v-btn flat href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank">
      <span class="mr-2">Contato</span>
    </v-btn>
    
  </v-toolbar>
  
</template>