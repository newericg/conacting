<template>
  <b-container fluid>
      
    <transition name="component-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  
    
  </b-container>     
</template>

<script>

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

import Footer from './components/Footer'
import Nav from './components/Nav'

const components = {
    Footer,
    Nav,
  }
  export default {
    components
  }
</script>
