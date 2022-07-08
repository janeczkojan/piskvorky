<script lang="ts">
	import type { Field, Player } from '../types';
	import { takeFieldByActivePlayer, changeActivePlayer } from '../store/actions';


	export let field: Field;


	const onClick = () => {
		takeFieldByActivePlayer(field);
	};
</script>


<div class="GameField" on:click={onClick}>
	<span>
		{#if field.player}
			{field.player.symbol}
		{/if}
	</span>
</div>


<style>
	.GameField {
		display: flex;
		width: 100%;
		height: 100%;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		font-size: 20px;
		text-transform: uppercase;
	}
</style>