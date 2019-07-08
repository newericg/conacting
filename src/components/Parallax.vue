<template>
  <section>
    <v-parallax :src="require('../assets/plateia.png')" height="1000">
      <v-layout column align-center justify-center="" class="white--text">
        <img :src="require('../assets/LOGO3.png')" height="400">
        <h1 class="white--text mb-2 display-1 text-xs-center">ConActing</h1>
        <div class="subheading mb-3 text-xs-center">2019</div>
        <v-btn class="blue lighten-2" dark large href="/pre-made-themes">
          Get Started
        </v-btn>
      </v-layout>
    </v-parallax>
  </section>
</template>