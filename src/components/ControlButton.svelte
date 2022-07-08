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
	}
</style>