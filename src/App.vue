<template>
  <v-app fluid>
    <v-content>
      
      <Toolbar/>
      <Toolbar2/>
      <Header id="header"/>
      <Sobre id="sobre" class="corfundo"/>
      <Programacao id="programacao" class="corfundo"/>
      <Parallax/>
      <Footer id="contato"/>
    </v-content>
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


    // // add event listener on load
    // window.addEventListener('load', function() {

    //   // scroll to bottom
    //   document.querySelector('.js-scroll-to-bottom').addEventListener('click', function(e) {
    //     e.preventDefault();
    //     window.scrollTo({ top: document.body.clientHeight - window.innerHeight, left: 0, behavior: 'smooth' });
    //   });

    //   // scroll to top
    //   document.querySelector('.js-scroll-to-top').addEventListener('click', function(e) {
    //     e.preventDefault();
    //     document.querySelector('header').scrollIntoView({ behavior: 'smooth' });
    //   });

    //   // scroll by
    //   document.querySelector('.js-scroll-by').addEventListener('click', function(e) {
    //     e.preventDefault();
    //     window.scrollBy({ top: 200, left: 0, behavior: 'smooth' });
    //   });

    //   // scroll back
    //   document.querySelector('.js-scroll-back').addEventListener('click', function(e) {
    //     e.preventDefault();
    //     window.scrollBy({ top: -100, left: 0, behavior: 'smooth' });
    //   });

    //   // scroll into view
    //   document.querySelector('.js-scroll-into-hello').addEventListener('click', function(e) {
    //     // eslint-disable-next-line
    //     console.log('teste');
    //     e.preventDefault();
    //     // document.getElementById('sobre')
    //     document.querySelector('#sobre').scrollIntoView({ behavior: 'smooth' });
    //   });

    //   // element scroll to
    //   document.querySelector('.scrollable-element-to-top').scrollTop = 10000;

    //   document.querySelector('.js-element-scroll-to-top').addEventListener('click', function(e) {
    //     e.preventDefault();
    //     document.querySelector('.scrollable-element-to-top').scroll({ top: 0, left: 0, behavior: 'smooth' });
    //   });

    //   // element scroll by
    //   document.querySelector('.js-element-scroll-by').addEventListener('click', function(e) {
    //     e.preventDefault();
    //     document.querySelector('.scrollable-element-by').scrollBy({ top: 100, left: 0, behavior: 'smooth' });
    //   });
    // });
  

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
