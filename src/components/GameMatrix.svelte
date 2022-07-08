<script lang="ts">
	import type { Field } from '../types';
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
		border: 1px solid black;
	}

	.GameMatrix .row {
		display: flex;
		flex-direction: row;
	}
	.GameMatrix .col {
		width: 22px;
		height: 22px;
		border: 1px solid black;
	}
</style>