<script lang="ts">
	import Header from './components/Header.svelte';
	import Game from './components/Game.svelte';

	import './assets/style.css';
</script>


<main>
	<div>
		<Header />
	</div>

	<div>
		<Game />
	</div>
</main>


<style>
	main {
		position: absolute;
		z-index: 100;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		display: grid;
		grid-template-rows: 80px 1fr;
	}
</style>
