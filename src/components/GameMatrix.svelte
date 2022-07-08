<script lang="ts">
	import type { Field, Player } from '../types';
	import GameField from './GameField.svelte';


	export let fields: Field[][];
</script>


<div class="GameMatrix">
	{#each fields as row}
		<div class="row">
			{#each row as col}
				<div class="col">
					<GameField
						field={col}
					/>
				</div>
			{/each}
		</div>
	{/each}
</div>


<style>
	.GameMatrix {
		display: flex;
		flex-direction: column;
	}

	.GameMatrix .row {
		display: flex;
		flex-direction: row;
		border-top: 1px solid black;
	}

	.GameMatrix .row:last-child {
		border-bottom: 1px solid black;
	}

	.GameMatrix .col {
		width: 22px;
		height: 22px;
		border-left: 1px solid black;
	}

	.GameMatrix .col:last-child {
		border-right: 1px solid black;
	}
</style>