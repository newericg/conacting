<template>
  <v-app fluid>
  <img :src="require('./assets/HEADER4.jpg')" id="bg" alt="">
      <Toolbar/>
      <Toolbar2/>
    <v-content class="corfundo">
      <Header id="header"/>
      <Header2 class="corfundo2"/>
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
import Header2 from './components/Header2'
import Footer from './components/Footer'
import Parallax from './components/Parallax'
import Sobre from './components/Sobre'
import Programacao from './components/Programacao'
import Toolbar2 from './components/Toolbar2'
import Home from './components/Home'




export default {
  
  name: 'App',
  components: {
    
    Home,
    Toolbar,
    Footer,
    Parallax,
    Header,
    Header2,
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
#bg {
  position: fixed; 
  top: 0; 
  left: 0; 
	
  /* Preserve aspet ratio */
  min-width: 165%;
  max-width: 165%;
  overflow: hidden;
  

}
.corfundo{
  background-color: black
}

.corfundo2{
  background-color: transparent;
}

.texto{
  text-align: center;
  font-family: 'Inconsolata', monospace;
}



</style>
