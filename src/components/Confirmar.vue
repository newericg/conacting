<template>
<b-row>
	<b-col class="fundo1 pt-5">
		<b-row class="d-flex justify-content-center align-items-center fundo1 pt-5 pb-5">
			<b-col>
			<h5 class="texto">
				Clique no ícone para confirmar presença!
			</h5>
			</b-col>
		</b-row>
		<b-container class="bv-example-row pt-5 col-10">
      <b-row>
        <b-col cols="4" class="d-flex justify-content-center">
          <b-img :src="require('../assets/leftflower.png')" fluid alt="flor1" style="max-height: 12rem;" />
        </b-col>
        <b-col cols="4" class="letra d-flex align-items-center justify-content-center">
          
        <div class="d-flex justify-content-center pt-5" style="height:350px">
          
            <a href="https://api.whatsapp.com/send?phone=5519982733169&text=Olá! Gostaria de confirmar presença no casamento.">
					<img contain :src="require('../assets/zap3.png')" height="100">
			</a>
        </div>
        </b-col>
        <b-col cols="4" class="d-flex justify-content-center">
          <b-img :src="require('../assets/rightflower.png')" fluid alt="flor1" style="max-height: 12rem;" />
        </b-col>

      </b-row>
    </b-container>




		
	</b-col>
	</b-row>
</template>

<style>

.texto {
		text-align: center;
		font-style: italic;
		font-family: Arial, Helvetica, sans-serif;
		color: rgb(73, 72, 72);

	}

</style>
