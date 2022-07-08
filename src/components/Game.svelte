<script lang="ts">
	import GameMatrix from './GameMatrix.svelte';
	import { gameStatus, fields, activePlayer } from '../store/stores';
	import { startGame, finishGame } from '../store/actions';


	$: started = $gameStatus.started;
	$: finished = $gameStatus.finished;


	const onButtonClick = () => {
		if (started && !finished) {
			finishGame();
		} else {
			startGame();
		}
	};
</script>


<div class="Game">
	<div class="controls">
		<button on:click={onButtonClick}>
			{#if started && !finished}
				Konec
			{:else}
				Start
			{/if}
		</button>
	</div>

	<div class="matrix">
		{#if started}
			{#if finished}
				<h2>Hra dokončena</h2>
			{:else}
				<GameMatrix
					fields={$fields}
				/>
			{/if}
		{/if}
	</div>
</div>


<style>
	.Game {
		display: grid;
		grid-template-rows: 50px 1fr;
	}

	.Game .controls,
	.Game .matrix {
		display: flex;
		justify-content: center;
	}

	.Game .controls button {
		width: 100px;
	}

	.Game .matrix {
		margin-top: 20px;
	}
</style>