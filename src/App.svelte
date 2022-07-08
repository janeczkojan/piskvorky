<script lang="ts">
	import Header from './components/Header.svelte';
	import Game from './components/Game.svelte';

	import './assets/style.css';
	import leftImage from './assets/images/jude.png';
	import rightImage from './assets/images/nazi.svg';
</script>


<main>
	<div>
		<Header />
	</div>

	<div class="body">
		<div class="img-block">
			<img src={leftImage} alt="jude.png">
		</div>

		<div>
			<Game />
		</div>

		<div class="img-block">
			<img src={rightImage} alt="nazi.svg">
		</div>
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
		grid-template-rows: 100px 1fr;
	}

	main .body {
		display: grid;
		grid-template-columns: 450px 1fr 450px;
		padding-top: 30px;
		background-color: lightgray;
	}

	main .body .img-block:first-child {
		margin-left: 20px;
	}

	main .body .img-block:last-child {
		margin-right: 20px;
	}

	main .body .img-block img {
		height: 590px;
	}
</style>
