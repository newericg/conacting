<template>
  <b-row>
      <Intro/>
      <Profile/> 
      <Experiences/> 
      <Abilities/>
			<Projects/>
			<Contact/>
  </b-row>
</template>

<script>

import Experiences from '@/components/Experiences'
import Abilities from '@/components/Abilities'
import Intro from '@/components/Intro'
import Profile from '@/components/Profile'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Nav from '@/components/Nav'


export default {
  components: {
    Experiences,
    Abilities,
    Intro,
		Profile,
		Projects,
		Contact,
		Nav,
    
  }}


</script>


<style>

@import url("//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap-glyphicons.css");

.profileback {
		background-color: rgb(255, 255, 255);
	}

	.bordaprofile {
		border-style: ridge;
		border-color: transparent;
		border-bottom-color: rgb(138, 136, 136);
		border-width: 1px;
	}

	.profilesize {
		height: 100%;
	}

	.contatosize{
		height: 600px;
	}

	.fontconfig {
		color: dimgray;
		font-family: 'Libre Franklin', sans-serif;
		font-size: 95%;
		text-align: justify;
	}

	.fontconfig1 {
		color: dimgray;
		font-family: 'Libre Franklin', sans-serif;
		font-size: 95%;
		
	}

	.titulosgeral {
		color: rgb(89, 109, 196);
		font-size: 250%
	} 

	.expback {
		background-color: rgb(218, 221, 221);
	}

	.titulos {

		color: rgb(89, 109, 196);
		font-size: 170%
	}

	.bordacar {
		border-style: ridge;
		border-color: transparent;
		border-top-color: rgb(202, 197, 191);
		border-width: 1px;
	}
  .abiliback{
	background-color: white;
  }

	.subtitulos{
		font-size: 130%;

	}

	.contatoback{

		background-color: rgb(48, 46, 46);
	}

</style>
