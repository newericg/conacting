<template>
  <v-app fluid>
    <v-content>
      <Toolbar/>
      <Toolbar2/>
      <Header/>
      <Sobre id="sobre" class="corfundo"/>
      <Programacao id="programacao" class="corfundo1"/>
      <Parallax/>
      <Footer id="contato"/>
    </v-content>
  </v-app>
</template>

<script>


import Toolbar from './components/Toolbar'
import Header from './components/Header'
import Footer from './components/Footer'
import Parallax from './components/Parallax'
import Sobre from './components/Sobre'
import Programacao from './components/Programacao'
import Toolbar2 from './components/Toolbar2'

export default {
  name: 'App',
  components: {
    
    
    Toolbar,
    Footer,
    Parallax,
    Header,
    Sobre,
    Programacao,
    Toolbar2,
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

.corfundo1{
  background-color: rgb(43, 43, 43)
}

.texto{
  text-align: center;
}



</style>
