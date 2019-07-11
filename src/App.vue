<template>
  <v-app fluid>
      <Toolbar/>
      <Toolbar2/>
    <v-content class="corfundo">
      <Header id="header"/>
      <Sobre id="sobre" class="corfundo"/>
      <Programacao id="programacao" class="corfundo"/>
      <Parallax/>
    </v-content>
    <Footer id="contato"/>
  </v-app>
</template>

<script>

import smoothscroll from 'smoothscroll-polyfill'
import Toolbar from './components/Toolbar'
import Header from './components/Header'
import Footer from './components/Footer'
import Parallax from './components/Parallax'
import Sobre from './components/Sobre'
import Programacao from './components/Programacao'
import Toolbar2 from './components/Toolbar2'
import Home from './components/Home'




export default {
  scrollTo: function(id){     
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' })},
  name: 'App',
  components: {
    
    Home,
    Toolbar,
    Footer,
    Parallax,
    Header,
    Sobre,
    Programacao,
    Toolbar2,
  },
  mounted(){
    smoothscroll.polyfill();
  },
  data () {
    return {
      //
    }
  }
};


  

</script>
<style>

.corfundo{
  background-color: black
}

.texto{
  text-align: center;
  font-family: 'Inconsolata', monospace;
}



</style>
