<template>
  <v-container m-0 p-0>
    <v-flex class="hidden-md-and-up">
      <v-toolbar app dark class="hidden-md-and-up">
        <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
        <v-spacer></v-spacer>
        <router-link to="home">
          <img :src="require('../assets/LOGO2.png')" height="200">
        </router-link>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-navigation-drawer dark app v-model="drawer" temporary>
        <v-layout row mt-4 column>
          <v-flex d-flex>
            <v-btn flat href="#sobre">
              <span class="mr-2">Sobre</span>
            </v-btn>
          </v-flex>
          <v-flex>
            <v-flex d-flex>
              <v-btn flat href="">
                <span class="mr-2">Inscrição</span>
              </v-btn>
            </v-flex>
            <v-flex d-flex>
              <v-btn flat href="#programacao">
                <span class="mr-2">Programação</span>
              </v-btn>
            </v-flex>
            <v-flex d-flex>
              <v-btn flat href="">
                <span class="mr-2">Local</span>
              </v-btn>
            </v-flex>
            <v-flex d-flex>
              <v-btn flat href="#contato">
                <span class="mr-2">Contato</span>
              </v-btn>
            </v-flex>
          </v-flex>
        </v-layout>

      </v-navigation-drawer>
    </v-flex>
    <v-toolbar app dark class="hidden-sm-and-down">
      <router-link to="/">
        <img :src="require('../assets/LOGO2.png')" height="200">
      </router-link>
      <v-spacer></v-spacer>
      <v-btn flat class="js-scroll-by">
        <span class="mr-2">Sobre</span>
      </v-btn>
      <v-btn flat class="js-scroll-by">
        <span class="mr-2">Inscrição</span>
      </v-btn>

      <v-btn flat href="#programacao">
        <span class="mr-2">Programação</span>
      </v-btn>
      <v-btn flat href="">
        <span class="mr-2">Local</span>
      </v-btn>
      <v-btn flat class="js-scroll-to-bottom">
        <span class="mr-2">Contato</span>
      </v-btn>

    </v-toolbar>
    <v-flex class="w-100">
      <img :src="require('../assets/HEADER4.jpg')" class="w-100">
    </v-flex>
    <v-layout id="sobre" row mt-4 mb-4 justify-center class="white--text; corfundo">
      <v-flex d-flex sm10 xs8 text-center justify-center>
        <v-img :src="require('../assets/LOGO11.png')" max-width="700px"></v-img>
      </v-flex>
      <v-flex mt-4 pt-4 d-flex sm8 xs9 class="texto">
        <h4>
          Entre os dias 3 e 4 de maio de 2019 será realizada a sexta edição da CryptoRave, evento anual que reúne, em
          36
          horas, diversas atividades sobre segurança, criptografia, hacking, anonimato, privacidade e liberdade na
          rede.
          <br>
          A CryptoRave é aberta e gratuita - basta inscrição online - e será realizada na cidade de São Paulo.
          <br>
          Inspirada
          em uma ação global, descentralizada para disseminar e democratizar o conhecimento e conceitos básicos de
          criptografia e software livre, o evento teve início em 2014, como reação à divulgação de informações que
          confirmaram a ação de governos para manter a população mundial sob vigilância e monitoramente constante.
        </h4>
      </v-flex>
    </v-layout>
    <v-layout id="programacao" row mt-4 mb-4 justify-center class="white--text; corfundo1">
      <v-flex d-flex sm10 xs8 text-center>
        <h1>Programação</h1>
      </v-flex>
      <v-flex pt-3 mt-4 d-flex sm8 xs9 class="texto">
        <h4>
          A versão 0.1 da programação da CryptoRave 2019 já está disponível: agenda.cryptorave.org!

          A CR2019 começará às 19 horas do dia 3 de maio de 2019 e vai até às 22h do dia 4 de maio de 2019. Nessa edição
          o after party da CryptoRave será na trackers conjuntamente com o projeto Dispersão e Pure Data, a partir das
          23h!

          Baixe o APP da programação para Android.
          A versão 0.1 da programação da CryptoRave 2019 já está disponível: agenda.cryptorave.org! A CR2019 começará às
          19 horas do dia 3 de maio de 2019 e vai até às 22h do dia 4 de maio de 2019. Nessa edição o after party da
          CryptoRave será na trackers conjuntamente com o projeto Dispersão e Pure Data, a partir das 23h! Baixe o APP
          da programação para Android.
          A versão 0.1 da programação da CryptoRave 2019 já está disponível: agenda.cryptorave.org! A CR2019 começará às
          19 horas do dia 3 de maio de 2019 e vai até às 22h do dia 4 de maio de 2019. Nessa edição o after party da
          CryptoRave será na trackers conjuntamente com o projeto Dispersão e Pure Data, a partir das 23h! Baixe o APP
          da programação para Android.
          A versão 0.1 da programação da CryptoRave 2019 já está disponível: agenda.cryptorave.org! A CR2019 começará às
          19 horas do dia 3 de maio de 2019 e vai até às 22h do dia 4 de maio de 2019. Nessa edição o after party da
          CryptoRave será na trackers conjuntamente com o projeto Dispersão e Pure Data, a partir das 23h! Baixe o APP
          da programação para Android.
        </h4>
      </v-flex>
      <v-parallax
    dark
    :src="require('../assets/plateia.png')"
  >
    <v-layout
      align-center
      column
      justify-center
    >
      <h1 class="display-2 font-weight-thin mb-3">ConActing</h1>
      <h4 class="subheading">2019</h4>
    </v-layout>
  </v-parallax>


    </v-layout>
  </v-container>
</template>

<style>
  .fundo1 {
    background-color: rgb(41, 40, 40);
  }

  .fundo {
    background-color: black;
  }
</style>