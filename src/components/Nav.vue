<template>
	<b-col>
			<b-navbar :fixed="'top'" toggleable class="fontconfig navconfig1">
				<b-navbar-toggle target="nav_text_collapse" style="width:8%" />

				<b-collapse is-nav id="nav_text_collapse" style="font-size:120%;">
					<b-navbar-nav>
						<b-nav-item href="Home">
							<strong> Profile </strong></b-nav-item>
					</b-navbar-nav>
					<b-navbar-nav>
						<b-nav-item href="Lista">Experiências</b-nav-item>
					</b-navbar-nav>
					<b-navbar-nav>
						<b-nav-item href="Confirmar">Habilidades</b-nav-item>
					</b-navbar-nav>
					<b-navbar-nav>
						<b-nav-item href="Album">Projetos</b-nav-item>
					</b-navbar-nav>
					<b-navbar-nav>
						<b-nav-item href="Album">Contato</b-nav-item>
					</b-navbar-nav>
				</b-collapse>
			</b-navbar>
	</b-col>
</template>

	<style>
	
	.navconfig1{
		
		background-color: rgba(255, 255, 255, 0.774);
	}

	</style>
	
