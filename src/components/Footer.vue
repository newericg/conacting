<template>
    <b-row class="fundo1">


      
        <br>
        <br>
        <br>
        <b-col cols="12" class="d-flex justify-content-center letra pt-5">
            <h2>Faltam</h2>
        </b-col>
        <b-col cols="12" class="d-flex justify-content-center pb-2">
            <Countdown deadline="May 04, 2019"></Countdown>
        </b-col>
        <br>
        <br>
    </b-row>

                
            
        
    
</template>

<style>
  .fundo1 {
    background-color: #e8d2d5;
  }

  .letra {

    font-family: 'Pacifico', cursive;
  }

  
</style>

<script>
  import Countdown from 'vuejs-countdown'

    export default {
  components: { Countdown }
}
</script>
