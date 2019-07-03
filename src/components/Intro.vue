<template>
	<b-col cols="12" class="textointro parallaxfundo">
		<b-row class="d-flex justify-content-center">
			<b-col cols="10" class="introsize d-flex align-items-end justify-content-center bordaintro pb-1">


				<span class="textonome">Eric G Sousa</span>


			</b-col>
		</b-row>
		<b-row>
			<b-col cols="12" class="textocurriculo introsize d-flex align-items-top justify-content-center mt-2">
				<span>Curriculo</span>
			</b-col>
		</b-row>
	</b-col>



</template>

<style>
	@import url('https://fonts.googleapis.com/css?family=Libre+Franklin');
	@import url('https://fonts.googleapis.com/css?family=ZCOOL+XiaoWei');

	.parallaxfundo{

		background-image: url('../assets/fundosite9.jpg');
		background-repeat: no-repeat;
		background-attachment: fixed;
		-webkit-background-size: 100%;
		-moz-background-size: 100%;
		-o-background-size: 100%;
		background-size: 100% 100%;
		-webkit-background-size: cover;
		-moz-background-size: cover;
		-o-background-size: cover;
		background-size: cover;

	}


	@media screen and (max-width: 600px) {
   .parallaxfundo {
        background-attachment: scroll; 
    }
}

	.introsize {
		height: 340px;
	}

	.textointro {
		color: aliceblue;
	}

	.textonome {
		font-size: 40px;
		font-family: 'Libre Franklin', sans-serif;


	}

	.textocurriculo {
		font-size: 20px;
		font-family: 'ZCOOL XiaoWei', serif;
	}

	.bordaintro {
		border-style: ridge;
		border-color: transparent;
		border-bottom-color: rgb(209, 204, 198);
		border-width: 1px;
	}
</style>