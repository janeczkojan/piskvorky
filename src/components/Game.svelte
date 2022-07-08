<script lang="ts">
	import GameMatrix from './GameMatrix.svelte';
	import ControlButton from './ControlButton.svelte';
	import { gameStatus, fields, winningRow } from '../store/stores';
</script>


<div class="Game">
	<div class="controls">
		<ControlButton />
	</div>

	<div class="matrix">
		{#if $gameStatus.started}
			{#if !$gameStatus.finished}
				<GameMatrix
					fields={$fields}
					winningFields={$winningRow}
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

	.Game .matrix {
		margin-top: 20px;
	}
</style>