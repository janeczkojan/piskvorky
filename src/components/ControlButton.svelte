<script>
	import { gameStatus } from '../store/stores';
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


<button class="ControlButton" on:click={onButtonClick}>
	{#if started && !finished}
		Konec
	{:else}
		Start
	{/if}
</button>


<style>
	.ControlButton {
		width: 100px;
		background-color: white;
		cursor: pointer;
		border: 2px solid rgb(117, 117, 117);
		font-size: 16px;
		font-weight: bold;
		color: rgb(117, 117, 117)
	}

	.ControlButton:hover {
		background-color: rgb(117, 117, 117);
		color: white;
	}

	.ControlButton:active {
		background-color: rgb(68, 68, 68);
		color: white;
	}
</style>