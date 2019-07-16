<template>
<v-flex class="hidden-sm-and-down">
  <v-toolbar flat app  :class="{transparent: !scrolled_down, black: scrolled_down}" >
    
      <img @click.prevent="scrollTo('header')" :src="require('../assets/LOGO2.png')" width="200">
    
    <v-spacer></v-spacer>
    <v-btn flat class="white--text" @click.prevent="scrollTo('sobre')" href="#sobre">
      <span class="mr-2">Sobre</span>
    </v-btn>
    <v-btn flat class="white--text">
      <span class="mr-2">Inscrição</span>
    </v-btn>

    <v-btn flat class="white--text" @click.prevent="scrollTo('programacao')" href="#programacao">
      <span class="mr-2">Programação</span>
    </v-btn>
    <v-btn flat class="white--text" href="">
      <span class="mr-2">Local</span>
    </v-btn>
    <v-btn flat class="white--text" @click="scrollTo('contato')">
      <span class="mr-2">Contato</span>
    </v-btn>

  </v-toolbar>
</v-flex>
</template>

<script>
export default {
  data: function() {
    return {
      scrolled_down: false
    }
  },
  
  methods: {
    scrollTo: function(id){     
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' })},
    update_scrolled_down() {
      this.scrolled_down = (window.scrollY > 660)
    },
    
  },
  mounted () {
    window.addEventListener('scroll', this.update_scrolled_down);
  }
}
</script>


<style>



</style>

