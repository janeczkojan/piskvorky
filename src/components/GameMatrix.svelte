<script lang="ts">
	import type { Field } from '../types';
	import GameField from './GameField.svelte';
	import { fieldsListToMap, fieldToStringKey } from '../utils/game';


	export let fields: Field[][];
	export let winningFields: Field[];


	$: winningFieldsMap = fieldsListToMap(winningFields);
	

	const isFieldWinning = (field: Field): boolean => {
		return !!(winningFieldsMap.get(fieldToStringKey(field)));
	};
</script>


<div class="GameMatrix">
	{#each fields as row}
		<div class="row">
			{#each row as col}
				<div class="col">
					<GameField
						field={col}
						isWinning={isFieldWinning(col)}
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